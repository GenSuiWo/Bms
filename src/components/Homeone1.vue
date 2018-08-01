<template>
    <div class="one">
        <el-header>
            <el-breadcrumb separator="/" style="float:left;marginTop:23px;">
                <el-breadcrumb-item :to="{ path: '/homeone1' }">首页</el-breadcrumb-item >
                <el-breadcrumb-item>导航一</el-breadcrumb-item>
                <el-breadcrumb-item>选项1</el-breadcrumb-item>
            </el-breadcrumb>
           <el-button type="danger" style="float:right;marginTop:15px;" size="mini" @click="TuiChuDengLu">退出登录</el-button>
        </el-header>
        <el-col :span="24" class="one-el-col">
            <span v-for="(k,v) in arr" :key="v">
                <el-input  :placeholder="k.placeholder" v-model="k.placeholder" @focus="Clear(k.placeholder),k.placeholder=''"  @blur="Tick(k.placeholder)" ></el-input>            
            </span> 
            {{sValue}}
            <el-col :span="20" class="one-el-col-one">

            </el-col>
        </el-col>
    </div>
</template>
     
<script>  
export default {
    data(){
        return {
            arr:[
                {id:1,placeholder:"请输入手机号"},
                {id:2,placeholder:"请输入电子邮箱"},
                {id:3,placeholder:"请输入收货地址"},
                {id:4,placeholder:"请输入姓名"}
            ],
            sValue:'',
        }
    },
    methods:{
        Tick(sid){
            console.log("失去焦点了")
            if(sid==''){
                setTimeout(()=>{
                    console.log("不能为空")
                },500)
                
            }else{
                this.sValue=sid
            }
        },
        Clear(sVal){
            sVal=""
        },
        TuiChuDengLu(){
            //点击退出登录清空状态值
            window.sessionStorage.removeItem('isLogin');
            this.$router.push({path:"/"})
        },

    },
    created(){
        
    },
}
</script>

<style scoped>

.one{
    width: 100%;
    height: 100%; 
}
.one-el-col{
    padding:20px;
    height: calc(100% - 60px);
    box-sizing: border-box;
    float:left;
}
</style>
