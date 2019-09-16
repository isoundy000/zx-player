import mp4 from './mp4'
import hls from './hls'
import flv from './flv'
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
