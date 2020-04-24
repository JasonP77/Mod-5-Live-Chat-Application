import React, {Component} from 'react'
import Friend from './Friend'
class FriendsContainer extends Component {

	renderFriends = () => {
		return this.props.friends.map(friend => <Friend key={friend.id} friendObj={friend}/>)
	}
	render(){
		return(
			<div>
			{this.renderFriends()}
			</div>
		)
	}
}

export default FriendsContainer;