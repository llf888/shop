<template>
  <div class="header">
      <div class="nav-header" @mouseenter="fb">
          <div class="nav-header-left"> 
            <span v-for="elem of list">{{elem}}<span class="terval">|</span></span>
            <span class="father">下载app
              <div class="code">
			          <div class="small"></div>
			            <div class="big">
				            <img src="img/lun bo/93650133310ec1c385487417a472a26c.png" alt="">
				            <div>现代智能APP</div>
			            </div>
	        	  </div></span><span class="terval">|</span><span>Select Region</span><span class="terval">|</span>
          </div>
          <div class="nav-header-right">
            <!-- 登录 -->
            <span><router-link :to="navlogin"  class="sp" ref="deng">{{names}}</router-link><span class="terval">|</span></span>
            <!-- 注册 -->
            <span @click="huan"><router-link :to="sign_in"  class="sp" >{{zhuce}}</router-link><span class="terval">|</span></span>
            <span class="sp">消息通知<span class="terval">|</span></span>
            <span class="nav-car" @mouseenter="changeCar1" @mouseleave="changeCar2" @click="moveto_cart"><span><img :src="img" alt="">购物车 ({{count}})</span>
                <div class="car-content" v-show='carche0'>
                    <span class="car-content-sp">购物车里还没有商品赶紧选购吧!</span>
                </div>
                <div class="smallcar" v-show='carche'>
                  <div v-for="(m,i) of carlist" :key='i'>
                      <img :src="m.img" alt="">
                      <span>{{m.pname.substring(0,7)+"..."}}</span>
                      <span>{{m.price.toFixed(2)}}元*{{m.count}}</span>
                  </div>
                  <div>
                    <span>
                        <p>共{{count}}件商品</p>
                        <span>{{cart.toFixed(2)}}<span>元</span></span>
                    </span>
                    <div><router-link to="shopcart">去购物车结算</router-link></div>
                  </div>
              </div>
            </span>
            
            
           
          </div>
      </div>
    <!--导航第二层-->
      <div class="header-second">
          <router-link  to="index" class="logo">
            <img src="img/lun bo/logo.jpg" alt="">
          </router-link>
          <!--分类-->
          <ul class="biao">
            <li v-for="(item,i) of ullist" v-text="item" :data-id="i" @mouseenter="fn" class="biao_li"></li>
          </ul>
          <div class="search">
            <input type="text" @focus="display"
            @blur="dis" v-model='searchs'>
            <a href="javascript:;" class="righta">
            <router-link to="search">
              <span class="mui-icon mui-icon-search" @click='toSearch'></span></router-link>
            </a>
            <div class="search-hot" v-show="focus==false">
                <a href="javascript:;">智能9</a>
                <a href="javascript:;">智能9 SE</a>
            </div>
          </div>
      </div>
      <div id="head-out" v-show="show==false" @mouseleave="fm">
      <!-- 隐藏区域 -->
        <div class="head-hid">
            <ul>
              <li v-for="elem of item0">
                <p v-show="elem[0]" v-text="elem[0]"></p>
                <router-link to="detials">
                    <img :src="elem[1]" alt="">
                    <span id="septum"></span>
                </router-link>
                <p>{{elem[2]}}</p>
                <p>{{elem[3]}}</p>
              </li>
            </ul>
        </div>
      </div>
      <div class="totop" v-show='toto' @click="ft">
          <router-link to="">
            <span class='mui-icon-extra mui-icon-extra-top'></span>
          </router-link>
         </div>   
  </div>
</template>
<script>
export default {
  data(){
    return{
      navlogin:"login",
      sign_in:"sign_in",
      names:"登录",
      zhuce:"注册",
      show:true,
      searchs:'',
      list:["智能商城","CSO","MU","智能服务","金融","物业","法律服务平台","政企服务","资质证照","协议规则"],
      img:"img/lun bo/d7db56d1d850113f016c95e289e36efa.png",
      ullist:["全部商品分类 ","智能手机","蘑菇","电视","笔记本","家电","新品","路由器","智能硬件","服务","社区"],
      focus:false,
      item0:[],
      toto:false,
      count:0,
      carlist:[],
      cart:0,
      carche:false,  //购物车下拉
      carche0:false,  //购物车下拉
  /** */
      item1:[
      ["新品","img/mi9-320.png","智能9","2999元"],
      ["新品","img/320X220.png","智能9 小新限量版","3599元"],
      ["新品","img/mi9se-320.png","智能9 SE","1999元"],
      ["新品","img/320X220 (1).png","智能9 SE 布朗熊限量套装","2499元"],
      ["","img/mix3-320.png","智能MIX 3","3299元"],
      ["","img/qingchun-320.png","智能8 青春版","1499元"]
      ],
      item2:[
      ["新品","img/redmi.jpg","Redmi Note 7 Pro","1599元"],
      ["新品","img/note7320-220.png","Redmi Note 7","999元"],
      ["新品","img/pms_1537324004.08544830!220x220.jpg","Redmi 7","699元"],
      ["","img/666320.png","蘑菇6","729元"],
      ["","img/6A320.png","蘑菇6A","549元"],
      ["","img/note5-320-220.png","蘑菇Note 5","1049元"]
      ],
      item3:[
      ["新品","img/4s75.png","智能电视4S 75英寸","7999元"],
      ["新品","img/32.png","智能电视4A 32英寸","799元"],
      ["新品","img/4a43.png","智能电视4A 43英寸青春版","1399元"],
      ["新品","img/50.png","智能电视4A 50英寸","1799元"],
      ["新品","img/4A-55.jpg","智能电视4A 55英寸","2099元"],
      ["","img/475toutu.png","查看全部","智能电视"]
      ],
       item4:[
      ["新品","img/12.5yinsetoubu.png","智能笔记本 Air 12.5\"","3599起"],
      ["新品","img/7e0a6709-90db-03d4-26d4-c2d914a57fc0.jpg","智能笔记本 Air 13.3\"","4799起"],
      ["新品","img/rubyheise.png","智能笔记本 15.6\"","3799起"],
      ["","img/WechatIMG603.png","智能笔记本 Pro 15.6\"","5199起"],
      ["","img/xinbijiben.png","智能游戏本","6499起"],
      ["","img/pingbanok.png","智能平板","1099起"]
      ],
      item5:[
      ["","img/320_220.jpg","菌菌互联网洗烘一体机","2499元"],
      ["","img/yijinengxiao320.jpg","菌菌互联网空调(一级能效)","2299元"],
      ["","img/sanji.jpg","菌菌互联网空调","1999元"],
      ["","img/xiaomijingshuiqi.jpg","智能净水器","1699元"],
      ["","img/saodijiqiren320-220.jpg","菌菌扫地机器人","1699元"],
      ["","img/saodijiqiren320-220.jpg","新风机","2699元"]
      ],
      item6:[
      ["新品","img/redmi.jpg","Redi Note 7 Pro","1599元"],
      ["新品","img/mi9-320.jpg","智能9","2999元起"],
      ["新品","img/mi9-se-320.jpg","智能9 SE","1999元起"],
      ["","img/redminote-7-320.jpg","蘑菇Note 7","999元起"],
      ["","img/chongdianbao-320.jpg","智能无线充电宝 10000mAh","149元"],
      ["","img/wuxianchechong-320.jpg","智能无线车充","169元"]
      ],
      item7:[
      ["新品","img/luyoumesh.jpg","智能路由器Mesh","9999元"],
      ["双频双核","img/quanbuluyouqi.png","智能路由器4A 千兆版","169元"],
      ["","img/luyouqi4A.jpg","智能路由器 4C","99元"],
      ["","img/luyouqi41C.jpg","智能路由器4A","119元"],
      ["大容量","img/PRO.png","智能路由器 HD/Pro","499元起"],
      ["","img/qianzhao.jpg","查看全部智能路由器",""]
      ],
      item8:[
      ["","img/yuntai.jpg","智能菌菌只能摄像机云台版","199元"],
      ["","img/xishouj.jpg","菌菌自动洗衣机套装","79元"],
      ["","img/airdots.jpg","智能蓝牙耳机AirDots青春版","199元"],
      ["","img/xiaoaimini.jpg","智能小爱音箱mini","169元"],
      ["","img/tixudao.jpg","菌菌电动剃须刀","1499元"],
      ["","img/shouhuanNFC.jpg","查看全部","智能硬件"]
      ],
    }
  },
  methods:{
    ft(){ //缓慢回到页面顶部
      (function smoothscroll(){
        var currentScroll = document.documentElement.scrollTop || document.body.scrollTop;
      if (currentScroll > 0) {
         window.requestAnimationFrame(smoothscroll);
         window.scrollTo (0,currentScroll - (currentScroll/20));
      }
      })()
    },
     handleScroll () {          
        var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;  //屏幕滑动到距离
       
      
        if(scrollTop>600){
            this.toto=true
        }else{
            this.toto=false    
        }
     },
     
    toSearch(){//搜索
       sessionStorage.setItem('content',this.searchs)
        this.$router.push('/search?content='+this.searchs)
       window.location.reload();
    },
    huan(e){//退出登录更换成注册
        this.zhuce="注册"
        this.$store.commit('changeName',"")
        this.$store.commit('changeUid',"")
    },
    moveto_cart(){
      this.$router.push({path:'/shopcart'})
    },
    changeCar1(){
      this.img="img/lun bo/692a6c3b0a93a24f74a29c0f9d68ec71.png"
        if(this.names!='登录'){
            this.axios.get('http://127.0.0.1:3000/cart?uid='+this.$store.getters.getUid).then(res=>{
              if(res.data.code==1){
                  this.carche=true
                  this.carche0=false
                  this.carlist=res.data.data
                  var total=0
                  for(var key of this.carlist){
                    total+=key.price*key.count
                  } 
                  this.cart=total
                }else{
                  this.carche=false
                  this.carche0=true
                } 
            })
        }else{
            this.carche0=true
            this.carche=false
        }
        
    },
    changeCar2(){
      this.carche=false
      this.carlist=[]
      this.cart=0
      this.img="img/lun bo/d7db56d1d850113f016c95e289e36efa.png"
    },
    display(){
        this.focus=true
    },
    dis(){
      this.focus=false
    },
    fn(e){
      var i=e.target.dataset.id
      if(i==1){
        this.show=false
        this.item0=this.item1
      }else if(i==2){
        this.show=false
        this.item0=this.item2
      }else if(i==3){
        this.show=false
        this.item0=this.item3
      }else if(i==4){
        this.show=false
        this.item0=this.item4
      }else if(i==5){
        this.show=false
        this.item0=this.item5
      }else if(i==6){
        this.show=false
        this.item0=this.item6
      }else if(i==7){
        this.show=false
        this.item0=this.item7
      }else if(i==8){
        this.show=false
        this.item0=this.item8
      }else(
        this.show=true
      )
      },
      fm(){
        this.show=true
      },
      fb(){
        this.show=true
      }
  },

  created(){
    if(this.$store.getters.getCount && this.$store.getters.getName){
      this.nocar=false
      this.count=this.$store.getters.getCount
    }else{
      this.nocar=true
      this.count=0
    }
   
    window.addEventListener('scroll',this.handleScroll)
   
    if(this.$store.getters.getName){ //判断用户是否已登录
     this.names="欢迎您 "+this.$store.getters.getName
     this.navlogin=""
     this.zhuce="退出"
     this.sign_in="login"
      
      this.axios.get('http://127.0.0.1:3000/cart?uid='+this.$store.getters.getUid).then(res=>{
        if(res.data.code==1){
          this.count=res.data.data.length
        }else{
          this.count=0
        }
      })
    }       
  }
}
</script>

<style scoped>
  .header{
    height:40px;
    width:100%;
    background:#333;
  }
  .nav-header{
    width:1300px;
    margin:auto;
    color:#b0b0b0;
    display:flex;
    flex-wrap:nowrap;
    font-size:0.2rem;
    line-height:40px;
    justify-content:space-between;
  }
 .terval{
    color:#424242;
    margin:0.5em;
  }
  .father{
    display:inline-block;
    position:relative;
    z-index:4;
  }
  .nav-header-right{
    position:relative;
  }
  .nav-header-left span:hover,.nav-header-right .sp:hover{
      color:#fff;
  }
  a{
    color:#b0b0b0;
  }
  a:hover{
    text-decoration:none;
  }
  
  .code{
			width:120px;
      height:140px;
			position:absolute;
       right:-40px;
       display:none;
		}
    .father:hover .code{
    display:block;
  }
		.small{
			width:15px;
			height:15px;
			border:1px solid #000;
			border-bottom:0;
			border-right:0;
			transform:rotate(45deg);
			position:absolute;
			top:-8px;
			left:52px;
			 background:#fff;
		}
		.big{
    background:#fff;
		width:120px;
		height:130px;
		border:1px solid #ccc;
    position:relative;
    top:-10px;
    border-top:none;
		text-align:center;
		font-size:12px;
    margin-top:10px;
     color:#000;
		}
		.big img{
			margin-top:10px;
			width:90px;
		}
    .big>div{
      line-height:27px;
    }

/*购物车*/
    .nav-car{
      display:inline-block;
      width:120px;
      background:#444;
      text-align:center;
      margin-left:1rem;
       position:relative;
    }
    .nav-car:hover{
      background:#fff;
      color:#ff6700;
    }
    .nav-car img{
      width:1.2rem;
      margin:0.5rem;
    }
    .nav-car:hover>.car-content{
      height:100px;
    }
    .car-content{
      position:absolute;
      right:0px;
      width:350px;
      height:0;
      line-height:100px;
      text-align:center;
      color:#000;
      background:#fff;
      font-size:12px;
      border:1px solid #ccc;
      border-top:0;
      z-index:6;
      transition:height 0.2s linear;
      display:flex;
      justify-content:center;
      overflow:hidden;
    } 
    .smallcar>div img{
      width:90px;height:90px;
      padding:0;
    }
    .smallcar{
      width:350px;
      position:absolute;
      top:40px;right:-1px;
      z-index:5;
      background:#fff;
    }
    .smallcar>div>span:last-child{
      width:30%;
      line-height:90px;
      color:#000;
    }
    .smallcar>div>span:nth-child(2){
      width:30%;line-height:90px;
      color:#000;
      text-align:left;
    }
    .smallcar>div{
    position:relative;
     display:flex;
     justify-content:space-between;
    }
    .smallcar>div+div:after{
      display:"block";
      content:"";
      border-top:1px solid #aaa;
      position:absolute;width:270px;
      left:40px;
    }
    .smallcar>div:last-child>span{
      padding-left:20px;
      height:70px;
      line-height:50px;
    }
    .smallcar>div:last-child>span>p{
        height:15px;
        font-size:12px;
        color:#777;
    }
    .smallcar>div:last-child>span>span{
      color:#ff7600;
      font-size:30px;
    }
    .smallcar>div:last-child>span>span>span{
      font-size:15px;
    }
    .smallcar>div:last-child>div{
      width:150px;height:40px;
      border:1px solid #aaa;
      background:#ff7600;
      line-height:40px;
      margin:15px 20px 0 0;
     
    }
    .smallcar>div:last-child>div>a{
       color:#fff;
    }
/*导航第二层 */
.header-second{
    width:1300px;
    margin:auto;
    height:100px;
  
    }
    .logo{
      display:inline-block;
      width:55px;
      height:55px;
      line-height:100px;
      float:left;
    }
    .logo img{
      width:55px;
      height:55px;
    
    }
    .biao{
      list-style:none;
      width:820px;
      float:left;
      margin:0;
      padding-top:12px;
      font-size:16px;
    }
    .biao>li{
      float:left;
      height:88px;
      padding:26px 10px 38px;
    }
    .biao>li:first-child{
        margin-left:30px;
        opacity:0
    }
    /*输入框 */
    .search{
      float:right;
      line-height:100px;
      position:relative;
    }
    .search:before{
      display:table;
      content:"";
    }
    .search input{
      width:245px;
      height:50px;
      margin:0;
      border-radius:0;
    }
    .search .righta{
      width:50px;
      height:50px;
      display:inline-block;
      position:relative;
      top:20px;
      border:1px solid #ccc;
      border-left:none;
    }
    .search span{
      float:right;  
      width:50px;
      height:50px; 
      padding:13px;
    }
  /*搜索图标样式 */
    .mui-icon{
    font-size:24px;
    font-weight:950;
    color:#555;
    }
    .search .righta:hover{
      background:#ff6700;
      border:1px solid #aaa;
    }
    .search .righta:hover .mui-icon{
      color:#fff;
    }
    input:hover{
      border:1px solid #aaa;
    }
    input:hover +.righta{
      border:1px solid #aaa;
      border-left:none;
    }
    .search-hot{
      position:absolute;
      top:0;
      right:70px;
      font-size:12px;
    }
    .search-hot>a:first-child,.search-hot>a:last-child{
      color:#777;
      padding:0.2rem;
      margin:0.3rem;
      background:#eee;
    }
    .search-hot>a:hover{
      text-decoration:none;
      background:#ff6700;
      color:#eee
    }
/*隐藏区域 */
  #head-out{
    width:100%;
    height:240px;
    border-top:1px solid #aaa;
    border-bottom:1px solid #aaa;
    background:#fff;
    position:relative;
    z-index:3;
  }
  .head-hid{
    width:1300px;
    height:240px;
    margin:auto;
  }
  .head-hid>ul{
    display:flex;
    justify-content:space-around;
    list-style-type:none;
    padding:40px 0 0 0;
  }
  .head-hid li{
    position:relative;
  }
  .head-hid li p{
     text-align:center;
     font-size:10px;
     color:#ff6700;
     margin:auto;
  }
  .head-hid li p:first-child{
    position:absolute;
    top:-41px;
    left:50px;
    border:1px solid #ff6700;
    width:60px;
    height:20px;
  }
  .head-hid li p:nth-child(3){
    color:#000 ;
    margin-top:10px;
  }
  .head-hid img{
    width:160px;
    height:110px;
    border:0;
  }
  #septum{
    display:inline-block;
    border-left:1px solid #ccc;
    height:100px;
    float:left;
    margin-left:-34px;
    margin-top:4px;
  }
  .head-hid li:first-child> #septum{
    display:none;
  }
  .totop{
        position:fixed;
        text-align:center;
        line-height:60px;
        background:#ccc;
        bottom:100px;right:80px;
        border:1px solid #aaa;
        width:50px;height:50px;
        z-index:5;
    }
    .totop:hover{
      background:#000;
      color:#fff;
    }
    .totop>a{
      display:inline-block;
      width:50px;height:50px;
    }
</style>
