<script>
    import { page } from '$app/stores';
</script>

<div class="container">
    <h1>Current path</h1>
    <p>{$page.url.pathname}</p>
</div>

<style>
    .container {
        padding: 1rem;
        width: 100vw;
        height: 100vh;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    h1 {
        font-size: 1.25rem;
        line-height: 1.75rem;
    }
</style>