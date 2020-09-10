import babyfsWx from "@babyfs/babyfs-wechat";

window.vConsole = new window.VConsole();

(async () => {
  try {
    // * 普通微信jssdk初始化
    // * 返回值是一个经过扩展的wx对象
    const wx = await babyfsWx.qyJssdkReady(
      "invite",
      window.location.href,
      true,
      ["chooseImage"],
      []
    );
    console.log(wx);
    if (wx) {
      wx.checkJsApi({
        jsApiList: ["agentConfig"], // 需要检测的JS接口列表
        success(res) {
          console.log(res);
          // 以键值对的形式返回，可用的api值true，不可用为false
          // 如：{"checkResult":{"chooseImage":true},"errMsg":"checkJsApi:ok"}
        },
      });
      // 采用invoke的形式 调用agentConfig
      wx.invoke(
        "agentConfig",
        {
          corpid: "ww83b355cf8cc0e036", // 必填，企业微信的corpid，必须与当前登录的企业一致
          agentid: "1000019", // 必填，企业微信的应用id （e.g. 1000247）
          timestamp: respnseData.timestamp, // 必填，生成签名的时间戳
          nonceStr: respnseData.nonceStr, // 必填，生成签名的随机串
          signature: respnseData.signature, // 必填，签名，见附录-JS-SDK使用权限签名算法
          jsApiList: ["selectExternalContact"], //必填
          success: function (res) {
            // 回调
            console.log(res);
          },
          fail: function (res) {
            console.log(res);
            if (res.errMsg.indexOf("function not exist") > -1) {
              alert("版本过低请升级");
            }
          },
        },
        function (res) {
          console.log(res);
          return;
        }
      );
    }
  } catch (error) {
    console.log(error);
  }
})();
