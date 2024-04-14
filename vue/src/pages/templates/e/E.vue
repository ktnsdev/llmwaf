<script setup lang="ts">
const isHidden: boolean = false;
</script>

<template>
    <div id="container" class="container">
        <div class="circle" />
        <!-- /* TODO */ -->
    </div>
</template>

<style scoped>
.container {
    padding: 1rem;
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.circle {
    width: 100px;
    height: 100px;
    border-radius: 9999px;
    background-color: rgb(254, 215, 170);
}
</style>
