$(document).ready((function(){let e={};$("section").each(((n,o)=>{e[o.id]=o.offsetTop})),$(window).scroll((function(){for(let n in e)$(window).scrollTop()>=e[n]&&($(".js-nav__menu-list").removeClass("active"),$(`.js-nav__menu-list[href="#${n}"]`).addClass("active"))}))}));