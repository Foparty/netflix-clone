import styles from './LoginScreen.module.css';
import { useRef } from 'react';
import { logo } from '../../../public/img/index.js';
import { TbWorld } from 'react-icons/tb';
import { Link } from 'react-router-dom';
import { auth } from '../../../firebase.js';

export const LoginScreen = () => {
	const emailRef = useRef(null);
	const passwordRef = useRef(null);

	const register = (e) => {
		e.preventDefault();
		auth
			.createUserWithEmailAndPassword(
				emailRef.current.value,
				passwordRef.current.value
			)
			.then((authUser) => {
				console.log(authUser);
			})
			.catch((error) => {
				alert(error.message);
			});
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		emailRef.current.value = '';
		passwordRef.current.value = '';
	};

	return (
		<>
			<header className={styles.header}>
				<div className={styles.left}>
					<Link to={'/'}>
						<img src={logo} alt="netflix logo" height={30} />
					</Link>
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
						<Link to={'/login'}>Sign In</Link>
					</button>
				</div>
			</header>
			<main className={styles.content}>
				<form onSubmit={handleSubmit} className={styles.form}>
					<h2>Enter your data:</h2>
					<div className={styles.formgroup}>
						<label htmlFor="email">Email</label>
						<input
							ref={emailRef}
							id={'email'}
							type="email"
							placeholder={'email'}
						/>
					</div>
					<div className={styles.formgroup}>
						<label htmlFor="password">Password</label>
						<input
							ref={passwordRef}
							id={'password'}
							type="password"
							placeholder={'password'}
						/>
					</div>
					<button type={'submit'}>Sign In</button>
					<p>
						New to Netflix?{' '}
						<span>
							<Link to={'/'} onClick={register}>
								Sign up Now!
							</Link>
						</span>
					</p>
				</form>
			</main>
		</>
	);
};
