<template>
    <div class="product-app">
        <div class="product-hd">
            <span>手机</span>
            <a href="javascript:;">
                <span>查看全部</span>
                <span class="mui-icon-extra mui-icon-extra-arrowrightcricle"></span>
            </a>
        </div>
       
        <div class="list">
         <!-- 列表左 -->
            <div class="list-left">
                <img :src="img" alt="">
            </div>
        <!-- 列表右 -->
            <div class="list-right">
                <a href="javascript:;" class="list-list" v-for="list of lists">
                    <p class="list-tit">{{list[0]}}</p>
                    <img :src="list[1]" alt="">
                    <p class="shn">{{list[2]}}</p>
                    <span class="hid-out">
                    <a href="javascript:;" class="hid">{{list[3]}}</a></span>
                    <p>{{list[4]}}</p>
                </a>
            </div>
        </div>
        <div class="boot">
            <a href="javascript:;">
                <img :src="imgb" alt="">
            </a>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            img:"img/shou ji/xmad_15523945788008_wGKWT.png",
            lists:[
                ["新品","img/shou ji/pms_1528719461.20891365!220x220.jpg","山竹4S 6GB+128GB","骁龙855,索尼4600万超广角三摄","2999元"],
                ["新品","img/shou ji/pms_1524621350.77238418!220x220.jpg","山竹4A SM 6GB+64GB","索尼4800万超广角三摄,骁龙712","1999元"],
                ["新品","img/shou ji/pms_1527685277.65255600!220x220.jpg","Flash Note 5GB+32GB","4800万像素,72小时超长待机","1998元"],
                ["新品","img/shou ji/pms_1545457719.47232999!220x220.png","山竹Play 8GB+256GB","5.84\"小水滴全面屏 后置2000万像素 全新指纹解锁","1299元"],
                ["减200元","img/shou ji/pms_1547020852.30751177!220x220.jpg","山竹8P青春版6GB+64Gb","潮流镜面渐变 5000万前后边角双摄","5999元","5799元"],
                ["享8折","img/shou ji/pms_1550646283.24414368!220x220.jpg","山竹6 Note 6GB+8GB","苹果X全面屏,骁龙855","1299元"],
                ["享7.5折","img/shou ji/pms_1550642182.7527088!220x220.jpg","小山竹1S 64GB","轻薄美观,有内涵","1299元"],
                ["减300","img/shou ji/pms_1537324004.08544830!220x220.jpg","紫竹1A 2GB+4GB","10mm超薄机身,时尚女性的新宠","999元"],
            ],
            imgb:"img/shou ji/xmad_15547051703933_BFwLx.png",
        }
    }
}
</script>
<style scoped>
    .product-app{
        background-color:#f5f5f5;
        width:100%;
        padding-top:10px;
    }
    .product-hd{
        width:1300px;
        height:50px;
        line-height:50px;
        margin:10px auto;
        display:flex;
        font-size:23px;
        justify-content:space-between;
    }
    .product-hd a{
        color:#000;
    }
    .product-hd a span:first-child{
        float:left;
        margin-top:2px;
        font-size:15px;
    }
    .mui-icon-extra-arrowrightcricle{
        vertical-align:middle;
    }
    .product-hd a:hover{
        color:#ff7600;
        text-decoration:none;
    }
/*列表左 */
    .list{
        width:1300px;
        height:614px;
        margin:auto;
    }
    .list-left{
        float:left;
        width:234px;
        height:100%;
        transition:all 0.5s;
    }
    .list-left:hover{
        transform:translate(0px,-2px);
        box-shadow:#eee 3px 5px 5px 3px;
    }
    .list-left img{
        width:100%;
    }
/*列表右 */
    .list-right{
        width:1066px;
        height:614px;
        display:flex;
        flex-wrap:wrap;
        justify-content:space-between;
    }
    .list-list{
        background:#fff;
        margin:0 0 12px 10px;
        width:255px;
        height:301px;
        position:relative;
        text-align:center;
        transition:all 0.05s;
    }
    /* a*/
    .hid-out{
    width:215px;   
    }
    .hid{
        margin:auto;
        display:block;
        width:215px;
        overflow:hidden;
        text-overflow:ellipsis;
        white-space:nowrap;
        font-size:12px;
        flex: 1;
        color:#aaa;  
    }
    .hid:hover,.list-list:hover{
        text-decoration:none;  
    }
    .list-tit{
        position:absolute;
        top:0;left:103px;
        background:cyan;
        width:60px;
        color:#555;
        text-align:center;
        font-size:10px;
    }
    .list-list:nth-child(5) .list-tit,.list-list:nth-child(6) .list-tit,.list-list:nth-child(7) .list-tit,.list-list:nth-child(8) .list-tit{
        background:red;
        color:white;
    }
    .list-list img{
        width:160px;
        height:160px;
        margin-top:25px;
        margin-bottom:15px;
    }
   .list-list p:last-child{
       margin-top:7px;
       color:#ff6700;
   }
   .shn{
       color:#000;
   }
   .list-list:hover{
       transform:translate(-2px,-2px);
       box-shadow:#ccc 3px 5px 5px 3px;
   }
   .boot{
       width:1300px;
       margin:40px auto;
       height:120px;
       
   }
   .boot img{
       width:100%;
       height:120px;
   }
</style>