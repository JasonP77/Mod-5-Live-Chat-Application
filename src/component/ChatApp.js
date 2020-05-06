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
				username={this.props.username}
				bio={this.props.bio}
				profile_img={this.props.profile_img}
				/>
				<FriendsContainer  friends={filteredFriend}
				createNewRoom={this.props.createNewRoom}
				/>
				<ChatappFooter 
				currentUser={this.props.currentUser}
				updateCurrentUser={this.props.updateCurrentUser}
				/>
			</div>
		)
	}
}

export default ChatApp;