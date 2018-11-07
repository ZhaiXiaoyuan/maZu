<template>
    <div class="cm-page">
        <div class="cm-container page-content">
            <div class="introduce-panel">
                <div class="panel-content">
                    <div class="avatar">
                        <img :src="avatar" alt="">
                        <div class="avatar-mask"></div>
                    </div>
                    <div class="text-info">
                        <p class="title">妈祖文化</p>
                        <div class="desc">
                            <p>妈祖是中国南方以及东南亚一带信众所敬仰的海神，又称为天上圣母、天后、天后娘娘、天妃、天妃娘娘、湄洲娘妈等。她也是新加坡琼州天后宫内所敬拜的主神。</p>
                            <p>”有海水的地方就有华人，有华人的地方就有妈祖“，这句话丝毫不夸张，今天全世界有一亿多妈祖信徒。在新加坡、马来西亚、泰国.. <router-link :to="{ name: 'article',query:{type:'encyclopedia',contentType:'introduce'}}" class="cm-btn link-btn">查看全文>></router-link>.</p>

                        </div>
                      <!--  <span class="cm-btn handle-btn">联系我们</span>-->
                    </div>
                    <div class="gallery">
                        <el-carousel :interval="4000" type="card" height="120" indicator-position="none">
                            <el-carousel-item v-for="(item,index) in gallery" :key="index" :style="{background: 'url('+item.imgUrl+') no-repeat center',backgroundSize: 'cover'}">

                            </el-carousel-item>
                        </el-carousel>
                    </div>
                </div>
            </div>
            <div class="detail-panel">
                <div class="panel-hd">
                    <i class="icon encyclopedia-title-icon"></i>
                    <div class="line"></div>
                </div>
                <div class="panel-bd">
                    <ul class="entry-list">
                        <router-link tag="li" :to="{ name: 'article',query:{id:entry.id,type:'encyclopedia',contentType:'dynamic'}}" v-for="(entry,index) in entryList" :key="index" class="entry">
                            <div class="cover">
                                <img :src="basicConfig.coverBasicUrl+entry.cover">
                            </div>
                            <div class="text-info">
                                <p class="title">{{entry.headline}}</p>
                                <p class="desc">{{entry.summary}}</p>
                                <p class="time" style="margin-top: 20px;">{{entry.submitTime|formatDate('yyyy-MM-dd hh:mm')}}</p>
                            </div>
                        </router-link>
                    </ul>
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
                avatar:require('../images/encyclopedia/avatar.jpg'),

                gallery:[
                    {
                        imgUrl:require('../images/encyclopedia/g1.jpg'),
                    },
                    {
                        imgUrl:require('../images/encyclopedia/g2.jpg'),
                    },
                    {
                        imgUrl:require('../images/encyclopedia/g3.jpg'),
                    },
                ],

                pager:{
                    pageIndex:1,
                    pageSize:20,
                    total:0,
                    loading:false
                },
                keyword:null,
                entryList:[],
            }
        },
        methods: {
            getList:function (pageIndex) {
                this.pager.pageIndex=pageIndex?pageIndex:1;
                let params={
                    searchContent:'',
                    pageIndex:this.pager.pageIndex,
                    pageSize:this.pager.pageSize,
                    newsType:'mazuWorld',//associationNews、goddessPalace、mazuWorld
                    state:'published',//removed、published
                }
                Vue.api.getNewsList(params).then((resp)=>{
                    if(resp.respCode=='2000'){
                        let data=JSON.parse(resp.respMsg);
                        let list=data.associationNewsList;
                        list.reverse();
                        this.entryList=list;
                        this.pager.total=data.count;
                        console.log('this.entryList:',this.entryList);
                    }
                });
            },
        },
        mounted () {
            this.getList();
        },
    }
</script>
