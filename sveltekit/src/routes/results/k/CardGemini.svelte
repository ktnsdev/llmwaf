<script>
    export let title;
    export let description;
  </script>
  
  <div class="card">
    <div class="card-title">
      <h2>{title}</h2>
    </div>
  
    <div class="card-divider"></div>
  
    <div class="card-description">
      <p>{description}</p>
    </div>
  </div>
  
  <style>
    .card {
      background-color: #f0f0f0;
      border-radius: 10px;
      box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.2);
      padding: 1rem;
      width: 300px; /* Set card width */
      display: flex;
      flex-direction: column;
      gap: 1rem; /* Add gap between sections */
    }
  
    .card-title {
      text-align: center;
    }
  
    .card-title h2 {
      margin: 0;
    }
  
    .card-divider {
      border-bottom: 1px solid #ccc;
    }
  
    .card-description {
      text-align: justify;
    }
  </style>
  