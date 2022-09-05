<template>
  <div class="bigbox">
    <div class="box" v-for="item,index in list" :key="index">
      <div class="img">
        <img src="https://img.js.design/assets/img/61405df9a781860684064223.png" alt="">
      </div>
      <div class="textbox">
        <div class="tx">{{item.name}}</div>
        <div class="jq">{{item.money}}</div>
        <div class="ysh">{{item.state}}</div>
      </div>
    </div>
  </div>
  
</template>

<script>
export default {
  data() {
    return {
      list:[
        {img:'https://img.js.design/assets/img/61405df9a781860684064223.png',name:'Klee Kler复古T恤',money:'￥320',state:'已收货'},
        {img:'https://img.js.design/assets/img/61405df9a781860684064223.png',name:'Klee Kler复古T恤',money:'￥320',state:'已收货'},
        {img:'https://img.js.design/assets/img/61405df9a781860684064223.png',name:'Klee Kler复古T恤',money:'￥320',state:'已收货'}
      ]
    }
  },

}
</script>

<style>
.box{
  width: 3.26rem;
  height: 0.98rem;
  background: green;
  border-radius: 0.2rem;
  margin: 0 auto 20px;
  display: flex;
}
.img{
  width: 0.84rem;
  height: 00.84rem;
}
img{
  width: 100%;
  height: 100%;
  margin-top: 0.06rem;
  margin-left: 0.1rem;
  border-radius: 0.2rem;
}
.textbox{
  padding-left: 0.1rem;
  font-size: 0.12rem;
  font-weight: 700;
  position: relative;
  flex: 1;
}
.tx{
  margin-top:  0.1rem;
  font-size: 0.14rem;
  font-weight: 700;
}
.jq{
  margin-top:  0.3rem;
}
.ysh{
  position: absolute;
  top: 50%;
  right: 0.1rem;
  transform: translateY(-50%);
  font-size: 0.12rem;
font-weight: 700;
}
</style>