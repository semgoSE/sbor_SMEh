(this.webpackJsonpdonat=this.webpackJsonpdonat||[]).push([[0],{146:function(e,t,a){e.exports=a(234)},234:function(e,t,a){"use strict";a.r(t);a(147),a(173),a(175),a(176),a(178),a(179),a(180),a(181),a(182),a(183),a(184),a(185),a(187),a(188),a(189),a(190),a(191),a(192),a(193),a(194),a(195),a(196),a(198),a(199),a(200),a(201),a(202),a(203),a(204),a(205),a(206),a(207),a(208),a(209),a(210),a(211),a(212),a(213),a(214),a(215);var n=a(0),l=a.n(n),r=a(87),o=a.n(r),c=a(37),i=a.n(c),s=a(100),m=a(60),u=a.n(m),d=a(88),h=a(43),p=a(36),E=a(89),g=a(90),b=a(102),f=a(101),y=a(2),v=(a(86),function(e){var t=e.img,a=e.name,n=e.type,r=e.disabled;return l.a.createElement(y.e,null,l.a.createElement(y.c,{mode:"outline"},l.a.createElement("img",{src:t,className:"img"}),l.a.createElement(y.y,{disabled:!0,multiline:!0,description:"\u041c\u0430\u0442\u0432\u0435\u0439 \u041f\u0440\u0430\u0432\u043e\u0441\u0443\u0434\u043e\u0432 \xb7 "+("reqular"==n?"\u041f\u043e\u043c\u043e\u0449\u044c \u043d\u0443\u0436\u043d\u0430 \u043a\u0430\u0436\u0434\u044b\u0439 \u043c\u0435\u0441\u044f\u0446":"\u041c\u0430\u0442\u0432\u0435\u0439 \u041f\u0440\u0430\u0432\u043e\u0441\u0443\u0434\u043e\u0432 \xb7 \u0417\u0430\u043a\u043e\u043d\u0447\u0438\u0442\u0441\u044f \u0447\u0435\u0440\u0435\u0437 5 \u0434\u043d\u0435\u0439")},l.a.createElement(y.E,{level:"3"},a)),l.a.createElement(y.x,null),l.a.createElement(y.y,{disabled:!0,multiline:!0,after:l.a.createElement(y.e,null,l.a.createElement(y.b,{disabled:r,mode:"outline"},"\u041f\u043e\u043c\u043e\u0447\u044c")),description:l.a.createElement(y.s,null)},"\u041f\u043e\u043c\u043e\u0433\u0438\u0442\u0435 \u043f\u0435\u0440\u0432\u044b\u043c")))}),C=a(236),k=a(237),x=a(238),S=a(239),w=a(240),j=a(99),P=(a(233),new j.VKMiniAppAPI),T=function(e){Object(b.a)(a,e);var t=Object(f.a)(a);function a(){var e;Object(E.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={activePanel:"create",activeStory:"create",sbors:[],form:{}},e.go=function(t){e.setState({activePanel:t,form:{}})},e.onChange=function(t){e.setState({form:Object(p.a)(Object(p.a)({},e.state.form),{},Object(h.a)({},t.currentTarget.name,t.currentTarget.value))})},e.onChangeFile=function(t){var a=e.state.form;if(t.currentTarget.files&&t.currentTarget.files[0]){var n=new FileReader;n.onload=function(){var t=Object(d.a)(u.a.mark((function t(n){return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.setState({form:Object(p.a)(Object(p.a)({},a),{},{img:n.target.result})});case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),n.readAsDataURL(t.currentTarget.files[0])}},e.onChangeStory=function(t){e.setState({activeStory:t.currentTarget.dataset.story})},e.submit=function(t){console.log(e.state.form),e.setState({sbors:[].concat(Object(s.a)(e.state.sbors),[Object(p.a)(Object(p.a)({},e.state.form),{},{type:t.currentTarget.dataset.type})]),form:{},activePanel:"snippet",snackbar:l.a.createElement(y.z,{onClose:function(){return e.setState({snackbar:null})}},"\u0421\u0431\u043e\u0440 \u0441\u043e\u0437\u0434\u0430\u043d!")})},e}return Object(g.a)(a,[{key:"componentDidMount",value:function(){var e=this;this.setState({popout:l.a.createElement(y.u,null)}),P.initApp(),P.getUserInfo().then((function(t){return e.setState({userInfo:t,popout:null})})),console.log(window.location.hash),"#1"==window.location.hash&&this.setState({activeStory:"sbor"})}},{key:"render",value:function(){var e=this,t=this.state.form;return l.a.createElement(y.f,{activeStory:this.state.activeStory,tabbar:l.a.createElement(y.B,null,l.a.createElement(y.C,{selected:"create"==this.state.activeStory,"data-story":"create",onClick:this.onChangeStory},l.a.createElement(C.a,null)),l.a.createElement(y.C,{selected:"home"==this.state.activeStory,"data-story":"home",onClick:this.onChangeStory},l.a.createElement(k.a,null)))},l.a.createElement(y.F,{id:"sbor",activePanel:"home"},l.a.createElement(y.o,{id:"home"},l.a.createElement("img",{src:"https://i.ytimg.com/vi/ZwLFyXU-Pso/maxresdefault.jpg",style:{width:"100%",height:140,borderRadius:"10px 10px 0px 0px"}}),l.a.createElement(y.E,{style:{paddingTop:12,paddingLeft:12,paddingRight:12},level:"2"},"\u0414\u043e\u0431\u0440\u044f\u0448\u0438 \u043f\u043e\u043c\u043e\u0433\u0430\u044e\u0442 \u043a\u043e\u0442\u0438\u043a\u0430\u043c"),l.a.createElement(y.y,{style:{paddingTop:0},description:"\u041f\u043e\u043c\u043e\u0449\u044c \u043d\u0443\u0436\u043d\u0430 \u043a\u0430\u0436\u0434\u044b\u0439 \u043c\u0435\u0441\u044f\u0446"},l.a.createElement("span",{style:{color:"#6D7885"}},"\u0410\u0432\u0442\u043e\u0440 \u041c\u0430\u0442\u0432\u0435\u0439 \u041f\u0440\u0430\u0432\u043e\u0441\u0443\u0434\u043e\u0432")),l.a.createElement(y.x,null),l.a.createElement(y.A,{weight:"medium",style:{paddingTop:12,paddingLeft:12,paddingRight:12}},"\u041d\u0443\u0436\u043d\u043e \u0441\u043e\u0431\u0440\u0430\u0442\u044c \u0432 \u0441\u0435\u043d\u0442\u044f\u0431\u0440\u0435"),l.a.createElement("div",{style:{paddingBottom:12}},l.a.createElement("div",{className:"progress"},l.a.createElement("p",{class:"value"},"6000"),"10000")),l.a.createElement(y.x,null),l.a.createElement(y.e,{style:{fontSize:15}},l.a.createElement("p",null,"\u041f\u0440\u0432\u0435\u0442 \u0434\u043e\u0431\u0440\u044f\u0448"),l.a.createElement("p",null,"\u041c\u043d\u043e\u0433\u043e \u0442\u0435\u043a\u0441\u0442\u0430(\u0438\u0437 figma \u043d\u0435 \u043a\u043e\u043f\u0438\u0440\u0443\u0435\u0442\u0441\u044f)")),l.a.createElement(y.x,null),l.a.createElement("div",null),l.a.createElement(y.h,{vertical:"bottom"},l.a.createElement(y.y,{style:{fontSize:14},after:l.a.createElement(y.e,null,l.a.createElement(y.b,{mode:"commerce"},"\u041f\u043e\u043c\u043e\u0447\u044c")),description:l.a.createElement(y.s,{className:"progress_my",value:87,ref:function(e){return e.style.backgroundColor="red"}})},"\u0421\u043e\u0431\u0440\u0430\u043d\u043e 8 750 \u20bd \u0438\u0437 10 000 \u20bd")))),l.a.createElement(y.F,{id:"home",activePanel:"home",popout:this.state.popout},l.a.createElement(y.o,{id:"home"},l.a.createElement(y.p,null,"\u041f\u043e\u0436\u0435\u0440\u0442\u0432\u043e\u0432\u0430\u043d\u0438\u044f"),l.a.createElement(y.e,null,l.a.createElement(y.c,null,l.a.createElement(y.e,null,this.state.userInfo&&l.a.createElement(y.y,{description:l.a.createElement("span",null,"\u0412\u044b \u0441\u043e\u0431\u0440\u0430\u043b\u0438 100 \u20bd",l.a.createElement("br",null),"\u0412\u044b \u043f\u043e\u0436\u0435\u0440\u0442\u0432\u043e\u0432\u0430\u043b\u0438 0 \u20bd"),before:l.a.createElement(y.a,{src:this.state.userInfo.photo_200})},this.state.userInfo.first_name," ",this.state.userInfo.last_name)))),l.a.createElement(y.x,null),l.a.createElement(y.k,{header:l.a.createElement(y.l,null,"\u0421\u043e\u0437\u0434\u0430\u043d\u043d\u044b\u0435 \u0441\u0431\u043e\u0440\u044b")},0===this.state.sbors.length?l.a.createElement(y.r,{action:l.a.createElement(y.b,{size:"l","data-story":"create",onClick:this.onChangeStory},"\u0421\u043e\u0437\u0434\u0430\u0442\u044c \u0441\u0431\u043e\u0440")},"\u0423 \u0412\u0430\u0441 \u043f\u043e\u043a\u0430 \u043d\u0435\u0442 \u0441\u0431\u043e\u0440\u043e\u0432.",l.a.createElement("br",null),"\u041d\u0430\u0447\u043d\u0438\u0442\u0435 \u0434\u043e\u0431\u0440\u043e\u0435 \u0434\u0435\u043b\u043e."):l.a.createElement(y.n,null,this.state.sbors.map((function(e){return l.a.createElement(v,{type:e.type,disabled:!0,name:e.name,img:e.img})})))),l.a.createElement(y.k,{header:l.a.createElement(y.l,null,"\u041f\u043e\u0434\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u0435\u043c\u044b\u0435 \u0441\u0431\u043e\u0440\u044b")}))),l.a.createElement(y.F,{id:"create",activePanel:this.state.activePanel,popout:this.state.popout},l.a.createElement(y.o,{id:"create"},l.a.createElement(y.p,null,"\u0422\u0438\u043f \u0441\u0431\u043e\u0440\u0430"),l.a.createElement(y.d,{style:{marginTop:"30vh"}},l.a.createElement(y.c,{size:"l"},l.a.createElement("div",null,l.a.createElement(y.y,{before:l.a.createElement(x.a,null),onClick:function(){return e.go("goal")},description:"\u041a\u043e\u0433\u0434\u0430 \u0435\u0441\u0442\u044c \u043e\u043f\u0440\u0435\u0434\u0435\u043b\u0451\u043d\u043d\u0430\u044f \u0446\u0435\u043b\u044c",expandable:!0},l.a.createElement(y.E,{weight:"semibold",level:"3"},"\u0426\u0435\u043b\u0435\u0432\u043e\u0439 \u0441\u0431\u043e\u0440")))),l.a.createElement(y.c,{size:"l"},l.a.createElement("div",null,l.a.createElement(y.y,{before:l.a.createElement(S.a,null),onClick:function(){return e.go("reqular")},description:"\u0415\u0441\u043b\u0438 \u043f\u043e\u043c\u043e\u0449\u044c \u043d\u0443\u0436\u043d\u0430 \u0435\u0436\u0435\u043c\u0435\u0441\u044f\u0447\u043d\u043e",expandable:!0},l.a.createElement(y.E,{weight:"semibold",level:"3"},"\u0420\u0435\u0433\u0443\u043b\u044f\u0440\u043d\u044b\u0439 \u0441\u0431\u043e\u0440"))))),this.state.snackbar),l.a.createElement(y.o,{id:"goal"},l.a.createElement(y.p,{separator:!1,left:l.a.createElement(y.q,{onClick:function(){return e.go("create")}})},"\u0426\u0435\u043b\u0435\u0432\u043e\u0439 \u0441\u0431\u043e\u0440"),null==t.img?l.a.createElement(y.e,{style:{paddingTop:0}},l.a.createElement(y.g,{accept:"image/x-png,image/jpeg",type:"file",mode:"tertiary",style:{border:"1px dashed var(--accent)",padding:"32px 0"},name:"img",onChange:this.onChangeFile,controlSize:"xl",before:l.a.createElement(w.a,null)},"\u0417\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044c \u043e\u0431\u043b\u043e\u0436\u043a\u0443")):l.a.createElement(y.e,{style:{overflow:"hidden"}},l.a.createElement("img",{id:"image",src:t.img,style:{width:"100%",height:140,borderRadius:10}})),l.a.createElement(y.i,null,l.a.createElement(y.m,{top:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u0441\u0431\u043e\u0440\u0430",value:t.name,onChange:this.onChange,name:"name",placeholder:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u0441\u0431\u043e\u0440\u0430"}),l.a.createElement(y.m,{top:"\u0421\u0443\u043c\u043c\u0430, \u20bd",value:t.summa,onChange:this.onChange,name:"summa",placeholder:"\u0421\u043a\u043e\u043b\u044c\u043a\u043e \u043d\u0443\u0436\u043d\u043e \u0441\u043e\u0431\u0440\u0430\u0442\u044c?"}),l.a.createElement(y.m,{top:"\u0426\u0435\u043b\u044c",onChange:this.onChange,value:t.goal,name:"goal",placeholder:"\u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440, \u043b\u0435\u0447\u0435\u043d\u0438\u0435 \u0447\u0435\u043b\u043e\u0432\u0435\u043a\u0430"}),l.a.createElement(y.D,{top:"\u041e\u043f\u0438\u0441\u0430\u043d\u0438\u0435",onChange:this.onChange,value:t.description,name:"description",placeholder:"\u041d\u0430 \u0447\u0442\u043e \u043f\u043e\u0439\u0434\u0443\u0442 \u0434\u0435\u043d\u044c\u0433\u0438 \u0438 \u043a\u0430\u043a \u043e\u043d\u0438 \u043a\u043e\u043c\u0443-\u0442\u043e \u043f\u043e\u043c\u043e\u0433\u0443\u0442?"}),l.a.createElement(y.w,{top:"\u041a\u0443\u0434\u0430 \u043f\u043e\u043b\u0443\u0447\u0430\u0442\u044c \u0434\u0435\u043d\u044c\u0433\u0438"},"\u0421\u0447\u0451\u0442 VK Pay \xb7 1234"),l.a.createElement(y.b,{size:"xl",disabled:null==t.name||null==t.summa||null==t.goal||null==t.description||null==t.img,onClick:function(){return e.setState({activePanel:"dop"})}},"\u0414\u0430\u043b\u0435\u0435"))),l.a.createElement(y.o,{id:"dop"},l.a.createElement(y.p,{left:l.a.createElement(y.q,{onClick:function(){return e.setState({activePanel:"goal"})}})},"\u0414\u043e\u043f\u043e\u043b\u043d\u0438\u0442\u0435\u043b\u044c\u043d\u043e"),l.a.createElement(y.i,null,l.a.createElement(y.w,{top:"\u0410\u0432\u0442\u043e\u0440"},"\u041c\u0430\u0442\u0432\u0435\u0439 \u041f\u0440\u0430\u0432\u043e\u0441\u0443\u0434\u043e\u0432"),l.a.createElement(y.j,{top:"\u0421\u0431\u043e\u0440 \u0437\u0430\u0432\u0435\u0440\u0448\u0438\u0442\u0441\u044f"},l.a.createElement(y.t,{checked:"end"==t.date,name:"date",value:"end",onChange:this.onChange},"\u041a\u043e\u0433\u0434\u0430 \u0441\u043e\u0431\u0435\u0440\u0451\u043c \u0441\u0443\u043c\u043c\u0443"),l.a.createElement(y.t,{checked:"date"==t.date,name:"date",value:"date",onChange:this.onChange},"\u0412 \u043e\u043f\u0440\u0435\u0434\u0435\u043b\u0451\u043d\u043d\u0443\u044e \u0434\u0430\u0442\u0443")),"date"==t.date&&l.a.createElement(y.v,{value:t.d,placeholder:"\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u0434\u0430\u0442\u0443",name:"d",onChange:this.onChange,top:"\u0414\u0430\u0442\u0430 \u043e\u043a\u043e\u043d\u0447\u0430\u043d\u0438\u044f"},l.a.createElement("option",{value:"20.09"},"20 \u0441\u0435\u043d\u0442\u0435\u0431\u0440\u044f"))),l.a.createElement(y.h,{vertical:"bottom"},l.a.createElement(y.e,null,l.a.createElement(y.b,{size:"xl","data-type":"goal",onClick:this.submit,disabled:null==this.state.form.d},"\u0421\u043e\u0437\u0434\u0430\u0442\u044c \u0441\u0431\u043e\u0440")))),l.a.createElement(y.o,{id:"reqular"},l.a.createElement(y.p,{separator:!1,left:l.a.createElement(y.q,{onClick:function(){return e.go("create")}})},"\u0420\u0435\u0433\u0443\u043b\u044f\u0440\u043d\u044b\u0439 \u0441\u0431\u043e\u0440"),null==t.img?l.a.createElement(y.e,{style:{paddingTop:0}},l.a.createElement(y.g,{accept:"image/x-png,image/jpeg",type:"file",mode:"tertiary",style:{border:"1px dashed var(--accent)",padding:"32px 0"},name:"img",onChange:this.onChangeFile,controlSize:"xl",before:l.a.createElement(w.a,null)},"\u0417\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044c \u043e\u0431\u043b\u043e\u0436\u043a\u0443")):l.a.createElement(y.e,{style:{overflow:"hidden"}},l.a.createElement("img",{id:"image",src:t.img,style:{width:"100%",height:140,borderRadius:10}})),l.a.createElement(y.i,null,l.a.createElement(y.m,{top:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u0441\u0431\u043e\u0440\u0430",onChange:this.onChange,name:"name",placeholder:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u0441\u0431\u043e\u0440\u0430"}),l.a.createElement(y.m,{type:"tel",top:"\u0421\u0443\u043c\u043c\u0430 \u0432 \u043c\u0435\u0441\u044f\u0446, \u20bd",onChange:this.onChange,name:"summa",placeholder:"\u0421\u043a\u043e\u043b\u044c\u043a\u043e \u043d\u0443\u0436\u043d\u043e \u0441\u043e\u0431\u0440\u0430\u0442\u044c?"}),l.a.createElement(y.m,{top:"\u0426\u0435\u043b\u044c",onChange:this.onChange,name:"goal",placeholder:"\u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440, \u043b\u0435\u0447\u0435\u043d\u0438\u0435 \u0447\u0435\u043b\u043e\u0432\u0435\u043a\u0430"}),l.a.createElement(y.D,{top:"\u041e\u043f\u0438\u0441\u0430\u043d\u0438\u0435",onChange:this.onChange,name:"description",placeholder:"\u041d\u0430 \u0447\u0442\u043e \u043f\u043e\u0439\u0434\u0443\u0442 \u0434\u0435\u043d\u044c\u0433\u0438 \u0438 \u043a\u0430\u043a \u043e\u043d\u0438 \u043a\u043e\u043c\u0443-\u0442\u043e \u043f\u043e\u043c\u043e\u0433\u0443\u0442?"}),l.a.createElement(y.w,{top:"\u041a\u0443\u0434\u0430 \u043f\u043e\u043b\u0443\u0447\u0430\u0442\u044c \u0434\u0435\u043d\u044c\u0433\u0438"},"\u0421\u0447\u0451\u0442 VK Pay \xb7 1234"),l.a.createElement(y.w,{top:"\u0410\u0432\u0442\u043e\u0440"},"\u041c\u0430\u0442\u0432\u0435\u0439 \u041f\u0440\u0430\u0432\u043e\u0441\u0443\u0434\u043e\u0432"),l.a.createElement(y.b,{size:"xl","data-type":"reqular",onClick:this.submit,disabled:null==t.name||null==t.summa||null==t.goal||null==t.description||null==t.img},"\u0421\u043e\u0437\u0434\u0430\u0442\u044c \u0441\u0431\u043e\u0440"))),l.a.createElement(y.o,{id:"snippet"},l.a.createElement(y.p,{left:l.a.createElement(y.q,{onClick:function(){return e.setState({activePanel:"create"})}})},"C\u043d\u0438\u043f\u043f\u0435\u0442"),l.a.createElement(y.e,null,l.a.createElement(v,{disabled:!0,img:this.state.sbors[this.state.sbors.length-1]&&this.state.sbors[this.state.sbors.length-1].img,name:this.state.sbors[this.state.sbors.length-1]&&this.state.sbors[this.state.sbors.length-1].name,type:this.state.sbors[this.state.sbors.length-1]&&this.state.sbors[this.state.sbors.length-1].type})),l.a.createElement(y.e,null,l.a.createElement(y.b,{size:"xl",onClick:function(){return P.postToWall("https://vk.com/app7591251#1")}},"\u041f\u043e\u0434\u0435\u043b\u0438\u0442\u0441\u044f \u043d\u0430 \u0441\u0442\u0435\u043d\u0435")),this.state.snackbar)))}}]),a}(n.Component);i.a.send("VKWebAppInit"),o.a.render(l.a.createElement(T,null),document.getElementById("root"))},86:function(e,t,a){}},[[146,1,2]]]);
//# sourceMappingURL=main.38838781.chunk.js.map