import styles from './Landing.module.css';

import { LandingBanner } from '../../components/LandingBanner/LandingBanner.jsx';
import { LandingFeatures } from '../../components/LandingFeatures/LandingFeatures.jsx';
import { LandingFaq } from '../../components/LandingFAQ/LandingFaq.jsx';
import { logo } from '../../../public/img/index.js';
import { TbWorld } from 'react-icons/tb';
import { Link } from 'react-router-dom';

export const Landing = () => {
	return (
		<>
			<header className={styles.header}>
				<div className={styles.left}>
					<img src={logo} alt="netflix logo" height={30} />
				</div>
				<div className={styles.right}>
					<label className={styles.options}>
						<TbWorld />
						<select name="languageselect">
							<option className={styles.option} value="es">
								<span>Spanish</span>
							</option>
							<option value="en">English</option>
						</select>
					</label>
					<button>
						<Link to={'/home'}>Sign In</Link>
					</button>
				</div>
			</header>
			<main className={styles.content}>
				<LandingBanner />
				<LandingFeatures />
				<LandingFaq />
			</main>
		</>
	);
};
