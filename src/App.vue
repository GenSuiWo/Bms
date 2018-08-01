<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
body,html,#app{
  width: 100%;
  height: 100%;
}
*{
  margin: 0;
  padding: 0;
}
.el-header{
  color: #333;
  text-align: center;
  background-color: #e9eef3;
}
.one-el-col,.two-el-col,.three-el-col,.four-el-col,.five-el-col,.six-el-col,.seven-el-col{
    padding:20px;
    box-sizing:border-box;
    float:left;
}
</style>
