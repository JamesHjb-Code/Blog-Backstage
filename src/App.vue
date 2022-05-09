<template>
  <div class="box"></div>
  <router-view/>
</template>
<script setup>
const boxWidth = '100px'
</script>
<style lang="scss">
  .box{
    width:v-bind(boxWidth);
    height:100px;
    background-color:red;
  }
</style>
