<template>
    <div class="cart">
    <!--购物车页面顶部内容 -->
       <div class="head">
            <div>
                <router-link to='index'>
                    <img src="img/login/logo.jpg" alt="">
                </router-link>
                <span>我的购物车</span>
                <span>温馨提示:产品是否购买成功,以最终下单为准哦,请尽快结算</span>
                <span>
                    <router-link :to="shoplogin">{{shopnames}}</router-link>
                    <span>|</span>
                    <span @click="out">
                    <router-link :to="shopsign_in">{{shopzhuce}}</router-link></span>
                </span>
            </div>
       </div>
    <!--购物车选中商品-->
        <div v-if="shopproducts>0" class="products">    
        <!-- 标题栏 -->
            <div class="products_title">
                <span><input type="checkbox" v-model:checked='allchosed' @click="fb">全选</span>
                <img src="" alt="">
                <span>商品名称</span>
                <span>单价</span>
                <span>数量</span>
                <span>小计</span>
                <span>操作</span>
            </div>
        <!-- 商品部分 -->
            <div class="products_detials" v-for="(elem,i) of shoplist" :key="i">
                <span>
                    <input type="checkbox" v-model:checked="elem.chosed" @click="fn(elem)">
                </span>
                <img :src="elem.img" alt="">
                <router-link to="">{{elem.pname}}</router-link>
                <span>{{elem.price}}元</span>
                <span>
                    <span @click="subone" :data-id='elem.pid'>-</span>
                    <span>{{elem.count}}</span>
                    <span @click="addone" :data-id='elem.pid'>+</span>
                </span>
                <span>{{elem.total.toFixed(2)}}元</span>
                <span @click="del" :data-id='elem.pid'>×</span>
            </div>
        <!-- 结算部分 -->
            <div class="products_total">
                <router-link to="index">继续购物</router-link>
                <span>共
                    <span>{{shoplength}}</span>件商品,已选择
                    <span>{{len}}</span>件
                </span>
                <span></span>
                <span>合计:
                    <span>{{alltotal}}</span>元
                </span>
                <span :class="total_col">去结算
                    <div v-show='shopchosed==false'>
                        <span>请勾选需要结算的商品</span>
                        <span></span>
                    </div>
                </span>
            </div>
        </div>
        <div v-show="shopproducts==0" class="kong">
            <p>您的购物车还是空的!</p>
            <span>
                <router-link to='index'>马上购物</router-link>
                <router-link to='login'>登录</router-link>
            </span>
        </div>
    <!-- 商品推荐部分 -->
        <div class="recommend">
            <div>
                <hr>
                <div>买购物车中商品的人还买了</div>
                <hr>
            </div>
            <div>
                <div v-for="(l,i) of shoplists" :key="i">
                    <img :src="l.img" alt="">
                    <p>{{l.pname}}</p>
                    <p>{{l.price}}元</p>
                    <div>
                        <span>{{l.est>10 ? parseInt(l.est): l.est+"万"}}人好评</span>
                        <span @click="add">加入购物车</span>
                    </div>
                </div>
            </div>
        </div>
        <mt-footer></mt-footer>
    </div>
</template>
<script>
import mtFooter from '../components/footer'
export default {
    data(){
        return{
            shopnames:'登录',
            shopzhuce:'注册',
            shoplogin:'',
            shopsign_in:'',
            shoplist:[],
            shoplists:[],
            numb1:0,
            numb2:0,
            shopproducts:0,
            allchosed:false,
            shopchosed:false,
            fm:0,
            shoplength:0,
            len:0,
            total_col:{
                tocol:false
            }
        }
    },
    watch:{
      shopchosed(){
          if(this.shopchosed==true){
            this.total_col.tocol=true
          }else{
            this.total_col.tocol=false
          }
           
      },
      shoplist(){
          this.shoplength=this.shoplist.length
          this.$store.commit('changeCount',this.shoplength)
        
      }
    },
    created(){
        if(this.$store.getters.getName){
        this.shopnames="欢迎您 "+this.$store.getters.getName
        this.shoplogin=""
        this.shopzhuce="退出"
        this.shopsign_in="login" 

        this.axios.get('cart?uid='+this.$store.getters.getUid).then(res=>{
                if(res.data.code==1){
                    this.shopproducts=1
                    this.shoplist=res.data.data 
                }else{
                    this.shopproducts=0
                }      
            })
        }else{
            this.shopproducts==0
            this.shoplogin='login'
            this.shopsign_in='sign_in'
        }
        this.axios.get('commend').then(res=>{
            this.shoplists=res.data.data
        })
    },
   
    methods:{
        out(e){   
           this.$store.commit("changeName",'')
           this.$store.commit("changeUid",'')
        },
        fn(elem){ //单选按钮控制全选
            var mlist=this.shoplist 
            setTimeout(()=>{
                for(var key of mlist){
                if(key.chosed==true){
                    this.shopchosed=true
                    this.fm+=1
                }    
            }
            this.len=this.fm 
            

            if(this.fm==0){
                
                this.shopchosed=false
            }
            if(this.fm==mlist.length){
                this.allchosed=true
                this.fm=0
            }else{
                this.allchosed=false
                this.fm=0
            }
            },100)
                
            this.shoplist=mlist
        },
        fb(){ //全选按钮控制单选
            var nlist=this.shoplist
            if(this.allchosed==false){
                this.shopchosed=true
                for(var key of nlist){
                    key.chosed=true
                }
                this.len=this.shoplist.length
            }else{
                this.shopchosed=false
                for(var key of nlist){
                    key.chosed=false
                }
                this.len=0
            }
             this.shoplist=nlist 
        },
    add(e){//添加购物车商品
        if(this.$store.getters.getName){
          var parent=e.target.parentElement.parentElement  
          var img=parent.children[0].src
          var pname=parent.children[1].innerHTML
          var price=parent.children[2].innerHTML
          var url='addcart'
          var formdata='pname='+pname+'&price='+price+'&img='+img+'&uid='+this.$store.getters.getUid
          this.axios.post(url,formdata).then(res=>{
              if(res.data.code==1){
                  this.$message({
                    message: '加入购物车成功',
                    type: 'success',
                    duration:5000
                  })
                this.axios.get('cart?uid='+this.$store.getters.getUid).then(res=>{
                    if(res.data.code==1){
                        this.shopproducts=1
                        this.shoplist=res.data.data 
                    }
                })
              }
          })
        }else{
            this.$message({
                message:'请先登录',
                type:'info'
            })
        } 
        },
        addone(e){//点击+号时触发
            var pid=e.target.dataset.id
            this.axios.get('addone?pid='+pid).then(res=>{
                if(res.data.code==1){
                    this.axios.get('addcha?pid='+pid).then(res=>{
                        if(res.data.code==1){
                            var addcha=res.data.data
                            for(var key of this.shoplist){
                                if(key.pid==pid){
                                    key.count=addcha[0].count
                                    key.total=addcha[0].total
                                }
                            }  
                        }
                        
                    })
                }   
            })
        },
        subone(e){ //点击-号时触发
            var pid=e.target.dataset.id
                this.axios.get('subone?pid='+pid).then(res=>{
                    this.axios.get('subcha?pid='+pid).then(res=>{
                        if(res.data.code==1){
                            var subcha=res.data.data
                            for(var key of this.shoplist){
                                if(key.pid==pid){
                                    key.count=subcha[0].count
                                    key.total=subcha[0].total
                                }
                            }
                        }
                })
            })
        },
        del(e){ //删除购物车商品
           var pid=e.target.dataset.id
           this.$confirm("确定删除该商品?").then(()=>{
                this.axios.get('del?pid='+pid).then(res=>{
                    if(res.data.code==1){
                        this.$message({
                            type:'success',
                            message:'删除成功'
                        })
                        this.axios.get('cart?uid='+this.$store.getters.getUid).then(res=>{
                                if(res.data.code==1){
                                    this.shopproducts=1
                                    this.shoplist=res.data.data 
                                }else{
                                    this.shopproducts=0
                                    this.shoplist=[]
                                }
                        })
                    }
                })
           }).catch(()=>{
               this.$message({
                type: 'info',
                message: '已取消删除'
                })
           })
        }
    },
    computed:{
        alltotal(){
            var alltotal=0
            for(var key of this.shoplist){
                if(key.chosed==true){
                    alltotal+=key.total
                }    
            }
            return alltotal.toFixed(2)   
        },
        
        
    },
    components:{
        mtFooter
    }
}
</script>
<style scoped>
/*页面顶部*/
    a{
        color:#777;
    }
    a:hover{
        text-decoration:none;
    }
    .head{
        height:100px;
        background:#fff; 
        border-bottom:2px solid #ff7600;
    }
    .head>div{
        width:1300px;
        height:100px;
        margin:auto;
        display:flex;
        justify-content:flex-start;
        align-items:center;
        position:relative;    
    }
    .head img{
        width:60px;
        height:60px;
       
    }
    .head>div>span:nth-child(2){
        font-size:30px;
        color:#333;
        margin:0 20px 0 50px;
    }
     .head>div>span:nth-child(3){
        font-size:12px;
        color:#888;
        margin:15px 0 0 0;
    }
     .head>div>span:nth-child(4){
        position:absolute;
        font-size:13px;
        right:0;
        color:#aaa
    }
    .head>div>span:nth-child(4)>span{
        padding:5px;
    }
/*购物车商品*/
    .products{
        width:1300px;
        margin:50px auto;
        text-align:center;
    }
    .products_title{
        height:60px;
        line-height:60px;
        display:flex;
        background:#fff;
        
    }
    .products_detials{
         background:#fff;
        display:flex;
        height:130px;
        line-height:130px;
        border-top:1px solid #aaa;
    }
    .products_total{
        display:flex;
        margin-top:20px;
        background:#fff;
        height:45px;
        line-height:45px;
        font-size:13px;
        color:#888;
    }
/*购物车布局 */
    /**空的时候 */
    .kong{
        width:1300px;margin:auto;
        text-align:center;
        height:300px;
        margin-top:200px;
    }
    .kong>p{
        font-size:40px;
        font-weight:900;
    }
    .kong a{
        display:inline-block;
        width:180px;height:50px;
        background:#ff7600;
        font-size:20px;
        line-height:50px;
        color:#fff;
        margin:10px 0 0 10px;
    }
    /**有商品的时候 */
    .products_title>span:first-child,
    .products_title>img:nth-child(2),.products_title>span:nth-child(4),.products_title>span:nth-child(6),.products_title>span:nth-child(7),.products_detials>span:first-child,.products_detials>img,.products_detials>span:nth-child(4),.products_detials>span:nth-child(6),.products_detials>span:nth-child(7){
        width:10%;
    }
    .products_title>span:nth-child(3),.products_detials>a:nth-child(3){
        width:30%;
        text-align:left;
        padding-left:15px;
    }
    .products_title>span:nth-child(5),.products_detials>span:nth-child(5){
        width:20%
    }
    .products_total>a:first-child{
        width:10%;  
    }
    .products_total>a:first-child:hover{
        color:#ff7655; transition:all 0.2s;
    }
    .products_total>span:nth-child(2){
        width:20%;
        text-align:left;
        padding-left:20px;
    }
    .products_total>span:nth-child(3){
        width:35%;
    }
    .products_total>span:nth-child(4){
        width:20%;
        color:#ff7600;
    }
    .products_total>span:nth-child(5){
        width:15%;
        position:relative;
        background:#ccc;
        font-size:20px;
    }
    .tocol{
        background:#ff7600 !important;
        color:#fff;
    }
/**购物车修饰 */
    /**商品部分 */
    .products_detials>span:nth-child(5){
        border:1px solid #ccc;
        height:40px;
        line-height:40px;
        width:180px;
        margin:auto;
    }
    .products_detials>img:nth-child(2){
        padding:0 20px 0 0;height:100px;
        margin-top:15px;
    }
    .products_detials>span:nth-child(5)>span:first-child{
        float:left;
        height:40px;width:40px;
        font-size:30px;color:#777;
    }
    .products_detials>span:nth-child(5)>span:first-child:hover,.products_detials>span:nth-child(5)>span:last-child:hover{
        background:#ccc;transition:0.2s
    }
    .products_detials>span:nth-child(5)>span:last-child{
        float:right;
        height:40px;width:40px;
        font-size:30px;color:#777;
    }
    .products_detials>span:nth-child(7){
        color:#888;
        font-size:20px;
        width:30px;height:30px;
        line-height:30px;
        margin:auto;
        border-radius:50%;
    }
    .products_detials>span:nth-child(7):hover{
        background:red;
        color:#fff;
    }
    /**底部结算部分 */
    .products_total>span:nth-child(5)>div>span:first-child{
        position:absolute;
        border:1px solid #ff7600;
        width:195px;
        top:-64px;left:0px;
        background:#fff;
        color:#ff7600;
        font-size:13px;
    }
    .products_total>span:nth-child(5)>div>span:last-child{
        position:absolute;
        border:1px solid #ff7600;
        width:15px;height:15px;
        transform:rotate(45deg);
        top:-25px;left:85px;
        z-index:2;
        background:#fff;
        border-left:none;
        border-top:none;
    }
    .products_total>span:nth-child(4)>span{
        font-size:30px;
    }
    .products_total>span:nth-child(2)>span{
        color:#ff7600;
    }
/**推荐商品部分 */
    .recommend>div:first-child{
       width:1300px;
       margin:auto;
       height:50px;
       display:flex;
       justify-content:space-between;
    }
    .recommend>div:first-child>hr:first-child,.recommend>div:first-child>hr:nth-child(3){
        width:30%;
        margin:24px 0 0 0;
    }
    .recommend>div:first-child>div:nth-child(2){
        width:30%;
        text-align:center;
        line-height:50px;
        font-size:32px;
        color:#888
    }
   .recommend>div:nth-child(2){
       width:1300px;
       margin:30px auto 0;
       display:flex;
       flex-wrap:wrap;
   }
   .recommend>div:nth-child(2)>div{
       width:19%;
       background:#fff;
       margin:0 16px 16px 0;
       text-align:center;
       position:relative;
       padding:10px 20px;
   }
   .recommend>div:nth-child(2)>div>p:nth-child(2){
       width:60%;
       margin:10px auto;
       overflow:hidden;
       text-overflow:ellipsis;
       white-space:nowrap
   }
   .recommend>div:nth-child(2)>div>p:nth-child(3){
       color:#ff7600;
       margin-bottom:10px;
   }
   .recommend>div:nth-child(2)>div>div>span:nth-child(1){
       position:absolute;
       bottom:5px;left:36%;
       font-size:13px;
       color:#aaa;
   }
   .recommend>div:nth-child(2)>div>div{
       width:120px;height:30px;
   }
   .recommend>div:nth-child(2)>div>div>span:nth-child(2){
       position:absolute;
       bottom:5px;left:27%;
       width:120px;height:30px;
       line-height:30px;
       color:#ff7600;
       border:1px solid #ff7600;
       background:#fff;
       display:none;
   }
   .recommend>div:nth-child(2)>div:hover div>span:nth-child(2){
       display:block;
   }
   .recommend>div:nth-child(2)>div:nth-child(5),.recommend>div:nth-child(2)>div:nth-child(10){
       margin:0 0 16px 0 ;
   }
</style>