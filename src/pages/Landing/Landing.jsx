import React from 'react';
import styles from './Landing.module.css';
import { landingcover, logo } from '../../../public/img/index.js';
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
					<button>Sign In</button>
				</div>
			</header>
			<main className={styles.content}>
				<section className={styles.banner}>
					<div className={styles.imgcontainer}>
						<img src={landingcover} alt="netflix background" />
						<div className={styles.overlay}></div>
						<div className={styles.started}>
							<h1>Unlimited movies, TV shows, and more</h1>
							<h2>Watch anywhere. Cancel anytime.</h2>
							<p>
								Ready to watch? Enter your email to create or restart your
								membership.
							</p>
							<form>
								<input type="text" placeholder={'does not wotk so skip it'} />
								<Link className={styles.button} to={'/home'}>
									Enter the DEMO
								</Link>
							</form>
						</div>
					</div>
				</section>
			</main>
		</>
	);
};
