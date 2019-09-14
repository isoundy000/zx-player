# zx-player(作者:初志鑫<1204505056@qq.com>)

## 注意事项
```
只能用与Vue CLI项目

```

## 鸣谢
```
努力了这么久,终于成了一名合格的代码搬运工,我只是有幸站在了巨人的肩膀上,感谢自己,感谢巨人...

```

## 实现功能
```
1.实现了加密video的src
2.实现了flv的html5播放
3.实现了hls(m3u8)的html5播放

```

### 商务合作与赞赏
```
1204505056@qq.com
## Donate
如果你觉得这个项目帮助到了你，你可以赞赏一下作者:
![donate](https://github.com/chuzhixin/donate/blob/master/qq.png)
![donate](https://github.com/chuzhixin/donate/blob/master/wx.png)
![donate](https://github.com/chuzhixin/donate/blob/master/zfb.png)
```

## 安装方法
```
cnpm i -S zx-player

```

### mp4组件main.js全局引入
```
import Vue from 'vue'
import zxPlayer from 'zxPlayer'
Vue.component('byui-player-mp4', zxPlayer.mp4)

```

### hls(m3u8)组件main.js全局引入
```
import Vue from 'vue'
import zxPlayer from 'zxPlayer'
Vue.component('byui-player-hls', zxPlayer.hls)

```

### flv组件main.js全局引入
```
import Vue from 'vue'
import zxPlayer from 'zxPlayer'
Vue.component('byui-player-flv', zxPlayer.flv)

```

### template完整示例
```
<template>
	<div id="app">
		<byui-player-mp4 :config="config1" @player="Player1 = $event" />
		<byui-player-hls :config="config2" @player="Player2 = $event" />
		<byui-player-flv :config="config3" @player="Player3 = $event" />
	</div>
</template>

<script>
export default {
	name: 'app',
	data() {
		return {
			config1: {
				id: 'mse1',
				url: '/video/boyun.mp4'
			},
			Player1: null,
			config2: {
				id: 'mse2',
				url: '/video/boyun.m3u8'
			},
			Player2: null,
			config3: {
				id: 'mse3',
				url: '/video/boyun.flv'
			},
			Player3: null
		};
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

```

 
 
 