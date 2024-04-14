<template>
    <div id="container" class="container">
        <button>Hover me</button>
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

button {
    padding: 0.75rem 1rem;
    border-radius: 0.375rem;
    background-color: rgb(229, 231, 235);
    border: none;
    font-size: 16px;
}

button:hover {
    cursor: pointer;
}
</style>
