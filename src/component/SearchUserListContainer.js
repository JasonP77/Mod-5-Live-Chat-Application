import React, {Component} from 'react'
import SearchUser from './SearchUser'
class SearchUserListContainer extends Component {
	renderUser = () => {
		return this.props.filteredUser.map(user => <SearchUser addFriend={this.props.addFriend} key={user.id} user={user}/>)
	}
	render(){
		return(
		<div class="searchContainer">
			{this.renderUser()}
		</div>
		)
	}
}

export default SearchUserListContainer;