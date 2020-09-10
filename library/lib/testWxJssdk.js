import babyfsWx from "@babyfs/babyfs-wechat";

(async () => {
  try {
    // * 普通微信jssdk初始化
    // * 返回值是一个经过扩展的wx对象
    const wx = await babyfsWx.jssdkReady(
      "invite",
      window.location.href,
      true,
      ["chooseImage"],
      []
    );
    if (wx) {
      wx.checkJsApi({
        jsApiList: ["chooseImage", "closeWindow"], // 需要检测的JS接口列表
        success(res) {
          console.log(res);
          // 以键值对的形式返回，可用的api值true，不可用为false
          // 如：{"checkResult":{"chooseImage":true},"errMsg":"checkJsApi:ok"}
        },
      });

      wx.share({
        title: "分享测试--标题",
        desc: "分享测试--描述",
        link: window.location.href,
        imgUrl: "",
      });

      wx.hideMenuItems({
        menuList: ["menuItem:share:appMessage"],
      });
    }
  } catch (error) {
    console.log(error);
  }
})();
