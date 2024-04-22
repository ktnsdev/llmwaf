<script>
    export let name = 'Hello';
    export let description = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.';
</script>

<style>
    #container {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        height: 100vh;
    }

    .heading {
        font-size: 4rem;
        text-align: center;
    }

    .description {
        font-size: 1rem;
        text-align: center;
    }
</style>

<svelte>
    <div id="container">
        <h1 class="heading">{name}</h1>
        <p class="description">{description}</p>
    </div>
</svelte>
