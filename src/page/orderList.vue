<template lang="html">
  <div class=" order-wrap">
    <div class="row order-list-choose">
      <div class="col-md-2 order-list-option">
        <span class="choose">选择产品:</span>
        <mySelection :selections="products" @on-change="productChange"></mySelection>
      </div>
      <div class="col-md-4 order-list-option">
        开始日期:
        <datepicker @on-change="getStartDate"></datepicker>
      </div>
      <div class="col-md-4 order-list-option">
        结束日期:
        <datepicker @on-change="getEndDate"></datepicker>
      </div>
      <div class="col-md-2 order-list-option">
        <input type="text" v-model.lazy="query" class="order-query" placeholder="keyword" >
      </div>

    <div class="container table-responsive">
      <table class="table table-hover" style="margin-top:40px;">
       <tr>
         <th v-for="head in tableHeads" @click="changeOrderType(head)" :class="{active:head.active}">{{ head.label }}</th>
       </tr>
       <tr v-for="item in tableData" :key="item.period">
         <td v-for="head in tableHeads">{{item[head.key] }}</td>
       </tr>
     </table>
    </div>


    </div>
  </div>
</template>

<script>
import mySelection from '@/components/base/selection'
import datepicker from '@/components/base/datepicke';


export default {
  data(){
    return {
      query:'',
      productId: 0,
      startDate: '',
      endDate: '',
      products: [
          {
            label: '数据统计',
            value: 0
          },
          {
            label: '数据预测',
            value: 1
          },
          {
            label: '流量分析',
            value: 2
          },
          {
            label: '广告发布',
            value: 3
          }
        ],
        tableHeads: [
          {
            label: '订单号',
            key: 'orderId'
          },
          {
            label: '购买产品',
            key: 'product'
          },
          {
            label: '版本类型',
            key: 'version'
          },
          {
            label: '有效时间',
            key: 'period'
          },
          {
            label: '购买日期',
            key: 'date'
          },
          {
            label: '数量',
            key: 'buyNum'
          },
          {
            label: '总价',
            key: 'amount'
          }
        ],
      tableData: []
    }
  },
  components: {
    mySelection,
    datepicker
  },
  watch: {
    query(){
      this.getList()
    }
  },
  methods: {
    productChange(obj){
      // console.log(obj);
      this.productId = obj.value
      this.getList()
    },
    getStartDate(data){
      this.startDate = data;
      this.getList()
    },
    getEndDate(data){
      this.endDate = data;
      this.getList()
    },
    getList(){
      let reqParams = {
        query: this.query,
        productId :this.productId,
        startDate : this.startDate,
        endDate : this.endDate
      }
      this.$http.post('/api/db.json',reqParams).then((res)=>{
        // console.log(res);
        this.tableData = res.data.getOrderList.list;
        // console.log(this.tableData);
      })
    }
  },
  mounted(){
    this.getList()
  }
}
</script>

<style lang="less" scoped>
.order-wrap{
  .order-list-choose{
    .order-list-option{
      .choose{margin-right: 10px;}
      .order-query{
        height: 25px;
        line-height: 25px;
        border: 1px solid #e3e3e3;
        outline: none;
        text-indent: 10px;
      }

    }

  }
}
</style>
