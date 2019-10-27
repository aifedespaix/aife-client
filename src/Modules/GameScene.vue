<template>
  <div class="game">
    <div class="game-infos">
      <!--      <div v-if="cube">-->
      <!--        Cube : {{cube.position}}-->
      <!--        <button @click="cube.position.x++">+</button>-->
      <!--      </div>-->
      <!--      <div v-if="cubes">-->
      <!--        Cubes :-->
      <!--        <div class="game-infos-cubes">-->
      <!--          {{cubes}}-->
      <!--          <div v-for="[key, cube] of cubes">-->
      <!--            {{cube}}-->
      yo
      <!--          </div>-->
    </div>
    <!--      </div>-->
    <div class="scene" ref="scene"></div>
  </div>
</template>

<script lang="ts">

  import {Component, Vue} from 'vue-property-decorator';
  import MainScene from './Scene/Main.scene';

  @Component
  export default class GameScene extends Vue {
    private _mainScene!: MainScene;

    private beforeMount() {
    }

    private mounted() {
      const el = this.$refs.scene as HTMLElement;
      this._mainScene = new MainScene(el, true);
    }
  }
</script>

<style lang="scss">

  .game {
    display: grid;
    grid-template-rows: auto 1fr;
    grid-template-columns: 1fr;
    width: 100vw;
    height: 100vh;

    &-infos {
      height: 5rem;

      &-cubes {
        display: flex;
      }
    }
  }

  .scene {
  }
</style>
