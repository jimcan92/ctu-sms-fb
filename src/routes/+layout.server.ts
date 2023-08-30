import type { LayoutServerLoad } from './$types';

export const load = (async ({ locals: { appError, sections } }) => {
	return { appError };
}) satisfies LayoutServerLoad;
