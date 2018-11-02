<script src="../../config/index.js"></script>
<template>
    <div class="cm-page home">
        <div class="cm-container page-content">
            <div class="panel worship-panel">
                <div class="panel-hd">
                    <i class="icon title-icon worship-title-icon"></i>
                </div>
                <div class="panel-bd">
                    <i class="icon bottom-cloud bottom-cloud2"></i>
                    <i class="icon bottom-cloud bottom-cloud3"></i>
                    <i class="icon cirle-icon"></i>
                    <i class="icon light-icon"></i>
                   <!-- <i class="icon left-right-cloud"></i>
                    <i class="icon right-cloud"></i>-->
                    <i class="icon left-potted"></i>
                    <i class="icon right-potted"></i>
                    <i class="icon merit"></i>
                    <i class="icon mazu"></i>

                  <!--  <i class="icon fire-icon"></i>
                    <i class="icon smoke-icon"></i>-->

                    <i class="icon burner"></i>
                    <div class="bottom-cloud-wrap">
                        <i class="icon bottom-cloud"></i>
                        <i class="icon bottom-cloud bottom-cloud4"></i>
                    </div>
                    <div class="number-block">
                        <div class="row">
                            <p>累计朝拜人次<span class="strong">{{infoData.totleWorshipCount}}</span></p>
                        </div>
                        <div class="row">
                            <p>当前<span class="strong">{{infoData.currentOnlineCount}}</span>人正在朝拜妈祖</p>
                        </div>
                    </div>
                    <div class="data-block">
                        <p>累计鲜花：<span class="strong">{{infoData.totleFlowerCount}}</span></p>
                        <p>累计香火：<span class="strong">{{infoData.totleCandleCount}}</span></p>
                        <p>累计香油：<span class="strong">{{infoData.totleOliCount}}</span></p>
                    </div>
                    <div class="barrage-block">
                       <div class="block-content">
                           <ul>
                               <li v-for="(item,index) in barrageList" :key="index">
                                   <img :src="defaultAvatar" alt="">
                                   <div class="text">
                                       <p><span class="strong">{{item.name}}</span>献上了<span class="strong">{{item.gift}}</span></p>
                                   </div>
                               </li>
                           </ul>
                       </div>
                    </div>
                    <div class="btn-block">
                        <div class="block-content">
                            <i class="icon worship-icon"></i>
                            <ul class="btn-list">
                                <li class="cm-btn">
                                    <i class="icon flower-btn"  @click="doWorship('flower')"></i>
                                </li>
                                <li class="cm-btn">
                                    <i class="icon incense-btn"  @click="doWorship('candle')"></i>
                                </li>
                                <li class="cm-btn">
                                    <i class="icon candlestick-btn" @click="doWorship('oil')"></i>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="gift-item-block">
                        <i class="icon flower-icon gift-item flower-gift-item" :style="flowerPosition" :class="{'active':flowerPosition}"></i>
                        <i class="icon incense-icon gift-item incense-gift-item"  :style="incensePosition"  :class="{'active':incensePosition}"></i>
                        <i class="icon candlestick-icon gift-item gcandlestick-gift-item"  :style="gcandlestickPosition"  :class="{'active':gcandlestickPosition}"></i>
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
                            <i class="icon candlestick-icon"></i>
                        </div>
                    </div>
                    <div class="incense-block">
                        <div class="sent-item incense-item" v-for="(item,index) in incenseList" :key="index" :style="item.position"  :class="{'active':item.msg}">
                            <i class="icon incense-icon"></i>
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
                msgList:[],

                infoData:{},

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

                wordList:['人生就是一场戏，得失成败由他去。没事不要生闲气，气出病来无人替。保持一个好身体，健康财富一大笔。心情愉快添福气，开心快乐最无敌！',
                    '半贫半富半足安，半智半愚半圣贤。半有半无半苦乐，半醒半梦半神仙。一个“半”字，恰好找到世间万物的“度”。世间哪有十全事，愿你人生完美只求半。',
                '人生极为重要的三件事:用宽容的心对待世界，对待生活；用快乐的心创造世界，改变生活；用感恩的心感受世界，感受生活!'],
                selectedWord:null,
                wordTimeOut:null,
            }
        },
        methods: {
            getWorshipInfo() {
                Vue.api.getWorshipInfo({token:this.token}).then((resp)=>{
                    if(resp.respCode=='2000'){
                        let data=JSON.parse(resp.respMsg);
                        //
                       /* data.totleWorshipCount=data.totleWorshipCount-150;
                        data.totleFlowerCount=data.totleFlowerCount-50;
                        data.totleCandleCount=data.totleCandleCount-50;
                        data.totleCandleCount=data.totleOliCount-50;*/
                        this.infoData=data;
                        //
                        //

                        this.msgList=data.msgList.reverse();
                      /*  console.log('this.infoData:',this.infoData);*/
                        this.token=data.token;
                        this.msgList.forEach((item,i)=>{
                            item.id=item.token+item.timestamp;
                            let msgStrArr=item.msg.split('献上了');
                            item.name=msgStrArr[0];
                            item.gift=msgStrArr[1];
                        });

                        if(this.barrageList.length==0){
                            console.log('toInit');
                            for(let i=0;i<100;i++){
                                let item=this.msgList[i];
                                if(item){
                                    this.addGift(item);
                                }
                            }
                            for(let i=0;i<this.msgList.length;i++){
                                if(this.oldIds.indexOf(this.msgList[i].id)>-1){
                                    this.msgList.splice(i,1);
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
            getBannerList(){
                Vue.api.getBannerList({pageIndex:1,pageSize:10}).then((resp)=>{
                    if(resp.respCode=='2000'){
                        let data=JSON.parse(resp.respMsg);
                    }else{

                    }
                });
            },
            doWorship(type) {
                let typeText='';
                switch (type){
                    case 'flower':
                        typeText='鲜花';
                        break;
                    case 'candle':
                        typeText='香火';
                        break;
                    case 'oil':
                        typeText='香油';
                        break
                }
                let name='网友';
                let params={
                    token:this.token,
                    type:type,//"flower","candle","oil"
                    msg:name+'献上了'+typeText,
                }
                Vue.api.doWorship(params).then((resp)=>{
                    if(resp.respCode=='2000'){
                        let data=JSON.parse(resp.respMsg);
                        console.log('data:',data);
                        let newMsg={
                            isNew:true,
                            type:type,
                            token:params.token,
                            name:name,
                            gift:typeText,
                            timestamp:new Date().getTime(),
                            msg:params.msg
                        }
                        if(type=='flower'){
                            let temItem=this.flowerList.find((item,i)=>{
                                return !item.msg;
                            });
                            if(!temItem){
                                this.flowerList[0].msg=null;
                                temItem=this.flowerList[0];
                            }
                            this.flowerPosition={...temItem.position};
                            setTimeout(()=>{
                                this.flowerPosition=null;
                                this.addGift(newMsg);
                                this.showWord();
                            },2000);
                        }else if(type=='candle'){
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
                                this.showWord();
                            },1400);
                        }else if(type=='oil'){
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
                                this.showWord();
                            },1800);
                        }
                    }else{

                    }
                });
            },
            addGift:function (item) {
                if(item){
                    if(item.type=='flower'){
                        for(let j=0;j<this.flowerList.length;j++){
                            if(!this.flowerList[j].msg){
                                this.flowerList[j].msg=item;
                                break;
                            }
                        }
                    }else if(item.type=='candle'){
                        for(let j=0;j<this.incenseList.length;j++){
                            if(!this.incenseList[j].msg){
                                this.incenseList[j].msg=item;
                                break;
                            }
                        }
                    }else if(item.type=='oil'){
                        for(let j=0;j<this.gcandlestickList.length;j++){
                            if(!this.gcandlestickList[j].msg){
                                this.gcandlestickList[j].msg=item;
                                break;
                            }
                        }
                    }
                    let random=parseInt(Math.random()*300000);
                    item.startTime=new Date().getTime()+random;
                    this.oldIds.push(item.id);
                    this.barrageList.push(item);
                    this.infoData.totleWorshipCount++;
                }
            },
            findPosition:function (type) {

            },
            showWord:function () {
                this.selectedWord=null;
                clearTimeout(this.wordTimeOut);
                let index=parseInt(Math.random()*(this.wordList.length),10);
                this.selectedWord=this.wordList[index];
                this.wordTimeOut=setTimeout(()=>{
                    this.selectedWord=null;
                },10000)
            }
        },
        mounted () {
            this.token=this.$cookie.get('token');
            this.token=this.token?this.token:null;
            //
            for(let i=0;i<10;i++){
                let x=0;
                if(i<5){
                    x=58*i;
                }else{
                    x=380+58*i;
                }
                this.flowerList.push({position:{transform:'translate('+x+'px, 272px)'},msg:null});
            }
            //
            for(let i=0;i<3;i++){
                let y=0;
                let xDeviator=0;
                let xGapDeviator=434;
                switch (i){
                    case 0:
                        y=375;
                        xDeviator=25;
                        xGapDeviator=xGapDeviator+5;
                        break;
                    case 1:
                        y=415;
                        xDeviator=15;
                        xGapDeviator=xGapDeviator+15;
                        break;
                    case 2:
                        y=460;
                        xDeviator=5;
                        xGapDeviator=xGapDeviator+25;
                        break;
                }
                for(let j=0;j<12;j++){
                    let x=0;
                    if(j<6){
                        x=xDeviator+42*j;
                    }else{
                        x=xGapDeviator+42*j;
                    }
                    this.gcandlestickList.push({position:{transform:'translate('+x+'px, '+y+'px)',msg:null}})
                }
            }
            //
            for(let i=0;i<50;i++){
                let x=parseInt(Math.random()*(482+1)+218,10);
                let y=parseInt(Math.random()*(10+1)+422,10);
                this.incenseList.push({position:{transform:'translate('+x+'px, '+y+'px)',msg:null}})
            }
            //
            this.getWorshipInfo();
            setInterval(()=>{
                this.getWorshipInfo();
                if(this.barrageList.length>10){
                    this.barrageList.splice(10,this.barrageList.length-10);
                }
            },60000);
            //
            setInterval(()=>{
                if(this.msgList.length>0){
                    let item=this.msgList.pop();
                    this.addGift(item);
                }
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
                }
                this.counter++;
            },1000);
            //临时测试
            this.getBannerList();
        },
    }
</script>
