<template>
  <div class="tab-bar-item" @click="itemClick">
    <div v-if="!isActive">
      <slot name="item-icon"></slot>
    </div>
    <div v-else>
      <slot name="item-icon-active"></slot>
    </div>
    <!-- <div :class="{active:isActive}">
      <slot name="item-text"></slot>
    </div> -->
    <div :style="activeSytle">
      <slot name="item-text"></slot>
    </div>

  </div>
</template>

<script>
  export default {
    name: "TabBarItem",
    props: {
      path: String,
      activeColor:{
        type:String,
        default:"red"
      }
    },
    data() {
      return {
        // isActive: true
      }
    },
    //根据this.$route.path来判断当前哪个路由被处于活跃状态
    computed: {
      isActive() {
        return this.$route.path.indexOf(this.path) != -1
      },
      activeSytle(){
        return this.isActive ? {color:this.activeColor}:{}
      }
    },
    methods: {
      itemClick() {
        this.$router.replace(this.path).catch((error) => error)
      }
    }
  }
</script>

<style>
  .tab-bar-item {
    flex: 1;
    text-align: center;
    height: 49px;
    font-size: 14px;
  }

  .tab-bar-item img {
    width: 24px;
    height: 24px;
    margin: 0 auto;
    margin-top: 3px;
    /* 去掉图片下的3px */
    vertical-align: middle;
    margin-bottom: 2px;
  }

  /* .active {
    color: darkgray;
  } */
</style>
