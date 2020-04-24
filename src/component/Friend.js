import React, {Component} from 'react'
import './styles/style.css'
class Friend extends Component {
	render(){
		return(
			<section class="friends__section">
      <div class="friends__section-rows">
        <div class="friends__section-row with-tagline">
            <div class="friends__section-column">
            <img src="https://i.pinimg.com/474x/d7/80/c7/d780c75b415c710c3f427cb7e6672e7e.jpg" />
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