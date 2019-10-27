<template>
    <div class="map" ref="map">
        <div class="test">a</div>
        <div class="test2">b</div>
        <div class="test3">b</div>
        <div class="test4">b</div>
    </div>
</template>

<script lang="ts">

  import {Component, Vue} from "vue-property-decorator";

  @Component
  export default class Map extends Vue {
    private rows = 20;
    private cols = 20;

    private mounted() {
      const map = this.$refs.map as HTMLDivElement;

      map.style.gridTemplateColumns = `repeat(${this.cols}, 1fr)`;
      map.style.gridTemplateRows = `repeat(${this.rows}, 1fr)`;
    }
  }
</script>

<style lang="scss">
    .map {
        display: grid;
        grid-template-columns: repeat(20, 1fr);
        grid-template-rows: repeat(20, 1fr);
        grid-gap: 1px;
        width: 100vmin;
        height: 100vmin;
        background-color: #fff;
        /*transform: rotate(45deg);*/
    }
    .test {
        background-color: rgba(255, 255, 0, 0.5);
        grid-column: 3;
        grid-row: 5;
    }
    .test2 {
        background-color: rgba(0, 0, 255, 0.5);
        grid-column: 3;
        grid-row: 5;
    }
    .test3 {
        background-color: rgba(0, 0, 255, 0.5);
        grid-column: 4;
        grid-row: 5;
    }
    .test4 {
        background-color: rgba(0, 0, 255, 0.5);
        grid-column: 3;
        grid-row: 5;
    }
    .map * {
        transform: rotate(45deg);
    }
</style>
