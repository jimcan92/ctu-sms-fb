import type { LayoutLoad } from './$types';
import { error } from '@sveltejs/kit';
import { browser } from '$app/environment';
import { initFirebase } from '$lib/services/client';
import { PUBLIC_FIREBASE_CLIENT_CONFIG } from '$env/static/public';

export const load: LayoutLoad = async ({ data: { appError } }) => {
	if (browser) {
		try {
			initFirebase(JSON.parse(PUBLIC_FIREBASE_CLIENT_CONFIG));
		} catch (ex) {
			throw error(500);
		}
	}

	return { appError };
};
