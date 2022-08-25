<template>
  <div class="repos" v-if="getRepos">
    <ReposItem v-for="repo in getRepoSort" :key="repo.id" :repo="repo" />
  </div>
</template>

<script>
import ReposItem from "@/components/ReposItem.vue";

export default {
  components: {
    ReposItem,
  },
  computed: {
    getRepos() {
      return this.$store.getters.getRepos;
    },
    getRepoSort() {
      return this.$store.getters.getRepoSort;
    },
  },
};
</script>

<style>
</style>