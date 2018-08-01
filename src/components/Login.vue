<template>
    <div class="Login">
        <el-col :span="7" class="el-coll">
            <el-col :span="24" class="el-col-zi">
                <el-input id="name"  v-model="name" placeholder="请输入帐号">
                    <template slot="prepend">帐号</template>
                </el-input> 
            </el-col>
            <el-col :span="24"  class="el-col-zi">
                <el-input id="password" v-model="password" type="password" placeholder="请输入密码">
                    <template slot="prepend">密码</template>
                </el-input>
            </el-col>
            <el-col :span="24">
                <el-button id="login" v-on:click="check" style="width:100%" type="primary">登录</el-button>
            </el-col>
            <el-col>
                <p style="text-align: center;fontSize: 12px;marginTop:10px;" @click="ZhuCe">注册</p>
            </el-col>
        </el-col>
    </div>
</template>

<script>
export default {
  data() {
    return {
      name: "",
      password: ""
    };
  },
  methods: {
    //点击登录的时候
    check: function(event) {
      var name = this.name;
      var password = this.password;
      if (name == "" || password == "") {
        this.$message({
          message: "账号或密码为空！",
          type: "error"
        });
      } else {
        window.sessionStorage.setItem("isLogin",1)
        var params = new URLSearchParams();
        params.append('user', this.name);
        params.append('pass', this.password);

        this.$http.post("http://localhost:3000/one",params).then((e)=>{
            console.log(e)
            if(e.data.a=="1"){
                alert("账号或密码错误")
            }else if(e.data.a=="2"){
                this.$router.push({ path: "home" });
            }
        })
      }
    //    else {
    //     this.$message({
    //       message: "账号或密码错误！",
    //       type: "error"
    //     });
    //   }
    },
    ZhuCe(){
        var params = new URLSearchParams();
        params.append('newuser', this.name);
        params.append('newpass', this.password);
        this.$http.post("http://localhost:3000/two",params).then((e)=>{
            // console.log(e)
            alert(e.data.a)
        })
    }
  },
};
</script>

<style scoped>
body,html,.Login{
    width: 100%;
    height: 100%; 
}
.Login{
    background-image: url("../../static/img/Background.png");
    background-size:100% 100%; 
}
.el-col-zi{
    margin-bottom: 20px;
}
.el-coll{
    padding: 50px 30px;
    border: 1px solid #dcdfe6;
    border-radius: 15px;
    height: 260px;
    background: #fff;
    position:absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    margin: auto;
}

</style>
