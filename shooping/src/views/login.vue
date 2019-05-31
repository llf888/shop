<template>
    <div>
        <div class="head">
            <div>
                <router-link to='index'>
                <img src="img/login/logo.jpg" alt=""></router-link>
                <div>
                    <p>竹子商城</p>
                    <div>让每个人都能享受科技的便利</div>
                </div>
            </div>
        </div>
    <!-- 内容 -->
        <div class="content" :style="{background:'url('+require('../../public/img/login/timg.jpg')+')'}">
            <div class="inner" :style="{background:'url('+require('../../public/img/login/xmad_15519596908221_Eclrq.jpg')+')'}">
                <div class="box">
                    <div class="tou">
                        <span @click="zhang">账号登录</span>
                        <span>|</span>
                        <span @click="sao">扫码登录</span>
                        <div class="write" :style="dis">
                            <form action="">
                                <input type="text" placeholder="邮箱 / 手机号码 / 竹子账号" name="uname" autofocus v-model="zh" @blur="yan">
                                <p v-show="tishi" class="t1">账号不能为空!</p>

                                <input type="password" placeholder="密码" name="pwd" v-model="mm" @blur="zheng">
                                <p v-show="tishi2" class="t1">账号不能为空!</p>
                                <input type="button" value="登录" @click="login">
                            </form>
                            <span @click="shou">手机短信登录/注册</span>
                            <span>
                                <span><router-link to="sign_in" class="sp">立即注册</router-link></span><span>|</span><span>忘记密码?</span>
                            </span>
                        </div>
                        <div class="write1" :style="dis1">
                            <img src="img/login/download.png" alt="">
                            <div>使用<span>竹子商城APP</span>扫一扫</div>
                            <p>方法:竹子手机可打开[设置]>[竹子账号]扫码登录</p>
                        </div>
                        <div class="write2" :style="dis2">
                            <form action="">
                            <input type="button" value="+86" ><input type="number" placeholder="手机号码" autofocus>
                            <input type="number" placeholder="短信验证码"><input type="button" value="获取验证码" @click="btn2" >
                            <input type="button" value="立即登录/注册">
                            </form>
                            <p @click="ming">用户名密码登录</p>
                        </div>
                    </div>
                    <div>
                        <div class="line">
                        <hr><span>其他方式登录</span><hr>
                        </div>
                        <div class="others">
                            <span class="mui-icon mui-icon-qq"></span>
                            <span class="mui-icon mui-icon-weibo"></span>
                            <span class="mui-icon-extra mui-icon-extra-alipay"></span>
                            <span class="mui-icon mui-icon-weixin"></span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    <!-- 底部 -->
        <div class="boot">
            <span>简体</span>
            <span>繁体</span>
            <span>English</span>
            <span>常见问题</span>
            <span>隐私政策</span>
            <p>小米公司版权所有-京ICP备10046444-<img src="img/login/ghs.png" alt="">京公网安备11010802020134号-京ICP证110507号</p>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
           
            tishi:false,
            tishi2:false,
            zh:"",
            mm:"",
            dis:"display:block",
            dis1:"display:none",
            dis2:"display:none",      
        }
    },
    methods:{
        login(){//登录按钮点击事件post请求带参数列表
            if(this.zh && this.mm){
                
                var url="login"
                var formdata="name="+this.zh+"&pwd="+this.mm
                this.axios.post(url,formdata).then(res=>{
                       if(res.data.code==1){
                           var uname=res.data.data[0].uname
                           var uid=res.data.data[0].uid
                            this.$store.commit('changeName',uname) //修改用户名
                            this.$store.commit('changeUid',uid) //修改用户id
                            this.$router.push('index')
                       }else{
                            this.$message({
                            message: '用户名或者密码错误',
                            type: 'failed',
                            duration:5000
                            });
                       }
                    })

            }
        },
        zhang(){ //点击账号登录
            this.dis="display:block"
            this.dis1="display:none"
            this.dis2="display:none"
        },
        sao(){ //点击扫码登录
            this.dis="display:none"
            this.dis1="display:block"
            this.dis2="display:none"
        },
        shou(){ //点击手机号登陆
            this.dis="display:none"
            this.dis1="display:none"
            this.dis2="display:block"
        },
        ming(){ 
            this.dis="display:block"
            this.dis1="display:none"
            this.dis2="display:none"
        },
        btn2(){ //获取验证码按钮
            console.log(0)
        },
        yan(){//账号框失去焦点事件
            if(this.zh.length==0){
                this.tishi=true
            }else{
                this.tishi=false
            }
        },
        zheng(){//密码框失去焦点事件
             if(this.mm.length==0){
                this.tishi2=true
            }else{
                this.tishi2=false
            }
        }

    },
    created(){
       
    }
}
</script>
<style scoped>
    *{margin:0;padding:0}
    .head{
        background:#fff;
        height:120px;
        line-height:120px;
        padding:20px 0;
    }
    .head>div{
        width:1300px;
        margin:auto;
        height:50px;
        line-height:50px;
        display:flex;
        justify-content:flex-start;
        box-sizing:content-box;
    }
    .head img{
        width:80px;
        height:80px;
    }
    .head>div>div{
        width:200px;
        height:80px;
        text-align:center;
    }
    .head p{
        font-size:35px;
        color:#000;
    }
    .head>div>div>div{
        font-size:12px;
        height:35px;
        line-height:35px;    
    }
/*内容 */
    .content{
       
        background-size:400px 550px;
    }
    .inner{
        width:1300px;
        margin:auto;
        height:550px;
    }
    .box{
        width:400px;
        height:500px;
        background:#fff;
        float:right;
        margin-top:50px;
        margin-right:100px;
        display:flex;
        justify-content:space-between;
        flex-direction:column;
        padding:25px;
    }
/*登录窗口*/
    .tou{
        text-align:center;
    }
    .tou>span{
        display:inline-block;
        height:40px;
        font-size:25px;
        text-align:center;
        line-height:40px;
        padding:0 5px 5px 5px; 
        color:#777; 
    }
    .tou>span:nth-child(1),.tou>span:nth-child(3):hover,.tou>span:nth-child(1):hover{
        color:#ff7600;
        cursor:pointer;
    }
    .tou>span:nth-child(2){
        margin:0 17px;
        color:#aaa;
    }
    .line{
        display:flex;
        justify-content:space-between;
    }
    .line>hr{
        width:35%;
    }
    .line>span{
        margin-top:-8px;
        font-size:12px;
    }
/*切换 */
/*验证码登录 */
    .write1{
        margin:10px 0;
        display:none; 
    }
    .write1 img{
        width:230px;
    }
    .write1 div{
        color:#8f8f94;
        font-size:15px;
        margin-top:10px;
    }
    .write1 div span{
        color:#ff7600;
        margin:0 5px;
        cursor:pointer;
    }
/*手机号登录 */
    .write2{
        margin-top:15px;
       display:none 
    }
    .write2 input{
        border-radius:0;
        margin:5px 0;
        height:50px;
        border-color:#ddd;
        font-size:13px;
    }
    .write2 input:nth-child(1){
        width:60px;
        border-right:0;
    }
    .write2 input:nth-child(2){
        width:280px;
    }
    .write2 input:nth-child(3){
        width:240px;
    }
    .write2 input:nth-child(4){
        width:100px;
        border-left:0;
        color:blue;
    }
    .write2 input:nth-child(5){
        width:340px;
        background:#ff7600;
        color:#fff;
    }
    .write2 p{
        color:#ff7655;
        float:left;
        padding-top:5px;
    }
    .write2 p:hover{
        cursor:pointer;
    }

/*用户名密码登录 */
 .write{
        margin:20px 15px 10px;      
    }
    .write>form input{
        border-radius:0;
        height:50px;
        font-size:12px;
    }

    .write>form input:nth-child(5){
        width:320px;
        font-size:18px;
        margin:5px 0 10px 0;
        background:#ff7600;
        color:#fff;
    }
    .t1{
        text-align:left;
        color:#f00;
    }
    .write span{
        font-size:13px;
    }
    .write>span:nth-child(2){
        float:left;
        color:#ff7655;
        cursor:pointer;
    }
    .write span:nth-child(3){
        float:right;
    }
    .write span:nth-child(3) span:nth-child(2){
        display:inline-block;
        margin:0 6px;
    }
    .sp{
       color:#000; 
    }
    .sp:hover{
        text-decoration:none;
        color:#ff7600;
    }
    .write span:nth-child(3) span:nth-child(1):hover,.write span:nth-child(3) span:nth-child(3):hover{
        color:#ff7655;
        cursor:pointer;
    }
/*底部 */
    .others{
        display:flex;
        justify-content:space-around;
        margin-top:10px;
    }
    .others span{
        border-radius:50%;
        width:30px;height:30px;
        text-align:center;
        line-height:30px;
        color:white;
        font-size:20px;
    }
    .others span:first-child{
        background:#0288d1;
    }
    .others span:nth-child(2){
        background:#d32f2f;
    }
    .others span:nth-child(3){
        background:#0288d1;
    }
    .others span:nth-child(4){
        background:#00d20d;
    }
    .others span:hover{
         cursor:pointer;
    }
/*最下边 */
    .boot{
        background:#fff;
        text-align:center;
        font-size:15px;
        color:#aaa;
        padding:83px 0;
    }
    .boot span+span:before{
        display:inline-block;
        content:"|";
        margin:0 10px;
    }
    .boot img{
        vertical-align:baseline;
        margin-top:5px;
    }
    .boot span:hover{
        color:#000;
        cursor:pointer;
    }
</style>