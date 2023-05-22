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

const router = createBrowserRouter(
	createRoutesFromElements(
		<Route path={'/'} element={<RootLayout />}>
			<Route index element={<HomeScreen />} />
			<Route path={'profile'} element={<Profile />} />
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
