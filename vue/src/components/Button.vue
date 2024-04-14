<script setup lang="ts">
defineProps({
    href: String,
});
</script>

<template>
    <RouterLink :to="href || ''">
        <button class="container">
            <slot name="children"></slot>
        </button>
    </RouterLink>
</template>

<style scoped>
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
