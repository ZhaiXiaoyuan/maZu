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
                      <!-- <li class="entry">
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
                        </li>-->
                    </ul>
                </div>
            </div>
        </div>

        <el-dialog title="温馨提示" :visible.sync="modalFlag" v-if="modalFlag" width="500px">
            <div class="dialog-body" style="min-height: 100px;">
                <p class="cm-no-content">功能开发中，敬请期待</p>
            </div>
            <div slot="footer" class="dialog-footer">
                <el-button type="primary" @click="modalFlag=false">知道了</el-button>
            </div>
        </el-dialog>
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
                modalFlag:true,
            }
        },
        methods: {

        },
        mounted () {

        },
    }
</script>
