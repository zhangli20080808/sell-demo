<template>
    <div class="content_wrapper container ">

     <div class="row">
       <!-- 左侧 -->
       <div class="content-left col-md-3 col-xs-3">
         <div class="panel panel-default">
          <div class="panel-heading">
              <h3 class="panel-title">全部产品</h3>
          </div>
          <div class="panel-body">
            <div v-for="product in productList">
              <h5>{{ product.title}}</h5>
              <ul>
                <li v-for="item in product.list" class="item">
                  <a :href="item.url" class="">{{ item.name }}</a>
                  <span v-if="item.hot" class="hot-tag">HOT</span>
                </li>
              </ul>
              <!-- <div v-if="!product.last" class="hr"></div> -->
            </div>
         </div>
        </div>

        <div class="panel panel-default">
          <div class="panel-heading">
            <h5 class="panel-title">最新消息</h5>
          </div>
          <div class="panel-body">
            <ul>
              <li v-for="item in newsList" class="item">
                <a :href="item.url" class="new-item">{{ item.title }}</a>
              </li>
            </ul>
          </div>
        </div>

        </div>
        <!-- 右侧 -->
        <div class="content-right col-md-9 col-xs-9">
          <!-- slides -->
          <slides :slides="slides" :time="slideSpeed" @onchange="doSomething"></slides>
          <div class="content-list index-board-list">
            <div class="row">
              <div
              class="col-md-6 index-board-item"
              v-for="(item, index) in boardList">
                <div class="index-board-item-inner" >
                 <h2>{{ item.title }}</h2>
                 <p>{{ item.description }}</p>
                 <div class="index-board-button">
                   <router-link class="button" :to="{path: 'detail/' + item.toKey}">立即购买</router-link>
                 </div>
               </div>
              </div>
            </div>
          </div>
        </div>
      </div>
     </div>
</template>

<script>
import slides from '@/components/slides'
export default {
  name: 'hello',
  data () {
    return {
      slideSpeed: 2000,
      newsList:{},
      boardList: [
       {
         title: '开放产品',
         description: '开放产品是一款开放产品',
         id: 'car',
         toKey: 'analysis',
         saleout: false
       },
       {
         title: '品牌营销',
         description: '品牌营销帮助你的产品更好地找到定位',
         id: 'earth',
         toKey: 'count',
         saleout: false
       },
       {
         title: '使命必达',
         description: '使命必达快速迭代永远保持最前端的速度',
         id: 'loud',
         toKey: 'forecast',
         saleout: true
       },
       {
         title: '勇攀高峰',
         description: '帮你勇闯高峰，到达事业的顶峰',
         id: 'hill',
         toKey: 'publish',
         saleout: false
       }
     ],
      productList: {
        pc: {
          title: 'PC产品',
          list: [
            {
              name: '数据统计',
              url: 'http://starcraft.com'
            },
            {
              name: '数据预测',
              url: 'http://warcraft.com'
            },
            {
              name: '流量分析',
              url: 'http://overwatch.com',
              hot: true
            },
            {
              name: '广告发布',
              url: 'http://hearstone.com'
            }
          ]
        },
        app: {
          title: '手机应用类',
          last: true,
          list: [
            {
              name: '91助手',
              url: 'http://weixin.com'
            },
            {
              name: '产品助手',
              url: 'http://twitter.com',
              hot: true
            },
            {
              name: '智能地图',
              url: 'http://maps.com'
            },
            {
              name: '团队语音',
              url: 'http://phone.com'
            }
          ]
        }
      },
      slides: [
     {
       src: require('../assets/slideShow/pic1.jpg'),
       title: 'xxx1',
       href: '#/detail/analysis'
     },
     {
       src: require('../assets/slideShow/pic2.jpg'),
       title: 'xxx2',
       href: 'https://github.com/zhangli20080808/sell-demo'
     },
     {
       src: require('../assets/slideShow/pic3.jpg'),
       title: 'xxx3',
       href: 'https://github.com/zhangli20080808/sell-demo'
     },
     {
       src: require('../assets/slideShow/pic4.jpg'),
       title: 'xxx4',
       href: 'https://github.com/zhangli20080808/sell-demo'
     }
   ],
    }
  },
  mounted(){
   this.$http.post('api/db.json').then((res)=>{
    this.newsList = res.data.getNewsList;
    // console.log(this.newsList);

   }).catch((err)=>{
     console.log(err);
   })
 },
 components:{
   slides
 },
 methods:{
   doSomething(){
    //  console.log(1); 父组件都拿到了这样一个方法的触发
   }
 }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.content_wrapper{
  .row{
    .content-left,.content-right{
      height: 1000px;
      .panel{
        .panel-heading{
          background: #19B3EA;
          .panel-title{
            color:#fff;
          }
        }
      }
      .panel-body{
        .item{
          a{
            text-decoration: none;
            &:hover{
              color: #fff;
            }
          }
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            padding: 10px;
            &:hover{
              background: #19B3EA;
              color: #fff;
            }
        }
      }
    }
    .content-right{
      .index-board-item-inner {
          min-height: 125px;
          padding-left: 120px;
          .index-board-car .index-board-item-inner{
            background: url(../assets/images/1.png) no-repeat;
          }
          .index-board-loud .index-board-item-inner{
            background: url(../assets/images/2.png) no-repeat;
          }
          .index-board-earth .index-board-item-inner{
            background: url(../assets/images/3.png) no-repeat;
          }
          .index-board-hill .index-board-item-inner{
            background: url(../assets/images/4.png) no-repeat;
          }
    }
  }
}
}
</style>
