// Compiled by ClojureScript 1.9.229 {}
goog.provide('bloqz.gamestate');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('bloqz.levels');
bloqz.gamestate.CLICK_SOUND = (new Audio("latch.mp3"));
bloqz.gamestate.TADA_SOUND = (new Audio("tada.mp3"));
bloqz.gamestate.TOTAL_LEVELS = (5);
bloqz.gamestate.VICTORY_DELAY = (600);
bloqz.gamestate.ui_state = reagent.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"lvl","lvl",-1484595266),(1),new cljs.core.Keyword(null,"moves","moves",927465255),(0)], null));
bloqz.gamestate.board_level = reagent.core.atom.call(null,cljs.core.first.call(null,bloqz.levels.lvl_list));
bloqz.gamestate.drag = reagent.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"dragging?","dragging?",-995941410),false,new cljs.core.Keyword(null,"drag-id","drag-id",232228164),(0)], null));

//# sourceMappingURL=gamestate.js.map?rel=1496160779171