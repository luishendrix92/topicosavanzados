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
var G__27778__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__27778 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__27779__i = 0, G__27779__a = new Array(arguments.length -  0);
while (G__27779__i < G__27779__a.length) {G__27779__a[G__27779__i] = arguments[G__27779__i + 0]; ++G__27779__i;}
  args = new cljs.core.IndexedSeq(G__27779__a,0);
} 
return G__27778__delegate.call(this,args);};
G__27778.cljs$lang$maxFixedArity = 0;
G__27778.cljs$lang$applyTo = (function (arglist__27780){
var args = cljs.core.seq(arglist__27780);
return G__27778__delegate(args);
});
G__27778.cljs$core$IFn$_invoke$arity$variadic = G__27778__delegate;
return G__27778;
})()
;})(o))
;

o.error = ((function (o){
return (function() { 
var G__27781__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__27781 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__27782__i = 0, G__27782__a = new Array(arguments.length -  0);
while (G__27782__i < G__27782__a.length) {G__27782__a[G__27782__i] = arguments[G__27782__i + 0]; ++G__27782__i;}
  args = new cljs.core.IndexedSeq(G__27782__a,0);
} 
return G__27781__delegate.call(this,args);};
G__27781.cljs$lang$maxFixedArity = 0;
G__27781.cljs$lang$applyTo = (function (arglist__27783){
var args = cljs.core.seq(arglist__27783);
return G__27781__delegate(args);
});
G__27781.cljs$core$IFn$_invoke$arity$variadic = G__27781__delegate;
return G__27781;
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

//# sourceMappingURL=debug.js.map?rel=1496160777336