<script lang="ts">
export default {
    name: "PageNotFound"
};
</script>

<template>
    <main>
        <h1 class="title">Page not found</h1>
        <p>
            Requested page or file not found
        </p>
        <p id="question">
            <RouterLink to="/">Return to main page?</RouterLink>
        </p>
    </main>
</template>

<style scoped>
h1 {
    font-size: 5em;
    margin-top: 1em;
    color: var(--color-accent);
    font-family: "Iceberg", "Arial", sans-serif;
    font-weight: bold;
}

#question {
    margin-top: 16px;
}

span {
    color: #f0eafa;
}
</style>
