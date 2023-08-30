import type { PageServerLoad } from './$types';

export const load = (async ({ locals: { subjects } }) => {
	return { subjects };
}) satisfies PageServerLoad;
