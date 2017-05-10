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
                <count></count>
              </div>
          </div>

          <div class="sales-board-line row">
            <div class="sales-board-line-left col-md-2">
                产品类型：
            </div>
              <div class="sales-board-line-right col-md-10">
                <selection :selections="buyTypes" @on-change="onParamChange"></selection>
              </div>
          </div>

          <div class="sales-board-line row">
            <div class="sales-board-line-left col-md-2">
                有效时间：
            </div>
              <div class="sales-board-line-right col-md-10">
              <chooser :selections="periodList"></chooser>
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


export default {
  data(){
    return{
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
      buyTypes: [
        {
          label: '入门版',
          value: 0
        },
        {
          label: '中级版',
          value: 1
        },
        {
          label: '高级版',
          value: 2
        }]
    }
  },
  components: {
    count,
    selection,
    chooser
  },
  methods:{
    onParamChange(attr,val){
      this[attr] = val;

    }
  }
}
</script>

<style lang="css">
</style>
