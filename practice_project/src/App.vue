<template>
  <div id="app">
    <!-- v-bindディレクティブで属性の値を通して子コンポーネントに値を渡す -->
    <HelloWorld v-bind:title="message"
    v-on:result-event="appAction" />
    <!-- 子コンポーネントから値を受け取る
    v-onディレクティブでresult-eventイベントにappActionメソッドをバインド
      流れは「$emitでイベント発火→イベントが発生し、メソッドを呼び出す」 -->
    <hr>
    <p>{{ result }}</p>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  },
  data: function(){
    return {
      message: 'HELLO',
      result: 'no event.',
    };
  },
  methods:{
    appAction: function(message) {
      this.result = '(*** you send :"' + message + '". ***)';
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
