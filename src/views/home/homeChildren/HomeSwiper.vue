<template>
  <swiper>
    <swiper-item v-for="item in banners" >
      <a :href="item.link" key='item.title'>
        <img :src="item.image" alt="item.title">
      </a>
    </swiper-item>
  </swiper>
</template>

<script>
  import {Swiper,SwiperItem} from 'components/common/swiper'
  export default{
    name:"homeSwiper",
    props:{
      banners:{
        type:Array,
        default(){
          return []
        }
      }
    },
    components:{
      Swiper,
      SwiperItem
    }
  }
</script>

<style>
</style>
