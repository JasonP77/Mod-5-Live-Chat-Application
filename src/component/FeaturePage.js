import React, {Component} from 'react'
import withStyles from '@material-ui/core/styles/withStyles';
import FeaturePageStyles from './styles/FeaturePageStyles'
import Image from '../images/Conversation.png'

class FeaturePage extends Component {
	render(){
		const { classes } = this.props;
		return(
			<div>	
			<img className={classes.img} src={Image}/>
				<div className={classes.text}>
					<div className={classes.container}>
					<p className={classes.desc}>Free Messaging</p>
					<p className={classes.desc}>Whenever,</p>
					<p className={classes.desc}>Wherever</p>
					<span className={classes.feature}>Send free Messages to friends and family</span>
					<br/><span className={classes.feature}>AnyTime! Anywhere! </span>
					<br/><span className={classes.feature}><span className={classes.talkbit}>TALKBIT</span> enables users to create personal chatrooms to strengthen interpersonal connection</span>
					</div>
				 </div>
			</div>
		)
	}
}

export default withStyles(FeaturePageStyles)(FeaturePage)