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
			<AppBar className={classes.bar} position="static">
					<Toolbar>
							<Typography variant="title" color="inherit">
								<Link to="/homepage" style={linkStyle}><ChatBubbleOutlineIcon/></Link>
							</Typography>
						
							<List component="nav">
            <ListItem component="div">
                <ListItemText inset>
                    <Typography className= {classes.list_1} color="inherit" variant="title">
									<Link to="/feature" style={linkStyle}> Feature </Link>
               			</Typography>
                </ListItemText>


                <ListItemText inset>
                    <Typography className= {classes.list_2}color="inherit" variant="title">
                       <Link to="/contact" style={linkStyle}> Contact </Link>
              			 </Typography>
                </ListItemText>


                <ListItemText inset>
                    <Typography className= {classes.list_3}color="inherit" variant="title">
                        <Link to= "/chatapp" style={linkStyle}>ChatApp</Link>
               			</Typography>
                </ListItemText>

								<ListItemText inset>
                    <Typography className= {classes.list_4}color="inherit" variant="title">
											{this.props.logged_in ? <Link to="/login" style={linkStyle} onClick={this.logoutFn}> Logout</Link> : <Link to="/login" style={linkStyle}> Login</Link>}
               			</Typography>
                </ListItemText>	
            </ListItem >

        </List>
				
					</Toolbar>
			</AppBar>
			</div>
		)
	}
}

export default withStyles(NavStyles)(NavBar)