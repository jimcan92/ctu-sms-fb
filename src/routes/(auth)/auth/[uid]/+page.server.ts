import { error, redirect } from '@sveltejs/kit';
import type { Actions, PageServerLoad } from './$types';

export const load = (async ({
	locals: { userSession, student, subjects, sections },
	params: { uid }
}) => {
	if (!userSession) throw redirect(303, '/auth');
	if (userSession.uid !== uid) throw error(404, 'Not Found');

	return { userSession, student, subjects, sections };
}) satisfies PageServerLoad;

export const actions: Actions = {
	default: () => {}
};
