<template>
    <div>
        <div class="body">
            <router-link to='index'>
            <img src="img/login/logo.jpg" alt="">
            </router-link>
            <span>注册山竹账号</span>
            <div class="first" v-show="f1==true">
                <form action="">
                    <div class="area">
                        <p>国家/地区</p>
                        <input type="text" placeholder="中国" v-model="chosed">
                        <div>
                            <span class="rotate mui-icon-extra mui-icon-extra-arrowrightcricle"  @click="change" :style="rotate"></span>
                            <div class="area-drop" :style="dis">
                                <input type="text" v-model="sous">
                                <ul class="u1">
                                    <li v-for="item of lists" @click="chose" :data-name="item.name">{{item.name}}</li>
                                </ul>
                            </div>
                        </div>
                        <p>成功注册账号后,国家/地区将不能被修改</p>
                    </div>
                    

                    <div class="phone">
                        <p>手机号码</p>
                        <div>+86</div>
                        <input type="number" placeholder="请输入手机号" v-model="phone" @blur="number">
                    </div>
                    <span class="mui-icon mui-icon-info-filled ap" v-show="f4==false">{{tishi}}</span>
                </form>
                     <button @click="login" class="zhuce">立即注册</button>
                <div class="contract">
                    <input type="checkbox" v-model="ischecked">
                    <span>注册账号既表示您同意并愿意遵守山竹<span>用户协议</span>和<span>隐私政策</span></span>
                </div>
            </div>

            <div class="second" v-show="f2==false">
                <span>我们已经发送一条验证短信至<span>+86&nbsp;{{phone}}</span></span>
                <span>请输入短信中的验证码</span>
                <div>
                    <input type="number" maxlength="6" placeholder="请输入验证码"> <button>重新发送</button>
                </div>
                <button @click="next">下一步</button>
                <button @click="back">返回</button>
            </div>

            <div class="third" v-show="f3==false">
                <span>请在此处设置您的用户名</span>
                <input type="text" placeholder="请输入用户名" v-model="sign_name" @blur="name">
                <p class="ap" v-show="f5">{{sign_name_tishi}}</p>
                <span>请在此处设置您之后登录需要的密码</span>
                <input type="password" placeholder="请输入您的密码" v-model="sign_pwd" @blur="pwd"> 
                <p class="ap" v-show="f6">密码不能为空!</p>
                <span>确认密码</span>
                <input type="password" placeholder="请再次输入您的密码" v-model="sign_pwd1" @blur="pwd1">
                <p class="ap" v-show="f7">两次输入的密码不一致,请重新输入!</p>
                <el-button :plain="true" @click="loginon">确认注册</el-button>
            </div>

        </div>
    <!-- 底部 -->
        <div class="boot">
            <span>简体</span>
            <span>繁体</span>
            <span>English</span>
            <span>常见问题</span>
            <span>隐私政策</span>
            <p>小米公司版权所有-京ICP备10046444-<img src="img/login/ghs.png" alt="">京公网安备11010802020134号-京ICP证110457号</p>
        </div>
    </div>
</template>
<script>

export default {
    data(){
        return{
            ischecked:false,
            f1:true,
            f2:true,
            f3:true,
            f4:true,
            f5:false,
            f6:false,
            f7:false, 
            sign_name:"", //用户名
            sign_name_num:"",
            sign_pwd:"", //密码
            sign_pwd1:"", //确认密码
            rotate:"",  //国家选择时旋转图标
            chosed:"",
            sign_name_tishi:"用户名不能为空!",
            tishi:"请您同意用户协议",
            phone:"",
            dis:"display:none",
            sous:"",
            lists:[],
            list:[
                {id:1,name:"中国"},
                {id:2,name:"美国"},
                {id:3,name:"英国"},
                {id:4,name:"法国"},
                {id:5,name:"意大利"},
                {id:6,name:"瑞典"},
                {id:7,name:"德国"},
                {id:8,name:"韩国"},
                {id:9,name:"朝鲜"},
                {id:10,name:"安道尔"},
                {id:11,name:"阿富汗"},
                {id:12,name:"亚美尼亚"},
                {id:13,name:"日本"}
            ]
        }
    },
    methods:{
        change(){ 
            if(this.dis=="display:none"){ //判断国家列表的显示与隐藏状态,实现交替
                this.dis="dispaly:block"  
                this.lists=this.list
                this.rotate="transform:rotate(-90deg)"
            }else{
                this.dis="display:none"
                this.rotate="transform:rotate(90deg)"
            }
        },
        chose(e){
            var name=e.target.dataset.name  //获取选择的国家
            this.chosed=name            //赋值给输入框
            this.dis="display:none"     //收起列表
            this.sous=""             //清空输入框
        },
        number(){
            var reg=/^1[3-9]\d{9}$/
            if(this.phone==""){
                this.tishi="请输入手机号"
                this.f4=false
            }else if(!reg.test(this.phone)){
                this.tishi="手机号格式不正确"
                this.f4=false
            }
        },
        login(){
            var reg=/^1[3-9]\d{9}$/
            if(this.ischecked==false){
                this.f4=false
            }else if(this.phone=="" || !reg.test(this.phone)){
             this.phone=="" ? this.tishi="请输入手机号" : this.tishi="手机号格式不正确"
                this.f4=false
            }else{
                this.f1=false
                this.f2=false
            }
        },
        back(){
             this.f1=true
            this.f2=true
        },
        name(){//用户名输入框失去焦点事件
           
        },
        pwd(){//密码框失去焦点事件
            if(!this.sign_pwd){
                this.f6=true
                return
            }else{
                this.f6=false
            }
        },
        pwd1(){//确认密码框失去焦点事件
            if(this.sign_pwd!==this.sign_pwd1){
                this.f7=true
                return
            }else{
                this.f7=false
            }
        },
        next(){
            this.f2=true
            this.f3=false
        },
        loginon(){ //最终注册
            if(this.sign_name!=="" && this.sign_name_num==1 && this.sign_pwd!=="" && this.sign_pwd==this.sign_pwd1){
                var url="sign_in"
                var formdata="name="+this.sign_name+"&pwd="+this.sign_pwd+"&phone="+this.phone
                //保存用户名密码
                var ming=this.sign_name
                var mima=this.sign_pwd
                this.axios.post(url,formdata).then(res=>{
                    if(res.data.code==1){
                        //清空输入框
                        this.sign_name=""
                        this.sign_pwd=""
                        this.sign_pwd1=""

                        this.$message({
                            message: '注册成功,5S后跳转到首页',
                            type: 'success'
                            });
                        setTimeout(()=>{
                            var url="login";
                            var formdata="name="+ming+"&pwd="+mima;
                            this.axios.post(url,formdata).then(res=>{
                            if(res.data.code==1){
                                var name=res.data.data[0].uname
                                var uid=res.data.data[0].uid
                                this.$store.commit('changeName',name) //修改用户名
                                this.$store.commit('changeUid',uid) //修改用户id
                                this.$router.push("/index")
                                }
                            })
                        },5000)
                    }
                })
            }
        }
    },
    watch:{
        sous(){
            if(this.sous!=""){
                var arr=[]  //用来保存符合关键字的国家
                for(var key of this.list){
                    if(key.name.indexOf(this.sous)!=-1){//根据输入的关键字搜索国家
                        arr.push(key)   
                    }
                }
                this.lists=arr  //用新的国家列表替换原来的
            }
            if(this.sous==""){
                this.lists=this.list  //取消搜索恢复全部列表
            }
        },
        ischecked(){
            if(this.ischecked){
                this.f4=true
            }
        },
        sign_name(){
            if(!this.sign_name){
                this.sign_name_tishi="用户名不能为空!"
                this.f5=true
                return
            }else{
                var url="search"
               var formdata="name="+this.sign_name
                this.axios.post(url,formdata).then(res=>{
                    var code=res.data.code
                    this.sign_name_num=code
                    this.f5=true
                    if(code==-1){
                        this.sign_name_tishi="用户名已存在"
                    }else{
                        this.sign_name_tishi="用户名可以使用"  
                    }
                })
               
            }
        }
    }
}
</script>
<style scoped>
    *{margin:0;padding:0}
    .body{
        width:800px;
        height:600px;
        margin:100px auto 0;
        background:#fff;
        display:flex;
        justify-content:flex-start;
        align-items:center;
        flex-direction:column;
        font-size:13px;
    }
    .body img{
        width:80px;
    }
     .body img+span{
         font-size:30px;
         padding:45px 0;
     }
    .area,.phone{
        margin:10px 0;
    }
    .area span{
        transform:rotate(90deg)
    }
    .area input{
        width:300px;height:45px;
        border-radius:0;
        margin:0;
        vertical-align:bottom;
    }
    .area>div{
        width:45px;height:45px;
        border:1px solid #ccc;
        display:inline-block;
        position:relative;
        text-align:center;
        line-height:56px;
        border-left:0;
    }
    .phone>div{
        width:45px;height:45px;
        border:1px solid #ccc;
        display:inline-block;
        position:relative;
        text-align:center;
        line-height:45px;
        border-right:0;
    }
    .phone input{
        width:300px;height:45px;
        border-radius:0;
        margin:0;
        vertical-align:bottom;
    }
    .ap{
        color:#ff7600;
        font-size:15px;
        margin:0px 0 10px 0 ;
    }
    .rotate{
        transition:all 0.3s linear;
    }

    .zhuce{
        display:block;
        width:345px;
        height:45px;
        margin:0px 0 20px 0;
        background:#ff7655;
        color:#fff;
    }
    .contract input{
        width:15px;
        height:15px;
        float:left;
        margin-top:3px;
    }
/*下拉 */
    .area-drop{
        position:absolute;
        top:0;right:-1px;
        margin-top:44px;
        z-index:1;
        border:1px solid #aaa;
        background:#fff;
        border-top:0;
        height:300px;
        overflow:auto;
        width:345px;       
    }
    .area-drop ul{
        list-style:none;
        width:325px;     
    }
     .area-drop ul li{
         border-bottom:1px solid #aaa;
         height:40px;
         line-height:40px;
         font-size:15px;
     }
     .contract>span>span{
         color:#ff7600
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
/**短信验证码部分*/
    .second{
        display:flex;
        justify-content:flex-start;
        flex-direction:column;
        width:350px;
        color:#777;
        font-size:15px;
        margin:13px;
    }
    .second>span{
        margin:10px 0;
    }
    .second>span>span{
        color:#ff7600;
    }
    .second button{
        width:100%;
        height:45px;
        margin:5px 0;
        border-radius:0;
    }
    .second button:hover{
        cursor:pointer;
    }
    .second input{
        height:45px;
        border-radius:0;
        font-size:12px;
        width:62%;
    }
    .second button:nth-child(4){
        background:#ff7600;
    }
    .second button:nth-child(4):hover{
        color:#fff
    }
    .second input+button{
        width:35%;
        margin:0  0 0 10px;
        color:#000;
    }
    .second input+button:hover,.second button:nth-child(5):hover{
        color:#fff;
        background:#ff7600;
    }
/*注册用户名部分 */
    .third{
        display:flex;
        justify-content:flex-start;
        flex-direction:column;
    }
    .third input{
        width:350px;
        margin:0 0 10px 0;
        border-radius:0;
        font-size:12px;
    }
     .third button{
         width:350px;
         height:45px;
         margin:20px 0;
         background:#ff7600;
         color:#fff;
         font-size:15px;
     }
</style>