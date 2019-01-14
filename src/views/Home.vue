<template>
  <div class="page-container">
    <Header></Header>
  </div>
</template>

<script>
import Header from './Header.vue'
export default {
  components: {
    Header
  }
}
</script>


<style lang="less">
.page-container{
  position: relative;
  overflow: hidden;
  color: #4a4a4a;
  padding-bottom: 390px;
  min-height: 100%;
  background-color: #fff;
}
</style>

