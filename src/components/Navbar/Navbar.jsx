import { useState, useEffect } from 'react';
import styles from './Navbar.module.css';
import { avatar, logo, tmdb } from '../../../public/img/index.js';
import { Link } from 'react-router-dom';

export const Navbar = () => {
	const [scrollPosition, setScrollPosition] = useState(0);

	useEffect(() => {
		const handleScroll = () => {
			const position = window.pageYOffset;
			setScrollPosition(position);
		};

		window.addEventListener('scroll', handleScroll);
		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);

	const headerClass = scrollPosition > 100 ? styles.headerBlack : '';
	return (
		<header className={`${styles.header} ${headerClass}`}>
			<div className={styles.nav}>
				<Link className={styles.logos} to={'/'}>
					<img
						className={styles.logo}
						src={logo}
						alt="netflix logo"
						height={30}
					/>
					<img
						className={styles.tmdb}
						src={tmdb}
						alt="netflix logo"
						height={8}
					/>
				</Link>
				<Link to={'/home/profile'}>
					<img
						className={styles.avatar}
						src={avatar}
						alt="netflix logo"
						height={30}
					/>
				</Link>
			</div>
		</header>
	);
};
