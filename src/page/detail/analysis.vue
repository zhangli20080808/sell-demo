<template lang="html">
  <div class="sales-board">
    <div class="sales-board-intro">
        <h3>流量分析</h3>
        <p>是指在获得网站访问量基本数据的情况下对有关数据进行统计、分析，从中发现用户访问网站的规律，并将这些规律与网络营销策略等相结合，从而发现目前网络营销活动中可能存在的问题，并为进一步修正或重新制定网络营销策略提供依据。当然这样的定义是站在网络营销管理的角度来考虑的</p>    </div>

    <div class="sales-board-form">
          <div class="sales-board-line row">
              <div class="sales-board-line-left col-md-2">
                  购买数量：
              </div>
              <div class="sales-board-line-right col-md-10">
                <count @on-change="onParamChange('buyNum',$event)"></count>
              </div>
          </div>

          <div class="sales-board-line row">
            <div class="sales-board-line-left col-md-2">
                产品类型：
            </div>
              <div class="sales-board-line-right col-md-10">
                <!--我们要手动将组件传出来的东西通过event穿进去  这样我们就可以拿到通过这个事件传出来的值 -->
                <selection :selections="buyTypes" @on-change="onParamChange('buyType',$event)"></selection>
              </div>
          </div>

          <div class="sales-board-line row">
            <div class="sales-board-line-left col-md-2">
                有效时间：
            </div>
              <div class="sales-board-line-right col-md-10">
              <chooser :selections="periodList" @on-change="onParamChange('period',$event)"></chooser>
              </div>
          </div>

          <div class="sales-board-line row">
            <div class="sales-board-line-left col-md-2">
                版本类型：
            </div>
              <div class="sales-board-line-right col-md-10">
              <mChooser :selections="versionList" @on-change="onParamChange('versions',$event)"></mChooser>
              </div>
          </div>


          <div class="sales-board-line row">
            <div class="sales-board-line-left col-md-2">
                总价：
            </div>
              <div class="sales-board-line-right col-md-10">
                  500 元
              </div>
          </div>
      </div>
  </div>
</template>

<script>
import count from '@/components/base/count'
import selection from '@/components/base/selection'
import chooser from '@/components/base/chooser'
import mChooser from '@/components/base/multiplyChooser'


export default {
  data(){
    return{
      // 记录我们传递过去的数据 4中类型
      buyNum : 0,
      buyType:{},
      versions: [],
      period: {},

      buyTypes: [
        {
          label: '红色版',
          value: 0
        },
        {
          label: '绿色版',
          value: 1
        },
        {
          label: '紫色版',
          value: 2
        }
      ],
      districts: [
        {
          label: '北京',
          value: 0
        },
        {
          label: '上海',
          value: 1
        },
        {
          label: '广州',
          value: 2
        },
        {
          label: '天津',
          value: 3
        },
        {
          label: '武汉',
          value: 4
        },
        {
          label: '重庆',
          value: 5
        },
      ],
      periodList: [
        {
          label: '半年',
          value: 0
        },
        {
          label: '一年',
          value: 1
        },
        {
          label: '三年',
          value: 2
        }
      ],
      versionList: [
         {
           label: '客户版',
           value: 0
         },
         {
           label: '代理商版',
           value: 1
         },
         {
           label: '专家版',
           value: 2
         }
       ],
    }
  },
  components: {
    count,
    selection,
    chooser,
    mChooser
  },
  methods:{
    onParamChange(attr,val){
      this[attr] = val;
      console.log(attr,val);
      this.getPrice()
    },
    // 请求数据
    getPrice(){
      let buyVersionArray = _.map(this.versions,(item)=>{
        return item.value
      })
      let reqParams = {
        buyNum: this.buyNum,
        buyType: this.buyType.value,
        period: this.period.value,
        version: buyVersionArray.join(',')
      }
      this.$http.post('api/db.json',reqParams).then((res)=>{
        this.price = res.data.getPrice.amount
        // console.log(this.price);
      })
    }
  }
}
</script>

<style lang="css">
</style>
