<script>
	import { activeTab } from '$lib/stores/settings.js';
	import ProfileSection from '$lib/components/settings/profile/ProfileSection.svelte';
	import AccountSection from '$lib/components/settings/account/AccountSection.svelte';
	import FeedbackSection from '$lib/components/settings/FeedbackSection.svelte';
	import SettingsAsideTab from '$lib/components/settings/SettingsAsideTab.svelte';
</script>

<article
	class="container mx-auto flex min-h-[90vh] max-w-6xl bg-white px-3 py-10 md:grid md:grid-cols-[200px,1fr]"
>
	<SettingsAsideTab />

	{#if $activeTab === 'profile'}
		<ProfileSection />
	{:else if $activeTab === 'account'}
		<AccountSection />
	{:else if $activeTab === 'feedback'}
		<FeedbackSection />
	{/if}
</article>
