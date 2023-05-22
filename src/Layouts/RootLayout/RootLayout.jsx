import { Outlet } from 'react-router-dom';
import { Navbar } from '../../components/Navbar/Navbar.jsx';
import styles from './RootLayout.module.css';

export const RootLayout = () => {
	return (
		<header>
			<Navbar />
			<main className={styles.main}>
				<Outlet />
			</main>
		</header>
	);
};
