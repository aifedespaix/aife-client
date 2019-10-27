<template>
  <div class="app" ref="app">
    <GameScene/>
  </div>
</template>

<script lang="ts">

  import {Component, Vue} from 'vue-property-decorator';
  import GameScene from './Modules/GameScene.vue';

  @Component({
    components: {GameScene},
  })
  export default class App extends Vue {
  }
</script>

<style lang="scss">
  $primary-color: white;
  $bg: black;
  html, body {
    width: 100%;
    height: 100%;
    overflow: hidden;
    padding: 0;
    margin: 0;
  }

  .app {
    display: flex;
    width: 100%;
    height: 100%;
    justify-content: center;
    align-items: center;
  }
</style>
