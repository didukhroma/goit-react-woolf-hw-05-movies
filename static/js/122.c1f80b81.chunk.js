"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[122],{713:function(n,t,e){e.d(t,{Df:function(){return s},M1:function(){return f},TP:function(){return o},tx:function(){return h}});var r=e(861),a=e(757),u=e.n(a),c=e(340),i=e(745);c.Z.defaults.baseURL=i._n,c.Z.defaults.headers.common={Authorization:"Bearer ".concat(i.$h)};var s=function(){var n=(0,r.Z)(u().mark((function n(){var t,e;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return"trending/all/day?language=en-US",n.next=3,c.Z.get("trending/all/day?language=en-US");case 3:return t=n.sent,e=t.data.results,n.abrupt("return",e);case 6:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),o=function(){var n=(0,r.Z)(u().mark((function n(t){var e,r;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e="movie/".concat(t),n.next=3,c.Z.get(e);case 3:return r=n.sent,n.abrupt("return",r.data);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),f=function(){var n=(0,r.Z)(u().mark((function n(t){var e,r,a;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e="movie/".concat(t,"/credits"),n.next=3,c.Z.get(e);case 3:return r=n.sent,a=r.data.cast,n.abrupt("return",a);case 6:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),h=function(){var n=(0,r.Z)(u().mark((function n(t){var e,r,a;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e="movie/".concat(t,"/reviews"),n.next=3,c.Z.get(e);case 3:return r=n.sent,a=r.data.results,n.abrupt("return",a);case 6:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}()},571:function(n,t,e){e.d(t,{Z:function(){return a}});var r=e(184),a=function(n){var t=n.message;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)("p",{children:[t," "]}),(0,r.jsx)("p",{children:"Please try again "})]})}},122:function(n,t,e){e.r(t),e.d(t,{default:function(){return o}});var r=e(439),a=e(791),u=e(689),c=e(713),i=e(571),s=e(184),o=function(){var n=(0,u.UO)().movieId,t=(0,a.useState)([]),e=(0,r.Z)(t,2),o=e[0],f=e[1],h=(0,a.useState)(""),p=(0,r.Z)(h,2),d=p[0],l=p[1];return(0,a.useEffect)((function(){n&&(0,c.tx)(n).then(f).catch((function(n){var t=n.message;return l(t)}))}),[n]),(0,s.jsxs)(s.Fragment,{children:[!o.length&&(0,s.jsx)("p",{children:" We don't have any reviews for this movie."}),o.map((function(n){var t=n.id,e=n.author,r=n.content;return(0,s.jsxs)("li",{children:[(0,s.jsx)("h4",{children:"Author: ".concat(e)}),(0,s.jsx)("p",{children:r})]},t)})),d&&(0,s.jsx)(i.Z,{message:d})]})}},745:function(n,t,e){e.d(t,{$h:function(){return u},YS:function(){return c},_n:function(){return r},bV:function(){return a}});var r="https://api.themoviedb.org/3/",a="https://image.tmdb.org/t/p/w500/",u="eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0NjQ2ZTNhNzJjMjgwYmIzMTczNTM4NTcyYjdiYjU5OCIsInN1YiI6IjY2MmJjYjIwZTE2ZTVhMDExZmU3ODA0MiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.yEgrzEuHHJ9xDHQjTsKaVBpQWM0XvavTiluvcoz50Ns",c="https://glavcom.ua/img/article/9139/95_main-v1678685008.jpg"}}]);
//# sourceMappingURL=122.c1f80b81.chunk.js.map