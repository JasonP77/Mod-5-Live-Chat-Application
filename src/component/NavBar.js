import React, {Component} from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import withStyles from '@material-ui/core/styles/withStyles';
import NavStyles from './styles/NavStyles'
import { NavLink as Link } from 'react-router-dom'
import '../index.css'
class NavBar extends Component {
	logoutFn = () => {
		localStorage.removeItem('jwt')
		this.props.updateCurrentUser(null)
	}
	

	render(){

		const { classes } = this.props;
		const linkStyle = {
			textDecoration: 'none',
			color: 'white'
		}
		return(
			<div>
			<nav className="homepageNav">
					<ul className="ul">
						<li className="listItems homepage-logo">	<Link to="/homepage" style={linkStyle}>TalkBit</Link></li>
						<li className="listItems"><Link to="/feature" style={linkStyle}> Feature </Link></li>
						<li className="listItems"><Link to="/contact" style={linkStyle}> Contact </Link></li>
						{this.props.logged_in ? <li className="listItems"><Link to= "/chatapp" style={linkStyle}>ChatApp</Link></li> : null}
						<li className="listItems">
						{this.props.logged_in ? <Link to="/login" style={linkStyle} onClick={this.logoutFn}> Logout</Link> : <Link to="/login" style={linkStyle}> Login</Link>}
							</li>

					</ul>
				</nav>
			</div>
		)
	}
}

export default withStyles(NavStyles)(NavBar)