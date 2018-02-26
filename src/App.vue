<template>
  <div id="app">
    <transition name="fade">
      <router-view/>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'App',
};
</script>

<style lang="scss" scoped>
  .fade-enter {
    opacity: 0;
  }
  .fade-enter-active {
    transition: all ease-in-out .3s;
  }
  .fade-enter-to {
    opacity: 1;
  }
</style>

