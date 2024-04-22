<script setup lang="ts">
    import { onMount } from "svelte";

    let data: boolean = false;
    let isLoading: boolean = true;

    onMount(() => {
        (async () => {
            await getData();
            isLoading = false;
        })();
    });

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
        <!-- Show spinner while loading -->
        <div class="spinner"></div>
    {:else}
        <!-- Show "API fetch complete" message when loading is complete -->
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
        border: 4px solid rgba(0, 0, 0, 0.1);
        border-left-color: #7983ff;
        border-radius: 50%;
        width: 50px;
        height: 50px;
        animation: spin 1s linear infinite;
    }

    @keyframes spin {
        to {
            transform: rotate(360deg);
        }
    }
</style>
