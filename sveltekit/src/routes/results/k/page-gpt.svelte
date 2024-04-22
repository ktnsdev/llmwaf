<script>
    import Card from './CardGPT.svelte';
  </script>
  
  <div id="container" class="container">
    <h1>Travel destinations</h1>
    <Card title="Paris" description="The city of love and lights"></Card>
  </div>
  
  <style>
    .container {
      padding: 1rem;
      width: 100vw;
      height: 100vh;
      display: flex;
      flex-direction: column;
      align-items: center;
    }
  
    h1 {
      font-size: 1.25rem;
      line-height: 1.75rem;
      font-weight: bold;
      margin-bottom: 1rem;
    }
  </style>