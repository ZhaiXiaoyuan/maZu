<template>
    <div class="cm-page home">
        <div class="page-content">
            <div id="map-container" style="width: 50px;height: 50px;position: absolute;z-index: -1000;opacity: 0;"></div>
            <div class="banner-panel">
                <el-carousel height="100%" :interval="10000">
                    <el-carousel-item @click="toDetail(item)" v-for="(item,index) in bannerList" :key="index" :style="{background: 'url('+basicConfig.coverBasicUrl+item.cover+') no-repeat center',backgroundSize: 'cover'}">
                        <div class="banner-item-content" @click="toDetail(item)">
                            <span class="link-tips">点击查看详情</span>
                        </div>
                    </el-carousel-item>
                </el-carousel>
            </div>
            <div class="cm-container panel worship-panel">
                <div class="panel-hd">
                    <i class="icon title-icon worship-title-icon"></i>
                </div>
                <div class="panel-bd">
                    <i class="icon left-desk"></i>
                    <i class="icon right-desk"></i>
                    <i class="icon bottom-cloud bottom-cloud2"></i>
                    <i class="icon bottom-cloud bottom-cloud3"></i>
                    <i class="icon cirle-icon"></i>
                    <i class="icon light-icon"></i>
                    <i class="icon left-potted"></i>
                    <i class="icon right-potted"></i>
                    <i class="icon merit"></i>
                    <i class="icon mazu"></i>


                    <i class="icon burner"></i>
                    <div class="bottom-cloud-wrap">
                        <i class="icon bottom-cloud"></i>
                        <i class="icon bottom-cloud bottom-cloud4"></i>
                    </div>
                    <div class="number-block">
                        <div class="row">
                            <p>累计朝拜人次<span class="strong">{{infoData.totleWorshipCount|numFormat}}</span></p>
                        </div>
                        <div class="row">
                            <p>当前<span class="strong">{{onlineCount|numFormat}}</span>人正在朝拜妈祖</p>
                        </div>
                    </div>
                    <div class="data-block">
                        <p>累计鲜花：<span class="strong">{{infoData.totleFlowerCount|numFormat}}</span></p>
                        <p>累计香火：<span class="strong">{{infoData.totleCandleCount|numFormat}}</span></p>
                        <p>累计香油：<span class="strong">{{infoData.totleOliCount|numFormat}}</span></p>
                    </div>
                    <div class="barrage-block">
                       <div class="block-content">
                           <ul>
                               <li v-for="(item,index) in barrageList" :class="{'active':item.new}" :key="index">
                                   <img :src="defaultLogoAvatar" alt="">
                                   <div class="text">
                                       <p v-html="item.msg"></p>
                                   </div>
                               </li>
                           </ul>
                       </div>
                    </div>
                    <div class="btn-block">
                        <div class="block-content">
                            <i class="cm-btn icon worship-icon" @click="doWorship('worshipAction')"></i>
                            <ul class="btn-list">
                                <li class="cm-btn" :class="{'cm-disabled':!worshipLimit.flower}">
                                    <i class="icon flower-btn"  @click="doWorship('flower')"></i>
                                </li>
                                <li class="cm-btn" :class="{'cm-disabled':!worshipLimit.incense}">
                                    <i class="icon incense-btn"  @click="doWorship('candle')"></i>
                                </li>
                                <li class="cm-btn" :class="{'cm-disabled':!worshipLimit.oil}">
                                    <i class="icon candlestick-btn" @click="doWorship('oil')"></i>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="gift-item-block">
                        <i class="icon flower-icon gift-item flower-gift-item" :style="flowerPosition" :class="{'active':flowerPosition}"></i>
                        <div class="gift-item incense-gift-item"  :style="incensePosition"  :class="{'active':incensePosition}">
                            <div class="incense-item">
                                <div class="wrapper">
                                    <i class="icon smoke-icon"></i>
                                    <i class="icon stick-icon"></i>
                                </div>
                            </div>
                        </div>
                        <div class="gift-item gcandlestick-gift-item" :style="gcandlestickPosition"  :class="{'active':gcandlestickPosition}">
                            <div class="candlestick-item">
                                <div class="wrapper">
                                    <i class="icon fire-icon"></i>
                                    <i class="icon candlestick-icon"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="dialog-block" :class="{'active':selectedWord}">
                        {{selectedWord}}
                    </div>
                    <div class="flower-block">
                        <div class="sent-item flower-item" v-for="(item,index) in flowerList" :key="index" :style="item.position" :class="{'active':item.msg}">
                            <i class="icon flower-icon"></i>
                        </div>
                    </div>
                    <div class="candlestick-block">
                        <div class="sent-item candlestick-item" v-for="(item,index) in gcandlestickList" :key="index" :style="item.position"  :class="{'active':item.msg}">
                            <div class="wrapper">
                                <i class="icon fire-icon"></i>
                                <i class="icon candlestick-icon"></i>
                            </div>
                        </div>
                    </div>
                    <div class="incense-block">
                        <div class="sent-item incense-item" v-for="(item,index) in incenseList" :key="index" :style="item.position"  :class="{'active':item.msg}">
                            <div class="wrapper">
                                <i class="icon smoke-icon"></i>
                                <i class="icon stick-icon"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="less" rel="stylesheet/less">

</style>
<script>
    import Vue from 'vue'

    export default {
        components:{

        },
        data: function(){
            return {
                token:null,
                defaultAvatar:require('../images/common/default-avatar.png'),
                defaultLogoAvatar:require('../images/common/logo-icon.png'),
                msgList:[],

                infoData:{
                    totleWorshipCount:0,
                    totleFlowerCount:0,
                    totleCandleCount:0,
                    totleOliCount:0
                },

                flowerList:[],
                incenseList:[],
                gcandlestickList:[],

                flowerPosition:null,
                incensePosition:null,
                gcandlestickPosition:null,

                candidateList:[],
                barrageList:[],

                oldIds:[],

                initPage:false,

                counter:0,

                wordList:window.wordList,
                selectedWord:null,
                wordTimeOut:null,

                onlineCountGap:0,
                onlineCount:0,

                worshipLimit:{
                    flower:1,
                    incense:1,
                    oil:1,
                },
                userPosition:null,

                defaultCount:30,

                winWidth:document.documentElement.scrollWidth,

                handling:false,

                bannerList:[],
                requestInterval:null,
                itemInterval:null,
                onlineRandom:parseInt(Math.random()*(10-5+1)+5,10),
            }
        },
        methods: {
            getWorshipInfo() {
                Vue.api.getWorshipInfo({token:this.token}).then((resp)=>{
                    if(resp.respCode=='2000'){
                        let data=JSON.parse(resp.respMsg);
                      /*  console.log('data:',data);*/
                        //

                        let list=data.msgList.reverse();

                        this.token=data.token;
                        this.onlineCountGap=data.currentOnlineCount-data.lastMinOnlineCount;
                        if(this.onlineCountGap>0){
                            this.onlineCount=this.onlineRandom+data.lastMinOnlineCount;
                        }else{
                            this.onlineCount=this.onlineRandom+data.currentOnlineCount;
                        }
                        //
                        this.msgList=[];
                        let newFlowerCount=0;
                        let newCandleCount=0;
                        let newOilcCount=0;
                        let temList=[];
                        list.forEach((item,i)=>{
                            item=JSON.parse(item);
                            item.id=item.token+item.timestamp;
                           /* let msgStrArr=item.msg.split('献上了');
                            item.name=msgStrArr[0];
                            item.gift=msgStrArr[1];*/
                            temList.push(item);
                            if(this.oldIds.indexOf(item.id)==-1){
                                this.msgList.push(item);
                                if(item.type=='flower'){
                                    newFlowerCount++;
                                }else if(item.type=='candle'){
                                    newCandleCount++;
                                }else if(item.type=='oil'){
                                    newOilcCount++;
                                }
                            }
                        });

                        //
                   /*     console.log('this.oldIds:',this.oldIds);
                        console.log(data.totleWorshipCount,'*******',list.length,'******',this.msgList.length+'');*/
                        this.infoData.totleWorshipCount=data.totleWorshipCount-this.msgList.length;
                        this.infoData.totleFlowerCount=data.totleFlowerCount-newFlowerCount;
                        this.infoData.totleCandleCount=data.totleCandleCount-newCandleCount;
                        this.infoData.totleOliCount=data.totleOliCount-newOilcCount;

                        //
                        if(this.barrageList.length==0){
                            console.log('toInit');
                            let virtualFlag=false;
                            if(this.msgList.length==0){
                                virtualFlag=true;
                                this.msgList=temList.slice(0,temList.length>this.defaultCount?this.defaultCount:temList.length);
                            }
                            for(let i=0;i<this.defaultCount;i++){
                                let item=this.msgList.pop();
                                if(item){
                                    this.addGift(item,virtualFlag);
                                    this.barrageList.push(item);
                                }
                            }
                        }else{

                        }
                        //
                        this.$cookie.set('token',this.token,'120s');
                    }else{

                    }
                });
            },
            doWorship(type) {
                if(this.handling){
                    return;
                }else{
                    this.handling=true;
                }
                let name=this.userPosition&&this.userPosition.city?this.userPosition.city+'信众':'世界各地信众';
                let typeText='';
                switch (type){
                    case 'worshipAction':
                        typeText='<span>'+name+'</span>拜了<span>妈祖</span>';
                        break;
                    case 'flower':
                        typeText='<span>'+name+'</span>献了<span>鲜花</span>';
                        break;
                    case 'candle':
                        typeText='<span>'+name+'</span>烧了<span>高香</span>';
                        break;
                    case 'oil':
                        typeText='<span>'+name+'</span>点了<span>香油</span>';
                        break
                }
                let params={
                    token:this.token,
                    type:type,//"flower","candle","oil"
                    msg:typeText,
                }
                let fb=Vue.operationFeedback({text:''});
                Vue.api.doWorship(params).then((resp)=>{
                    if(resp.respCode=='2000'){
                        fb.setOptions({type:'complete',text:'',delayForDelete:0});
                        let data=JSON.parse(resp.respMsg);
                        let newMsg={
                            new:true,
                            type:type,
                            token:params.token,
                            name:name,
                            gift:typeText,
                            timestamp:new Date().getTime(),
                            msg:params.msg
                        }
                        if(type=='worshipAction'){
                            this.addGift(newMsg);
                        }else if(type=='flower'){
                            /*this.worshipLimit.flower--;*/
                            let temItem=this.flowerList.find((item,i)=>{
                                return !item.msg;
                            });
                            if(!temItem){
                                let index=parseInt(Math.random()*(this.flowerList.length),10)
                                this.flowerList[index].msg=null;
                                temItem=this.flowerList[index];
                            }
                            this.flowerPosition={...temItem.position};
                            setTimeout(()=>{
                                this.flowerPosition=null;
                                this.addGift(newMsg);
                            },2000);
                        }else if(type=='candle'){
                           /* this.worshipLimit.incense--;*/
                            let temItem=this.incenseList.find((item,i)=>{
                                return !item.msg;
                            });
                            if(!temItem){
                                this.incenseList[0].msg=null;
                                temItem=this.incenseList[0];
                            }
                            this.incensePosition={...temItem.position};
                            setTimeout(()=>{
                                this.incensePosition=null;
                                this.addGift(newMsg);
                            },1400);
                        }else if(type=='oil'){
                          /*  this.worshipLimit.oil--;*/
                            let temItem=this.gcandlestickList.find((item,i)=>{
                                return !item.msg;
                            });
                            if(!temItem){
                                this.gcandlestickList[0].msg=null;
                                temItem=this.gcandlestickList[0];
                            }
                            this.gcandlestickPosition={...temItem.position};
                            setTimeout(()=>{
                                this.gcandlestickPosition=null;
                                this.addGift(newMsg);
                            },1800);
                        }
                        this.showWord();
                        this.barrageList.push(newMsg);
                        //
                       /* this.$cookie.set('worshipLimit',JSON.stringify(this.worshipLimit),'24h');*/
                    }else{
                        fb.setOptions({type:'warn',text:'操作失败，'+resp.respMsg});
                    }
                });
            },
            addGift:function (item,virtualFlag) {
                if(item){
                    if(item.type=='flower'){
                        for(let j=0;j<this.flowerList.length;j++){
                            if(!this.flowerList[j].msg){
                                this.flowerList[j].msg=item;
                                this.infoData.totleFlowerCount++;
                                break;
                            }
                        }
                    }else if(item.type=='candle'){
                        for(let j=0;j<this.incenseList.length;j++){
                            if(!this.incenseList[j].msg){
                                this.incenseList[j].msg=item;
                                if(!virtualFlag){
                                    this.infoData.totleCandleCount++;
                                }
                                break;
                            }
                        }
                    }else if(item.type=='oil'){
                        for(let j=0;j<this.gcandlestickList.length;j++){
                            if(!this.gcandlestickList[j].msg){
                                this.gcandlestickList[j].msg=item;
                                if(!virtualFlag){
                                    this.infoData.totleOliCount++;
                                }
                                break;
                            }
                        }
                    }
                    let random=parseInt(Math.random()*300000);
                    item.startTime=new Date().getTime()+random;
                    if(!virtualFlag){
                        this.oldIds.push(item.id);
                        localStorage.setItem('oldIds',JSON.stringify(this.oldIds));
                        this.infoData.totleWorshipCount++;
                    }
                }
            },
            findPosition:function (type) {

            },
            showWord:function () {
                this.handling=false;
                this.selectedWord=null;
                clearTimeout(this.wordTimeOut);
                let index=parseInt(Math.random()*(this.wordList.length),10);
                this.selectedWord=this.wordList[index];
                this.wordTimeOut=setTimeout(()=>{
                    this.selectedWord=null;
                },10000)
            },
            getScrollTop:function () {
                let sTop=null;
                if (document.compatMode == "BackCompat")
                {
                    sTop = document.body.scrollTop;
                }
                else
                {
                    sTop = document.documentElement.scrollTop == 0 ? document.body.scrollTop : document.documentElement.scrollTop;
                }
                return sTop;
            },
            getBannerList() {
                Vue.api.getBannerList({pageIndex:1,pageSize:10}).then((resp)=>{
                    if(resp.respCode=='2000'){
                        let data=JSON.parse(resp.respMsg);
                        this.bannerList=data.bannerList;
                        //
                    }else{

                    }
                });
            },
            toDetail:function (item) {
                window.location.href=item.url;
            }
        },
        mounted () {
            //
            let that=this;
            //
            this.token=this.$cookie.get('token');
            this.token=this.token?this.token:null;
            //
            this.getBannerList();
            //
          /*  let worshipLimit=this.$cookie.get('worshipLimit');
            if(worshipLimit){
                this.worshipLimit=JSON.parse(worshipLimit);
            }*/
            //
            let oldIds=localStorage.getItem('oldIds');
           /* console.log('oldIds:',oldIds);*/
            if(oldIds){
                oldIds=JSON.parse(oldIds);
                if(oldIds.length>400){
                    oldIds.splice(0,200);
                }
                this.oldIds=oldIds;
            };
            //
            let flowerSizeNum1=58;
            let flowerSizeNum2=380;
            let flowerSizeNum3=272;
            let gcandlestickSizeNum1=434;
            let gcandlestickSizeNum2=373;
            let gcandlestickSizeNum3=40;
            let gcandlestickSizeNum4=42;
            let gcandlestickSizeNum5=25;
            let gcandlestickSizeNum6=5;
            let gcandlestickSizeNum7=15;
            let gcandlestickSizeNum8=4;
            let incenseSizeNum1=470;
            let incenseSizeNum2=218;
            let incenseSizeNum3=448;
            let incenseSizeNum4=1;
            let unit='px';
            if(this.winWidth>1000&&this.winWidth<1600){
                flowerSizeNum1=45;
                flowerSizeNum2=300;
                flowerSizeNum3=230;
                gcandlestickSizeNum1=338;
                gcandlestickSizeNum2=287;
                gcandlestickSizeNum3=32;
                gcandlestickSizeNum4=32;
                incenseSizeNum1=371;
                incenseSizeNum2=167;
                incenseSizeNum3=298;
            }else if(this.winWidth<1000){
                unit='rem';
                flowerSizeNum1=0.45;
                flowerSizeNum2=3;
                flowerSizeNum3=3.26;
                gcandlestickSizeNum1=3.26;
                gcandlestickSizeNum2=3.82;
                gcandlestickSizeNum3=0.34;
                gcandlestickSizeNum4=0.34;
                gcandlestickSizeNum5=0.2;
                gcandlestickSizeNum6=0;
                gcandlestickSizeNum7=0.1;
                gcandlestickSizeNum8=0;

                incenseSizeNum1=371;
                incenseSizeNum2=176;
                incenseSizeNum3=378;
                incenseSizeNum4=100;
            }
            //
            for(let i=0;i<10;i++){
                let x=0;
                if(i<5){
                    x=flowerSizeNum1*i;
                }else{
                    x=flowerSizeNum2+flowerSizeNum1*i;
                }
                this.flowerList.push({position:{transform:'translate('+x+unit+', '+flowerSizeNum3+unit+')'},msg:null});
            }
            //
            for(let i=0;i<3;i++){
                let y=0;
                let xDeviator=0;
                let xGapDeviator=gcandlestickSizeNum1;
                switch (i){
                    case 0:
                        y=gcandlestickSizeNum2;
                        xDeviator=gcandlestickSizeNum5;
                        xGapDeviator=xGapDeviator+gcandlestickSizeNum6;
                        break;
                    case 1:
                        y=gcandlestickSizeNum2+gcandlestickSizeNum3;
                        xDeviator=gcandlestickSizeNum7;
                        xGapDeviator=xGapDeviator+gcandlestickSizeNum7;
                        break;
                    case 2:
                        y=gcandlestickSizeNum2+gcandlestickSizeNum3*2+gcandlestickSizeNum8;
                        xDeviator=gcandlestickSizeNum6;
                        xGapDeviator=xGapDeviator+gcandlestickSizeNum5;
                        break;
                }
                for(let j=0;j<12;j++){
                    let x=0;
                    if(j<6){
                        x=xDeviator+gcandlestickSizeNum4*j;
                    }else{
                        x=xGapDeviator+gcandlestickSizeNum4*j;
                    }
                    this.gcandlestickList.push({position:{transform:'translate('+x+unit+', '+y+unit+')',msg:null}})
                }
            }
            //
            for(let i=0;i<50;i++){
                let x=parseInt(Math.random()*(incenseSizeNum1+1)+incenseSizeNum2,10);
                let y=parseInt(Math.random()*(10+1)+incenseSizeNum3,10);
                this.incenseList.push({position:{transform:'translate('+x/incenseSizeNum4+unit+', '+y/incenseSizeNum4+unit+')',msg:null}})
            }
            //
            this.getWorshipInfo();
            this.requestInterval=setInterval(()=>{
                this.getWorshipInfo();
                if(this.barrageList.length>10){
                    this.barrageList.splice(10,this.barrageList.length-10);
                }
            },60000);
            //
            this.itemInterval=setInterval(()=>{
                if(this.msgList.length>0){
                    let item=this.msgList.pop();
                    this.addGift(item);
                    this.barrageList.push(item);
                    //
                    if(!(this.counter%10)){
                        let curTime=new Date().getTime();
                        this.flowerList.forEach((entry,index)=>{
                            if(entry.msg&&curTime-entry.msg.startTime>10000){
                                entry.msg=null;
                            }
                        });
                        this.gcandlestickList.forEach((entry,index)=>{
                            if(entry.msg&&curTime-entry.msg.startTime>10000){
                                entry.msg=null;
                            }
                        });
                        this.incenseList.forEach((entry,index)=>{
                            if(entry.msg&&curTime-entry.msg.startTime>10000){
                                entry.msg=null;
                            }
                        });
                        //
                        if(this.onlineCountGap){
                            this.onlineCountGap--;
                            this.onlineCount++;
                        }
                    }
                }
                this.counter++;
            },1500);
            //高德地图获取城市信息
            window.onLoad  = function(){
                let mapObj = new AMap.Map('map-container');
                mapObj.plugin('AMap.CitySearch', ()=>{
                    let citySearch = new AMap.CitySearch({});
                    mapObj.addControl(citySearch);
                    citySearch.getLocalCity();
                    AMap.event.addListener(citySearch, 'complete', (data)=>{
                        that.userPosition=data;

                    });//返回定位信息
                    AMap.event.addListener(citySearch, 'error', (error)=>{
                        /*console.log('error:',error);*/
                    });      //返回定位出错信息
                });
            }
            var url = 'https://webapi.amap.com/maps?v=1.4.10&key=b7164700b52c20d7458ee82630a22122&callback=onLoad';
            var jsapi = document.createElement('script');
            jsapi.charset = 'utf-8';
            jsapi.src = url;
            document.head.appendChild(jsapi);
            //
            //监听滚动事件
            let headerTarget=document.getElementById('header');
            document.body.addEventListener('scroll' , function(){
                let winTop = that.getScrollTop();//当前滚动条的高度
                if(winTop>150){
                    headerTarget.style.top='-100%';
                }else{
                    headerTarget.style.top='0%';
                }
            })
           /* let temTypeList=['worshipAction','flower','candle','oil'];
            let count=0;
            let temInterval=setInterval(()=>{
                this.doWorship(temTypeList[parseInt(Math.random()*(temTypeList.length),10)]);
                count++;
                if(count>3000){
                    clearInterval(temInterval);
                }
            },3000);*/
        },
        beforeRouteLeave(to,from,next){
            clearInterval(this.requestInterval);
            clearInterval(this.itemInterval);
            next();
        },
    }
</script>
