<template>
    <div class="">
       
        <div class="carousel" data-ride="carousel" id="demo">
           <mt-left></mt-left>
            <!-- 轮播图片 -->
        
            <div class="" @mouseenter="stop">
                <div class="ride-tu" v-for="url of pics" :class="url.chose">
                    <img :src="url.src" alt="">
                </div>
            </div>
            <!-- 左右箭头 -->
            <a data-slide="prev" class="carousel-control-prev" @click="prev">
                <span class="carousel-control-prev-icon"></span>
            </a>
            <a data-slide="next" class="carousel-control-next" @click="next">
                <span class="carousel-control-next-icon"></span>
            </a>
            <!-- 轮播指示器 -->
            <ul class="carousel-indicators">
                <li class="active" ref="a6"></li>
                <li ref="a7"></li>
                <li ref="a8"></li>
                <li ref="a9"></li>
                <li ref="a10"></li>
            </ul>
        </div>
        <div class="nav-boot">
            <div class="nav-to">
                <a href="javascript:;"  v-for="tu of tus">
                    <span :class="tu.url"></span><br>
                    <span v-text="tu.name"></span>
                </a>
            </div>
            <div class="nav-boot-img" v-for="img of caimgs">
                <router-link to="detials"><img :src="img" alt=""></router-link>
            </div>
        </div>
        <div class="bt">
            <img :src="btt" alt="">
        </div>
    </div>
</template>

<script>
import mtLeft from '../components/left.vue'
export default {
    data(){
        return{
        pics:[],
        timer:null, 
        caimgs:["img/lun bo/lun1.png","img/lun bo/lun2.png","img/lun bo/lun3.png"],
        tus:[
            {"url":"mui-icon mui-icon-weixin","name":"微信"},
            {"url":"mui-icon mui-icon-weibo","name":"新浪"},
            {"url":"mui-icon mui-icon-qq","name":"QQ"},
            {"url":"mui-icon mui-icon-image","name":"图片"},
            {"url":"mui-icon mui-icon-pengyouquan","name":"朋友圈"},
            {"url":"mui-icon mui-icon-camera","name":"相机"},
        ],
        btt:"img/lun bo/xmad_15551408054133_UCIHN.png",
        }  
    },
    methods:{
        stop(){
            clearInterval(this.timer)
        },
       next(){
            var obj=this.pics.shift()
            this.pics.push(obj)
        },
        prev(){  
            var objend=this.pics.pop()
            this.pics.unshift(objend)
        },
        
    },
    created(){
        this.axios.get("bcarousel").then(res=>{
            this.pics=res.data.data
        });
        this.timer=setInterval(()=>{
            var zd=this.pics.shift()
            this.pics.push(zd)
        },2000)
    },
    watch:{
        pics(){
            var id=this.pics[0].id
            if(id==6){
                this.$refs.a6.className="active"
                this.$refs.a7.className=""
                this.$refs.a8.className=""
                this.$refs.a9.className=""
                this.$refs.a10.className=""
            }else if(id==7){
                this.$refs.a6.className=""
                this.$refs.a7.className="active"
                this.$refs.a8.className=""
                this.$refs.a9.className=""
                this.$refs.a10.className=""
            }else if(id==8){
                this.$refs.a6.className=""
                this.$refs.a7.className=""
                this.$refs.a8.className="active"
                this.$refs.a9.className=""
                this.$refs.a10.className=""
            }else if(id==9){
                this.$refs.a6.className=""
                this.$refs.a7.className=""
                this.$refs.a8.className=""
                this.$refs.a9.className="active"
                this.$refs.a10.className=""
            }else if(id==10){
                this.$refs.a6.className=""
                this.$refs.a7.className=""
                this.$refs.a8.className=""
                this.$refs.a9.className=""
                this.$refs.a10.className="active"
            }
           
        }
    },
    components:{
        mtLeft
    }
   
}
</script>
<style scoped>
/* */
    .carousel{
        position:relative;
        width:1300px;
        height:460px;
        margin:auto;
        overflow:hidden;
    }
.ride-left{
        position:absolute;
        top:0;left:0;
        width:234px;
        height:460px;
        display:flex;
        font-size:15px;
        flex-direction:column;
        justify-content:space-around;
        padding:20px 0;
        background:rgba(0,0,0,0.8);
        z-index:2;
    }
    .ride-left span{
        float:right;
        margin-right:30px;
    }
    .ride-left a{
        display:inline-block;
        width:234px;
        height:42px;
        line-height:42px;
        padding-left:30px;
        color:#fff;
    }
    .ride-left a:hover{
        text-decoration:none;
        background:#ff6700;
    }
    .left-u{
        position:absolute;
        top:0;
        left:234px;
        justify-content:space-around;
        color:#000;
        display:none;
        background:#fff;
    }
    .ride-left a:hover .left-u{
        display:flex;
    }
    .left-u ul{
        height:460px;
        width:266.5px;
        margin:0;
        padding:0 0 0 23px;
        list-style-type:none;
        display:flex;
        flex-direction:column;
        justify-content:flex-start;
        font-size:13px;    
    }
    .left-u li{
        height:75px;
        line-height:75px;
    }
    .left-u li:hover{
        color:#ff6700
    }
    .left-u li img{
        width:42px;
        height:42px;
    }
/*轮播图 */
    .ride-tu img{
        width:1300px;
        height:460px;
    }
    .carousel-control-prev{
        position:absolute;
        top:50%;left:234px;
        margin-top:-50px;
        background:rgba(0,0,0,0.1);
        width:50px;height:100px;
        border-radius:3px;
        text-align:center;
        line-height:100px;
        color:#ccc;
        font-size:25px;
    }
    .carousel-control-next{
        position:absolute;
        top:50%;right:0px;
        margin-top:-50px;
        background:rgba(0,0,0,0.1);
        width:50px;height:100px;
        border-radius:3px;
        text-align:center;
        line-height:100px;
        color:#ccc;
        font-size:25px;
    }
    .carousel-control-prev:hover,.carousel-control-next:hover{
        background:rgba(0,0,0,0.5)
    }
    .carousel-indicators li{
        width:18px;height:18px;
        border-radius:50%;
        background:#fff;
    }
    .carousel-indicators .active {
        background-color: #0aa1ed;
    }
/*底部 */
    .nav-boot{
        display:flex;
        width:1300px;
        margin:auto;
        justify-content:space-between;
    }
    .nav-to{
        width:234px;
        height:170px;
        margin:15px 0;
        display:flex;
        flex-wrap:wrap;
        text-align:center;
        background:rgba(0,0,0,0.5)
    }
    .nav-to a{
        width:33%;
        height:33%;color:#ccc;
        margin-top:12px;
        border-left:1px solid rgba(255,255,255,0.2);
    }
    .nav-to a:hover{
        text-decoration:none;
        color:#eee;
    }
   
    .nav-to span:first-child{
        font-size:40px;
    }
    .nav-to span:last-child{
        font-size:16px;
    }
    .nav-boot-img img{
        margin:15px 0;
        width:340px;height:170px;
    }
   .bt{
       width:1300px;
       margin:auto;
   }
   .bt img{width:100%}
</style>