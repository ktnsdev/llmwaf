<script>
  let inputValue = '';

  function handleInput(event) {
    const regex = /^[0-9]*$/; // Regex to allow only numerical input
    if (regex.test(event.target.value)) {
      inputValue = event.target.value;
    }
  }
</script>

<div id="container" class="container">
  <input type="text" bind:value={inputValue} on:input={handleInput} placeholder="Enter numerical value" style="text-align: center;">
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
</style>
