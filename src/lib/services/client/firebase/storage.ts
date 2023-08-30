import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import { storage } from './config';
import { handleError } from '$lib/services/utils';

export async function upload(file: File) {
	try {
		const fileRef = ref(storage, file.name);
		await uploadBytes(fileRef, file);
		const url = await getDownloadURL(fileRef);
		return { url };
	} catch (e) {
		return { error: handleError(e) };
	}
}
