import Vue from 'vue'
import App from './App.vue'

export const eventBus = new Vue({
    data: {
        servers: [
            {id: 1, status: 'Normal'},
            {id: 2, status: 'Critical'},
            {id: 3, status: 'Unknown'},
            {id: 4, status: 'Critical'},
            {id: 5, status: 'Normal'},
            {id: 6, status: 'Normal'},
        ],
        currentServer: 1
    },
    methods: {
        setCurrentServer(num) {
            this.$emit('serverChanged', num);
            this.currentServer = num;
        },
        normaliseStatus(serverID) {
            this.$emit('statusNormalised', serverID);
            this.servers[serverID].status = 'Normal';
        }
    }
});

new Vue({
  el: '#app',
  render: h => h(App)
})
