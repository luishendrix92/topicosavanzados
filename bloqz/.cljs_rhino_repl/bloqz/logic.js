// Compiled by ClojureScript 1.9.229 {}
goog.provide('bloqz.logic');
goog.require('cljs.core');
goog.require('clojure.set');
bloqz.logic.winning_position = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(6),new cljs.core.Keyword(null,"y","y",-1757859776),(2)], null);
bloqz.logic.occupied_cells = (function bloqz$logic$occupied_cells(block){
var offset_x = ((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(block),new cljs.core.Keyword(null,"horizontal","horizontal",2062109475)))?(1):(0));
var offset_y = ((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(block),new cljs.core.Keyword(null,"vertical","vertical",718696748)))?(1):(0));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(block),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(block)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(block) + offset_x),(new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(block) + offset_y)], null)], null);
});
bloqz.logic.can_move_QMARK_ = (function bloqz$logic$can_move_QMARK_(block,destination,blocks){
var to_move = bloqz.logic.occupied_cells.call(null,cljs.core.merge.call(null,block,destination));
var other_blocks = cljs.core.reduce.call(null,cljs.core.concat,cljs.core.map.call(null,bloqz.logic.occupied_cells,cljs.core.filter.call(null,((function (to_move){
return (function (p1__30402_SHARP_){
return cljs.core.not_EQ_.call(null,p1__30402_SHARP_,block);
});})(to_move))
,blocks)));
return cljs.core.empty_QMARK_.call(null,clojure.set.intersection.call(null,cljs.core.set.call(null,to_move),cljs.core.set.call(null,other_blocks)));
});

//# sourceMappingURL=logic.js.map