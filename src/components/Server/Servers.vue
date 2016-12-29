<template>
    <div class="col-xs-12 col-sm-6">
        <ul class="list-group">
            <single-server v-for="(server, index) in servers" :pass-server="server"></single-server>
        </ul>
    </div>
</template>

<script>

    import { eventBus } from '../../main';
    import SingleServer from './SingleServer.vue';

    export default {
        data() {
            return {
                servers: eventBus.servers
            }
        },
        methods: {

        },
        components: {
            'single-server': SingleServer
        }
    }

</script>

<style>

</style>
