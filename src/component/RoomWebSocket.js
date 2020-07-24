import React, {Component} from 'react'

class RoomWebSocket extends Component {
	componentDidMount(){
		this.props.getRoomData(window.location.href.match(/\d+$/)[0])
		
		this.props.cableApp.room = 
		this.props.cableApp.cable.subscriptions.create({
			channel: 'RoomsChannel',
			chatroom: window.location.href.match(/\d+$/)[0]
		},
		
		{
			received: (updatedRoom) => {
				// testing if it reaches this function
				console.log("hitting this function")
				this.props['data-updatedApp'](updatedRoom)

		}
		}
		)
	}


	render(){
		return(
			<div></div>
		)
	}
}

export default RoomWebSocket;