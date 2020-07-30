<template>
	<section>
		<h1>{{title}}</h1>
		<p>{{message}}</p>
		<div>
			<input type="text" v-model="msg" />
			<button @click="doClick">Click</button>
		</div>
		<hr>
		<table>
			<tr>
				<th>User ID</th>
				<td>{{json_data.userId}}</td>
			</tr>
			<tr>
				<th>ID</th>
				<td>{{json_data.title}}</td>
			</tr>
			<tr>
				<th>Body</th>
				<td>{{json_data.body}}</td>
			</tr>
		</table>
	</section>
</template>

<script>
const axios = require('axios');//axiosオブジェクトを定数として呼び出し

let url = "https://jsonplaceholder.typicode.com/posts/";//jsonデータを練習で取り出せるページ

export default {
	data: function(){
		return{
			title: 'Axios',
			message: 'axios sample',
			msg: '',
			json_data: {},
		};
	},
	methods: {
		doClick:function(event) {
			/*axios.get(アドレス).then((res)=>{アクセス後の処理}) ちなみにresはgetメソッドの返り値をそのまま引数にしてる。あとresと名付けなければならないわけではない
			非同期でデータを取ってきて処理する場合thenの後に書いておかないとアクセスが完了してないのに処理しようとしてエラーになる可能性がある*/
			axios.get(url + this.msg).then((res) => {
				this.message = 'get ID=' + this.msg;
				this.json_data = res.data;
			}).catch((error) => {
			//catchメソッドは例外処理のこと！
				this.message = 'ERROR';
				this.json_data = {};
			});
		},
	},
}
</script>