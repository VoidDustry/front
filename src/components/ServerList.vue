<script lang="ts">
import Server from "@/components/Server.vue";
import axios from "axios";
import { defineComponent } from "vue";

export default defineComponent({
    name: "ServerList",
    components: { Server },
    data() {
        const data: { servers: ServerInfo[] } = { servers: [] };
        return data;
    },
    methods: {
        fetch() {
            axios.get("http://10.8.0.4:4600/servers/list")
                .then(response => (this.servers = response.data));
        }
    },
    created() {
        this.fetch();
    }
});
</script>

<template>
    <div id="servers" v-if="$data.servers">
        <Server v-for="server in $data.servers" :info="server"/>
    </div>
</template>

<style scoped>
#servers {
    padding-top: 16px;
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: center;
}
</style>
