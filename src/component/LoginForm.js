import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import LoginFormStyles from './styles/LoginFormStyles';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import Paper from '@material-ui/core/Paper';
import withStyles from '@material-ui/core/styles/withStyles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

class LoginForm extends Component {
	constructor(){
		super()
		this.state = {
			username: "",
			password: ""
		}
	}

	loginHandler = (e) => {
		e.preventDefault();
		fetch("http://localhost:3000/login",{
			method: "POST",
			headers: {
				'Content-Type': 'application/json',
				Accept: 'application/json'
			},
			body: JSON.stringify({
				username: this.state.username,
				password: this.state.password
			})
		})
		.then(response => response.json())
		.then(json => {
			console.log(json)
			if(json.error){
				alert(json.message)
			} else {
				this.props.updateCurrentUser(json.user_data)
				localStorage.setItem("jwt", json.token)
			}
		})
	}

	inputChange = (e) => {
		this.setState({
			[e.target.name]: e.target.value
		})
	}
	render(){

		const { classes } = this.props;

		return(
			<main className={classes.main}>
			<CssBaseline/>
			<Paper className={classes.paper}>
				<Typography component="h1" variant="h5">
					Log In!
				</Typography>
				<form onSubmit={(e) => this.loginHandler(e)}>
					<FormControl required fullWidth margin='normal'>
						<InputLabel htmlFor='login-email-input'>Enter Your Username</InputLabel>
						<Input onChange={(e) => this.inputChange(e)} autoComplete='username' autoFocus  name='username'></Input>
					</FormControl>
					<FormControl required fullWidth margin='normal'>
						<InputLabel htmlFor='login-password-input'>Enter Your Password</InputLabel>
						<Input onChange={(e) => this.inputChange(e)} autoComplete="current-password" type="password" name='password'></Input>
					</FormControl>
					<Button type='submit' fullWidth variant='contained' color='primary' className={classes.submit}>Log In</Button>
				</form>
				<h5 className={classes.noAccountHeader}>Don't Have An Account?</h5>
				<Link className={classes.signUpLink} to='/signup'>Sign Up!</Link>
			</Paper>
		</main>
		)
	}
}

export default withStyles(LoginFormStyles)(LoginForm);