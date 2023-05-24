import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getDatabase } from 'firebase/database';

const firebaseConfig = {
	apiKey: 'AIzaSyCrOVxaZX-MkNaprqt8GQP51fs2-ExY9jQ',
	authDomain: 'netflix-clone-b568d.firebaseapp.com',
	projectId: 'netflix-clone-b568d',
	storageBucket: 'netflix-clone-b568d.appspot.com',
	messagingSenderId: '816444099732',
	appId: '1:816444099732:web:5efc25c44b954cc083f881',
};

const firebaseApp = initializeApp(firebaseConfig);
const db = getDatabase(firebaseApp);
const auth = getAuth(firebaseApp);

export { auth };
export default db;
