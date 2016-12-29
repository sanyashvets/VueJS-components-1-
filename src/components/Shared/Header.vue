<template>
    <div class="row">
        <div class="col-xs-12">
            <header>
                <h1>Server Status <small>Current server:{{currentServer}}</small></h1>
            </header>
        </div>
    </div>
</template>

<script>

    import { eventBus }  from '../../main';


    export default {
        data() {
            return {
                currentServer: eventBus.currentServer
            }
        },
        created() {
            eventBus.$on('serverChanged', (id) => {
                this.currentServer = id;
            })
        }
    }

</script>

<style>

</style>
