import React,{Component} from 'react'
import {Button} from '@material-ui/core'
import {NavLink as Link} from 'react-router-dom'
class SearchUser extends Component {
	render(){
		return(
			<section class="friends__section">
      <div class="friends__section-rows">
        <div class="friends__section-row with-tagline">
            <div class="friends__section-column">
            <img src={this.props.user.profile_img}/>
          <span class="friends__section-name">{this.props.user.username}</span>
          </div>
					<Link to="/chatapp"><button onClick={(e) => this.props.addFriend(e)} id={this.props.user.id}>{this.props.user.id}</button></Link>
      </div>
      </div>
    </section>
		)
	}
}

export default SearchUser;