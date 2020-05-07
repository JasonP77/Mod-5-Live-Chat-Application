import React, {Component} from 'react'
import { NavLink as Link } from 'react-router-dom';
import LoginFormStyles from './styles/LoginFormStyles';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import Paper from '@material-ui/core/Paper';
import withStyles from '@material-ui/core/styles/withStyles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { Redirect } from 'react-router-dom'


class EditProfile extends Component {
	constructor(props){
		super(props)
		this.state = {
			username: this.props.username,
			profile_img: this.props.profile_img,
			bio: this.props.bio,
			redirect: true
		}
	}

	updateProfile = (e) => {
		e.preventDefault();
		fetch(`http://localhost:3000/users/${this.props.currentUser.id}`, {
			method: "PUT",
			headers: {
				'Content-Type': 'application/json',
				Accept: 'application/json'
			},
			body: JSON.stringify({
				username: this.state.username,
				password: this.state.password,
				profile_img: this.state.profile_img,
				bio: this.state.bio
			})
		})
		.then(response => response.json())
		.then(data => this.props.updateProfileImg(data))
		this.setState({
			username: "",
			password: "",
			profile_img: "",
			bio: "",
			redirect: false
		})

	}

	inputChange = (e) => {
		this.setState({
			[e.target.name]: e.target.value
		})
	}


	render(){

		const {classes} = this.props;
		return(
			<main className={classes.main}>
			<CssBaseline/>
			<Paper className={classes.paper}>
				<Typography component="h1" variant="h5">
					Edit Profile
				</Typography>
				<form onSubmit={(e) => this.updateProfile(e)}>
					<FormControl  fullWidth margin='normal'>
						<InputLabel htmlFor='login-email-input'>Enter Your New Username</InputLabel>
						<Input onChange={(e) => this.inputChange(e)} value={this.state.username} autoComplete='off' autoFocus  name='username'></Input>
					</FormControl>
					{/* <FormControl  fullWidth margin='normal'>
						<InputLabel htmlFor='login-password-input' >Enter Your New Password</InputLabel>
						<Input onChange={(e) => this.inputChange(e)} value={this.state.currentUser.password} autoComplete="off" type="password" name='password'></Input>
					</FormControl> */}
					<FormControl  fullWidth margin='normal'> 
						<InputLabel htmlFor='login-email-input'>New Profile Imgage</InputLabel>
						<Input onChange={(e) => this.inputChange(e)}  value={this.state.profile_img} autoComplete='off' autoFocus  name='profile_img'></Input>
					</FormControl>
					<FormControl  fullWidth margin='normal'>
						<InputLabel htmlFor='login-email-input'>New Bio</InputLabel>
						<Input onChange={(e) => this.inputChange(e)} value={this.state.bio} autoComplete='off' autoFocus  name='bio'></Input>
					</FormControl>
				<Button type='submit' fullWidth variant='contained' color='secondary' className={classes.submit}>Submit</Button>
				</form>
				{!this.state.redirect && (<Redirect to="/homepage"/>)}
			</Paper>
		</main>
		)
	}
}

export default withStyles(LoginFormStyles)(EditProfile);