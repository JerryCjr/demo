<template>
  <div class="root">
    <h1>bridge</h1>
    <div class="app" v-if="isApp">
      <p class="share-app-message" @click="nativeShareMenu">唤起原生的分享菜单</p>
      <p class="share-app-message" @click="shareAppMessage">唤起原生的分享好友</p>
      <p class="share-timeline" @click="shareTimeline">唤起原生的分享朋友圈</p>
      <p class="share-timeline" @click="nativeShareMenuToShareImage">唤起原生的分享菜单(分享图片)</p>
    </div>
  </div>
</template>

<script>
import bridge from "babyfs-jsbridge";
import env from "babyfs-env";
import { ref, defineComponent } from "vue";
export default defineComponent({
  name: "Bridge",
  setup() {
    const isApp = ref(env.app === env.EnumApp["babyfs"]);

    return {
      isApp
    };
  },
  methods: {
    shareHandler(params) {
      if (!params || params === {}) {
        alert("参数不能为空");
        return;
      }
      bridge.callHandler("doShare", JSON.stringify(params));
    },
    shareAppMessage() {
      const params = {
        channel: 1,
        url: window.location.href,
        title: "微信好友",
        description: "分享给微信好友"
      };

      this.shareHandler(params);
    },
    shareTimeline() {
      const params = {
        channel: 2,
        url: window.location.href,
        title: "朋友圈",
        description: "分享朋友圈"
      };

      this.shareHandler(params);
    },
    nativeShareMenu() {
      const params = {
        channel: 0,
        url: window.location.href,
        title: "朋友圈",
        description: "分享朋友圈"
      };
      this.shareHandler(params);
    },
    nativeShareMenuToShareImage() {
      const params = {
        channel: 0,
        posterUrl: "https://i.s.babyfs.cn/1bafac0fe27a416cba04c476324bce22.jpg"
      };
      this.shareHandler(params);
    }
  }
});
</script>

<style></style>
