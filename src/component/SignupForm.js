import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import SignupFormStyles from './styles/SignupFormStyles';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import Paper from '@material-ui/core/Paper';
import withStyles from '@material-ui/core/styles/withStyles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';


class Signup extends Component {
	constructor(){
		super()
		this.state = {
			username: "",
			password: "",
			password_confirmation: ""
		}
	}

	createAccount = (e) => {
		const {password, password_confirmation} = this.state
		if(password === password_confirmation) {

		fetch("http://localhost:3000/users", {
			method: "POST",
			headers: {
				'Content-Type': 'application/json',
				Accept: "application/json"
			},
			body: JSON.stringify({
				username: this.state.username,
				password: this.state.password
			})
		})
		.then(response => response.json())
		.then(userObj => {
			console.log(userObj.username, userObj.password)
			// this.props.updateCurrentUser(userObj)
			window.location.href = "/login"
			
		})
		this.setState({
			username: "",
			password: "",
			password_confirmation: ""
		})
	}
	}

	inputChange = (e) => {
		this.setState({
			[e.target.name]: e.target.value
		})
	}

  render() {

		const { classes } = this.props;

    return (
      <main className={classes.main}>
        <CssBaseline/>
        <Paper className={classes.paper}>
          <Typography component="h1" variant="h5">
            Sign Up
          </Typography>
          <form onSubmit={(e) => {e.preventDefault(); this.createAccount(e)}}className={classes.form}>
            <FormControl required fullWidth margin='normal'>
              <InputLabel htmlFor='signup-email-input'  autocomplete="off">Enter Your Username</InputLabel>
              <Input onChange={(e) => this.inputChange(e)} value={this.state.username} autoComplete='off' autoFocus  name='username'></Input>
            </FormControl>
            <FormControl required fullWidth margin='normal'>
              <InputLabel htmlFor='signup-password-input'  autocomplete="off">Create A Password</InputLabel>
              <Input autoComplete='off' onChange={(e) => this.inputChange(e)} value={this.state.password} type="password" name='password'></Input>
            </FormControl>
            <FormControl required fullWidth margin='normal'>
              <InputLabel htmlFor='signup-password-confirmation-input'  autocomplete="off">Confirm Your Password</InputLabel>
              <Input onChange={(e) => this.inputChange(e)} value={this.state.password_confirmation} type="password" name='password_confirmation'></Input>
            </FormControl>
            <Button type='submit' fullWidth variant='contained' color='secondary' className={classes.submit}>Submit</Button>
          </form>
          <h5 className={classes.hasAccountHeader}>Already Have An Account?</h5>
          <Link className={classes.logInLink} to='/login'>Log In</Link>
        </Paper>
      </main>
    );
  }

}

export default withStyles(SignupFormStyles)(Signup);