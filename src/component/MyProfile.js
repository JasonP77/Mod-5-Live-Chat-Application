import React, {Component} from 'react'
import './styles/style.css'

class MyProfile extends Component {

	

	

	render(){
		return(
			<section class="friends__section">
      <header class="frindes__section-header">
        <h6 class="friends__section-title">My Profile</h6>
      </header>
      <div class="friends__section-rows">
        
        <div class="friends__section-row">
      
          <img src={this.props.currentUser.profile_img}></img>
          <p class="friends__section-name">
          {this.props.currentUser.username}
      
          </p>

        </div>
    
        
        <header class="frindes__section-header">
        <h6 class="friends__section-title">Friends</h6>
      </header>
      </div>
    </section>
		)
	}
}

export default MyProfile;