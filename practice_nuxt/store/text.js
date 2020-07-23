import Vuex from 'vuex'
//Vuexオブジェクトをインポート
import createPersistedState from "vuex-persistedstate";
//リロードしても値をローカルストレージに保存

const createStore = () => {
	return new Vuex.Store({
		/*createStoreという関数を定義。Vuex.Storeオブジェクトを作成
		  Vuex.Storeはストアと呼ばれるVuexの情報をまとめて保存するオブジェクト*/
		state: function(){
			/*stateという値（ステート）はコンポーネントでいうdataのような物。
			  例えば {{$store.state.message}} などでページに値を呼び出せる。*/
			return {
				message: 'This is store message',
				counter: 0,
				/*ページから値を操作できる。例えば
				methods{
	              doAction: function(){
	                this.$store.state.counter++;
	              }
				}で数字をカウントするなど
				**様々なところで利用されるステートをページで操作するのはおすすめしない**→ミューテーションを使うのがいい */
			};
		},
		mutations: {
			/* 名前:function(変数,第一引数,...){...}で定義（引数の定義は必要によって）
			   @click = $store.commit(名前, 引数)などでイベント発火して処理を呼び出し（@ = v-on:のこと） */
			count: function(state, n) {
				state.counter += n;
			},
			say: function(state, msg) {
				state.message = msg;
			},
			obj_count: function(state, obj) {
				state.message = obj.message;
				state.counter = obj.add;
			},
			/* 複数の引数を渡したいときはオブジェクト形式で渡す
			   $store.commit({type:'count', message:'add 1!', add:1})のように呼び出し */
			reset: function(state) {
				state.counter = 0;
				state.message = 'reset now!'
			}
		},
		actions: {
			/*アクションは複数のミューテーションを実行するときに用いる
			  $store.dispatch.doit のように呼び出す*/
			doit: function(context) {
				var n = Math.floor(Math.random() * 10);
				context.commit('count', n)
				context.commit('say', 'add ' + n + 1)
			}
		},
		plugins: {
			createPeersistedState()
		},//これだけでstateに用意された値は全てローカルストレージに保存
	})
}

export default createStore