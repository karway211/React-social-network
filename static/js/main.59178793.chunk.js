(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{104:function(e,t,n){e.exports=n.p+"static/media/photo.6db09181.png"},125:function(e,t,n){"use strict";n.d(t,"b",(function(){return u}));var r=n(37),a=n(9),A={dialogs:[{id:1,name:"Andrey"},{id:2,name:"Dima"},{id:3,name:"Sveta"},{id:4,name:"Valera"},{id:5,name:"Victor"},{id:6,name:"Sasha"}],messages:[{id:1,message:"Hi"},{id:2,message:"How are you"},{id:3,message:"Yo"},{id:4,message:"Yo"},{id:5,message:"Yo"},{id:6,message:"Yo"}]},u=function(e){return{type:"SEND-MESSAGE",newMessageBody:e}};t.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:A,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SEND-MESSAGE":var n=t.newMessageBody;return Object(a.a)({},e,{messages:[].concat(Object(r.a)(e.messages),[{id:7,message:n}])});default:return e}}},133:function(e,t,n){e.exports={usersPhoto:"Users_usersPhoto__1j7BB",cursorPointer:"Users_cursorPointer__1LPW4"}},134:function(e,t,n){e.exports=n.p+"static/media/Spin.1336a69b.svg"},135:function(e,t,n){e.exports={preloader:"Preloader_preloader__1yHYn"}},138:function(e,t,n){"use strict";n.d(t,"a",(function(){return p}));var r=n(27),a=n(28),A=n(30),u=n(29),o=n(31),c=n(0),i=n.n(c),s=n(24),l=n(13),f=function(e){return{isAuth:e.auth.isAuth}},p=function(e){var t=function(t){function n(){return Object(r.a)(this,n),Object(A.a)(this,Object(u.a)(n).apply(this,arguments))}return Object(o.a)(n,t),Object(a.a)(n,[{key:"render",value:function(){return this.props.isAuth?i.a.createElement(e,this.props):i.a.createElement(s.a,{to:"/login"})}}]),n}(i.a.Component);return Object(l.b)(f)(t)}},16:function(e,t,n){"use strict";n.d(t,"c",(function(){return c})),n.d(t,"b",(function(){return i})),n.d(t,"a",(function(){return s}));var r=n(5),a=n.n(r),A=n(10),u=n(131),o=n.n(u).a.create({withCredentials:!0,baseURL:"https://social-network.samuraijs.com/api/1.0/",headers:{"API-KEY":"f9529b93-30b8-4394-b072-ee0546f292c2"}}),c={getUsers:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10;return Object(A.a)(a.a.mark((function n(){var r;return a.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.get("users?page=".concat(e,"&count=").concat(t));case 2:return r=n.sent,n.abrupt("return",r.data);case 4:case"end":return n.stop()}}),n)})))()},unfollow:function(e){return Object(A.a)(a.a.mark((function t(){var n;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.delete("follow/".concat(e));case 2:return n=t.sent,t.abrupt("return",n.data);case 4:case"end":return t.stop()}}),t)})))()},follow:function(e){return Object(A.a)(a.a.mark((function t(){var n;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.post("follow/".concat(e));case 2:return n=t.sent,t.abrupt("return",n.data);case 4:case"end":return t.stop()}}),t)})))()},getProfile:function(e){return console.warn("Obsolete method. Please profileAPI object."),i.getProfile(e)}},i={getProfile:function(e){return o.get("profile/".concat(e))},getStatus:function(e){return o.get("profile/status/".concat(e))},updateStatus:function(e){return o.put("profile/status",{status:e})}},s={getMe:function(){return o.get("auth/me")},login:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return o.post("auth/login",{email:e,password:t,rememberMe:n})},logaut:function(){return o.delete("auth/login")}}},164:function(e,t,n){e.exports=n(293)},169:function(e,t,n){},17:function(e,t,n){e.exports={nav:"Navbar_nav__2xKqi",item:"Navbar_item__15XME",active:"Navbar_active__bEgna"}},170:function(e,t,n){},193:function(e,t,n){},194:function(e,t,n){},195:function(e,t,n){},293:function(e,t,n){"use strict";n.r(t);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var r=n(0),a=n.n(r),A=n(63),u=n.n(A),o=(n(169),n(27)),c=n(28),i=n(30),s=n(29),l=n(31),f=(n(170),n(88)),p=n.n(f),m=n(14),d=function(e){return a.a.createElement("header",{className:p.a.header},a.a.createElement("img",{src:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBw8QEA8QEA8OEBAQDQ0QDxAPDxAODw4QFRUWFxUWFRUYHSggGBolGxMVITEhJSkrLi8uFx8zODMsNygtLisBCgoKDg0OGhAQGy8lICUwLi0tKzA3LS0vLTIrLy0tKy0tLy4tKy0vLi0tKysrLS0wKystLS8tLS0tLS0vLS8tLf/AABEIAOEA4QMBEQACEQEDEQH/xAAbAAEAAgMBAQAAAAAAAAAAAAAAAQQCAwUGB//EADYQAAICAgAEBAQEAwkBAAAAAAABAgMEEQUSITEGE0FRImFxgRQykbF0weEHIzVCQ1Kh0fEV/8QAGwEBAAIDAQEAAAAAAAAAAAAAAAMEAQIFBgf/xAA3EQEAAgECBAMGBQIGAwEAAAAAAQIDBBESITFBBVFxE2GRsdHwBiIygaHB4RQjMzRSciRCwhX/2gAMAwEAAhEDEQA/APtgYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAGwI2BHMBPMA2BOwAEgAAAAAAAAAAAAAAAAAAAAAQBEpJdX0XuzW1q0rNrTtEd2YjflCjfxFLpFb+b6L+p5vWfiTFj3rgjinznlH1n+PVappZnnbkpWZdkv8zXyXQ89n8Z1ubreYjyjl8uf8rNcGOvZpcm+7b+r2c6+W9/12mfWd0sREdBP2Zit7Unes7ehMbtkMma7Sf36/uXsPi2sw/pyT+/P57o7YaT1hbp4h6SX3X/AEd/R/iaJ/LqK7e+P6x9Jn0V76T/AIyu12prae0eoxZseakXxzExPeFO1ZrO0tqZIwkCQAAAAAAAAAAAAAAAAAAAgDXfcoLb7f8AL+hX1WqxaXFOTJO0R/Puj3t6Um87Q4+Tkym+vRekfT+p8+8R8Uza235uVe1fr5z9w6WLFWkcurQc1KAABgDIAZ1WuL2n9vRlvR67NpL8eKfWO0+v3u0vjreNpdTGyFJfP1XsfQfD/EMWtx8dOUx1jvH9vKXNy4pxztK1GRfRMgJAAAAAAAAAAAAAAAAAAGMpaW32Xc1tatKza07RHOWYjflDiZWQ5y36L8qPnHiniNtbm4v/AFj9Mf19Z/s6mLFGOvvaDmpQAAAAAAADOqbi9r/0s6PV5NLmjLTt2847x9+rS9IvXaXWpt2k0fS9NqKajFXLTpP3t+zlWrNZ2lYiydqyAkAAAAAAAAAAAAAAABAFDil2kor16v6HmvxJrPZ4owV625z6R9Z+UrelpvPFPZyzxK+AAAAwKeZxbGqUJWX1RVlqqg3NPnsb1yrXd77+3qWMelzZJmKVmdo3n3R5tJvWOsrhA3efq4nfLi1mLzJY9XDYXcqitu6dqSbl36Ri1r5nStp8dfD65tvzTfbf3RH1Q8U+14e2z0BzUwBawrNPXv2PUfhrWcOS2nt0nnHrHX4x8lTVU3jidOuR7NQbkBIAAAAAAAAAAAAAAACGBw82fNZL5PS+x848Zz+21uSe0Twx+3L57upgrw44aDlplLjXEFjY2RkOPOqKbLeRPl5uVb1v037k+lwTnzUxRO3FMRv6tb24azLHw/nyycXGyJRUHfTXa4ptqPMtpb9e5nWYIwZ74onfhmY39GKW4qxLif2e8VyMuvMuvm564jfXSuWMYwqjGDilpdfza2+vQ6HjOmw6a+PHjjb8kTPvmd/ojwXm0TM+b1FsU4yT6pxkmvda6nIrMxMTCaXxfh9W+D8EX+/j9f6c9kf5Hu81tvEdVPlin5RLn1j/AC6+r67VxfHsWQ67Fa8aU43Rr+KUJxTbjr36P7niraXLSaReNuPbbfvE917jid9uzzf/ANGqzDyeNYkbFddhyqrjdy9HVZOEUoR2nJz7Lb38K6bOr/h8lNTTw7PMcNbbzt74iZ5z2293Lmh4oms5K9V7wDxKd+FDzrZWZNVt9WV5ijGyu2M5fDJR9lrXy/QreMaeuHUz7Ou1JiJrt0mJiOcN8Ft68+r0ZzEyYS00/Zk+lzzgzUyx2mJ+rW1eKsw69Uj6o46zFgZASAAAAAAAAAAAAAABjIDz0ntt+7Pk+S/He1/OZn4uzEbRsg0ZcHx69cMz/wCFsX69Do+Ef77F/wBoRZ/9OXP4R4nwMLAwIZGVTCccHDTri3bbt1x/04bkuvyLOp8O1eq1eW2LHMxxW59I6z3naGlctK0iJns8V4c8X/g+DXQpjL8ZC3fNKCdUbL5y5dPfxS5K5vWtfD6ne13hX+J8SrbJMezmOm/Pasc/SN5iP3V6ZeHHMR1eixvE8qL/AMPDJnxau/A86mVfkyvjkJ6lCTglGFbXxbn+XTXX15l/Dq5sXtbUjDNb7TvvtNe0xvvMzvy5dUsZeGdt9+TgcLr3wzw1FdebjkZfVLIt/kjo6i3/AJutnyxf/MI6/op6ulw3i8cXH8QWOS/E2cXzaaKu9k7J/DUlHu1uUn09Isq5tLbUZtHWI/JGOszPaIjnPP4fGG1bxWL+e7ueG8VrgeJ5VKusrx45FFLk4xsvjJ2Q5uvX49PXukc/XZI//UycduGJnhmfKJiIn+OSSkf5MbQjwlTbfm3cQeNkYUbcOqrIpuj5f4jLUtuyMX15YxWlJpN8z6Lrt4jemLTV0sXjJtaZrMc9q7dJnpvM89o3229DFEzab7bPZnDWQwOnjvovoj6lobzfTY7T3rX5Q5GSNrzHvXIMtNGwCQAAAAAAAAAAAAAAMJAefa19tnyW9Zpaaz25OzE7oMMvM/2lV83C8v4px5YRl8MuXm+JJRl7x69V8jq+B2212PlE7/TrHvQaj/TlzKOAQx8KjOwIKnKhhU2zjFvy82Hlqc67I9ty66l3T11Ld9dbNqbabVTxUm0xHnWd9omJ93eOmzSMfDSL16/NS8LcInlcAw40ygr6cieTjuzfJ5tWVY0pa7Jra+5Pr9VXT+L5LZInhtEVtt12tSPk1x04sMbdf7uzwLw3NZN+ZdRi4srMZ49ePialGEZPmssskoxU7JPXXXZepR1fiFfY00+O1rxE8U2t325RERvO0R80lMU8U2mNlrhnhCmrH4fROc7Hw+53VTilWp2Nyl8UevTc3036LqQ5/FcmTNmyViI9pG0x12jlHKeXk2rhiIiJ7NvGuC4cFlZv4en8THGyJedyrn2q5Lf11033NdLq9Racen454OKOXbrH3sXx1je23M8B/wCGYH8JV+w8X/32X/tLOH/Th3jnJQAYHRx+y+iPqPh9ZrpcUT/xr8ocnL+ufVdrLaNtQEgAAAAAAAAAAAAAAYyA4eVDU5L57/XqfNPFsPsdZkr79/jz/q6uG3FSJaTnpXC8dYN2Rw/Jpog7LbFUoQTjFy/vYN9ZNJdE339DoeE5seHWUyZJ2rG+8/tPkizVm1JiFzguFOvCxqLdc9eHRTZp8y5o1qMtP16pkGqzVvqb5adJtMx+87w2pXakRPkw8McEhgYtWLCcrI18+pTSTfNJyfRfOTNtfrLavPbNaNpnbl6RsxjpwV4XUKiQAq8Vw/Povo5nDzqLqudLbhzxcebXrreyXT5fY5aZNt+GYnbz2ndravFEw1eH+G/hcXHxufzPJqjXz8vLza9dbejfWaj/ABGe+XbbinfZileGsQvlduASl1+5vixTlyVxx1mYj4sTO0bulWj6vERWNoceVusyw2gSAAAAAAAAAAAAAABiwOZxOrtL7P8AkeT/ABNpN4rqK9vyz/SfnHwXdJfrVQPHroAMjnTvyty1VDSssUXre61XY4t/EuvOq19Jem3y2opg2je09I+O8b9vLef2+Me9vIqvymviqhF8t3RamnNOaik+daTShJPu1LTUWhamCJ5Wmenu5ct+08+se7blxETbyZyuyPLqari5vn82OukdVzcdbkunOoL6S9PTWKYeO0b8uW3xjft5bz+3fvne20MIXZXLFuuHM41OcY9UpPm50pOXVLS02l+ZfPW000/FMRadue0/Llt/Xt6Mb38nRKiQMgBuxobe/b9z0P4c0k5NROaelPnPT4RvPwVtVfavD5uhUj3TnLUEBmBIAAAAAAAAAAAAAAEMDTdBNNPsyLNhpmx2x3jlMbS2raazvDi3VuLaf6+6Pmmu0d9JmnFf9p847T993Vx3i9d4YFRuAAAAwBkAAExW+hJhw3zZIx0jeZ6NbWisbyvU16Wj6XoNHXSYIxV/efOe8/fZy8l5vbeVuqJcRrEUBkAAAAAAAAAAAAAAAAgCJICplUKS+fo/YoeI+H49bi4LcpjpPl/bzhLiyzjneHKsrcXpr+p881Wjy6XJ7PLG0/xPvj79XSpeLxvDErNwAAMAZACVFvsSYcOTNeKY43mezWbRWN5W6KdfU9/4T4TXRV4rc7z1ny90ffNzs2ack7R0Wq4HYQLMIgbEBIAAAAAAAAAAAAAAAABAGEogV7qU+jWyDUabFqKcGWu8ffTybVvNZ3hQtxGu3X5PueS1n4ay0mbaeeKPKeU/HpP8LtNVE/q5NEotd00eezafLhnbLWa+sLNbRbpLEgbAEpb7EmPFfJO2OszPujf5MTMR1bYY7ffp+53tJ+HNRlnfN+SPjPw+s/sr31NY/TzWa6kux67R6DBpK8OKPWe8+s/cKV8lrzzb4QLiNYhEDYkBkAAAAAAAAAAAAAAAAAAAEAYuIGqUANUqxMbxtI1Ohey/QqW0GlvO9sdfhH0SRkvHeUeQvZfoYr4fpIneMVfhH0Pa385ZKst1rFY2rGzSZ3Zqsyw2RrA2xiBmkBIEgAAAAAAAAAAAAAAAAAAAAgA0Bi4gYuAEcgDkAyUAMkgJAkAAAAAAAAAAAAAAAAAAAAAAAAAQAAaAAAJAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB/9k=",alt:"logo"}),a.a.createElement("div",{className:p.a.loginBlock},e.isAuth?a.a.createElement("div",null," ",e.login," - ",a.a.createElement("button",{onClick:e.logaut},"Log aut")," "):a.a.createElement(m.b,{to:"/login"},"Login")))},g=n(13),b=n(5),v=n.n(b),E=n(10),h=n(9),O=n(16),w=n(44),P={userId:null,login:null,email:null,isAuth:!1},j=function(e,t,n,r){return{type:"SET_USER_DATA",payload:{userId:e,login:t,email:n,isAuth:r}}},y=function(){return function(){var e=Object(E.a)(v.a.mark((function e(t){var n,r,a,A,u;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O.a.getMe();case 2:0===(n=e.sent).data.resultCode&&(r=n.data.data,a=r.id,A=r.login,u=r.email,t(j(a,A,u,!0)));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},S=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:P,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_USER_DATA":return Object(h.a)({},e,{},t.payload);default:return e}},L=function(e){function t(){return Object(o.a)(this,t),Object(i.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(l.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return a.a.createElement(d,this.props)}}]),t}(a.a.Component),x=Object(g.b)((function(e){return{isAuth:e.auth.isAuth,login:e.auth.login}}),{logaut:function(){return function(){var e=Object(E.a)(v.a.mark((function e(t){return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O.a.logaut();case 2:0===e.sent.data.resultCode&&t(j(null,null,null,!1));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}})(L),N=n(17),T=n.n(N),z=function(){return a.a.createElement("nav",{className:T.a.nav},a.a.createElement("div",{className:"".concat(T.a.item)},a.a.createElement(m.b,{to:"/profile",activeClassName:T.a.active},"Profile")),a.a.createElement("div",{className:T.a.item},a.a.createElement(m.b,{to:"/dialogs",activeClassName:T.a.active},"Messages")),a.a.createElement("div",{className:T.a.item},a.a.createElement(m.b,{to:"/news",activeClassName:T.a.active},"News")),a.a.createElement("div",{className:T.a.item},a.a.createElement(m.b,{to:"/music",activeClassName:T.a.active},"Music")),a.a.createElement("div",{className:T.a.item},a.a.createElement(m.b,{to:"/settings",activeClassName:T.a.active},"Settings")),a.a.createElement("div",{className:T.a.item},a.a.createElement(m.b,{to:"/users",activeClassName:T.a.active},"Users")))},U=n(24),I=(n(193),function(e){return a.a.createElement("div",null,"News")}),k=(n(194),function(e){return a.a.createElement("div",null,"Music")}),C=(n(195),function(e){return a.a.createElement("div",null,"Settings")}),R=n(37),M=function(e,t,n,r){return e.map((function(e){return e[n]===t?Object(h.a)({},e,{},r):e}))},X={users:[],pageSize:10,totalUsersCount:0,currentPage:1,isFetching:!1,followingInProgress:[]},F=function(e){return{type:"FOLLOW",userId:e}},W=function(e){return{type:"UNFOLLOW",userId:e}},G=function(e,t){return{type:"TOGGLE-IS-FOLLOWING-PROGRESS",isFetching:e,userId:t}},Z=function(e){return{type:"SET-USERS",users:e}},J=function(e){return{type:"SET-CURRENT-PAGE",currentPage:e}},D=function(e){return{type:"SET-TOTAL-USERS-COUNT",count:e}},Q=function(e){return{type:"TOGGLE-IS-FETCHING",isFetching:e}},B=function(){var e=Object(E.a)(v.a.mark((function e(t,n,r,a){return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(G(!0,n)),e.next=3,r(n);case 3:0===e.sent.resultCode&&t(a(n)),t(G(!1,n));case 6:case"end":return e.stop()}}),e)})));return function(t,n,r,a){return e.apply(this,arguments)}}(),H=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:X,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FOLLOW":return Object(h.a)({},e,{users:M(e.users,t.userId,"id",{followed:!0})});case"UNFOLLOW":return Object(h.a)({},e,{users:M(e.users,t.userId,"id",{followed:!1})});case"SET-USERS":return Object(h.a)({},e,{users:t.users});case"SET-CURRENT-PAGE":return Object(h.a)({},e,{currentPage:t.currentPage});case"SET-TOTAL-USERS-COUNT":return Object(h.a)({},e,{totalUsersCount:t.count});case"TOGGLE-IS-FETCHING":return Object(h.a)({},e,{isFetching:t.isFetching});case"TOGGLE-IS-FOLLOWING-PROGRESS":return Object(h.a)({},e,{followingInProgress:t.isFetching?[].concat(Object(R.a)(e.followingInProgress),[t.userId]):e.followingInProgress.filter((function(e){return e!==t.userId}))});default:return e}},V=n(66),q=n(65),_=n(127),Y=n(68),K=n.n(Y),$=n(132),ee=n.n($),te=function(e){for(var t=e.totalUsersCount,n=e.pageSize,A=e.currentPage,u=e.onPageChanged,o=e.portionSize,c=void 0===o?10:o,i=Math.ceil(t/n),s=[],l=1;l<=i;l++)s.push(l);var f=Math.ceil(i/c),p=Object(r.useState)(1),m=Object(_.a)(p,2),d=m[0],g=m[1],b=(d-1)*c+1,v=d*c;return a.a.createElement("div",{className:K.a.paginator},d>1&&a.a.createElement("button",{onClick:function(){g(d-1)}},"PREV"),s.filter((function(e){return e>=b&&e<=v})).map((function(e){return a.a.createElement("span",{className:ee()(Object(q.a)({},K.a.selectedPage,A===e),K.a.pageNumber),key:e,onClick:function(t){u(e)}},e)})),f>d&&a.a.createElement("button",{onClick:function(){g(d+1)}},"NEXT"))},ne=n(133),re=n.n(ne),ae=n(104),Ae=n.n(ae),ue=function(e){var t=e.user,n=e.followingInProgress,r=e.unfollow,A=e.follow;return a.a.createElement("div",null,a.a.createElement("span",null,a.a.createElement("div",null,a.a.createElement(m.b,{to:"/profile/"+t.id},a.a.createElement("img",{src:null!==t.photos.small?t.photos.small:Ae.a,className:re.a.usersPhoto,alt:"avatar"}))),a.a.createElement("div",null,t.followed?a.a.createElement("button",{disabled:n.some((function(e){return e===t.id})),onClick:function(){r(t.id)}},"Unfollow"):a.a.createElement("button",{disabled:n.some((function(e){return e===t.id})),onClick:function(){A(t.id)}},"Follow"))),a.a.createElement("span",null,a.a.createElement("span",null,a.a.createElement("div",null,t.name),a.a.createElement("div",null,t.status)),a.a.createElement("span",null,a.a.createElement("div",null,"u.location.country"),a.a.createElement("div",null,"u.location.city"))))},oe=function(e){var t=e.currentPage,n=e.onPageChanged,r=e.totalUsersCount,A=e.pageSize,u=Object(V.a)(e,["currentPage","onPageChanged","totalUsersCount","pageSize"]);return a.a.createElement("div",null,a.a.createElement(te,{currentPage:t,onPageChanged:n,totalUsersCount:r,pageSize:A}),a.a.createElement("div",null,u.users.map((function(e){return a.a.createElement(ue,{user:e,key:e.id,followingInProgress:u.followingInProgress,unfollow:u.unfollow,follow:u.follow})}))))},ce=n(40),ie=(n(138),n(8)),se=function(e){return e.usersPage.users},le=function(e){return e.usersPage.pageSize},fe=function(e){return e.usersPage.totalUsersCount},pe=function(e){return e.usersPage.currentPage},me=function(e){return e.usersPage.isFetching},de=function(e){return e.usersPage.followingInProgress},ge=function(e){function t(){var e,n;Object(o.a)(this,t);for(var r=arguments.length,a=new Array(r),A=0;A<r;A++)a[A]=arguments[A];return(n=Object(i.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(a)))).onPageChanged=function(e){var t=n.props.pageSize;n.props.requestUsers(e,t)},n}return Object(l.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=this.props,t=e.currentPage,n=e.pageSize;this.props.requestUsers(t,n)}},{key:"render",value:function(){return a.a.createElement(a.a.Fragment,null,this.props.isFetching?a.a.createElement(ce.a,null):null,a.a.createElement(oe,{totalUsersCount:this.props.totalUsersCount,pageSize:this.props.pageSize,currentPage:this.props.currentPage,onPageChanged:this.onPageChanged,users:this.props.users,unfollow:this.props.unfollow,follow:this.props.follow,followingInProgress:this.props.followingInProgress}))}}]),t}(a.a.Component),be=Object(ie.d)(Object(g.b)((function(e){return{users:se(e),pageSize:le(e),totalUsersCount:fe(e),currentPage:pe(e),isFetching:me(e),followingInProgress:de(e)}}),{follow:function(e){return function(){var t=Object(E.a)(v.a.mark((function t(n){return v.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,B(n,e,O.c.follow.bind(O.c),F);case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},unfollow:function(e){return function(){var t=Object(E.a)(v.a.mark((function t(n){return v.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,B(n,e,O.c.unfollow.bind(O.c),W);case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},setCurrentPage:J,toggleIsFollowingProgress:G,requestUsers:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=arguments.length>1?arguments[1]:void 0;return function(){var n=Object(E.a)(v.a.mark((function n(r){var a;return v.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r(Q(!0)),r(J(e)),n.next=4,O.c.getUsers(e,t);case 4:a=n.sent,r(Q(!1)),r(Z(a.items)),r(D(a.totalCount));case 8:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()}}))(ge),ve=n(126),Ee=n(48),he=n(84),Oe=n(52),we=n.n(Oe),Pe=Object(ve.a)({form:"contact"})((function(e){var t=e.handleSubmit,n=e.error,r=Object(Ee.a)("input");return a.a.createElement("div",null,a.a.createElement("form",{onSubmit:t},Object(Ee.b)("login","email",[he.b],r),Object(Ee.b)("password","password",[he.b],r,{type:"password"}),Object(Ee.b)(null,"rememberMe",[],r,{type:"checkbox"},"remember me"),n&&a.a.createElement("div",{className:we.a.formSammaryError},n),a.a.createElement("div",null,a.a.createElement("button",null,"Login"))))})),je=Object(g.b)((function(e){return{isAuth:e.auth.isAuth}}),{login:function(e,t,n){return function(){var r=Object(E.a)(v.a.mark((function r(a){var A,u;return v.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,O.a.login(e,t,n);case 2:0===(A=r.sent).data.resultCode?a(y()):(u=A.data.messages.length>0?A.data.messages[0]:"Some error",a(Object(w.a)("contact",{_error:u})));case 4:case"end":return r.stop()}}),r)})));return function(e){return r.apply(this,arguments)}}()}})((function(e){return e.isAuth?a.a.createElement(U.a,{to:"/profile"}):a.a.createElement("div",null,a.a.createElement("h1",null,"Login"),a.a.createElement(Pe,{onSubmit:function(t){console.log(t),e.login(t.email,t.password,t.rememberMe)}}))})),ye={initialized:!1},Se=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ye,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"INITIALIZED_SUCCESS":return Object(h.a)({},e,{initialized:!0});default:return e}},Le=n(93),xe=n(125),Ne={},Te=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ne;arguments.length>1&&arguments[1];return e},ze=n(137),Ue=n(128),Ie=Object(ie.c)({profilePage:Le.b,dialogsPage:xe.a,sidebar:Te,usersPage:H,auth:S,app:Se,form:Ue.a}),ke=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||ie.d,Ce=Object(ie.e)(Ie,ke(Object(ie.a)(ze.a)));window.__store__=Ce;var Re=Ce,Me=function(e){return function(t){return a.a.createElement(a.a.Suspense,{fallback:a.a.createElement(ce.a,null)},a.a.createElement(e,t))}},Xe=a.a.lazy((function(){return n.e(4).then(n.bind(null,299))})),Fe=a.a.lazy((function(){return n.e(3).then(n.bind(null,298))})),We=function(e){function t(){return Object(o.a)(this,t),Object(i.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(l.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){this.props.initializedApp()}},{key:"render",value:function(){return this.props.initialized?a.a.createElement("div",{className:"app-wrapper"},a.a.createElement(x,null),a.a.createElement(z,{className:"navBar"}),a.a.createElement("div",{className:"app-wrapper-content"},a.a.createElement(U.b,{path:"/dialogs",render:Me(Xe)}),a.a.createElement(U.b,{path:"/profile/:userId?",render:Me(Fe)}),a.a.createElement(U.b,{path:"/news",render:function(){return a.a.createElement(I,null)}}),a.a.createElement(U.b,{path:"/music",render:function(){return a.a.createElement(k,null)}}),a.a.createElement(U.b,{path:"/settings",render:function(){return a.a.createElement(C,null)}}),a.a.createElement(U.b,{path:"/users",render:function(){return a.a.createElement(be,null)}}),a.a.createElement(U.b,{path:"/login",render:function(){return a.a.createElement(je,null)}}))):a.a.createElement(ce.a,null)}}]),t}(a.a.Component),Ge=Object(ie.d)(U.f,Object(g.b)((function(e){return{initialized:e.app.initialized}}),{initializedApp:function(){return function(e){var t=e(y());Promise.all([t]).then((function(){return e({type:"INITIALIZED_SUCCESS"})}))}}}))(We),Ze=function(e){return a.a.createElement(m.a,null,a.a.createElement(g.a,{store:Re},a.a.createElement(Ge,null)))};u.a.render(a.a.createElement(Ze,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},40:function(e,t,n){"use strict";var r=n(0),a=n.n(r),A=n(134),u=n.n(A),o=n(135),c=n.n(o);t.a=function(e){return a.a.createElement("img",{src:u.a,className:c.a.preloader,alt:"preloader"})}},48:function(e,t,n){"use strict";n.d(t,"a",(function(){return i})),n.d(t,"b",(function(){return s}));var r=n(66),a=n(0),A=n.n(a),u=n(52),o=n.n(u),c=n(87),i=function(e){return function(t){var n=t.input,a=t.meta,u=Object(r.a)(t,["input","meta"]),c=a.touched,i=a.error,s=c&&i;return A.a.createElement("div",{className:"".concat(o.a.formControl," ").concat(s?o.a.error:"")},A.a.createElement("div",null,A.a.createElement(e,Object.assign({},n,u))),s&&A.a.createElement("span",null,a.error))}},s=function(e,t,n,r){var a=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{},u=arguments.length>5&&void 0!==arguments[5]?arguments[5]:"";return A.a.createElement("div",null,A.a.createElement(c.a,Object.assign({placeholder:e,name:t,component:r,validate:n},a))," ",u)}},52:function(e,t,n){e.exports={formControl:"FormControls_formControl__10fvL",error:"FormControls_error__KmRjm",formSammaryError:"FormControls_formSammaryError__hCrZs"}},68:function(e,t,n){e.exports={paginator:"Paginator_paginator__3ycK2",pageNumber:"Paginator_pageNumber__2ONMm",selectedPage:"Paginator_selectedPage__3BCtE"}},84:function(e,t,n){"use strict";n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return a}));var r=function(e){return e?void 0:"Field is required"},a=function(e){return function(t){if(t.length>e)return"Max length is ".concat(e," simbols")}}},88:function(e,t,n){e.exports={header:"Header_header__3YDhX",loginBlock:"Header_loginBlock__2-Wcq"}},93:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"d",(function(){return f})),n.d(t,"c",(function(){return p})),n.d(t,"e",(function(){return m}));var r=n(5),a=n.n(r),A=n(10),u=n(37),o=n(9),c=n(16),i={posts:[],profile:null,status:""},s=function(e){return{type:"ADD-POST",newPostText:e}},l=function(e){return{type:"SET_STATUS",status:e}},f=function(e){return function(){var t=Object(A.a)(a.a.mark((function t(n){var r;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.c.getProfile(e);case 2:r=t.sent,n({type:"SET-USER-PROFILE",profile:r.data});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},p=function(e){return function(){var t=Object(A.a)(a.a.mark((function t(n){var r;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.b.getStatus(e);case 2:r=t.sent,n(l(r.data));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},m=function(e){return function(){var t=Object(A.a)(a.a.mark((function t(n){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.b.updateStatus(e);case 2:0===t.sent.data.resultCode&&n(l(e));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()};t.b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:i,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD-POST":var n={id:5,message:t.newPostText,likesCount:0};return Object(o.a)({},e,{posts:[].concat(Object(u.a)(e.posts),[n])});case"SET-USER-PROFILE":return Object(o.a)({},e,{profile:t.profile});case"SET_STATUS":return Object(o.a)({},e,{status:t.status});case"DELETE_POST":return Object(o.a)({},e,{posts:Object(u.a)(e.posts.filter((function(e){return e.id!==t.postId})))});default:return e}}}},[[164,1,2]]]);
//# sourceMappingURL=main.59178793.chunk.js.map