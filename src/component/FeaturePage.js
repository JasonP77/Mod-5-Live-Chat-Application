import React, {Component} from 'react'
import withStyles from '@material-ui/core/styles/withStyles';
import FeaturePageStyles from './styles/FeaturePageStyles'
class FeaturePage extends Component {
	render(){
		const { classes } = this.props;
		return(
			<div>
			<img className={classes.img} src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT27Q0ts2RN7yGuzxqui8ktKSbd7A1SoVIYXRrMP8dyzOomKgqJ&usqp=CAU"/>
			<div className={classes.text}>Wise busy past both park when an ye no. Nay likely her length sooner thrown sex lively income. The expense windows adapted sir. Wrong widen drawn ample eat off doors money. Offending belonging promotion provision an be oh consulted ourselves it. Blessing welcomed ladyship she met humoured sir breeding her. Six curiosity day assurance bed necessary. </div>
			</div>
		)
	}
}

export default withStyles(FeaturePageStyles)(FeaturePage)