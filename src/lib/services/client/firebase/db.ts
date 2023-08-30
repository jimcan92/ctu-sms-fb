import { collection, doc, updateDoc } from 'firebase/firestore';
import { db } from './config';
import { handleError } from '$lib/services/utils';

export async function updateStudent(
	uid: string,
	data: Partial<Student>
): Promise<AppError | undefined> {
	try {
		const colRef = collection(db, 'students');
		console.log(uid);

		await updateDoc(doc(colRef, uid), data);
	} catch (e) {
		return handleError(e);
	}
}
