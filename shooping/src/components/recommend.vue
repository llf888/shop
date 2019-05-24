<template>
    <div>
    <!-- 顶部 -->
        <div class="ride-head">
            <span>为你推荐</span>
            <div class="ride-head-right">
                <span class="mui-icon-extra mui-icon-extra-arrowleftcricle" @click="leftMove" :style="disabled_left"></span>
                <span class="mui-icon-extra mui-icon-extra-arrowrightcricle" @click="rightMove" :style="disabled_right"></span>
            </div>
        </div>  
        <div class="ride-content">
            <div class="ride-out" :style="mag_left">
                <ul v-for="list of lists">
                    <li v-for="elem of list">
                        <img :src="elem.url" alt="">
                        <div class="ride-inner">
                            <p v-text="elem.title"></p>
                            <p v-text="elem.pirce"></p>
                            <p v-text="elem.count"></p> 
                        </div>
                    </li>
                </ul>
            </div>
        </div>
        <div class="hot">
            <span>热评产品</span>
        </div>
        <div class="buzz">
            <div class="buzz-u" v-for="product of products">
                <ul>
                    <li v-for="elem of product">
                        <a href="javascript:;">
                            <img :src="elem.url" alt="">
                        </a>
                        <p v-text="elem.content"></p>
                        <div class="totle">
                            <p v-text="elem.from"></p>
                            <a href="javascript:;">
                                <span v-text="elem.name"></span>
                            </a>
                            <span v-text="elem.ge"></span>
                            <span v-text="elem.price"></span>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            mag_left:"margin-left:0px",
            moved:[0],
            disabled_left:"color:#ddd",
            disabled_right:"",
            lists:[
                [
                {url:"/img/child/baowenb.jpg",title:"创意儿童水杯",pirce:"352元",count:"56人评价过"},
                {url:"/img/child/shubao2.jpg",title:"山竹蓝牙音箱",pirce:"599元",count:"5896人评价过"},
                {url:"/img/da pei/pms_1535440524.10478102.jpg",title:"山竹无线速充充电器/15W ion",pirce:"367元",count:"1.56万人评价过"},
                {url:"/img/pms_1537324004.08544830!220x220.jpg",title:"山竹指纹手机 青春版",pirce:"599",count:"5896人评价过"},
                {url:"/img/shouhuanNFC.jpg",title:"山竹手环/蓝牙无线连接",pirce:"199元",count:"96人评价过"},
                ],
                [
                {url:"/img/outdool/scooter-80.jpg",title:"智能平衡车2S 大容量/超长使用时间",pirce:"1599元",count:"1.2万人评价过"},
                {url:"/img/move/T1RZdvBKWT1RXrhCrK!140x140.jpg",title:"USB外接百兆网卡",pirce:"59元",count:"1.1万人评价过"},
                {url:"/img/move/pms_1527685277.65255600!140x140.jpg",title:"山竹8 SE 全网通版 6GB内存+8GB",pirce:"1599元",count:"3.2万人评价过"},
                {url:"/img/move/pms_1481188619.07736357!140x140.jpg",title:"山竹WiFi放大器 2",pirce:"99",count:"4.4万人评价过"},
                {url:"/img/move/pms_1524207827.68245447!140x140.jpg",title:"山竹插线板(5位国际标准组合插孔)",pirce:"59元",count:"6578人评价过"},
                ],
                [
                {url:"/img/move/pms_1532602717.69984609!140x140.jpg",title:"大山人家空气净化器",pirce:"599元",count:"96人评价过"},
                {url:"/img/move/pms_1535426041.06047092!140x140.jpg",title:"山竹平板4 Plus 智能翻盖支架",pirce:"99元",count:"1896人评价过"},
                {url:"/img/move/pms_1527501279.08338583!140x140.jpg",title:"净化器PP棉滤芯两年套装",pirce:"162元",count:"."},
                {url:"/img/move/pms_1509330056.27762473!140x140.jpg",title:"8H多功能青春床垫",pirce:"599元",count:"896人评价过"},
                {url:"/img/move/pms_1522309592.89679012!140x140.jpg",title:"灰兔足金吊坠",pirce:"2549元",count:"1.2万人评价过"},
                ],
                [
                {url:"/img/move/pms_1529842987.88097905!140x140.jpg",title:"山竹平板4 8英寸LTE版",pirce:"1599元",count:"7896人评价过"},
                {url:"/img/move/pms_1545286134.4027257!140x140.jpg",title:"大山人家投影仪 青春版",pirce:"2599元",count:"596人评价过"},
                {url:"/img/move/pms_1527228870.43825131!140x140.jpg",title:"灰兔卡片学习机",pirce:"299元",count:"2.3万人评价过"},
                {url:"/img/move/pms_1470896116.76978423!140x140.jpg",title:"60cm柔软灰兔抱枕",pirce:"109元",count:"5596人评价过"},
                {url:"/img/move/pms_1494830681.30266694!140x140.jpg",title:"山竹蓝牙音箱",pirce:"299元",count:"5.2万人评价过"},
                ],
               
            ],
            products:[
                [
                {url:"img/re ping/032d0ff1-f77f-4830-a469-f3564d55e0c5.jpg",content:"非常可爱,一拿到小宝宝还没享受,一帮大宝宝先high了一把,同事也想买,希望早点大卖",from:"来自于秘密的评价",name:"灰兔智能故事机",ge:"|",price:"199元"},
                {url:"img/re ping/97d80b35-152e-4934-af34-402251458e16.jpg",content:"非常好用,孩子使用防止沉迷于电话影响学习。做工很好,定位基本准确,通话有时候不太清楚,不过大部分时间还是很好用的,如果加入时间显示就跟完美了！",from:"来自于秘密的评价",name:"灰兔定位电话",ge:"|",price:"350元"}
                ],
                [
                 {url:"img/re ping/aa6b038a-2946-4549-acff-17c58e701556.jpg",content:"东西真心不错，用过最好用的插线板，做工外观没得挑剔，3个USB接口很实用，充电快，建议不包邮的应该在一百元以内定位。",from:"来自于yingying1987的评价",name:"山竹插线板",ge:"|",price:"49元"},
                {url:"img/re ping/bae79ac6-60d5-478d-90e7-ff1222764bd1.jpg",content:"超级喜欢！小巧玲珑！音质完美！不知道为什么！只要是山竹出的东西我都喜欢！那倒是因为那一句？？山竹为发骚而生？？",from:"来自于秘密的评价",name:"灰兔随身蓝牙音箱",ge:"|",price:"69元"}
                ],
                [
                {url:"img/re ping/54e35fdd-bc68-4a89-bad7-c9c3bb2fc6fe.jpg",content:"包装很让人感动，式样也很可爱，做出的饭全家人都爱吃，超爱五星！手机控制还是不太熟练，最主要是没有连接成功吧，回头再细细研究一下哦，希望以后推出更多老百姓爱戴的产品",from:"来自于HZG的评价",name:"山竹压力电饭锅",ge:"|",price:"999元"},
                {url:"img/re ping/xmad_15094337975564_BSRIq.jpg",content:"外形简洁大方，大爱！全家人都在用的产品，真心不错，最主要的是性价比高。附图，给客服妹子一个大大的微笑！",from:"来自于酸小妞的评价",name:"山竹车载空气净化器",ge:"|",price:"499元"}
                ],
                [
                {url:"img/re ping/bae79ac6-60d5-478d-90e7-ff1222764bd1.jpg",content:"超级喜欢！小巧玲珑！音质完美！不知道为什么！只要是山竹出的东西我都喜欢！那倒是因为那一句？？山竹为发骚而生？？",from:"来自于秘密的评价",name:"灰兔随身蓝牙音箱",ge:"|",price:"69元"},
                {url:"img/re ping/aa6b038a-2946-4549-acff-17c58e701556.jpg",content:"东西真心不错，用过最好用的插线板，做工外观没得挑剔，3个USB接口很实用，充电快，建议不包邮的应该在一百元以内定位。",from:"来自于yingying1987的评价",name:"山竹插线板",ge:"|",price:"49元"}
                ],
            ]
        }
    },
    methods:{
        rightMove(){ 
            if(this.moved[0]<3){
                this.moved[0]++
                this.mag_left="margin-left:-"+`${1300*this.moved[0]}`+"px;"
            }
            if(this.moved[0]==3){
                this.disabled_right="color:#ddd";
            }
            if(this.moved[0]!=0){
                this.disabled_left=""
            }
        },
        leftMove(){
            if(this.moved[0]>0){
                this.moved[0]--
                this.mag_left="margin-left:-"+`${1300*this.moved[0]}`+"px;"
            }
            if(this.moved[0]!=3){
                this.disabled_right="";
            }
            if(this.moved[0]==0){
                this.disabled_left="color:#ddd";
            }
        },
    },
}
</script>
<style scoped>
    .ride-head{
        width:1300px;
        height:30px;
        margin:20px auto;
        display:flex;
        justify-content:space-between;
    }
    .ride-head>span{
        font-size:27px;
    }
    .ride-head-right span{
        display:inline-block;
        width:40px;height:30px;
        text-align:center;
        line-height:30px;
        font-size:30px;
        color:#aaa;
    }
    .ride-head-right span:hover{
        color:#ff7600;
    }
/*内容 */
    .ride-content{
        width:1300px;
        margin:auto;
        overflow:hidden
    }
    .ride-content:after{
        display:block;
        content:"";
        clear:both;
    }
    .ride-out{
        width:5230px; 
        transition:all 0.5s linear;
    }
    .ride-content ul{
        float:left;
        width:1300px;
        margin:0;
        padding:5px 0px;
        list-style:none;
        display:flex;
        justify-content:space-between;   
    }
    .ride-content ul img{
        width:140px;height:140px;
    }
    .ride-content ul li{
        width:245px;
        height:300px;
        background:#fff;
        display:flex;
        justify-content:space-around;
        flex-direction:column;
        align-items:center;
        padding:5px 10px;
        transform-style:preserve-3d;
        transition:all 0.2s linear;
    }
    .ride-content ul li:hover{
        box-shadow:2px 2px 5px 2px #ccc;
        transform:rotateX(10deg);
        transform-origin:(top,center)
    }
    .ride-inner{
        text-align:center;
    }
    .ride-inner p{
        margin:0;
    }
    .ride-inner p:first-child{
        color:#000;
        font-size:15px;
        overflow:hidden;
        text-overflow:ellipsis;
        width:150px;
        white-space:nowrap;
    }
    .ride-inner p:nth-child(2){
        margin:10px 0;
        color:#ff7600;
    }
/*热评产品 */
    .buzz{
        width:1300px;
        margin:auto;
        display:flex;
        justify-content:space-between;
    }
    .buzz ul{
        list-style:none;
        padding:0;
        width:310px;
        height:420px;
        position:relative;
        transform-style:preserve-3d;
        transition:all 0.5s linear;
    }
    .buzz ul li{
        position:absolute;
        top:0;left:0;
        backface-visibility: hidden;    
    }
    .buzz ul li:first-child{
        transform:rotateY(180deg);
    
    }
    .buzz-u:hover ul{
        transform:rotateY(180deg);
        box-shadow:-4px -3px 5px 2px #ccc;
    }
    .buzz ul img{
        width:310px;
    }
    .hot{
        width:1300px;
        margin:30px auto;
        height:50px;
        display:flex;
        line-height:50px;
        justify-content:flex-start;
        font-size:27px; 
    }
    .buzz a{
        text-decoration:none;
        color:#000;
    }
    .buzz ul li>p{
        width:255px;
        margin:25px auto;
        color:#000;
        text-overflow:ellipsis;
        overflow:hidden;
        display: -webkit-box;
        -webkit-line-clamp: 3;
        -webkit-box-orient: vertical;
        font-size:14px;
    }
    .totle{
        width:260px;
        
        margin:25px auto;
    }
    .totle>p{
        font-size:12px;
    }
    .totle>a>span{
    font-size:15px
    }
    .totle>span:nth-child(3){
        margin:-2px 5px 0 5px;
        color:#bbb;
    }
    .totle>span:nth-child(4){
        font-size:15px;
        color:#ff7600;
    }
</style>