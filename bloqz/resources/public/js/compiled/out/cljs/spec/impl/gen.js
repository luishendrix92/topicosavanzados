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
var len__27623__auto___35156 = arguments.length;
var i__27624__auto___35157 = (0);
while(true){
if((i__27624__auto___35157 < len__27623__auto___35156)){
args__27630__auto__.push((arguments[i__27624__auto___35157]));

var G__35158 = (i__27624__auto___35157 + (1));
i__27624__auto___35157 = G__35158;
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

cljs.spec.impl.gen.quick_check.cljs$lang$applyTo = (function (seq35155){
return cljs.spec.impl.gen.quick_check.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35155));
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
var len__27623__auto___35160 = arguments.length;
var i__27624__auto___35161 = (0);
while(true){
if((i__27624__auto___35161 < len__27623__auto___35160)){
args__27630__auto__.push((arguments[i__27624__auto___35161]));

var G__35162 = (i__27624__auto___35161 + (1));
i__27624__auto___35161 = G__35162;
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

cljs.spec.impl.gen.for_all_STAR_.cljs$lang$applyTo = (function (seq35159){
return cljs.spec.impl.gen.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35159));
});

var g_QMARK__35163 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generator_QMARK_ !== 'undefined')){
return clojure.test.check.generators.generator_QMARK_;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null))),cljs.core.str(" never required")].join('')));
}
}),null));
var g_35164 = (new cljs.spec.impl.gen.LazyVar(((function (g_QMARK__35163){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generate !== 'undefined')){
return clojure.test.check.generators.generate;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null))),cljs.core.str(" never required")].join('')));
}
});})(g_QMARK__35163))
,null));
var mkg_35165 = (new cljs.spec.impl.gen.LazyVar(((function (g_QMARK__35163,g_35164){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.__GT_Generator !== 'undefined')){
return clojure.test.check.generators.__GT_Generator;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null))),cljs.core.str(" never required")].join('')));
}
});})(g_QMARK__35163,g_35164))
,null));
cljs.spec.impl.gen.generator_QMARK_ = ((function (g_QMARK__35163,g_35164,mkg_35165){
return (function cljs$spec$impl$gen$generator_QMARK_(x){
return cljs.core.deref.call(null,g_QMARK__35163).call(null,x);
});})(g_QMARK__35163,g_35164,mkg_35165))
;

cljs.spec.impl.gen.generator = ((function (g_QMARK__35163,g_35164,mkg_35165){
return (function cljs$spec$impl$gen$generator(gfn){
return cljs.core.deref.call(null,mkg_35165).call(null,gfn);
});})(g_QMARK__35163,g_35164,mkg_35165))
;

/**
 * Generate a single value using generator.
 */
cljs.spec.impl.gen.generate = ((function (g_QMARK__35163,g_35164,mkg_35165){
return (function cljs$spec$impl$gen$generate(generator){
return cljs.core.deref.call(null,g_35164).call(null,generator);
});})(g_QMARK__35163,g_35164,mkg_35165))
;
cljs.spec.impl.gen.delay_impl = (function cljs$spec$impl$gen$delay_impl(gfnd){
return cljs.spec.impl.gen.generator.call(null,(function (rnd,size){
return new cljs.core.Keyword(null,"gen","gen",142575302).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,gfnd)).call(null,rnd,size);
}));
});
var g__35127__auto___35184 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.hash_map !== 'undefined')){
return clojure.test.check.generators.hash_map;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/hash-map
 */
cljs.spec.impl.gen.hash_map = ((function (g__35127__auto___35184){
return (function cljs$spec$impl$gen$hash_map(var_args){
var args__27630__auto__ = [];
var len__27623__auto___35185 = arguments.length;
var i__27624__auto___35186 = (0);
while(true){
if((i__27624__auto___35186 < len__27623__auto___35185)){
args__27630__auto__.push((arguments[i__27624__auto___35186]));

var G__35187 = (i__27624__auto___35186 + (1));
i__27624__auto___35186 = G__35187;
continue;
} else {
}
break;
}

var argseq__27631__auto__ = ((((0) < args__27630__auto__.length))?(new cljs.core.IndexedSeq(args__27630__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic(argseq__27631__auto__);
});})(g__35127__auto___35184))
;

cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35127__auto___35184){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__35127__auto___35184),args);
});})(g__35127__auto___35184))
;

cljs.spec.impl.gen.hash_map.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.hash_map.cljs$lang$applyTo = ((function (g__35127__auto___35184){
return (function (seq35166){
return cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35166));
});})(g__35127__auto___35184))
;


var g__35127__auto___35188 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.list !== 'undefined')){
return clojure.test.check.generators.list;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/list
 */
cljs.spec.impl.gen.list = ((function (g__35127__auto___35188){
return (function cljs$spec$impl$gen$list(var_args){
var args__27630__auto__ = [];
var len__27623__auto___35189 = arguments.length;
var i__27624__auto___35190 = (0);
while(true){
if((i__27624__auto___35190 < len__27623__auto___35189)){
args__27630__auto__.push((arguments[i__27624__auto___35190]));

var G__35191 = (i__27624__auto___35190 + (1));
i__27624__auto___35190 = G__35191;
continue;
} else {
}
break;
}

var argseq__27631__auto__ = ((((0) < args__27630__auto__.length))?(new cljs.core.IndexedSeq(args__27630__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic(argseq__27631__auto__);
});})(g__35127__auto___35188))
;

cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35127__auto___35188){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__35127__auto___35188),args);
});})(g__35127__auto___35188))
;

cljs.spec.impl.gen.list.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.list.cljs$lang$applyTo = ((function (g__35127__auto___35188){
return (function (seq35167){
return cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35167));
});})(g__35127__auto___35188))
;


var g__35127__auto___35192 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.map !== 'undefined')){
return clojure.test.check.generators.map;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/map
 */
cljs.spec.impl.gen.map = ((function (g__35127__auto___35192){
return (function cljs$spec$impl$gen$map(var_args){
var args__27630__auto__ = [];
var len__27623__auto___35193 = arguments.length;
var i__27624__auto___35194 = (0);
while(true){
if((i__27624__auto___35194 < len__27623__auto___35193)){
args__27630__auto__.push((arguments[i__27624__auto___35194]));

var G__35195 = (i__27624__auto___35194 + (1));
i__27624__auto___35194 = G__35195;
continue;
} else {
}
break;
}

var argseq__27631__auto__ = ((((0) < args__27630__auto__.length))?(new cljs.core.IndexedSeq(args__27630__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic(argseq__27631__auto__);
});})(g__35127__auto___35192))
;

cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35127__auto___35192){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__35127__auto___35192),args);
});})(g__35127__auto___35192))
;

cljs.spec.impl.gen.map.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.map.cljs$lang$applyTo = ((function (g__35127__auto___35192){
return (function (seq35168){
return cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35168));
});})(g__35127__auto___35192))
;


var g__35127__auto___35196 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.not_empty !== 'undefined')){
return clojure.test.check.generators.not_empty;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/not-empty
 */
cljs.spec.impl.gen.not_empty = ((function (g__35127__auto___35196){
return (function cljs$spec$impl$gen$not_empty(var_args){
var args__27630__auto__ = [];
var len__27623__auto___35197 = arguments.length;
var i__27624__auto___35198 = (0);
while(true){
if((i__27624__auto___35198 < len__27623__auto___35197)){
args__27630__auto__.push((arguments[i__27624__auto___35198]));

var G__35199 = (i__27624__auto___35198 + (1));
i__27624__auto___35198 = G__35199;
continue;
} else {
}
break;
}

var argseq__27631__auto__ = ((((0) < args__27630__auto__.length))?(new cljs.core.IndexedSeq(args__27630__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic(argseq__27631__auto__);
});})(g__35127__auto___35196))
;

cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35127__auto___35196){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__35127__auto___35196),args);
});})(g__35127__auto___35196))
;

cljs.spec.impl.gen.not_empty.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.not_empty.cljs$lang$applyTo = ((function (g__35127__auto___35196){
return (function (seq35169){
return cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35169));
});})(g__35127__auto___35196))
;


var g__35127__auto___35200 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.set !== 'undefined')){
return clojure.test.check.generators.set;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/set
 */
cljs.spec.impl.gen.set = ((function (g__35127__auto___35200){
return (function cljs$spec$impl$gen$set(var_args){
var args__27630__auto__ = [];
var len__27623__auto___35201 = arguments.length;
var i__27624__auto___35202 = (0);
while(true){
if((i__27624__auto___35202 < len__27623__auto___35201)){
args__27630__auto__.push((arguments[i__27624__auto___35202]));

var G__35203 = (i__27624__auto___35202 + (1));
i__27624__auto___35202 = G__35203;
continue;
} else {
}
break;
}

var argseq__27631__auto__ = ((((0) < args__27630__auto__.length))?(new cljs.core.IndexedSeq(args__27630__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic(argseq__27631__auto__);
});})(g__35127__auto___35200))
;

cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35127__auto___35200){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__35127__auto___35200),args);
});})(g__35127__auto___35200))
;

cljs.spec.impl.gen.set.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.set.cljs$lang$applyTo = ((function (g__35127__auto___35200){
return (function (seq35170){
return cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35170));
});})(g__35127__auto___35200))
;


var g__35127__auto___35204 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector !== 'undefined')){
return clojure.test.check.generators.vector;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector
 */
cljs.spec.impl.gen.vector = ((function (g__35127__auto___35204){
return (function cljs$spec$impl$gen$vector(var_args){
var args__27630__auto__ = [];
var len__27623__auto___35205 = arguments.length;
var i__27624__auto___35206 = (0);
while(true){
if((i__27624__auto___35206 < len__27623__auto___35205)){
args__27630__auto__.push((arguments[i__27624__auto___35206]));

var G__35207 = (i__27624__auto___35206 + (1));
i__27624__auto___35206 = G__35207;
continue;
} else {
}
break;
}

var argseq__27631__auto__ = ((((0) < args__27630__auto__.length))?(new cljs.core.IndexedSeq(args__27630__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic(argseq__27631__auto__);
});})(g__35127__auto___35204))
;

cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35127__auto___35204){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__35127__auto___35204),args);
});})(g__35127__auto___35204))
;

cljs.spec.impl.gen.vector.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.vector.cljs$lang$applyTo = ((function (g__35127__auto___35204){
return (function (seq35171){
return cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35171));
});})(g__35127__auto___35204))
;


var g__35127__auto___35208 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector_distinct !== 'undefined')){
return clojure.test.check.generators.vector_distinct;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector-distinct
 */
cljs.spec.impl.gen.vector_distinct = ((function (g__35127__auto___35208){
return (function cljs$spec$impl$gen$vector_distinct(var_args){
var args__27630__auto__ = [];
var len__27623__auto___35209 = arguments.length;
var i__27624__auto___35210 = (0);
while(true){
if((i__27624__auto___35210 < len__27623__auto___35209)){
args__27630__auto__.push((arguments[i__27624__auto___35210]));

var G__35211 = (i__27624__auto___35210 + (1));
i__27624__auto___35210 = G__35211;
continue;
} else {
}
break;
}

var argseq__27631__auto__ = ((((0) < args__27630__auto__.length))?(new cljs.core.IndexedSeq(args__27630__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(argseq__27631__auto__);
});})(g__35127__auto___35208))
;

cljs.spec.impl.gen.vector_distinct.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35127__auto___35208){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__35127__auto___35208),args);
});})(g__35127__auto___35208))
;

cljs.spec.impl.gen.vector_distinct.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.vector_distinct.cljs$lang$applyTo = ((function (g__35127__auto___35208){
return (function (seq35172){
return cljs.spec.impl.gen.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35172));
});})(g__35127__auto___35208))
;


var g__35127__auto___35212 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.fmap !== 'undefined')){
return clojure.test.check.generators.fmap;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/fmap
 */
cljs.spec.impl.gen.fmap = ((function (g__35127__auto___35212){
return (function cljs$spec$impl$gen$fmap(var_args){
var args__27630__auto__ = [];
var len__27623__auto___35213 = arguments.length;
var i__27624__auto___35214 = (0);
while(true){
if((i__27624__auto___35214 < len__27623__auto___35213)){
args__27630__auto__.push((arguments[i__27624__auto___35214]));

var G__35215 = (i__27624__auto___35214 + (1));
i__27624__auto___35214 = G__35215;
continue;
} else {
}
break;
}

var argseq__27631__auto__ = ((((0) < args__27630__auto__.length))?(new cljs.core.IndexedSeq(args__27630__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic(argseq__27631__auto__);
});})(g__35127__auto___35212))
;

cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35127__auto___35212){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__35127__auto___35212),args);
});})(g__35127__auto___35212))
;

cljs.spec.impl.gen.fmap.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.fmap.cljs$lang$applyTo = ((function (g__35127__auto___35212){
return (function (seq35173){
return cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35173));
});})(g__35127__auto___35212))
;


var g__35127__auto___35216 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.elements !== 'undefined')){
return clojure.test.check.generators.elements;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/elements
 */
cljs.spec.impl.gen.elements = ((function (g__35127__auto___35216){
return (function cljs$spec$impl$gen$elements(var_args){
var args__27630__auto__ = [];
var len__27623__auto___35217 = arguments.length;
var i__27624__auto___35218 = (0);
while(true){
if((i__27624__auto___35218 < len__27623__auto___35217)){
args__27630__auto__.push((arguments[i__27624__auto___35218]));

var G__35219 = (i__27624__auto___35218 + (1));
i__27624__auto___35218 = G__35219;
continue;
} else {
}
break;
}

var argseq__27631__auto__ = ((((0) < args__27630__auto__.length))?(new cljs.core.IndexedSeq(args__27630__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic(argseq__27631__auto__);
});})(g__35127__auto___35216))
;

cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35127__auto___35216){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__35127__auto___35216),args);
});})(g__35127__auto___35216))
;

cljs.spec.impl.gen.elements.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.elements.cljs$lang$applyTo = ((function (g__35127__auto___35216){
return (function (seq35174){
return cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35174));
});})(g__35127__auto___35216))
;


var g__35127__auto___35220 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.bind !== 'undefined')){
return clojure.test.check.generators.bind;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/bind
 */
cljs.spec.impl.gen.bind = ((function (g__35127__auto___35220){
return (function cljs$spec$impl$gen$bind(var_args){
var args__27630__auto__ = [];
var len__27623__auto___35221 = arguments.length;
var i__27624__auto___35222 = (0);
while(true){
if((i__27624__auto___35222 < len__27623__auto___35221)){
args__27630__auto__.push((arguments[i__27624__auto___35222]));

var G__35223 = (i__27624__auto___35222 + (1));
i__27624__auto___35222 = G__35223;
continue;
} else {
}
break;
}

var argseq__27631__auto__ = ((((0) < args__27630__auto__.length))?(new cljs.core.IndexedSeq(args__27630__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic(argseq__27631__auto__);
});})(g__35127__auto___35220))
;

cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35127__auto___35220){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__35127__auto___35220),args);
});})(g__35127__auto___35220))
;

cljs.spec.impl.gen.bind.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.bind.cljs$lang$applyTo = ((function (g__35127__auto___35220){
return (function (seq35175){
return cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35175));
});})(g__35127__auto___35220))
;


var g__35127__auto___35224 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.choose !== 'undefined')){
return clojure.test.check.generators.choose;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/choose
 */
cljs.spec.impl.gen.choose = ((function (g__35127__auto___35224){
return (function cljs$spec$impl$gen$choose(var_args){
var args__27630__auto__ = [];
var len__27623__auto___35225 = arguments.length;
var i__27624__auto___35226 = (0);
while(true){
if((i__27624__auto___35226 < len__27623__auto___35225)){
args__27630__auto__.push((arguments[i__27624__auto___35226]));

var G__35227 = (i__27624__auto___35226 + (1));
i__27624__auto___35226 = G__35227;
continue;
} else {
}
break;
}

var argseq__27631__auto__ = ((((0) < args__27630__auto__.length))?(new cljs.core.IndexedSeq(args__27630__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic(argseq__27631__auto__);
});})(g__35127__auto___35224))
;

cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35127__auto___35224){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__35127__auto___35224),args);
});})(g__35127__auto___35224))
;

cljs.spec.impl.gen.choose.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.choose.cljs$lang$applyTo = ((function (g__35127__auto___35224){
return (function (seq35176){
return cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35176));
});})(g__35127__auto___35224))
;


var g__35127__auto___35228 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.one_of !== 'undefined')){
return clojure.test.check.generators.one_of;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/one-of
 */
cljs.spec.impl.gen.one_of = ((function (g__35127__auto___35228){
return (function cljs$spec$impl$gen$one_of(var_args){
var args__27630__auto__ = [];
var len__27623__auto___35229 = arguments.length;
var i__27624__auto___35230 = (0);
while(true){
if((i__27624__auto___35230 < len__27623__auto___35229)){
args__27630__auto__.push((arguments[i__27624__auto___35230]));

var G__35231 = (i__27624__auto___35230 + (1));
i__27624__auto___35230 = G__35231;
continue;
} else {
}
break;
}

var argseq__27631__auto__ = ((((0) < args__27630__auto__.length))?(new cljs.core.IndexedSeq(args__27630__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic(argseq__27631__auto__);
});})(g__35127__auto___35228))
;

cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35127__auto___35228){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__35127__auto___35228),args);
});})(g__35127__auto___35228))
;

cljs.spec.impl.gen.one_of.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.one_of.cljs$lang$applyTo = ((function (g__35127__auto___35228){
return (function (seq35177){
return cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35177));
});})(g__35127__auto___35228))
;


var g__35127__auto___35232 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.such_that !== 'undefined')){
return clojure.test.check.generators.such_that;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/such-that
 */
cljs.spec.impl.gen.such_that = ((function (g__35127__auto___35232){
return (function cljs$spec$impl$gen$such_that(var_args){
var args__27630__auto__ = [];
var len__27623__auto___35233 = arguments.length;
var i__27624__auto___35234 = (0);
while(true){
if((i__27624__auto___35234 < len__27623__auto___35233)){
args__27630__auto__.push((arguments[i__27624__auto___35234]));

var G__35235 = (i__27624__auto___35234 + (1));
i__27624__auto___35234 = G__35235;
continue;
} else {
}
break;
}

var argseq__27631__auto__ = ((((0) < args__27630__auto__.length))?(new cljs.core.IndexedSeq(args__27630__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic(argseq__27631__auto__);
});})(g__35127__auto___35232))
;

cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35127__auto___35232){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__35127__auto___35232),args);
});})(g__35127__auto___35232))
;

cljs.spec.impl.gen.such_that.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.such_that.cljs$lang$applyTo = ((function (g__35127__auto___35232){
return (function (seq35178){
return cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35178));
});})(g__35127__auto___35232))
;


var g__35127__auto___35236 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.tuple !== 'undefined')){
return clojure.test.check.generators.tuple;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/tuple
 */
cljs.spec.impl.gen.tuple = ((function (g__35127__auto___35236){
return (function cljs$spec$impl$gen$tuple(var_args){
var args__27630__auto__ = [];
var len__27623__auto___35237 = arguments.length;
var i__27624__auto___35238 = (0);
while(true){
if((i__27624__auto___35238 < len__27623__auto___35237)){
args__27630__auto__.push((arguments[i__27624__auto___35238]));

var G__35239 = (i__27624__auto___35238 + (1));
i__27624__auto___35238 = G__35239;
continue;
} else {
}
break;
}

var argseq__27631__auto__ = ((((0) < args__27630__auto__.length))?(new cljs.core.IndexedSeq(args__27630__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic(argseq__27631__auto__);
});})(g__35127__auto___35236))
;

cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35127__auto___35236){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__35127__auto___35236),args);
});})(g__35127__auto___35236))
;

cljs.spec.impl.gen.tuple.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.tuple.cljs$lang$applyTo = ((function (g__35127__auto___35236){
return (function (seq35179){
return cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35179));
});})(g__35127__auto___35236))
;


var g__35127__auto___35240 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.sample !== 'undefined')){
return clojure.test.check.generators.sample;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/sample
 */
cljs.spec.impl.gen.sample = ((function (g__35127__auto___35240){
return (function cljs$spec$impl$gen$sample(var_args){
var args__27630__auto__ = [];
var len__27623__auto___35241 = arguments.length;
var i__27624__auto___35242 = (0);
while(true){
if((i__27624__auto___35242 < len__27623__auto___35241)){
args__27630__auto__.push((arguments[i__27624__auto___35242]));

var G__35243 = (i__27624__auto___35242 + (1));
i__27624__auto___35242 = G__35243;
continue;
} else {
}
break;
}

var argseq__27631__auto__ = ((((0) < args__27630__auto__.length))?(new cljs.core.IndexedSeq(args__27630__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic(argseq__27631__auto__);
});})(g__35127__auto___35240))
;

cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35127__auto___35240){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__35127__auto___35240),args);
});})(g__35127__auto___35240))
;

cljs.spec.impl.gen.sample.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.sample.cljs$lang$applyTo = ((function (g__35127__auto___35240){
return (function (seq35180){
return cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35180));
});})(g__35127__auto___35240))
;


var g__35127__auto___35244 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.return$ !== 'undefined')){
return clojure.test.check.generators.return$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/return
 */
cljs.spec.impl.gen.return$ = ((function (g__35127__auto___35244){
return (function cljs$spec$impl$gen$return(var_args){
var args__27630__auto__ = [];
var len__27623__auto___35245 = arguments.length;
var i__27624__auto___35246 = (0);
while(true){
if((i__27624__auto___35246 < len__27623__auto___35245)){
args__27630__auto__.push((arguments[i__27624__auto___35246]));

var G__35247 = (i__27624__auto___35246 + (1));
i__27624__auto___35246 = G__35247;
continue;
} else {
}
break;
}

var argseq__27631__auto__ = ((((0) < args__27630__auto__.length))?(new cljs.core.IndexedSeq(args__27630__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic(argseq__27631__auto__);
});})(g__35127__auto___35244))
;

cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35127__auto___35244){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__35127__auto___35244),args);
});})(g__35127__auto___35244))
;

cljs.spec.impl.gen.return$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.return$.cljs$lang$applyTo = ((function (g__35127__auto___35244){
return (function (seq35181){
return cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35181));
});})(g__35127__auto___35244))
;


var g__35127__auto___35248 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer_STAR_ !== 'undefined')){
return clojure.test.check.generators.large_integer_STAR_;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/large-integer*
 */
cljs.spec.impl.gen.large_integer_STAR_ = ((function (g__35127__auto___35248){
return (function cljs$spec$impl$gen$large_integer_STAR_(var_args){
var args__27630__auto__ = [];
var len__27623__auto___35249 = arguments.length;
var i__27624__auto___35250 = (0);
while(true){
if((i__27624__auto___35250 < len__27623__auto___35249)){
args__27630__auto__.push((arguments[i__27624__auto___35250]));

var G__35251 = (i__27624__auto___35250 + (1));
i__27624__auto___35250 = G__35251;
continue;
} else {
}
break;
}

var argseq__27631__auto__ = ((((0) < args__27630__auto__.length))?(new cljs.core.IndexedSeq(args__27630__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__27631__auto__);
});})(g__35127__auto___35248))
;

cljs.spec.impl.gen.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35127__auto___35248){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__35127__auto___35248),args);
});})(g__35127__auto___35248))
;

cljs.spec.impl.gen.large_integer_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.large_integer_STAR_.cljs$lang$applyTo = ((function (g__35127__auto___35248){
return (function (seq35182){
return cljs.spec.impl.gen.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35182));
});})(g__35127__auto___35248))
;


var g__35127__auto___35252 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double_STAR_ !== 'undefined')){
return clojure.test.check.generators.double_STAR_;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","double*","clojure.test.check.generators/double*",841542265,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double*","clojure.test.check.generators/double*",841542265,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/double*
 */
cljs.spec.impl.gen.double_STAR_ = ((function (g__35127__auto___35252){
return (function cljs$spec$impl$gen$double_STAR_(var_args){
var args__27630__auto__ = [];
var len__27623__auto___35253 = arguments.length;
var i__27624__auto___35254 = (0);
while(true){
if((i__27624__auto___35254 < len__27623__auto___35253)){
args__27630__auto__.push((arguments[i__27624__auto___35254]));

var G__35255 = (i__27624__auto___35254 + (1));
i__27624__auto___35254 = G__35255;
continue;
} else {
}
break;
}

var argseq__27631__auto__ = ((((0) < args__27630__auto__.length))?(new cljs.core.IndexedSeq(args__27630__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.double_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__27631__auto__);
});})(g__35127__auto___35252))
;

cljs.spec.impl.gen.double_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35127__auto___35252){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__35127__auto___35252),args);
});})(g__35127__auto___35252))
;

cljs.spec.impl.gen.double_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.double_STAR_.cljs$lang$applyTo = ((function (g__35127__auto___35252){
return (function (seq35183){
return cljs.spec.impl.gen.double_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35183));
});})(g__35127__auto___35252))
;

var g__35140__auto___35277 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any !== 'undefined')){
return clojure.test.check.generators.any;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any
 */
cljs.spec.impl.gen.any = ((function (g__35140__auto___35277){
return (function cljs$spec$impl$gen$any(var_args){
var args__27630__auto__ = [];
var len__27623__auto___35278 = arguments.length;
var i__27624__auto___35279 = (0);
while(true){
if((i__27624__auto___35279 < len__27623__auto___35278)){
args__27630__auto__.push((arguments[i__27624__auto___35279]));

var G__35280 = (i__27624__auto___35279 + (1));
i__27624__auto___35279 = G__35280;
continue;
} else {
}
break;
}

var argseq__27631__auto__ = ((((0) < args__27630__auto__.length))?(new cljs.core.IndexedSeq(args__27630__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic(argseq__27631__auto__);
});})(g__35140__auto___35277))
;

cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35140__auto___35277){
return (function (args){
return cljs.core.deref.call(null,g__35140__auto___35277);
});})(g__35140__auto___35277))
;

cljs.spec.impl.gen.any.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.any.cljs$lang$applyTo = ((function (g__35140__auto___35277){
return (function (seq35256){
return cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35256));
});})(g__35140__auto___35277))
;


var g__35140__auto___35281 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any_printable !== 'undefined')){
return clojure.test.check.generators.any_printable;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any-printable
 */
cljs.spec.impl.gen.any_printable = ((function (g__35140__auto___35281){
return (function cljs$spec$impl$gen$any_printable(var_args){
var args__27630__auto__ = [];
var len__27623__auto___35282 = arguments.length;
var i__27624__auto___35283 = (0);
while(true){
if((i__27624__auto___35283 < len__27623__auto___35282)){
args__27630__auto__.push((arguments[i__27624__auto___35283]));

var G__35284 = (i__27624__auto___35283 + (1));
i__27624__auto___35283 = G__35284;
continue;
} else {
}
break;
}

var argseq__27631__auto__ = ((((0) < args__27630__auto__.length))?(new cljs.core.IndexedSeq(args__27630__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__27631__auto__);
});})(g__35140__auto___35281))
;

cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35140__auto___35281){
return (function (args){
return cljs.core.deref.call(null,g__35140__auto___35281);
});})(g__35140__auto___35281))
;

cljs.spec.impl.gen.any_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.any_printable.cljs$lang$applyTo = ((function (g__35140__auto___35281){
return (function (seq35257){
return cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35257));
});})(g__35140__auto___35281))
;


var g__35140__auto___35285 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.boolean$ !== 'undefined')){
return clojure.test.check.generators.boolean$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/boolean
 */
cljs.spec.impl.gen.boolean$ = ((function (g__35140__auto___35285){
return (function cljs$spec$impl$gen$boolean(var_args){
var args__27630__auto__ = [];
var len__27623__auto___35286 = arguments.length;
var i__27624__auto___35287 = (0);
while(true){
if((i__27624__auto___35287 < len__27623__auto___35286)){
args__27630__auto__.push((arguments[i__27624__auto___35287]));

var G__35288 = (i__27624__auto___35287 + (1));
i__27624__auto___35287 = G__35288;
continue;
} else {
}
break;
}

var argseq__27631__auto__ = ((((0) < args__27630__auto__.length))?(new cljs.core.IndexedSeq(args__27630__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic(argseq__27631__auto__);
});})(g__35140__auto___35285))
;

cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35140__auto___35285){
return (function (args){
return cljs.core.deref.call(null,g__35140__auto___35285);
});})(g__35140__auto___35285))
;

cljs.spec.impl.gen.boolean$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.boolean$.cljs$lang$applyTo = ((function (g__35140__auto___35285){
return (function (seq35258){
return cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35258));
});})(g__35140__auto___35285))
;


var g__35140__auto___35289 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char$ !== 'undefined')){
return clojure.test.check.generators.char$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char
 */
cljs.spec.impl.gen.char$ = ((function (g__35140__auto___35289){
return (function cljs$spec$impl$gen$char(var_args){
var args__27630__auto__ = [];
var len__27623__auto___35290 = arguments.length;
var i__27624__auto___35291 = (0);
while(true){
if((i__27624__auto___35291 < len__27623__auto___35290)){
args__27630__auto__.push((arguments[i__27624__auto___35291]));

var G__35292 = (i__27624__auto___35291 + (1));
i__27624__auto___35291 = G__35292;
continue;
} else {
}
break;
}

var argseq__27631__auto__ = ((((0) < args__27630__auto__.length))?(new cljs.core.IndexedSeq(args__27630__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic(argseq__27631__auto__);
});})(g__35140__auto___35289))
;

cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35140__auto___35289){
return (function (args){
return cljs.core.deref.call(null,g__35140__auto___35289);
});})(g__35140__auto___35289))
;

cljs.spec.impl.gen.char$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char$.cljs$lang$applyTo = ((function (g__35140__auto___35289){
return (function (seq35259){
return cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35259));
});})(g__35140__auto___35289))
;


var g__35140__auto___35293 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alpha !== 'undefined')){
return clojure.test.check.generators.char_alpha;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alpha
 */
cljs.spec.impl.gen.char_alpha = ((function (g__35140__auto___35293){
return (function cljs$spec$impl$gen$char_alpha(var_args){
var args__27630__auto__ = [];
var len__27623__auto___35294 = arguments.length;
var i__27624__auto___35295 = (0);
while(true){
if((i__27624__auto___35295 < len__27623__auto___35294)){
args__27630__auto__.push((arguments[i__27624__auto___35295]));

var G__35296 = (i__27624__auto___35295 + (1));
i__27624__auto___35295 = G__35296;
continue;
} else {
}
break;
}

var argseq__27631__auto__ = ((((0) < args__27630__auto__.length))?(new cljs.core.IndexedSeq(args__27630__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic(argseq__27631__auto__);
});})(g__35140__auto___35293))
;

cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35140__auto___35293){
return (function (args){
return cljs.core.deref.call(null,g__35140__auto___35293);
});})(g__35140__auto___35293))
;

cljs.spec.impl.gen.char_alpha.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_alpha.cljs$lang$applyTo = ((function (g__35140__auto___35293){
return (function (seq35260){
return cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35260));
});})(g__35140__auto___35293))
;


var g__35140__auto___35297 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alphanumeric !== 'undefined')){
return clojure.test.check.generators.char_alphanumeric;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alphanumeric
 */
cljs.spec.impl.gen.char_alphanumeric = ((function (g__35140__auto___35297){
return (function cljs$spec$impl$gen$char_alphanumeric(var_args){
var args__27630__auto__ = [];
var len__27623__auto___35298 = arguments.length;
var i__27624__auto___35299 = (0);
while(true){
if((i__27624__auto___35299 < len__27623__auto___35298)){
args__27630__auto__.push((arguments[i__27624__auto___35299]));

var G__35300 = (i__27624__auto___35299 + (1));
i__27624__auto___35299 = G__35300;
continue;
} else {
}
break;
}

var argseq__27631__auto__ = ((((0) < args__27630__auto__.length))?(new cljs.core.IndexedSeq(args__27630__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__27631__auto__);
});})(g__35140__auto___35297))
;

cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35140__auto___35297){
return (function (args){
return cljs.core.deref.call(null,g__35140__auto___35297);
});})(g__35140__auto___35297))
;

cljs.spec.impl.gen.char_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_alphanumeric.cljs$lang$applyTo = ((function (g__35140__auto___35297){
return (function (seq35261){
return cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35261));
});})(g__35140__auto___35297))
;


var g__35140__auto___35301 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_ascii !== 'undefined')){
return clojure.test.check.generators.char_ascii;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-ascii
 */
cljs.spec.impl.gen.char_ascii = ((function (g__35140__auto___35301){
return (function cljs$spec$impl$gen$char_ascii(var_args){
var args__27630__auto__ = [];
var len__27623__auto___35302 = arguments.length;
var i__27624__auto___35303 = (0);
while(true){
if((i__27624__auto___35303 < len__27623__auto___35302)){
args__27630__auto__.push((arguments[i__27624__auto___35303]));

var G__35304 = (i__27624__auto___35303 + (1));
i__27624__auto___35303 = G__35304;
continue;
} else {
}
break;
}

var argseq__27631__auto__ = ((((0) < args__27630__auto__.length))?(new cljs.core.IndexedSeq(args__27630__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__27631__auto__);
});})(g__35140__auto___35301))
;

cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35140__auto___35301){
return (function (args){
return cljs.core.deref.call(null,g__35140__auto___35301);
});})(g__35140__auto___35301))
;

cljs.spec.impl.gen.char_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_ascii.cljs$lang$applyTo = ((function (g__35140__auto___35301){
return (function (seq35262){
return cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35262));
});})(g__35140__auto___35301))
;


var g__35140__auto___35305 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double$ !== 'undefined')){
return clojure.test.check.generators.double$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/double
 */
cljs.spec.impl.gen.double$ = ((function (g__35140__auto___35305){
return (function cljs$spec$impl$gen$double(var_args){
var args__27630__auto__ = [];
var len__27623__auto___35306 = arguments.length;
var i__27624__auto___35307 = (0);
while(true){
if((i__27624__auto___35307 < len__27623__auto___35306)){
args__27630__auto__.push((arguments[i__27624__auto___35307]));

var G__35308 = (i__27624__auto___35307 + (1));
i__27624__auto___35307 = G__35308;
continue;
} else {
}
break;
}

var argseq__27631__auto__ = ((((0) < args__27630__auto__.length))?(new cljs.core.IndexedSeq(args__27630__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic(argseq__27631__auto__);
});})(g__35140__auto___35305))
;

cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35140__auto___35305){
return (function (args){
return cljs.core.deref.call(null,g__35140__auto___35305);
});})(g__35140__auto___35305))
;

cljs.spec.impl.gen.double$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.double$.cljs$lang$applyTo = ((function (g__35140__auto___35305){
return (function (seq35263){
return cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35263));
});})(g__35140__auto___35305))
;


var g__35140__auto___35309 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.int$ !== 'undefined')){
return clojure.test.check.generators.int$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/int
 */
cljs.spec.impl.gen.int$ = ((function (g__35140__auto___35309){
return (function cljs$spec$impl$gen$int(var_args){
var args__27630__auto__ = [];
var len__27623__auto___35310 = arguments.length;
var i__27624__auto___35311 = (0);
while(true){
if((i__27624__auto___35311 < len__27623__auto___35310)){
args__27630__auto__.push((arguments[i__27624__auto___35311]));

var G__35312 = (i__27624__auto___35311 + (1));
i__27624__auto___35311 = G__35312;
continue;
} else {
}
break;
}

var argseq__27631__auto__ = ((((0) < args__27630__auto__.length))?(new cljs.core.IndexedSeq(args__27630__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic(argseq__27631__auto__);
});})(g__35140__auto___35309))
;

cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35140__auto___35309){
return (function (args){
return cljs.core.deref.call(null,g__35140__auto___35309);
});})(g__35140__auto___35309))
;

cljs.spec.impl.gen.int$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.int$.cljs$lang$applyTo = ((function (g__35140__auto___35309){
return (function (seq35264){
return cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35264));
});})(g__35140__auto___35309))
;


var g__35140__auto___35313 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword !== 'undefined')){
return clojure.test.check.generators.keyword;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword
 */
cljs.spec.impl.gen.keyword = ((function (g__35140__auto___35313){
return (function cljs$spec$impl$gen$keyword(var_args){
var args__27630__auto__ = [];
var len__27623__auto___35314 = arguments.length;
var i__27624__auto___35315 = (0);
while(true){
if((i__27624__auto___35315 < len__27623__auto___35314)){
args__27630__auto__.push((arguments[i__27624__auto___35315]));

var G__35316 = (i__27624__auto___35315 + (1));
i__27624__auto___35315 = G__35316;
continue;
} else {
}
break;
}

var argseq__27631__auto__ = ((((0) < args__27630__auto__.length))?(new cljs.core.IndexedSeq(args__27630__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic(argseq__27631__auto__);
});})(g__35140__auto___35313))
;

cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35140__auto___35313){
return (function (args){
return cljs.core.deref.call(null,g__35140__auto___35313);
});})(g__35140__auto___35313))
;

cljs.spec.impl.gen.keyword.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.keyword.cljs$lang$applyTo = ((function (g__35140__auto___35313){
return (function (seq35265){
return cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35265));
});})(g__35140__auto___35313))
;


var g__35140__auto___35317 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword_ns !== 'undefined')){
return clojure.test.check.generators.keyword_ns;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword-ns
 */
cljs.spec.impl.gen.keyword_ns = ((function (g__35140__auto___35317){
return (function cljs$spec$impl$gen$keyword_ns(var_args){
var args__27630__auto__ = [];
var len__27623__auto___35318 = arguments.length;
var i__27624__auto___35319 = (0);
while(true){
if((i__27624__auto___35319 < len__27623__auto___35318)){
args__27630__auto__.push((arguments[i__27624__auto___35319]));

var G__35320 = (i__27624__auto___35319 + (1));
i__27624__auto___35319 = G__35320;
continue;
} else {
}
break;
}

var argseq__27631__auto__ = ((((0) < args__27630__auto__.length))?(new cljs.core.IndexedSeq(args__27630__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__27631__auto__);
});})(g__35140__auto___35317))
;

cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35140__auto___35317){
return (function (args){
return cljs.core.deref.call(null,g__35140__auto___35317);
});})(g__35140__auto___35317))
;

cljs.spec.impl.gen.keyword_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.keyword_ns.cljs$lang$applyTo = ((function (g__35140__auto___35317){
return (function (seq35266){
return cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35266));
});})(g__35140__auto___35317))
;


var g__35140__auto___35321 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer !== 'undefined')){
return clojure.test.check.generators.large_integer;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/large-integer
 */
cljs.spec.impl.gen.large_integer = ((function (g__35140__auto___35321){
return (function cljs$spec$impl$gen$large_integer(var_args){
var args__27630__auto__ = [];
var len__27623__auto___35322 = arguments.length;
var i__27624__auto___35323 = (0);
while(true){
if((i__27624__auto___35323 < len__27623__auto___35322)){
args__27630__auto__.push((arguments[i__27624__auto___35323]));

var G__35324 = (i__27624__auto___35323 + (1));
i__27624__auto___35323 = G__35324;
continue;
} else {
}
break;
}

var argseq__27631__auto__ = ((((0) < args__27630__auto__.length))?(new cljs.core.IndexedSeq(args__27630__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic(argseq__27631__auto__);
});})(g__35140__auto___35321))
;

cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35140__auto___35321){
return (function (args){
return cljs.core.deref.call(null,g__35140__auto___35321);
});})(g__35140__auto___35321))
;

cljs.spec.impl.gen.large_integer.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.large_integer.cljs$lang$applyTo = ((function (g__35140__auto___35321){
return (function (seq35267){
return cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35267));
});})(g__35140__auto___35321))
;


var g__35140__auto___35325 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.ratio !== 'undefined')){
return clojure.test.check.generators.ratio;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/ratio
 */
cljs.spec.impl.gen.ratio = ((function (g__35140__auto___35325){
return (function cljs$spec$impl$gen$ratio(var_args){
var args__27630__auto__ = [];
var len__27623__auto___35326 = arguments.length;
var i__27624__auto___35327 = (0);
while(true){
if((i__27624__auto___35327 < len__27623__auto___35326)){
args__27630__auto__.push((arguments[i__27624__auto___35327]));

var G__35328 = (i__27624__auto___35327 + (1));
i__27624__auto___35327 = G__35328;
continue;
} else {
}
break;
}

var argseq__27631__auto__ = ((((0) < args__27630__auto__.length))?(new cljs.core.IndexedSeq(args__27630__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic(argseq__27631__auto__);
});})(g__35140__auto___35325))
;

cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35140__auto___35325){
return (function (args){
return cljs.core.deref.call(null,g__35140__auto___35325);
});})(g__35140__auto___35325))
;

cljs.spec.impl.gen.ratio.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.ratio.cljs$lang$applyTo = ((function (g__35140__auto___35325){
return (function (seq35268){
return cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35268));
});})(g__35140__auto___35325))
;


var g__35140__auto___35329 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type !== 'undefined')){
return clojure.test.check.generators.simple_type;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type
 */
cljs.spec.impl.gen.simple_type = ((function (g__35140__auto___35329){
return (function cljs$spec$impl$gen$simple_type(var_args){
var args__27630__auto__ = [];
var len__27623__auto___35330 = arguments.length;
var i__27624__auto___35331 = (0);
while(true){
if((i__27624__auto___35331 < len__27623__auto___35330)){
args__27630__auto__.push((arguments[i__27624__auto___35331]));

var G__35332 = (i__27624__auto___35331 + (1));
i__27624__auto___35331 = G__35332;
continue;
} else {
}
break;
}

var argseq__27631__auto__ = ((((0) < args__27630__auto__.length))?(new cljs.core.IndexedSeq(args__27630__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic(argseq__27631__auto__);
});})(g__35140__auto___35329))
;

cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35140__auto___35329){
return (function (args){
return cljs.core.deref.call(null,g__35140__auto___35329);
});})(g__35140__auto___35329))
;

cljs.spec.impl.gen.simple_type.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.simple_type.cljs$lang$applyTo = ((function (g__35140__auto___35329){
return (function (seq35269){
return cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35269));
});})(g__35140__auto___35329))
;


var g__35140__auto___35333 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type_printable !== 'undefined')){
return clojure.test.check.generators.simple_type_printable;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type-printable
 */
cljs.spec.impl.gen.simple_type_printable = ((function (g__35140__auto___35333){
return (function cljs$spec$impl$gen$simple_type_printable(var_args){
var args__27630__auto__ = [];
var len__27623__auto___35334 = arguments.length;
var i__27624__auto___35335 = (0);
while(true){
if((i__27624__auto___35335 < len__27623__auto___35334)){
args__27630__auto__.push((arguments[i__27624__auto___35335]));

var G__35336 = (i__27624__auto___35335 + (1));
i__27624__auto___35335 = G__35336;
continue;
} else {
}
break;
}

var argseq__27631__auto__ = ((((0) < args__27630__auto__.length))?(new cljs.core.IndexedSeq(args__27630__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__27631__auto__);
});})(g__35140__auto___35333))
;

cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35140__auto___35333){
return (function (args){
return cljs.core.deref.call(null,g__35140__auto___35333);
});})(g__35140__auto___35333))
;

cljs.spec.impl.gen.simple_type_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.simple_type_printable.cljs$lang$applyTo = ((function (g__35140__auto___35333){
return (function (seq35270){
return cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35270));
});})(g__35140__auto___35333))
;


var g__35140__auto___35337 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string !== 'undefined')){
return clojure.test.check.generators.string;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string
 */
cljs.spec.impl.gen.string = ((function (g__35140__auto___35337){
return (function cljs$spec$impl$gen$string(var_args){
var args__27630__auto__ = [];
var len__27623__auto___35338 = arguments.length;
var i__27624__auto___35339 = (0);
while(true){
if((i__27624__auto___35339 < len__27623__auto___35338)){
args__27630__auto__.push((arguments[i__27624__auto___35339]));

var G__35340 = (i__27624__auto___35339 + (1));
i__27624__auto___35339 = G__35340;
continue;
} else {
}
break;
}

var argseq__27631__auto__ = ((((0) < args__27630__auto__.length))?(new cljs.core.IndexedSeq(args__27630__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic(argseq__27631__auto__);
});})(g__35140__auto___35337))
;

cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35140__auto___35337){
return (function (args){
return cljs.core.deref.call(null,g__35140__auto___35337);
});})(g__35140__auto___35337))
;

cljs.spec.impl.gen.string.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string.cljs$lang$applyTo = ((function (g__35140__auto___35337){
return (function (seq35271){
return cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35271));
});})(g__35140__auto___35337))
;


var g__35140__auto___35341 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_ascii !== 'undefined')){
return clojure.test.check.generators.string_ascii;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-ascii
 */
cljs.spec.impl.gen.string_ascii = ((function (g__35140__auto___35341){
return (function cljs$spec$impl$gen$string_ascii(var_args){
var args__27630__auto__ = [];
var len__27623__auto___35342 = arguments.length;
var i__27624__auto___35343 = (0);
while(true){
if((i__27624__auto___35343 < len__27623__auto___35342)){
args__27630__auto__.push((arguments[i__27624__auto___35343]));

var G__35344 = (i__27624__auto___35343 + (1));
i__27624__auto___35343 = G__35344;
continue;
} else {
}
break;
}

var argseq__27631__auto__ = ((((0) < args__27630__auto__.length))?(new cljs.core.IndexedSeq(args__27630__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__27631__auto__);
});})(g__35140__auto___35341))
;

cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35140__auto___35341){
return (function (args){
return cljs.core.deref.call(null,g__35140__auto___35341);
});})(g__35140__auto___35341))
;

cljs.spec.impl.gen.string_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string_ascii.cljs$lang$applyTo = ((function (g__35140__auto___35341){
return (function (seq35272){
return cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35272));
});})(g__35140__auto___35341))
;


var g__35140__auto___35345 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_alphanumeric !== 'undefined')){
return clojure.test.check.generators.string_alphanumeric;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-alphanumeric
 */
cljs.spec.impl.gen.string_alphanumeric = ((function (g__35140__auto___35345){
return (function cljs$spec$impl$gen$string_alphanumeric(var_args){
var args__27630__auto__ = [];
var len__27623__auto___35346 = arguments.length;
var i__27624__auto___35347 = (0);
while(true){
if((i__27624__auto___35347 < len__27623__auto___35346)){
args__27630__auto__.push((arguments[i__27624__auto___35347]));

var G__35348 = (i__27624__auto___35347 + (1));
i__27624__auto___35347 = G__35348;
continue;
} else {
}
break;
}

var argseq__27631__auto__ = ((((0) < args__27630__auto__.length))?(new cljs.core.IndexedSeq(args__27630__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__27631__auto__);
});})(g__35140__auto___35345))
;

cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35140__auto___35345){
return (function (args){
return cljs.core.deref.call(null,g__35140__auto___35345);
});})(g__35140__auto___35345))
;

cljs.spec.impl.gen.string_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string_alphanumeric.cljs$lang$applyTo = ((function (g__35140__auto___35345){
return (function (seq35273){
return cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35273));
});})(g__35140__auto___35345))
;


var g__35140__auto___35349 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol !== 'undefined')){
return clojure.test.check.generators.symbol;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol
 */
cljs.spec.impl.gen.symbol = ((function (g__35140__auto___35349){
return (function cljs$spec$impl$gen$symbol(var_args){
var args__27630__auto__ = [];
var len__27623__auto___35350 = arguments.length;
var i__27624__auto___35351 = (0);
while(true){
if((i__27624__auto___35351 < len__27623__auto___35350)){
args__27630__auto__.push((arguments[i__27624__auto___35351]));

var G__35352 = (i__27624__auto___35351 + (1));
i__27624__auto___35351 = G__35352;
continue;
} else {
}
break;
}

var argseq__27631__auto__ = ((((0) < args__27630__auto__.length))?(new cljs.core.IndexedSeq(args__27630__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic(argseq__27631__auto__);
});})(g__35140__auto___35349))
;

cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35140__auto___35349){
return (function (args){
return cljs.core.deref.call(null,g__35140__auto___35349);
});})(g__35140__auto___35349))
;

cljs.spec.impl.gen.symbol.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.symbol.cljs$lang$applyTo = ((function (g__35140__auto___35349){
return (function (seq35274){
return cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35274));
});})(g__35140__auto___35349))
;


var g__35140__auto___35353 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol_ns !== 'undefined')){
return clojure.test.check.generators.symbol_ns;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol-ns
 */
cljs.spec.impl.gen.symbol_ns = ((function (g__35140__auto___35353){
return (function cljs$spec$impl$gen$symbol_ns(var_args){
var args__27630__auto__ = [];
var len__27623__auto___35354 = arguments.length;
var i__27624__auto___35355 = (0);
while(true){
if((i__27624__auto___35355 < len__27623__auto___35354)){
args__27630__auto__.push((arguments[i__27624__auto___35355]));

var G__35356 = (i__27624__auto___35355 + (1));
i__27624__auto___35355 = G__35356;
continue;
} else {
}
break;
}

var argseq__27631__auto__ = ((((0) < args__27630__auto__.length))?(new cljs.core.IndexedSeq(args__27630__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__27631__auto__);
});})(g__35140__auto___35353))
;

cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35140__auto___35353){
return (function (args){
return cljs.core.deref.call(null,g__35140__auto___35353);
});})(g__35140__auto___35353))
;

cljs.spec.impl.gen.symbol_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.symbol_ns.cljs$lang$applyTo = ((function (g__35140__auto___35353){
return (function (seq35275){
return cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35275));
});})(g__35140__auto___35353))
;


var g__35140__auto___35357 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.uuid !== 'undefined')){
return clojure.test.check.generators.uuid;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/uuid
 */
cljs.spec.impl.gen.uuid = ((function (g__35140__auto___35357){
return (function cljs$spec$impl$gen$uuid(var_args){
var args__27630__auto__ = [];
var len__27623__auto___35358 = arguments.length;
var i__27624__auto___35359 = (0);
while(true){
if((i__27624__auto___35359 < len__27623__auto___35358)){
args__27630__auto__.push((arguments[i__27624__auto___35359]));

var G__35360 = (i__27624__auto___35359 + (1));
i__27624__auto___35359 = G__35360;
continue;
} else {
}
break;
}

var argseq__27631__auto__ = ((((0) < args__27630__auto__.length))?(new cljs.core.IndexedSeq(args__27630__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic(argseq__27631__auto__);
});})(g__35140__auto___35357))
;

cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35140__auto___35357){
return (function (args){
return cljs.core.deref.call(null,g__35140__auto___35357);
});})(g__35140__auto___35357))
;

cljs.spec.impl.gen.uuid.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.uuid.cljs$lang$applyTo = ((function (g__35140__auto___35357){
return (function (seq35276){
return cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35276));
});})(g__35140__auto___35357))
;

/**
 * Returns a generator of a sequence catenated from results of
 * gens, each of which should generate something sequential.
 */
cljs.spec.impl.gen.cat = (function cljs$spec$impl$gen$cat(var_args){
var args__27630__auto__ = [];
var len__27623__auto___35363 = arguments.length;
var i__27624__auto___35364 = (0);
while(true){
if((i__27624__auto___35364 < len__27623__auto___35363)){
args__27630__auto__.push((arguments[i__27624__auto___35364]));

var G__35365 = (i__27624__auto___35364 + (1));
i__27624__auto___35364 = G__35365;
continue;
} else {
}
break;
}

var argseq__27631__auto__ = ((((0) < args__27630__auto__.length))?(new cljs.core.IndexedSeq(args__27630__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic(argseq__27631__auto__);
});

cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic = (function (gens){
return cljs.spec.impl.gen.fmap.call(null,(function (p1__35361_SHARP_){
return cljs.core.apply.call(null,cljs.core.concat,p1__35361_SHARP_);
}),cljs.core.apply.call(null,cljs.spec.impl.gen.tuple,gens));
});

cljs.spec.impl.gen.cat.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.cat.cljs$lang$applyTo = (function (seq35362){
return cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35362));
});

cljs.spec.impl.gen.qualified_QMARK_ = (function cljs$spec$impl$gen$qualified_QMARK_(ident){
return !((cljs.core.namespace.call(null,ident) == null));
});
cljs.spec.impl.gen.gen_builtins = (new cljs.core.Delay((function (){
var simple = cljs.spec.impl.gen.simple_type_printable.call(null);
return cljs.core.PersistentHashMap.fromArrays([cljs.core.qualified_keyword_QMARK_,cljs.core.seq_QMARK_,cljs.core.vector_QMARK_,cljs.core.any_QMARK_,cljs.core.boolean_QMARK_,cljs.core.char_QMARK_,cljs.core.inst_QMARK_,cljs.core.simple_symbol_QMARK_,cljs.core.sequential_QMARK_,cljs.core.set_QMARK_,cljs.core.map_QMARK_,cljs.core.empty_QMARK_,cljs.core.string_QMARK_,cljs.core.int_QMARK_,cljs.core.associative_QMARK_,cljs.core.keyword_QMARK_,cljs.core.indexed_QMARK_,cljs.core.zero_QMARK_,cljs.core.simple_keyword_QMARK_,cljs.core.neg_int_QMARK_,cljs.core.nil_QMARK_,cljs.core.ident_QMARK_,cljs.core.qualified_ident_QMARK_,cljs.core.true_QMARK_,cljs.core.integer_QMARK_,cljs.core.nat_int_QMARK_,cljs.core.pos_int_QMARK_,cljs.core.uuid_QMARK_,cljs.core.false_QMARK_,cljs.core.list_QMARK_,cljs.core.simple_ident_QMARK_,cljs.core.number_QMARK_,cljs.core.qualified_symbol_QMARK_,cljs.core.seqable_QMARK_,cljs.core.symbol_QMARK_,cljs.core.coll_QMARK_],[cljs.spec.impl.gen.such_that.call(null,cljs.spec.impl.gen.qualified_QMARK_,cljs.spec.impl.gen.keyword_ns.call(null)),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.return$.call(null,null),cljs.spec.impl.gen.any_printable.call(null)], null)),cljs.spec.impl.gen.boolean$.call(null),cljs.spec.impl.gen.char$.call(null),cljs.spec.impl.gen.fmap.call(null,((function (simple){
return (function (p1__35366_SHARP_){
return (new Date(p1__35366_SHARP_));
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

//# sourceMappingURL=gen.js.map?rel=1496160787824