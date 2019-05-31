<template>
    <div class="products-app">
        <div class="product" v-for="(list,a) of lists" :data-id="a" @mouseenter="fm">
            <!-- 上 -->
            <div class="head">
                <span v-text="lists[a].title"></span>
                <div>
                    <a  v-for="(elem,i) of list.list" :href="elem.href" v-text="list.list[i].name" :data-name="elem.name" @mouseenter="fn"></a>
                </div> 
            </div> 
        <!-- 主体 -->
            <div class="foot" >
                <!-- 左 -->
                <div class="left-list">
                    <a :href="pruct.href" v-for="pruct of lists[a].pructs">
                        <img :src="pruct.url" alt="">
                    </a>
                </div>
            </div>
             <!-- 右 -->
            <div class="right">
                <a :href="cla[0]" class="right-list" v-for="cla of lists[a].class">
                    <p v-text="cla[1]" :style=" cla[1]=='新品' ? colo1 : colo2"></p>
                    <img :src="cla[2]" alt="">
                    <p class="tra" v-text="cla[3]"></p>
                    <span v-text="cla[4]"></span>
                    <p v-text="cla[5]"></p>
                    <div class="hid">
                        <span v-text="cla[6]"></span>
                        <p v-text="cla[7]"></p>
                    </div>
                </a>
            </div>
            <div class="bottm">
                <a href="javascript:;">
                    <img :src="list.imgb" alt="">
                </a>
            </div> 
        </div>
       
    </div>
</template>
<script>
export default {
    data(){
        return{
            colo1:{        
                "background":"cyan"    
            },
            colo2:{
                "background":"#f00"
            },
            lists:[
            {"title":"家电",
                "imgb":"img/jia dian/xmad_15539285884923_daZYV.jpg",
                 "list":[
                    {"href":"javascript:;","name":"热门"},
                    {"href":"javascript:;","name":"电视"},
                    {"href":"javascript:;","name":"电脑"},
                    {"href":"javascript:;","name":"家具"}
                    ],
                "pructs":[
                        {"href":"javascript:;","url":"img/jia dian/xmad_15021710762698_QXnBu.jpg"},
                        {"href":"javascript:;","url":"img/jia dian/xmad_14967432043621_gmlxi.jpg"}
                    ],
                "class":[],
                "class0":[
                        ["javascript:;","新品","img/jia dian/diannuanqi.jpg","山竹全自动洗衣机20kg","省点,效率高,居家必备","1999元","洗衣机省水,外观好看,非常喜欢...","来自于123的评价"],
                        ["javascript:;","新品","img/jia dian/kongtiaoguan140.png","大自然变频空调","1.5匹/高效制冷/手机远程控制","2999元","洗衣机省水,外观好看,非常喜欢...","来自于123的评价"],
                        ["javascript:;","新品","img/jia dian/pms_1524636075.71677607!220x220.jpg","菌菌游戏本 56GB/i8","快速散热,让游戏更流畅","4299元","洗衣机省水,外观好看,非常喜欢...","来自于123的评价"],
                        ["javascript:;","新品","img/jia dian/pms_1524636075.71677607!220x220.jpg","菌菌游戏3代 256GB/i10","集散热,大屏,美观于一体","5299元","洗衣机省水,外观好看,非常喜欢...","来自于123的评价"],
                        ["javascript:;","新品","img/jia dian/jinghuaqi2S-80.jpg","山菌空气净化器","LED显示屏/大自然的感觉","1299元","洗衣机省水,外观好看,非常喜欢...","来自于123的评价"],
                        ["javascript:;","新品","img/jia dian/dianshuihu-80.jpg","山泉电水壶","一杯水,一辈子","299元","洗衣机省水,外观好看,非常喜欢...","来自于123的评价"],
                        ["javascript:;","新品","img/jia dian/pms_1490756071.3088664!220x220.png","太阳能日光灯","用光线,还原理想生活","699元","洗衣机省水,外观好看,非常喜欢...","来自于123的评价"],
                        ["javascript:;","","img/jia dian/pms_1521634907.16181074!220x220.jpg","山泉净水器","1999元"],
                        ["javascript:;","","img/jia dian/","浏览更多","热门"],
                    ],
                   "class1":[
                        ["javascript:;","新品","img/jia dian/pms_1539315570.63599432!220x220.jpg","山竹电视3X 43英寸","","1999元","洗衣机省水,外观好看,非常喜欢...","来自于123的评价"],
                        ["javascript:;","减300元","img/jia dian/pms_1510111588.69169839!220x220.jpg","山竹电视3 66英寸","4.9mm 超薄机身/2GB+8GB","2999元","洗衣机省水,外观好看,非常喜欢...","来自于123的评价"],
                        ["javascript:;","新品","img/jia dian/pms_1500287084.72131750!220x220.jpg","山竹电视4S 25英寸","64位四核处理器/1GB+4GB","4299元","洗衣机省水,外观好看,非常喜欢...","来自于123的评价"],
                        ["javascript:;","新品","img/jia dian/pms_1522318330.86967810!220x220.jpg","山竹电视4A 50英寸","4K/人工智能语音","1799元","洗衣机省水,外观好看,非常喜欢...","来自于123的评价"],
                        ["javascript:;","新品","img/jia dian/pms_1539855763.04646220!220x220.jpg","山竹电视5 58英寸","","1399元","洗衣机省水,外观好看,非常喜欢...","来自于123的评价"],
                        ["javascript:;","新品","img/jia dian/pms_1540366231.87578189!220x220.jpg","山竹电视4 65英寸全面屏","","4299元","洗衣机省水,外观好看,非常喜欢...","来自于123的评价"],
                        ["javascript:;","新品","img/jia dian/pms_1516975996.71444436!220x220.jpg","山竹盒子","","699元","洗衣机省水,外观好看,非常喜欢...","来自于123的评价"],
                        ["javascript:;","","img/jia dian/pms_1516976220.59976234!220x220.jpg","山竹盒子2代","1999元"],
                        ["javascript:;","","img/jia dian/","浏览更多","电视影音"],
                    ],
                   "class2":[
                        ["javascript:;","新品","img/jia dian/pms_1533266333.04566853!220x220.jpg","17.8 Pro i7 105MAX-W","","1999元","洗衣机省水,外观好看,非常喜欢...","来自于123的评价"],
                        ["javascript:;","新品","img/jia dian/pms_1525231579.56571137!220x220.jpg","13.3\"山竹笔记本四核/i4","1.5匹/高效制冷/手机远程控制","2999元","洗衣机省水,外观好看,非常喜欢...","来自于123的评价"],
                        ["javascript:;","新品","img/jia dian/pms_1533196142.85059414!220x220.png","山竹游戏本15.6/i8 16GB+46GB 散热超级快","","8299元","洗衣机省水,外观好看,非常喜欢...","来自于123的评价"],
                        ["javascript:;","新品","img/jia dian/pms_1524636075.71677607!220x220.jpg","山竹笔记本/15.8\" 四核/i8/256GB+568GB","集散热,大屏,美观于一体","5299元","洗衣机省水,外观好看,非常喜欢...","来自于123的评价"],
                        ["javascript:;","新品","img/jia dian/pms_1490595812.95661863!220x220.png","山竹无线鼠标","耐脏亲肤涂层,人体工学设计","199元","洗衣机省水,外观好看,非常喜欢...","来自于123的评价"],
                        ["javascript:;","新品","img/jia dian/pms_1478248566.62624407!220x220.jpg","山竹编辑鼠标","轻薄便捷,铝合金外壳+abs材质","299元","洗衣机省水,外观好看,非常喜欢...","来自于123的评价"],
                        ["javascript:;","新品","img/jia dian/pms_1490702347.3628109!220x220.png","菌体机械键盘","铝合金机身,TTC红轴,87键","699元","洗衣机省水,外观好看,非常喜欢...","来自于123的评价"],
                        ["javascript:;","","img/jia dian/pms_1469523170.25518983!220x220.jpg","多功能转接头","199元"],
                        ["javascript:;","","img/jia dian/","浏览更多","电脑"],
                    ],
                    "class3":[
                        ["javascript:;","减30元","img/jia dian/pms_1465366178.11466342!220x220.jpg","菌体恒温电水壶","水温智能控制,304不锈钢内胆","169元","洗衣机省水,外观好看,非常喜欢...","来自于123的评价"],
                        ["javascript:;","新品","img/jia dian/pms_1506417289.23728408!220x220.jpg","山竹随身手电筒","11档调光,随心而亮","2999元","洗衣机省水,外观好看,非常喜欢...","来自于123的评价"],
                        ["javascript:;","新品","img/jia dian/pms_1472609961.95298675!220x220.jpg","山竹扫地机器人","智能路径规划,骚的干净扫得快","4299元","洗衣机省水,外观好看,非常喜欢...","来自于123的评价"],
                        ["javascript:;","新品","img/jia dian/jinghuaqi2S-80.jpg","山竹空气净化器 2S","OLED 屏幕/激光颗粒传感器","599元","洗衣机省水,外观好看,非常喜欢...","来自于123的评价"],
                        ["javascript:;","新品","img/jia dian/yalidianfan.jpg","大山人家压力锅","","1299元","洗衣机省水,外观好看,非常喜欢...","来自于123的评价"],
                        ["javascript:;","新品","img/jia dian/pms_1496647119.81414190!220x220.jpg","飞利浦智睿灯泡","自由调节亮度","299元","洗衣机省水,外观好看,非常喜欢...","来自于123的评价"],
                        ["javascript:;","新品","img/jia dian/pms_1495520422.36514041!220x220.jpg","山竹LED,智能台灯","用光线,还原理想生活","699元","洗衣机省水,外观好看,非常喜欢...","来自于123的评价"],
                        ["javascript:;","","img/jia dian/pms_1490756071.3088664!220x220.png","Yeelight LED顶灯","1999元"],
                        ["javascript:;","","img/jia dian/","浏览更多","家居"],
                    ]
                    },
                         
                {"title":"智能",
                "imgb":"img/zhi neng/xmad_15517943282724_lhogK.jpg",
                 "list":[
                    {"href":"javascript:;","name":"热门"},
                    {"href":"javascript:;","name":"出行"},
                    {"href":"javascript:;","name":"健康"},
                    {"href":"javascript:;","name":"酷玩"},
                    {"href":"javascript:;","name":"路由器"}
                    ],
                "pructs":[
                        {"href":"javascript:;","url":"img/zhi neng/xmad_15407954754284_AeJTx.jpg"},
                        {"href":"javascript:;","url":"img/zhi neng/xmad_15501975795809_qmOCe.jpg"}
                    ],
                "class":[],
                "class0":[
                        ["javascript:;","","img/zhi neng/cf6660a3-d424-4248-889f-0eed1e99a342.png","大山人家智睿台灯二代","感知环境光,主动优化场景照明","179元","洗衣机省水,外观好看,非常喜欢...","来自于123的评价"],
                        ["javascript:;","","img/zhi neng/pms_1527754949.17141338!220x220.jpg","山竹手环5","","199元","洗衣机省水,外观好看,非常喜欢...","来自于123的评价"],
                        ["javascript:;","","img/zhi neng/2b69b930-a2fd-4d09-a46a-8690cb79f764.jpg","大山人家助力折叠自行车","力矩传感电助力,折叠便捷设计","4299元","洗衣机省水,外观好看,非常喜欢...","来自于123的评价"],
                        ["javascript:;","新品","img/zhi neng/pms_1480474019.52478532!220x220.jpg","山竹多功能网关","菌菌智能配件控制中心","139元","洗衣机省水,外观好看,非常喜欢...","来自于123的评价"],
                        ["javascript:;","新品","img/zhi neng/pms_1506733860.3164711!220x220.jpg","车载空气净化器(USB车充版)","高效净化车内空气","1299元","洗衣机省水,外观好看,非常喜欢...","来自于123的评价"],
                        ["javascript:;","新品","img/zhi neng/pms_1491312153.28261682!220x220.jpg","山竹菌家行车记录仪1S","","299元","洗衣机省水,外观好看,非常喜欢...","来自于123的评价"],
                        ["javascript:;","新品","img/zhi neng/pms_1498564154.53184175!220x220.jpg","大山人家超声波电动牙刷","磁悬浮声波雷达,定制多种刷牙模式","699元","洗衣机省水,外观好看,非常喜欢...","来自于123的评价"],
                        ["javascript:;","","img/zhi neng/pms_1528698828.42759625!220x220.jpg","山竹多空插线板","99元"],
                        ["javascript:;","","img/zhi neng/","浏览更多","热门"],
                    ],
                   "class1":[
                        ["javascript:;","","img/zhi neng/pms_1488272686.62666302!220x220.jpg","大山人家多功能滑板车","极简设计,1分钟轻松上手","1999元","洗衣机省水,外观好看,非常喜欢...","来自于123的评价"],
                        ["javascript:;","","img/zhi neng/2b69b930-a2fd-4d09-a46a-8690cb79f764.jpg","电动助力车折叠自行车","力矩传感电助力,折叠便捷设计","2999元","洗衣机省水,外观好看,非常喜欢...","来自于123的评价"],
                        ["javascript:;","","img/zhi neng/pms_1522071421.29489244!220x220.jpg","山竹遥控小飞机","灰兔遥控小飞机","4299元","洗衣机省水,外观好看,非常喜欢...","来自于123的评价"],
                        ["javascript:;","新品","img/zhi neng/pms_1506733860.3164711!220x220.jpg","大山人家车载空气净化器(USB车充)","双风机循环气流,高效净化","1799元","洗衣机省水,外观好看,非常喜欢...","来自于123的评价"],
                        ["javascript:;","新品","img/zhi neng/pms_1478761096.92412274!220x220.jpg","Mazfite 运动手表","蓝牙听歌,运动随心,语音通话","1399元","洗衣机省水,外观好看,非常喜欢...","来自于123的评价"],
                        ["javascript:;","","img/zhi neng/pms_1496730880.16174470!220x220.jpg","小蚂蚁单反相机,双镜头套机","2016万有效像素,4K视频录制","4299元","洗衣机省水,外观好看,非常喜欢...","来自于123的评价"],
                        ["javascript:;","新品","img/zhi neng/pms_1491312153.28261682!220x220.jpg","大山人家全景相机套","2388万有效像素","1699元","洗衣机省水,外观好看,非常喜欢...","来自于123的评价"],
                        ["javascript:;","","img/zhi neng/pms_1492509229.84515978!220x220.jpg","大山人家车载空气净化器","1999元"],
                        ["javascript:;","","img/zhi neng/","浏览更多","出行"],
                    ],
                   "class2":[
                        ["javascript:;","","img/zhi neng/pms_1498564154.53184175!220x220.jpg","大山人家声波电动牙刷","磁悬浮声波马达,定制多种刷牙模式","1999元","洗衣机省水,外观好看,非常喜欢...","来自于123的评价"],
                        ["javascript:;","","img/zhi neng/pms_1522204891.45957856!220x220.jpg","大山人家电动剃须刀","299元","洗衣机省水,外观好看,非常喜欢...","来自于123的评价"],
                        ["javascript:;","新品","img/zhi neng/T1sWd_B7VT1RXrhCrK!220x220.jpg","大山人家体重秤","100克,喝杯水都可感知","99元","洗衣机省水,外观好看,非常喜欢...","来自于123的评价"],
                        ["javascript:;","","img/zhi neng/pms_1538031692.35815325!220x220.jpg","大山人家摄像头","","5299元","洗衣机省水,外观好看,非常喜欢...","来自于123的评价"],
                        ["javascript:;","新品","img/zhi neng/pms_1481188619.07736357!220x220.jpg","山竹净水器/增强版","400加仑大流量,纯水更多","199元","洗衣机省水,外观好看,非常喜欢...","来自于123的评价"],
                        ["javascript:;","","img/zhi neng/pms_1477980865.4569720!220x220.jpg","山竹PM2.5检测仪","一体黑OLED屏,智能联动","299元","洗衣机省水,外观好看,非常喜欢...","来自于123的评价"],
                        ["javascript:;","新品","img/zhi neng/pms_1476425102.6997704!220x220.jpg","空气净化器滤芯","高效净化,可吸入颗粒物","699元","洗衣机省水,外观好看,非常喜欢...","来自于123的评价"],
                        ["javascript:;","","img/zhi neng/T1KzbQBvbT1RXrhCrK.jpg","大山人家自用水质检测仪","199元"],
                        ["javascript:;","","img/zhi neng/","浏览更多","健康"],
                    ],
                    "class3":[
                        ["javascript:;","减30元","img/zhi neng/pms_1499048837.78256911!220x220.jpg","山竹机器人,履带机甲","履带底盘,智能控制","169元","洗衣机省水,外观好看,非常喜欢...","来自于123的评价"],
                        ["javascript:;","","img/zhi neng/pms_1464615180.86261317!220x220.jpg","灰兔智能故事机","微信远程互动,语音交流","2999元","洗衣机省水,外观好看,非常喜欢...","来自于123的评价"],
                        ["javascript:;","","img/zhi neng/2b69b930-a2fd-4d09-a46a-8690cb79f764.jpg","大山人家骑行电动助力折叠自行车","力矩传感器,折叠便捷设计","4299元","洗衣机省水,外观好看,非常喜欢...","来自于123的评价"],
                        ["javascript:;","新品","img/zhi neng/T1OVC_ByY_1RXrhCrK!220x220.jpg","大山人家电饭煲4L","电磁环绕加热","599元","洗衣机省水,外观好看,非常喜欢...","来自于123的评价"],
                        ["javascript:;","新品","img/zhi neng/pms_1520564952.59464287!220x220.jpg","山竹积木卡车","方向盘控制系统,翻斗升降","1299元","洗衣机省水,外观好看,非常喜欢...","来自于123的评价"],
                        ["javascript:;","新品","img/zhi neng/pms_1498526059.78899603!220x220.jpg","山竹儿童电话手表","6天超长待机,高清彩屏","299元","洗衣机省水,外观好看,非常喜欢...","来自于123的评价"],
                        ["javascript:;","新品","img/zhi neng/pms_1515662525.51823819!220x220.jpg","山竹智能积木","动手动脑,启发孩子创造力","699元","洗衣机省水,外观好看,非常喜欢...","来自于123的评价"],
                        ["javascript:;","","img/zhi neng/pms_1531132647.86213611!220x220.jpg","大山人家自用高清摄像头","1999元"],
                        ["javascript:;","","img/zhi neng/","浏览更多","酷玩"]],

                    "class4":[
                        ["javascript:;","","img/zhi neng/pms_1496289112.05343314!220x220.jpg","山竹路由器4","","169元","洗衣机省水,外观好看,非常喜欢...","来自于123的评价"],
                        ["javascript:;","新品","img/zhi neng/pms_1532604005.80875371!220x220.jpg","山竹路由器4C","11档调光,随心而亮","2999元","洗衣机省水,外观好看,非常喜欢...","来自于123的评价"],
                        ["javascript:;","新品","img/zhi neng/pms_1481188619.07736357!220x220.jpg","山竹WIFI放大器","适配主流路由器,两部完成设置","4299元","洗衣机省水,外观好看,非常喜欢...","来自于123的评价"],
                        ["javascript:;","新品","img/zhi neng/pms_1488268224.14952632!220x220.jpg","山竹路由器 HD","4*4全向天线,802 11ac","599元","洗衣机省水,外观好看,非常喜欢...","来自于123的评价"],
                        ["javascript:;","减20元","img/zhi neng/pms_1491009389.88616921!220x220.jpg","山竹WIFI电力猫","有插座的地方就有wifi","1299元","洗衣机省水,外观好看,非常喜欢...","来自于123的评价"],
                        ["javascript:;","新品","img/zhi neng/pms_1488268195.02396947!220x220.jpg","山竹路由器 Pro","全身金属机身设计,AC2600双频","299元","洗衣机省水,外观好看,非常喜欢...","来自于123的评价"],
                        ["javascript:;","新品","img/zhi neng/pms_1496289112.05343314!220x220.jpg","山竹路由器3G","双核全千兆设计,USB 2.0","699元","洗衣机省水,外观好看,非常喜欢...","来自于123的评价"],
                        ["javascript:;","","img/zhi neng/T13y_vBgJT1RXrhCrK!220x220.jpg","山竹千兆网线","1999元"],
                        ["javascript:;","","img/zhi neng/","浏览更多","路由器"],
                    ]} ,
                                
                {"title":"搭配",
                "imgb":"img/da pei/xmad_1554365372105_AducK.jpg",
                 "list":[
                    {"href":"javascript:;","name":"热门"},
                    {"href":"javascript:;","name":"耳机音箱"},
                    {"href":"javascript:;","name":"电源"},
                    {"href":"javascript:;","name":"电池存储卡"}
                    ],
                "pructs":[
                        {"href":"javascript:;","url":"img/da pei/xmad_15468302168428_dYJSl.jpg"},
                        {"href":"javascript:;","url":"img/da pei/xmad_1554388622951_TjdOn.jpg"}
                    ],
                "class":[],
                "class0":[
                        ["javascript:;","","img/da pei/pms_1507878667.12359513!220x220.jpg","山竹USB充电器快充版","179元","3.4万人评价过","洗衣机省水,外观好看,非常喜欢...","来自于123的评价"],
                        ["javascript:;","享9折","img/da pei/pms_1505264799.43246303!220x220.jpg","山竹AI音箱","199元","8.5万人评价过","洗衣机省水,外观好看,非常喜欢...","来自于123的评价"],
                        ["javascript:;","","img/da pei/pms_1546058471.685154.jpg","新山竹移动电源 10000mAh","4299元","5464人评价过","洗衣机省水,外观好看,非常喜欢...","来自于123的评价"],
                        ["javascript:;","新品","img/da pei/pms_1513857241.9291821.jpg","山竹移动电源3 20000mAh 高配版","139元","4545人评价过","洗衣机省水,外观好看,非常喜欢...","来自于123的评价"],
                        ["javascript:;","享9.3折","img/da pei/pms_1505264799.43246303!220x220.jpg","山竹移动电源2C 20000mAh","1299元","4.56万人评价过","洗衣机省水,外观好看,非常喜欢...","来自于123的评价"],
                        ["javascript:;","享9.7折","img/da pei/pms_1535440524.10478102!220x220.jpg","山竹无线充电器 (通用快充版)","299元","5852人评价过","洗衣机省水,外观好看,非常喜欢...","来自于123的评价"],
                        ["javascript:;","新品","img/da pei/pms_1481269289.59498154.jpg","山竹移动电源高配版 (10000mAh)","699元","4.5万人评价过","洗衣机省水,外观好看,非常喜欢...","来自于123的评价"],
                        ["javascript:;","","img/da pei/pms_1521784952.67735645.jpg","山竹USB充电器","99元"],
                        ["javascript:;","","img/da pei/","浏览更多","热门"],
                    ],
                   "class1":[
                        ["javascript:;","","img/da pei/pms_1521442671.5222520!220x220.jpg","山竹双单元半入耳式耳机","1999元","1万人评价过","洗衣机省水,外观好看,非常喜欢...","来自于123的评价"],
                        ["javascript:;","","img/da pei/pms_1522218089.59163508!220x220.jpg","山竹蓝牙项圈耳机 黑色","2999元","7974人评价过","洗衣机省水,外观好看,非常喜欢...","来自于123的评价"],
                        ["javascript:;","","img/da pei/pms_1527240178.74386819!220x220.jpg","山竹圈铁耳机2","4299元","3615人评价过","洗衣机省水,外观好看,非常喜欢...","来自于123的评价"],
                        ["javascript:;","新品","img/da pei/T1IdZgB5hv1RXrhCrK!220x220.jpg","山竹随身蓝牙音箱","1799元","4.2万人评价过","洗衣机省水,外观好看,非常喜欢...","来自于123的评价"],
                        ["javascript:;","新品","img/da pei/pms_1478248721.42297795!220x220.jpg","山竹蓝牙耳机青春版","1399元","7.1万人评价过","洗衣机省水,外观好看,非常喜欢...","来自于123的评价"],
                        ["javascript:;","","img/da pei/pms_1502093110.00979492!220x220.jpg","山竹运动蓝牙耳机mini","4299元","1.8万人评价过","洗衣机省水,外观好看,非常喜欢...","来自于123的评价"],
                        ["javascript:;","新品","img/da pei/pms_1499161620.42031583!220x220.jpg","山竹蓝牙音频接收器","1699元","1.1万人评价过","洗衣机省水,外观好看,非常喜欢...","来自于123的评价"],
                        ["javascript:;","","img/da pei/T1F5K_BjVv1RXrhCrK!220x220.jpg","山竹小钢炮音箱","1999元"],
                        ["javascript:;","","img/da pei/","浏览更多","耳机音箱"],
                    ],
                   "class2":[
                        ["javascript:;","减20元","img/da pei/pms_1481273468.72564539!220x220.jpg","山竹移动电源10000mAh高配版","1999元","3.4万人评价过","洗衣机省水,外观好看,非常喜欢...","来自于123的评价"],
                        ["javascript:;","","img/da pei/pms_1505264799.43246303.jpg","山竹移动电源2C 20000mAh","299元","10.9万人评价过","洗衣机省水,外观好看,非常喜欢...","来自于123的评价"],
                        ["javascript:;","新品","img/da pei/T1eKdgB4xv1RXrhCrK!220x220.jpg","山竹电源线收纳盒","99元"," ","洗衣机省水,外观好看,非常喜欢...","来自于123的评价"],
                        ["javascript:;","","img/da pei/pms_1476688190.21955893!220x220.jpg","1000mAh山竹移动电源2","5299元","7万人评价过","洗衣机省水,外观好看,非常喜欢...","来自于123的评价"],
                        ["javascript:;","新品","img/da pei/pms_1478070969.5786053!220x220.jpg","山竹二合一数据线","199元","2.7万人评价过","洗衣机省水,外观好看,非常喜欢...","来自于123的评价"],
                        ["javascript:;","","img/da pei/pms_1497595116.43497902!220x220.jpg","山竹车载充电器快充版","299元"," ","洗衣机省水,外观好看,非常喜欢...","来自于123的评价"],
                        ["javascript:;","新品","img/da pei/T1pZbvBTET1RXrhCrK!220x220.jpg","山竹移动电源5000mAh","699元","10.5万人评价过","洗衣机省水,外观好看,非常喜欢...","来自于123的评价"],
                        ["javascript:;","","img/da pei/T13mDQBjCT1RXrhCrK.jpg","山竹智能插排","199元"],
                        ["javascript:;","","img/da pei/","浏览更多","电源"],
                    ],
                    "class3":[
                        ["javascript:;","减30元","img/da pei/pms_1535440524.10478102.jpg","山竹无线充电器 (通用快充版)","169元","暂无评价","洗衣机省水,外观好看,非常喜欢...","来自于123的评价"],
                        ["javascript:;","","img/da pei/pms_1543569848.16012941!220x220.jpg","山竹USB充电器30W快充版(1.5W 版准版)","2999元","461评价过","洗衣机省水,外观好看,非常喜欢...","来自于123的评价"],
                        ["javascript:;","","img/da pei/T1xxVTBghv1RXrhCrK!220x220.jpg","彩虹5号电池 (10粒装)","4299元","17.6万人评价过","洗衣机省水,外观好看,非常喜欢...","来自于123的评价"],
                        ["javascript:;","新品","img/da pei/pms_1517552384.30355703!220x220.jpg","山竹USB充电器60W快充版","599元","1333人评价过","洗衣机省水,外观好看,非常喜欢...","来自于123的评价"],
                        ["javascript:;","新品","img/da pei/pms_1554721776.06777385.jpg","山竹USB充电器 (10W)","1299元","","洗衣机省水,外观好看,非常喜欢...","来自于123的评价"],
                        ["javascript:;","","img/da pei/pms_1521784952.67735645.jpg","山竹USB充电器36W快充版(20W变焦)","299元","6241人评价过","洗衣机省水,外观好看,非常喜欢...","来自于123的评价"],
                        ["javascript:;","享9折","img/da pei/pms_1497595116.43497902!220x220.jpg","山竹车载充电器快充版","699元","","洗衣机省水,外观好看,非常喜欢...","来自于123的评价"],
                        ["javascript:;","","img/da pei/pms_1540442105.68663719!220x220.jpg","山竹车载充电器,速充版","1999元"],
                        ["javascript:;","","img/da pei/","浏览更多","电池存储卡"]

                    ]},

            {"title":"配件",
                "imgb":"img/pei jian/xmad_15555525132688_BwGQj.jpg",
                 "list":[
                    {"href":"javascript:;","name":"热门"},
                    {"href":"javascript:;","name":"保护套"},
                    {"href":"javascript:;","name":"贴膜"},
                    {"href":"javascript:;","name":"其他配件"}
                    ],
                "pructs":[
                        {"href":"javascript:;","url":"img/pei jian/xmad_15407949632827_qkVda.jpg"},
                        {"href":"javascript:;","url":"img/pei jian/xmad_15399144078801_opBVT.jpg"}
                    ],
                "class":[],
                "class0":[
                        ["javascript:;","新品","img/pei jian/pms_1547432273.37096500.jpg","山竹 7 洞洞保护壳(创意无时无刻)","179元","3.4万人评价过","洗衣机省水,外观好看,非常喜欢...","来自于123的评价"],
                        ["javascript:;","","img/pei jian/pms_1527839741.58144552.jpg","山竹8 标准钢化玻璃膜","99元","8.5万人评价过","洗衣机省水,外观好看,非常喜欢...","来自于123的评价"],
                        ["javascript:;","减1元","img/pei jian/pms_1529897883.50894652!220x220.jpg","山竹 8 硅胶保护套","42.99元","5464人评价过","洗衣机省水,外观好看,非常喜欢...","来自于123的评价"],
                        ["javascript:;","新品","img/pei jian/pms_1522142136.45425672.jpg","mini 2S 真皮保护套","139元","4545人评价过","洗衣机省水,外观好看,非常喜欢...","来自于123的评价"],
                        ["javascript:;","","img/pei jian/pms_1537342959.92144787.jpg","山竹8青春版极简高透明保护壳","12.99元","4.56万人评价过","洗衣机省水,外观好看,非常喜欢...","来自于123的评价"],
                        ["javascript:;","新品","img/pei jian/pms_1524467046.18799928!220x220.jpg","山竹MAX3 极简保护壳","2.99元","5852人评价过","洗衣机省水,外观好看,非常喜欢...","来自于123的评价"],
                        ["javascript:;","新品","img/pei jian/pms_1527840584.43636811.jpg","山竹 标准高透贴膜","699元","4.5万人评价过","洗衣机省水,外观好看,非常喜欢...","来自于123的评价"],
                        ["javascript:;","","img/pei jian/pms_1529897883.50894652!220x220.jpg","山竹 6X 极简保护膜","99元"],
                        ["javascript:;","","img/pei jian/","浏览更多","热门"],
                    ],
                   "class1":[
                        ["javascript:;","","img/pei jian/pms_1529897883.50894652!220x220.jpg","小猪 Pro 极简保护壳","1999元","1万人评价过","洗衣机省水,外观好看,非常喜欢...","来自于123的评价"],
                        ["javascript:;","","img/pei jian/pms_1537342194.63927944!220x220 (1).jpg","山竹屏幕指纹版&山竹8 透明版","2999元","7974人评价过","洗衣机省水,外观好看,非常喜欢...","来自于123的评价"],
                        ["javascript:;","","img/pei jian/pms_1523354403.31383469!220x220.png","mini 2S 硅胶保护套","42.99元","3615人评价过","洗衣机省水,外观好看,非常喜欢...","来自于123的评价"],
                        ["javascript:;","新品","img/pei jian/pms_1524467046.18799928!220x220.jpg","山竹6X 极简保护壳 黑色","17.99元","4.2万人评价过","洗衣机省水,外观好看,非常喜欢...","来自于123的评价"],
                        ["javascript:;","新品","iimg/pei jian/pms_1528872380.67388062!220x220.jpg","山竹6A 高透明硅胶保护壳","13.99元","7.1万人评价过","洗衣机省水,外观好看,非常喜欢...","来自于123的评价"],
                        ["javascript:;","","img/pei jian/pms_1545647303.37582131!220x220.png","山竹Play高透软胶保护套 高透","42.99元","1.8万人评价过","洗衣机省水,外观好看,非常喜欢...","来自于123的评价"],
                        ["javascript:;","新品","img/pei jian/pms_1537342194.63927944.jpg","山竹8 屏幕指纹版&山竹8 透明版","1699元","1.1万人评价过","洗衣机省水,外观好看,非常喜欢...","来自于123的评价"],
                        ["javascript:;","","img/pei jian/pms_1544509997.92953277!220x220.jpg","山竹 MAX 定制版","1999元"],
                        ["javascript:;","","img/pei jian/","浏览更多","保护套"],
                    ],
                   "class2":[
                        ["javascript:;","减20元","img/pei jian/pms_1537344382.67756270!220x220.jpg","山竹8青春版 标准高透贴膜","1999元","3.4万人评价过","洗衣机省水,外观好看,非常喜欢...","来自于123的评价"],
                        ["javascript:;","新品","img/pei jian/pms_1524466931.58435208!220x220.jpg","山竹6X 标准高透贴膜","299元","10.9万人评价过","洗衣机省水,外观好看,非常喜欢...","来自于123的评价"],
                        ["javascript:;","新品","img/pei jian/pms_1540373846.84597943!220x220.jpg","山竹MIX 3 标准高透膜","99元"," ","洗衣机省水,外观好看,非常喜欢...","来自于123的评价"],
                        ["javascript:;","","img/pei jian/pms_1536745746.16398200!220x220 (1).jpg","山竹 8 屏幕指纹版&山竹 8 透明版","5299元","7万人评价过","洗衣机省水,外观好看,非常喜欢...","来自于123的评价"],
                        ["javascript:;","","img/pei jian/pms_1529897766.69322759!220x220.jpg","山竹 6 Pro 标准高透明版","199元","2.7万人评价过","洗衣机省水,外观好看,非常喜欢...","来自于123的评价"],
                        ["javascript:;","","img/pei jian/pms_1545640342.21595107!220x220.jpg","山竹Play 标准高透明贴膜","299元"," ","洗衣机省水,外观好看,非常喜欢...","来自于123的评价"],
                        ["javascript:;","新品","img/pei jian/pms_1522140924.30981214!220x220.jpg","Mini 2S 标准高透膜","699元","10.5万人评价过","洗衣机省水,外观好看,非常喜欢...","来自于123的评价"],
                        ["javascript:;","","img/pei jian/pms_1528872452.6913152!220x220.jpg","山竹6A 标准高透版","199元"],
                        ["javascript:;","","img/pei jian/","浏览更多","贴膜"],
                    ],
                    "class3":[
                        ["javascript:;","","img/pei jian/pms_1490702347.3628109!220x220.png","石头机械键盘","169元","暂无评价","洗衣机省水,外观好看,非常喜欢...","来自于123的评价"],
                        ["javascript:;","减10元","img/pei jian/pms_1482221011.26064844!220x220.jpg","山竹指环支架 金色","99元","461评价过","洗衣机省水,外观好看,非常喜欢...","来自于123的评价"],
                        ["javascript:;","","img/pei jian/pms_1507878667.12359513!220x220.jpg","山竹USB充电器","4299元","17.6万人评价过","洗衣机省水,外观好看,非常喜欢...","来自于123的评价"],
                        ["javascript:;","新品","img/pei jian/pms_1517552384.30355703!220x220.jpg","山竹USB充电器60W快充版","599元","1333人评价过","洗衣机省水,外观好看,非常喜欢...","来自于123的评价"],
                        ["javascript:;","新品","img/pei jian/pms_1488533926.06453673!220x220.jpg","山竹便捷鼠标","1299元","","洗衣机省水,外观好看,非常喜欢...","来自于123的评价"],
                        ["javascript:;","","img/pei jian/shujuxian-80.jpg","山竹USB Type 快捷充电数据线","299元","6241人评价过","洗衣机省水,外观好看,非常喜欢...","来自于123的评价"],
                        ["javascript:;","享9折","img/pei jian/T1xLxQBgVT1RXrhCrK!220x220.jpg","USB Type-C 转接头","699元","","洗衣机省水,外观好看,非常喜欢...","来自于123的评价"],
                        ["javascript:;","","img/pei jian/tiemo.jpg","竹子包装,高透","1999元"],
                        ["javascript:;","","iimg/pei jian/","浏览更多","电池存储卡"]

                    ],},
                 {"title":"周边",
                "imgb":"img/zhou bian/",
                 "list":[
                    {"href":"javascript:;","name":"热门"},
                    {"href":"javascript:;","name":"出行"},
                    {"href":"javascript:;","name":"居家"},
                    {"href":"javascript:;","name":"生活周边"},
                    {"href":"javascript:;","name":"箱包"}
                    ],
                "pructs":[
                        {"href":"javascript:;","url":"img/zhou bian/xmad_15543885245162_wuSDO.jpg"},
                        {"href":"javascript:;","url":"img/zhou bian/xmad_15543886716825_hjrKl.jpg"}
                    ],
                "class":[],
                "class0":[
                        ["javascript:;","","img/zhou bian/pms_1492999959.43955760!220x220.jpg","TS尼龙偏光太阳镜","179元","1.8万人评价过","洗衣机省水,外观好看,非常喜欢...","来自于123的评价"],
                        ["javascript:;","","img/zhou bian/pms_1522309592.89679012!220x220.jpg","金兔招财猫足金吊坠","199元","","洗衣机省水,外观好看,非常喜欢...","来自于123的评价"],
                        ["javascript:;","","img/zhou bian/pms_1536571975.28359503!220x220.jpg","90分轻薄无缝一体鹅绒羽绒服","4299元","5859人评价过","洗衣机省水,外观好看,非常喜欢...","来自于123的评价"],
                        ["javascript:;","新品","img/zhou bian/pms_1546508755.29828342!220x220.jpg","可爱飞天猪","139元","43人评价过","洗衣机省水,外观好看,非常喜欢...","来自于123的评价"],
                        ["javascript:;","","img/zhou bian/pms_1512702607.05524534!220x220.jpg","保温杯","1299元","2.1万人评价过","洗衣机省水,外观好看,非常喜欢...","来自于123的评价"],
                        ["javascript:;","","img/zhou bian/pms_1546491118.91317371!220x220.jpg","山野人家飞天猪足金吊坠","299元","312人评价过","洗衣机省水,外观好看,非常喜欢...","来自于123的评价"],
                        ["javascript:;","","img/zhou bian/pms_1502258923.87257653!220x220.jpg","牙医生巴氏牙刷(4色装)","699元","1.8万人评价过","洗衣机省水,外观好看,非常喜欢...","来自于123的评价"],
                        ["javascript:;","","img/zhou bian/pms_1502097740.52392774!220x220.jpg","8*8乳胶弹簧床","99元"],
                        ["javascript:;","","img/zhou bian/","浏览更多","热门"],
                    ],
                   "class1":[
                        ["javascript:;","","img/zhou bian/pms_1546491118.91317371!220x220.jpg","山野人家飞天猪足金吊坠","299元","312人评价过","洗衣机省水,外观好看,非常喜欢...","来自于123的评价"],
                        ["javascript:;","","img/zhou bian/pms_1528368095.99082693!220x220.jpg","大山人家运动鞋","2999元","2.9万人评价过","洗衣机省水,外观好看,非常喜欢...","来自于123的评价"],
                        ["javascript:;","","img/zhou bian/pms_1533867470.49636779!220x220.jpg","90分旅行箱,极光蓝","4299元","3217人评价过","洗衣机省水,外观好看,非常喜欢...","来自于123的评价"],
                        ["javascript:;","新品","img/zhou bian/pms_1504510139.65413172!220x220.jpg","山竹定制,真皮板鞋","1799元","55人评价过","洗衣机省水,外观好看,非常喜欢...","来自于123的评价"],
                        ["javascript:;","新品","img/zhou bian/T1DuxvB4D_1RXrhCrK!220x220.jpg","山竹经典商务双肩包","1399元","2.6万人评价过","洗衣机省水,外观好看,非常喜欢...","来自于123的评价"],
                        ["javascript:;","","img/zhou bian/pms_1500282577.40987685!220x220.jpg","TS偏光太阳镜","4299元","1.5万人评价过","洗衣机省水,外观好看,非常喜欢...","来自于123的评价"],
                        ["javascript:;","新品","img/zhou bian/pms_1508744600.02281018!220x220.jpg","防蓝光护目镜 黑色","1699元","5.5万人评价过","洗衣机省水,外观好看,非常喜欢...","来自于123的评价"],
                        ["javascript:;","","img/zhou bian/pms_1479972875.00224492!220x220.jpg","山竹生活毛巾","1999元"],
                        ["javascript:;","","img/zhou bian/","浏览更多","出行"],
                    ],
                   "class2":[
                        ["javascript:;","","img/zhou bian/pms_1472711253.2453066!220x220.jpg","8H护颈乳胶枕","1999元","3.2万人评价过","洗衣机省水,外观好看,非常喜欢...","来自于123的评价"],
                        ["javascript:;","","img/zhou bian/pms_1472710764.55986027!220x220.jpg","8H多功能护颈枕U1","299元","1.2万人评价过","洗衣机省水,外观好看,非常喜欢...","来自于123的评价"],
                        ["javascript:;","新品","img/zhou bian/pms_1502097740.52392774!220x220.jpg","8H乳胶弹簧床","99元","2222人评价过","洗衣机省水,外观好看,非常喜欢...","来自于123的评价"],
                        ["javascript:;","","img/zhou bian/pms_1493030483.17561318!220x220.jpg","8H乳胶床垫","5299元","5534人评价过","洗衣机省水,外观好看,非常喜欢...","来自于123的评价"],
                        ["javascript:;","新品","img/zhou bian/pms_1502195257.33325849!220x220.jpg","8H懒人舒服沙发","199元","237人评价过","洗衣机省水,外观好看,非常喜欢...","来自于123的评价"],
                        ["javascript:;","","img/zhou bian/pms_1510124061.78733980!220x220.jpg","8H蝶形护颈记忆枕","299元","2075人评价过","洗衣机省水,外观好看,非常喜欢...","来自于123的评价"],
                        ["javascript:;","新品","img/zhou bian/pms_1508820001.68866329!220x220.jpg","8H鹅绒被","","699元","洗衣机省水,外观好看,非常喜欢...","来自于123的评价"],
                        ["javascript:;","","img/zhou bian/109e6a758cc7a6ff593b1ee67a79c787!140x140.jpeg","大山人家自用面巾","199元"],
                        ["javascript:;","","img/zhou bian/","浏览更多","健康"],
                    ],
                    "class3":[
                        ["javascript:;","减30元","img/zhou bian/pms_1465724476.99494960!220x220.jpg","花草检测仪","169元","8470人评价过","洗衣机省水,外观好看,非常喜欢...","来自于123的评价"],
                        ["javascript:;","","img/zhou bian/pms_1465724476.99494960!220x220.jpg","灰TS眼镜框 会员定制","2999元","178人评价过","洗衣机省水,外观好看,非常喜欢...","来自于123的评价"],
                        ["javascript:;","","img/zhou bian/pms_1508744600.02281018!220x220.jpg","TS儿童泛滥光护目镜","4299元","1.7万人评价过","洗衣机省水,外观好看,非常喜欢...","来自于123的评价"],
                        ["javascript:;","新品","img/zhou bian/pms_1479972875.00224492!220x220.jpg","青春系列毛巾","599元","5.8万人评价过","洗衣机省水,外观好看,非常喜欢...","来自于123的评价"],
                        ["javascript:;","新品","img/zhou bian/pms_1479972928.16946623!220x220.jpg","青春系列方巾","1299元","3.5万人评价过","洗衣机省水,外观好看,非常喜欢...","来自于123的评价"],
                        ["javascript:;","新品","img/zhou bian/pms_1501724155.59847725!220x220.jpg","螺丝刀套装礼盒","299元","1.2万人评价过","洗衣机省水,外观好看,非常喜欢...","来自于123的评价"],
                        ["javascript:;","新品","img/zhou bian/pms_1500369741.38796229!220x220.jpg","全自动雨伞","699元","1.1万人评价过","洗衣机省水,外观好看,非常喜欢...","来自于123的评价"],
                        ["javascript:;","","img/zhou bian/pms_1493030484.68163070!220x220.jpg","大山人家自用乳胶床垫","1999元"],
                        ["javascript:;","","img/zhou bian/","浏览更多","生活周边"]],

                    "class4":[
                        ["javascript:;","","img/zhou bian/T1a3DvB7hv1RXrhCrK!220x220.jpg","山竹极简版都市双肩包","169元","4.1万人评价过","洗衣机省水,外观好看,非常喜欢...","来自于123的评价"],
                        ["javascript:;","新品","img/zhou bian/T1DuxvB4D_1RXrhCrK!220x220.jpg","山竹经典商务双肩包","2999元","2.6万人评价过","洗衣机省水,外观好看,非常喜欢...","来自于123的评价"],
                        ["javascript:;","新品","img/zhou bian/pms_1508833215.15582511!220x220.jpg","90分轻商务登记箱","4299元","2619人评价过","洗衣机省水,外观好看,非常喜欢...","来自于123的评价"],
                        ["javascript:;","新品","img/zhou bian/pms_1497672764.01987286!220x220.jpg","学员休闲双肩包","599元","1.1万人评价过","洗衣机省水,外观好看,非常喜欢...","来自于123的评价"],
                        ["javascript:;","减20元","img/zhou bian/pms_1537928457.45667982!220x220.jpg","山山竹拉杆箱 樱花粉","1299元","292人评价过","洗衣机省水,外观好看,非常喜欢...","来自于123的评价"],
                        ["javascript:;","新品","img/zhou bian/pms_1533866052.22316304!220x220.jpg","90分旅行箱 星空灰","299元","195人评价过","洗衣机省水,外观好看,非常喜欢...","来自于123的评价"],
                        ["javascript:;","新品","img/zhou bian/T1FtKgBvZv1RXrhCrK!220x220.jpg","山竹多功能都市休闲胸包","699元","6.14万人评价过","洗衣机省水,外观好看,非常喜欢...","来自于123的评价"],
                        ["javascript:;","","img/zhou bian/pms_1539682895.62231103!220x220.png","山竹儿童黄色双肩包","1999元"],
                        ["javascript:;","","img/zhou bian/","浏览更多","箱包"],
                    ]} ,
                    
            ],
            i:0,
            
        }
    },
    methods:{
        fm(e){
            var i=e.target.dataset.id;
            this.i=i;
        },
        fn(e){
            var name=e.target.dataset.name
            if(name=="热门"&&this.i==0){
                this.lists[0].class=this.lists[0].class0  
            }
            if(name=="电视"){
                this.lists[0].class=this.lists[0].class1 
            }
            if(name=="电脑"){
                this.lists[0].class=this.lists[0].class2  
            }
            if(name=="家具"){
                this.lists[0].class=this.lists[0].class3
            }
             if(name=="热门"&&this.i==1){
                this.lists[1].class=this.lists[1].class0
            }
             if(name=="出行"){
                this.lists[1].class=this.lists[1].class1
            }
             if(name=="健康"){
                this.lists[1].class=this.lists[1].class2
            }
             if(name=="酷玩"){
                this.lists[1].class=this.lists[1].class3
            }
             if(name=="路由器"){
                this.lists[1].class=this.lists[1].class4
            }
             if(name=="热门"&&this.i==2){
                this.lists[2].class=this.lists[2].class0
            }
             if(name=="耳机音箱"){
                this.lists[2].class=this.lists[2].class1
            }
             if(name=="电源"){
                this.lists[2].class=this.lists[2].class2
            }
             if(name=="电池存储卡"){
                this.lists[2].class=this.lists[2].class3
            }
            
             if(name=="热门"&&this.i==3){
                this.lists[3].class=this.lists[3].class0
            }
             if(name=="保护套"){
                this.lists[3].class=this.lists[3].class1
            }
             if(name=="贴膜"){
                this.lists[3].class=this.lists[3].class2
            }
             if(name=="其他配件"){
                this.lists[3].class=this.lists[3].class3
            }
             if(name=="热门"&&this.i==4){
                this.lists[4].class=this.lists[4].class0
            }
            if(name=="出行"&&this.i==4){
                this.lists[4].class=this.lists[4].class1
            }
            if(name=="居家"&&this.i==4){
                this.lists[4].class=this.lists[4].class2
            }
            if(name=="生活周边"&&this.i==4){
                this.lists[4].class=this.lists[4].class3
            }
            if(name=="箱包"&&this.i==4){
                this.lists[4].class=this.lists[4].class4
            }
            
        }
    },
    created(){
        this.lists[0].class=this.lists[0].class0
        this.lists[1].class=this.lists[1].class0
        this.lists[2].class=this.lists[2].class0
        this.lists[3].class=this.lists[3].class0
        this.lists[4].class=this.lists[4].class0
       
    },
}
</script>
<style scoped>
    .products-app{
        width:100%;
    }
    .product{
        width:1300px;
        margin:auto;
        display:flex;
        flex-wrap:wrap;
    }
    .head{
        width:100%;
        padding:30px 0;
        display:flex;
        justify-content:space-between;
    }
    .head>span{
        padding-bottom:5px;
        font-size:25px;
    }
    .head a{
        margin-left:30px;
        padding-bottom:5px;
        color:#000;
        text-decoration:none;
        
    }
    .head a:hover{
        color:#ff7600;
        border-bottom:2px solid #ff7600;
    }
/*主体 */
    .left-list{
        width:234px;
        height:612px;
        display:flex;
        flex-direction:column;
        justify-content:space-between;
    }
    .left-list a{
        transition:all 0.5s;
    }
    .left-list a:hover{
        transform:translate3d(0px,-2px,5px)
    }
    .left-list img{
        width:234px;
        height:300px;
    }
/*主体右 */
    .right{
        padding:0 0 0 1px;
        width:1066px;
        height:612px;
        display:flex;
        flex-wrap:wrap;
        font-size:12px;
        position:relative;     
    }
   .right-list{
        width:255px;
        height:300px;
        text-align:center;
        background:#fff;
        position:relative;
        margin:0 0 12px 11px;
        display:flex;
        justify-content:space-between;
        flex-direction:column;
        align-items:center;
        padding:25px 0 20px 0;
        transition:all 0.1s linear;
    }
    .right-list:hover{
        text-decoration:none;
        box-shadow:3px 4px 3px 3px #aaa;
    }
    .right-list p:first-child{
        position:absolute;
        top:0;
        background:cyan;
        width:55px;
        color:#fff;
    }
   
    .right-list img{
        width:150px;
        height:150px;
    }
    .tra{
        color:#000;
        margin:0;
        width:150px;
        overflow:hidden;
        text-overflow:ellipsis;
        white-space:nowrap
    }
    .tra+span{
        color:#ccc;
    }
    .tra+span+p{
        color:#ff7600;
        margin:0
    }
    .right a:last-child{
        position:absolute;
        bottom:0;right:0;
    }
    .right a:nth-child(8), .right a:last-child{
        width:255px;
        height:142px;
        text-align:center;
        display:flex;
        justify-content:space-between;
        flex-direction:row-reverse;
        background:#fff;
        padding:10px 20px;
        margin:0 0 0px 11px;
    }
    .right a:nth-child(8){
        position:relative;
    }
    .right a:nth-child(8) .tra, .right a:last-child .tra{
        position:absolute;
        top:40px;left:38px;
        font-size:15px;
        width:100px;
        text-align:center;
    }
    .right a:nth-child(8) .tra+span, .right a:last-child .tra+span{
        position:absolute;
        top:75px;left:50px;
        font-size:13px;
        color:#ff7600;
    }
    .right a:last-child .tra{
        font-size:20px;
    }
     .right a:last-child .tra+span{
         color:#aaa;
     }
    .right a:nth-child(8) img,.right a:last-child img{
        width:80px;
        height:80px;
    }
    .right a:last-child img{
        display:none;
    }
   .hid{
        width:255px;
        height:0px;
        position:absolute;
        bottom:0px;
        background:#ff7600;
        color:white;
        font-size:13px;
        transition:all 0.6s linear;
        overflow:hidden;
     
   }
   .hid p{
       color:#ccc;
        margin:10px 0 10px 0;
   }
   .hid span{
       display:inline-block;
       margin:20px 0 0 0;
   } 
  .right a:hover .hid{
      height:80px;
     
  }
  .right a:nth-child(8) .hid,.right a:last-child .hid{
      display:none;
  }
  .bottm{
      width:1300px;
      height:150px;
      margin:30px auto;
  }
  .bottm img{
      width:100%
  }
  .products-app>.product:nth-child(3)>div:nth-child(3)  .tra+span{
      color:#ff7600;
      font-size:15px;
  }
  .products-app>.product:nth-child(3)>div:nth-child(3) .tra+span+p{
      color:#aaa;
      font-size:12px;
  }
  .products-app>.product:nth-child(3)>div:nth-child(3) a:last-child .tra+span{
      color:#aaa;
      font-size:12px;
  }

  .products-app>.product:nth-child(4)>div:nth-child(3)  .tra+span{
      color:#ff7600;
      font-size:15px;
  }
  .products-app>.product:nth-child(4)>div:nth-child(3) .tra+span+p{
      color:#aaa;
      font-size:12px;
  }
  .products-app>.product:nth-child(4)>div:nth-child(3) a:last-child .tra+span{
      color:#aaa;
      font-size:12px;
  }
     .products-app>.product:nth-child(5)>div:nth-child(3)  .tra+span{
      color:#ff7600;
      font-size:15px;
  }
  .products-app>.product:nth-child(5)>div:nth-child(3) .tra+span+p{
      color:#aaa;
      font-size:12px;
  }
  .products-app>.product:nth-child(5)>div:nth-child(3) a:last-child .tra+span{
      color:#aaa;
      font-size:12px;
  }

  .products-app>.product:nth-child(5)>div:nth-child(4){
      display:none;
  }
</style>