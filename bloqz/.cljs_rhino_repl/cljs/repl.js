// Compiled by ClojureScript 1.9.229 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__41363){
var map__41388 = p__41363;
var map__41388__$1 = ((((!((map__41388 == null)))?((((map__41388.cljs$lang$protocol_mask$partition0$ & (64))) || (map__41388.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41388):map__41388);
var m = map__41388__$1;
var n = cljs.core.get.call(null,map__41388__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__41388__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str((function (){var temp__4657__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4657__auto__)){
var ns = temp__4657__auto__;
return [cljs.core.str(ns),cljs.core.str("/")].join('');
} else {
return null;
}
})()),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__41390_41412 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__41391_41413 = null;
var count__41392_41414 = (0);
var i__41393_41415 = (0);
while(true){
if((i__41393_41415 < count__41392_41414)){
var f_41416 = cljs.core._nth.call(null,chunk__41391_41413,i__41393_41415);
cljs.core.println.call(null,"  ",f_41416);

var G__41417 = seq__41390_41412;
var G__41418 = chunk__41391_41413;
var G__41419 = count__41392_41414;
var G__41420 = (i__41393_41415 + (1));
seq__41390_41412 = G__41417;
chunk__41391_41413 = G__41418;
count__41392_41414 = G__41419;
i__41393_41415 = G__41420;
continue;
} else {
var temp__4657__auto___41421 = cljs.core.seq.call(null,seq__41390_41412);
if(temp__4657__auto___41421){
var seq__41390_41422__$1 = temp__4657__auto___41421;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__41390_41422__$1)){
var c__27359__auto___41423 = cljs.core.chunk_first.call(null,seq__41390_41422__$1);
var G__41424 = cljs.core.chunk_rest.call(null,seq__41390_41422__$1);
var G__41425 = c__27359__auto___41423;
var G__41426 = cljs.core.count.call(null,c__27359__auto___41423);
var G__41427 = (0);
seq__41390_41412 = G__41424;
chunk__41391_41413 = G__41425;
count__41392_41414 = G__41426;
i__41393_41415 = G__41427;
continue;
} else {
var f_41428 = cljs.core.first.call(null,seq__41390_41422__$1);
cljs.core.println.call(null,"  ",f_41428);

var G__41429 = cljs.core.next.call(null,seq__41390_41422__$1);
var G__41430 = null;
var G__41431 = (0);
var G__41432 = (0);
seq__41390_41412 = G__41429;
chunk__41391_41413 = G__41430;
count__41392_41414 = G__41431;
i__41393_41415 = G__41432;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_41433 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__26548__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__26548__auto__)){
return or__26548__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_41433);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_41433)))?cljs.core.second.call(null,arglists_41433):arglists_41433));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/"),cljs.core.str(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/special_forms#"),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__41394_41434 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__41395_41435 = null;
var count__41396_41436 = (0);
var i__41397_41437 = (0);
while(true){
if((i__41397_41437 < count__41396_41436)){
var vec__41398_41438 = cljs.core._nth.call(null,chunk__41395_41435,i__41397_41437);
var name_41439 = cljs.core.nth.call(null,vec__41398_41438,(0),null);
var map__41401_41440 = cljs.core.nth.call(null,vec__41398_41438,(1),null);
var map__41401_41441__$1 = ((((!((map__41401_41440 == null)))?((((map__41401_41440.cljs$lang$protocol_mask$partition0$ & (64))) || (map__41401_41440.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41401_41440):map__41401_41440);
var doc_41442 = cljs.core.get.call(null,map__41401_41441__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_41443 = cljs.core.get.call(null,map__41401_41441__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_41439);

cljs.core.println.call(null," ",arglists_41443);

if(cljs.core.truth_(doc_41442)){
cljs.core.println.call(null," ",doc_41442);
} else {
}

var G__41444 = seq__41394_41434;
var G__41445 = chunk__41395_41435;
var G__41446 = count__41396_41436;
var G__41447 = (i__41397_41437 + (1));
seq__41394_41434 = G__41444;
chunk__41395_41435 = G__41445;
count__41396_41436 = G__41446;
i__41397_41437 = G__41447;
continue;
} else {
var temp__4657__auto___41448 = cljs.core.seq.call(null,seq__41394_41434);
if(temp__4657__auto___41448){
var seq__41394_41449__$1 = temp__4657__auto___41448;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__41394_41449__$1)){
var c__27359__auto___41450 = cljs.core.chunk_first.call(null,seq__41394_41449__$1);
var G__41451 = cljs.core.chunk_rest.call(null,seq__41394_41449__$1);
var G__41452 = c__27359__auto___41450;
var G__41453 = cljs.core.count.call(null,c__27359__auto___41450);
var G__41454 = (0);
seq__41394_41434 = G__41451;
chunk__41395_41435 = G__41452;
count__41396_41436 = G__41453;
i__41397_41437 = G__41454;
continue;
} else {
var vec__41403_41455 = cljs.core.first.call(null,seq__41394_41449__$1);
var name_41456 = cljs.core.nth.call(null,vec__41403_41455,(0),null);
var map__41406_41457 = cljs.core.nth.call(null,vec__41403_41455,(1),null);
var map__41406_41458__$1 = ((((!((map__41406_41457 == null)))?((((map__41406_41457.cljs$lang$protocol_mask$partition0$ & (64))) || (map__41406_41457.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41406_41457):map__41406_41457);
var doc_41459 = cljs.core.get.call(null,map__41406_41458__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_41460 = cljs.core.get.call(null,map__41406_41458__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_41456);

cljs.core.println.call(null," ",arglists_41460);

if(cljs.core.truth_(doc_41459)){
cljs.core.println.call(null," ",doc_41459);
} else {
}

var G__41461 = cljs.core.next.call(null,seq__41394_41449__$1);
var G__41462 = null;
var G__41463 = (0);
var G__41464 = (0);
seq__41394_41434 = G__41461;
chunk__41395_41435 = G__41462;
count__41396_41436 = G__41463;
i__41397_41437 = G__41464;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__4657__auto__ = cljs.spec.get_spec.call(null,cljs.core.symbol.call(null,[cljs.core.str(cljs.core.ns_name.call(null,n))].join(''),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__4657__auto__)){
var fnspec = temp__4657__auto__;
cljs.core.print.call(null,"Spec");

var seq__41408 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__41409 = null;
var count__41410 = (0);
var i__41411 = (0);
while(true){
if((i__41411 < count__41410)){
var role = cljs.core._nth.call(null,chunk__41409,i__41411);
var temp__4657__auto___41465__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___41465__$1)){
var spec_41466 = temp__4657__auto___41465__$1;
cljs.core.print.call(null,[cljs.core.str("\n "),cljs.core.str(cljs.core.name.call(null,role)),cljs.core.str(":")].join(''),cljs.spec.describe.call(null,spec_41466));
} else {
}

var G__41467 = seq__41408;
var G__41468 = chunk__41409;
var G__41469 = count__41410;
var G__41470 = (i__41411 + (1));
seq__41408 = G__41467;
chunk__41409 = G__41468;
count__41410 = G__41469;
i__41411 = G__41470;
continue;
} else {
var temp__4657__auto____$1 = cljs.core.seq.call(null,seq__41408);
if(temp__4657__auto____$1){
var seq__41408__$1 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__41408__$1)){
var c__27359__auto__ = cljs.core.chunk_first.call(null,seq__41408__$1);
var G__41471 = cljs.core.chunk_rest.call(null,seq__41408__$1);
var G__41472 = c__27359__auto__;
var G__41473 = cljs.core.count.call(null,c__27359__auto__);
var G__41474 = (0);
seq__41408 = G__41471;
chunk__41409 = G__41472;
count__41410 = G__41473;
i__41411 = G__41474;
continue;
} else {
var role = cljs.core.first.call(null,seq__41408__$1);
var temp__4657__auto___41475__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___41475__$2)){
var spec_41476 = temp__4657__auto___41475__$2;
cljs.core.print.call(null,[cljs.core.str("\n "),cljs.core.str(cljs.core.name.call(null,role)),cljs.core.str(":")].join(''),cljs.spec.describe.call(null,spec_41476));
} else {
}

var G__41477 = cljs.core.next.call(null,seq__41408__$1);
var G__41478 = null;
var G__41479 = (0);
var G__41480 = (0);
seq__41408 = G__41477;
chunk__41409 = G__41478;
count__41410 = G__41479;
i__41411 = G__41480;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map