<template>
    <div class="five">
        <el-header>
            <el-breadcrumb separator="/" style="float:left;marginTop:23px;">
                <el-breadcrumb-item :to="{ path: '/homeone1' }">首页</el-breadcrumb-item>
                <el-breadcrumb-item>导航二</el-breadcrumb-item>
                <el-breadcrumb-item>选项1</el-breadcrumb-item>
            </el-breadcrumb>
           <el-button type="danger" style="float:right;marginTop:15px;" size="mini" @click="TuiChuDengLu">退出登录</el-button>
        </el-header>
        <el-col :span="24" class="five-el-col">
            21
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
.five{
    width: 100%;
    height: 100%; 
}
.five-el-col{
    padding:20px;
    height: calc(100% - 60px);
    box-sizing:border-box;
    float:left;
}
</style>
