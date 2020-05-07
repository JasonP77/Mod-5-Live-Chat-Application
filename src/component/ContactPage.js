import React, {Component} from 'react'
import withStyles from '@material-ui/core/styles/withStyles';
import FeaturePageStyles from './styles/FeaturePageStyles'

class ContactPage extends Component {
	render(){

		const { classes } = this.props;
		return(
			<div className={classes.fullContainer}>
				<div className={classes.vision}>
					<p><span>“Connect Everything”</span>
					<br/>Innovating the way we connect for a better tomorrow</p>
				</div>
				<div>
					<img className={classes.images} src="https://www.monempresarial.com/wp-content/uploads/2015/12/mon-empresarial-004-decaleg-governanca-603x357.png"/>
				</div>
				<div>
					<p className={classes.visionText}>VISION</p>
					<p className={classes.fullVision}>
							TALKBIT dreams of creating a more comfortable and exciting world by innovating the way we connect.
							<br/>We believe that we can make a better tomorrow by discovering ways to strengthen interpersonal connection and 
							<br/>intensify connection between people and technology.
</p>
				</div>
			</div>
		)
	}
}

export default withStyles(FeaturePageStyles)(ContactPage);