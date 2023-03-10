<script lang="ts">
import axios from "axios";
import { defineComponent } from "vue";
import type { PropType } from 'vue';

export default defineComponent({
    name: "Server",
    props: {
        info: {
            type: Object as PropType<ServerInfo>,
            required: true
        }
    },
    data() {
        const data: { serverStatus: Object | null, polling: number | null } = {
            serverStatus: null,
            polling: null
        };

        return data;
    },
    methods: {
        poll() {
            if (this.$props.info.status_url && this.$props.info.status_url != "null") {
                this.polling = setInterval(this.update, 10000);
                this.update();
            }
        },
        update() {
            if (this.$props.info.status_url) {
                axios.get(this.$props.info.status_url)
                    .then(response => (this.serverStatus = response.data));
            }
        }
    },
    mounted() {
        this.poll();
    },
    unmounted() {
        if (this.polling)
            clearInterval(this.polling);
    }
});
</script>

<template>
    <div class="info">
        <h2>{{ info.name }}</h2>
        <p>
            {{ info.description }}
        </p>
        <div id="details">
            <div>
                <b>Address</b>: <code>{{ info.address }}</code>
                <div v-if="$data.serverStatus" v-for="(value, key) in $data.serverStatus">
                    <b>{{ key[0].toUpperCase() + key.slice(1) }}</b>: <code>{{ value.toString().replace(/\[((?:black|white|(?:(?:dark|light)_)?gr[ae]y|blue|navy|royal|slate|sky|cyan|teal|green|acid|lime|forest|olive|yellow|gold|goldenrod|orange|brown|tan|brick|red|scarlet|crimson|coral|salmon|pink|magenta|purple|violet|maroon)|(?:#[a-f0-9]{2,6}))?]/gi, "") }}</code>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
h2 {
    font-size: 2em;
    font-weight: 600;
}

.info {
    margin: 16px;
    padding: 16px;
    border-radius: 16px;
    display: flex;
    flex-wrap: nowrap;
    flex-direction: column;
    flex-basis: 350px;
    gap: 16px;
    background: var(--element-background);
    box-shadow: var(--box-shadow) var(--shadow-color);
    text-align: center;
}
</style>
