import React, {Component} from 'react'
import SearchUser from './SearchUser'
class SearchUserListContainer extends Component {
	renderUser = () => {
		return this.props.filteredUser.map(user => <SearchUser key={user.id} user={user}/>)
	}
	render(){
		return(
		<div>
			{this.renderUser()}
		</div>
		)
	}
}

export default SearchUserListContainer;