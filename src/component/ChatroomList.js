import React, {Component} from 'react'
import './styles/style.css'
import ChatappFooter from './ChatappFooter'
class ChatroomList extends Component {
	render(){
		return(
			<div class="chats__list">
				<div class="chats__chat">
					<a href="/room/1">
					<div class="chat__content">
						<img src={this.props.currentUser.profile_img} />
						<div class="chat__privew">
							<h3 class="chat__user">{this.props.room.title}</h3>
							<span class="chat__last-message">Lastest Message</span>
							</div>
						</div>
						<span class="chat__date-time">12:25</span>
					</a>
				</div>
				<ChatappFooter currentUser={this.props.currentUser}/>
			</div>
		)
	}
}

export default ChatroomList