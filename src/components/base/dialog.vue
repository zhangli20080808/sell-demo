<template lang="html">
  <div class="dialog-wrap" v-if="isShow" >
    <div class="dialog-cover"  @click="closeMyself">
    </div>
      <div class="dialog-content animated fadeInUp">
        <p class="dialog-close" @click="closeMyself">x</p>
        <slot>empty</slot>
      </div>
  </div>
</template>

<script>
export default {
 data(){
   return{

   }
 },
 props: {
    isShow: {
      type: Boolean,
      default: false
    }
  },
  methods:{
    closeMyself(){
      // 我们需要把数据传递给父组件
      this.$emit('on-close')
    }
  }
}
</script>

<style lang="less" scoped>

  .dialog-wrap{
    position: fixed;
    width: 100%;
    height: 100%;
    .dialog-cover{
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: #000;
      opacity: .3;
      position: fixed;
      z-index: 5;
    }
    .dialog-content{
      width: 50%;
      position: fixed;
      max-height: 100%;
      overflow: auto;
      background: #fff;
      top: 20%;
      left: 50%;
      margin-left: -25%;
      z-index: 10;
      padding: 2%;
      line-height: 1.6;
      .dialog-close{
        position: absolute;
        right: 5px;
        top: 5px;
        width: 20px;
        height: 20px;
        text-align: center;
        cursor: pointer;
      }
    }
  }
</style>
