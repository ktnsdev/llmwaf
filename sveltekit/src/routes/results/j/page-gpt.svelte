<script>
    import { fly } from 'svelte/transition';
</script>

<div id="container" class="container">
    <button transition:fly="{{ y: 200, duration: 500 }}" style="--rainbow-color: hsl(0, 100%, 50%);" on:mouseenter="{() => button.style.setProperty('--rainbow-color', 'hsl(0, 100%, 50%)')}">
        Hover me
    </button>
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

    button {
        padding: 0.75rem 1rem;
        border-radius: 0.375rem;
        background-color: var(--rainbow-color); /* Transitioned property */
        border: none;
        font-size: 16px;
        transition: background-color 0.3s ease; /* Transition effect */
    }

    button:hover {
        cursor: pointer;
    }
</style>
