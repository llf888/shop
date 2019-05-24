<template>
    <div>
        <div class="foot-app">
        <div class="top">
                <ul>
                    <li>
                    <span class="mui-icon mui-icon-phone-filled fn"></span>
                        <span>预约维修服务</span>
                    </li>
                    <li>
                        <span class="mui-icon-extra mui-icon-extra-express"></span>
                        <span>7天无理由退货</span>
                    </li>
                    <li>
                        <span class="mui-icon mui-icon-loop"></span>
                        <span>15天免费换货</span>
                    </li>
                    <li>
                        <span class="mui-icon-extra mui-icon-extra-gift"></span>
                        <span>满150元包邮</span>
                    </li>
                    <li>
                        <span class="mui-icon mui-icon-map"></span>
                        <span>520余家售后网点</span>
                    </li>
                </ul>
        </div>
        <div class="mid">
                <table>
                    <tr>
                        <th>帮助中心</th>
                        <th>服务支持</th>
                        <th>线下门店</th>
                        <th>关于竹子</th>
                        <th>关注我们</th>
                        <th>特色服务</th>
                    </tr>
                    <tr>
                        <td>账户管理</td>
                        <td>售后政策</td>
                        <td>大山人家</td>
                        <td>了解竹子</td>
                        <td>新浪微博</td>
                        <td>F码通道</td>
                    </tr>
                    <tr>
                        <td>购物指南</td>
                        <td>自助服务</td>
                        <td>服务网点</td>
                        <td>加入我们</td>
                        <td>官方微信</td>
                        <td>礼物码</td>
                    </tr>
                    <tr>
                        <td>订单操作</td>
                        <td>相关下载</td>
                        <td>授权体验店</td>
                        <td>投资者关系</td>
                        <td>联系我们</td>
                        <td>防伪查询</td>
                    </tr>
                </table>
                <div class="mid-right">
                    <span>400-100-1234</span>
                    <p>周一到周日 8:00-18:00</p>
                    <span>(仅收市话费)</span>
                    <a href="javascript:;"><span class="mui-icon-extra mui-icon-extra-comment   "></span>联系客服</a>
                </div>
        </div>
         
        </div>
        <div class="foot">
            <p>&copy;京ICP证110507号 京ICP备10046444号 京公网安备11010802020134号 京网文[2017]1530-131号 </p>
            <p>违法和不良信息举报电话：185-0130-1238 知识产权侵权投诉 本网站所列数据，除特殊说明，所有数据均出自我司实验室测试</p>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
        }
    }
    
}
</script>
<style scoped>
    .foot-app{
         background:#fff;
         padding:10px 0;
         margin-top:70px;
    }
    .top{
        width:100%;
    }
    .top>ul{
        list-style:none;
        padding:0;
        width:1300px;
        margin:auto;
        height:100px;
        display:flex;
        justify-content:space-around;
        border-bottom:1px solid #ddd;
        align-items:center;
    }
    .top>ul>li{
        width:260px;
        height:30px;
        text-align:center;
        color:#aaa;
        line-height:30px;   
    }
    .top>ul>li:hover{
        color:#ff7600;
    }
    .top>ul>li+li{
        border-left:1px solid #ccc;
    }
    .top>ul>li span:first-child{
        margin-right:5px;
        font-size:20px;
    }
    .top>ul>li:first-child span:first-child,.top>ul>li:nth-child(2) span:first-child{
        font-size:25px;
    }
    .top>ul>li:nth-child(2) span:last-child{
       position:relative;
       top:-2px;
    }
    .mid{
        width:1300px;
        margin:35px auto;
        display:flex;
        flex-wrap:nowrap;
    }
    .mid>table{
        width:80%;
        border-collapse:collapse;
    }
    .mid table tr{
        height:30px; 
    }
    .mid table tr+tr td:hover{
        color:#ff7600;
    }
    .mid table tr th{
        font-size:14px;
        color:#666;
        padding-bottom:20px;
    }
    .mid table tr td{
        padding:0;width:16%;
        padding:5px 0;
        font-size:12px;
        color:#777;
    }
    .mid table tr:first-child{
        margin:20px 0;
    }
    .mid-right{
        width:20%;
        border-left:1px solid #ccc;
        height:134px;
        text-align:center;
    }
    .mid-right span:first-child{
        color:#ff7600;
        font-size:25px;
    }
    .mid-right p:nth-child(2){
        font-size:12px;
        margin:5px 0 0 0;
    }
    .mid-right p:nth-child(2)+span{
        font-size:12px;
        color:#888;
    }
    .mid-right a{
        display:block;
        border:1px solid #ff7600;
        text-align:center;
        height:30px;
        line-height:30px;
        width:100px;
        font-size:12px;
        margin:20px auto;
        color:#ff7600
    }
    .mid-right a:hover{
        background:#ff7600;
        color:#fff;
        text-decoration:none;
    }
    .mid-right a span:last-child{
        position:relative;
        margin-top:-2px;
    }
    .mui-icon-extra-comment:before{
        font-size:8px;
        margin-right:2px;
    }
    .foot{
        margin-top:5px;
        width:100%;
        text-align:center;
        font-size:12px;
    }
    
</style>