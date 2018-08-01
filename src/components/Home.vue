<template>
  <div class="hello">
    <el-container>
      <el-aside width="200px">
        <el-col :span="24">
          <el-menu :default-active="this.$route.path" router class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose">
            <el-input placeholder="请输入内容" type="search" class="el-input"></el-input>
            <el-submenu index="home" class="el-submenu">
              <template slot="title">
                <i class="el-icon-location"></i>
                <span>导航一</span>
              </template>
              <el-menu-item index="homeone1">选项1</el-menu-item> 
              <el-menu-item index="homeone2">选项2</el-menu-item>
              <el-menu-item index="homeone3">选项3</el-menu-item>
              <el-menu-item index="homeone4">选项4</el-menu-item>
            </el-submenu>
            
            <el-submenu index="2" class="el-submenu">
              <template slot="title">
                <i class="el-icon-location"></i>
                <span>导航二</span>
              </template>
                <el-menu-item index="hometwo1">选项1</el-menu-item>
            </el-submenu>

            <el-submenu index="3" class="el-submenu">
              <template slot="title">
                <i class="el-icon-location"></i>
                <span>导航三</span>
              </template>
                <el-menu-item index="homethree1">选项1</el-menu-item>
            </el-submenu>

            <el-submenu index="4" class="el-submenu">
              <template slot="title">
                <i class="el-icon-location"></i>
                <span>导航四</span>
              </template>
                <el-menu-item index="homefour1">选项1</el-menu-item>
            </el-submenu>

          </el-menu>
        </el-col>
      </el-aside>
      <el-container>
        <el-main>
          <router-view />
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  data() {
    return {
      l:'/'
    };
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    TuiChuDengLu(){
      //点击退出登录清空状态值
      window.sessionStorage.removeItem('isLogin');
      this.$router.push({path:"/"})
    }
  }
};
</script>
<style scoped>
html,
body,
.hello {
  width: 100%;
  height: 100%;
}
.el-input{
  width: 80%;
  margin: 20px 0;
}
.el-menu-vertical-demo,.el-col{
  height:100%;
}
.el-submenu {
  text-align: left;
}
.el-container {
  height: 100%;
}
.el-header{
  color: #333;
  text-align: center;
  background-color: #e9eef3;
}


.el-aside {
  color: #333;
  text-align: center;
  box-sizing: border-box;
}

/*隐藏滚动条*/
.el-aside::-webkit-scrollbar{
  width: 0;
  display: none;
}

.el-main {
  color: #333;
  text-align: center;
  height: 100%;
  padding:0; 
}

body > .el-container {
  margin-bottom: 40px;
}

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
  line-height: 320px;
}
</style>
