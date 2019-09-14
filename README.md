# zx-player(作者:初志鑫<1204505056@qq.com>)

## 注意事项
```
只能用与Vue CLI项目

```

## 鸣谢
```
努力了这么久,终于成了一名合格的代码搬运工,我只是有幸站在了巨人的肩膀上,感谢自己,感谢巨人...

```

### 商务合作
```
1204505056@qq.com

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

 
 
 