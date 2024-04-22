<script>
    import { useLocation } from '@sveltejs/kit';

    const location = useLocation();
</script>

<div class="container">
    <h1>Current path: {location.pathname}</h1>
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