import { Outlet } from 'react-router-dom';
import styles from './LandingLayout.module.css';

export const LandingLayout = () => {
	return (
		<>
			<header>{/*<Navbar />*/}</header>
			<main className={styles.main}>
				<Outlet />
			</main>
		</>
	);
};
