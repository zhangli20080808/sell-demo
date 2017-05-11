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
                  {{price}} 元
              </div>
          </div>
          <div class="sales-board-line row">
            <div class="sales-board-line-left col-md-1">
            </div>
              <div class="sales-board-line-right col-md-11">
                <button type="button" name="button" class="btn btn-danger" style="outline:none" @click="showPayDialog">立即购买</button>
              </div>
          </div>

          <div class="sales-board-des">
            <h3>流量分析</h3>
            <p>网站访问统计分析报告的基础数据源于网站流量统计信息，但其价值远高于原始数据资料。专业的网站访问统计分析报告对网络营销的价值，正如专业的财务分析报告对企业经营策略的价值。</p>

            <h3>用户行为指标</h3>
            <ul>
              <li>用户行为指标主要反映用户是如何来到网站的、在网站上停留了多长时间、访问了哪些页面等，主要的统计指标包括：</li>
              <li>用户在网站的停留时间；</li>
              <li>用户来源网站（也叫“引导网站”）；</li>
              <li>用户所使用的搜索引擎及其关键词；</li>
              <li>在不同时段的用户访问量情况等。</li>
            </ul>

            <h3>浏览网站方式</h3>
            <ul>
              <li>用户上网设备类型</li>
              <li>用户浏览器的名称和版本</li>
              <li>访问者电脑分辨率显示模式</li>
              <li>用户所使用的操作系统名称和版本</li>
              <li>用户所在地理区域分布状况等</li>
            </ul>
          </div>

          <myDialog :is-show="isShowPayDialog" @on-close="closeDialog('isShowPayDialog')">
            <div class="row text-center">
              <div class="col-md-offset-1 col-md-2">购买数量</div>
              <div class="col-md-2">产品类型</div>
              <div class="col-md-2">有效时间</div>
              <div class="col-md-2">产品版本</div>
              <div class="col-md-2">总价</div>
            </div>

            <div class="row text-center">
              <div class="col-md-offset-1 col-md-2">{{buyNum}}</div>
              <div class="col-md-2">{{buyType.label }}</div>
              <div class="col-md-2">{{period.label}}</div>
              <div class="col-md-2">
                <span v-for="item in versions">{{ item.label }}</span>
              </div>
              <div class="col-md-2">{{price}}</div>
            </div>
            <div class="row">
              <p class="text-left" style="margin-left:40px;">选择银行</p>
              <backChooser @on-change="onChangeBanks"></backChooser>
            </div>


          </myDialog>
      </div>
  </div>
</template>

<script>
import count from '@/components/base/count'
import selection from '@/components/base/selection'
import chooser from '@/components/base/chooser'
import mChooser from '@/components/base/multiplyChooser'

import Dialog from '@/components/base/dialog'
import backChooser from '@/components/backChooser'




export default {
  data(){
    return{
      // 记录我们传递过去的数据 4中类型
      buyNum : 0,
      buyType:{},
      versions: [],
      period: {},
      price: 0,

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

      bankId:null,
      isShowPayDialog: false
    }

  },
  components: {
    count,
    selection,
    chooser,
    mChooser,
    myDialog: Dialog,
    backChooser
  },
  mounted(){
    this.buyNum = 1,
    this.buyType = this.buyTypes[0],
    this.period = this.periodList[0],
    this.versions = [this.versionList[0]],
    this.getPrice()
  },
  methods:{
    onParamChange(attr,val){
      this[attr] = val;
      console.log(attr,val);
      this.getPrice()
    },
    showPayDialog(){
      this.isShowPayDialog = true
    },
    closeDialog(attr){
      this[attr] = false
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
    },
    onChangeBanks(obj){
      // 拿到银行id
      // console.log(obj);
      this.bankId = obj.id;
      console.log(this.bankId);

    }
  }
}
</script>

<style lang="css">
</style>
