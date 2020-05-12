<template>
  <div class="container">
    <div class="row">
      <div class="col-12 py-5">
        <h1>{{ listName }}</h1>
      </div>
    </div>

    <div class="row mb-3" v-if="todosCategory != 'done'">
      <create-todo @on-new-todo="addTodo($event)" />
    </div>

    <div class="row">
      <div class="col-12 col-sm-10 col-lg-6">
        <ul class="list-group">
          <todo
            v-for="(todo, index) in showTodos"
            :key="index"
            :description="todo.description"
            :completed="todo.completed"
            @on-toggle="toggleTodo(todo)"
            @on-delete="deleteTodo(todo)"
            @on-edit="editTodo(todo, $event)"
          />
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import Todo from "./Todo.vue";
import CreateTodo from "./CreateTodo.vue";

export default {
  props: {
    listName: String,
    todosCategory: {
      type: String,
      default: "ALL_TODOS",
      filterTodo: index => {
        return ["COMPLETED_TODOS", "ALL_TODOS"].indexOf(index) !== -1;
      }
    }
  },
  data() {
    return {
      todos: []
    };
  },
  mounted() {
    // Save todos to local storage after component is mounted.
    const todos = JSON.parse(localStorage.getItem("vue-todos"));
    if (todos) {
      this.todos = todos;
    }
  },
  computed: {
    showTodos() {
      if (this.todosCategory === "COMPLETED_TODOS") {
        return this.todos.filter(todo => todo.completed);
      } else {
        return this.todos;
      }
    }
  },
  methods: {
    addTodo(newTodo) {
      this.todos.push({ description: newTodo, completed: false });
      this.saveToLocalStorage();
    },
    toggleTodo(todo) {
      todo.completed = !todo.completed;
      this.saveToLocalStorage();
    },
    deleteTodo(deletedTodo) {
      this.todos = this.todos.filter(todo => todo !== deletedTodo);
      this.saveToLocalStorage();
    },
    editTodo(todo, newTodoDescription) {
      todo.description = newTodoDescription;
      this.saveToLocalStorage();
    },
    // save todos to local storage
    saveToLocalStorage() {
      const todos = JSON.stringify(this.todos);
      localStorage.setItem("vue-todos", todos);
    }
  },
  components: { Todo, CreateTodo }
};
</script>

<style scoped lang="scss"></style>
