<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;

	$: subjects = data.subjects;
</script>

<p>subjects</p>
