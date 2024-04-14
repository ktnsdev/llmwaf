<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
    <!-- <div></div> -->
    <!-- <header>
        <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />

        <div class="wrapper">
            <HelloWorld msg="You did it!" />

            <nav>
                <RouterLink to="/">Home</RouterLink>
                <RouterLink to="/about">About</RouterLink>
            </nav>
        </div>
    </header> -->
    <main class="main">
        <RouterView />
    </main>
</template>

<style scoped>
.main {
    max-width: 100vw;
    max-height: 100vh;
}
</style>
