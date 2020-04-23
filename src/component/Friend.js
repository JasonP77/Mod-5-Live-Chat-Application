import React, {Component} from 'react'
import './styles/style.css'
class Friend extends Component {
	render(){
		return(
			<section class="friends__section">
      <header class="frindes__section-header">
        <h6 class="friends__section-title">Friends</h6>
      </header>
      <div class="friends__section-rows">
        <div class="friends__section-row with-tagline">
            <div class="friends__section-column">
            <img src="images/kakao_friends.png" />
          <span class="friends__section-name">{this.props.friendObj.username}</span>
          </div>
        <span class="friends__section-tagline">idk</span>
      </div>
      </div>
    </section>
		)
	}
}

export default Friend