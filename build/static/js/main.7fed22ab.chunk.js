(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{126:function(e,t,c){},127:function(e,t,c){},128:function(e,t,c){},129:function(e,t,c){},151:function(e,t,c){"use strict";c.r(t);var s=c(1),a=c.n(s),n=c(17),i=c.n(n),j=(c(126),c(127),c(128),c(129),c(100)),l=c(101),r=c(76),b=c(113),o=c(111),d=c(26),O=c(33),h=c(218),u=c(208),x=c(105),m=c.n(x),p=c.p+"static/media/bek1.67cbe2d2.jpg",f=c.p+"static/media/nurbekRasulov.a17d815b.pdf",N=c(102),v=c(4),g=function(e){Object(b.a)(c,e);var t=Object(o.a)(c);function c(e){var s;return Object(j.a)(this,c),(s=t.call(this,e)).toggle=s.toggle.bind(Object(r.a)(s)),s.state={isOpen:!1},s}return Object(l.a)(c,[{key:"toggle",value:function(){this.setState({isOpen:!this.state.isOpen})}},{key:"render",value:function(){return Object(v.jsx)(v.Fragment,{children:Object(v.jsxs)(d.f,{expand:"md",children:[Object(v.jsx)(O.b,{to:"/",className:"navbar-brand",children:Object(v.jsxs)("b",{className:"anim","data-text":"\ud835\udc79\ud835\udc82\ud835\udc94\ud835\udc96\ud835\udc8d\ud835\udc90\ud835\udc97.\ud835\udc75",children:["\ud835\udc79\ud835\udc82\ud835\udc94\ud835\udc96\ud835\udc8d\ud835\udc90\ud835\udc97.",Object(v.jsx)("b",{className:"N",children:"\ud835\udc75"})]})}),Object(v.jsx)(d.g,{onClick:this.toggle}),Object(v.jsx)(d.b,{isOpen:this.state.isOpen,navbar:!0,children:Object(v.jsxs)(d.d,{navbar:!0,children:[Object(v.jsx)(d.e,{children:Object(v.jsx)(O.b,{to:"/",children:"\ud835\udc6f\ud835\udc90\ud835\udc8e\ud835\udc86"})}),Object(v.jsx)(d.e,{children:Object(v.jsx)(O.b,{to:"/portfolio",children:"\ud835\udc77\ud835\udc90\ud835\udc93\ud835\udc95\ud835\udc87\ud835\udc90\ud835\udc8d\ud835\udc8a\ud835\udc90"})}),Object(v.jsx)(d.e,{children:Object(v.jsx)(O.b,{to:"/setup",children:"\ud835\udc7a\ud835\udc86\ud835\udc95\ud835\udc96\ud835\udc91"})}),Object(v.jsx)(d.e,{children:Object(v.jsx)(O.b,{to:"/about",children:"\ud835\udc68\ud835\udc83\ud835\udc90\ud835\udc96\ud835\udc95 \ud835\udc74\ud835\udc86"})}),Object(v.jsx)(d.e,{children:Object(v.jsx)(O.b,{to:"/contact",children:"\ud835\udc6a\ud835\udc90\ud835\udc8f\ud835\udc95\ud835\udc82\ud835\udc84\ud835\udc95"})}),Object(v.jsx)(d.e,{children:Object(v.jsxs)("a",{href:f,download:"nurbekRasulov.pdf",children:[Object(v.jsx)(N.a,{textColor:"yellow"}),Object(v.jsx)(m.a,{className:"resumeColor","data-tip":"Resume"})]})}),Object(v.jsx)(u.a,{direction:"row",spacing:2,children:Object(v.jsx)(h.a,{alt:"Remy Sharp",src:p})})]})})]})})}}]),c}(a.a.Component),k=c(29),S=c.n(k),y=c(24),w=c(23),I=c(110).a.initializeApp({apiKey:"AIzaSyAhWzJP_ftSy5NRdckTPcnce5BDxnIX25w",authDomain:"rasulov-portfolio.firebaseapp.com",projectId:"rasulov-portfolio",storageBucket:"rasulov-portfolio.appspot.com",messagingSenderId:"117456587012",appId:"1:117456587012:web:93162501a876168413a851",measurementId:"G-42TXR1HVE0"}).firestore(),_=c(80),M=c.n(_),D=c(60),F=c.n(D),C=c(84),R=c.n(C),A=c(83),B=c.n(A),E=c(112),G=function(){var e=Object(s.useState)([]),t=Object(w.a)(e,2),c=t[0],a=t[1];return Object(s.useEffect)((function(){I.collection("portfolio").onSnapshot((function(e){return a(e.docs.map((function(e){return e.data()})))}))}),[]),Object(v.jsx)("div",{className:"aboutinfo",children:c.map((function(e){return Object(v.jsxs)(v.Fragment,{children:[Object(v.jsx)("div",{className:"side2",children:Object(v.jsx)("div",{className:"profile-picture",children:Object(v.jsx)("div",{className:"profile-picture-backgroud"})})}),Object(v.jsxs)("div",{className:"side1",children:[Object(v.jsxs)(S.a,{effect:"fadeInUp",duration:"1250",children:[Object(v.jsx)("h1",{className:"title",children:e.title}),Object(v.jsx)("p",{className:"description",children:e.description})]}),Object(v.jsx)("div",{className:"typetext",children:Object(v.jsxs)("span",{className:"primary-text",children:[" ",Object(v.jsxs)("h1",{children:[" ",Object(v.jsx)(E.a,{loop:1/0,steps:["Ethusiastic Dev \ud83d\ude0e",1e3,"Javascript Dev \ud83d\udda5",1e3,"Creative Desinger",1e3,"Full Stack Developer \ud83d\udcbb",1e3,"React/React Dev \ud83c\udf10",1e3]})]})]})}),Object(v.jsxs)("div",{className:"buttons",children:[Object(v.jsx)(O.b,{className:"linkBtn",to:"/about",children:"About Me"}),Object(v.jsx)(O.b,{className:"linkBtn",to:"/portfolio",children:"Portfolio"})]}),Object(v.jsxs)("div",{className:"socialNet",children:[Object(v.jsx)("a",{className:"links",href:"https://www.facebook.com/nurbek.rasulov.370",target:"_blank",children:Object(v.jsx)(M.a,Object(y.a)({className:"youtube"},"className","iconSvg"))}),Object(v.jsx)("a",{className:"links",href:"https://github.com/RasulovN",target:"_blank",children:Object(v.jsx)(F.a,{className:"iconSvg"})}),Object(v.jsx)("a",{className:"links",href:"https://instagram.com/rasulov_n71?utm_medium=copy_link",target:"_blank",children:Object(v.jsx)(B.a,{className:"iconSvg"})}),Object(v.jsx)("a",{className:"links",target:"_blank",href:"https://t.me//rasulov_n7",children:Object(v.jsx)(R.a,{className:"iconSvg"})})]})]})]})}))})},T=function(){return Object(v.jsxs)(v.Fragment,{children:[Object(v.jsx)(S.a,{effect:"animNav",duration:"750",children:Object(v.jsx)(g,{})}),Object(v.jsx)(G,{})]})},z=c(107),U=c.n(z),H=function(){var e=Object(s.useState)([]),t=Object(w.a)(e,2),c=t[0],a=t[1];return Object(s.useEffect)((function(){I.collection("project").onSnapshot((function(e){return a(e.docs.map((function(e){return e.data()})))}))}),[]),Object(v.jsx)(v.Fragment,{children:Object(v.jsx)(d.c,{children:Object(v.jsx)(d.h,{children:c.map((function(e,t){return Object(v.jsx)(d.a,{md:"12",children:Object(v.jsxs)("div",{className:"projectCard",children:[Object(v.jsx)("img",{className:"projectImage",src:e.image,alt:"portfolio image"}),Object(v.jsxs)("div",{className:"projectTitles",children:[Object(v.jsxs)("div",{className:"projectAbout",children:[Object(v.jsx)("h3",{className:"projectName",children:e.projectName}),Object(v.jsx)("p",{className:"projectDesc",children:e.projectDesc})]}),Object(v.jsxs)("dic",{className:"projectButtons",children:[Object(v.jsxs)("a",{href:e.code,target:"_blank",className:"buttons",children:["Source ",Object(v.jsx)(F.a,{})]}),Object(v.jsxs)("a",{href:e.demo,target:"_blank",className:"buttons",children:["Demo ",Object(v.jsx)(U.a,{})]})]})]})]})},t)}))})})})},J=function(){return Object(v.jsx)(v.Fragment,{children:Object(v.jsxs)("div",{className:"titles",children:[Object(v.jsx)("h3",{className:"title1",children:"Portfolio"}),Object(v.jsx)("p",{className:"title2",children:"Check my portfolios"})]})})},P=c(108),V=c.n(P),X=function(){return Object(v.jsx)("div",{className:"footer",children:Object(v.jsxs)("p",{children:["\xa9\ufe0f Rasulov 2021 - ",(new Date).getFullYear()," | Made with"," ",Object(v.jsx)(V.a,{})]})})},K=function(){return Object(v.jsxs)(v.Fragment,{children:[Object(v.jsx)(S.a,{effect:"animNav",duration:"750",children:Object(v.jsx)(g,{})}),Object(v.jsx)(S.a,{effect:"fadeInUp",duration:"1250",children:Object(v.jsx)(J,{})}),Object(v.jsx)(S.a,{effect:"portfolioAnim",duration:"1700",children:Object(v.jsx)(H,{})}),Object(v.jsx)(X,{})]})},Y=c(22),L=function(){return Object(v.jsx)(v.Fragment,{children:Object(v.jsxs)("div",{className:"titles",children:[Object(v.jsx)("h3",{className:"title1",children:"Setup"}),Object(v.jsx)("p",{className:"title2",children:"My minimalistic setup"})]})})},W=c(94),q=c.n(W),Q=function(){var e=Object(s.useState)([]),t=Object(w.a)(e,2),c=t[0],a=t[1];return Object(s.useEffect)((function(){I.collection("setup").onSnapshot((function(e){return a(e.docs.map((function(e){return e.data()})))}))}),[]),Object(v.jsxs)("div",{className:"setupMain",children:[c.map((function(e){return Object(v.jsx)("div",{className:"setupImage",children:Object(v.jsx)("img",{src:e.image,alt:"Setup image",width:"50%"})})})),Object(v.jsx)(d.c,{children:Object(v.jsx)(d.h,{children:Object(v.jsx)(d.a,{md:"8",children:Object(v.jsxs)("div",{className:"mySetup",children:[Object(v.jsx)("span",{className:"laptopSpecs",children:Object(v.jsxs)("ul",{children:[Object(v.jsxs)("a",{href:"https://www.intel.com/content/www/us/en/products/sku/91157/intel-core-i36006u-processor-3m-cache-2-00-ghz/specifications.html",target:"_blank",children:[Object(v.jsx)("h2",{children:"Lenova ideapad 310"})," ",Object(v.jsx)(q.a,{})]}),Object(v.jsx)("li",{children:"Intel Core i3-6006"}),Object(v.jsx)("li",{children:"4GB RAM"}),Object(v.jsx)("li",{children:"HHD 1TB"}),Object(v.jsx)("li",{children:"Display FHD 15.6"}),Object(v.jsx)("li",{children:"NVIDIA\xae\ufe0f GeFORCE 920M 2GB"})]})}),Object(v.jsx)("span",{className:"laptopSpecs",children:Object(v.jsxs)("ul",{children:[Object(v.jsxs)("a",{href:"https://ark.intel.com/content/www/us/en/ark/products/126687/intel-core-i58400-processor-9m-cache-up-to-4-00-ghz.html",target:"_blank",children:[Object(v.jsx)("h2",{children:"ASUS X502S"})," ",Object(v.jsx)(q.a,{})]}),Object(v.jsx)("li",{children:"Intel Core i5-8400"}),Object(v.jsx)("li",{children:"16GB RAM"}),Object(v.jsx)("li",{children:"SSD 120GB"}),Object(v.jsx)("li",{children:"Display FHD 22.6"}),Object(v.jsx)("li",{children:"NVIDIA\xae\ufe0f GeFORCE 520M 2GB"})]})}),Object(v.jsx)("span",{className:"keyboardSpecs",children:Object(v.jsxs)("ul",{children:[Object(v.jsx)("h2",{children:"Keyboard & Mouse"}),Object(v.jsx)("li",{children:"Rapoo multi-wireless keyboard, mouse"}),Object(v.jsx)("li",{children:"AVTECH"})]})})]})})})})]})},Z=function(){return Object(v.jsxs)(v.Fragment,{children:[Object(v.jsx)(S.a,{effect:"animNav",dyration:"750",children:Object(v.jsx)(g,{})}),Object(v.jsx)(S.a,{effect:"fadeUp",duration:"1250",children:Object(v.jsx)(L,{})}),Object(v.jsx)(Q,{}),Object(v.jsx)(X,{})]})},$=function(){return Object(v.jsx)(v.Fragment,{children:Object(v.jsxs)("div",{className:"titles",children:[Object(v.jsx)("h3",{className:"title1",children:"About Me"}),Object(v.jsx)("p",{className:"title2",children:"A lot information about me, ..."})]})})},ee=function(){var e=Object(s.useState)([]),t=Object(w.a)(e,2),c=t[0],a=t[1];return Object(s.useEffect)((function(){I.collection("about").onSnapshot((function(e){return a(e.docs.map((function(e){return e.data()})))}))}),[]),Object(v.jsx)("div",{className:"aboutMain",children:c.map((function(e){return Object(v.jsxs)("div",{className:"container",children:[Object(v.jsx)("img",{src:e.myImage,alt:"My Image",className:"myImage"}),Object(v.jsx)("span",{children:Object(v.jsxs)("p",{className:"aboutmeText",children:[e.text1,Object(v.jsxs)("div",{children:[Object(v.jsx)("b",{children:e.text2})," "]}),e.text3]})})]})}))})},te=function(){return Object(v.jsxs)(v.Fragment,{children:[Object(v.jsx)(S.a,{effect:"animNav",duration:"750",children:Object(v.jsx)(g,{})}),Object(v.jsx)(S.a,{effect:"fadeInUp",duration:"1250",children:Object(v.jsx)($,{})}),Object(v.jsx)(ee,{}),Object(v.jsx)(X,{})]})},ce=function(){return Object(v.jsx)(v.Fragment,{children:Object(v.jsxs)("div",{className:"titles",children:[Object(v.jsx)("h3",{className:"title1",children:"Contact Me"}),Object(v.jsx)("p",{className:"title2",children:"My Number"})]})})},se=c(216),ae=c(219),ne=(c.p,c(109)),ie=c.n(ne),je=c(215),le=c(213),re=c(212),be=c(214),oe=function(){var e,t=Object(s.useState)(""),c=Object(w.a)(t,2),a=c[0],n=c[1],i=Object(s.useState)(""),j=Object(w.a)(i,2),l=j[0],r=j[1],b=Object(s.useState)(""),o=Object(w.a)(b,2),d=o[0],O=o[1],h=Object(s.useState)(!1),u=Object(w.a)(h,2),x=u[0],m=u[1];Object(re.a)((function(e){return{root:{"& > *":{margin:e.spacing(1),width:"25ch"}}}}));return Object(v.jsxs)("div",{className:"contactMain",children:[Object(v.jsxs)(se.a,{className:"card container",children:[Object(v.jsx)("div",{className:"images"}),Object(v.jsxs)("div",{className:"col",children:[Object(v.jsx)(ae.a,{component:"div",variant:"h4",children:"Get In Touch"}),Object(v.jsxs)("div",{className:"socialNet",children:[Object(v.jsx)("a",{className:"links",href:"https://www.facebook.com/nurbek.rasulov.370",target:"_blank",children:Object(v.jsx)(M.a,Object(y.a)({className:"youtube"},"className","iconSvg"))}),Object(v.jsx)("a",{className:"links",href:"https://github.com/RasulovN",target:"_blank",children:Object(v.jsx)(F.a,{className:"iconSvg"})}),Object(v.jsx)("a",{className:"links",href:"https://instagram.com/rasulov_n71?utm_medium=copy_link",target:"_blank",children:Object(v.jsx)(B.a,{className:"iconSvg"})}),Object(v.jsx)("a",{className:"links",target:"_blank",href:"https://t.me//rasulov_n7",children:Object(v.jsx)(R.a,{className:"iconSvg"})}),Object(v.jsx)("a",{className:"links",target:"_blank",href:"https://t.me//rasulov_n7",children:Object(v.jsx)(ie.a,{className:"iconSvg"})})]}),Object(v.jsxs)(ae.a,{className:"adressText",variant:"subtitle1",color:"text.secondary",component:"div",children:[Object(v.jsxs)("p",{children:[Object(v.jsx)("b",{children:"My email:"})," rasulovnurbek71@gmail.com"]}),Object(v.jsxs)("p",{children:[Object(v.jsx)("b",{children:"My Numeber:"})," +998 33 959 59 31"]}),Object(v.jsxs)("p",{children:[Object(v.jsx)("b",{children:"My email:"})," +998 33 959 59 31"]}),Object(v.jsxs)("p",{children:[Object(v.jsx)("b",{children:"My email:"})," +998 33 959 59 31"]})]})]})]}),Object(v.jsx)("div",{className:"card2 container",children:Object(v.jsx)("div",{className:"row",children:Object(v.jsxs)("form",{className:"form container",onSubmit:function(e){e.preventDefault(),m(!0),I.collection("contacts").add({name:a,email:l,message:d}).then((function(){m(!1),alert("Your message has been submitted / Sizning xabaringiz yuborildi\ud83d\udc4d")})).catch((function(e){alert(e.message),m(!1)})),n(""),r(""),O("")},children:[Object(v.jsx)("h1",{children:"Contact Us \ud83e\udd33"}),Object(v.jsx)("label",{className:"labels",children:"Name"}),Object(v.jsx)(be.a,{className:"inps",id:"mui-theme-provider-outlined-input",label:"Name",variant:"outlined",value:a,onChange:function(e){return n(e.target.value)}}),Object(v.jsx)("label",{className:"labels",children:"Email"}),Object(v.jsx)(be.a,(e={className:"inps",value:"email",id:"mui-theme-provider-outlined-input",label:"Name",variant:"outlined"},Object(y.a)(e,"value",l),Object(y.a)(e,"onChange",(function(e){return r(e.target.value)})),e)),Object(v.jsx)("label",{className:"labels",children:"Message"}),Object(v.jsx)("textarea",{variant:"outlined",id:"custom-css-outlined-input",className:"inps",placeholder:"Message",value:d,onChange:function(e){return O(e.target.value)},children:" "}),Object(v.jsx)("div",{className:"col",children:Object(v.jsxs)(je.a,{variant:"contained",type:"submit",style:{background:x?"#ccc":" rgb(2, 2, 110)"},className:"buttons",endIcon:Object(v.jsx)(le.a,{children:"send"}),children:[" ","Send"]})})]})})})]})},de=function(){return Object(v.jsxs)(v.Fragment,{children:[Object(v.jsx)(S.a,{effect:"animNav",duration:"750",children:Object(v.jsx)(g,{})}),Object(v.jsx)(S.a,{effect:"fadeInUp",duration:"1250",children:Object(v.jsx)(ce,{})}),Object(v.jsx)(oe,{}),Object(v.jsx)(X,{})]})};var Oe=function(){return Object(v.jsx)(O.a,{children:Object(v.jsxs)(Y.c,{children:[Object(v.jsx)(Y.a,{path:"/",exact:!0,component:T}),Object(v.jsx)(Y.a,{path:"/portfolio",component:K}),Object(v.jsx)(Y.a,{path:"/setup",component:Z}),Object(v.jsx)(Y.a,{path:"/about",component:te}),Object(v.jsx)(Y.a,{path:"/contact",component:de})]})})};c(149);i.a.render(Object(v.jsx)(a.a.StrictMode,{children:Object(v.jsx)(O.a,{children:Object(v.jsx)(Oe,{})})}),document.getElementById("root"))}},[[151,1,2]]]);
//# sourceMappingURL=main.7fed22ab.chunk.js.map