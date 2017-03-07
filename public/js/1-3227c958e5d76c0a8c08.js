webpackJsonp([1],{139:function(e,t,n){"use strict";function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function r(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var a=n(0),s=(n.n(a),n(1)),l=(n.n(s),n(50)),c=n(142),u=(n.n(c),function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}()),p=function(e){function t(){i(this,t);var e=o(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return e.state={largenedImageIndex:-1},e}return r(t,e),u(t,[{key:"enlargeImage",value:function(e){this.state.largenedImageIndex===e?this.setState({largenedImageIndex:-1}):this.setState({largenedImageIndex:e,ahead:!0})}},{key:"render",value:function(){var e=this;return n.i(a.h)("div",{className:this.props.mode+"-tiles"},this.props.images&&this.props.images.map(function(t,i){var o="background-image:url("+t+");";return n.i(a.h)("div",{className:i===e.state.largenedImageIndex?"large tile":"tile",style:e.state.largenedImageIndex!==-1&&i!==e.state.largenedImageIndex?"opacity: 0.1":""},n.i(a.h)("div",{className:"pic",style:o,onClick:e.enlargeImage.bind(e,i)}))}),"preview"==this.props.mode&&n.i(a.h)(l.a,{level:this.props.level}))}}]),t}(a.Component);t.a=p},140:function(e,t,n){"use strict";function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function r(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var a=n(0),s=(n.n(a),n(1)),l=(n.n(s),n(4)),c=(n.n(l),n(49)),u=n(16),p=(n.n(u),function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}()),h=function(e){function t(){i(this,t);var e=o(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return e.state={isLoading:!1,stretchWindow:!1,winHeight:0,enableSocialLogin:!1},e}return r(t,e),p(t,[{key:"componentDidMount",value:function(){var e=this;n.i(c.a)(function(t){var n=t.firebase;e.firebase=n,e.setState({enableSocialLogin:!0})}),window.dialogPolyfill&&(dialogPolyfill.registerDialog(this.nameDialog.base),dialogPolyfill.registerDialog(this.offlineDialog.base))}},{key:"login",value:function(){var e=this;if(this.setState({isLoading:!0}),navigator.onLine){var t=this.firebase,n=new t.auth.GoogleAuthProvider;t.auth().signInWithPopup(n).then(function(t){e.props.setUser({authToken:t.credential.idToken})}).catch(function(e){console.log("woops, cant get your profile!",e)})}else this.offlineDialog.showModal()}},{key:"sendGuestName",value:function(){var e=this.state.guestName;this.nameDialog.close(),e&&e.length>1&&(navigator.onLine?this.props.setUser({authToken:null,name:e}):this.offlineDialog.showModal())}},{key:"render",value:function(){var e=this;return n.i(a.h)("div",{className:"screen-splash",style:this.state.stretchWindow?"height:"+this.state.winHeight+"px":""},n.i(a.h)("div",{className:"logo-container"},n.i(a.h)("img",{src:"/images/logo.svg",className:"logo",alt:"guess logo"})),n.i(a.h)("div",{className:"loading"},this.state.isLoading||this.props.user.name?n.i(a.h)(s.Progress,{indeterminate:!0}):n.i(a.h)("div",null,n.i(a.h)("div",{className:"btn-google"},n.i(a.h)(s.Button,{raised:!0,onClick:this.login.bind(this),disabled:!this.state.enableSocialLogin},n.i(a.h)("div",null,"Sign in with Google"))),n.i(a.h)("div",{className:"btn-guest"},n.i(a.h)(s.Button,{raised:!0,onClick:function(){e.setState({winHeight:window.innerHeight,stretchWindow:!0},function(){e.nameDialog.showModal()})}},"Continue as guest")))),n.i(a.h)(s.Dialog,{ref:function(t){e.nameDialog=t}},n.i(a.h)(s.Dialog.Title,null,"Guest name"),n.i(a.h)(s.Dialog.Content,null,"Please let us know your name",n.i(a.h)(s.TextField,{maxlength:"20",ref:function(t){return e.nameField=t},onChange:function(t){e.setState({guestName:t.target.value})},value:this.state.guestName,onKeyUp:function(t){"Enter"===t.key&&(document.activeElement&&document.activeElement.blur(),e.sendGuestName())}})),n.i(a.h)(s.Dialog.Actions,null,n.i(a.h)(s.Button,{colored:!0,onClick:this.sendGuestName.bind(this)},"Done"),n.i(a.h)(s.Button,{onClick:function(){e.setState({winHeight:window.innerHeight,stretchWindow:!0},function(){e.nameDialog.close()})}},"Cancel"))),n.i(a.h)(s.Dialog,{ref:function(t){e.offlineDialog=t}},n.i(a.h)(s.Dialog.Title,null,"Offline!"),n.i(a.h)(s.Dialog.Content,null,"Woops, you need to be online for signing in."),n.i(a.h)(s.Dialog.Actions,null,n.i(a.h)(s.Button,{colored:!0,onClick:function(){e.offlineDialog.close()}},"Okay"))))}}]),t}(a.Component);t.a=h},141:function(e,t,n){t=e.exports=n(137)(),t.push([e.i,'.play-tiles,.preview-tiles{position:relative;text-align:center;width:100%;left:0;right:0;margin:40px auto}.play-tiles .tile,.preview-tiles .tile{position:relative;width:50%;float:left;padding:4px;will-change:transform opacity;-webkit-transition-duration:.3s;transition-duration:.3s;-webkit-transition-property:-webkit-transform opacity;transition-property:-webkit-transform opacity;transition-property:transform opacity;transition-property:transform opacity,-webkit-transform opacity}.play-tiles .pic,.preview-tiles .pic{border:4px solid #455a64;box-shadow:0 0 8px #111;border-radius:3px;width:100%;background-size:cover;background-position:50%}.play-tiles .level,.preview-tiles .level{position:absolute;left:0;right:0;bottom:0;top:0;margin:auto}.play-tiles .mdl-typography--title,.preview-tiles .mdl-typography--title{font-size:14px}.play-tiles:after,.preview-tiles:after{content:"";display:table;clear:both}.preview-tiles{max-width:300px}.preview-tiles .pic{height:15%}.play-tiles{max-width:400px;min-width:320px}.play-tiles .tile{width:50%}.play-tiles .pic{height:20%}.play-tiles .large.tile{z-index:2}.play-tiles .large.tile:first-child{-webkit-transform:translate3d(50%,50%,0) scale(1.8);transform:translate3d(50%,50%,0) scale(1.8)}.play-tiles .large.tile:nth-child(2){-webkit-transform:translate3d(-50%,50%,0) scale(1.8);transform:translate3d(-50%,50%,0) scale(1.8)}.play-tiles .large.tile:nth-child(3){-webkit-transform:translate3d(50%,-50%,0) scale(1.8);transform:translate3d(50%,-50%,0) scale(1.8)}.play-tiles .large.tile:nth-child(4){-webkit-transform:translate3d(-50%,-50%,0) scale(1.8);transform:translate3d(-50%,-50%,0) scale(1.8)}@media (min-width:800px){.preview-tiles .pic{height:110px}.play-tiles .pic{height:150px}}',""])},142:function(e,t,n){var i=n(141);"string"==typeof i&&(i=[[e.i,i,""]]);n(138)(i,{});i.locals&&(e.exports=i.locals)},149:function(e,t,n){t=e.exports=n(137)(),t.push([e.i,".screen-home,.screen-home .container-play{text-align:center;margin-top:-30px}.screen-home .container-play .mdl-button,.screen-home .mdl-button{font-size:24px;padding:8px;height:auto;width:200px}.screen-home .container-share{margin-top:20px}.screen-home .container-share .mdl-button{width:60px;height:60px;position:absolute;right:20px;bottom:20px;background:#009688}",""])},155:function(e,t,n){var i=n(149);"string"==typeof i&&(i=[[e.i,i,""]]);n(138)(i,{});i.locals&&(e.exports=i.locals)},54:function(e,t,n){"use strict";function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function r(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var a=n(0),s=(n.n(a),n(4)),l=(n.n(s),n(1)),c=(n.n(l),n(10)),u=(n.n(c),n(140)),p=n(5),h=n(9),d=n(139),f=n(155),g=(n.n(f),function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}()),m=function(e){function t(){return i(this,t),o(this,(t.__proto__||Object.getPrototypeOf(t)).call(this))}return r(t,e),g(t,[{key:"componentDidMount",value:function(){ga("send","pageview",location.pathname)}},{key:"componentDidUpdate",value:function(e,t){!e.userReducer.name&&this.props.userReducer.name&&this.props.wordReducer.words.length<25&&this.props.dispatch(p.g(this.props.wordReducer.lastWord||0)),!e.wordReducer.wordsLoaded&&this.props.wordReducer.wordsLoaded&&this.props.wordReducer.giveNotificateionHint&&this.props.dispatch({type:p.a})}},{key:"startPlay",value:function(){n.i(c.route)("/play")}},{key:"render",value:function(){var e=this;return this.props.wordReducer.wordsLoaded?n.i(a.h)("div",{className:"screen-home"},(0==this.props.wordReducer.words.length||!this.props.userReducer.name)&&n.i(a.h)(u.a,{showHome:this.showHome,user:this.props.userReducer,setUser:function(t){t.authToken?e.props.dispatch(h.b({authToken:t.authToken})):e.props.dispatch(h.b({name:t.name}))}}),n.i(a.h)("div",null,n.i(a.h)(d.a,{images:this.props.wordReducer.words[0]&&this.props.wordReducer.words[0].images,level:this.props.userReducer.level,mode:"preview"})),n.i(a.h)("div",{className:"container-play"},n.i(a.h)(l.Button,{accent:!0,raised:!0,onCLick:this.startPlay.bind(this)},"Play")),navigator.share&&n.i(a.h)("div",{className:"container-share"},n.i(a.h)(l.Button,{fab:!0,colored:!0,raised:!0,onCLick:function(){ga("send","event","Engagement","Share","Share Initiated"),navigator.share({title:document.title,text:"Let play this awesome game- Guess",url:"https://playguess.herokuapp.com/"}).then(function(){ga("send","event","Engagement","Share","Share Done")}).catch(function(e){ga("send","event","Engagement","Share","Share Errored")})}},n.i(a.h)(l.Icon,{icon:"share"})))):null}}]),t}(a.Component);t.default=n.i(s.connect)(function(e){return{wordReducer:e.wordReducer,userReducer:e.userReducer}})(m)}});