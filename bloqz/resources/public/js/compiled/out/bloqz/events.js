// Compiled by ClojureScript 1.9.229 {}
goog.provide('bloqz.events');
goog.require('cljs.core');
goog.require('bloqz.helpers');
goog.require('bloqz.gamestate');
goog.require('bloqz.levels');
goog.require('bloqz.logic');
bloqz.events.compute_dir = (function bloqz$events$compute_dir(id,p__29537){
var vec__29542 = p__29537;
var mx = cljs.core.nth.call(null,vec__29542,(0),null);
var my = cljs.core.nth.call(null,vec__29542,(1),null);
var bx = cljs.core.nth.call(null,vec__29542,(2),null);
var by = cljs.core.nth.call(null,vec__29542,(3),null);
var block_type = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(cljs.core.nth.call(null,cljs.core.deref.call(null,bloqz.gamestate.board_level),id));
var horiz_dir = ((((mx - bx) > (0)))?new cljs.core.Keyword(null,"right","right",-452581833):new cljs.core.Keyword(null,"left","left",-399115937));
var vert_dir = ((((my - by) < (0)))?new cljs.core.Keyword(null,"up","up",-269712113):new cljs.core.Keyword(null,"down","down",1565245570));
var G__29545 = (((block_type instanceof cljs.core.Keyword))?block_type.fqn:null);
switch (G__29545) {
case "vertical":
return vert_dir;

break;
case "horizontal":
return horiz_dir;

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(block_type)].join('')));

}
});
bloqz.events.load_level = (function bloqz$events$load_level(to_load){
cljs.core.swap_BANG_.call(null,bloqz.gamestate.ui_state,cljs.core.assoc,new cljs.core.Keyword(null,"lvl","lvl",-1484595266),(to_load + (1)),new cljs.core.Keyword(null,"moves","moves",927465255),(0));

return cljs.core.reset_BANG_.call(null,bloqz.gamestate.board_level,cljs.core.nth.call(null,bloqz.levels.lvl_list,to_load));
});
bloqz.events.level_cleared = (function bloqz$events$level_cleared(which_lv){
cljs.core.swap_BANG_.call(null,bloqz.gamestate.board_level,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),new cljs.core.Keyword(null,"x","x",2099068185)], null),cljs.core.partial.call(null,cljs.core._PLUS_,(2)));

return setTimeout((function (){
bloqz.gamestate.TADA_SOUND.play();

alert(((cljs.core._EQ_.call(null,which_lv,bloqz.gamestate.TOTAL_LEVELS))?"Congrats, you've won!":"Level Cleared"));

return bloqz.events.load_level.call(null,((cljs.core._EQ_.call(null,which_lv,bloqz.gamestate.TOTAL_LEVELS))?(0):which_lv));
}),bloqz.gamestate.VICTORY_DELAY);
});
bloqz.events.move_block = (function bloqz$events$move_block(level,id,direction){
bloqz.gamestate.CLICK_SOUND.play();

cljs.core.swap_BANG_.call(null,bloqz.gamestate.ui_state,cljs.core.update,new cljs.core.Keyword(null,"moves","moves",927465255),cljs.core.inc);

var G__29548 = (((direction instanceof cljs.core.Keyword))?direction.fqn:null);
switch (G__29548) {
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
var block = cljs.core.nth.call(null,cljs.core.deref.call(null,level),id);
var destination = bloqz.helpers.add_points.call(null,direction.call(null,bloqz.helpers.offsets),block);
var valid_move_QMARK_ = bloqz.logic.can_move_QMARK_.call(null,block,destination,cljs.core.deref.call(null,level));
var could_win_QMARK_ = (cljs.core._EQ_.call(null,destination,bloqz.logic.winning_position)) && ((id === (0)));
if(could_win_QMARK_){
return bloqz.events.level_cleared.call(null,new cljs.core.Keyword(null,"lvl","lvl",-1484595266).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,bloqz.gamestate.ui_state)));
} else {
if(cljs.core.truth_(valid_move_QMARK_)){
return bloqz.events.move_block.call(null,level,id,direction);
} else {
return console.log("Invalid move");

}
}
});
bloqz.events.drag_block = (function bloqz$events$drag_block(id){
return (function (evt){
var dragging_QMARK_ = new cljs.core.Keyword(null,"dragging?","dragging?",-995941410).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,bloqz.gamestate.drag));
var block_pos = evt.target.getBoundingClientRect();
var vec__29556 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [evt.clientX,evt.clientY], null);
var m_x = cljs.core.nth.call(null,vec__29556,(0),null);
var m_y = cljs.core.nth.call(null,vec__29556,(1),null);
var vec__29559 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [block_pos.left,block_pos.top], null);
var b_x = cljs.core.nth.call(null,vec__29559,(0),null);
var b_y = cljs.core.nth.call(null,vec__29559,(1),null);
var direction = bloqz.events.compute_dir.call(null,id,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [m_x,m_y,b_x,b_y], null));
if(cljs.core.truth_(dragging_QMARK_)){
return bloqz.events.attempt_move.call(null,bloqz.gamestate.board_level,direction,id);
} else {
return null;
}
});
});

//# sourceMappingURL=events.js.map?rel=1496161893067