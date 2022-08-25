<template>
  <div class="main__sort">
    <h2 class="main__sort-title">Сортировка</h2>
    <div class="main__sort-btns">
      <button class="main__sort-btn" @click="sortRepo('name')">ИМЯ</button>
      <button class="main__sort-btn" @click="sortRepo('stargazers_count')">ЗВЕЗДЫ</button>
      <button class="main__sort-btn" @click="sortRepo('created_at')">ДАТА</button>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    sortRepo(e) {
      this.$store.commit('sort',e)
    }
  }
}
</script>

<style>

</style>