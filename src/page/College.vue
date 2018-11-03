<template>
    <div class="cm-page">
        <div class="cm-container page-content">
            <div class="introduce-panel">
                <div class="panel-content">
                    <div class="avatar">
                        <img :src="avatar" alt="">
                        <div class="avatar-mask"></div>
                    </div>
                    <div class="text-info" style="width: 80%;">
                        <p class="title">课程学院</p>
                        <div class="desc">
                            琼南与新州相界，吾乡懋迁此地者；货物辐辏，商旅云集。旧有会馆祀天后圣母，因岁久倾圯，字向不合，签议重建於兹。澜水迥环，壮襟连之体格；秀峰耸拔，卓笔势于云霄；焕然重新，规模式廓，以今冬落成，不远千里，驰书乞序於余，余以吾乡质朴，颇近古风俗，茂美不侈繁华。所愿服贾来兹者，岁时荐馨，敦崇乡谊，谨身节用，以养父母，每当会集时，与亲旧叙离阔，陈说桑梓故事，以为抚掌之资，至足乐也。
                            <span class="cm-btn link-btn">查看全文>></span>
                        </div>
                        <span class="cm-btn handle-btn">联系我们</span>
                    </div>
                </div>
            </div>
            <div class="detail-panel">
                <div class="panel-hd">
                    <ul class="tab-list">
                        <li class="active">所有课程</li>
                    </ul>
                    <div class="line"></div>
                </div>
                <div class="panel-bd">
                    <ul class="entry-list">
                       <li class="entry">
                           <div class="cover">
                               <img alt="">
                           </div>
                           <div class="text-info">
                               <p class="title">妈祖朝拜正确教程</p>
                               <p class="sub-title">讲师：李先生</p>
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
                avatar:require('../images/college/avatar.jpg'),
            }
        },
        methods: {

        },
        mounted () {

        },
    }
</script>
