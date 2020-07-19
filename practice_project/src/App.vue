<template>
  <div id="app">
    <Calc v-bind:title="message"
    v-on:result-event="appAction" />
    <hr>
    <div><table v-html="log"></table></div>
  </div>
</template>

<script>
import Calc from './components/Calc.vue'

export default {
  name: 'app',
  components: {
    Calc
  },
  data: function(){
    return {
      message: 'CALC',
      result: [],
    };//dataプロパティでresultは空配列宣言（実行した式と結果をまとめる）、logは次の算出プロパティで処理して出す
  },
  computed:{
    log:function() {
      var table = '<tr><th class="head">Expression</th><th class="head">Value</th></tr>';
      for(var i in this.result){
        table += '<tr><td>' + this.result[i][0] + '</td><th>' + this.result[i][1] + '</th></tr>'
        //resultは配列の配列として保存するためこの書き方。[[式0,結果0],[式1,結果1],...]みたいな
      }
      return table;
    }
  },
  created: function(){
  //初期化処理createdはコンポーネントのオブジェクトが作成された直後に実行する。ここで設定した値（props,dataなど）を上書きして変更する
    var items = localStorage.getItem('log');
    //localStorageはローカルストレージというものを利用するためのオブジェクト。getItemは指定の名前の値（キー）を取り出すメソッド（ここではlogという名前で保存したログ情報）
    var logs = JSON.parse(items);
    //取り出したテキストをJSONオブジェクトとして解析してJSオブジェクトとして作成（今回は元が配列なので配列で返ってきてる）
    if (logs != null){ this.result = logs; }
    //値がnullでなければresultに設定して算術プロパティが更新される
  },
  methods:{
    appAction: function(exp, res) {
      this.result.unshift([exp, res]);
      //配列.unshift(引数)メソッドは配列の最初の値に引数を追加する
      if (this.result.length > 10){
        //配列の項目数をlengthメソッドで計算、１０以上なら
        this.result.pop();
        //最後の項目を取り除く（変数に代入しているわけではないのでそのまま消える）
      }
      var log = JSON.stringify(this.result);
      //JSON.stringify(引数)は引数をJSONオブジェクトのテキストに変換
      localStorage.setItem('log', log);
      //localStorageオブジェクトのsetItem(キー,値)メソッドで作成されたテキストをローカルストレージに保存
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: #2c3e50;
  margin: 5px;
}
tr td {
  padding:5px;
  border:1px solid gray;
}
tr th.head {
  background-color: black;
  color: white;
}
</style>
