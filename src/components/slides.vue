<template lang="html">
  <div class="slide-show" @mouseover="clear()" @mouseout="runTime">
      <div class="slide-img">
        <a :href="slides[nowIndex].href">
          <transition name="new">
            <img :src="slides[nowIndex].src" alt="" v-if="isshow">
          </transition>
          <transition name="old">
            <img :src="slides[nowIndex].src" alt="" v-if="!isshow">
          </transition>
        </a>
      </div>
      <h2 class="title">{{slides[nowIndex].title}}</h2>
      <ul class="slide-pages">
        <li @click="goto(prevIndex)">&lt;</li>
        <li v-for="(item,index) in slides" @click="goto(index)" :class="{on:index===nowIndex}">
          {{index +1}}
        </li>
        <li @click="goto(prevIndex)">&gt;</li>
      </ul>
  </div>
</template>

<script>
export default {
  data(){
    return {
      nowIndex : 0,
      isshow: true
    }
  },
  props:{
    slides: {
      type: Array,
      default: []
    },
    time: {
      type: Number,
      default: 1000
    }
  },
  mounted(){
    this.runTime();
    // console.log(this.slides);
  },
  computed:{
    prevIndex(){
      if(this.nowIndex ===0){
        return this.slides.length - 1;
      }else {
        // 这里不能写-- 会减两遍
        return this.nowIndex -1;
      }
    },
    nextIndex(){
      if(this.nowIndex === this.slides.length-1){
        return 0
      }else {
        return this.nowIndex + 1;
      }
    }
  },
  methods:{
    // 我们所有的切换都归结到goto
    goto(index){
      this.isshow = false;
      setTimeout(()=>{
        this.nowIndex = index
        this.isshow = true;
        // 我们把change过后的index传给我们的自定义事件
        this.$emit('onchange',index)
      },10)
    },
    // 创建计时器
    runTime(){
      this.invId  = setInterval(()=>{
        // console.log(121);
        this.goto(this.nextIndex)
      },this.time)
    },
    // 清除
    clear(){
      clearInterval(this.invId)
    }
  }

}
</script>

<style lang="less">
.new-enter-active {
  transition: all .5s;
}
.new-enter {
  transform: translateX(900px);
}
.old-leave-active {
  transition: all .5s;
  transform: translateX(-900px);
}

.slide-show{
  position: relative;
  margin: 15px 15px 15px 0;
  width: 100%;
  height: 400px;
  overflow: hidden;
  .title{
    position: absolute;
     width: 100%;
     height: 100%;
     color: #fff;
     background: #000;
     opacity: .5;
     bottom: 0;
     height: 30px;
     text-align: left;
     padding-left: 15px;
  }
  .slide-img{
    img{
      width: 100%;
      position: absolute;
      top: 0;
    }
  }
  .slide-pages{
    position: absolute;;
    bottom:6px;
    right: 15px;
    li{
      display: inline-block;
      padding: 0 10px;
      cursor: pointer;
      color: #fff;
      &.on{
        background: red;
      }
    }
  }
}
</style>
