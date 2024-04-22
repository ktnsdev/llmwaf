<script>
    let inputValue = '';
    let errorMessage = '';
  
    function handleSubmit() {
      if (inputValue >= 1000) {
        errorMessage = 'Input exceeds the maximum value';
      } else {
        errorMessage = '';
        // Do something with the input value
        console.log('Input value:', inputValue);
      }
    }
  </script>
  
  <div id="container" class="container">
    <div class="form-container">
      <div class="input-wrapper">
        <input
          type="text"
          class="input-field"
          inputmode="numeric"
          pattern="[0-9]*"
          bind:value={inputValue}
        />
        <button class="submit-btn" on:click={handleSubmit}>Submit</button>
      </div>
      {#if errorMessage}
        <div class="error-message">{errorMessage}</div>
      {/if}
    </div>
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
  
    .form-container {
      text-align: center;
    }
  
    .input-wrapper {
      display: flex;
      align-items: center;
    }
  
    .input-field {
      padding: 0.5rem;
      font-size: 1rem;
      border: 1px solid #ccc;
      border-radius: 4px;
      width: 200px;
    }
  
    .submit-btn {
      margin-left: 0.5rem;
      padding: 0.5rem 1rem;
      font-size: 1rem;
      border: 1px solid #ccc;
      border-radius: 4px;
      background-color: #f0f0f0;
      cursor: pointer;
    }
  
    .error-message {
      color: red;
      margin-top: 0.5rem;
    }
  </style>