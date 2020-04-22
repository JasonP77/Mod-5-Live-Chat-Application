import React, {Component} from 'react'
import withStyles from '@material-ui/core/styles/withStyles';
import FeaturePageStyles from './styles/FeaturePageStyles'

class ContactPage extends Component {
	render(){

		const { classes } = this.props;
		return(
			<div className={classes.text}>
				<p>Hello from ContactPage</p>
			</div>
		)
	}
}

export default withStyles(FeaturePageStyles)(ContactPage);