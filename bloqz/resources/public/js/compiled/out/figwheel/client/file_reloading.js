// Compiled by ClojureScript 1.9.229 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('goog.string');
goog.require('goog.async.Deferred');
goog.require('goog.Uri');
goog.require('goog.net.jsloader');
goog.require('cljs.core.async');
goog.require('goog.object');
goog.require('clojure.set');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
if(typeof figwheel.client.file_reloading.figwheel_meta_pragmas !== 'undefined'){
} else {
figwheel.client.file_reloading.figwheel_meta_pragmas = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
figwheel.client.file_reloading.on_jsload_custom_event = (function figwheel$client$file_reloading$on_jsload_custom_event(url){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.js-reload",url);
});
figwheel.client.file_reloading.before_jsload_custom_event = (function figwheel$client$file_reloading$before_jsload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.before-js-reload",files);
});
figwheel.client.file_reloading.on_cssload_custom_event = (function figwheel$client$file_reloading$on_cssload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.css-reload",files);
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__26548__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string')) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__26548__auto__){
return or__26548__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.name__GT_path = (function figwheel$client$file_reloading$name__GT_path(ns){

return (goog.dependencies_.nameToPath[ns]);
});
figwheel.client.file_reloading.provided_QMARK_ = (function figwheel$client$file_reloading$provided_QMARK_(ns){
return (goog.dependencies_.written[figwheel.client.file_reloading.name__GT_path.call(null,ns)]);
});
figwheel.client.file_reloading.immutable_ns_QMARK_ = (function figwheel$client$file_reloading$immutable_ns_QMARK_(name){
var or__26548__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 10, ["svgpan.SvgPan",null,"far.out",null,"cljs.nodejs",null,"testDep.bar",null,"someprotopackage.TestPackageTypes",null,"goog",null,"an.existing.path",null,"cljs.core",null,"ns",null,"dup.base",null], null), null).call(null,name);
if(cljs.core.truth_(or__26548__auto__)){
return or__26548__auto__;
} else {
return cljs.core.some.call(null,cljs.core.partial.call(null,goog.string.startsWith,name),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["goog.","cljs.","clojure.","fake.","proto2."], null));
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__34085_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__34085_SHARP_));
}),goog.object.getKeys((goog.dependencies_.requires[figwheel.client.file_reloading.name__GT_path.call(null,ns)]))));
});
if(typeof figwheel.client.file_reloading.dependency_data !== 'undefined'){
} else {
figwheel.client.file_reloading.dependency_data = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"dependents","dependents",136812837),cljs.core.PersistentArrayMap.EMPTY], null));
}
figwheel.client.file_reloading.path_to_name_BANG_ = (function figwheel$client$file_reloading$path_to_name_BANG_(path,name){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.fromArray([name], true));
});
/**
 * Setup a path to name dependencies map.
 * That goes from path -> #{ ns-names }
 */
figwheel.client.file_reloading.setup_path__GT_name_BANG_ = (function figwheel$client$file_reloading$setup_path__GT_name_BANG_(){
var nameToPath = goog.object.filter(goog.dependencies_.nameToPath,(function (v,k,o){
return goog.string.startsWith(v,"../");
}));
return goog.object.forEach(nameToPath,((function (nameToPath){
return (function (v,k,o){
return figwheel.client.file_reloading.path_to_name_BANG_.call(null,v,k);
});})(nameToPath))
);
});
/**
 * returns a set of namespaces defined by a path
 */
figwheel.client.file_reloading.path__GT_name = (function figwheel$client$file_reloading$path__GT_name(path){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null));
});
figwheel.client.file_reloading.name_to_parent_BANG_ = (function figwheel$client$file_reloading$name_to_parent_BANG_(ns,parent_ns){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.fromArray([parent_ns], true));
});
/**
 * This reverses the goog.dependencies_.requires for looking up ns-dependents.
 */
figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_ = (function figwheel$client$file_reloading$setup_ns__GT_dependents_BANG_(){
var requires = goog.object.filter(goog.dependencies_.requires,(function (v,k,o){
return goog.string.startsWith(k,"../");
}));
return goog.object.forEach(requires,((function (requires){
return (function (v,k,_){
return goog.object.forEach(v,((function (requires){
return (function (v_SINGLEQUOTE_,k_SINGLEQUOTE_,___$1){
var seq__34090 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__34091 = null;
var count__34092 = (0);
var i__34093 = (0);
while(true){
if((i__34093 < count__34092)){
var n = cljs.core._nth.call(null,chunk__34091,i__34093);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__34094 = seq__34090;
var G__34095 = chunk__34091;
var G__34096 = count__34092;
var G__34097 = (i__34093 + (1));
seq__34090 = G__34094;
chunk__34091 = G__34095;
count__34092 = G__34096;
i__34093 = G__34097;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__34090);
if(temp__4657__auto__){
var seq__34090__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34090__$1)){
var c__27359__auto__ = cljs.core.chunk_first.call(null,seq__34090__$1);
var G__34098 = cljs.core.chunk_rest.call(null,seq__34090__$1);
var G__34099 = c__27359__auto__;
var G__34100 = cljs.core.count.call(null,c__27359__auto__);
var G__34101 = (0);
seq__34090 = G__34098;
chunk__34091 = G__34099;
count__34092 = G__34100;
i__34093 = G__34101;
continue;
} else {
var n = cljs.core.first.call(null,seq__34090__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__34102 = cljs.core.next.call(null,seq__34090__$1);
var G__34103 = null;
var G__34104 = (0);
var G__34105 = (0);
seq__34090 = G__34102;
chunk__34091 = G__34103;
count__34092 = G__34104;
i__34093 = G__34105;
continue;
}
} else {
return null;
}
}
break;
}
});})(requires))
);
});})(requires))
);
});
figwheel.client.file_reloading.ns__GT_dependents = (function figwheel$client$file_reloading$ns__GT_dependents(ns){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null));
});
figwheel.client.file_reloading.build_topo_sort = (function figwheel$client$file_reloading$build_topo_sort(get_deps){
var get_deps__$1 = cljs.core.memoize.call(null,get_deps);
var topo_sort_helper_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_topo_sort_helper_STAR_(x,depth,state){
var deps = get_deps__$1.call(null,x);
if(cljs.core.empty_QMARK_.call(null,deps)){
return null;
} else {
return topo_sort_STAR_.call(null,deps,depth,state);
}
});})(get_deps__$1))
;
var topo_sort_STAR_ = ((function (get_deps__$1){
return (function() {
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = null;
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1 = (function (deps){
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.call(null,deps,(0),cljs.core.atom.call(null,cljs.core.sorted_map.call(null)));
});
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3 = (function (deps,depth,state){
cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [depth], null),cljs.core.fnil.call(null,cljs.core.into,cljs.core.PersistentHashSet.EMPTY),deps);

var seq__34156_34167 = cljs.core.seq.call(null,deps);
var chunk__34157_34168 = null;
var count__34158_34169 = (0);
var i__34159_34170 = (0);
while(true){
if((i__34159_34170 < count__34158_34169)){
var dep_34171 = cljs.core._nth.call(null,chunk__34157_34168,i__34159_34170);
topo_sort_helper_STAR_.call(null,dep_34171,(depth + (1)),state);

var G__34172 = seq__34156_34167;
var G__34173 = chunk__34157_34168;
var G__34174 = count__34158_34169;
var G__34175 = (i__34159_34170 + (1));
seq__34156_34167 = G__34172;
chunk__34157_34168 = G__34173;
count__34158_34169 = G__34174;
i__34159_34170 = G__34175;
continue;
} else {
var temp__4657__auto___34176 = cljs.core.seq.call(null,seq__34156_34167);
if(temp__4657__auto___34176){
var seq__34156_34177__$1 = temp__4657__auto___34176;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34156_34177__$1)){
var c__27359__auto___34178 = cljs.core.chunk_first.call(null,seq__34156_34177__$1);
var G__34179 = cljs.core.chunk_rest.call(null,seq__34156_34177__$1);
var G__34180 = c__27359__auto___34178;
var G__34181 = cljs.core.count.call(null,c__27359__auto___34178);
var G__34182 = (0);
seq__34156_34167 = G__34179;
chunk__34157_34168 = G__34180;
count__34158_34169 = G__34181;
i__34159_34170 = G__34182;
continue;
} else {
var dep_34183 = cljs.core.first.call(null,seq__34156_34177__$1);
topo_sort_helper_STAR_.call(null,dep_34183,(depth + (1)),state);

var G__34184 = cljs.core.next.call(null,seq__34156_34177__$1);
var G__34185 = null;
var G__34186 = (0);
var G__34187 = (0);
seq__34156_34167 = G__34184;
chunk__34157_34168 = G__34185;
count__34158_34169 = G__34186;
i__34159_34170 = G__34187;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,depth,(0))){
return elim_dups_STAR_.call(null,cljs.core.reverse.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,state))));
} else {
return null;
}
});
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = function(deps,depth,state){
switch(arguments.length){
case 1:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1.call(this,deps);
case 3:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3.call(this,deps,depth,state);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1;
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$3 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3;
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_;
})()
;})(get_deps__$1))
;
var elim_dups_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__34160){
var vec__34164 = p__34160;
var seq__34165 = cljs.core.seq.call(null,vec__34164);
var first__34166 = cljs.core.first.call(null,seq__34165);
var seq__34165__$1 = cljs.core.next.call(null,seq__34165);
var x = first__34166;
var xs = seq__34165__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__34164,seq__34165,first__34166,seq__34165__$1,x,xs,get_deps__$1){
return (function (p1__34106_SHARP_){
return clojure.set.difference.call(null,p1__34106_SHARP_,x);
});})(vec__34164,seq__34165,first__34166,seq__34165__$1,x,xs,get_deps__$1))
,xs)));
}
});})(get_deps__$1))
;
return topo_sort_STAR_;
});
figwheel.client.file_reloading.get_all_dependencies = (function figwheel$client$file_reloading$get_all_dependencies(ns){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.get_requires);
return cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns], null))));
});
figwheel.client.file_reloading.get_all_dependents = (function figwheel$client$file_reloading$get_all_dependents(nss){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.ns__GT_dependents);
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,figwheel.client.file_reloading.immutable_ns_QMARK_),cljs.core.reverse.call(null,cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,nss)))));
});
figwheel.client.file_reloading.unprovide_BANG_ = (function figwheel$client$file_reloading$unprovide_BANG_(ns){
var path = figwheel.client.file_reloading.name__GT_path.call(null,ns);
goog.object.remove(goog.dependencies_.visited,path);

goog.object.remove(goog.dependencies_.written,path);

return goog.object.remove(goog.dependencies_.written,[cljs.core.str(goog.basePath),cljs.core.str(path)].join(''));
});
figwheel.client.file_reloading.resolve_ns = (function figwheel$client$file_reloading$resolve_ns(ns){
return [cljs.core.str(goog.basePath),cljs.core.str(figwheel.client.file_reloading.name__GT_path.call(null,ns))].join('');
});
figwheel.client.file_reloading.addDependency = (function figwheel$client$file_reloading$addDependency(path,provides,requires){
var seq__34200 = cljs.core.seq.call(null,provides);
var chunk__34201 = null;
var count__34202 = (0);
var i__34203 = (0);
while(true){
if((i__34203 < count__34202)){
var prov = cljs.core._nth.call(null,chunk__34201,i__34203);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__34204_34212 = cljs.core.seq.call(null,requires);
var chunk__34205_34213 = null;
var count__34206_34214 = (0);
var i__34207_34215 = (0);
while(true){
if((i__34207_34215 < count__34206_34214)){
var req_34216 = cljs.core._nth.call(null,chunk__34205_34213,i__34207_34215);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_34216,prov);

var G__34217 = seq__34204_34212;
var G__34218 = chunk__34205_34213;
var G__34219 = count__34206_34214;
var G__34220 = (i__34207_34215 + (1));
seq__34204_34212 = G__34217;
chunk__34205_34213 = G__34218;
count__34206_34214 = G__34219;
i__34207_34215 = G__34220;
continue;
} else {
var temp__4657__auto___34221 = cljs.core.seq.call(null,seq__34204_34212);
if(temp__4657__auto___34221){
var seq__34204_34222__$1 = temp__4657__auto___34221;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34204_34222__$1)){
var c__27359__auto___34223 = cljs.core.chunk_first.call(null,seq__34204_34222__$1);
var G__34224 = cljs.core.chunk_rest.call(null,seq__34204_34222__$1);
var G__34225 = c__27359__auto___34223;
var G__34226 = cljs.core.count.call(null,c__27359__auto___34223);
var G__34227 = (0);
seq__34204_34212 = G__34224;
chunk__34205_34213 = G__34225;
count__34206_34214 = G__34226;
i__34207_34215 = G__34227;
continue;
} else {
var req_34228 = cljs.core.first.call(null,seq__34204_34222__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_34228,prov);

var G__34229 = cljs.core.next.call(null,seq__34204_34222__$1);
var G__34230 = null;
var G__34231 = (0);
var G__34232 = (0);
seq__34204_34212 = G__34229;
chunk__34205_34213 = G__34230;
count__34206_34214 = G__34231;
i__34207_34215 = G__34232;
continue;
}
} else {
}
}
break;
}

var G__34233 = seq__34200;
var G__34234 = chunk__34201;
var G__34235 = count__34202;
var G__34236 = (i__34203 + (1));
seq__34200 = G__34233;
chunk__34201 = G__34234;
count__34202 = G__34235;
i__34203 = G__34236;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__34200);
if(temp__4657__auto__){
var seq__34200__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34200__$1)){
var c__27359__auto__ = cljs.core.chunk_first.call(null,seq__34200__$1);
var G__34237 = cljs.core.chunk_rest.call(null,seq__34200__$1);
var G__34238 = c__27359__auto__;
var G__34239 = cljs.core.count.call(null,c__27359__auto__);
var G__34240 = (0);
seq__34200 = G__34237;
chunk__34201 = G__34238;
count__34202 = G__34239;
i__34203 = G__34240;
continue;
} else {
var prov = cljs.core.first.call(null,seq__34200__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__34208_34241 = cljs.core.seq.call(null,requires);
var chunk__34209_34242 = null;
var count__34210_34243 = (0);
var i__34211_34244 = (0);
while(true){
if((i__34211_34244 < count__34210_34243)){
var req_34245 = cljs.core._nth.call(null,chunk__34209_34242,i__34211_34244);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_34245,prov);

var G__34246 = seq__34208_34241;
var G__34247 = chunk__34209_34242;
var G__34248 = count__34210_34243;
var G__34249 = (i__34211_34244 + (1));
seq__34208_34241 = G__34246;
chunk__34209_34242 = G__34247;
count__34210_34243 = G__34248;
i__34211_34244 = G__34249;
continue;
} else {
var temp__4657__auto___34250__$1 = cljs.core.seq.call(null,seq__34208_34241);
if(temp__4657__auto___34250__$1){
var seq__34208_34251__$1 = temp__4657__auto___34250__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34208_34251__$1)){
var c__27359__auto___34252 = cljs.core.chunk_first.call(null,seq__34208_34251__$1);
var G__34253 = cljs.core.chunk_rest.call(null,seq__34208_34251__$1);
var G__34254 = c__27359__auto___34252;
var G__34255 = cljs.core.count.call(null,c__27359__auto___34252);
var G__34256 = (0);
seq__34208_34241 = G__34253;
chunk__34209_34242 = G__34254;
count__34210_34243 = G__34255;
i__34211_34244 = G__34256;
continue;
} else {
var req_34257 = cljs.core.first.call(null,seq__34208_34251__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_34257,prov);

var G__34258 = cljs.core.next.call(null,seq__34208_34251__$1);
var G__34259 = null;
var G__34260 = (0);
var G__34261 = (0);
seq__34208_34241 = G__34258;
chunk__34209_34242 = G__34259;
count__34210_34243 = G__34260;
i__34211_34244 = G__34261;
continue;
}
} else {
}
}
break;
}

var G__34262 = cljs.core.next.call(null,seq__34200__$1);
var G__34263 = null;
var G__34264 = (0);
var G__34265 = (0);
seq__34200 = G__34262;
chunk__34201 = G__34263;
count__34202 = G__34264;
i__34203 = G__34265;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.file_reloading.figwheel_require = (function figwheel$client$file_reloading$figwheel_require(src,reload){
goog.require = figwheel$client$file_reloading$figwheel_require;

if(cljs.core._EQ_.call(null,reload,"reload-all")){
var seq__34270_34274 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__34271_34275 = null;
var count__34272_34276 = (0);
var i__34273_34277 = (0);
while(true){
if((i__34273_34277 < count__34272_34276)){
var ns_34278 = cljs.core._nth.call(null,chunk__34271_34275,i__34273_34277);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_34278);

var G__34279 = seq__34270_34274;
var G__34280 = chunk__34271_34275;
var G__34281 = count__34272_34276;
var G__34282 = (i__34273_34277 + (1));
seq__34270_34274 = G__34279;
chunk__34271_34275 = G__34280;
count__34272_34276 = G__34281;
i__34273_34277 = G__34282;
continue;
} else {
var temp__4657__auto___34283 = cljs.core.seq.call(null,seq__34270_34274);
if(temp__4657__auto___34283){
var seq__34270_34284__$1 = temp__4657__auto___34283;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34270_34284__$1)){
var c__27359__auto___34285 = cljs.core.chunk_first.call(null,seq__34270_34284__$1);
var G__34286 = cljs.core.chunk_rest.call(null,seq__34270_34284__$1);
var G__34287 = c__27359__auto___34285;
var G__34288 = cljs.core.count.call(null,c__27359__auto___34285);
var G__34289 = (0);
seq__34270_34274 = G__34286;
chunk__34271_34275 = G__34287;
count__34272_34276 = G__34288;
i__34273_34277 = G__34289;
continue;
} else {
var ns_34290 = cljs.core.first.call(null,seq__34270_34284__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_34290);

var G__34291 = cljs.core.next.call(null,seq__34270_34284__$1);
var G__34292 = null;
var G__34293 = (0);
var G__34294 = (0);
seq__34270_34274 = G__34291;
chunk__34271_34275 = G__34292;
count__34272_34276 = G__34293;
i__34273_34277 = G__34294;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(reload)){
figwheel.client.file_reloading.unprovide_BANG_.call(null,src);
} else {
}

return goog.require_figwheel_backup_(src);
});
/**
 * Reusable browser REPL bootstrapping. Patches the essential functions
 *   in goog.base to support re-loading of namespaces after page load.
 */
figwheel.client.file_reloading.bootstrap_goog_base = (function figwheel$client$file_reloading$bootstrap_goog_base(){
if(cljs.core.truth_(COMPILED)){
return null;
} else {
goog.require_figwheel_backup_ = (function (){var or__26548__auto__ = goog.require__;
if(cljs.core.truth_(or__26548__auto__)){
return or__26548__auto__;
} else {
return goog.require;
}
})();

goog.isProvided_ = (function (name){
return false;
});

figwheel.client.file_reloading.setup_path__GT_name_BANG_.call(null);

figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_.call(null);

goog.addDependency_figwheel_backup_ = goog.addDependency;

goog.addDependency = (function() { 
var G__34295__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__34295 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__34296__i = 0, G__34296__a = new Array(arguments.length -  0);
while (G__34296__i < G__34296__a.length) {G__34296__a[G__34296__i] = arguments[G__34296__i + 0]; ++G__34296__i;}
  args = new cljs.core.IndexedSeq(G__34296__a,0);
} 
return G__34295__delegate.call(this,args);};
G__34295.cljs$lang$maxFixedArity = 0;
G__34295.cljs$lang$applyTo = (function (arglist__34297){
var args = cljs.core.seq(arglist__34297);
return G__34295__delegate(args);
});
G__34295.cljs$core$IFn$_invoke$arity$variadic = G__34295__delegate;
return G__34295;
})()
;

goog.constructNamespace_("cljs.user");

goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.queued_file_reload;

return goog.require = figwheel.client.file_reloading.figwheel_require;
}
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
if(typeof figwheel.client.file_reloading.bootstrapped_cljs !== 'undefined'){
return null;
} else {
figwheel.client.file_reloading.bootstrapped_cljs = (function (){
figwheel.client.file_reloading.bootstrap_goog_base.call(null);

return true;
})()
;
}
});
figwheel.client.file_reloading.reload_file_in_html_env = (function figwheel$client$file_reloading$reload_file_in_html_env(request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
deferred.addCallback(((function (deferred){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred))
);

return deferred.addErrback(((function (deferred){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred))
);
});
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__34298 = cljs.core._EQ_;
var expr__34299 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__34298.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__34299))){
var node_path_lib = require("path");
var util_pattern = [cljs.core.str(node_path_lib.sep),cljs.core.str(node_path_lib.join("goog","bootstrap","nodejs.js"))].join('');
var util_path = goog.object.findKey(require.cache,((function (node_path_lib,util_pattern,pred__34298,expr__34299){
return (function (v,k,o){
return goog.string.endsWith(k,util_pattern);
});})(node_path_lib,util_pattern,pred__34298,expr__34299))
);
var parts = cljs.core.pop.call(null,cljs.core.pop.call(null,clojure.string.split.call(null,util_path,/[\/\\]/)));
var root_path = clojure.string.join.call(null,node_path_lib.sep,parts);
return ((function (node_path_lib,util_pattern,util_path,parts,root_path,pred__34298,expr__34299){
return (function (request_url,callback){

var cache_path = node_path_lib.resolve(root_path,request_url);
goog.object.remove(require.cache,cache_path);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e34301){if((e34301 instanceof Error)){
var e = e34301;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e34301;

}
}})());
});
;})(node_path_lib,util_pattern,util_path,parts,root_path,pred__34298,expr__34299))
} else {
if(cljs.core.truth_(pred__34298.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__34299))){
return figwheel.client.file_reloading.reload_file_in_html_env;
} else {
if(cljs.core.truth_(pred__34298.call(null,new cljs.core.Keyword(null,"react-native","react-native",-1543085138),expr__34299))){
return figwheel.client.file_reloading.reload_file_in_html_env;
} else {
if(cljs.core.truth_(pred__34298.call(null,new cljs.core.Keyword(null,"worker","worker",938239996),expr__34299))){
return ((function (pred__34298,expr__34299){
return (function (request_url,callback){

return callback.call(null,(function (){try{self.importScripts(figwheel.client.file_reloading.add_cache_buster.call(null,request_url));

return true;
}catch (e34302){if((e34302 instanceof Error)){
var e = e34302;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e34302;

}
}})());
});
;})(pred__34298,expr__34299))
} else {
return ((function (pred__34298,expr__34299){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__34298,expr__34299))
}
}
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__34303,callback){
var map__34306 = p__34303;
var map__34306__$1 = ((((!((map__34306 == null)))?((((map__34306.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34306.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34306):map__34306);
var file_msg = map__34306__$1;
var request_url = cljs.core.get.call(null,map__34306__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__34306,map__34306__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfully loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__34306,map__34306__$1,file_msg,request_url))
);
});
if(typeof figwheel.client.file_reloading.reload_chan !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_chan = cljs.core.async.chan.call(null);
}
if(typeof figwheel.client.file_reloading.on_load_callbacks !== 'undefined'){
} else {
figwheel.client.file_reloading.on_load_callbacks = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if(typeof figwheel.client.file_reloading.dependencies_loaded !== 'undefined'){
} else {
figwheel.client.file_reloading.dependencies_loaded = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
figwheel.client.file_reloading.blocking_load = (function figwheel$client$file_reloading$blocking_load(url){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.reload_file.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"request-url","request-url",2100346596),url], null),((function (out){
return (function (file_msg){
cljs.core.async.put_BANG_.call(null,out,file_msg);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
if(typeof figwheel.client.file_reloading.reloader_loop !== 'undefined'){
} else {
figwheel.client.file_reloading.reloader_loop = (function (){var c__29473__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29473__auto__){
return (function (){
var f__29474__auto__ = (function (){var switch__29361__auto__ = ((function (c__29473__auto__){
return (function (state_34330){
var state_val_34331 = (state_34330[(1)]);
if((state_val_34331 === (7))){
var inst_34326 = (state_34330[(2)]);
var state_34330__$1 = state_34330;
var statearr_34332_34352 = state_34330__$1;
(statearr_34332_34352[(2)] = inst_34326);

(statearr_34332_34352[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34331 === (1))){
var state_34330__$1 = state_34330;
var statearr_34333_34353 = state_34330__$1;
(statearr_34333_34353[(2)] = null);

(statearr_34333_34353[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34331 === (4))){
var inst_34310 = (state_34330[(7)]);
var inst_34310__$1 = (state_34330[(2)]);
var state_34330__$1 = (function (){var statearr_34334 = state_34330;
(statearr_34334[(7)] = inst_34310__$1);

return statearr_34334;
})();
if(cljs.core.truth_(inst_34310__$1)){
var statearr_34335_34354 = state_34330__$1;
(statearr_34335_34354[(1)] = (5));

} else {
var statearr_34336_34355 = state_34330__$1;
(statearr_34336_34355[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34331 === (6))){
var state_34330__$1 = state_34330;
var statearr_34337_34356 = state_34330__$1;
(statearr_34337_34356[(2)] = null);

(statearr_34337_34356[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34331 === (3))){
var inst_34328 = (state_34330[(2)]);
var state_34330__$1 = state_34330;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34330__$1,inst_34328);
} else {
if((state_val_34331 === (2))){
var state_34330__$1 = state_34330;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34330__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_34331 === (11))){
var inst_34322 = (state_34330[(2)]);
var state_34330__$1 = (function (){var statearr_34338 = state_34330;
(statearr_34338[(8)] = inst_34322);

return statearr_34338;
})();
var statearr_34339_34357 = state_34330__$1;
(statearr_34339_34357[(2)] = null);

(statearr_34339_34357[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34331 === (9))){
var inst_34314 = (state_34330[(9)]);
var inst_34316 = (state_34330[(10)]);
var inst_34318 = inst_34316.call(null,inst_34314);
var state_34330__$1 = state_34330;
var statearr_34340_34358 = state_34330__$1;
(statearr_34340_34358[(2)] = inst_34318);

(statearr_34340_34358[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34331 === (5))){
var inst_34310 = (state_34330[(7)]);
var inst_34312 = figwheel.client.file_reloading.blocking_load.call(null,inst_34310);
var state_34330__$1 = state_34330;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34330__$1,(8),inst_34312);
} else {
if((state_val_34331 === (10))){
var inst_34314 = (state_34330[(9)]);
var inst_34320 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_34314);
var state_34330__$1 = state_34330;
var statearr_34341_34359 = state_34330__$1;
(statearr_34341_34359[(2)] = inst_34320);

(statearr_34341_34359[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34331 === (8))){
var inst_34310 = (state_34330[(7)]);
var inst_34316 = (state_34330[(10)]);
var inst_34314 = (state_34330[(2)]);
var inst_34315 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_34316__$1 = cljs.core.get.call(null,inst_34315,inst_34310);
var state_34330__$1 = (function (){var statearr_34342 = state_34330;
(statearr_34342[(9)] = inst_34314);

(statearr_34342[(10)] = inst_34316__$1);

return statearr_34342;
})();
if(cljs.core.truth_(inst_34316__$1)){
var statearr_34343_34360 = state_34330__$1;
(statearr_34343_34360[(1)] = (9));

} else {
var statearr_34344_34361 = state_34330__$1;
(statearr_34344_34361[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__29473__auto__))
;
return ((function (switch__29361__auto__,c__29473__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__29362__auto__ = null;
var figwheel$client$file_reloading$state_machine__29362__auto____0 = (function (){
var statearr_34348 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_34348[(0)] = figwheel$client$file_reloading$state_machine__29362__auto__);

(statearr_34348[(1)] = (1));

return statearr_34348;
});
var figwheel$client$file_reloading$state_machine__29362__auto____1 = (function (state_34330){
while(true){
var ret_value__29363__auto__ = (function (){try{while(true){
var result__29364__auto__ = switch__29361__auto__.call(null,state_34330);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29364__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29364__auto__;
}
break;
}
}catch (e34349){if((e34349 instanceof Object)){
var ex__29365__auto__ = e34349;
var statearr_34350_34362 = state_34330;
(statearr_34350_34362[(5)] = ex__29365__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34330);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34349;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29363__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34363 = state_34330;
state_34330 = G__34363;
continue;
} else {
return ret_value__29363__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__29362__auto__ = function(state_34330){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__29362__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__29362__auto____1.call(this,state_34330);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__29362__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__29362__auto____0;
figwheel$client$file_reloading$state_machine__29362__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__29362__auto____1;
return figwheel$client$file_reloading$state_machine__29362__auto__;
})()
;})(switch__29361__auto__,c__29473__auto__))
})();
var state__29475__auto__ = (function (){var statearr_34351 = f__29474__auto__.call(null);
(statearr_34351[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29473__auto__);

return statearr_34351;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29475__auto__);
});})(c__29473__auto__))
);

return c__29473__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(url){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,url);
});
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__34364,callback){
var map__34367 = p__34364;
var map__34367__$1 = ((((!((map__34367 == null)))?((((map__34367.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34367.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34367):map__34367);
var file_msg = map__34367__$1;
var namespace = cljs.core.get.call(null,map__34367__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__34367,map__34367__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__34367,map__34367__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.figwheel_no_load_QMARK_ = (function figwheel$client$file_reloading$figwheel_no_load_QMARK_(p__34369){
var map__34372 = p__34369;
var map__34372__$1 = ((((!((map__34372 == null)))?((((map__34372.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34372.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34372):map__34372);
var file_msg = map__34372__$1;
var namespace = cljs.core.get.call(null,map__34372__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__34374){
var map__34377 = p__34374;
var map__34377__$1 = ((((!((map__34377 == null)))?((((map__34377.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34377.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34377):map__34377);
var file_msg = map__34377__$1;
var namespace = cljs.core.get.call(null,map__34377__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__26536__auto__ = cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,file_msg));
if(and__26536__auto__){
var or__26548__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__26548__auto__)){
return or__26548__auto__;
} else {
var or__26548__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__26548__auto____$1)){
return or__26548__auto____$1;
} else {
return figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
}
}
} else {
return and__26536__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__34379,callback){
var map__34382 = p__34379;
var map__34382__$1 = ((((!((map__34382 == null)))?((((map__34382.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34382.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34382):map__34382);
var file_msg = map__34382__$1;
var request_url = cljs.core.get.call(null,map__34382__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__34382__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.require_with_callback.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Figwheel: Not trying to load file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.js_reload.call(null,file_msg,((function (out){
return (function (url){
cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
/**
 * Returns a chanel with one collection of loaded filenames on it.
 */
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__29473__auto___34486 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29473__auto___34486,out){
return (function (){
var f__29474__auto__ = (function (){var switch__29361__auto__ = ((function (c__29473__auto___34486,out){
return (function (state_34468){
var state_val_34469 = (state_34468[(1)]);
if((state_val_34469 === (1))){
var inst_34442 = cljs.core.seq.call(null,files);
var inst_34443 = cljs.core.first.call(null,inst_34442);
var inst_34444 = cljs.core.next.call(null,inst_34442);
var inst_34445 = files;
var state_34468__$1 = (function (){var statearr_34470 = state_34468;
(statearr_34470[(7)] = inst_34443);

(statearr_34470[(8)] = inst_34445);

(statearr_34470[(9)] = inst_34444);

return statearr_34470;
})();
var statearr_34471_34487 = state_34468__$1;
(statearr_34471_34487[(2)] = null);

(statearr_34471_34487[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34469 === (2))){
var inst_34451 = (state_34468[(10)]);
var inst_34445 = (state_34468[(8)]);
var inst_34450 = cljs.core.seq.call(null,inst_34445);
var inst_34451__$1 = cljs.core.first.call(null,inst_34450);
var inst_34452 = cljs.core.next.call(null,inst_34450);
var inst_34453 = (inst_34451__$1 == null);
var inst_34454 = cljs.core.not.call(null,inst_34453);
var state_34468__$1 = (function (){var statearr_34472 = state_34468;
(statearr_34472[(10)] = inst_34451__$1);

(statearr_34472[(11)] = inst_34452);

return statearr_34472;
})();
if(inst_34454){
var statearr_34473_34488 = state_34468__$1;
(statearr_34473_34488[(1)] = (4));

} else {
var statearr_34474_34489 = state_34468__$1;
(statearr_34474_34489[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34469 === (3))){
var inst_34466 = (state_34468[(2)]);
var state_34468__$1 = state_34468;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34468__$1,inst_34466);
} else {
if((state_val_34469 === (4))){
var inst_34451 = (state_34468[(10)]);
var inst_34456 = figwheel.client.file_reloading.reload_js_file.call(null,inst_34451);
var state_34468__$1 = state_34468;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34468__$1,(7),inst_34456);
} else {
if((state_val_34469 === (5))){
var inst_34462 = cljs.core.async.close_BANG_.call(null,out);
var state_34468__$1 = state_34468;
var statearr_34475_34490 = state_34468__$1;
(statearr_34475_34490[(2)] = inst_34462);

(statearr_34475_34490[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34469 === (6))){
var inst_34464 = (state_34468[(2)]);
var state_34468__$1 = state_34468;
var statearr_34476_34491 = state_34468__$1;
(statearr_34476_34491[(2)] = inst_34464);

(statearr_34476_34491[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34469 === (7))){
var inst_34452 = (state_34468[(11)]);
var inst_34458 = (state_34468[(2)]);
var inst_34459 = cljs.core.async.put_BANG_.call(null,out,inst_34458);
var inst_34445 = inst_34452;
var state_34468__$1 = (function (){var statearr_34477 = state_34468;
(statearr_34477[(12)] = inst_34459);

(statearr_34477[(8)] = inst_34445);

return statearr_34477;
})();
var statearr_34478_34492 = state_34468__$1;
(statearr_34478_34492[(2)] = null);

(statearr_34478_34492[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(c__29473__auto___34486,out))
;
return ((function (switch__29361__auto__,c__29473__auto___34486,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__29362__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__29362__auto____0 = (function (){
var statearr_34482 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34482[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__29362__auto__);

(statearr_34482[(1)] = (1));

return statearr_34482;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__29362__auto____1 = (function (state_34468){
while(true){
var ret_value__29363__auto__ = (function (){try{while(true){
var result__29364__auto__ = switch__29361__auto__.call(null,state_34468);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29364__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29364__auto__;
}
break;
}
}catch (e34483){if((e34483 instanceof Object)){
var ex__29365__auto__ = e34483;
var statearr_34484_34493 = state_34468;
(statearr_34484_34493[(5)] = ex__29365__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34468);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34483;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29363__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34494 = state_34468;
state_34468 = G__34494;
continue;
} else {
return ret_value__29363__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__29362__auto__ = function(state_34468){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__29362__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__29362__auto____1.call(this,state_34468);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__29362__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__29362__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__29362__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__29362__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__29362__auto__;
})()
;})(switch__29361__auto__,c__29473__auto___34486,out))
})();
var state__29475__auto__ = (function (){var statearr_34485 = f__29474__auto__.call(null);
(statearr_34485[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29473__auto___34486);

return statearr_34485;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29475__auto__);
});})(c__29473__auto___34486,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__34495,opts){
var map__34499 = p__34495;
var map__34499__$1 = ((((!((map__34499 == null)))?((((map__34499.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34499.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34499):map__34499);
var eval_body__$1 = cljs.core.get.call(null,map__34499__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__34499__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__26536__auto__ = eval_body__$1;
if(cljs.core.truth_(and__26536__auto__)){
return typeof eval_body__$1 === 'string';
} else {
return and__26536__auto__;
}
})())){
var code = eval_body__$1;
try{figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Evaling file "),cljs.core.str(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e34501){var e = e34501;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Unable to evaluate "),cljs.core.str(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.expand_files = (function figwheel$client$file_reloading$expand_files(files){
var deps = figwheel.client.file_reloading.get_all_dependents.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,cljs.core.partial.call(null,cljs.core.re_matches,/figwheel\.connect.*/),new cljs.core.Keyword(null,"namespace","namespace",-377510372)),cljs.core.map.call(null,((function (deps){
return (function (n){
var temp__4655__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,((function (deps){
return (function (p1__34502_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__34502_SHARP_),n);
});})(deps))
,files));
if(cljs.core.truth_(temp__4655__auto__)){
var file_msg = temp__4655__auto__;
return file_msg;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372),new cljs.core.Keyword(null,"namespace","namespace",-377510372),n], null);
}
});})(deps))
,deps));
});
figwheel.client.file_reloading.sort_files = (function figwheel$client$file_reloading$sort_files(files){
if((cljs.core.count.call(null,files) <= (1))){
return files;
} else {
var keep_files = cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,keep_files,new cljs.core.Keyword(null,"namespace","namespace",-377510372)),figwheel.client.file_reloading.expand_files.call(null,files));
}
});
figwheel.client.file_reloading.get_figwheel_always = (function figwheel$client$file_reloading$get_figwheel_always(){
return cljs.core.map.call(null,(function (p__34511){
var vec__34512 = p__34511;
var k = cljs.core.nth.call(null,vec__34512,(0),null);
var v = cljs.core.nth.call(null,vec__34512,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__34515){
var vec__34516 = p__34515;
var k = cljs.core.nth.call(null,vec__34516,(0),null);
var v = cljs.core.nth.call(null,vec__34516,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__34522,p__34523){
var map__34770 = p__34522;
var map__34770__$1 = ((((!((map__34770 == null)))?((((map__34770.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34770.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34770):map__34770);
var opts = map__34770__$1;
var before_jsload = cljs.core.get.call(null,map__34770__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__34770__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__34770__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__34771 = p__34523;
var map__34771__$1 = ((((!((map__34771 == null)))?((((map__34771.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34771.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34771):map__34771);
var msg = map__34771__$1;
var files = cljs.core.get.call(null,map__34771__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__34771__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__34771__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__29473__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29473__auto__,map__34770,map__34770__$1,opts,before_jsload,on_jsload,reload_dependents,map__34771,map__34771__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__29474__auto__ = (function (){var switch__29361__auto__ = ((function (c__29473__auto__,map__34770,map__34770__$1,opts,before_jsload,on_jsload,reload_dependents,map__34771,map__34771__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_34924){
var state_val_34925 = (state_34924[(1)]);
if((state_val_34925 === (7))){
var inst_34787 = (state_34924[(7)]);
var inst_34788 = (state_34924[(8)]);
var inst_34786 = (state_34924[(9)]);
var inst_34785 = (state_34924[(10)]);
var inst_34793 = cljs.core._nth.call(null,inst_34786,inst_34788);
var inst_34794 = figwheel.client.file_reloading.eval_body.call(null,inst_34793,opts);
var inst_34795 = (inst_34788 + (1));
var tmp34926 = inst_34787;
var tmp34927 = inst_34786;
var tmp34928 = inst_34785;
var inst_34785__$1 = tmp34928;
var inst_34786__$1 = tmp34927;
var inst_34787__$1 = tmp34926;
var inst_34788__$1 = inst_34795;
var state_34924__$1 = (function (){var statearr_34929 = state_34924;
(statearr_34929[(7)] = inst_34787__$1);

(statearr_34929[(8)] = inst_34788__$1);

(statearr_34929[(11)] = inst_34794);

(statearr_34929[(9)] = inst_34786__$1);

(statearr_34929[(10)] = inst_34785__$1);

return statearr_34929;
})();
var statearr_34930_35016 = state_34924__$1;
(statearr_34930_35016[(2)] = null);

(statearr_34930_35016[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34925 === (20))){
var inst_34828 = (state_34924[(12)]);
var inst_34836 = figwheel.client.file_reloading.sort_files.call(null,inst_34828);
var state_34924__$1 = state_34924;
var statearr_34931_35017 = state_34924__$1;
(statearr_34931_35017[(2)] = inst_34836);

(statearr_34931_35017[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34925 === (27))){
var state_34924__$1 = state_34924;
var statearr_34932_35018 = state_34924__$1;
(statearr_34932_35018[(2)] = null);

(statearr_34932_35018[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34925 === (1))){
var inst_34777 = (state_34924[(13)]);
var inst_34774 = before_jsload.call(null,files);
var inst_34775 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_34776 = (function (){return ((function (inst_34777,inst_34774,inst_34775,state_val_34925,c__29473__auto__,map__34770,map__34770__$1,opts,before_jsload,on_jsload,reload_dependents,map__34771,map__34771__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__34519_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__34519_SHARP_);
});
;})(inst_34777,inst_34774,inst_34775,state_val_34925,c__29473__auto__,map__34770,map__34770__$1,opts,before_jsload,on_jsload,reload_dependents,map__34771,map__34771__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_34777__$1 = cljs.core.filter.call(null,inst_34776,files);
var inst_34778 = cljs.core.not_empty.call(null,inst_34777__$1);
var state_34924__$1 = (function (){var statearr_34933 = state_34924;
(statearr_34933[(14)] = inst_34775);

(statearr_34933[(15)] = inst_34774);

(statearr_34933[(13)] = inst_34777__$1);

return statearr_34933;
})();
if(cljs.core.truth_(inst_34778)){
var statearr_34934_35019 = state_34924__$1;
(statearr_34934_35019[(1)] = (2));

} else {
var statearr_34935_35020 = state_34924__$1;
(statearr_34935_35020[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34925 === (24))){
var state_34924__$1 = state_34924;
var statearr_34936_35021 = state_34924__$1;
(statearr_34936_35021[(2)] = null);

(statearr_34936_35021[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34925 === (39))){
var inst_34878 = (state_34924[(16)]);
var state_34924__$1 = state_34924;
var statearr_34937_35022 = state_34924__$1;
(statearr_34937_35022[(2)] = inst_34878);

(statearr_34937_35022[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34925 === (46))){
var inst_34919 = (state_34924[(2)]);
var state_34924__$1 = state_34924;
var statearr_34938_35023 = state_34924__$1;
(statearr_34938_35023[(2)] = inst_34919);

(statearr_34938_35023[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34925 === (4))){
var inst_34822 = (state_34924[(2)]);
var inst_34823 = cljs.core.List.EMPTY;
var inst_34824 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_34823);
var inst_34825 = (function (){return ((function (inst_34822,inst_34823,inst_34824,state_val_34925,c__29473__auto__,map__34770,map__34770__$1,opts,before_jsload,on_jsload,reload_dependents,map__34771,map__34771__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__34520_SHARP_){
var and__26536__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__34520_SHARP_);
if(cljs.core.truth_(and__26536__auto__)){
return (cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__34520_SHARP_))) && (cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,p1__34520_SHARP_)));
} else {
return and__26536__auto__;
}
});
;})(inst_34822,inst_34823,inst_34824,state_val_34925,c__29473__auto__,map__34770,map__34770__$1,opts,before_jsload,on_jsload,reload_dependents,map__34771,map__34771__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_34826 = cljs.core.filter.call(null,inst_34825,files);
var inst_34827 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_34828 = cljs.core.concat.call(null,inst_34826,inst_34827);
var state_34924__$1 = (function (){var statearr_34939 = state_34924;
(statearr_34939[(17)] = inst_34824);

(statearr_34939[(12)] = inst_34828);

(statearr_34939[(18)] = inst_34822);

return statearr_34939;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_34940_35024 = state_34924__$1;
(statearr_34940_35024[(1)] = (16));

} else {
var statearr_34941_35025 = state_34924__$1;
(statearr_34941_35025[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34925 === (15))){
var inst_34812 = (state_34924[(2)]);
var state_34924__$1 = state_34924;
var statearr_34942_35026 = state_34924__$1;
(statearr_34942_35026[(2)] = inst_34812);

(statearr_34942_35026[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34925 === (21))){
var inst_34838 = (state_34924[(19)]);
var inst_34838__$1 = (state_34924[(2)]);
var inst_34839 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_34838__$1);
var state_34924__$1 = (function (){var statearr_34943 = state_34924;
(statearr_34943[(19)] = inst_34838__$1);

return statearr_34943;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34924__$1,(22),inst_34839);
} else {
if((state_val_34925 === (31))){
var inst_34922 = (state_34924[(2)]);
var state_34924__$1 = state_34924;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34924__$1,inst_34922);
} else {
if((state_val_34925 === (32))){
var inst_34878 = (state_34924[(16)]);
var inst_34883 = inst_34878.cljs$lang$protocol_mask$partition0$;
var inst_34884 = (inst_34883 & (64));
var inst_34885 = inst_34878.cljs$core$ISeq$;
var inst_34886 = (inst_34884) || (inst_34885);
var state_34924__$1 = state_34924;
if(cljs.core.truth_(inst_34886)){
var statearr_34944_35027 = state_34924__$1;
(statearr_34944_35027[(1)] = (35));

} else {
var statearr_34945_35028 = state_34924__$1;
(statearr_34945_35028[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34925 === (40))){
var inst_34899 = (state_34924[(20)]);
var inst_34898 = (state_34924[(2)]);
var inst_34899__$1 = cljs.core.get.call(null,inst_34898,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_34900 = cljs.core.get.call(null,inst_34898,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_34901 = cljs.core.not_empty.call(null,inst_34899__$1);
var state_34924__$1 = (function (){var statearr_34946 = state_34924;
(statearr_34946[(20)] = inst_34899__$1);

(statearr_34946[(21)] = inst_34900);

return statearr_34946;
})();
if(cljs.core.truth_(inst_34901)){
var statearr_34947_35029 = state_34924__$1;
(statearr_34947_35029[(1)] = (41));

} else {
var statearr_34948_35030 = state_34924__$1;
(statearr_34948_35030[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34925 === (33))){
var state_34924__$1 = state_34924;
var statearr_34949_35031 = state_34924__$1;
(statearr_34949_35031[(2)] = false);

(statearr_34949_35031[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34925 === (13))){
var inst_34798 = (state_34924[(22)]);
var inst_34802 = cljs.core.chunk_first.call(null,inst_34798);
var inst_34803 = cljs.core.chunk_rest.call(null,inst_34798);
var inst_34804 = cljs.core.count.call(null,inst_34802);
var inst_34785 = inst_34803;
var inst_34786 = inst_34802;
var inst_34787 = inst_34804;
var inst_34788 = (0);
var state_34924__$1 = (function (){var statearr_34950 = state_34924;
(statearr_34950[(7)] = inst_34787);

(statearr_34950[(8)] = inst_34788);

(statearr_34950[(9)] = inst_34786);

(statearr_34950[(10)] = inst_34785);

return statearr_34950;
})();
var statearr_34951_35032 = state_34924__$1;
(statearr_34951_35032[(2)] = null);

(statearr_34951_35032[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34925 === (22))){
var inst_34846 = (state_34924[(23)]);
var inst_34841 = (state_34924[(24)]);
var inst_34838 = (state_34924[(19)]);
var inst_34842 = (state_34924[(25)]);
var inst_34841__$1 = (state_34924[(2)]);
var inst_34842__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_34841__$1);
var inst_34843 = (function (){var all_files = inst_34838;
var res_SINGLEQUOTE_ = inst_34841__$1;
var res = inst_34842__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_34846,inst_34841,inst_34838,inst_34842,inst_34841__$1,inst_34842__$1,state_val_34925,c__29473__auto__,map__34770,map__34770__$1,opts,before_jsload,on_jsload,reload_dependents,map__34771,map__34771__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__34521_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__34521_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_34846,inst_34841,inst_34838,inst_34842,inst_34841__$1,inst_34842__$1,state_val_34925,c__29473__auto__,map__34770,map__34770__$1,opts,before_jsload,on_jsload,reload_dependents,map__34771,map__34771__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_34844 = cljs.core.filter.call(null,inst_34843,inst_34841__$1);
var inst_34845 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_34846__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_34845);
var inst_34847 = cljs.core.not_empty.call(null,inst_34846__$1);
var state_34924__$1 = (function (){var statearr_34952 = state_34924;
(statearr_34952[(26)] = inst_34844);

(statearr_34952[(23)] = inst_34846__$1);

(statearr_34952[(24)] = inst_34841__$1);

(statearr_34952[(25)] = inst_34842__$1);

return statearr_34952;
})();
if(cljs.core.truth_(inst_34847)){
var statearr_34953_35033 = state_34924__$1;
(statearr_34953_35033[(1)] = (23));

} else {
var statearr_34954_35034 = state_34924__$1;
(statearr_34954_35034[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34925 === (36))){
var state_34924__$1 = state_34924;
var statearr_34955_35035 = state_34924__$1;
(statearr_34955_35035[(2)] = false);

(statearr_34955_35035[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34925 === (41))){
var inst_34899 = (state_34924[(20)]);
var inst_34903 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_34904 = cljs.core.map.call(null,inst_34903,inst_34899);
var inst_34905 = cljs.core.pr_str.call(null,inst_34904);
var inst_34906 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_34905)].join('');
var inst_34907 = figwheel.client.utils.log.call(null,inst_34906);
var state_34924__$1 = state_34924;
var statearr_34956_35036 = state_34924__$1;
(statearr_34956_35036[(2)] = inst_34907);

(statearr_34956_35036[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34925 === (43))){
var inst_34900 = (state_34924[(21)]);
var inst_34910 = (state_34924[(2)]);
var inst_34911 = cljs.core.not_empty.call(null,inst_34900);
var state_34924__$1 = (function (){var statearr_34957 = state_34924;
(statearr_34957[(27)] = inst_34910);

return statearr_34957;
})();
if(cljs.core.truth_(inst_34911)){
var statearr_34958_35037 = state_34924__$1;
(statearr_34958_35037[(1)] = (44));

} else {
var statearr_34959_35038 = state_34924__$1;
(statearr_34959_35038[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34925 === (29))){
var inst_34844 = (state_34924[(26)]);
var inst_34846 = (state_34924[(23)]);
var inst_34878 = (state_34924[(16)]);
var inst_34841 = (state_34924[(24)]);
var inst_34838 = (state_34924[(19)]);
var inst_34842 = (state_34924[(25)]);
var inst_34874 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_34877 = (function (){var all_files = inst_34838;
var res_SINGLEQUOTE_ = inst_34841;
var res = inst_34842;
var files_not_loaded = inst_34844;
var dependencies_that_loaded = inst_34846;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_34844,inst_34846,inst_34878,inst_34841,inst_34838,inst_34842,inst_34874,state_val_34925,c__29473__auto__,map__34770,map__34770__$1,opts,before_jsload,on_jsload,reload_dependents,map__34771,map__34771__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__34876){
var map__34960 = p__34876;
var map__34960__$1 = ((((!((map__34960 == null)))?((((map__34960.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34960.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34960):map__34960);
var namespace = cljs.core.get.call(null,map__34960__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_data = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.truth_(meta_data.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179)))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_34844,inst_34846,inst_34878,inst_34841,inst_34838,inst_34842,inst_34874,state_val_34925,c__29473__auto__,map__34770,map__34770__$1,opts,before_jsload,on_jsload,reload_dependents,map__34771,map__34771__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_34878__$1 = cljs.core.group_by.call(null,inst_34877,inst_34844);
var inst_34880 = (inst_34878__$1 == null);
var inst_34881 = cljs.core.not.call(null,inst_34880);
var state_34924__$1 = (function (){var statearr_34962 = state_34924;
(statearr_34962[(28)] = inst_34874);

(statearr_34962[(16)] = inst_34878__$1);

return statearr_34962;
})();
if(inst_34881){
var statearr_34963_35039 = state_34924__$1;
(statearr_34963_35039[(1)] = (32));

} else {
var statearr_34964_35040 = state_34924__$1;
(statearr_34964_35040[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34925 === (44))){
var inst_34900 = (state_34924[(21)]);
var inst_34913 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_34900);
var inst_34914 = cljs.core.pr_str.call(null,inst_34913);
var inst_34915 = [cljs.core.str("not required: "),cljs.core.str(inst_34914)].join('');
var inst_34916 = figwheel.client.utils.log.call(null,inst_34915);
var state_34924__$1 = state_34924;
var statearr_34965_35041 = state_34924__$1;
(statearr_34965_35041[(2)] = inst_34916);

(statearr_34965_35041[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34925 === (6))){
var inst_34819 = (state_34924[(2)]);
var state_34924__$1 = state_34924;
var statearr_34966_35042 = state_34924__$1;
(statearr_34966_35042[(2)] = inst_34819);

(statearr_34966_35042[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34925 === (28))){
var inst_34844 = (state_34924[(26)]);
var inst_34871 = (state_34924[(2)]);
var inst_34872 = cljs.core.not_empty.call(null,inst_34844);
var state_34924__$1 = (function (){var statearr_34967 = state_34924;
(statearr_34967[(29)] = inst_34871);

return statearr_34967;
})();
if(cljs.core.truth_(inst_34872)){
var statearr_34968_35043 = state_34924__$1;
(statearr_34968_35043[(1)] = (29));

} else {
var statearr_34969_35044 = state_34924__$1;
(statearr_34969_35044[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34925 === (25))){
var inst_34842 = (state_34924[(25)]);
var inst_34858 = (state_34924[(2)]);
var inst_34859 = cljs.core.not_empty.call(null,inst_34842);
var state_34924__$1 = (function (){var statearr_34970 = state_34924;
(statearr_34970[(30)] = inst_34858);

return statearr_34970;
})();
if(cljs.core.truth_(inst_34859)){
var statearr_34971_35045 = state_34924__$1;
(statearr_34971_35045[(1)] = (26));

} else {
var statearr_34972_35046 = state_34924__$1;
(statearr_34972_35046[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34925 === (34))){
var inst_34893 = (state_34924[(2)]);
var state_34924__$1 = state_34924;
if(cljs.core.truth_(inst_34893)){
var statearr_34973_35047 = state_34924__$1;
(statearr_34973_35047[(1)] = (38));

} else {
var statearr_34974_35048 = state_34924__$1;
(statearr_34974_35048[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34925 === (17))){
var state_34924__$1 = state_34924;
var statearr_34975_35049 = state_34924__$1;
(statearr_34975_35049[(2)] = recompile_dependents);

(statearr_34975_35049[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34925 === (3))){
var state_34924__$1 = state_34924;
var statearr_34976_35050 = state_34924__$1;
(statearr_34976_35050[(2)] = null);

(statearr_34976_35050[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34925 === (12))){
var inst_34815 = (state_34924[(2)]);
var state_34924__$1 = state_34924;
var statearr_34977_35051 = state_34924__$1;
(statearr_34977_35051[(2)] = inst_34815);

(statearr_34977_35051[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34925 === (2))){
var inst_34777 = (state_34924[(13)]);
var inst_34784 = cljs.core.seq.call(null,inst_34777);
var inst_34785 = inst_34784;
var inst_34786 = null;
var inst_34787 = (0);
var inst_34788 = (0);
var state_34924__$1 = (function (){var statearr_34978 = state_34924;
(statearr_34978[(7)] = inst_34787);

(statearr_34978[(8)] = inst_34788);

(statearr_34978[(9)] = inst_34786);

(statearr_34978[(10)] = inst_34785);

return statearr_34978;
})();
var statearr_34979_35052 = state_34924__$1;
(statearr_34979_35052[(2)] = null);

(statearr_34979_35052[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34925 === (23))){
var inst_34844 = (state_34924[(26)]);
var inst_34846 = (state_34924[(23)]);
var inst_34841 = (state_34924[(24)]);
var inst_34838 = (state_34924[(19)]);
var inst_34842 = (state_34924[(25)]);
var inst_34849 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_34851 = (function (){var all_files = inst_34838;
var res_SINGLEQUOTE_ = inst_34841;
var res = inst_34842;
var files_not_loaded = inst_34844;
var dependencies_that_loaded = inst_34846;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_34844,inst_34846,inst_34841,inst_34838,inst_34842,inst_34849,state_val_34925,c__29473__auto__,map__34770,map__34770__$1,opts,before_jsload,on_jsload,reload_dependents,map__34771,map__34771__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__34850){
var map__34980 = p__34850;
var map__34980__$1 = ((((!((map__34980 == null)))?((((map__34980.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34980.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34980):map__34980);
var request_url = cljs.core.get.call(null,map__34980__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_34844,inst_34846,inst_34841,inst_34838,inst_34842,inst_34849,state_val_34925,c__29473__auto__,map__34770,map__34770__$1,opts,before_jsload,on_jsload,reload_dependents,map__34771,map__34771__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_34852 = cljs.core.reverse.call(null,inst_34846);
var inst_34853 = cljs.core.map.call(null,inst_34851,inst_34852);
var inst_34854 = cljs.core.pr_str.call(null,inst_34853);
var inst_34855 = figwheel.client.utils.log.call(null,inst_34854);
var state_34924__$1 = (function (){var statearr_34982 = state_34924;
(statearr_34982[(31)] = inst_34849);

return statearr_34982;
})();
var statearr_34983_35053 = state_34924__$1;
(statearr_34983_35053[(2)] = inst_34855);

(statearr_34983_35053[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34925 === (35))){
var state_34924__$1 = state_34924;
var statearr_34984_35054 = state_34924__$1;
(statearr_34984_35054[(2)] = true);

(statearr_34984_35054[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34925 === (19))){
var inst_34828 = (state_34924[(12)]);
var inst_34834 = figwheel.client.file_reloading.expand_files.call(null,inst_34828);
var state_34924__$1 = state_34924;
var statearr_34985_35055 = state_34924__$1;
(statearr_34985_35055[(2)] = inst_34834);

(statearr_34985_35055[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34925 === (11))){
var state_34924__$1 = state_34924;
var statearr_34986_35056 = state_34924__$1;
(statearr_34986_35056[(2)] = null);

(statearr_34986_35056[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34925 === (9))){
var inst_34817 = (state_34924[(2)]);
var state_34924__$1 = state_34924;
var statearr_34987_35057 = state_34924__$1;
(statearr_34987_35057[(2)] = inst_34817);

(statearr_34987_35057[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34925 === (5))){
var inst_34787 = (state_34924[(7)]);
var inst_34788 = (state_34924[(8)]);
var inst_34790 = (inst_34788 < inst_34787);
var inst_34791 = inst_34790;
var state_34924__$1 = state_34924;
if(cljs.core.truth_(inst_34791)){
var statearr_34988_35058 = state_34924__$1;
(statearr_34988_35058[(1)] = (7));

} else {
var statearr_34989_35059 = state_34924__$1;
(statearr_34989_35059[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34925 === (14))){
var inst_34798 = (state_34924[(22)]);
var inst_34807 = cljs.core.first.call(null,inst_34798);
var inst_34808 = figwheel.client.file_reloading.eval_body.call(null,inst_34807,opts);
var inst_34809 = cljs.core.next.call(null,inst_34798);
var inst_34785 = inst_34809;
var inst_34786 = null;
var inst_34787 = (0);
var inst_34788 = (0);
var state_34924__$1 = (function (){var statearr_34990 = state_34924;
(statearr_34990[(7)] = inst_34787);

(statearr_34990[(32)] = inst_34808);

(statearr_34990[(8)] = inst_34788);

(statearr_34990[(9)] = inst_34786);

(statearr_34990[(10)] = inst_34785);

return statearr_34990;
})();
var statearr_34991_35060 = state_34924__$1;
(statearr_34991_35060[(2)] = null);

(statearr_34991_35060[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34925 === (45))){
var state_34924__$1 = state_34924;
var statearr_34992_35061 = state_34924__$1;
(statearr_34992_35061[(2)] = null);

(statearr_34992_35061[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34925 === (26))){
var inst_34844 = (state_34924[(26)]);
var inst_34846 = (state_34924[(23)]);
var inst_34841 = (state_34924[(24)]);
var inst_34838 = (state_34924[(19)]);
var inst_34842 = (state_34924[(25)]);
var inst_34861 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_34863 = (function (){var all_files = inst_34838;
var res_SINGLEQUOTE_ = inst_34841;
var res = inst_34842;
var files_not_loaded = inst_34844;
var dependencies_that_loaded = inst_34846;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_34844,inst_34846,inst_34841,inst_34838,inst_34842,inst_34861,state_val_34925,c__29473__auto__,map__34770,map__34770__$1,opts,before_jsload,on_jsload,reload_dependents,map__34771,map__34771__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__34862){
var map__34993 = p__34862;
var map__34993__$1 = ((((!((map__34993 == null)))?((((map__34993.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34993.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34993):map__34993);
var namespace = cljs.core.get.call(null,map__34993__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__34993__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_34844,inst_34846,inst_34841,inst_34838,inst_34842,inst_34861,state_val_34925,c__29473__auto__,map__34770,map__34770__$1,opts,before_jsload,on_jsload,reload_dependents,map__34771,map__34771__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_34864 = cljs.core.map.call(null,inst_34863,inst_34842);
var inst_34865 = cljs.core.pr_str.call(null,inst_34864);
var inst_34866 = figwheel.client.utils.log.call(null,inst_34865);
var inst_34867 = (function (){var all_files = inst_34838;
var res_SINGLEQUOTE_ = inst_34841;
var res = inst_34842;
var files_not_loaded = inst_34844;
var dependencies_that_loaded = inst_34846;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_34844,inst_34846,inst_34841,inst_34838,inst_34842,inst_34861,inst_34863,inst_34864,inst_34865,inst_34866,state_val_34925,c__29473__auto__,map__34770,map__34770__$1,opts,before_jsload,on_jsload,reload_dependents,map__34771,map__34771__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_34844,inst_34846,inst_34841,inst_34838,inst_34842,inst_34861,inst_34863,inst_34864,inst_34865,inst_34866,state_val_34925,c__29473__auto__,map__34770,map__34770__$1,opts,before_jsload,on_jsload,reload_dependents,map__34771,map__34771__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_34868 = setTimeout(inst_34867,(10));
var state_34924__$1 = (function (){var statearr_34995 = state_34924;
(statearr_34995[(33)] = inst_34866);

(statearr_34995[(34)] = inst_34861);

return statearr_34995;
})();
var statearr_34996_35062 = state_34924__$1;
(statearr_34996_35062[(2)] = inst_34868);

(statearr_34996_35062[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34925 === (16))){
var state_34924__$1 = state_34924;
var statearr_34997_35063 = state_34924__$1;
(statearr_34997_35063[(2)] = reload_dependents);

(statearr_34997_35063[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34925 === (38))){
var inst_34878 = (state_34924[(16)]);
var inst_34895 = cljs.core.apply.call(null,cljs.core.hash_map,inst_34878);
var state_34924__$1 = state_34924;
var statearr_34998_35064 = state_34924__$1;
(statearr_34998_35064[(2)] = inst_34895);

(statearr_34998_35064[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34925 === (30))){
var state_34924__$1 = state_34924;
var statearr_34999_35065 = state_34924__$1;
(statearr_34999_35065[(2)] = null);

(statearr_34999_35065[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34925 === (10))){
var inst_34798 = (state_34924[(22)]);
var inst_34800 = cljs.core.chunked_seq_QMARK_.call(null,inst_34798);
var state_34924__$1 = state_34924;
if(inst_34800){
var statearr_35000_35066 = state_34924__$1;
(statearr_35000_35066[(1)] = (13));

} else {
var statearr_35001_35067 = state_34924__$1;
(statearr_35001_35067[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34925 === (18))){
var inst_34832 = (state_34924[(2)]);
var state_34924__$1 = state_34924;
if(cljs.core.truth_(inst_34832)){
var statearr_35002_35068 = state_34924__$1;
(statearr_35002_35068[(1)] = (19));

} else {
var statearr_35003_35069 = state_34924__$1;
(statearr_35003_35069[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34925 === (42))){
var state_34924__$1 = state_34924;
var statearr_35004_35070 = state_34924__$1;
(statearr_35004_35070[(2)] = null);

(statearr_35004_35070[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34925 === (37))){
var inst_34890 = (state_34924[(2)]);
var state_34924__$1 = state_34924;
var statearr_35005_35071 = state_34924__$1;
(statearr_35005_35071[(2)] = inst_34890);

(statearr_35005_35071[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34925 === (8))){
var inst_34798 = (state_34924[(22)]);
var inst_34785 = (state_34924[(10)]);
var inst_34798__$1 = cljs.core.seq.call(null,inst_34785);
var state_34924__$1 = (function (){var statearr_35006 = state_34924;
(statearr_35006[(22)] = inst_34798__$1);

return statearr_35006;
})();
if(inst_34798__$1){
var statearr_35007_35072 = state_34924__$1;
(statearr_35007_35072[(1)] = (10));

} else {
var statearr_35008_35073 = state_34924__$1;
(statearr_35008_35073[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__29473__auto__,map__34770,map__34770__$1,opts,before_jsload,on_jsload,reload_dependents,map__34771,map__34771__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__29361__auto__,c__29473__auto__,map__34770,map__34770__$1,opts,before_jsload,on_jsload,reload_dependents,map__34771,map__34771__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__29362__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__29362__auto____0 = (function (){
var statearr_35012 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35012[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__29362__auto__);

(statearr_35012[(1)] = (1));

return statearr_35012;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__29362__auto____1 = (function (state_34924){
while(true){
var ret_value__29363__auto__ = (function (){try{while(true){
var result__29364__auto__ = switch__29361__auto__.call(null,state_34924);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29364__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29364__auto__;
}
break;
}
}catch (e35013){if((e35013 instanceof Object)){
var ex__29365__auto__ = e35013;
var statearr_35014_35074 = state_34924;
(statearr_35014_35074[(5)] = ex__29365__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34924);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35013;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29363__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35075 = state_34924;
state_34924 = G__35075;
continue;
} else {
return ret_value__29363__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__29362__auto__ = function(state_34924){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__29362__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__29362__auto____1.call(this,state_34924);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__29362__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__29362__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__29362__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__29362__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__29362__auto__;
})()
;})(switch__29361__auto__,c__29473__auto__,map__34770,map__34770__$1,opts,before_jsload,on_jsload,reload_dependents,map__34771,map__34771__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__29475__auto__ = (function (){var statearr_35015 = f__29474__auto__.call(null);
(statearr_35015[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29473__auto__);

return statearr_35015;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29475__auto__);
});})(c__29473__auto__,map__34770,map__34770__$1,opts,before_jsload,on_jsload,reload_dependents,map__34771,map__34771__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__29473__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__35078,link){
var map__35081 = p__35078;
var map__35081__$1 = ((((!((map__35081 == null)))?((((map__35081.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35081.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35081):map__35081);
var file = cljs.core.get.call(null,map__35081__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = link.href;
if(cljs.core.truth_(temp__4657__auto__)){
var link_href = temp__4657__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4657__auto__,map__35081,map__35081__$1,file){
return (function (p1__35076_SHARP_,p2__35077_SHARP_){
if(cljs.core._EQ_.call(null,p1__35076_SHARP_,p2__35077_SHARP_)){
return p1__35076_SHARP_;
} else {
return false;
}
});})(link_href,temp__4657__auto__,map__35081,map__35081__$1,file))
,cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href),"/")))));
var match_length = cljs.core.count.call(null,match);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-href","link-href",-250644450),link_href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),cljs.core.count.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href))], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function figwheel$client$file_reloading$get_correct_link(f_data){
var temp__4657__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__35087){
var map__35088 = p__35087;
var map__35088__$1 = ((((!((map__35088 == null)))?((((map__35088.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35088.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35088):map__35088);
var match_length = cljs.core.get.call(null,map__35088__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__35088__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__35083_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__35083_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__4657__auto__)){
var res = temp__4657__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function figwheel$client$file_reloading$clone_link(link,url){
var clone = document.createElement("link");
clone.rel = "stylesheet";

clone.media = link.media;

clone.disabled = link.disabled;

clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return clone;
});
figwheel.client.file_reloading.create_link = (function figwheel$client$file_reloading$create_link(url){
var link = document.createElement("link");
link.rel = "stylesheet";

link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return link;
});
figwheel.client.file_reloading.distinctify = (function figwheel$client$file_reloading$distinctify(key,seqq){
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__35090_SHARP_,p2__35091_SHARP_){
return cljs.core.assoc.call(null,p1__35090_SHARP_,cljs.core.get.call(null,p2__35091_SHARP_,key),p2__35091_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.add_link_to_document = (function figwheel$client$file_reloading$add_link_to_document(orig_link,klone,finished_fn){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout(((function (parent){
return (function (){
parent.removeChild(orig_link);

return finished_fn.call(null);
});})(parent))
,(300));
});
if(typeof figwheel.client.file_reloading.reload_css_deferred_chain !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_css_deferred_chain = cljs.core.atom.call(null,goog.async.Deferred.succeed());
}
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(f_data,fin){
var temp__4655__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4655__auto__)){
var link = temp__4655__auto__;
return figwheel.client.file_reloading.add_link_to_document.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href),((function (link,temp__4655__auto__){
return (function (){
return fin.call(null,cljs.core.assoc.call(null,f_data,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),true));
});})(link,temp__4655__auto__))
);
} else {
return fin.call(null,f_data);
}
});
figwheel.client.file_reloading.reload_css_files_STAR_ = (function figwheel$client$file_reloading$reload_css_files_STAR_(deferred,f_datas,on_cssload){
return figwheel.client.utils.liftContD.call(null,figwheel.client.utils.mapConcatD.call(null,deferred,figwheel.client.file_reloading.reload_css_file,f_datas),(function (f_datas_SINGLEQUOTE_,fin){
var loaded_f_datas_35092 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),f_datas_SINGLEQUOTE_);
figwheel.client.file_reloading.on_cssload_custom_event.call(null,loaded_f_datas_35092);

if(cljs.core.fn_QMARK_.call(null,on_cssload)){
on_cssload.call(null,loaded_f_datas_35092);
} else {
}

return fin.call(null);
}));
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__35093,p__35094){
var map__35099 = p__35093;
var map__35099__$1 = ((((!((map__35099 == null)))?((((map__35099.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35099.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35099):map__35099);
var on_cssload = cljs.core.get.call(null,map__35099__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var map__35100 = p__35094;
var map__35100__$1 = ((((!((map__35100 == null)))?((((map__35100.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35100.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35100):map__35100);
var files_msg = map__35100__$1;
var files = cljs.core.get.call(null,map__35100__$1,new cljs.core.Keyword(null,"files","files",-472457450));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var temp__4657__auto__ = cljs.core.not_empty.call(null,figwheel.client.file_reloading.distinctify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files));
if(cljs.core.truth_(temp__4657__auto__)){
var f_datas = temp__4657__auto__;
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.reload_css_deferred_chain,figwheel.client.file_reloading.reload_css_files_STAR_,f_datas,on_cssload);
} else {
return null;
}
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1496160787229