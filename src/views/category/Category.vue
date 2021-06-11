<template>
  <div class="wrapper">
    <ul class="content">
      <button class="button" @click="click">按钮</button>
      <li>1111111</li>
      <li>1111111</li>
      <li>1111111</li>
      <li>1111111</li>
      <li>1111111</li>
      <li>1111111</li>
      <li>1111111</li>
      <li>1111111</li>
      <li>1111111</li>
      <li>1111111</li>
      <li>1111111</li>
      <li>1111111</li>
      <li>1111111</li>
      <li>1111111</li>
      <li>1111111</li>
      <li>1111111</li>
      <li>1111111</li>
      <li>1111111</li>
      <li>1111111</li>
      <li>1111111</li>
      <li>1111111</li>
      <li>1111111</li>
      <li>1111111</li>
      <li>1111111</li>
      <li>1111111</li>
      <li>1111111</li>
      <li>1111111</li>
      <li>1111111</li>
      <li>1111111</li>
      <li>1111111</li>
      <li>1111111</li>
      <li>1111111</li>
      <li>1111111</li>
      <li>1111111</li>
      <li>1111111</li>
      <li>1111111</li>
      <li>1111111</li>
      <li>1111111</li>
      <li>1111111</li>
      <li>1111111</li>
      <li>1111111</li>
      <li>1111111</li>
      <li>1111111</li>
      <li>1111111</li>
      <li>1111111</li>
      <li>1111111</li>
      <li>1111111</li>
      <li>1111111</li>
      <li>1111111</li>
      <li>1111111</li>
      <li>1111111</li>
      <li>1111111</li>
      <li>1111111</li>
      <li>1111111</li>
      <li>1111111</li>
      <li>1111111</li>
      <li>1111111</li>
      <li>1111111</li>
      <li>1111111</li>
      <li>1111111</li>
      <li>1111111</li>
      <li>1111111</li>
      <li>1111111</li>
      <li>1111111</li>
      <li>1111111</li>
      <li>1111111</li>
      <li>1111111</li>
      <li>1111111</li>
      <li>1111111</li>
      <li>1111111</li>
      <li>1111111</li>
      <li>1111111</li>
      <li>1111111</li>
      <li>1111111</li>
      <li>1111111</li>
      <li>1111111</li>
      <li>1111111</li>
      <li>1111111</li>
      <li>1111111</li>
      <li>1111111</li>
      <li>1111111</li>
      <li>1111111</li>
      <li>1111111</li>
      <li>1111111</li>
      <li>1111111</li>
      <li>1111111</li>
      <li>1111111</li>
      <li>1111111</li>
      <li>1111111</li>
      <li>1111111</li>
      <li>1111111</li>
      <li>1111111</li>
      <li>1111111</li>
      <li>1111111</li>
      <li>1111111</li>
      <li>1111111</li>
      <li>1111111</li>
      <li>1111111</li>
      <li>1111111</li>
      <li>1111111</li>
      <li>1111111</li>
      <li>1111111</li>
      <li>1111111</li>
      <li>1111111</li>
      <li>1111111</li>
      <li>1111111</li>
      <li>1111111</li>
      <li>1111111</li>
      <li>1111111</li>
      <li>1111111</li>
      <li>1111111</li>
      <li>1111111</li>
      <li>1111111</li>
      <li>1111111</li>
      <li>1111111</li>
      <li>1111111</li>
      <li>1111111</li>
    </ul>
  </div>
</template>

<script>
  import BScroll from 'better-scroll'
  export default{
    name:"Category",
    // created() {
    //   new BScroll('.content',{})
    // }
    data() {
      return{
        scroll:null
      }
    },
    mounted() {
      // this.scroll = new BScroll('.wrapper',{})
      this.scroll = new BScroll(document.querySelector('.wrapper'),{
        probeType:3,
        pullUpLoad:true,
        click:true
      })

      // this.scroll.on('scroll',(position)=>{
      //   console.log(position)
      // })

      this.scroll.on('pullingUp',()=>{
        console.log("上拉加载更多")
      })
    },
    methods:{
      click(){
        console.log("点击事件")
      }
    }
  }
</script>

<style scoped>
  /* 局部滚动效果 */
  .wrapper{
    height: 150px;
    overflow: hidden;
    overflow-y: scroll;
    background-color: gray;
    font-size: 20px;
  }
</style>
