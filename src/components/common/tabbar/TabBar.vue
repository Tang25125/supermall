<template>
  <div id="app" class="tab-bar">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: "TabBar"
  }
</script>

<style>
  .tab-bar {
    display: flex;
    background-color: gainsboro;
    position: fixed;
    right: 0;
    left: 0;
    bottom: 0;
    box-shadow: 0 -2px 1px rgba(10, 10, 10, 0.1);
  }

  
</style>
