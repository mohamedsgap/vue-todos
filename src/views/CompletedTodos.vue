<template>
  <div>
    <todo-list
      listName="Your completed Todos!"
      todosCategory="COMPLETED_TODOS"
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
