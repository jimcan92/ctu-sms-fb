import { redirect } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load = (async ({ locals: { userSession }, request, url: { origin, pathname } }) => {
	if (userSession) throw redirect(300, '/auth');
	return { userSession };
}) satisfies PageServerLoad;
