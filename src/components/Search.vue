<template>
  <div class="main__search">
    <input
      type="text"
      class="main__search-input"
      :placeholder="holder"
      v-model="text"
      @keydown.enter="getUser"
    />
    <img
      src="@/assets/img/close.svg"
      alt="close"
      class="main__search-close"
      @click="clear"
    />
  </div>
  <button @click="getUser" class="main__search-btn">Найти</button>
</template>

<script>
export default {
  props: {
    holder: String,
  },
  data() {
    return {
      text: "",
    };  
  },
  methods: {
    clear() {
      this.text = "";
    },
    getUser(){
      this.$store.dispatch('getUserInfo', this.text)
      this.text = ''
    }
  },
};
</script>

<style>
</style>