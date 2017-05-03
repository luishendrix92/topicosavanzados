// Compiled by ClojureScript 1.9.229 {}
goog.provide('bloqz.core');
goog.require('cljs.core');
goog.require('bloqz.logic');
goog.require('reagent.core');
bloqz.core.move = (function bloqz$core$move(direction){
return (function (evt){
var block = cljs.core.PersistentVector.EMPTY;
var destination = bloqz.core.offsets.call(null,direction).call(null,block);
return null;
});
});
bloqz.core.test_blocks = reagent.core.atom.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),(2),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"vertical","vertical",718696748),new cljs.core.Keyword(null,"x","x",2099068185),(3),new cljs.core.Keyword(null,"y","y",-1757859776),(0)], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),(1),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"vertical","vertical",718696748),new cljs.core.Keyword(null,"x","x",2099068185),(0),new cljs.core.Keyword(null,"y","y",-1757859776),(2)], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),(0),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"horizontal","horizontal",2062109475),new cljs.core.Keyword(null,"x","x",2099068185),(1),new cljs.core.Keyword(null,"y","y",-1757859776),(2)], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),(3),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"horizontal","horizontal",2062109475),new cljs.core.Keyword(null,"x","x",2099068185),(2),new cljs.core.Keyword(null,"y","y",-1757859776),(3)], null)], null));
bloqz.core.vertical_block = (function bloqz$core$vertical_block(x,y){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.vertb","div.vertb",1882366688),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"top","top",-1856271961),(y * (50)),new cljs.core.Keyword(null,"left","left",-399115937),(x * (50))], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.move-up","button.move-up",-1555191197),"U"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.move-down","button.move-down",1657360915),"D"], null)], null);
});
bloqz.core.horizontal_block = (function bloqz$core$horizontal_block(x,y){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.horb","div.horb",-1974043980),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"top","top",-1856271961),(y * (50)),new cljs.core.Keyword(null,"left","left",-399115937),(x * (50))], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.move-left","button.move-left",-404670428),"L"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.move-right","button.move-right",-1298500487),"R"], null)], null);
});
bloqz.core.main = (function bloqz$core$main(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.game","div.game",1488032861),(function (){var iter__27328__auto__ = (function bloqz$core$main_$_iter__29805(s__29806){
return (new cljs.core.LazySeq(null,(function (){
var s__29806__$1 = s__29806;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__29806__$1);
if(temp__4657__auto__){
var s__29806__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__29806__$2)){
var c__27326__auto__ = cljs.core.chunk_first.call(null,s__29806__$2);
var size__27327__auto__ = cljs.core.count.call(null,c__27326__auto__);
var b__29808 = cljs.core.chunk_buffer.call(null,size__27327__auto__);
if((function (){var i__29807 = (0);
while(true){
if((i__29807 < size__27327__auto__)){
var block = cljs.core._nth.call(null,c__27326__auto__,i__29807);
cljs.core.chunk_append.call(null,b__29808,((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(block),new cljs.core.Keyword(null,"vertical","vertical",718696748)))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [bloqz.core.vertical_block,new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(block),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(block)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [bloqz.core.horizontal_block,new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(block),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(block)], null)));

var G__29809 = (i__29807 + (1));
i__29807 = G__29809;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29808),bloqz$core$main_$_iter__29805.call(null,cljs.core.chunk_rest.call(null,s__29806__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29808),null);
}
} else {
var block = cljs.core.first.call(null,s__29806__$2);
return cljs.core.cons.call(null,((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(block),new cljs.core.Keyword(null,"vertical","vertical",718696748)))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [bloqz.core.vertical_block,new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(block),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(block)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [bloqz.core.horizontal_block,new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(block),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(block)], null)),bloqz$core$main_$_iter__29805.call(null,cljs.core.rest.call(null,s__29806__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__27328__auto__.call(null,cljs.core.deref.call(null,bloqz.core.test_blocks));
})()], null);
});
reagent.core.render.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [bloqz.core.main], null),document.querySelector("#app"));

//# sourceMappingURL=core.js.map