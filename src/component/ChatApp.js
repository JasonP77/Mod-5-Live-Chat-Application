import React, {Component} from 'react'
import TopMenuBar from './TopMenuBar'
import SearchBar from './SearchBar'
import MyProfile from './MyProfile'
import FriendsContainer from './FriendsContainer'

class ChatApp extends Component {

	render(){
		const {currentUser} = this.props;
		console.log(currentUser)
		return(
			<div>
				<TopMenuBar />
				<SearchBar />
				<MyProfile 
				currentUser={currentUser}
				/>
				<FriendsContainer friends={currentUser.friends}/>
			</div>
		)
	}
}

export default ChatApp;