import React, {Component} from 'react'
import './styles/style.css'
class ChatroomList extends Component {
	render(){
		return(
			<div class="chats__list">
				<div class="chats__chat">
					<a href="chat.html">
					<div class="chat__content">
						<img src={this.props.currentUser.profile_img} />
						<div class="chat__privew">
							<h3 class="chat__user">Room Title</h3>
							<span class="chat__last-message">Lastest Message</span>
							</div>
						</div>
						<span class="chat__date-time">12:25</span>
					</a>
				</div>
				<div class="chats__chat">
					<a href="chat.html">
					<div class="chat__content">
						<img src={this.props.currentUser.profile_img} />
						<div class="chat__privew">
							<h3 class="chat__user">Room Title</h3>
							<span class="chat__last-message">Lastest Message</span>
							</div>
						</div>
						<span class="chat__date-time">12:25</span>
					</a>
				</div>
				<div class="chats__chat">
					<a href="chat.html">
					<div class="chat__content">
						<img src={this.props.currentUser.profile_img} />
						<div class="chat__privew">
							<h3 class="chat__user">Room Title</h3>
							<span class="chat__last-message">Lastest Message</span>
							</div>
						</div>
						<span class="chat__date-time">12:25</span>
					</a>
				</div>
			</div>
		)
	}
}

export default ChatroomList