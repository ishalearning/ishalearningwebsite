var JQuerySlider_init = {
   "align":"left",
   "auto":true,
   "hideOnMouseOut":true,
   "vertical":false,
   "ease":"linear",
   "continuous":true,
   "loop":true,
   "sliderEffect":"slide",
   "speed":"1000",
   "fadeDuration":"1000",
   "pause":"1000",
   "stopAtInteraction":"false",
   "delay":"3000",
   "innernavbaritem.spacing":"0px",
   "innernumbers.spacing":"0px",
   
   "innerbutton.back.opacity":1,
   "innerbutton.back.hideOnMouseOut":false,
   "innerbutton.back.mouseOutEffect":"fadeIn",
   "innerbutton.back.mouseOutEffectDuration":"1000",
   "innerbutton.back.mouseOutEffectEasing":"linear",
   
   
   "innerbutton.back.halign":"left",
   "innerbutton.back.valign":"middle",
   "innerbutton.back.left":"10px",
   "innerbutton.back.top":"0px",
   
   "innerbutton.next.opacity":1,
   "innerbutton.next.hideOnMouseOut":false,
   "innerbutton.next.mouseOutEffect":"fadeIn",
   "innerbutton.next.mouseOutEffectDuration":"1000",
   "innerbutton.next.mouseOutEffectEasing":"linear",
   
   
   "innerbutton.next.halign":"left",
   "innerbutton.next.valign":"top",
   "innerbutton.next.left":"0px",
   "innerbutton.next.top":"0px",
   
   "innerplaypause.opacity":1,
   "innerplaypause.hideOnMouseOut":false,
   "innerplaypause.mouseOutEffect":"fadeIn",
   "innerplaypause.mouseOutEffectDuration":"1000",
   "innerplaypause.mouseOutEffectEasing":"linear",
    
   "innerplaypause.halign":"left",
   "innerplaypause.valign":"top",
   "innerplaypause.left":"0px",
   "innerplaypause.top":"0px",
   
   
   "innernavbar.hideOnMouseOut":false,
   "innernavbar.mouseOutEffect":"fadeIn",
   "innernavbar.mouseOutEffectDuration":"1000",
   "innernavbar.mouseOutEffectEasing":"linear",
   
   "innernavbar.halign":"left",
   "innernavbar.valign":"top",
   "innernavbar.left":"0px",
   "innernavbar.top":"0px",
   "innernavbaritem.orientation":"horizontal",
 
   "innerbullets.valign":"middle",
   "innerbullets.halign":"left",
   "innerbullets.left":"40px",
   "innerbullets.hideOnMouseOut":false,
   "innerbullets.mouseOutEffect":"fadeIn",
   "innerbullets.mouseOutEffectEasing":"linear",
   "innerbullets.mouseOutEffectDuration":"1000",
   "innerbulletsitem.orientation":"horizontal",
   
   "innernumbers.valign":"middle",
   "innernumbers.halign":"left",
   "innernumbers.left":"40px",
   "innernumbers.hideOnMouseOut":false,
   "innernumbers.mouseOutEffect":"fadeIn",
   "innernumbers.mouseOutEffectEasing":"linear",
   "innernumbers.mouseOutEffectDuration":"1000",
   "innernumbersitem.orientation":"horizontal",
   
   "innerpagination.valign":"top",
   "innerpagination.halign":"left",
   "innerpagination.left":"0px",
   "innerpagination.top":"0px",
   
   "content_paragraph.opacity": "1",
   "content_subheader.opacity": "1",
   "content_header.opacity": "1",
   
   "shuffle":false,
   "lazy":false,
   "touch":false,
   "pauseOnHover":false,
   "innerslider.minWidth":1100,
   
   "innernavbar.scrollerType" : "noScroll"
};

var jQuerySlider;
var jsonObj;
var ulCopy;

var XTDConsole = function() {
   var hasConsole = (console && console.log && typeof console.log === 'function');
   if(hasConsole) {
      return { 
         log : function() {
            console.log.apply(console,arguments);
         },
         error : function() {
            console.error.apply(console,arguments);
         },
         time : function() {
            console.time.apply(console,arguments);
         },
         timeEnd : function() {
            console.timeEnd.apply(console,arguments);
         }
      }
   } else {
      return { 
         log : function() {},
         error : function() {},
         time : function() {},
         timeEnd : function() {}
      }
   }
}

var xtdConsole;
try {
   xtdConsole = new XTDConsole();   
} catch(e) {

}



/*!
* Velocity.js: Accelerated JavaScript animation.
* @version 0.0.22
* @docs http://velocityjs.org
* @license Copyright 2014 Julian Shapiro. MIT License: http://en.wikipedia.org/wiki/MIT_License
*/
!function(a,b,c,d){function e(a){for(var b=-1,c=a?a.length:0,d=[];++b<c;){var e=a[b];e&&d.push(e)}return d}function f(a){return"[object Function]"===Object.prototype.toString.call(a)}function g(a){var b=Object.prototype.toString.call(a);return"object"==typeof a&&/^\[object (HTMLCollection|NodeList|Object)\]$/.test(b)&&a.length!==d&&(0===a.length||"object"==typeof a[0]&&a[0].nodeType>0)}function h(a){return a&&(a.jquery||b.Zepto&&b.Zepto.zepto.isZ(a))}function i(a,b){var c=a;return q(a)?t.Easings[a]||(c=!1):c=r(a)&&2===a.length?v.apply(null,a.concat([b])):r(a)&&4===a.length?u.apply(null,a):!1,c===!1&&(c=t.Easings[t.defaults.easing]?t.defaults.easing:n),c}function j(a){if(a)for(var b=(new Date).getTime(),c=0,e=t.State.calls.length;e>c;c++)if(t.State.calls[c]){var f=t.State.calls[c],g=f[0],h=f[2],i=f[3];i||(i=t.State.calls[c][3]=b-16);for(var m=Math.min((b-i)/h.duration,1),n=0,o=g.length;o>n;n++){var r=g[n],u=r.element;if(s.data(u,l)){var v=!1;h.display&&"none"!==h.display&&w.setPropertyValue(u,"display",h.display);for(var x in r)if("element"!==x){var y,z=r[x],A=q(z.easing)?t.Easings[z.easing]:z.easing;if(y=1===m?z.endValue:z.startValue+(z.endValue-z.startValue)*A(m),z.currentValue=y,w.Hooks.registered[x]){var B=w.Hooks.getRoot(x),C=s.data(u,l).rootPropertyValueCache[B];C&&(z.rootPropertyValue=C)}var D=w.setPropertyValue(u,x,z.currentValue+(0===parseFloat(y)?"":z.unitType),z.rootPropertyValue,z.scrollData);w.Hooks.registered[x]&&(s.data(u,l).rootPropertyValueCache[B]=w.Normalizations.registered[B]?w.Normalizations.registered[B]("extract",null,D[1]):D[1]),"transform"===D[0]&&(v=!0)}h.mobileHA&&s.data(u,l).transformCache.translate3d===d&&(s.data(u,l).transformCache.translate3d="(0px, 0px, 0px)",v=!0),v&&w.flushTransformCache(u)}}h.display&&"none"!==h.display&&(t.State.calls[c][2].display=!1),h.progress&&h.progress.call(f[1],f[1],m,Math.max(0,i+h.duration-b),i),1===m&&k(c)}t.State.isTicking&&p(j)}function k(a){for(var b=t.State.calls[a][0],c=t.State.calls[a][1],e=t.State.calls[a][2],f=!1,g=0,h=b.length;h>g;g++){var i=b[g].element;if("none"!==e.display||e.loop||w.setPropertyValue(i,"display",e.display),(s.queue(i)[1]===d||!/\.velocityQueueEntryFlag/i.test(s.queue(i)[1]))&&s.data(i,l)){s.data(i,l).isAnimating=!1,s.data(i,l).rootPropertyValueCache={};var j,k=["transformPerspective","translateZ","rotateX","rotateY"],m=!1;for(var n in k)j=k[n],/^\(0[^.]/.test(s.data(i,l).transformCache[j])&&(m=!0,delete s.data(i,l).transformCache[j]);e.mobileHA&&(m=!0,delete s.data(i,l).transformCache.translate3d),m&&w.flushTransformCache(i)}e.complete&&!e.loop&&g===h-1&&e.complete.call(c,c),e.queue!==!1&&s.dequeue(i,e.queue)}t.State.calls[a]=!1;for(var o=0,p=t.State.calls.length;p>o;o++)if(t.State.calls[o]!==!1){f=!0;break}f===!1&&(t.State.isTicking=!1,delete t.State.calls,t.State.calls=[])}var l="velocity",m=400,n="swing",o=function(){if(c.documentMode)return c.documentMode;for(var a=7;a>4;a--){var b=c.createElement("div");if(b.innerHTML="<!--[if IE "+a+"]><span></span><![endif]-->",b.getElementsByTagName("span").length)return b=null,a}return d}(),p=b.requestAnimationFrame||function(){var a=0;return b.webkitRequestAnimationFrame||b.mozRequestAnimationFrame||function(b){var c,d=(new Date).getTime();return c=Math.max(0,16-(d-a)),a=d+c,setTimeout(function(){b(d+c)},c)}}(),q=function(a){return"string"==typeof a},r=Array.isArray||function(a){return"[object Array]"===Object.prototype.toString.call(a)},s=b.xtd_jQuery||a.Velocity&&a.Velocity.Utilities;if(!s)throw new Error("Velocity: Either jQuery or Velocity's jQuery shim must first be loaded.");if(a.Velocity!==d&&!a.Velocity.Utilities)throw new Error("Velocity: Namespace is occupied.");if(7>=o){if(b.xtd_jQuery)return void(b.xtd_jQuery.fn.velocity=b.xtd_jQuery.fn.animate);throw new Error("Velocity: For IE<=7, Velocity falls back to jQuery, which must first be loaded.")}if(8===o&&!b.xtd_jQuery)throw new Error("Velocity: For IE8, Velocity requires jQuery to be loaded. (Velocity's jQuery shim does not work with IE8.)");var t=a.Velocity=a.velocity={State:{isMobile:/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),isAndroid:/Android/i.test(navigator.userAgent),isGingerbread:/Android 2\.3\.[3-7]/i.test(navigator.userAgent),prefixElement:c.createElement("div"),prefixMatches:{},scrollAnchor:null,scrollPropertyLeft:null,scrollPropertyTop:null,isTicking:!1,calls:[]},CSS:{},Utilities:b.jQuery?{}:s,Sequences:{},Easings:{},defaults:{queue:"",duration:m,easing:n,begin:null,complete:null,progress:null,display:null,loop:!1,delay:!1,mobileHA:!0,_cacheValues:!0},animate:function(){},debug:!1};b.pageYOffset!==d?(t.State.scrollAnchor=b,t.State.scrollPropertyLeft="pageXOffset",t.State.scrollPropertyTop="pageYOffset"):(t.State.scrollAnchor=c.documentElement||c.body.parentNode||c.body,t.State.scrollPropertyLeft="scrollLeft",t.State.scrollPropertyTop="scrollTop");var u=function(){function a(a,b){return 1-3*b+3*a}function b(a,b){return 3*b-6*a}function c(a){return 3*a}function d(d,e,f){return((a(e,f)*d+b(e,f))*d+c(e))*d}function e(d,e,f){return 3*a(e,f)*d*d+2*b(e,f)*d+c(e)}return function(a,b,c,f){function g(b){for(var f=b,g=0;8>g;++g){var h=e(f,a,c);if(0===h)return f;var i=d(f,a,c)-b;f-=i/h}return f}if(4!==arguments.length)return!1;for(var h=0;4>h;++h)if("number"!=typeof arguments[h]||isNaN(arguments[h])||!isFinite(arguments[h]))return!1;return a=Math.min(a,1),c=Math.min(c,1),a=Math.max(a,0),c=Math.max(c,0),function(e){return a===b&&c===f?e:d(g(e),b,f)}}}(),v=function(){function a(a){return-a.tension*a.x-a.friction*a.v}function b(b,c,d){var e={x:b.x+d.dx*c,v:b.v+d.dv*c,tension:b.tension,friction:b.friction};return{dx:e.v,dv:a(e)}}function c(c,d){var e={dx:c.v,dv:a(c)},f=b(c,.5*d,e),g=b(c,.5*d,f),h=b(c,d,g),i=1/6*(e.dx+2*(f.dx+g.dx)+h.dx),j=1/6*(e.dv+2*(f.dv+g.dv)+h.dv);return c.x=c.x+i*d,c.v=c.v+j*d,c}return function d(a,b,e){var f,g,h,i={x:-1,v:0,tension:null,friction:null},j=[0],k=0,l=1e-4,m=.016;for(a=parseFloat(a)||600,b=parseFloat(b)||20,e=e||null,i.tension=a,i.friction=b,f=null!==e,f?(k=d(a,b),g=k/e*m):g=m;;)if(h=c(h||i,g),j.push(1+h.x),k+=16,!(Math.abs(h.x)>l&&Math.abs(h.v)>l))break;return f?function(a){return j[a*(j.length-1)|0]}:k}}();!function(){t.Easings.linear=function(a){return a},t.Easings.swing=function(a){return.5-Math.cos(a*Math.PI)/2},t.Easings.ease=u(.25,.1,.25,1),t.Easings["ease-in"]=u(.42,0,1,1),t.Easings["ease-out"]=u(0,0,.58,1),t.Easings["ease-in-out"]=u(.42,0,.58,1);var a={};s.each(["Quad","Cubic","Quart","Quint","Expo"],function(b,c){a[c]=function(a){return Math.pow(a,b+2)}}),s.extend(a,{Sine:function(a){return 1-Math.cos(a*Math.PI/2)},Circ:function(a){return 1-Math.sqrt(1-a*a)},Elastic:function(a){return 0===a||1===a?a:-Math.pow(2,8*(a-1))*Math.sin((80*(a-1)-7.5)*Math.PI/15)},Back:function(a){return a*a*(3*a-2)},Bounce:function(a){for(var b,c=4;a<((b=Math.pow(2,--c))-1)/11;);return 1/Math.pow(4,3-c)-7.5625*Math.pow((3*b-2)/22-a,2)}}),s.each(a,function(a,b){t.Easings["easeIn"+a]=b,t.Easings["easeOut"+a]=function(a){return 1-b(1-a)},t.Easings["easeInOut"+a]=function(a){return.5>a?b(2*a)/2:1-b(-2*a+2)/2}}),t.Easings.spring=function(a){return 1-Math.cos(4.5*a*Math.PI)*Math.exp(6*-a)}}();var w=t.CSS={RegEx:{valueUnwrap:/^[A-z]+\((.*)\)$/i,wrappedValueAlreadyExtracted:/[0-9.]+ [0-9.]+ [0-9.]+( [0-9.]+)?/,valueSplit:/([A-z]+\(.+\))|(([A-z0-9#-.]+?)(?=\s|$))/gi},Hooks:{templates:{color:["Red Green Blue Alpha","255 255 255 1"],backgroundColor:["Red Green Blue Alpha","255 255 255 1"],borderColor:["Red Green Blue Alpha","255 255 255 1"],borderTopColor:["Red Green Blue Alpha","255 255 255 1"],borderRightColor:["Red Green Blue Alpha","255 255 255 1"],borderBottomColor:["Red Green Blue Alpha","255 255 255 1"],borderLeftColor:["Red Green Blue Alpha","255 255 255 1"],outlineColor:["Red Green Blue Alpha","255 255 255 1"],textShadow:["Color X Y Blur","black 0px 0px 0px"],boxShadow:["Color X Y Blur Spread","black 0px 0px 0px 0px"],clip:["Top Right Bottom Left","0px 0px 0px 0px"],backgroundPosition:["X Y","0% 0%"],transformOrigin:["X Y Z","50% 50% 0%"],perspectiveOrigin:["X Y","50% 50%"]},registered:{},register:function(){var a,b,c;if(o)for(a in w.Hooks.templates){b=w.Hooks.templates[a],c=b[0].split(" ");var d=b[1].match(w.RegEx.valueSplit);"Color"===c[0]&&(c.push(c.shift()),d.push(d.shift()),w.Hooks.templates[a]=[c.join(" "),d.join(" ")])}for(a in w.Hooks.templates){b=w.Hooks.templates[a],c=b[0].split(" ");for(var e in c){var f=a+c[e],g=e;w.Hooks.registered[f]=[a,g]}}},getRoot:function(a){var b=w.Hooks.registered[a];return b?b[0]:a},cleanRootPropertyValue:function(a,b){return w.RegEx.valueUnwrap.test(b)&&(b=b.match(w.Hooks.RegEx.valueUnwrap)[1]),w.Values.isCSSNullValue(b)&&(b=w.Hooks.templates[a][1]),b},extractValue:function(a,b){var c=w.Hooks.registered[a];if(c){var d=c[0],e=c[1];return b=w.Hooks.cleanRootPropertyValue(d,b),b.toString().match(w.RegEx.valueSplit)[e]}return b},injectValue:function(a,b,c){var d=w.Hooks.registered[a];if(d){var e,f,g=d[0],h=d[1];return c=w.Hooks.cleanRootPropertyValue(g,c),e=c.toString().match(w.RegEx.valueSplit),e[h]=b,f=e.join(" ")}return c}},Normalizations:{registered:{clip:function(a,b,c){switch(a){case"name":return"clip";case"extract":var d;return w.RegEx.wrappedValueAlreadyExtracted.test(c)?d=c:(d=c.toString().match(w.RegEx.valueUnwrap),d=d?d[1].replace(/,(\s+)?/g," "):c),d;case"inject":return"rect("+c+")"}},opacity:function(a,b,c){if(8>=o)switch(a){case"name":return"filter";case"extract":var d=c.toString().match(/alpha\(opacity=(.*)\)/i);return c=d?d[1]/100:1;case"inject":return b.style.zoom=1,parseFloat(c)>=1?"":"alpha(opacity="+parseInt(100*parseFloat(c),10)+")"}else switch(a){case"name":return"opacity";case"extract":return c;case"inject":return c}}},register:function(){function a(a){var b,c=/^#?([a-f\d])([a-f\d])([a-f\d])$/i,d=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i;return a=a.replace(c,function(a,b,c,d){return b+b+c+c+d+d}),b=d.exec(a),b?"rgb("+(parseInt(b[1],16)+" "+parseInt(b[2],16)+" "+parseInt(b[3],16))+")":"rgb(0 0 0)"}var b=["translateX","translateY","scale","scaleX","scaleY","skewX","skewY","rotateZ"];9>=o||t.State.isGingerbread||(b=b.concat(["transformPerspective","translateZ","scaleZ","rotateX","rotateY"]));for(var c=0,e=b.length;e>c;c++)!function(){var a=b[c];w.Normalizations.registered[a]=function(b,c,e){switch(b){case"name":return"transform";case"extract":return s.data(c,l).transformCache[a]===d?/^scale/i.test(a)?1:0:s.data(c,l).transformCache[a].replace(/[()]/g,"");case"inject":var f=!1;switch(a.substr(0,a.length-1)){case"translate":f=!/(%|px|em|rem|\d)$/i.test(e);break;case"scal":case"scale":t.State.isAndroid&&s.data(c,l).transformCache[a]===d&&(e=1),f=!/(\d)$/i.test(e);break;case"skew":f=!/(deg|\d)$/i.test(e);break;case"rotate":f=!/(deg|\d)$/i.test(e)}return f||(s.data(c,l).transformCache[a]="("+e+")"),s.data(c,l).transformCache[a]}}}();for(var f=["color","backgroundColor","borderColor","borderTopColor","borderRightColor","borderBottomColor","borderLeftColor","outlineColor"],c=0,g=f.length;g>c;c++)!function(){var b=f[c];w.Normalizations.registered[b]=function(c,e,f){switch(c){case"name":return b;case"extract":var g;if(w.RegEx.wrappedValueAlreadyExtracted.test(f))g=f;else{var h,i={aqua:"rgb(0, 255, 255);",black:"rgb(0, 0, 0)",blue:"rgb(0, 0, 255)",fuchsia:"rgb(255, 0, 255)",gray:"rgb(128, 128, 128)",green:"rgb(0, 128, 0)",lime:"rgb(0, 255, 0)",maroon:"rgb(128, 0, 0)",navy:"rgb(0, 0, 128)",olive:"rgb(128, 128, 0)",purple:"rgb(128, 0, 128)",red:"rgb(255, 0, 0)",silver:"rgb(192, 192, 192)",teal:"rgb(0, 128, 128)",white:"rgb(255, 255, 255)",yellow:"rgb(255, 255, 0)"};/^[A-z]+$/i.test(f)?h=i[f]!==d?i[f]:i.black:/^#([A-f\d]{3}){1,2}$/i.test(f)?h=a(f):/^rgba?\(/i.test(f)||(h=i.black),g=(h||f).toString().match(w.RegEx.valueUnwrap)[1].replace(/,(\s+)?/g," ")}return 8>=o||3!==g.split(" ").length||(g+=" 1"),g;case"inject":return 8>=o?4===f.split(" ").length&&(f=f.split(/\s+/).slice(0,3).join(" ")):3===f.split(" ").length&&(f+=" 1"),(8>=o?"rgb":"rgba")+"("+f.replace(/\s+/g,",").replace(/\.(\d)+(?=,)/g,"")+")"}}}()}},Names:{camelCase:function(a){return a.replace(/-(\w)/g,function(a,b){return b.toUpperCase()})},prefixCheck:function(a){if(t.State.prefixMatches[a])return[t.State.prefixMatches[a],!0];for(var b=["","Webkit","Moz","ms","O"],c=0,d=b.length;d>c;c++){var e;if(e=0===c?a:b[c]+a.replace(/^\w/,function(a){return a.toUpperCase()}),q(t.State.prefixElement.style[e]))return t.State.prefixMatches[a]=e,[e,!0]}return[a,!1]}},Values:{isCSSNullValue:function(a){return 0==a||/^(none|auto|transparent|(rgba\(0, ?0, ?0, ?0\)))$/i.test(a)},getUnitType:function(a){return/^(rotate|skew)/i.test(a)?"deg":/(^(scale|scaleX|scaleY|scaleZ|opacity|alpha|fillOpacity|flexGrow|flexHeight|zIndex|fontWeight)$)|color/i.test(a)?"":"px"},getDisplayType:function(a){var b=a.tagName.toString().toLowerCase();return/^(b|big|i|small|tt|abbr|acronym|cite|code|dfn|em|kbd|strong|samp|var|a|bdo|br|img|map|object|q|script|span|sub|sup|button|input|label|select|textarea)$/i.test(b)?"inline":/^(li)$/i.test(b)?"list-item":/^(tr)$/i.test(b)?"table-row":"block"}},getPropertyValue:function(a,c,e,f){function g(a,c){var e=0;if(8>=o)e=s.css(a,c);else{if(!f){if("height"===c&&"border-box"!==w.getPropertyValue(a,"boxSizing").toString().toLowerCase())return a.offsetHeight-(parseFloat(w.getPropertyValue(a,"borderTopWidth"))||0)-(parseFloat(w.getPropertyValue(a,"borderBottomWidth"))||0)-(parseFloat(w.getPropertyValue(a,"paddingTop"))||0)-(parseFloat(w.getPropertyValue(a,"paddingBottom"))||0);if("width"===c&&"border-box"!==w.getPropertyValue(a,"boxSizing").toString().toLowerCase())return a.offsetWidth-(parseFloat(w.getPropertyValue(a,"borderLeftWidth"))||0)-(parseFloat(w.getPropertyValue(a,"borderRightWidth"))||0)-(parseFloat(w.getPropertyValue(a,"paddingLeft"))||0)-(parseFloat(w.getPropertyValue(a,"paddingRight"))||0)}var h;h=s.data(a,l)===d?b.getComputedStyle(a,null):s.data(a,l).computedStyle?s.data(a,l).computedStyle:s.data(a,l).computedStyle=b.getComputedStyle(a,null),o&&"borderColor"===c&&(c="borderTopColor"),e=9===o&&"filter"===c?h.getPropertyValue(c):h[c],(""===e||null===e)&&(e=a.style[c])}if("auto"===e&&/^(top|right|bottom|left)$/i.test(c)){var i=g(a,"position");("fixed"===i||"absolute"===i&&/top|left/i.test(c))&&(e=s(a).position()[c]+"px")}return e}var h;if(w.Hooks.registered[c]){var i=c,j=w.Hooks.getRoot(i);e===d&&(e=w.getPropertyValue(a,w.Names.prefixCheck(j)[0])),w.Normalizations.registered[j]&&(e=w.Normalizations.registered[j]("extract",a,e)),h=w.Hooks.extractValue(i,e)}else if(w.Normalizations.registered[c]){var k,m;k=w.Normalizations.registered[c]("name",a),"transform"!==k&&(m=g(a,w.Names.prefixCheck(k)[0]),w.Values.isCSSNullValue(m)&&w.Hooks.templates[c]&&(m=w.Hooks.templates[c][1])),h=w.Normalizations.registered[c]("extract",a,m)}return/^[\d-]/.test(h)||(h=g(a,w.Names.prefixCheck(c)[0])),w.Values.isCSSNullValue(h)&&(h=0),t.debug>=2&&console.log("Get "+c+": "+h),h},setPropertyValue:function(a,c,d,e,f){var g=c;if("scroll"===c)f.container?f.container["scroll"+f.direction]=d:"Left"===f.direction?b.scrollTo(d,f.alternateValue):b.scrollTo(f.alternateValue,d);else if(w.Normalizations.registered[c]&&"transform"===w.Normalizations.registered[c]("name",a))w.Normalizations.registered[c]("inject",a,d),g="transform",d=s.data(a,l).transformCache[c];else{if(w.Hooks.registered[c]){var h=c,i=w.Hooks.getRoot(c);e=e||w.getPropertyValue(a,i),d=w.Hooks.injectValue(h,d,e),c=i}if(w.Normalizations.registered[c]&&(d=w.Normalizations.registered[c]("inject",a,d),c=w.Normalizations.registered[c]("name",a)),g=w.Names.prefixCheck(c)[0],8>=o)try{a.style[g]=d}catch(j){console.log("Error setting ["+g+"] to ["+d+"]")}else a.style[g]=d;t.debug>=2&&console.log("Set "+c+" ("+g+"): "+d)}return[g,d]},flushTransformCache:function(a){var b,c,d,e="";for(b in s.data(a,l).transformCache)c=s.data(a,l).transformCache[b],"transformPerspective"!==b?(9===o&&"rotateZ"===b&&(b="rotate"),e+=b+c+" "):d=c;d&&(e="perspective"+d+" "+e),w.setPropertyValue(a,"transform",e)}};w.Hooks.register(),w.Normalizations.register(),t.animate=function(){function a(){function a(){function a(a){var c=d,e=d,h=d;return r(a)?(c=a[0],!r(a[1])&&/^[\d-]/.test(a[1])||f(a[1])?h=a[1]:(q(a[1])||r(a[1]))&&(e=i(a[1],g.duration),a[2]&&(h=a[2]))):c=a,e=e||g.easing,f(c)&&(c=c.call(b,y,x)),f(h)&&(h=h.call(b,y,x)),[c||0,e,h]}function k(a,b){var c,d;return d=(b||0).toString().toLowerCase().replace(/[%A-z]+$/,function(a){return c=a,""}),c||(c=w.Values.getUnitType(a)),[d,c]}function m(){var a={parent:b.parentNode,position:w.getPropertyValue(b,"position"),fontSize:w.getPropertyValue(b,"fontSize")},d=a.position===E.lastPosition&&a.parent===E.lastParent,e=a.fontSize===E.lastFontSize&&a.parent===E.lastParent;E.lastParent=a.parent,E.lastPosition=a.position,E.lastFontSize=a.fontSize,null===E.remToPxRatio&&(E.remToPxRatio=parseFloat(w.getPropertyValue(c.body,"fontSize"))||16);var f={overflowX:null,overflowY:null,boxSizing:null,width:null,minWidth:null,maxWidth:null,height:null,minHeight:null,maxHeight:null,paddingLeft:null},g={},h=10;if(g.remToPxRatio=E.remToPxRatio,o)var i=/^auto$/i.test(b.currentStyle.width),j=/^auto$/i.test(b.currentStyle.height);d&&e||(f.overflowX=w.getPropertyValue(b,"overflowX"),f.overflowY=w.getPropertyValue(b,"overflowY"),f.boxSizing=w.getPropertyValue(b,"boxSizing"),f.width=w.getPropertyValue(b,"width",null,!0),f.minWidth=w.getPropertyValue(b,"minWidth"),f.maxWidth=w.getPropertyValue(b,"maxWidth")||"none",f.height=w.getPropertyValue(b,"height",null,!0),f.minHeight=w.getPropertyValue(b,"minHeight"),f.maxHeight=w.getPropertyValue(b,"maxHeight")||"none",f.paddingLeft=w.getPropertyValue(b,"paddingLeft")),d?(g.percentToPxRatioWidth=E.lastPercentToPxWidth,g.percentToPxRatioHeight=E.lastPercentToPxHeight):(w.setPropertyValue(b,"overflowX","hidden"),w.setPropertyValue(b,"overflowY","hidden"),w.setPropertyValue(b,"boxSizing","content-box"),w.setPropertyValue(b,"width",h+"%"),w.setPropertyValue(b,"minWidth",h+"%"),w.setPropertyValue(b,"maxWidth",h+"%"),w.setPropertyValue(b,"height",h+"%"),w.setPropertyValue(b,"minHeight",h+"%"),w.setPropertyValue(b,"maxHeight",h+"%")),e?g.emToPxRatio=E.lastEmToPx:w.setPropertyValue(b,"paddingLeft",h+"em"),d||(g.percentToPxRatioWidth=E.lastPercentToPxWidth=(parseFloat(w.getPropertyValue(b,"width",null,!0))||1)/h,g.percentToPxRatioHeight=E.lastPercentToPxHeight=(parseFloat(w.getPropertyValue(b,"height",null,!0))||1)/h),e||(g.emToPxRatio=E.lastEmToPx=(parseFloat(w.getPropertyValue(b,"paddingLeft"))||1)/h);for(var k in f)null!==f[k]&&w.setPropertyValue(b,k,f[k]);return o?(i&&w.setPropertyValue(b,"width","auto"),j&&w.setPropertyValue(b,"height","auto")):(w.setPropertyValue(b,"height","auto"),f.height!==w.getPropertyValue(b,"height",null,!0)&&w.setPropertyValue(b,"height",f.height),w.setPropertyValue(b,"width","auto"),f.width!==w.getPropertyValue(b,"width",null,!0)&&w.setPropertyValue(b,"width",f.width)),t.debug>=1&&console.log("Unit ratios: "+JSON.stringify(g),b),g}if(g.begin&&0===y&&g.begin.call(n,n),"scroll"===B){var v,z,A,C=/^x$/i.test(g.axis)?"Left":"Top",D=parseFloat(g.offset)||0;g.container?g.container.jquery||g.container.nodeType?(g.container=g.container[0]||g.container,v=g.container["scroll"+C],A=v+s(b).position()[C.toLowerCase()]+D):g.container=null:(v=t.State.scrollAnchor[t.State["scrollProperty"+C]],z=t.State.scrollAnchor[t.State["scrollProperty"+("Left"===C?"Top":"Left")]],A=s(b).offset()[C.toLowerCase()]+D),h={scroll:{rootPropertyValue:!1,startValue:v,currentValue:v,endValue:A,unitType:"",easing:g.easing,scrollData:{container:g.container,direction:C,alternateValue:z}},element:b}}else if("reverse"===B){if(!s.data(b,l).tweensContainer)return void s.dequeue(b,g.queue);"none"===s.data(b,l).opts.display&&(s.data(b,l).opts.display="block"),s.data(b,l).opts.loop=!1,s.data(b,l).opts.begin=null,s.data(b,l).opts.complete=null,u.easing||delete g.easing,u.duration||delete g.duration,g=s.extend({},s.data(b,l).opts,g);var G=s.extend(!0,{},s.data(b,l).tweensContainer);for(var H in G)if("element"!==H){var I=G[H].startValue;G[H].startValue=G[H].currentValue=G[H].endValue,G[H].endValue=I,u&&(G[H].easing=g.easing)}h=G}else if("start"===B){var G;s.data(b,l).tweensContainer&&s.data(b,l).isAnimating===!0&&(G=s.data(b,l).tweensContainer);for(var J in p){var K=a(p[J]),L=K[0],M=K[1],N=K[2];J=w.Names.camelCase(J);var O=w.Hooks.getRoot(J),P=!1;if(w.Names.prefixCheck(O)[1]!==!1||w.Normalizations.registered[O]!==d){g.display&&"none"!==g.display&&/opacity|filter/.test(J)&&!N&&0!==L&&(N=0),g._cacheValues&&G&&G[J]?(N===d&&(N=G[J].endValue+G[J].unitType),P=s.data(b,l).rootPropertyValueCache[O]):w.Hooks.registered[J]?N===d?(P=w.getPropertyValue(b,O),N=w.getPropertyValue(b,J,P)):P=w.Hooks.templates[O][1]:N===d&&(N=w.getPropertyValue(b,J));var Q,R,S,T;Q=k(J,N),N=Q[0],S=Q[1],Q=k(J,L),L=Q[0].replace(/^([+-\/*])=/,function(a,b){return T=b,""}),R=Q[1],N=parseFloat(N)||0,L=parseFloat(L)||0;var U;if("%"===R&&(/^(fontSize|lineHeight)$/.test(J)?(L/=100,R="em"):/^scale/.test(J)?(L/=100,R=""):/(Red|Green|Blue)$/i.test(J)&&(L=L/100*255,R="")),/[\/*]/.test(T))R=S;else if(S!==R&&0!==N)if(0===L)R=S;else{U=U||m();var V=/margin|padding|left|right|width|text|word|letter/i.test(J)||/X$/.test(J)?"x":"y";switch(S){case"%":N*="x"===V?U.percentToPxRatioWidth:U.percentToPxRatioHeight;break;case"em":N*=U.emToPxRatio;break;case"rem":N*=U.remToPxRatio;break;case"px":}switch(R){case"%":N*=1/("x"===V?U.percentToPxRatioWidth:U.percentToPxRatioHeight);break;case"em":N*=1/U.emToPxRatio;break;case"rem":N*=1/U.remToPxRatio;break;case"px":}}switch(T){case"+":L=N+L;break;case"-":L=N-L;break;case"*":L=N*L;break;case"/":L=N/L}h[J]={rootPropertyValue:P,startValue:N,currentValue:N,endValue:L,unitType:R,easing:M},t.debug&&console.log("tweensContainer ("+J+"): "+JSON.stringify(h[J]),b)}else t.debug&&console.log("Skipping ["+O+"] due to a lack of browser support.")}h.element=b}h.element&&(F.push(h),s.data(b,l).tweensContainer=h,s.data(b,l).opts=g,s.data(b,l).isAnimating=!0,y===x-1?(t.State.calls.length>1e4&&(t.State.calls=e(t.State.calls)),t.State.calls.push([F,n,g]),t.State.isTicking===!1&&(t.State.isTicking=!0,j())):y++)}var b=this,g=s.extend({},t.defaults,u),h={};if("stop"===B)return s.queue(b,q(u)?u:"",[]),!0;switch(s.data(b,l)===d&&s.data(b,l,{isAnimating:!1,computedStyle:null,tweensContainer:null,rootPropertyValueCache:{},transformCache:{}}),/^\d/.test(g.delay)&&g.queue!==!1&&s.queue(b,g.queue,function(a){t.velocityQueueEntryFlag=!0,setTimeout(a,parseFloat(g.delay))}),g.duration.toString().toLowerCase()){case"fast":g.duration=200;break;case"normal":g.duration=m;break;case"slow":g.duration=600;break;default:g.duration=parseFloat(g.duration)||1}g.easing=i(g.easing,g.duration),g.begin&&!f(g.begin)&&(g.begin=null),g.progress&&!f(g.progress)&&(g.progress=null),g.complete&&!f(g.complete)&&(g.complete=null),g.display&&(g.display=g.display.toString().toLowerCase()),g.mobileHA=g.mobileHA&&t.State.isMobile&&!t.State.isGingerbread,g.queue===!1?g.delay?setTimeout(a,g.delay):a():s.queue(b,g.queue,function(b){t.velocityQueueEntryFlag=!0,a(b)}),""!==g.queue&&"fx"!==g.queue||"inprogress"===s.queue(b)[0]||s.dequeue(b)}var b,k,n,p,u,v=arguments[0]&&(s.isPlainObject(arguments[0].properties)&&!arguments[0].properties.names||q(arguments[0].properties));if(h(this)?(k=0,n=this,b=this):(k=1,n=v?arguments[0].elements:arguments[0]),n=h(n)?[].slice.call(n):n){v?(p=arguments[0].properties,u=arguments[0].options):(p=arguments[k],u=arguments[k+1]);var x=g(n)||r(n)?n.length:1,y=0;if("stop"!==p&&!s.isPlainObject(u)){var z=k+1;u={};for(var A=z;A<arguments.length;A++)!r(arguments[A])&&/^\d/.test(arguments[A])?u.duration=parseFloat(arguments[A]):q(arguments[A])?u.easing=arguments[A]:!r(arguments[A])||2!==arguments[A].length&&4!==arguments[A].length?f(arguments[A])&&(u.complete=arguments[A]):u.easing=arguments[A]}var B;switch(p){case"scroll":B="scroll";break;case"reverse":B="reverse";break;case"stop":B="stop";break;default:if(!s.isPlainObject(p)||s.isEmptyObject(p)){if(q(p)&&t.Sequences[p]){var C=n,D=u.duration;return u.backwards===!0&&(n=(n.jquery?[].slice.call(n):n).reverse()),s.each(n,function(a,b){parseFloat(u.stagger)&&(u.delay=parseFloat(u.stagger)*a),u.drag&&(u.duration=parseFloat(D)||(/^(callout|transition)/.test(p)?1e3:m),u.duration=Math.max(u.duration*(u.backwards?1-a/x:(a+1)/x),.75*u.duration,200)),t.Sequences[p].call(b,b,u||{},a,x)}),b||C}return console.log("First argument was not a property map, a known action, or a registered sequence. Aborting."),b||n}B="start"}var E={lastParent:null,lastPosition:null,lastFontSize:null,lastPercentToPxWidth:null,lastPercentToPxHeight:null,lastEmToPx:null,remToPxRatio:null},F=[];n.nodeType?a.call(n):s.each(n,function(b,c){c.nodeType&&a.call(c)});var G,H=s.extend({},t.defaults,u);if(H.loop=parseInt(H.loop),G=2*H.loop-1,H.loop)for(var I=0;G>I;I++){var J={delay:H.delay};H.complete&&I===G-1&&(J.complete=H.complete),t.animate(n,"reverse",J)}return b||n}};var x=b.xtd_jQuery||b.Zepto;x&&(x.fn.velocity=t.animate,x.fn.velocity.defaults=t.defaults),"undefined"!=typeof define&&define.amd?define(function(){return t}):"undefined"!=typeof module&&module.exports&&(module.exports=t),s.each(["Down","Up"],function(a,b){t.Sequences["slide"+b]=function(a,c){var d=s.extend({},c),e={height:null,marginTop:null,marginBottom:null,paddingTop:null,paddingBottom:null,overflow:null,overflowX:null,overflowY:null},f=d.begin,g=d.complete,h=!1;null!==d.display&&(d.display="Down"===b?d.display||t.CSS.Values.getDisplayType(a):d.display||"none"),d.begin=function(){function c(){a.style.display="block",e.height=t.CSS.getPropertyValue(a,"height"),a.style.height="auto",t.CSS.getPropertyValue(a,"height")===e.height&&(h=!0),t.CSS.setPropertyValue(a,"height",e.height+"px")}if("Down"===b){e.overflow=[t.CSS.getPropertyValue(a,"overflow"),0],e.overflowX=[t.CSS.getPropertyValue(a,"overflowX"),0],e.overflowY=[t.CSS.getPropertyValue(a,"overflowY"),0],a.style.overflow="hidden",a.style.overflowX="visible",a.style.overflowY="hidden",c();for(var d in e)/^overflow/.test(d)||(e[d]=[t.CSS.getPropertyValue(a,d),0]);a.style.display="none"}else{c();for(var d in e)e[d]=[0,t.CSS.getPropertyValue(a,d)];a.style.overflow="hidden",a.style.overflowX="visible",a.style.overflowY="hidden"}f&&f.call(a,a)},d.complete=function(a){var c="Down"===b?0:1;h===!0?e.height[c]="auto":e.height[c]+="px";for(var d in e)a.style[d]=e[d][c];g&&g.call(a,a)},t.animate(a,e,d)}}),s.each(["In","Out"],function(a,b){t.Sequences["fade"+b]=function(a,c,d,e){var f=s.extend({},c),g={opacity:"In"===b?1:0};d!==e-1&&(f.complete=f.begin=null),null!==f.display&&(f.display="In"===b?t.CSS.Values.getDisplayType(a):"none"),t.animate(this,g,f)}})}(xtd_jQuery,window,document)
var velocityEffects = { 
   /* Support: Loses rotation in IE9/Android 2.3. (Fades only.) */
   "transition.flipXIn": {
       defaultDuration: 700,
       calls: [ 
           [ { opacity: [ 1, 0 ], transformPerspective: [ 800, 800 ], rotateY: [ 0, -55 ] } ]
       ],
       reset: { transformPerspective: 0 }
   },
   /* Support: Loses rotation in IE9/Android 2.3. (Fades only.) */
   "transition.flipXOut": {
       defaultDuration: 700,
       calls: [ 
           [ { opacity: [ 0, 1 ], transformPerspective: [ 800, 800 ], rotateY: 55 } ]
       ],
       reset: { opacity: [ 1, 1 ], transformPerspective: 0, rotateY: 0 }
   },
   /* Support: Loses rotation in IE9/Android 2.3. (Fades only.) */
   "transition.flipYIn": {
       defaultDuration: 700,
       calls: [ 
           [ { opacity: [ 1, 0 ], transformPerspective: [ 800, 800 ], rotateX: [ 0, -35 ] } ]
       ],
       reset: { transformPerspective: 0 }
   },
   /* Support: Loses rotation in IE9/Android 2.3. (Fades only.) */
   "transition.flipYOut": {
       defaultDuration: 700,
       calls: [ 
           [ { opacity: [ 0, 1 ], transformPerspective: [ 800, 800 ], rotateX: 25 } ]
       ],
       reset: { opacity: [ 1, 1 ], transformPerspective: 0, rotateX: 0 }
   },
   /* Support: Loses rotation in IE9/Android 2.3. (Fades only.) */
   "transition.flipBounceXIn": {
       defaultDuration: 900,
       calls: [ 
           [ { opacity: [ 0.725, 0 ], transformPerspective: [ 400, 400 ], rotateY: [ -10, 90 ] }, 0.50 ],
           [ { opacity: 0.80, rotateY: 10 }, 0.25 ],
           [ { opacity: 1, rotateY: 0 }, 0.25 ]
       ],
       reset: { transformPerspective: 0 }
   },
   /* Support: Loses rotation in IE9/Android 2.3. (Fades only.) */
   "transition.flipBounceXOut": {
       defaultDuration: 800,
       calls: [ 
           [ { opacity: [ 0.9, 1 ], transformPerspective: [ 400, 400 ], rotateY: -10 }, 0.50 ],
           [ { opacity: 0, rotateY: 90 }, 0.50 ]
       ],
       reset: { opacity: [ 1, 1 ], transformPerspective: 0, rotateY: 0 }
   },
   /* Support: Loses rotation in IE9/Android 2.3. (Fades only.) */
   "transition.flipBounceYIn": {
       defaultDuration: 850,
       calls: [ 
           [ { opacity: [ 0.725, 0 ], transformPerspective: [ 400, 400 ], rotateX: [ -10, 90 ] }, 0.50 ],
           [ { opacity: 0.80, rotateX: 10 }, 0.25 ],
           [ { opacity: 1, rotateX: 0 }, 0.25 ]
       ],
       reset: { transformPerspective: 0 }
   },
   /* Support: Loses rotation in IE9/Android 2.3. (Fades only.) */
   "transition.flipBounceYOut": {
       defaultDuration: 800,
       calls: [ 
           [ { opacity: [ 0.9, 1 ], transformPerspective: [ 400, 400 ], rotateX: -15 }, 0.50 ],
           [ { opacity: 0, rotateX: 90 }, 0.50 ]
       ],
       reset: { opacity: [ 1, 1 ], transformPerspective: 0, rotateX: 0 }
   },
   /* Magic.css */
   "transition.swoopIn": {
       defaultDuration: 850,
       calls: [ 
           [ { opacity: [ 1, 0 ], transformOriginX: [ "100%", "25%" ], transformOriginY: [ "100%", "100%" ], transformOriginZ: [ 0, 0 ], scaleX: [ 1, 0 ], scaleY: [ 1, 0 ], translateX: [ 0, -700 ], translateZ: 0 } ]
       ],
       reset: { transformOriginX: "50%", transformOriginY: "50%" }
   },
   /* Magic.css */
   "transition.swoopOut": {
       defaultDuration: 850,
       calls: [ 
           [ { opacity: [ 0, 1 ], transformOriginX: [ "25%", "100%" ], transformOriginY: [ "100%", "100%" ], transformOriginZ: [ 0, 0 ], scaleX: 0, scaleY: 0, translateX: -700, translateZ: 0 } ]
       ],
       reset: { opacity: [ 1, 1 ], transformOriginX: "50%", transformOriginY: "50%", scaleX: 1, scaleY: 1, translateX: 0 }
   },
   /* Magic.css */
   /* Support: Loses rotation in IE9/Android 2.3. (Fades and scales only.) */
   "transition.whirlIn": {
       defaultDuration: 1000,
       calls: [ 
           [ { opacity: [ 1, 0 ], transformOriginX: [ "50%", "50%" ], transformOriginY: [ "50%", "50%" ], transformOriginZ: [ 0, 0 ], scaleX: [ 1, 0 ], scaleY: [ 1, 0 ], rotateY: [ 0, 180 ] } ]
       ]
   },
   /* Magic.css */
   /* Support: Loses rotation in IE9/Android 2.3. (Fades and scales only.) */
   "transition.whirlOut": {
       defaultDuration: 1000,
       calls: [ 
           [ { opacity: [ 0, 1 ], transformOriginX: [ "50%", "50%" ], transformOriginY: [ "50%", "50%" ], transformOriginZ: [ 0, 0 ], scaleX: 0, scaleY: 0, rotateY: 180 } ]
       ],
       reset: { opacity: [ 1, 1 ], scaleX: 1, scaleY: 1, rotateY: 0 }
   },
   "transition.shrinkIn": {
       defaultDuration: 700,
       calls: [ 
           [ { opacity: [ 1, 0 ], transformOriginX: [ "50%", "50%" ], transformOriginY: [ "50%", "50%" ], transformOriginZ: [ 0, 0 ], scaleX: [ 1, 1.625 ], scaleY: [ 1, 1.625 ], translateZ: 0 } ]
       ]
   },
   "transition.shrinkOut": {
       defaultDuration: 700,
       calls: [ 
           [ { opacity: [ 0, 1 ], transformOriginX: [ "50%", "50%" ], transformOriginY: [ "50%", "50%" ], transformOriginZ: [ 0, 0 ], scaleX: 1.35, scaleY: 1.35, translateZ: 0 } ]
       ],
       reset: { opacity: [ 1, 1 ], scaleX: 1, scaleY: 1 }
   },
   "transition.expandIn": {
       defaultDuration: 700,
       calls: [ 
           [ { opacity: [ 1, 0 ], transformOriginX: [ "50%", "50%" ], transformOriginY: [ "50%", "50%" ], transformOriginZ: [ 0, 0 ], scaleX: [ 1, 0.625 ], scaleY: [ 1, 0.625 ], translateZ: 0 } ]
       ]
   },
   "transition.expandOut": {
       defaultDuration: 700,
       calls: [ 
           [ { opacity: [ 0, 1 ], transformOriginX: [ "50%", "50%" ], transformOriginY: [ "50%", "50%" ], transformOriginZ: [ 0, 0 ], scaleX: 0.5, scaleY: 0.5, translateZ: 0 } ]
       ],
       reset: { opacity: [ 1, 1 ], scaleX: 1, scaleY: 1 }
   },
   "transition.bounceIn": {
       defaultDuration: 1000,
       calls: [ 
           [ { opacity: [ 1, 0 ], scaleX: [ 1.05, 0.3 ], scaleY: [ 1.05, 0.3 ] }, 0.40 ],
           [ { scaleX: 0.9, scaleY: 0.9, translateZ: 0 }, 0.20 ],
           [ { scaleX: 1, scaleY: 1 }, 0.50 ]
       ]
   },
   "transition.bounceOut": {
       defaultDuration: 1000,
       calls: [ 
           [ { opacity: [ 1, 1 ], scaleX: 0.95, scaleY: 0.95 }, 0.35 ],
           [ { scaleX: 1.1, scaleY: 1.1, translateZ: 0 }, 0.35 ],
           [ { opacity: 0, scaleX: 0.3, scaleY: 0.3 }, 0.30 ]
       ],
       reset: { opacity: [ 1, 1 ], scaleX: 1, scaleY: 1 }
   },
   "transition.bounceUpIn": {
       defaultDuration: 1000,
       calls: [ 
           [ { opacity: [ 1, "easeOutQuad", 0 ], translateY: [ -30, 1000 ] }, 0.60 ],
           [ { translateY: 10 }, 0.20 ],
           [ { translateY: 0 }, 0.20 ]
       ]
   },
   "transition.bounceUpOut": {
       defaultDuration: 1000,
       calls: [ 
           [ { opacity: [ 1, "easeInQuad", 1 ], translateY: 20 }, 0.20 ],
           [ { opacity: 0, translateY: -1000 }, 0.80 ]
       ],
       reset: { opacity: [ 1, 1 ], translateY: 0 }
   },
   "transition.bounceDownIn": {
       defaultDuration: 1000,
       calls: [ 
           [ { opacity: [ 1, "easeOutQuad", 0 ], translateY: [ 30, -1000 ] }, 0.60 ],
           [ { translateY: -10 }, 0.20 ],
           [ { translateY: 0 }, 0.20 ]
       ]
   },
   "transition.bounceDownOut": {
       defaultDuration: 1000,
       calls: [ 
           [ { opacity: [ 1, "easeInQuad", 1 ], translateY: -20 }, 0.20 ],
           [ { opacity: 0, translateY: 1000 }, 0.80 ]
       ],
       reset: { opacity: [ 1, 1 ], translateY: 0 }
   },
   "transition.bounceLeftIn": {
       defaultDuration: 900,
       calls: [ 
           [ { opacity: [ 1, "easeOutQuad", 0 ], translateX: [ 30, -1000 ] }, 0.60 ],
           [ { translateX: -10 }, 0.20 ],
           [ { translateX: 0 }, 0.20 ]
       ]
   },
   "transition.bounceLeftOut": {
       defaultDuration: 900,
       calls: [ 
           [ { opacity: [ 1, "easeOutQuad", 1 ], translateX: 20 }, 0.20 ],
           [ { opacity: 0, translateX: -1000 }, 0.80 ]
       ],
       reset: { opacity: [ 1, 1 ], translateX: 0 }
   },
   "transition.bounceRightIn": {
       defaultDuration: 950,
       calls: [ 
           [ { opacity: [ 1, "easeOutQuad", 0 ], translateX: [ -30, 1000 ] }, 0.60 ],
           [ { translateX: 10 }, 0.20 ],
           [ { translateX: 0 }, 0.20 ]
       ]
   },
   "transition.bounceRightOut": {
       defaultDuration: 950,
       calls: [ 
           [ { opacity: [ 1, "easeOutQuad", 1 ], translateX: -20 }, 0.20 ],
           [ { opacity: 0, translateX: 1000 }, 0.80 ]
       ],
       reset: { opacity: [ 1, 1 ], translateX: 0 }
   },
   "transition.slideUpIn": {
       defaultDuration: 1000,
       calls: [ 
           [ { opacity: [ 1, 0 ], translateY: [ 0, 20 ], translateZ: 0 } ]
       ]
   },
   "transition.slideUpOut": {
       defaultDuration: 1000,
       calls: [ 
           [ { opacity: [ 0, 1 ], translateY: -20, translateZ: 0 } ]
       ],
       reset: { opacity: [ 1, 1 ], translateY: 0 }
   },
   "transition.slideDownIn": {
       defaultDuration: 1000,
       calls: [ 
           [ { opacity: [ 1, 0 ], translateY: [ 0, -20 ], translateZ: 0 } ]
       ]
   },
   "transition.slideDownOut": {
       defaultDuration: 1000,
       calls: [ 
           [ { opacity: [ 0, 1 ], translateY: 20, translateZ: 0 } ]
       ],
       reset: { opacity: [ 1, 1 ], translateY: 0 }
   },
   "transition.slideLeftIn": {
       defaultDuration: 1000,
       calls: [ 
           [ { opacity: [ 1, 0 ], translateX: [ 0, -20 ], translateZ: 0 } ]
       ]
   },
   "transition.slideLeftOut": {
       defaultDuration: 1050,
       calls: [ 
           [ { opacity: [ 0, 1 ], translateX: -20, translateZ: 0 } ]
       ],
       reset: { opacity: [ 1, 1 ], translateX: 0 }
   },
   "transition.slideRightIn": {
       defaultDuration: 1000,
       calls: [ 
           [ { opacity: [ 1, 0 ], translateX: [ 0, 20 ], translateZ: 0 } ]
       ]
   },
   "transition.slideRightOut": {
       defaultDuration: 1050,
       calls: [ 
           [ { opacity: [ 0, 1 ], translateX: 20, translateZ: 0 } ]
       ],
       reset: { opacity: [ 1, 1 ], translateX: 0 }
   },
   "transition.slideUpBigIn": {
       defaultDuration: 850,
       calls: [ 
           [ { opacity: [ 1, 0 ], translateY: [ 0, 75 ], translateZ: 0 } ]
       ]
   },
   "transition.slideUpBigOut": {
       defaultDuration: 850,
       calls: [ 
           [ { opacity: [ 0, 1 ], translateY: -75, translateZ: 0 } ]
       ],
       reset: { opacity: [ 1, 1 ], translateY: 0 }
   },
   "transition.slideDownBigIn": {
       defaultDuration: 850,
       calls: [ 
           [ { opacity: [ 1, 0 ], translateY: [ 0, -75 ], translateZ: 0 } ]
       ]
   },
   "transition.slideDownBigOut": {
       defaultDuration: 850,
       calls: [ 
           [ { opacity: [ 0, 1 ], translateY: 75, translateZ: 0 } ]
       ],
       reset: { opacity: [ 1, 1 ], translateY: 0 }
   },
   "transition.slideLeftBigIn": {
       defaultDuration: 850,
       calls: [ 
           [ { opacity: [ 1, 0 ], translateX: [ 0, -75 ], translateZ: 0 } ]
       ]
   },
   "transition.slideLeftBigOut": {
       defaultDuration: 850,
       calls: [ 
           [ { opacity: [ 0, 1 ], translateX: -75, translateZ: 0 } ]
       ],
       reset: { opacity: [ 1, 1 ], translateX: 0 }
   },
   "transition.slideRightBigIn": {
       defaultDuration: 850,
       calls: [ 
           [ { opacity: [ 1, 0 ], translateX: [ 0, 75 ], translateZ: 0 } ]
       ]
   },
   "transition.slideRightBigOut": {
       defaultDuration: 850,
       calls: [ 
           [ { opacity: [ 0, 1 ], translateX: 75, translateZ: 0 } ]
       ],
       reset: { opacity: [ 1, 1 ], translateX: 0 }
   },
   /* Magic.css */
   "transition.perspectiveUpIn": {
       defaultDuration: 900,
       calls: [ 
           [ { opacity: [ 1, 0 ], transformPerspective: [ 800, 800 ], transformOriginX: [ 0, 0 ], transformOriginY: [ "100%", "100%" ], transformOriginZ: [ 0, 0 ], rotateX: [ 0, -180 ] } ]
       ],
       reset: { transformPerspective: 0, transformOriginX: "50%", transformOriginY: "50%" }
   },
   /* Magic.css */
   /* Support: Loses rotation in IE9/Android 2.3. (Fades only.) */
   "transition.perspectiveUpOut": {
       defaultDuration: 950,
       calls: [ 
           [ { opacity: [ 0, 1 ], transformPerspective: [ 800, 800 ], transformOriginX: [ 0, 0 ], transformOriginY: [ "100%", "100%" ], transformOriginZ: [ 0, 0 ], rotateX: -180 } ]
       ],
       reset: { opacity: [ 1, 1 ], transformPerspective: 0, transformOriginX: "50%", transformOriginY: "50%", rotateX: 0 }
   },
   /* Magic.css */
   /* Support: Loses rotation in IE9/Android 2.3. (Fades only.) */
   "transition.perspectiveDownIn": {
       defaultDuration: 925,
       calls: [ 
           [ { opacity: [ 1, 0 ], transformPerspective: [ 800, 800 ], transformOriginX: [ 0, 0 ], transformOriginY: [ 0, 0 ], transformOriginZ: [ 0, 0 ], rotateX: [ 0, 180 ] } ]
       ],
       reset: { transformPerspective: 0, transformOriginX: "50%", transformOriginY: "50%" }
   },
   /* Magic.css */
   /* Support: Loses rotation in IE9/Android 2.3. (Fades only.) */
   "transition.perspectiveDownOut": {
       defaultDuration: 950,
       calls: [ 
           [ { opacity: [ 0, 1 ], transformPerspective: [ 800, 800 ], transformOriginX: [ 0, 0 ], transformOriginY: [ 0, 0 ], transformOriginZ: [ 0, 0 ], rotateX: 180 } ]
       ],
       reset: { opacity: [ 1, 1 ], transformPerspective: 0, transformOriginX: "50%", transformOriginY: "50%", rotateX: 0 }
   },
   /* Magic.css */
   /* Support: Loses rotation in IE9/Android 2.3. (Fades only.) */
   "transition.perspectiveLeftIn": {
       defaultDuration: 950,
       calls: [ 
           [ { opacity: [ 1, 0 ], transformPerspective: [ 2000, 2000 ], transformOriginX: [ 0, 0 ], transformOriginY: [ 0, 0 ], transformOriginZ: [ 0, 0 ], rotateY: [ 0, -180 ] } ]
       ],
       reset: { transformPerspective: 0, transformOriginX: "50%", transformOriginY: "50%" }
   },
   /* Magic.css */
   /* Support: Loses rotation in IE9/Android 2.3. (Fades only.) */
   "transition.perspectiveLeftOut": {
       defaultDuration: 950,
       calls: [ 
           [ { opacity: [ 0, 1 ], transformPerspective: [ 2000, 2000 ], transformOriginX: [ 0, 0 ], transformOriginY: [ 0, 0 ], transformOriginZ: [ 0, 0 ], rotateY: -180 } ]
       ],
       reset: { opacity: [ 1, 1 ], transformPerspective: 0, transformOriginX: "50%", transformOriginY: "50%", rotateY: 0 }
   },
   /* Magic.css */
   /* Support: Loses rotation in IE9/Android 2.3. (Fades only.) */
   "transition.perspectiveRightIn": {
       defaultDuration: 950,
       calls: [ 
           [ { opacity: [ 1, 0 ],transformPerspective: [ 2000, 2000 ], transformOriginX: [ "100%", "100%" ], transformOriginY: [ 0, 0 ], transformOriginZ: [ 0, 0 ], rotateY: [ 0, 180 ] } ]
       ],
       reset: { transformPerspective: 0, transformOriginX: "50%", transformOriginY: "50%" }
   },
   /* Magic.css */
   /* Support: Loses rotation in IE9/Android 2.3. (Fades only.) */
   "transition.perspectiveRightOut": {
       defaultDuration: 950,
       calls: [ 
           [ { opacity: [ 0, 1 ], transformPerspective: [ 2000, 2000 ], transformOriginX: [ "100%", "100%" ], transformOriginY: [ 0, 0 ], transformOriginZ: [ 0, 0 ], rotateY: 180 } ]
       ],
       reset: { opacity: [ 1, 1 ], transformPerspective: 0, transformOriginX: "50%", transformOriginY: "50%", rotateY: 0 }
   },
   "xtd.wobbleIn": {
      defaultDuration: 1000,
      calls: [
         [ { translateX: "-25%" , rotateZ: -5 , opacity:.2 }, .16 ],
         [ { translateX: "20%" , rotateZ: 3 , opacity:.4 }, .16 ],
         [ { translateX: "-15%" , rotateZ: -3 , opacity:.6 }, .16 ],
         [ { translateX: "10%" , rotateZ: 2 , opacity:.8 }, .16 ],
         [ { translateX: "-5%" , rotateZ: -1 , opacity:.9}, .16 ],
         [ { translateX: "0%", rotateZ: 0, opacity:1  }, .16 ]
      ]
   },

   "xtd.wobbleOut" : {
      defaultDuration: 1000,
      calls: [
         [ { translateX: "0%" , rotateZ: 0 , opacity:1 }, .16 ],
         [ { translateX: "-5%" , rotateZ: -1 , opacity:.9 }, .16 ],
         [ { translateX: "10%" , rotateZ: 2 , opacity:.8 }, 0.16 ],
         [ { translateX: "-15%" , rotateZ: -3 , opacity:.6 }, 0.16 ],
         [ { translateX: "20%" , rotateZ: 3 , opacity:.4}, 0.16 ],
         [ { translateX: "-25%", rotateZ: -5, opacity:.2  }, 0.16 ]
      ]
   },


   "xtd.swingIn" :{
      defaultDuration: 1000,
      calls: [
         [ {  rotateZ: 15 , opacity:.2}, .2 ],
         [ {  rotateZ: -10 , opacity:.4 }, .2 ],
         [ {  rotateZ: 5 , opacity:.6 }, 0.2 ],
         [ {  rotateZ: -5 , opacity:.8 }, 0.2 ],
         [ {  rotateZ: 0 , opacity:1}, 0.2 ]
      ]
   },

   "xtd.swingOut" :{
      defaultDuration: 1000,
      calls: [
         [ {  rotateZ: 0 , opacity:1}, .2 ],
         [ {  rotateZ: -5 , opacity:.8 }, .2 ],
         [ {  rotateZ: 5 , opacity:.6 }, 0.2 ],
         [ {  rotateZ: -10 , opacity:.4 }, 0.2 ],
         [ {  rotateZ: 15 , opacity:.2}, 0.2 ]
      ]
   },


   "xtd.dropIn" :{
      defaultDuration: 1000,
      calls: [
         [ {  rotateX : [0,70],rotateY : 0,translateY: [0,200],opacity: [1,0]}]
      ]
   },
   "xtd.dropOut" :{
      defaultDuration: 1000,
      calls: [
         [ {  rotateX : 70,rotateY : 0,translateY: 200,opacity: [0,1]}]
      ]
   },

   "xtd.newspaperIn" :{
      defaultDuration: 1000,
      calls: [
         [ {  rotateZ : [0,-270],scale :[1,1.6] ,opacity: [1,0]}]
      ]
   },

   "xtd.newspaperOut" :{
      defaultDuration: 1000,
      calls: [
         [ {  rotateZ : -270,scale :1.6 ,opacity: 0}]
      ]
   },


   "xtd.newspaper2In" :{
      defaultDuration: 1000,
      calls: [
         [ {  rotateY : [0,-270],scale :[1,.6] ,opacity: [1,0]}]
      ]
   },

   "xtd.newspaper2Out" :{
      defaultDuration: 1000,
      calls: [
         [ {  rotateY : -270,scale :.6 ,opacity: 0}]
      ]
   },

   "xtd.newspaper3In" :{
      defaultDuration: 1000,
      calls: [
         [ {  rotateX : [0,-270],scale :[1,2] ,opacity: [1,0]}]
      ]
   },

   "xtd.newspaper3Out" :{
      defaultDuration: 1000,
      calls: [
         [ {  rotateX : -270,scale :2 ,opacity: 0}]
      ]
   },

   "xtd.revealIn" :{
      defaultDuration: 1000,
      calls: [
         [ {  translateY : [0,100],translateZ: [0,100],rotateX: [60,-90] ,opacity: [.5,0]},.4],
         [ {  translateY : 0,translateZ: 0,rotateX: 0,opacity:1}]
      ]
   },

   "xtd.revealOut" :{
      defaultDuration: 1000,
      calls: [
         [ {  translateY : [100,0],translateZ: [100,0],rotateX: [-60,0] ,opacity:0},.4]

      ]
   },

   "xtd.reveal2In" :{
      defaultDuration: 1000,
      calls: [
         [ {  translateY : [0,-100],translateZ: [0,100],rotateX: [60,-90] ,opacity: [.5,0]},.4],
         [ {  translateY : 0,translateZ: 0,rotateX: 0,opacity:1}]
      ]
   },

   "xtd.reveal2Out" :{
      defaultDuration: 1000,
      calls: [
         [ {  translateY : [-100,0],translateZ: [100,0],rotateX: [-60,0] ,opacity:0},.4]

      ]
   },

   "xtd.squeezeIn" :{
      defaultDuration: 1000,
      calls: [
         [ {  scaleX: 1.25 , scaleY:.75 , opacity:.4}],
         [ {  scaleX: .75 , scaleY: 1.25 , opacity:.6}],
         [ {  scaleX: 1.15 , scaleY: .85 , opacity:.8}],
         [ {  scaleX: 1 , scaleY: 1 , opacity:1}]
      ]
   },

   "xtd.squeezeOut" :{
      defaultDuration: 1000,
      calls: [
         [ {  scaleX: 1.15 , scaleY:.85 , opacity:.4}],
         [ {  scaleX: .75 , scaleY: 1.25 , opacity:.2}],
         [ {  scaleX: 1.25 , scaleY: .75 , opacity:0}]
      ]
   },


   "xtd.appearIn" :{
      defaultDuration: 1000,
      calls: [
         [ {  translateY:[0,"50%"],rotateY:[0,140],opacity:.9}],
         [ {  translateY:0,rotateY:0,opacity:1}]
      ]
   },

   "xtd.appearOut" :{
      defaultDuration: 1000,
      calls: [
         [ {  translateY:"50%",rotateY:140,opacity:0}]

      ]
   },

   "xtd.appear2In" :{
      defaultDuration: 1000,
      calls: [
         [ {  translateY:[0,"-50%"],rotateY:[0,140],opacity:.9}],
         [ {  translateY:0,rotateY:0,opacity:1}]
      ]
   },

   "xtd.appear2Out" :{
      defaultDuration: 1000,
      calls: [
         [ {  translateY:"-50%",rotateY:140,opacity:0}]

      ]
   },

   "xtd.reveal3In" :{
      defaultDuration: 1000,
      calls: [
         [ {  transformOriginX:'50%',transformOriginY:'50%',transformOriginZ:-150,rotateX: [-30,180] ,opacity: [1,0]},.7],
         [ {  rotateX: 0,opacity:1},.3]
      ]
   },

   "xtd.reveal3Out" :{
      defaultDuration: 1000,
      calls: [
         [ {  transformOriginX:'50%',transformOriginY:'50%',transformOriginZ:-150,rotateX: 180 ,opacity: 0}]
      ]
   },

   "transition.fadeIn" :{
      defaultDuration: 500,
      calls: [
         [ {  opacity:0}],
         [ {  opacity:1}]
      ]
   },

   "transition.fadeOut" :{
      defaultDuration: 500,
      calls: [
         [ {  opacity:1}],
         [ {  opacity:0}]
      ]
   }
};


 if(xtd_jQuery.Velocity && xtd_jQuery.Velocity.Sequences) {
   /* Sequence generator. */
   for (var effectName in velocityEffects) {
     (function(effectName) {
         var effect = velocityEffects[effectName];
        
         xtd_jQuery.Velocity.Sequences[effectName] = function (element, options) {
             for (var callIndex = 0; callIndex < effect.calls.length; callIndex++) {
                 var opts = {};

                 opts.duration = (options.duration || effect.defaultDuration || 1000) * (effect.calls[callIndex][1] || 1);
                 opts.easing = options.easing  ? options.easing : "ease";
                 opts.loop = effect.calls[callIndex][2];
                 //opts.queue = effectName;

                 if (callIndex === 0) {
                     if(/In$/.test(effectName)) {
                       
                        if(!effect.start) { 
                           effect.start = {
                              opacity : 0
                           }   
                        } 
                        $(element).css(effect.start);
                     }
                     
                     opts.delay = options.delay;
                     opts.begin = options.begin;

                     if (options.display) {
                         opts.display = options.display;
                     } else if (/In$/.test(effectName)) {
                         opts.display = xtd_jQuery.Velocity.CSS.Values.getDisplayType(element);
                     }
                 }

                 if (callIndex === effect.calls.length - 1) {
                     if (effect.reset) {
                         opts.complete = function() {
                             options.complete && options.complete.call();
                             xtd_jQuery.Velocity.animate(element, effect.reset, { duration: 0, queue: false });
                         };
                     } else {
                         opts.complete = options.complete;
                     }
                     
                     if (/Out$/.test(effectName)) {
                         opts.display = "none";                        
                     }
                 }

                 xtd_jQuery.Velocity.animate(element, effect.calls[callIndex][0], opts);
             } 
         };
         
     })(effectName);
   }
}

var customEasings = {

}




// owl carousel script
if (typeof Object.create !== "function") {
    Object.create = function (obj) {
        function F() {}
        F.prototype = obj;
        return new F();
    };
}


(function ($, window, document) {

    var Carousel = {
        init : function (options, el) {
            var base = this;

            base.$elem = $(el);
            base.options = $.extend({}, $.fn.owlCarousel.options, base.$elem.data(), options);

            base.userOptions = options;
            base.loadContent();
        },

        loadContent : function () {
            var base = this, url;

            function getData(data) {
                var i, content = "";
                if (typeof base.options.jsonSuccess === "function") {
                    base.options.jsonSuccess.apply(this, [data]);
                } else {
                    for (i in data.owl) {
                        if (data.owl.hasOwnProperty(i)) {
                            content += data.owl[i].item;
                        }
                    }
                    base.$elem.html(content);
                }
                base.logIn();
            }

            if (typeof base.options.beforeInit === "function") {
                base.options.beforeInit.apply(this, [base.$elem]);
            }

            if (typeof base.options.jsonPath === "string") {
                url = base.options.jsonPath;
                $.getJSON(url, getData);
            } else {
                base.logIn();
            }
        },

        logIn : function () {
            var base = this;

            base.$elem.data("owl-originalStyles", base.$elem.attr("style"))
                      .data("owl-originalClasses", base.$elem.attr("class"));

            base.$elem.css({opacity: 0});
            base.orignalItems = base.options.items;
            base.checkBrowser();
            base.wrapperWidth = 0;
            base.checkVisible = null;
            base.setVars();
        },

        setVars : function () {
            var base = this;
            if (base.$elem.children().length === 0) {return false; }
            base.baseClass();
            base.eventTypes();
            base.$userItems = base.$elem.children();
            base.itemsAmount = base.$userItems.length;
            base.wrapItems();
            base.$owlItems = base.$elem.find(".owl-item");
            base.$owlWrapper = base.$elem.find(".owl-wrapper");
            base.playDirection = "next";
            base.prevItem = 0;
            base.prevArr = [0];
            base.currentItem = 0;
            base.customEvents();
            base.onStartup();
        },

        onStartup : function () {
            var base = this;
            base.updateItems();
            base.calculateAll();
            base.buildControls();
            base.updateControls();
            base.response();
            base.moveEvents();
            base.stopOnHover();
            base.owlStatus();

            if (base.options.transitionStyle !== false) {
                base.transitionTypes(base.options.transitionStyle);
            }
            if (base.options.autoPlay === true) {
                base.options.autoPlay = 5000;
            }
            base.play(true);

            base.$elem.find(".owl-wrapper").css("display", "block");

            if (!base.$elem.is(":visible")) {
                base.watchVisibility();
            } else {
                base.$elem.css("opacity", 1);
            }
            base.onstartup = false;
            base.eachMoveUpdate();
            if (typeof base.options.afterInit === "function") {
                base.options.afterInit.apply(this, [base.$elem]);
            }
        },

        eachMoveUpdate : function () {
            var base = this;

            if (base.options.lazyLoad === true) {
                base.lazyLoad();
            }
            if (base.options.autoHeight === true) {
                base.autoHeight();
            }
            base.onVisibleItems();

            if (typeof base.options.afterAction === "function") {
                base.options.afterAction.apply(this, [base.$elem]);
            }
        },

        updateVars : function () {
            var base = this;
            if (typeof base.options.beforeUpdate === "function") {
                base.options.beforeUpdate.apply(this, [base.$elem]);
            }
            base.watchVisibility();
            base.updateItems();
            base.calculateAll();
            base.updatePosition();
            base.updateControls();
            //base.eachMoveUpdate();
            if (typeof base.options.afterUpdate === "function") {
                base.options.afterUpdate.apply(this, [base.$elem]);
            }
        },

        reload : function () {
            var base = this;
            window.setTimeout(function () {
                base.updateVars();
            }, 0);
        },

        watchVisibility : function () {
            var base = this;

            if (base.$elem.is(":visible") === false) {
                base.$elem.css({opacity: 0});
                window.clearInterval(base.autoPlayInterval);
                window.clearInterval(base.checkVisible);
            } else {
                return false;
            }
            base.checkVisible = window.setInterval(function () {
                if (base.$elem.is(":visible")) {
                    base.reload();
                    base.$elem.animate({opacity: 1}, 200);
                    window.clearInterval(base.checkVisible);
                }
            }, 500);
        },

        wrapItems : function () {
            var base = this;
            base.$userItems.wrapAll("<div class=\"owl-wrapper\">").wrap("<div class=\"owl-item\"></div>");
            base.$elem.find(".owl-wrapper").wrap("<div class=\"owl-wrapper-outer\">");
            base.wrapperOuter = base.$elem.find(".owl-wrapper-outer");
            base.$elem.css("display", "block");
        },

        baseClass : function () {
            var base = this,
                hasBaseClass = base.$elem.hasClass(base.options.baseClass),
                hasThemeClass = base.$elem.hasClass(base.options.theme);

            if (!hasBaseClass) {
                base.$elem.addClass(base.options.baseClass);
            }

            if (!hasThemeClass) {
                base.$elem.addClass(base.options.theme);
            }
        },

        updateItems : function () {
            var base = this, width, i;

            if (base.options.responsive === false) {
                return false;
            }
            if (base.options.singleItem === true) {
                base.options.items = base.orignalItems = 1;
                base.options.itemsCustom = false;
                base.options.itemsDesktop = false;
                base.options.itemsDesktopSmall = false;
                base.options.itemsTablet = false;
                base.options.itemsTabletSmall = false;
                base.options.itemsMobile = false;
                return false;
            }

            width = $(base.options.responsiveBaseWidth).width();

            if (width > (base.options.itemsDesktop[0] || base.orignalItems)) {
                base.options.items = base.orignalItems;
            }
            if (base.options.itemsCustom !== false) {
                //Reorder array by screen size
                base.options.itemsCustom.sort(function (a, b) {return a[0] - b[0]; });

                for (i = 0; i < base.options.itemsCustom.length; i += 1) {
                    if (base.options.itemsCustom[i][0] <= width) {
                        base.options.items = base.options.itemsCustom[i][1];
                    }
                }

            } else {

                if (width <= base.options.itemsDesktop[0] && base.options.itemsDesktop !== false) {
                    base.options.items = base.options.itemsDesktop[1];
                }

                if (width <= base.options.itemsDesktopSmall[0] && base.options.itemsDesktopSmall !== false) {
                    base.options.items = base.options.itemsDesktopSmall[1];
                }

                if (width <= base.options.itemsTablet[0] && base.options.itemsTablet !== false) {
                    base.options.items = base.options.itemsTablet[1];
                }

                if (width <= base.options.itemsTabletSmall[0] && base.options.itemsTabletSmall !== false) {
                    base.options.items = base.options.itemsTabletSmall[1];
                }

                if (width <= base.options.itemsMobile[0] && base.options.itemsMobile !== false) {
                    base.options.items = base.options.itemsMobile[1];
                }
            }

            //if number of items is less than declared
            if (base.options.items > base.itemsAmount && base.options.itemsScaleUp === true) {
                base.options.items = base.itemsAmount;
            }
        },

        response : function () {
            var base = this,
                smallDelay,
                lastWindowWidth;

            if (base.options.responsive !== true) {
                return false;
            }
            lastWindowWidth = $(window).width();

            base.resizer = function () {
                if ($(window).width() !== lastWindowWidth) {
                    if (base.options.autoPlay !== false) {
                        window.clearInterval(base.autoPlayInterval);
                    }
                    window.clearTimeout(smallDelay);
                    smallDelay = window.setTimeout(function () {
                        lastWindowWidth = $(window).width();
                        base.updateVars();
                    }, base.options.responsiveRefreshRate);
                }
            };
            $(window).resize(base.resizer);
        },

        updatePosition : function () {
            var base = this;
            base.jumpTo(base.currentItem);
            if (base.options.autoPlay !== false) {
                base.checkAp();
            }
        },

        appendItemsSizes : function () {
            var base = this,
                roundPages = 0,
                lastItem = base.itemsAmount - base.options.items;

            base.$owlItems.each(function (index) {
                var $this = $(this);
                $this
                    .css({"width": base.itemWidth})
                    .data("owl-item", Number(index));

                if (index % base.options.items === 0 || index === lastItem) {
                    if (!(index > lastItem)) {
                        roundPages += 1;
                    }
                }
                $this.data("owl-roundPages", roundPages);
            });
        },

        appendWrapperSizes : function () {
            var base = this,
                width = base.$owlItems.length * base.itemWidth;

            base.$owlWrapper.css({
                "width": width * 2,
                "left": 0
            });
            base.appendItemsSizes();
        },

        calculateAll : function () {
            var base = this;
            base.calculateWidth();
            base.appendWrapperSizes();
            base.loops();
            base.max();
        },

        calculateWidth : function () {
            var base = this;
            base.itemWidth = Math.round(base.$elem.width() / base.options.items);
        },

        max : function () {
            var base = this,
                maximum = ((base.itemsAmount * base.itemWidth) - base.options.items * base.itemWidth) * -1;
            if (base.options.items > base.itemsAmount) {
                base.maximumItem = 0;
                maximum = 0;
                base.maximumPixels = 0;
            } else {
                base.maximumItem = base.itemsAmount - base.options.items;
                base.maximumPixels = maximum;
            }
            return maximum;
        },

        min : function () {
            return 0;
        },

        loops : function () {
            var base = this,
                prev = 0,
                elWidth = 0,
                i,
                item,
                roundPageNum;

            base.positionsInArray = [0];
            base.pagesInArray = [];

            for (i = 0; i < base.itemsAmount; i += 1) {
                elWidth += base.itemWidth;
                base.positionsInArray.push(-elWidth);

                if (base.options.scrollPerPage === true) {
                    item = $(base.$owlItems[i]);
                    roundPageNum = item.data("owl-roundPages");
                    if (roundPageNum !== prev) {
                        base.pagesInArray[prev] = base.positionsInArray[i];
                        prev = roundPageNum;
                    }
                }
            }
        },

        buildControls : function () {
            var base = this;
            if (base.options.navigation === true || base.options.pagination === true) {
                base.owlControls = $("<div class=\"owl-controls\"/>").toggleClass("clickable", !base.browser.isTouch).appendTo(base.$elem);
            }
            if (base.options.pagination === true) {
                base.buildPagination();
            }
            if (base.options.navigation === true) {
                base.buildButtons();
            }
        },

        buildButtons : function () {
            var base = this,
                buttonsWrapper = $("<div class=\"owl-buttons\"/>");
            base.owlControls.append(buttonsWrapper);

            base.buttonPrev = $("<div/>", {
                "class" : "owl-prev",
                "html" : base.options.navigationText[0] || ""
            });

            base.buttonNext = $("<div/>", {
                "class" : "owl-next",
                "html" : base.options.navigationText[1] || ""
            });

            buttonsWrapper
                .append(base.buttonPrev)
                .append(base.buttonNext);

            buttonsWrapper.on("touchstart.owlControls mousedown.owlControls", "div[class^=\"owl\"]", function (event) {
                event.preventDefault();
            });

            buttonsWrapper.on("touchend.owlControls mouseup.owlControls", "div[class^=\"owl\"]", function (event) {
                event.preventDefault();
                if ($(this).hasClass("owl-next")) {
                    base.next();
                } else {
                    base.prev();
                }
            });
        },

        buildPagination : function () {
            var base = this;

            base.paginationWrapper = $("<div class=\"owl-pagination\"/>");
            base.owlControls.append(base.paginationWrapper);

            base.paginationWrapper.on("touchend.owlControls mouseup.owlControls", ".owl-page", function (event) {
                event.preventDefault();
                if (Number($(this).data("owl-page")) !== base.currentItem) {
                    base.goTo(Number($(this).data("owl-page")), true);
                }
            });
        },

        updatePagination : function () {
            var base = this,
                counter,
                lastPage,
                lastItem,
                i,
                paginationButton,
                paginationButtonInner;

            if (base.options.pagination === false) {
                return false;
            }

            base.paginationWrapper.html("");

            counter = 0;
            lastPage = base.itemsAmount - base.itemsAmount % base.options.items;

            for (i = 0; i < base.itemsAmount; i += 1) {
                if (i % base.options.items === 0) {
                    counter += 1;
                    if (lastPage === i) {
                        lastItem = base.itemsAmount - base.options.items;
                    }
                    paginationButton = $("<div/>", {
                        "class" : "owl-page"
                    });
                    paginationButtonInner = $("<span></span>", {
                        "text": base.options.paginationNumbers === true ? counter : "",
                        "class": base.options.paginationNumbers === true ? "owl-numbers" : ""
                    });
                    paginationButton.append(paginationButtonInner);

                    paginationButton.data("owl-page", lastPage === i ? lastItem : i);
                    paginationButton.data("owl-roundPages", counter);

                    base.paginationWrapper.append(paginationButton);
                }
            }
            base.checkPagination();
        },
        checkPagination : function () {
            var base = this;
            if (base.options.pagination === false) {
                return false;
            }
            base.paginationWrapper.find(".owl-page").each(function () {
                if ($(this).data("owl-roundPages") === $(base.$owlItems[base.currentItem]).data("owl-roundPages")) {
                    base.paginationWrapper
                        .find(".owl-page")
                        .removeClass("active");
                    $(this).addClass("active");
                }
            });
        },

        checkNavigation : function () {
            var base = this;

            if (base.options.navigation === false) {
                return false;
            }
            if (base.options.rewindNav === false) {
                if (base.currentItem === 0 && base.maximumItem === 0) {
                    base.buttonPrev.addClass("disabled");
                    base.buttonNext.addClass("disabled");
                } else if (base.currentItem === 0 && base.maximumItem !== 0) {
                    base.buttonPrev.addClass("disabled");
                    base.buttonNext.removeClass("disabled");
                } else if (base.currentItem === base.maximumItem) {
                    base.buttonPrev.removeClass("disabled");
                    base.buttonNext.addClass("disabled");
                } else if (base.currentItem !== 0 && base.currentItem !== base.maximumItem) {
                    base.buttonPrev.removeClass("disabled");
                    base.buttonNext.removeClass("disabled");
                }
            }
        },

        updateControls : function () {
            var base = this;
            base.updatePagination();
            base.checkNavigation();
            if (base.owlControls) {
                if (base.options.items >= base.itemsAmount) {
                    base.owlControls.hide();
                } else {
                    base.owlControls.show();
                }
            }
        },

        destroyControls : function () {
            var base = this;
            if (base.owlControls) {
                base.owlControls.remove();
            }
        },

        next : function (speed) {
            var base = this;
            if (base.isTransition) {
                return false;
            }

            base.currentItem += base.options.scrollPerPage === true ? base.options.items : 1;
            if (base.currentItem > base.maximumItem + (base.options.scrollPerPage === true ? (base.options.items - 1) : 0)) {
                if (base.options.rewindNav === true) {
                    base.currentItem = 0;
                    speed = "rewind";
                } else {
                    base.currentItem = base.maximumItem;
                    return false;
                }
            }
            base.goTo(base.currentItem, speed);
        },

        prev : function (speed) {
            var base = this;

            if (base.isTransition) {
                return false;
            }

            if (base.options.scrollPerPage === true && base.currentItem > 0 && base.currentItem < base.options.items) {
                base.currentItem = 0;
            } else {
                base.currentItem -= base.options.scrollPerPage === true ? base.options.items : 1;
            }
            if (base.currentItem < 0) {
                if (base.options.rewindNav === true) {
                    base.currentItem = base.maximumItem;
                    speed = "rewind";
                } else {
                    base.currentItem = 0;
                    return false;
                }
            }
            base.goTo(base.currentItem, speed);
        },

        goTo : function (position, speed, drag) {
          
            var base = this,
                goToPixel;

            if (base.isTransition) {
                return false;
            }
            if (typeof base.options.beforeMove === "function") {
                base.options.beforeMove.apply(this, [base.$elem]);
            }
            if (position >= base.maximumItem) {
                position = base.maximumItem;
            } else if (position <= 0) {
                position = 0;
            }
            base.currentItem = base.owl.currentItem = position;
            if (base.options.transitionStyle !== false && drag !== "drag" && base.options.items === 1 && base.browser.support3d === true) {
                base.swapSpeed(0);
                 
                if (base.browser.support3d === true) {
                    base.transition3d(base.positionsInArray[position]);
                } else {
                    base.css2slide(base.positionsInArray[position], 1);
                }
                base.afterGo();  
                base.singleItemTransition();
                return false;
            }
            goToPixel = base.positionsInArray[position];

            if (base.browser.support3d === true) {
                base.isCss3Finish = false;

                if (speed === true) {
                    base.swapSpeed("paginationSpeed");
                    window.setTimeout(function () {
                        base.isCss3Finish = true;
                    }, base.options.paginationSpeed);

                } else if (speed === "rewind") {
                    base.swapSpeed(base.options.rewindSpeed);
                    window.setTimeout(function () {
                        base.isCss3Finish = true;
                    }, base.options.rewindSpeed);

                } else {
                    base.swapSpeed("slideSpeed");
                    window.setTimeout(function () {
                        base.isCss3Finish = true;
                    }, base.options.slideSpeed);
                }
                base.transition3d(goToPixel);
            } else {
                if (speed === true) {
                    base.css2slide(goToPixel, base.options.paginationSpeed);
                } else if (speed === "rewind") {
                    base.css2slide(goToPixel, base.options.rewindSpeed);
                } else {
                    base.css2slide(goToPixel, base.options.slideSpeed);
                }
            }
            // console.timeEnd('play');
             base.afterGo();
           
            
        },

        jumpTo : function (position) {
            var base = this;
            if (typeof base.options.beforeMove === "function") {
                base.options.beforeMove.apply(this, [base.$elem]);
            }
            if (position >= base.maximumItem || position === -1) {
                position = base.maximumItem;
            } else if (position <= 0) {
                position = 0;
            }
            base.swapSpeed(0);
            if (base.browser.support3d === true) {
                base.transition3d(base.positionsInArray[position]);
            } else {
                base.css2slide(base.positionsInArray[position], 1);
            }
            base.currentItem = base.owl.currentItem = position;
            base.afterGo();
        },

        afterGo : function () {
            var base = this;

            base.prevArr.push(base.currentItem);
            base.prevItem = base.owl.prevItem = base.prevArr[base.prevArr.length - 2];
            base.prevArr.shift(0);

            if (base.prevItem !== base.currentItem) {
                base.checkPagination();
                base.checkNavigation();
                base.eachMoveUpdate();

                if (base.options.autoPlay !== false) {
                  base.checkAp();
                }
            }
            if (typeof base.options.afterMove === "function" && base.prevItem !== base.currentItem) {
                base.options.afterMove.apply(this, [base.$elem]);
            }
        },

        stop : function () {
            var base = this;
            base.apStatus = "stop";
            base.$elem.trigger('owl.onstop');
            window.clearInterval(base.autoPlayInterval);
        },

        pause : function() {
         var base = this;
            base.apStatus = "stop";
            base.$elem.trigger('owl.onpause');
            window.clearInterval(base.autoPlayInterval);
        },

        checkAp : function () {
            var base = this;
            if (base.apStatus !== "stop") {
                base.play();
            }
        },

        play : function (firstRun) {
            
            var base = this;
            
          
            base.apStatus = "play";
            if (base.options.autoPlay === false) {
                base.apStatus = "stop";
                return false;
            }
            // if (typeof base.options.autoPlay == 'undefined') {
            //    base.options.autoPlay = jsonObj.delay;
            // }

            

            var delaySpeed = parseInt(base.options.autoPlay);
            if(!firstRun) {
               delaySpeed += parseInt(base.options.slideSpeed);
            }
            base.$elem.trigger('owl.onplay',[delaySpeed]);
            window.clearInterval(base.autoPlayInterval);
            base.autoPlayInterval = window.setInterval(function () {
                base.next();
                base.$elem.trigger('owl.playNext');
            }, delaySpeed);
        },

        swapSpeed : function (action) {
            var base = this;
            if (action === "slideSpeed") {
                base.$owlWrapper.css(base.addCssSpeed(base.options.slideSpeed));
            } else if (action === "paginationSpeed") {
                base.$owlWrapper.css(base.addCssSpeed(base.options.paginationSpeed));
            } else if (typeof action !== "string") {
                base.$owlWrapper.css(base.addCssSpeed(action));
            }
        },

        addCssSpeed : function (speed) {
            return {
                "-webkit-transition": "all " + speed + "ms ease",
                "-moz-transition": "all " + speed + "ms ease",
                "-o-transition": "all " + speed + "ms ease",
                "transition": "all " + speed + "ms ease"
            };
        },

        addAnimationSpeedAndEasing : function(speed, ease) {
            return {
               "-webkit-animation-duration" : speed + "ms",
               "animation-duration" : speed + "ms",
               "-webkit-animation-timing-function" : ease, /* Safari and Chrome */ 
               "animation-timing-function" : ease
            };
        },



        removeTransition : function () {
            return {
                "-webkit-transition": "",
                "-moz-transition": "",
                "-o-transition": "",
                "transition": ""
            };
        },

        doTranslate : function (pixels) {
            return {
                "-webkit-transform": "translate3d(" + pixels + "px, 0px, 0px)",
                "-moz-transform": "translate3d(" + pixels + "px, 0px, 0px)",
                "-o-transform": "translate3d(" + pixels + "px, 0px, 0px)",
                "-ms-transform": "translate3d(" + pixels + "px, 0px, 0px)",
                "transform": "translate3d(" + pixels + "px, 0px,0px)"
            };
        },

        transition3d : function (value) {
            var base = this;
            base.$owlWrapper.css(base.doTranslate(value));
        },

        css2move : function (value) {
            var base = this;
            base.$owlWrapper.css({"left" : value});
        },

        css2slide : function (value, speed) {
            var base = this;

            base.isCssFinish = false;
            base.$owlWrapper.stop(true, true).animate({
                "left" : value
            }, {
                duration : speed || base.options.slideSpeed,
                complete : function () {
                    base.isCssFinish = true;
                }
            });
        },

        checkBrowser : function () {
            var base = this,
                translate3D = "translate3d(0px, 0px, 0px)",
                tempElem = document.createElement("div"),
                support3d, has3d,
                isTouch;

            var transforms = {
                 'WebkitTransform':'-webkit-transform',
                 'OTransform':'-o-transform',
                 'MSTransform':'-ms-transform',
                 'MozTransform':'-moz-transform',
                 'transform':'transform'
             };

            document.body.insertBefore(tempElem, document.body.lastChild);
            // tempElem.style.cssText = "  -moz-transform:" + translate3D +
                                  // "; -ms-transform:"     + translate3D +
                                  // "; -o-transform:"      + translate3D +
                                  // "; -webkit-transform:" + translate3D +
                                  // "; transform:"         + translate3D;
            // regex = /([\s;]|^)transform:\s*?translate3d\(0px, 0px, 0px\)/g;
            // regex2 = /translate3d\(0px, 0px, 0px\)/g
            // asSupport = tempElem.style.cssText.match(regex);
            // asSupport2 = tempElem.style.cssText.match(regex2);
            // support3d = (asSupport !== null && asSupport2.length < 5);

             for(var t in transforms){
                 if( tempElem.style[t] !== undefined ){
                     tempElem.style[t] = 'matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)';
                     has3d = window.getComputedStyle(tempElem).getPropertyValue( transforms[t] );
                    // tempElem.parentNode.removeChild(tempElem);
                 }
             }
          
             if( has3d !== undefined ){
                 support3d = has3d !== 'none';
             } else {
                 support3d = false;
             }

            //console.log('supports 3d ' + support3d + " -- " + tempElem.style.cssText);

            isTouch = "ontouchstart" in window || window.navigator.msMaxTouchPoints;

            base.browser = {
                "support3d" : support3d,
                "isTouch" : isTouch
            };
        },

        moveEvents : function () {
            var base = this;
            if (base.options.mouseDrag !== false || base.options.touchDrag !== false) {
                base.gestures();
                base.disabledEvents();
            }
        },

         eventTypes : function () {
            var base = this,
                types = ["s", "e", "x"];

            base.ev_types = {};

            if (base.options.mouseDrag === true && base.options.touchDrag === true) {
                types = [
                    "touchstart.owl mousedown.owl MSPointerDown.owl",
                    "touchmove.owl mousemove.owl MSPointerMove.owl",
                    "touchend.owl touchcancel.owl mouseup.owl MSPointerUp.owl"
                ];
            } else if (base.options.mouseDrag === false && base.options.touchDrag === true) {
                types = [
                    "touchstart.owl MSPointerDown.owl",
                    "touchmove.owl MSPointerMove.owl",
                    "touchend.owl touchcancel.owl MSPointerUp.owl"
                ];
            } else if (base.options.mouseDrag === true && base.options.touchDrag === false) {
                types = [
                    "mousedown.owl",
                    "mousemove.owl",
                    "mouseup.owl"
                ];
            }

            base.ev_types.start = types[0];
            base.ev_types.move = types[1];
            base.ev_types.end = types[2];
        },

        disabledEvents :  function () {
            var base = this;
            base.$elem.on("dragstart.owl", function (event) { event.preventDefault(); });
            base.$elem.on("mousedown.disableTextSelect", function (e) {
                return $(e.target).is('input, textarea, select, option');
            });
        },

        gestures : function () {
            /*jslint unparam: true*/
            var base = this,
                locals = {
                    offsetX : 0,
                    offsetY : 0,
                    baseElWidth : 0,
                    relativePos : 0,
                    position: null,
                    minSwipe : null,
                    maxSwipe: null,
                    sliding : null,
                    dargging: null,
                    targetElement : null
                };

            base.isCssFinish = true;

            function getTouches(event) {
                if (event.touches !== undefined) {
                    return {
                        x : event.touches[0].pageX,
                        y : event.touches[0].pageY
                    };
                }

                if (event.touches === undefined) {
                    if (event.pageX !== undefined) {
                        return {
                            x : event.pageX,
                            y : event.pageY
                        };
                    }
                    if (event.pageX === undefined) {
                        return {
                            x : event.clientX,
                            y : event.clientY
                        };
                    }
                }
            }

            function swapEvents(type) {
                if (type === "on") {
                    $(document).on(base.ev_types.move, dragMove);
                    $(document).on(base.ev_types.end, dragEnd);
                } else if (type === "off") {
                    $(document).off(base.ev_types.move);
                    $(document).off(base.ev_types.end);
                }
            }

            function dragStart(event) {
                var ev = event.originalEvent || event || window.event,
                    position;

                if (ev.which === 3) {
                    return false;
                }
                if (base.itemsAmount <= base.options.items) {
                    return;
                }
                if (base.isCssFinish === false && !base.options.dragBeforeAnimFinish) {
                    return false;
                }
                if (base.isCss3Finish === false && !base.options.dragBeforeAnimFinish) {
                    return false;
                }

                if (base.options.autoPlay !== false) {
                    window.clearInterval(base.autoPlayInterval);
                }

                if (base.browser.isTouch !== true && !base.$owlWrapper.hasClass("grabbing")) {
                    base.$owlWrapper.addClass("grabbing");
                }

                base.newPosX = 0;
                base.newRelativeX = 0;

                $(this).css(base.removeTransition());

                position = $(this).position();
                locals.relativePos = position.left;

                locals.offsetX = getTouches(ev).x - position.left;
                locals.offsetY = getTouches(ev).y - position.top;

                swapEvents("on");

                locals.sliding = false;
                locals.targetElement = ev.target || ev.srcElement;
            }

            function dragMove(event) {
                var ev = event.originalEvent || event || window.event,
                    minSwipe,
                    maxSwipe;

                base.newPosX = getTouches(ev).x - locals.offsetX;
                base.newPosY = getTouches(ev).y - locals.offsetY;
                base.newRelativeX = base.newPosX - locals.relativePos;

                if (typeof base.options.startDragging === "function" && locals.dragging !== true && base.newRelativeX !== 0) {
                    locals.dragging = true;
                    base.options.startDragging.apply(base, [base.$elem]);
                }

                if ((base.newRelativeX > 8 || base.newRelativeX < -8) && (base.browser.isTouch === true)) {
                    if (ev.preventDefault !== undefined) {
                        ev.preventDefault();
                    } else {
                        ev.returnValue = false;
                    }
                    locals.sliding = true;
                }

                if ((base.newPosY > 10 || base.newPosY < -10) && locals.sliding === false) {
                    $(document).off("touchmove.owl");
                }

                minSwipe = function () {
                    return base.newRelativeX / 5;
                };

                maxSwipe = function () {
                    return base.maximumPixels + base.newRelativeX / 5;
                };

                base.newPosX = Math.max(Math.min(base.newPosX, minSwipe()), maxSwipe());
                if (base.browser.support3d === true) {
                    base.transition3d(base.newPosX);
                } else {
                    base.css2move(base.newPosX);
                }
            }

            function dragEnd(event) {
                var ev = event.originalEvent || event || window.event,
                    newPosition,
                    handlers,
                    owlStopEvent;

                ev.target = ev.target || ev.srcElement;

                locals.dragging = false;

                if (base.browser.isTouch !== true) {
                    base.$owlWrapper.removeClass("grabbing");
                }

                if (base.newRelativeX < 0) {
                    base.dragDirection = base.owl.dragDirection = "left";
                } else {
                    base.dragDirection = base.owl.dragDirection = "right";
                }

                if (base.newRelativeX !== 0) {
                    newPosition = base.getNewPosition();
                    base.goTo(newPosition, false, "drag");
                    if (locals.targetElement === ev.target && base.browser.isTouch !== true) {
                        $(ev.target).on("click.disable", function (ev) {
                            ev.stopImmediatePropagation();
                            ev.stopPropagation();
                            ev.preventDefault();
                            $(ev.target).off("click.disable");
                        });
                        handlers = $._data(ev.target, "events").click;
                        owlStopEvent = handlers.pop();
                        handlers.splice(0, 0, owlStopEvent);
                    }
                }
                swapEvents("off");
            }
            base.$elem.on(base.ev_types.start, ".owl-wrapper", dragStart);
        },

        getNewPosition : function () {
            var base = this,
                newPosition = base.closestItem();

            if (newPosition > base.maximumItem) {
                base.currentItem = base.maximumItem;
                newPosition  = base.maximumItem;
            } else if (base.newPosX >= 0) {
                newPosition = 0;
                base.currentItem = 0;
            }
            return newPosition;
        },
        closestItem : function () {
            var base = this,
                array = base.options.scrollPerPage === true ? base.pagesInArray : base.positionsInArray,
                goal = base.newPosX,
                closest = null;

            $.each(array, function (i, v) {
                if (goal - (base.itemWidth / 20) > array[i + 1] && goal - (base.itemWidth / 20) < v && base.moveDirection() === "left") {
                    closest = v;
                    if (base.options.scrollPerPage === true) {
                        base.currentItem = $.inArray(closest, base.positionsInArray);
                    } else {
                        base.currentItem = i;
                    }
                } else if (goal + (base.itemWidth / 20) < v && goal + (base.itemWidth / 20) > (array[i + 1] || array[i] - base.itemWidth) && base.moveDirection() === "right") {
                    if (base.options.scrollPerPage === true) {
                        closest = array[i + 1] || array[array.length - 1];
                        base.currentItem = $.inArray(closest, base.positionsInArray);
                    } else {
                        closest = array[i + 1];
                        base.currentItem = i + 1;
                    }
                }
            });
            return base.currentItem;
        },

        moveDirection : function () {
            var base = this,
                direction;
            if (base.newRelativeX < 0) {
                direction = "right";
                base.playDirection = "next";
            } else {
                direction = "left";
                base.playDirection = "prev";
            }
            return direction;
        },

        customEvents : function () {
            /*jslint unparam: true*/
            var base = this;
            base.$elem.on("owl.next", function () {
                base.next();
            });
            base.$elem.on("owl.prev", function () {
                base.prev();
            });
            base.$elem.on("owl.play", function (event, speed, fromHover) {
                if (fromHover && base.hoverStatus === "stop") {
                  return;
                }

                //if(typeof speed == "number" || speed === false) {
                base.options.autoPlay = speed;
                //}
                base.play();
                base.hoverStatus = "play";
            });
            base.$elem.on("owl.stop", function (event, fromHover) {
               base.stop();
               if(!fromHover) {
                  base.hoverStatus = "stop";
               }
            });
            base.$elem.on("owl.goTo", function (event, item) {
                base.goTo(item);
            });
            base.$elem.on("owl.jumpTo", function (event, item) {
                base.jumpTo(item);
            });
        },

        stopOnHover : function () {
            var base = this;
            if (base.options.stopOnHover === true && base.browser.isTouch !== true && base.options.autoPlay !== false) {
              
            }
        },

        lazyLoad : function () {
            var base = this,
                i,
                $item,
                itemNumber,
                $lazyImg,
                follow;

            if (base.options.lazyLoad === false) {
                return false;
            }
            for (i = 0; i < base.itemsAmount; i += 1) {
                $item = $(base.$owlItems[i]);

                if ($item.data("owl-loaded") === "loaded") {
                    continue;
                }

                itemNumber = $item.data("owl-item");
                $lazyImg = $item.find(".lazyOwl");

                if (typeof $lazyImg.data("src") !== "string") {
                    $item.data("owl-loaded", "loaded");
                    continue;
                }
                if ($item.data("owl-loaded") === undefined) {
                    $lazyImg.hide();
                    $item.addClass("loading").data("owl-loaded", "checked");
                }
                if (base.options.lazyFollow === true) {
                    follow = itemNumber >= base.currentItem;
                } else {
                    follow = true;
                }
                if (follow && itemNumber < base.currentItem + base.options.items && $lazyImg.length) {
                    base.lazyPreload($item, $lazyImg);
                }
            }
        },

        lazyPreload : function ($item, $lazyImg) {
            var base = this,
                iterations = 0,
                isBackgroundImg;

            if ($lazyImg.prop("tagName") === "DIV") {
                $lazyImg.css("background-image", "url(" + $lazyImg.data("src") + ")");
                isBackgroundImg = true;
            } else {
                $lazyImg[0].src = $lazyImg.data("src");
            }

            function showImage() {
                $item.data("owl-loaded", "loaded").removeClass("loading");
                $lazyImg.removeAttr("data-src");
                if (base.options.lazyEffect === "fade") {
                    $lazyImg.fadeIn(400);
                } else {
                    $lazyImg.show();
                }
                if (typeof base.options.afterLazyLoad === "function") {
                    base.options.afterLazyLoad.apply(this, [base.$elem]);
                }
            }

            function checkLazyImage() {
                iterations += 1;
                if (base.completeImg($lazyImg.get(0)) || isBackgroundImg === true) {
                    showImage();
                } else if (iterations <= 100) {//if image loads in less than 10 seconds 
                    window.setTimeout(checkLazyImage, 100);
                } else {
                    showImage();
                }
            }

            checkLazyImage();
        },

        autoHeight : function () {
            var base = this,
                $currentimg = $(base.$owlItems[base.currentItem]).find("img"),
                iterations;

            function addHeight() {
                var $currentItem = $(base.$owlItems[base.currentItem]).height();
                base.wrapperOuter.css("height", $currentItem + "px");
                if (!base.wrapperOuter.hasClass("autoHeight")) {
                    window.setTimeout(function () {
                        base.wrapperOuter.addClass("autoHeight");
                    }, 0);
                }
            }

            function checkImage() {
                iterations += 1;
                if (base.completeImg($currentimg.get(0))) {
                    addHeight();
                } else if (iterations <= 100) { //if image loads in less than 10 seconds 
                    window.setTimeout(checkImage, 100);
                } else {
                    base.wrapperOuter.css("height", ""); //Else remove height attribute
                }
            }

            if ($currentimg.get(0) !== undefined) {
                iterations = 0;
                checkImage();
            } else {
                addHeight();
            }
        },

        completeImg : function (img) {
            var naturalWidthType;

            if (!img.complete) {
                return false;
            }
            naturalWidthType = typeof img.naturalWidth;
            if (naturalWidthType !== "undefined" && img.naturalWidth === 0) {
                return false;
            }
            return true;
        },

        onVisibleItems : function () {
            var base = this,
                i;

            if (base.options.addClassActive === true) {
                base.$owlItems.removeClass("active");
            }
            base.visibleItems = [];
            for (i = base.currentItem; i < base.currentItem + base.options.items; i += 1) {
                base.visibleItems.push(i);

                if (base.options.addClassActive === true) {
                    $(base.$owlItems[i]).addClass("active");
                }
            }
            base.owl.visibleItems = base.visibleItems;
        },

        transitionTypes : function (className) {
            var base = this;
            //Currently available: "fade", "backSlide", "goDown", "fadeUp"
            base.outClass = "owl-" + className + "-out";
            base.inClass = "owl-" + className + "-in";
        },

        singleItemTransition : function () {
            var base = this,
                outClass = base.outClass,
                inClass = base.inClass,
                $currentItem = base.$owlItems.eq(base.currentItem),
                $prevItem = base.$owlItems.eq(base.prevItem),
                prevPos = Math.abs(base.positionsInArray[base.currentItem]) + base.positionsInArray[base.prevItem],
                origin = Math.abs(base.positionsInArray[base.currentItem]) + base.itemWidth / 2,
                animEnd = 'webkitAnimationEnd oAnimationEnd MSAnimationEnd animationend';

            base.isTransition = true;

            base.$owlWrapper
                .addClass('owl-origin')
                .css({
                    "-webkit-transform-origin" : origin + "px",
                    "-moz-perspective-origin" : origin + "px",
                    "perspective-origin" : origin + "px"
                });
            function transStyles(prevPos) {
                return {
                    "position" : "relative",
                    "left" : prevPos + "px"
                };
            }
            
            if(outClass && inClass) {

               $prevItem.css(base.addAnimationSpeedAndEasing(base.options.slideSpeed, base.options.ease))
               $currentItem.css(base.addAnimationSpeedAndEasing(base.options.slideSpeed, base.options.ease))
                  
            }

            $prevItem
                .css(transStyles(prevPos, 10))
                .addClass(outClass)
                .on(animEnd, function () {
                    base.endPrev = true;
                    $prevItem.off(animEnd);
                    base.clearTransStyle($prevItem, outClass);
                });

            $currentItem
               .addClass(inClass)
                .on(animEnd, function () {
                    base.endCurrent = true;
                    $currentItem.off(animEnd);
                    base.clearTransStyle($currentItem, inClass);
                });
        },

        clearTransStyle : function (item, classToRemove) {
            var base = this;
            item.css({
                "position" : "",
                "left" : ""
            }).removeClass(classToRemove);

            if (base.endPrev && base.endCurrent) {
                base.$owlWrapper.removeClass('owl-origin');
                base.endPrev = false;
                base.endCurrent = false;
                base.isTransition = false;
            }
        },

        owlStatus : function () {
            var base = this;
            base.owl = {
                "userOptions"   : base.userOptions,
                "baseElement"   : base.$elem,
                "userItems"     : base.$userItems,
                "owlItems"      : base.$owlItems,
                "currentItem"   : base.currentItem,
                "prevItem"      : base.prevItem,
                "visibleItems"  : base.visibleItems,
                "isTouch"       : base.browser.isTouch,
                "browser"       : base.browser,
                "dragDirection" : base.dragDirection,
                "apStatus"      : base.apStatus
            };
        },

        clearEvents : function () {
            var base = this;
         base.$elem.off("mousedown.disableTextSelect");
            base.$elem.off(".owl owl mousedown.disableTextSelect");
            $(document).off(".owl owl");
            $(window).off("resize", base.resizer);
        },

        unWrap : function () {
            var base = this;
            if (base.$elem.children().length !== 0) {
                base.$owlWrapper.unwrap();
                base.$userItems.unwrap().unwrap();
                if (base.owlControls) {
                    base.owlControls.remove();
                }
            }
            base.clearEvents();
            base.$elem
                .attr("style", base.$elem.data("owl-originalStyles") || "")
                .attr("class", base.$elem.data("owl-originalClasses"));
        },

        destroy : function () {
            var base = this;
            base.stop();
            window.clearInterval(base.checkVisible);
            base.unWrap();
            base.$elem.removeData();
        },

        reinit : function (newOptions) {
            var base = this,
                options = $.extend({}, base.userOptions, newOptions);
            base.unWrap();
            base.init(options, base.$elem);
        },

        addItem : function (htmlString, targetPosition) {
            var base = this,
                position;

            if (!htmlString) {return false; }

            if (base.$elem.children().length === 0) {
                base.$elem.append(htmlString);
                base.setVars();
                return false;
            }
            base.unWrap();
            if (targetPosition === undefined || targetPosition === -1) {
                position = -1;
            } else {
                position = targetPosition;
            }
            if (position >= base.$userItems.length || position === -1) {
                base.$userItems.eq(-1).after(htmlString);
            } else {
                base.$userItems.eq(position).before(htmlString);
            }

            base.setVars();
        },

        removeItem : function (targetPosition) {
            var base = this,
                position;

            if (base.$elem.children().length === 0) {
                return false;
            }
            if (targetPosition === undefined || targetPosition === -1) {
                position = -1;
            } else {
                position = targetPosition;
            }

            base.unWrap();
            base.$userItems.eq(position).remove();
            base.setVars();
        }

    };

    $.fn.owlCarousel = function (options) {
        return this.each(function () {
            if ($(this).data("owl-init") === true) {
                return false;
            }
            $(this).data("owl-init", true);
            var carousel = Object.create(Carousel);
            carousel.init(options, this);
            $.data(this, "owlCarousel", carousel);
        });
    };

    $.fn.owlCarousel.options = {

        items : 5,
        itemsCustom : false,
        itemsDesktop : [1199, 4],
        itemsDesktopSmall : [979, 3],
        itemsTablet : [768, 2],
        itemsTabletSmall : false,
        itemsMobile : [479, 1],
        singleItem : false,
        itemsScaleUp : false,

        slideSpeed : 200,
        paginationSpeed : 800,
        rewindSpeed : 1000,

        autoPlay : false,
        stopOnHover : false,

        navigation : false,
        navigationText : ["prev", "next"],
        rewindNav : true,
        scrollPerPage : false,

        pagination : true,
        paginationNumbers : false,

        responsive : true,
        responsiveRefreshRate : 200,
        responsiveBaseWidth : window,

        baseClass : "owl-carousel",
        theme : "owl-theme",

        lazyLoad : false,
        lazyFollow : true,
        lazyEffect : "fade",

        autoHeight : false,

        jsonPath : false,
        jsonSuccess : false,

        dragBeforeAnimFinish : true,
        mouseDrag : true,
        touchDrag : true,

        addClassActive : false,
        transitionStyle : false,

        beforeUpdate : false,
        afterUpdate : false,
        beforeInit : false,
        afterInit : false,
        beforeMove : false,
        afterMove : false,
        afterAction : false,
        startDragging : false,
        afterLazyLoad: false
    };
}(xtd_jQuery, window, document));

// owl carousel script end
(function(b,G,O){var J=b.browser.msie&&10>parseInt(b.browser.version,10);b.fn.jQuerySlider=function(){function e(){var a=b("<div />");a.css({display:"block","max-height":"300px",width:"100%","background-color":J?"#EAA249":"rgba(183, 207, 35, 0.82)",top:"0px",left:"0px",padding:"20px 0px","z-index":"99999",position:"fixed","vertical-align":"middle"});var k=b("<div></div>").css({"text-align":"center","font-size":"16px",width:"100%","float":"left",position:"relative",display:"block",color:"#fff",height:"20px",
"vertical-align":"middle","font-family":"Tahoma, sans-serif"}).html(aa.decode("U2xpZGVyIGNyZWF0ZWQgdXNpbmcgRFcgUG93ZXJTbGlkZXIyIC0gZnJlZSB0cmlhbCB2ZXJzaW9uLiBSZWFkIG1vcmUgPGEgaHJlZj0iaHR0cDovL3d3dy5leHRlbmRzdHVkaW8uY29tLyI+aHR0cDovL3d3dy5leHRlbmRzdHVkaW8uY29tLzwvYT4="));a.append(k);k=b("<div></div>").css({"background-position":"center center","background-repeat":"no-repeat","background-image":"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABMAAAATCAYAAAByUDbMAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDIxIDc5LjE1NTc3MiwgMjAxNC8wMS8xMy0xOTo0NDowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTQgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjJEQUNFM0Y2MjMxQTExRTQ5RjBFOTZDMTFGMTUzNERFIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjJEQUNFM0Y3MjMxQTExRTQ5RjBFOTZDMTFGMTUzNERFIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6MkRBQ0UzRjQyMzFBMTFFNDlGMEU5NkMxMUYxNTM0REUiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6MkRBQ0UzRjUyMzFBMTFFNDlGMEU5NkMxMUYxNTM0REUiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz5ceTilAAAA6klEQVR42uyUMQqDQBRExxCx9ggW2uhxPIGNXsZaG60ULDyOnYVHsBZWEmbRBRNFhW0C2WaYv/D4O/+r4fs+dJ3noi8NLOMBjefHYFVVoWka2La9qdOzXtf1dZhpmgiCAEVRKCCVnnXeX4YlSYK+7+F5ngQ4jiOVnvU4jvfHuezZ12qwk7Is4boupmmCZVkSFEURxnHcZR3CeNhR27YSRGAYhhiG4f6esbM0TRWISv85lNPM1rDXjNjRmiGffgTchWVZpkDMiE+j0jPDPM+vw+Z5Rtd1m7Cp9KwLIe5N8/+hn/4cDR2wtwADAM7VaD9mmmFzAAAAAElFTkSuQmCC')",
width:"19px",height:"20px",display:"block",position:"absolute",top:"20px",right:"20px",cursor:"pointer"}).click(function(){a.hide()});a.append(k);ba&&ba.remove();p.prepend(a);ba=a}function f(){U&&P.each(function(){var a=b(this),k=a.data("mouseOutEffect");if(k){if(a.data("mouseOutEffectIn_playing")||a.data("hideNavigation"))return;ca=b.extend({},k.options,{complete:function(){a.data("mouseOutEffectIn_playing",!1);k.options&&k.options.complete&&k.options.complete.call();V&&(a.clearQueue(),a.data("mouseOutEffectOut_playing",
!1))},begin:function(){}});a.data("mouseOutEffectIn_playing",!0);a.velocity(k.inTransition,ca)}else a.stop().fadeIn(300);a.data("hideOnMouseOut",!1)})}function h(){U&&P.each(function(){var a=b(this),k=a.data("mouseOutEffect");if(k){if(!a.data("mouseOutEffectOut_playing")){var c=b.extend({},k.options,{complete:function(){a.data("mouseOutEffectOut_playing",!1);k.options&&k.options.complete&&k.options.complete.call();V||(a.clearQueue(),a.data("mouseOutEffectIn_playing",!1))},begin:function(){}});a.data("mouseOutEffectOut_playing",
!0);a.velocity(k.outTransition,c)}}else a.stop().fadeOut(300);a.data("hideOnMouseOut",!0)})}function d(){ja();O();t();ka()}function r(){z();var a;g.hideNavigationOnMobile?(a=da?parseInt(g.devices.mobile.width):640,a=H<a?!1:!0):a=!0;U=a;B()}function x(){n.find(".owl-item > li").each(function(){b(this).attr("data-title",b(this).attr("title"));b(this).removeAttr("title")});c.backButtons=b("div[id^='"+l+"_back']",c).data("elementClass","innerbutton.back");c.nextButtons=b("div[id^='"+l+"_next']",c).data("elementClass",
"innerbutton.next");c.playPause=b("#"+l+"_playpause_in",c).add(b("#"+l+"_playpause",c)).data("elementClass","innerplaypause");c.playButtons=c.playPause.children().filter(".play");c.pauseButtons=c.playPause.children().filter(".pause");g.auto?(c.playButtons.hide(),c.pauseButtons.show()):(c.playButtons.show(),c.pauseButtons.hide());c.paginationControl=b("#"+l+"_pagination_in",c);c.navbar=b("div[id='"+l+"_navbar_in']",c);c.progressbarContainer=b("div[id^='"+l+"_progressbar']");0<c.progressbarContainer.length&&
(c.progressbar=c.progressbarContainer.children(".progress-bar"),0==c.progressbar.length&&(c.progressbar=b("<div />").addClass("progress-bar").appendTo(c.progressbarContainer)),c.progressbar.css({left:-c.progressbarContainer.width()}),c.progressFunc={},c.progressFunc.progressReset=function(){c.progressbar.stop().animate({left:-c.progressbarContainer.width()},0)},c.progressFunc.progressStart=function(a){(new Date).getMilliseconds();c.progressbar.stop().animate({left:-c.progressbarContainer.width()},
0).animate({left:0},a?a:parseInt(g.delay))},c.progressFunc.progressPause=function(){c.progressbar.stop()},c.progressFunc.progressResume=function(a){a||(a=0);c.progressbar.stop(!0).animate({left:0},a)},g.auto&&c.progressFunc&&c.progressFunc.progressStart(),m.bind("owl.onstop",function(){c.progressFunc&&c.progressFunc.progressReset()}),m.bind("owl.onplay",function(a,b){c.progressFunc&&c.progressFunc.progressStart(b)}));for(var a=0;a<L.length;a++){var k=b("*[class^='"+L[a]+"']",c);if(0!=k.length){var u,
M=new RegExp("\\s*("+L[a]+"\\d+)\\s*");k.each(function(){u=this.className;var k=u.match(M);k&&(u=k[1]);u&&(b(this).addClass(L[a]),b(this).data("elementClass",u))})}}if(J){var k=function(a,k){a.each(function(a){a=b('<div id="'+b(this).attr("id")+'_wrapper"></div>');a.attr("class",b(this).attr("class"));var c=b(this).clone(),u=b(this).clone(),g=b(this),M=g.data("elementClass"),A=g.height();c.addClass("normal");c.attr("style","");c.css("position","static");c.css("display","block");if(g=(g=b(this).css("background-image"))&&
"none"!=g?g.match(/url\(['"]?([\w\W]*?)['"]?\)/):M?q(M+".backgroundImage"):!1){var e=b("<img />").attr("src",g[1]);setTimeout(function(){var a=Math.floor(A/2-e.height()/2);c.css({"text-align":"center","background-image":"none","padding-top":a+"px",height:A-a+"px"})},50);c.append(e)}c.appendTo(a);u.addClass("hover");u.attr("style","");u.css("position","static");u.css("display","none");u.attr("id",u.attr("id"));setTimeout(function(){var a=u.css("background-image");if(a=a&&"none"!=a?a.match(/url\(['"]?([\w\W]*?)['"]?\)/):
M?q(M+".hover.backgroundImage"):!1){var a=b("<img />").attr("src",a[1]),k=Math.floor(A/2-e.height()/2);u.css({"text-align":"center","background-image":"none","padding-top":k+"px",height:A-k+"px"});u.append(a)}},100);u.appendTo(a);a.css("top",b(this).css("top"));a.css("bottom",b(this).css("bottom"));a.css("left",b(this).css("left"));a.css("right",b(this).css("right"));a.css("position","absolute");a.css("width",b(this).css("width"));a.css("height",b(this).css("height"));b(this).replaceWith(a);k.push(a)})},
A=[],la=[],e=[],d=[];k(c.backButtons,A);k(c.nextButtons,la);k(c.playButtons,e);k(c.pauseButtons,d);c.backButtons=b(A[0]);c.nextButtons=b(la[0]);c.playButtons=b(e[0]);c.pauseButtons=b(d[0]);c.playButtons.css("position","static");c.pauseButtons.css("position","static");c.backButtons.css("z-index",1E5);c.nextButtons.css("z-index",1E5);c.playButtons.css("z-index",1E5)}}function z(){function a(a){var b=parseInt(this.css("padding-top"))*v,k=parseInt(this.css("padding-bottom"))*v,c=parseInt(this.css("padding-left"))*
v,g=parseInt(this.css("padding-right"))*v,e=parseInt(this.css("font-size"))*v,d=parseInt(this.css("line-height"))*v,b={"padding-top":b+"px","padding-bottom":k+"px","padding-left":c+"px","padding-right":g+"px","font-size":e+"px","line-height":d+"px"};u.find(a).css(b)}if(0!=c.navbar.length){c.navbar.selectThumb&&c.navbar.selectThumb(C);W=c.navbar;W.css({width:"",height:""});var k=W.find("ul"),u=k.children(),g=u.filter(function(){return b(this).children("a").hasClass("hover")||b(this).children("a").hasClass("active")?
!1:!0}).first(),A=g.children("a");g.removeAttr("style");A.removeAttr("style");var e=q("innernavbar.width",void 0,"auto"),d=q("innernavbar.height",void 0,"auto"),f=q("innernavbar.orientation",void 0,"horizontal"),h=q("innernavbar.items",void 0,I),l,m;"auto"==e?(e=g.width()*v,l=e*h):l=w.isPercentDim(e)?n.width()*parseInt(e)/100:parseInt(e)*v;m="auto"==d?d=g.height()*v:w.isPercentDim(d)?n.height()*parseInt(d)/100:parseInt(d)*v;e=l;d=m;if("horizontal"==f)var t=parseInt(g.css("min-width")),e=isNaN(t)?
Math.floor(e/h):Math.max(Math.floor(e/h),t);else t=parseInt(g.css("min-height")),d=isNaN(t)?Math.floor(d/h):Math.max(Math.floor(d/h),t);var h=A.getElementBox(),t=e-h.m.l-h.m.r,p=d-h.m.t-h.m.b;if("border-box"!=A.css("box-sizing")||b.browser.msie&&8>parseInt(b.browser.version,10))t=t-h.p.l-h.p.r-h.b.l-h.b.r,p=p-h.p.t-h.p.b-h.b.t-h.b.b;u.children("a").css({width:t,height:p});u.css({width:e+"px",height:d+"px"});W.css({width:Math.ceil(l)+"px",height:Math.ceil(m)+"px"});A=[">a","a span.title","a span.subtitle"];
for(l=0;l<A.length;l++)m=g.find(A[l]),m.css({"padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","font-size":"","line-height":""}),a.call(m,A[l]);"horizontal"==f?k.css({width:Math.ceil(u.length*e),height:""}):k.css({width:"",height:Math.ceil(u.length*d)})}}function y(a,b,c){var g=q(b+".halign"),e=q(b+".valign"),d=q(b+".left"),d=parseInt(d);isNaN(d)&&(d=a.position().left);b=q(b+".top");b=parseInt(b);isNaN(b)&&(b=a.position().top);switch(g){case "center":c=a.outerWidth();d=(n.width()-
c)/2+Math.ceil(d*v);a.css({left:d+"px",right:"auto"});break;default:case "left":a.css({left:Math.ceil(d*v),right:"auto"});0>d&&c&&(d=a.offset().left,d<p.offset().left&&a.css({left:"0px"}));break;case "right":a.css({right:Math.ceil(d*v),left:"auto"}),0>d&&c&&(c=a.outerWidth(),a.offset(),c+a.offset().left>p.width()&&a.css({right:"0px"}))}switch(e){case "middle":e=a.outerHeight();e=(n.height()-e)/2+Math.ceil(b*v);a.css({top:Math.ceil(e),bottom:"auto"});break;default:case "top":a.css({top:Math.ceil(b*
v),bottom:"auto"});break;case "bottom":a.css({bottom:Math.ceil(b*v),top:"auto"})}}function B(){for(var a=0;a<D.length;a++){var k=b("div[id^='"+l+D[a][1]+"']",c);0!=k.length&&(U?(!k.data("hideOnMouseOut")&&k.data("hideNavigation")&&(k.css("display",""),k.data("hideNavigation",!1)),y(k,D[a][0],!0),J&&(k.children().filter(".hover").css("display","none"),k.children().filter(".normal").css("display","block"))):(k.hide(),k.data("hideNavigation",!0)))}for(a=0;a<L.length;a++)if(k=b("."+L[a],c),0!=k.length){var u;
k.each(function(){(u=b(this).data("elementClass"))&&y(b(this),u)})}}function t(){if(1>v){var a=w.calculatePercentDim(E),k=K*v;g.fullWidth||p.width(a);p.height(k);n.height(k);b(".owl-item  > li",c).height(k);n.width("100%");b(".owl-item",c).find(X).each(function(){var a=b(this);a.css({left:"",top:"","font-size":"","line-height":"",width:"",height:"","padding-top":"","padding-right":"","padding-left":"","padding-bottom":""});var c=parseInt(a.css("font-size")),k=parseInt(a.css("line-height")),d=parseInt(a.css("padding-top")),
g=parseInt(a.css("padding-bottom")),e=parseInt(a.css("padding-right")),h=parseInt(a.css("padding-left"));a[0].tagName.toLowerCase();var f=a.data("elementClass"),l=q(f+".width"),t=q(f+".height",void 0,void 0,!0);if("undefined"!==typeof l&&-1<l.indexOf("%")||"undefined"===typeof l&&-1<f.indexOf("customText"))l="auto";var m;"auto"!=l&&(m=parseInt(l),isNaN(m)&&(m=a.css("width"),isNaN(m)&&(m=a.width())));var p;if("undefined"!==typeof t&&-1<t.indexOf("%")||"undefined"===typeof t&&-1<f.indexOf("customText"))t=
"auto";"auto"!=p&&(p=parseInt(t),isNaN(p)&&(p=a.css("height"),isNaN(p)&&(p=a.height())));var v=a.position(),Y="left",r="top",n={};f&&(Y=q(f+".halign"),r=q(f+".valign"));switch(r){case "top":n.top=w.calculatePercentDim(v.top)+"px";break;case "bottom":if(r=q(f+".bottom"))n.bottom=w.calculatePercentDim(parseInt(r))+"px"}switch(Y){case "left":n.left=w.calculatePercentDim(v.left)+"px";break;case "right":if(r=q(f+".right"))n.right=w.calculatePercentDim(parseInt(r))+"px"}n["font-size"]=Math.floor(w.calculatePercentDim(c))+
"px";n["line-height"]=Math.floor(w.calculatePercentDim(k))+"px";n["padding-top"]=Math.floor(w.calculatePercentDim(d))+"px";n["padding-bottom"]=Math.floor(w.calculatePercentDim(g))+"px";n["padding-right"]=Math.floor(w.calculatePercentDim(e))+"px";n["padding-left"]=Math.floor(w.calculatePercentDim(h))+"px";"auto"!=l&&(a.data("width",Math.ceil(w.calculatePercentDim(m))),n.width=a.data("width")+"px");"auto"!=t&&(a.data("height",Math.ceil(w.calculatePercentDim(p))),n.height=a.data("height")+"px");a.css(n)})}else b(".owl-item  > li",
c).css("height",""),b(".owl-item",c).find(X).each(function(){b(this).css({"font-size":"","line-height":"",width:"",height:"",left:"",top:"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","font-size":""}).removeData(["width","height"])})}function Y(a){var k=b("#extend-slider .owl-wrapper",c).children(".owl-item:eq("+C+")").children("li");a=b("#extend-slider .owl-wrapper",c).children(".owl-item:eq("+ma+")").children("li");setTimeout(function(){k.find(".customVideo").each(function(){var a=
b(this).data("elementClass");!0===q(a+".autoplay")&&(ea.play(b(this).data("videoplayer")),m.trigger("owl.stop"))})},parseInt(g.speed));a.find(".customVideo").each(function(){ea.pause(b(this).data("videoplayer"))})}function na(a){if(!fa){var k=a?a.currentItem:0;a=a?a.prevItem:-1;k=b("#extend-slider .owl-wrapper",c).children(".owl-item:eq("+k+")").children("li");b("#extend-slider .owl-wrapper",c).children(".owl-item:eq("+a+")").children("li");k.find(X).each(function(){var a=b(this).data("elementClass");
a&&"none"!=b(this).css("display")&&(a=F(b(this),a,"effect"))&&"none"!=a&&(b.browser.msie&&9>parseInt(b.browser.version,10)?b(this).data("animating",!1):b(this).velocity(a.inTransition,a.options))})}}function F(a,c,d){if(xtd_jQuery.Velocity&&xtd_jQuery.Velocity.Sequences){if(a.data("animating"))return null;var e={},h=q(c+"."+d);if(h&&velocityEffects.hasOwnProperty(h+"In")){if(h.match(/^xtd\./)&&!a.parent().hasClass("effect-wrapper")){var f=b("<div />").css({perspective:"500px","-webkit-perspective":"500px",
position:"absolute",width:"100%",height:"100%",top:"0px",left:"0px","z-index":a.css("z-index")}).addClass("effect-wrapper");a.wrap(f)}a.css({"-webkit-perspective-origin":"50% 50%"});e.inTransition=h+"In";e.outTransition=h+"Out";h=parseInt(q(c+"."+d+"Duration",void 0,1E3));f=parseInt(q(c+"."+d+"Delay",void 0,0));"mouseOutEffect"!=d&&(f+=parseInt(g.speed));c=q(c+"."+d+"Easing",void 0,"linear");a.data("animating",!0);e.options={duration:h,delay:f,easing:c,begin:function(a){},complete:function(b){a.data("animating",
!1);a.css({display:""})}};a.data("effectObj",e);return e}return null}}function q(a,b,c,d){if((b=void 0!==b?b:Q)&&"desktop"!=b){if(g[b]&&void 0!==g[b][a])return g[b][a];if(d)return c;d=0;for(var e=1;e<ga.length;e++)ga[e]==b&&(d=e);return q(a,ga[d+1],c)}return void 0!==g[a]?g[a]:c}function ja(){if(g.devices&&da){var a=b(G).outerWidth();Q="mobile";parseInt(g.devices.mobile.width);for(var c=["mobile","tablet","desktop"],d=0;d<c.length-1;d++){var e=parseInt(g.devices[c[d]].width);a>e&&(Q=e=c[d+1],parseInt(g.devices[e].width))}}else Q=
"desktop"}function O(){p.css("width","");p.css("height","");n.css("width","");n.css("height","");H=p.width();ha=p.height();E=q("width");w.isPercentDim(E);K=q("height");oa=w.isPercentDim(K);var a=q("innerslider.width",void 0,void 0,!0),b=w.isPercentDim(a);if("undefined"===typeof a||b)a=da?g.devices[Q].width:q("innerslider.minWidth");b=q("innerslider.height");w.isPercentDim(b);b=q("fullWidth");E?b?E=parseInt(a):(E=parseInt(a),w.isPercentDim(E),a=p.parent().width(),H=a<E?a:E):E=H;K=!K||oa?ha:parseInt(K);
Z=v=1;v=H/E;Z=ha/K;1<v&&(v=1);1<Z&&(Z=1)}function ka(){g.enableParallax=g.enableParallax&&!(b.browser.msie&&9>parseInt(b.browser.version,10));var a=g.parallaxWidth?g.parallaxWidth:0;0!=a&&g.enableParallax&&(a<H&&(-1!=p.css("background-repeat").indexOf("repeat-x")||"repeat"==p.css("background-repeat")||"repeat repeat"==p.css("background-repeat"))?N=Math.floor(H/(I-1)):a>H&&(N=Math.floor((a-H)/(I-1))),"right"==g.parallaxDirection&&0!=N&&(a=p.css("background-position"),a=a.split(" "),a[0]="-"+parseInt(N*
(I-1))+"px",a=2==a.length?a.join(" "):a[0]+" "+a[3],p.css("background-position",a)))}function qa(){if(g.enableParallax){var a;"left"==g.parallaxDirection?a=N*C:(a=I-C-1,0>a&&(a=I-1),a*=N);a="-"+a+"px";var c=p.css("background-position"),c=c.split(" "),d;d=2==c.length?c[1]:c[3];p.stop().animate({"border-spacing":a.replace("-",""),queue:!1},{step:function(a,c){b(c.elem).css("background-position","-"+a+"px "+d)},duration:parseInt(g.parallaxDuration)})}}function pa(){J?(c.playPause.children().filter(".play").css({display:"none"}),
c.playPause.children().filter(".pause").css({display:"block"})):(b("div[id^='"+l+"_playpause']",c).children().filter(".play").css({display:"none"}),b("div[id^='"+l+"_playpause']",c).children().filter(".pause").css({display:"block"}))}function R(){J?(c.playPause.children().filter(".play").css({display:"block"}),c.playPause.children().filter(".pause").css({display:"none"})):(b("div[id^='"+l+"_playpause']",c).children().filter(".play").css({display:"block"}),b("div[id^='"+l+"_playpause']",c).children().filter(".pause").css({display:"none"}))}
function ra(a,d){if(g.shuffle){var e=[];m.find(".owl-item li").each(function(){e.push(b(this).attr("data-title"))});for(var h=b("<ul />"),f=0;f<e.length;f++)h.append(a.find("li[data-title="+e[f]+"]"));a.children("ul").html(h.html())}a.thumbnailScroller(d);m.bind("owl.playNext owl.goTo owl.next owl.prev",function(a,b){c.navbar.selectThumb(C)});return a}function sa(a,b,c){c={itemsalign:"left",scrollerType:"hoverPrecise",scrollerOrientation:q(b+".orientation",null,"horizontal"),thumbs:a.thumbsource,
"hover.mouseOverEffect":!0,"hover.mouseOverEffectDuration":1E3,"hover.mouseOverEffectEasing":"swing",opacity:1,"hover.opacity":1,"active.opacity":1,"back.opacity":1,"next.opacity":1};for(var d in c){var e=b+"."+d;if("back.opacity"==d||"next.opacity"==d)e=b+"_"+d;if(a[e]&&"opacity"!=d)c[d]=a[e];else if(e=b+"item."+d,void 0!=a[e]&&(c[d]=a[e]),-1<b.indexOf("thumbscroll")||-1<b.indexOf("navbar"))e=b+"itemthumb."+d,void 0!=a[e]&&(c[d]=a[e])}-1<b.indexOf("bullets")&&"noScroll"==c.scrollerType;return c}
var c=this,n=b(this),p=n.parent(),m=n.children("ul");m.attr("id","extend-slider");m.css({"z-index":0});m.hide();var l=n.attr("id");this.length||(l=this.selector.replace(/^#/,""));var I,C,ma;b.globalEval("var global = this;");var g=global[l+"_json"],g=b.extend({},JQuerySlider_init,g);"undefined"!=typeof project&&"undefined"!=typeof project.jsData&&(g=b.extend({},JQuerySlider_init,project.jsData),g.xtdcode="754da4421273206edc1f40ab8e025114");p.css("background-image");b("#"+l+"-style");var H,ha,E,K,
oa,Z,v,U=!0,da="mediaqueries"==g.responsiveType,Q,ga=["mobile","tablet","desktop"];ja();"754da4421273206edc1f40ab8e025114"!=g.xtdcode&&e();var S=!1;g.sliderEffect&&"slide"!=g.sliderEffect&&(S=g.sliderEffect);var N=0,ca={navigation:!1,goToFirstSpeed:3E3,responsiveRefreshRate:10,singleItem:!0,transitionStyle:S,addClassActive:!0,autoPlay:g.auto?g.delay:!1,slideSpeed:g.speed,rewindSpeed:g.speed,stopOnHover:!1,lazyLoad:!1,touchDrag:!0,mouseDrag:!1,beforeMove:function(){},afterMove:function(){},afterAction:function(){C=
this.owl.currentItem;ma=this.owl.prevItem;this.owl.onstartup||na(this.owl);n.find("#"+l+"_pagination_in").children(".current").html(parseInt(C)+1);n.find("div[id^='"+l+"_numbers'] ul").children("li").children("a").removeClass("active");n.find("div[id^='"+l+"_bullets'] ul").children("li").children("a").removeClass("active");n.find("div[id^='"+l+"_navbar'] ul").children("li").children("a").removeClass("active");n.find("div[id^='"+l+"_numbers'] ul").children("li:eq("+C+")").children("a").addClass("active");
n.find("div[id^='"+l+"_bullets'] ul").children("li:eq("+C+")").children("a").addClass("active");n.find("div[id^='"+l+"_navbar'] ul").children("li:eq("+C+")").children("a").addClass("active");qa();C==I-1&&0==g.loop&&m.trigger("owl.stop");m.trigger("xtd.afterAction",[this.owl.currentItem]);Y();fa=!1},beforeInit:function(){n.find("li").removeClass("JQuerySliderShow JQuerySliderHide");n.find(".owl-item > li").each(function(){b(this).attr("data-title",b(this).attr("title"));b(this).removeAttr("title")});
m.show();if(g.shuffle)for(var a=m.get(0),c=a.children.length;0<=c;c--)a.appendChild(a.children[Math.random()*c|0]);I=m.children().length;t();ka()},afterInit:function(){function a(a){a=a.replace(/[\[]/,"\\[").replace(/[\]]/,"\\]");a=(new RegExp("[\\?&]"+a+"=([^&#]*)")).exec(G.location.search);return null==a?"":decodeURIComponent(a[1].replace(/\+/g," "))}x();if(0<c.navbar.length)try{ra(c.navbar,sa(g,"innernavbar",c.navbar))}catch(e){alert(e)}d();r();P=b("");for(var f=0;f<D.length;f++)if("innerprogressbar"!=
D[f][0]){var t=b("#"+l+D[f][1],c);if(g[D[f][0]+".hideOnMouseOut"]&&0<t.length){g[D[f][0]+".mouseOutEffect"]="transition.fade";g[D[f][0]+".mouseOutEffectDuration"]=300;g[D[f][0]+".mouseOutEffectDelay"]=30;g[D[f][0]+".mouseOutEffectEasing"]="linear";var n=F(t,D[f][0],"mouseOutEffect");n&&t.data("mouseOutEffect",n);P=P.add(t);t.hide()}G.location&&G.location.searchParams&&(t=a("powerslider2_slide"))&&m.trigger("owl.goTo",parseInt(t));b(G).bind("powerslider2.goTo",function(a,b){"undefined"!==typeof b&&
m.trigger("owl.goTo",parseInt(b))})}h();c.paginationControl.children(".total").html(I);m.find(".customVideo").each(function(){var a=b(this),c=b(this).find("iframe"),d=c.attr("id"),e=b(this).data("elementClass");d||c.attr("id",e+"player");d=q(e+".autoplay");ea.getIFramePlayer(c,{autoplay:d});a.data("videoplayer",c.attr("id"))});na()},beforeUpdate:d,afterUpdate:r,startDragging:function(){fa=!0}},D=[["innernavbar","_navbar_in"],["innerbutton.back","_back_in"],["innerbutton.next","_next_in"],["innerplaypause",
"_playpause_in"],["innerpagination","_pagination_in"],["innerbullets","_bullets_in"],["innernumbers","_numbers_in"],["innerprogressbar","_progressbar_in"]],S=[["navbar","bullets","numbers"],["back"],["next"],["playpause"],["pagination"]],L=["customText","customImage","customVideo","customButton","customHTML"],X=".customText, .customImage, .customVideo, .customButton, .customHTML";p.children().children("ul").children("li").children("div").children("a:only-child");var fa,ea=new ta,w={isPercentDim:function(a){return"string"===
typeof a?-1<a.indexOf("%"):!1},calculatePercentDim:function(a){return a*v}};O();m.owlCarousel(ca);b(c).find("div[id^='"+l+"_numbers'] ul").children("li:eq(0)").children("a").addClass("active");b(c).find("div[id^='"+l+"_bullets'] ul").children("li:eq(0)").children("a").addClass("active");b(c).find("div[id^='"+l+"_navbar'] ul").children("li:eq(0)").children("a").addClass("active");b("div[id^='"+l+"_playpause_in']",c).css("z-index",1E5);g.pauseOnHover&&(p.bind("mouseenter",function(a){m.trigger("owl.stop",
[!0])}),p.bind("mouseleave",function(a){m.trigger("owl.play",[g.delay,!0])}));var P,V=!1,ba;p.mouseenter(function(){V=!0;f()}).mouseleave(function(){V=!1;h()});b(c.backButtons).add(c.nextButtons).add(c.playButtons).add(c.pauseButtons).mouseenter(function(a){a=b(this);J?(a.children().filter(".hover").css("display","block"),a.children().filter(".normal").css("display","none")):a.addClass("hover")}).mouseleave(function(a){a=b(this);J?(a.children().filter(".hover").css("display","none"),a.children().filter(".normal").css("display",
"block")):a.removeClass("hover")});c.backButtons.click(function(a){a.preventDefault();g.stopAtInteraction&&(m.trigger("owl.stop"),R());m.trigger("owl.prev")});c.nextButtons.click(function(a){a.preventDefault();g.stopAtInteraction&&(m.trigger("owl.stop"),R());m.trigger("owl.next")});c.playPause.click(function(a){a.preventDefault();"block"==c.playPause.children().filter(".play").css("display")?(m.trigger("owl.play",g.delay),pa()):(m.trigger("owl.stop"),R())});1==g.auto?pa():(m.trigger("owl.stop"),R());
for(var ia=0;ia<S[0].length;ia++){var T=b("div[id='"+l+"_"+S[0][ia]+"_in'] ul li",c);T&&0!=T.length&&(T.children().css("float","left"),T.children().css("clear","left"),T.hover(function(a){b(this).children("a").hasClass("active")&&b(this).children("a").removeClass("active");b(this).children("a").addClass("hover")},function(a){b(this).attr("data-title")==b(c).find("#extend-slider .active > li").attr("data-title")&&b(this).children("a").addClass("active");b(this).children("a").removeClass("hover")}))}b(X,
c).hover(function(a){b(this).addClass("hover")},function(a){b(this).removeClass("hover")});b("div[id^='"+l+"_numbers'] ul, div[id^='"+l+"_bullets'] ul, div[id^='"+l+"_navbar'] ul",c).children("li").click(function(a){a.preventDefault();g.stopAtInteraction&&(m.trigger("owl.stop"),R());C!=b(this).index()&&m.trigger("owl.goTo",b(this).index())});var W="navbar_in";return m};var ta=function(){function e(b,d){switch(b){case "play":d&&B[d].play();break;case "pause":d&&B[d].pause();break;case "stop":d&&B[d].stop()}}
var f=function(){var d=O.createElement("script");d.src="http://www.youtube.com/iframe_api";var e=O.getElementsByTagName("script")[0];e.parentNode.insertBefore(d,e);var f=[];return{registerPlayer:function(b){f.push(b)},iframeAPIReady:function(){for(var d=0;d<f.length;d++){var e=f[d],h=b.extend({},e.events);new YT.Player(e.id,{events:h})}}}},h=function(){var b=[];return{registerPlayer:function(d,e){b.push(d)}}},d=function(b,d,e){this.id=b;this.iframe=d;this.options=e;var f=this;this.events={onReady:function(b){f.api=
b.target;"playing"==f.status&&f.play()},onError:function(){}}},r=function(b,d,e){this.constructor(b,d,e)};r.prototype=new d;r.prototype.play=function(){this.api&&this.api.playVideo();this.status="playing"};r.prototype.stop=function(){this.api&&this.api.stopVideo();this.status="stopped"};r.prototype.pause=function(){this.api&&this.api.pauseVideo();this.status="paused"};var x=function(b,d,e){this.constructor(b,d,e)};x.prototype=new d;x.prototype.play=function(){this.froogaloop&&this.froogaloop.api("play")};
x.prototype.stop=function(){this.froogaloop&&this.froogaloop.api("stop")};x.prototype.pause=function(){this.froogaloop&&this.froogaloop.api("pause")};var z,y,B={};return{getIFramePlayer:function(b,d){var e=b.attr("id"),F=b.attr("src");if(-1<F.indexOf("vimeo.com"))"undefined"===typeof y&&(y=new h(b)),F=new x(e,b,d),B[e]=F;else if(-1<F.indexOf("youtube.com")){if("undefined"===typeof z)if(z=new f,G.onYouTubeIframeAPIReady){var q=G.onYouTubeIframeAPIReady;G.onYouTubeIframeAPIReady=function(){z.iframeAPIReady();
q()}}else G.onYouTubeIframeAPIReady=z.iframeAPIReady;F=new r(e,b,d);z.registerPlayer(F);B[e]=F}},pause:function(b){e("pause",b)},pauseAll:function(){e("pause")},play:function(b){e("play",b)},playAll:function(){e("play")},stop:function(b){e("stop",b)},stopAll:function(){e("stop")}}};b.fn.getElementBox=function(){var e={},f={},h={},d=b(this);e.l=parseInt(d.css("padding-left"));e.r=parseInt(d.css("padding-right"));e.t=parseInt(d.css("padding-top"));e.b=parseInt(d.css("padding-bottom"));f.l=parseInt(d.css("border-left-width"));
f.r=parseInt(d.css("border-right-width"));f.t=parseInt(d.css("border-top-width"));f.b=parseInt(d.css("border-bottom-width"));h.l=parseInt(d.css("margin-left"));h.r=parseInt(d.css("margin-right"));h.t=parseInt(d.css("margin-top"));h.b=parseInt(d.css("margin-bottom"));var e={p:e,b:f,m:h},r;for(r in e)for(var x in e[r])isNaN(e[r][x])&&(e[r][x]=0);return e};var aa={_keyStr:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",encode:function(b){var f="",h,d,r,x,z,y,B=0;for(b=aa._utf8_encode(b);B<
b.length;)h=b.charCodeAt(B++),d=b.charCodeAt(B++),r=b.charCodeAt(B++),x=h>>2,h=(h&3)<<4|d>>4,z=(d&15)<<2|r>>6,y=r&63,isNaN(d)?z=y=64:isNaN(r)&&(y=64),f=f+this._keyStr.charAt(x)+this._keyStr.charAt(h)+this._keyStr.charAt(z)+this._keyStr.charAt(y);return f},decode:function(b){var f="",h,d,r,x,z,y=0;for(b=b.replace(/[^A-Za-z0-9\+\/\=]/g,"");y<b.length;)h=this._keyStr.indexOf(b.charAt(y++)),d=this._keyStr.indexOf(b.charAt(y++)),x=this._keyStr.indexOf(b.charAt(y++)),z=this._keyStr.indexOf(b.charAt(y++)),
h=h<<2|d>>4,d=(d&15)<<4|x>>2,r=(x&3)<<6|z,f+=String.fromCharCode(h),64!=x&&(f+=String.fromCharCode(d)),64!=z&&(f+=String.fromCharCode(r));return f=aa._utf8_decode(f)},_utf8_encode:function(b){b=b.replace(/\r\n/g,"\n");for(var f="",h=0;h<b.length;h++){var d=b.charCodeAt(h);128>d?f+=String.fromCharCode(d):(127<d&&2048>d?f+=String.fromCharCode(d>>6|192):(f+=String.fromCharCode(d>>12|224),f+=String.fromCharCode(d>>6&63|128)),f+=String.fromCharCode(d&63|128))}return f},_utf8_decode:function(b){for(var f=
"",h=0,d=c1=c2=0;h<b.length;)d=b.charCodeAt(h),128>d?(f+=String.fromCharCode(d),h++):191<d&&224>d?(c2=b.charCodeAt(h+1),f+=String.fromCharCode((d&31)<<6|c2&63),h+=2):(c2=b.charCodeAt(h+1),c3=b.charCodeAt(h+2),f+=String.fromCharCode((d&15)<<12|(c2&63)<<6|c3&63),h+=3);return f}}})(xtd_jQuery,window,document);

/*
Thumbnail scroller jQuery plugin
Author: malihu [http://manos.malihu.gr]
Homepage: manos.malihu.gr/jquery-thumbnail-scroller
*/
(function($){  
   var JQuerySlider_isIE = $.browser.msie && parseInt($.browser.version, 10) < 10;
   $.fn.thumbnailScroller=function(options){  
   var defaults={ //default options
      scrollerType:"hoverPrecise", //values: "hoverPrecise", "hoverAccelerate", "clickButtons"
      scrollerOrientation:"horizontal", //values: "horizontal", "vertical"
      scrollEasing:"easeOutCirc", //easing type
      scrollEasingAmount:1000, //value: milliseconds
      acceleration:2, //value: integer
      scrollSpeed:400, //value: milliseconds
      noScrollCenterSpace:0, //value: pixels
      autoScrolling:0, //value: integer
      autoScrollingSpeed:8000, //value: milliseconds//
      autoScrollingEasing:"easeInOutQuad", //easing type//
      autoScrollingDelay:2500, //value: milliseconds,
      thumbs : [], //thumbs data source,
      changed : function(index){}
   };
   
   var activeSlide = 0;
   
   var options=$.extend(defaults,options);
   
   function applyOpacity() {
      return !(options["active.opacity"] == options["hover.opacity"] == options["opacity"] == 1)
   }
   
   function showActive(el) {
      if (!JQuerySlider_isIE) {  
         el.children('a').removeClass("hover"); 
         el.children('a').removeClass("normal"); 
         el.children('a').addClass("active"); 
      }
      
      //alert('showActive$$' + el.children('a').filter('.active').find('img').length);
      if (applyOpacity()) {
         //alert(el.children('a').filter('.active').find('img').not('.bgImg').length);
         el.children('a').filter('.active').find('img').not('.bgImg').css('opacity', options["active.opacity"]);//.applyOpacity(options["active.opacity"])//.css('opacity', options["active.opacity"]);
      }
   }
   
   
   function hideActive(el) {
      if (!JQuerySlider_isIE) {  
         //trace('hide active thumb');
         el.children('a').removeClass("active"); 
         el.children('a').addClass("normal"); 
      }
      //alert(el.find('img').length);
      if (applyOpacity()) {
         el.children('a').filter('.normal').find('img').not('.bgImg').css('opacity', options["opacity"]);//.applyOpacity(options["opacity"])//.css('opacity', options["opacity"]);
      }
   }
   
   
   function showNormal(el) {

      if (!JQuerySlider_isIE) {     
         //trace('show normal thumb');
         el.children('a').removeClass("hover"); 
         el.children('a').addClass("normal");
      }
      
      //alert('showNormal');
      if (applyOpacity()) {
         if(!(el.children('a').hasClass('active') && el.children('a').filter('.active').css("display") != 'none')) { 
            el.children('a').filter('.normal').find('img').not('.bgImg').css('opacity', options["opacity"]);//.applyOpacity(options["opacity"])
            //el.find('img').css('opacity', options["opacity"]);
         } else {
            el.children('a').filter('.active').find('img').not('.bgImg').css('opacity', options["active.opacity"])//.applyOpacity(options["active.opacity"])
            //el.find('img').css('opacity', options["active.opacity"]);
         }
      }
   }
   
   function showHover(el) {
      if (!JQuerySlider_isIE) {
         //trace('show hover thumb');
         el.children('a').removeClass("normal"); 
         el.children('a').addClass("hover");          
      }
      
      if (applyOpacity()) {
         //if(!(el.children('a').hasClass('active') && el.children('a').filter('.active').css("display") != 'none')) {
            el.children('a').filter('.hover').find('img').not('.bgImg').css('opacity', options["hover.opacity"]);//.applyOpacity(options["active.opacity"])
            //el.find('img').css('opacity', options["hover.opacity"]);
         //} 
      }
   }
   
   
   
   function nextThumb() {
      if (activeSlide < $scroller.children().length - 1) {
         var thumb = $scroller.children().eq(activeSlide);
         //thumb.children('a').removeClass('active');
         
         showNormal(thumb);
         
         activeSlide++;
         
         thumb = $scroller.children().eq(activeSlide);
         //thumb.children('a').addClass('active');
         
         showActive(thumb);
         
         /*
         if (options.changed) {
            options.changed(activeSlide);
         }*/
         
         scrollToIndex(activeSlide);
      }
   }
   
   function prevThumb() {
      if (activeSlide > 0) {
         var thumb = $scroller.children().eq(activeSlide);
         //thumb.children('a').removeClass('active');
         
         showNormal(thumb);
         
         activeSlide--;
         
         thumb = $scroller.children().eq(activeSlide);
         //thumb.children('a').addClass('active');
         
         showActive(thumb);
         
         /*
         if (options.changed) {
            options.changed(activeSlide);
         }*/
         
         scrollToIndex(activeSlide);
      }
   }
   
   function selectThumb(index) {
      
      var prev = $scroller.children().eq(activeSlide);
      hideActive(prev);
      
      //trace('in select thumb ' + index);
      activeSlide = index;
      
      var scroll = !($(this).data('mouseover'));
      //alert('select thumb ' + index + " .. scroll " + scroll);
      if (scroll) { 
         scrollToIndex(index);
      } else { 
          if(options.scrollerType != "hoverPrecise") { 
            scrollToIndex(index);
          }
      }
      
      var thumb = $scroller.children().eq(index);
      
      
      //trace(thumb.html());
      //$scroller.children().children('a').removeClass('active');
      //showNormal($scroller.children());
      
      //alert('thumb##' + thumb[0]);
      
      showActive(thumb);
      
      //thumb.children('a').addClass('active');
   }
   
   this.nextThumb = nextThumb;
   this.prevThumb = prevThumb;
   this.selectThumb = selectThumb;
   
   function scrollToIndex(index){
     
      //trace('in scroll to index');
      var thumb = $scroller.children().eq(index);
      var noOfThumbs = $scroller.children().length;
      //alert(noOfThumbs);
      
      if(options.scrollerOrientation=="horizontal"){
         noOfThumbs = $this.width() / thumb.outerWidth(true);
      } else {
         noOfThumbs = $this.height() / thumb.outerHeight(true);
      }
      
      noOfThumbs = Math.floor(noOfThumbs/2);
      
      var newLeft = - thumb.position().left;
      newLeft += noOfThumbs * thumb.outerWidth(true);
      
      //alert(thumb.outerWidth(true));
      
      if ($scroller.width() + newLeft < $this.width()) {
         newLeft = - ($scroller.width() - $this.width());
      }
      
      if (newLeft > 0 ) {
         newLeft = 0;
      }
      
      var newTop = - thumb.position().top;
      newTop += noOfThumbs * thumb.outerHeight(true);
      
      if ($scroller.height() + newTop < $this.height()) {
         newTop = - ($scroller.height() - $this.height());
      }
      
      if (newTop > 0 ) {
         newTop = 0;
      }

      if(options.scrollerOrientation=="horizontal"){
         $scroller.stop().animate({left:newLeft}, options.scrollSpeed, options.scrollEasing, showHideButtons(newLeft,newTop));
      } else {
         $scroller.stop().animate({top:newTop}, options.scrollSpeed, options.scrollEasing, showHideButtons(newLeft,newTop));
      }
      
   }
   
   this.scrollToIndex = scrollToIndex;
   
   function showHideButtons(posX, posY) {
      return;
      
      if(options.scrollerType != "clickButtons") return;
      //var posX = $scroller.position().left;
      //var posY = $scroller.position().top;
      
      var diffX = $scroller.width() + (posX - $this.width());
      var diffY = $scroller.height() + (posY - $this.height()); 
      
      if(options.scrollerOrientation == "horizontal") { 
         if(diffX <= 0) { 
            $scrollerNextButton.stop().hide("fast");
         } else {
            $scrollerNextButton.stop().show("fast");
         }
         
         if(posX >= 0) { 
            $scrollerPrevButton.stop().hide("fast");
         } else { 
            $scrollerPrevButton.stop().show("fast");
         }
      } else { 
         //alert(diffY);
         if(diffY <= 0) { 
            $scrollerNextButton.stop().hide("fast");
         } else {
            $scrollerNextButton.stop().show("fast");
         }
         //alert(posY);
         if(posY >= 0) { 
            $scrollerPrevButton.stop().hide("fast");
         } else { 
            $scrollerPrevButton.stop().show("fast");
         }
      }
   }
   
   function nextPage(){
      var posX = $scroller.position().left;
      var posY = $scroller.position().top;
      
      var diffX = $scroller.width() + (posX - $this.width());
      var diffY = $scroller.height() + (posY - $this.height());
      
      //$scrollerPrevButton.stop().show("fast");
      //alert(diffX + " = " + $scroller.width() + " + " + posX  + " - " + $this.width());
      
      if(options.scrollerOrientation=="horizontal"){
         if(diffX >= $this.width()){
            $scroller.stop().animate({left:"-="+$this.width()},options.scrollSpeed,options.scrollEasing,function(){
               //if(diffX==$this.width()){
                  //$scrollerNextButton.stop().hide("fast");
               //}
            });
         } else {
            //$scrollerNextButton.stop().hide("fast");
            $scroller.stop().animate({left:$this.width()-$scroller.width()},options.scrollSpeed,options.scrollEasing);
         }
      }else{
         if(diffY>=$this.height()){
            $scroller.stop().animate({top:"-="+$this.height()},options.scrollSpeed,options.scrollEasing,function(){
               //if(diffY==$this.height()){
                  //$scrollerNextButton.stop().hide("fast");
               //}
            });
         } else {
            //$scrollerNextButton.stop().hide("fast");
            $scroller.stop().animate({top:$this.height()-$scroller.height()},options.scrollSpeed,options.scrollEasing);
         }
      }
   }
   
   function prevPage() {
      var posX=$scroller.position().left;
      var diffX=$scroller.width()+(posX-$this.width());
      var posY=$scroller.position().top;
      var diffY=$scroller.height()+(posY-$this.height());
      //$scrollerNextButton.stop().show("fast");
      if(options.scrollerOrientation=="horizontal"){
         if(posX + $this.width() <= 0){
            $scroller.stop().animate({left : "+=" + $this.width()}, options.scrollSpeed, options.scrollEasing, function(){
               //if(posX+$this.width()==0){
               // $scrollerPrevButton.stop().hide("fast");
               //}
            });
         } else {
            //$scrollerPrevButton.stop().hide("fast");
            $scroller.stop().animate({left:0},options.scrollSpeed,options.scrollEasing);
         }
      }else{
         if(posY + $this.height() <= 0){
            $scroller.stop().animate({top:"+="+$this.height()}, options.scrollSpeed, options.scrollEasing, function(){
               //if(posY+$this.height()==0){
               // $scrollerPrevButton.stop().hide("fast");
               //}
            });
         } else {
            //$scrollerPrevButton.stop().hide("fast");
            $scroller.stop().animate({top:0},options.scrollSpeed,options.scrollEasing);
         }
      }  
   }
   
   var $scroller, $scrollerContainer, $scrollerNextButton, $scrollerPrevButton, totalWidth, totalHeight, $this;
   
   var isNav;
    return this.each(function(){
      
      //cache vars
      $this = $(this);



      this.scrollToIndex = scrollToIndex;

      
      var hasThumbs = false;
      var thumbsType;
      
      if($(this).attr('id').indexOf('thumbscroll') > 0 ) { 
         hasThumbs = true;
         thumbsType = 'thumbscroll';
      } 
      if($(this).attr('id').indexOf('navbar') > 0) { 
         hasThumbs = true;
         thumbsType = 'navbar';
      }
      
      $(this).hover(function() { 
         if(options.mouseChanged) { 
            options.mouseChanged('in');
         }
      }, function() { 
         if(options.mouseChanged) { 
            options.mouseChanged('out');
         }
      });
      
      
      $scrollerContainer = $('<div />');
      $this.append($scrollerContainer);
      
      
      $scrollerContainer.append($this.children('ul').clone(true,true));
      $this.children('ul').first().remove();
      $scroller = $scrollerContainer.children('ul');
      
      
      
      if(hasThumbs) { 
         //var thumbsImgs = createThumbsImgs(options.thumbs);
         
         $scroller.children().each(function (i) { 
            var source = options.thumbs;
            var img;
            if(thumbsType == "navbar") { 
               
               //img = $(this).children('a').children('img').attr('src', source[i].src).css({'width' : source[i].width + 'px', 'height' : source[i].height + 'px'});
            } else { 
               
               var pw = $(this).children('a').width();
               var ph =  $(this).children('a').height();
               
               img = $('<img/>').attr('src', source[i].src);
               
               $(this).children('a').append(img);
               
               var bl = parseInt(img.css('border-left-width')) - parseInt(img.css('padding-left'));
               var br = parseInt(img.css('border-right-width')) - parseInt(img.css('padding-right'));
               var bt = parseInt(img.css('border-top-width')) - parseInt(img.css('padding-top'));
               var bb = parseInt(img.css('border-bottom-width')) - parseInt(img.css('padding-bottom'));
                     
               $(this).children('a').children('img').css({'width' : (pw - ( bl + br)) + 'px', 'height' : (ph - (bt + bb)) + 'px'});
               $(this).children('a').children('img').attr({'width' : (pw - ( bl + br)), 'height' : (ph - (bt + bb))})
               
            }
            
            
            var el = $(this);
            var img = el.find('img').not('bgImg');
            img.css('opacity', options["opacity"]);
            
            var a = el.children('a').first();
            var duration = parseFloat(options["hover.mouseOverEffectDuration"]);

            el.hover(function () { 
               if(options["hover.mouseOverEffect"] == true) {
               // alert(el.hasClass('active'));
                  if(el.children('a').filter('.active').css('display') != "block") { 
                     img.stop().animate({opacity:options["hover.opacity"]},options["hover.mouseOverEffectDuration"],options["hover.mouseOverEffectEasing"]);
                  } else {
                     //trace("########## it's active ##############");
                     showActive(el)
                  }
               } else { 
                  if(el.children('a').filter('.active').css('display') != "block") { 
                  //el.css({opacity: options["hover.opacity"]});
                     showHover(el);
                  }
               }
            }, function () { 
               if(options["hover.mouseOverEffect"] == true) {
                  if(el.children('a').filter('.active').css('display') != "block") { 
                     img.stop().animate({opacity:options["opacity"]}, parseFloat(options["hover.mouseOverEffectDuration"]),options["hover.mouseOverEffectEasing"]);
                  } else {
                     showActive(el);
                  }
               } else {
                  if(el.children('a').filter('.active').css('display') != "block") { 
                     showNormal(el);
                  }
               }
            });
         });
      }
      
      $scrollerContainer.css("overflow", "hidden");
      //alert("attr id " + $(this).attr('id') + " html : " + $scroller.html());
      //var clipValues = ['-9999px', $this.width() + "px", 'auto', '0px'];
      $scrollerContainer.css({
         'width' : '100%',
         'position' : 'relative',
         'height' : '100%'
      }).addClass('thumb-scroller-container');
   
      $scrollerNextButton = $('#' + $this.attr('id').replace("_in","_next_in") + "", jQuerySlider);
      if(options["next.opacity"]) { 
         $scrollerNextButton.css({opacity: options["next.opacity"]}); 
      }
      
      $scrollerPrevButton = $('#' + $this.attr('id').replace("_in","_back_in") + "", jQuerySlider);
      if(options["back.opacity"]) { 
         $scrollerPrevButton.css({opacity: options["back.opacity"]}); 
      }
      $scrollerNextButton.add($scrollerPrevButton).hover(function() { 
         $(this).addClass('hover');
      }, function() { 
         $(this).removeClass('hover');
      });
      //set scroller width
      if(options.scrollerOrientation == "horizontal"){
         //alert('outerWidth : ' + $scroller.outerWidth(true));
         totalWidth = 0;
         $scroller.children('li').each (function() {
            //var over = $(this).children('a').first().data("overCSS");
            totalWidth += $(this).outerWidth(true)// + over.borderLeftWidth + over.borderRightWidth + over.paddingRight + over.paddingLeft;        
         });
         
         $scroller.css("width",totalWidth); 
         
      
         totalHeight = $scroller.outerHeight(true);
      }else{
         totalWidth = $scroller.outerWidth(true);
         totalHeight = 0;
         $scroller.children('li').each (function() {
            totalHeight += $(this).outerHeight(true);       
         });
      
         $scroller.css("height",totalHeight);
      }
       //scroller height
       
      //alert(totalHeight + "##" + $this.height()  + "##" + $scrollerContainer.height())

      //do the scrolling//
      if((totalWidth > $this.width() && options.scrollerOrientation == "horizontal") || (totalHeight > $this.height() && options.scrollerOrientation == "vertical")){ //needs scrolling      
         var pos;
         var mouseCoords;
         var mouseCoordsY;
         //alert(options.scrollerType);
         switch (options.scrollerType){ //type hoverAccelerate
            case "hoverAccelerate" : 
               var animTimer;
               var interval = 8;
               $this.hover(function(){
                  $this.mousemove(function(e){
                     pos = findPos(this);
                     //trace('mousemove##' + pos[0] + "##" + pos[1]);
                     mouseCoords = (e.pageX-pos[1]);
                     mouseCoordsY = (e.pageY-pos[0]);
                  });
                  
                  clearInterval(animTimer);
                  animTimer = setInterval(Scrolling, interval);
               }, function(){
                  clearInterval(animTimer);
                  $scroller.stop();
               });
               
               $scrollerPrevButton.add($scrollerNextButton).hide(); //hide buttons
            break;
            
            case "clickButtons" : 
               ClickScrolling();
            break;
            
            case "hoverPrecise" :      
         
               pos = findPos(this);
            
               //alert('pos[0] + "##" + pos[1]##' + pos[0] + "##" + pos[1]);
               //trace(pos[0] + "##" + pos[1]);
               
               $this.mousemove(function(e){
                  //trace('mousemove##' + pos[0] + "##" + pos[1]);
                  
                  mouseCoords = (e.pageX - pos[1]);
                  mouseCoordsY = (e.pageY - pos[0]);
                  
                  var mousePercentX = mouseCoords/$this.width(); if(mousePercentX > 1) {mousePercentX = 1;}
                  var mousePercentY = mouseCoordsY/($this.outerHeight()); if(mousePercentY > 1){mousePercentY = 1;}
                  
                  if (mousePercentX < 0.1) { 
                     mousePercentX = 0;
                  } 
                  if (mousePercentX > 0.9) { 
                     mousePercentX = 1;
                  } 
                  
                  if (mousePercentY < 0.1) { 
                     mousePercentY = 0;
                  } 
                  if (mousePercentY > 0.9) { 
                     mousePercentY = 1;
                  } 
                  
                  var destX = Math.round(-(($scroller.width() - $this.width())*(mousePercentX)));
                  var destY = Math.round(-(($scroller.height() - $this.height())*(mousePercentY)));
                  
                  //alert(destX + "##" + totalWidth + "##" + $this.width() + "##" + mousePercentX);
                  if(options.scrollerOrientation=="horizontal"){
                     $scroller.stop(true, false).animate({left:destX}, options.scrollEasingAmount, options.scrollEasing); 
                  } else { 
                     $scroller.stop(true, false).animate({top:destY}, options.scrollEasingAmount, options.scrollEasing); 
                  }
                  
               });
               
               $scrollerPrevButton.add($scrollerNextButton).hide(); //hide buttons
            break;
         }
         //auto scrolling
         if(options.autoScrolling){
            AutoScrolling();
         }
         
      } else {
         //no scrolling needed
         //$scrollerPrevButton.add($scrollerNextButton).hide(); //hide buttons
         
         // align thumbs
         if(options.scrollerOrientation == "horizontal") { 
            if(options.itemsalign == "right") { 
               $scrollerContainer.children('ul').css({"marginRight" : "0px", "marginLeft" : "auto"});
            } else { 
               if(options.itemsalign == "center") { 
                  $scrollerContainer.children('ul').css({"marginRight" : "auto", "marginLeft" : "auto"});
               }  
            }
         }
         
         
      }
      
      //"hoverAccelerate" scrolling fn
      var scrollerPos;
      var scrollerPosY;
      function Scrolling(){
         if(options.scrollerOrientation=="horizontal"){
            if((mouseCoords<$this.width()/2) && ($scroller.position().left>=0)){
               $scroller.stop(true,true).css("left",0); 
            }else if((mouseCoords>$this.width()/2) && ($scroller.position().left<=-($scroller.width()-$this.width()))){
               $scroller.stop(true,true).css("left",-($scroller.width()-$this.width())); 
            }else{
               if((mouseCoords<=($this.width()/2)-options.noScrollCenterSpace) || (mouseCoords>=($this.width()/2)+options.noScrollCenterSpace)){
                  scrollerPos=Math.round(Math.cos((mouseCoords/$this.width())*Math.PI)*(interval+options.acceleration));
                  $scroller.stop(true,true).animate({left:"+="+scrollerPos},interval,"linear"); 
               }else{
                  $scroller.stop(true,true);
               }
            }
         } else {    
            if((mouseCoordsY<$this.height()/2) && ($scroller.position().top>=0)){
               $scroller.stop(true,true).css("top",0); 
            }else if((mouseCoordsY>$this.height()/2) && ($scroller.position().top<=-($scroller.height()-$this.height()))){
               $scroller.stop(true,true).css("top",-($scroller.height()-$this.height())); 
            }else{
               if((mouseCoordsY<=($this.height()/2)-options.noScrollCenterSpace) || (mouseCoordsY>=($this.height()/2)+options.noScrollCenterSpace)){
                  scrollerPosY=Math.cos((mouseCoordsY/$this.height())*Math.PI)*(interval+options.acceleration);
                  $scroller.stop(true,true).animate({top:"+="+scrollerPosY},interval,"linear"); 
               }else{
                  $scroller.stop(true,true);
               }
            }
         }
      }
      //auto scrolling fn
      var autoScrollingCount=0;
      function AutoScrolling(){
         
         $scroller.delay(options.autoScrollingDelay).animate(
            {
               left : -($scroller.width()-$this.width()),
               top : -($scroller.height()-$this.height())
            },
            
            options.autoScrollingSpeed,
            options.autoScrollingEasing, 
            function(){
               $scroller.animate({left:0,top:0},
                  options.autoScrollingSpeed,options.autoScrollingEasing,function(){
                     autoScrollingCount++;
                     if(options.autoScrolling>1 && options.autoScrolling!=autoScrollingCount){
                        AutoScrolling();
                     }
                  });
            }
         );
      }
      
      
      
      //click scrolling fn
      function ClickScrolling(){
         $scrollerPrevButton.show();
         $scrollerNextButton.show();
         
         $scrollerNextButton.click(function(e){
            e.preventDefault();
            nextPage();
         });
         
         $scrollerPrevButton.click(function(e){ //previous button
            e.preventDefault();
            prevPage();
         });
      }
      
      selectThumb(0);
   });  
   

   //global js functions
   //find element Position
   function findPos(obj){
      var curleft=curtop=0;
      if (obj.offsetParent){
         curleft=obj.offsetLeft
         curtop=obj.offsetTop
         while(obj=obj.offsetParent){
            curleft+=obj.offsetLeft
            curtop+=obj.offsetTop
         }
      }
      return [curtop,curleft];
   }
   
 };  
 

})(xtd_jQuery); 


