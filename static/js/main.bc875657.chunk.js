(this["webpackJsonpfacebook-dashboard"]=this["webpackJsonpfacebook-dashboard"]||[]).push([[0],{157:function(e,a,t){},191:function(e,a,t){e.exports=t(341)},196:function(e,a,t){},197:function(e,a,t){},341:function(e,a,t){"use strict";t.r(a);var n,r=t(0),o=t.n(r),l=t(11),i=t.n(l),c=(t(196),t(197),t(158)),s=t(159),m=t(186),u=t(182),d=t(127),p=t(346),h=t(82),f=t(52),E=t(342),g=t(130),b=t(344),k=t(343),y=t(347),v=t(121),O=t.n(v),N=t(66),j=t(69),I=t(90),w=t.n(I),P=t(123),x=t(81),S=t(161),T=t.n(S).a.create({baseURL:"https://eurowindows.educationhost.cloud/api",withCredentials:!0}),L=Object(x.b)("fetchLogin",function(){var e=Object(P.a)(w.a.mark((function e(a,t){var n;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,T.post("/login",a).then((function(e){return e.data}));case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})));return function(a,t){return e.apply(this,arguments)}}()),G=Object(x.b)("fetchProfile",function(){var e=Object(P.a)(w.a.mark((function e(a,t){var n;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=T.get("/profile",{headers:{Authorization:"Bearer ".concat(a)}}).then((function(e){return e.data})),e.abrupt("return",n);case 2:case"end":return e.stop()}}),e)})));return function(a,t){return e.apply(this,arguments)}}()),H=Object(x.c)({name:"Auth",initialState:{loading:!1,user:{name:"",token:"",id:""},apitoken:"",auth:!1,loadingProfile:!0},reducers:{authlogin:function(e,a){e.auth=!0}},extraReducers:(n={},Object(j.a)(n,L.pending,(function(e,a){e.loading=!0})),Object(j.a)(n,L.fulfilled,(function(e,a){!0===a.payload.status?(e.apitoken=a.payload.data,e.auth=!0,localStorage.setItem("token",a.payload.data)):localStorage.removeItem("token")})),Object(j.a)(n,L.rejected,(function(e,a){e.loading=!1})),Object(j.a)(n,G.pending,(function(e,a){})),Object(j.a)(n,G.fulfilled,(function(e,a){!0===a.payload.status?(e.auth=!0,e.user={name:a.payload.data.username,token:"",id:a.payload.data.id},e.loadingProfile=!1):e.auth=!1})),Object(j.a)(n,G.rejected,(function(e,a){e.loadingProfile=!1})),n)}),C=H.reducer,F=H.actions.authlogin,U=t(349),q=t(350),K=t(351),A=t(352),B=t(353),R=t(354),_=d.a.TabPane,z=p.a.Option,D=function(e){Object(m.a)(t,e);var a=Object(u.a)(t);function t(e){var n;return Object(c.a)(this,t),(n=a.call(this,e)).responseFacebook=function(e){"unknown"!==e.status&&(n.setState({data:e}),n.setState({loading:!1}),n.setState({activekey:"2"}))},n.responseFacebook1=function(e){"unknown"!==e.status&&(n.setState({data:e}),n.setState({loading:!1}),n.setState({activekey:"3"}),console.log(n.state.donvi))},n.onLogin=function(e){T.post("/login",{token:e.token}).then((function(e){!0===e.data.status&&(n.props.authlogin(),localStorage.setItem("token",e.data.data),n.props.history.push("/"))}))},n.onRegister=function(e){T.post("/register",{token:e.token,id_donvi:e.id_donvi}).then((function(e){!0===e.data.status&&(n.props.authlogin(),localStorage.setItem("token",e.data.data),n.props.history.push("/"))}))},n.state={activekey:"1",data:{},loading:!0,donvi:{}},n}return Object(s.a)(t,[{key:"componentWillMount",value:function(){!0===this.props.auth&&this.props.history.push("/")}},{key:"componentDidMount",value:function(){var e=this;T.get("/donvi-list").then((function(a){!0===a.data.status&&e.setState({donvi:a.data.data})}))}},{key:"render",value:function(){return o.a.createElement(h.a,{style:{paddingTop:"10%"}},o.a.createElement(f.a,{offset:8},o.a.createElement(d.a,{defaultActiveKey:"1",centered:!0,activeKey:this.state.activekey},o.a.createElement(_,{tab:o.a.createElement("span",null,o.a.createElement(U.a,null),"\u0110\u0102NG NH\u1eacP B\u1eb0NG FACEBOOK"),key:"1"},o.a.createElement(E.a,{direction:"vertical"},o.a.createElement(O.a,{appId:"564205580431684",autoLoad:!1,fields:"name,email,picture",callback:this.responseFacebook,render:function(e){return o.a.createElement(g.a,{type:"primary",onClick:e.onClick,block:!0},"\u0110\u0102NG NH\u1eacP B\u1eb0NG T\xc0I KHO\u1ea2N FACEBOOK")}}),o.a.createElement(O.a,{appId:"564205580431684",autoLoad:!1,fields:"name,email,picture",callback:this.responseFacebook1,render:function(e){return o.a.createElement(g.a,{type:"primary",onClick:e.onClick,block:!0},"\u0110\u0102NG K\xcd T\xc0I KHO\u1ea2N FACEBOOK")}}))),o.a.createElement(_,{tab:o.a.createElement("span",null,o.a.createElement(q.a,null),"\u0110\u0102NG NH\u1eacP H\u1ec6 TH\u1ed0NG"),key:"2"},this.state.loading?o.a.createElement("h1",null,"Loading...."):o.a.createElement(h.a,null,o.a.createElement(f.a,{span:"20",offset:"2"},o.a.createElement(b.a,{name:"normal_login",className:"login-form",initialValues:{username:this.state.data.name,token:this.state.data.accessToken,id:this.state.data.id,email:this.state.data.email,remember:!0},onFinish:this.onLogin},o.a.createElement(b.a.Item,null,o.a.createElement(k.a,{size:"large",src:this.state.data.picture.data.url})),o.a.createElement(b.a.Item,{name:"id",rules:[{required:!0,message:"Please input your Username!"}]},o.a.createElement(y.a,{prefix:o.a.createElement(K.a,{className:"site-form-item-icon"}),placeholder:"ID"})),o.a.createElement(b.a.Item,{name:"username",rules:[{required:!0,message:"Please input your Username!"}]},o.a.createElement(y.a,{prefix:o.a.createElement(A.a,{className:"site-form-item-icon"}),placeholder:"Username"})),o.a.createElement(b.a.Item,{name:"email",rules:[{required:!1,message:"Please input your Username!"}]},o.a.createElement(y.a,{prefix:o.a.createElement(B.a,{className:"site-form-item-icon"}),placeholder:"email"})),o.a.createElement(b.a.Item,{name:"token",rules:[{required:!0,message:"Please input your Password!"}]},o.a.createElement(y.a,{prefix:o.a.createElement(R.a,{className:"site-form-item-icon"}),type:"password",placeholder:"Password"})),o.a.createElement(b.a.Item,null,o.a.createElement(g.a,{type:"primary",htmlType:"submit",className:"login-form-button",loading:this.state.loading},"\u0110\u0102NG NH\u1eacP")))))),o.a.createElement(_,{tab:o.a.createElement("span",null,o.a.createElement(q.a,null),"\u0110\u0102NG K\xdd H\u1ec6 TH\u1ed0NG"),key:"3"},this.state.loading?o.a.createElement("h1",null,"Loading...."):o.a.createElement(h.a,null,o.a.createElement(f.a,{span:"20",offset:"2"},o.a.createElement(b.a,{name:"normal_login",className:"login-form",initialValues:{username:this.state.data.name,token:this.state.data.accessToken,id:this.state.data.id,email:this.state.data.email,remember:!0},onFinish:this.onRegister},o.a.createElement(b.a.Item,null,o.a.createElement(k.a,{size:"large",src:this.state.data.picture.data.url})),o.a.createElement(b.a.Item,{name:"id",rules:[{required:!0,message:"Please input your Username!"}]},o.a.createElement(y.a,{prefix:o.a.createElement(K.a,{className:"site-form-item-icon"}),placeholder:"ID"})),o.a.createElement(b.a.Item,{name:"username",rules:[{required:!0,message:"Please input your Username!"}]},o.a.createElement(y.a,{prefix:o.a.createElement(A.a,{className:"site-form-item-icon"}),placeholder:"Username"})),o.a.createElement(b.a.Item,{name:"email",rules:[{required:!1,message:"Please input your Username!"}]},o.a.createElement(y.a,{prefix:o.a.createElement(B.a,{className:"site-form-item-icon"}),placeholder:"email"})),o.a.createElement(b.a.Item,{name:"token",rules:[{required:!0,message:"Please input your Password!"}]},o.a.createElement(y.a,{prefix:o.a.createElement(R.a,{className:"site-form-item-icon"}),type:"password",placeholder:"Password"})),o.a.createElement(b.a.Item,{name:"id_donvi",label:"\u0110\u01a1n v\u1ecb",rules:[{required:!0}]},o.a.createElement(p.a,{placeholder:"L\u1ef1a ch\u1ecdn \u0111\u01a1n v\u1ecb",onChange:this.onGenderChange,allowClear:!0},this.state.donvi.map((function(e,a){return o.a.createElement(z,{value:e.id,key:e.id},e.name)})))),o.a.createElement(b.a.Item,null,o.a.createElement(g.a,{type:"primary",htmlType:"submit",className:"login-form-button",loading:this.state.loading},"\u0110\u0102NG K\xdd")))))))))}}]),t}(o.a.Component);var M={authlogin:F},W=Object(N.b)((function(e){return e.loginReducer}),M)(D),J=t(83),V=t(355),X=t(345),$=t(175),Q=t(348),Y=t(129),Z=(t(157),X.a.Title),ee={required:"Link kh\xf4ng \u0111\u01b0\u1ee3c \u0111\xea tr\u1ed1ng"};var ae=function(e){var a=b.a.useForm(),t=Object(J.a)(a,1)[0],n=Object(r.useState)([]),l=Object(J.a)(n,2),i=l[0],c=l[1],s=Object(r.useState)(!1),m=Object(J.a)(s,2),u=m[0],d=m[1],p=Object(r.useState)(!1),k=Object(J.a)(p,2),v=k[0],O=k[1],N=Object(r.useState)(!0),j=Object(J.a)(N,2),I=j[0],w=j[1];return Object(r.useEffect)((function(){T.get("/top10posts",{headers:{Authorization:"Bearer ".concat(localStorage.getItem("token"))}}).then((function(e){1==e.data.status?(c(e.data.data),w(!1)):$.a.error("Truy v\u1ea5n d\u1eef li\u1ec7u kh\xf4ng th\xe0nh c\xf4ng")}))}),[v]),o.a.createElement("div",{className:"App"},o.a.createElement(Z,{strong:!0},"H\u1ec6 TH\u1ed0NG THEO D\xd5I XU H\u01af\u1edaNG M\u1ea0NG X\xc3 H\u1ed8I"),o.a.createElement(h.a,null,o.a.createElement(f.a,{offset:6,span:12},o.a.createElement(b.a,{form:t,name:"control-hooks",onFinish:function(e){d(!0),T.post("/facebook-post",{url:e.Link},{headers:{Authorization:"Bearer ".concat(localStorage.getItem("token"))}}).then((function(e){d(!1),1==e.data.status?($.a.success("Upload th\xe0nh c\xf4ng"),O(!v)):$.a.error("Upload kh\xf4ng th\xe0nh c\xf4ng")}))},validateMessages:ee},o.a.createElement(b.a.Item,{name:"Link",label:"Link",rules:[{required:!0}]},o.a.createElement(y.a,{style:{width:"100%"},prefix:o.a.createElement(V.a,{className:"site-form-item-icon"})})),o.a.createElement(h.a,{style:{display:"flex",flexDirection:"row",justifyContent:"center"}},o.a.createElement(b.a.Item,{style:{padding:"10px"}},o.a.createElement(E.a,null,o.a.createElement(g.a,{type:"primary",htmlType:"submit",onClick:function(){t.resetFields()}},"Reset link"),o.a.createElement(g.a,{type:"primary",htmlType:"submit",loading:u},"\u0110\u0103ng b\xe0i"))))))),o.a.createElement(X.a.Title,{level:2},"10 b\xe0i vi\u1ebft g\u1ea7n \u0111\xe2y"),o.a.createElement(h.a,{style:{paddingTop:"20px",width:"100%"},hidden:I},o.a.createElement(f.a,{span:12,offset:6},o.a.createElement(h.a,{gutter:[16,16]},i.map((function(e,a){return o.a.createElement(f.a,{span:8},o.a.createElement(Q.a,{type:"inner",title:e.providerName,bordered:!0,key:a},o.a.createElement(E.a,{direction:"vertical"},o.a.createElement(Y.a,null,null!=e.content?e.content:"Kh\xf4ng c\xf3 n\u1ed9i dung"),o.a.createElement(Y.a,{placement:"topLeft",title:e.url},o.a.createElement("a",{href:e.url,target:"_blank"},"Link b\xe0i vi\u1ebft")))))}))))))},te=function(){return o.a.createElement("h2",null,"404 Page Not Found")},ne=t(120),re=t(29),oe=(t(339),t(187)),le=function(e){var a=e.component,t=e.auth,n=Object(oe.a)(e,["component","auth"]);return o.a.createElement(re.b,Object.assign({},n,{render:function(e){return t?o.a.createElement(a,e):o.a.createElement(re.a,{to:{pathname:"/login"}})}}))};var ie=function(){var e=Object(N.d)((function(e){return e.loginReducer})),a=e.loadingProfile,t=e.auth,n=Object(N.c)();return Object(r.useEffect)((function(){n(G(localStorage.getItem("token")))}),[]),o.a.createElement("div",{className:"App"},a?o.a.createElement("div",null,"Loading...."):o.a.createElement(ne.a,{basename:"/facebook-dashboard"},o.a.createElement(re.d,null,o.a.createElement(le,{path:"/",exact:!0,component:ae,auth:t}),o.a.createElement(re.b,{path:"/login",component:function(e){return o.a.createElement(W,e)}}),o.a.createElement(re.b,{component:te}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var ce=t(45),se=Object(ce.c)({loginReducer:C}),me=Object(x.a)({reducer:se});i.a.render(o.a.createElement(N.a,{store:me},o.a.createElement(ie,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[191,1,2]]]);
//# sourceMappingURL=main.bc875657.chunk.js.map