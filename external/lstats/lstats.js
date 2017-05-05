module.exports=function(){"use strict";function t(){if(typeof window.performance==="undefined"){window.performance={}}if(!window.performance.now){var t=Date.now();if(performance.timing&&performance.timing.navigationStart){t=performance.timing.navigationStart}window.performance.now=function i(){return Date.now()-t}}if(!window.performance.mark){window.performance.mark=function(){}}if(!window.performance.measure){window.performance.measure=function(){}}if(!window.performance.memory){window.performance.memory={usedJSHeapSize:0,totalJSHeapSize:0}}}t();var i=80;var e=38;var s=Math.round(window.devicePixelRatio||1);var a=i*s;var h=e*s;var l=3*s;var n=2*s;var r=3*s;var c=15*s;var _=74*s;var o=(e-18)*s;var f=function t(f,d,p,m){this._name=d;this._fg=p;this._bg=m;this._canvas=document.createElement("canvas");this._canvas.width=a;this._canvas.height=h;this._canvas.style.cssText="width:"+i+"px;height:"+e+"px";this._ctx=this._canvas.getContext("2d");this._ctx.font="bold "+9*s+"px Helvetica,Arial,sans-serif";this._ctx.textBaseline="top";this._ctx.fillStyle=m;this._ctx.fillRect(0,0,a,h);this._ctx.fillStyle=p;this._ctx.fillText(d,l,n);this._ctx.fillRect(r,c,_,o);this._ctx.fillStyle=m;this._ctx.globalAlpha=.9;this._ctx.fillRect(r,c,_,o);f.appendChild(this._canvas)};f.prototype.draw=function t(i,e){var h=Math.round(i*100)/100;this._ctx.fillStyle=this._bg;this._ctx.globalAlpha=1;this._ctx.fillRect(0,0,a,c);this._ctx.fillStyle=this._fg;this._ctx.fillText(h+" "+this._name,l,n);this._ctx.drawImage(this._canvas,r+s,c,_-s,o,r,c,_-s,o);this._ctx.fillRect(r+_-s,c,s,o);var f=Math.round((1-i/e)*o);this._ctx.fillStyle=this._bg;this._ctx.globalAlpha=.9;this._ctx.fillRect(r+_-s,c,s,f)};var d=function(t){function i(i,e,a,h){t.call(this,i,e,a,h);this._threshold=0;this._canvas2=document.createElement("canvas");this._canvas2.width=_;this._canvas2.height=o;this._canvas2.style.cssText="width:"+_/s+"px;height:"+o/s+"px";this._ctx2=this._canvas2.getContext("2d");this._ctx2.fillStyle=h;this._ctx.globalAlpha=.9;this._ctx2.fillRect(0,0,_,o)}if(t)i.__proto__=t;i.prototype=Object.create(t&&t.prototype);i.prototype.constructor=i;i.prototype.draw=function t(i,e){var h=Math.round(i*100)/100;this._ctx.fillStyle=this._bg;this._ctx.globalAlpha=1;this._ctx.fillRect(0,0,a,c);this._ctx.fillStyle=this._fg;this._ctx.fillText(h+" "+this._name,l,n);if(i>this._threshold){var f=(i-i%o)/o;var d=o*(f+1);var p=this._threshold;this._threshold=d;var m=p/d;this._ctx2.drawImage(this._canvas,r,c,_,o,0,0,_,o);this._ctx.fillStyle=this._fg;this._ctx.globalAlpha=1;this._ctx.fillRect(r,c,_,o);this._ctx.fillStyle=this._bg;this._ctx.globalAlpha=.9;this._ctx.fillRect(r,c,_,o);this._ctx.fillStyle=this._fg;this._ctx.globalAlpha=1;this._ctx.drawImage(this._canvas2,s,0,_-s,o,r,c+(1-m)*o,_-s,m*o)}else{this._ctx.drawImage(this._canvas,r+s,c,_-s,o,r,c,_-s,o)}var x=Math.round((1-i/this._threshold)*o);this._ctx.fillRect(r+_-s,c,s,o);if(e){this._ctx.fillStyle="#e00";this._ctx.globalAlpha=1;this._ctx.fillRect(r+_-s,c,s,x)}else{this._ctx.fillStyle=this._bg;this._ctx.globalAlpha=.9;this._ctx.fillRect(r+_-s,c,s,x)}};return i}(f);var p=function t(i,e){var s=this;if(e===void 0)e=["fps","ms","mb"];this._mode=0;this._enableFPS=e.indexOf("fps")!==-1;this._enableMS=e.indexOf("ms")!==-1;if(window.performance.memory&&window.performance.memory.totalJSHeapSize){this._enableMB=e.indexOf("mb")!==-1}this._framesMS=0;this._lastTimeMS=0;this._frames=0;this._lastTimeFPS=0;this._used=0;this._lastUsed=0;this._lastTimeMB=0;var a=document.createElement("div");a.style.cssText="position:fixed;top:5px;right:5px;cursor:pointer;opacity:0.9;z-index:9999";a.addEventListener("mousedown",function(t){t.preventDefault();t.stopPropagation();s._mode=++s._mode%a.children.length;for(var i=0;i<a.children.length;++i){a.children[i].style.display=i===s._mode?"block":"none"}});if(this._enableFPS){this._graphFPS=new f(a,"FPS","#0ff","#002")}if(this._enableMS){this._graphMS=new f(a,"MS","#f08","#201")}if(this._enableMB){this._graphMB=new d(a,"MB","#0f0","#020")}for(var h=0;h<a.children.length;++h){a.children[h].style.display=h===0?"block":"none"}i.appendChild(a)};p.prototype.tick=function t(){var i=window.performance.now();if(this._enableMS){++this._framesMS;var e=i-this._lastTimeMS;if(e>100){this._graphMS.draw(e/this._framesMS,50);this._framesMS=0;this._lastTimeMS=i}}if(this._enableFPS){++this._frames;var s=i-this._lastTimeFPS;if(s>1e3){this._graphFPS.draw(this._frames*1e3/s,100);this._frames=0;this._lastTimeFPS=i}}if(this._enableMB){var a=i-this._lastTimeMB;if(a>200){this._lastUsed=this._used;this._used=window.performance.memory.usedJSHeapSize;this._lastTimeMB=i;var h=this._used-this._lastUsed;this._graphMB.draw(this._used/1048576,h<0)}}};return p}();