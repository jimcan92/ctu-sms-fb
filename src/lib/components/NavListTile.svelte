<script lang="ts">
	import { ChevronRight } from 'lucide-svelte';

	export let title: string;
	export let to: string;
	export let checked;

	const closeDrawer = () => (checked = false);
</script>

<li>
	<a
		href={to}
		on:click={closeDrawer}
		class="btn btn-ghost capitalize flex justify-between items-center w-full"
	>
		<span class="flex gap-2 items-center">
			<slot name="icon" />
			{title}
		</span>
		<ChevronRight size={18} />
	</a>
</li>
