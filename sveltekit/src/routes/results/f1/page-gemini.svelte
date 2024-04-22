<script setup lang="ts">
    function showAlert() {
      alert("You've got an email");
    }
  </script>
  
  <div class="container">
    <button on:click={showAlert}>Check Email</button>
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
  