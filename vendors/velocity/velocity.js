/*! VelocityJS.org (1.2.2). (C) 2014 Julian Shapiro. MIT @license: en.wikipedia.org/wiki/MIT_License */
/*! VelocityJS.org jQuery Shim (1.0.1). (C) 2014 The jQuery Foundation. MIT @license: en.wikipedia.org/wiki/MIT_License. */
!function(e){if(!e.jQuery){var t=function(e,r){return new t.fn.init(e,r)};t.isWindow=function(e){return null!=e&&e==e.window},t.type=function(e){return null==e?e+"":"object"==typeof e||"function"==typeof e?o[a.call(e)]||"object":typeof e},t.isArray=Array.isArray||function(e){return"array"===t.type(e)},t.isPlainObject=function(e){var r;if(!e||"object"!==t.type(e)||e.nodeType||t.isWindow(e))return!1;try{if(e.constructor&&!i.call(e,"constructor")&&!i.call(e.constructor.prototype,"isPrototypeOf"))return!1}catch(e){return!1}for(r in e);return void 0===r||i.call(e,r)},t.each=function(e,t,r){var o=0,i=e.length,a=l(e);if(r){if(a)for(;o<i&&!1!==t.apply(e[o],r);o++);else for(o in e)if(!1===t.apply(e[o],r))break}else if(a)for(;o<i&&!1!==t.call(e[o],o,e[o]);o++);else for(o in e)if(!1===t.call(e[o],o,e[o]))break;return e},t.data=function(e,o,i){if(void 0===i){var a=(n=e[t.expando])&&r[n];if(void 0===o)return a;if(a&&o in a)return a[o]}else if(void 0!==o){var n=e[t.expando]||(e[t.expando]=++t.uuid);return r[n]=r[n]||{},r[n][o]=i,i}},t.removeData=function(e,o){var i=e[t.expando],a=i&&r[i];a&&t.each(o,(function(e,t){delete a[t]}))},t.extend=function(){var e,r,o,i,a,n,s=arguments[0]||{},l=1,u=arguments.length,c=!1;for("boolean"==typeof s&&(c=s,s=arguments[l]||{},l++),"object"!=typeof s&&"function"!==t.type(s)&&(s={}),l===u&&(s=this,l--);l<u;l++)if(null!=(a=arguments[l]))for(i in a)e=s[i],s!==(o=a[i])&&(c&&o&&(t.isPlainObject(o)||(r=t.isArray(o)))?(r?(r=!1,n=e&&t.isArray(e)?e:[]):n=e&&t.isPlainObject(e)?e:{},s[i]=t.extend(c,n,o)):void 0!==o&&(s[i]=o));return s},t.queue=function(e,r,o){if(e){r=(r||"fx")+"queue";var i,a,n,s=t.data(e,r);return o?(!s||t.isArray(o)?s=t.data(e,r,(n=a||[],null!=(i=o)&&(l(Object(i))?function(e,t){for(var r=+t.length,o=0,i=e.length;o<r;)e[i++]=t[o++];if(r!=r)for(;void 0!==t[o];)e[i++]=t[o++];e.length=i}(n,"string"==typeof i?[i]:i):[].push.call(n,i)),n)):s.push(o),s):s||[]}},t.dequeue=function(e,r){t.each(e.nodeType?[e]:e,(function(e,o){r=r||"fx";var i=t.queue(o,r),a=i.shift();"inprogress"===a&&(a=i.shift()),a&&("fx"===r&&i.unshift("inprogress"),a.call(o,(function(){t.dequeue(o,r)})))}))},t.fn=t.prototype={init:function(e){if(e.nodeType)return this[0]=e,this;throw new Error("Not a DOM node.")},offset:function(){var t=this[0].getBoundingClientRect?this[0].getBoundingClientRect():{top:0,left:0};return{top:t.top+(e.pageYOffset||document.scrollTop||0)-(document.clientTop||0),left:t.left+(e.pageXOffset||document.scrollLeft||0)-(document.clientLeft||0)}},position:function(){function e(){for(var e=this.offsetParent||document;e&&"html"===!e.nodeType.toLowerCase&&"static"===e.style.position;)e=e.offsetParent;return e||document}var r=this[0],e=e.apply(r),o=this.offset(),i=/^(?:body|html)$/i.test(e.nodeName)?{top:0,left:0}:t(e).offset();return o.top-=parseFloat(r.style.marginTop)||0,o.left-=parseFloat(r.style.marginLeft)||0,e.style&&(i.top+=parseFloat(e.style.borderTopWidth)||0,i.left+=parseFloat(e.style.borderLeftWidth)||0),{top:o.top-i.top,left:o.left-i.left}}};var r={};t.expando="velocity"+(new Date).getTime(),t.uuid=0;for(var o={},i=o.hasOwnProperty,a=o.toString,n="Boolean Number String Function Array Date RegExp Object Error".split(" "),s=0;s<n.length;s++)o["[object "+n[s]+"]"]=n[s].toLowerCase();t.fn.init.prototype=t.fn,e.Velocity={Utilities:t}}function l(e){var r=e.length,o=t.type(e);return"function"!==o&&!t.isWindow(e)&&(!(1!==e.nodeType||!r)||("array"===o||0===r||"number"==typeof r&&r>0&&r-1 in e))}}(window),function(e){"object"==typeof module&&"object"==typeof module.exports?module.exports=e():"function"==typeof define&&define.amd?define(e):e()}((function(){return function(e,t,r,o){var i,a=function(){if(r.documentMode)return r.documentMode;for(var e=7;e>4;e--){var t=r.createElement("div");if(t.innerHTML="\x3c!--[if IE "+e+"]><span></span><![endif]--\x3e",t.getElementsByTagName("span").length)return t=null,e}}(),n=(i=0,t.webkitRequestAnimationFrame||t.mozRequestAnimationFrame||function(e){var t,r=(new Date).getTime();return t=Math.max(0,16-(r-i)),i=r+t,setTimeout((function(){e(r+t)}),t)});function s(e){return u.isWrapped(e)?e=[].slice.call(e):u.isNode(e)&&(e=[e]),e}var l,u={isString:function(e){return"string"==typeof e},isArray:Array.isArray||function(e){return"[object Array]"===Object.prototype.toString.call(e)},isFunction:function(e){return"[object Function]"===Object.prototype.toString.call(e)},isNode:function(e){return e&&e.nodeType},isNodeList:function(e){return"object"==typeof e&&/^\[object (HTMLCollection|NodeList|Object)\]$/.test(Object.prototype.toString.call(e))&&void 0!==e.length&&(0===e.length||"object"==typeof e[0]&&e[0].nodeType>0)},isWrapped:function(e){return e&&(e.jquery||t.Zepto&&t.Zepto.zepto.isZ(e))},isSVG:function(e){return t.SVGElement&&e instanceof t.SVGElement},isEmptyObject:function(e){for(var t in e)return!1;return!0}},c=!1;if(e.fn&&e.fn.jquery?(l=e,c=!0):l=t.Velocity.Utilities,a<=8&&!c)throw new Error("Velocity: IE8 and below require jQuery to be loaded before Velocity.");if(!(a<=7)){var p={State:{isMobile:/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),isAndroid:/Android/i.test(navigator.userAgent),isGingerbread:/Android 2\.3\.[3-7]/i.test(navigator.userAgent),isChrome:t.chrome,isFirefox:/Firefox/i.test(navigator.userAgent),prefixElement:r.createElement("div"),prefixMatches:{},scrollAnchor:null,scrollPropertyLeft:null,scrollPropertyTop:null,isTicking:!1,calls:[]},CSS:{},Utilities:l,Redirects:{},Easings:{},Promise:t.Promise,defaults:{queue:"",duration:400,easing:"swing",begin:void 0,complete:void 0,progress:void 0,display:void 0,visibility:void 0,loop:!1,delay:!1,mobileHA:!0,_cacheValues:!0},init:function(e){l.data(e,"velocity",{isSVG:u.isSVG(e),isAnimating:!1,computedStyle:null,tweensContainer:null,rootPropertyValueCache:{},transformCache:{}})},hook:null,mock:!1,version:{major:1,minor:2,patch:2},debug:!1};void 0!==t.pageYOffset?(p.State.scrollAnchor=t,p.State.scrollPropertyLeft="pageXOffset",p.State.scrollPropertyTop="pageYOffset"):(p.State.scrollAnchor=r.documentElement||r.body.parentNode||r.body,p.State.scrollPropertyLeft="scrollLeft",p.State.scrollPropertyTop="scrollTop");var f=function(){function e(e){return-e.tension*e.x-e.friction*e.v}function t(t,r,o){var i={x:t.x+o.dx*r,v:t.v+o.dv*r,tension:t.tension,friction:t.friction};return{dx:i.v,dv:e(i)}}function r(r,o){var i={dx:r.v,dv:e(r)},a=t(r,.5*o,i),n=t(r,.5*o,a),s=t(r,o,n),l=1/6*(i.dx+2*(a.dx+n.dx)+s.dx),u=1/6*(i.dv+2*(a.dv+n.dv)+s.dv);return r.x=r.x+l*o,r.v=r.v+u*o,r}return function e(t,o,i){var a,n,s,l={x:-1,v:0,tension:null,friction:null},u=[0],c=0;for(t=parseFloat(t)||500,o=parseFloat(o)||20,i=i||null,l.tension=t,l.friction=o,n=(a=null!==i)?(c=e(t,o))/i*.016:.016;s=r(s||l,n),u.push(1+s.x),c+=16,Math.abs(s.x)>1e-4&&Math.abs(s.v)>1e-4;);return a?function(e){return u[e*(u.length-1)|0]}:c}}();p.Easings={linear:function(e){return e},swing:function(e){return.5-Math.cos(e*Math.PI)/2},spring:function(e){return 1-Math.cos(4.5*e*Math.PI)*Math.exp(6*-e)}},l.each([["ease",[.25,.1,.25,1]],["ease-in",[.42,0,1,1]],["ease-out",[0,0,.58,1]],["ease-in-out",[.42,0,.58,1]],["easeInSine",[.47,0,.745,.715]],["easeOutSine",[.39,.575,.565,1]],["easeInOutSine",[.445,.05,.55,.95]],["easeInQuad",[.55,.085,.68,.53]],["easeOutQuad",[.25,.46,.45,.94]],["easeInOutQuad",[.455,.03,.515,.955]],["easeInCubic",[.55,.055,.675,.19]],["easeOutCubic",[.215,.61,.355,1]],["easeInOutCubic",[.645,.045,.355,1]],["easeInQuart",[.895,.03,.685,.22]],["easeOutQuart",[.165,.84,.44,1]],["easeInOutQuart",[.77,0,.175,1]],["easeInQuint",[.755,.05,.855,.06]],["easeOutQuint",[.23,1,.32,1]],["easeInOutQuint",[.86,0,.07,1]],["easeInExpo",[.95,.05,.795,.035]],["easeOutExpo",[.19,1,.22,1]],["easeInOutExpo",[1,0,0,1]],["easeInCirc",[.6,.04,.98,.335]],["easeOutCirc",[.075,.82,.165,1]],["easeInOutCirc",[.785,.135,.15,.86]]],(function(e,t){p.Easings[t[0]]=h.apply(null,t[1])}));var d=p.CSS={RegEx:{isHex:/^#([A-f\d]{3}){1,2}$/i,valueUnwrap:/^[A-z]+\((.*)\)$/i,wrappedValueAlreadyExtracted:/[0-9.]+ [0-9.]+ [0-9.]+( [0-9.]+)?/,valueSplit:/([A-z]+\(.+\))|(([A-z0-9#-.]+?)(?=\s|$))/gi},Lists:{colors:["fill","stroke","stopColor","color","backgroundColor","borderColor","borderTopColor","borderRightColor","borderBottomColor","borderLeftColor","outlineColor"],transformsBase:["translateX","translateY","scale","scaleX","scaleY","skewX","skewY","rotateZ"],transforms3D:["transformPerspective","translateZ","scaleZ","rotateX","rotateY"]},Hooks:{templates:{textShadow:["Color X Y Blur","black 0px 0px 0px"],boxShadow:["Color X Y Blur Spread","black 0px 0px 0px 0px"],clip:["Top Right Bottom Left","0px 0px 0px 0px"],backgroundPosition:["X Y","0% 0%"],transformOrigin:["X Y Z","50% 50% 0px"],perspectiveOrigin:["X Y","50% 50%"]},registered:{},register:function(){for(var e=0;e<d.Lists.colors.length;e++){var t="color"===d.Lists.colors[e]?"0 0 0 1":"255 255 255 1";d.Hooks.templates[d.Lists.colors[e]]=["Red Green Blue Alpha",t]}var r,o,i;if(a)for(r in d.Hooks.templates){i=(o=d.Hooks.templates[r])[0].split(" ");var n=o[1].match(d.RegEx.valueSplit);"Color"===i[0]&&(i.push(i.shift()),n.push(n.shift()),d.Hooks.templates[r]=[i.join(" "),n.join(" ")])}for(r in d.Hooks.templates)for(var e in i=(o=d.Hooks.templates[r])[0].split(" ")){var s=r+i[e],l=e;d.Hooks.registered[s]=[r,l]}},getRoot:function(e){var t=d.Hooks.registered[e];return t?t[0]:e},cleanRootPropertyValue:function(e,t){return d.RegEx.valueUnwrap.test(t)&&(t=t.match(d.RegEx.valueUnwrap)[1]),d.Values.isCSSNullValue(t)&&(t=d.Hooks.templates[e][1]),t},extractValue:function(e,t){var r=d.Hooks.registered[e];if(r){var o=r[0],i=r[1];return(t=d.Hooks.cleanRootPropertyValue(o,t)).toString().match(d.RegEx.valueSplit)[i]}return t},injectValue:function(e,t,r){var o=d.Hooks.registered[e];if(o){var i,a=o[0],n=o[1];return(i=(r=d.Hooks.cleanRootPropertyValue(a,r)).toString().match(d.RegEx.valueSplit))[n]=t,i.join(" ")}return r}},Normalizations:{registered:{clip:function(e,t,r){switch(e){case"name":return"clip";case"extract":var o;return o=d.RegEx.wrappedValueAlreadyExtracted.test(r)?r:(o=r.toString().match(d.RegEx.valueUnwrap))?o[1].replace(/,(\s+)?/g," "):r;case"inject":return"rect("+r+")"}},blur:function(e,t,r){switch(e){case"name":return p.State.isFirefox?"filter":"-webkit-filter";case"extract":var o=parseFloat(r);if(!o&&0!==o){var i=r.toString().match(/blur\(([0-9]+[A-z]+)\)/i);o=i?i[1]:0}return o;case"inject":return parseFloat(r)?"blur("+r+")":"none"}},opacity:function(e,t,r){if(a<=8)switch(e){case"name":return"filter";case"extract":var o=r.toString().match(/alpha\(opacity=(.*)\)/i);return r=o?o[1]/100:1;case"inject":return t.style.zoom=1,parseFloat(r)>=1?"":"alpha(opacity="+parseInt(100*parseFloat(r),10)+")"}else switch(e){case"name":return"opacity";case"extract":case"inject":return r}}},register:function(){a<=9||p.State.isGingerbread||(d.Lists.transformsBase=d.Lists.transformsBase.concat(d.Lists.transforms3D));for(var e=0;e<d.Lists.transformsBase.length;e++)!function(){var t=d.Lists.transformsBase[e];d.Normalizations.registered[t]=function(e,r,o){switch(e){case"name":return"transform";case"extract":return void 0===v(r)||void 0===v(r).transformCache[t]?/^scale/i.test(t)?1:0:v(r).transformCache[t].replace(/[()]/g,"");case"inject":var i=!1;switch(t.substr(0,t.length-1)){case"translate":i=!/(%|px|em|rem|vw|vh|\d)$/i.test(o);break;case"scal":case"scale":p.State.isAndroid&&void 0===v(r).transformCache[t]&&o<1&&(o=1),i=!/(\d)$/i.test(o);break;case"skew":case"rotate":i=!/(deg|\d)$/i.test(o)}return i||(v(r).transformCache[t]="("+o+")"),v(r).transformCache[t]}}}();for(e=0;e<d.Lists.colors.length;e++)!function(){var t=d.Lists.colors[e];d.Normalizations.registered[t]=function(e,r,o){switch(e){case"name":return t;case"extract":var i;if(d.RegEx.wrappedValueAlreadyExtracted.test(o))i=o;else{var n,s={black:"rgb(0, 0, 0)",blue:"rgb(0, 0, 255)",gray:"rgb(128, 128, 128)",green:"rgb(0, 128, 0)",red:"rgb(255, 0, 0)",white:"rgb(255, 255, 255)"};/^[A-z]+$/i.test(o)?n=void 0!==s[o]?s[o]:s.black:d.RegEx.isHex.test(o)?n="rgb("+d.Values.hexToRgb(o).join(" ")+")":/^rgba?\(/i.test(o)||(n=s.black),i=(n||o).toString().match(d.RegEx.valueUnwrap)[1].replace(/,(\s+)?/g," ")}return a<=8||3!==i.split(" ").length||(i+=" 1"),i;case"inject":return a<=8?4===o.split(" ").length&&(o=o.split(/\s+/).slice(0,3).join(" ")):3===o.split(" ").length&&(o+=" 1"),(a<=8?"rgb":"rgba")+"("+o.replace(/\s+/g,",").replace(/\.(\d)+(?=,)/g,"")+")"}}}()}},Names:{camelCase:function(e){return e.replace(/-(\w)/g,(function(e,t){return t.toUpperCase()}))},SVGAttribute:function(e){var t="width|height|x|y|cx|cy|r|rx|ry|x1|x2|y1|y2";return(a||p.State.isAndroid&&!p.State.isChrome)&&(t+="|transform"),new RegExp("^("+t+")$","i").test(e)},prefixCheck:function(e){if(p.State.prefixMatches[e])return[p.State.prefixMatches[e],!0];for(var t=["","Webkit","Moz","ms","O"],r=0,o=t.length;r<o;r++){var i;if(i=0===r?e:t[r]+e.replace(/^\w/,(function(e){return e.toUpperCase()})),u.isString(p.State.prefixElement.style[i]))return p.State.prefixMatches[e]=i,[i,!0]}return[e,!1]}},Values:{hexToRgb:function(e){var t;return e=e.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i,(function(e,t,r,o){return t+t+r+r+o+o})),(t=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e))?[parseInt(t[1],16),parseInt(t[2],16),parseInt(t[3],16)]:[0,0,0]},isCSSNullValue:function(e){return 0==e||/^(none|auto|transparent|(rgba\(0, ?0, ?0, ?0\)))$/i.test(e)},getUnitType:function(e){return/^(rotate|skew)/i.test(e)?"deg":/(^(scale|scaleX|scaleY|scaleZ|alpha|flexGrow|flexHeight|zIndex|fontWeight)$)|((opacity|red|green|blue|alpha)$)/i.test(e)?"":"px"},getDisplayType:function(e){var t=e&&e.tagName.toString().toLowerCase();return/^(b|big|i|small|tt|abbr|acronym|cite|code|dfn|em|kbd|strong|samp|var|a|bdo|br|img|map|object|q|script|span|sub|sup|button|input|label|select|textarea)$/i.test(t)?"inline":/^(li)$/i.test(t)?"list-item":/^(tr)$/i.test(t)?"table-row":/^(table)$/i.test(t)?"table":/^(tbody)$/i.test(t)?"table-row-group":"block"},addClass:function(e,t){e.classList?e.classList.add(t):e.className+=(e.className.length?" ":"")+t},removeClass:function(e,t){e.classList?e.classList.remove(t):e.className=e.className.toString().replace(new RegExp("(^|\\s)"+t.split(" ").join("|")+"(\\s|$)","gi")," ")}},getPropertyValue:function(e,r,o,i){function n(e,r){var o=0;if(a<=8)o=l.css(e,r);else{var s,u=!1;function c(){u&&d.setPropertyValue(e,"display","none")}if(/^(width|height)$/.test(r)&&0===d.getPropertyValue(e,"display")&&(u=!0,d.setPropertyValue(e,"display",d.Values.getDisplayType(e))),!i){if("height"===r&&"border-box"!==d.getPropertyValue(e,"boxSizing").toString().toLowerCase()){var p=e.offsetHeight-(parseFloat(d.getPropertyValue(e,"borderTopWidth"))||0)-(parseFloat(d.getPropertyValue(e,"borderBottomWidth"))||0)-(parseFloat(d.getPropertyValue(e,"paddingTop"))||0)-(parseFloat(d.getPropertyValue(e,"paddingBottom"))||0);return c(),p}if("width"===r&&"border-box"!==d.getPropertyValue(e,"boxSizing").toString().toLowerCase()){var f=e.offsetWidth-(parseFloat(d.getPropertyValue(e,"borderLeftWidth"))||0)-(parseFloat(d.getPropertyValue(e,"borderRightWidth"))||0)-(parseFloat(d.getPropertyValue(e,"paddingLeft"))||0)-(parseFloat(d.getPropertyValue(e,"paddingRight"))||0);return c(),f}}s=void 0===v(e)?t.getComputedStyle(e,null):v(e).computedStyle?v(e).computedStyle:v(e).computedStyle=t.getComputedStyle(e,null),"borderColor"===r&&(r="borderTopColor"),""!==(o=9===a&&"filter"===r?s.getPropertyValue(r):s[r])&&null!==o||(o=e.style[r]),c()}if("auto"===o&&/^(top|right|bottom|left)$/i.test(r)){var g=n(e,"position");("fixed"===g||"absolute"===g&&/top|left/i.test(r))&&(o=l(e).position()[r]+"px")}return o}var s;if(d.Hooks.registered[r]){var u=r,c=d.Hooks.getRoot(u);void 0===o&&(o=d.getPropertyValue(e,d.Names.prefixCheck(c)[0])),d.Normalizations.registered[c]&&(o=d.Normalizations.registered[c]("extract",e,o)),s=d.Hooks.extractValue(u,o)}else if(d.Normalizations.registered[r]){var f,g;"transform"!==(f=d.Normalizations.registered[r]("name",e))&&(g=n(e,d.Names.prefixCheck(f)[0]),d.Values.isCSSNullValue(g)&&d.Hooks.templates[r]&&(g=d.Hooks.templates[r][1])),s=d.Normalizations.registered[r]("extract",e,g)}if(!/^[\d-]/.test(s))if(v(e)&&v(e).isSVG&&d.Names.SVGAttribute(r))if(/^(height|width)$/i.test(r))try{s=e.getBBox()[r]}catch(e){s=0}else s=e.getAttribute(r);else s=n(e,d.Names.prefixCheck(r)[0]);return d.Values.isCSSNullValue(s)&&(s=0),p.debug>=2&&console.log("Get "+r+": "+s),s},setPropertyValue:function(e,r,o,i,n){var s=r;if("scroll"===r)n.container?n.container["scroll"+n.direction]=o:"Left"===n.direction?t.scrollTo(o,n.alternateValue):t.scrollTo(n.alternateValue,o);else if(d.Normalizations.registered[r]&&"transform"===d.Normalizations.registered[r]("name",e))d.Normalizations.registered[r]("inject",e,o),s="transform",o=v(e).transformCache[r];else{if(d.Hooks.registered[r]){var l=r,u=d.Hooks.getRoot(r);i=i||d.getPropertyValue(e,u),o=d.Hooks.injectValue(l,o,i),r=u}if(d.Normalizations.registered[r]&&(o=d.Normalizations.registered[r]("inject",e,o),r=d.Normalizations.registered[r]("name",e)),s=d.Names.prefixCheck(r)[0],a<=8)try{e.style[s]=o}catch(e){p.debug&&console.log("Browser does not support ["+o+"] for ["+s+"]")}else v(e)&&v(e).isSVG&&d.Names.SVGAttribute(r)?e.setAttribute(r,o):e.style[s]=o;p.debug>=2&&console.log("Set "+r+" ("+s+"): "+o)}return[s,o]},flushTransformCache:function(e){var t="";if((a||p.State.isAndroid&&!p.State.isChrome)&&v(e).isSVG){function r(t){return parseFloat(d.getPropertyValue(e,t))}var o={translate:[r("translateX"),r("translateY")],skewX:[r("skewX")],skewY:[r("skewY")],scale:1!==r("scale")?[r("scale"),r("scale")]:[r("scaleX"),r("scaleY")],rotate:[r("rotateZ"),0,0]};l.each(v(e).transformCache,(function(e){/^translate/i.test(e)?e="translate":/^scale/i.test(e)?e="scale":/^rotate/i.test(e)&&(e="rotate"),o[e]&&(t+=e+"("+o[e].join(" ")+") ",delete o[e])}))}else{var i,n;l.each(v(e).transformCache,(function(r){if(i=v(e).transformCache[r],"transformPerspective"===r)return n=i,!0;9===a&&"rotateZ"===r&&(r="rotate"),t+=r+i+" "})),n&&(t="perspective"+n+" "+t)}d.setPropertyValue(e,"transform",t)}};d.Hooks.register(),d.Normalizations.register(),p.hook=function(e,t,r){var o=void 0;return e=s(e),l.each(e,(function(e,i){if(void 0===v(i)&&p.init(i),void 0===r)void 0===o&&(o=p.CSS.getPropertyValue(i,t));else{var a=p.CSS.setPropertyValue(i,t,r);"transform"===a[0]&&p.CSS.flushTransformCache(i),o=a}})),o};var g=function(){function e(){return o?C.promise||null:i}var o,i,a,n,c,f,y=arguments[0]&&(arguments[0].p||l.isPlainObject(arguments[0].properties)&&!arguments[0].properties.names||u.isString(arguments[0].properties));if(u.isWrapped(this)?(o=!1,a=0,n=this,i=this):(o=!0,a=1,n=y?arguments[0].elements||arguments[0].e:arguments[0]),n=s(n)){y?(c=arguments[0].properties||arguments[0].p,f=arguments[0].options||arguments[0].o):(c=arguments[a],f=arguments[a+1]);var m=n.length,h=0;if(!/^(stop|finish)$/i.test(c)&&!l.isPlainObject(f)){var P=a+1;f={};for(var w=P;w<arguments.length;w++)u.isArray(arguments[w])||!/^(fast|normal|slow)$/i.test(arguments[w])&&!/^\d/.test(arguments[w])?u.isString(arguments[w])||u.isArray(arguments[w])?f.easing=arguments[w]:u.isFunction(arguments[w])&&(f.complete=arguments[w]):f.duration=arguments[w]}var V,C={promise:null,resolver:null,rejecter:null};switch(o&&p.Promise&&(C.promise=new p.Promise((function(e,t){C.resolver=e,C.rejecter=t}))),c){case"scroll":V="scroll";break;case"reverse":V="reverse";break;case"finish":case"stop":l.each(n,(function(e,t){v(t)&&v(t).delayTimer&&(clearTimeout(v(t).delayTimer.setTimeout),v(t).delayTimer.next&&v(t).delayTimer.next(),delete v(t).delayTimer)}));var T=[];return l.each(p.State.calls,(function(e,t){t&&l.each(t[1],(function(r,o){var i=void 0===f?"":f;if(!0!==i&&t[2].queue!==i&&(void 0!==f||!1!==t[2].queue))return!0;l.each(n,(function(r,a){a===o&&((!0===f||u.isString(f))&&(l.each(l.queue(a,u.isString(f)?f:""),(function(e,t){u.isFunction(t)&&t(null,!0)})),l.queue(a,u.isString(f)?f:"",[])),"stop"===c?(v(a)&&v(a).tweensContainer&&!1!==i&&l.each(v(a).tweensContainer,(function(e,t){t.endValue=t.currentValue})),T.push(e)):"finish"===c&&(t[2].duration=1))}))}))})),"stop"===c&&(l.each(T,(function(e,t){S(t,!0)})),C.promise&&C.resolver(n)),e();default:if(!l.isPlainObject(c)||u.isEmptyObject(c)){if(u.isString(c)&&p.Redirects[c]){var k=(E=l.extend({},f)).duration,A=E.delay||0;return!0===E.backwards&&(n=l.extend(!0,[],n).reverse()),l.each(n,(function(e,t){parseFloat(E.stagger)?E.delay=A+parseFloat(E.stagger)*e:u.isFunction(E.stagger)&&(E.delay=A+E.stagger.call(t,e,m)),E.drag&&(E.duration=parseFloat(k)||(/^(callout|transition)/.test(c)?1e3:400),E.duration=Math.max(E.duration*(E.backwards?1-e/m:(e+1)/m),.75*E.duration,200)),p.Redirects[c].call(t,t,E||{},e,m,n,C.promise?C:void 0)})),e()}var F="Velocity: First argument ("+c+") was not a property map, a known action, or a registered redirect. Aborting.";return C.promise?C.rejecter(new Error(F)):console.log(F),e()}V="start"}var E,j,H={lastParent:null,lastPosition:null,lastFontSize:null,lastPercentToPxWidth:null,lastPercentToPxHeight:null,lastEmToPx:null,remToPx:null,vwToPx:null,vhToPx:null},N=[];if(l.each(n,(function(e,t){u.isNode(t)&&O.call(t)})),(E=l.extend({},p.defaults,f)).loop=parseInt(E.loop),j=2*E.loop-1,E.loop)for(var L=0;L<j;L++){var R={delay:E.delay,progress:E.progress};L===j-1&&(R.display=E.display,R.visibility=E.visibility,R.complete=E.complete),g(n,"reverse",R)}return e()}function O(){var e,o=this,i=l.extend({},p.defaults,f),a={};switch(void 0===v(o)&&p.init(o),parseFloat(i.delay)&&!1!==i.queue&&l.queue(o,i.queue,(function(e){p.velocityQueueEntryFlag=!0,v(o).delayTimer={setTimeout:setTimeout(e,parseFloat(i.delay)),next:e}})),i.duration.toString().toLowerCase()){case"fast":i.duration=200;break;case"normal":i.duration=400;break;case"slow":i.duration=600;break;default:i.duration=parseFloat(i.duration)||1}function s(s){if(i.begin&&0===h)try{i.begin.call(n,n)}catch(e){setTimeout((function(){throw e}),1)}if("scroll"===V){var g,y,S,P=/^x$/i.test(i.axis)?"Left":"Top",w=parseFloat(i.offset)||0;i.container?u.isWrapped(i.container)||u.isNode(i.container)?(i.container=i.container[0]||i.container,S=(g=i.container["scroll"+P])+l(o).position()[P.toLowerCase()]+w):i.container=null:(g=p.State.scrollAnchor[p.State["scrollProperty"+P]],y=p.State.scrollAnchor[p.State["scrollProperty"+("Left"===P?"Top":"Left")]],S=l(o).offset()[P.toLowerCase()]+w),a={scroll:{rootPropertyValue:!1,startValue:g,currentValue:g,endValue:S,unitType:"",easing:i.easing,scrollData:{container:i.container,direction:P,alternateValue:y}},element:o},p.debug&&console.log("tweensContainer (scroll): ",a.scroll,o)}else if("reverse"===V){if(!v(o).tweensContainer)return void l.dequeue(o,i.queue);"none"===v(o).opts.display&&(v(o).opts.display="auto"),"hidden"===v(o).opts.visibility&&(v(o).opts.visibility="visible"),v(o).opts.loop=!1,v(o).opts.begin=null,v(o).opts.complete=null,f.easing||delete i.easing,f.duration||delete i.duration,i=l.extend({},v(o).opts,i);var T=l.extend(!0,{},v(o).tweensContainer);for(var k in T)if("element"!==k){var A=T[k].startValue;T[k].startValue=T[k].currentValue=T[k].endValue,T[k].endValue=A,u.isEmptyObject(f)||(T[k].easing=i.easing),p.debug&&console.log("reverse tweensContainer ("+k+"): "+JSON.stringify(T[k]),o)}a=T}else if("start"===V){function F(e,t){var r=void 0,a=void 0,n=void 0;return u.isArray(e)?(r=e[0],!u.isArray(e[1])&&/^[\d-]/.test(e[1])||u.isFunction(e[1])||d.RegEx.isHex.test(e[1])?n=e[1]:(u.isString(e[1])&&!d.RegEx.isHex.test(e[1])||u.isArray(e[1]))&&(a=t?e[1]:b(e[1],i.duration),void 0!==e[2]&&(n=e[2]))):r=e,t||(a=a||i.easing),u.isFunction(r)&&(r=r.call(o,h,m)),u.isFunction(n)&&(n=n.call(o,h,m)),[r||0,a,n]}for(var E in v(o).tweensContainer&&!0===v(o).isAnimating&&(T=v(o).tweensContainer),l.each(c,(function(e,t){if(RegExp("^"+d.Lists.colors.join("$|^")+"$").test(e)){var r=F(t,!0),o=r[0],i=r[1],a=r[2];if(d.RegEx.isHex.test(o)){for(var n=["Red","Green","Blue"],s=d.Values.hexToRgb(o),l=a?d.Values.hexToRgb(a):void 0,u=0;u<n.length;u++){var p=[s[u]];i&&p.push(i),void 0!==l&&p.push(l[u]),c[e+n[u]]=p}delete c[e]}}})),c){var j=F(c[E]),L=j[0],R=j[1],O=j[2];E=d.Names.camelCase(E);var z=d.Hooks.getRoot(E),q=!1;if(v(o).isSVG||"tween"===z||!1!==d.Names.prefixCheck(z)[1]||void 0!==d.Normalizations.registered[z]){(void 0!==i.display&&null!==i.display&&"none"!==i.display||void 0!==i.visibility&&"hidden"!==i.visibility)&&/opacity|filter/.test(E)&&!O&&0!==L&&(O=0),i._cacheValues&&T&&T[E]?(void 0===O&&(O=T[E].endValue+T[E].unitType),q=v(o).rootPropertyValueCache[z]):d.Hooks.registered[E]?void 0===O?(q=d.getPropertyValue(o,z),O=d.getPropertyValue(o,E,q)):q=d.Hooks.templates[z][1]:void 0===O&&(O=d.getPropertyValue(o,E));var $,M,I,B=!1;if(O=($=G(E,O))[0],I=$[1],L=($=G(E,L))[0].replace(/^([+-\/*])=/,(function(e,t){return B=t,""})),M=$[1],O=parseFloat(O)||0,L=parseFloat(L)||0,"%"===M&&(/^(fontSize|lineHeight)$/.test(E)?(L/=100,M="em"):/^scale/.test(E)?(L/=100,M=""):/(Red|Green|Blue)$/i.test(E)&&(L=L/100*255,M="")),/[\/*]/.test(B))M=I;else if(I!==M&&0!==O)if(0===L)M=I;else{e=e||D();var W=/margin|padding|left|right|width|text|word|letter/i.test(E)||/X$/.test(E)||"x"===E?"x":"y";switch(I){case"%":O*="x"===W?e.percentToPxWidth:e.percentToPxHeight;break;case"px":break;default:O*=e[I+"ToPx"]}switch(M){case"%":O*=1/("x"===W?e.percentToPxWidth:e.percentToPxHeight);break;case"px":break;default:O*=1/e[M+"ToPx"]}}switch(B){case"+":L=O+L;break;case"-":L=O-L;break;case"*":L*=O;break;case"/":L=O/L}a[E]={rootPropertyValue:q,startValue:O,currentValue:O,endValue:L,unitType:M,easing:R},p.debug&&console.log("tweensContainer ("+E+"): "+JSON.stringify(a[E]),o)}else p.debug&&console.log("Skipping ["+z+"] due to a lack of browser support.");function G(e,t){var r,o;return o=(t||"0").toString().toLowerCase().replace(/[%A-z]+$/,(function(e){return r=e,""})),r||(r=d.Values.getUnitType(e)),[o,r]}function D(){var e={myParent:o.parentNode||r.body,position:d.getPropertyValue(o,"position"),fontSize:d.getPropertyValue(o,"fontSize")},i=e.position===H.lastPosition&&e.myParent===H.lastParent,a=e.fontSize===H.lastFontSize;H.lastParent=e.myParent,H.lastPosition=e.position,H.lastFontSize=e.fontSize;var n={};if(a&&i)n.emToPx=H.lastEmToPx,n.percentToPxWidth=H.lastPercentToPxWidth,n.percentToPxHeight=H.lastPercentToPxHeight;else{var s=v(o).isSVG?r.createElementNS("http://www.w3.org/2000/svg","rect"):r.createElement("div");p.init(s),e.myParent.appendChild(s),l.each(["overflow","overflowX","overflowY"],(function(e,t){p.CSS.setPropertyValue(s,t,"hidden")})),p.CSS.setPropertyValue(s,"position",e.position),p.CSS.setPropertyValue(s,"fontSize",e.fontSize),p.CSS.setPropertyValue(s,"boxSizing","content-box"),l.each(["minWidth","maxWidth","width","minHeight","maxHeight","height"],(function(e,t){p.CSS.setPropertyValue(s,t,"100%")})),p.CSS.setPropertyValue(s,"paddingLeft","100em"),n.percentToPxWidth=H.lastPercentToPxWidth=(parseFloat(d.getPropertyValue(s,"width",null,!0))||1)/100,n.percentToPxHeight=H.lastPercentToPxHeight=(parseFloat(d.getPropertyValue(s,"height",null,!0))||1)/100,n.emToPx=H.lastEmToPx=(parseFloat(d.getPropertyValue(s,"paddingLeft"))||1)/100,e.myParent.removeChild(s)}return null===H.remToPx&&(H.remToPx=parseFloat(d.getPropertyValue(r.body,"fontSize"))||16),null===H.vwToPx&&(H.vwToPx=parseFloat(t.innerWidth)/100,H.vhToPx=parseFloat(t.innerHeight)/100),n.remToPx=H.remToPx,n.vwToPx=H.vwToPx,n.vhToPx=H.vhToPx,p.debug>=1&&console.log("Unit ratios: "+JSON.stringify(n),o),n}}a.element=o}a.element&&(d.Values.addClass(o,"velocity-animating"),N.push(a),""===i.queue&&(v(o).tweensContainer=a,v(o).opts=i),v(o).isAnimating=!0,h===m-1?(p.State.calls.push([N,n,i,null,C.resolver]),!1===p.State.isTicking&&(p.State.isTicking=!0,x())):h++)}!1!==p.mock&&(!0===p.mock?i.duration=i.delay=1:(i.duration*=parseFloat(p.mock)||1,i.delay*=parseFloat(p.mock)||1)),i.easing=b(i.easing,i.duration),i.begin&&!u.isFunction(i.begin)&&(i.begin=null),i.progress&&!u.isFunction(i.progress)&&(i.progress=null),i.complete&&!u.isFunction(i.complete)&&(i.complete=null),void 0!==i.display&&null!==i.display&&(i.display=i.display.toString().toLowerCase(),"auto"===i.display&&(i.display=p.CSS.Values.getDisplayType(o))),void 0!==i.visibility&&null!==i.visibility&&(i.visibility=i.visibility.toString().toLowerCase()),i.mobileHA=i.mobileHA&&p.State.isMobile&&!p.State.isGingerbread,!1===i.queue?i.delay?setTimeout(s,i.delay):s():l.queue(o,i.queue,(function(e,t){if(!0===t)return C.promise&&C.resolver(n),!0;p.velocityQueueEntryFlag=!0,s()})),""!==i.queue&&"fx"!==i.queue||"inprogress"===l.queue(o)[0]||l.dequeue(o)}};(p=l.extend(g,p)).animate=g;var y=t.requestAnimationFrame||n;return p.State.isMobile||void 0===r.hidden||r.addEventListener("visibilitychange",(function(){r.hidden?(y=function(e){return setTimeout((function(){e(!0)}),16)},x()):y=t.requestAnimationFrame||n})),e.Velocity=p,e!==t&&(e.fn.velocity=g,e.fn.velocity.defaults=p.defaults),l.each(["Down","Up"],(function(e,t){p.Redirects["slide"+t]=function(e,r,o,i,a,n){var s=l.extend({},r),u=s.begin,c=s.complete,f={height:"",marginTop:"",marginBottom:"",paddingTop:"",paddingBottom:""},d={};void 0===s.display&&(s.display="Down"===t?"inline"===p.CSS.Values.getDisplayType(e)?"inline-block":"block":"none"),s.begin=function(){for(var r in u&&u.call(a,a),f){d[r]=e.style[r];var o=p.CSS.getPropertyValue(e,r);f[r]="Down"===t?[o,0]:[0,o]}d.overflow=e.style.overflow,e.style.overflow="hidden"},s.complete=function(){for(var t in d)e.style[t]=d[t];c&&c.call(a,a),n&&n.resolver(a)},p(e,f,s)}})),l.each(["In","Out"],(function(e,t){p.Redirects["fade"+t]=function(e,r,o,i,a,n){var s=l.extend({},r),u={opacity:"In"===t?1:0},c=s.complete;s.complete=o!==i-1?s.begin=null:function(){c&&c.call(a,a),n&&n.resolver(a)},void 0===s.display&&(s.display="In"===t?"auto":"none"),p(this,u,s)}})),p}function v(e){var t=l.data(e,"velocity");return null===t?void 0:t}function m(e){return function(t){return Math.round(t*e)*(1/e)}}function h(e,r,o,i){var a=4,n=.001,s=1e-7,l=10,u=11,c=1/(u-1),p="Float32Array"in t;if(4!==arguments.length)return!1;for(var f=0;f<4;++f)if("number"!=typeof arguments[f]||isNaN(arguments[f])||!isFinite(arguments[f]))return!1;e=Math.min(e,1),o=Math.min(o,1),e=Math.max(e,0),o=Math.max(o,0);var d=p?new Float32Array(u):new Array(u);function g(e,t){return 1-3*t+3*e}function y(e,t){return 3*t-6*e}function v(e){return 3*e}function m(e,t,r){return((g(t,r)*e+y(t,r))*e+v(t))*e}function h(e,t,r){return 3*g(t,r)*e*e+2*y(t,r)*e+v(t)}function b(t,r){for(var i=0;i<a;++i){var n=h(r,e,o);if(0===n)return r;r-=(m(r,e,o)-t)/n}return r}function x(){for(var t=0;t<u;++t)d[t]=m(t*c,e,o)}function S(t,r,i){var a,n,u=0;do{(a=m(n=r+(i-r)/2,e,o)-t)>0?i=n:r=n}while(Math.abs(a)>s&&++u<l);return n}function P(t){for(var r=0,i=1,a=u-1;i!=a&&d[i]<=t;++i)r+=c;--i;var s=r+(t-d[i])/(d[i+1]-d[i])*c,l=h(s,e,o);return l>=n?b(t,s):0==l?s:S(t,r,r+c)}var w=!1;function V(){w=!0,e==r&&o==i||x()}var C=function(t){return w||V(),e===r&&o===i?t:0===t?0:1===t?1:m(P(t),r,i)};C.getControlPoints=function(){return[{x:e,y:r},{x:o,y:i}]};var T="generateBezier("+[e,r,o,i]+")";return C.toString=function(){return T},C}function b(e,t){var r=e;return u.isString(e)?p.Easings[e]||(r=!1):r=u.isArray(e)&&1===e.length?m.apply(null,e):u.isArray(e)&&2===e.length?f.apply(null,e.concat([t])):!(!u.isArray(e)||4!==e.length)&&h.apply(null,e),!1===r&&(r=p.Easings[p.defaults.easing]?p.defaults.easing:"swing"),r}function x(e){if(e){var t=(new Date).getTime(),r=p.State.calls.length;r>1e4&&(p.State.calls=function(e){for(var t=-1,r=e?e.length:0,o=[];++t<r;){var i=e[t];i&&o.push(i)}return o}(p.State.calls));for(var o=0;o<r;o++)if(p.State.calls[o]){var i=p.State.calls[o],a=i[0],n=i[2],s=i[3],c=!!s,f=null;s||(s=p.State.calls[o][3]=t-16);for(var g=Math.min((t-s)/n.duration,1),m=0,h=a.length;m<h;m++){var b=a[m],P=b.element;if(v(P)){var w=!1;if(void 0!==n.display&&null!==n.display&&"none"!==n.display){if("flex"===n.display){l.each(["-webkit-box","-moz-box","-ms-flexbox","-webkit-flex"],(function(e,t){d.setPropertyValue(P,"display",t)}))}d.setPropertyValue(P,"display",n.display)}for(var V in void 0!==n.visibility&&"hidden"!==n.visibility&&d.setPropertyValue(P,"visibility",n.visibility),b)if("element"!==V){var C,T=b[V],k=u.isString(T.easing)?p.Easings[T.easing]:T.easing;if(1===g)C=T.endValue;else{var A=T.endValue-T.startValue;if(C=T.startValue+A*k(g,n,A),!c&&C===T.currentValue)continue}if(T.currentValue=C,"tween"===V)f=C;else{if(d.Hooks.registered[V]){var F=d.Hooks.getRoot(V),E=v(P).rootPropertyValueCache[F];E&&(T.rootPropertyValue=E)}var j=d.setPropertyValue(P,V,T.currentValue+(0===parseFloat(C)?"":T.unitType),T.rootPropertyValue,T.scrollData);d.Hooks.registered[V]&&(d.Normalizations.registered[F]?v(P).rootPropertyValueCache[F]=d.Normalizations.registered[F]("extract",null,j[1]):v(P).rootPropertyValueCache[F]=j[1]),"transform"===j[0]&&(w=!0)}}n.mobileHA&&void 0===v(P).transformCache.translate3d&&(v(P).transformCache.translate3d="(0px, 0px, 0px)",w=!0),w&&d.flushTransformCache(P)}}void 0!==n.display&&"none"!==n.display&&(p.State.calls[o][2].display=!1),void 0!==n.visibility&&"hidden"!==n.visibility&&(p.State.calls[o][2].visibility=!1),n.progress&&n.progress.call(i[1],i[1],g,Math.max(0,s+n.duration-t),s,f),1===g&&S(o)}}p.State.isTicking&&y(x)}function S(e,t){if(!p.State.calls[e])return!1;for(var r=p.State.calls[e][0],o=p.State.calls[e][1],i=p.State.calls[e][2],a=p.State.calls[e][4],n=!1,s=0,u=r.length;s<u;s++){var c=r[s].element;if(t||i.loop||("none"===i.display&&d.setPropertyValue(c,"display",i.display),"hidden"===i.visibility&&d.setPropertyValue(c,"visibility",i.visibility)),!0!==i.loop&&(void 0===l.queue(c)[1]||!/\.velocityQueueEntryFlag/i.test(l.queue(c)[1]))&&v(c)){v(c).isAnimating=!1,v(c).rootPropertyValueCache={};var f=!1;l.each(d.Lists.transforms3D,(function(e,t){var r=/^scale/.test(t)?1:0,o=v(c).transformCache[t];void 0!==v(c).transformCache[t]&&new RegExp("^\\("+r+"[^.]").test(o)&&(f=!0,delete v(c).transformCache[t])})),i.mobileHA&&(f=!0,delete v(c).transformCache.translate3d),f&&d.flushTransformCache(c),d.Values.removeClass(c,"velocity-animating")}if(!t&&i.complete&&!i.loop&&s===u-1)try{i.complete.call(o,o)}catch(e){setTimeout((function(){throw e}),1)}a&&!0!==i.loop&&a(o),v(c)&&!0===i.loop&&!t&&(l.each(v(c).tweensContainer,(function(e,t){/^rotate/.test(e)&&360===parseFloat(t.endValue)&&(t.endValue=0,t.startValue=360),/^backgroundPosition/.test(e)&&100===parseFloat(t.endValue)&&"%"===t.unitType&&(t.endValue=0,t.startValue=100)})),p(c,"reverse",{loop:!0,delay:i.delay})),!1!==i.queue&&l.dequeue(c,i.queue)}p.State.calls[e]=!1;for(var g=0,y=p.State.calls.length;g<y;g++)if(!1!==p.State.calls[g]){n=!0;break}!1===n&&(p.State.isTicking=!1,delete p.State.calls,p.State.calls=[])}jQuery.fn.velocity=jQuery.fn.animate}(window.jQuery||window.Zepto||window,window,document)}));