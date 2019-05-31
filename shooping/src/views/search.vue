<template>
    <div  class="detial">
        <mt-nav class="detial_nav"></mt-nav>
        <div class="detial_list" @mouseleave="leavelist">
            <div class="zhaozi" @mouseenter="enterlist"></div>
            <mt-left class="detial_list_in" v-show="display_list"></mt-left>
        </div>
        <div class="daohang">
            <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item :to="{ path: '/index' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item><router-link to="/index">全部结果</router-link></el-breadcrumb-item>
            <el-breadcrumb-item>{{cont}}</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="body-head">
            <div>
                <span>分类:</span>
                <span>全部</span>
                <span>手机</span>
                <span>贴膜</span>
                <span>保护套/保护壳</span>
            </div>
        </div>
        <div class="body-two">
            <div>
                <span>推荐</span>
                <span>新品</span>
                <span>价格 ↑</span>
                <span>评论最多</span>
            </div>
            <div>
                <span>
                    <input type="checkbox">查看评价
                </span>
                <span>
                    <input type="checkbox">仅显示特价商品
                </span>
                <span>
                    <input type="checkbox">仅显示有货商品
                </span>
            </div>
        </div>
        <div class="body-nothing" v-if="have===0">
           <img src="img/ec819f1f82206db4ecfc35df9f742157.gif" alt="">
        </div>
        <div class="body-content" v-else="have===1">
            <div v-for='(elem,i) of list' :key='i'>
                <router-link to='detials'>
                <img :src="elem.img" alt=""></router-link>
                <p>{{elem.title}}</p>
                <span>{{elem.price}}元</span>
                <div>
                    <div v-for="(p,a) of elem.imgs" :key="a" @mouseenter="changeimg(a,elem)">
                        <img :src="p" alt="">
                    </div>
                </div>
            </div>
        </div>
        <div class="yema">
                <ul>
                    <li @click="toa" v-show="shang">上一页</li>
                    <li v-for="(p,i) of count" :key="i" @click="tob(i)" ref="bod">{{p+1}}</li>
                    <li @click="toc" v-show="xia">下一页</li>
                </ul>
            </div>
        <mt-footer></mt-footer>
    </div>
</template>
<script>
import mtNav from '../components/navigation'
import mtFooter from '../components/footer'
import mtLeft from '../components/left.vue'
export default {
   
    data(){
        return{
            display_list:false,
            cont:'',
            list:[],
            have:0,
            count:[],
            page:1,
            totalpage:0,
            shang:false,
            xia:true,
        }
    },
    watch:{
        page(){
            if(this.page==1){
                this.shang=false
            }else{
                this.shang=true
            }
            if(this.page==this.totalpage){
                this.xia=false
            }else{
                this.xia=true
            }
        },
        totalpage(){
            if(this.page==this.totalpage){
                this.xia=false
            }else{
                this.xia=true
            }
        }
    },
    created(){     
        this.axios.get('soso?str='+sessionStorage.getItem('content')).then((res)=>{
            this.totalpage=res.data.pageCount
            if(res.data.code==1){
                var arr1=[]  
                for(var i=0;i<res.data.pageCount;i++){
                    arr1.push(i)
                }
                this.count=arr1
                this.have=1
            for(var key of res.data.data){
                var fn=key.imgs.split(',')
                var arr=[]
                for(var n of fn){
                    var m=eval(n)
                    arr.push(m)
                }
                key.imgs=arr
            } 
            this.list=res.data.data
            }else{
                this.have=0
                this.xia=false
                this.shang=false
            }
            
        })
    },
    methods:{
        toa(){ //上一页
        
            for(var key of this.$refs.bod){
                key.style="border:none"
            }
            this.$refs.bod[this.page-2].style="border:2px solid #ff7600"
            this.page-=1
            if(this.page<1)this.page=1
            this.axios.get('soso?str='+sessionStorage.getItem('content')+"&pno="+(this.page)).then((res)=>{
                for(var key of res.data.data){
                    var fn=key.imgs.split(',')
                    var arr=[]
                    for(var n of fn){
                        var m=eval(n)
                        arr.push(m)
                    }
                    key.imgs=arr
                } 
                this.list=res.data.data
            }) 
        },
        tob(i){ //页码
            for(var key of this.$refs.bod){
                key.style="border:none"
            }
            this.$refs.bod[i].style="border:2px solid #ff7600"
            if(i!==this.page-1){ //避免点击相同页码重复发送请求
                this.page=i+1
             this.axios.get('soso?str='+sessionStorage.getItem('content')+"&pno="+this.page).then((res)=>{
                for(var key of res.data.data){
                    var fn=key.imgs.split(',')
                    var arr=[]
                    for(var n of fn){
                        var m=eval(n)
                        arr.push(m)
                    }
                    key.imgs=arr
                } 
                this.list=res.data.data
            }) 
            }
        },
        toc(){ //下一页
            for(var key of this.$refs.bod){
                key.style="border:none"
            }
            this.$refs.bod[this.page].style="border:2px solid #ff7600"
            this.page+=1
            this.axios.get('soso?str='+sessionStorage.getItem('content')+"&pno="+(this.page)).then((res)=>{
                
                if(res.data.code==1){
                     for(var key of res.data.data){
                    var fn=key.imgs.split(',')
                    var arr=[]
                    for(var n of fn){
                        var m=eval(n)
                        arr.push(m)
                    }
                    key.imgs=arr
                } 
                this.list=res.data.data
                }
               
            }) 
        },
        enterlist(){
           this.display_list=true
       },
       leavelist(){
           this.display_list=false
       },
       changeimg(a,elem){
         if(a==0){
             elem.img=elem.img0
         }
         if(a==1){
             elem.img=elem.img1
         }
         if(a==2){
             elem.img=elem.img2
         }
         if(a==3){
             elem.img=elem.img3
         }
         if(a==4){
             elem.img=elem.img4
         }
          
       }
    },
    components:{
        mtNav,
        mtFooter,
        mtLeft
    }
}
</script>
<style scoped>
    .detial{
      
    }
    .detial_list{
        position:relative;
        margin:auto;
        width:1300px;
    }
    .zhaozi{
        position:absolute;
        top:12px;left:118px;    
        width:116px;height:88px;
    }
    .detial_list_in{
        background:#fff;
        box-sizing:border-box;
        border:1px solid #ff7600;
        z-index:3;
    }
    .daohang{
        width:1300px;
        margin:120px auto 0;
    }
/**列表头部 */
    .body-head{
        background:#fff;
        margin:20px 0;
    }
    .body-head>div:first-child{
        width:1300px;
        height:70px;
        display:flex;
        margin:auto;
        justify-content:flex-start;
        align-items:center;
    }
     .body-head>div:first-child>span{
         width:10%;
         font-size:13px;
     }
     .body-head>div:first-child>span:nth-child(2){
         color:#ff7600;
         font-size:15px;
     }
/**body-two  */
    .body-two{
        width:1300px;
        margin:auto;
        display:flex;
        justify-content:space-between;
    }
    .body-two>div{
        display:flex;
        justify-content:flex-start;
    }
    .body-two>div>span{
        margin:0 20px 0  0;
        font-size:13px;
    }
    .body-two>div>span>input{
        position:relative;
        top:2px;
    }
     .body-two>div:first-child>span+span:before{
         display:inline-block;
         content:'|';
         margin:0 20px 0 10px;
         color:#ccc;
     }
    .body-two>div>span:last-child{
        margin:0;
    }
    .body-nothing{
        width:1300px;
        margin:auto;
        text-align:center;
        padding:150px 0;
    }
/**body-content */
    .body-content{
        width:1300px;
        margin:40px auto;
        display:flex;
        flex-wrap:wrap;
        justify-content:flex-start;
    }
    .body-content>div{
        width:25%;
        background:#fff;
        margin:50px 50px;
        text-align:center;
    }
    .body-content>div>a>img{
        margin:20px 0;
    }
    .body-content>div>p{
        color:#000;
        font-size:15px;
        padding-bottom:10px;
    }
    .body-content>div>span{
        color:#ff7600;
    }
    .body-content>div>div{
        display:flex;
        justify-content:center;
        margin:20px 0 10px 0;
    }
    .body-content>div>div>div{
        margin:0 10px;
    }
/**页码 */
    .yema{
        width:1300px;
        margin:auto;
    }
    .yema>ul{
        list-style:none;
        display:flex;
        margin:auto;
        width:400px;
        justify-content:space-around;
        color:#fff;
    }
    .yema>ul>li:hover{
        background:rgba(0,0,0,0.5);
        cursor:pointer;
    }
    .yema>ul>li{
        font-size:15px;
        background:rgba(0,0,0,0.4);
        width:50px;
        height:30px;
        text-align:center;
        line-height:30px;
    }
    .yema>ul>li:not(:first-child):not(:last-child){
        font-size:20px;
    }
    .yema>ul>li:nth-child(2){
        border:2px solid #ff7600
    }
</style>