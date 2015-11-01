/*! modernizr 3.2.0 (Custom Build) | MIT *
 * http://modernizr.com/download/?-boxshadow !*/
!function(e,n,t){function o(e,n){return typeof e===n}function r(e){var n=C.className,t=Modernizr._config.classPrefix||"";if(w&&(n=n.baseVal),Modernizr._config.enableJSClass){var o=new RegExp("(^|\\s)"+t+"no-js(\\s|$)");n=n.replace(o,"$1"+t+"js$2")}Modernizr._config.enableClasses&&(n+=" "+t+e.join(" "+t),w?C.className.baseVal=n:C.className=n)}function s(){var e,n,t,r,s,i,a;for(var l in x)if(x.hasOwnProperty(l)){if(e=[],n=x[l],n.name&&(e.push(n.name.toLowerCase()),n.options&&n.options.aliases&&n.options.aliases.length))for(t=0;t<n.options.aliases.length;t++)e.push(n.options.aliases[t].toLowerCase());for(r=o(n.fn,"function")?n.fn():n.fn,s=0;s<e.length;s++)i=e[s],a=i.split("."),1===a.length?Modernizr[a[0]]=r:(!Modernizr[a[0]]||Modernizr[a[0]]instanceof Boolean||(Modernizr[a[0]]=new Boolean(Modernizr[a[0]])),Modernizr[a[0]][a[1]]=r),g.push((r?"":"no-")+a.join("-"))}}function i(e,n){return!!~(""+e).indexOf(n)}function a(){return"function"!=typeof n.createElement?n.createElement(arguments[0]):w?n.createElementNS.call(n,"http://www.w3.org/2000/svg",arguments[0]):n.createElement.apply(n,arguments)}function l(e){return e.replace(/([a-z])-([a-z])/g,function(e,n,t){return n+t.toUpperCase()}).replace(/^-/,"")}function f(e,n){return function(){return e.apply(n,arguments)}}function u(e,n,t){var r;for(var s in e)if(e[s]in n)return t===!1?e[s]:(r=n[e[s]],o(r,"function")?f(r,t||n):r);return!1}function d(e){return e.replace(/([A-Z])/g,function(e,n){return"-"+n.toLowerCase()}).replace(/^ms-/,"-ms-")}function p(){var e=n.body;return e||(e=a(w?"svg":"body"),e.fake=!0),e}function c(e,t,o,r){var s,i,l,f,u="modernizr",d=a("div"),c=p();if(parseInt(o,10))for(;o--;)l=a("div"),l.id=r?r[o]:u+(o+1),d.appendChild(l);return s=a("style"),s.type="text/css",s.id="s"+u,(c.fake?c:d).appendChild(s),c.appendChild(d),s.styleSheet?s.styleSheet.cssText=e:s.appendChild(n.createTextNode(e)),d.id=u,c.fake&&(c.style.background="",c.style.overflow="hidden",f=C.style.overflow,C.style.overflow="hidden",C.appendChild(c)),i=t(d,e),c.fake?(c.parentNode.removeChild(c),C.style.overflow=f,C.offsetHeight):d.parentNode.removeChild(d),!!i}function m(n,o){var r=n.length;if("CSS"in e&&"supports"in e.CSS){for(;r--;)if(e.CSS.supports(d(n[r]),o))return!0;return!1}if("CSSSupportsRule"in e){for(var s=[];r--;)s.push("("+d(n[r])+":"+o+")");return s=s.join(" or "),c("@supports ("+s+") { #modernizr { position: absolute; } }",function(e){return"absolute"==getComputedStyle(e,null).position})}return t}function h(e,n,r,s){function f(){d&&(delete z.style,delete z.modElem)}if(s=o(s,"undefined")?!1:s,!o(r,"undefined")){var u=m(e,r);if(!o(u,"undefined"))return u}for(var d,p,c,h,v,y=["modernizr","tspan"];!z.style;)d=!0,z.modElem=a(y.shift()),z.style=z.modElem.style;for(c=e.length,p=0;c>p;p++)if(h=e[p],v=z.style[h],i(h,"-")&&(h=l(h)),z.style[h]!==t){if(s||o(r,"undefined"))return f(),"pfx"==n?h:!0;try{z.style[h]=r}catch(g){}if(z.style[h]!=v)return f(),"pfx"==n?h:!0}return f(),!1}function v(e,n,t,r,s){var i=e.charAt(0).toUpperCase()+e.slice(1),a=(e+" "+b.join(i+" ")+i).split(" ");return o(n,"string")||o(n,"undefined")?h(a,n,r,s):(a=(e+" "+E.join(i+" ")+i).split(" "),u(a,n,t))}function y(e,n,o){return v(e,t,t,n,o)}var g=[],C=n.documentElement,w="svg"===C.nodeName.toLowerCase(),x=[],_={_version:"3.2.0",_config:{classPrefix:"",enableClasses:!0,enableJSClass:!0,usePrefixes:!0},_q:[],on:function(e,n){var t=this;setTimeout(function(){n(t[e])},0)},addTest:function(e,n,t){x.push({name:e,fn:n,options:t})},addAsyncTest:function(e){x.push({name:null,fn:e})}},Modernizr=function(){};Modernizr.prototype=_,Modernizr=new Modernizr;var S="Moz O ms Webkit",b=_._config.usePrefixes?S.split(" "):[];_._cssomPrefixes=b;var E=_._config.usePrefixes?S.toLowerCase().split(" "):[];_._domPrefixes=E;var P={elem:a("modernizr")};Modernizr._q.push(function(){delete P.elem});var z={style:P.elem.style};Modernizr._q.unshift(function(){delete z.style}),_.testAllProps=v,_.testAllProps=y,Modernizr.addTest("boxshadow",y("boxShadow","1px 1px",!0)),s(),r(g),delete _.addTest,delete _.addAsyncTest;for(var N=0;N<Modernizr._q.length;N++)Modernizr._q[N]();e.Modernizr=Modernizr}(window,document);


(function ($) {

    'use strict';

    $(function () {

        // слайдеры
        (function () {
            var $sliders = $('.js-slick');
            if ($sliders.length > 0) {
                $sliders.slick();
            }
        })();

        // модальное окно
        (function () {
            var $modal = $('.modal-area'),
                $body = $('body'),
                openBtnSelector = '.js-open-modal',
                closeBtnSelector = '.js-close-modal';

            function openModal() {
                $body.addClass('modal-open');
            };

            function closeModal() {
                $body.removeClass('modal-open');
            };

            $(document).on('click', openBtnSelector, function(e) {
                e.preventDefault();
                openModal();
            });

             $(document).on('click', closeBtnSelector, function(e) {
                e.preventDefault();
                closeModal();
            });
        })();


        // реализация прилипающих элементов с помощью position: sticky
        (function () {
            var stickyElements = document.getElementsByClassName('js-sticky');

            for (var i = stickyElements.length - 1; i >= 0; i--) {
                Stickyfill.add(stickyElements[i]);
            }
        })();


        // работа меню
        (function () {

            var $navLinks = $('.nav__link');
            var navHeight = $('.nav').outerHeight();

            function setActiveItem(navItem) {
                navItem
                    .addClass('nav__link_active')
                    .siblings()
                    .removeClass('nav__link_active');
            };

            $('section:not(.hero)').waypoint(function(direction) {
                var id = this.element.id;
                var $link = $navLinks.filter(function () {
                    return this.hash.slice(1) === id;
                });
                setActiveItem($link);
            }, {
                offset: navHeight
            });

            $('.hero').waypoint(function() {
                $navLinks.removeClass('nav__link_active');
            }, {
                offset: navHeight
            });

            $(document).on('click', '.nav__link, .nav__text', function (e) {
                var $target = $(e.target).closest('.nav__link'),
                    hash = $target.get(0).hash;

                // window.location.hash = hash;

                $('html, body').animate({
                    scrollTop: $(hash).offset().top - navHeight
                },
                700,
                function () {
                    setActiveItem($target);
                });

                e.preventDefault();
            });
        })();

    });

})(jQuery);



