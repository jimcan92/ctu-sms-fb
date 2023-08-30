import { initializeApp, type FirebaseApp, type FirebaseOptions } from 'firebase/app';
import { getFirestore, type Firestore } from 'firebase/firestore';
import { getAuth, type Auth, onIdTokenChanged } from 'firebase/auth';
import { getStorage, type FirebaseStorage } from 'firebase/storage';
import { browser } from '$app/environment';
import { invalidateAll } from '$app/navigation';

export let app: FirebaseApp;
export let db: Firestore;
export let auth: Auth;
export let storage: FirebaseStorage;

export function initFirebase(options: FirebaseOptions) {
	if (!browser) {
		throw new Error("Can't use the Firebase client on the server.");
	}
	if (!app) {
		app = initializeApp(options);
		db = getFirestore(app);
		auth = getAuth(app);
		storage = getStorage(app);
		listenForAuthChanges();
	}
}

async function setToken(token: string) {
	const options = {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json;charset=utf-8'
		},
		body: JSON.stringify({ token })
	};

	await fetch('/api/token', options);
}

function listenForAuthChanges() {
	const auth = getAuth(app);

	onIdTokenChanged(
		auth,
		async (user) => {
			if (user) {
				const token = await user.getIdToken();
				await setToken(token);
			} else {
				await setToken('');
			}
			await invalidateAll();
		},
		(err) => console.error(err.message)
	);
}
