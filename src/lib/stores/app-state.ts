import { writable } from 'svelte/store';

export const appState = writable<AppState>({ loading: false });

export function setLoading(value: boolean) {
	appState.update((as) => ({ ...as, loading: value }));
}

export function setState(state: AppError | string, type: AppAlert = 'error') {
	return appState.update((as) => {
		switch (type) {
			case 'error': {
				return { ...as, error: state as AppError };
			}
			case 'warning': {
				return { ...as, warning: state as string };
			}
			case 'info': {
				return { ...as, info: state as string };
			}
			case 'success': {
				return { ...as, success: state as string };
			}
		}
	});
}

export function clearState(type: AppAlert = 'error') {
	return appState.update((as) => {
		switch (type) {
			case 'error': {
				console.log('hi');

				return { ...as, error: null };
			}
			case 'warning': {
				return { ...as, warning: null };
			}
			case 'info': {
				return { ...as, info: null };
			}
			case 'success': {
				return { ...as, success: null };
			}
		}
	});
}
