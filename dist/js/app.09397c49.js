(function(t){function e(e){for(var i,s,a=e[0],l=e[1],c=e[2],p=0,f=[];p<a.length;p++)s=a[p],o[s]&&f.push(o[s][0]),o[s]=0;for(i in l)Object.prototype.hasOwnProperty.call(l,i)&&(t[i]=l[i]);u&&u(e);while(f.length)f.shift()();return r.push.apply(r,c||[]),n()}function n(){for(var t,e=0;e<r.length;e++){for(var n=r[e],i=!0,a=1;a<n.length;a++){var l=n[a];0!==o[l]&&(i=!1)}i&&(r.splice(e--,1),t=s(s.s=n[0]))}return t}var i={},o={app:0},r=[];function s(e){if(i[e])return i[e].exports;var n=i[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=t,s.c=i,s.d=function(t,e,n){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)s.d(n,i,function(e){return t[e]}.bind(null,i));return n},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],l=a.push.bind(a);a.push=e,a=a.slice();for(var c=0;c<a.length;c++)e(a[c]);var u=l;r.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"0e26":function(t,e,n){},"1d0e":function(t,e,n){},"22d3":function(t,e,n){"use strict";var i=n("1d0e"),o=n.n(i);o.a},"3dd6":function(t,e,n){},"4ab5":function(t,e,n){"use strict";var i=n("0e26"),o=n.n(i);o.a},5142:function(t,e,n){"use strict";var i=n("ae9e"),o=n.n(i);o.a},"56d7":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("f751"),n("097d");var i=n("2b0e"),o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("Pokemon")],1)},r=[],s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container"},[n("h1",[t._v("POKEDEX")]),n("PokemonSearch",{attrs:{apiUrl:t.apiUrl},on:{setPokemonUrl:t.setPokemonUrl}}),n("PokemonList",{attrs:{imageUrl:t.imageUrl,apiUrl:t.apiUrl},on:{setPokemonUrl:t.setPokemonUrl}}),t.showDetail?n("PokemonDetail",{attrs:{pokemonUrl:t.pokemonUrl,imageUrl:t.imageUrl},on:{closeDetail:t.closeDetail}}):t._e()],1)},a=[],l=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"searchbar"},[n("form",{on:{submit:function(e){return e.preventDefault(),t.setPokemonUrl(e)}}},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.searchvalue,expression:"searchvalue"}],attrs:{type:"text"},domProps:{value:t.searchvalue},on:{input:function(e){e.target.composing||(t.searchvalue=e.target.value)}}})]),n("i",{staticClass:"fas fa-search",on:{click:t.setPokemonUrl}})])},c=[],u={props:["apiUrl"],data:function(){return{searchvalue:""}},methods:{setPokemonUrl:function(t){""!==this.searchvalue&&this.$emit("setPokemonUrl",this.apiUrl+this.searchvalue)}}},p=u,f=(n("4ab5"),n("2877")),h=Object(f["a"])(p,l,c,!1,null,"8fa2c69e",null),m=h.exports,v=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"list"},[t._l(t.pokemons,function(e,i){return n("article",{key:"poke"+i,on:{click:function(n){return t.setPokemonUrl(e.url)}}},[n("img",{attrs:{src:t.imageUrl+e.id+".png",width:"96",height:"96",alt:""}}),n("h3",[t._v(t._s(e.name))])])}),n("div",{ref:"infinitescrolltrigger",attrs:{id:"scroll-trigger"}},[n("i",{staticClass:"fas fa-spinner fa-spin"})])],2)},d=[],k=(n("28a5"),n("ac6a"),{props:["imageUrl","apiUrl"],data:function(){return{pokemons:[],nextUrl:"",currentUrl:""}},methods:{fetchData:function(){var t=this,e=new Request(this.currentUrl);fetch(e).then(function(t){if(200===t.status)return t.json()}).then(function(e){t.nextUrl=e.next,e.results.forEach(function(e){e.id=e.url.split("/").filter(function(t){return!!t}).pop(),t.pokemons.push(e)})}).catch(function(t){console.log(t)})},scrollTrigger:function(){var t=this,e=new IntersectionObserver(function(e){e.forEach(function(e){e.intersectionRatio>0&&t.nextUrl&&t.next()})});e.observe(this.$refs.infinitescrolltrigger)},next:function(){this.currentUrl=this.nextUrl,this.fetchData()},setPokemonUrl:function(t){this.$emit("setPokemonUrl",t)}},created:function(){this.currentUrl=this.apiUrl,this.fetchData()},mounted:function(){this.scrollTrigger()}}),g=k,U=(n("5142"),Object(f["a"])(g,v,d,!1,null,"3fa4d2cc",null)),_=U.exports,b=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"detail"},[t.show?n("div",{staticClass:"detail-view"},[t.pokemon?n("div",{staticClass:"image"},[n("img",{attrs:{src:t.imageUrl+t.pokemon.id+".png",alt:""}})]):t._e(),t.pokemon?n("div",{staticClass:"data"},[n("h2",[t._v(t._s(t.pokemon.name))]),n("div",{staticClass:"property"},[n("div",{staticClass:"left"},[t._v("Base Experience")]),n("div",{staticClass:"right"},[t._v(t._s(t.pokemon.base_experience)+" XP")])]),n("div",{staticClass:"property"},[n("div",{staticClass:"left"},[t._v("Height")]),n("div",{staticClass:"right"},[t._v(t._s(t.pokemon.height/10)+" m")])]),n("div",{staticClass:"property"},[n("div",{staticClass:"left"},[t._v("Weight")]),n("div",{staticClass:"right"},[t._v(t._s(t.pokemon.weight/10)+" kg")])]),n("h3",[t._v("Pokemon Types")]),n("div",{staticClass:"types"},t._l(t.pokemon.types,function(e,i){return n("div",{key:"value"+i,staticClass:"type"},[t._v("\n          "+t._s(e.type.name)+"\n        ")])}),0),n("h3",[t._v("Abilities")]),n("div",{staticClass:"abilities"},t._l(t.pokemon.abilities,function(e,i){return n("div",{key:"value"+i,staticClass:"ability"},[t._v("\n          "+t._s(e.ability.name)+"\n        ")])}),0)]):n("h2",[t._v("The pokemon was not found")]),n("button",{staticClass:"close",on:{click:t.closeDetail}},[t._v("close")])]):n("i",{staticClass:"fas fa-spinner fa-spin"})])},P=[],y={props:["pokemonUrl","imageUrl"],data:function(){return{show:!1,pokemon:{}}},methods:{fetchData:function(){var t=this,e=new Request(this.pokemonUrl);fetch(e).then(function(t){if(200===t.status)return t.json()}).then(function(e){t.pokemon=e,t.show=!0}).catch(function(t){console.log(t)})},closeDetail:function(){this.$emit("closeDetail")}},created:function(){this.fetchData()}},w=y,C=(n("22d3"),Object(f["a"])(w,b,P,!1,null,"87c99008",null)),x=C.exports,D={data:function(){return{imageUrl:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/",apiUrl:"https://pokeapi.co/api/v2/pokemon/",pokemonUrl:"",showDetail:!1}},components:{PokemonSearch:m,PokemonList:_,PokemonDetail:x},methods:{setPokemonUrl:function(t){this.pokemonUrl=t,this.showDetail=!0},closeDetail:function(){this.pokemonUrl="",this.showDetail=!1}}},O=D,j=(n("baa5"),Object(f["a"])(O,s,a,!1,null,"9173634c",null)),E=j.exports,$={components:{Pokemon:E}},S=$,T=(n("5c0b"),Object(f["a"])(S,o,r,!1,null,null,null)),M=T.exports;i["a"].config.productionTip=!1,new i["a"]({render:function(t){return t(M)}}).$mount("#app")},"5c0b":function(t,e,n){"use strict";var i=n("5e27"),o=n.n(i);o.a},"5e27":function(t,e,n){},ae9e:function(t,e,n){},baa5:function(t,e,n){"use strict";var i=n("3dd6"),o=n.n(i);o.a}});
//# sourceMappingURL=app.09397c49.js.map