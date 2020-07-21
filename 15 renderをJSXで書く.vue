<!-- コンポーネントで使う場合の例 -->
<template>
  <div class="hello">
    <h1>{{ title }}</h1>
    <p>{{ message }}</p>
  </div>
</template>

<script>
    Vue.config.devtools = true;
	export default{
		name: 'Hello World',
		data: function() {
			return {
				title:'JSX',
				message:'これはdataに用意したメッセージです'
			};
		},//JSXはvue.jsで使える文法{this.data}の形がJSXで値を埋め込む基本形
		render: function(h){
			return (
				<div>
				  <h1>{this.title}</h1>
				  <p>{this.message}</p>
				</div>
			);
		}
	}
</script>