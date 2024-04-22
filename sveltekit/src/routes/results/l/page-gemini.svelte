<script setup lang="ts">
  import { onMount } from "svelte";

  let isLoading: boolean = true;
  let data: boolean = false;

  onMount(async () => {
    try {
      await getData();
    } finally {
      isLoading = false;
    }
  });

  async function getData(): Promise<void> {
    // Simulate API fetch with a delay
    await new Promise((resolve) => setTimeout(resolve, 2000));
    data = true;
  }
</script>

<div id="container" class="container">
  {#if isLoading}
    <span class="spinner">Loading...</span>
  {:else}
    <p>API fetch complete!</p>
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
    /* Add your preferred spinner styles here */
    animation: spin 1s linear infinite;
  }

  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
</style>
