import React, {Component} from 'react'
import { throwStatement } from '@babel/types'
import Message from './Message'

class MessageBox extends Component {

	renderMessages = () => {
    return this.props.currentRoom.messages.map(message => <Message key={message.id} message={message} currentUser={this.props.currentUser}/>)
  }

	render(){
		// console.log(this.props.message.content)
		return(
			// this.renderMessages()
			<main class="chat">

				{this.renderMessages()}
			</main>

			)
	}
}

export default MessageBox;