(function(t){function e(e){for(var i,o,s=e[0],l=e[1],c=e[2],d=0,v=[];d<s.length;d++)o=s[d],r[o]&&v.push(r[o][0]),r[o]=0;for(i in l)Object.prototype.hasOwnProperty.call(l,i)&&(t[i]=l[i]);u&&u(e);while(v.length)v.shift()();return a.push.apply(a,c||[]),n()}function n(){for(var t,e=0;e<a.length;e++){for(var n=a[e],i=!0,s=1;s<n.length;s++){var l=n[s];0!==r[l]&&(i=!1)}i&&(a.splice(e--,1),t=o(o.s=n[0]))}return t}var i={},r={app:0},a=[];function o(e){if(i[e])return i[e].exports;var n=i[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=t,o.c=i,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)o.d(n,i,function(e){return t[e]}.bind(null,i));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=e,s=s.slice();for(var c=0;c<s.length;c++)e(s[c]);var u=l;a.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";var i=n("64a9"),r=n.n(i);r.a},1:function(t,e){},2:function(t,e){},"26dd":function(t,e){function n(t){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}n.keys=function(){return[]},n.resolve=n,t.exports=n,n.id="26dd"},3:function(t,e){},4:function(t,e){},"56d7":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("097d"),n("db4d");var i=n("a026"),r=n("ce5b"),a=n.n(r),o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("v-app",{attrs:{id:"inspire"}},[n("v-content",[n("v-container",{staticStyle:{margin:"18px auto 15px"},attrs:{"grid-list-md":""}},[n("v-layout",{attrs:{"justify-center":"",row:"",wrap:""}},[n("v-flex",{attrs:{sm12:"",md10:"",lg6:""}},[n("v-layout",{attrs:{row:"",wrap:""}},[n("v-flex",{staticClass:"text-xs-center text-sm-left",attrs:{xs12:"",sm6:""}},[n("router-link",{attrs:{to:"/"}},[n("img",{staticStyle:{height:"45px"},attrs:{alt:"",src:"static/assets/i/logo.svg"}})])],1),n("v-flex",{staticClass:"text-xs-center text-sm-right",attrs:{xs12:"",sm6:""}},[n("v-btn",{attrs:{to:"/",outline:""}},[t._v("Main")]),n("v-btn",{attrs:{to:"/model",outline:""}},[t._v("Model")]),n("v-btn",{attrs:{to:"/market",outline:""}},[t._v("Market")]),n("v-btn",{attrs:{to:"/robot",outline:""}},[t._v("Robot")])],1)],1)],1)],1)],1),n("web3-check",{attrs:{networks:t.network},on:{changeNetwork:t.onChangeNetwork,changeAccount:t.onChangeAccount}},[n("router-view")],1)],1)],1)],1)},s=[],l=(n("c5f6"),n("a4bb")),c=n.n(l),u=4,d={1:{ens:"",ensSuffix:"",lighthouse:"airalab.lighthouse.4.robonomics.eth"},355:{ens:"0x4e978ed8a05b516d8130ff7df54fbc8b7ceb6442",ensSuffix:"sid",lighthouse:"airalab.lighthouse.4.robonomics.sid"}},v="Qmd6bn2JGW26hSx7g5gVCmfgB7uigRPrhAukJn77ee3bMM",f="QmVAFgUxBitKqtV2sjaYcHkKfcAPVy3GswhaE5n5bcgLkf",h="https://wss.pool.aira.life",p="https://devjs-01.corp.aira.life:3024/",m=null,b="XRT",g=9,y=0,w={model:"QmPVr7k4N2jNiCYjbvQWPcmxzm5jwY3ZHEuJMgbQLmPKvY",objectives:{"1h":{objective:"QmPtwRTjPmvBweSmG4zVGtUc9KWxLsPp76xERvjUXFJWEz",label:"1h"},"24h":{objective:"QmbYXWWhNtnjhhBTvs2UfHiFLTUsXSZsoLoKSufiZHPxvR",label:"24h"},"60s":{objective:"QmYijVc27M27WyS1UiAB72GmeDBKVo2Nyvh1EYXUBZUNJb",label:"60s"}}},_={model:"QmNeMoBUiYjk4VzLtsBe9XAXfpyFawsUd9wEYTQy4tZpEj",objectives:{clockwise:{objective:"QmRmj9VnRBbgmQwZMVU3oCinaYG8oh1UAvQJbtPUmEWSq1",label:"clockwise"},counterclockwise:{objective:"Qmd1YREP5MMLzoxT2kmvEocPxFMGFiCrLK6zQRmp5ebBqU",label:"counterclockwise"}}},x={repo:"ipfs/robonomics",config:{Addresses:{Swarm:["/dns4/ws-star.discovery.libp2p.io/tcp/443/wss/p2p-websocket-star"]},Bootstrap:["/dns4/ams-1.bootstrap.libp2p.io/tcp/443/wss/ipfs/QmSoLer265NRgSp2LA3dPaeykiS1J6DifTC88f5uVQKNAd","/dns4/lon-1.bootstrap.libp2p.io/tcp/443/wss/ipfs/QmSoLMeWqB7YGVLJN3pNLQpmmEk35v6wYtsMGLzSr5QBU3","/dns4/nyc-1.bootstrap.libp2p.io/tcp/443/wss/ipfs/QmSoLueR4xBeUbY9WZ9xGUUxunbKWcrNFTDAadQJmocnWm","/dns4/nyc-2.bootstrap.libp2p.io/tcp/443/wss/ipfs/QmSoLV4Bbm51jM9C4gDYZQ9Cy3U6aXMJDAbzgu2fzaDs64","/dns4/node0.preload.ipfs.io/tcp/443/wss/ipfs/QmZMxNdpMkewiVZLMRxaNxUeZpDUb34pWjZ1kZvsd16Zic","/dns4/node1.preload.ipfs.io/tcp/443/wss/ipfs/Qmbut9Ywz9YEDrz8ySBSgWyJk41Uvm2QJPhwDJzJyGFsD6","/dns4/wss.ipfs.pool.aira.life/tcp/443/wss/ipfs/QmdfQmbmXt6sqjZyowxPUsmvBsgSGQjm4VXrV7WGy62dv8"]}},k=c()(d).map(function(t){return Number(t)}),j={name:"App",data:function(){return{network:k}},methods:{onChangeNetwork:function(t){!0===t.check&&window.location.reload(!1)},onChangeAccount:function(){window.location.reload(!1)}}},S=j,O=(n("034f"),n("2877")),C=Object(O["a"])(S,o,s,!1,null,null,null),A=C.exports,R=n("8c4f"),M=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("h1",{staticClass:"text-xs-center"},[t._v("Fuji weather")]),t.robonomicsStatus?t._e():n("v-container",{staticClass:"px-3",attrs:{fluid:"","fill-height":""}},[n("v-layout",{attrs:{"justify-center":"","align-center":""}},[n("v-flex",{attrs:{"text-xs-center":""}},[n("h1",[t._v("Load robonomics")]),n("v-progress-circular",{attrs:{indeterminate:"",color:"primary"}})],1)],1)],1),t.robonomicsStatus?n("v-container",{staticClass:"px-3",attrs:{"grid-list-md":""}},[n("v-layout",{attrs:{"justify-center":"",row:"",wrap:""}},[n("v-flex",{attrs:{xs12:"",md10:"",lg6:""}},[n("v-card",[n("v-card-text",[n("v-container",{staticClass:"px-3",attrs:{"grid-list-md":""}},[n("v-layout",{attrs:{row:"",wrap:""}},[n("v-flex",{staticClass:"text-xs-center",attrs:{md12:""}},[t._v("\n                  Lighthouse: "),n("b",[t._v(t._s(t.lighthouse.name))]),n("v-btn",{attrs:{loading:t.loadingOrder,disabled:t.loadingOrder,color:"primary"},nativeOn:{click:function(e){return t.order(e)}}},[t._v("\n                    Order\n                  ")])],1)],1)],1)],1)],1)],1)],1),null!==t.demand?n("v-layout",{attrs:{"justify-center":"",row:"",wrap:""}},[n("v-flex",{attrs:{xs12:"",md10:"",lg6:""}},[n("v-card",[n("v-card-title",{attrs:{"primary-title":""}},[n("div",[n("h3",{staticClass:"headline mb-0"},[t._v("Received data")])])]),n("v-card-text",[0===t.frees.length?n("v-progress-linear",{attrs:{indeterminate:!0}}):t._l(t.frees,function(e,i){return n("div",{key:i},[n("b",[t._v("IPFS hash of data: ")]),n("a",{attrs:{href:"https://ipfs.io/ipfs/"+e.hash,target:"_blank"}},[t._v(t._s(e.hash))]),n("br"),0===e.result.length?n("v-progress-linear",{attrs:{indeterminate:!0}}):n("div",t._l(e.result,function(e,i){return n("div",{key:i},[n("div",{staticStyle:{border:"1px solid #cccaca",margin:"10px 0",width:"200px",padding:"10px","text-align":"center"}},[n("img",{attrs:{width:"64",height:"64",src:"//openweathermap.org/themes/openweathermap/assets/vendor/owm/img/widgets/"+e.json.weather[0].icon+".png"}}),n("v-divider"),n("div",{staticStyle:{"padding-top":"15px"}},[n("b",[t._v(t._s(parseInt(e.json.main.temp)-273)),n("span",[t._v("°C")])])])],1),n("code",{staticStyle:{width:"100%"}},[n("pre",[t._v(t._s(e.str))])])])}),0),n("v-divider",{staticClass:"my-3"})],1)})],2)],1)],1)],1):t._e()],1):t._e()],1)},L=[],F=n("f499"),T=n.n(F),E=(n("7f7f"),n("ff60")),P=n.n(E),N=n("51f5"),B=n.n(N),Q=n("795b"),U=n.n(Q),D=n("d225"),$=n("b0b4"),J=n("308d"),q=n("6bb5"),W=n("4e2b"),V=n("f684"),Y=n.n(V),I=function(t){function e(t){var n;return Object(D["a"])(this,e),n=Object(J["a"])(this,Object(q["a"])(e).call(this)),n.socket=t,n.topic=null,n}return Object(W["a"])(e,t),Object($["a"])(e,[{key:"ready",value:function(){var t=this;return new Y.a(function(e){t.socket.on("reconnect",function(){null!==t.topic&&t.watch(t.topic[0],t.topic[1])}),t.socket.on("connect",function(){e()})})}},{key:"push",value:function(t,e){var n=this;return new Y.a(function(i){n.socket.emit(t,T()(e)),i()})}},{key:"watch",value:function(t,e){this.topic=[t,e],this.socket.emit("chanel",t),this.socket.on(t,function(t){e(t)})}}]),e}(E["MessageProviderAbstract"]),Z=null,G=function(){return null===Z?new U.a(function(t,e){web3.version.getNetwork(function(n,i){if(!d.hasOwnProperty(Number(i)))return e(new Error("No support network"));var r=io(h);Z=new P.a({web3:web3,provider:new I(r),ens:d[Number(i)].ens,ensSuffix:d[Number(i)].ensSuffix,lighthouse:d[Number(i)].lighthouse,version:u}),t(Z)})}):U.a.resolve(Z)},z=G,K=(n("ac6a"),n("5df3"),n("bc3a")),X=n.n(K),H=n("3852"),tt=n.n(H),et=null,nt=function(){if(null!==et)return Y.a.resolve(et);var t=function(t,e){et=new Ipfs(x),et.once("ready",function(){return et.id(function(n,i){if(n)return e(n);console.log("ipfs id "+i.id),window.ipfsi=et,t(et)})})},e=function(e,n){"undefined"!==typeof window&&window.ipfs?window.ipfs.swarm.peers().then(function(){et=window.ipfs,e(et)}).catch(function(){console.log("not glogal ipfs"),t(e,n)}):t(e,n)};return"complete"!==document.readyState?new Y.a(function(t,n){window.addEventListener("load",function(){e(t,n)})}):new Y.a(function(t,n){e(t,n)})},it=nt;function rt(){return new Y.a(function(){})}function at(t){return t.catch(rt)}function ot(t){return Y.a.race(t.map(at))}var st,lt,ct,ut,dt,vt=function(t){return X.a.get("https://ipfs.io/ipfs/".concat(t),{responseType:"blob"}).then(function(t){return t.data})},ft=function(t){var e=[vt(t)];return tt()(et,"cat")?e.push(et.cat(t)):tt()(et,"files")&&tt()(et.files,"cat")&&e.push(et.files.cat(t)),ot(e)},ht=n("1cba"),pt=function(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return Object(ht["open"])(t).then(function(t){return t.readMessages(n,function(t){e(t)})})},mt={data:function(){return{robonomicsStatus:!1,token:null,loadingOrder:!1,model:v,lighthouse:{name:"",address:""},demand:null,frees:[]}},created:function(){var t=this;it().then(function(){return z()}).then(function(e){st=e,st.ready().then(function(){t.token=m?new E["Token"](st.web3,m):st.xrt,t.lighthouse.name=st.lighthouse.name,t.lighthouse.address=st.lighthouse.address,st.getDemand(t.model,function(e){e.account===st.account&&(t.demand=e)}),st.getResult(function(e){if(console.log("result unverified",e),web3.toChecksumAddress(e.liability)===web3.toChecksumAddress(st.account)){var n=B()(t.frees,function(t){return t.hash===e.result});if(n<0){t.frees.push({hash:e.result,result:[]});var i=t.frees.length-1;ft(e.result).then(function(e){pt(new Blob([e]),function(e){var n=JSON.parse(e.message.data);t.frees[i].result.push({json:n,str:T()(n,void 0,2)})},{topics:["/data"]})})}}}),t.robonomicsStatus=!0})})},methods:{order:function(){var t=this;this.loadingOrder=!0,web3.eth.getBlock("latest",function(e,n){var i={objective:f,token:t.token.address,cost:y,lighthouse:st.lighthouse.address,validator:"0x0000000000000000000000000000000000000000",validatorFee:0,deadline:n.number+1e3};st.post("demand",t.model,i).then(function(){t.loadingOrder=!1}).catch(function(){t.loadingOrder=!1})})}}},bt=mt,gt=Object(O["a"])(bt,M,L,!1,null,null,null),yt=gt.exports,wt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("h1",{staticClass:"text-xs-center"},[t._v("Select weather")]),t.robonomicsStatus?t._e():n("v-container",{staticClass:"px-3",attrs:{fluid:"","fill-height":""}},[n("v-layout",{attrs:{"justify-center":"","align-center":""}},[n("v-flex",{attrs:{"text-xs-center":""}},[n("h1",[t._v("Load robonomics")]),n("v-progress-circular",{attrs:{indeterminate:"",color:"primary"}})],1)],1)],1),t.robonomicsStatus?n("v-container",{staticClass:"px-3",attrs:{"grid-list-md":""}},[n("v-layout",{attrs:{"justify-center":"",row:"",wrap:""}},[n("v-flex",{attrs:{xs12:"",md10:"",lg6:""}},[n("v-card",[n("v-card-text",[n("v-container",{staticClass:"px-3",attrs:{"grid-list-md":""}},[n("v-layout",{attrs:{row:"",wrap:""}},[n("v-flex",{staticClass:"text-xs-center",attrs:{md12:""}},[t._v("\n                  Lighthouse: "),n("b",[t._v(t._s(t.lighthouse.name))]),n("div",{staticClass:"my-3"},[n("b",[t._v(t._s(t.model))])]),t.agents.list.length>0?n("div",{staticClass:"my-3"},[t._v("Agents: "),n("a",{attrs:{href:t.agents.url,target:"_blank"}},[t._v(t._s(t.agents.list.length))])]):t._e(),""!==t.modelError?n("v-alert",{attrs:{value:!0,type:"error"}},[t._v("\n                    "+t._s(t.modelError)+"\n                  ")]):t._e(),""===t.modelError?n("v-btn",{attrs:{loading:t.loadingOrder,disabled:t.loadingOrder,color:"primary"},nativeOn:{click:function(e){return t.order(e)}}},[t._v("\n                    Order\n                  ")]):t._e()],1)],1)],1)],1)],1)],1)],1),null!==t.demand?n("v-layout",{attrs:{"justify-center":"",row:"",wrap:""}},[n("v-flex",{attrs:{xs12:"",md10:"",lg6:""}},[n("v-card",[n("v-card-title",{attrs:{"primary-title":""}},[n("div",[n("h3",{staticClass:"headline mb-0"},[t._v("Received data")])])]),n("v-card-text",[0===t.frees.length?n("v-progress-linear",{attrs:{indeterminate:!0}}):t._l(t.frees,function(e,i){return n("div",{key:i},[n("b",[t._v("IPFS hash of data: ")]),n("a",{attrs:{href:"https://ipfs.io/ipfs/"+e.hash,target:"_blank"}},[t._v(t._s(e.hash))]),n("br"),0===e.result.length?n("v-progress-linear",{attrs:{indeterminate:!0}}):n("div",t._l(e.result,function(e,i){return n("div",{key:i},[n("div",{staticStyle:{border:"1px solid #cccaca",margin:"10px 0",width:"200px",padding:"10px","text-align":"center"}},[n("img",{attrs:{width:"64",height:"64",src:"//openweathermap.org/themes/openweathermap/assets/vendor/owm/img/widgets/"+e.json.weather[0].icon+".png"}}),n("v-divider"),n("div",{staticStyle:{"padding-top":"15px"}},[n("b",[t._v(t._s(parseInt(e.json.main.temp)-273)),n("span",[t._v("°C")])])])],1),n("code",{staticStyle:{width:"100%"}},[n("pre",[t._v(t._s(e.str))])])])}),0),n("v-divider",{staticClass:"my-3"})],1)})],2)],1)],1)],1):t._e()],1):t._e()],1)},_t=[],xt=n("ba84"),kt=n.n(xt),jt=(n("3b2b"),n("a481"),n("28a5"),n("a745")),St=n.n(jt),Ot=(n("6b54"),function(t,e){var n=new web3.BigNumber(t);return n.shift(-e).toString(10)}),Ct=function t(e){var n=function t(n,i){web3.eth.getTransactionReceipt(e,function(e,r){e?i(e):null===r?setTimeout(function(){return t(n,i)},5e3):n(r)})};if(St()(e))return U.a.all(e.map(function(e){return t(e)}));if("string"===typeof e)return new U.a(n);throw new Error("Invalid Type: ".concat(e))},At=function(){var t=new URL(location.href),e="https://raw.githubusercontent.com/"+t.hostname.split(".")[0]+"/"+t.pathname.replace(new RegExp("/","g"),"")+"/master/fuji_weather_dapp/model.txt";return X.a.get(e).then(function(t){return t.data.trim()}).catch(function(){return"Qmd6bn2JGW26hSx7g5gVCmfgB7uigRPrhAukJn77ee3bMM"})},Rt=function(){var t=new URL(location.href),e="https://raw.githubusercontent.com/"+t.hostname.split(".")[0]+"/"+t.pathname.replace(new RegExp("/","g"),"")+"/master/fuji_weather_dapp/agents.txt";return X.a.get(e).then(function(e){var n=e.data.trim(),i=[];return n.split("\n").forEach(function(t){var e=web3.toChecksumAddress(t.trim().substr(0,42));web3.isAddress(e)&&i.push(e)}),{url:"https://github.com/"+t.hostname.split(".")[0]+"/"+t.pathname.replace(new RegExp("/","g"),"")+"/blob/master/fuji_weather_dapp/agents.txt",list:i}}).catch(function(){return{url:"",list:[]}})},Mt={data:function(){return{robonomicsStatus:!1,token:null,loadingOrder:!1,lighthouse:{name:"",address:""},demand:null,frees:[],model:"",modelError:"",agents:{url:"",list:[]}}},created:function(){var t=this;At().then(function(e){return""!==e&&46===e.length&&/^Qm/.test(e)?t.model=e:t.modelError="Error model",Rt()}).then(function(e){return t.agents=e,it()}).then(function(){return z()}).then(function(e){lt=e,lt.ready().then(function(){t.token=m?new E["Token"](lt.web3,m):lt.xrt,t.lighthouse.name=lt.lighthouse.name,t.lighthouse.address=lt.lighthouse.address,lt.getDemand(t.model,function(e){e.account===lt.account&&(t.demand=e)}),lt.getResult(function(e){if(console.log("result unverified",e),web3.toChecksumAddress(e.liability)===web3.toChecksumAddress(lt.account)){if(t.agents.list.length>0&&kt()(t.agents.list,e.account)<0)return void console.log("Skip result of",e.account);var n=B()(t.frees,function(t){return t.hash===e.result});if(n<0){t.frees.push({hash:e.result,result:[]});var i=t.frees.length-1;ft(e.result).then(function(e){pt(new Blob([e]),function(e){var n=JSON.parse(e.message.data);t.frees[i].result.push({json:n,str:T()(n,void 0,2)})},{topics:["/data"]})})}}}),t.robonomicsStatus=!0})})},methods:{order:function(){var t=this;46===this.model.length&&/^Qm/.test(this.model)&&(this.loadingOrder=!0,web3.eth.getBlock("latest",function(e,n){var i={objective:f,token:t.token.address,cost:y,lighthouse:lt.lighthouse.address,validator:"0x0000000000000000000000000000000000000000",validatorFee:0,deadline:n.number+1e3};lt.post("demand",t.model,i).then(function(){t.loadingOrder=!1}).catch(function(){t.loadingOrder=!1})}))}}},Lt=Mt,Ft=Object(O["a"])(Lt,wt,_t,!1,null,null,null),Tt=Ft.exports,Et=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("h1",{staticClass:"text-xs-center"},[t._v("Welcome to the First Robonomics IoT market!")]),t.robonomicsStatus?t._e():n("v-container",{staticClass:"px-3",attrs:{fluid:"","fill-height":""}},[n("v-layout",{attrs:{"justify-center":"","align-center":""}},[n("v-flex",{attrs:{"text-xs-center":""}},[n("h1",[t._v("Load robonomics")]),n("v-progress-circular",{attrs:{indeterminate:"",color:"primary"}})],1)],1)],1),t.robonomicsStatus?n("v-container",{staticClass:"px-3",attrs:{"grid-list-md":""}},[n("v-layout",{attrs:{"justify-center":"",row:"",wrap:""}},[n("v-flex",{attrs:{sm12:"",md10:"",lg6:""}},[n("v-card",[n("v-card-title",{attrs:{"primary-title":""}},[n("v-container",{attrs:{"grid-list-md":""}},[n("v-layout",{attrs:{row:"",wrap:""}},[n("v-flex",{staticClass:"text-xs-center",attrs:{md12:""}},[n("h3",{staticClass:"headline mb-0 text-xs-center"},[t._v("Digital market channel / Lighthouse:")]),n("b",[t._v(t._s(t.lighthouseName))])])],1)],1)],1),n("v-card-text",[n("demand-form",{ref:"demandForm"}),t.price.value>0?n("v-container",{attrs:{"grid-list-md":""}},[n("v-layout",{attrs:{row:"",wrap:""}},[n("v-flex",{attrs:{md12:""}},[n("div",[t._v("\n                    Cost: "+t._s(t.price.valueStr)+" |\n                    Balance: "+t._s(t.balance.valueStr)+" |\n                    Approved: "+t._s(t.approveTrade.valueStr)+"\n                  ")])])],1)],1):t._e(),t.isOrder?n("div",{staticClass:"text-xs-center"},[t.approveTrade.value<t.price.value?n("v-btn",{attrs:{loading:t.loadingApprove,disabled:t.loadingApprove||t.balance.value<t.price.value,color:"warning"},nativeOn:{click:function(e){return t.sendApproveTrade(e)}}},[t._v("\n                Approve\n              ")]):t._e(),t.approveTrade.value>=t.price.value?n("v-btn",{attrs:{loading:t.loadingOrder,disabled:t.loadingOrder||t.balance.value<t.price.value,color:"warning"},nativeOn:{click:function(e){return t.order(e)}}},[t._v("\n                Order\n              ")]):t._e()],1):n("div",{staticClass:"text-xs-center"},[n("v-btn",{attrs:{disabled:"",color:"warning"}},[t._v("\n                Please, choose offer bellow\n              ")])],1)],1)],1),t.liability?n("v-card",[n("v-card-title",{attrs:{"primary-title":""}},[n("div",[n("h3",{staticClass:"headline mb-0"},[t._v("Received data")])])]),n("v-card-text",[n("Liability",{attrs:{liability:t.liability}})],1)],1):t._e(),n("v-card",[n("v-card-title",{attrs:{"primary-title":""}},[n("v-container",{attrs:{"grid-list-md":""}},[n("v-layout",{attrs:{row:"",wrap:""}},[n("v-flex",{attrs:{md12:""}},[n("h3",{staticClass:"headline mb-0 text-xs-center"},[t._v("Offers")])])],1)],1)],1),n("v-card-text",[n("v-btn-toggle",{on:{change:t.load},model:{value:t.toggle_filter,callback:function(e){t.toggle_filter=e},expression:"toggle_filter"}},[n("v-btn",{attrs:{value:"h",flat:""}},[t._v("\n                hour\n              ")]),n("v-btn",{attrs:{value:"d",flat:""}},[t._v("\n                day\n              ")]),n("v-btn",{attrs:{value:"m",flat:""}},[t._v("\n                month\n              ")])],1),n("v-divider"),null===t.offers?n("v-progress-linear",{attrs:{indeterminate:!0}}):n("div",[n("v-list",{attrs:{"two-line":""}},[n("v-data-iterator",{attrs:{items:t.offers,pagination:t.pagination,"hide-actions":""},on:{"update:pagination":function(e){t.pagination=e}},scopedSlots:t._u([{key:"item",fn:function(e){return[n("v-list-tile",{attrs:{avatar:""},on:{click:function(n){t.setForm(e.item.id)}}},[n("v-list-tile-avatar",[n("span",{domProps:{innerHTML:t._s(t.icon(e.item.account))}})]),n("v-list-tile-content",[n("v-list-tile-title",{domProps:{innerHTML:t._s(e.item.account)}}),n("v-list-tile-sub-title",{domProps:{innerHTML:t._s(e.item.msg.model)}})],1)],1),n("v-divider")]}}])})],1),t.pages>1?n("v-pagination",{attrs:{length:t.pages},model:{value:t.pagination.page,callback:function(e){t.$set(t.pagination,"page",e)},expression:"pagination.page"}}):t._e()],1)],1)],1)],1)],1)],1):t._e()],1)},Pt=[],Nt=n("cebc"),Bt=n("2769"),Qt=n.n(Bt),Ut=n("9380"),Dt=n.n(Ut),$t=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t.liability.address?n("div",[n("b",[t._v("liability: ")]),t._v(t._s(t.liability.address)),n("br"),n("b",[t._v("model: ")]),t._v(t._s(t.liability.model)),n("br"),n("b",[t._v("objective: ")]),t._v(t._s(t.liability.objective)),n("br"),n("b",[t._v("token: ")]),t._v(t._s(t.liability.token)),n("br"),n("b",[t._v("cost: ")]),t._v(t._s(t.liability.cost)),n("br"),n("b",[t._v("promisee: ")]),t._v(t._s(t.liability.promisee)),n("br"),n("b",[t._v("promisor: ")]),t._v(t._s(t.liability.promisor)),n("br")]):t._e(),""!=t.liability.result?n("span",[n("b",[t._v("IPFS hash of data: ")]),n("a",{attrs:{href:"https://ipfs.io/ipfs/"+t.liability.result,target:"_blank"}},[t._v(t._s(t.liability.result))]),!0===t.liability.check?n("v-icon",{attrs:{large:"",color:"green darken-2"}},[t._v("mdi-check")]):t._e(),!1===t.liability.check?n("v-icon",{attrs:{large:"",color:"blue-grey darken-2"}},[t._v("mdi-alert-circle-outline")]):t._e(),n("br"),n("b",[t._v("Data: ")]),0===t.liability.resultMessage.length?n("v-progress-linear",{attrs:{indeterminate:!0}}):n("div",t._l(t.liability.resultMessage,function(e,i){return n("div",{key:i},[1===e.type?n("div",[n("div",{staticStyle:{border:"1px solid #cccaca",margin:"10px 0",width:"200px",padding:"10px","text-align":"center"}},[n("img",{attrs:{width:"64",height:"64",src:"//openweathermap.org/themes/openweathermap/assets/vendor/owm/img/widgets/"+e.json.weather[0].icon+".png"}}),n("v-divider"),n("div",{staticStyle:{"padding-top":"15px"}},[n("b",[t._v(t._s(parseInt(e.json.main.temp)-273)),n("span",[t._v("°C")])])])],1),n("code",{staticStyle:{width:"100%"}},[n("pre",[t._v(t._s(e.str))])])]):2===e.type?n("div",[n("code",{staticStyle:{width:"100%"}},[n("pre",[t._v(t._s(e.str))])])]):n("p",[t._v(t._s(e.str))])])}),0)],1):t._e(),""==t.liability.result?n("span",[n("b",[t._v("IPFS hash of data: ")]),n("v-progress-linear",{attrs:{indeterminate:!0}})],1):t._e()])},Jt=[],qt={name:"Liability",props:["liability"]},Wt=qt,Vt=(n("cbdf"),Object(O["a"])(Wt,$t,Jt,!1,null,null,null)),Yt=Vt.exports,It=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("v-form",{ref:"form",model:{value:t.valid,callback:function(e){t.valid=e},expression:"valid"}},[n("v-text-field",{attrs:{rules:t.requireRule,label:"model",required:""},model:{value:t.model,callback:function(e){t.model=e},expression:"model"}}),n("v-text-field",{attrs:{rules:t.requireRule,label:"objective",required:""},model:{value:t.objective,callback:function(e){t.objective=e},expression:"objective"}}),n("v-text-field",{attrs:{rules:t.requireRule,label:"token",required:""},model:{value:t.token,callback:function(e){t.token=e},expression:"token"}}),n("v-text-field",{attrs:{label:"cost",required:""},model:{value:t.cost,callback:function(e){t.cost=e},expression:"cost"}}),n("v-text-field",{attrs:{rules:t.requireRule,label:"deadline",required:""},model:{value:t.deadline,callback:function(e){t.deadline=e},expression:"deadline"}})],1)],1)},Zt=[],Gt={data:function(){return{valid:!1,model:"",objective:"",token:"",cost:"",deadline:"",requireRule:[function(t){return!!t||"Field required"}]}}},zt=Gt,Kt=Object(O["a"])(zt,It,Zt,!1,null,null,null),Xt=Kt.exports,Ht=null,te=function(t){if(null===Ht)return Ht=io(p),void Ht.on("connect",function(){console.log("connect"),t(Ht)});t(Ht)},ee=te,ne={components:{Liability:Yt,DemandForm:Xt},data:function(){return{robonomicsStatus:!1,token:null,price:{value:0,valueStr:""},loadingApprove:!1,loadingOrder:!1,isOrder:!1,balance:{value:0,valueStr:""},approveTrade:{value:0,valueStr:""},lighthouseName:"",liability:null,offers:[],pagination:{rowsPerPage:10},toggle_filter:"h"}},computed:{pages:function(){return null==this.pagination.rowsPerPage||null==this.pagination.totalItems?0:Math.ceil(this.pagination.totalItems/this.pagination.rowsPerPage)}},created:function(){var t=this;return it().then(function(){return z()}).then(function(t){return ct=t,ct.ready()}).then(function(){console.log("xrt",ct.xrt.address),console.log("factory",ct.factory.address),console.log("lighthouse",ct.lighthouse.address),t.lighthouseName=ct.lighthouse.name,ct.getDemand(null,function(t){console.log("demand",t)}),ct.getResult(function(e){console.log("result unverified",e),web3.toChecksumAddress(e.liability)===web3.toChecksumAddress(ct.account)?(t.liability={address:"",resultMessage:[]},t.setResult(e.result,!0)):null!==t.liability&&e.liability===t.liability.address&&t.setResult(e.result,!1)}),t.load(),ee(function(e){e.on("add",function(e){t.offers.unshift({msg:JSON.parse(e.msg),id:e.id,account:e.account})}),e.on("remove",function(e){t.offers=Dt()(t.offers,function(t){return t.id!==e})})}),t.robonomicsStatus=!0})},methods:{load:function(){var t=this;this.offers=null,X.a.get(p+this.toggle_filter).then(function(e){t.offers=[],e.data.result.forEach(function(e){t.offers.push({msg:JSON.parse(e.msg),id:e.id,account:e.account})})})},icon:function(t){return jdenticon.toSvg(t,40)},setForm:function(t){var e=this;this.isOrder=!1;var n=Qt()(this.offers,{id:t});this.$refs.demandForm.model=n.msg.model,this.$refs.demandForm.objective=n.msg.objective,this.$refs.demandForm.token=n.msg.token,this.$refs.demandForm.cost=n.msg.cost,this.$refs.demandForm.deadline=n.msg.deadline,this.price.value=Number(n.msg.cost),this.price.value>0?(this.token=new E["Token"](ct.web3,n.msg.token),Y.a.join(this.token.call("decimals"),this.token.call("symbol"),function(t,n){return e.token.decimals=t,e.token.symbol=n,e.price.valueStr="".concat(Ot(e.price.value,e.token.decimals)," ").concat(e.token.symbol),e.fetchBalance()}).then(function(){e.isOrder=!0})):this.isOrder=!0},fetchBalance:function(){var t=this;return this.token.call("balanceOf",[ct.account]).then(function(e){return t.balance.value=e,t.balance.valueStr="".concat(Ot(e,t.token.decimals)," ").concat(t.token.symbol),e>0?t.token.call("allowance",[ct.account,ct.factory.address]):0}).then(function(e){t.approveTrade.value=e,t.approveTrade.valueStr="".concat(Ot(e,t.token.decimals)," ").concat(t.token.symbol)})},sendApproveTrade:function(){var t=this;return this.loadingApprove=!0,this.token.send("approve",[ct.factory.address,100*this.price.value],{from:ct.account}).then(function(t){return Ct(t)}).then(function(){return t.fetchBalance()}).then(function(){t.loadingApprove=!1}).catch(function(){t.loadingApprove=!1})},setResult:function(t){var e=this,n=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];this.liability=Object(Nt["a"])({},this.liability,{result:t,check:n}),0===this.liability.resultMessage.length&&(this.liability.resultMessage.push(""),ft(t).then(function(t){pt(new Blob([t]),function(t){try{var n=JSON.parse(t.message.data);tt()(n,"weather")?e.liability.resultMessage.push({type:1,json:n,str:T()(n,void 0,2)}):e.liability.resultMessage.push({type:2,str:T()(n,void 0,2)})}catch(i){e.liability.resultMessage.push({type:3,str:t.message.data})}},{})}))},newLiability:function(t){var e=this;return console.log("liability demand",t.address),t.getInfo().then(function(n){return e.liability=Object(Nt["a"])({address:t.address,worker:t.worker},n,{resultMessage:[]}),t.watchResult(function(t){console.log("result",t),e.setResult(t,!0)}),!0}).catch(function(n){console.log(n),setTimeout(function(){e.newLiability(t)},2e3)})},order:function(){var t=this;if(this.$refs.demandForm.$refs.form.validate()){this.liability=null,this.loadingOrder=!0;var e={objective:this.$refs.demandForm.objective,token:this.$refs.demandForm.token,cost:this.$refs.demandForm.cost,lighthouse:ct.lighthouse.address,validator:"0x0000000000000000000000000000000000000000",validatorFee:0,deadline:this.$refs.demandForm.deadline};ct.postDemand(this.$refs.demandForm.model,e).then(function(e){return t.newLiability(e)}).then(function(){t.loadingOrder=!1}).catch(function(){t.loadingOrder=!1})}}}},ie=ne,re=Object(O["a"])(ie,Et,Pt,!1,null,null,null),ae=re.exports,oe=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("h1",{staticClass:"text-xs-center"},[t._v("Welcome to the First Robonomics IoT market!")]),t.robonomicsStatus?t._e():n("v-container",{staticClass:"px-3",attrs:{fluid:"","fill-height":""}},[n("v-layout",{attrs:{"justify-center":"","align-center":""}},[n("v-flex",{attrs:{"text-xs-center":""}},[n("h1",[t._v("Load robonomics")]),n("v-progress-circular",{attrs:{indeterminate:"",color:"primary"}})],1)],1)],1),t.robonomicsStatus?n("v-container",{staticClass:"px-3",attrs:{"grid-list-md":""}},[n("v-layout",{attrs:{"justify-center":"",row:"",wrap:""}},[n("v-flex",{attrs:{sm12:"",md10:"",lg6:""}},[n("v-card",[n("v-card-title",{attrs:{"primary-title":""}},[n("h3",{staticClass:"headline mb-0"},[t._v("Create contarct")])]),n("v-card-text",[n("v-select",{attrs:{items:t.objectives,label:"Objective"},model:{value:t.objective,callback:function(e){t.objective=e},expression:"objective"}}),t.price.value>0?n("v-container",{attrs:{"grid-list-md":""}},[n("v-layout",{attrs:{row:"",wrap:""}},[n("v-flex",{attrs:{md12:""}},[n("div",[t._v("\n                    Cost: "+t._s(t.price.valueStr)+" |\n                    Balance: "+t._s(t.balance.valueStr)+" |\n                    Approved: "+t._s(t.approveTrade.valueStr)+"\n                  ")])])],1)],1):t._e(),t.approveTrade.value<t.price.value?n("v-btn",{attrs:{loading:t.loadingApprove,disabled:t.loadingApprove||t.balance.value<t.price.value,color:"primary"},nativeOn:{click:function(e){return t.sendApproveTrade(e)}}},[t._v("\n              Approve\n            ")]):t._e(),t.approveTrade.value>=t.price.value?n("v-btn",{attrs:{loading:t.loadingOrder,disabled:t.loadingOrder||t.balance.value<t.price.value,color:"primary"},nativeOn:{click:function(e){return t.order(e)}}},[t._v("\n              Order\n            ")]):t._e()],1)],1)],1)],1),n("v-layout",{attrs:{"justify-center":"",row:"",wrap:""}},[n("v-flex",{attrs:{sm12:"",md10:"",lg6:""}},[n("v-card",[n("v-card-title",{attrs:{"primary-title":""}},[n("div",[n("h3",{staticClass:"headline mb-0"},[t._v("Contact")])])]),n("v-card-text",[n("liability-form",{ref:"liabilityForm"}),n("v-btn",{attrs:{color:"primary"},nativeOn:{click:function(e){return t.show(e)}}},[t._v("\n              Show\n            ")])],1)],1)],1)],1),t.liability?n("v-layout",{attrs:{"justify-center":"",row:"",wrap:""}},[n("v-flex",{attrs:{sm12:"",md10:"",lg6:""}},[n("Service",{attrs:{liability:t.liability}})],1)],1):t._e()],1):t._e()],1)},se=[],le=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-card",[n("v-card-title",{attrs:{"primary-title":""}},[n("div",[n("h3",{staticClass:"headline mb-0"},[t._v("Liability "+t._s(t.liability.address))])])]),n("v-card-text",[""!=t.liability.result?n("div",[n("b",[t._v("Results: ")]),n("a",{attrs:{href:"https://ipfs.io/ipfs/"+t.liability.result,target:"_blank"}},[t._v(t._s(t.liability.result))]),!0===t.liability.check?n("v-icon",{attrs:{large:"",color:"green darken-2"}},[t._v("mdi-check")]):t._e(),!1===t.liability.check?n("v-icon",{attrs:{large:"",color:"blue-grey darken-2"}},[t._v("mdi-alert-circle-outline")]):t._e(),n("br"),t.liability.resultMessage.length<=1?n("v-progress-linear",{attrs:{indeterminate:!0}}):n("div",t._l(t.liability.resultMessage,function(e,i){return n("div",{key:i},[1===e.type?n("div",[n("code",{staticStyle:{width:"100%"}},[n("pre",[t._v(t._s(e.str))])])]):n("p",[t._v(t._s(e.str))])])}),0)],1):n("div",[t._l(t.actions,function(e,i){return n("span",{key:i},[n("v-btn",{attrs:{loading:e.loading,disabled:e.loading,color:"warning"},nativeOn:{click:function(e){t.runAction(i)}}},[t._v("\n          "+t._s(e.name)+"\n        ")])],1)}),n("v-divider"),n("div",{staticStyle:{margin:"10px 0"}},[n("h2",[t._v("Logs")]),n("div",{staticStyle:{border:"1px solid #6b6060",height:"200px","overflow-y":"scroll"}},[n("ol",t._l(t.logs,function(e,i){return n("li",{key:i,staticStyle:{padding:"5px"},style:{backgroundColor:1===e.type?"#f8f8f8":"#eeeeee"}},[t._v("\n              "+t._s(e.msg)+"\n            ")])}),0)])])],2)])],1)},ce=[],ue={props:["liability"],data:function(){return{actions:[],logs:[]}},created:function(){var t=this;return c()(_.objectives).forEach(function(e){t.actions.push({loading:!1,name:_.objectives[e].label,model:_.model,objective:_.objectives[e].objective})}),it().then(function(){return z()}).then(function(t){return ut=t,ut.ready()}).then(function(){ut.getDemand(null,function(t){console.log("demand",t)}),ut.getResult(function(e){console.log("result",e),ut.web3.toChecksumAddress(e.liability)===ut.web3.toChecksumAddress(ut.account)&&t.setResult(e.result,e.success)})})},methods:{runAction:function(t){var e=this;this.actions[t].loading=!0,ut.web3.eth.getBlock("latest",function(n,i){var r={objective:e.actions[t].objective,token:ut.xrt.address,cost:0,lighthouse:ut.lighthouse.address,validator:"0x0000000000000000000000000000000000000000",validatorFee:0,deadline:i.number+100};ut.post("demand",e.actions[t].model,r).then(function(){e.actions[t].loading=!1,e.logs.push({type:1,msg:'Run action "'.concat(e.actions[t].name,'"')})}).catch(function(){e.actions[t].loading=!1})})},setResult:function(t,e){var n=this,i=-1;ft(t).then(function(t){return pt(new Blob([t]),function(t){"/objective"===t.topic&&(i=B()(n.actions,{objective:t.message.data}))},{topics:["/objective"]})}).then(function(){i>=0&&tt()(n.actions,i)&&(e?n.logs.push({type:2,msg:'Done action "'.concat(n.actions[i].name,'"')}):n.logs.push({type:2,msg:'Not done action "'.concat(n.actions[i].name,'"')}))})}}},de=ue,ve=(n("f2c5"),Object(O["a"])(de,le,ce,!1,null,null,null)),fe=ve.exports,he=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("v-form",{ref:"form",model:{value:t.valid,callback:function(e){t.valid=e},expression:"valid"}},[n("v-text-field",{attrs:{rules:t.requireRule,label:"address",required:""},model:{value:t.address,callback:function(e){t.address=e},expression:"address"}})],1)],1)},pe=[],me={data:function(){return{valid:!1,address:"",requireRule:[function(t){return!!t||"Field required"}]}}},be=me,ge=Object(O["a"])(be,he,pe,!1,null,null,null),ye=ge.exports,we={components:{Service:fe,LiabilityForm:ye},data:function(){return{robonomicsStatus:!1,objectives:[],objective:{},token:null,price:{value:y,valueStr:"".concat(y," ").concat(b)},loadingApprove:!1,loadingOrder:!1,balance:{value:0,valueStr:"0 ".concat(b)},approveTrade:{value:0,valueStr:"0 ".concat(b)},liability:null}},created:function(){var t=this;return c()(w.objectives).forEach(function(e){t.objectives.push({value:w.objectives[e].objective,text:w.objectives[e].label})}),this.objective=w.objectives["1h"].objective,it().then(function(t){return console.log(t),z()}).then(function(t){return dt=t,dt.ready()}).then(function(){t.token=dt.xrt,console.log("xrt",dt.xrt.address),console.log("factory",dt.factory.address),console.log("lighthouse",dt.lighthouse.address),dt.getDemand(w.model,function(t){console.log("demand",t)}),dt.getOffer(w.model,function(t){console.log("offer",t)}),dt.getResult(function(e){console.log("result unverified",e),null!==t.liability&&e.liability===t.liability.address&&t.setResult(e.result,!1)}),t.fetchData().then(function(){t.robonomicsStatus=!0})})},methods:{emulatorKfc:function(t){var e={objective:t.objective,token:t.token,cost:t.cost,validator:t.validator,lighthouse:t.lighthouse,lighthouseFee:0,deadline:t.deadline};return dt.postOffer(w.model,e).then(function(t){return console.log("liability offer",t.address),dt.postResult({liability:t.address,success:!0,result:"QmSKmcZscjDCkHx4db5mHkhbtmeWfUEMcmTpwhpnwWaLAJ"})}).then(function(){console.log("result send msg")})},fetchData:function(){var t=this;return this.token.call("balanceOf",[dt.account]).then(function(e){return t.balance.value=e,t.balance.valueStr="".concat(Ot(e,g)," ").concat(b),e>0&&t.token.call("allowance",[dt.account,dt.factory.address])}).then(function(e){e&&(t.approveTrade.value=e,t.approveTrade.valueStr="".concat(Ot(e,g)," ").concat(b))})},sendApproveTrade:function(){var t=this;return this.loadingApprove=!0,this.token.send("approve",[dt.factory.address,100*this.price.value],{from:dt.account}).then(function(t){return Ct(t)}).then(function(){return t.loadingApprove=!1,t.fetchData()}).catch(function(){t.loadingApprove=!1})},setResult:function(t){var e=this,n=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];this.liability=Object(Nt["a"])({},this.liability,{result:t,check:n}),0===this.liability.resultMessage.length&&(this.liability.resultMessage.push({type:2,str:""}),ft(t).then(function(t){pt(new Blob([t]),function(t){try{var n=JSON.parse(t.message.data);e.liability.resultMessage.push({type:1,str:T()(n,void 0,2)})}catch(i){e.liability.resultMessage.push({type:2,str:t.message.data})}},{})}))},newLiability:function(t){var e=this;return console.log("liability demand",t.address),t.getInfo().then(function(n){return e.liability=Object(Nt["a"])({address:t.address,worker:t.worker},n,{resultMessage:[]}),t.watchResult(function(t){console.log("result",t),e.setResult(t,!0)}),!0}).catch(function(n){console.log(n),setTimeout(function(){e.newLiability(t)},2e3)})},order:function(){var t=this;this.liability=null,this.loadingOrder=!0,dt.web3.eth.getBlock("latest",function(e,n){var i={objective:t.objective,token:t.token.address,cost:t.price.value,lighthouse:dt.lighthouse.address,validator:"0x0000000000000000000000000000000000000000",validatorFee:0,deadline:n.number+100};dt.postDemand(w.model,i).then(function(e){t.$refs.liabilityForm.address=e.address,setTimeout(function(){t.show()},500)}).then(function(){t.loadingOrder=!1}).catch(function(){t.loadingOrder=!1})})},show:function(){if(this.$refs.liabilityForm.$refs.form.validate()){var t=new E["Liability"](dt.web3,this.$refs.liabilityForm.address,"");this.newLiability(t),t.getInfo().then(function(t){console.log(t)})}}}},_e=we,xe=Object(O["a"])(_e,oe,se,!1,null,null,null),ke=xe.exports;i["default"].use(R["a"]);var je=new R["a"]({routes:[{path:"/",name:"All",component:yt},{path:"/model",name:"Model",component:Tt},{path:"/market",name:"Market",component:ae},{path:"/robot",name:"Robot",component:ke}]}),Se=n("5a0d");n("bf40");i["default"].config.productionTip=!1,i["default"].use(a.a),i["default"].use(Se),new i["default"]({el:"#app",router:je,components:{App:A},template:"<App/>"})},"64a9":function(t,e,n){},"87b6":function(t,e,n){},a29e:function(t,e,n){},cbdf:function(t,e,n){"use strict";var i=n("87b6"),r=n.n(i);r.a},f2c5:function(t,e,n){"use strict";var i=n("a29e"),r=n.n(i);r.a}});
//# sourceMappingURL=app.927a9ea3.js.map