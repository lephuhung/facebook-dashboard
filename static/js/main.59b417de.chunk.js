(this["webpackJsonpfacebook-dashboard"]=this["webpackJsonpfacebook-dashboard"]||[]).push([[0],{157:function(e,t,a){},191:function(e,t,a){e.exports=a(341)},196:function(e,t,a){},197:function(e,t,a){},341:function(e,t,a){"use strict";a.r(t);var n,r=a(0),l=a.n(r),o=a(11),i=a.n(o),c=(a(196),a(197),a(158)),s=a(159),m=a(186),u=a(182),d=a(127),p=a(346),h=a(82),f=a(52),E=a(342),g=a(130),b=a(344),k=a(343),y=a(347),v=a(121),O=a.n(v),j=a(66),N=a(69),I=a(90),w=a.n(I),P=a(123),x=a(81),S=a(161),T=a.n(S).a.create({baseURL:"http://eurowindows.educationhost.cloud//api",withCredentials:!0}),L=Object(x.b)("fetchLogin",function(){var e=Object(P.a)(w.a.mark((function e(t,a){var n;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,T.post("/login",t).then((function(e){return e.data}));case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}()),G=Object(x.b)("fetchProfile",function(){var e=Object(P.a)(w.a.mark((function e(t,a){var n;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=T.get("/profile",{headers:{Authorization:"Bearer ".concat(t)}}).then((function(e){return e.data})),e.abrupt("return",n);case 2:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}()),H=Object(x.c)({name:"Auth",initialState:{loading:!1,user:{name:"",token:"",id:""},apitoken:"",auth:!1,loadingProfile:!0},reducers:{authlogin:function(e,t){e.auth=!0}},extraReducers:(n={},Object(N.a)(n,L.pending,(function(e,t){e.loading=!0})),Object(N.a)(n,L.fulfilled,(function(e,t){!0===t.payload.status?(e.apitoken=t.payload.data,e.auth=!0,localStorage.setItem("token",t.payload.data)):localStorage.removeItem("token")})),Object(N.a)(n,L.rejected,(function(e,t){e.loading=!1})),Object(N.a)(n,G.pending,(function(e,t){})),Object(N.a)(n,G.fulfilled,(function(e,t){!0===t.payload.status?(e.auth=!0,e.user={name:t.payload.data.username,token:"",id:t.payload.data.id},e.loadingProfile=!1):e.auth=!1})),Object(N.a)(n,G.rejected,(function(e,t){e.loadingProfile=!1})),n)}),C=H.reducer,F=H.actions.authlogin,U=a(349),q=a(350),K=a(351),A=a(352),B=a(353),R=a(354),_=d.a.TabPane,z=p.a.Option,D=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).responseFacebook=function(e){"unknown"!==e.status&&(n.setState({data:e}),n.setState({loading:!1}),n.setState({activekey:"2"}))},n.responseFacebook1=function(e){"unknown"!==e.status&&(n.setState({data:e}),n.setState({loading:!1}),n.setState({activekey:"3"}),console.log(n.state.donvi))},n.onLogin=function(e){T.post("/login",{token:e.token}).then((function(e){!0===e.data.status&&(n.props.authlogin(),localStorage.setItem("token",e.data.data),n.props.history.push("/"))}))},n.onRegister=function(e){T.post("/register",{token:e.token,id_donvi:e.id_donvi}).then((function(e){!0===e.data.status&&(n.props.authlogin(),localStorage.setItem("token",e.data.data),n.props.history.push("/"))}))},n.state={activekey:"1",data:{},loading:!0,donvi:{}},n}return Object(s.a)(a,[{key:"componentWillMount",value:function(){!0===this.props.auth&&this.props.history.push("/")}},{key:"componentDidMount",value:function(){var e=this;T.get("/donvi-list").then((function(t){!0===t.data.status&&e.setState({donvi:t.data.data})}))}},{key:"render",value:function(){return l.a.createElement(h.a,{style:{paddingTop:"10%"}},l.a.createElement(f.a,{offset:8},l.a.createElement(d.a,{defaultActiveKey:"1",centered:!0,activeKey:this.state.activekey},l.a.createElement(_,{tab:l.a.createElement("span",null,l.a.createElement(U.a,null),"\u0110\u0102NG NH\u1eacP B\u1eb0NG FACEBOOK"),key:"1"},l.a.createElement(E.a,{direction:"vertical"},l.a.createElement(O.a,{appId:"564205580431684",autoLoad:!1,fields:"name,email,picture",callback:this.responseFacebook,render:function(e){return l.a.createElement(g.a,{type:"primary",onClick:e.onClick,block:!0},"\u0110\u0102NG NH\u1eacP B\u1eb0NG T\xc0I KHO\u1ea2N FACEBOOK")}}),l.a.createElement(O.a,{appId:"564205580431684",autoLoad:!1,fields:"name,email,picture",callback:this.responseFacebook1,render:function(e){return l.a.createElement(g.a,{type:"primary",onClick:e.onClick,block:!0},"\u0110\u0102NG K\xcd T\xc0I KHO\u1ea2N FACEBOOK")}}))),l.a.createElement(_,{tab:l.a.createElement("span",null,l.a.createElement(q.a,null),"\u0110\u0102NG NH\u1eacP H\u1ec6 TH\u1ed0NG"),key:"2"},this.state.loading?l.a.createElement("h1",null,"Loading...."):l.a.createElement(h.a,null,l.a.createElement(f.a,{span:"20",offset:"2"},l.a.createElement(b.a,{name:"normal_login",className:"login-form",initialValues:{username:this.state.data.name,token:this.state.data.accessToken,id:this.state.data.id,email:this.state.data.email,remember:!0},onFinish:this.onLogin},l.a.createElement(b.a.Item,null,l.a.createElement(k.a,{size:"large",src:this.state.data.picture.data.url})),l.a.createElement(b.a.Item,{name:"id",rules:[{required:!0,message:"Please input your Username!"}]},l.a.createElement(y.a,{prefix:l.a.createElement(K.a,{className:"site-form-item-icon"}),placeholder:"ID"})),l.a.createElement(b.a.Item,{name:"username",rules:[{required:!0,message:"Please input your Username!"}]},l.a.createElement(y.a,{prefix:l.a.createElement(A.a,{className:"site-form-item-icon"}),placeholder:"Username"})),l.a.createElement(b.a.Item,{name:"email",rules:[{required:!1,message:"Please input your Username!"}]},l.a.createElement(y.a,{prefix:l.a.createElement(B.a,{className:"site-form-item-icon"}),placeholder:"email"})),l.a.createElement(b.a.Item,{name:"token",rules:[{required:!0,message:"Please input your Password!"}]},l.a.createElement(y.a,{prefix:l.a.createElement(R.a,{className:"site-form-item-icon"}),type:"password",placeholder:"Password"})),l.a.createElement(b.a.Item,null,l.a.createElement(g.a,{type:"primary",htmlType:"submit",className:"login-form-button",loading:this.state.loading},"\u0110\u0102NG NH\u1eacP")))))),l.a.createElement(_,{tab:l.a.createElement("span",null,l.a.createElement(q.a,null),"\u0110\u0102NG K\xdd H\u1ec6 TH\u1ed0NG"),key:"3"},this.state.loading?l.a.createElement("h1",null,"Loading...."):l.a.createElement(h.a,null,l.a.createElement(f.a,{span:"20",offset:"2"},l.a.createElement(b.a,{name:"normal_login",className:"login-form",initialValues:{username:this.state.data.name,token:this.state.data.accessToken,id:this.state.data.id,email:this.state.data.email,remember:!0},onFinish:this.onRegister},l.a.createElement(b.a.Item,null,l.a.createElement(k.a,{size:"large",src:this.state.data.picture.data.url})),l.a.createElement(b.a.Item,{name:"id",rules:[{required:!0,message:"Please input your Username!"}]},l.a.createElement(y.a,{prefix:l.a.createElement(K.a,{className:"site-form-item-icon"}),placeholder:"ID"})),l.a.createElement(b.a.Item,{name:"username",rules:[{required:!0,message:"Please input your Username!"}]},l.a.createElement(y.a,{prefix:l.a.createElement(A.a,{className:"site-form-item-icon"}),placeholder:"Username"})),l.a.createElement(b.a.Item,{name:"email",rules:[{required:!1,message:"Please input your Username!"}]},l.a.createElement(y.a,{prefix:l.a.createElement(B.a,{className:"site-form-item-icon"}),placeholder:"email"})),l.a.createElement(b.a.Item,{name:"token",rules:[{required:!0,message:"Please input your Password!"}]},l.a.createElement(y.a,{prefix:l.a.createElement(R.a,{className:"site-form-item-icon"}),type:"password",placeholder:"Password"})),l.a.createElement(b.a.Item,{name:"id_donvi",label:"\u0110\u01a1n v\u1ecb",rules:[{required:!0}]},l.a.createElement(p.a,{placeholder:"L\u1ef1a ch\u1ecdn \u0111\u01a1n v\u1ecb",onChange:this.onGenderChange,allowClear:!0},this.state.donvi.map((function(e,t){return l.a.createElement(z,{value:e.id,key:e.id},e.name)})))),l.a.createElement(b.a.Item,null,l.a.createElement(g.a,{type:"primary",htmlType:"submit",className:"login-form-button",loading:this.state.loading},"\u0110\u0102NG K\xdd")))))))))}}]),a}(l.a.Component);var M={authlogin:F},W=Object(j.b)((function(e){return e.loginReducer}),M)(D),J=a(83),V=a(355),X=a(345),$=a(175),Q=a(348),Y=a(129),Z=(a(157),X.a.Title),ee={required:"Link kh\xf4ng \u0111\u01b0\u1ee3c \u0111\xea tr\u1ed1ng"};var te=function(e){var t=b.a.useForm(),a=Object(J.a)(t,1)[0],n=Object(r.useState)([]),o=Object(J.a)(n,2),i=o[0],c=o[1],s=Object(r.useState)(!1),m=Object(J.a)(s,2),u=m[0],d=m[1],p=Object(r.useState)(!1),k=Object(J.a)(p,2),v=k[0],O=k[1],j=Object(r.useState)(!0),N=Object(J.a)(j,2),I=N[0],w=N[1];return Object(r.useEffect)((function(){T.get("/top10posts",{headers:{Authorization:"Bearer ".concat(localStorage.getItem("token"))}}).then((function(e){1==e.data.status?(c(e.data.data),w(!1)):$.a.error("Truy v\u1ea5n d\u1eef li\u1ec7u kh\xf4ng th\xe0nh c\xf4ng")}))}),[v]),l.a.createElement("div",{className:"App"},l.a.createElement(Z,{strong:!0},"H\u1ec6 TH\u1ed0NG THEO D\xd5I XU H\u01af\u1edaNG M\u1ea0NG X\xc3 H\u1ed8I"),l.a.createElement(h.a,null,l.a.createElement(f.a,{offset:6,span:12},l.a.createElement(b.a,{form:a,name:"control-hooks",onFinish:function(e){d(!0),T.post("/facebook-post",{url:e.Link},{headers:{Authorization:"Bearer ".concat(localStorage.getItem("token"))}}).then((function(e){d(!1),1==e.data.status?($.a.success("Upload th\xe0nh c\xf4ng"),O(!v)):$.a.error("Upload kh\xf4ng th\xe0nh c\xf4ng")}))},validateMessages:ee},l.a.createElement(b.a.Item,{name:"Link",label:"Link",rules:[{required:!0}]},l.a.createElement(y.a,{style:{width:"100%"},prefix:l.a.createElement(V.a,{className:"site-form-item-icon"})})),l.a.createElement(h.a,{style:{display:"flex",flexDirection:"row",justifyContent:"center"}},l.a.createElement(b.a.Item,{style:{padding:"10px"}},l.a.createElement(E.a,null,l.a.createElement(g.a,{type:"primary",htmlType:"submit",onClick:function(){a.resetFields()}},"Reset link"),l.a.createElement(g.a,{type:"primary",htmlType:"submit",loading:u},"\u0110\u0103ng b\xe0i"))))))),l.a.createElement(X.a.Title,{level:2},"10 b\xe0i vi\u1ebft g\u1ea7n \u0111\xe2y"),l.a.createElement(h.a,{style:{paddingTop:"20px",width:"100%"},hidden:I},l.a.createElement(f.a,{span:12,offset:6},l.a.createElement(h.a,{gutter:[16,16]},i.map((function(e,t){return l.a.createElement(f.a,{span:8},l.a.createElement(Q.a,{type:"inner",title:e.providerName,bordered:!0,key:t},l.a.createElement(E.a,{direction:"vertical"},l.a.createElement(Y.a,null,null!=e.content?e.content:"Kh\xf4ng c\xf3 n\u1ed9i dung"),l.a.createElement(Y.a,{placement:"topLeft",title:e.url},l.a.createElement("a",{href:e.url,target:"_blank"},"Link b\xe0i vi\u1ebft")))))}))))))},ae=a(120),ne=a(29),re=(a(339),a(187)),le=function(e){var t=e.component,a=e.auth,n=Object(re.a)(e,["component","auth"]);return l.a.createElement(ne.b,Object.assign({},n,{render:function(e){return a?l.a.createElement(t,e):l.a.createElement(ne.a,{to:{pathname:"/login"}})}}))};var oe=function(){var e=Object(j.d)((function(e){return e.loginReducer})),t=e.loadingProfile,a=e.auth,n=Object(j.c)();return Object(r.useEffect)((function(){n(G(localStorage.getItem("token")))}),[]),l.a.createElement("div",{className:"App"},t?l.a.createElement("div",null,"Loading...."):l.a.createElement(ae.a,null,l.a.createElement(ne.d,null,l.a.createElement(le,{path:"/",exact:!0,component:te,auth:a}),l.a.createElement(ne.b,{path:"/login",component:function(e){return l.a.createElement(W,e)}}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var ie=a(45),ce=Object(ie.c)({loginReducer:C}),se=Object(x.a)({reducer:ce});i.a.render(l.a.createElement(j.a,{store:se},l.a.createElement(oe,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[191,1,2]]]);
//# sourceMappingURL=main.59b417de.chunk.js.map