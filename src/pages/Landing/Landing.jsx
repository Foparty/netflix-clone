import styles from './Landing.module.css';
import {
	landing1,
	landing2,
	landing3,
	landing4,
	landingcover,
	logo,
} from '../../../public/img/index.js';
import { TbWorld } from 'react-icons/tb';
import { Link } from 'react-router-dom';

const features = [
	{
		id: 1,
		title: 'Watch on TV',
		sub: 'Watch on Smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray and more.',
		img: landing1,
	},
	{
		id: 2,
		title: 'Watch everywhere',
		sub: 'Watch movies, series and programs without limits on your phone, tablet, laptop and TV.',
		img: landing2,
	},
	{
		id: 3,
		title: 'Create profiles for children',
		sub: "Let your kids go on adventures with their favorite characters in a special section of the site that's free with membership.",
		img: landing3,
	},
	{
		id: 4,
		title: 'Download your favorite titles and watch offline',
		sub: 'Save your favorite titles so you always have something to watch.',
		img: landing4,
	},
];

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
				<section className={styles.features}>
					{features.map((item) => (
						<article key={item.id}>
							<div className={styles.textcontainer}>
								<h2 className={styles.title}>{item.title}</h2>
								<p className={styles.sectiontext}>{item.sub}</p>
							</div>
							<div className={styles.imgcontainer}>
								<img src={item.img} alt="" />
							</div>
						</article>
					))}
				</section>
			</main>
		</>
	);
};
