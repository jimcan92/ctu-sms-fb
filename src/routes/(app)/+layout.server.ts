import type { LayoutServerLoad } from './$types';

export const load = (async ({ locals: { userSession, student } }) => {
	return { isAdmin: userSession?.admin, student };
}) satisfies LayoutServerLoad;
