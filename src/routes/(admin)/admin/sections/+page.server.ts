import type { PageServerLoad } from './$types';

export const load = (async ({ locals: { sections } }) => {
	return { sections };
}) satisfies PageServerLoad;
