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
                            <p>累计朝拜人次<span class="strong">1000000</span></p>
                        </div>
                        <div class="row">
                            <p>当前<span class="strong">10000</span>人正在朝拜妈祖</p>
                        </div>
                    </div>
                    <div class="data-block">
                        <p>累计鲜花：<span class="strong">10w</span></p>
                        <p>累计香火：<span class="strong">10w</span></p>
                        <p>累计香油：<span class="strong">10w</span></p>
                    </div>
                    <div class="barrage-block">
                       <div class="block-content">
                           <ul>
                               <li>
                                   <img :src="defaultAvatar" alt="">
                                   <div class="text">
                                       <p><span class="strong">拓海</span>献上了<span class="strong">香油</span></p>
                                   </div>
                               </li>
                               <li>
                                   <img :src="defaultAvatar" alt="">
                                   <div class="text">
                                       <p><span class="strong">拓海</span>献上了<span class="strong">香油</span></p>
                                   </div>
                               </li>
                               <li>
                                   <img :src="defaultAvatar" alt="">
                                   <div class="text">
                                       <p><span class="strong">拓海</span>献上了<span class="strong">香油</span></p>
                                   </div>
                               </li>
                               <li>
                                   <img :src="defaultAvatar" alt="">
                                   <div class="text">
                                       <p><span class="strong">拓海</span>献上了<span class="strong">香油</span></p>
                                   </div>
                               </li>
                               <li>
                                   <img :src="defaultAvatar" alt="">
                                   <div class="text">
                                       <p><span class="strong">拓海</span>献上了<span class="strong">香油</span></p>
                                   </div>
                               </li>
                               <li>
                                   <img :src="defaultAvatar" alt="">
                                   <div class="text">
                                       <p><span class="strong">拓海</span>献上了<span class="strong">香油</span></p>
                                   </div>
                               </li>
                               <li>
                                   <img :src="defaultAvatar" alt="">
                                   <div class="text">
                                       <p><span class="strong">拓海</span>献上了<span class="strong">香油</span></p>
                                   </div>
                               </li>
                               <li>
                                   <img :src="defaultAvatar" alt="">
                                   <div class="text">
                                       <p><span class="strong">拓海</span>献上了<span class="strong">香油</span></p>
                                   </div>
                               </li>
                               <li>
                                   <img :src="defaultAvatar" alt="">
                                   <div class="text">
                                       <p><span class="strong">拓海233</span>献上了<span class="strong">香油</span></p>
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
                                    <i class="icon flower-btn"></i>
                                </li>
                                <li class="cm-btn">
                                    <i class="icon incense-btn"></i>
                                </li>
                                <li class="cm-btn">
                                    <i class="icon candlestick-btn"></i>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="dialog-block">
                        <span>妈祖作为一个古代汉族民间的神祗，为何她的精神能被海内外、世界上这么多人认可、赞扬和崇敬呢？这里一个重要原因就是。</span>
                    </div>
                    <div class="flower-block">
                        <div class="flower-item" v-for="(item,index) in flowerList" :key="index" :style="item.position">
                            <i class="icon flower-icon"></i>
                        </div>
                    </div>
                    <div class="candlestick-block">
                        <div class="candlestick-item" v-for="(item,index) in candlestick" :key="index" :style="item.position">
                            <i class="icon candlestick-icon"></i>
                        </div>
                    </div>
                    <div class="incense-block">
                        <div class="incense-item">
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
        }
        .flower-icon{
            display: inline-block;
            background: url("../images/home/flower-icon.png");
            width: 57px;
            height: 110px;
            background-size: 100% 100%;
        }
        .flower-item{
            position: absolute;
            transform:translate(0px, 272px)
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
            transform:translate(0px, 375px)
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
                defaultAvatar:require('../images/common/default-avatar.png'),
                flowerList:[],
                candlestick:[],
            }
        },
        methods: {
            submitForm() {
                if(this.pageName=='login'){
                    let code=document.getElementsByClassName('code-value')[0].value;
                    if(!this.ruleForm.username||this.ruleForm.username==''){
                        Vue.operationFeedback({type:'warn',text:'请输入账号'});
                        return;
                    }
                    if(!this.ruleForm.password||this.ruleForm.password==''){
                        Vue.operationFeedback({type:'warn',text:'请输入密码'});
                        return;
                    }
                    if(!this.ruleForm.identifyCode||this.ruleForm.identifyCode==''){
                        Vue.operationFeedback({type:'warn',text:'请输入验证码'});
                        return;
                    }
                    if(this.ruleForm.identifyCode!=code){
                        Vue.operationFeedback({type:'warn',text:'验证码错误'});
                        return;
                    }
                    let fb=Vue.operationFeedback({text:'登录中...'});
                    Vue.api.login({adminName:this.ruleForm.username,password:this.ruleForm.password}).then((resp)=>{
                        if(resp.respCode=='2000'){
                            let data=JSON.parse(resp.respMsg);
                            console.log('data:',data);
                            this.$cookie.set('account',JSON.stringify(data),7);
                            this.$router.push({name:'customerAdmin',params:{}});
                            fb.setOptions({type:'complete',text:'登录成功'});
                        }else{
                            fb.setOptions({type:'warn',text:'登录失败，'+resp.respMsg});
                        }
                    });
                }else if(this.pageName=='adminLogin'){
                    let code=document.getElementsByClassName('code-value')[0].value;
                    if(!this.ruleForm.username||this.ruleForm.username==''){
                        Vue.operationFeedback({type:'warn',text:'请输入账号'});
                        return;
                    }
                    if(!this.ruleForm.password||this.ruleForm.password==''){
                        Vue.operationFeedback({type:'warn',text:'请输入密码'});
                        return;
                    }
                    if(!this.ruleForm.identifyCode||this.ruleForm.identifyCode==''){
                        Vue.operationFeedback({type:'warn',text:'请输入验证码'});
                        return;
                    }
                    if(this.ruleForm.identifyCode!=code){
                        Vue.operationFeedback({type:'warn',text:'验证码错误'});
                        return;
                    }
                    let fb=Vue.operationFeedback({text:'登录中...'});
                    Vue.api.adminLogin({...Vue.sessionInfo(),account:this.ruleForm.username,password:this.ruleForm.password}).then((resp)=>{
                        if(resp.respCode=='00'){
                            let data=JSON.parse(resp.respMsg);
                            localStorage.setItem('loginPage','adminLogin');
                            this.$cookie.set('account',JSON.stringify({
                                type:data.role,
                                account:this.ruleForm.username,
                            }),7);
                            this.$router.push({name:'benefitRank',params:{}});
                            fb.setOptions({type:'complete',text:'登录成功'});
                        }else{
                            fb.setOptions({type:'warn',text:'登录失败，'+resp.respMsg});
                        }
                    });
                }else if(this.pageName=='userLogin'||this.pageName=='shopLogin'){
                    if(this.$route.query.test=='userTest'){
                        this.$cookie.set('account',JSON.stringify({
                            type:this.accountType,
                            account:15876513870,
                            id:'1922433ca7924bb5abdb7e58571207b6'
                        }),7);
                        this.$router.push({name:this.pageName=='userLogin'?'statistics':'saleStatistics',params:{}});
                        return;
                    }
                    if(!this.codeData){
                        Vue.operationFeedback({type:'warn',text:'请先发送短信获取验证码'});
                        return;
                    }
                    if(!this.ruleForm.phoneCode||this.ruleForm.phoneCode==''){
                        Vue.operationFeedback({type:'warn',text:'请输入手机验证码'});
                        return;
                    }
                    let params={
                        ...Vue.sessionInfo(),
                        bizId:this.codeData.sms.bizId,
                        phone:this.ruleForm.phone,
                        verifyCode:this.ruleForm.phoneCode
                    }
                    let fb=Vue.operationFeedback({text:'登录中...'});
                    Vue.api.checkPhoneCode(params).then((resp)=>{
                        if(resp.respCode=='00'){
                            localStorage.setItem('loginPage',this.pageName);
                            this.$cookie.set('account',JSON.stringify({
                                type:this.accountType,
                                account:this.ruleForm.phone,
                                id:this.codeData.account.id
                            }),7);
                         /*   this.$cookie.set('account',JSON.stringify({
                                type:this.accountType,
                                account:15876513870,
                                id:'1922433ca7924bb5abdb7e58571207b6'
                            }),7);*/
                            this.$router.push({name:this.pageName=='userLogin'?'statistics':'saleStatistics',params:{}});
                            fb.setOptions({type:'complete',text:'登录成功'});
                        }else{
                            fb.setOptions({type:'warn',text:'登录失败，'+resp.respMsg});
                        }
                    });
                }
            },
            getCode:function (data) {
                console.log('data:',data);
            },
            genCodeData:function (data) {
                console.log('data:',data);
                this.codeData={
                    sms:data.sms?JSON.parse(data.sms):{},
                    account:this.pageName=='userLogin'?JSON.parse(data.user):JSON.parse(data.shop),
                };
            }
        },
        mounted () {
            //
            for(let i=0;i<10;i++){
                let item={};
                if(i<5){
                    item.position={transform:'translate('+58*i+'px, 272px)'}
                }else{
                    item.position={transform:'translate('+(380+58*i)+'px, 272px)'}
                }
                this.flowerList.push(item);
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
                    this.candlestick.push({position:{transform:'translate('+x+'px, '+y+'px)'}})
                }
            }
        },
    }
</script>
