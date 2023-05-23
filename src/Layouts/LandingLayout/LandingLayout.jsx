import { Outlet } from 'react-router-dom';
import styles from './LandingLayout.module.css';

export const LandingLayout = () => {
	return (
		<>
			<main className={styles.main}>
				<Outlet />
			</main>
		</>
	);
};
