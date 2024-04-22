<script lang="ts">
  import Card from './CardGemini.svelte';
</script>

<div id="container" class="container">
  <h1>Travel destinations</h1>

  <Card title="London" description="Bustling metropolis with iconic landmarks like Big Ben and Buckingham Palace" />
</div>

<style>
  .container {
    padding: 1rem;
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center; /* Center cards horizontally */
  }

  h1 {
    font-size: 1.25rem;
    line-height: 1.75rem;
    font-weight: bold;
  }
</style>