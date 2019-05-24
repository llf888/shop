<template>
     <div class="ride-left">
        <a href="javascript:;" v-for="(elem,i) of lflist">{{elem.title}}<span class="mui-icon mui-icon-forward"></span>
            <div class="left-u">
                <ul class="" v-for="item of elem.items">
                    <li v-for="row of item">
                        <img :src="row.url" alt="">{{row.name}}
                    </li>
                </ul>
            </div>
        </a>      
    </div>
</template>

<script>

export default {
    data(){
        return{
        lflist:[
            {"title":"手机 电话卡","items":[
                [
                {"url":"img/shou ji/mi9-80 (1).png","name":"菌菌9"},
                {"url":"img/shou ji/mi9se-80.png","name":"菌菌9 SE"},
                {"url":"img/shou ji/mix3-80.png","name":"菌菌MIX 3"},
                {"url":"img/shou ji/qingchun-80.png","name":"菌菌8 青春版"},
                {"url":"img/shou ji/pingmu-80.png","name":"菌菌8 屏幕指纹版"},
                {"url":"img/shou ji/m8-80.png","name":"菌菌8"},
                ],
                 [
                {"url":"img/shou ji/m8se-80.png","name":"菌菌8 SE"},
                {"url":"img/shou ji/mix2s80-80white.png","name":"菌菌9MIX 2S"},
                {"url":"img/shou ji/max3-80-80.png","name":"菌菌Max 3"},
                {"url":"img/shou ji/80808080808080.jpg","name":"菌菌6X"},
                {"url":"img/shou ji/123.jpg","name":"菌菌黑鲨游戏手机2"},
                {"url":"img/shou ji/heishahelo-80.png","name":"黑鲨游戏手机 helo"},
                ],
                 [
                {"url":"img/shou ji/PC_80-80.jpg","name":"Flesh 7"},
                {"url":"img/shou ji/redminote7pro.jpg","name":"Flesh Note 7 Pro"},
                {"url":"img/shou ji/note780-80.png","name":"Flesh Note 7"},
                {"url":"img/shou ji/666666.png","name":"山竹6"},
                {"url":"img/shou ji/6AAAA.png","name":"山竹6A"},
                {"url":"img/shou ji/note5-80-80.png","name":"山竹Note 5"},
                ],
                 [
                {"url":"img/shou ji/80.jpg","name":"移动4G+专区"},
                {"url":"img/shou ji/compare.jpg","name":"对比手机"},
                {"url":"img/shou ji/mifenka-1.jpg","name":"孢子粒 日租卡"},
                {"url":"img/shou ji/mimobile.jpg","name":"菌菌移动 电话卡"},
                {"url":"img/shou ji/weixiu80-80.png","name":"手机上面维修"},
                {"url":"img/shou ji/yunfuwu.jpg","name":"云服务空间月卡"},
                ], ], },
            {"title":"电视 盒子","items":[
                [
                {"url":"img/tv/mijiajiguang4k.jpg","name":"菌菌电视4A 43英寸青春版"},
                {"url":"img/tv/TV4A-32.png","name":"菌菌电视4A 32英寸"},
                {"url":"img/tv/TV4A-43QC.png","name":"菌菌电视4A 50英寸"},
                {"url":"img/tv/TV4A-50.png","name":"菌菌电视4A 55英寸"},
                {"url":"img/tv/55120120.png","name":"山竹激光投影电视"},
                {"url":"img/tv/TV4A-58-x.png","name":"菌菌电视4A 58英寸"},
                ],
                 [
                {"url":"img/tv/65120_120.png","name":"菌菌电视4A 65英寸"},
                {"url":"img/tv/TV4C-32.png","name":"菌菌电视4C 32英寸"},
                {"url":"img/tv/4c-40.jpg","name":"菌菌电视4C 40英寸"},
                {"url":"img/tv/TV4C-43.png","name":"菌菌电视4C 43英寸"},
                {"url":"img/tv/TV4C-50.png","name":"菌菌电视4C 50英寸"},
                {"url":"img/tv/TV4X-43xin.png","name":"菌菌电视4X 43英寸"},
                ],
                 [
                {"url":"img/tv/TV4X-55.png","name":"菌菌电视4X 55英寸"},
                {"url":"img/tv/TVTYB.png","name":"菌菌电视 体育版"},
                {"url":"img/tv/TV4-55.png","name":"菌菌电视4 55英寸"},
                {"url":"img/tv/65yiti.jpg","name":"菌菌电视4 65英寸旗舰版"},
                {"url":"img/tv/TV4S-32.png","name":"菌菌电视4S 32英寸"},
                {"url":"img/tv/TV4S-50.png","name":"菌菌电视4S 50英寸"},
                ],
                 [
                {"url":"img/tv/TV4s-55xin.jpg","name":"菌菌电视4S 55英寸"},
                {"url":"img/tv/TV4S-55Q.png","name":"菌菌电视4S 55英寸曲面"},
                {"url":"img/tv/TV4S-65.png","name":"菌菌电视4S 65英寸"},
                {"url":"img/tv/TV4S-65PRO.png","name":"菌菌电视4S 65英寸PRO"},
                {"url":"img/tv/4s75xin.jpg","name":"菌菌电视4S 75英寸"},
                {"url":"img/tv/hezibai480_80.jpg","name":"菌菌盒子"},
                ],],},
            
       
            {"title":"笔记本 平板","items":[   
                 [
                {"url":"img/jia dian/xmad_15350951136177_QUuVm.png","name":"菌菌笔记本 15.6\""},
                {"url":"img/jia dian/pms_1525231579.56571137!220x220.jpg","name":"菌菌笔记本 13.3\""},
                {"url":"img/jia dian/bijiben80.jpg","name":"菌菌笔记本 12.5\""},
                {"url":"img/jia dian/pms_1533196142.85059414!220x220.png","name":"菌菌游戏本"},
                {"url":"img/jia dian/pingban2.jpg","name":"菌菌平板4"},
                {"url":"img/jia dian/yuemijianpan80.jpg","name":"键盘"},
                ],
                 [
                {"url":"img/jia dian/pms_1490595812.95661863!220x220.png","name":"鼠标/鼠标垫"},
                {"url":"img/jia dian/pms_1469523170.25518983!220x220.jpg","name":"转接头"},
                {"url":"img/jia dian/xiaomipingbanpeijian80.jpg","name":"平板配件"},
                {"url":"img/jia dian/bijibenshuangjianbao80.jpg","name":"笔记本双肩包"},
                {"url":"img/jia dian/neidanbao80.jpg","name":"菌菌笔记本内胆包"},
                ],],},
            {"title":"家电 插线板","items":[
                [
                {"url":"img/jia dian/kongtiaoguan140.png","name":"山竹互联网空调"},
                {"url":"img/jia dian/kongtiaoguan140.png","name":"山竹互联网空调C1"},
                {"url":"img/jia dian/mijiakongtiao.jpg","name":"山竹空调"},
                {"url":"img/jia dian/xiyiji.jpg","name":"山竹互联网洗烘一体机"},
                {"url":"img/jia dian/redmibolunxiyiji.jpg","name":"Flesh全自动波轮洗衣机"},
                {"url":"img/jia dian/jingshuiqi80haha.jpg","name":"净水器"},
                ],
                 [
                {"url":"img/jia dian/lvxinbashi.png","name":"净水器滤芯"},
                {"url":"img/jia dian/saodi.jpg","name":"扫地机器人"},
                {"url":"img/jia dian/saodipeijian-80.jpg","name":"扫地机配件"},
                {"url":"img/jia dian/jinghuaqi2S-80.jpg","name":"空气净化器"},
                {"url":"img/jia dian/yalidianfanbao-80.jpg","name":"电饭煲"},
                {"url":"img/jia dian/diancilu-80.jpg","name":"电磁炉"},
                ],
                 [
                {"url":"img/jia dian/tangguo-80.jpg","name":"厨房用具"},
                {"url":"img/jia dian/dianshuihu-80.jpg","name":"电水壶"},
                {"url":"img/jia dian/lvshuihu80.jpg","name":"滤水壶"},
                {"url":"img/jia dian/mijiadianfengshan80.png","name":"落地风扇"},
                {"url":"img/jia dian/touyingqingchun.png","name":"投影仪"},
                {"url":"img/jia dian/xidingdeng-80.jpg","name":"灯具"},
                ],
                 [
                {"url":"img/jia dian/chaxianban80.jpg","name":"插线板"},
                {"url":"img/jia dian/xinfengji.jpg","name":"新风机"},
                {"url":"img/jia dian/diannuanqi.jpg","name":"电暖器"},
                {"url":"img/jia dian/yalidianfan.jpg","name":"电压力锅"},
                {"url":"img/jia dian/liaoli.jpg","name":"料理机"},
                {"url":"img/jia dian/dianzhuhu.jpg","name":"电煮壶"},
                ],],},
            
            {"title":"出行 穿戴","items":[
                [
                {"url":"img/outdool/shouhuan3.jpg","name":"手环手表"},
                {"url":"img/outdool/VRyitiji80.jpg","name":"VR"},
                {"url":"img/outdool/scooter-80.jpg","name":"平衡车"},
                {"url":"img/outdool/scooter2-80.jpg","name":"滑板车"},
                {"url":"img/outdool/chezainibianqi80.jpg","name":"车载逆变器"},
                {"url":"img/outdool/peijian80.jpg","name":"平衡车配件"},
                ],
                 [
                {"url":"img/outdool/mirror-80.jpg","name":"智能后视镜"},
                {"url":"img/outdool/jiluyi.jpg","name":"智能记录仪"},
                {"url":"img/outdool/chezaikongjing.jpg","name":"车载空气净化器"},
                {"url":"img/outdool/chechong.jpg","name":"无线车充"},
                {"url":"img/outdool/chongqi.jpg","name":"充气宝"},
                ],],},
            {"title":"智能 路由器","items":[
                [
                {"url":"img/zhi neng/zhaopiandayinj.jpg","name":"路由器"},
                {"url":"img/zhi neng/luyouqi4_80.jpg","name":"打印机"},
                {"url":"img/zhi neng/duijiangji.jpg","name":"对讲机"},
                {"url":"img/zhi neng/zhinengjiating80.jpg","name":"智能家庭"},
                {"url":"img/zhi neng/wurenji80.jpg","name":"无人机"},
                {"url":"img/zhi neng/camera-head-80.jpg","name":"摄像头"},
                ],
                 [
                {"url":"img/zhi neng/camera-small-80.jpg","name":"照相机"},
                {"url":"img/zhi neng/mensuo.jpg","name":"智能门锁"},
                ],],},
        
            {"title":"电源 配件","items":[
                [
                {"url":"img/pei jian/dianyuan2.100080.jpg","name":"移动电源"},
                {"url":"img/pei jian/shujuxian-80.jpg","name":"数据线"},
                {"url":"img/pei jian/chezaichongdianqi80.jpg","name":"车充"},
                {"url":"img/pei jian/chongdianqi-80.jpg","name":"充电器"},
                {"url":"img/pei jian/wuxianchong80.jpg","name":"无线充"},
                {"url":"img/pei jian/7Battery1.jpg","name":"电池"},
                ],
                 [
                {"url":"img/pei jian/zipaigan80.jpg","name":"自拍杆"},
                {"url":"img/pei jian/baohu.jpg","name":"手机壳"},
                {"url":"img/pei jian/tiemo.jpg","name":"手机贴膜"},
                {"url":"img/pei jian/shoujizhijia80.jpg","name":"手机支架"},
                {"url":"img/pei jian/pingban80.jpg","name":"平板配件"},
                {"url":"img/pei jian/heishashoubing80.jpg","name":"黑鲨配件"},
                ],
                 [
                {"url":"img/pei jian/qitapeijian80.jpg","name":"其他配件"},
                ],],},
            
            {"title":"健康 儿童","items":[
                [
                {"url":"img/child/xishouji.jpg","name":"洗手机"},
                {"url":"img/child/tixvdao80.jpg","name":"剃须刀"},
                {"url":"img/child/riguang.jpg","name":"日光镜"},
                {"url":"img/child/yashua80.jpg","name":"牙刷"},
                {"url":"img/child/chuifengji.jpg","name":"吹风机"},
                {"url":"img/child/scale.jpg","name":"体重秤"},
                ],
                 [
                {"url":"img/child/xueyaji80.jpg","name":"血压计"},
                {"url":"img/child/tiwenji80.jpg","name":"体温计"},
                {"url":"img/child/mitugushi-80.jpg","name":"早教启智"},
                {"url":"img/child/XIAOFEIJIBASHI.jpg","name":"遥控电动"},
                {"url":"img/child/toyblock2-80.jpg","name":"益智积木"},
                {"url":"img/child/shoubiao280.jpg","name":"儿童手表"},
                ],
                 [
                {"url":"img/child/huabanche80.jpg","name":"儿童滑板车"},
                {"url":"img/child/laganxiang.jpg","name":"米兔拉杆箱"},
                {"url":"img/child/tuiche.jpg","name":"婴儿推车"},
                {"url":"img/child/shubao2.jpg","name":"儿童书包"},
                {"url":"img/child/lifa.jpg","name":"婴儿理发器"},
                {"url":"img/child/baowenb.jpg","name":"儿童保温杯"},
                ],],},
    
            {"title":"耳机 音箱","items":[
                [
                {"url":"img/pei jian/xiaoaimini-08.jpg","name":"菌菌蘑菇音箱mini"},
                {"url":"img/pei jian/erji80.jpg","name":"线控耳机"},
                {"url":"img/pei jian/airdots.jpg","name":"蓝牙耳机"},
                {"url":"img/pei jian/toudai80.jpg","name":"头戴耳机"},
                {"url":"img/pei jian/pinpai80.jpg","name":"品牌耳机"},
                {"url":"img/pei jian/800-800-3.jpg","name":"蓝牙音箱"},
                ],
                 [
                {"url":"img/pei jian/xiaoai.jpg","name":"菌菌AI音箱"},
                {"url":"img/pei jian/xiaoaiyinxhd.jpg","name":"菌菌蘑菇音箱HD"},
                {"url":"img/pei jian/kgeerji.jpg","name":"K歌耳机"},
                ],],},
            
            {"title":"生活 箱包","items":[
                [
                {"url":"img/xiang bao/xiangbao-80.jpg","name":"双肩包"},
                {"url":"img/xiang bao/qianbao-80.jpg","name":"钱包"},
                {"url":"img/xiang bao/lvxingxiang.jpg","name":"旅行箱"},
                {"url":"img/xiang bao/shenhuahui80.jpg","name":"运动鞋"},
                {"url":"img/xiang bao/txv80.jpg","name":"服饰"},
                {"url":"img/xiang bao/tyj80.jpg","name":"眼镜"},
                ],
                 [
                {"url":"img/xiang bao/chuangdian-80-80.jpg","name":"床垫"},
                {"url":"img/xiang bao/zhent.ou80.png","name":"枕头"},
                {"url":"img/xiang bao/shafa.80.png","name":"沙发"},
                {"url":"img/xiang bao/jinmitu.jpg","name":"饰品"},
                {"url":"img/xiang bao/luosidao-80.jpg","name":"螺丝刀"},
                {"url":"img/xiang bao/bbbbei.jpg","name":"保温杯"},
                ],
                 [
                {"url":"img/xiang bao/umbrella.jpg","name":"伞"},
                {"url":"img/xiang bao/quwenqi.jpg","name":"驱蚊器"},
                {"url":"img/xiang bao/ukelele.jpg","name":"尤克里里"},
                {"url":"img/xiang bao/maojinmaojin.jpg","name":"毛巾/浴巾"},
                {"url":"img/xiang bao/mitu-80.jpg","name":"米兔"},
                {"url":"img/xiang bao/qianzibi-80.jpg","name":"签字笔"},
                ],],}
           ],    
        }  
    } 
}
</script>
<style scoped>
/* */
.ride-left{
        position:absolute;
        top:100px;left:0;
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
    .ride-left a span{
        display:inline-block;
        height:42px;
        line-height:42px;
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
 </style>
