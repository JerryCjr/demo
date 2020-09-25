<template>
  <div class="root">
    <h2>{{ log }}</h2>
  </div>
</template>

<script>
import { defineComponent, ref, onMounted } from 'vue';
import $wechat from '@babyfs/babyfs-wechat';
// import env from '@babyfs/babyfs-env';
import VCONSOLE from 'vconsole';
// import $axios from 'axios'
export default defineComponent({
  name: 'QyweixinTest',
  setup() {
    new VCONSOLE();

    // onMounted(async () => {
    //   const WAPI_PATH = env.host(env.EnumBusiness['wapi_api']);
    //   const apiPath = `${WAPI_PATH}/wx/qywx/js_api_conf`;

    //   const r = await $wechat.qyJssdkReady('', window.location.href, false, [
    //     'getContext',
    //     'getCurExternalContact',
    //   ]);
    //   const agentResponse = await $axios.get(apiPath, {
    //     params: {
    //       wx_app: 'babyfs',
    //       url: window.location.href,
    //     },
    //   });
    //   // console.log(r)
    //   // console.log(agentResponse)

    //   const { agentId, corpId, timestamp, nonceStr, signature } = {
    //     ...agentResponse.data.data,
    //   };

    //   const agentConfigOptions = {
    //     agentid: agentId,
    //     corpid: corpId,
    //     timestamp: String(timestamp),
    //     nonceStr: nonceStr,
    //     signature: signature,
    //     jsApiList: [
    //       'getContext',
    //       'getCurExternalContact',
    //       'getCurExternalChat',
    //       'selectEnterpriseContact',
    //     ],
    //     // jsApiList: ["getContext"]
    //   };
    //   // console.log(agentConfigOptions)
    //   r.invoke('agentConfig', agentConfigOptions, function(res) {
    //     console.log(res);

    //     r.invoke(
    //       'getCurExternalChat',
    //       function(res) {
    //         console.log(res);
    //       },
    //       function(res) {
    //         console.log(res);
    //       }
    //     );
    //   });
    // });

    onMounted(async () => {
      try {
        await $wechat.qyJssdkReady('', window.location.href, false);
        const wx = await $wechat.qyJssdkAgentReady(
          'babyfs',
          window.location.href,
          false,
          [
            'getContext',
            'getCurExternalContact',
            'getCurExternalChat',
            'selectEnterpriseContact',
          ]
        );
        console.log(wx);
      } catch (error) {
        console.log(error);
      }
    });

    const log = ref('hello');
    return {
      log,
    };
  },
});
</script>

<style lang="scss" scoped></style>
