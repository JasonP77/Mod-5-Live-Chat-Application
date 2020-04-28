import React, {Component} from 'react'
import SearchBar from './SearchBar'
import { tsMethodSignature, throwStatement } from '@babel/types'
import SearchUserListContainer from './SearchUserListContainer'
import TopMenuBar from './TopMenuBar'
import ChatappFooter from './ChatappFooter'
class AddFriend extends Component {
	constructor(){
		super()
		this.state = {
			allUser: [],
			username: ""
		}
	}

	componentDidMount(){
		fetch("http://localhost:3000/users")
		.then(response => response.json())
		.then(allUserData => (
			this.setState({
				allUser: allUserData
			})
		))
	}

	searchTerm = (e) => {
		this.setState({
			[e.target.name]: e.target.value
		})
	}

	addFriend = (e) => {
		console.log(e.target.id)
		fetch("http://localhost:3000/friendships", {
			method: "POST",
			headers: {
				'Content-Type': 'application/json',
				Accept: 'application/json'
			},
			body: JSON.stringify({
				user_id: this.props.currentUser.id,
				friend_id: e.target.id
			})
		})
		.then(response => response.json())
		.then(data => this.props.updateFriendList(this.state.allUser.find(user => user.id === data.friend_id)))
	}

	
	render(){

		const filteredUser = this.state.allUser.filter(user => user.username.includes(this.state.username) && user.id !== this.props.currentUser.id)

		
		// console.log(filteredUser.includes(this.props.currentUser.friends))
		return(
			<div>
				<TopMenuBar friends={this.props.friends}/>
				<SearchBar searchTerm={this.searchTerm}/>
				<SearchUserListContainer addFriend={this.addFriend} filteredUser={filteredUser}/>
				<ChatappFooter currentUser={this.props.currentUser}/>
			</div>
		)
	}
}

export default AddFriend;