<template>
  <div class="main">
    <video width="1080" controls ref="vdo">
      <source src="../assets/video/kun.mp4" type="video/mp4" />
      您的浏览器不支持 video 标签。
    </video>
  </div>
</template>

<script setup lang="ts">
  // 浏览器自动播放视频
  import { ref, onMounted } from 'vue';
  onMounted(() => {
    const vdo = ref<HTMLVideoElement | null>(null);
    console.log(vdo);
  });
</script>

<style scoped lang="less">
  .main {
    height: 100vh;
    video {
      margin: 0 auto;
      display: block;
      margin-top: 100px;
    }
  }
</style>
