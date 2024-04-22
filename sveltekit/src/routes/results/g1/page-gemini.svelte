<script>
  let numberValue = "";

  function preventDefault(event) {
    event.preventDefault();
    // Handle the submitted number here (e.g., console.log(numberValue))
  }
</script>

<div id="container" class="container">
  <form on:submit={preventDefault}>
    <label for="numberInput">Enter a number:</label>
    <input type="number" id="numberInput" bind:value={numberValue}>
    <button type="submit">Submit</button>
  </form>
</div>


<style>
.container {
  padding: 1rem;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

.container form {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

</style>
