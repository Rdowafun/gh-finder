<template>
  <div class="main__user" v-if="getUser">
    <div class="main__user-left">
        <img :src="getUser.avatar_url" :alt="getUser.login">
        <a target="_blank" :href="getUser.html_url" class="main__user-link">Посетить</a>
    </div>
    <div class="main__user-right">
        <h2 class="main__user-name">{{ getUser.login }}</h2>
      <p class="main__user-repo">Репозиториев: {{ getUser.public_repos }}</p>
      <p class="main__user-created">Создан: {{ new Date(getUser.created_at).toLocaleDateString() }}</p>
      <p class="main__user-followers">Подписщиков: {{ getUser.followers }}</p>
      <p class="main__user-followed">Подписок: {{ getUser.following }}</p>
    </div>
  </div>
</template>

<script>
export default {
    computed:{
        getUser(){
            return this.$store.getters.getUser
        }
    }
}
</script>

<style>

</style>