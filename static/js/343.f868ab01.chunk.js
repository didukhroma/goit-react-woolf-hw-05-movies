"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[343],{713:function(e,n,r){r.d(n,{D:function(){return u},T:function(){return o}});var t=r(861),a=r(757),c=r.n(a),i=r(340),s=r(745);i.Z.defaults.baseURL=s._n,i.Z.defaults.headers.common={Authorization:"Bearer ".concat(s.$h)};var u=function(){var e=(0,t.Z)(c().mark((function e(){var n,r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"trending/all/day?language=en-US",e.next=3,i.Z.get("trending/all/day?language=en-US");case 3:return n=e.sent,r=n.data.results,e.abrupt("return",r);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),o=function(){var e=(0,t.Z)(c().mark((function e(n){var r,t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r="movie/".concat(n),e.next=3,i.Z.get(r);case 3:return t=e.sent,e.abrupt("return",t.data);case 5:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}()},343:function(e,n,r){r.r(n),r.d(n,{default:function(){return j}});var t=r(861),a=r(439),c=r(757),i=r.n(c),s=r(791),u=r(689),o=r(713),f=r(745),h="MovieInfo_wrapper__TIELc",p="MovieInfo_genreText__lzvTF",l="MovieInfo_poster__haZsf",v=r(184),d=function(e){var n=e.movieData;return(0,v.jsx)("section",{children:n&&(0,v.jsxs)("div",{className:h,children:[(0,v.jsx)("div",{className:l,children:(0,v.jsx)("img",{src:n.poster_path?"".concat(f.bV).concat(n.poster_path):f.YS,alt:"poster"})}),(0,v.jsxs)("div",{children:[(0,v.jsx)("h2",{children:n.title}),(0,v.jsx)("p",{children:"User Score: ".concat((10*n.vote_average).toFixed(0),"%")}),(0,v.jsx)("h3",{children:"Overview"}),(0,v.jsx)("p",{children:n.overview}),(0,v.jsx)("h3",{children:"Genres"}),(0,v.jsx)("p",{children:n.genres.map((function(e){var n=e.name,r=e.id;return(0,v.jsx)("span",{className:p,children:n},"".concat(r,"-").concat(n))}))})]})]})})},m=function(){var e=(0,u.UO)().movieId,n=(0,s.useState)(),r=(0,a.Z)(n,2),c=r[0],f=r[1];return(0,s.useEffect)((function(){if(e){var n=function(){var e=(0,t.Z)(i().mark((function e(n){var r;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,o.T)(n);case 2:r=e.sent,f(r);case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}();n(e)}}),[e]),(0,v.jsx)(v.Fragment,{children:(0,v.jsx)(d,{movieData:c})})},j=function(){return(0,v.jsx)(m,{})}},745:function(e,n,r){r.d(n,{$h:function(){return c},YS:function(){return i},_n:function(){return t},bV:function(){return a}});var t="https://api.themoviedb.org/3/",a="https://image.tmdb.org/t/p/w500/",c="eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0NjQ2ZTNhNzJjMjgwYmIzMTczNTM4NTcyYjdiYjU5OCIsInN1YiI6IjY2MmJjYjIwZTE2ZTVhMDExZmU3ODA0MiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.yEgrzEuHHJ9xDHQjTsKaVBpQWM0XvavTiluvcoz50Ns",i="https://glavcom.ua/img/article/9139/95_main-v1678685008.jpg"}}]);
//# sourceMappingURL=343.f868ab01.chunk.js.map