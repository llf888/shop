<template>
    <div class="detial">
        <mt-nav class="detial_nav"></mt-nav>
        <div class="detial_list" @mouseleave="leavelist">
            <div class="zhaozi" @mouseenter="enterlist"></div>
            <mt-left class="detial_list_in" v-show="display_list"></mt-left>
        </div>
        
        
        <!-- 商品部分 -->
        <div class="buybody">
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
                    </div>
                </div>
            </div>
        </div>
        <el-container>
            <el-aside width="600px">
                <img :src="buyimg" alt="" :style="fixed0">
            </el-aside>

            <el-main>
                <p>山竹9</p>
                <p>全息幻彩全曲面玻璃机身 / 骁龙855旗舰处理器 / 索尼超广角4800万微距三摄</p>
                <p>3299元</p>
                <div>
                    <span>赠品</span> <span>无</span>
                </div>
                <div class="sure" v-if="ff===0">
                    <i class="el-icon-location-outline"></i>
                    <span>{{add1}}</span>
                    <span>{{add2}}</span>
                    <span>{{add3}}</span>
                    <p @click="gai">修改</p>  
                </div>
                <div class="address" v-else="ff===1">
                    <div>
                        <span v-for="(p,i) of xz" @click="mm(i)">{{p}}</span>
                        <span class="yello" v-if="nn===0">选择省份/自治区</span>
                        <span class="yello" v-else-if="nn===1">选择市/地区</span>
                        <span class="yello" v-else-if="nn===2">选择区县</span>
                        <span v-else="nn===3"></span>
                        <p @click="ol">确定</p>
                    </div>

                    <div>
                        <div v-if="ceng===0">
                            <span v-for="(s,i) of sheng" @click="fn(i,s)">{{s}}</span>
                        </div>
                        <div v-else-if="ceng===1">
                            <span v-for='(t,i) of tihuan' @click="ft(t,i)">{{t}}</span>
                        </div>
                        <div v-else-if="ceng===2">
                            <span v-for="(q,i) of tihuan" @click="fq(q)">{{q}}</span>
                        </div>
                        <div v-else="ceng==3">
                        </div>
                    </div>

                </div>
                <div class="guige">
                    <p>选择版本</p>
                    <div>
                        <span v-for="(b,i) of banben" :key="i" @click="changeban(i,b)" :style="{border:'1px solid '+b.border}">{{b.size}}<span>{{b.price}}元</span></span>
                       
                    </div>
                    <p>选择颜色</p>
                    <div>
                        <span v-for="(c,i) of color0" :key="i" :style="{border:'1px solid '+c.border}" @click="changeimg(i,c)"><span :style="{background:c.color}"></span>{{c.zi}}</span>
                    </div>
                    <p>选择意外保险</p>
                    <div class="baoxian">
                        <input type="checkbox"  v-model="chek0" @click="changecheks">
                        <img src="http://127.0.0.1:3000/img/buy/pms_1550560290.8631216.jpg" alt="">
                        <div>
                            <span><input type="checkbox" v-model="chek1" @click="weixiu0">意外保障服务 <span>299元</span></span>
                            <span><input type="checkbox" v-model="chek2" @click="weixiu1">手机意外碎屏/进水/碾压等损坏 <span>159元</span></span>
                            <span><input type="checkbox" v-model="chek3" @click="weixiu2">延长一年保修,性能故障免费维修 <span>99元</span></span>
                        </div>
                    </div>
                    <div class="total">
                        <span v-for="(h,i) of huizong" :key="i">
                            <span>{{h.name}}</span>
                            <span>{{h.size}}</span>
                            <span>{{h.price}}</span>
                        </span>
                        <div>总计: <span>{{total}}元</span> </div>
                    </div>
                    <div class="tocart">
                            <span @click="addcart">加入购物车</span>
                    </div>
                    <div>
                        <i class="el-icon-success">山竹自营</i>
                        <i class="el-icon-success">山竹发货</i>
                        <i class="el-icon-success">7天无理由退货</i>
                        <i class="el-icon-success">运费说明</i>
                    </div>
                </div>
            </el-main>
        </el-container>
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
           display_list:false,
           fixed0:"",
           huizong:[
               {name:"山竹9 全息幻彩蓝",size:"8GB+128GB",price:"1999元"},
           ],
            total:1999,
            chek0:false,
            chek1:false,
            chek2:false,
            chek3:false,
            fixed:'',
           color0:[],
           buyimg:"http://127.0.0.1:3000/img/buy/pms_1550642242.36585125.jpg",
           color1:[{color:"purple",zi:"全息幻彩紫",border:"#ff7600",img:"http://127.0.0.1:3000/img/buy/pms_1550642242.36585125.jpg"},{color:"#45f",zi:"全息幻彩蓝",border:"#ccc",img:"http://127.0.0.1:3000/img/buy/pms_1550642240.48638886.jpg"},{color:"gray",zi:"深空灰",border:"#ccc",img:"http://127.0.0.1:3000/img/buy/pms_1550642238.19945420.jpg"}],
           color2:[{color:"black",zi:"透明版",border:"#ff7600",img:'http://127.0.0.1:3000/img/buy/pms_1553001921.97126644.jpg'}],
           banben:[{size:"8GB+128GB",price:"3299",border:"#ff7600",img:"http://127.0.0.1:3000/img/buy/pms_1550642242.36585125.jpg"},{size:"8GB+256GB",price:"3699",border:"#ccc",img:'http://127.0.0.1:3000/img/buy/pms_1553001921.97126644.jpg'},{size:"6GB+128GB",price:"2399",border:"#ccc",img:"http://127.0.0.1:3000/img/buy/pms_1550642242.36585125.jpg"}],
           xz:[],
           sheng:["河北","山西","河南","山东","上海","浙江","西藏"],
           tihuan:[],
           shi:[["石家庄市","唐山市","秦皇岛市","邯郸市","邢台市","保定市","张家口市"],["太原市","大同市","阳泉市","长治市","晋城市","朔州市","晋中市","运城市"],["郑州市","开封市","洛阳市","平顶山市","安阳市","鹤壁市","新乡市","南阳市"],["济南市","青岛市","淄博市","枣庄市"],["黄浦区","徐汇区","长宁区","杨浦区","闵行区","金山区"],["杭州市","宁波市","温州市","嘉兴市","湖州市","绍兴市","舟山市","丽水市"],["拉萨市","昌都地区","山南地区","那曲地区","林芝市"]],
           qu:[
               [["长安区","新华区","裕华区"],["路南区","路北区","开平区"],["海港区","山海关区","北戴河区"],["邯山区","丛台区"],["桥东区","桥西区"],["满城县","徐水县"],["桥东区","宣化区"]],
               [["小店区","古交区"],["城区","矿区"],["郊区","孟县"],["平顺县","长子县"],["武乡县","沁源县"],["沁水县","高平市"],["朔城区","山阴县"],["太谷县","灵石县"],["万荣县","恒区县"]],
               [["中原区","二七区","金水区","上街区"],["龙亭区","杞县"],["洛龙区","西工区","老城区"],["新华区","卫东区","石龙区"],["文峰区","龙安区"],["鹤山区","山城区"],["红旗区","卫滨区"],["宛城区","卧龙区"]],
               [["历下区","市中区"],["四方区","崂山区"],["淄山区","博山区"],["市中区","台儿庄区"]],
               [["淮海中路街道","外滩街道"],["龙华街道","田林街道"],["虹桥街道","天山路街道"],["大桥街道","江浦路街道"],["古美街道","虹桥镇"],["金山卫镇","山阳镇"]],
               [["上城区","下城区"],["海曙区","鄞州区"],["鹿城区","龙湾区"],["海宁市","桐乡市"],["吴兴区","南浔区"],["越城区","柯桥区"],["海定区","普陀区"],["松阳县","云和县"]],
               [["城关区","林周县"],["昌都县","江达县"],["乃东县","桑日县"],["那曲县","比如县"],["八一镇","布久乡","林芝镇"]]
               ],
           ceng:0, //控制下层省市县的显示与隐藏
           nn:0,  //控制上层省/市/县的显示与隐藏
           n:0, //记录选择省的下标
           m:0, //记录选择市的下标
           add1:'北京',
           add2:'北京市',
           add3:'西城区',
           ff:0, //
        }
    },
    watch:{
        huizong(){
            var pp=0
            for(var key of this.huizong){
                pp+=parseInt(key.price)
            }
            this.total=pp
        },
        chek1(){
            
            if(this.chek2==true && this.chek3==true){
                this.chek0=true
            }
            if(this.chek1==false){
                this.chek0=false 
            }      
        },
        chek2(){
            if(this.chek1==true && this.chek3==true){
                this.chek0=true
            }
            if(this.chek2==false){
                this.chek0=false 
            }     
        },
        chek3(){
            if(this.chek2==true && this.chek1==true){
                this.chek0=true
            }
            if(this.chek3==false){
                this.chek0=false 
            }     
        }
    },
    created(){
        this.color0=this.color1
        window.addEventListener('scroll',this.handleScroll) //添加滚动监听事件
    },
    methods:{
        addcart(){
           if(this.$store.getters.getUid){
            var pname=this.huizong[0].name
            var price=this.huizong[0].price
            var img=this.buyimg
            var uid=this.$store.getters.getUid
            var url='http://127.0.0.1:3000/addcart'
            var formdata='pname='+pname+'&price='+price+'&img='+img+'&uid='+uid
                this.axios.post(url,formdata).then(res=>{
                    if(res.data.code){
                         this.$message({
                            message: '加入购物车成功',
                            type: 'success',
                            duration:1000
                        })
                    }
                })
                setTimeout(()=>{
                    this.$router.push('/shopcart')
                },2000)
            }else{
                this.$message({
                message:'请先登录',
                type:'info'
            })
            }
        },
        weixiu0(){
            if(this.chek1==false){
                this.huizong.push({name:"意外保障服务",size:"",price:"299元",num:1})
            }else{
                for(var key of this.huizong){
                    if(key.num==1){
                        this.huizong.splice(this.huizong.indexOf(key),1)
                    }
                }
            }
        },
        weixiu1(){
            if(this.chek2==false){
                this.huizong.push({name:"碎屏保障服务",size:"",price:"159元",num:2})
            }else{
                for(var key of this.huizong){
                    if(key.num==2){
                        this.huizong.splice(this.huizong.indexOf(key),1)
                    }
                }
            }
            console.log(this.huizong)
        },
        weixiu2(){
            if(this.chek3==false){
                this.huizong.push({name:"延长保修服务",size:"",price:"99元",num:3})
            }else{
                for(var key of this.huizong){
                    if(key.num==3){
                        this.huizong.splice(this.huizong.indexOf(key),1)
                    }
                }
            }
        },
        changecheks(){ 
            if(this.chek0==true){
                this.huizong.splice(1)
                this.chek1=false
                this.chek2=false
                this.chek3=false
            }else{
                this.huizong.push({name:"意外保障服务",size:"",price:"299元",num:1},{name:"碎屏保障服务",size:"",price:"159元",num:2},{name:"延长保修服务",size:"",price:"99元",num:3})
                this.chek1=true
                this.chek2=true
                this.chek3=true
            }
        },
        changeimg(i,c){
            for(var key of this.color0){
                key.border="#ccc"
            }
            this.color0[i].border="#ff7600"
            this.buyimg=this.color0[i].img
            this.huizong[0].name="山竹9 "+c.zi
        },
        changeban(i,b){
           
             this.huizong[0].size=b.size+"元"
             this.huizong[0].price=b.price
             for(var key of this.color0){
                key.border="#ccc"
            }
            this.color0[0].border="#ff7600"
            
            if(i==0){
                this.color0=this.color1
            }else if(i==1){
                this.color0=this.color2
            }else{
                this.color0=this.color1
            }
            for(var key of this.banben){
                    key.border="#ccc"
                }
                this.banben[i].border="#ff7600" 
                this.buyimg=this.banben[i].img 
        },
        fn(i,s){
            this.add1=s
            this.n=i
            this.nn=1
            this.ceng=1
           this.tihuan=this.shi[i]
           this.xz.push(s)
        },
        ft(t,i){
            this.add2=t
            this.m=i  
            this.nn=2
            this.ceng=2
           this.tihuan=this.qu[this.n][i]
           this.xz.push(t)
        },
        fq(q){
            this.add3=q
            this.nn=3
            this.ceng=3
            this.tihuan=[]
            this.xz.push(q)
        },
        mm(i){ 
            this.nn=i
            this.xz.splice(i)
            this.ceng=i
            if(i==1){
                this.tihuan=this.shi[this.n] 
            }else if(i==2){ 
                this.tihuan=this.qu[this.n][this.m]     
            }                
        },
        gai(){//修改地址
            this.ff=1
        },
       ol(){  
            if(this.add1=="" || this.add1=="北京"){
                this.$notify({
                    title: '警告',
                    message: '请选择省',
                    type: 'warning'
                });
            }else if(this.add2=="" || this.add2=="北京市"){
                this.$notify({
                    title: '警告',
                    message: '请选择市',
                    type: 'warning'
                 })
            }else if(this.add3=="" || this.add3=="西城区"){
                this.$notify({
                title: '警告',
                message: '请选择区',
                type: 'warning'
                })
            }else{
                this.ff=0
            }
        
      },
       enterlist(){
           this.display_list=true
       },
       leavelist(){
           this.display_list=false
       },
       handleScroll () {          
        var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;  //屏幕滑动到距离
        if(scrollTop>200 && scrollTop<700){
            this.fixed0="margin-top:"+(scrollTop-200)+"px"
        }
        if(scrollTop>200){
            this.fixed="position:fixed;top:50px"
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
    .buybody{
        margin:160px 0 60px 0;
    }
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
/**body */
 .el-container{
     width:1300px;
     margin:auto;
     padding:50px 0 0 0
 }
 .el-aside {
    background-color: #fff;
    color: #333;
    text-align: center;
  }
  .el-aside>img{
      width:560px;
      transition:margin 0.1s linear;
  }
  .el-main {
    background-color: #fff;
    color: #333;
    text-align: center;
  }
  .el-main>p{
      text-align:left;
      margin:20px 0; 
  }
  .el-main>p:first-child{
      font-size:30px;color:#000;
  }
  .el-main>p:nth-child(3){
      color:#ff7600;
      font-size:20px;
  }
  .el-main>div:nth-child(4){
      height:30px;
      font-size:15px;
      text-align:left;
      border-bottom:1px solid #ccc;
      margin-bottom:20px;
  }
/**地址 */
    .address{
        width:500px;
        height:150px;
        background:#fff;
        border:1px solid #ddd;
        margin-bottom:20px;
    }
    .yello{
        color:#ff7600;
    }
    .address>div{
        display:flex;
        justify-content:flex-start;
        flex-wrap:wrap;
        font-size:15px;
    }
    .sure{
        background:rgba(200,200,200,0.2);
        border:1px solid #ddd;
        display:flex;
        justify-content:flex-start;
        height:50px;width:500px;
        align-items:center;
        font-size:15px;
        padding:20px;
    }
    .sure>span{
        margin:0 10px;
    }
    .sure>p{
        color:#ff7600;
       font-size:15px;
       cursor:pointer;
       margin:0 0 0 50px;   
    }
    .address>div:first-child>p{
       margin:10px 0 0 50px;
        color:#ff7600;
       font-size:15px;
       cursor:pointer;
       
    }
    .address>div:first-child{
        margin:auto;
        width:460px;
        border-bottom:1px solid #ccc;
    }
    .address>div:first-child>span{
        margin:10px 20px 10px 20px;
    }
    .address>div:nth-child(2)>div{
        display:flex;
        justify-content:flex-start;
        flex-wrap:wrap;
    }
    .address>div:nth-child(2)>div>span{
        margin:10px 20px ;
    }
    .address>div:nth-child(2)>div>span:hover,.address>div:first-child>span:hover{
        color:#ff7600;
        text-decoration:underline;
        cursor:pointer;
    }
/**规格 */
    .guige{
        margin-top:30px;
    }
    .guige>p{
        font-size:20px;
        text-align:left;
        color:#222;
        margin:20px 0 20px 0;
    }
    .guige>div{
        display:flex;
        justify-content:flex-start;
        flex-wrap:wrap;
    }
    .guige>div:nth-child(4)>span>span{
        display:inline-block;
        width:16px;height:16px;
        border-radius:50%;
        position:relative;
        left:-10px;top:2px;
    }
    .guige>div:nth-child(2)>span>span{
        margin-left:25px;
        color:#aaa;
    }
    .guige>div>span{
        width:49%;
        height:40px;
        line-height:40px;
        border:1px solid #ccc;
        margin:5px 5px 5px 0;
    }
/**意外险 */
    .baoxian{
        border:1px solid #aaa;
        align-items:center;
        padding:20px;
    }
    .baoxian>input{
        width:10%;
    }
    .baoxian>div{
        display:flex;
        margin-left:30px;
        align-items:flex-start;
        justify-content:flex-start;
        flex-direction:column;
        width:70%;
        position:relative;
    }
    .baoxian>div>span>span{
        position:relative;
        right:-63px;
        color:#ff7600;
        font-size:15px;
    }
    .baoxian>div>span:first-child>span{
        right:-190px;
    }
    .baoxian>div>span:nth-child(3)>span{
        right:-59px;
    }
/**总计 */
    .total{
        margin:20px 0;
        background:rgba(230,230,230,0.4);
        padding:30px 20px;
        font-size:15px;
        color:#000;
    }
    .total>span{
        border:none !important;
        width:100% !important;
        display:flex;
        justify-content:space-between;
    }
    .total>div{
        margin:15px 0;
        font-size:30px;
        color:#ff5500;
    }
    .tocart>span{
        display:block;
        height:50px !important;
        line-height:50px !important;
        background:#ff7600;
        color:#fff;
    }
   
    .tocart+div{
        padding:20px 0 0 100px;
        font-size:15px;
        color:#aaa;
    }
    .tocart+div>i{
        margin:0 10px;
    }
</style>
