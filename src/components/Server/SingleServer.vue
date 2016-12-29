<template>
    <li class="list-group-item" @click="openServerInfo">
        Server #{{server.id}}
    </li>
</template>

<script>

    import { eventBus } from '../../main';

    export default {
        props: {
          'pass-server': Object
        },
        data() {
            return {
                server: this.passServer
            }
        },
        methods: {
            openServerInfo() {
                eventBus.setCurrentServer(this.server.id);
            }
        },
    }

</script>