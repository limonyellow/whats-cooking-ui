(this.webpackJsonpwhats_cooking=this.webpackJsonpwhats_cooking||[]).push([[0],{16:function(e,a,t){e.exports=t(45)},21:function(e,a,t){},22:function(e,a,t){},23:function(e,a,t){},25:function(e,a,t){},43:function(e,a,t){},44:function(e,a,t){e.exports=t.p+"static/media/Montserrat-Regular.ee653992.ttf"},45:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(13),s=t.n(c);t(21),t(22),t(23);var l=function(){return r.a.createElement("div",{className:"navbar-header"},r.a.createElement("a",{className:"navbar-title",href:"/"},"Whats Cooking?"),r.a.createElement("ul",{className:"navbar-menu"},r.a.createElement("li",{className:"navbar-menu-item"},r.a.createElement("a",{href:"search"},"Search")),r.a.createElement("li",{className:"navbar-menu-item"},r.a.createElement("a",{href:"db"},"Data Base"))))},o=t(2),m=t.n(o),i=t(14),u=t(3),d=(t(25),t(15)),h=t.n(d);t(43);var v=function(e){return r.a.createElement("div",{className:"search-result"},r.a.createElement("div",{className:"search-result-top"},r.a.createElement("div",{className:"score"},"Score: ",e.data.score),r.a.createElement("div",{className:"items-num"},"Items found: ",e.data.num_of_items),r.a.createElement("div",{className:"appearances"},"Hits: ",e.data.total_items_appearances)),r.a.createElement("div",{className:"search-result-main"},r.a.createElement("div",null,r.a.createElement("img",{className:"search-result-img",src:e.data.image_url})),r.a.createElement("div",null,r.a.createElement("a",{className:"search-result-link",href:e.data.url,target:"_blank"},r.a.createElement("div",{className:"search-result-title"},e.data.title),r.a.createElement("div",{className:"search-result-link"},e.data.url)))))};var p=function(){var e=Object(n.useState)(""),a=Object(u.a)(e,2),t=a[0],c=a[1],s=Object(n.useState)([]),l=Object(u.a)(s,2),o=l[0],d=l[1],p=function(){var e=Object(i.a)(m.a.mark((function e(a){var n;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a.preventDefault(),console.log(t),n="",e.prev=3,e.next=6,h.a.get("/search",{params:{q:t,sourceid:1}});case 6:n=e.sent,e.next=12;break;case 9:e.prev=9,e.t0=e.catch(3),console.error(e.t0);case 12:console.log("response:",n),console.log("response.data:",n.data),n.data.map((function(e){return console.log(e.title)})),d(n.data);case 16:case"end":return e.stop()}}),e,null,[[3,9]])})));return function(a){return e.apply(this,arguments)}}();return r.a.createElement("div",{className:"search-main"},r.a.createElement("div",{className:"search-menu"}),r.a.createElement("div",{className:"search-title"},"What do you have?"),r.a.createElement("div",{className:"search-box"},r.a.createElement("form",{onSubmit:p},r.a.createElement("input",{type:"text",className:"search-bar",placeholder:"Search...",onChange:function(e){c(e.target.value)}}))),r.a.createElement("div",{className:"search-results"},o.map((function(e){return r.a.createElement(v,{data:e})}))))};var E=function(){return r.a.createElement("div",{className:"App"},r.a.createElement("nav",{className:"App-navbar"},l()),r.a.createElement("body",{className:"App-main"},p()),r.a.createElement("footer",{className:"App-fotter"},r.a.createElement("label",null,"Powered by KARNAF ","\xa9")))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));t(44);s.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(E,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[16,1,2]]]);
//# sourceMappingURL=main.1c33f74d.chunk.js.map