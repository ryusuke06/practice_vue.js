<template>
	<section>
		<h1>{{title}}</h1>
		<p>{{message}}</p>
		<ul v-for="(data, key) in json_data">
			<!-- キーをメアド、それに名前と年齢のオブジェクト。何をキーにしたか考える必要がある -->
			<li>{{data.name}} ({{data.age}}) [{{key}}]</li>
		</ul>
	</section>
</template>

<script>
const axios = require('axios');

let url = "https://ryu-nuxt.firebaseio.com/person.json";//firebaseで入力したpersonデータ

export default {
	data: function(){
		return{
			title: 'Axios',
			message: 'axios sample',
		};
	},
	asyncData: async function() {
		//getで受け取ったdataをjson_dataに設定
		let result = await axios.get(url);
		return{json_data: result.data};
	},
}
</script>

<style>
ul {
	margin:0px 10px;
	background-color: aliceblue;
}
li {
	padding: 10px;
	font-size: 16px;
}
</style>