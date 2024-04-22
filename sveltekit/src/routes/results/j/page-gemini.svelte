<script>
    import { onMount } from 'svelte';
  
    let rainbowGradient = 'linear-gradient(to right, red, orange, yellow, green, blue, indigo, violet)';
  
    onMount(() => {
      const container = document.getElementById('container');
      container.style.setProperty('--rainbow-gradient', rainbowGradient);
    });
  </script>
  
  <div id="container" class="container">
    <button>Hover me</button>
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
  
    button {
      padding: 0.75rem 1rem;
      border-radius: 0.375rem;
      background-color: var(--rainbow-gradient); /* Use the defined gradient */
      border: none;
      font-size: 16px;
    }
  
    button:hover {
      cursor: pointer;
    }
  </style>
  