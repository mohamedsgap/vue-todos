<template>
  <div>
    <navbar />
    <div class="container py-auto">
      <router-view> </router-view>
    </div>
  </div>
</template>

<script>
import Navbar from "../components/Navbar";

export default {
  components: {
    Navbar
  }
};
</script>
