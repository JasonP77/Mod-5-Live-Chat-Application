import React, {Component} from 'react'
import withStyles from '@material-ui/core/styles/withStyles';
import HomePageContainerStyles from './styles/HomePageContainerStyles';

class HomePageContainer extends Component {
	render(){

		const { classes } = this.props;

		return(
			<div>
				<p>Hello from HomePageContainer</p>
			</div>
		)
	}
}

export default withStyles(HomePageContainerStyles)(HomePageContainer);