<script setup lang="ts">
      const isHidden: boolean = false;
    
      function toggleCircle() {
        isHidden = !isHidden;
      }
    </script>
    
    <div id="container" class="container">
      <div class="circle" bind:class={isHidden ? 'hidden' : ''} />
      <button on:click={toggleCircle}>Toggle Circle</button>
      </div>
    
    <style>
      .container {
        padding: 1rem;
        width: 100vw;
        height: 100vh;
        display: flex;
          /* Removed unnecessary flex-direction: column */
        justify-content: center;
        align-items: center;
      }
    
      .circle {
        width: 100px;
        height: 100px;
        border-radius: 9999px;
        background-color: rgb(254, 215, 170);
      }
    
      .hidden {
        opacity: 0;
      }
    </style>
    