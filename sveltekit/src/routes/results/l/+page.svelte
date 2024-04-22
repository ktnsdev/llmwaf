<script setup lang="ts">
    import { onMount } from "svelte";

    let data: boolean = false;
    let isLoading: boolean = false;

    onMount(() => {
        fetchData();
    });

    async function fetchData(): Promise<void> {
        isLoading = true;
        await getData();
        isLoading = false;
    }

    async function getData(): Promise<void> {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve();
                data = true;
            }, 2000);
        });
    }
</script>

<div id="container" class="container">
    {#if isLoading}
        <div class="spinner"></div>
    {:else if data}
        <p>API fetch complete</p>
    {/if}
</div>

<style>
    .container {
        padding: 1rem;
        width: 100vw;
        height: 100vh;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

    .spinner {
        border: 4px solid #f3f3f3;
        border-top: 4px solid #3498db;
        border-radius: 50%;
        width: 30px;
        height: 30px;
        animation: spin 2s linear infinite;
    }

    @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
    }
</style>