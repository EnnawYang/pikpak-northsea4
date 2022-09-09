<template>
  <div class="list-page">
    <n-collapse :default-expanded-names="['-1', '0', '2', '3', 'download']">
      <n-collapse-item name="-1" >
        <template #header>
          绑定telegram   <a @click.stop="" href="https://www.tjsky.net/?p=220#Telegram" target="_blank"> <n-icon style="vertical-align: middle;" size="20" color="#d03050"><zoom-question></zoom-question></n-icon> </a>
        </template>
        <n-input v-model:value="telegramUrl" placeholder="复制telegram绑定链接到这"></n-input>
        <p></p>
        <n-button :disabled="!telegramUrl" type="primary" @click="goTelegram">Telegram绑定</n-button>&nbsp; 
        <a href="https://t.me/PikPak_Bot" target="_blank">Telegram机器人地址</a>
      </n-collapse-item>

      <!-- start Aria2设置 -->
      <n-collapse-item name="0" title="Aria2设置">
        <template #header>Aria2设置   <a @click.stop="" href="https://www.tjsky.net/?p=220#arai2" target="_blank"> <n-icon style="vertical-align: middle;" size="20" color="#d03050"><zoom-question></zoom-question></n-icon> </a></template>
        <n-form label-width="120px" label-align="left" label-placement="left" autocomplete="off">
          <n-form-item label="Aria2链接：">
            <n-input v-model:value="aria2Data.host" placeholder="例如http://localhost:6800/jsonrpc" clearable></n-input>
          </n-form-item>
          <n-form-item label="Aria2 Token：">
            <n-input v-model:value="aria2Data.token" type="password" show-password-on="mousedown" clearable></n-input>
          </n-form-item>
          <n-form-item label="限制连接数：" feedback="一个下载链接只使用一个网络连接(线程)，使用反代时，建议开启，避免429。如不开启，请查看Arai2默认的`单任务连接数`和`单服务器最大连接数`">
            <n-switch v-model:value="aria2Data.restrictConnections">
              <template #checked>开启 - 避免请求频繁</template>
              <template #unchecked>不开启 - Aria2默认控制</template>
            </n-switch>
          </n-form-item>
          <!-- TODO nativeui v2.24.0 才有feedback这个slot -->
          <n-form-item label="反代域名：" feedback="对全部Aria2下载生效。可以参考教程：https://www.tjsky.net/?p=433">
            <n-input v-model:value="aria2Data.reverseHost" placeholder="例如http://pcdn.xx.com" clearable></n-input>
          </n-form-item>
          <n-form-item label="服务器序号：" feedback="仅对「推送到Aria2」生效">
            <n-auto-complete
              v-model:value="aria2Data.serverNumber"
              :options="aria2Data.serverNumbers"
              placeholder="下载服务器序号"
              clearable
            ></n-auto-complete>
          </n-form-item>
          <n-form-item label="服务器列表：">
            <n-dynamic-tags v-model:value="aria2Data.serverNumbers" />
          </n-form-item>
          <n-form-item label="叠加数量：" feedback="对应功能「Aria2-Buff」。使用多个链接下载一个文件，适合需要更快下载某个文件的场景">
            <n-input-number v-model:value="aria2Data.batchUrlNum" placeholder="需要推送多少个链接下载一个文件" :min="0" :max="64"></n-input-number>
          </n-form-item>
          <n-form-item label="叠加策略：" feedback="「自然选择」：取到什么就用什么；「序列循坏」：从「服务器序号列表」中从头到尾选取">
            <n-radio-group v-model:value="aria2Data.batchStrategy">
              <n-radio-button value="natural" label="自然选择">自然选择</n-radio-button>
              <n-radio-button value="series" label="序列循坏">序列循坏</n-radio-button>
            </n-radio-group>
          </n-form-item>
          <n-form-item label="获取链接并发：" feedback="提取多个下载链接时的并发数。建议不要太大，以免触发风控(实际作者也不清楚具体的限制)">
            <n-input-number v-model:value="aria2Data.batchUrlConcurrence" placeholder="提取多个下载链接时的并发数"></n-input-number>
          </n-form-item>
          <n-form-item label="文件夹设置：">
            <n-switch v-model:value="aria2Data.dir" >
              <template #checked>选择文件夹时保存文件夹结构</template>
              <template #unchecked>选择文件夹时仅保存文件</template>
            </n-switch>
          </n-form-item>
          <n-alert type="warning" title="由于浏览器限制，请在浏览器的「网站设置」中，将「不安全内容」设置为「允许」" v-if="browserTipsVisible">
            <div>
              <img src="../assets/aria2-tip-1.png" alt=""/>&nbsp; 
              <img src="../assets/aria2-tip-2.png" alt=""/>
            </div>
          </n-alert>
          <n-form-item>
            <n-button type="primary" @click="testAria2">测试并保存</n-button>
          </n-form-item>
        </n-form>
      </n-collapse-item>
      <!-- end Aria2设置 -->

      <!-- start 下载设置 -->
      <n-collapse-item name="download" title="下载设置">
        <template #header>下载设置   <n-icon style="vertical-align: middle;" size="20" color="#d03050"><download></download></n-icon></template>
        <n-form label-width="120px" label-align="left" label-placement="left">
          <n-form-item label="服务器序号：" feedback="替换下载链接域名中的服务器序号。序号请参考上面「Aria2设置」里的「服务器序号列表」">
            <n-auto-complete
              v-model:value="downloadConfig.serverNumber"
              :options="serverNumbers"
              placeholder="下载服务器序号"
              clearable
            ></n-auto-complete>
          </n-form-item>
          <n-form-item label="反代域名：" feedback="自动在下载链接前加上该反代域名。可以参考教程：https://www.tjsky.net/?p=433">
            <n-input v-model:value="downloadConfig.reverseHost" placeholder="反代域名" clearable></n-input>
          </n-form-item>
          <n-form-item>
            <n-button type="primary" @click="saveDownloadConfig">保存</n-button>
          </n-form-item>
        </n-form>
      </n-collapse-item>
      <!-- end 下载设置 -->

      <!-- start 播放设置 -->
      <n-collapse-item name="play" title="播放设置">
        <template #header>播放设置   <n-icon style="vertical-align: middle;" size="20" color="#d03050"><download></download></n-icon></template>
        <n-form label-width="120px" label-align="left" label-placement="left">
          <n-form-item label="服务器序号：" feedback="替换播放链接域名中的服务器序号。序号请参考上面「Aria2设置」里的「服务器序号列表」">
            <n-auto-complete
              v-model:value="playConfig.serverNumber"
              :options="serverNumbers"
              placeholder="服务器序号"
              clearable
            ></n-auto-complete>
          </n-form-item>
          <n-form-item label="反代域名：" feedback="自动在播放链接前加上该反代域名。可以参考教程：https://www.tjsky.net/?p=433">
            <n-input v-model:value="playConfig.reverseHost" placeholder="反代域名" clearable></n-input>
          </n-form-item>
          <n-form-item>
            <n-button type="primary" @click="savePlayConfig">保存</n-button>
          </n-form-item>
        </n-form>
      </n-collapse-item>
      <!-- end 播放设置 -->

      <n-collapse-item name="1" title="自动登录设置">
        <template #header>自动登录设置   <a @click.stop="" href="https://www.tjsky.net/?p=220#i-6" target="_blank"> <n-icon style="vertical-align: middle;" size="20" color="#d03050"><zoom-question></zoom-question></n-icon> </a></template>
        <n-form label-width="100px" label-align="left" label-placement="left">
          <n-form-item label="是否开启">
            <n-switch v-model:value="loginSwitch"></n-switch>
          </n-form-item>
          <template v-if="loginSwitch">
            <n-form-item label="用户名">
              <n-input v-model:value="loginData.username" placeholder="用户名"></n-input>
            </n-form-item>
            <n-form-item label="密码">
              <n-input v-model:value="loginData.password" type="password" show-password-on="mousedown"></n-input>
            </n-form-item>
          </template>
          <n-form-item>
            <n-button type="primary" @click="loginPost">保存</n-button>
          </n-form-item>
        </n-form>
      </n-collapse-item>

      <n-collapse-item name="3" title="代理设置">
        <n-input type="textarea" v-model:value="proxyData" rows="4" placeholder="支持多个随机，一行一个，为空则不代理"></n-input>
        <p></p>
        <n-button type="primary" @click="proxyPost">保存设置</n-button>
        &nbsp;&nbsp;
        <n-text @click="proxyReset">恢复默认</n-text>
      </n-collapse-item>

      <n-collapse-item title="关于" name="2">
        <n-space>
          <a href="https://mypikpak.com/" target="_blank" class="n-button">官方网站</a>
          <a href="https://t.me/pikpak_userservice" target="_blank" class="n-button">官方交流群</a>
          <a href="https://github.com/northsea4/pikpak" target="_blank" class="n-button">开源仓库</a>
          <a href="https://www.tjsky.net/?p=201" target="_blank" class="n-button">部署教程</a>
        </n-space>
        <br />
      </n-collapse-item>

      <n-collapse-item title="功能列表" name="3">
        <n-log :lines="logs"></n-log>
      </n-collapse-item>
    </n-collapse>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from '@vue/reactivity';
import { onMounted } from '@vue/runtime-core';
import http from '../utils/axios'
import { isCrossOrigin } from '../utils'
import { 
  NForm, NFormItem, NButton, NInput, NText, NInputNumber,
  NCollapse, NCollapseItem, NSpace, NSwitch, useDialog, 
  NAlert, NLog, NIcon, NAutoComplete, NRadioGroup, NRadioButton,
  NDynamicTags,
} from 'naive-ui'
import { ZoomQuestion, Download } from '@vicons/tabler'
import {
  proxy as proxyDefault,
  serverNumbers
} from '../config'

const logs = ref([
  '手机注册登陆',
  '添加推广下载',
  '绑定Telegram',
  '直接分享功能（下线）',
  '修改传输自动请求方式',
  '传输只显示保存中',
  '自定义菜单',
  '资源库分页，分享秒传支持文件及',
  '....'
])

const downloadConfig = ref({
  // 自定义服务器序号
  serverNumber: '',
  // 反代域名
  reverseHost: '',
})

const saveDownloadConfig = () => {
  window.localStorage.setItem('pikpakDownload', JSON.stringify(downloadConfig.value))
  window.$message.success('保存成功')
}


const playConfig = ref({
  // 自定义服务器序号
  serverNumber: '',
  // 反代域名
  reverseHost: '',
})

const savePlayConfig = () => {
  window.localStorage.setItem('pikpakPlay', JSON.stringify(playConfig.value))
  window.$message.success('保存成功')
}

const aria2Data = ref({
  host: 'http://localhost:6800/jsonrpc',
  token: '',
  dir: true,
  restrictConnections: true,
  // 自定义服务器序号
  serverNumber: '',
  // 使用多少个链接下载同一个文件
  batchUrlNum: 1,
  // TODO 获取下载链接并发（目前没实现真的并发）
  batchUrlConcurrence: 4,
  serverNumbers: serverNumbers,
  // 叠加策略
  batchStrategy: 'natural',
  // 反代域名
  reverseHost: '',
})


const browserTipsVisible = computed(() => aria2Data.value.host && isCrossOrigin(aria2Data.value.host))

const testAria2 = () => {
  let postData:any = {
      id:'',
      jsonrpc:'2.0',
      method:'aria2.getGlobalStat',
      params:[]
  }
  if(aria2Data.value.token) {
    postData.params.splice(0, 0, 'token:' + aria2Data.value.token)
  }
  fetch(aria2Data.value.host, {
      method: 'POST',
      body: JSON.stringify(postData),
      headers: new Headers({
      'Content-Type': 'application/json'
    })
  })
    .then(response => response.json())
    .then(res => {
      if(res.error && res.error.message) {
        window.$message.error(res.error.message)
      } else if(res.result) {
        window.localStorage.setItem('pikpakAria2', JSON.stringify(aria2Data.value))
        window.$message.success('保存成功')
      }
    })
    .catch(error => console.error('Error:', error))
}

const loginSwitch = ref(false)
const loginData = ref({
  username: '',
  password: ''
})
const dialog = useDialog()
const loginPost = () => {
  if(loginSwitch.value) {
    dialog.warning({
      title: '警告',
      content: '记住登陆是指浏览器本地明文保存用户名密码用于下次自动登陆，请勿在非信任设备选择',
      positiveText: '确定',
      negativeText: '不确定',
      onPositiveClick: () => {
        window.localStorage.setItem('pikpakLoginData', JSON.stringify(loginData.value))
      },
      onNegativeClick: () => {
      },
    })
  } else {
    window.localStorage.removeItem('pikpakLoginData')
  }
}

const proxyData = ref('')
const proxyPost = () => {
  let proxyValue = proxyData.value.split('\n').filter(item => item != '')
  window.localStorage.setItem('proxy', JSON.stringify(proxyValue))
  window.localStorage.setItem('isSettingProxy', 'true')
}
const proxyReset = () => {
  window.localStorage.setItem('proxy', JSON.stringify(proxyDefault))
  window.localStorage.removeItem('isSettingProxy')
  proxyData.value = proxyDefault.join('\n')
}

onMounted(() => {
  let aria2 = JSON.parse(window.localStorage.getItem('pikpakAria2') || '{}')
  if(aria2.dir === undefined) {
    aria2.dir = true
  }
  if(aria2.serverNumbers === undefined) {
    aria2.serverNumbers = serverNumbers
  }
  if(aria2.host) {
    aria2Data.value = aria2
  }

  let dc = JSON.parse(window.localStorage.getItem('pikpakDownload') || '{}')
  downloadConfig.value = dc

  let _pc = JSON.parse(window.localStorage.getItem('pikpakPlay') || '{}')
  playConfig.value = _pc

  let login = JSON.parse(window.localStorage.getItem('pikpakLoginData') || '{}')
  if(login.username && login.password) {
    loginData.value = login
    loginSwitch.value = true 
  }
  let proxy = JSON.parse(window.localStorage.getItem('proxy') || '[]')
  if(proxy.length) {
    proxyData.value = proxy.join('\n')
  }
})

const telegramUrl = ref()
const goTelegram = () => {
  let login = JSON.parse(window.localStorage.getItem('pikpakLogin') || '{}')
  if(!login && !login.access_token) {
    window.$message.error('请先登陆')
    return false
  }
  
  let matchArray = telegramUrl.value &&  decodeURIComponent(telegramUrl.value).match(/(^|&)token=([^&]*)(&|$)/)
  console.log(matchArray)
  if(!matchArray || !matchArray.length || matchArray.length != 4) {
    window.$message.error('请输入正确链接')
    return false
  }
  http.post('https://api-drive.mypikpak.com/user/v1/bind', {
      accessToken: login.access_token,
      thirdType: "TG",
      thirdToken: matchArray[2]
    })
    .then((res:any) => {
      telegramUrl.value = ''
      if(res.data.bound) {
        window.$message.success('绑定成功')
      } else {
        window.$message.error('绑定失败')
      }
    })
}
</script>

<style>
.list-page {
  padding: 40px;
}

@media(max-width: 968px) {
  .list-page {
    padding: 10px;
  }
}
</style>