import styles from './SideNav.module.css';
import { BiHomeAlt2, BiMovie } from 'react-icons/bi';
import { RxMagnifyingGlass } from 'react-icons/rx';
import { AiOutlineCalendar, AiOutlinePlus } from 'react-icons/ai';
import { BsDisplay } from 'react-icons/bs';
import { Link } from 'react-router-dom';

export const SideNav = () => {
	return (
		<aside className={styles.sidebar}>
			<nav className={styles.nav}>
				<div className={styles.menugroup}>
					<RxMagnifyingGlass />
					<h2 className={styles.menutitle}>Search</h2>
				</div>
				<div className={styles.menugroup}>
					<BiHomeAlt2 />
					<h2 className={styles.menutitle}>
						<Link to={'/'}>Home</Link>
					</h2>
				</div>
				<div className={styles.menugroup}>
					<AiOutlineCalendar />
					<h2 className={styles.menutitle}>Latest</h2>
				</div>
				<div className={styles.menugroup}>
					<BsDisplay />
					<h2 className={styles.menutitle}>TV Shows</h2>
				</div>
				<div className={styles.menugroup}>
					<BiMovie />
					<h2 className={styles.menutitle}>Movies</h2>
				</div>
				<div className={styles.menugroup}>
					<AiOutlinePlus />
					<h2 className={styles.menutitle}>Last added</h2>
				</div>
			</nav>
		</aside>
	);
};
