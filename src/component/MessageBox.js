import React, {Component} from 'react'
import { throwStatement } from '@babel/types'
import Message from './Message'

class MessageBox extends Component {
	componentDidUpdate() {
		window.scrollTo(0,document.body.scrollHeight);
}
	renderMessages = () => {
    return this.props.currentRoom.messages.map(message => <Message currentRoom={this.props.currentRoom} key={message.id} message={message} currentUser={this.props.currentUser}/>)
	}


	render(){
		
		return(
			
			<main class="chat" id="messages">

				{this.renderMessages()}

			</main>

			)
	}
}

export default MessageBox;