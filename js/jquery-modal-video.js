!function r(a,l,u){function d(n,e){if(!l[n]){if(!a[n]){var t="function"==typeof require&&require;if(!e&&t)return t(n,!0);if(s)return s(n,!0);var o=new Error("Cannot find module '"+n+"'");throw o.code="MODULE_NOT_FOUND",o}var i=l[n]={exports:{}};a[n][0].call(i.exports,function(e){var t=a[n][1][e];return d(t||e)},i,i.exports,r,a,l,u)}return l[n].exports}for(var s="function"==typeof require&&require,e=0;e<u.length;e++)d(u[e]);return d}({1:[function(e,t,n){try{var o=new window.CustomEvent("test");if(o.preventDefault(),!0!==o.defaultPrevented)throw new Error("Could not prevent default")}catch(e){var i=function(e,t){var n,o;return t=t||{bubbles:!1,cancelable:!1,detail:void 0},(n=document.createEvent("CustomEvent")).initCustomEvent(e,t.bubbles,t.cancelable,t.detail),o=n.preventDefault,n.preventDefault=function(){o.call(this);try{Object.defineProperty(this,"defaultPrevented",{get:function(){return!0}})}catch(e){this.defaultPrevented=!0}},n};i.prototype=window.Event.prototype,window.CustomEvent=i}},{}],2:[function(e,t,n){"use strict";function o(e,t){if(null==e)throw new TypeError("Cannot convert first argument to object");for(var n=Object(e),o=1;o<arguments.length;o++){var i=arguments[o];if(null!=i)for(var r=Object.keys(Object(i)),a=0,l=r.length;a<l;a++){var u=r[a],d=Object.getOwnPropertyDescriptor(i,u);void 0!==d&&d.enumerable&&(n[u]=i[u])}}return n}t.exports={assign:o,polyfill:function(){Object.assign||Object.defineProperty(Object,"assign",{enumerable:!1,configurable:!0,writable:!0,value:o})}}},{}],3:[function(e,t,n){"use strict";var o=e("../index"),i=function(e){e.fn.modalVideo=function(e){return"strings"==typeof e||new o(this,e),this}};if("function"==typeof define&&define.amd)define(["jquery"],i);else{var r=window.jQuery?window.jQuery:window.$;void 0!==r&&i(r)}t.exports=i},{"../index":5}],4:[function(e,t,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var i=function(){function o(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(e,t,n){return t&&o(e.prototype,t),n&&o(e,n),e}}();e("custom-event-polyfill");var m=e("../lib/util");var r=e("es6-object-assign").assign,a={channel:"youtube",facebook:{},youtube:{autoplay:1,cc_load_policy:1,color:null,controls:1,disablekb:0,enablejsapi:0,end:null,fs:1,h1:null,iv_load_policy:1,list:null,listType:null,loop:0,modestbranding:null,origin:null,playlist:null,playsinline:null,rel:0,showinfo:1,start:0,wmode:"transparent",theme:"dark",nocookie:!1},ratio:"16:9",vimeo:{api:!1,autopause:!0,autoplay:!0,byline:!0,callback:null,color:null,height:null,loop:!1,maxheight:null,maxwidth:null,player_id:null,portrait:!0,title:!0,width:null,xhtml:!1},allowFullScreen:!0,animationSpeed:300,classNames:{modalVideo:"modal-video",modalVideoClose:"modal-video-close",modalVideoBody:"modal-video-body",modalVideoInner:"modal-video-inner",modalVideoIframeWrap:"modal-video-movie-wrap",modalVideoCloseBtn:"modal-video-close-btn"},aria:{openMessage:"You just openned the modal video",dismissBtnMessage:"Close the modal by clicking here"}},o=function(){function o(e,t){var d=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,o);var s=r({},a,t),n="string"==typeof e?document.querySelectorAll(e):e,c=document.querySelector("body"),f=s.classNames,v=s.animationSpeed;[].forEach.call(n,function(u){u.addEventListener("click",function(e){"A"===u.tagName&&e.preventDefault();var t=u.dataset.videoId,n=u.dataset.channel||s.channel,o=(0,m.getUniqId)(),i=u.dataset.videoUrl||d.getVideoUrl(s,n,t),r=d.getHtml(s,i,o);(0,m.append)(c,r);var a=document.getElementById(o),l=a.querySelector(".js-modal-video-dismiss-btn");a.focus(),a.addEventListener("click",function(){(0,m.addClass)(a,f.modalVideoClose),setTimeout(function(){(0,m.remove)(a),u.focus()},v)}),a.addEventListener("keydown",function(e){9===e.which&&(e.preventDefault(),document.activeElement===a?l.focus():(a.setAttribute("aria-label",""),a.focus()))}),l.addEventListener("click",function(){(0,m.triggerEvent)(a,"click")})})})}return i(o,[{key:"getPadding",value:function(e){var t=e.split(":"),n=Number(t[0]);return 100*Number(t[1])/n+"%"}},{key:"getQueryString",value:function(t){var n="";return Object.keys(t).forEach(function(e){n+=e+"="+t[e]+"&"}),n.substr(0,n.length-1)}},{key:"getVideoUrl",value:function(e,t,n){return"youtube"===t?this.getYoutubeUrl(e.youtube,n):"vimeo"===t?this.getVimeoUrl(e.vimeo,n):"facebook"===t?this.getFacebookUrl(e.facebook,n):""}},{key:"getVimeoUrl",value:function(e,t){return"//player.vimeo.com/video/"+t+"?"+this.getQueryString(e)}},{key:"getYoutubeUrl",value:function(e,t){var n=this.getQueryString(e);return!0===e.nocookie?"https://www.youtube-nocookie.com/embed/"+t+"?"+n:"https://www.youtube.com/embed/"+t+"?"+n}},{key:"getFacebookUrl",value:function(e,t){return"https://www.facebook.com/v2.10/plugins/video.php?href=https://www.facebook.com/facebook/videos/"+t+"&"+this.getQueryString(e)}},{key:"getHtml",value:function(e,t,n){var o=this.getPadding(e.ratio),i=e.classNames;return'\n      <div class="'+i.modalVideo+'" tabindex="-1" role="dialog" aria-label="'+e.aria.openMessage+'" id="'+n+'">\n        <div class="'+i.modalVideoBody+'">\n          <div class="'+i.modalVideoInner+'">\n            <div class="'+i.modalVideoIframeWrap+'" style="padding-bottom:'+o+'">\n              <button class="'+i.modalVideoCloseBtn+' js-modal-video-dismiss-btn" aria-label="'+e.aria.dismissBtnMessage+"\"></button>\n              <iframe width='460' height='230' src=\""+t+"\" frameborder='0' allowfullscreen="+e.allowFullScreen+' tabindex="-1"/>\n            </div>\n          </div>\n        </div>\n      </div>\n    '}}]),o}();n.default=o,t.exports=n.default},{"../lib/util":6,"custom-event-polyfill":1,"es6-object-assign":2}],5:[function(e,t,n){"use strict";t.exports=e("./core/")},{"./core/":4}],6:[function(e,t,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0});n.append=function(e,t){var n=document.createElement("div");for(n.innerHTML=t;0<n.children.length;)e.appendChild(n.children[0])},n.getUniqId=function(){return(Date.now().toString(36)+Math.random().toString(36).substr(2,5)).toUpperCase()},n.remove=function(e){e&&e.parentNode&&e.parentNode.removeChild(e)},n.addClass=function(e,t){e.classList?e.classList.add(t):e.className+=" "+t},n.triggerEvent=function(e,t,n){var o=void 0;window.CustomEvent?o=new CustomEvent(t,{cancelable:!0}):(o=document.createEvent("CustomEvent")).initCustomEvent(t,!1,!1,n),e.dispatchEvent(o)}},{}]},{},[3]);