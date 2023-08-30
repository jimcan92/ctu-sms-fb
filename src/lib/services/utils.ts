import type { FirebaseError } from 'firebase/app';
import type { FirebaseError as FirebaseAdminError } from 'firebase-admin/app';

export function handleError(e: any): AppError {
	if ((e as FirebaseError) || (e as FirebaseAdminError))
		return { message: e.message, code: e.code };
	return { message: e.toString() };
}
