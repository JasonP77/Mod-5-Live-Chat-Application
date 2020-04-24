import React, {Component} from 'react';
import NavBar from './component/NavBar'
import { Route, Redirect } from 'react-router-dom'
import FeaturePage from './component/FeaturePage'
import HomePageContainer from './component/HomePageContainer'
import ContactPage from './component/ContactPage'
import LoginForm from './component/LoginForm'
import SignupForm from './component/SignupForm'
import ChatApp from './component/ChatApp'
import AddFriend from './component/AddFriend'

class App extends Component {
  constructor(){
    super()
    this.state = {
      currentUser: ""
    }
  }

  componentDidMount(){
    if(localStorage.getItem("jwt")){
      fetch("http://localhost:3000/chatapp", {
        headers: {
          "Authentication": localStorage.getItem('jwt')
        }
      })
      .then(response => response.json())
      .then(json => {
        this.setState({
          currentUser: json
        })
      })
      

    }
  }
  updateCurrentUser = (user) => {
    this.setState({currentUser: user})
  }
  render(){
    return (
    
      <div className="App">
        <NavBar logged_in={this.state.currentUser} updateCurrentUser={this.updateCurrentUser}/>
        <Route exact path="/homepage" component={HomePageContainer}/>

        <Route exact path="/feature" component={FeaturePage} />

        <Route exact path="/contact" component={ContactPage}/>

        <Route exact path="/chatapp" render={ () => (
          this.state.currentUser ?
        <ChatApp
        currentUser={this.state.currentUser}
        /> : <Redirect to="/homepage"/>
        )}/>

        <Route exact path="/login" render={ () => (
        this.state.currentUser ? 
        <Redirect to="/homepage"/> :
        <LoginForm updateCurrentUser={this.updateCurrentUser}
        />)}/>

        <Route exact path="/signup" render={ () => (
          this.state.currentUser ?
          <Redirect to="/homepage"/> :
        <SignupForm updateCurrentUser={this.updateCurrentUser}/>)} />
        <Route exact path="/add" render={() => (
          <AddFriend currentUser={this.state.currentUser}/>
        )}/>

      </div>
    ); 
  }
}

export default App;
