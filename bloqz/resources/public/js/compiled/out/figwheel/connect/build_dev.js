// Compiled by ClojureScript 1.9.229 {}
goog.provide('figwheel.connect.build_dev');
goog.require('cljs.core');
goog.require('bloqz.core');
goog.require('figwheel.client');
goog.require('figwheel.client.utils');
figwheel.client.start.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),(function() { 
var G__29624__delegate = function (x){
if(cljs.core.truth_(bloqz.core.on_js_reload)){
return cljs.core.apply.call(null,bloqz.core.on_js_reload,x);
} else {
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: :on-jsload hook 'bloqz.core/on-js-reload' is missing");
}
};
var G__29624 = function (var_args){
var x = null;
if (arguments.length > 0) {
var G__29625__i = 0, G__29625__a = new Array(arguments.length -  0);
while (G__29625__i < G__29625__a.length) {G__29625__a[G__29625__i] = arguments[G__29625__i + 0]; ++G__29625__i;}
  x = new cljs.core.IndexedSeq(G__29625__a,0);
} 
return G__29624__delegate.call(this,x);};
G__29624.cljs$lang$maxFixedArity = 0;
G__29624.cljs$lang$applyTo = (function (arglist__29626){
var x = cljs.core.seq(arglist__29626);
return G__29624__delegate(x);
});
G__29624.cljs$core$IFn$_invoke$arity$variadic = G__29624__delegate;
return G__29624;
})()
,new cljs.core.Keyword(null,"open-urls","open-urls",-1478664930),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["http://localhost:3449/index.html"], null),new cljs.core.Keyword(null,"build-id","build-id",1642831089),"dev",new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),"ws://localhost:3449/figwheel-ws"], null));

//# sourceMappingURL=build_dev.js.map?rel=1496161940833