"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[866],{713:function(e,n,r){r.d(n,{Df:function(){return u},M1:function(){return l},TP:function(){return o},tx:function(){return h}});var t=r(861),a=r(757),c=r.n(a),s=r(340),i=r(745);s.Z.defaults.baseURL=i._n,s.Z.defaults.headers.common={Authorization:"Bearer ".concat(i.$h)};var u=function(){var e=(0,t.Z)(c().mark((function e(){var n,r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"trending/all/day?language=en-US",e.next=3,s.Z.get("trending/all/day?language=en-US");case 3:return n=e.sent,r=n.data.results,e.abrupt("return",r);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),o=function(){var e=(0,t.Z)(c().mark((function e(n){var r,t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r="movie/".concat(n),e.next=3,s.Z.get(r);case 3:return t=e.sent,e.abrupt("return",t.data);case 5:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),l=function(){var e=(0,t.Z)(c().mark((function e(n){var r,t,a;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r="movie/".concat(n,"/credits"),e.next=3,s.Z.get(r);case 3:return t=e.sent,a=t.data.cast,e.abrupt("return",a);case 6:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),h=function(){var e=(0,t.Z)(c().mark((function e(n){var r,t,a;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r="movie/".concat(n,"/reviews"),e.next=3,s.Z.get(r);case 3:return t=e.sent,a=t.data.results,e.abrupt("return",a);case 6:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}()},571:function(e,n,r){r.d(n,{Z:function(){return a}});var t=r(184),a=function(e){var n=e.message;return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)("p",{children:[n," "]}),(0,t.jsx)("p",{children:"Please try again "})]})}},866:function(e,n,r){r.r(n),r.d(n,{default:function(){return m}});var t=r(439),a=r(791),c=r(689),s=r(713),i=r(745),u="MovieInfo_wrapper__TIELc",o="MovieInfo_genreText__lzvTF",l="MovieInfo_poster__haZsf",h=r(184),d=function(e){var n=e.movieData;return(0,h.jsx)("section",{children:n&&(0,h.jsxs)("div",{className:u,children:[(0,h.jsx)("div",{className:l,children:(0,h.jsx)("img",{src:n.poster_path?"".concat(i.bV).concat(n.poster_path):i.YS,alt:"poster"})}),(0,h.jsxs)("div",{children:[(0,h.jsx)("h2",{children:n.title}),(0,h.jsx)("p",{children:"User Score: ".concat((10*n.vote_average).toFixed(0),"%")}),!!n.overview.length&&(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)("h3",{children:"Overview"}),(0,h.jsx)("p",{children:n.overview})]}),!!n.genres.length&&(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)("h3",{children:"Genres"}),(0,h.jsx)("p",{children:n.genres.map((function(e){var n=e.name,r=e.id;return(0,h.jsx)("span",{className:o,children:n},"".concat(r,"-").concat(n))}))})]})]})]})})},f=r(571),v=r(87),p=function(){var e=(0,c.UO)().movieId;return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)("h3",{children:"Additional information"}),(0,h.jsxs)("ul",{children:[(0,h.jsx)("li",{children:(0,h.jsx)(v.rU,{to:"/movies/".concat(e,"/cast"),children:"Cast"})}),(0,h.jsx)("li",{children:(0,h.jsx)(v.rU,{to:"/movies/".concat(e,"/reviews"),children:"Reviews"})})]})]})},x=r(290),j=function(){var e=(0,c.UO)().movieId,n=(0,a.useState)(),r=(0,t.Z)(n,2),i=r[0],u=r[1],o=(0,a.useState)(""),l=(0,t.Z)(o,2),v=l[0],j=l[1];return(0,a.useEffect)((function(){e&&(0,s.TP)(e).then(u).catch((function(e){var n=e.message;return j(n)}))}),[e]),(0,h.jsx)(h.Fragment,{children:v?(0,h.jsx)(f.Z,{message:v}):(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(d,{movieData:i}),(0,h.jsx)(p,{}),(0,h.jsx)(a.Suspense,{fallback:(0,h.jsx)(x.Z,{}),children:(0,h.jsx)(c.j3,{})})]})})},m=function(){return(0,h.jsx)(j,{})}},745:function(e,n,r){r.d(n,{$h:function(){return c},YS:function(){return s},_n:function(){return t},bV:function(){return a}});var t="https://api.themoviedb.org/3/",a="https://image.tmdb.org/t/p/w500/",c="eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0NjQ2ZTNhNzJjMjgwYmIzMTczNTM4NTcyYjdiYjU5OCIsInN1YiI6IjY2MmJjYjIwZTE2ZTVhMDExZmU3ODA0MiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.yEgrzEuHHJ9xDHQjTsKaVBpQWM0XvavTiluvcoz50Ns",s="https://glavcom.ua/img/article/9139/95_main-v1678685008.jpg"}}]);
//# sourceMappingURL=866.aa92f60f.chunk.js.map