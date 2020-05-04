import React, {Component} from 'react'
import ChatroomList from './ChatroomList'
class ChatroomListContainer extends Component {
	constructor(){
		super()
		this.state = {
			allUsers:[]
		}
	}

	componentDidMount(){
		fetch("http://localhost:3000/users")
		.then(response => response.json())
		.then(allUsersData => this.setState({allUsers: allUsersData}))
	}

	renderChatRoom = () => {
		return this.props.allRooms.map(room => <ChatroomList key={room.id}
			currentUser={this.props.currentUser}
			room={room}
			allUsers={this.state.allUsers}
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