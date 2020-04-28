import React, {Component} from 'react'
import './styles/chatroom.css'
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import MessageInputBox from './MessageInputBox'
class Chatroom extends Component {
	render(){
		return(
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
        <a href="/chatapp">
          <ArrowBackIosIcon />
        </a>
      </div>
      <div class="header__column">
        <span class="header__text">Friend's Name</span>
      </div>
      <div class="header__column">
        <i class="fa fa-search"></i>
        <i class="fa fa-bars"></i>
      </div>
    </div>
  </header>
  <main class="chat">
    <div class="date-divider">
      
    </div>
        <div class="chat__message chat__message-from-me">
          <span class="chat__message-time">Time Message was sent</span>
          <span class="chat__message-body">Good Morning!</span>
        </div>

        <div class="chat__message chat__message-to-me">
          <img src="https://pm1.narvii.com/7247/9a173b0bfbd2a1654d589cb855dfa47b218df818r1-1177-1657v2_hq.jpg" class="chat__message-avaatar" />
          <div class="chat__message-center">
            <h3 class="chat__message-username">Friend's name</h3>
            <span class="chat__message-body">I need more sleep</span>
          </div>

          <span class="chat__message-time">Time message was sent</span>
        </div>

  </main>
        <MessageInputBox/>
			</div>
		)
	}
}

export default Chatroom;