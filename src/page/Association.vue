<template>
    <div class="cm-page">
        <div class="cm-container page-content">
            <div class="introduce-panel">
                <div class="panel-content">
                    <div class="gallery">
                        <el-carousel :interval="4000" type="card" height="120" indicator-position="none">
                            <el-carousel-item v-for="(item,index) in gallery" :key="index":style="{background: 'url('+item.imgUrl+') no-repeat center',backgroundSize: 'cover'}">
                                <div style="width: 100%;height: 100%;" @click="viewPic(index)"></div>
                            </el-carousel-item>
                        </el-carousel>
                    </div>
                    <div class="avatar">
                        <img :src="avatar" alt="">
                        <div class="avatar-mask"></div>
                    </div>
                    <div class="text-info">
                        <p class="title">世界妈祖交流协会</p>
                        <div class="desc">
                            <p>协会的宗旨</p>
                            <p>1、 弘扬妈祖文化及妈祖大爱，立德，行善的精神.</p>
                            <p>2、 促进与加强世界各地妈祖宫庙及妈祖团体的联系及友好合作。</p>
                            <p>3、 集中各地妈祖宫庙及妈祖团体的力量，集人力，物力，财力资源从事妈祖宫庙建设，妈祖信仰及文化弘扬 活动。</p>
                        <!--    <span class="cm-btn link-btn">查看全文>></span>-->
                        </div>
                        <router-link :to="{ name: 'article',query:{type:'association',contentType:'contact'}}" class="cm-btn handle-btn">联系我们</router-link>
                    </div>
                </div>
            </div>
            <div class="detail-panel">
                <div class="panel-hd">
                    <ul class="tab-list">
                        <li :class="{'active':pageType=='member'}" @click="pageType='member'">成员</li>
                        <li :class="{'active':pageType=='rule'}"  @click="pageType='rule'">章程</li>
                        <li :class="{'active':pageType=='dynamic'}"  @click="pageType='dynamic'">动态</li>
                    </ul>
                    <div class="line"></div>
                </div>
                <div class="panel-bd" v-if="pageType=='member'">
                    <div class="member-content">
                        <div class="apply">
                            <div class="cm-btn handle-btn" @click="applyModalFlag=true">申请入会</div>
                            <el-dialog title="申请入会" :visible.sync="applyModalFlag" v-if="applyModalFlag" width="500px">
                                <div class="dialog-body" style="min-height: 80px;">
                                    <p style="font-size: 18px;">请发送邮件到邮箱global.mazu.public@gmail.com</p>
                                </div>
                                <div slot="footer" class="dialog-footer">
                                    <el-button type="primary" @click="applyModalFlag=false">关闭</el-button>
                                </div>
                            </el-dialog>
                        </div>
                        <div class="block">
                            <div class="block-hd">成员单位：</div>
                            <div class="block-bd">
                                <div class="member-list" v-for="(entry,index) in memberList" :key="index">
                                    <div class="list-hd">
                                        {{entry.regionName}}
                                    </div>
                                    <div class="list-bd">
                                        <ul>
                                            <li v-for="(item,i) in entry.subList" :key="i" :class="{'active':item.content=='true'}" @click="toMember(item)">
                                                <span class="index">{{i+1}}</span>{{item.name}}
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="block">
                            <div class="block-hd">下载成员单位资料</div>
                            <div class="block-bd">
                                <a href="https://pan.baidu.com/s/1aHDOZ3HGboqZxilwOjooNQ" target="_blank" class="cm-btn link-btn">世界妈祖协会成员单位.pdf</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="panel-bd" v-if="pageType=='rule'">
                    <p class="cm-no-content">
                        暂无内容
                    </p>
                </div>
                <div class="panel-bd" v-if="pageType=='dynamic'">
                    <ul class="entry-list">
                       <router-link tag="li" :to="{ name: 'article',query:{id:entry.id,type:'association',contentType:'dynamic'}}" v-for="(entry,index) in entryList" :key="index" class="entry">
                           <div class="cover">
                               <img :src="basicConfig.coverBasicUrl+entry.cover">
                           </div>
                           <div class="text-info">
                               <p class="title">{{entry.headline}}</p>
                               <p class="desc">{{entry.summary}}</p>
                               <p class="time">{{entry.submitTime|formatDate('yyyy-MM-dd hh:mm')}}</p>
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
                avatar:require('../images/common/logo-icon.png'),
                pageType:'dynamic',//member,rule,dynamic,
                memberList:[],
                applyModalFlag:false,

                gallery:[
                  /*  {
                        imgUrl:require('../images/association/g1.jpg'),
                    },
                    {
                        imgUrl:require('../images/association/g2.jpg'),
                    },
                    {
                        imgUrl:require('../images/association/g3.jpg'),
                    },
                    {
                        imgUrl:require('../images/association/g4.jpg'),
                    },
                    {
                        imgUrl:require('../images/association/g5.jpg'),
                    }*/
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
            getMemberList:function () {
                let params={
                    regionCode:'',
                    pageIndex:1,
                    pageSize:200,
                }
                Vue.api.getMemberList(params).then((resp)=>{
                    if(resp.respCode=='2000'){
                        let data=JSON.parse(resp.respMsg);
                      /*  console.log('data:',data);*/
                        let list=data.memberOrganizationList;
                        function compare(key){
                            return function(a,b){
                                var value1 = a[key];
                                var value2 = b[key];
                                return value1 - value2;
                            }
                        }
                        list=list.sort(compare('regionCode'));
                        let curCode='';
                        let subList=[];
                        list.forEach((item,i)=>{
                            if(curCode!=item.regionCode){
                                curCode=item.regionCode;
                                subList=[item];
                                this.memberList.push({
                                    regionCode:item.regionCode,
                                    regionName:item.regionName,
                                    subList:subList
                                })
                            }else{
                                subList.push(item);
                            }
                        });

                    }
                });
            },
            getList:function (pageIndex) {
                this.pager.pageIndex=pageIndex?pageIndex:1;
                let params={
                    searchContent:'',
                    pageIndex:this.pager.pageIndex,
                    pageSize:this.pager.pageSize,
                    newsType:'associationNews',//associationNews、goddessPalace、mazuWorld
                    state:'published',//removed、published
                }
                Vue.api.getNewsList(params).then((resp)=>{
                    if(resp.respCode=='2000'){
                        let data=JSON.parse(resp.respMsg);
                        let list=data.associationNewsList;
                        this.entryList=list;
                        this.pager.total=data.count;
                    }
                });
            },
            toMember:function (item) {
                if(item.content!='true'){
                    return false;
                }
                this.$router.push({ name: 'article',query:{id:item.id,type:'association',contentType:'member'}});
            },
            getImgList:function () {
                Vue.api.getPhotoAlbumInfo({name:'协会相册'}).then((resp)=>{
                    if(resp.respCode=='2000'){
                        let detail=JSON.parse(resp.respMsg);
                        let list=JSON.parse(detail.imageList);
                        list.forEach((item,i)=>{
                            this.gallery.push({
                                name:item,
                                imgUrl:Vue.tools.basicConfig.coverBasicUrl+item
                            })
                        });
                      /*  this.viewPic(0);*/
                    }else{

                    }
                });
            },
            viewPic:function (index) {
                this.viewPicModal({index:index,imgList:this.gallery});
            }
        },
        mounted () {
            this.getMemberList();
            this.getList();
            this.getImgList();
        },
    }
</script>
