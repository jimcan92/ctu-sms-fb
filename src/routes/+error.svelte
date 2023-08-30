<script>
	import { page } from '$app/stores';
	import { ChevronsLeft, ChevronsRight } from 'lucide-svelte';
</script>

<div class="flex items-center justify-center min-h-screen">
	<div class="flex flex-col items-center">
		<h1 class="font-bold text-3xl text-accent sm:text-6xl md:text-8xl">{$page.status}</h1>

		<h6 class="text-2xl font-bold text-center text-warning/30 md:text-3xl">
			<span class="text-error">Oops!</span> Page {$page.error?.message}
		</h6>

		<p class="text-center text-base-content/30 md:text-lg">
			The page you’re looking for doesn’t exist.
		</p>

		<a href="/" class="link link-hover flex mt-4">
			<ChevronsLeft />
			<span>Go home</span>
		</a>
	</div>
</div>
