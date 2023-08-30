import { redirect } from '@sveltejs/kit';
import type { LayoutServerLoad } from './$types';
import { getDocsAsAdmin } from '$lib/services/server';

export const load = (async ({ locals: { userSession, student, appError, sections, subjects } }) => {
	if (!userSession?.admin) {
		throw redirect(303, '/auth');
	}

	const { docs, error } = await getDocsAsAdmin<Student>('students');

	if (error) appError = error;

	return { userSession, student, students: docs, sections, subjects };
}) satisfies LayoutServerLoad;
