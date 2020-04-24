import React, {Component} from 'react'
import TopMenuBar from './TopMenuBar'
import SearchBar from './SearchBar'
import MyProfile from './MyProfile'
import FriendsContainer from './FriendsContainer'
import { thisExpression } from '@babel/types'

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
		const filteredFriend = this.props.currentUser.friends.filter(friend => friend.username.includes(this.state.username))
		
		return(
			<div>
				<TopMenuBar friends={this.props.currentUser.friends}/>
				<SearchBar searchTerm={this.searchTerm}/>
				<MyProfile 
				currentUser={this.props.currentUser}
				/>
				<FriendsContainer  friends={filteredFriend}/>
			</div>
		)
	}
}

export default ChatApp;