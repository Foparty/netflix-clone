import { useState, useEffect } from 'react';
import styles from './Banner.module.css';
import { FaPlay } from 'react-icons/fa';
import axios from '../../../axios.js';
import requests from '../../../request.js';

export const Banner = () => {
	// const [movie, setMovie] = useState([]);
	//
	// useEffect(() => {
	// 	async function fetchData() {
	// 		const request = await axios.get(requests.fetchNetflixOriginals);
	// 		setMovie(
	// 			request.data.results[
	// 				Math.floor(Math.random() * request.data.results.length - 1)
	// 			]
	// 		);
	// 	}
	//
	// 	fetchData();
	// }, []);

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
			setActiveMovieIndex(activeMovieIndex + 1);
		}, 8000);

		return () => {
			clearInterval(interval);
		};
	}, [activeMovieIndex]);

	function truncate(string, n) {
		return string?.length > n ? string.substr(0, n - 1) + '...' : string;
	}

	const description = activeMovie?.overview;
	const poster = activeMovie?.backdrop_path;

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
					{activeMovie?.title ||
						activeMovie?.name ||
						activeMovie?.original_name}
				</h2>
				<p className={styles.moviedescription}>
					{truncate(activeMovie?.overview, 150)}
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
