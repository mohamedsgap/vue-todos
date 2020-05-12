<template>
  <div>
    <navbar />
    <todo-list list-name="My to-dos" />
  </div>
</template>

<script>
import Navbar from "./components/Navbar.vue";
import TodoList from "./components/TodoList.vue";

export default {
  name: "App",
  components: {
    Navbar,
    TodoList
  }
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
