(function(e){function t(t){for(var a,o,s=t[0],c=t[1],l=t[2],d=0,f=[];d<s.length;d++)o=s[d],Object.prototype.hasOwnProperty.call(i,o)&&i[o]&&f.push(i[o][0]),i[o]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(e[a]=c[a]);u&&u(t);while(f.length)f.shift()();return r.push.apply(r,l||[]),n()}function n(){for(var e,t=0;t<r.length;t++){for(var n=r[t],a=!0,o=1;o<n.length;o++){var c=n[o];0!==i[c]&&(a=!1)}a&&(r.splice(t--,1),e=s(s.s=n[0]))}return e}var a={},i={app:0},r=[];function o(e){return s.p+"js/"+({about:"about"}[e]||e)+"."+{about:"42fd5294"}[e]+".js"}function s(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.e=function(e){var t=[],n=i[e];if(0!==n)if(n)t.push(n[2]);else{var a=new Promise((function(t,a){n=i[e]=[t,a]}));t.push(n[2]=a);var r,c=document.createElement("script");c.charset="utf-8",c.timeout=120,s.nc&&c.setAttribute("nonce",s.nc),c.src=o(e);var l=new Error;r=function(t){c.onerror=c.onload=null,clearTimeout(d);var n=i[e];if(0!==n){if(n){var a=t&&("load"===t.type?"missing":t.type),r=t&&t.target&&t.target.src;l.message="Loading chunk "+e+" failed.\n("+a+": "+r+")",l.name="ChunkLoadError",l.type=a,l.request=r,n[1](l)}i[e]=void 0}};var d=setTimeout((function(){r({type:"timeout",target:c})}),12e4);c.onerror=c.onload=r,document.head.appendChild(c)}return Promise.all(t)},s.m=e,s.c=a,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)s.d(n,a,function(t){return e[t]}.bind(null,a));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/",s.oe=function(e){throw console.error(e),e};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=t,c=c.slice();for(var d=0;d<c.length;d++)t(c[d]);var u=l;r.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";var a=n("8a23"),i=n.n(a);i.a},"0760":function(e,t,n){"use strict";var a=n("3655"),i=n.n(a);i.a},"27a8":function(e,t,n){"use strict";var a=n("4372"),i=n.n(a);i.a},3655:function(e,t,n){},"3c07":function(e,t,n){},4372:function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("a026"),i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-app",{staticStyle:{background:"black"}},[n("Header"),n("v-content",[n("MainArea")],1)],1)},r=[],o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("v-content",[n("v-container",{attrs:{"fill-height":""}},[n("v-layout",{class:{"ml-1 mr-1":e.$vuetify.breakpoint.smAndDown,"ml-6 mr-6":e.$vuetify.breakpoint.mdAndUp},attrs:{"text-center":"",wrap:""}},[n("v-flex",{attrs:{xs12:""}},[n("transition",{attrs:{name:"jade",mode:"in-out"}},[0==e.counter?n("p",{staticClass:"gradient-0 text-md-left floating font-weight-bold",class:e.bigFont},[e._v(e._s(e.heading))]):e._e(),1==e.counter?n("p",{staticClass:"gradient-1 text-md-left floating font-weight-bold",class:e.bigFont},[e._v(e._s(e.heading))]):e._e(),2==e.counter?n("p",{staticClass:"gradient-2 text-md-left floating font-weight-bold",class:e.bigFont},[e._v(e._s(e.heading))]):e._e()])],1),n("v-flex",{attrs:{md6:"",xs12:""}},[n("transition",{attrs:{name:"fade"}},[e.remainingFontVisible?n("p",{staticClass:"text-left display-1 font-weight-regular"},[e._v(" Imagine all the people "),n("br"),e._v("living life in peace. ")]):e._e()])],1),n("v-spacer"),n("br"),n("v-flex",{attrs:{md6:"",xs12:""}},[n("transition",{attrs:{name:"fade"}},[e.remainingFontVisible?n("p",{staticClass:"grey--text text-left .body-1 font-weight-regular"},[e._v(" Hi, my name is Baybora. I'm a software developer with a mechatronical engineering background. I love beautiful designed products, so I started getting into UI/UX & Design. You can look through my career and my resume and also get in contact with me. ")]):e._e()])],1),n("br"),n("v-flex",{attrs:{"mt-8":"",wrap:"",md12:"",xs12:""}},[n("transition",{attrs:{name:"fade"}},[e.remainingFontVisible?n("v-toolbar",{attrs:{color:"black"}},[n("v-spacer"),n("v-chip-group",{attrs:{"active-class":"chip-gradient",mandatory:""},model:{value:e.selection,callback:function(t){e.selection=t},expression:"selection"}},e._l(e.sections,(function(t){return n("v-chip",{key:t,staticClass:"black",attrs:{value:t}},[e._v(e._s(t))])})),1),n("v-spacer")],1):e._e()],1)],1)],1)],1)],1),n("v-content",[n("v-container",{attrs:{"fill-height":""}},[n("transition",{attrs:{name:"slide-fade"}},[n("Career",{directives:[{name:"show",rawName:"v-show",value:"Career"==e.selection,expression:"selection == 'Career'"}]})],1),n("transition",{attrs:{name:"slide-fade"}},[n("Education",{directives:[{name:"show",rawName:"v-show",value:"Education"==e.selection,expression:"selection == 'Education'"}]})],1)],1)],1)],1)},s=[],c=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-container",[n("v-layout",{attrs:{"text-center":"",wrap:""}},e._l(e.sections,(function(t){return n("ResumeSections",{key:t.date,attrs:{date:t.date,stationHeading:t.headings,stationBody:t.body,location:t.location,gradient:e.gradient}})})),1)],1)},l=[],d=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-layout",{class:{"ml-0 mr-0":e.$vuetify.breakpoint.smAndDown,"ml-6 mr-6":e.$vuetify.breakpoint.mdAndUp},attrs:{"text-center":"",wrap:""}},[n("v-flex",{attrs:{md6:"",xs12:""}},[n("transition",{attrs:{mode:"out-in",name:"fade"}},[e.remainingFontVisible?n("p",{staticClass:" text-left headline font-weight-regular",class:e.gradient},[e._v(e._s(e.date))]):e._e()])],1),n("v-flex",{attrs:{md6:"",xs12:""}},[n("transition",{attrs:{mode:"out-in",name:"fade"}},[e.remainingFontVisible?n("p",{staticClass:"text-left .body-1 font-weight-bold"},[n("span",{staticClass:"white--text"},[e._v(e._s(e.location))]),n("br"),n("span",{staticClass:"grey--text"},[e._v(e._s(e.stationHeading))])]):e._e()]),n("transition",{attrs:{mode:"out-in",name:"fade"}},[e.remainingFontVisible?n("p",{staticClass:"grey--text text-left .body-1 font-weight-regular"},[e._v(e._s(e.stationBody))]):e._e()])],1)],1)},u=[],f={name:"ResumeSection",methods:{toggleFontVisible:function(){var e=this;setTimeout((function(){e.counter=0}),500),setTimeout((function(){e.remainingFontVisible=!0}),1500)}},computed:{},data:function(){return{remainingFontVisible:!1}},mounted:function(){this.toggleFontVisible()},props:["date","stationHeading","stationBody","location","gradient"]},p=f,m=(n("27a8"),n("2877")),g=n("6544"),h=n.n(g),b=n("0e8f"),v=n("a722"),y=Object(m["a"])(p,d,u,!1,null,"40762e12",null),w=y.exports;h()(y,{VFlex:b["a"],VLayout:v["a"]});var _={name:"Career",components:{ResumeSections:w},methods:{},computed:{},data:function(){return{gradient:"gradient-0",sections:[{date:"October 19 - now",location:"Silicon Valley, Sunnyvale California",headings:"Mercedes-Benz Research & Development North America Inc.",body:"Master thesis candidate @ Speech and Digital Assistants in Silicon Valley Headquarters for Mercedes-Benz North America Inc. Mainly doing frontend development, UI/UX for internal & future external products for data collection. Designed a chat-bot for simulating the digital in-car assistant in a WebApp.  "},{date:"October 18 - October 19",location:"Sindelfingen, Baden-Württemberg",headings:"Mercedes-Benz Cars AG",body:"The department of UX/UI @ Mercedes-Benz is developing the digital in-car assistant called #HeyMercedes. In this team I worked in the area of user and situation-adaptive speech generation in the design and implementation of a prototype for speech recognition and speech generation."},{date:"March 18 - October 18",location:"Detroit, Michigan",headings:"Mercedes-Benz Research & Development North America Inc.",body:"Internship at the department of testing and certification for the cars S-Class/E-Class Hybrid and Electric. Supported the Team with automated CAN/FlexRay/LIN-Tests. Additionally developed a new device for test automation on base of an Arduino in car-networking. "},{date:"October 17 - March 18",location:"Stuttgart, Baden-Württemberg",headings:"Mercedes-Benz Cars AG",body:"Bachelor's Thesis at the electric powertrain department of the Vans segment of Mercedes-Benz. For the integration of a new CAN-Network architecture I developed a tool for automated software generation from specifications. Additionaly created a mini-Hardware-in-the-Loop together with automated test cases, to validate the software."},{date:"April 17 - October 17",location:"Stuttgart, Baden-Württemberg",headings:"Mercedes-Benz Cars AG",body:"Development of a Microcontroller based Headunit-Component to display CAN-Signals from the Central Powertrain Controller. I developed the full product which inherited designing the electrical circuits, the UI/UX and the C++ Codebase for an Arduino Due. "}]}},mounted:function(){}},x=_,V=(n("c118"),n("a523")),C=Object(m["a"])(x,c,l,!1,null,"7f5a1406",null),A=C.exports;h()(C,{VContainer:V["a"],VLayout:v["a"]});var k=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-container",[n("v-layout",{attrs:{"text-center":"",wrap:""}},e._l(e.sections,(function(t){return n("ResumeSections",{key:t.date,attrs:{date:t.date,stationHeading:t.headings,stationBody:t.body,location:t.location,gradient:e.gradient}})})),1)],1)},M=[],B={name:"Education",components:{ResumeSections:w},methods:{},computed:{},data:function(){return{gradient:"gradient-1",sections:[{date:"March 2018 - March 2020",location:"University of Applied Sciences Reutlingen",headings:"Master of Science, Busines Information Systems. Grade-Ø 1.5",body:"Master thesis candidate @ Speech and Digital Assistants in Silicon Valley Headquarters for Mercedes-Benz North America Inc. "},{date:"March 2014 - March 2018",location:"University of Applied Sciences Ulm",headings:"Bachelor of Engineering, Medical/Mechatronical Engineering. Grade-Ø 1.8",body:"Bachelor's Degree in the area of Medical/Mechatronical Engineering. In the studies I had a special focus on electrical and software engineering."}]}},mounted:function(){}},S=B,I=(n("0760"),Object(m["a"])(S,k,M,!1,null,"47d25cbc",null)),O=I.exports;h()(I,{VContainer:V["a"],VLayout:v["a"]});var F={name:"MainArea",components:{Career:A,Education:O},methods:{toggleFontVisible:function(){var e=this;setTimeout((function(){e.counter=0}),500),setTimeout((function(){e.remainingFontVisible=!0}),1500)},changeHeading:function(){var e=this;setInterval((function(){e.fontVisible=!1,e.counter++,e.counter>2&&(e.counter=0),e.heading=e.headings[e.counter],e.gradient="gradient-"+e.counter,e.fontVisible=!0}),5e3)}},computed:{bigFont:function(){return console.warn(this.$vuetify.breakpoint.mdAndUp),this.$vuetify.breakpoint.mdAndUp?"big-font":"display-3"}},data:function(){return{fontVisible:!1,remainingFontVisible:!1,counter:-1,heading:"Product.",headings:["Product.","UI/UX.","Design."],gradient:"gradient-0",selection:"Career",sections:["Career","Education","Skills","About"]}},mounted:function(){this.toggleFontVisible(),this.changeHeading()}},E=F,j=(n("a31f"),n("f1fe"),n("cc20")),H=n("ef9a"),U=n("a75b"),T=n("2fa4"),$=n("71d9"),D=Object(m["a"])(E,o,s,!1,null,"4f4fc766",null),N=D.exports;h()(D,{VChip:j["a"],VChipGroup:H["a"],VContainer:V["a"],VContent:U["a"],VFlex:b["a"],VLayout:v["a"],VSpacer:T["a"],VToolbar:$["a"]});var P=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-app-bar",{attrs:{app:"",color:"black",dark:""}},[a("v-spacer"),a("v-spacer"),a("div",{staticClass:"align-center"},[a("transition",{attrs:{name:"fade"}},[e.appBarVisible?a("v-img",{staticClass:"contain",attrs:{alt:"Baybora Guelec",src:n("5b62"),width:"85"}}):e._e()],1)],1),a("v-spacer"),a("v-spacer"),a("v-spacer"),a("v-spacer"),a("v-spacer"),a("transition",{attrs:{name:"fade"}},[e.appBarVisible?a("v-btn",{attrs:{color:"grey",href:"https://www.linkedin.com/in/baybora-gülec-60465a160",target:"_blank",text:""}},[a("span",{staticClass:"mr-0 text"},[e._v("LinkedIN")])]):e._e()],1),a("transition",{attrs:{name:"fade"}},[e.appBarVisible?a("v-btn",{attrs:{color:"grey",href:"https://www.xing.com/profile/Baybora_Guelec",target:"_blank",text:""}},[a("span",{staticClass:"mr-0 text"},[e._v("XING")])]):e._e()],1),a("transition",{attrs:{name:"fade"}},[e.appBarVisible?a("v-btn",{attrs:{color:"grey",href:"https://github.com/gaskraank",target:"_blank",text:""}},[a("span",{staticClass:"mr-0 text"},[e._v("GitHub")])]):e._e()],1),a("transition",{attrs:{name:"fade"}},[e.appBarVisible?a("v-btn",{staticClass:"hidden-sm-and-down",attrs:{color:"grey",target:"_blank",text:""}},[a("span",{staticClass:"mr-0  text"},[e._v("bayboragulec@gmail.com")])]):e._e()],1),a("v-spacer"),a("v-spacer")],1)},G=[],z={name:"Header",methods:{toggleAppBarVisible:function(){var e=this;setTimeout((function(){e.appBarVisible=!0}),1500)}},data:function(){return{appBarVisible:!1}},mounted:function(){this.toggleAppBarVisible()}},L=z,R=(n("c600"),n("40dc")),X=n("8336"),W=n("adda"),q=Object(m["a"])(L,P,G,!1,null,"101f1f68",null),J=q.exports;h()(q,{VAppBar:R["a"],VBtn:X["a"],VImg:W["a"],VSpacer:T["a"]});var Y={name:"App",components:{MainArea:N,Header:J},data:function(){return{}}},K=Y,Q=(n("034f"),n("7496")),Z=Object(m["a"])(K,i,r,!1,null,null,null),ee=Z.exports;h()(Z,{VApp:Q["a"],VContent:U["a"]});n("d3b7");var te=n("8c4f"),ne=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"home"},[a("img",{attrs:{alt:"Vue logo",src:n("cf05")}}),a("MainArea")],1)},ae=[],ie={name:"home",components:{MainArea:N}},re=ie,oe=Object(m["a"])(re,ne,ae,!1,null,null,null),se=oe.exports;a["a"].use(te["a"]);var ce=[{path:"/",name:"home",component:se},{path:"/about",name:"about",component:function(){return n.e("about").then(n.bind(null,"f820"))}}],le=new te["a"]({routes:ce}),de=le,ue=n("2f62");a["a"].use(ue["a"]);var fe=new ue["a"].Store({state:{},mutations:{},actions:{},modules:{}}),pe=n("f309");a["a"].use(pe["a"]);var me=new pe["a"]({icons:{iconfont:"mdi"},theme:{dark:!0,themes:{dark:{primary:"black",secondary:"#6575f0"},light:{primary:"#dedfe6",secondary:"#a1a4b8"}}}});a["a"].config.productionTip=!1,new a["a"]({template:"<App />",router:de,store:fe,vuetify:me,render:function(e){return e(ee)}}).$mount("#app")},"5b62":function(e,t,n){e.exports=n.p+"img/logo.24bd7b1b.png"},"83ee":function(e,t,n){},"85fa":function(e,t,n){},"8a23":function(e,t,n){},a31f:function(e,t,n){"use strict";var a=n("85fa"),i=n.n(a);i.a},bc37:function(e,t,n){},c118:function(e,t,n){"use strict";var a=n("83ee"),i=n.n(a);i.a},c600:function(e,t,n){"use strict";var a=n("bc37"),i=n.n(a);i.a},cf05:function(e,t,n){e.exports=n.p+"img/logo.82b9c7a5.png"},f1fe:function(e,t,n){"use strict";var a=n("3c07"),i=n.n(a);i.a}});
//# sourceMappingURL=app.071f5c03.js.map