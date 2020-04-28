import React,{Component} from 'react'
import './styles/chatroom.css'
import SendIcon from '@material-ui/icons/Send';
import AddIcon from '@material-ui/icons/Add';

class MessageInputBox extends Component {
	render(){
		return(

			<div class="type-message">
    <AddIcon />
    <div class="type-message__input">
      <input type="text" />
      <i class="fa fa-smile-o"></i>
      <span class="record-message">
        <SendIcon className="icon"/>
      </span>
    </div>
  </div>
	
		)
	}
}

export default MessageInputBox;