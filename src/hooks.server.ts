import {
	decodeToken,
	exists,
	getDocAsAdmin,
	getDocsAsAdmin,
	saveAsAdmin
} from '$lib/services/server';
import type { Handle } from '@sveltejs/kit';

export const handle: Handle = async ({ event, resolve }) => {
	const token = event.cookies.get('token') || '';
	const { decodedToken, error } = await decodeToken(token);

	if (decodedToken) {
		event.locals.appError = null;
		const { uid, name, email, picture } = decodedToken;
		event.locals.userSession = { uid, name, email, admin: email === 'jimcan051592@gmail.com' };

		if (!(await exists('students', uid))) {
			await saveAsAdmin<Student>('students', uid, { name, photoUrl: picture });
		}

		const { doc: student, error: studentErr } = await getDocAsAdmin<Student>('students', uid);
		if (studentErr) event.locals.appError = studentErr;
		event.locals.student = student ?? null;
	}

	const { docs: sections, error: secsErr } = await getDocsAsAdmin<Section>('sections');
	const { docs: subjects, error: subsErr } = await getDocsAsAdmin<Subject>('subjects');
	if (sections) event.locals.sections = sections;
	if (subjects) event.locals.subjects = subjects;
	if (error) event.locals.appError = error;
	if (secsErr) event.locals.appError = secsErr;
	if (subsErr) event.locals.appError = subsErr;

	return await resolve(event);
};
