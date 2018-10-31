<template>
    <div class="cm-page home">
        <div class="cm-container page-content">
            <div class="panel worship-panel">
                <div class="panel-hd">
                    <i class="icon title-icon worship-title-icon"></i>
                </div>
                <div class="panel-bd">
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
                    <div class="dialog-block">
                        <span>妈祖作为一个古代汉族民间的神祗，为何她的精神能被海内外、世界上这么多人认可、赞扬和崇敬呢？这里一个重要原因就是。</span>
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
    .home{
        .page-content{

        }
        .worship-title-icon{
            display: inline-block;
            background: url("../images/home/mazu-worship-title.png") no-repeat;
            width: 217px;
            height: 38px;
            background-size: 100% 100%;
        }
        .panel{
            .panel-hd{

            }
            .panel-bd{

            }
        }
        .worship-panel{
            margin-top: 20px;
            padding-bottom: 40px;
            .panel-hd{
                padding: 0px 40px;
                background: url("../images/common/panel-line.png") no-repeat bottom;
                width: 100%;
                background-size: auto auto;
            }
            .panel-bd{
                position: relative;
                background: url("../images/home/mazu-bg.jpg") no-repeat;
                margin: 10px auto 0px auto;
                width: 961px;
                height: 853px;
            }
            .number-block{
                position: absolute;
                top:0px;
                left: 10px;
                .row{
                    background: url("../images/home/counter-bg.png") no-repeat;
                    width: 170px;
                    height: 36px;
                    background-size: 100% 100%;
                    color: #59120b;
                    font-size: 12px;
                    padding: 15px 10px 0px 12px;
                    .strong{
                        font-size: 14px;
                        color: #e71719;
                        font-weight: bold;
                    }
                }
            }
            .data-block{
                position: absolute;
                top:10px;
                right: 10px;
                background: url("../images/home/data-bg.png") no-repeat;
                width: 130px;
                height: 79px;
                color: #59120b;
                font-size: 12px;
                line-height: 17px;
                padding: 13px 10px 10px 15px;
                .strong{
                    font-size: 14px;
                    color: #e71719;
                    font-weight: bold;
                }
            }
        }
        .barrage-block{
            position: absolute;
            background: url("../images/home/barrage-bg.png") no-repeat;
            width: 189px;
            height: 222px;
            left: 10px;
            bottom: 10px;
            padding: 10px 10px;
            .block-content{
                position: relative;
                overflow: hidden;
                width: 100%;
                height: 100%;
            }
            ul{
                position: absolute;
                left: 0px;
                bottom: 0px;
                li{
                    margin: 2px 0px;
                    display: flex;
                    align-items: center;
                    img{
                        width: 30px;
                        height: 30px;
                        border-radius: 50%;
                    }
                    .text{
                        padding-left: 5px;
                        font-size: 12px;
                        color: #d4d4d4;
                        .strong{
                            color: #ddbf6e;
                        }
                    }
                }
            }
        }
        .btn-block{
            position: absolute;
            left: 0px;
            right: 0px;
            z-index: 2;
            bottom: -40px;
            margin: auto;
            width: 380px;
            height: 182px;
            .block-content{
                position: relative;
                text-align: center;
                width: 100%;
                height: 100%;
                background: url("../images/home/counter.png") no-repeat center 88%;
                background-size: auto;
            }
            .btn-list{
                position: absolute;
                display: inline-block;
                width: 100%;
                left: 0px;
                bottom: 0px;
                >li{
                    display: inline-block;
                    &+li{
                        margin-left: 25px;
                    }
                }
            }
            .worship-icon{
                display: inline-block;
                background: url("../images/home/worship-icon.png") no-repeat;
                width: 135px;
                height: 49px;
                background-size: 100% 100%;
            }
            .flower-btn{
                background: url("../images/home/flower-btn.png") no-repeat;
                width: 59px;
                height: 137px;
                background-size: 100% 100%;
            }
            .incense-btn{
                background: url("../images/home/incense-btn.png") no-repeat;
                width: 67px;
                height: 112px;
                background-size: 100% 100%;
            }
            .candlestick-btn{
                background: url("../images/home/candlestick-btn.png") no-repeat;
                width: 42px;
                height: 128px;
                background-size: 100% 100%;
            }
        }
        .dialog-block{
            display: flex;
            align-items: center;
            justify-content: center;
            position: absolute;
            top: 128px;
            left: 495px;
            background: url("../images/home/dialog-panel.png") no-repeat;
            width: 328px;
            height: 123px;
            background-size: 100% 100%;
            font-size: 16px;
            color: #feeaab;
            padding: 10px 10px 10px 85px;
            line-height: 24px;
          /*  font-family: '隶书';*/
        }
        .flower-icon{
            display: inline-block;
            background: url("../images/home/flower-icon.png");
            width: 57px;
            height: 110px;
            background-size: 100% 100%;
        }
        .gift-item{
            opacity: 0;
            position: absolute;
            z-index: 1;
        }

        .sent-item{
            opacity: 0;
            transition: opacity 0.8s;
            &.active{
                opacity: 1;
            }
            &.new{
                transition: none !important;
            }
        }
        .flower-gift-item{
            transform:translate(369px, 759px);
            &.active{
                opacity: 1;
                transition: transform 2s ease;
            }
        }
        .incense-gift-item{
            transform:translate(464px, 635px);
            &.active{
                opacity: 1;
                transition: transform 1.4s ease;
            }
        }
        .gcandlestick-gift-item{
            transform:translate(559px, 780px);
            &.active{
                opacity: 1;
                transition: transform 1.8s ease;
            }
        }
        .flower-item{
            position: absolute;
            transform:translate(0px, 272px);
        }
        .candlestick-icon{
            display: inline-block;
            background: url("../images/home/candlestick-icon.png");
            width: 30px;
            height: 67px;
            background-size: 100% 100%;
        }
        .candlestick-item{
            position: absolute;
            transform:translate(0px, 375px)
        }
        .incense-icon{
            display: inline-block;
            background: url("../images/home/incense-icon.png");
            width: 61px;
            height: 223px;
            background-size: 100% 100%;
        }
        .incense-item{
            position: absolute;
            transform:translate(412px, 429px);
        }
    }
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
            }
        },
        methods: {
            getWorshipInfo() {
                Vue.api.getWorshipInfo({token:this.token}).then((resp)=>{
                    if(resp.respCode=='2000'){
                        let data=JSON.parse(resp.respMsg);
                        //
                        data.totleWorshipCount=data.totleWorshipCount-150;
                        data.totleFlowerCount=data.totleFlowerCount-50;
                        data.totleCandleCount=data.totleCandleCount-50;
                        data.totleCandleCount=data.totleOliCount-50;
                        this.infoData=data;
                        //
                        //

                        this.msgList=data.msgList.reverse();
                        console.log('this.infoData:',this.infoData);
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
        },
    }
</script>
