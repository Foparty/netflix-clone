import './App.css';
import {
	createBrowserRouter,
	Route,
	Link,
	createRoutesFromElements,
	RouterProvider,
} from 'react-router-dom';
import { HomeScreen } from './pages/HomeScreen/HomeScreen.jsx';
import { RootLayout } from './Layouts/RootLayout/RootLayout.jsx';
import { Profile } from './pages/Profile/Profile.jsx';
import { Landing } from './pages/Landing/Landing.jsx';
import { LandingLayout } from './Layouts/LandingLayout/LandingLayout.jsx';

const router = createBrowserRouter(
	createRoutesFromElements(
		<Route path={'/'} element={<LandingLayout />}>
			<Route index element={<Landing />} />
			<Route path={'home'} element={<RootLayout />}>
				<Route index element={<HomeScreen />} />
				<Route path={'profile'} element={<Profile />} />
			</Route>
		</Route>
	)
);
export default function App() {
	return (
		<>
			<RouterProvider router={router} />
		</>
	);
}
