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
      friends: [],
      username: "",
      profile_img: "",
      bio: "",
      allRooms: [],
      currentRoom: {
        room: {},
        users: [],
        messages: []
      }
    }
  }

  componentDidMount(){
    if(localStorage.getItem("jwt")){
      fetch("http://localhost:3000/chatapp", {
        headers: {
          "Authentication": localStorage.getItem('jwt')
        }
      })
      .then(response => response.json())
      .then(json => {
        this.setState({
          currentUser: json,
          friends: json.friends,
          username: json.username,
          bio: json.bio,
          profile_img: json.profile_img,
          allRooms: json.chatrooms
        })
      }
      )

    }
  }


  updateCurrentUser = (user) => {
    console.log(this.state.currentUser)
    if(user !== null){
    this.setState({currentUser: user, friends: user.friends, username: user.username, bio: user.bio, profile_img: user.profile_img, allRooms: user.chatrooms})
    } else {
      this.setState({currentUser: user})
    }
  }

  updateProfileImg = (profile) => {
    this.setState({username: profile.username, bio: profile.bio, profile_img: profile.profile_img})
  }

  updateFriendList = (friendObj) => {
    this.setState({friends: [...this.state.friends, friendObj]})
  }

  getRoomData =(id) => {
    fetch(`http://localhost:3000/chatrooms/${id}`)
    .then(response => response.json())
    .then(result => {
      this.setState({
        currentRoom: {
          room: result,
          users: result.users,
          messages: result.messages
        }
      })
    })
  }

  updateAppStateRoom = (newRoom) => {
    this.setState({
      currentRoom: {
        room: newRoom.room,
        users: newRoom.users,
        messages: newRoom.messages
      }
    })
  }

  createNewRoom = (friendObj) => {
    let foundRoom = this.state.allRooms.find(room => room.user_id === this.state.currentUser.id && room.friend_id === friendObj.id)

    if(foundRoom){
      return window.location.href=`/room/${foundRoom.id}`
  } else {
    fetch("http://localhost:3000/chatrooms", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify({
        user_id: this.state.currentUser.id,
        friend_id: friendObj.id,
        title: `To: ${friendObj.username}`
      })
    })
    .then(response => response.json())
    .then(newRoom => this.setState({allRooms: [...this.state.allRooms, newRoom]}))
  }
  
    
  }





  render(){
    
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
        username={this.state.username}
        bio={this.state.bio}
        profile_img={this.state.profile_img}
        createNewRoom={this.createNewRoom}
        updateCurrentUser={this.updateCurrentUser}
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
          this.state.currentUser ? 
          <div>
          <AddFriend 
          currentUser={this.state.currentUser}
          friends={this.state.friends}
          // friends={this.state.friends}
          updateFriendList={this.updateFriendList}
          updateCurrentUser={this.updateCurrentUser}
          />
          </div> : <Redirect to="/homepage"/>
        )}/>
        <Route exact path="/chatroom/" render={() => (
          <ChatroomListContainer 
          currentUser={this.state.currentUser}
          allRooms={this.state.allRooms}
          friends= {this.state.friends}
          updateCurrentUser={this.updateCurrentUser}
          />
        )}/>

        <Route exact path="/room/:id" render={ (props) => 
        
        {
          let chatroomId = parseInt(props.match.params.id)
          let selectedChatroom = this.state.allRooms.find(room => room.id === chatroomId)
          
          return <Chatroom 
          {...props}
          cableApp={this.props.cableApp}
          data-updatedApp={this.updateAppStateRoom}
          getRoomData={this.getRoomData}
          currentUser={this.state.currentUser}
          chatroom={selectedChatroom}
          currentRoom={this.state.currentRoom}
          /> 
           
        }}/>
        

        <Route exact path="/edit/:id" render={() => (
          <EditProfile 
          currentUser={this.state.currentUser}
          friends={this.state.friends}
          username={this.state.username}
          bio={this.state.bio}
          profile_img={this.state.profile_img}
          updateProfileImg={this.updateProfileImg}
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
