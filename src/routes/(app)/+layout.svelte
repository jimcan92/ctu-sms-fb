<script lang="ts">
	import Avatar from '$lib/components/Avatar.svelte';
	import { signOut } from '$lib/services/client';
	import { appState, clearState } from '$lib/stores/app-state.js';
	import {
		AlertTriangle,
		CheckCircle2,
		Info,
		LogIn,
		LogOut,
		UserCog2,
		Users2,
		X,
		XCircle
	} from 'lucide-svelte';

	export let data;
</script>

<div class="flex flex-col min-h-[100dvh]">
	<div class="flex w-full">
		{#if $appState.error}
			<div class="alert alert-error rounded-none">
				<XCircle />
				<div class="flex gap-4 items-center">
					{#if $appState.error?.code}
						<span class="whitespace-nowrap font-bold">{$appState.error?.code}:</span>
					{/if}
					<span>{$appState.error?.message}</span>
				</div>
				<button class="btn btn-sm btn-circle btn-ghost" on:click={() => clearState()}><X /></button>
			</div>
		{/if}
		{#if $appState.warning}
			<div class="alert alert-warning rounded-none">
				<AlertTriangle />
				<div class="flex">
					<span>{$appState.warning}</span>
				</div>
				<button class="btn btn-sm btn-circle btn-ghost" on:click={() => clearState('warning')}>
					<X />
				</button>
			</div>
		{/if}
		{#if $appState.info}
			<div class="alert alert-info rounded-none">
				<Info />
				<div class="flex">
					<span>{$appState.info}</span>
				</div>
				<button class="btn btn-sm btn-circle btn-ghost" on:click={() => clearState('info')}>
					<X />
				</button>
			</div>
		{/if}
		{#if $appState.success}
			<div class="alert alert-success rounded-none">
				<CheckCircle2 />
				<div class="flex">
					<span>{$appState.success}</span>
				</div>
				<button class="btn btn-sm btn-circle btn-ghost" on:click={() => clearState('success')}>
					<X />
				</button>
			</div>
		{/if}
		{#if $appState.loading}
			<progress class="progress rounded-none progress-accent h-5" />
		{/if}
	</div>
	<div class="flex justify-center w-full bg-base-200">
		<div class="navbar max-w-screen-xl">
			<div class="navbar-start">
				<a class="btn btn-ghost normal-case hover:bg-transparent text-xl" href="/">CTU SMS</a>
			</div>
			<div class="navbar-end pr-2 sm:pr-6 xl:pr-0">
				<div class="lg:flex items-center hidden gap-2">
					<div class="menu menu-horizontal">
						{#if data.isAdmin}
							<a class="btn" href="/admin"><UserCog2 size={18} /> Admin</a>
						{/if}
						<a class="btn" href="/auth">
							{#if data.student}
								<LogIn size={18} /> Account
							{:else}
								<Users2 size={18} /> Sign in
							{/if}
						</a>
						{#if data.student}
							<a href="/" on:click={signOut} class="btn"><LogOut size={18} /> Sign out</a>
						{/if}
					</div>
					<Avatar student={data.student ?? undefined} size="sm" outline="accent" />
				</div>
				<div class="dropdown dropdown-end lg:hidden">
					<button class="btn btn-ghost btn-circle">
						<Avatar student={data.student ?? undefined} outline="accent" />
					</button>
					<!-- svelte-ignore a11y-no-noninteractive-tabindex -->
					<ul tabindex="0" class="dropdown-content bg-base-200 py-2 mt-4 min-w-[150px] rounded-md">
						<li class="btn btn-ghost btn-sm truncate rounded-none w-full text-left">
							<a href="/auth" class="w-full flex items-center gap-2">
								{#if data.student}
									<LogIn size={18} /> Account
								{:else}
									<Users2 size={18} /> Sign in
								{/if}
							</a>
						</li>
						{#if data.student}
							<li class="btn btn-ghost btn-sm truncate rounded-none w-full text-left">
								<a href="/" on:click={signOut} class="w-full flex items-center gap-2">
									<LogOut size={18} /> Sign out
								</a>
							</li>
						{/if}

						{#if data.isAdmin}
							<li class="btn btn-ghost btn-sm truncate rounded-none w-full text-left">
								<a href="/admin" class="w-full flex items-center gap-2">
									<UserCog2 size={18} /> Admin
								</a>
							</li>
						{/if}
					</ul>
				</div>
			</div>
		</div>
	</div>
	<slot />
</div>
