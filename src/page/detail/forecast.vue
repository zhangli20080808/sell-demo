<template lang="html">
  <div class="sales-board">
    <div class="sales-board-intro">
        <h3>数据预测</h3>
        <p>未来，大数据会变得越来越重要，其核心应用预测也会成为互联网行业以及产业变革的重要力量，我们很有必要对数据预测及其分析方法进行全面且深入的了解。在这一点上，《大数据预测》是本很好的读物，适合大数据所有相关行业的人阅读。</p>    </div>

    <div class="sales-board-form">
          <div class="sales-board-line row">
              <div class="sales-board-line-left col-md-2">
                  购买数量：
              </div>
              <div class="sales-board-line-right col-md-10">
                <count :max="100" :min="1"></count>
              </div>
          </div>
          <div class="sales-board-line row">
            <div class="sales-board-line-left col-md-2">
                媒介：
            </div>
              <div class="sales-board-line-right col-md-10">
                  <mChooser :selections="versionList" ></mChooser>
              </div>
          </div>
          <div class="sales-board-line row">
            <div class="sales-board-line-left col-md-2">
                有效时间：
            </div>
              <div class="sales-board-line-right col-md-10">
                  一年
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

          <div class="sales-board-line row">
            <div class="sales-board-line-left col-md-1">
            </div>
              <div class="sales-board-line-right col-md-11">
                <button type="button" name="button" class="btn btn-danger" style="outline:none">立即购买</button>
              </div>
          </div>

          <div class="sales-board-des" style="padding-top:20px;">
           <h3>数据预测</h3>
           <p>历史资料、科学实验、检验、统计等所获得的和用于科学研究、技术设计、查证、决策等的数值加以统计为解决方案做前期准备。</p>
         </div>
      </div>



  </div>
</template>

<script>

import count from '@/components/base/count'
import mChooser from '@/components/base/multiplyChooser'

export default {
  data(){
    return {
      versionList: [
       {
         label: '纸质报告',
         value: 0
       },
       {
         label: 'pdf',
         value: 1
       },
       {
         label: '页面报告',
         value: 2
       },
       {
         label: '邮件',
         value: 3
       }
     ]
   }
 },
 components: {
   count,
   mChooser
 }
}
</script>

<style lang="css">
</style>
