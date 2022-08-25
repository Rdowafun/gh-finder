<template>
  <div class="repos__item">
    <div class="repos__item-left">
      <h2 class="repos__item-title">{{ repo.name }}</h2>
      <p class="repos__item-stars">Кол-во звёзд: {{ repo.stargazers_count }} ⭐</p>
      <p class="repos__item-date">
        Дата добавления:
        {{ new Date(repo.created_at).toLocaleDateString() }}</p>
    </div>
    <div class="repos__item-right">
      <a :href="repo.html_url" target="_blank" class="repos__item-link">ПОСЕТИТЬ</a>
    </div>
  </div>
</template>

<script>
export default {
  props: ['repo']
}
</script>

<style>

</style>