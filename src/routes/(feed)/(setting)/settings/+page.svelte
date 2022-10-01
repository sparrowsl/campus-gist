<script>
	import { activeTab } from '$lib/stores/settings.js';
	import ProfileSection from '$lib/components/settings/profile/ProfileSection.svelte';
	import AccountSection from '$lib/components/settings/account/AccountSection.svelte';
	import FeedbackSection from '$lib/components/settings/FeedbackSection.svelte';
</script>

{#if $activeTab === 'profile'}
	<ProfileSection />
{:else if $activeTab === 'account'}
	<AccountSection />
{:else if $activeTab === 'feedback'}
	<FeedbackSection />
{/if}
