<template>
    <div id="app" v-cloak>
        <v-header></v-header>
        <div id="page-content">
            <router-view></router-view>
        </div>
        <v-footer></v-footer>
    </div>
</template>
<style lang="less" rel="stylesheet/less">
    @import "../static/css/main.css";
    @import "less/main";
    [v-cloak] { display: none }
</style>
<script>
    import Vue from 'vue'
    import vHeader from './components/common/Header.vue'
    import vFooter from './components/common/Footer.vue'

    export default {
        components:{
            vHeader,
            vFooter
        },
        data: function(){
            return {

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
            },
            deviceType:function (options) {
                options={};
                var isMobile=false;
                if ((navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i))) {
                    options.mobile&&options.mobile();
                    isMobile=true;
                }else{
                    options.pc&&options.pc();
                }
                return isMobile;
            }
        },
        mounted () {
            if(this.deviceType()){
                (function (doc, win) {
                    var docEl = doc.documentElement,
                        resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
                        isIOS = navigator.userAgent.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/),
                        recalc = function () {
                            var clientWidth = docEl.clientWidth;
                            var clientHeight = docEl.clientHeight;
                            if (!clientWidth) return;
                            if(clientWidth >= 750 ){
                                clientWidth = 750
                                doc.body.style.width = 750 + 'px'
                            }else{
                                doc.body.style.width = clientWidth + 'px'
                            }
                            doc.body.style.height = clientHeight + 'px'
                            docEl.style.fontSize = 100 * (clientWidth / 750) + 'px';
                            docEl.dataset.percent = 100 * (clientWidth / 750)
                        };
                    recalc();
                    doc.documentElement.classList.add('iosx' + win.devicePixelRatio)
                    if (!doc.addEventListener) return;
                    win.addEventListener(resizeEvt, recalc, false);
                })(document, window);
            }

        },
    }
</script>

