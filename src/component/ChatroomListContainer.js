import React, {Component} from 'react'
import ChatroomList from './ChatroomList'
class ChatroomListContainer extends Component {


	renderChatRoom = () => {
		return this.props.allRooms.map(room => <ChatroomList key={room.id}
			currentUser={this.props.currentUser}
			room={room}
		/>)
	}
	render(){
		return(
			<div>
			{this.renderChatRoom()}
			</div>
		)
	}
}

export default ChatroomListContainer;