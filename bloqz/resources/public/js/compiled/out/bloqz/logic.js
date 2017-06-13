// Compiled by ClojureScript 1.9.229 {}
goog.provide('bloqz.logic');
goog.require('cljs.core');
goog.require('clojure.set');
bloqz.logic.winning_position = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(5),new cljs.core.Keyword(null,"y","y",-1757859776),(2)], null);
bloqz.logic.winning_position_BANG_ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(5),(2)], null);
bloqz.logic.outside_cells = cljs.core.mapcat.call(null,(function (i){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),i], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,(-1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(6),i], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,(6)], null)], null);
}),cljs.core.range.call(null,(6)));
bloqz.logic.occupied_cells = (function bloqz$logic$occupied_cells(p__28365){
var map__28369 = p__28365;
var map__28369__$1 = ((((!((map__28369 == null)))?((((map__28369.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28369.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28369):map__28369);
var block = map__28369__$1;
var x = cljs.core.get.call(null,map__28369__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.call(null,map__28369__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var type = cljs.core.get.call(null,map__28369__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var size = cljs.core.get.call(null,map__28369__$1,new cljs.core.Keyword(null,"size","size",1098693007));
return cljs.core.map.call(null,((function (map__28369,map__28369__$1,block,x,y,type,size){
return (function (offset){
var G__28371 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__28371) {
case "horizontal":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(x + offset),y], null);

break;
case "vertical":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,(y + offset)], null);

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}
});})(map__28369,map__28369__$1,block,x,y,type,size))
,cljs.core.range.call(null,size));
});
bloqz.logic.can_move_QMARK_ = (function bloqz$logic$can_move_QMARK_(block,destination,blocks){
var to_move = bloqz.logic.occupied_cells.call(null,cljs.core.merge.call(null,block,destination));
var other_blocks = cljs.core.concat.call(null,bloqz.logic.outside_cells,cljs.core.mapcat.call(null,bloqz.logic.occupied_cells,cljs.core.filter.call(null,((function (to_move){
return (function (p1__28373_SHARP_){
return cljs.core.not_EQ_.call(null,p1__28373_SHARP_,block);
});})(to_move))
,blocks)));
return cljs.core.empty_QMARK_.call(null,clojure.set.intersection.call(null,cljs.core.set.call(null,to_move),cljs.core.set.call(null,other_blocks)));
});

//# sourceMappingURL=logic.js.map?rel=1496160779205