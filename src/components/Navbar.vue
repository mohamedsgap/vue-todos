<template>
  <nav class="navbar navbar-expand-lg navbar-light">
    <router-link :to="{ name: 'Todos' }">
      <a class="navbar-brand" href="">Vue Todos</a>
    </router-link>
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarNav"
      aria-controls="navbarNav"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item mt-1">
          <router-link :to="{ name: 'Todos' }" class="nav-link p-3">
            Todos
          </router-link>
        </li>
        <li class="nav-item mt-1">
          <router-link :to="{ name: 'CompletedTodos' }" class="nav-link p-3">
            Completed Todos
          </router-link>
        </li>
        <li class="nav-item mt-1">
          <router-link :to="{ name: 'About' }" class="nav-link p-3">
            About
          </router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Navbar",
  data() {
    return {};
  }
};
</script>

<style lang="scss" scoped>
.navbar {
  background-color: #37db60;
}
.nav-item .nav-link {
  color: azure;
  font-size: 25px;
}
.navbar-light .navbar-brand {
  color: azure;
  font-size: 35px;
}
</style>
