<template>
	<div class="hello">
		<h1>{{title}}</h1>
		<p>{{message}}</p>
		<hr>
		<div>
			<div><textarea v-model="fomula" cols="40" rows="5"></textarea></div>
			<!-- 入力された値はfomulaの値と同期 -->
			<div><button v-on:click="doAction">CALC</button></div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'Calc',
		props: {
			title: String,
		},
		data:function(){
			return {
				message: 'Enter expression:',
				fomula: '0',
			};
		},
		methods:{
			doAction: function(){
				var arr = this.fomula.trim().split('¥n');
				//fomula（入力された値のこと）をtrimメソッド（文字列の前後の半角空白削除）、split(input)メソッドで改行(¥n)で分割して配列に
				var last = arr.pop();
				//上記の配列の最後の項目を配列から取り出して変数lastに代入（配列からは消える）
				var fn = '';
				//変数fnは空の文字列宣言
				for(var n in arr){
					if (arr[n].trim() != ''){
						//もしも前後の空白を除去してもテキストが空でないなら
						fn += 'var ' + arr[n] + ';';
						//"var テキスト;var テキスト;...;"と追加していく
					}
				}
				fn += 'return ' + last + ';';
				//"var テキスト;var テキスト;...result テキスト;"でテキスト完成
				var exp = 'function f(){' + fn + '} f();';
				/*function f(){完成したテキスト}f();でf()の関数を定義してJSで実行するスクリプト完成
				  なぜスクリプト形式にする？→複数行に渡り変数を定義して計算するかも→var文が必要、JSで実行できるスクリプトにしないといけない*/
				var ans = eval(exp);
				//eval(string)関数で文字列として渡された変数・数字のスクリプトを実行してくれる
				this.message = 'answer: ' + ans;
				//計算結果をmessageに渡す
				var re = arr.join(';').trim();
				//jon(separator)メソッドで配列をセミコロンで区切りながら結合→テキスト;テキスト;...テキスト→最後にセミコロンはない状態
				if (re != '') { re += ';' }
				//配列が空でなければ最後にセミコロンをつける
				re += last;
				//最後の項目を付け足す（１項目だけだとarrが空でlastは空でない場合があるのでif文に含めない！）
				this.$emit('result-event', re, ans);
				//親コンポーネントに計算過程テキストと計算結果を渡す
			}
		}
	}
</script>