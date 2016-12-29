<template>
    <div class="col-xs-12 col-sm-6">
        <p>Current Server: {{ currentServer }}</p>
        <p>Server Status: {{ showStatus }}</p>

        <button class="btn btn-success" @click="setNormal" :disabled="setDisabled">Normalize Server Status</button>
    </div>

</template>

<script>

    import { eventBus } from '../../main';

    export default{
        data() {
            return {
                currentServer: eventBus.currentServer,
                servers: eventBus.servers
            }
        },
        methods: {
            setNormal() {
                eventBus.normaliseStatus(this.currentServer - 1 );
            }
        },
        computed: {
            showStatus() {
                return this.servers[this.currentServer - 1].status;
            },
            setDisabled() {
                return this.servers[this.currentServer - 1 ].status !== 'Normal' ? false : true;
            }
        },
        created() {
            eventBus.$on('serverChanged', (id) => {
                this.currentServer = id;
            });
            eventBus.$on('statusNormalised', (serverID) => {
                this.servers[serverID].status = 'Normal';
            });
        }
    }

</script>

<style>

</style>
