<script lang="ts">
	import { signinWithGoogle } from '$lib/services/client';
	import { appState, setLoading, setState } from '$lib/stores/app-state';

	const onSignin = async () => {
		setLoading(true);
		const error = await signinWithGoogle();
		if (error) setState(error);
	};
</script>

<main class="flex min-h-screen items-center justify-center p-4">
	<div
		class="grid md:grid-cols-2 max-w-sm md:max-w-none shadow-lg hover:drop-shadow-[0_0_4px_#3d98ff]"
	>
		<div
			class="flex flex-col rounded-none rounded-t-lg md:rounded-l-lg md:rounded-none items-center bg-gradient-to-br from-primary to-accent h-full justify-center"
		>
			<svg class="w-60 md:w-full" viewBox="0 10 210 220" version="1.1">
				<path
					d="m 116.17321,130.01454 c -12.24274,-10.42226 -15.11,-8.69281 -15.11,-8.69281 -5.09735,2.82175 -10.9229,4.59672 -17.20356,4.59672 -6.7813,0 -13.06197,-2.00253 -18.4779,-5.2794 -21.93682,10.28573 -38.32116,38.27565 -40.7333,72.22765 l 118.37688,0.45512 c -1.72946,-26.53353 -14.56386,-52.88502 -26.85212,-63.30728 z m -32.26805,55.25165 -8.78383,-9.10242 7.96461,-41.55251 -4.46018,-6.18964 c 1.1378,-1.54741 9.32997,-1.72946 10.5588,0 l -4.46019,6.18964 7.96462,41.55251 z m -18.4779,-66.85723 c 5.41594,3.27687 11.6966,5.2794 18.4779,5.2794 6.28066,0 12.0607,-1.72946 17.20356,-4.55121 11.05943,-6.09861 18.65995,-17.7497 18.65995,-31.266776 0,-19.797754 -16.06576,-35.863513 -35.86351,-35.863513 -19.79775,0 -35.86351,16.065759 -35.86351,35.863513 0,12.970926 7.00886,24.257926 17.38561,30.538586 z m 101.76498,32.0405 c -8.2832,-7.05437 -10.24022,-5.87106 -10.24022,-5.87106 -3.45891,1.91151 -7.41846,3.09482 -11.65109,3.09482 -4.59671,0 -8.82934,-1.36536 -12.51581,-3.54994 -14.88245,6.96335 -25.94188,25.89636 -27.58032,48.92547 l 80.14675,0.31859 c -1.1378,-18.02278 -9.8306,-35.818 -18.15931,-42.91788 z m -21.84579,37.41091 -5.96208,-6.14412 5.37042,-28.12646 -3.0038,-4.18711 c 0.77371,-1.04678 6.32618,-1.1378 7.1454,0 l -3.0038,4.18711 5.37042,28.12646 z m -12.51582,-45.2845 c 3.64096,2.23009 7.9191,3.54994 12.51582,3.54994 4.23262,0 8.14666,-1.18331 11.65109,-3.09482 7.50949,-4.1416 12.65235,-12.01519 12.65235,-21.16311 0,-13.42606 -10.87738,-24.257926 -24.25793,-24.257926 -13.42606,0 -24.25793,10.877376 -24.25793,24.257926 -0.091,8.82934 4.64223,16.47537 11.6966,20.70799 z m 0,0"
					class="fill-slate-300"
				/>
			</svg>
			<div class="flex flex-col items-center p-4 mb-4">
				<h1 class="text-2xl md:text-4xl font-bold mb-4 text-center">Welcome to CTU SMS</h1>
				<p class="md text-lg font-bold uppercase text-center">Student Management System</p>
				<p class="md text-lg font-semibold text-center">Cebu Technological University</p>
				<p class="md text-lg font-semibold leading-none text-center">Moalboal Campus</p>
				<p class="md text-lg text-center">by Jimboy Cantila</p>
			</div>
		</div>
		<div
			class="flex flex-col bg-base-300 p-6 rounded-none rounded-b-lg md:rounded-none md:rounded-r-lg items-center h-full justify-center"
		>
			<p class="text-center">You need to signin with your google account to continue</p>
			<button
				disabled={$appState.loading}
				class="btn w-full max-w-md bg-slate-50 hover:bg-slate-400 text-slate-900 mt-6 mb-2"
				on:click={onSignin}
			>
				<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24">
					<path
						d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
						fill="#4285F4"
					/>
					<path
						d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
						fill="#34A853"
					/>
					<path
						d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
						fill="#FBBC05"
					/>
					<path
						d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
						fill="#EA4335"
					/>
					<path d="M1 1h22v22H1z" fill="none" />
				</svg>
				{#if $appState.loading}
					Signing in with Google <div class="loading loading-dots" />
				{:else}
					Sign in with Google
				{/if}
			</button>
			<p class="leading-tight text-center">
				By signin in you agree on our
				<a class="link link-hover link-accent" href="/policies/terms-and-conditions">
					Terms and Conditions
				</a>
			</p>
		</div>
	</div>
</main>
