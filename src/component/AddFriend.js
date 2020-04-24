import React, {Component} from 'react'
import SearchBar from './SearchBar'
import { tsMethodSignature, throwStatement } from '@babel/types'
import SearchUserListContainer from './SearchUserListContainer'
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

	
	render(){
		const filteredUser = this.state.allUser.filter(user => user.username.includes(this.state.username))
		return(
			<div>
				<SearchBar searchTerm={this.searchTerm}/>
				<SearchUserListContainer filteredUser={filteredUser}/>
			</div>
		)
	}
}

export default AddFriend;