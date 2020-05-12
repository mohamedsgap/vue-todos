import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import About from "../views/About.vue";
import Todos from "../views/Todos.vue";
import CompletedTodos from "../views/CompletedTodos.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    children: [
      {
        path: "",
        name: "Todos",
        component: Todos
      },
      {
        path: "/completed",
        name: "CompletedTodos",
        component: CompletedTodos
      },
      {
        path: "/about",
        name: "About",
        component: About
      }
    ]
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
