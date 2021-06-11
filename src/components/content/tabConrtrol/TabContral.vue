<template>
  <div class="tab-control">
    <div class="tab-control-item" v-for="(item,index) in titles" :class="{active:index ===currentIndex}" @click="changeIndex(index)">
      <span>{{item}}</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: "",
    props: {
      titles: {
        type: Array,
        default () {
          return []
        }
      }
    },
    data() {
      return {
        currentIndex: 0
      }
    },
    methods:{
      changeIndex(index){
        this.currentIndex = index
        this.$emit('tabClick' ,index)
      }
    }
  }
</script>

<style>
  .tab-control {
    display: flex;
    height: 44px;
    line-height: 44px;
    background-color: #fff;
  }

  .tab-control .tab-control-item {
    flex: 1;
    text-align: center;
    font-size: 14px;
  }

  .tab-control .tab-control-item span {
    padding: 4px;
  }

  .tab-control .active {
    color: var(--color-high-text);
  }

  .tab-control .active span {
    border-bottom: 3px solid var(--color-high-text);
  }
</style>
