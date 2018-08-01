<template>
    <div class="six">
        <el-header>
            <el-breadcrumb separator="/" style="float:left;marginTop:23px;">
                <el-breadcrumb-item :to="{ path: '/homeone1' }">首页</el-breadcrumb-item>
                <el-breadcrumb-item>导航三</el-breadcrumb-item>
                <el-breadcrumb-item>选项1</el-breadcrumb-item>
            </el-breadcrumb>
           <el-button type="danger" style="float:right;marginTop:15px;" size="mini" @click="TuiChuDengLu">退出登录</el-button>
        </el-header>
        <el-col :span="24" class="six-el-col">
            3-1
        </el-col>
    </div>
</template>

<script>
export default {
    methods:{
        TuiChuDengLu(){
            //点击退出登录清空状态值
            window.sessionStorage.removeItem('isLogin');
            this.$router.push({path:"/"})
        }
    }
}
</script>

<style scoped>
.six{
    width: 100%;
    height: 100%; 
}
.six-el-col{
    padding:20px;
    height: calc(100% - 60px);
    box-sizing:border-box;
    float:left;
}
</style>
