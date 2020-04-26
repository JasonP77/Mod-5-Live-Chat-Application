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
          currentUser: json
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
    console.log(this.state.currentUser)
        console.log(this.state.friends)
    return (
    
      <div className="App">
        <NavBar logged_in={this.state.currentUser} updateCurrentUser={this.updateCurrentUser}/>
        <Route exact path="/homepage" component={HomePageContainer}/>
        <Route exact path="/feature" component={FeaturePage} />

        <Route exact path="/contact" component={ContactPage}/>

        <Route exact path="/chatapp" render={ () => (
          this.state.currentUser ?
        <ChatApp
        currentUser={this.state.currentUser}
        friends={this.state.friends}
        /> : <Redirect to="/homepage"/>
        )}/>

        <Route exact path="/login" render={ () => (
        this.state.currentUser ? 
        <Redirect to="/homepage"/> :
        <LoginForm updateCurrentUser={this.updateCurrentUser}
    
        />)}/>

        <Route exact path="/signup" render={ () => (
          this.state.currentUser ?
          <Redirect to="/homepage"/> :
        <SignupForm updateCurrentUser={this.updateCurrentUser}/>)} />
        <Route exact path="/add" render={() => (
          <AddFriend 
          currentUser={this.state.currentUser}
          // friends={this.state.friends}
          updateFriendList={this.updateFriendList}
          />
        )}/>

      </div>
    ); 
  }
}

export default App;
