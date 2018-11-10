<template>
    <div class="header" id="header" :class="{'active':showMenu}">
        <div class="cm-container header-content">
            <i class="icon logo-icon"></i>
            <ul class="nav-list">
                <li class="cm-btn" @click="go('home')" :class="{'active':pageName=='home'}"><span>首页</span></li>
                <li class="cm-btn" @click="go('association')" :class="{'active':pageName=='association'}"><span>世界妈祖交流协会</span></li>
                <li class="cm-btn" @click="go('encyclopedia')" :class="{'active':pageName=='encyclopedia'}"><span>妈祖文化</span></li>
                <li class="cm-btn" @click="go('college')" :class="{'active':pageName=='college'}"><span>课程学院</span></li>
            </ul>
            <i class="menu-icon" @click="showMenu=!showMenu"></i>
        </div>
    </div>
</template>
<style lang="less" rel="stylesheet/less">
    .header{
        position: fixed;
        z-index: 500;
        top:0px;
        left: 0px;
        height: 50px;
        width: 100%;
        background: url("../../images/common/header.jpg");
        transition: top 0.8s;
        overflow: hidden;
        border-bottom: 1px solid #cdc29c;
        .header-content{
            position: relative;
            z-index: 200;
            height: 100%;
            text-align: center;
        }
        .icon{
            position: absolute;
            top:0px;
            left: 0px;
            bottom: 0px;
            margin: auto;
        }
        .menu-icon{
            display: none;
            position: absolute;
            top:0.2rem;
            right: 0.2rem;
            background: url("../../images/common/menu-iocn.png") no-repeat;
            width: 0.6rem;
            height: 0.6rem;
            background-size: 100% 100%;
            &:active{
                transform: scale(0.95);
            }
        }
        .nav-list{
            position: relative;
            z-index: 200;
            display: inline-block;
            height: 100%;
            li{
                display: inline-block;
                height: 100%;
                line-height: 50px;
                font-size: 18px;
                color: #000;
                font-family: 'LiSu';
                color: #000;
                span{
                    padding: 10px 20px;
                }
                &.active{
                   span{
                       background: url("../../images/common/nav-active-icon.png") no-repeat center;
                       color: #fff7e1;
                       background-size: 100% 26px;
                   }
                }
            }
        }
    }
    @media screen and(max-width: 1000px){
        .header{
            height: auto;
            min-height: 1rem;
            overflow: visible;
            .menu-icon{
                display: inline-block;
            }
            .logo-icon{
                position: absolute;
                top:0.1rem;
                left: 0.2rem;
                bottom: auto;
                margin: auto;
            }
            .nav-list{
                position: absolute;
                top:1rem;
                left: 0rem;
                display: block;
                width: 100%;
                height: 0rem;
                transition: height 0.3s;
                overflow: hidden;
                background: url("../../images/common/header.jpg");
                li{
                    width: 100%;
                    float: left;
                    clear: both;
                    display: inline-block;
                    height: 0.88rem;
                    padding: 0px 0.2rem;
                    line-height: 0.88rem;
                    font-size: 0.36rem;
                    color: #000;
                    font-family: 'LiSu';
                    color: #000;
                    border-bottom: 1px solid #cdc29c;
                    &:last-child{
                        border-bottom: none;
                    }
                    &.active{

                    }
                }
            }
            &.active{
                .nav-list{
                    height: 3.54rem;
                    box-shadow: 0px 3px 5px rgba(0,0,0,0.2);
                }
            }
        }
    }
</style>
<script>
    import Vue from 'vue'
    import bus from '../common/bus';
    export default {
        data() {
            return {
                pageName:'home',
                collapse: false,
                name: 'linxin',
                accountInfo:{},
                showMenu:false,
            }
        },
        watch:{
            '$route': function(to, from) {
                this.pageName=this.$route.name;
            },
        },
        methods:{
            go:function (page) {
                this.showMenu=false;
                this.$router.push({name:page});
            }
        },
        created(){
            //
            this.pageName=this.$route.name;
            //
        }
    }
</script>
