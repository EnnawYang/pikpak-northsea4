import{d as L,r as E,a4 as R,p as G,o as M,b as C,s as N,e,f as u,aH as Q,w as l,aI as p,F as i,aw as b,I as B,aJ as h,R as F,Q as m,ax as n,aK as g,aL as K,aM as W,aN as Z,aO as q,c as X,av as Y,D as S,az as w,aP as uu,aQ as x,V as eu,T as au,aR as lu,B as tu,an as ou,aS as su,y as s}from"./vendor.d208e74f.js";import{s as _,j as nu,p as I,i as ru}from"./index.0729b0ae.js";var iu="/pikpak-northsea4/assets/aria2-tip-1.e9ebfae4.png",Fu="/pikpak-northsea4/assets/aria2-tip-2.f3636f8d.png";const du={class:"list-page"},Eu=s(" \u7ED1\u5B9Atelegram "),pu=i("p",null,null,-1),vu=s("Telegram\u7ED1\u5B9A"),Du=s("\xA0 "),Au=i("a",{href:"https://t.me/PikPak_Bot",target:"_blank"},"Telegram\u673A\u5668\u4EBA\u5730\u5740",-1),Bu=s("Aria2\u8BBE\u7F6E "),mu=s("\u5F00\u542F - \u907F\u514D\u8BF7\u6C42\u9891\u7E41"),fu=s("\u4E0D\u5F00\u542F - Aria2\u9ED8\u8BA4\u63A7\u5236"),cu=s("\u5E8F\u5217\u5FAA\u574F"),gu=s("\u9009\u62E9\u6587\u4EF6\u5939\u65F6\u4FDD\u5B58\u6587\u4EF6\u5939\u7ED3\u6784"),wu=s("\u9009\u62E9\u6587\u4EF6\u5939\u65F6\u4EC5\u4FDD\u5B58\u6587\u4EF6"),_u=i("div",null,[i("img",{src:iu,alt:""}),s("\xA0 "),i("img",{src:Fu,alt:""})],-1),ku=s("\u6D4B\u8BD5\u5E76\u4FDD\u5B58"),Cu=s("\u7F51\u9875\u4E0B\u8F7D\u8BBE\u7F6E "),bu=s("\u4FDD\u5B58"),hu=s("\u64AD\u653E\u8BBE\u7F6E "),yu=s("\u4FDD\u5B58"),Nu=s("\u81EA\u52A8\u767B\u5F55\u8BBE\u7F6E "),Su=s("\u4FDD\u5B58"),xu=s("\u4EE3\u7406\u8BBE\u7F6E "),Iu=i("p",null,null,-1),Uu=s("\u4FDD\u5B58\u8BBE\u7F6E"),Tu=s(" \xA0\xA0 "),ju=s("\u6062\u590D\u9ED8\u8BA4"),Ou=i("a",{href:"https://mypikpak.com/",target:"_blank",class:"n-button"},"\u5B98\u65B9\u7F51\u7AD9",-1),Ju=i("a",{href:"https://t.me/pikpak_userservice",target:"_blank",class:"n-button"},"\u5B98\u65B9\u4EA4\u6D41\u7FA4",-1),Pu=i("a",{href:"https://github.com/northsea4/pikpak",target:"_blank",class:"n-button"},"\u5F00\u6E90\u4ED3\u5E93",-1),Hu=i("a",{href:"https://www.tjsky.net/?p=201",target:"_blank",class:"n-button"},"\u90E8\u7F72\u6559\u7A0B",-1),$u=i("br",null,null,-1),Ru=L({setup(Vu){const U=E(["\u624B\u673A\u6CE8\u518C\u767B\u9646","\u6DFB\u52A0\u63A8\u5E7F\u4E0B\u8F7D","\u7ED1\u5B9ATelegram","\u76F4\u63A5\u5206\u4EAB\u529F\u80FD\uFF08\u4E0B\u7EBF\uFF09","\u4FEE\u6539\u4F20\u8F93\u81EA\u52A8\u8BF7\u6C42\u65B9\u5F0F","\u4F20\u8F93\u53EA\u663E\u793A\u4FDD\u5B58\u4E2D","\u81EA\u5B9A\u4E49\u83DC\u5355","\u8D44\u6E90\u5E93\u5206\u9875\uFF0C\u5206\u4EAB\u79D2\u4F20\u652F\u6301\u6587\u4EF6\u53CA","...."]),v=E({serverNumber:"",reverseHost:""}),T=()=>{window.localStorage.setItem("pikpakDownload",JSON.stringify(v.value)),window.$message.success("\u4FDD\u5B58\u6210\u529F")},d=E({serverNumber:"",reverseHost:"",applyToImage:!1}),j=()=>{window.localStorage.setItem("pikpakPlay",JSON.stringify(d.value)),window.$message.success("\u4FDD\u5B58\u6210\u529F")},o=E({host:"http://localhost:6800/jsonrpc",token:"",dir:!0,restrictConnections:!1,batchUrlNum:5,serverNumbers:_,batchStrategy:"series",reverseHost:""}),O=R(()=>o.value.host&&nu(o.value.host)),J=()=>{let r={id:"",jsonrpc:"2.0",method:"aria2.getGlobalStat",params:[]};o.value.token&&r.params.splice(0,0,"token:"+o.value.token),fetch(o.value.host,{method:"POST",body:JSON.stringify(r),headers:new Headers({"Content-Type":"application/json"})}).then(a=>a.json()).then(a=>{a.error&&a.error.message?window.$message.error(a.error.message):a.result&&(window.localStorage.setItem("pikpakAria2",JSON.stringify(o.value)),window.$message.success("\u4FDD\u5B58\u6210\u529F"))}).catch(a=>console.error("Error:",a))},f=E(!1),D=E({username:"",password:""}),P=G(),H=()=>{f.value?P.warning({title:"\u8B66\u544A",content:"\u8BB0\u4F4F\u767B\u9646\u662F\u6307\u6D4F\u89C8\u5668\u672C\u5730\u660E\u6587\u4FDD\u5B58\u7528\u6237\u540D\u5BC6\u7801\u7528\u4E8E\u4E0B\u6B21\u81EA\u52A8\u767B\u9646\uFF0C\u8BF7\u52FF\u5728\u975E\u4FE1\u4EFB\u8BBE\u5907\u9009\u62E9",positiveText:"\u786E\u5B9A",negativeText:"\u4E0D\u786E\u5B9A",onPositiveClick:()=>{window.localStorage.setItem("pikpakLoginData",JSON.stringify(D.value))},onNegativeClick:()=>{}}):window.localStorage.removeItem("pikpakLoginData")},c=E(""),$=()=>{let r=c.value.split(`
`).filter(a=>a!="");window.localStorage.setItem("proxy",JSON.stringify(r)),window.localStorage.setItem("isSettingProxy","true")},V=()=>{window.localStorage.setItem("proxy",JSON.stringify(I)),window.localStorage.removeItem("isSettingProxy"),c.value=I.join(`
`)};M(()=>{let r=JSON.parse(window.localStorage.getItem("pikpakAria2")||"{}");r.dir===void 0&&(r.dir=!0),r.serverNumbers===void 0&&(r.serverNumbers=_),r.host&&(o.value=r);let a=JSON.parse(window.localStorage.getItem("pikpakDownload")||"{}");v.value=a;let t=JSON.parse(window.localStorage.getItem("pikpakPlay")||"{}");d.value=t;let k=JSON.parse(window.localStorage.getItem("pikpakLoginData")||"{}");k.username&&k.password&&(D.value=k,f.value=!0);let y=JSON.parse(window.localStorage.getItem("proxy")||"[]");y.length&&(c.value=y.join(`
`))});const A=E(),z=()=>{let r=JSON.parse(window.localStorage.getItem("pikpakLogin")||"{}");if(!r&&!r.access_token)return window.$message.error("\u8BF7\u5148\u767B\u9646"),!1;let a=A.value&&decodeURIComponent(A.value).match(/(^|&)token=([^&]*)(&|$)/);if(console.log(a),!a||!a.length||a.length!=4)return window.$message.error("\u8BF7\u8F93\u5165\u6B63\u786E\u94FE\u63A5"),!1;ru.post("https://api-drive.mypikpak.com/user/v1/bind",{accessToken:r.access_token,thirdType:"TG",thirdToken:a[2]}).then(t=>{A.value="",t.data.bound?window.$message.success("\u7ED1\u5B9A\u6210\u529F"):window.$message.error("\u7ED1\u5B9A\u5931\u8D25")})};return(r,a)=>(C(),N("div",du,[e(u(Q),{"default-expanded-names":["-1","0","2","3","download"]},{default:l(()=>[e(u(p),{name:"-1"},{header:l(()=>[Eu,i("a",{onClick:a[0]||(a[0]=h(()=>{},["stop"])),href:"https://www.tjsky.net/?p=220#Telegram",target:"_blank"},[e(u(B),{style:{"vertical-align":"middle"},size:"20",color:"#d03050"},{default:l(()=>[e(u(b))]),_:1})])]),default:l(()=>[e(u(F),{value:A.value,"onUpdate:value":a[1]||(a[1]=t=>A.value=t),placeholder:"\u590D\u5236telegram\u7ED1\u5B9A\u94FE\u63A5\u5230\u8FD9"},null,8,["value"]),pu,e(u(m),{disabled:!A.value,type:"primary",onClick:z},{default:l(()=>[vu]),_:1},8,["disabled"]),Du,Au]),_:1}),e(u(p),{name:"0",title:"Aria2\u8BBE\u7F6E"},{header:l(()=>[Bu,i("a",{onClick:a[2]||(a[2]=h(()=>{},["stop"])),href:"https://www.tjsky.net/?p=220#arai2",target:"_blank"},[e(u(B),{style:{"vertical-align":"middle"},size:"20",color:"#d03050"},{default:l(()=>[e(u(b))]),_:1})])]),default:l(()=>[e(u(w),{"label-width":"120px","label-align":"left","label-placement":"left",autocomplete:"off"},{default:l(()=>[e(u(n),{label:"Aria2\u94FE\u63A5\uFF1A"},{default:l(()=>[e(u(F),{value:o.value.host,"onUpdate:value":a[3]||(a[3]=t=>o.value.host=t),placeholder:"\u4F8B\u5982http://localhost:6800/jsonrpc",clearable:""},null,8,["value"])]),_:1}),e(u(n),{label:"Aria2 Token\uFF1A"},{default:l(()=>[e(u(F),{value:o.value.token,"onUpdate:value":a[4]||(a[4]=t=>o.value.token=t),type:"password","show-password-on":"mousedown",clearable:""},null,8,["value"])]),_:1}),e(u(n),{label:"\u9650\u5236\u8FDE\u63A5\u6570\uFF1A",feedback:"\u3010\u5B9E\u6D4B\u5E76\u6CA1\u6709\u964D\u4F4E429\u7684\u6982\u7387\u{1F605}\u3011\u4E00\u4E2A\u4E0B\u8F7D\u94FE\u63A5\u53EA\u4F7F\u7528\u4E00\u4E2A\u7F51\u7EDC\u8FDE\u63A5(\u7EBF\u7A0B)\uFF0C\u4F7F\u7528\u53CD\u4EE3\u65F6\uFF0C\u5EFA\u8BAE\u5F00\u542F\uFF0C\u907F\u514D429\u3002\u5982\u4E0D\u5F00\u542F\uFF0C\u8BF7\u67E5\u770BAria2\u9ED8\u8BA4\u7684`\u5355\u4EFB\u52A1\u8FDE\u63A5\u6570`\u548C`\u5355\u670D\u52A1\u5668\u6700\u5927\u8FDE\u63A5\u6570`"},{default:l(()=>[e(u(g),{value:o.value.restrictConnections,"onUpdate:value":a[5]||(a[5]=t=>o.value.restrictConnections=t)},{checked:l(()=>[mu]),unchecked:l(()=>[fu]),_:1},8,["value"])]),_:1}),e(u(n),{label:"\u53CD\u4EE3\u57DF\u540D\uFF1A",feedback:"\u5BF9\u5168\u90E8Aria2\u4E0B\u8F7D\u751F\u6548\u3002\u53EF\u4EE5\u53C2\u8003\u6559\u7A0B\uFF1Ahttps://www.tjsky.net/?p=433"},{default:l(()=>[e(u(F),{value:o.value.reverseHost,"onUpdate:value":a[6]||(a[6]=t=>o.value.reverseHost=t),placeholder:"\u4F8B\u5982http://pcdn.xx.com",clearable:""},null,8,["value"])]),_:1}),e(u(n),{label:"\u670D\u52A1\u5668\u5217\u8868\uFF1A"},{default:l(()=>[e(u(K),{value:o.value.serverNumbers,"onUpdate:value":a[7]||(a[7]=t=>o.value.serverNumbers=t)},null,8,["value"])]),_:1}),e(u(n),{label:"\u53E0\u52A0\u6570\u91CF\uFF1A",feedback:"\u5BF9\u5E94\u529F\u80FD\u300C\u63A8\u9001\u5230Aria2\u300D\uFF0C\u4F7F\u7528\u591A\u4E2A\u94FE\u63A5\u4E0B\u8F7D\u4E00\u4E2A\u6587\u4EF6"},{default:l(()=>[e(u(W),{value:o.value.batchUrlNum,"onUpdate:value":a[8]||(a[8]=t=>o.value.batchUrlNum=t),placeholder:"\u9700\u8981\u63A8\u9001\u591A\u5C11\u4E2A\u94FE\u63A5\u4E0B\u8F7D\u4E00\u4E2A\u6587\u4EF6",min:0,max:64},null,8,["value"])]),_:1}),e(u(n),{label:"\u53E0\u52A0\u7B56\u7565\uFF1A",feedback:"\u300C\u5E8F\u5217\u5FAA\u574F\u300D\uFF1A\u4ECE\u300C\u670D\u52A1\u5668\u5E8F\u53F7\u5217\u8868\u300D\u4E2D\u4ECE\u5934\u5230\u5C3E\u9009\u53D6"},{default:l(()=>[e(u(Z),{value:o.value.batchStrategy,"onUpdate:value":a[9]||(a[9]=t=>o.value.batchStrategy=t)},{default:l(()=>[e(u(q),{value:"series",label:"\u5E8F\u5217\u5FAA\u574F"},{default:l(()=>[cu]),_:1})]),_:1},8,["value"])]),_:1}),e(u(n),{label:"\u6587\u4EF6\u5939\u8BBE\u7F6E\uFF1A"},{default:l(()=>[e(u(g),{value:o.value.dir,"onUpdate:value":a[10]||(a[10]=t=>o.value.dir=t)},{checked:l(()=>[gu]),unchecked:l(()=>[wu]),_:1},8,["value"])]),_:1}),u(O)?(C(),X(u(Y),{key:0,type:"warning",title:"\u7531\u4E8E\u6D4F\u89C8\u5668\u9650\u5236\uFF0C\u8BF7\u5728\u6D4F\u89C8\u5668\u7684\u300C\u7F51\u7AD9\u8BBE\u7F6E\u300D\u4E2D\uFF0C\u5C06\u300C\u4E0D\u5B89\u5168\u5185\u5BB9\u300D\u8BBE\u7F6E\u4E3A\u300C\u5141\u8BB8\u300D"},{default:l(()=>[_u]),_:1})):S("",!0),e(u(n),null,{default:l(()=>[e(u(m),{type:"primary",onClick:J},{default:l(()=>[ku]),_:1})]),_:1})]),_:1})]),_:1}),e(u(p),{name:"download",title:"\u7F51\u9875\u4E0B\u8F7D\u8BBE\u7F6E"},{header:l(()=>[Cu,e(u(B),{style:{"vertical-align":"middle"},size:"20",color:"#d03050"},{default:l(()=>[e(u(uu))]),_:1})]),default:l(()=>[e(u(w),{"label-width":"120px","label-align":"left","label-placement":"left"},{default:l(()=>[e(u(n),{label:"\u670D\u52A1\u5668\u5E8F\u53F7\uFF1A",feedback:"\u66FF\u6362\u4E0B\u8F7D\u94FE\u63A5\u57DF\u540D\u4E2D\u7684\u670D\u52A1\u5668\u5E8F\u53F7\u3002\u5E8F\u53F7\u8BF7\u53C2\u8003\u4E0A\u9762\u300CAria2\u8BBE\u7F6E\u300D\u91CC\u7684\u300C\u670D\u52A1\u5668\u5E8F\u53F7\u5217\u8868\u300D"},{default:l(()=>[e(u(x),{value:v.value.serverNumber,"onUpdate:value":a[11]||(a[11]=t=>v.value.serverNumber=t),options:u(_),placeholder:"\u4E0B\u8F7D\u670D\u52A1\u5668\u5E8F\u53F7",clearable:""},null,8,["value","options"])]),_:1}),e(u(n),{label:"\u53CD\u4EE3\u57DF\u540D\uFF1A",feedback:"\u81EA\u52A8\u5728\u4E0B\u8F7D\u94FE\u63A5\u524D\u52A0\u4E0A\u8BE5\u53CD\u4EE3\u57DF\u540D\u3002\u53EF\u4EE5\u53C2\u8003\u6559\u7A0B\uFF1Ahttps://www.tjsky.net/?p=433"},{default:l(()=>[e(u(F),{value:v.value.reverseHost,"onUpdate:value":a[12]||(a[12]=t=>v.value.reverseHost=t),placeholder:"\u53CD\u4EE3\u57DF\u540D",clearable:""},null,8,["value"])]),_:1}),e(u(n),null,{default:l(()=>[e(u(m),{type:"primary",onClick:T},{default:l(()=>[bu]),_:1})]),_:1})]),_:1})]),_:1}),e(u(p),{name:"play",title:"\u64AD\u653E\u8BBE\u7F6E"},{header:l(()=>[hu,e(u(B),{style:{"vertical-align":"middle"},size:"20",color:"#d03050"},{default:l(()=>[e(u(eu))]),_:1})]),default:l(()=>[e(u(w),{"label-width":"120px","label-align":"left","label-placement":"left"},{default:l(()=>[e(u(n),{label:"\u670D\u52A1\u5668\u5E8F\u53F7\uFF1A",feedback:"\u66FF\u6362\u64AD\u653E\u94FE\u63A5\u57DF\u540D\u4E2D\u7684\u670D\u52A1\u5668\u5E8F\u53F7\u3002\u5E8F\u53F7\u8BF7\u53C2\u8003\u4E0A\u9762\u300CAria2\u8BBE\u7F6E\u300D\u91CC\u7684\u300C\u670D\u52A1\u5668\u5E8F\u53F7\u5217\u8868\u300D"},{default:l(()=>[e(u(x),{value:d.value.serverNumber,"onUpdate:value":a[13]||(a[13]=t=>d.value.serverNumber=t),options:u(_),placeholder:"\u670D\u52A1\u5668\u5E8F\u53F7",clearable:""},null,8,["value","options"])]),_:1}),e(u(n),{label:"\u53CD\u4EE3\u57DF\u540D\uFF1A",feedback:"\u81EA\u52A8\u5728\u64AD\u653E\u94FE\u63A5\u524D\u52A0\u4E0A\u8BE5\u53CD\u4EE3\u57DF\u540D\u3002\u53EF\u4EE5\u53C2\u8003\u6559\u7A0B\uFF1Ahttps://www.tjsky.net/?p=433"},{default:l(()=>[e(u(F),{value:d.value.reverseHost,"onUpdate:value":a[14]||(a[14]=t=>d.value.reverseHost=t),placeholder:"\u53CD\u4EE3\u57DF\u540D",clearable:""},null,8,["value"])]),_:1}),e(u(n),{label:"\u5E94\u7528\u5230\u56FE\u7247\u67E5\u770B\uFF1A",feedback:"\u67E5\u770B\u56FE\u7247\u65F6\u4E5F\u4F7F\u7528\u6307\u5B9A\u5E8F\u53F7\u548C\u53CD\u4EE3\u57DF\u540D"},{default:l(()=>[e(u(g),{value:d.value.applyToImage,"onUpdate:value":a[15]||(a[15]=t=>d.value.applyToImage=t)},null,8,["value"])]),_:1}),e(u(n),null,{default:l(()=>[e(u(m),{type:"primary",onClick:j},{default:l(()=>[yu]),_:1})]),_:1})]),_:1})]),_:1}),e(u(p),{name:"1",title:"\u81EA\u52A8\u767B\u5F55\u8BBE\u7F6E"},{header:l(()=>[Nu,i("a",{onClick:a[16]||(a[16]=h(()=>{},["stop"])),href:"https://www.tjsky.net/?p=220#i-6",target:"_blank"},[e(u(B),{style:{"vertical-align":"middle"},size:"20",color:"#d03050"},{default:l(()=>[e(u(b))]),_:1})])]),default:l(()=>[e(u(w),{"label-width":"100px","label-align":"left","label-placement":"left"},{default:l(()=>[e(u(n),{label:"\u662F\u5426\u5F00\u542F"},{default:l(()=>[e(u(g),{value:f.value,"onUpdate:value":a[17]||(a[17]=t=>f.value=t)},null,8,["value"])]),_:1}),f.value?(C(),N(au,{key:0},[e(u(n),{label:"\u7528\u6237\u540D"},{default:l(()=>[e(u(F),{value:D.value.username,"onUpdate:value":a[18]||(a[18]=t=>D.value.username=t),placeholder:"\u7528\u6237\u540D"},null,8,["value"])]),_:1}),e(u(n),{label:"\u5BC6\u7801"},{default:l(()=>[e(u(F),{value:D.value.password,"onUpdate:value":a[19]||(a[19]=t=>D.value.password=t),type:"password","show-password-on":"mousedown"},null,8,["value"])]),_:1})],64)):S("",!0),e(u(n),null,{default:l(()=>[e(u(m),{type:"primary",onClick:H},{default:l(()=>[Su]),_:1})]),_:1})]),_:1})]),_:1}),e(u(p),{name:"3"},{header:l(()=>[xu,e(u(B),{style:{"vertical-align":"middle"},size:"20",color:"#d03050"},{default:l(()=>[e(u(lu))]),_:1})]),default:l(()=>[e(u(F),{type:"textarea",value:c.value,"onUpdate:value":a[20]||(a[20]=t=>c.value=t),rows:"4",placeholder:"\u652F\u6301\u591A\u4E2A\u968F\u673A\uFF0C\u4E00\u884C\u4E00\u4E2A\uFF0C\u4E3A\u7A7A\u5219\u4E0D\u4EE3\u7406"},null,8,["value"]),Iu,e(u(m),{type:"primary",onClick:$},{default:l(()=>[Uu]),_:1}),Tu,e(u(tu),{onClick:V},{default:l(()=>[ju]),_:1})]),_:1}),e(u(p),{title:"\u5173\u4E8E",name:"2"},{default:l(()=>[e(u(ou),null,{default:l(()=>[Ou,Ju,Pu,Hu]),_:1}),$u]),_:1}),e(u(p),{title:"\u529F\u80FD\u5217\u8868",name:"3"},{default:l(()=>[e(u(su),{lines:U.value},null,8,["lines"])]),_:1})]),_:1})]))}});export{Ru as default};
