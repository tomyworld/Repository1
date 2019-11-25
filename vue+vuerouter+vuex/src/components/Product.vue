<template>
	<div>
		<h2>产品页面</h2>
		<hr />
		<div class="contain">
    	<div class="left">
    		<ul>
    			<li><router-link to="/product/list">新闻列表</router-link></li>
    			<li><router-link to="/product/add">增加新闻</router-link></li>
    		</ul>
    	</div>
    	<div class="right">
    		右侧
    		<router-view></router-view>
    	</div>
    </div>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				msg:"产品详情组件",
			}
		},
		methods:{
			
		},
		mounted(){
			
		}
	}
</script>

<style>
</style>