<template>
    <div class="article">
        <div class="page-content">
            <div class="page-hd">
                <ul class="cm-history-block" v-if="type=='association'">
                    <router-link :to="{ name: 'association'}" tag="li" class="cm-btn">世界妈祖交流协会</router-link>
                    <li class="active" v-if="contentType=='dynamic'">动态详情</li>
                    <li class="active" v-if="contentType=='contact'">联系我们</li>
                    <li class="active" v-if="contentType=='member'">成员单位</li>
                </ul>
                <ul class="cm-history-block" v-if="type=='encyclopedia'">
                    <router-link :to="{ name: 'encyclopedia'}" tag="li" class="cm-btn">妈祖文化</router-link>
                    <li class="active" v-if="contentType=='introduce'">了解妈祖</li>
                    <li class="active" v-if="contentType=='dynamic'">动态详情</li>
                </ul>
            </div>
            <div class="page-bd">
                <div class="introduce-content" v-if="contentType=='introduce'">
                    <p style="font-size: 20px;color: #333;text-align: center;padding: 20px;">妈祖</p>
                    <p class="para">妈祖是中国民间影响最大的女神之一，福建、广东、台湾、东南亚等地尤为信奉。</p>
                    <p class="para">妈祖在历史上确有其人，姓林名默，于距今一千余年前的北宋建隆元年（960）诞生在福建莆田湄洲湾口的湄州屿，卒于宋太宗雍熙四年（987），终生未嫁。她的远祖曾做过唐朝的州刺史，父亲林愿为莆田都巡检。</p>
                    <p class="para">记载妈祖生平的大量文献资料中，传说神化成分很多，如她初生时，一个月没有啼哭；刚刚一周岁，见到诸神像，即摇动小手作叩拜状；五岁能诵《观音经》，十一岁能跳悦神舞蹈，再大一点儿，“以巫祝为事，能预知人祸福”。</p>
                    <p class="para">林默从小生在海边，水性极好，“长能乘席渡海，常乘云游于岛屿”，救助遇海难的商旅渔民，所以人们称她为神女或者龙女。她在不到二十七岁时，因海上救险，被台风卷去，人们不愿承认她遇难，而是认为她功德圆满升天为仙了，莆田一带的人们为了纪念她，建立了祀庙，俗称“海神庙”。</p>
                    <p class="para">林默死后更被传为海上保护神，几种书上都记载了同一则故事：宋徽宗宣和五年（1123），给事中路允迪奉旨出使高丽，他率领八艘大船航行在渤海之上，突遇大风暴，七艘大船不幸沉没。正当路允迪惊恐万分之际，一位神女忽然降临在船樯上，此后风浪再大船也没被倾覆。靠着神女的佑护，路允迪平安到达高丽。徽宗听说此事，亲赐林默祠匾一块，上书“顺济”二字。这是妈祖第一次得到朝廷褒封。自宣和以后，光两宋就先后敕封林默达九次，封号也从南宋光宗绍熙的“夫人”进爵为“妃”，元世祖时又进爵为“天妃”，清康熙时再进爵为“天后”。七百年来，帝王们对她的册封多达四十余次，妈祖的封号已经累积到五六十字，如“辅国护圣”“护国庇民”“宏仁善济”等。不仅民间祭祀妈祖，朝廷也派大臣礼祭，并载入国家祀典，各地纷纷兴建天后宫，沿海、沿江、沿河码头无不奉祀。</p>
                    <p class="para">明代陈侃在《使琉球录》记道，他出使的船长15丈，“舟后作黄屋二层，上安诏敕，尊君命也；中供天妃，顺民心也”，把妈祖放在与圣旨同等重要的位置。</p>
                    <p class="para">郑和下西洋是世界航海史上的伟大壮举，为国人所熟知，但是很少有人知道，每次出发以前，郑和等人都要祭祀妈祖，场面相当隆重。船中也供奉妈祖，遇海难、强盗时，必求妈祖保佑。返国后还要祭祀天妃，并建了天妃庙。</p>
                    <p class="para">明清时期由厦门通贩外国的商船上，人员编制中有专职香工一名，“朝夕焚香楮（纸）祀神”。一般中等船上也设有“正副值库二人，主大帆插花、天妃大神旗”，“香公一人，主天妃、诸水神座前油灯”，可见当时船员们对供奉妈祖的重视程度。</p>
                    <p class="para">澳门有句俗话：“先有妈阁，后有澳门。”妈阁即妈祖庙。澳门妈祖庙始建于明成化年间，距今已有五百余年，当时澳门还是一个荒凉的海湾，船民在此休息、祭神。现在澳门的英文名（Macao）就是“妈阁”的音译。</p>
                    <p class="para">香港最初也是船民停泊祭神之处，传说很久以前从海上飘来一只红香炉，泊在天后庙前，百姓认为天后显灵，于是这里被称做“红香炉港”，简称“红港”或“香港”。</p>
                    <p class="para">且不论历史上有无真事，澳门、香港与大陆沿海地区一样，有着漫长的妈祖信仰历史是毋庸置疑的。哪怕后来澳门、香港沦为西方列强的殖民地，也不能断裂信仰妈祖的传统。</p>
                    <p class="para">台湾是妈祖庙最密集的地区，全省有妈祖庙、天妃宫五六百座。北港镇的朝天宫宏伟壮观，香火极盛，是全台妈祖庙的“总庙”，每年前来烧香的有百万人以上。“妈祖”是闽方言，意思相当于北方的“奶奶”。按台湾人说法，行于海上，风浪危急，如果呼天妃、天后的话，神会冠袍齐毕后赶来；高呼妈祖的话，则神披发赶来，这样能争取时间。说法的背后表达的是民众对妈祖一词的亲切。</p>
                    <p class="para">在海外华人聚居地，都会有不同风格的天后宫，日本目前有一百余座妈祖庙，此外印度尼西亚、马来西亚、新加坡、菲律宾、越南、柬埔寨和泰国等东南亚国家也有妈祖的香火。她甚至还远渡重洋，落户加拿大、墨西哥、美国、巴西，欧洲的挪威、丹麦、法国也有她的身影。</p>
                    <p class="para">现在，就让我们从福建汀州妈祖圣诞会来看看妈祖信仰的盛况。妈祖圣诞时间为三月二十三日，天后宫内，自三月二十一至三月二十三安排三天作为圣诞庆典活动时间。从三月二十一开始，汀州城的老百姓就纷纷到天后宫为天上圣母娘娘祝寿了。祝寿者一般都送来“寿桃”和“寿面”，以及鱼、肉、鸡三牲和灯油。“寿桃”即包子，用圆盘堆成尖塔式高高的一盘；“寿面”是用生面堆成高高的尖塔状。寿桃和寿面都为半公斤重。还有人抬来满满一饭甑的饭，大约要二十斤大米。人们祭祀非常踊跃，往往供桌上的东西刚刚收下来，立刻又被后面的祭祀者摆得满满的，如此反复。</p>
                    <p class="para">人们还要在妈祖诞日前一天为她“暖寿”，完全是移植民间百姓的暖寿习俗，即由寿者的朋友、至亲在生日的前一天自发为寿翁举行的庆寿活动。来祭祀者都可以在天后宫参加寿宴。从三月二十一至三月二十三日，天后宫的前厅、中厅、两厢、天井中，摆开二十几张大圆桌，每桌坐十二人，可同时容纳两百余人吃饭。由早上开始，天后宫膳房内就忙碌起来，煮寿面、煎豆腐、做豆腐丸，素鸡、素肉、素鱼等各种素菜，不断地下锅、装盆，端上圆桌。来祭祀的百姓，祭祀完后就找个空位坐下来吃。一直到晚上，不停地煮，不停地吃，走了又来，来了又走，称为“流水席”。</p>
                    <p class="para">在为期三天的祭祀活动中，天后宫的戏台上即演三天大戏，主要剧目有：《白蛇传》《空城计》《三气周瑜》《打渔杀家》等。另外在唱戏的同时，天后宫内请有本地的“说书班”。说书班大概有十来个人，喇叭、管弦、锣鼓等各种乐器都有，边演奏边唱故事。表演也分生旦角色，只是演员从头至尾坐着演奏说唱，不走动表演，所以称“说书”。主要剧目有《麻姑献寿》《天官赐福》《陈姑赶船》等。此外，还有鼓手班演奏。“鼓手班”即民乐演奏队，在当地十分盛行，遍布每个乡村。当时那种锣鼓喧天、欢歌笑语的热闹景象可想而知了。而看戏的人踮脚鼓掌，熙熙攘攘，间有小孩在人群中穿梭嬉戏，则又是一番景象。</p>
                </div>
                <div class="contact-card" v-if="contentType=='contact'">
                    <div class="left-part">
                        <img :src="avatar" alt="">
                        <p class="title">世界妈祖交流协会</p>
                    </div>
                    <div class="right-part">
                        <p>手机：9731 4768</p>
                        <p>邮箱：global.mazu@gmail.com</p>
                        <p>电话：+65 6259 2565</p>
                        <p>地址：47 Beach Road, #06-03,
                            Kheng Chiu Building
                            Singapore 189683</p>
                    </div>
                </div>
                <div class="article-content" v-if="contentType=='dynamic'||contentType=='member'">
                    <div v-html="detail.content"></div>
                    <!--<p class="title" style="text-align: center;font-size: 24px;color: #f47023;">三喜三庆活动庆典</p>
                    <p class="sub-title" style="text-align: center;font-size: 18px;color: #f47023;margin-top: 10px;">2018年11月8日至10日</p>
                    <p class="block-title" style="font-size: 20px;color: #000;padding: 20px 0px;">活动日程</p>
                    <p>
                        <img :src='pic.a1'>
                    </p>
                    <p>
                        <img :src='pic.a2'>
                    </p>
                    <p class="block-title" style="font-size: 20px;color: #000;padding: 20px 0px;">活动特刊下载</p>
                    <p><a href="" style="text-align: center;font-size: 18px;color: #f47023;margin-top: 10px;text-decoration: underline;">点击这里下载互动特刊</a></p>-->
                </div>
            <!--    <div class="article-content">
                    <p class="title" style="text-align: center;font-size: 24px;color: #f47023;">世界宗教和谐暨首届妈祖文化节</p>
                    <p style="margin:0px auto;padding-top: 20px;">
                        <iframe src="https://drive.google.com/file/d/11-LcSfipdsaCr8fV33Y-EFi24Ywo1Zxi/preview" width="100%" height="480"></iframe>
                    </p>
                </div>-->
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
        .introduce-content{
            .para{
                text-indent: 2em;
                line-height: 24px;
            }
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
                flex:1;
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
                flex: 1.4;
                margin-left: 10px;
                font-size: 14px;
                color:#000;
                line-height: 32px;
            }
        }
        .article-content{
            padding: 40px 20px;
        }

        @media screen and(max-width: 1000px){
            .page-content{
                padding-top: 0.2rem;
                width: 100%;
                margin: 0px auto;
            }
            .cm-history-block{
                padding-left: 0.2rem;
            }
            .contact-card{
                margin: 1.6rem auto 0rem auto;
                background: url("../images/common/card-bg.png") no-repeat;
                width: 7.37rem;
                height: 4.03rem;
                background-size: 100% 100%;
                display: flex;
                padding: 0.8rem 0.3rem 0.3rem 0.3rem;
                .left-part{
                    text-align: center;
                    width: 45%;
                    img{
                        width: 1.6rem;
                        height: 1.6rem;
                    }
                    .title{
                        margin-top: 0.1rem;
                        font-size: 0.32rem;
                        color:#5c2507;
                    }
                }
                .right-part{
                    margin-left: 0.1rem;
                    font-size: 0.28rem;
                    color:#000;
                    line-height: 0.5rem;
                }
            }
            .article-content{
                padding: 0.4rem 0.3rem;
            }
            iframe{
                height: 4.6rem !important;
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
                avatar:require('../images/common/logo-icon.png'),
                id:null,
                pic:{
                    a1: require('../images/association/a1.jpg'),
                    a2: require('../images/association/a2.jpg'),
                },
                type:'association',//association,encyclopedia
                contentType:'dynamic',//dynamic,introduce

                detail:{},
            }
        },
        methods: {
            getNewsDetail:function (id) {
                Vue.api.getNewsDetail({id:this.id}).then((resp)=>{
                    if(resp.respCode=='2000'){
                        this.detail=JSON.parse(resp.respMsg);
                    }else{

                    }
                });
            },
            getMemberDetail:function (id) {
                Vue.api.getMemberDetail({id:this.id}).then((resp)=>{
                    if(resp.respCode=='2000'){
                        this.detail=JSON.parse(resp.respMsg);
                        console.log('this.detail:',this.detail);
                    }else{

                    }
                });
            },
        },
        mounted () {
            this.id=this.$route.query.id;
            this.type=this.$route.query.type;
            this.contentType=this.$route.query.contentType;
            if(this.contentType=='dynamic'){
                this.getNewsDetail(this.id);
            }else if(this.contentType=='member'){
                this.getMemberDetail(this.id);
            }
        },
    }
</script>
