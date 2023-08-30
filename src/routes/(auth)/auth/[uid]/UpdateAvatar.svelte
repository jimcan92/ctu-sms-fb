<script lang="ts">
	import { page } from '$app/stores';
	import { enhance } from '$app/forms';
	import { Pen, Save, X } from 'lucide-svelte';
	import { upload, updateStudent } from '$lib/services/client';
	import { appState, setLoading } from '$lib/stores/app-state';
	import type { SubmitFunction } from './$types';

	export let photoUrl = '';

	setLoading(false);

	let dialog: HTMLDialogElement;
	let input: HTMLInputElement;
	let image: HTMLImageElement;

	let imgFile: File | null = null;

	function onChange() {
		if (input.files) {
			imgFile = input.files[0];

			if (imgFile) {
				const reader = new FileReader();

				reader.addEventListener('load', async () => {
					const result = reader.result!.toString();

					image.setAttribute('src', result);
				});
				reader.readAsDataURL(imgFile);
			}
		}
	}

	const onUpload: SubmitFunction = async () => {
		setLoading(true);

		if (imgFile) {
			const { url, error } = await upload(imgFile);
			if (error) console.log(error);

			if (url) {
				const err = await updateStudent($page.data.userSession?.uid!, { photoUrl: url });
				if (err) console.log(err);
			}
		}

		return async ({ update }) => {
			await update();
			setLoading(false);
			dialog.close();
		};
	};
</script>

<button
	class="btn btn-xs btn-ghost btn-circle absolute top-0 right-0"
	on:click={() => dialog.showModal()}
>
	<Pen size={18} />
</button>
<dialog bind:this={dialog} class="modal">
	<form class="modal-box max-w-max" method="post" use:enhance={onUpload}>
		<h3 class="font-bold text-lg mb-8">Update Avatar</h3>
		<div class="flex flex-col gap-4 items-center">
			<div class="avatar">
				<div class="rounded w-72">
					<img class="w-full object-contain" bind:this={image} src={photoUrl} alt="" />
				</div>
			</div>
			<input
				type="file"
				bind:this={input}
				class="file-input w-72"
				accept=".jpg, .jpeg, .png"
				on:change={onChange}
			/>
		</div>
		<div class="modal-action">
			<button class="btn btn-ghost" type="button" on:click={() => dialog.close()}>
				<X size={18} /> Close
			</button>
			<button disabled={$appState.loading} class="btn btn-accent">
				{#if $appState.loading}
					<Save size={18} /> Saving <span class="loading loading-dots loading-md" />
				{:else}
					<Save size={18} /> Save
				{/if}
			</button>
		</div>
	</form>
	<form method="dialog" class="modal-backdrop">
		<button />
	</form>
</dialog>
