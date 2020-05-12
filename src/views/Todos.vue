<template>
  <div>
    <todo-list
      listName="Your Todos go here!"
      todosCategory="ALL_TODOS"
    ></todo-list>
  </div>
</template>

<script>
import TodoList from "../components/TodoList";

export default {
  components: {
    TodoList
  }
};
</script>
