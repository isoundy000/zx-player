<template>
	<div :id="config.id" :style="rootStyle"></div>
</template>

<script>
import Player from 'xgplayer';
export default {
	name: 'custom',
	props: {
		config: {
			type: Object,
			default() {
				return {
					id: 'mse',
					url: ''
				};
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
				autoplay: true, //自动播放
				loop: true, //循环播放
				fluid: true, //流式布局
				videoInit: true, //加载首屏
				playbackRate: [0.5, 0.75, 1, 1.5, 2], //快进设置
				pip: true, //画中画
				screenShot: true, //开启截屏
				lang: 'zh-cn',
				keyShortcut: 'false',
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
			let leftfps = function(player) {
				let util = Player.util;
				let btn = util.createDom('byui-leftfps', '<p class="name"><span>后退5秒</span></p>', { tabindex: 99 }, 'byui-leftfps');
				let root = player.controls;
				root.appendChild(btn);
				const ev = ['click', 'touchend'];
				ev.forEach(item => {
					btn.addEventListener(
						item,
						function(e) {
							if (player.currentTime - 5 >= 0) {
								player.currentTime -= Number(5);
							} else {
								player.currentTime = 0;
							}
							player.pause();
							setTimeout(function() {
								player.pause();
							}, 100);
							e.preventDefault();
							e.stopPropagation();
						},
						false
					);
				});
			};

			Player.install('leftfps', leftfps);
			let rightfps = function(player) {
				let util = Player.util;
				let btn = util.createDom('byui-rightfps', '<p class="name"><span>前进5秒</span></p>', { tabindex: 100 }, 'byui-rightfps');
				let root = player.controls;
				root.appendChild(btn);
				const ev = ['click', 'touchend'];
				ev.forEach(item => {
					btn.addEventListener(
						item,
						function(e) {
							if (player.currentTime + 5 >= 0) {
								player.currentTime += Number(5);
							} else {
								player.currentTime = 0;
							}
							player.pause();
							setTimeout(function() {
								player.pause();
							}, 100);
							e.preventDefault();
							e.stopPropagation();
						},
						false
					);
				});
			};

			Player.install('rightfps', rightfps);
			this.finalConfig = Object.assign(this.finalConfig, this.config);
			if (this.finalConfig.url && this.finalConfig.url !== '') {
				this.player = new Player(this.finalConfig);
				this.$emit('player', this.player);
				let $player = this.player;
			}
		}
	}
};
</script>
<style lang="scss">
.xgplayer-start {
	display: none !important;
}
.xgplayer-controls {
	display: flex !important;
}
.xgplayer-skin-default .xgplayer-playbackrate .name {
	top: 10px;
}
.byui-leftfps,
.byui-rightfps {
	-moz-box-ordinal-group: 2;
	order: 2;
	position: relative;
	outline: none;
	display: block;
	cursor: pointer;
	height: 20px;
	top: 10px;
	.name {
		text-align: center;
		font-family: PingFangSC-Regular;
		font-size: 13px;
		line-height: 20px;
		height: 20px;
		color: hsla(0, 0%, 100%, 0.8);
		span {
			width: 60px;
			height: 20px;
			line-height: 20px;
			background: rgba(0, 0, 0, 0.38);
			border-radius: 10px;
			display: inline-block;
			vertical-align: middle;
		}
	}
}
</style>
