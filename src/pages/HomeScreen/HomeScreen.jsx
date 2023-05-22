import React from 'react';
import styles from './HomeScreen.module.css';
import { Banner } from '../../components/Banner/Banner.jsx';
import request from '../../../request.js';
import { Section } from '../../components/Section/Section.jsx';

export const HomeScreen = () => {
	return (
		<>
			<Banner />
			<Section
				title={'NETFLIX ORIGINALS'}
				fetchUrl={request.fetchNetflixOriginals}
				isLargeRow
			/>
			<Section title="Trending Now" fetchUrl={request.fetchTrending} />
			<Section title="Top Rated" fetchUrl={request.fetchTopRated} />
			<Section title="Action Movies" fetchUrl={request.fetchActionMovies} />
			<Section title="Comedy Movies" fetchUrl={request.fetchComedyMovies} />
			<Section title="Horror Movies" fetchUrl={request.fetchHorrorMovies} />
			<Section title="Romance Movies" fetchUrl={request.fetchRomanceMovies} />
			<Section title="Documentaries" fetchUrl={request.fetchDocumentaries} />
		</>
	);
};
