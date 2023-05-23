import styles from './LandingFeatures.module.css';
import {
	landing1,
	landing2,
	landing3,
	landing4,
} from '../../../public/img/index.js';

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

export const LandingFeatures = () => {
	return (
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
	);
};
