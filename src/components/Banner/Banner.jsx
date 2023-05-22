import { useState, useEffect } from 'react';
import styles from './Banner.module.css';
import { FaPlay } from 'react-icons/fa';
import axios from '../../../axios.js';
import requests from '../../../request.js';

export const Banner = () => {
	const [movie, setMovie] = useState([]);

	useEffect(() => {
		async function fetchData() {
			const request = await axios.get(requests.fetchNetflixOriginals);
			setMovie(
				request.data.results[
					Math.floor(Math.random() * request.data.results.length - 1)
				]
			);
		}

		fetchData();
	}, []);

	function truncate(string, n) {
		return string?.length > n ? string.substr(0, n - 1) + '...' : string;
	}

	const description = movie.overview;
	const poster = movie?.backdrop_path;

	return (
		<section
			className={styles.banner}
			style={{
				backgroundImage: `url("https://image.tmdb.org/t/p/original${poster}")`,
				backgroundPosition: 'center center',
				backgroundSize: 'cover',
			}}
		>
			<div className={styles.overlay}></div>
			<div className={styles.content}>
				<h2 className={styles.title}>
					{movie?.title || movie?.name || movie?.original_name}
				</h2>
				<p className={styles.moviedescription}>
					{truncate(movie?.overview, 150)}
				</p>
				<div className={styles.buttons}>
					<button className={styles.button}>
						<FaPlay />
						Play
					</button>
					<button className={styles.button}>My List</button>
				</div>
			</div>
		</section>
	);
};
