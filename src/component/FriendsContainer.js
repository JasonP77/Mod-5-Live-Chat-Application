import React, {Component} from 'react'
import Friend from './Friend'
import './styles/style.css'
class FriendsContainer extends Component {

	renderFriends = () => {
		return this.props.friends.map(friend => <Friend key={friend.id} friendObj={friend}/>)
	}
	render(){
		return(
			<div className="friends-container">
			{this.renderFriends()}
			</div>
		)
	}
}

export default FriendsContainer;