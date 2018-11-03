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
                        <p class="title">世界妈祖交流协会</p>
                        <div class="desc">
                            妈祖，以中国东南沿海为中心的海神信仰，又称天上圣母、天等信佑妈祖，以中国东南沿海为中心的海神信仰，又称天上圣母、以中国为中心的海神天等信佑 妈祖，以中国东南沿海为中心的海神信仰，又称天上圣母、天等信佑妈祖，以中国东南沿海为中心的海神信仰...
                            <span class="cm-btn link-btn">查看全文>></span>
                        </div>
                        <span class="cm-btn handle-btn">联系我们</span>
                    </div>
                    <div class="gallery">
                        <el-carousel :interval="4000" type="card" height="120" indicator-position="none">
                            <el-carousel-item v-for="item in 6" :key="item">

                            </el-carousel-item>
                        </el-carousel>
                    </div>
                </div>
            </div>
            <div class="detail-panel">
                <div class="panel-hd">
                    <i class="icon association-title-icon"></i>
                    <div class="line"></div>
                </div>
                <div class="panel-bd">
                    <ul class="entry-list">
                       <li class="entry">
                           <div class="cover">
                               <img alt="">
                           </div>
                           <div class="text-info">
                               <p class="title">妈祖协会举办大型妈祖</p>
                               <p class="desc">大家都知道泉州有十八景，这十八景都是经过泉州人民推选出来的，都有着古老的文化历史，特别具有泉州的特色。泉州是一座历史文化古城，里面的历史文化建筑保存的非常的多。而这十八景就是泉州有名的历史人文景点和自然景点更泉州是一座历史.泉州是一座历史泉州是一座历史，文景点和自然景点更泉州是一座历史.泉州是一座历史泉州是一座历史是一座历史.泉州是一座历史泉州是一座历...</p>
                               <p class="time">2018-10-01</p>
                           </div>
                       </li>
                        <li class="entry">
                            <div class="cover">
                                <img alt="">
                            </div>
                            <div class="text-info">
                                <p class="title">妈祖协会举办大型妈祖</p>
                                <p class="desc">大家都知道泉州有十八景，这十八景都是经过泉州人民推选出来的，都有着古老的文化历史，特别具有泉州的特色。泉州是一座历史文化古城，里面的历史文化建筑保存的非常的多。而这十八景就是泉州有名的历史人文景点和自然景点更泉州是一座历史.泉州是一座历史泉州是一座历史，文景点和自然景点更泉州是一座历史.泉州是一座历史泉州是一座历史是一座历史.泉州是一座历史泉州是一座历...</p>
                                <p class="time">2018-10-01</p>
                            </div>
                        </li>
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
                avatar:require('../images/association/avatar.png'),
            }
        },
        methods: {

        },
        mounted () {

        },
    }
</script>
