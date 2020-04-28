import React, {Component} from 'react'
import TopMenuBar from './TopMenuBar'
import SearchBar from './SearchBar'
import MyProfile from './MyProfile'
import FriendsContainer from './FriendsContainer'
import { thisExpression } from '@babel/types'
import ChatappFooter from './ChatappFooter'
import { Route, Redirect } from 'react-router-dom'
import ChatroomListContainer from './ChatroomListContainer'

class ChatApp extends Component {
	
	constructor(){
		super()
		this.state ={
			username: ""
		}
	}
	searchTerm = (e) => {
		this.setState({
			[e.target.name]: e.target.value
		})
	}
	render(){
		const filteredFriend = this.props.friends.filter(friend => friend.username.includes(this.state.username))
		
		return(
			<div>
				<TopMenuBar friends={filteredFriend}/>
				<SearchBar searchTerm={this.searchTerm}/>
				<MyProfile 
				currentUser={this.props.currentUser}
				/>
				<FriendsContainer  friends={filteredFriend}/>
				<ChatappFooter currentUser={this.props.currentUser}/>
			</div>
		)
	}
}

export default ChatApp;