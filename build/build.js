!function e(t,n,i){function r(o,s){if(!n[o]){if(!t[o]){var l="function"==typeof require&&require;if(!s&&l)return l(o,!0);if(a)return a(o,!0);throw new Error("Cannot find module '"+o+"'")}var c=n[o]={exports:{}};t[o][0].call(c.exports,function(e){var n=t[o][1][e];return r(n?n:e)},c,c.exports,e,t,n,i)}return n[o].exports}for(var a="function"==typeof require&&require,o=0;o<i.length;o++)r(i[o]);return r}({1:[function(e,t){self="undefined"!=typeof window?window:"undefined"!=typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope?self:{};var n=function(){var e=/\blang(?:uage)?-(?!\*)(\w+)\b/i,t=self.Prism={util:{encode:function(e){return e instanceof n?new n(e.type,t.util.encode(e.content)):"Array"===t.util.type(e)?e.map(t.util.encode):e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\u00a0/g," ")},type:function(e){return Object.prototype.toString.call(e).match(/\[object (\w+)\]/)[1]},clone:function(e){var n=t.util.type(e);switch(n){case"Object":var i={};for(var r in e)e.hasOwnProperty(r)&&(i[r]=t.util.clone(e[r]));return i;case"Array":return e.slice()}return e}},languages:{extend:function(e,n){var i=t.util.clone(t.languages[e]);for(var r in n)i[r]=n[r];return i},insertBefore:function(e,n,i,r){r=r||t.languages;var a=r[e],o={};for(var s in a)if(a.hasOwnProperty(s)){if(s==n)for(var l in i)i.hasOwnProperty(l)&&(o[l]=i[l]);o[s]=a[s]}return r[e]=o},DFS:function(e,n){for(var i in e)n.call(e,i,e[i]),"Object"===t.util.type(e)&&t.languages.DFS(e[i],n)}},highlightAll:function(e,n){for(var i,r=document.querySelectorAll('code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'),a=0;i=r[a++];)t.highlightElement(i,e===!0,n)},highlightElement:function(i,r,a){for(var o,s,l=i;l&&!e.test(l.className);)l=l.parentNode;if(l&&(o=(l.className.match(e)||[,""])[1],s=t.languages[o]),s){i.className=i.className.replace(e,"").replace(/\s+/g," ")+" language-"+o,l=i.parentNode,/pre/i.test(l.nodeName)&&(l.className=l.className.replace(e,"").replace(/\s+/g," ")+" language-"+o);var c=i.textContent;if(c){var p={element:i,language:o,grammar:s,code:c};if(t.hooks.run("before-highlight",p),r&&self.Worker){var u=new Worker(t.filename);u.onmessage=function(e){p.highlightedCode=n.stringify(JSON.parse(e.data),o),t.hooks.run("before-insert",p),p.element.innerHTML=p.highlightedCode,a&&a.call(p.element),t.hooks.run("after-highlight",p)},u.postMessage(JSON.stringify({language:p.language,code:p.code}))}else p.highlightedCode=t.highlight(p.code,p.grammar,p.language),t.hooks.run("before-insert",p),p.element.innerHTML=p.highlightedCode,a&&a.call(i),t.hooks.run("after-highlight",p)}}},highlight:function(e,i,r){var a=t.tokenize(e,i);return n.stringify(t.util.encode(a),r)},tokenize:function(e,n){var i=t.Token,r=[e],a=n.rest;if(a){for(var o in a)n[o]=a[o];delete n.rest}e:for(var o in n)if(n.hasOwnProperty(o)&&n[o]){var s=n[o];s="Array"===t.util.type(s)?s:[s];for(var l=0;l<s.length;++l){var c=s[l],p=c.inside,u=!!c.lookbehind,f=0;c=c.pattern||c;for(var d=0;d<r.length;d++){var g=r[d];if(r.length>e.length)break e;if(!(g instanceof i)){c.lastIndex=0;var b=c.exec(g);if(b){u&&(f=b[1].length);var h=b.index-1+f,b=b[0].slice(f),m=b.length,k=h+m,v=g.slice(0,h+1),x=g.slice(k+1),w=[d,1];v&&w.push(v);var y=new i(o,p?t.tokenize(b,p):b);w.push(y),x&&w.push(x),Array.prototype.splice.apply(r,w)}}}}}return r},hooks:{all:{},add:function(e,n){var i=t.hooks.all;i[e]=i[e]||[],i[e].push(n)},run:function(e,n){var i=t.hooks.all[e];if(i&&i.length)for(var r,a=0;r=i[a++];)r(n)}}},n=t.Token=function(e,t){this.type=e,this.content=t};if(n.stringify=function(e,i,r){if("string"==typeof e)return e;if("[object Array]"==Object.prototype.toString.call(e))return e.map(function(t){return n.stringify(t,i,e)}).join("");var a={type:e.type,content:n.stringify(e.content,i,r),tag:"span",classes:["token",e.type],attributes:{},language:i,parent:r};"comment"==a.type&&(a.attributes.spellcheck="true"),t.hooks.run("wrap",a);var o="";for(var s in a.attributes)o+=s+'="'+(a.attributes[s]||"")+'"';return"<"+a.tag+' class="'+a.classes.join(" ")+'" '+o+">"+a.content+"</"+a.tag+">"},!self.document)return self.addEventListener?(self.addEventListener("message",function(e){var n=JSON.parse(e.data),i=n.language,r=n.code;self.postMessage(JSON.stringify(t.tokenize(r,t.languages[i]))),self.close()},!1),self.Prism):self.Prism;var i=document.getElementsByTagName("script");return i=i[i.length-1],i&&(t.filename=i.src,document.addEventListener&&!i.hasAttribute("data-manual")&&document.addEventListener("DOMContentLoaded",t.highlightAll)),self.Prism}();"undefined"!=typeof t&&t.exports&&(t.exports=n),n.languages.markup={comment:/<!--[\w\W]*?-->/g,prolog:/<\?.+?\?>/,doctype:/<!DOCTYPE.+?>/,cdata:/<!\[CDATA\[[\w\W]*?]]>/i,tag:{pattern:/<\/?[\w:-]+\s*(?:\s+[\w:-]+(?:=(?:("|')(\\?[\w\W])*?\1|[^\s'">=]+))?\s*)*\/?>/gi,inside:{tag:{pattern:/^<\/?[\w:-]+/i,inside:{punctuation:/^<\/?/,namespace:/^[\w-]+?:/}},"attr-value":{pattern:/=(?:('|")[\w\W]*?(\1)|[^\s>]+)/gi,inside:{punctuation:/=|>|"/g}},punctuation:/\/?>/g,"attr-name":{pattern:/[\w:-]+/g,inside:{namespace:/^[\w-]+?:/}}}},entity:/\&#?[\da-z]{1,8};/gi},n.hooks.add("wrap",function(e){"entity"===e.type&&(e.attributes.title=e.content.replace(/&amp;/,"&"))}),n.languages.css={comment:/\/\*[\w\W]*?\*\//g,atrule:{pattern:/@[\w-]+?.*?(;|(?=\s*{))/gi,inside:{punctuation:/[;:]/g}},url:/url\((["']?).*?\1\)/gi,selector:/[^\{\}\s][^\{\};]*(?=\s*\{)/g,property:/(\b|\B)[\w-]+(?=\s*:)/gi,string:/("|')(\\?.)*?\1/g,important:/\B!important\b/gi,punctuation:/[\{\};:]/g,"function":/[-a-z0-9]+(?=\()/gi},n.languages.markup&&n.languages.insertBefore("markup","tag",{style:{pattern:/<style[\w\W]*?>[\w\W]*?<\/style>/gi,inside:{tag:{pattern:/<style[\w\W]*?>|<\/style>/gi,inside:n.languages.markup.tag.inside},rest:n.languages.css}}}),n.languages.clike={comment:[{pattern:/(^|[^\\])\/\*[\w\W]*?\*\//g,lookbehind:!0},{pattern:/(^|[^\\:])\/\/.*?(\r?\n|$)/g,lookbehind:!0}],string:/("|')(\\?.)*?\1/g,"class-name":{pattern:/((?:(?:class|interface|extends|implements|trait|instanceof|new)\s+)|(?:catch\s+\())[a-z0-9_\.\\]+/gi,lookbehind:!0,inside:{punctuation:/(\.|\\)/}},keyword:/\b(if|else|while|do|for|return|in|instanceof|function|new|try|throw|catch|finally|null|break|continue)\b/g,"boolean":/\b(true|false)\b/g,"function":{pattern:/[a-z0-9_]+\(/gi,inside:{punctuation:/\(/}},number:/\b-?(0x[\dA-Fa-f]+|\d*\.?\d+([Ee]-?\d+)?)\b/g,operator:/[-+]{1,2}|!|<=?|>=?|={1,3}|&{1,2}|\|?\||\?|\*|\/|\~|\^|\%/g,ignore:/&(lt|gt|amp);/gi,punctuation:/[{}[\];(),.:]/g},n.languages.javascript=n.languages.extend("clike",{keyword:/\b(break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|false|finally|for|function|get|if|implements|import|in|instanceof|interface|let|new|null|package|private|protected|public|return|set|static|super|switch|this|throw|true|try|typeof|var|void|while|with|yield)\b/g,number:/\b-?(0x[\dA-Fa-f]+|\d*\.?\d+([Ee]-?\d+)?|NaN|-?Infinity)\b/g}),n.languages.insertBefore("javascript","keyword",{regex:{pattern:/(^|[^\/])\/(?!\/)(\[.+?]|\\.|[^\/\r\n])+\/[gim]{0,3}(?=\s*($|[\r\n,.;})]))/g,lookbehind:!0}}),n.languages.markup&&n.languages.insertBefore("markup","tag",{script:{pattern:/<script[\w\W]*?>[\w\W]*?<\/script>/gi,inside:{tag:{pattern:/<script[\w\W]*?>|<\/script>/gi,inside:n.languages.markup.tag.inside},rest:n.languages.javascript}}}),function(){if(self.Prism&&self.document&&document.querySelector){var e={js:"javascript",html:"markup",svg:"markup",xml:"markup",py:"python"};Array.prototype.slice.call(document.querySelectorAll("pre[data-src]")).forEach(function(t){var i=t.getAttribute("data-src"),r=(i.match(/\.(\w+)$/)||[,""])[1],a=e[r]||r,o=document.createElement("code");o.className="language-"+a,t.textContent="",o.textContent="Loading…",t.appendChild(o);var s=new XMLHttpRequest;s.open("GET",i,!0),s.onreadystatechange=function(){4==s.readyState&&(s.status<400&&s.responseText?(o.textContent=s.responseText,n.highlightElement(o)):o.textContent=s.status>=400?"✖ Error "+s.status+" while fetching file: "+s.statusText:"✖ Error: File does not exist or is empty")},s.send(null)})}}()},{}],2:[function(e,t){t.exports=function(e){return function(t){var n,i,r=t.slides.map(function(t){return[].slice.call(t.querySelectorAll("string"==typeof e?e:"[data-bespoke-bullet]"),0)}),a=function(){var e=n+1;return l(1)?(s(n,i+1),!1):void(r[e]&&s(e,0))},o=function(){var e=n-1;return l(-1)?(s(n,i-1),!1):void(r[e]&&s(e,r[e].length-1))},s=function(e,t){n=e,i=t,r.forEach(function(n,i){n.forEach(function(n,r){n.classList.add("bespoke-bullet"),e>i||i===e&&t>=r?(n.classList.add("bespoke-bullet-active"),n.classList.remove("bespoke-bullet-inactive")):(n.classList.add("bespoke-bullet-inactive"),n.classList.remove("bespoke-bullet-active"))})})},l=function(e){return void 0!==r[n][i+e]};t.on("next",a),t.on("prev",o),t.on("slide",function(e){s(e.index,0)}),s(0,0)}}},{}],3:[function(e,t){t.exports=function(){return function(e){var t,n=function(){var t=window.location.hash.slice(1),n=parseInt(t,10);t&&(n?i(n-1):e.slides.forEach(function(e,t){e.getAttribute("data-bespoke-hash")&&i(t)}))},i=function(n){n!==t&&e.slide(n)};setTimeout(function(){n(),e.on("activate",function(e){var n=e.slide.getAttribute("data-bespoke-hash");window.location.hash=n||e.index+1,t=e.index}),window.addEventListener("hashchange",n)},0)}}},{}],4:[function(e,t){t.exports=function(e){return function(t){var n="vertical"!==e;document.addEventListener("keydown",function(e){(34==e.which||32==e.which||n&&39==e.which||!n&&40==e.which)&&t.next(),(33==e.which||n&&37==e.which||!n&&38==e.which)&&t.prev()})}}},{}],5:[function(e,t){t.exports=function(e){return function(t){var n=document.createElement("div"),i=document.createElement("div"),r="vertical"===e?"height":"width";n.className="bespoke-progress-parent",i.className="bespoke-progress-bar",n.appendChild(i),t.parent.appendChild(n),t.on("activate",function(e){i.style[r]=100*e.index/(t.slides.length-1)+"%"})}}},{}],6:[function(e,t){t.exports=function(e){return function(t){var n=t.parent,i=t.slides[0],r=i.offsetHeight,a=i.offsetWidth,o="zoom"===e||"zoom"in n.style&&"transform"!==e,s=function(e){var t=document.createElement("div");return t.className="bespoke-scale-parent",n.insertBefore(t,e),t.appendChild(e),t},l=o?t.slides:t.slides.map(s),c=function(e){var t="Moz Webkit O ms".split(" ");return t.reduce(function(t,i){return i+e in n.style?i+e:t},e.toLowerCase())}("Transform"),p=o?function(e,t){t.style.zoom=e}:function(e,t){t.style[c]="scale("+e+")"},u=function(){var e=n.offsetWidth/a,t=n.offsetHeight/r;l.forEach(p.bind(null,Math.min(e,t)))};window.addEventListener("resize",u),u()}}},{}],7:[function(e,t){t.exports=function(){return function(e){var t=function(t,n){var i=n.slide.getAttribute("data-bespoke-state");i&&i.split(" ").forEach(function(n){e.parent.classList[t](n)})};e.on("activate",t.bind(null,"add")),e.on("deactivate",t.bind(null,"remove"))}}},{}],8:[function(e,t,n){(function(i){!function(e){if("object"==typeof n)t.exports=e();else if("function"==typeof define&&define.amd)define(e);else{var r;"undefined"!=typeof window?r=window:"undefined"!=typeof i?r=i:"undefined"!=typeof self&&(r=self);var a=r;a=a.bespoke||(a.bespoke={}),a=a.themes||(a.themes={}),a.cube=e()}}(function(){return function t(n,i,r){function a(s,l){if(!i[s]){if(!n[s]){var c="function"==typeof e&&e;if(!l&&c)return c(s,!0);if(o)return o(s,!0);throw new Error("Cannot find module '"+s+"'")}var p=i[s]={exports:{}};n[s][0].call(p.exports,function(e){var t=n[s][1][e];return a(t?t:e)},p,p.exports,t,n,i,r)}return i[s].exports}for(var o="function"==typeof e&&e,s=0;s<r.length;s++)a(r[s]);return a}({1:[function(e,t){var n=e("bespoke-classes"),i=e("insert-css");t.exports=function(){var e="*{-moz-box-sizing:border-box;box-sizing:border-box;margin:0;padding:0}@media print{*{-webkit-print-color-adjust:exact}}@page{size:landscape;margin:0}.bespoke-parent{-webkit-transition:background .6s ease;transition:background .6s ease;position:absolute;top:0;bottom:0;left:0;right:0;overflow:hidden;-webkit-perspective:600px;perspective:600px}@media print{.bespoke-parent{overflow:visible;position:static}}.bespoke-slide{-webkit-transition:-webkit-transform .6s ease,opacity .6s ease,background .6s ease;transition:transform .6s ease,opacity .6s ease,background .6s ease;-webkit-transform-origin:50% 50% 0;transform-origin:50% 50% 0;-webkit-backface-visibility:hidden;backface-visibility:hidden;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;text-align:center;width:640px;height:480px;position:absolute;top:50%;margin-top:-240px;left:50%;margin-left:-320px;background:#eaeaea;padding:40px;border-radius:0}@media print{.bespoke-slide{zoom:1!important;height:743px;width:100%;page-break-before:always;position:static;margin:0;-webkit-transition:none;transition:none}}.bespoke-before{-webkit-transform:translateX(100px)translateX(-320px)rotateY(-90deg)translateX(-320px);transform:translateX(100px)translateX(-320px)rotateY(-90deg)translateX(-320px)}@media print{.bespoke-before{-webkit-transform:none;transform:none}}.bespoke-after{-webkit-transform:translateX(-100px)translateX(320px)rotateY(90deg)translateX(320px);transform:translateX(-100px)translateX(320px)rotateY(90deg)translateX(320px)}@media print{.bespoke-after{-webkit-transform:none;transform:none}}.bespoke-inactive{opacity:0;pointer-events:none}@media print{.bespoke-inactive{opacity:1}}.bespoke-active{opacity:1}.bespoke-bullet{-webkit-transition:all .3s ease;transition:all .3s ease}@media print{.bespoke-bullet{-webkit-transition:none;transition:none}}.bespoke-bullet-inactive{opacity:0}li.bespoke-bullet-inactive{-webkit-transform:translateX(16px);transform:translateX(16px)}@media print{li.bespoke-bullet-inactive{-webkit-transform:none;transform:none}}@media print{.bespoke-bullet-inactive{opacity:1}}.bespoke-bullet-active{opacity:1}.bespoke-scale-parent{-webkit-perspective:600px;perspective:600px;position:absolute;top:0;left:0;right:0;bottom:0}@media print{.bespoke-scale-parent{-webkit-transform:none!important;transform:none!important}}.bespoke-progress-parent{position:absolute;top:0;left:0;right:0;height:2px}@media only screen and (min-width:1366px){.bespoke-progress-parent{height:4px}}@media print{.bespoke-progress-parent{display:none}}.bespoke-progress-bar{-webkit-transition:width .6s ease;transition:width .6s ease;position:absolute;height:100%;background:#0089f3;border-radius:0 4px 4px 0}.emphatic,.emphatic .bespoke-slide{background:#eaeaea}pre{padding:26px!important;border-radius:8px}body{font-family:helvetica,arial,sans-serif;font-size:18px;color:#404040}h1{font-size:72px;line-height:82px;letter-spacing:-2px;margin-bottom:16px}h2{font-size:42px;letter-spacing:-1px;margin-bottom:8px}h3{font-size:24px;font-weight:400;margin-bottom:24px;color:#606060}hr{visibility:hidden;height:20px}ul{list-style:none}li{margin-bottom:12px}p{margin:0 100px 12px;line-height:22px}a{color:#0089f3;text-decoration:none}";return i(e,{prepend:!0}),function(e){n()(e)}}},{"bespoke-classes":2,"insert-css":3}],2:[function(e,t){t.exports=function(){return function(e){var t=function(e,t){e.classList.add("bespoke-"+t)},n=function(e,t){e.className=e.className.replace(new RegExp("bespoke-"+t+"(\\s|$)","g")," ").trim()},i=function(i,r){var a=e.slides[e.slide()],o=r-e.slide(),s=o>0?"after":"before";["before(-\\d+)?","after(-\\d+)?","active","inactive"].map(n.bind(null,i)),i!==a&&["inactive",s,s+"-"+Math.abs(o)].map(t.bind(null,i))};t(e.parent,"parent"),e.slides.map(function(e){t(e,"slide")}),e.on("activate",function(r){e.slides.map(i),t(r.slide,"active"),n(r.slide,"inactive")})}}},{}],3:[function(e,t){var n={};t.exports=function(e,t){if(!n[e]){n[e]=!0;var i=document.createElement("style");i.setAttribute("type","text/css"),"textContent"in i?i.textContent=e:i.styleSheet.cssText=e;var r=document.getElementsByTagName("head")[0];t&&t.prepend?r.insertBefore(i,r.childNodes[0]):r.appendChild(i)}}},{}]},{},[1])(1)})}).call(this,"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{}],9:[function(e,t){t.exports=function(e){return function(t){var n,i,r="vertical"==e?"Y":"X";t.parent.addEventListener("touchstart",function(e){1==e.touches.length&&(n=e.touches[0]["page"+r],i=0)}),t.parent.addEventListener("touchmove",function(e){1==e.touches.length&&(e.preventDefault(),i=e.touches[0]["page"+r]-n)}),t.parent.addEventListener("touchend",function(){Math.abs(i)>50&&t[i>0?"prev":"next"]()})}}},{}],10:[function(e,t){var n=function(e,t){var n=1===e.nodeType?e:document.querySelector(e),i=[].filter.call(n.children,function(e){return"SCRIPT"!==e.nodeName}),r=i[0],a={},o=function(e,t){i[e]&&(p("deactivate",u(r,t)),r=i[e],p("activate",u(r,t)))},s=function(e,t){return arguments.length?void(p("slide",u(i[e],t))&&o(e,t)):i.indexOf(r)},l=function(e,t){var n=i.indexOf(r)+e;p(e>0?"next":"prev",u(r,t))&&o(n,t)},c=function(e,t){return(a[e]||(a[e]=[])).push(t),function(){a[e]=a[e].filter(function(e){return e!==t})}},p=function(e,t){return(a[e]||[]).reduce(function(e,n){return e&&n(t)!==!1},!0)},u=function(e,t){return t=t||{},t.index=i.indexOf(e),t.slide=e,t},f={on:c,fire:p,slide:s,next:l.bind(null,1),prev:l.bind(null,-1),parent:n,slides:i};return(t||[]).forEach(function(e){e(f)}),o(0),f};t.exports={from:n}},{}],11:[function(e){var t=e("bespoke"),n=e("bespoke-theme-cube"),i=e("bespoke-keys"),r=e("bespoke-touch"),a=e("bespoke-bullets"),o=e("bespoke-scale"),s=e("bespoke-hash"),l=e("bespoke-progress"),c=e("bespoke-state");t.from("article",[n(),i(),r(),a("li, .bullet"),o(),s(),l(),c()]),e("./../../bower_components/prism/prism.js")},{"./../../bower_components/prism/prism.js":1,bespoke:10,"bespoke-bullets":2,"bespoke-hash":3,"bespoke-keys":4,"bespoke-progress":5,"bespoke-scale":6,"bespoke-state":7,"bespoke-theme-cube":8,"bespoke-touch":9}]},{},[11]);