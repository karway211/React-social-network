(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[3],{295:function(t,e,a){t.exports={way:"ProfileInfo_way__1X5hF",avatar:"ProfileInfo_avatar__3db7F",item:"ProfileInfo_item__1Smry"}},296:function(t,e,a){t.exports={content:"MyPosts_content__3Ld_J",postsBlock:"MyPosts_postsBlock__eXSfj",way:"MyPosts_way__3ymh5",posts:"MyPosts_posts__2Cn8s",avatar:"MyPosts_avatar__1P5NN",item:"MyPosts_item__1cUMx"}},297:function(t,e,a){t.exports={item:"Posts_item__3k5Lp"}},298:function(t,e,a){"use strict";a.r(e);var s=a(27),n=a(28),o=a(30),r=a(29),u=a(31),c=a(0),l=a.n(c),i=a(295),p=a.n(i),m=a(40),d=a(104),f=a.n(d),h=a(127),E=function(t){var e=Object(c.useState)(!1),a=Object(h.a)(e,2),s=a[0],n=a[1],o=Object(c.useState)(t.status),r=Object(h.a)(o,2),u=r[0],i=r[1];Object(c.useEffect)((function(){i(t.status)}),[t.status]);return l.a.createElement("div",null,!s&&l.a.createElement("div",null,l.a.createElement("span",{onDoubleClick:function(){n(!0)}},t.status||"-----")),s&&l.a.createElement("div",null,l.a.createElement("input",{onChange:function(t){i(t.currentTarget.value)},onBlur:function(){n(!1),t.updateStatus(u)},autoFocus:!0,value:u})))},_=function(t){var e=t.profile,a=t.status,s=t.updateStatus;return e?l.a.createElement("div",null,l.a.createElement("div",{className:p.a.way},l.a.createElement("img",{src:"https://st2.depositphotos.com/1046670/5401/i/450/depositphotos_54014113-stock-photo-eagle.jpg",alt:"img"})),l.a.createElement("div",{className:p.a.avatar},l.a.createElement("img",{src:e.photos.large||f.a,alt:"img"}),l.a.createElement("div",{className:p.a.description},l.a.createElement(E,{status:a,updateStatus:s})))):l.a.createElement(m.a,null)},b=a(296),v=a.n(b),g=a(297),P=a.n(g),j=function(t){return console.log(t.message),l.a.createElement("div",{className:P.a.item},l.a.createElement("img",{src:"https://hornews.com/images/news_large/c1d4b2b8ec608ea72764c5678816d5c9.jpg",alt:"avatar"}),t.message,l.a.createElement("div",null,l.a.createElement("span",null,t.likeCount)))},y=a(87),O=a(126),S=a(84),w=a(48),k=l.a.memo((function(t){var e=t.posts.map((function(t){return l.a.createElement(j,{message:t.message,likeCount:t.likesCount})}));return l.a.createElement("div",{className:v.a.postsBlock},l.a.createElement("h3",null,"My posts"),l.a.createElement(M,{onSubmit:function(e){t.addPost(e.newPostText)}}),l.a.createElement("div",{className:v.a.posts},e))})),x=Object(S.a)(10),M=Object(O.a)({form:"ProfileAddNewPostsForm"})((function(t){var e=Object(w.a)("textarea");return l.a.createElement("form",{onSubmit:t.handleSubmit},l.a.createElement("div",null,l.a.createElement(y.a,{name:"newPostText",validate:[S.b,x],component:e,placeholder:"Enter Your post"})),l.a.createElement("div",null,l.a.createElement("button",null,"Add Post")))})),N=k,C=a(93),I=a(13),T=Object(I.b)((function(t){return{posts:t.profilePage.posts,newPostText:t.profilePage.newPostText}}),(function(t){return{addPost:function(e){t(Object(C.a)(e))}}}))(N),U=function(t){return l.a.createElement("div",null,l.a.createElement(_,{profile:t.profile,status:t.status,updateStatus:t.updateStatus}),l.a.createElement(T,null))},A=a(24),B=(a(138),a(8)),F=function(t){function e(){return Object(s.a)(this,e),Object(o.a)(this,Object(r.a)(e).apply(this,arguments))}return Object(u.a)(e,t),Object(n.a)(e,[{key:"componentDidMount",value:function(){var t=this.props.match.params.userId;t||(t=this.props.authorizedUserId)||this.props.history.push("/login"),this.props.getUserProfile(t),this.props.getStatus(t)}},{key:"render",value:function(){return l.a.createElement(U,Object.assign({},this.props,{profile:this.props.profile,status:this.props.status,updateStatus:this.props.updateStatus}))}}]),e}(l.a.Component);e.default=Object(B.d)(Object(I.b)((function(t){return{profile:t.profilePage.profile,status:t.profilePage.status,authorizedUserId:t.auth.userId,isAuth:t.auth.isAuth}}),{getUserProfile:C.d,getStatus:C.c,updateStatus:C.e}),A.f)(F)}}]);
//# sourceMappingURL=3.c0346e56.chunk.js.map