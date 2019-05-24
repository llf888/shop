<template>
    <div>
    <!-- 主体 -->
            <div class="content" v-for="(list,i) of lists">
                <div class="content-body" :style="moved">
                    <div v-for="elem of list">
                        <p v-text="elem.lei"></p>
                        <p v-text="elem.title"></p>
                        <p v-text="elem.dis"></p>
                        <p v-text="elem.price"></p>
                        <img :src="elem.src" alt="">
                    </div>
                </div>
            <!-- 左右箭头 -->
                <div class="move">
                    <span class="move-left mui-icon mui-icon-back" @click="left" :style="coll" :data-n="i"></span>
                    <span class="move-right mui-icon mui-icon-arrowright" @click="right" :style="colr" :data-n="i"></span>
                </div>
            <!-- 指示器 -->
                <div class="ind">
                    <ul>
                        <li v-for="(em,i) of list" ref="bodcol" @click="change" :data-id="i"></li>
                    </ul>
                </div>
            </div>
        
    </div>
</template>
<script>
export default {
    data(){
        return{
            moved:"margin-left:0px",
            count:[0],
            colr:"",
            coll:"background:#aaa",
            lists:[],  
        }
    },
    created(){
         this.axios.get("http://127.0.0.1:3000/carousel?start=7&count=4").then(result=>{
            this.lists.push(result.data.data)
          
         })
         
    },   
    methods:{
        left(){                      
            if(this.count[0]>0){
            this.colr="";
            this.count[0]--;
            this.moved="margin-left:-"+`${this.count*300}`+"px"
            }
            if(this.count[0]==0){
                this.coll="background:#eee"
            } 
            this.$refs.bodcol[this.count[0]+1].style="background:#aaa;border:none;";
            this.$refs.bodcol[this.count[0]].style="background:#fff;border:2px solid #ff7600";
           
        },
        right(){            
            if(this.count[0]<3){
                this.coll="";
                this.count[0]++;
                this.moved="margin-left:-"+`${this.count*300}`+"px";
            }
            if(this.count[0]==3){
                this.colr="background:#eee"
            }
            this.$refs.bodcol[this.count[0]-1].style="background:#aaa;border:none;";
            this.$refs.bodcol[this.count[0]].style="background:#fff;border:2px solid #ff7600";  
        },
        change(e){
            var i=e.target.dataset.id
            this.moved="margin-left:-"+`${i*300}`+"px";
            var arr=this.$refs.bodcol[i].parentNode.children
            for(var b=0;b<arr.length;b++){
                arr[b].style="background:#aaa;border:none;"
            }
            this.$refs.bodcol[i].style="background:#fff;border:2px solid #ff7600";
        }   
    }
}
</script>
<style scoped>
    /*小轮播外层包裹 */
    .content{
        width:300px;
        border:1px solid red;
        position:relative;
        overflow:hidden;
    }
/*小轮播主题内容 */
    .content-body{
        width:1200px;
        transition:all 0.5s;
    }
    .content-body:after{
        display:block;
        content:"";
        clear:both;
    }
    .content-body>div{
        float:left;
        width:300px;
        height:420px;
        padding:45px 0 0 0;
        display:flex;
        flex-wrap:nowrap;
        flex-direction:column;
        text-align:center;
        position:relative;
    }
    .content-body>div p:nth-child(1){
        color:#ff7611;
        font-size:17px;
    }
    .content-body>div p:nth-child(2){
        color:#333;
        font-size:20px;
        margin-top:10px;
    }
    .content-body>div p:nth-child(3){
        width:200px;
        margin:0 auto;
    }
     .content-body>div p:nth-child(4){
         color:#444;
         margin:10px;
     }
    .content-body img{
       width:216px;
       height:154px;
       margin: 0 auto;
    }
/*左右小箭头 */
    .move span{
        width:25px;
        height:40px;
        line-height:40px;
        border-radius:3px;
        background:rgba(0,0,0,0.5);
        margin-top:-20px;
        display:none;
        color:#ccc;
        background:#ff7655;
    }

    .move-left{
        position:absolute;
        top:50%;left:0; 
    }
    .move-right{
        position:absolute;
        top:50%;right:0;  
    }
    .content:hover .move span{
        display:block;
    }
/*轮播指示器 */
    .ind{
        text-align:center;
        position:absolute;
        bottom:27px;left:50%;
        margin-left:-40px;
    }
    .ind>ul{
        display:block;
        list-style:none;
        text-align:center;
        margin:0;
        padding:0;
        display:flex;
        justify-content:space-around;
        align-items:center;
        width:80px;
        height:12px;
        line-height:12px;
    }
    .ind>ul>li{
        box-sizing:content-box;
        width:6px;height:6px;
        background:#aaa;
        border-radius:50%;
        border:2px solid #fff;
    }
    .ind>ul>li:first-child{
        border:2px solid #ff7600;
        background:#fff;
    }
</style>