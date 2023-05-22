import { useEffect, useState } from 'react';
import styles from './Section.module.css';
import axios from '../../../axios.js';

export const Section = ({ title, fetchUrl, isLargeRow }) => {
	const [movies, setMovies] = useState([]);

	const base_url = 'https://image.tmdb.org/t/p/original/';

	useEffect(() => {
		async function fetchData() {
			const request = await axios.get(fetchUrl);
			setMovies(request.data.results);
			return request;
		}

		fetchData();
	}, [fetchUrl]);
	return (
		<section className={styles.section}>
			<h2 className={styles.title}>{title}</h2>

			<div className={styles.posters}>
				{movies.map(
					(movie) =>
						((isLargeRow && movie.poster_path) ||
							(!isLargeRow && movie.backdrop_path)) && (
							<img
								className={
									isLargeRow
										? `${styles.largeposter}`
										: `${styles.normalposter}`
								}
								key={movie.id}
								src={`${base_url}${
									isLargeRow ? movie.poster_path : movie.backdrop_path
								}`}
								alt={movie.name}
								height={isLargeRow ? '260px' : '99px'}
								width={'auto'}
							/>
						)
				)}
			</div>
		</section>
	);
};
