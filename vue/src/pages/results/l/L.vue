<script setup lang="ts">
import { onMounted, ref } from "vue";

const data = ref<boolean>(false);

onMounted(() => {
    (async () => {
        await getData();
    })();
});

async function getData(): Promise<void> {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve();
            data.value = true;
        }, 2000);
    });
}
</script>

<template>
    <div id="container" class="container">
        <!-- TODO -->
    </div>
</template>

<style scoped>
.container {
    padding: 1rem;
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}
</style>
