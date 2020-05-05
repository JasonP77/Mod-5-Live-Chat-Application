import React, {Component} from 'react'
import { throwStatement } from '@babel/types'
import Message from './Message'

class MessageBox extends Component {
	componentDidUpdate() {
		// let messageDiv = document.getElementById('messages')
		// messageDiv.scrollIntoView(false);
		window.scrollTo(0,document.body.scrollHeight);
}
	renderMessages = () => {
    return this.props.currentRoom.messages.map(message => <Message currentRoom={this.props.currentRoom} key={message.id} message={message} currentUser={this.props.currentUser}/>)
	}


	render(){
		// console.log(this.props.message.content)
		return(
			// this.renderMessages()
			<main class="chat" id="messages">

				{this.renderMessages()}

			</main>

			)
	}
}

export default MessageBox;