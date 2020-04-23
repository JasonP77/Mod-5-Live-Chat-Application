import React, {Component} from 'react'
import './styles/style.css'
class TopMenuBar extends Component {
	constructor(){
		super()
		this.state = {
			currentTime: null
		}
	}

	componentDidMount(){
		setInterval( () => {
      this.setState({
        currentTime : this.getCurrentTime()
      })
    },1000)
	}

	getCurrentTime = () => {
		let date = new Date();
		let hour = date.getHours();
		let min = date.getMinutes();
		return `${hour}:${min}`
	}
	render(){
		return(
			<header class= "top-header">
			<div class="header__top">
				<div class="header__column">
					<i class="fas fa-plane"></i>
					<i class="fas fa-wifi"></i>
				</div>
				<div class="header__column">
					<span class="header_time">{this.state.currentTime}
					</span>
				</div>
				<div class="header__column">
				</div>
			</div>
			<div class="header__bottom">
				<div class="header__column">
				</div>
				<div class="header__column">
					<span class="header__text">Friends </span><span class="header__number">21</span>
				</div>
				<div class="header__column">
					<i class="fa fa-cog fa-lg"></i>
				</div>
			</div> 
		</header>
		)
	}
}

export default TopMenuBar