<template>
  <div class="goods-item">
    <a :href="item.link">
      <img :src="item.show.img" />
      <div class="info">
        <span class="title">{{item.title}}</span>
        <span class="price">{{item.price}}</span>
        <span class="collect">{{item.cfav}}</span>
      </div>
    </a>
  </div>
</template>

<script>
  export default {
    name: "GoodItem",
    props: {
      item: {
        type: Object,
        default () {
          return {}
        }
      }
    }
  }
</script>

<style>
  .goods-item {
    padding-bottom: 40px;
    position: relative;

    width: 48%;
  }

  .goods-item img {
    width: 100%;
    border-radius: 10px;
    border:3px solid var(--color-tint);
  }

  .goods-item .info {
    font-size: 12px;
    position: absolute;
    bottom: 5px;
    left: 0;
    right: 0;
    overflow: hidden;
    text-align: center;
  }

  .goods-item .info .title {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    margin-bottom: 3px;
  }

  .goods-item .info .price {
    color: var(--color-high-text);
    margin-right: 20px;
  }

  .goods-item .info .collect {
    position: relative;
  }

  .goods-item .info .collect::before {
    content: '';
    position: absolute;
    left: -15px;
    top: -1px;
    width: 14px;
    height: 14px;
    background: url("~assets/img/common/collect.svg") 0 0/14px 14px;
  }
</style>
