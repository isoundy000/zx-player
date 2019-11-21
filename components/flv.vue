<template>
  <div :id="config.id" :style="rootStyle"></div>
</template>

<script>
import FlvPlayer from 'xgplayer-flv.js';
import Player from 'xgplayer';

export default {
	name: 'Flv',
	props: {
		config: {
			type: Object,
			default() {
				return { id: 'mse', url: '' };
			}
		},
		rootStyle: {
			type: Object,
			default() {
				return {};
			}
		}
	},
	data: function() {
		return {
			player: null,
			finalConfig: {
				volume: 0,
				autoplayMuted: true, //解决浏览器非静音阻止自动播放机制
				autoplay: true, //自动播放
				loop:true,//循环播放
				fluid: true, //流式布局
				videoInit: true, //加载首屏
				playbackRate: [0.5, 0.75, 1, 1.5, 2], //快进设置
				pip: true, //画中画
				screenShot: true, //开启截屏
				lang: 'zh-cn',
				hasVideo: true,
				hasAudio: true,
				flvOptionalConfig: {
					enableWorker: true
				},
				enterLogo: {
					url: '',
					width: 231,
					height: 42
				},
				enterBg: {
					color: 'rgba(0,0,0,0.87)'
				},
				enterTips: {
					background: 'linear-gradient(to right, rgba(0,0,0,0.87), #3D96FD, rgba(86,195,248), #3D96FD, rgba(0,0,0,0.87))'
				}
			}
		};
	},
	mounted() {
		this.init();
	},
	beforeUpdate() {
		this.init();
	},
	beforeDestroy() {
		this.player && typeof this.player.destroy === 'function' && this.player.destroy();
	},
	methods: {
		init() {
			this.finalConfig = Object.assign(this.finalConfig, this.config);
			if (this.finalConfig.url && this.finalConfig.url !== '') {
				this.player = new FlvPlayer(this.finalConfig);
				this.$emit('player', this.player);
			}
		}
	}
};
</script>
