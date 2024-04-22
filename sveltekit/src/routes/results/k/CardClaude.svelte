<div class="card">
    <h2>{title}</h2>
    <div class="divider"></div>
    <p>{description}</p>
</div>

<style>
    .card {
        background-color: #f5f5f5;
        border-radius: 8px;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        padding: 1rem;
        max-width: 400px;
    }

    h2 {
        font-size: 1.25rem;
        line-height: 1.75rem;
        font-weight: bold;
        margin-bottom: 0.5rem;
    }

    .divider {
        height: 1px;
        background-color: #d9d9d9;
        margin-bottom: 0.5rem;
    }

    p {
        font-size: 1rem;
        line-height: 1.5rem;
        color: #4a4a4a;
    }
</style>

<script>
    export let title = '';
    export let description = '';
</script>