<script lang="ts">
import IconRevolt from "@/components/icons/IconRevolt.vue";
import IconGithub from "@/components/icons/IconGithub.vue";

export default {
    name: "Header",
    components: { IconGithub, IconRevolt}
}
</script>

<template>
    <div id="header">
        <div id="icons">
            <a href="https://github.com/VoidDustry" title="GitHub">
                <IconGithub/>
            </a>
            <a href="https://rvlt.gg/BCXXz8Xj" title="Revolt">
                <IconRevolt/>
            </a>
        </div>
    </div>
</template>

<style scoped>
.icon {
    height: 32px;
    width: 32px;
}

#header {
    background-color: var(--header-background);
    backdrop-filter: blur(4px);
    height: 48px;
    line-height: 32px;
    padding: 8px;
    position: sticky;
    top: 0;
    z-index: 999;
    display: flex;
    flex-direction: row;
}

#icons {
    flex-direction: row;
    display: flex;
    flex-grow: 1;
    justify-content: flex-end;
}
</style>
