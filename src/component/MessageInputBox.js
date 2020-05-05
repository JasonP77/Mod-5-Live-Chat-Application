import React,{Component} from 'react'
import './styles/chatroom.css'
import SendIcon from '@material-ui/icons/Send';
import AddIcon from '@material-ui/icons/Add';

class MessageInputBox extends Component {
	render(){
		return(
			<form onSubmit={(e) => this.props.enterMessage(e)}>
			<div class="type-message">
    <AddIcon />
    <div class="type-message__input">
      <input type="text" value={this.props.input} onChange={(e) => this.props.newMessageHandler(e)}/>
      <i class="fa fa-smile-o"></i>
      <span class="record-message">
			<SendIcon><input type="Submit"  className="icon"></input></SendIcon>
      </span>
    </div>
  </div>
	</form>
	
		)
	}
}

export default MessageInputBox;