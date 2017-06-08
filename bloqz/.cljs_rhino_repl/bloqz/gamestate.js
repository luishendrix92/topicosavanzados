// Compiled by ClojureScript 1.9.229 {}
goog.provide('bloqz.gamestate');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('bloqz.levels');
bloqz.gamestate.ui_state = reagent.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"lvl","lvl",-1484595266),(1),new cljs.core.Keyword(null,"moves","moves",927465255),(0)], null));
bloqz.gamestate.board_level = reagent.core.atom.call(null,cljs.core.first.call(null,bloqz.levels.lvl_list));

//# sourceMappingURL=gamestate.js.map