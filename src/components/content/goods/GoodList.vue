<template>
  <div class="goods">
    <good-item v-for="item in goods" :item="item"></good-item>
  </div>
</template>

<script>
  import GoodItem from './GoodItem.vue'
  export default {
    name: "GoodList",
    props: {
      goods: {
        type: Array,
        default () {
          return []
        }
      }
    },
    components: {
      GoodItem
    }
  }
</script>

<style>
  .goods {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    background-color: var(--color-background);

    padding: 2px;
  }
</style>
