<script lang="ts">
	import { PenSquare, Trash2 } from 'lucide-svelte';
	import type { PageData } from './$types';

	export let data: PageData;

	$: sections = data.sections;
</script>

<div class="flex justify-center items-center p-4 md:p-8">
	<div class="overflow-x-auto max-w-6xl w-full bg-base-300 rounded-lg shadow-lg p-2">
		<table class="table">
			<thead class="text-lg">
				<tr>
					<th />
					<th>Code</th>
					<th>Section Name</th>
					<th>Action</th>
				</tr>
			</thead>
			<tbody>
				{#each sections as section, i}
					<tr class="hover">
						<th>{i + 1}</th>
						<td>{section.uid}</td>
						<td>{section.name}</td>
						<td class="join">
							<button class="btn btn-sm join-item"><PenSquare size={18} /></button>
							<button class="btn btn-sm join-item"><Trash2 size={18} /></button>
						</td>
					</tr>
				{/each}
			</tbody>
		</table>
	</div>
</div>
