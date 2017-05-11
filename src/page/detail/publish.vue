<template lang="html">
  <div class="sales-board">
    <div class="sales-board-intro">
        <h3>广告发布</h3>
        <p>广告活动按照广告计划执行，到完成广告创作并形成广告作品之后，经过广告主的最后审核同意，即可送到预定的媒介发布刊播。这项工作一般由媒介部门的有关专业人员负责，他们的任务就是专门负责与有关媒介单位接洽，安排有关广告的发播事宜，并对发播质量实施监督。</p>    </div>

    <div class="sales-board-form">
          <div class="sales-board-line row">
              <div class="sales-board-line-left col-md-2">
                  产品数量：
              </div>
              <div class="sales-board-line-right col-md-10">
                <count></count>
              </div>
          </div>
          <div class="sales-board-line row">
            <div class="sales-board-line-left col-md-2">
                行业：
            </div>
              <div class="sales-board-line-right col-md-10">
                  <mChooser :selections="tradeList" ></mChooser>
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

          <div class="sales-board-line row">
            <div class="sales-board-line-left col-md-1">
            </div>
              <div class="sales-board-line-right col-md-11">
                <button type="button" name="button" class="btn btn-danger" style="outline:none">立即购买</button>
              </div>
          </div>

          <div class="sales-board-des" style="padding-top:20px;">
           <h3>广告发布</h3>
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
      tradeList: [
        {
          label: '出版业',
          value: 0
        },
        {
          label: '媒体',
          value: 1
        },
        {
          label: '金融',
          value: 2
        },
        {
          label: '互联网',
          value: 3
        },
        {
          label: '游戏',
          value: 4
        }
      ],
      versionList: [
        {
          label: '初级版',
          value: 0
        },
        {
          label: '中级版',
          value: 1
        },
        {
          label: '高级版',
          value: 2
        },
        {
          label: '专家版',
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
