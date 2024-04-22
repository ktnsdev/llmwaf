<script>
  import { writable } from 'svelte/store';

  let inputValue = '';
  let error = writable('');

  function handleInput(event) {
    const regex = /^[0-9]*$/; // Regex to allow only numerical input
    if (regex.test(event.target.value)) {
      inputValue = event.target.value;
      error.set('');
    } else {
      error.set('Please enter only numerical values.');
    }
  }

  function handleSubmit() {
    if (inputValue >= 1000) {
      error.set('Input exceeds the maximum value.');
    } else {
      // Handle submit logic here
      console.log("Submitted:", inputValue);
      error.set('');
    }
  }
</script>

<div id="container" class="container">
  <input type="text" bind:value={inputValue} on:input={handleInput} placeholder="Enter numerical value" style="text-align: center;">
  <button on:click={handleSubmit}>Submit</button>
  {#if $error}
    <p style="color: red; margin-top: 0.5rem;">{$error}</p>
  {/if}
</div>

<style>
  .container {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1rem;
    width: 100vw;
    height: 100vh;
  }

  input {
    padding: 0.5rem;
    border-radius: 5px;
    border: 1px solid #ccc;
    width: 200px;
  }

  button {
    padding: 0.5rem 1rem;
    margin-left: 1rem;
    border-radius: 5px;
    border: 1px solid #007bff;
    background-color: #007bff;
    color: #fff;
    cursor: pointer;
  }
</style>
