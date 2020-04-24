import React,{Component} from 'react'
import {Button} from '@material-ui/core'
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
					<Button variant="contained" color="primary" href="#contained-buttons">
  					ADD
					</Button>
      </div>
      </div>
    </section>
		)
	}
}

export default SearchUser;