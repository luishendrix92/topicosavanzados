// Compiled by ClojureScript 1.9.229 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__36402){
var map__36427 = p__36402;
var map__36427__$1 = ((((!((map__36427 == null)))?((((map__36427.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36427.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36427):map__36427);
var m = map__36427__$1;
var n = cljs.core.get.call(null,map__36427__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__36427__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
var seq__36429_36451 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__36430_36452 = null;
var count__36431_36453 = (0);
var i__36432_36454 = (0);
while(true){
if((i__36432_36454 < count__36431_36453)){
var f_36455 = cljs.core._nth.call(null,chunk__36430_36452,i__36432_36454);
cljs.core.println.call(null,"  ",f_36455);

var G__36456 = seq__36429_36451;
var G__36457 = chunk__36430_36452;
var G__36458 = count__36431_36453;
var G__36459 = (i__36432_36454 + (1));
seq__36429_36451 = G__36456;
chunk__36430_36452 = G__36457;
count__36431_36453 = G__36458;
i__36432_36454 = G__36459;
continue;
} else {
var temp__4657__auto___36460 = cljs.core.seq.call(null,seq__36429_36451);
if(temp__4657__auto___36460){
var seq__36429_36461__$1 = temp__4657__auto___36460;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36429_36461__$1)){
var c__27359__auto___36462 = cljs.core.chunk_first.call(null,seq__36429_36461__$1);
var G__36463 = cljs.core.chunk_rest.call(null,seq__36429_36461__$1);
var G__36464 = c__27359__auto___36462;
var G__36465 = cljs.core.count.call(null,c__27359__auto___36462);
var G__36466 = (0);
seq__36429_36451 = G__36463;
chunk__36430_36452 = G__36464;
count__36431_36453 = G__36465;
i__36432_36454 = G__36466;
continue;
} else {
var f_36467 = cljs.core.first.call(null,seq__36429_36461__$1);
cljs.core.println.call(null,"  ",f_36467);

var G__36468 = cljs.core.next.call(null,seq__36429_36461__$1);
var G__36469 = null;
var G__36470 = (0);
var G__36471 = (0);
seq__36429_36451 = G__36468;
chunk__36430_36452 = G__36469;
count__36431_36453 = G__36470;
i__36432_36454 = G__36471;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_36472 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__26548__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__26548__auto__)){
return or__26548__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_36472);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_36472)))?cljs.core.second.call(null,arglists_36472):arglists_36472));
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
var seq__36433_36473 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__36434_36474 = null;
var count__36435_36475 = (0);
var i__36436_36476 = (0);
while(true){
if((i__36436_36476 < count__36435_36475)){
var vec__36437_36477 = cljs.core._nth.call(null,chunk__36434_36474,i__36436_36476);
var name_36478 = cljs.core.nth.call(null,vec__36437_36477,(0),null);
var map__36440_36479 = cljs.core.nth.call(null,vec__36437_36477,(1),null);
var map__36440_36480__$1 = ((((!((map__36440_36479 == null)))?((((map__36440_36479.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36440_36479.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36440_36479):map__36440_36479);
var doc_36481 = cljs.core.get.call(null,map__36440_36480__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_36482 = cljs.core.get.call(null,map__36440_36480__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_36478);

cljs.core.println.call(null," ",arglists_36482);

if(cljs.core.truth_(doc_36481)){
cljs.core.println.call(null," ",doc_36481);
} else {
}

var G__36483 = seq__36433_36473;
var G__36484 = chunk__36434_36474;
var G__36485 = count__36435_36475;
var G__36486 = (i__36436_36476 + (1));
seq__36433_36473 = G__36483;
chunk__36434_36474 = G__36484;
count__36435_36475 = G__36485;
i__36436_36476 = G__36486;
continue;
} else {
var temp__4657__auto___36487 = cljs.core.seq.call(null,seq__36433_36473);
if(temp__4657__auto___36487){
var seq__36433_36488__$1 = temp__4657__auto___36487;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36433_36488__$1)){
var c__27359__auto___36489 = cljs.core.chunk_first.call(null,seq__36433_36488__$1);
var G__36490 = cljs.core.chunk_rest.call(null,seq__36433_36488__$1);
var G__36491 = c__27359__auto___36489;
var G__36492 = cljs.core.count.call(null,c__27359__auto___36489);
var G__36493 = (0);
seq__36433_36473 = G__36490;
chunk__36434_36474 = G__36491;
count__36435_36475 = G__36492;
i__36436_36476 = G__36493;
continue;
} else {
var vec__36442_36494 = cljs.core.first.call(null,seq__36433_36488__$1);
var name_36495 = cljs.core.nth.call(null,vec__36442_36494,(0),null);
var map__36445_36496 = cljs.core.nth.call(null,vec__36442_36494,(1),null);
var map__36445_36497__$1 = ((((!((map__36445_36496 == null)))?((((map__36445_36496.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36445_36496.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36445_36496):map__36445_36496);
var doc_36498 = cljs.core.get.call(null,map__36445_36497__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_36499 = cljs.core.get.call(null,map__36445_36497__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_36495);

cljs.core.println.call(null," ",arglists_36499);

if(cljs.core.truth_(doc_36498)){
cljs.core.println.call(null," ",doc_36498);
} else {
}

var G__36500 = cljs.core.next.call(null,seq__36433_36488__$1);
var G__36501 = null;
var G__36502 = (0);
var G__36503 = (0);
seq__36433_36473 = G__36500;
chunk__36434_36474 = G__36501;
count__36435_36475 = G__36502;
i__36436_36476 = G__36503;
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

var seq__36447 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__36448 = null;
var count__36449 = (0);
var i__36450 = (0);
while(true){
if((i__36450 < count__36449)){
var role = cljs.core._nth.call(null,chunk__36448,i__36450);
var temp__4657__auto___36504__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___36504__$1)){
var spec_36505 = temp__4657__auto___36504__$1;
cljs.core.print.call(null,[cljs.core.str("\n "),cljs.core.str(cljs.core.name.call(null,role)),cljs.core.str(":")].join(''),cljs.spec.describe.call(null,spec_36505));
} else {
}

var G__36506 = seq__36447;
var G__36507 = chunk__36448;
var G__36508 = count__36449;
var G__36509 = (i__36450 + (1));
seq__36447 = G__36506;
chunk__36448 = G__36507;
count__36449 = G__36508;
i__36450 = G__36509;
continue;
} else {
var temp__4657__auto____$1 = cljs.core.seq.call(null,seq__36447);
if(temp__4657__auto____$1){
var seq__36447__$1 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36447__$1)){
var c__27359__auto__ = cljs.core.chunk_first.call(null,seq__36447__$1);
var G__36510 = cljs.core.chunk_rest.call(null,seq__36447__$1);
var G__36511 = c__27359__auto__;
var G__36512 = cljs.core.count.call(null,c__27359__auto__);
var G__36513 = (0);
seq__36447 = G__36510;
chunk__36448 = G__36511;
count__36449 = G__36512;
i__36450 = G__36513;
continue;
} else {
var role = cljs.core.first.call(null,seq__36447__$1);
var temp__4657__auto___36514__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___36514__$2)){
var spec_36515 = temp__4657__auto___36514__$2;
cljs.core.print.call(null,[cljs.core.str("\n "),cljs.core.str(cljs.core.name.call(null,role)),cljs.core.str(":")].join(''),cljs.spec.describe.call(null,spec_36515));
} else {
}

var G__36516 = cljs.core.next.call(null,seq__36447__$1);
var G__36517 = null;
var G__36518 = (0);
var G__36519 = (0);
seq__36447 = G__36516;
chunk__36448 = G__36517;
count__36449 = G__36518;
i__36450 = G__36519;
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

//# sourceMappingURL=repl.js.map?rel=1496160789887