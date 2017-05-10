<template lang="html">
  <div id="detail" class="container">
    <div class="row">
      <div class="col-md-3 detai-left">
        <div class="panel panel-success">
         <div class="panel-heading">
             <h3 class="panel-title">全部产品</h3>
         </div>
         <div class="panel-body">
           <div>
             <ul>
               <router-link v-for="item in products"  :to = "{path: item.path}" class="item" active-class="active" tag="li">{{item.name}}</router-link>
             </ul>
             <!-- <div v-if="!product.last" class="hr"></div> -->
           </div>
        </div>
       </div>
      </div>
      <div class="col-md-9 detai-right">
        <keep-alive>
          <router-view></router-view>
        </keep-alive>
      </div>

    </div>
  </div>

</template>

<script>
export default {
  data(){
    return{
      products: [
        {
          name: '数据统计',
          path: 'count',
          icon: require('../assets/images/1.png'),
          active: false
        },
        {
          name: '数据预测',
          path: 'forecast',
          active: false
        },
        {
          name: '流量分析',
          path: 'analysis',
          active: false
        },
        {
          name: '广告发布',
          path: 'publish',
          active: false
        }
      ],
    }
  },
  components:{
  }
}
</script>

<style lang="less" >
  #detail{
    .detai-left{
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
          padding: 10px;
          &:hover{
            background: #19B3EA;
            color: #fff;
          }
        }
      }

    }
    .detai-right{
      padding-left: 20px;
      .sales-board{
        background: #fff;
        padding: 20px 0;
        .sales-board-intro{}
        .sales-board-form{
        .sales-board-line{
          .sales-board-line-left{}
          .sales-board-line-righ{}
        }
      }
    }
  }
}
</style>
