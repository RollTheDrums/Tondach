/*
 * FancyBox - jQuery Plugin
 * Simple and fancy lightbox alternative
 *
 * Examples and documentation at: http://fancybox.net
 * 
 * Copyright (c) 2008 - 2010 Janis Skarnelis
 * That said, it is hardly a one-person project. Many people have submitted bugs, code, and offered their advice freely. Their support is greatly appreciated.
 * 
 * Version: 1.3.4 (11/11/2010)
 * Requires: jQuery v1.3+
 *
 * Dual licensed under the MIT and GPL licenses:
 *   http://www.opensource.org/licenses/mit-license.php
 *   http://www.gnu.org/licenses/gpl.html
 *
 * Patches applied for Easy FancyBox WordPress plugin integration:
 * Quoted attribute selector, RavanH ravanhagen@gmail.com 
 * Added isTouch variable and autoResize parameter, RavanH ravanhagen@gmail.com 
 * Catch all scrollwheel action on when jQuery Moushweel is included, RavanH ravanhagen@gmail.com 
 * jQuery 1.9+ compat.  by Sabel http://sabel.bluegfx.de/wordpress/wp-content/uploads/2013/03/jquery.fancybox-1.3.4.js
 * Added SVG support by Simon Maillard simon@ogesta.fr
 */
!function(a){var b,c,d,e,f,g,h,i,j,k,w,A,B,l=0,m={},n=[],o=0,p={},q=[],r=null,s=new Image,t=/\.(jpg|gif|png|bmp|jpeg)(.*)?$/i,u=/[^\.]\.(swf)\s*$/i,v=/[^\.]\.(svg)\s*$/i,x=1,y=0,z="",C=!1,D=a.extend(a("<div/>")[0],{prop:0}),E=navigator.userAgent.match(/msie [6]/i)&&!window.XMLHttpRequest,F=void 0!==document.createTouch,G=function(){c.hide(),s.onerror=s.onload=null,r&&r.abort(),b.empty()},H=function(){return!1===m.onError(n,l,m)?(c.hide(),C=!1,void 0):(m.titleShow=!1,m.width="auto",m.height="auto",b.html('<p id="fancybox-error">The requested content cannot be loaded.<br />Please try again later.</p>'),J(),void 0)},I=function(){var e,f,h,i,j,k,d=n[l];if(G(),m=a.extend({},a.fn.fancybox.defaults,"undefined"==typeof a(d).data("fancybox")?m:a(d).data("fancybox")),k=m.onStart(n,l,m),k===!1)return C=!1,void 0;if("object"==typeof k&&(m=a.extend(m,k)),h=m.title||(d.nodeName?a(d).attr("title"):d.title)||"",d.nodeName&&!m.orig&&(m.orig=a(d).children("img:first").length?a(d).children("img:first"):a(d)),""===h&&m.orig&&m.titleFromAlt&&(h=m.orig.attr("alt")),e=m.href||(d.nodeName?a(d).attr("href"):d.href)||null,(/^(?:javascript)/i.test(e)||"#"==e)&&(e=null),m.type?(f=m.type,e||(e=m.content)):m.content?f="html":e&&(f=e.match(t)?"image":e.match(u)?"swf":e.match(v)?"svg":a(d).hasClass("iframe")?"iframe":0===e.indexOf("#")?"inline":"ajax"),!f)return H(),void 0;switch("inline"==f&&(d=e.substr(e.indexOf("#")),f=a(d).length>0?"inline":"ajax"),m.type=f,m.href=e,m.title=h,m.autoDimensions&&("html"==m.type||"inline"==m.type||"ajax"==m.type?(m.width="auto",m.height="auto"):m.autoDimensions=!1),m.modal&&(m.overlayShow=!0,m.hideOnOverlayClick=!1,m.hideOnContentClick=!1,m.enableEscapeButton=!1,m.showCloseButton=!1),m.padding=parseInt(m.padding,10),m.margin=parseInt(m.margin,10),b.css("padding",m.padding+m.margin),a(".fancybox-inline-tmp").unbind("fancybox-cancel").bind("fancybox-change",function(){a(this).replaceWith(g.children())}),f){case"html":b.html(m.content),J();break;case"inline":if(a(d).parent().is("#fancybox-content")===!0)return C=!1,void 0;a('<div class="fancybox-inline-tmp" />').hide().insertBefore(a(d)).bind("fancybox-cleanup",function(){a(this).replaceWith(g.children())}).bind("fancybox-cancel",function(){a(this).replaceWith(b.children())}),a(d).appendTo(b),J();break;case"image":C=!1,a.fancybox.showActivity(),s=new Image,s.onerror=function(){H()},s.onload=function(){C=!0,s.onerror=s.onload=null,K()},s.src=e;break;case"swf":m.scrolling="no",i='<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" width="'+m.width+'" height="'+m.height+'"><param name="movie" value="'+e+'"></param>',j="",a.each(m.swf,function(a,b){i+='<param name="'+a+'" value="'+b+'"></param>',j+=" "+a+'="'+b+'"'}),i+='<embed src="'+e+'" type="application/x-shockwave-flash" width="'+m.width+'" height="'+m.height+'"'+j+"></embed></object>",b.html(i),J();break;case"svg":m.scrolling="no",i='<object width="'+m.width+'" height="'+m.height+'" data="'+e+'"></object>',b.html(i),J();break;case"ajax":C=!1,a.fancybox.showActivity(),m.ajax.win=m.ajax.success,r=a.ajax(a.extend({},m.ajax,{url:e,data:m.ajax.data||{},error:function(a){a.status>0&&H()},success:function(a,d,f){var g="object"==typeof f?f:r;if(200==g.status){if("function"==typeof m.ajax.win){if(k=m.ajax.win(e,a,d,f),k===!1)return c.hide(),void 0;("string"==typeof k||"object"==typeof k)&&(a=k)}b.html(a),J()}}}));break;case"iframe":L()}},J=function(){var c=m.width,d=m.height;c=c.toString().indexOf("%")>-1?parseInt((a(window).width()-2*m.margin)*parseFloat(c)/100,10)+"px":"auto"==c?"auto":c+"px",d=d.toString().indexOf("%")>-1?parseInt((a(window).height()-2*m.margin)*parseFloat(d)/100,10)+"px":"auto"==d?"auto":d+"px",b.wrapInner('<div style="width:'+c+";height:"+d+";overflow: "+("auto"==m.scrolling?"auto":"yes"==m.scrolling?"scroll":"hidden")+';position:relative;"></div>'),m.width=b.width(),m.height=b.height(),L()},K=function(){m.width=s.width,m.height=s.height,a("<img />").attr({id:"fancybox-img",src:s.src,alt:m.title}).appendTo(b),L()},L=function(){var f,r;return c.hide(),e.is(":visible")&&!1===p.onCleanup(q,o,p)?(a(".fancybox-inline-tmp").trigger("fancybox-cancel"),C=!1,void 0):(C=!0,a(g.add(d)).unbind(),a(window).unbind("resize.fb scroll.fb"),a(document).unbind("keydown.fb"),e.is(":visible")&&"outside"!==p.titlePosition&&e.css("height",e.height()),q=n,o=l,p=m,p.overlayShow?(d.css({"background-color":p.overlayColor,opacity:p.overlayOpacity,cursor:p.hideOnOverlayClick?"pointer":"auto",height:a(document).height()}),d.is(":visible")||(E&&a("select:not(#fancybox-tmp select)").filter(function(){return"hidden"!==this.style.visibility}).css({visibility:"hidden"}).one("fancybox-cleanup",function(){this.style.visibility="inherit"}),d.show())):d.hide(),B=T(),N(),e.is(":visible")?(a(h.add(j).add(k)).hide(),f=e.position(),A={top:f.top,left:f.left,width:e.width(),height:e.height()},r=A.width==B.width&&A.height==B.height,g.fadeTo(p.changeFade,.3,function(){var c=function(){g.html(b.contents()).fadeTo(p.changeFade,1,P)};a(".fancybox-inline-tmp").trigger("fancybox-change"),g.empty().removeAttr("filter").css({"border-width":p.padding,width:B.width-2*p.padding,height:m.autoDimensions?"auto":B.height-y-2*p.padding}),r?c():(D.prop=0,a(D).animate({prop:1},{duration:p.changeSpeed,easing:p.easingChange,step:R,complete:c}))}),void 0):(e.removeAttr("style"),g.css("border-width",p.padding),"elastic"==p.transitionIn?(A=V(),g.html(b.contents()),e.show(),p.opacity&&(B.opacity=0),D.prop=0,a(D).animate({prop:1},{duration:p.speedIn,easing:p.easingIn,step:R,complete:P}),void 0):("inside"==p.titlePosition&&y>0&&i.show(),g.css({width:B.width-2*p.padding,height:m.autoDimensions?"auto":B.height-y-2*p.padding}).html(b.contents()),e.css(B).fadeIn("none"==p.transitionIn?0:p.speedIn,P),void 0)))},M=function(a){return a&&a.length?"float"==p.titlePosition?'<table id="fancybox-title-float-wrap" cellpadding="0" cellspacing="0"><tr><td id="fancybox-title-float-left"></td><td id="fancybox-title-float-main">'+a+'</td><td id="fancybox-title-float-right"></td></tr></table>':'<div id="fancybox-title-'+p.titlePosition+'">'+a+"</div>":!1},N=function(){if(z=p.title||"",y=0,i.empty().removeAttr("style").removeClass(),p.titleShow===!1)return i.hide(),void 0;if(z=a.isFunction(p.titleFormat)?p.titleFormat(z,q,o,p):M(z),!z||""===z)return i.hide(),void 0;switch(i.addClass("fancybox-title-"+p.titlePosition).html(z).appendTo("body").show(),p.titlePosition){case"inside":i.css({width:B.width-2*p.padding,marginLeft:p.padding,marginRight:p.padding}),y=i.outerHeight(!0),i.appendTo(f),B.height+=y;break;case"over":i.css({marginLeft:p.padding,width:B.width-2*p.padding,bottom:p.padding}).appendTo(f);break;case"float":i.css("left",-1*parseInt((i.width()-B.width-40)/2,10)).appendTo(e);break;default:i.css({width:B.width-2*p.padding,paddingLeft:p.padding,paddingRight:p.padding}).appendTo(e)}i.hide()},O=function(){return(p.enableEscapeButton||p.enableKeyboardNav)&&a(document).bind("keydown.fb",function(b){27==b.keyCode&&p.enableEscapeButton?(b.preventDefault(),a.fancybox.close()):37!=b.keyCode&&39!=b.keyCode||!p.enableKeyboardNav||"INPUT"===b.target.tagName||"TEXTAREA"===b.target.tagName||"SELECT"===b.target.tagName||(b.preventDefault(),a.fancybox[37==b.keyCode?"prev":"next"]())}),p.showNavArrows?((p.cyclic&&q.length>1||0!==o)&&j.show(),(p.cyclic&&q.length>1||o!=q.length-1)&&k.show(),void 0):(j.hide(),k.hide(),void 0)},P=function(){a.support.opacity||(g.get(0).style.removeAttribute("filter"),e.get(0).style.removeAttribute("filter")),m.autoDimensions&&g.css("height","auto"),e.css("height","auto"),z&&z.length&&i.show(),p.showCloseButton&&h.show(),O(),p.hideOnContentClick&&g.bind("click",a.fancybox.close),p.hideOnOverlayClick&&d.bind("click",a.fancybox.close),p.autoResize&&a(window).bind("resize.fb",a.fancybox.resize),p.centerOnScroll&&a(window).bind("scroll.fb",a.fancybox.center),a.fn.mousewheel&&a(window).bind("mousewheel.fb",function(b,c){b.preventDefault(),!1!==C||0!=a(b.target).get(0).clientHeight&&a(b.target).get(0).scrollHeight!==a(b.target).get(0).clientHeight||a.fancybox[c>0?"prev":"next"]()}),"iframe"==p.type&&a('<iframe id="fancybox-frame" name="fancybox-frame'+(new Date).getTime()+'" frameborder="0" hspace="0" '+(navigator.userAgent.match(/msie [6]/i)?'allowtransparency="true""':"")+' scrolling="'+m.scrolling+'" src="'+p.href+'"></iframe>').appendTo(g),e.show(),C=!1,a.fancybox.center(),p.onComplete(q,o,p),Q()},Q=function(){var a,b;q.length-1>o&&(a=q[o+1].href,"undefined"!=typeof a&&a.match(t)&&(b=new Image,b.src=a)),o>0&&(a=q[o-1].href,"undefined"!=typeof a&&a.match(t)&&(b=new Image,b.src=a))},R=function(a){var b={width:parseInt(A.width+(B.width-A.width)*a,10),height:parseInt(A.height+(B.height-A.height)*a,10),top:parseInt(A.top+(B.top-A.top)*a,10),left:parseInt(A.left+(B.left-A.left)*a,10)};"undefined"!=typeof B.opacity&&(b.opacity=.5>a?.5:a),e.css(b),g.css({width:b.width-2*p.padding,height:b.height-y*a-2*p.padding})},S=function(){return[a(window).width()-2*p.margin,a(window).height()-2*p.margin,a(document).scrollLeft()+p.margin,a(document).scrollTop()+p.margin]},T=function(){var e,a=S(),b={},c=p.autoScale,d=2*p.padding;return b.width=p.width.toString().indexOf("%")>-1?parseInt(a[0]*parseFloat(p.width)/100,10):p.width+d,b.height=p.height.toString().indexOf("%")>-1?parseInt(a[1]*parseFloat(p.height)/100,10):p.height+d,c&&(b.width>a[0]||b.height>a[1])&&("image"==m.type||"svg"==m.type||"swf"==m.type?(e=p.width/p.height,b.width>a[0]&&(b.width=a[0],b.height=parseInt((b.width-d)/e+d,10)),b.height>a[1]&&(b.height=a[1],b.width=parseInt((b.height-d)*e+d,10))):(b.width=Math.min(b.width,a[0]),b.height=Math.min(b.height,a[1]))),b.top=parseInt(Math.max(a[3]-20,a[3]+.5*(a[1]-b.height-40)),10),b.left=parseInt(Math.max(a[2]-20,a[2]+.5*(a[0]-b.width-40)),10),b},U=function(a){var b=a.offset();return b.top+=parseInt(a.css("paddingTop"),10)||0,b.left+=parseInt(a.css("paddingLeft"),10)||0,b.top+=parseInt(a.css("border-top-width"),10)||0,b.left+=parseInt(a.css("border-left-width"),10)||0,b.width=a.width(),b.height=a.height(),b},V=function(){var d,e,b=m.orig?a(m.orig):!1,c={};return b&&b.length?(d=U(b),c={width:d.width+2*p.padding,height:d.height+2*p.padding,top:d.top-p.padding-20,left:d.left-p.padding-20}):(e=S(),c={width:2*p.padding,height:2*p.padding,top:parseInt(e[3]+.5*e[1],10),left:parseInt(e[2]+.5*e[0],10)}),c},W=function(){return c.is(":visible")?(a("div",c).css("top",-40*x+"px"),x=(x+1)%12,void 0):(clearInterval(w),void 0)};a.fn.fancybox=function(b){return a(this).length?(a(this).data("fancybox",a.extend({},b,a.metadata?a(this).metadata():{})).unbind("click.fb").bind("click.fb",function(b){if(b.preventDefault(),!C){C=!0,a(this).blur(),n=[],l=0;var c=a(this).attr("rel")||"";c&&""!=c&&"nofollow"!==c?(n=a('a[rel="'+c+'"], area[rel="'+c+'"]'),l=n.index(this)):n.push(this),I()}}),this):this},a.fancybox=function(b){var c;if(!C){if(C=!0,c="undefined"!=typeof arguments[1]?arguments[1]:{},n=[],l=parseInt(c.index,10)||0,a.isArray(b)){for(var d=0,e=b.length;e>d;d++)"object"==typeof b[d]?a(b[d]).data("fancybox",a.extend({},c,b[d])):b[d]=a({}).data("fancybox",a.extend({content:b[d]},c));n=jQuery.merge(n,b)}else"object"==typeof b?a(b).data("fancybox",a.extend({},c,b)):b=a({}).data("fancybox",a.extend({content:b},c)),n.push(b);(l>n.length||0>l)&&(l=0),I()}},a.fancybox.showActivity=function(){clearInterval(w),c.show(),w=setInterval(W,66)},a.fancybox.hideActivity=function(){c.hide()},a.fancybox.next=function(){return a.fancybox.pos(o+1)},a.fancybox.prev=function(){return a.fancybox.pos(o-1)},a.fancybox.pos=function(a){C||(a=parseInt(a),n=q,a>-1&&a<q.length?(l=a,I()):p.cyclic&&q.length>1&&(l=a>=q.length?0:q.length-1,I()))},a.fancybox.cancel=function(){C||(C=!0,a(".fancybox-inline-tmp").trigger("fancybox-cancel"),G(),m.onCancel(n,l,m),C=!1)},a.fancybox.close=function(){function b(){d.fadeOut("fast"),i.empty().hide(),e.hide(),a(".fancybox-inline-tmp").trigger("fancybox-cleanup"),g.empty(),p.onClosed(q,o,p),q=m=[],o=l=0,p=m={},C=!1}if(!C&&!e.is(":hidden")){if(C=!0,p&&!1===p.onCleanup(q,o,p))return C=!1,void 0;if(G(),a(h.add(j).add(k)).hide(),a(g.add(d)).unbind(),a(window).unbind("resize.fb scroll.fb mousewheel.fb"),a(document).unbind("keydown.fb"),g.find("iframe#fancybox-frame").attr("src",E&&/^https/i.test(window.location.href||"")?"javascript:void(false)":"about:blank"),"inside"!==p.titlePosition&&i.empty(),e.stop(),"elastic"==p.transitionOut){A=V();var c=e.position();B={top:c.top,left:c.left,width:e.width(),height:e.height()},p.opacity&&(B.opacity=1),i.empty().hide(),D.prop=1,a(D).animate({prop:0},{duration:p.speedOut,easing:p.easingOut,step:R,complete:b})}else e.fadeOut("none"==p.transitionOut?0:p.speedOut,b)}},a.fancybox.resize=function(){d.is(":visible")&&d.css("height",a(document).height()),a.fancybox.center(!0)},a.fancybox.center=function(){var a,b;C||(b=arguments[0]===!0?1:0,a=S(),(b||!(e.width()>a[0]||e.height()>a[1]))&&e.stop().animate({top:parseInt(Math.max(a[3]-20,a[3]+.5*(a[1]-g.height()-40)-p.padding)),left:parseInt(Math.max(a[2]-20,a[2]+.5*(a[0]-g.width()-40)-p.padding))},"number"==typeof arguments[0]?arguments[0]:200))},a.fancybox.init=function(){a("#fancybox-wrap").length||(a("body").append(b=a('<div id="fancybox-tmp"></div>'),c=a('<div id="fancybox-loading"><div></div></div>'),d=a('<div id="fancybox-overlay"></div>'),e=a('<div id="fancybox-wrap"></div>')),f=a('<div id="fancybox-outer"></div>').append('<div class="fancybox-bg" id="fancybox-bg-n"></div><div class="fancybox-bg" id="fancybox-bg-ne"></div><div class="fancybox-bg" id="fancybox-bg-e"></div><div class="fancybox-bg" id="fancybox-bg-se"></div><div class="fancybox-bg" id="fancybox-bg-s"></div><div class="fancybox-bg" id="fancybox-bg-sw"></div><div class="fancybox-bg" id="fancybox-bg-w"></div><div class="fancybox-bg" id="fancybox-bg-nw"></div>').appendTo(e),f.append(g=a('<div id="fancybox-content"></div>'),h=a('<a id="fancybox-close"></a>'),i=a('<div id="fancybox-title"></div>'),j=a('<a href="javascript:;" id="fancybox-left"><span class="fancy-ico" id="fancybox-left-ico"></span></a>'),k=a('<a href="javascript:;" id="fancybox-right"><span class="fancy-ico" id="fancybox-right-ico"></span></a>')),h.click(a.fancybox.close),c.click(a.fancybox.cancel),j.click(function(b){b.preventDefault(),a.fancybox.prev()}),k.click(function(b){b.preventDefault(),a.fancybox.next()}),a.support.opacity||e.addClass("fancybox-ie"),E&&(c.addClass("fancybox-ie6"),e.addClass("fancybox-ie6"),a('<iframe id="fancybox-hide-sel-frame" src="'+(/^https/i.test(window.location.href||"")?"javascript:void(false)":"about:blank")+'" scrolling="no" border="0" frameborder="0" tabindex="-1"></iframe>').prependTo(f)))},a.fn.fancybox.defaults={padding:10,margin:40,opacity:!1,modal:!1,cyclic:!1,scrolling:"auto",width:560,height:340,autoScale:!0,autoDimensions:!0,centerOnScroll:!F,autoResize:!F,ajax:{},swf:{wmode:"transparent"},svg:{wmode:"transparent"},hideOnOverlayClick:!0,hideOnContentClick:!1,overlayShow:!0,overlayOpacity:.7,overlayColor:"#777",titleShow:!0,titlePosition:"float",titleFormat:null,titleFromAlt:!1,transitionIn:"fade",transitionOut:"fade",speedIn:300,speedOut:300,changeSpeed:300,changeFade:"fast",easingIn:"swing",easingOut:"swing",showCloseButton:!0,showNavArrows:!0,enableEscapeButton:!0,enableKeyboardNav:!0,onStart:function(){},onCancel:function(){},onComplete:function(){},onCleanup:function(){},onClosed:function(){},onError:function(){}},a(document).ready(function(){a.fancybox.init()})}(jQuery);
