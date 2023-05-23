import styles from './LandingBanner.module.css';
import { landingcover } from '../../../public/img/index.js';
import { Link } from 'react-router-dom';

export const LandingBanner = () => {
	return (
		<section className={styles.banner}>
			<div className={styles.imgcontainer}>
				<img src={landingcover} alt="netflix background" />
				<div className={styles.overlay}></div>
				<div className={styles.started}>
					<h1>This is just a demo, click on any red button to access</h1>
					<h2>Watch anywhere. Cancel anytime.</h2>
					<p>
						Ready to watch? Enter your email to create or restart your
						membership.
					</p>
					<form className={styles.form}>
						<input type="text" placeholder={'does not wotk so skip it'} />
						<Link className={styles.button} to={'/home'}>
							Enter the DEMO
						</Link>
					</form>
				</div>
			</div>
		</section>
	);
};
