import Vue from 'vue'
import App from './App.vue'
import {
	mp4,
	flv,
	hls,
	custom
} from '../components/export.js'
Vue.component('byui-player-mp4', mp4)
Vue.component('byui-player-flv', flv)
Vue.component('byui-player-hls', hls)
Vue.component('byui-player-custom', custom)
Vue.config.productionTip = false
new Vue({
	render: h => h(App),
}).$mount('#app')
