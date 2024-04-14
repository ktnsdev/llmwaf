<script setup lang="ts">
const time = new Date();
</script>

<template>
    <div id="container" class="container">
        <h1>Good {{ time.getHours() < 12 ? "morning" : "afternoon" }}</h1>
        <p>
            {{ `${time.getHours()}:${String(time.getMinutes()).padStart(2, "0")}` }}
        </p>
        <div class="circle" />
    </div>
</template>

<style scoped>
.container {
    width: 100vw;
    height: 100vh;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1rem;
}

h1 {
    font-size: 1.25rem;
    line-height: 1.75rem;
    font-weight: bold;
}

p {
    font-size: 1rem;
    color: #4a5568;
}

.circle {
    width: 100px;
    height: 100px;
    border-radius: 9999px;
    background-color: rgb(254, 215, 170);
}
</style>
