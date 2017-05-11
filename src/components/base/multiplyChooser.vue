<template lang="html">
  <div class="chooser-component">
       <ul class="chooser-list">
         <li
         v-for="(item, index) in selections"
         @click="toggleSelection(index)"
         :title="item.label"
         :class="{active: checkActive(index)}"
         >{{ item.label }}</li>
       </ul>
     </div>
   </div>
</template>

<script>
import _ from 'lodash'
export default {
  data(){
    return{
       nowIndexes: [0]
    }
  },
  props:{
    selections: {
      type: Array,
      default:{
        label: 'test',
        value: 0
      }
    }
  },
  methods:{
    toggleSelection (index) {
      if (this.nowIndexes.indexOf(index) === -1) {
        this.nowIndexes.push(index)
      }
      else {
        this.nowIndexes = _.remove(this.nowIndexes, (idx) => {
          return idx !== index
        })
      }
      // 我们使用lodash来对数组进行一个映射改变 根据index来return他的这个对象

      let nowObjArray = _.map(this.nowIndexes, (idx) => {
        return this.selections[idx]
      })
      //nowIndex是一个数组的集合，我们要返回一个数组的对象
      this.$emit('on-change', nowObjArray)
    },
    checkActive (index) {
      return this.nowIndexes.indexOf(index) !== -1
    }
  }
}
</script>

<style lang="css" scoped>
.chooser-component {
  position: relative;
  display: inline-block;
}
.chooser-list li{
  display: inline-block;
  border: 1px solid #e3e3e3;
  height: 25px;
  line-height: 25px;
  padding: 0 8px;
  margin-right: 5px;
  border-radius: 3px;
  text-align: center;
  cursor: pointer;
}
.chooser-list li.active {
  border-color: #4fc08d;
  background: #4fc08d;
  color: #fff;
}
</style>
