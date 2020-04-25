import React,{Component} from 'react'
import {Button} from '@material-ui/core'
class SearchUser extends Component {
	render(){
    console.log(this.props.user.id)
		return(
			<section class="friends__section">
      <div class="friends__section-rows">
        <div class="friends__section-row with-tagline">
            <div class="friends__section-column">
            <img src={this.props.user.profile_img}/>
          <span class="friends__section-name">{this.props.user.username}</span>
          </div>
					<button onClick={(e) => this.props.addFriend(e)} id={this.props.user.id}>{this.props.user.id}</button>
      </div>
      </div>
    </section>
		)
	}
}

export default SearchUser;