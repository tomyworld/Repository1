<template>
	<div>
		<h2>{{msg}}</h2>
		<br />
		<hr />
		<div class="contain">
    	<div class="left">
    		<ul>
    			<li><router-link to="/news/list">新闻列表</router-link></li>
    			<li><router-link to="/news/add">增加新闻</router-link></li>
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
	import axios from "axios";
	export default{
		data(){
			return{
				msg:"新闻组件",
				list:[]
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
