(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[3],{295:function(e,t,a){"use strict";a.d(t,"a",(function(){return f}));var n=a(34),l=a(35),o=a(38),r=a(36),s=a(39),c=a(0),i=a.n(c),u=a(28),m=a(18),p=function(e){return{isAuth:e.auth.isAuth}},f=function(e){var t=function(t){function a(){return Object(n.a)(this,a),Object(o.a)(this,Object(r.a)(a).apply(this,arguments))}return Object(s.a)(a,t),Object(l.a)(a,[{key:"render",value:function(){return this.props.isAuth?i.a.createElement(e,this.props):i.a.createElement(u.a,{to:"/login"})}}]),a}(i.a.Component);return Object(m.b)(p)(t)}},296:function(e,t,a){e.exports={avatar:"ProfileInfo_avatar__3db7F",item:"ProfileInfo_item__1Smry",contact:"ProfileInfo_contact__27xyW"}},297:function(e,t,a){e.exports={content:"MyPosts_content__3Ld_J",postsBlock:"MyPosts_postsBlock__eXSfj",way:"MyPosts_way__3ymh5",posts:"MyPosts_posts__2Cn8s",avatar:"MyPosts_avatar__1P5NN",item:"MyPosts_item__1cUMx"}},298:function(e,t,a){e.exports={blockPost:"Posts_blockPost__3BvhH",likesCount:"Posts_likesCount__2yvWw"}},299:function(e,t){},300:function(e,t,a){"use strict";a.r(t);var n=a(34),l=a(35),o=a(38),r=a(36),s=a(39),c=a(0),i=a.n(c),u=a(95),m=a(296),p=a.n(m),f=a(41),b=a(106),d=a.n(b),v=function(e){var t=Object(c.useState)(!1),a=Object(u.a)(t,2),n=a[0],l=a[1],o=Object(c.useState)(e.status),r=Object(u.a)(o,2),s=r[0],m=r[1];Object(c.useEffect)((function(){m(e.status)}),[e.status]);return i.a.createElement("div",null,!n&&i.a.createElement("div",null,i.a.createElement("b",null,"Status"),": ",i.a.createElement("span",{onDoubleClick:function(){l(!0)}},e.status||"-----")),n&&i.a.createElement("div",null,i.a.createElement("input",{onChange:function(e){m(e.currentTarget.value)},onBlur:function(){l(!1),e.updateStatus(s)},autoFocus:!0,value:s})))},E=a(42),h=a(50),P=a.n(h),g=a(128),O=Object(g.a)({form:"edit-profile"})((function(e){var t=e.handleSubmit,a=e.profile,n=e.error,l=Object(E.a)("input"),o=Object(E.a)("textarea");return i.a.createElement("form",{className:p.a.description,onSubmit:t},i.a.createElement("div",null,i.a.createElement("button",null,"save")),n&&i.a.createElement("div",{className:P.a.formSammaryError},n),i.a.createElement("div",null,i.a.createElement("b",null,"Full name"),": ",Object(E.b)("Full name","fullName",[],l)),i.a.createElement("div",null,i.a.createElement("b",null,"Looking for a job"),": ",Object(E.b)("","lookingForAJob",[],l,{type:"checkbox"})),i.a.createElement("div",null,i.a.createElement("b",null,"My professional skills"),": ",Object(E.b)("My professional skills","lookingForAJobDescription",[],o)),i.a.createElement("div",null,i.a.createElement("b",null,"About me"),": ",Object(E.b)("About me","aboutMe",[],o)),i.a.createElement("div",null,i.a.createElement("b",null,"Contacts"),":",Object.keys(a.contacts).map((function(e){return i.a.createElement("div",{key:e,className:p.a.contact},i.a.createElement("b",null,e,": "),Object(E.b)(e,"contacts.".concat(e),[],l))}))))})),j=function(e){var t=e.profile,a=e.isOwner,n=e.goToEditMode;return i.a.createElement("div",{className:p.a.description},a&&i.a.createElement("div",null,i.a.createElement("button",{onClick:n},"edit")),i.a.createElement("div",null,i.a.createElement("b",null,"Full name"),": ",t.fullName),i.a.createElement("div",null,i.a.createElement("b",null,"Looking for a job"),": ",t.lookingForAJob?"yes":"no"),t.lookingForAGob&&i.a.createElement("div",null,i.a.createElement("b",null,"My professional skills"),": ",t.lookingForAJobDescription),i.a.createElement("div",null,i.a.createElement("b",null,"About me"),": ",t.aboutMe),i.a.createElement("div",null,i.a.createElement("b",null,"Contacts"),":",Object.keys(t.contacts).map((function(e){return i.a.createElement(k,{key:e,contactTitle:e,contactValue:t.contacts[e]})}))))},k=function(e){var t=e.contactTitle,a=e.contactValue;return i.a.createElement("div",{className:p.a.contact},i.a.createElement("b",null,t),": ",a)},_=function(e){var t=e.profile,a=e.status,n=e.updateStatus,l=e.isOwner,o=e.savePhoto,r=e.saveProfile,s=Object(c.useState)(!1),m=Object(u.a)(s,2),b=m[0],E=m[1];if(!t)return i.a.createElement(f.a,null);return i.a.createElement("div",null,i.a.createElement("div",{className:p.a.avatar},i.a.createElement("div",null,i.a.createElement("img",{src:t.photos.large||d.a,alt:"img"}),i.a.createElement("div",null,l&&i.a.createElement("input",{type:"file",onChange:function(e){e.target.files.length&&o(e.target.files[0])}}))),i.a.createElement("div",null,i.a.createElement(v,{status:a,updateStatus:n}),b?i.a.createElement(O,{initialValues:t,profile:t,onSubmit:function(e){r(e).then((function(){E(!1)}))}}):i.a.createElement(j,{goToEditMode:function(){E(!0)},isOwner:l,profile:t}))))},y=a(297),S=a.n(y),w=a(298),N=a.n(w),M=function(e){return console.log(e.message),i.a.createElement("div",{className:N.a.item},i.a.createElement("div",{className:N.a.blockPost},i.a.createElement("img",{src:"https://toppng.com/uploads/preview/batman-icon-jira-avatar-11562897771zvwv8r510z.png",alt:"avatar"}),e.message),i.a.createElement("div",{className:N.a.likesCount},i.a.createElement("span",null,e.likeCount),i.a.createElement("img",{src:"http://pngimg.com/uploads/like/like_PNG84.png",alt:"like"})))},A=a(88),C=a(65),x=i.a.memo((function(e){var t=e.posts.map((function(e){return i.a.createElement(M,{message:e.message,likeCount:e.likesCount})}));return i.a.createElement("div",{className:S.a.postsBlock},i.a.createElement("h3",null,"My posts"),i.a.createElement(I,{onSubmit:function(t){e.addPost(t.newPostText)}}),i.a.createElement("div",{className:S.a.posts},t))})),F=Object(C.a)(10),I=Object(g.a)({form:"ProfileAddNewPostsForm"})((function(e){var t=Object(E.a)("textarea");return i.a.createElement("form",{onSubmit:e.handleSubmit},i.a.createElement("div",null,i.a.createElement(A.a,{name:"newPostText",validate:[C.b,F],component:t,placeholder:"Enter Your post"})),i.a.createElement("div",null,i.a.createElement("button",null,"Add Post")))})),T=x,J=a(94),U=a(18),B=Object(U.b)((function(e){return{posts:e.profilePage.posts,newPostText:e.profilePage.newPostText}}),(function(e){return{addPost:function(t){e(Object(J.a)(t))}}}))(T),D=function(e){return i.a.createElement("div",null,i.a.createElement(_,{isOwner:e.isOwner,profile:e.profile,status:e.status,updateStatus:e.updateStatus,savePhoto:e.savePhoto,saveProfile:e.saveProfile}),i.a.createElement(B,null))},z=a(28),L=(a(295),a(8)),V=(a(299),function(e){function t(){return Object(n.a)(this,t),Object(o.a)(this,Object(r.a)(t).apply(this,arguments))}return Object(s.a)(t,e),Object(l.a)(t,[{key:"refreshProfile",value:function(){var e=this.props.match.params.userId;e||(e=this.props.authorizedUserId)||this.props.history.push("/login"),this.props.getUserProfile(e),this.props.getStatus(e)}},{key:"componentDidMount",value:function(){this.refreshProfile()}},{key:"componentDidUpdate",value:function(e,t,a){this.props.match.params.userId!==e.match.params.userId&&this.refreshProfile()}},{key:"render",value:function(){return i.a.createElement(D,Object.assign({},this.props,{profile:this.props.profile,status:this.props.status,updateStatus:this.props.updateStatus,isOwner:!this.props.match.params.userId,savePhoto:this.props.savePhoto,saveProfile:this.props.saveProfile}))}}]),t}(i.a.Component));t.default=Object(L.d)(Object(U.b)((function(e){return{profile:e.profilePage.profile,status:e.profilePage.status,authorizedUserId:e.auth.userId,isAuth:e.auth.isAuth}}),{getUserProfile:J.d,getStatus:J.c,updateStatus:J.g,savePhoto:J.e,saveProfile:J.f}),z.g)(V)}}]);
//# sourceMappingURL=3.605bf22e.chunk.js.map