<script>
    import { fade } from "svelte/transition";

    export let message;

    const duration = 3000; // Duration for which the toast will be displayed (in milliseconds)

    let visible = true;

    // Hide the toast after duration
    setTimeout(() => {
        visible = false;
    }, duration);
</script>

{#if visible}
    <div class="toast" transition:fade>
        <p>{message}</p>
    </div>
{/if}

<style>
    .toast {
        position: fixed;
        bottom: 20px;
        left: 50%;
        transform: translateX(-50%);
        background-color: rgba(0, 0, 0, 0.8);
        color: #fff;
        padding: 10px 20px;
        border-radius: 5px;
    }

    p {
        margin: 0;
    }
</style>
