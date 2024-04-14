<script setup lang="ts">
import Button from "@/components/Button.vue";
</script>

<template>
    <div class="container">
        <h1>Vue 3 test cases</h1>
        <div class="buttons-container">
            <Button href="/results/a">
                <template #children> A </template>
            </Button>
            <Button href="/results/b">
                <template #children> B </template>
            </Button>
            <Button href="/results/c">
                <template #children> C </template>
            </Button>
            <Button href="/results/d">
                <template #children> D </template>
            </Button>
            <Button href="/results/e">
                <template #children> E </template>
            </Button>
            <Button href="/results/f">
                <template #children> F </template>
            </Button>
            <Button href="/results/g">
                <template #children> G </template>
            </Button>
            <Button href="/results/h">
                <template #children> H </template>
            </Button>
            <Button href="/results/i">
                <template #children> I </template>
            </Button>
            <Button href="/results/j">
                <template #children> J </template>
            </Button>
            <Button href="/results/k">
                <template #children> K </template>
            </Button>
            <Button href="/results/l">
                <template #children> L </template>
            </Button>
        </div>
    </div>
</template>

<style scoped>
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
