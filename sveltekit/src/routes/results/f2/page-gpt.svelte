<script setup lang="ts">
    let count = 0;
  
    function showAlert() {
      count++;
      alert(`You've got an email (${count})`);
    }
  </script>
  
  <div class="container">
    <button on:click={showAlert}>Click me!</button>
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
  