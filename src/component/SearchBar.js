import React, {Component} from 'react'
import './styles/style.css'
class SearchBar extends Component {
	render(){
		return(
			<div class="search-bar">
      	<input onChange={(e) => this.props.searchTerm(e)} name="username" type="text" placeholder="Search friends here..."  autocomplete="off"/>
    	</div>
		)
	}
}

export default SearchBar