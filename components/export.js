import mp4 from '../components/mp4'
import hls from '../components/hls'
import flv from '../components/flv'
export default {
	mp4,
	hls,
	flv
}
if (typeof window !== 'undefined' && window.Vue) {
	window.Vue.component('zx-player-mp4', mp4)
	window.Vue.component('zx-player-hls', hls)
	window.Vue.component('zx-player-flv', flv)
}
