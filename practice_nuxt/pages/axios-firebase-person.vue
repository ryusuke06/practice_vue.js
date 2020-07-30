<template>
	<section class="container">
		<h1>{{title}}</h1>
		<p>{{message}}</p>
		<input v-model="find">
		<button @click="getData">Click</button>
		<hr>
		<ul>
			<li>{{json_data}}</li>
		</ul>
	</section>
</template>

<script>
const axios = require('axios');

let url = "https://ryu-nuxt.firebaseio.com/person/";

export default {
	data: function(){
		return{
			title: 'Axios',
			find: '',
			message: 'axios sample',
			json_data:{},//{key{data}}のjsonデータなら宣言しなくてもいいが、{data}だと宣言して入れてあげないといけないってことかな？
		};
	},
	methods: {
		getData: function() {
			let id_url = url + this.find + '.json';
			axios.get(id_url).then((res) => {
				this.message = 'get ID=' + this.find;
				this.json_data = res.data;
			}).catch((error) => {
				this.message = 'ERROR!';
				this.json_data = {};
			});
		}
	}
}
//dataとかメソッドとかスクリプト関係が全てundefinedになっていたらscriptを閉じてるか確認しよう！アホかな？？？
</script>