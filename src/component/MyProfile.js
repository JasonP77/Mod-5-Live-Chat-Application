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
          <img src="https://i.pinimg.com/474x/fb/a2/b8/fba2b8b4c7f42e5557844ae52fe4060d.jpg"></img>
          <a href="profile.html" class="friends__section-name">
          {this.props.currentUser.username}
          </a>
        </div>
        
      </div>
    </section>
		)
	}
}

export default MyProfile;