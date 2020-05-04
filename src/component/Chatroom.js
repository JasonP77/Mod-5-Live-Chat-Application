import React, {Component} from 'react'
import './styles/chatroom.css'
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import MessageInputBox from './MessageInputBox'
import RoomWebSocket from './RoomWebSocket'
import MessageBox from './MessageBox'
import IconButton from '@material-ui/core/IconButton';
import {Redirect} from 'react-router-dom'

class Chatroom extends Component {
  constructor(){
    super()
    this.state = {
      newMessage: "",
      friend: ""
    }
  }

  newMessageHandler = (e) => {
    this.setState({
      newMessage: e.target.value
    })
  }

  enterMessage = (e) => {
    e.preventDefault();
    fetch("http://localhost:3000/messages", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      },
      body: JSON.stringify({
        user_id: this.props.currentUser.id,
        chatroom_id: this.props.chatroom.id,
        content: this.state.newMessage
      })
    })
    this.setState({newMessage: ""})
    
  }

  friendName = () => {
  return this.props.currentRoom.users.find(u => u.id !== this.props.currentUser.id)?.username
  }

  backToPage = () => {
    window.location.href="http://localhost:3001/chatroom"
  }
  

	render(){
    // const friendName = this.props.currentRoom.users.find(f => f.user_id !== this.props.currentUser.id).username
    // console.log(this.props.currentRoom.users.find(f => f.user_id !== this.props.currentUser.id))
    // console.log(this.props.currentUser.username)
		return(
      this.props.chatroom ? 
			<div>
				<header class= "top-header chat-header">
    <div class="header__top">
      <div class="header__column">
      </div>
      <div class="header__column">
        <span class="header_time">current time</span>
      </div>
      <div class="header__column">
      </div>
    </div>
    <div class="header__bottom">
      <div class="header__column">
        <IconButton onClick={this.backToPage}>
          <ArrowBackIosIcon />
        </IconButton>
      </div>
      <div class="header__column">
        <span class="header__text">{this.friendName()}</span>
      </div>
      <div class="header__column">
        <i class="fa fa-search"></i>
        <i class="fa fa-bars"></i>
      </div>
    </div>
  </header>
    
        <MessageBox 
        currentUser={this.props.currentUser}
        currentRoom={this.props.currentRoom}
        />

        <MessageInputBox 
        newMessageHandler={this.newMessageHandler}
        enterMessage={this.enterMessage}
        input={this.state.newMessage}
        />
        <RoomWebSocket 
        cableApp={this.props.cableApp}
        data-updatedApp={this.props['data-updatedApp']}
        getRoomData={this.props.getRoomData}
        />
			</div>
       :
       null
		)
	}
}

export default Chatroom;