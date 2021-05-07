<template>
  <view class="workBench">
    <swiper
      class="test-h"
      indicatorColor="#999"
      indicatorActiveColor="#333"
      current="current"
      :duration="duration"
      :interval="interval"
      :circular="isCircular"
      :autoplay="isAutoplay"
      :indicatorDots="hasIndicatorDots"
    >
      <swiper-item v-for="(item, idx) in imgUrls" :key="idx">
        <image :src="item" class="slide-image" mode="widthFill" />
      </swiper-item>
    </swiper>

    <AtGrid
      mode="square"
      :hasBorder="false"
      :data="functionalAreaArrayList"
      :columnNum="5"
    />
  </view>
</template>

<script>
// 按需引入, 更小的应用体积

import { AtGrid } from "taro-ui-vue";
import { functionalAreaArrayList } from "./menu";
console.log("functionalAreaArrayList", functionalAreaArrayList);
import "taro-ui-vue/dist/style/components/grid.scss";
import "./index.scss";
export default {
  components: {
    AtGrid
  },
  data() {
    return {
      msg: "Hello world!",
      show: false,
      functionalAreaArrayList: functionalAreaArrayList,
      current: 1,
      duration: 500,
      interval: 5000,
      isCircular: false,
      isAutoplay: false,
      hasIndicatorDots: true,
      imgUrls: [
        "https://m.360buyimg.com/mobilecms/s700x280_jfs/t1/173768/9/6995/189309/608a6b72Ee233f053/6ae18143dafee230.jpg!cr_1053x420_4_0!q70.jpg.dpg",
        "https://m.360buyimg.com/mobilecms/s700x280_jfs/t1/112568/17/18594/207382/5f6e0570E887ecd94/313ff33facda56ac.jpg!cr_1125x449_0_166!q70.jpg.dpg",
        "https://m.360buyimg.com/mobilecms/s700x280_jfs/t1/179796/18/2583/152377/6093ac67E5fd8bf0c/bad1a535acaa95be.png!cr_1053x420_4_0!q70.jpg.dpg"
      ]
    };
  },
  methods: {
    handleClick() {
      this.show = true;
    },
    handleClose() {
      this.show = false;
    }
  },
  created() {
    console.log("functionalAreaArrayList", functionalAreaArrayList);
  }
};
</script>
