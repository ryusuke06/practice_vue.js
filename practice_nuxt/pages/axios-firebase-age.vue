<template>
	<section class="container">
		<h1>{{title}}</h1>
		<p>{{message}}</p>
		<input v-model="find">
		<button @click="getData">Click</button>
		<hr>
		<ul v-for="(data, key) in json_data">
			<li><strong>{{key}}</strong><br>{{data}}</li>
		</ul>
	</section>
</template>

<script>
const axios = require('axios');

let url = "https://ryu-nuxt.firebaseio.com/person.json?orderBy=%22age%22";

export default {
	data: function(){
		return{
			title: 'Axios',
			find: '',
			message: 'axios sample',
			json_data:{},
		};
	},
	methods: {
		getData: function() {
			let range = this.find.split(',');
			let age_url = url + "&startAt=" + range[0] + "&endAt=" + range[1];
			axios.get(age_url).then((res) => {
				this.message = 'get: ' + range[0] + ' < age < ' + range[1];
				this.json_data = res.data;
			}).catch((error) => {
				this.message = 'ERROR!';
				this.json_data = {};
			});
		}
	}
}
</script>