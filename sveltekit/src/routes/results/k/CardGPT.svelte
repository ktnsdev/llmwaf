<script>
    export let title;
    export let description;
  </script>
  
  <div class="card">
    <h2>{title}</h2>
    <div class="divider"></div>
    <p>{description}</p>
  </div>
  
  <style>
    .card {
      background-color: #f0f0f0;
      border-radius: 8px;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
      padding: 1rem;
      margin: 1rem auto;
      max-width: 400px;
    }
  
    .divider {
      height: 1px;
      background-color: #ccc;
      margin: 0.5rem 0;
    }
  
    h2 {
      font-size: 1.2rem;
      margin-bottom: 0.5rem;
    }
  
    p {
      font-size: 1rem;
      color: #333;
    }
  </style>