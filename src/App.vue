<template>
	<div id="app">
		<!-- <byui-player-mp4 :config="config1" @player="Player1 = $event" /> -->
		<!-- <byui-player-hls :config="config2" @player="Player2 = $event" /> -->
		<!-- <byui-player-flv :config="config3" @player="Player3 = $event" /> -->
		第四种支持视频自定义
		<byui-player-custom :config="config4" @getImgSrc="getImgSrcs" @player="Player4 = $event" :jumpNum="10" />
	</div>
</template>

<script>
export default {
	name: 'app',
	data() {
		return {
			config1: {
				id: 'mse1',
				url: 'video/boyun.mp4'
			},
			Player1: null,
			config2: {
				id: 'mse2',
				url: 'video/boyun.m3u8'
			},
			Player2: null,
			config3: {
				id: 'mse3',
				url: 'video/boyun.flv'
			},
			Player3: null,
			config4: {
				id: 'mse4',
				url: 'video/boyun.mp4'
			},
			Player4: null
		};
	},
	methods: {
		getImgSrcs(src) {
			console.log(src);
		}
	}
};
</script>

<style>
body {
	margin: 0;
	padding: 0;
}
#app {
	font-family: 'Avenir', Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
}
</style>
