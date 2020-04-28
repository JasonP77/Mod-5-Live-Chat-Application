import React, {Component} from 'react'
import ChatroomList from './ChatroomList'
class ChatroomListContainer extends Component {
	render(){
		return(
			<div>
			<ChatroomList currentUser={this.props.currentUser}/>
			</div>
		)
	}
}

export default ChatroomListContainer;