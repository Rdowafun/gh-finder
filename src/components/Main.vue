<template>
  <main class="main">
    <div class="container">
      <div class="main__container">
        <Search holder="Введите имя пользователя..." />
        <div class="error" v-if="error">
          <h2 class="error__title">{{ error }}</h2>
        </div>
        <User />
        <Sort />
        <Repos />
        <div class="no-rep" v-if="noRep">
          <h2>{{ noRep }}</h2>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import Search from "@/components/Search.vue";
import User from "@/components/User.vue";
import Sort from "@/components/Sort.vue";
import Repos from "@/components/Repos.vue";
export default {
  components: {
    Search,
    User,
    Sort,
    Repos,
  },
  computed: {
    error() {
      return this.$store.getters.getError;
    },
    noRep() {
      return this.$store.getters.getNoRep;
    },
  },
};
</script>

<style>
</style>