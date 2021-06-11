<template>
  <div class="recommend">
    <div v-for="item in recommends" class="recommend-item">
      <a :href="item.link">
        <img :src="item.image" alt="">
        <div class="title">{{item.title}}</div>
      </a>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Recommend",
    props: {
      recommends: {
        type: Array,
        default () {
          return []
        }
      }
    }
  }
</script>

<style>
  .recommend{
    display: flex;
    text-align: center;
    margin-top: 10px;
    padding-bottom: 30px;
    border-bottom:8px solid gainsboro;
  }
  .recommend-item{
    flex: 1;
  }

  .recommend-item img{
    height: 65px;
    width: 65px;
  }
  .recommend-item .title{
    margin-top: 4px;
  }
</style>
