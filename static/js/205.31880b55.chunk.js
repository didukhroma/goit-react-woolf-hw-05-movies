"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[205],{713:function(n,t,r){r.d(t,{Df:function(){return s},HI:function(){return l},M1:function(){return f},TP:function(){return o},tx:function(){return p}});var e=r(861),u=r(757),a=r.n(u),c=r(340),i=r(745);c.Z.defaults.baseURL=i._n,c.Z.defaults.headers.common={Authorization:"Bearer ".concat(i.$h)};var s=function(){var n=(0,e.Z)(a().mark((function n(){var t,r;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return"trending/all/day?language=en-US",n.next=3,c.Z.get("trending/all/day?language=en-US");case 3:return t=n.sent,r=t.data.results,n.abrupt("return",r);case 6:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),o=function(){var n=(0,e.Z)(a().mark((function n(t){var r,e;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r="movie/".concat(t),n.next=3,c.Z.get(r);case 3:return e=n.sent,n.abrupt("return",e.data);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),f=function(){var n=(0,e.Z)(a().mark((function n(t){var r,e,u;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r="movie/".concat(t,"/credits"),n.next=3,c.Z.get(r);case 3:return e=n.sent,u=e.data.cast,n.abrupt("return",u);case 6:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),p=function(){var n=(0,e.Z)(a().mark((function n(t){var r,e,u;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r="movie/".concat(t,"/reviews"),n.next=3,c.Z.get(r);case 3:return e=n.sent,u=e.data.results,n.abrupt("return",u);case 6:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),l=function(){var n=(0,e.Z)(a().mark((function n(t){var r,e,u;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r="search/movie?query=".concat(t),n.next=3,c.Z.get(r);case 3:return e=n.sent,u=e.data.results,n.abrupt("return",u);case 6:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}()},576:function(n,t,r){r.d(t,{Z:function(){return i}});var e=r(689),u=r(87),a=r(184),c=function(n){var t=n.name,r=n.id,c=(0,e.TH)();return(0,a.jsx)("li",{children:(0,a.jsx)(u.rU,{to:"/movies/".concat(r),state:{from:c},children:t})})},i=function(n){var t=n.movies;return(0,a.jsx)("ul",{children:t.map((function(n){var t=n.original_name,r=n.original_title,e=n.name,u=n.id;return(0,a.jsx)(c,{id:u,name:e||t||r},u)}))})}},571:function(n,t,r){r.d(t,{Z:function(){return u}});var e=r(184),u=function(n){var t=n.message;return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsxs)("p",{children:[t," "]}),(0,e.jsx)("p",{children:"Please try again "})]})}},205:function(n,t,r){r.r(t),r.d(t,{default:function(){return l}});var e=r(439),u=r(791),a=r(87),c=r(713),i=r(184),s=function(n){var t=n.cbOnSubmit,r=n.cbOnChange,e=n.query;return(0,i.jsxs)("form",{onSubmit:t,children:[(0,i.jsx)("label",{children:(0,i.jsx)("input",{type:"text",onChange:r,value:e})}),(0,i.jsx)("button",{type:"submit",children:"Search"})]})},o=r(576),f=r(571),p=function(){var n=(0,u.useState)(""),t=(0,e.Z)(n,2),r=t[0],p=t[1],l=(0,a.lr)(),h=(0,e.Z)(l,2),v=h[0],m=h[1],d=(0,u.useState)([]),g=(0,e.Z)(d,2),x=g[0],j=g[1],Z=(0,u.useState)(""),b=(0,e.Z)(Z,2),y=b[0],w=b[1],I=v.get("query");return(0,u.useEffect)((function(){I&&(0,c.HI)(I).then(j).catch((function(n){var t=n.message;return w(t)}))}),[I]),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(s,{cbOnSubmit:function(n){n.preventDefault(),m({query:r}),p("")},cbOnChange:function(n){return p(n.target.value)},query:r}),(0,i.jsx)(o.Z,{movies:x}),y&&(0,i.jsx)(f.Z,{message:y})]})},l=function(){return(0,i.jsx)(p,{})}},745:function(n,t,r){r.d(t,{$h:function(){return a},YS:function(){return c},_n:function(){return e},bV:function(){return u}});var e="https://api.themoviedb.org/3/",u="https://image.tmdb.org/t/p/w500/",a="eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0NjQ2ZTNhNzJjMjgwYmIzMTczNTM4NTcyYjdiYjU5OCIsInN1YiI6IjY2MmJjYjIwZTE2ZTVhMDExZmU3ODA0MiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.yEgrzEuHHJ9xDHQjTsKaVBpQWM0XvavTiluvcoz50Ns",c="https://glavcom.ua/img/article/9139/95_main-v1678685008.jpg"}}]);
//# sourceMappingURL=205.31880b55.chunk.js.map