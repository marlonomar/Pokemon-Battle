!function(a){var e={};function t(n){if(e[n])return e[n].exports;var o=e[n]={i:n,l:!1,exports:{}};return a[n].call(o.exports,o,o.exports,t),o.l=!0,o.exports}t.m=a,t.c=e,t.d=function(a,e,n){t.o(a,e)||Object.defineProperty(a,e,{enumerable:!0,get:n})},t.r=function(a){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(a,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(a,"__esModule",{value:!0})},t.t=function(a,e){if(1&e&&(a=t(a)),8&e)return a;if(4&e&&"object"==typeof a&&a&&a.__esModule)return a;var n=Object.create(null);if(t.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:a}),2&e&&"string"!=typeof a)for(var o in a)t.d(n,o,function(e){return a[e]}.bind(null,o));return n},t.n=function(a){var e=a&&a.__esModule?function(){return a.default}:function(){return a};return t.d(e,"a",e),e},t.o=function(a,e){return Object.prototype.hasOwnProperty.call(a,e)},t.p="",t(t.s=1)}([function(a,e){$(document).ready(function(){var a=function(a){var e;e=a,$(".".concat(e," div.pokeball")).on("click",function(){var a=$("#".concat(e)).val();n(a,t)});var t=function(e){var t={nombre:e.name,velocidad:e.stats[0].base_stat,defensa_especial:e.stats[1].base_stat,ataque_especial:e.stats[2].base_stat,defensa:e.stats[3].base_stat,ataque:e.stats[4].base_stat,hp:e.stats[5].base_stat};localStorage.setItem("".concat(a),JSON.stringify(t)),function(a){var t=$(".".concat(a," > .carta > .fondo")),n=$(".".concat(a," > .carta > .fondo > .ambiente")),o=$(".".concat(a," > .carta > .fondo > .tipos"));t.prepend("<h1>"+e.name+"</h1>"),t.prepend("<div class='vida'><div><p>vida</p></div></div>"),n.append("<img src='./images/sprites/"+e.name+".gif' class='sprite'>"),e.types.map(function(a){t.append("<p class='elementos' style='display:none'>"+a.type.name+"<p>"),o.prepend("<img src='./images/tipos/"+a.type.name+".PNG' class='tipo'>"),$("img.tipo ").eq(0).addClass("tipo_secundario"),$(".elementos").eq(0).hide(),localStorage.setItem("tipo",JSON.stringify(a.type.name))}),e.stats.map(function(e){$(".".concat(a," > .carta > .fondo ul")).append("<li>"+e.stat.name+" : "+e.base_stat+"</li>")})}(a),o(a)},n=function(a,e){$.ajax({url:"https://pokeapi.co/api/v2/pokemon/"+a+"/",data:"GET",dataType:"JSON",success:function(a){e(a)}})},o=function(a){var e=localStorage.getItem("tipo"),t=JSON.parse(e);$(".".concat(a," > .carta > .fondo")).css({background:"url(./images/fondos/"+t+".PNG)"}),$(".".concat(a," > .carta > .fondo > .ambiente")).css({background:"url(./images/ambiente/"+t+".jpg)","background-size":"cover"})}};a("player-1"),a("player-2");$("button").on("click",function(){var a=JSON.parse(localStorage.getItem("player-1")),e=JSON.parse(localStorage.getItem("player-2")),t=$(".comentarios");t.css({display:"block"}),function(a,e){function n(a,e,n){setTimeout(function(){t.empty(),t.append("".concat(a.nombre," ataca con una potencia de ").concat(a.ataque))},5e3),setTimeout(function(){t.empty(),t.append("".concat(e.nombre," recibio un dano de ").concat(dano," en sus puntos de vida")),bajar_ps(n)},1e4),setTimeout(function(){hp=impacto(e,dano),t.empty(),t.append("los puntos de vida de ".concat(e.nombre," bajaron a ").concat(hp))},15e3),setTimeout(function(){hp=impacto(e,dano),hp<=0&&(t.empty(),$("body > div > div.".concat(n," > div.carta > div > div.ambiente > img")).fadeOut(2e3),t.append("".concat(a.nombre," a ganado!!!")),localStorage.clear())},2e4)}function o(a,e,n){setTimeout(function(){t.empty(),t.append("".concat(a.nombre," ataca con una potencia de ").concat(a.ataque_especial))},5e3),setTimeout(function(){t.empty(),t.append("".concat(e.nombre," recibio un dano de ").concat(dano," en sus puntos de vida")),bajar_ps(n)},1e4),setTimeout(function(){hp=impacto(e,dano),t.empty(),t.append("los puntos de vida de ".concat(e.nombre," bajaron a ").concat(hp))},15e3),setTimeout(function(){hp=impacto(e,dano),hp<=0&&(t.empty(),$("body > div > div.".concat(n," > div.carta > div > div.ambiente > img")).fadeOut(1500),t.append("".concat(a.nombre," a ganado!!!")),localStorage.clear())},2e4)}ataque=function(a,e){var t=parseInt(a.defensa)-parseInt(e.ataque);return parseInt(t)*parseInt(-1)},ataque_especial=function(a,e){var t=parseInt(a.defensa_especial)-parseInt(e.ataque_especial);return parseInt(t)*parseInt(-1)},impacto=function(a,e){return parseInt(a.hp)-parseInt(e)},bajar_ps=function(a){$("body > div > div.".concat(a," > div.carta > div > div.vida > div")).css({width:"".concat(100-dano,"%")}),dano>=50&&$("body > div > div.".concat(a," > div.carta > div > div.vida > div")).css({background:"yellow"}),dano>80&&$("body > div > div.".concat(a," > div.carta > div > div.vida > div")).css({background:"red"})},botonAtacar=function(a){$(".".concat(a,"  div.carta > div > div.stats")).append("<button class='btn btn-danger' id='atacar'>Atacar</button>")},a.velocidad>e.velocidad?a.ataque>=a.ataque_especial?(botonAtacar("player-1"),$("#atacar").click(function(){t.append("el combate comienza entre ".concat(a.nombre," contra ").concat(e.nombre)),dano=ataque(e,a),n(a,e,"player-2")})):(botonAtacar("player-1"),$("#atacar").click(function(){t.append("el combate comienza entre ".concat(a.nombre," contra ").concat(e.nombre)),dano=ataque_especial(e,a),o(a,e,"player-2")})):e.ataque>=e.ataque_especial?(botonAtacar("player-2"),$("#atacar").click(function(){t.append("el combate comienza entre ".concat(a.nombre," contra ").concat(e.nombre)),dano=ataque(a,e),n(e,a,"player-1")})):(botonAtacar("player-2"),$("#atacar").click(function(){t.append("el combate comienza entre ".concat(a.nombre," contra ").concat(e.nombre)),dano=ataque_especial(a,e),o(e,a,"player-1")}))}(a,e)})})},function(a,e,t){"use strict";t.r(e);var n=t(0);Object(n.battle)("player-1"),Object(n.battle)("player-2")}]);