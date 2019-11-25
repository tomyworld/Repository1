<template>
	<div>
		<h2>{{msg}}</h2>
		{{$store.state.count}}
		<button @click="changedata">改变数据</button>
		{{$store.getters.sumCount}}
		<button @click="chagngeAction">使用action</button>
		<br />
		<v-action></v-action>
		<hr />
    <button @click="getData">千峰</button>
		{{count}}
	</div>
</template>

<script>
	import store from "../../vuex/store.js"
	import ActionSheet from "./Action-sheet.vue"
  import axios from "axios"
	export default{
		data(){
			return{
				msg:"首页组件",
				list:[]
			}
		},
		methods:{
			changedata(){
				store.commit("incount");
			},
			chagngeAction(){
				store.dispatch("inMutations");
			},
      getData(){
			  var url ='http://www.phonegap100.com/appapi.php?a=getPortalList&catid=20&page=1';
        axios.get(url).then((data)=>{
          console.log(data);
        })
      }
		},
		components:{
			"v-action":ActionSheet
		},
		store,
		computed:{
			count(){
				return this.$store.state.count;
			}
		},
    mounted() {

    }
  }
</script>

<style>
</style>
