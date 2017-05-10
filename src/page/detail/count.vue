<template lang="html">
  <div class="sales-board">
    <div class="sales-board-intro">
        <h3>数据统计</h3>
        <p>历史资料、科学实验、检验、统计等所获得的和用于科学研究、技术设计、查证、决策等的数值加以统计为解决方案做前期准备。</p>
    </div>

    <div class="sales-board-form">
          <div class="sales-board-line row">
              <div class="sales-board-line-left col-md-2">
                  产品类型：
              </div>
              <div class="sales-board-line-right col-md-10">
                <choose></choose>
              </div>
          </div>
          <div class="sales-board-line row">
            <div class="sales-board-line-left col-md-2">
                适用地区：
            </div>
              <div class="sales-board-line-right col-md-10">
                  <selection :selections="districts" ></selection>
              </div>
          </div>
          <div class="sales-board-line row">
            <div class="sales-board-line-left col-md-2">
                有效时间：
            </div>
              <div class="sales-board-line-right col-md-10">
                  半年
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
      ]
    }
  },
  components: {
    count,
    selection
  }
}
</script>

<style lang="css">
</style>
