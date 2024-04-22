<script setup lang="ts">
    import { onMount } from 'svelte';

    let isHidden: boolean = false;

    function toggleVisibility() {
        isHidden = !isHidden;
    }
</script>

<div id="container" class="container">
    {#if !isHidden}
        <div class="circle" />
    {/if}
    <button on:click={toggleVisibility}>
        {isHidden ? 'Show Circle' : 'Hide Circle'}
    </button>
</div>

<style>
    .container {
        padding: 1rem;
        width: 100vw;
        height: 100vh;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .circle {
        width: 100px;
        height: 100px;
        border-radius: 9999px;
        background-color: rgb(254, 215, 170);
    }
</style>
