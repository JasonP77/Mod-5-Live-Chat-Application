import React, {Component} from 'react'

class Message extends Component {
	render(){
		return(
				this.props.message.user_id === this.props.currentUser.id ?
			<div>
			<div class="date-divider">
				
				</div>
						<div class="chat__message chat__message-from-me">
							<span class="chat__message-time">Time Message was sent</span>
							<span class="chat__message-body">{this.props.message.content}</span>
						</div> 
		</div> :
			<div class="chat__message chat__message-to-me">
			<img src="https://pm1.narvii.com/7247/9a173b0bfbd2a1654d589cb855dfa47b218df818r1-1177-1657v2_hq.jpg" class="chat__message-avaatar" />
			<div class="chat__message-center">
				<h3 class="chat__message-username">Friend's name</h3>
				<span class="chat__message-body">{this.props.message.content}</span>
			</div>

			<span class="chat__message-time">Time message was sent</span>
	</div>
		)
	}
}

export default Message;