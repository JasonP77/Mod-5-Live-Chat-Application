import React, {Component} from 'react';
import NavBar from './component/NavBar'
import { Route, Redirect } from 'react-router-dom'
import FeaturePage from './component/FeaturePage'
import HomePageContainer from './component/HomePageContainer'
import ContactPage from './component/ContactPage'
import LoginForm from './component/LoginForm'
import SignupForm from './component/SignupForm'
import ChatApp from './component/ChatApp'
import AddFriend from './component/AddFriend'
import Chatroom from './component/Chatroom'
import ChatroomListContainer from './component/ChatroomListContainer'
import TopMenuBar from './component/TopMenuBar'
import EditProfile from './component/EditProfile'
import BeforeEdit from './component/BeforeEdit'

class App extends Component {
  constructor(){
    super()
    this.state = {
      currentUser: "",
      friends: []
    }
  }

  componentDidMount(){
    if(localStorage.getItem("jwt")){
      console.log(this.state.currentUser, this.state.friends)
      fetch("http://localhost:3000/chatapp", {
        headers: {
          "Authentication": localStorage.getItem('jwt')
        }
      })
      .then(response => response.json())
      .then(json => {
        this.setState({
          currentUser: json,
          friends: json.friends
        })
      })

    }
  }

  //// AFTER I HIT LOGIN BUTTON componentdidmount being called first so currentUser is null, and then updatedCurrentUser() is called and it updates STATE and if i refresh the page it calls componentdidmount again but no updateCurrentUser() that's why it has correct value of this.state.friends after refreshing
  updateCurrentUser = (user) => {
    console.log(this.state.currentUser)
    if(user !== null){
    this.setState({currentUser: user, friends: user.friends})
    } else {
      this.setState({currentUser: user})
    }
  }

  updateFriendList = (friendObj) => {
    this.setState({friends: [...this.state.friends, friendObj]})
  }
  render(){
    // console.log(this.state.currentUser)
    //     console.log(this.state.friends)
    return (
    
      <div className="App">
        
        <Route exact path="/homepage" render={() => (
          <div>
          <NavBar logged_in={this.state.currentUser} updateCurrentUser={this.updateCurrentUser}/>
          < HomePageContainer/>
          </div>
        )}/>
        <Route exact path="/feature" render={() => (
           <div>
           <NavBar logged_in={this.state.currentUser} updateCurrentUser={this.updateCurrentUser}/>
           < FeaturePage/>
           </div>
        )} />

        <Route exact path="/contact" render={() => (
           <div>
           <NavBar logged_in={this.state.currentUser} updateCurrentUser={this.updateCurrentUser}/>
           < ContactPage/>
           </div>
        )}/>

        <Route exact path="/chatapp" render={ () => (
          this.state.currentUser ?
          <div>
        <ChatApp
        currentUser={this.state.currentUser}
        friends={this.state.friends}
        /> 
        </div>
        : <Redirect to="/homepage"/>
        )}/>

        <Route exact path="/login" render={ () => (
         
        this.state.currentUser ? 
        <Redirect to="/homepage"/> :
        <div>
          <NavBar logged_in={this.state.currentUser} updateCurrentUser={this.updateCurrentUser}/>
          <LoginForm updateCurrentUser={this.updateCurrentUser}/>
        </div>
        )}/>

        <Route exact path="/signup" render={ () => (
          this.state.currentUser ?
          <Redirect to="/homepage"/> :
          <div>
            <NavBar logged_in={this.state.currentUser} updateCurrentUser={this.updateCurrentUser}/>
            <SignupForm updateCurrentUser={this.updateCurrentUser}/>
        </div>
        )} />
        <Route exact path="/add" render={() => (
          <div>
          <AddFriend 
          currentUser={this.state.currentUser}
          friends={this.state.friends}
          // friends={this.state.friends}
          updateFriendList={this.updateFriendList}
          />
          </div>
        )}/>
        <Route exact path="/chatroom/" render={() => (
          <ChatroomListContainer currentUser={this.state.currentUser}/>
        )}/>
        

        <Route exact path="/edit/:id" render={() => (
          <EditProfile 
          currentUser={this.state.currentUser}
          friends={this.state.friends}
          />
        )}/>

        {/* <Route exact path="/confirm_password" render={() => (
          <BeforeEdit currentUser={this.state.currentUser}/>
        )}/> */}
      </div>
    ); 
  }
}

export default App;
