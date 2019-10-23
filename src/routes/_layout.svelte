<script>
    import { stores } from '@sapper/app';
    const { session } = stores();
	import NavBar from '../components/NavBar.svelte';

	export let segment;
</script>

<NavBar {segment}/>

<main>
	<slot></slot>
</main>