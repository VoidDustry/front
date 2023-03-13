<script lang="ts">
export default {
    name: "InternalServerError"
};
</script>

<template>
    <main>
        <h1 class="title">Internal server error</h1>
        <h2 class="title">Well-well-well...</h2>
        <p>
            The server encountered an internal error or misconfiguration<br>
            Please, contact <span>@System Administrator</span> on our Discord
        </p>
        <p id="question">
            <RouterLink to="/">Return to main page?</RouterLink>
        </p>
    </main>
</template>

<style scoped>
h1, h2 {
    color: var(--color-accent);
    font-family: "Iceberg", "Arial", sans-serif;
    animation: neon-text 3s infinite;
}

h1 {
    font-size: 5em;
    margin-top: 1em;
    font-weight: bold;
}

h2 {
    font-size: 2em;
}

a {
    animation: neon-text 3s infinite;
}

#question {
    margin-top: 16px;
}

span {
    color: #f0eafa;
}
</style>
