<template>
  <div class="hello">
    <h1>{{ title }}</h1>
    <p>{{ message }}</p>
    <hr>
    <div>
      <input type="text" v-model="input">
      <button v-on:click="doAction">Click</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    title: String
  },
  data:function(){
    return {
      message: 'お名前は？',
      input: 'no name',
    };
  },
  methods:{
    doAction: function(){
      this.message = 'こんにちは、' + this.input + 'さん！';
      this.$emit('result-event', this.input);
      //$emit(イベント,引数)で親コンポーネントに引数を渡す
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
