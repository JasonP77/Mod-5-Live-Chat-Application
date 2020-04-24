import React, {Component} from 'react'
import TopMenuBar from './TopMenuBar'
import SearchBar from './SearchBar'
import MyProfile from './MyProfile'
import FriendsContainer from './FriendsContainer'
import { thisExpression } from '@babel/types'

class ChatApp extends Component {
	render(){
		// console.log(this.state.currentUser.friends)
		// const {currentUser} = this.props;
		return(
			<div>
				<TopMenuBar friends={this.props.currentUser.friends}/>
				<SearchBar />
				<MyProfile 
				currentUser={this.props.currentUser}
				/>
				<FriendsContainer friends={this.props.currentUser.friends}/>
			</div>
		)
	}
}

export default ChatApp;