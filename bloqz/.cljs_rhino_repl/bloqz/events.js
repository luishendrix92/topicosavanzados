// Compiled by ClojureScript 1.9.229 {}
goog.provide('bloqz.events');
goog.require('cljs.core');
goog.require('bloqz.helpers');
goog.require('bloqz.gamestate');
goog.require('bloqz.logic');
bloqz.events.click_sound = (new Audio("latch.mp3"));
bloqz.events.level_cleared = (function bloqz$events$level_cleared(which_lv){
cljs.core.swap_BANG_.call(null,bloqz.gamestate.board_level,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),new cljs.core.Keyword(null,"x","x",2099068185)], null),cljs.core.partial.call(null,cljs.core._PLUS_,(2)));

return setTimeout((function (){
alert("Level Cleared");

cljs.core.swap_BANG_.call(null,bloqz.gamestate.ui_state,cljs.core.update,new cljs.core.Keyword(null,"puzzle","puzzle",-825926240),cljs.core.inc);

return cljs.core.swap_BANG_.call(null,bloqz.gamestate.ui_state,cljs.core.assoc,new cljs.core.Keyword(null,"moves","moves",927465255),(0));
}),(700));
});
bloqz.events.move_block = (function bloqz$events$move_block(level,id,direction){
bloqz.events.click_sound.play();

cljs.core.swap_BANG_.call(null,bloqz.gamestate.ui_state,cljs.core.update,new cljs.core.Keyword(null,"moves","moves",927465255),cljs.core.inc);

var G__30108 = (((direction instanceof cljs.core.Keyword))?direction.fqn:null);
switch (G__30108) {
case "right":
return cljs.core.swap_BANG_.call(null,level,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,new cljs.core.Keyword(null,"x","x",2099068185)], null),cljs.core.inc);

break;
case "left":
return cljs.core.swap_BANG_.call(null,level,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,new cljs.core.Keyword(null,"x","x",2099068185)], null),cljs.core.dec);

break;
case "up":
return cljs.core.swap_BANG_.call(null,level,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,new cljs.core.Keyword(null,"y","y",-1757859776)], null),cljs.core.dec);

break;
case "down":
return cljs.core.swap_BANG_.call(null,level,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,new cljs.core.Keyword(null,"y","y",-1757859776)], null),cljs.core.inc);

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(direction)].join('')));

}
});
bloqz.events.attempt_move = (function bloqz$events$attempt_move(level,direction,id){
return (function (evt){
var block = cljs.core.nth.call(null,cljs.core.deref.call(null,level),id);
var destination = bloqz.helpers.add_points.call(null,direction.call(null,bloqz.helpers.offsets),block);
var valid_move_QMARK_ = bloqz.logic.can_move_QMARK_.call(null,block,destination,cljs.core.deref.call(null,level));
var could_win_QMARK_ = (cljs.core._EQ_.call(null,destination,bloqz.logic.winning_position)) && ((id === (0)));
if(cljs.core.truth_((function (){var and__26536__auto__ = valid_move_QMARK_;
if(cljs.core.truth_(and__26536__auto__)){
return could_win_QMARK_;
} else {
return and__26536__auto__;
}
})())){
return bloqz.events.level_cleared.call(null,new cljs.core.Keyword(null,"lvl","lvl",-1484595266).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,bloqz.gamestate.ui_state)));
} else {
if(cljs.core.truth_(valid_move_QMARK_)){
return bloqz.events.move_block.call(null,level,id,direction);
} else {
return console.log("Invalid move");

}
}
});
});

//# sourceMappingURL=events.js.map