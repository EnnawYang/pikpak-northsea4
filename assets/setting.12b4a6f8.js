import{d as M,r as d,a4 as Q,p as K,o as Z,b as _,s as N,e,f as u,aH as q,w as l,aI as E,E as i,aw as k,I as f,aJ as C,R as F,Q as B,ax as s,aK as h,aL as W,aM as S,aN as X,aO as x,aP as U,c as Y,av as uu,D as I,az as g,aQ as T,T as eu,B as au,an as lu,aR as tu,y as r}from"./vendor.64ccc444.js";import{s as w,j as ou,p as j,i as su}from"./index.9bd1323b.js";var ru="/pikpak-northsea4/assets/aria2-tip-1.e9ebfae4.png",nu="/pikpak-northsea4/assets/aria2-tip-2.f3636f8d.png";const iu={class:"list-page"},Fu=r(" \u7ED1\u5B9Atelegram "),du=i("p",null,null,-1),Eu=r("Telegram\u7ED1\u5B9A"),pu=r("\xA0 "),vu=i("a",{href:"https://t.me/PikPak_Bot",target:"_blank"},"Telegram\u673A\u5668\u4EBA\u5730\u5740",-1),Du=r("Aria2\u8BBE\u7F6E "),Au=r("\u81EA\u7136\u9009\u62E9"),Bu=r("\u5E8F\u5217\u5FAA\u574F"),mu=r("\u9009\u62E9\u6587\u4EF6\u5939\u65F6\u4FDD\u5B58\u6587\u4EF6\u5939\u7ED3\u6784"),cu=r("\u9009\u62E9\u6587\u4EF6\u5939\u65F6\u4EC5\u4FDD\u5B58\u6587\u4EF6"),fu=i("div",null,[i("img",{src:ru,alt:""}),r("\xA0 "),i("img",{src:nu,alt:""})],-1),gu=r("\u6D4B\u8BD5\u5E76\u4FDD\u5B58"),wu=r("\u4E0B\u8F7D\u8BBE\u7F6E "),bu=r("\u4FDD\u5B58"),_u=r("\u64AD\u653E\u8BBE\u7F6E "),ku=r("\u4FDD\u5B58"),Cu=r("\u81EA\u52A8\u767B\u5F55\u8BBE\u7F6E "),hu=r("\u4FDD\u5B58"),yu=i("p",null,null,-1),Nu=r("\u4FDD\u5B58\u8BBE\u7F6E"),Su=r(" \xA0\xA0 "),xu=r("\u6062\u590D\u9ED8\u8BA4"),Uu=i("a",{href:"https://mypikpak.com/",target:"_blank",class:"n-button"},"\u5B98\u65B9\u7F51\u7AD9",-1),Iu=i("a",{href:"https://t.me/pikpak_userservice",target:"_blank",class:"n-button"},"\u5B98\u65B9\u4EA4\u6D41\u7FA4",-1),Tu=i("a",{href:"https://github.com/northsea4/pikpak",target:"_blank",class:"n-button"},"\u5F00\u6E90\u4ED3\u5E93",-1),ju=i("a",{href:"https://www.tjsky.net/?p=201",target:"_blank",class:"n-button"},"\u90E8\u7F72\u6559\u7A0B",-1),Ou=i("br",null,null,-1),$u=M({setup(Ju){const O=d(["\u624B\u673A\u6CE8\u518C\u767B\u9646","\u6DFB\u52A0\u63A8\u5E7F\u4E0B\u8F7D","\u7ED1\u5B9ATelegram","\u76F4\u63A5\u5206\u4EAB\u529F\u80FD\uFF08\u4E0B\u7EBF\uFF09","\u4FEE\u6539\u4F20\u8F93\u81EA\u52A8\u8BF7\u6C42\u65B9\u5F0F","\u4F20\u8F93\u53EA\u663E\u793A\u4FDD\u5B58\u4E2D","\u81EA\u5B9A\u4E49\u83DC\u5355","\u8D44\u6E90\u5E93\u5206\u9875\uFF0C\u5206\u4EAB\u79D2\u4F20\u652F\u6301\u6587\u4EF6\u53CA","...."]),p=d({serverNumber:"",reverseHost:""}),J=()=>{window.localStorage.setItem("pikpakDownload",JSON.stringify(p.value)),window.$message.success("\u4FDD\u5B58\u6210\u529F")},v=d({serverNumber:"",reverseHost:""}),P=()=>{window.localStorage.setItem("pikpakPlay",JSON.stringify(v.value)),window.$message.success("\u4FDD\u5B58\u6210\u529F")},o=d({host:"http://localhost:6800/jsonrpc",token:"",dir:!0,serverNumber:"",batchUrlNum:1,batchUrlConcurrence:4,serverNumbers:w,batchStrategy:"natural",reverseHost:""}),H=Q(()=>o.value.host&&ou(o.value.host)),$=()=>{let n={id:"",jsonrpc:"2.0",method:"aria2.getGlobalStat",params:[]};o.value.token&&n.params.splice(0,0,"token:"+o.value.token),fetch(o.value.host,{method:"POST",body:JSON.stringify(n),headers:new Headers({"Content-Type":"application/json"})}).then(a=>a.json()).then(a=>{a.error&&a.error.message?window.$message.error(a.error.message):a.result&&(window.localStorage.setItem("pikpakAria2",JSON.stringify(o.value)),window.$message.success("\u4FDD\u5B58\u6210\u529F"))}).catch(a=>console.error("Error:",a))},m=d(!1),D=d({username:"",password:""}),z=K(),L=()=>{m.value?z.warning({title:"\u8B66\u544A",content:"\u8BB0\u4F4F\u767B\u9646\u662F\u6307\u6D4F\u89C8\u5668\u672C\u5730\u660E\u6587\u4FDD\u5B58\u7528\u6237\u540D\u5BC6\u7801\u7528\u4E8E\u4E0B\u6B21\u81EA\u52A8\u767B\u9646\uFF0C\u8BF7\u52FF\u5728\u975E\u4FE1\u4EFB\u8BBE\u5907\u9009\u62E9",positiveText:"\u786E\u5B9A",negativeText:"\u4E0D\u786E\u5B9A",onPositiveClick:()=>{window.localStorage.setItem("pikpakLoginData",JSON.stringify(D.value))},onNegativeClick:()=>{}}):window.localStorage.removeItem("pikpakLoginData")},c=d(""),R=()=>{let n=c.value.split(`
`).filter(a=>a!="");window.localStorage.setItem("proxy",JSON.stringify(n)),window.localStorage.setItem("isSettingProxy","true")},V=()=>{window.localStorage.setItem("proxy",JSON.stringify(j)),window.localStorage.removeItem("isSettingProxy"),c.value=j.join(`
`)};Z(()=>{let n=JSON.parse(window.localStorage.getItem("pikpakAria2")||"{}");n.dir===void 0&&(n.dir=!0),n.serverNumbers===void 0&&(n.serverNumbers=w),n.host&&(o.value=n);let a=JSON.parse(window.localStorage.getItem("pikpakDownload")||"{}");p.value=a;let t=JSON.parse(window.localStorage.getItem("pikpakPlay")||"{}");v.value=t;let b=JSON.parse(window.localStorage.getItem("pikpakLoginData")||"{}");b.username&&b.password&&(D.value=b,m.value=!0);let y=JSON.parse(window.localStorage.getItem("proxy")||"[]");y.length&&(c.value=y.join(`
`))});const A=d(),G=()=>{let n=JSON.parse(window.localStorage.getItem("pikpakLogin")||"{}");if(!n&&!n.access_token)return window.$message.error("\u8BF7\u5148\u767B\u9646"),!1;let a=A.value&&decodeURIComponent(A.value).match(/(^|&)token=([^&]*)(&|$)/);if(console.log(a),!a||!a.length||a.length!=4)return window.$message.error("\u8BF7\u8F93\u5165\u6B63\u786E\u94FE\u63A5"),!1;su.post("https://api-drive.mypikpak.com/user/v1/bind",{accessToken:n.access_token,thirdType:"TG",thirdToken:a[2]}).then(t=>{A.value="",t.data.bound?window.$message.success("\u7ED1\u5B9A\u6210\u529F"):window.$message.error("\u7ED1\u5B9A\u5931\u8D25")})};return(n,a)=>(_(),N("div",iu,[e(u(q),{"default-expanded-names":["-1","0","2","3","download"]},{default:l(()=>[e(u(E),{name:"-1"},{header:l(()=>[Fu,i("a",{onClick:a[0]||(a[0]=C(()=>{},["stop"])),href:"https://www.tjsky.net/?p=220#Telegram",target:"_blank"},[e(u(f),{style:{"vertical-align":"middle"},size:"20",color:"#d03050"},{default:l(()=>[e(u(k))]),_:1})])]),default:l(()=>[e(u(F),{value:A.value,"onUpdate:value":a[1]||(a[1]=t=>A.value=t),placeholder:"\u590D\u5236telegram\u7ED1\u5B9A\u94FE\u63A5\u5230\u8FD9"},null,8,["value"]),du,e(u(B),{disabled:!A.value,type:"primary",onClick:G},{default:l(()=>[Eu]),_:1},8,["disabled"]),pu,vu]),_:1}),e(u(E),{name:"0",title:"Aria2\u8BBE\u7F6E"},{header:l(()=>[Du,i("a",{onClick:a[2]||(a[2]=C(()=>{},["stop"])),href:"https://www.tjsky.net/?p=220#arai2",target:"_blank"},[e(u(f),{style:{"vertical-align":"middle"},size:"20",color:"#d03050"},{default:l(()=>[e(u(k))]),_:1})])]),default:l(()=>[e(u(g),{"label-width":"120px","label-align":"left","label-placement":"left",autocomplete:"off"},{default:l(()=>[e(u(s),{label:"Aria2\u94FE\u63A5\uFF1A"},{default:l(()=>[e(u(F),{value:o.value.host,"onUpdate:value":a[3]||(a[3]=t=>o.value.host=t),placeholder:"\u4F8B\u5982http://localhost:6800/jsonrpc",clearable:""},null,8,["value"])]),_:1}),e(u(s),{label:"Aria2 Token\uFF1A"},{default:l(()=>[e(u(F),{value:o.value.token,"onUpdate:value":a[4]||(a[4]=t=>o.value.token=t),type:"password","show-password-on":"mousedown",clearable:""},null,8,["value"])]),_:1}),e(u(s),{label:"\u53CD\u4EE3\u57DF\u540D\uFF1A",feedback:"\u5BF9\u5168\u90E8Aria2\u4E0B\u8F7D\u751F\u6548\u3002\u53EF\u4EE5\u53C2\u8003\u6559\u7A0B\uFF1Ahttps://www.tjsky.net/?p=433"},{default:l(()=>[e(u(F),{value:o.value.reverseHost,"onUpdate:value":a[5]||(a[5]=t=>o.value.reverseHost=t),placeholder:"\u4F8B\u5982http://pcdn.xx.com",clearable:""},null,8,["value"])]),_:1}),e(u(s),{label:"\u670D\u52A1\u5668\u5E8F\u53F7\uFF1A",feedback:"\u4EC5\u5BF9\u300C\u63A8\u9001\u5230Aria2\u300D\u751F\u6548"},{default:l(()=>[e(u(h),{value:o.value.serverNumber,"onUpdate:value":a[6]||(a[6]=t=>o.value.serverNumber=t),options:o.value.serverNumbers,placeholder:"\u4E0B\u8F7D\u670D\u52A1\u5668\u5E8F\u53F7",clearable:""},null,8,["value","options"])]),_:1}),e(u(s),{label:"\u670D\u52A1\u5668\u5217\u8868\uFF1A"},{default:l(()=>[e(u(W),{value:o.value.serverNumbers,"onUpdate:value":a[7]||(a[7]=t=>o.value.serverNumbers=t)},null,8,["value"])]),_:1}),e(u(s),{label:"\u53E0\u52A0\u6570\u91CF\uFF1A",feedback:"\u5BF9\u5E94\u529F\u80FD\u300CAria2-Buff\u300D\u3002\u4F7F\u7528\u591A\u4E2A\u94FE\u63A5\u4E0B\u8F7D\u4E00\u4E2A\u6587\u4EF6\uFF0C\u9002\u5408\u9700\u8981\u66F4\u5FEB\u4E0B\u8F7D\u67D0\u4E2A\u6587\u4EF6\u7684\u573A\u666F"},{default:l(()=>[e(u(S),{value:o.value.batchUrlNum,"onUpdate:value":a[8]||(a[8]=t=>o.value.batchUrlNum=t),placeholder:"\u9700\u8981\u63A8\u9001\u591A\u5C11\u4E2A\u94FE\u63A5\u4E0B\u8F7D\u4E00\u4E2A\u6587\u4EF6",min:0,max:64},null,8,["value"])]),_:1}),e(u(s),{label:"\u53E0\u52A0\u7B56\u7565\uFF1A",feedback:"\u300C\u81EA\u7136\u9009\u62E9\u300D\uFF1A\u53D6\u5230\u4EC0\u4E48\u5C31\u7528\u4EC0\u4E48\uFF1B\u300C\u5E8F\u5217\u5FAA\u574F\u300D\uFF1A\u4ECE\u300C\u670D\u52A1\u5668\u5E8F\u53F7\u5217\u8868\u300D\u4E2D\u4ECE\u5934\u5230\u5C3E\u9009\u53D6"},{default:l(()=>[e(u(X),{value:o.value.batchStrategy,"onUpdate:value":a[9]||(a[9]=t=>o.value.batchStrategy=t)},{default:l(()=>[e(u(x),{value:"natural",label:"\u81EA\u7136\u9009\u62E9"},{default:l(()=>[Au]),_:1}),e(u(x),{value:"series",label:"\u5E8F\u5217\u5FAA\u574F"},{default:l(()=>[Bu]),_:1})]),_:1},8,["value"])]),_:1}),e(u(s),{label:"\u83B7\u53D6\u94FE\u63A5\u5E76\u53D1\uFF1A",feedback:"\u63D0\u53D6\u591A\u4E2A\u4E0B\u8F7D\u94FE\u63A5\u65F6\u7684\u5E76\u53D1\u6570\u3002\u5EFA\u8BAE\u4E0D\u8981\u592A\u5927\uFF0C\u4EE5\u514D\u89E6\u53D1\u98CE\u63A7(\u5B9E\u9645\u4F5C\u8005\u4E5F\u4E0D\u6E05\u695A\u5177\u4F53\u7684\u9650\u5236)"},{default:l(()=>[e(u(S),{value:o.value.batchUrlConcurrence,"onUpdate:value":a[10]||(a[10]=t=>o.value.batchUrlConcurrence=t),placeholder:"\u63D0\u53D6\u591A\u4E2A\u4E0B\u8F7D\u94FE\u63A5\u65F6\u7684\u5E76\u53D1\u6570"},null,8,["value"])]),_:1}),e(u(s),{label:"\u6587\u4EF6\u5939\u8BBE\u7F6E\uFF1A"},{default:l(()=>[e(u(U),{value:o.value.dir,"onUpdate:value":a[11]||(a[11]=t=>o.value.dir=t)},{checked:l(()=>[mu]),unchecked:l(()=>[cu]),_:1},8,["value"])]),_:1}),u(H)?(_(),Y(u(uu),{key:0,type:"warning",title:"\u7531\u4E8E\u6D4F\u89C8\u5668\u9650\u5236\uFF0C\u8BF7\u5728\u6D4F\u89C8\u5668\u7684\u300C\u7F51\u7AD9\u8BBE\u7F6E\u300D\u4E2D\uFF0C\u5C06\u300C\u4E0D\u5B89\u5168\u5185\u5BB9\u300D\u8BBE\u7F6E\u4E3A\u300C\u5141\u8BB8\u300D"},{default:l(()=>[fu]),_:1})):I("",!0),e(u(s),null,{default:l(()=>[e(u(B),{type:"primary",onClick:$},{default:l(()=>[gu]),_:1})]),_:1})]),_:1})]),_:1}),e(u(E),{name:"download",title:"\u4E0B\u8F7D\u8BBE\u7F6E"},{header:l(()=>[wu,e(u(f),{style:{"vertical-align":"middle"},size:"20",color:"#d03050"},{default:l(()=>[e(u(T))]),_:1})]),default:l(()=>[e(u(g),{"label-width":"120px","label-align":"left","label-placement":"left"},{default:l(()=>[e(u(s),{label:"\u670D\u52A1\u5668\u5E8F\u53F7\uFF1A",feedback:"\u66FF\u6362\u4E0B\u8F7D\u94FE\u63A5\u57DF\u540D\u4E2D\u7684\u670D\u52A1\u5668\u5E8F\u53F7\u3002\u5E8F\u53F7\u8BF7\u53C2\u8003\u4E0A\u9762\u300CAria2\u8BBE\u7F6E\u300D\u91CC\u7684\u300C\u670D\u52A1\u5668\u5E8F\u53F7\u5217\u8868\u300D"},{default:l(()=>[e(u(h),{value:p.value.serverNumber,"onUpdate:value":a[12]||(a[12]=t=>p.value.serverNumber=t),options:u(w),placeholder:"\u4E0B\u8F7D\u670D\u52A1\u5668\u5E8F\u53F7",clearable:""},null,8,["value","options"])]),_:1}),e(u(s),{label:"\u53CD\u4EE3\u57DF\u540D\uFF1A",feedback:"\u81EA\u52A8\u5728\u4E0B\u8F7D\u94FE\u63A5\u524D\u52A0\u4E0A\u8BE5\u53CD\u4EE3\u57DF\u540D\u3002\u53EF\u4EE5\u53C2\u8003\u6559\u7A0B\uFF1Ahttps://www.tjsky.net/?p=433"},{default:l(()=>[e(u(F),{value:p.value.reverseHost,"onUpdate:value":a[13]||(a[13]=t=>p.value.reverseHost=t),placeholder:"\u53CD\u4EE3\u57DF\u540D",clearable:""},null,8,["value"])]),_:1}),e(u(s),null,{default:l(()=>[e(u(B),{type:"primary",onClick:J},{default:l(()=>[bu]),_:1})]),_:1})]),_:1})]),_:1}),e(u(E),{name:"play",title:"\u64AD\u653E\u8BBE\u7F6E"},{header:l(()=>[_u,e(u(f),{style:{"vertical-align":"middle"},size:"20",color:"#d03050"},{default:l(()=>[e(u(T))]),_:1})]),default:l(()=>[e(u(g),{"label-width":"120px","label-align":"left","label-placement":"left"},{default:l(()=>[e(u(s),{label:"\u670D\u52A1\u5668\u5E8F\u53F7\uFF1A",feedback:"\u66FF\u6362\u64AD\u653E\u94FE\u63A5\u57DF\u540D\u4E2D\u7684\u670D\u52A1\u5668\u5E8F\u53F7\u3002\u5E8F\u53F7\u8BF7\u53C2\u8003\u4E0A\u9762\u300CAria2\u8BBE\u7F6E\u300D\u91CC\u7684\u300C\u670D\u52A1\u5668\u5E8F\u53F7\u5217\u8868\u300D"},{default:l(()=>[e(u(h),{value:v.value.serverNumber,"onUpdate:value":a[14]||(a[14]=t=>v.value.serverNumber=t),options:u(w),placeholder:"\u670D\u52A1\u5668\u5E8F\u53F7",clearable:""},null,8,["value","options"])]),_:1}),e(u(s),{label:"\u53CD\u4EE3\u57DF\u540D\uFF1A",feedback:"\u81EA\u52A8\u5728\u64AD\u653E\u94FE\u63A5\u524D\u52A0\u4E0A\u8BE5\u53CD\u4EE3\u57DF\u540D\u3002\u53EF\u4EE5\u53C2\u8003\u6559\u7A0B\uFF1Ahttps://www.tjsky.net/?p=433"},{default:l(()=>[e(u(F),{value:v.value.reverseHost,"onUpdate:value":a[15]||(a[15]=t=>v.value.reverseHost=t),placeholder:"\u53CD\u4EE3\u57DF\u540D",clearable:""},null,8,["value"])]),_:1}),e(u(s),null,{default:l(()=>[e(u(B),{type:"primary",onClick:P},{default:l(()=>[ku]),_:1})]),_:1})]),_:1})]),_:1}),e(u(E),{name:"1",title:"\u81EA\u52A8\u767B\u5F55\u8BBE\u7F6E"},{header:l(()=>[Cu,i("a",{onClick:a[16]||(a[16]=C(()=>{},["stop"])),href:"https://www.tjsky.net/?p=220#i-6",target:"_blank"},[e(u(f),{style:{"vertical-align":"middle"},size:"20",color:"#d03050"},{default:l(()=>[e(u(k))]),_:1})])]),default:l(()=>[e(u(g),{"label-width":"100px","label-align":"left","label-placement":"left"},{default:l(()=>[e(u(s),{label:"\u662F\u5426\u5F00\u542F"},{default:l(()=>[e(u(U),{value:m.value,"onUpdate:value":a[17]||(a[17]=t=>m.value=t)},null,8,["value"])]),_:1}),m.value?(_(),N(eu,{key:0},[e(u(s),{label:"\u7528\u6237\u540D"},{default:l(()=>[e(u(F),{value:D.value.username,"onUpdate:value":a[18]||(a[18]=t=>D.value.username=t),placeholder:"\u7528\u6237\u540D"},null,8,["value"])]),_:1}),e(u(s),{label:"\u5BC6\u7801"},{default:l(()=>[e(u(F),{value:D.value.password,"onUpdate:value":a[19]||(a[19]=t=>D.value.password=t),type:"password","show-password-on":"mousedown"},null,8,["value"])]),_:1})],64)):I("",!0),e(u(s),null,{default:l(()=>[e(u(B),{type:"primary",onClick:L},{default:l(()=>[hu]),_:1})]),_:1})]),_:1})]),_:1}),e(u(E),{name:"3",title:"\u4EE3\u7406\u8BBE\u7F6E"},{default:l(()=>[e(u(F),{type:"textarea",value:c.value,"onUpdate:value":a[20]||(a[20]=t=>c.value=t),rows:"4",placeholder:"\u652F\u6301\u591A\u4E2A\u968F\u673A\uFF0C\u4E00\u884C\u4E00\u4E2A\uFF0C\u4E3A\u7A7A\u5219\u4E0D\u4EE3\u7406"},null,8,["value"]),yu,e(u(B),{type:"primary",onClick:R},{default:l(()=>[Nu]),_:1}),Su,e(u(au),{onClick:V},{default:l(()=>[xu]),_:1})]),_:1}),e(u(E),{title:"\u5173\u4E8E",name:"2"},{default:l(()=>[e(u(lu),null,{default:l(()=>[Uu,Iu,Tu,ju]),_:1}),Ou]),_:1}),e(u(E),{title:"\u529F\u80FD\u5217\u8868",name:"3"},{default:l(()=>[e(u(tu),{lines:O.value},null,8,["lines"])]),_:1})]),_:1})]))}});export{$u as default};