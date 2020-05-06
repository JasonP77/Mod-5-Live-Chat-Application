import React, {Component} from 'react'
import './styles/style.css'
import ChatappFooter from './ChatappFooter'
class ChatroomList extends Component {
	
	
	render(){
		// const latestMessage = this.props.room.messages[this.props.room.messages.length -1].content
		// let message
		// if(this.props.room && this.props.room.messages[0]){
		// 	message = this.props.room.messages[0].content
		// } else {
		// 	message = "no messages"
		// }


		let title;
		let image;
		if(this.props.room.user_id === this.props.currentUser.id){
			title = `Conversation With: ${this.props.allUsers?.find(user => user.id === this.props.room.friend_id)?.username}`
			image = this.props.allUsers?.find(user => user.id === this.props.room.friend_id)?.profile_img
		} else {
			title = `Conversation With: ${this.props.allUsers?.find(user => user.id === this.props.room.user_id)?.username}`
			image = this.props.allUsers?.find(user => user.id === this.props.room.user_id)?.profile_img
		}

		return(
			<div class="chats__list">
				<div class="chats__chat">
					<a href={`/room/${this.props.room.id}`}>
					<div class="chat__content">
						<img src={image} />
						<div class="chat__privew">
							<h3 class="chat__user">{title}</h3>
							<span class="chat__last-message">{null}</span>
							</div>
						</div>
						<span class="chat__date-time">12:25</span>
					</a>
				</div>
				<ChatappFooter 
				currentUser={this.props.currentUser}
				updateCurrentUser={this.props.updateCurrentUser}
				/>
			</div>
		)
	}
}

export default ChatroomList