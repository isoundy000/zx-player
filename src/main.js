import Vue from 'vue'
import App from './App.vue'
import zxPlayer from './install.js'

Vue.config.productionTip = false
Vue.component('byui-player-mp4', zxPlayer.mp4)
Vue.component('byui-player-flv', zxPlayer.flv)
Vue.component('byui-player-hls', zxPlayer.hls)


Vue.config.productionTip = false

new Vue({
	render: h => h(App),
}).$mount('#app')
