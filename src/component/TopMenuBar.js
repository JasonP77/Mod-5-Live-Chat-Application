import React, {Component} from 'react';
import './styles/style.css';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import { Link } from 'react-router-dom';
class TopMenuBar extends Component {
	constructor(){
		super()
		this.state = {
			currentTime: ""
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
		let hours = date.getHours();
		let min = date.getMinutes();
		let ampm = hours >= 12 ? 'pm' : 'am';
		hours = hours % 12;
  	hours = hours ? hours : 12;
		min = min < 10 ? '0'+min : min;
		let strTime = hours + ':' + min + ' ' + ampm; 
		return strTime
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
					<span class="header__text">Friends </span><span class="header__number">{this.props.friends.length}</span>
				</div>
				<div class="header__column">
				<Link to="/add"><PersonAddIcon/></Link>
					<i class="fa fa-cog fa-lg"></i>
				</div>
			</div> 
		</header>
		)
	}
}

export default TopMenuBar