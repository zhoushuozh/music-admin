<template>
  <div class="header">
    <div class="header-inner">
      <div class="logo">LOGO</div>
      <el-menu :default-active="activeIndex" mode="horizontal">
        <el-menu-item index="1">处理中心</el-menu-item>
        <el-menu-item index="2">处理中心</el-menu-item>
        <el-menu-item index="3">消息中心</el-menu-item>
        <el-menu-item index="4">订单管理</el-menu-item>
      </el-menu>
      <div class="user">
        <img src="" alt="">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeIndex: '1',
    }
  },
  methods: {
    
  }
}
</script>

<style lang="less">
.header{
  width: 100%;
  max-width: 1440px;
  height: 70px;
  background: white;
  position: fixed;
  top: 0;
  .header-inner{
    max-width: 1230px;
    margin: 0 auto;
    height: 70px;
    display: flex;
    align-items: center;
    overflow: hidden;
    .logo{
      font-size: 24px;
      color: #409EFF;
      padding-right: 30px;
    }
    .el-menu.el-menu--horizontal{
      border: none;
      margin-right: auto;
      .el-menu-item{
        line-height: 70px;
        height: 70px;
        border: none;
      }
      .el-menu-item.is-active{
        color: #409EFF;
        border: none;
      }
    }
    .user{
      width: 30px;
      height: 30px;
      border: 1px solid #eee;
      border-radius: 50%;
    }
  }
}
</style>

