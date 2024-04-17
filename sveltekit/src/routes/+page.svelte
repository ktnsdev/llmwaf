<script lang="ts">
    import Button from "../components/Button.svelte";
</script>

<div class="container">
    <h1>SvelteKit test cases</h1>
    <div class="buttons-container">
        <Button href="/results/a" content="A" />
        <Button href="/results/b" content="B" />
        <Button href="/results/c" content="C" />
        <Button href="/results/d" content="D" />
        <Button href="/results/e" content="E" />
        <Button href="/results/f" content="F" />
        <Button href="/results/g" content="G" />
        <Button href="/results/h" content="H" />
        <Button href="/results/i" content="I" />
        <Button href="/results/j" content="J" />
        <Button href="/results/k" content="K" />
        <Button href="/results/l" content="L" />
    </div>
</div>

<style>
    h1 {
        font-size: 20px;
    }

    .container {
        padding: 1rem;
        width: 100vw;
        height: 100vh;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 0.75rem;
        font-size: 16px;
    }

    .buttons-container {
        display: flex;
        flex-direction: column;
        gap: 0.75rem;
        align-items: center;
        justify-content: center;
    }
</style>
