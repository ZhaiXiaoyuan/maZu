<template>
    <div class="header">
        <div class="cm-container header-content">
            <i class="icon logo-icon"></i>
            <ul class="nav-list">
                <router-link tag="li" :to="{ name: 'home'}" class="cm-btn" :class="{'active':pageName=='home'}">首页</router-link>
                <router-link tag="li" :to="{ name: 'college'}"  class="cm-btn" :class="{'active':pageName=='college'}">课程学院</router-link>
                <router-link tag="li" :to="{ name: 'association'}" class="cm-btn" :class="{'active':pageName=='association'}">世界妈祖交流协会</router-link>
                <router-link tag="li" :to="{ name: 'encyclopedia'}" class="cm-btn" :class="{'active':pageName=='encyclopedia'}">妈祖文化</router-link>
            </ul>
        </div>
    </div>
</template>
<style lang="less" rel="stylesheet/less" scoped>
    .header{
        position: fixed;
        z-index: 200;
        top:0px;
        left: 0px;
        height: 50px;
        width: 100%;
        background: url("../../images/common/header.jpg") repeat-x;
        .header-content{
            position: relative;
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
        .nav-list{
            display: inline-block;
            height: 100%;
            li{
                display: inline-block;
                height: 100%;
                padding: 0px 20px;
                line-height: 50px;
                font-size: 18px;
                color: #000;
                font-family: '隶书';
                color: #000;
                &.active{
                    background: url("../../images/common/nav-active-icon.png") no-repeat center;
                    color: #fff7e1;
                    background-size: 100% 26px;
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
            }
        },
        watch:{
            '$route': function(to, from) {
                this.pageName=this.$route.name;
            },
        },
        methods:{

        },
        created(){
            //
            this.pageName=this.$route.name;
            console.log('this.pageName:',this.pageName);
        }
    }
</script>
