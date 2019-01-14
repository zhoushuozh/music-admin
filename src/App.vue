<template>
  <div id="app">
    <keep-alive>
      <router-view style="height: 100%;"/>
    </keep-alive>
  </div>
</template>

<style>
@import "./style/reset.less"; 
body{
  background-color: #eee;
  min-width: 850px;
  overscroll-behavior-y: none;
  min-height: calc(100% + 1px);
  color: #4a4a4a;
}

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  height: 100%;
  max-width: 1440px;
  margin: 0 auto;
  position: relative;
}
</style>
