import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

export function getInitials(name: string) {
	const parts = name.split(' ');
	let initials = '';

	for (const p of parts) {
		if (p.length > 0 && p !== '') {
			initials += p[0];
		}
	}

	return initials === '' ? undefined : initials;
}
