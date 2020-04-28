import React, {Component} from 'react'
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

class BeforeEdit extends Component {

	constructor(){
		super()
		this.state = {
			password: ""
		}
	}


	inputChange = (e) => {
		this.setState({
			[e.target.name]: e.target.value
		})
	}

	confirmPassword = (e) => {
		e.preventDefault();
		console.log(this.props.currentUser)
	}
	render(){

		const {classes} = this.props;
		return(
			<main className={classes.main}>
			<CssBaseline/>
			<Paper className={classes.paper}>
				<Typography component="h1" variant="h5">
					Password Confirmation
				</Typography>
				<form onSubmit={(e) => this.confirmPassword(e)}>
					<FormControl required fullWidth margin='normal'>
						<InputLabel htmlFor='login-email-input'>Enter Your Password</InputLabel>
						<Input onChange={(e) => this.inputChange(e)} autoComplete='off' autoFocus  name='password'></Input>
					</FormControl>
					<Button type='submit' fullWidth variant='contained' color='primary' className={classes.submit}>Submit</Button>
				</form>
			</Paper>
		</main>
		)
	}
}

export default withStyles(LoginFormStyles)(BeforeEdit);;