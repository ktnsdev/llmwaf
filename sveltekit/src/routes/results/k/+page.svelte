<script>
    import Card from './CardClaude.svelte';
</script>

<div id="container" class="container">
    <h1>Travel destinations</h1>

    <Card
        title="Bali, Indonesia"
        description="Bali is a paradise island known for its beautiful beaches, lush rice terraces, ancient temples, and vibrant culture. It's a perfect destination for those seeking a blend of adventure, relaxation, and spiritual rejuvenation."
    />
</div>

<style>
    .container {
        padding: 1rem;
        width: 100vw;
        height: 100vh;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

    h1 {
        font-size: 1.25rem;
        line-height: 1.75rem;
        font-weight: bold;
        margin-bottom: 1rem;
    }
</style>