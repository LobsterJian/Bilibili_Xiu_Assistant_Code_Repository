(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/searchFriends/searchFriends"],{"0b91":function(e,n,c){"use strict";c.r(n);var r=c("8661"),s=c("c540");for(var t in s)"default"!==t&&function(e){c.d(n,e,(function(){return s[e]}))}(t);c("fe52");var a,i=c("f0c5"),u=Object(i["a"])(s["default"],r["b"],r["c"],!1,null,null,null,!1,r["a"],a);n["default"]=u.exports},8661:function(e,n,c){"use strict";var r;c.d(n,"b",(function(){return s})),c.d(n,"c",(function(){return t})),c.d(n,"a",(function(){return r}));var s=function(){var e=this,n=e.$createElement;e._self._c},t=[]},c368:function(e,n,c){"use strict";(function(e){c("035c");r(c("66fd"));var n=r(c("0b91"));function r(e){return e&&e.__esModule?e:{default:e}}e(n.default)}).call(this,c("543d")["createPage"])},c540:function(e,n,c){"use strict";c.r(n);var r=c("e0cc"),s=c.n(r);for(var t in r)"default"!==t&&function(e){c.d(n,e,(function(){return r[e]}))}(t);n["default"]=s.a},dda8:function(e,n,c){},e0cc:function(e,n,c){"use strict";(function(e){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var c={data:function(){return{userName:"",friendName:"",imgSrc:"",searchName:"",color:"#f27498",currentclass:"friend_unSearched",currentImgClass:"image_unsearched",currentIconClass:"icon_unsearched",currentNickClass:"nickname_unsearched",currentFontIconClass:"fonticon_unsearched"}},methods:{search:function(){var n=this;this.userName=e.getStorageSync("username_log"),e.request({url:"https://www.zhangwenning.top:5000/searchfriend",method:"GET",data:{username:this.userName,friendname:this.friendName},header:{"content-type":"application/x-www-form-urlencoded"},success:function(c){""!=n.friendName&&(n.searchName=c.data.username,null==n.searchName?(n.searchName="此用户不存在!",n.imgSrc=""):n.searchName==e.getStorageSync("username_log")?(n.currentFontIconClass="icon-user",n.currentNickClass="nickname_searched",n.currentIconClass="icon_searched",n.currentImgClass="image_searched",n.currentclass="friend",n.imgSrc="https://www.zhangwenning.top:443/icon/"+n.searchName):"1"==c.data.message?(n.currentFontIconClass="icon-user-check",n.currentNickClass="nickname_searched",n.currentIconClass="icon_searched",n.currentImgClass="image_searched",n.currentclass="friend",n.imgSrc="https://www.zhangwenning.top:443/icon/"+n.searchName):(n.currentFontIconClass="icon-user-plus1",n.currentNickClass="nickname_searched",n.currentIconClass="icon_searched",n.currentImgClass="image_searched",n.currentclass="friend",n.imgSrc="https://www.zhangwenning.top:443/icon/"+n.searchName))}}),console.log(this.friendName)},inputChanged:function(e){""==e.target.value&&(this.searchName="",this.imgSrc="",this.currentFontIconClass="fonticon_unsearched",this.currentclass="friend_unSearched",this.currentIconClass="icon_unsearched",this.currentImgClass="image_unsearched",this.currentNickClass="nickname_unsearched")},add:function(){var n=this;this.userName=e.getStorageSync("username_log"),"icon-user-plus1"==this.currentFontIconClass?e.request({url:"https://www.zhangwenning.top:5000/addfriend",method:"GET",data:{username:this.userName,friendname:this.friendName},header:{"content-type":"application/x-www-form-urlencoded"},success:function(){e.showToast({title:"添加成功"}),n.currentFontIconClass="icon-user-check"}}):"icon-user"==this.currentFontIconClass?e.showToast({title:"不能添加自己哦！",icon:"none"}):"icon-user-check"==this.currentFontIconClass&&e.showToast({title:"已有该好友！",icon:"none"})}}};n.default=c}).call(this,c("543d")["default"])},fe52:function(e,n,c){"use strict";var r=c("dda8"),s=c.n(r);s.a}},[["c368","common/runtime","common/vendor"]]]);