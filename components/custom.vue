<template>
	<div :id="config.id" :style="rootStyle"></div>
</template>

<script>
import Player from 'xgplayer';
export default {
	name: 'Custom',
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
		},
		jumpNum: {
			type: Number,
			default() {
				return 5;
			}
		}
	},
	data: function() {
		return {
			player: null,
			finalConfig: {
				volume: 0,
				autoplay: true, //自动播放
				loop: true, //循环播放
				fluid: true, //流式布局
				videoInit: true, //加载首屏
				playbackRate: [0.5, 0.75, 1, 1.5, 2], //快进设置
				pip: false, //画中画
				screenShot: false, //开启截屏
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
			const that = this;
			const leftfps = function(player) {
				console.log('1');
				const util = Player.util;
				const btn = util.createDom('byui-leftfps', '<p class="name"><span>后退' + that.jumpNum + '秒</span></p>', { tabindex: 99 }, 'byui-leftfps');
				const root = player.controls;
				console.log(util);
				root.appendChild(btn);
				const ev = ['click', 'touchend'];
				ev.forEach(item => {
					btn.addEventListener(
						item,
						function(e) {
							if (player.currentTime - that.jumpNum >= 0) {
								player.currentTime -= Number(that.jumpNum);
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

			const rightfps = function(player) {
				const util = Player.util;
				const btn = util.createDom('byui-rightfps', '<p class="name"><span>前进' + that.jumpNum + '秒</span></p>', { tabindex: 100 }, 'byui-rightfps');
				const root = player.controls;
				root.appendChild(btn);
				const ev = ['click', 'touchend'];
				ev.forEach(item => {
					btn.addEventListener(
						item,
						function(e) {
							if (player.currentTime + that.jumpNum >= 0) {
								player.currentTime += Number(that.jumpNum);
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

			/* const saveScreenShot = function (data, filename) {
			  const saveLink = document.createElement('a')
			  saveLink.href = data
			  saveLink.download = filename
			  const event = document.createEvent('MouseEvents')
			  event.initMouseEvent('click', true, false, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null)
			  saveLink.dispatchEvent(event)
			} */

			const screenShot11 = function(player) {
				// const player = this
				const util = Player.util;
				// if (!player.config.screenShot11) {
				//   return
				// }
				const btn = util.createDom('byui-screenShot', '<p class="name"><span>截图</span></p>', { tabindex: 111 }, 'byui-screenShot');
				const canvas = document.createElement('canvas');
				const canvasCtx = canvas.getContext('2d');
				const img = new Image();
				canvas.width = this.config.width || 600;
				canvas.height = this.config.height || 337.5;
				const ratio = canvas.width/canvas.height
				const root = player.controls;
				root.appendChild(btn);
				const array = ['click', 'touchstart'];
				array.forEach(item => {
					btn.addEventListener(item, function(e) {
						e.preventDefault();
						e.stopPropagation();
						img.onload = (function() {
							canvasCtx.drawImage(player.video, 0, 0, canvas.width, canvas.height);
							img.setAttribute('crossOrigin', 'anonymous');
							// img.src = canvas.toDataURL('image/png',ratio).replace('image/png', 'image/octet-stream');
							img.src = canvas.toDataURL('image/png',ratio);
							const screenShotImg = img.src.replace(/^data:image\/[^;]+/, 'data:application/octet-stream');
							// console.log(img.src);
							that.$emit('getImgSrc', img.src);
							
							// saveScreenShot(screenShotImg, '截图.png')
						})();
					});
				});
			};
			Player.install('screenShot11', screenShot11);
			this.finalConfig = Object.assign(this.finalConfig, this.config);
			if (this.finalConfig.url && this.finalConfig.url !== '') {
				this.player = new Player(this.finalConfig);
				this.$emit('player', this.player);
				const $player = this.player;
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
.byui-screenShot {
	-moz-box-ordinal-group: 12;
	order: 12;
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
