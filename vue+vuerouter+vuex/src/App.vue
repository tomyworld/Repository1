<template>
  <div id="app">
    <h1>{{ msg }}</h1>
    <h2>欢迎使用vue</h2>
    <router-link to="/news">新闻</router-link>
    <router-link to="/product">产品</router-link>
    <router-link to="/home">首页</router-link>
    <router-view></router-view>
    
    
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      msg: '根组件',
      aid:55555
    }
  }
}
</script>

<style>
	.contain{
		display: flex;
	}
	.left{
		width: 200px;
		min-height: 400px;
		border-right:1px solid #f00;
	}
	.right{
		min-height: 400px;
		flex: 1;
	}
	.router-link-active{
		color: red;
	}
</style>





