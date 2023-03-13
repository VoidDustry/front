<script lang="ts">
export default {
    name: "Title"
}
</script>

<template>
    <div id="title">
        <h1>VoidDustry</h1>
    </div>
</template>

<style scoped>
#title {
    padding: 5% 0 2%;
}
h1 {
    animation: neon-text 3s infinite;
    font-size: 5em;
    margin-block-end: .1em;
    color: var(--color-accent);
    font-family: "Iceberg", "Arial", sans-serif;
    font-weight: bold;
}
</style>
