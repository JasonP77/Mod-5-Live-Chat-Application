import React, {Component} from 'react'

class Message extends Component {

	friendImage = () => {
		return this.props.currentRoom.users.find(u => u.id !== this.props.currentUser.id)?.profile_img
		}

	friendName = () => {
		return this.props.currentRoom.users.find(u => u.id !== this.props.currentUser.id)?.username
		}



	render(){
		
		return(
				this.props.message.user_id === this.props.currentUser.id ?
			<div>
			<div class="date-divider">
				
				</div>
						<div class="chat__message chat__message-from-me">
							<span class="chat__message-time">{this.props.message.time}</span>
							<span class="chat__message-body">{this.props.message.content}</span>
						</div> 
		</div> :
			<div class="chat__message chat__message-to-me">
			<img src={this.friendImage()} class="chat__message-avaatar" />
			<div class="chat__message-center">
				<h3 class="chat__message-username">{this.friendName()}</h3>
				<span class="chat__message-body">{this.props.message.content}</span>
			</div>

			<span class="chat__message-time">{this.props.message.time}</span>
	</div>
		)
	}
}

export default Message;