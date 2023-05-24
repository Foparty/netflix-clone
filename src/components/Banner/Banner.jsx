import { useState, useEffect } from 'react';
import styles from './Banner.module.css';
import { FaPlay } from 'react-icons/fa';
import axios from '../../../axios.js';
import requests from '../../../request.js';
import { motion } from 'framer-motion';

export const Banner = () => {
	const [movies, setMovies] = useState([]);

	useEffect(() => {
		async function fetchData() {
			const request = await axios.get(requests.fetchNetflixOriginals);
			setMovies(request.data.results);
		}

		fetchData();
	}, []);

	const [activeMovieIndex, setActiveMovieIndex] = useState(0);
	const activeMovie = movies[activeMovieIndex];

	useEffect(() => {
		const interval = setInterval(() => {
			const randomMovie = Math.floor(Math.random() * movies.length);
			setActiveMovieIndex(randomMovie);
		}, 8000);

		return () => {
			clearInterval(interval);
		};
	}, [activeMovieIndex, activeMovie]);

	function truncate(string, n) {
		return string?.length > n ? string.substr(0, n - 1) + '...' : string;
	}

	const description = activeMovie?.overview;
	const poster = activeMovie?.backdrop_path;

	return (
		<section className={styles.banner}>
			<img
				className={styles.bannerimg}
				src={`https://image.tmdb.org/t/p/original${poster}`}
				alt=""
			/>
			<div className={styles.overlay}></div>
			<div className={styles.content}>
				<h2 className={styles.title}>
					{activeMovie?.title ||
						activeMovie?.name ||
						activeMovie?.original_name}
				</h2>
				<p className={styles.moviedescription}>{truncate(description, 150)}</p>
				<div className={styles.buttons}>
					<button className={styles.button}>
						<FaPlay />
						Play
					</button>
					<motion.button whileHover={{ scale: 1.04 }} className={styles.button}>
						My List
					</motion.button>
				</div>
			</div>
		</section>
	);
};
