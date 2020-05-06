import React, {Component} from 'react'
import './styles/style.css'
import PersonIcon from '@material-ui/icons/Person';
import ModeCommentIcon from '@material-ui/icons/ModeComment';
import YoutubeSearchedForIcon from '@material-ui/icons/YoutubeSearchedFor';
import SettingsIcon from '@material-ui/icons/Settings';
import {NavLink as Link} from 'react-router-dom'
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

class ChatappFooter extends Component {


  logoutFn = () => {
		localStorage.removeItem('jwt')
		this.props.updateCurrentUser(null)
  }
  
	render(){
    const linkStyle = {
			textDecoration: 'none'
		}
		return(

			<div>
				<nav class="tab-bar">
    <Link style={linkStyle} to="/chatapp">
    <p  class="tab-bar__tab tab-bar__tab--selected">
      <PersonIcon />
      <span class="tab-bar__title">Friends</span>
    </p>
    </Link>

    <Link to="/chatroom" style={linkStyle}>
    <p  class="tab-bar__tab tab-bar__tab--selected">
      <ModeCommentIcon />
     <span class="tab-bar__title">Chat</span>
    </p>
    </Link>

    <Link style={linkStyle} to={`/edit/${this.props.currentUser.id}`}>
    <p  class="tab-bar__tab tab-bar__tab--selected">
      <SettingsIcon />
      <span class="tab-bar__title">Edit</span>
    </p>
    </Link>

    <Link style={linkStyle} to="/login" onClick={this.logoutFn}>
    <p  class="tab-bar__tab tab-bar__tab--selected">
      <ExitToAppIcon />
      <span class="tab-bar__title">Logout</span>
    </p>
    </Link>
		</nav>
		</div>
		)
	}
}

export default ChatappFooter;