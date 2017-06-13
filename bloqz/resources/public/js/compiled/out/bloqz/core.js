// Compiled by ClojureScript 1.9.229 {}
goog.provide('bloqz.core');
goog.require('cljs.core');
goog.require('bloqz.events');
goog.require('bloqz.gamestate');
goog.require('reagent.core');
bloqz.core.bg = (function bloqz$core$bg(style,id){
if((id === (0))){
return cljs.core.assoc.call(null,style,new cljs.core.Keyword(null,"background","background",-863952629),"#F31D2F");
} else {
return style;
}
});
bloqz.core.vertical_block = (function bloqz$core$vertical_block(level,x,y,id,size){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.vertb","div.vertb",1882366688),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"style","style",-496642736),bloqz.core.bg.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"top","top",-1856271961),(y * (50)),new cljs.core.Keyword(null,"left","left",-399115937),(x * (50)),new cljs.core.Keyword(null,"height","height",1025178622),(size * (50))], null),id),new cljs.core.Keyword(null,"on-mouseDown","on-mouseDown",1911204320),(function (){
return cljs.core.swap_BANG_.call(null,bloqz.gamestate.drag,cljs.core.assoc,new cljs.core.Keyword(null,"dragging?","dragging?",-995941410),true);
}),new cljs.core.Keyword(null,"on-mouseMove","on-mouseMove",-78941277),bloqz.events.drag_block.call(null,id),new cljs.core.Keyword(null,"on-mouseUp","on-mouseUp",-1829072178),(function (){
return cljs.core.swap_BANG_.call(null,bloqz.gamestate.drag,cljs.core.assoc,new cljs.core.Keyword(null,"dragging?","dragging?",-995941410),false);
})], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.move-up","button.move-up",-1555191197),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return bloqz.events.attempt_move.call(null,level,new cljs.core.Keyword(null,"up","up",-269712113),id);
})], null),"\u2B06\uFE0F"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.move-down","button.move-down",1657360915),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return bloqz.events.attempt_move.call(null,level,new cljs.core.Keyword(null,"down","down",1565245570),id);
})], null),"\u2B07\uFE0F"], null)], null);
});
bloqz.core.horizontal_block = (function bloqz$core$horizontal_block(level,x,y,id,size){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.horb","div.horb",-1974043980),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"style","style",-496642736),bloqz.core.bg.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"top","top",-1856271961),(y * (50)),new cljs.core.Keyword(null,"left","left",-399115937),(x * (50)),new cljs.core.Keyword(null,"width","width",-384071477),(size * (50))], null),id),new cljs.core.Keyword(null,"on-mouseDown","on-mouseDown",1911204320),(function (){
return cljs.core.swap_BANG_.call(null,bloqz.gamestate.drag,cljs.core.assoc,new cljs.core.Keyword(null,"dragging?","dragging?",-995941410),true);
}),new cljs.core.Keyword(null,"on-mouseMove","on-mouseMove",-78941277),bloqz.events.drag_block.call(null,id),new cljs.core.Keyword(null,"on-mouseUp","on-mouseUp",-1829072178),(function (){
return cljs.core.swap_BANG_.call(null,bloqz.gamestate.drag,cljs.core.assoc,new cljs.core.Keyword(null,"dragging?","dragging?",-995941410),false);
})], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.move-left","button.move-left",-404670428),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return bloqz.events.attempt_move.call(null,level,new cljs.core.Keyword(null,"left","left",-399115937),id);
})], null),"\u2B05\uFE0F"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.move-right","button.move-right",-1298500487),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return bloqz.events.attempt_move.call(null,level,new cljs.core.Keyword(null,"right","right",-452581833),id);
})], null),"\u27A1"], null)], null);
});
bloqz.core.main = (function bloqz$core$main(level){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.wrapper","div.wrapper",-1768248555),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.ui-state.chalkboard","div.ui-state.chalkboard",-349723739),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),[cljs.core.str("Puzzle: "),cljs.core.str(new cljs.core.Keyword(null,"lvl","lvl",-1484595266).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,bloqz.gamestate.ui_state))),cljs.core.str(" | Moves: "),cljs.core.str(new cljs.core.Keyword(null,"moves","moves",927465255).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,bloqz.gamestate.ui_state)))].join('')], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.game.chalkboard","div.game.chalkboard",-826790581),(function (){var iter__27328__auto__ = (function bloqz$core$main_$_iter__29609(s__29610){
return (new cljs.core.LazySeq(null,(function (){
var s__29610__$1 = s__29610;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__29610__$1);
if(temp__4657__auto__){
var s__29610__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__29610__$2)){
var c__27326__auto__ = cljs.core.chunk_first.call(null,s__29610__$2);
var size__27327__auto__ = cljs.core.count.call(null,c__27326__auto__);
var b__29612 = cljs.core.chunk_buffer.call(null,size__27327__auto__);
if((function (){var i__29611 = (0);
while(true){
if((i__29611 < size__27327__auto__)){
var map__29617 = cljs.core._nth.call(null,c__27326__auto__,i__29611);
var map__29617__$1 = ((((!((map__29617 == null)))?((((map__29617.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29617.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29617):map__29617);
var id = cljs.core.get.call(null,map__29617__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var x = cljs.core.get.call(null,map__29617__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.call(null,map__29617__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var t = cljs.core.get.call(null,map__29617__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var s = cljs.core.get.call(null,map__29617__$1,new cljs.core.Keyword(null,"size","size",1098693007));
cljs.core.chunk_append.call(null,b__29612,((cljs.core._EQ_.call(null,t,new cljs.core.Keyword(null,"vertical","vertical",718696748)))?cljs.core.with_meta(new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [bloqz.core.vertical_block,level,x,y,id,s], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),id], null)):cljs.core.with_meta(new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [bloqz.core.horizontal_block,level,x,y,id,s], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),id], null))));

var G__29621 = (i__29611 + (1));
i__29611 = G__29621;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29612),bloqz$core$main_$_iter__29609.call(null,cljs.core.chunk_rest.call(null,s__29610__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29612),null);
}
} else {
var map__29619 = cljs.core.first.call(null,s__29610__$2);
var map__29619__$1 = ((((!((map__29619 == null)))?((((map__29619.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29619.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29619):map__29619);
var id = cljs.core.get.call(null,map__29619__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var x = cljs.core.get.call(null,map__29619__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.call(null,map__29619__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var t = cljs.core.get.call(null,map__29619__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var s = cljs.core.get.call(null,map__29619__$1,new cljs.core.Keyword(null,"size","size",1098693007));
return cljs.core.cons.call(null,((cljs.core._EQ_.call(null,t,new cljs.core.Keyword(null,"vertical","vertical",718696748)))?cljs.core.with_meta(new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [bloqz.core.vertical_block,level,x,y,id,s], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),id], null)):cljs.core.with_meta(new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [bloqz.core.horizontal_block,level,x,y,id,s], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),id], null))),bloqz$core$main_$_iter__29609.call(null,cljs.core.rest.call(null,s__29610__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__27328__auto__.call(null,cljs.core.deref.call(null,level));
})()], null)], null);
});
reagent.core.render.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [bloqz.core.main,bloqz.gamestate.board_level], null),document.querySelector("#app"));

//# sourceMappingURL=core.js.map?rel=1496161940758