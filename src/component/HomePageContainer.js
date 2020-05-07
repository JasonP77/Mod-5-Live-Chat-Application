import React, {Component} from 'react'
import withStyles from '@material-ui/core/styles/withStyles';
import HomePageContainerStyles from './styles/HomePageContainerStyles';
import woman from '../images/woman-giggling.jpg'

class HomePageContainer extends Component {
	render(){

		const { classes } = this.props;

		return(
			<div className="container">
				<img className={classes.images}src={woman}/>
				<div className={classes.vision}>
					<p><span>“Connect Everything”</span>
					<br/>Innovating the way we connect for a better tomorrow</p>
				</div>
			</div>
		)
	}
}

export default withStyles(HomePageContainerStyles)(HomePageContainer);