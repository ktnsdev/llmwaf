<div id="container" class="container">
    <div class="form-container">
      <div class="input-wrapper">
        <input type="text" class="input-field" inputmode="numeric" pattern="[0-9]*" />
        <button class="submit-btn">Submit</button>
      </div>
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
  </style>