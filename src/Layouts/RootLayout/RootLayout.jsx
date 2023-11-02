// import { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
// import { Navbar } from '../../components/Navbar/Navbar.jsx';
import styles from './RootLayout.module.css';
import { SideNav } from '../../components/SideNav/SideNav.jsx';

export const RootLayout = () => {
	return (
		<>
			{/*<Navbar />*/}
			<SideNav />
			<main className={styles.main}>
				<Outlet />
			</main>
		</>
	);
};
