<template>
    <div class="detial">
        <mt-nav class="detial_nav"></mt-nav>
        <div class="detial_list" @mouseleave="leavelist">
            <div class="zhaozi" @mouseenter="enterlist"></div>
            <mt-left class="detial_list_in" v-show="display_list"></mt-left>
        </div>
        
        
        <!-- 参数 -->
        <div class="det-product" v-for="p of product_list">

        <div class="fixed-out" :style="fixed">
            <div class="fixed">
                <div class="fix-name">
                    <span>山竹</span>
                    <span>Redmi7</span>
                </div>
                <div class="fix-cla">
                    <span>概述</span>
                    <span>参数</span>
                    <span>F码通道</span>
                    <span>用户评价</span>
                    <button @click="tobuy">立即购买</button>
                </div>
            </div>
        </div>

            <div :style="{background:'url('+bgimg+')'+' 50% bottom no-repeat'}">
                <div class="det-head">
                    <img :src="p.img1" alt="">
                    <p v-text="p.pname"></p>
                    <div>
                        <span>{{p.pix}}<span>万拍照千元机</span></span>
                    </div>
                    <div>
                        <span>{{p.quality}}<span>个月超长质保</span></span>
                    </div>
                    <div>
                        <span><sup>¥</sup>{{p.price}}<span>起</span></span>
                    </div>
                </div>
            </div>

            <div class="det-list">
                <table>
                    <tr>
                        <td><p>{{p.t1n}}</p><p>{{p.t1x}}</p></td>
                        <td><p>{{p.t2n}}</p><p>{{p.t2x}}</p></td>
                        <td><p>{{p.t3n}}</p><p>{{p.t3x}}</p></td>
                        <td><p>{{p.t4n}}</p><p>{{p.t4x}}</p></td>
                        <td><p>{{p.t5n}}</p><p>{{p.t5x}}</p></td>
                    </tr>
                    <tr>
                        <td><p>{{p.t6n}}</p><p>{{p.t6x}}</p></td>
                        <td><p>{{p.t7n}}</p><p>{{p.t7x}}</p></td>
                        <td><p>{{p.t8n}}</p><p>{{p.t8x}}</p></td>
                        <td><p>{{p.t9n}}</p><p>{{p.t9x}}</p></td>
                        <td><p>{{p.t10n}}</p><p>{{p.t10x}}</p></td>
                    </tr>
                </table>
            </div>
        </div>
        <!-- 第二部分 -->
        <div class="pro_second" v-for="item of detitems">
            <div :style="{background:'url('+item.img1+')'+'no-repeat'}">
               <p>{{item.t1n}}</p>
               <p>{{item.t1t}}</p>
            </div>
            <div>
                <div>
                    <p>{{item.t2n}}</p>
                    <p>{{item.t2t}}</p>
                </div>
                <img :src="item.img2" alt="">
            </div>
            <div>
                <p>{{item.t3n}}</p>
                <p>{{item.t3T}}</p>
            </div>
            <div>
                <img :src="item.img3" alt="">
                <div class="scale">
                    <span @click="small">1×</span>
                    <span>...</span>
                    <span @click="big">4×</span>
                </div>
                <div>
                    <img :src="item.img4" alt="" :style="change_size">
                </div>
            </div>
            <div>
                <p>{{item.t4n}}</p>
                <p>{{item.t4t}}</p>
                <img :src="item.img5" alt="">
            </div>
            <div>
                <img :src="item.img6" alt="">
            </div>
            <div>
                <div :style="det_margin">
                    <img :src="item.img11" alt="">
                    <img :src="item.img12" alt="">   
                    <img :src="item.img7" alt="">
                    <img :src="item.img8" alt="">
                    <img :src="item.img9" alt="">
                    <img :src="item.img10" alt="">
                    <img :src="item.img11" alt="">
                    <img :src="item.img12" alt="">
                    <img :src="item.img7" alt="">
                    <img :src="item.img8" alt="">
                    <img :src="item.img9" alt="">
                </div>
                <div>
                    <ul @click="det_move">
                        <li data-id="1" :class="{detc: det_i==1 || det_i==7}"></li>
                        <li data-id="2" :class="{detc: det_i==2}"></li>
                        <li data-id="3" :class="{detc: det_i==3}"></li>
                        <li data-id="4" :class="{detc: det_i==4}"></li>
                        <li data-id="5" :class="{detc: det_i==5}"></li>
                        <li data-id="6" :class="{detc: det_i==6 || det_i==0}"></li>
                    </ul>
                </div>
                <div>
                    <span class="det_left mui-icon mui-icon-back" @click="det_left"></span>
                    <span class="det_right mui-icon mui-icon-forward" @click="det_right"></span>
                </div>
            </div>
           
        </div>
    <mt-footer></mt-footer>
    </div>
</template>
<script>
import mtNav from '../components/navigation.vue'
import mtLeft from '../components/left.vue'
import mtFooter from '../components/footer.vue'
export default {
    data(){
        return{
           det_margin:'margin-left:-1250px',
           display_list:false,
           fixed:"",
           dethid:'',
           product_list:'',
           bgimg:'',
           detitems:'',
           change_size:'',
           det_i:1,
        }
    },
    created(){
        window.addEventListener('scroll',this.handleScroll) //添加滚动监听事件
        this.axios.get("products1?name=山竹7").then(res=>{
           this.product_list=res.data.data
           this.bgimg=res.data.data[0].img2
        })
        
        this.axios.get('products2').then(res=>{
            this.detitems=res.data.data
        })
    },
    methods:{
        det_left(){
            var i=this.det_i-1
            this.det_i=i
            this.det_margin='margin-left:'+(-625*(i+1))+'px'
            if(i==0){
                setTimeout(()=>{
                    this.det_margin='margin-left:-4375px;transition:0s;'
                    this.det_i=6
                },500)
            }
        },
        det_right(){
            var i=this.det_i+1
            this.det_i=i
            this.det_margin='margin-left:'+(-625*(i+1))+'px'
            if(i==7){
                setTimeout(()=>{
                    this.det_margin='margin-left:-1250px;transition:0s;'
                    this.det_i=1
                },500)
            }
        },
        det_move(e){
            var i=parseInt(e.target.dataset.id)
            this.det_i=i
            this.det_margin='margin-left:'+(-625*(i+1))+'px'
            if(this.det_i==0 || this.det_i==1){
                this.det_1="background:#fff"
            }
        },
        small(){
            this.change_size=""
        },
        big(){
            this.change_size="transform:scale(2.5)"
        },
       enterlist(){
           this.display_list=true
       },
       leavelist(){
           this.display_list=false
       },
       tobuy(){
           this.$router.push('/buy')
       },
       handleScroll () {          
        var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;  //屏幕滑动到距离
       
        if(scrollTop>200){
            this.fixed="margin-top:"+(scrollTop-200)+"px;"
        }else{
            this.fixed=""    
        }
        if(scrollTop>2300 && scrollTop<2500){
            this.change_size="transform:scale(2.5)"
        }
       
       }
},

    components:{
        mtNav,
        mtLeft,
        mtFooter
    }
}
</script>
<style> 
    .detial .detial_list a{
        color:#000;
    }
    .detial .detial_list_in a span{
        color:#ccc;
    }
    .detial_nav .biao>li:first-child{
        margin-left:30px;
        opacity:1
    }
    .detial_nav #head-out{
        border-top:none;
    }
</style>
<style scoped>
    .detial{
        background:#fff; 
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
/**固定栏 */
    .fixed-out{
        width:100%;
        border-bottom:1px solid #ccc;
        box-shadow:0 3px 5px 0px #ccc;
        border-top:1px solid #ccc;
        position:absolute;
        margin-top:-50px;
        transition:all 0.05s linear; 
        background:#fff; 
        z-index:2;
    }
    .fixed{
        width:1300px;
        margin:auto;
        display:flex;
        height:60px;
        line-height:60px;
        justify-content:space-between;  
    }
    .fix-name{
        font-size:17px;
        color:#555;
    }
    .fix-name span:first-child{
        font-size:20px;
        color:#000;
    }
    .fix-name span+span:before{
        display:inline-block;
        content:"|";
        margin:0 5px;
        height:15px;
        line-height:15px;
        font-size:15px;
    }
    .fix-cla{
        color:#777;
        font-size:15px;
    }
    .fix-cla>span+span:before{
        display:inline-block;
        content:"|";
        margin:0 5px;
        color:#ccc;
    }
    .fix-cla>button{
        width:120px;
        height:30px;
        background:#ff7600;
        color:#fff;
        padding:0;
        margin:15px 0 0 5px;
        border-radius:0;
        box-sizing:border-box;
    }

/**详细信息 */
    .det-product{
        width:100%;
        margin-top:160px;
        position:relative; 
    }
    .det-product>div:nth-child(2){
        width:100%;
        background-size:cover !important;
        height:800px;
    }
    .det-head{
        width:1300px;
        margin:auto;
        padding:50px 0;
    }
    .det-head img{
        width:56px;
    }
    .det-head>p{
        font-size:60px;
        font-weight:200;
        color:#000;
        margin:60px 0;
    }
    .det-head>div{
        margin:10px 0;
    }
    .det-head>div:nth-child(4)>span,.det-head>div:nth-child(4)>span{
        font-size:27px;
    }
    .det-head>div:nth-child(5)>span>span,.det-head>div:nth-child(4)>span>span{
        font-size:17px;
        color:#555
    }
    .det-head>div:nth-child(6){
        color:#ff0055;
        margin:50px 0;
        font-size:25px;
    }
    .det-list{
        height:300px;
        width:100%;
    }
/**table */
   .det-list{
       width:100%;
   }
   .det-list table{
       width:1300px;
       margin:30px auto;
       border-collapse:separate;
       border-spacing:10px 50px;
   }
   .det-list table td{
       width:20%;
       padding:0 0 0 60px;
   }
   .det-list table td>p:first-child{
       font-size:12px;
       color:#777
   }
   .det-list table td>p:last-child{
       font-size:17px;
       color:#000;
   }


/**第二部分 */
 .pro_second>div:first-child{
     height:300px;
     padding:100px 230px;
 }
 .pro_second>div:first-child>p{
     font-size:35px;
     color:#fff;
     font-weight:600;
     margin-bottom:30px;
 }
 .pro_second>div:nth-child(2){
     text-align:center;
     padding:110px 0;
 }
 .pro_second>div:nth-child(2)>div{
     width:1300px;
     margin:auto;
 }
 .pro_second>div:nth-child(2) p{
     text-align:left;
     font-size:20px;
     color:#777;
     padding:0 0 40px 0;
 }
 .pro_second>div:nth-child(2) p:first-child{
     font-size:40px;
     font-weight:600;
     color:#000;
 }
 .pro_second>div:nth-child(2) img{
     width:1200px;
 }
 .pro_second>div:nth-child(3){
     width:1300px;
     margin:auto;
 }
 .pro_second>div:nth-child(3) p{
     font-size:20px;
     color:#777;
 }

 .pro_second>div:nth-child(4){
     position:relative;
     width:1000px;
     height:460px;
     margin:100px auto;
 }
 
 .pro_second>div:nth-child(4)>div{
    width:1000px;
    height:460px;
    overflow:hidden;
    position:absolute;
    left:50%;top:0;
    margin-left:-500px;
 }
 .pro_second>div:nth-child(4)>img{
     position:relative;
     left:-140px;top:-30px;
     z-index:1;
 }
 .pro_second>div:nth-child(4)>div>img{
     width:1000px;
     transition:0.7s linear;
 }
  .pro_second>div:nth-child(4) .scale{
     color:#fff;
     width:200px;height:100px;
     position:absolute;
     left:40%;top:350px;
     z-index:2;
     margin:0;
     font-size:20px;
     line-height:100px;
     font-weight:100;
     text-align:center;
  }
  .pro_second>div:nth-child(4) .scale>span:first-child{
      border:1px solid #fff;
      border-radius:50%;
      padding:12px;
      margin-right:20px;
  }
  .pro_second>div:nth-child(4) .scale>span:last-child{
      border:1px solid #fff;
      border-radius:50%;
      padding:12px;
      margin-left:20px;
  }
  .pro_second>div:nth-child(5),.pro_second>div:nth-child(6){
      width:1300px;
      margin:auto;
  }
  .pro_second>div:nth-child(5) p:first-child{
      font-size:30px;
      color:#000;
      padding:0 0 20px 0;
  }
  .pro_second>div:nth-child(5) p:nth-child(2){
      color:#777;
       padding:0 0 20px 0;
  }
.pro_second>div:nth-child(7){
    width:100%;
    overflow:hidden;
    position:relative;
}
 .pro_second>div:nth-child(7)>div:first-child{
     display:flex;
     flex-wrap:nowrap;
     justify-content:flex-start;
     width:300%;
     transition:0.5s linear;
 }
 .pro_second>div:nth-child(7)>div img{
     height:403px;
     padding:0 20px 0 0;
 }
 .pro_second>div:nth-child(7)>div:nth-child(2)>ul{
     list-style:none;
     margin:20px auto;
     width:200px;
     position:relative;
 }
 .pro_second>div:nth-child(7)>div:nth-child(2)>ul>li{
     float:left;
     width:15px;height:15px;
     border:3px solid #aaa;
     border-radius:50%;
     background:#666;
     margin:5px;
 }
 .det_left{
     position:absolute;
    width:50px;height:100px;
    background:rgba(0,0,0,0.5);
    top:35%;left:0;
    line-height:100px;font-size:50px;
    color:#999;
    border-radius:5px;
    border-top-right-radius:5px;
    border-bottom-right-radius:5px;
    opacity:0.5
 }
  .det_right{
     position:absolute;
     top:35%;right:0;
    width:50px;height:100px;
    line-height:100px;font-size:50px;
    color:#999;
    background:rgba(0,0,0,0.5);
    border-top-left-radius:5px;
    border-bottom-left-radius:5px;
    opacity:0.5
 }
  .detc{
     background:#fff !important;
 }
 .det_right:hover,.det_left:hover{
     opacity:1
 }
</style>
