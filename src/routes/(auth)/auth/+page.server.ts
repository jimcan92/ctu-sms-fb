import { redirect } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load = (async ({ locals: { userSession } }) => {
	if (userSession) throw redirect(301, `/auth/${userSession.uid}`);

	throw redirect(303, '/auth/signin');
}) satisfies PageServerLoad;
