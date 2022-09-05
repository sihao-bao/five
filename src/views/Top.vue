<template>
  <div class="top">
    <div class="img">
      <img src="../蒙版分组 (11).png.png" alt="" />
    </div>
    <ul class="list">
      <li class="li">
        <div class="li-l">
          <img src="../yuan.png" alt="" />
        </div>
        <p class="txt">我的订单</p>
      </li>
      <li class="li">
        <div class="li-l">
          <img src="../yuan.png" alt="" />
        </div>
        <p class="txt">我的订单</p>
      </li>
      <li class="li">
        <div class="li-l">
          <img src="../yuan.png" alt="" />
        </div>
        <p class="txt">我的订单</p>
      </li>
      <li class="li">
        <div class="li-l">
          <img src="../yuan.png" alt="" />
        </div>
        <p class="txt">我的订单</p>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: 'top',
}
</script>
<style scoped>
* {
  margin: 0;
  padding: 0;
}
.top {
  width: 3.26rem;
  height: 2.36rem;
  /* background: red; */
  border-radius: 0.28rem;
  margin: 0 auto;
}
.img {
  width: 3.26rem;
  height: 1.24rem;
}
.img > img {
  width: 100%;
  height: 1.24rem;
}
.list {
  width: 100%;
  height: 1.13rem;
  /* background: pink; */
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.li {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.li-l {
  width: 0.44rem;
  height: 0.44rem;
  background: rgba(255, 223, 117, 1);
  border-radius: 27px;
}
.txt {
  margin-top: 10px;
}
</style>
