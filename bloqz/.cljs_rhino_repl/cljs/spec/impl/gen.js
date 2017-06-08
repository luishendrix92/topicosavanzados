// Compiled by ClojureScript 1.9.229 {}
goog.provide('cljs.spec.impl.gen');
goog.require('cljs.core');
goog.require('cljs.core');

/**
* @constructor
 * @implements {cljs.core.IDeref}
*/
cljs.spec.impl.gen.LazyVar = (function (f,cached){
this.f = f;
this.cached = cached;
this.cljs$lang$protocol_mask$partition0$ = 32768;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.spec.impl.gen.LazyVar.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if(!((self__.cached == null))){
return self__.cached;
} else {
var x = self__.f.call(null);
if((x == null)){
} else {
self__.cached = x;
}

return x;
}
});

cljs.spec.impl.gen.LazyVar.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),cljs.core.with_meta(new cljs.core.Symbol(null,"cached","cached",-1216707864,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null))], null);
});

cljs.spec.impl.gen.LazyVar.cljs$lang$type = true;

cljs.spec.impl.gen.LazyVar.cljs$lang$ctorStr = "cljs.spec.impl.gen/LazyVar";

cljs.spec.impl.gen.LazyVar.cljs$lang$ctorPrWriter = (function (this__27154__auto__,writer__27155__auto__,opt__27156__auto__){
return cljs.core._write.call(null,writer__27155__auto__,"cljs.spec.impl.gen/LazyVar");
});

cljs.spec.impl.gen.__GT_LazyVar = (function cljs$spec$impl$gen$__GT_LazyVar(f,cached){
return (new cljs.spec.impl.gen.LazyVar(f,cached));
});

cljs.spec.impl.gen.quick_check_ref = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check.quick_check !== 'undefined')){
return clojure.test.check.quick_check;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check","quick-check","clojure.test.check/quick-check",-810344251,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check","quick-check","clojure.test.check/quick-check",-810344251,null))),cljs.core.str(" never required")].join('')));
}
}),null));
cljs.spec.impl.gen.quick_check = (function cljs$spec$impl$gen$quick_check(var_args){
var args__27630__auto__ = [];
var len__27623__auto___42349 = arguments.length;
var i__27624__auto___42350 = (0);
while(true){
if((i__27624__auto___42350 < len__27623__auto___42349)){
args__27630__auto__.push((arguments[i__27624__auto___42350]));

var G__42351 = (i__27624__auto___42350 + (1));
i__27624__auto___42350 = G__42351;
continue;
} else {
}
break;
}

var argseq__27631__auto__ = ((((0) < args__27630__auto__.length))?(new cljs.core.IndexedSeq(args__27630__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.quick_check.cljs$core$IFn$_invoke$arity$variadic(argseq__27631__auto__);
});

cljs.spec.impl.gen.quick_check.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.impl.gen.quick_check_ref),args);
});

cljs.spec.impl.gen.quick_check.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.quick_check.cljs$lang$applyTo = (function (seq42348){
return cljs.spec.impl.gen.quick_check.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq42348));
});

cljs.spec.impl.gen.for_all_STAR__ref = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.properties.for_all_STAR_ !== 'undefined')){
return clojure.test.check.properties.for_all_STAR_;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.properties","for-all*","clojure.test.check.properties/for-all*",67088845,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.properties","for-all*","clojure.test.check.properties/for-all*",67088845,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Dynamically loaded clojure.test.check.properties/for-all*.
 */
cljs.spec.impl.gen.for_all_STAR_ = (function cljs$spec$impl$gen$for_all_STAR_(var_args){
var args__27630__auto__ = [];
var len__27623__auto___42353 = arguments.length;
var i__27624__auto___42354 = (0);
while(true){
if((i__27624__auto___42354 < len__27623__auto___42353)){
args__27630__auto__.push((arguments[i__27624__auto___42354]));

var G__42355 = (i__27624__auto___42354 + (1));
i__27624__auto___42354 = G__42355;
continue;
} else {
}
break;
}

var argseq__27631__auto__ = ((((0) < args__27630__auto__.length))?(new cljs.core.IndexedSeq(args__27630__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__27631__auto__);
});

cljs.spec.impl.gen.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.impl.gen.for_all_STAR__ref),args);
});

cljs.spec.impl.gen.for_all_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.for_all_STAR_.cljs$lang$applyTo = (function (seq42352){
return cljs.spec.impl.gen.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq42352));
});

var g_QMARK__42356 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generator_QMARK_ !== 'undefined')){
return clojure.test.check.generators.generator_QMARK_;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null))),cljs.core.str(" never required")].join('')));
}
}),null));
var g_42357 = (new cljs.spec.impl.gen.LazyVar(((function (g_QMARK__42356){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generate !== 'undefined')){
return clojure.test.check.generators.generate;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null))),cljs.core.str(" never required")].join('')));
}
});})(g_QMARK__42356))
,null));
var mkg_42358 = (new cljs.spec.impl.gen.LazyVar(((function (g_QMARK__42356,g_42357){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.__GT_Generator !== 'undefined')){
return clojure.test.check.generators.__GT_Generator;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null))),cljs.core.str(" never required")].join('')));
}
});})(g_QMARK__42356,g_42357))
,null));
cljs.spec.impl.gen.generator_QMARK_ = ((function (g_QMARK__42356,g_42357,mkg_42358){
return (function cljs$spec$impl$gen$generator_QMARK_(x){
return cljs.core.deref.call(null,g_QMARK__42356).call(null,x);
});})(g_QMARK__42356,g_42357,mkg_42358))
;

cljs.spec.impl.gen.generator = ((function (g_QMARK__42356,g_42357,mkg_42358){
return (function cljs$spec$impl$gen$generator(gfn){
return cljs.core.deref.call(null,mkg_42358).call(null,gfn);
});})(g_QMARK__42356,g_42357,mkg_42358))
;

/**
 * Generate a single value using generator.
 */
cljs.spec.impl.gen.generate = ((function (g_QMARK__42356,g_42357,mkg_42358){
return (function cljs$spec$impl$gen$generate(generator){
return cljs.core.deref.call(null,g_42357).call(null,generator);
});})(g_QMARK__42356,g_42357,mkg_42358))
;
cljs.spec.impl.gen.delay_impl = (function cljs$spec$impl$gen$delay_impl(gfnd){
return cljs.spec.impl.gen.generator.call(null,(function (rnd,size){
return new cljs.core.Keyword(null,"gen","gen",142575302).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,gfnd)).call(null,rnd,size);
}));
});
var g__27699__auto___42377 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.hash_map !== 'undefined')){
return clojure.test.check.generators.hash_map;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/hash-map
 */
cljs.spec.impl.gen.hash_map = ((function (g__27699__auto___42377){
return (function cljs$spec$impl$gen$hash_map(var_args){
var args__27630__auto__ = [];
var len__27623__auto___42378 = arguments.length;
var i__27624__auto___42379 = (0);
while(true){
if((i__27624__auto___42379 < len__27623__auto___42378)){
args__27630__auto__.push((arguments[i__27624__auto___42379]));

var G__42380 = (i__27624__auto___42379 + (1));
i__27624__auto___42379 = G__42380;
continue;
} else {
}
break;
}

var argseq__27631__auto__ = ((((0) < args__27630__auto__.length))?(new cljs.core.IndexedSeq(args__27630__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic(argseq__27631__auto__);
});})(g__27699__auto___42377))
;

cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__27699__auto___42377){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__27699__auto___42377),args);
});})(g__27699__auto___42377))
;

cljs.spec.impl.gen.hash_map.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.hash_map.cljs$lang$applyTo = ((function (g__27699__auto___42377){
return (function (seq42359){
return cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq42359));
});})(g__27699__auto___42377))
;


var g__27699__auto___42381 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.list !== 'undefined')){
return clojure.test.check.generators.list;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/list
 */
cljs.spec.impl.gen.list = ((function (g__27699__auto___42381){
return (function cljs$spec$impl$gen$list(var_args){
var args__27630__auto__ = [];
var len__27623__auto___42382 = arguments.length;
var i__27624__auto___42383 = (0);
while(true){
if((i__27624__auto___42383 < len__27623__auto___42382)){
args__27630__auto__.push((arguments[i__27624__auto___42383]));

var G__42384 = (i__27624__auto___42383 + (1));
i__27624__auto___42383 = G__42384;
continue;
} else {
}
break;
}

var argseq__27631__auto__ = ((((0) < args__27630__auto__.length))?(new cljs.core.IndexedSeq(args__27630__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic(argseq__27631__auto__);
});})(g__27699__auto___42381))
;

cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic = ((function (g__27699__auto___42381){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__27699__auto___42381),args);
});})(g__27699__auto___42381))
;

cljs.spec.impl.gen.list.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.list.cljs$lang$applyTo = ((function (g__27699__auto___42381){
return (function (seq42360){
return cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq42360));
});})(g__27699__auto___42381))
;


var g__27699__auto___42385 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.map !== 'undefined')){
return clojure.test.check.generators.map;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/map
 */
cljs.spec.impl.gen.map = ((function (g__27699__auto___42385){
return (function cljs$spec$impl$gen$map(var_args){
var args__27630__auto__ = [];
var len__27623__auto___42386 = arguments.length;
var i__27624__auto___42387 = (0);
while(true){
if((i__27624__auto___42387 < len__27623__auto___42386)){
args__27630__auto__.push((arguments[i__27624__auto___42387]));

var G__42388 = (i__27624__auto___42387 + (1));
i__27624__auto___42387 = G__42388;
continue;
} else {
}
break;
}

var argseq__27631__auto__ = ((((0) < args__27630__auto__.length))?(new cljs.core.IndexedSeq(args__27630__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic(argseq__27631__auto__);
});})(g__27699__auto___42385))
;

cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__27699__auto___42385){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__27699__auto___42385),args);
});})(g__27699__auto___42385))
;

cljs.spec.impl.gen.map.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.map.cljs$lang$applyTo = ((function (g__27699__auto___42385){
return (function (seq42361){
return cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq42361));
});})(g__27699__auto___42385))
;


var g__27699__auto___42389 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.not_empty !== 'undefined')){
return clojure.test.check.generators.not_empty;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/not-empty
 */
cljs.spec.impl.gen.not_empty = ((function (g__27699__auto___42389){
return (function cljs$spec$impl$gen$not_empty(var_args){
var args__27630__auto__ = [];
var len__27623__auto___42390 = arguments.length;
var i__27624__auto___42391 = (0);
while(true){
if((i__27624__auto___42391 < len__27623__auto___42390)){
args__27630__auto__.push((arguments[i__27624__auto___42391]));

var G__42392 = (i__27624__auto___42391 + (1));
i__27624__auto___42391 = G__42392;
continue;
} else {
}
break;
}

var argseq__27631__auto__ = ((((0) < args__27630__auto__.length))?(new cljs.core.IndexedSeq(args__27630__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic(argseq__27631__auto__);
});})(g__27699__auto___42389))
;

cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic = ((function (g__27699__auto___42389){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__27699__auto___42389),args);
});})(g__27699__auto___42389))
;

cljs.spec.impl.gen.not_empty.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.not_empty.cljs$lang$applyTo = ((function (g__27699__auto___42389){
return (function (seq42362){
return cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq42362));
});})(g__27699__auto___42389))
;


var g__27699__auto___42393 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.set !== 'undefined')){
return clojure.test.check.generators.set;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/set
 */
cljs.spec.impl.gen.set = ((function (g__27699__auto___42393){
return (function cljs$spec$impl$gen$set(var_args){
var args__27630__auto__ = [];
var len__27623__auto___42394 = arguments.length;
var i__27624__auto___42395 = (0);
while(true){
if((i__27624__auto___42395 < len__27623__auto___42394)){
args__27630__auto__.push((arguments[i__27624__auto___42395]));

var G__42396 = (i__27624__auto___42395 + (1));
i__27624__auto___42395 = G__42396;
continue;
} else {
}
break;
}

var argseq__27631__auto__ = ((((0) < args__27630__auto__.length))?(new cljs.core.IndexedSeq(args__27630__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic(argseq__27631__auto__);
});})(g__27699__auto___42393))
;

cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic = ((function (g__27699__auto___42393){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__27699__auto___42393),args);
});})(g__27699__auto___42393))
;

cljs.spec.impl.gen.set.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.set.cljs$lang$applyTo = ((function (g__27699__auto___42393){
return (function (seq42363){
return cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq42363));
});})(g__27699__auto___42393))
;


var g__27699__auto___42397 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector !== 'undefined')){
return clojure.test.check.generators.vector;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector
 */
cljs.spec.impl.gen.vector = ((function (g__27699__auto___42397){
return (function cljs$spec$impl$gen$vector(var_args){
var args__27630__auto__ = [];
var len__27623__auto___42398 = arguments.length;
var i__27624__auto___42399 = (0);
while(true){
if((i__27624__auto___42399 < len__27623__auto___42398)){
args__27630__auto__.push((arguments[i__27624__auto___42399]));

var G__42400 = (i__27624__auto___42399 + (1));
i__27624__auto___42399 = G__42400;
continue;
} else {
}
break;
}

var argseq__27631__auto__ = ((((0) < args__27630__auto__.length))?(new cljs.core.IndexedSeq(args__27630__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic(argseq__27631__auto__);
});})(g__27699__auto___42397))
;

cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic = ((function (g__27699__auto___42397){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__27699__auto___42397),args);
});})(g__27699__auto___42397))
;

cljs.spec.impl.gen.vector.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.vector.cljs$lang$applyTo = ((function (g__27699__auto___42397){
return (function (seq42364){
return cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq42364));
});})(g__27699__auto___42397))
;


var g__27699__auto___42401 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector_distinct !== 'undefined')){
return clojure.test.check.generators.vector_distinct;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector-distinct
 */
cljs.spec.impl.gen.vector_distinct = ((function (g__27699__auto___42401){
return (function cljs$spec$impl$gen$vector_distinct(var_args){
var args__27630__auto__ = [];
var len__27623__auto___42402 = arguments.length;
var i__27624__auto___42403 = (0);
while(true){
if((i__27624__auto___42403 < len__27623__auto___42402)){
args__27630__auto__.push((arguments[i__27624__auto___42403]));

var G__42404 = (i__27624__auto___42403 + (1));
i__27624__auto___42403 = G__42404;
continue;
} else {
}
break;
}

var argseq__27631__auto__ = ((((0) < args__27630__auto__.length))?(new cljs.core.IndexedSeq(args__27630__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(argseq__27631__auto__);
});})(g__27699__auto___42401))
;

cljs.spec.impl.gen.vector_distinct.cljs$core$IFn$_invoke$arity$variadic = ((function (g__27699__auto___42401){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__27699__auto___42401),args);
});})(g__27699__auto___42401))
;

cljs.spec.impl.gen.vector_distinct.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.vector_distinct.cljs$lang$applyTo = ((function (g__27699__auto___42401){
return (function (seq42365){
return cljs.spec.impl.gen.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq42365));
});})(g__27699__auto___42401))
;


var g__27699__auto___42405 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.fmap !== 'undefined')){
return clojure.test.check.generators.fmap;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/fmap
 */
cljs.spec.impl.gen.fmap = ((function (g__27699__auto___42405){
return (function cljs$spec$impl$gen$fmap(var_args){
var args__27630__auto__ = [];
var len__27623__auto___42406 = arguments.length;
var i__27624__auto___42407 = (0);
while(true){
if((i__27624__auto___42407 < len__27623__auto___42406)){
args__27630__auto__.push((arguments[i__27624__auto___42407]));

var G__42408 = (i__27624__auto___42407 + (1));
i__27624__auto___42407 = G__42408;
continue;
} else {
}
break;
}

var argseq__27631__auto__ = ((((0) < args__27630__auto__.length))?(new cljs.core.IndexedSeq(args__27630__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic(argseq__27631__auto__);
});})(g__27699__auto___42405))
;

cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic = ((function (g__27699__auto___42405){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__27699__auto___42405),args);
});})(g__27699__auto___42405))
;

cljs.spec.impl.gen.fmap.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.fmap.cljs$lang$applyTo = ((function (g__27699__auto___42405){
return (function (seq42366){
return cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq42366));
});})(g__27699__auto___42405))
;


var g__27699__auto___42409 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.elements !== 'undefined')){
return clojure.test.check.generators.elements;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/elements
 */
cljs.spec.impl.gen.elements = ((function (g__27699__auto___42409){
return (function cljs$spec$impl$gen$elements(var_args){
var args__27630__auto__ = [];
var len__27623__auto___42410 = arguments.length;
var i__27624__auto___42411 = (0);
while(true){
if((i__27624__auto___42411 < len__27623__auto___42410)){
args__27630__auto__.push((arguments[i__27624__auto___42411]));

var G__42412 = (i__27624__auto___42411 + (1));
i__27624__auto___42411 = G__42412;
continue;
} else {
}
break;
}

var argseq__27631__auto__ = ((((0) < args__27630__auto__.length))?(new cljs.core.IndexedSeq(args__27630__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic(argseq__27631__auto__);
});})(g__27699__auto___42409))
;

cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic = ((function (g__27699__auto___42409){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__27699__auto___42409),args);
});})(g__27699__auto___42409))
;

cljs.spec.impl.gen.elements.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.elements.cljs$lang$applyTo = ((function (g__27699__auto___42409){
return (function (seq42367){
return cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq42367));
});})(g__27699__auto___42409))
;


var g__27699__auto___42413 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.bind !== 'undefined')){
return clojure.test.check.generators.bind;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/bind
 */
cljs.spec.impl.gen.bind = ((function (g__27699__auto___42413){
return (function cljs$spec$impl$gen$bind(var_args){
var args__27630__auto__ = [];
var len__27623__auto___42414 = arguments.length;
var i__27624__auto___42415 = (0);
while(true){
if((i__27624__auto___42415 < len__27623__auto___42414)){
args__27630__auto__.push((arguments[i__27624__auto___42415]));

var G__42416 = (i__27624__auto___42415 + (1));
i__27624__auto___42415 = G__42416;
continue;
} else {
}
break;
}

var argseq__27631__auto__ = ((((0) < args__27630__auto__.length))?(new cljs.core.IndexedSeq(args__27630__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic(argseq__27631__auto__);
});})(g__27699__auto___42413))
;

cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic = ((function (g__27699__auto___42413){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__27699__auto___42413),args);
});})(g__27699__auto___42413))
;

cljs.spec.impl.gen.bind.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.bind.cljs$lang$applyTo = ((function (g__27699__auto___42413){
return (function (seq42368){
return cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq42368));
});})(g__27699__auto___42413))
;


var g__27699__auto___42417 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.choose !== 'undefined')){
return clojure.test.check.generators.choose;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/choose
 */
cljs.spec.impl.gen.choose = ((function (g__27699__auto___42417){
return (function cljs$spec$impl$gen$choose(var_args){
var args__27630__auto__ = [];
var len__27623__auto___42418 = arguments.length;
var i__27624__auto___42419 = (0);
while(true){
if((i__27624__auto___42419 < len__27623__auto___42418)){
args__27630__auto__.push((arguments[i__27624__auto___42419]));

var G__42420 = (i__27624__auto___42419 + (1));
i__27624__auto___42419 = G__42420;
continue;
} else {
}
break;
}

var argseq__27631__auto__ = ((((0) < args__27630__auto__.length))?(new cljs.core.IndexedSeq(args__27630__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic(argseq__27631__auto__);
});})(g__27699__auto___42417))
;

cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic = ((function (g__27699__auto___42417){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__27699__auto___42417),args);
});})(g__27699__auto___42417))
;

cljs.spec.impl.gen.choose.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.choose.cljs$lang$applyTo = ((function (g__27699__auto___42417){
return (function (seq42369){
return cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq42369));
});})(g__27699__auto___42417))
;


var g__27699__auto___42421 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.one_of !== 'undefined')){
return clojure.test.check.generators.one_of;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/one-of
 */
cljs.spec.impl.gen.one_of = ((function (g__27699__auto___42421){
return (function cljs$spec$impl$gen$one_of(var_args){
var args__27630__auto__ = [];
var len__27623__auto___42422 = arguments.length;
var i__27624__auto___42423 = (0);
while(true){
if((i__27624__auto___42423 < len__27623__auto___42422)){
args__27630__auto__.push((arguments[i__27624__auto___42423]));

var G__42424 = (i__27624__auto___42423 + (1));
i__27624__auto___42423 = G__42424;
continue;
} else {
}
break;
}

var argseq__27631__auto__ = ((((0) < args__27630__auto__.length))?(new cljs.core.IndexedSeq(args__27630__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic(argseq__27631__auto__);
});})(g__27699__auto___42421))
;

cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic = ((function (g__27699__auto___42421){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__27699__auto___42421),args);
});})(g__27699__auto___42421))
;

cljs.spec.impl.gen.one_of.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.one_of.cljs$lang$applyTo = ((function (g__27699__auto___42421){
return (function (seq42370){
return cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq42370));
});})(g__27699__auto___42421))
;


var g__27699__auto___42425 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.such_that !== 'undefined')){
return clojure.test.check.generators.such_that;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/such-that
 */
cljs.spec.impl.gen.such_that = ((function (g__27699__auto___42425){
return (function cljs$spec$impl$gen$such_that(var_args){
var args__27630__auto__ = [];
var len__27623__auto___42426 = arguments.length;
var i__27624__auto___42427 = (0);
while(true){
if((i__27624__auto___42427 < len__27623__auto___42426)){
args__27630__auto__.push((arguments[i__27624__auto___42427]));

var G__42428 = (i__27624__auto___42427 + (1));
i__27624__auto___42427 = G__42428;
continue;
} else {
}
break;
}

var argseq__27631__auto__ = ((((0) < args__27630__auto__.length))?(new cljs.core.IndexedSeq(args__27630__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic(argseq__27631__auto__);
});})(g__27699__auto___42425))
;

cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic = ((function (g__27699__auto___42425){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__27699__auto___42425),args);
});})(g__27699__auto___42425))
;

cljs.spec.impl.gen.such_that.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.such_that.cljs$lang$applyTo = ((function (g__27699__auto___42425){
return (function (seq42371){
return cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq42371));
});})(g__27699__auto___42425))
;


var g__27699__auto___42429 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.tuple !== 'undefined')){
return clojure.test.check.generators.tuple;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/tuple
 */
cljs.spec.impl.gen.tuple = ((function (g__27699__auto___42429){
return (function cljs$spec$impl$gen$tuple(var_args){
var args__27630__auto__ = [];
var len__27623__auto___42430 = arguments.length;
var i__27624__auto___42431 = (0);
while(true){
if((i__27624__auto___42431 < len__27623__auto___42430)){
args__27630__auto__.push((arguments[i__27624__auto___42431]));

var G__42432 = (i__27624__auto___42431 + (1));
i__27624__auto___42431 = G__42432;
continue;
} else {
}
break;
}

var argseq__27631__auto__ = ((((0) < args__27630__auto__.length))?(new cljs.core.IndexedSeq(args__27630__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic(argseq__27631__auto__);
});})(g__27699__auto___42429))
;

cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic = ((function (g__27699__auto___42429){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__27699__auto___42429),args);
});})(g__27699__auto___42429))
;

cljs.spec.impl.gen.tuple.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.tuple.cljs$lang$applyTo = ((function (g__27699__auto___42429){
return (function (seq42372){
return cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq42372));
});})(g__27699__auto___42429))
;


var g__27699__auto___42433 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.sample !== 'undefined')){
return clojure.test.check.generators.sample;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/sample
 */
cljs.spec.impl.gen.sample = ((function (g__27699__auto___42433){
return (function cljs$spec$impl$gen$sample(var_args){
var args__27630__auto__ = [];
var len__27623__auto___42434 = arguments.length;
var i__27624__auto___42435 = (0);
while(true){
if((i__27624__auto___42435 < len__27623__auto___42434)){
args__27630__auto__.push((arguments[i__27624__auto___42435]));

var G__42436 = (i__27624__auto___42435 + (1));
i__27624__auto___42435 = G__42436;
continue;
} else {
}
break;
}

var argseq__27631__auto__ = ((((0) < args__27630__auto__.length))?(new cljs.core.IndexedSeq(args__27630__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic(argseq__27631__auto__);
});})(g__27699__auto___42433))
;

cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic = ((function (g__27699__auto___42433){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__27699__auto___42433),args);
});})(g__27699__auto___42433))
;

cljs.spec.impl.gen.sample.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.sample.cljs$lang$applyTo = ((function (g__27699__auto___42433){
return (function (seq42373){
return cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq42373));
});})(g__27699__auto___42433))
;


var g__27699__auto___42437 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.return$ !== 'undefined')){
return clojure.test.check.generators.return$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/return
 */
cljs.spec.impl.gen.return$ = ((function (g__27699__auto___42437){
return (function cljs$spec$impl$gen$return(var_args){
var args__27630__auto__ = [];
var len__27623__auto___42438 = arguments.length;
var i__27624__auto___42439 = (0);
while(true){
if((i__27624__auto___42439 < len__27623__auto___42438)){
args__27630__auto__.push((arguments[i__27624__auto___42439]));

var G__42440 = (i__27624__auto___42439 + (1));
i__27624__auto___42439 = G__42440;
continue;
} else {
}
break;
}

var argseq__27631__auto__ = ((((0) < args__27630__auto__.length))?(new cljs.core.IndexedSeq(args__27630__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic(argseq__27631__auto__);
});})(g__27699__auto___42437))
;

cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__27699__auto___42437){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__27699__auto___42437),args);
});})(g__27699__auto___42437))
;

cljs.spec.impl.gen.return$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.return$.cljs$lang$applyTo = ((function (g__27699__auto___42437){
return (function (seq42374){
return cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq42374));
});})(g__27699__auto___42437))
;


var g__27699__auto___42441 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer_STAR_ !== 'undefined')){
return clojure.test.check.generators.large_integer_STAR_;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/large-integer*
 */
cljs.spec.impl.gen.large_integer_STAR_ = ((function (g__27699__auto___42441){
return (function cljs$spec$impl$gen$large_integer_STAR_(var_args){
var args__27630__auto__ = [];
var len__27623__auto___42442 = arguments.length;
var i__27624__auto___42443 = (0);
while(true){
if((i__27624__auto___42443 < len__27623__auto___42442)){
args__27630__auto__.push((arguments[i__27624__auto___42443]));

var G__42444 = (i__27624__auto___42443 + (1));
i__27624__auto___42443 = G__42444;
continue;
} else {
}
break;
}

var argseq__27631__auto__ = ((((0) < args__27630__auto__.length))?(new cljs.core.IndexedSeq(args__27630__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__27631__auto__);
});})(g__27699__auto___42441))
;

cljs.spec.impl.gen.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__27699__auto___42441){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__27699__auto___42441),args);
});})(g__27699__auto___42441))
;

cljs.spec.impl.gen.large_integer_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.large_integer_STAR_.cljs$lang$applyTo = ((function (g__27699__auto___42441){
return (function (seq42375){
return cljs.spec.impl.gen.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq42375));
});})(g__27699__auto___42441))
;


var g__27699__auto___42445 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double_STAR_ !== 'undefined')){
return clojure.test.check.generators.double_STAR_;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","double*","clojure.test.check.generators/double*",841542265,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double*","clojure.test.check.generators/double*",841542265,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/double*
 */
cljs.spec.impl.gen.double_STAR_ = ((function (g__27699__auto___42445){
return (function cljs$spec$impl$gen$double_STAR_(var_args){
var args__27630__auto__ = [];
var len__27623__auto___42446 = arguments.length;
var i__27624__auto___42447 = (0);
while(true){
if((i__27624__auto___42447 < len__27623__auto___42446)){
args__27630__auto__.push((arguments[i__27624__auto___42447]));

var G__42448 = (i__27624__auto___42447 + (1));
i__27624__auto___42447 = G__42448;
continue;
} else {
}
break;
}

var argseq__27631__auto__ = ((((0) < args__27630__auto__.length))?(new cljs.core.IndexedSeq(args__27630__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.double_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__27631__auto__);
});})(g__27699__auto___42445))
;

cljs.spec.impl.gen.double_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__27699__auto___42445){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__27699__auto___42445),args);
});})(g__27699__auto___42445))
;

cljs.spec.impl.gen.double_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.double_STAR_.cljs$lang$applyTo = ((function (g__27699__auto___42445){
return (function (seq42376){
return cljs.spec.impl.gen.double_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq42376));
});})(g__27699__auto___42445))
;

var g__27712__auto___42470 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any !== 'undefined')){
return clojure.test.check.generators.any;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any
 */
cljs.spec.impl.gen.any = ((function (g__27712__auto___42470){
return (function cljs$spec$impl$gen$any(var_args){
var args__27630__auto__ = [];
var len__27623__auto___42471 = arguments.length;
var i__27624__auto___42472 = (0);
while(true){
if((i__27624__auto___42472 < len__27623__auto___42471)){
args__27630__auto__.push((arguments[i__27624__auto___42472]));

var G__42473 = (i__27624__auto___42472 + (1));
i__27624__auto___42472 = G__42473;
continue;
} else {
}
break;
}

var argseq__27631__auto__ = ((((0) < args__27630__auto__.length))?(new cljs.core.IndexedSeq(args__27630__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic(argseq__27631__auto__);
});})(g__27712__auto___42470))
;

cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic = ((function (g__27712__auto___42470){
return (function (args){
return cljs.core.deref.call(null,g__27712__auto___42470);
});})(g__27712__auto___42470))
;

cljs.spec.impl.gen.any.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.any.cljs$lang$applyTo = ((function (g__27712__auto___42470){
return (function (seq42449){
return cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq42449));
});})(g__27712__auto___42470))
;


var g__27712__auto___42474 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any_printable !== 'undefined')){
return clojure.test.check.generators.any_printable;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any-printable
 */
cljs.spec.impl.gen.any_printable = ((function (g__27712__auto___42474){
return (function cljs$spec$impl$gen$any_printable(var_args){
var args__27630__auto__ = [];
var len__27623__auto___42475 = arguments.length;
var i__27624__auto___42476 = (0);
while(true){
if((i__27624__auto___42476 < len__27623__auto___42475)){
args__27630__auto__.push((arguments[i__27624__auto___42476]));

var G__42477 = (i__27624__auto___42476 + (1));
i__27624__auto___42476 = G__42477;
continue;
} else {
}
break;
}

var argseq__27631__auto__ = ((((0) < args__27630__auto__.length))?(new cljs.core.IndexedSeq(args__27630__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__27631__auto__);
});})(g__27712__auto___42474))
;

cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__27712__auto___42474){
return (function (args){
return cljs.core.deref.call(null,g__27712__auto___42474);
});})(g__27712__auto___42474))
;

cljs.spec.impl.gen.any_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.any_printable.cljs$lang$applyTo = ((function (g__27712__auto___42474){
return (function (seq42450){
return cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq42450));
});})(g__27712__auto___42474))
;


var g__27712__auto___42478 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.boolean$ !== 'undefined')){
return clojure.test.check.generators.boolean$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/boolean
 */
cljs.spec.impl.gen.boolean$ = ((function (g__27712__auto___42478){
return (function cljs$spec$impl$gen$boolean(var_args){
var args__27630__auto__ = [];
var len__27623__auto___42479 = arguments.length;
var i__27624__auto___42480 = (0);
while(true){
if((i__27624__auto___42480 < len__27623__auto___42479)){
args__27630__auto__.push((arguments[i__27624__auto___42480]));

var G__42481 = (i__27624__auto___42480 + (1));
i__27624__auto___42480 = G__42481;
continue;
} else {
}
break;
}

var argseq__27631__auto__ = ((((0) < args__27630__auto__.length))?(new cljs.core.IndexedSeq(args__27630__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic(argseq__27631__auto__);
});})(g__27712__auto___42478))
;

cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__27712__auto___42478){
return (function (args){
return cljs.core.deref.call(null,g__27712__auto___42478);
});})(g__27712__auto___42478))
;

cljs.spec.impl.gen.boolean$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.boolean$.cljs$lang$applyTo = ((function (g__27712__auto___42478){
return (function (seq42451){
return cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq42451));
});})(g__27712__auto___42478))
;


var g__27712__auto___42482 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char$ !== 'undefined')){
return clojure.test.check.generators.char$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char
 */
cljs.spec.impl.gen.char$ = ((function (g__27712__auto___42482){
return (function cljs$spec$impl$gen$char(var_args){
var args__27630__auto__ = [];
var len__27623__auto___42483 = arguments.length;
var i__27624__auto___42484 = (0);
while(true){
if((i__27624__auto___42484 < len__27623__auto___42483)){
args__27630__auto__.push((arguments[i__27624__auto___42484]));

var G__42485 = (i__27624__auto___42484 + (1));
i__27624__auto___42484 = G__42485;
continue;
} else {
}
break;
}

var argseq__27631__auto__ = ((((0) < args__27630__auto__.length))?(new cljs.core.IndexedSeq(args__27630__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic(argseq__27631__auto__);
});})(g__27712__auto___42482))
;

cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__27712__auto___42482){
return (function (args){
return cljs.core.deref.call(null,g__27712__auto___42482);
});})(g__27712__auto___42482))
;

cljs.spec.impl.gen.char$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char$.cljs$lang$applyTo = ((function (g__27712__auto___42482){
return (function (seq42452){
return cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq42452));
});})(g__27712__auto___42482))
;


var g__27712__auto___42486 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alpha !== 'undefined')){
return clojure.test.check.generators.char_alpha;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alpha
 */
cljs.spec.impl.gen.char_alpha = ((function (g__27712__auto___42486){
return (function cljs$spec$impl$gen$char_alpha(var_args){
var args__27630__auto__ = [];
var len__27623__auto___42487 = arguments.length;
var i__27624__auto___42488 = (0);
while(true){
if((i__27624__auto___42488 < len__27623__auto___42487)){
args__27630__auto__.push((arguments[i__27624__auto___42488]));

var G__42489 = (i__27624__auto___42488 + (1));
i__27624__auto___42488 = G__42489;
continue;
} else {
}
break;
}

var argseq__27631__auto__ = ((((0) < args__27630__auto__.length))?(new cljs.core.IndexedSeq(args__27630__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic(argseq__27631__auto__);
});})(g__27712__auto___42486))
;

cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic = ((function (g__27712__auto___42486){
return (function (args){
return cljs.core.deref.call(null,g__27712__auto___42486);
});})(g__27712__auto___42486))
;

cljs.spec.impl.gen.char_alpha.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_alpha.cljs$lang$applyTo = ((function (g__27712__auto___42486){
return (function (seq42453){
return cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq42453));
});})(g__27712__auto___42486))
;


var g__27712__auto___42490 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alphanumeric !== 'undefined')){
return clojure.test.check.generators.char_alphanumeric;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alphanumeric
 */
cljs.spec.impl.gen.char_alphanumeric = ((function (g__27712__auto___42490){
return (function cljs$spec$impl$gen$char_alphanumeric(var_args){
var args__27630__auto__ = [];
var len__27623__auto___42491 = arguments.length;
var i__27624__auto___42492 = (0);
while(true){
if((i__27624__auto___42492 < len__27623__auto___42491)){
args__27630__auto__.push((arguments[i__27624__auto___42492]));

var G__42493 = (i__27624__auto___42492 + (1));
i__27624__auto___42492 = G__42493;
continue;
} else {
}
break;
}

var argseq__27631__auto__ = ((((0) < args__27630__auto__.length))?(new cljs.core.IndexedSeq(args__27630__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__27631__auto__);
});})(g__27712__auto___42490))
;

cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__27712__auto___42490){
return (function (args){
return cljs.core.deref.call(null,g__27712__auto___42490);
});})(g__27712__auto___42490))
;

cljs.spec.impl.gen.char_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_alphanumeric.cljs$lang$applyTo = ((function (g__27712__auto___42490){
return (function (seq42454){
return cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq42454));
});})(g__27712__auto___42490))
;


var g__27712__auto___42494 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_ascii !== 'undefined')){
return clojure.test.check.generators.char_ascii;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-ascii
 */
cljs.spec.impl.gen.char_ascii = ((function (g__27712__auto___42494){
return (function cljs$spec$impl$gen$char_ascii(var_args){
var args__27630__auto__ = [];
var len__27623__auto___42495 = arguments.length;
var i__27624__auto___42496 = (0);
while(true){
if((i__27624__auto___42496 < len__27623__auto___42495)){
args__27630__auto__.push((arguments[i__27624__auto___42496]));

var G__42497 = (i__27624__auto___42496 + (1));
i__27624__auto___42496 = G__42497;
continue;
} else {
}
break;
}

var argseq__27631__auto__ = ((((0) < args__27630__auto__.length))?(new cljs.core.IndexedSeq(args__27630__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__27631__auto__);
});})(g__27712__auto___42494))
;

cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__27712__auto___42494){
return (function (args){
return cljs.core.deref.call(null,g__27712__auto___42494);
});})(g__27712__auto___42494))
;

cljs.spec.impl.gen.char_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_ascii.cljs$lang$applyTo = ((function (g__27712__auto___42494){
return (function (seq42455){
return cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq42455));
});})(g__27712__auto___42494))
;


var g__27712__auto___42498 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double$ !== 'undefined')){
return clojure.test.check.generators.double$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/double
 */
cljs.spec.impl.gen.double$ = ((function (g__27712__auto___42498){
return (function cljs$spec$impl$gen$double(var_args){
var args__27630__auto__ = [];
var len__27623__auto___42499 = arguments.length;
var i__27624__auto___42500 = (0);
while(true){
if((i__27624__auto___42500 < len__27623__auto___42499)){
args__27630__auto__.push((arguments[i__27624__auto___42500]));

var G__42501 = (i__27624__auto___42500 + (1));
i__27624__auto___42500 = G__42501;
continue;
} else {
}
break;
}

var argseq__27631__auto__ = ((((0) < args__27630__auto__.length))?(new cljs.core.IndexedSeq(args__27630__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic(argseq__27631__auto__);
});})(g__27712__auto___42498))
;

cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__27712__auto___42498){
return (function (args){
return cljs.core.deref.call(null,g__27712__auto___42498);
});})(g__27712__auto___42498))
;

cljs.spec.impl.gen.double$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.double$.cljs$lang$applyTo = ((function (g__27712__auto___42498){
return (function (seq42456){
return cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq42456));
});})(g__27712__auto___42498))
;


var g__27712__auto___42502 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.int$ !== 'undefined')){
return clojure.test.check.generators.int$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/int
 */
cljs.spec.impl.gen.int$ = ((function (g__27712__auto___42502){
return (function cljs$spec$impl$gen$int(var_args){
var args__27630__auto__ = [];
var len__27623__auto___42503 = arguments.length;
var i__27624__auto___42504 = (0);
while(true){
if((i__27624__auto___42504 < len__27623__auto___42503)){
args__27630__auto__.push((arguments[i__27624__auto___42504]));

var G__42505 = (i__27624__auto___42504 + (1));
i__27624__auto___42504 = G__42505;
continue;
} else {
}
break;
}

var argseq__27631__auto__ = ((((0) < args__27630__auto__.length))?(new cljs.core.IndexedSeq(args__27630__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic(argseq__27631__auto__);
});})(g__27712__auto___42502))
;

cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__27712__auto___42502){
return (function (args){
return cljs.core.deref.call(null,g__27712__auto___42502);
});})(g__27712__auto___42502))
;

cljs.spec.impl.gen.int$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.int$.cljs$lang$applyTo = ((function (g__27712__auto___42502){
return (function (seq42457){
return cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq42457));
});})(g__27712__auto___42502))
;


var g__27712__auto___42506 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword !== 'undefined')){
return clojure.test.check.generators.keyword;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword
 */
cljs.spec.impl.gen.keyword = ((function (g__27712__auto___42506){
return (function cljs$spec$impl$gen$keyword(var_args){
var args__27630__auto__ = [];
var len__27623__auto___42507 = arguments.length;
var i__27624__auto___42508 = (0);
while(true){
if((i__27624__auto___42508 < len__27623__auto___42507)){
args__27630__auto__.push((arguments[i__27624__auto___42508]));

var G__42509 = (i__27624__auto___42508 + (1));
i__27624__auto___42508 = G__42509;
continue;
} else {
}
break;
}

var argseq__27631__auto__ = ((((0) < args__27630__auto__.length))?(new cljs.core.IndexedSeq(args__27630__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic(argseq__27631__auto__);
});})(g__27712__auto___42506))
;

cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic = ((function (g__27712__auto___42506){
return (function (args){
return cljs.core.deref.call(null,g__27712__auto___42506);
});})(g__27712__auto___42506))
;

cljs.spec.impl.gen.keyword.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.keyword.cljs$lang$applyTo = ((function (g__27712__auto___42506){
return (function (seq42458){
return cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq42458));
});})(g__27712__auto___42506))
;


var g__27712__auto___42510 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword_ns !== 'undefined')){
return clojure.test.check.generators.keyword_ns;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword-ns
 */
cljs.spec.impl.gen.keyword_ns = ((function (g__27712__auto___42510){
return (function cljs$spec$impl$gen$keyword_ns(var_args){
var args__27630__auto__ = [];
var len__27623__auto___42511 = arguments.length;
var i__27624__auto___42512 = (0);
while(true){
if((i__27624__auto___42512 < len__27623__auto___42511)){
args__27630__auto__.push((arguments[i__27624__auto___42512]));

var G__42513 = (i__27624__auto___42512 + (1));
i__27624__auto___42512 = G__42513;
continue;
} else {
}
break;
}

var argseq__27631__auto__ = ((((0) < args__27630__auto__.length))?(new cljs.core.IndexedSeq(args__27630__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__27631__auto__);
});})(g__27712__auto___42510))
;

cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__27712__auto___42510){
return (function (args){
return cljs.core.deref.call(null,g__27712__auto___42510);
});})(g__27712__auto___42510))
;

cljs.spec.impl.gen.keyword_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.keyword_ns.cljs$lang$applyTo = ((function (g__27712__auto___42510){
return (function (seq42459){
return cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq42459));
});})(g__27712__auto___42510))
;


var g__27712__auto___42514 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer !== 'undefined')){
return clojure.test.check.generators.large_integer;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/large-integer
 */
cljs.spec.impl.gen.large_integer = ((function (g__27712__auto___42514){
return (function cljs$spec$impl$gen$large_integer(var_args){
var args__27630__auto__ = [];
var len__27623__auto___42515 = arguments.length;
var i__27624__auto___42516 = (0);
while(true){
if((i__27624__auto___42516 < len__27623__auto___42515)){
args__27630__auto__.push((arguments[i__27624__auto___42516]));

var G__42517 = (i__27624__auto___42516 + (1));
i__27624__auto___42516 = G__42517;
continue;
} else {
}
break;
}

var argseq__27631__auto__ = ((((0) < args__27630__auto__.length))?(new cljs.core.IndexedSeq(args__27630__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic(argseq__27631__auto__);
});})(g__27712__auto___42514))
;

cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic = ((function (g__27712__auto___42514){
return (function (args){
return cljs.core.deref.call(null,g__27712__auto___42514);
});})(g__27712__auto___42514))
;

cljs.spec.impl.gen.large_integer.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.large_integer.cljs$lang$applyTo = ((function (g__27712__auto___42514){
return (function (seq42460){
return cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq42460));
});})(g__27712__auto___42514))
;


var g__27712__auto___42518 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.ratio !== 'undefined')){
return clojure.test.check.generators.ratio;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/ratio
 */
cljs.spec.impl.gen.ratio = ((function (g__27712__auto___42518){
return (function cljs$spec$impl$gen$ratio(var_args){
var args__27630__auto__ = [];
var len__27623__auto___42519 = arguments.length;
var i__27624__auto___42520 = (0);
while(true){
if((i__27624__auto___42520 < len__27623__auto___42519)){
args__27630__auto__.push((arguments[i__27624__auto___42520]));

var G__42521 = (i__27624__auto___42520 + (1));
i__27624__auto___42520 = G__42521;
continue;
} else {
}
break;
}

var argseq__27631__auto__ = ((((0) < args__27630__auto__.length))?(new cljs.core.IndexedSeq(args__27630__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic(argseq__27631__auto__);
});})(g__27712__auto___42518))
;

cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic = ((function (g__27712__auto___42518){
return (function (args){
return cljs.core.deref.call(null,g__27712__auto___42518);
});})(g__27712__auto___42518))
;

cljs.spec.impl.gen.ratio.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.ratio.cljs$lang$applyTo = ((function (g__27712__auto___42518){
return (function (seq42461){
return cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq42461));
});})(g__27712__auto___42518))
;


var g__27712__auto___42522 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type !== 'undefined')){
return clojure.test.check.generators.simple_type;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type
 */
cljs.spec.impl.gen.simple_type = ((function (g__27712__auto___42522){
return (function cljs$spec$impl$gen$simple_type(var_args){
var args__27630__auto__ = [];
var len__27623__auto___42523 = arguments.length;
var i__27624__auto___42524 = (0);
while(true){
if((i__27624__auto___42524 < len__27623__auto___42523)){
args__27630__auto__.push((arguments[i__27624__auto___42524]));

var G__42525 = (i__27624__auto___42524 + (1));
i__27624__auto___42524 = G__42525;
continue;
} else {
}
break;
}

var argseq__27631__auto__ = ((((0) < args__27630__auto__.length))?(new cljs.core.IndexedSeq(args__27630__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic(argseq__27631__auto__);
});})(g__27712__auto___42522))
;

cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic = ((function (g__27712__auto___42522){
return (function (args){
return cljs.core.deref.call(null,g__27712__auto___42522);
});})(g__27712__auto___42522))
;

cljs.spec.impl.gen.simple_type.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.simple_type.cljs$lang$applyTo = ((function (g__27712__auto___42522){
return (function (seq42462){
return cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq42462));
});})(g__27712__auto___42522))
;


var g__27712__auto___42526 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type_printable !== 'undefined')){
return clojure.test.check.generators.simple_type_printable;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type-printable
 */
cljs.spec.impl.gen.simple_type_printable = ((function (g__27712__auto___42526){
return (function cljs$spec$impl$gen$simple_type_printable(var_args){
var args__27630__auto__ = [];
var len__27623__auto___42527 = arguments.length;
var i__27624__auto___42528 = (0);
while(true){
if((i__27624__auto___42528 < len__27623__auto___42527)){
args__27630__auto__.push((arguments[i__27624__auto___42528]));

var G__42529 = (i__27624__auto___42528 + (1));
i__27624__auto___42528 = G__42529;
continue;
} else {
}
break;
}

var argseq__27631__auto__ = ((((0) < args__27630__auto__.length))?(new cljs.core.IndexedSeq(args__27630__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__27631__auto__);
});})(g__27712__auto___42526))
;

cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__27712__auto___42526){
return (function (args){
return cljs.core.deref.call(null,g__27712__auto___42526);
});})(g__27712__auto___42526))
;

cljs.spec.impl.gen.simple_type_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.simple_type_printable.cljs$lang$applyTo = ((function (g__27712__auto___42526){
return (function (seq42463){
return cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq42463));
});})(g__27712__auto___42526))
;


var g__27712__auto___42530 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string !== 'undefined')){
return clojure.test.check.generators.string;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string
 */
cljs.spec.impl.gen.string = ((function (g__27712__auto___42530){
return (function cljs$spec$impl$gen$string(var_args){
var args__27630__auto__ = [];
var len__27623__auto___42531 = arguments.length;
var i__27624__auto___42532 = (0);
while(true){
if((i__27624__auto___42532 < len__27623__auto___42531)){
args__27630__auto__.push((arguments[i__27624__auto___42532]));

var G__42533 = (i__27624__auto___42532 + (1));
i__27624__auto___42532 = G__42533;
continue;
} else {
}
break;
}

var argseq__27631__auto__ = ((((0) < args__27630__auto__.length))?(new cljs.core.IndexedSeq(args__27630__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic(argseq__27631__auto__);
});})(g__27712__auto___42530))
;

cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic = ((function (g__27712__auto___42530){
return (function (args){
return cljs.core.deref.call(null,g__27712__auto___42530);
});})(g__27712__auto___42530))
;

cljs.spec.impl.gen.string.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string.cljs$lang$applyTo = ((function (g__27712__auto___42530){
return (function (seq42464){
return cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq42464));
});})(g__27712__auto___42530))
;


var g__27712__auto___42534 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_ascii !== 'undefined')){
return clojure.test.check.generators.string_ascii;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-ascii
 */
cljs.spec.impl.gen.string_ascii = ((function (g__27712__auto___42534){
return (function cljs$spec$impl$gen$string_ascii(var_args){
var args__27630__auto__ = [];
var len__27623__auto___42535 = arguments.length;
var i__27624__auto___42536 = (0);
while(true){
if((i__27624__auto___42536 < len__27623__auto___42535)){
args__27630__auto__.push((arguments[i__27624__auto___42536]));

var G__42537 = (i__27624__auto___42536 + (1));
i__27624__auto___42536 = G__42537;
continue;
} else {
}
break;
}

var argseq__27631__auto__ = ((((0) < args__27630__auto__.length))?(new cljs.core.IndexedSeq(args__27630__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__27631__auto__);
});})(g__27712__auto___42534))
;

cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__27712__auto___42534){
return (function (args){
return cljs.core.deref.call(null,g__27712__auto___42534);
});})(g__27712__auto___42534))
;

cljs.spec.impl.gen.string_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string_ascii.cljs$lang$applyTo = ((function (g__27712__auto___42534){
return (function (seq42465){
return cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq42465));
});})(g__27712__auto___42534))
;


var g__27712__auto___42538 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_alphanumeric !== 'undefined')){
return clojure.test.check.generators.string_alphanumeric;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-alphanumeric
 */
cljs.spec.impl.gen.string_alphanumeric = ((function (g__27712__auto___42538){
return (function cljs$spec$impl$gen$string_alphanumeric(var_args){
var args__27630__auto__ = [];
var len__27623__auto___42539 = arguments.length;
var i__27624__auto___42540 = (0);
while(true){
if((i__27624__auto___42540 < len__27623__auto___42539)){
args__27630__auto__.push((arguments[i__27624__auto___42540]));

var G__42541 = (i__27624__auto___42540 + (1));
i__27624__auto___42540 = G__42541;
continue;
} else {
}
break;
}

var argseq__27631__auto__ = ((((0) < args__27630__auto__.length))?(new cljs.core.IndexedSeq(args__27630__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__27631__auto__);
});})(g__27712__auto___42538))
;

cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__27712__auto___42538){
return (function (args){
return cljs.core.deref.call(null,g__27712__auto___42538);
});})(g__27712__auto___42538))
;

cljs.spec.impl.gen.string_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string_alphanumeric.cljs$lang$applyTo = ((function (g__27712__auto___42538){
return (function (seq42466){
return cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq42466));
});})(g__27712__auto___42538))
;


var g__27712__auto___42542 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol !== 'undefined')){
return clojure.test.check.generators.symbol;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol
 */
cljs.spec.impl.gen.symbol = ((function (g__27712__auto___42542){
return (function cljs$spec$impl$gen$symbol(var_args){
var args__27630__auto__ = [];
var len__27623__auto___42543 = arguments.length;
var i__27624__auto___42544 = (0);
while(true){
if((i__27624__auto___42544 < len__27623__auto___42543)){
args__27630__auto__.push((arguments[i__27624__auto___42544]));

var G__42545 = (i__27624__auto___42544 + (1));
i__27624__auto___42544 = G__42545;
continue;
} else {
}
break;
}

var argseq__27631__auto__ = ((((0) < args__27630__auto__.length))?(new cljs.core.IndexedSeq(args__27630__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic(argseq__27631__auto__);
});})(g__27712__auto___42542))
;

cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic = ((function (g__27712__auto___42542){
return (function (args){
return cljs.core.deref.call(null,g__27712__auto___42542);
});})(g__27712__auto___42542))
;

cljs.spec.impl.gen.symbol.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.symbol.cljs$lang$applyTo = ((function (g__27712__auto___42542){
return (function (seq42467){
return cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq42467));
});})(g__27712__auto___42542))
;


var g__27712__auto___42546 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol_ns !== 'undefined')){
return clojure.test.check.generators.symbol_ns;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol-ns
 */
cljs.spec.impl.gen.symbol_ns = ((function (g__27712__auto___42546){
return (function cljs$spec$impl$gen$symbol_ns(var_args){
var args__27630__auto__ = [];
var len__27623__auto___42547 = arguments.length;
var i__27624__auto___42548 = (0);
while(true){
if((i__27624__auto___42548 < len__27623__auto___42547)){
args__27630__auto__.push((arguments[i__27624__auto___42548]));

var G__42549 = (i__27624__auto___42548 + (1));
i__27624__auto___42548 = G__42549;
continue;
} else {
}
break;
}

var argseq__27631__auto__ = ((((0) < args__27630__auto__.length))?(new cljs.core.IndexedSeq(args__27630__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__27631__auto__);
});})(g__27712__auto___42546))
;

cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__27712__auto___42546){
return (function (args){
return cljs.core.deref.call(null,g__27712__auto___42546);
});})(g__27712__auto___42546))
;

cljs.spec.impl.gen.symbol_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.symbol_ns.cljs$lang$applyTo = ((function (g__27712__auto___42546){
return (function (seq42468){
return cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq42468));
});})(g__27712__auto___42546))
;


var g__27712__auto___42550 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.uuid !== 'undefined')){
return clojure.test.check.generators.uuid;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/uuid
 */
cljs.spec.impl.gen.uuid = ((function (g__27712__auto___42550){
return (function cljs$spec$impl$gen$uuid(var_args){
var args__27630__auto__ = [];
var len__27623__auto___42551 = arguments.length;
var i__27624__auto___42552 = (0);
while(true){
if((i__27624__auto___42552 < len__27623__auto___42551)){
args__27630__auto__.push((arguments[i__27624__auto___42552]));

var G__42553 = (i__27624__auto___42552 + (1));
i__27624__auto___42552 = G__42553;
continue;
} else {
}
break;
}

var argseq__27631__auto__ = ((((0) < args__27630__auto__.length))?(new cljs.core.IndexedSeq(args__27630__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic(argseq__27631__auto__);
});})(g__27712__auto___42550))
;

cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic = ((function (g__27712__auto___42550){
return (function (args){
return cljs.core.deref.call(null,g__27712__auto___42550);
});})(g__27712__auto___42550))
;

cljs.spec.impl.gen.uuid.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.uuid.cljs$lang$applyTo = ((function (g__27712__auto___42550){
return (function (seq42469){
return cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq42469));
});})(g__27712__auto___42550))
;

/**
 * Returns a generator of a sequence catenated from results of
 * gens, each of which should generate something sequential.
 */
cljs.spec.impl.gen.cat = (function cljs$spec$impl$gen$cat(var_args){
var args__27630__auto__ = [];
var len__27623__auto___42556 = arguments.length;
var i__27624__auto___42557 = (0);
while(true){
if((i__27624__auto___42557 < len__27623__auto___42556)){
args__27630__auto__.push((arguments[i__27624__auto___42557]));

var G__42558 = (i__27624__auto___42557 + (1));
i__27624__auto___42557 = G__42558;
continue;
} else {
}
break;
}

var argseq__27631__auto__ = ((((0) < args__27630__auto__.length))?(new cljs.core.IndexedSeq(args__27630__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic(argseq__27631__auto__);
});

cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic = (function (gens){
return cljs.spec.impl.gen.fmap.call(null,(function (p1__42554_SHARP_){
return cljs.core.apply.call(null,cljs.core.concat,p1__42554_SHARP_);
}),cljs.core.apply.call(null,cljs.spec.impl.gen.tuple,gens));
});

cljs.spec.impl.gen.cat.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.cat.cljs$lang$applyTo = (function (seq42555){
return cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq42555));
});

cljs.spec.impl.gen.qualified_QMARK_ = (function cljs$spec$impl$gen$qualified_QMARK_(ident){
return !((cljs.core.namespace.call(null,ident) == null));
});
cljs.spec.impl.gen.gen_builtins = (new cljs.core.Delay((function (){
var simple = cljs.spec.impl.gen.simple_type_printable.call(null);
return cljs.core.PersistentHashMap.fromArrays([cljs.core.qualified_keyword_QMARK_,cljs.core.seq_QMARK_,cljs.core.vector_QMARK_,cljs.core.any_QMARK_,cljs.core.boolean_QMARK_,cljs.core.char_QMARK_,cljs.core.inst_QMARK_,cljs.core.simple_symbol_QMARK_,cljs.core.sequential_QMARK_,cljs.core.set_QMARK_,cljs.core.map_QMARK_,cljs.core.empty_QMARK_,cljs.core.string_QMARK_,cljs.core.int_QMARK_,cljs.core.associative_QMARK_,cljs.core.keyword_QMARK_,cljs.core.indexed_QMARK_,cljs.core.zero_QMARK_,cljs.core.simple_keyword_QMARK_,cljs.core.neg_int_QMARK_,cljs.core.nil_QMARK_,cljs.core.ident_QMARK_,cljs.core.qualified_ident_QMARK_,cljs.core.true_QMARK_,cljs.core.integer_QMARK_,cljs.core.nat_int_QMARK_,cljs.core.pos_int_QMARK_,cljs.core.uuid_QMARK_,cljs.core.false_QMARK_,cljs.core.list_QMARK_,cljs.core.simple_ident_QMARK_,cljs.core.number_QMARK_,cljs.core.qualified_symbol_QMARK_,cljs.core.seqable_QMARK_,cljs.core.symbol_QMARK_,cljs.core.coll_QMARK_],[cljs.spec.impl.gen.such_that.call(null,cljs.spec.impl.gen.qualified_QMARK_,cljs.spec.impl.gen.keyword_ns.call(null)),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.return$.call(null,null),cljs.spec.impl.gen.any_printable.call(null)], null)),cljs.spec.impl.gen.boolean$.call(null),cljs.spec.impl.gen.char$.call(null),cljs.spec.impl.gen.fmap.call(null,((function (simple){
return (function (p1__42559_SHARP_){
return (new Date(p1__42559_SHARP_));
});})(simple))
,cljs.spec.impl.gen.large_integer.call(null)),cljs.spec.impl.gen.symbol.call(null),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple)], null)),cljs.spec.impl.gen.set.call(null,simple),cljs.spec.impl.gen.map.call(null,simple,simple),cljs.spec.impl.gen.elements.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,cljs.core.List.EMPTY,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentHashSet.EMPTY], null)),cljs.spec.impl.gen.string_alphanumeric.call(null),cljs.spec.impl.gen.large_integer.call(null),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.map.call(null,simple,simple),cljs.spec.impl.gen.vector.call(null,simple)], null)),cljs.spec.impl.gen.keyword_ns.call(null),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.return$.call(null,(0)),cljs.spec.impl.gen.keyword.call(null),cljs.spec.impl.gen.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"max","max",61366548),(-1)], null)),cljs.spec.impl.gen.return$.call(null,null),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.keyword_ns.call(null),cljs.spec.impl.gen.symbol_ns.call(null)], null)),cljs.spec.impl.gen.such_that.call(null,cljs.spec.impl.gen.qualified_QMARK_,cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.keyword_ns.call(null),cljs.spec.impl.gen.symbol_ns.call(null)], null))),cljs.spec.impl.gen.return$.call(null,true),cljs.spec.impl.gen.large_integer.call(null),cljs.spec.impl.gen.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min","min",444991522),(0)], null)),cljs.spec.impl.gen.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min","min",444991522),(1)], null)),cljs.spec.impl.gen.uuid.call(null),cljs.spec.impl.gen.return$.call(null,false),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.keyword.call(null),cljs.spec.impl.gen.symbol.call(null)], null)),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.large_integer.call(null),cljs.spec.impl.gen.double$.call(null)], null)),cljs.spec.impl.gen.such_that.call(null,cljs.spec.impl.gen.qualified_QMARK_,cljs.spec.impl.gen.symbol_ns.call(null)),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.return$.call(null,null),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.map.call(null,simple,simple),cljs.spec.impl.gen.set.call(null,simple),cljs.spec.impl.gen.string_alphanumeric.call(null)], null)),cljs.spec.impl.gen.symbol_ns.call(null),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.map.call(null,simple,simple),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.set.call(null,simple)], null))]);
}),null));
/**
 * Given a predicate, returns a built-in generator if one exists.
 */
cljs.spec.impl.gen.gen_for_pred = (function cljs$spec$impl$gen$gen_for_pred(pred){
if(cljs.core.set_QMARK_.call(null,pred)){
return cljs.spec.impl.gen.elements.call(null,pred);
} else {
return cljs.core.get.call(null,cljs.core.deref.call(null,cljs.spec.impl.gen.gen_builtins),pred);
}
});

//# sourceMappingURL=gen.js.map