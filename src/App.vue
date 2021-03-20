<!-- To jest template do HTMLa -->
<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <Todo />
  </div>
</template>

<script>
import Todo from './components/Todo.vue'

export default {
  components: {
    Todo
  }
}
</script>

<!-- To jest CSS do stylizacji: -->
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
