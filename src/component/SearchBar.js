import React, {Component} from 'react'
import './styles/style.css'
class SearchBar extends Component {
	render(){
		return(
			<div class="search-bar">
      	<input type="text" placeholder="Search friends here..."/>
    	</div>
		)
	}
}

export default SearchBar