<script setup lang="ts">
    import { onMount } from "svelte";

    let data: boolean = false;

    onMount(() => {
        (async () => {
            await getData();
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
    <!-- TODO -->
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
</style>
