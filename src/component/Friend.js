import React, {Component} from 'react'
import './styles/style.css'
import {NavLink as Link} from 'react-router-dom'
class Friend extends Component {
  
	render(){
    const linkStyle = {
			textDecoration: 'none',
      color: 'black'
    }
    // when friend's name is clicked it will create a new room with the selected friend
		return(
			<section  onDoubleClick={() => this.props.createNewRoom(this.props.friendObj)} class="friends__section">
      <div  class="friends__section-rows">
       <div class="friends__section-row with-tagline">
            <div class="friends__section-column">
            <img  src={this.props.friendObj.profile_img} />
          <span class="friends__section-name">{this.props.friendObj.username}</span>
          </div>
          {this.props.friendObj.bio ? <span class="friends__section-tagline">{this.props.friendObj.bio}</span> : null}
        
      </div>

      </div>
    </section>
		)
	}
}

export default Friend