// Compiled by ClojureScript 1.9.229 {}
goog.provide('reagent.debug');
goog.require('cljs.core');
reagent.debug.has_console = typeof console !== 'undefined';
reagent.debug.tracking = false;
if(typeof reagent.debug.warnings !== 'undefined'){
} else {
reagent.debug.warnings = cljs.core.atom.call(null,null);
}
if(typeof reagent.debug.track_console !== 'undefined'){
} else {
reagent.debug.track_console = (function (){var o = ({});
o.warn = ((function (o){
return (function() { 
var G__29921__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__29921 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__29922__i = 0, G__29922__a = new Array(arguments.length -  0);
while (G__29922__i < G__29922__a.length) {G__29922__a[G__29922__i] = arguments[G__29922__i + 0]; ++G__29922__i;}
  args = new cljs.core.IndexedSeq(G__29922__a,0);
} 
return G__29921__delegate.call(this,args);};
G__29921.cljs$lang$maxFixedArity = 0;
G__29921.cljs$lang$applyTo = (function (arglist__29923){
var args = cljs.core.seq(arglist__29923);
return G__29921__delegate(args);
});
G__29921.cljs$core$IFn$_invoke$arity$variadic = G__29921__delegate;
return G__29921;
})()
;})(o))
;

o.error = ((function (o){
return (function() { 
var G__29924__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__29924 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__29925__i = 0, G__29925__a = new Array(arguments.length -  0);
while (G__29925__i < G__29925__a.length) {G__29925__a[G__29925__i] = arguments[G__29925__i + 0]; ++G__29925__i;}
  args = new cljs.core.IndexedSeq(G__29925__a,0);
} 
return G__29924__delegate.call(this,args);};
G__29924.cljs$lang$maxFixedArity = 0;
G__29924.cljs$lang$applyTo = (function (arglist__29926){
var args = cljs.core.seq(arglist__29926);
return G__29924__delegate(args);
});
G__29924.cljs$core$IFn$_invoke$arity$variadic = G__29924__delegate;
return G__29924;
})()
;})(o))
;

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
reagent.debug.tracking = true;

cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

f.call(null);

var warns = cljs.core.deref.call(null,reagent.debug.warnings);
cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

reagent.debug.tracking = false;

return warns;
});

//# sourceMappingURL=debug.js.map