<script>
	import { activeTab } from '$lib/stores/settings.js';
	import ProfileSection from '$lib/components/settings/ProfileSection.svelte';
	import AccountSection from '$lib/components/settings/account/AccountSection.svelte';
	import Feedback from '$lib/components/settings/Feedback.svelte';
</script>

{#if $activeTab === 'profile'}
	<ProfileSection />
{:else if $activeTab === 'account'}
	<AccountSection />
{:else if $activeTab === 'feedback'}
	<Feedback />
{/if}
