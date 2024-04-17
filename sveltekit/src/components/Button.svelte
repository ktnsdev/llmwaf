<script lang="ts">
    export let content: string;
    export let href: string;
</script>

<a {href}>
    <button class="container">
        {content}
    </button>
</a>

<style>
    .container {
        padding: 0.75rem 1rem;
        background-color: rgb(229, 231, 235);
        border-radius: 0.375rem;
        border: none;
        font-size: 16px;
    }

    .container:hover {
        cursor: pointer;
    }
</style>
