<template>
    <div class="article">
        <div class="page-content">
            <div class="page-hd">
                <ul class="cm-history-block">
                    <li>协会</li>
                    <li class="active">协会详情</li>
                </ul>
            </div>
            <div class="page-bd">
                <div class="contact-card">
                    <div class="left-part">
                        <img alt="">
                        <p class="title">世界妈祖交流会</p>
                    </div>
                    <div class="right-part">
                        <p>手机：</p>
                        <p>邮箱：</p>
                        <p>电话：</p>
                        <p>地址：</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="less" rel="stylesheet/less">
    .article{
        .page-content{
            padding-top: 20px;
            width: 780px;
            margin: 0px auto;
        }
        .page-hd{
            border-bottom: 1px solid #cdc29c;
        }
        .contact-card{
            margin: 80px auto 0px auto;
            background: url("../images/common/card-bg.png") no-repeat;
            width: 461px;
            height: 252px;
            background-size: 100% 100%;
            display: flex;
            padding: 40px 20px 20px 20px;
            .left-part{
                text-align: center;
                width: 45%;
                img{
                    width: 120px;
                    height: 120px;
                }
                .title{
                    margin-top: 10px;
                    font-size: 20px;
                    color:#5c2507;
                }
            }
            .right-part{
                margin-left: 10px;
                font-size: 14px;
                color:#000;
                line-height: 32px;
            }
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

            }
        },
        methods: {

        },
        mounted () {

        },
    }
</script>
