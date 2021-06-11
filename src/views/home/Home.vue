<template>
  <div id="home">
    <nva-bar class="home_nva">
      <div slot="center">购物街</div>
    </nva-bar>

    <!-- <swiper>     进行抽离
      <swiper-item v-for="item in banners" >
        <a :href="item.link" key='item.title'>
          <img :src="item.image" alt="item.title">
        </a>
      </swiper-item>
    </swiper> -->
    <scroll class="content">
      <home-swiper :banners="banners"></home-swiper>
      <recommend-view :recommends="recommends"></recommend-view>
      <feature-view></feature-view>
      <tab-control class="pos" :titles="['流行','新款','精品']" @tabClick = "tabClick"></tab-control>
      <goods :goods="goods[currentType].list"></goods>
    </scroll>

  </div>
</template>

<script>
  import NvaBar from 'components/common/nvabar/NvaBar.vue'
  import {
    getHomeMultidata,
    getHomeData
  } from 'network/home'

  //轮播图效果
  // import {Swiper,SwiperItem} from 'components/common/swiper'
  import HomeSwiper from './homeChildren/HomeSwiper.vue'

  //推荐
  import RecommendView from './homeChildren/Recommend.vue'

  //流行产品推荐
  import FeatureView from './homeChildren/FeatureView.vue'

  //导航控制
  import TabControl from 'components/content/tabConrtrol/TabContral.vue'

  //加载商品
  import Goods from 'components/content/goods/GoodList.vue'

  //滚动效果
  import Scroll from 'components/common/scroll/Scroll.vue'
  export default {
    name: "home",
    components: {
      NvaBar,
      // Swiper,
      // SwiperItem
      HomeSwiper,
      RecommendView,
      FeatureView,
      TabControl,
      Goods,
      Scroll
    },
    data() {
      return {
        banners: [],
        recommends: [],
        goods: {
          "pop": {
            page: 0,
            list: []
          },
          "new": {
            page: 0,
            list: []
          },
          "sell": {
            page: 0,
            list: []
          }
        },
        currentType:'pop'
      }
    },
    //使用生命周期函数，发送网路请求
    created() {
      this.getHomeMultidata()
      //请求商品数据
      this.getHomeData('pop')
      this.getHomeData('sell')
      this.getHomeData('new')
    },
    methods: {
      getHomeMultidata() {
        getHomeMultidata().then(res => {
          // console.log(res)
          this.banners = res.data.data.banner.list;
          this.recommends = res.data.data.recommend.list
        })
      },
      getHomeData(type) {
        const page = this.goods[type].page + 1
        getHomeData(type, page).then(res => {
          // console.log(res.data.data.list)
          this.goods[type].list.push(...res.data.data.list)
          this.goods[type].page += 1
        })
      },
      //tabControl控制切换
      tabClick(index){
        // console.log(index)
        switch(index){
          case 0:
            this.currentType = 'pop'
            break
          case 1:
            this.currentType = 'new'
            break
          case 2:
            this.currentType = 'sell'
            break
        }
      }
    }
  }
</script>

<style scoped>
  #home {
    padding-top: 44px;
    position: relative;
    height: 100vh;
  }

  .home_nva {
    background-color: var(--color-tint);
    color: white;

    position: fixed;
    left: 0px;
    right: 0px;
    top: 0px;
    z-index: 9;
  }

  .pos {
    position: sticky;
    top: 44px;
    z-index: 9;
  }

  .content{
    overflow: hidden;
    position: absolute;
    top: 44px;
    bottom: 49px;
    left: 0px;
    right: 0px;
  }


  /* .content{
    height:calc(100% - 49px);
    overflow: hidden;
   margin-top: 44px;
  } */
</style>
