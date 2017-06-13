// Compiled by ClojureScript 1.9.229 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.userAgent.product');
goog.require('goog.Uri');
goog.require('cljs.core.async');
goog.require('goog.object');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
goog.require('cljs.repl');
goog.require('figwheel.client.heads_up');
goog.require('cljs.reader');
figwheel.client._figwheel_version_ = "0.5.10";
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(var_args){
var args36841 = [];
var len__27623__auto___36844 = arguments.length;
var i__27624__auto___36845 = (0);
while(true){
if((i__27624__auto___36845 < len__27623__auto___36844)){
args36841.push((arguments[i__27624__auto___36845]));

var G__36846 = (i__27624__auto___36845 + (1));
i__27624__auto___36845 = G__36846;
continue;
} else {
}
break;
}

var G__36843 = args36841.length;
switch (G__36843) {
case 2:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args36841.length)].join('')));

}
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2 = (function (stream,args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stream","stream",1534941648),stream,new cljs.core.Keyword(null,"args","args",1315556576),args], null)], null));

return null;
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1 = (function (args){
return figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);
});

figwheel.client.figwheel_repl_print.cljs$lang$maxFixedArity = 2;

figwheel.client.console_out_print = (function figwheel$client$console_out_print(args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.console_err_print = (function figwheel$client$console_err_print(args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.repl_out_print_fn = (function figwheel$client$repl_out_print_fn(var_args){
var args__27630__auto__ = [];
var len__27623__auto___36849 = arguments.length;
var i__27624__auto___36850 = (0);
while(true){
if((i__27624__auto___36850 < len__27623__auto___36849)){
args__27630__auto__.push((arguments[i__27624__auto___36850]));

var G__36851 = (i__27624__auto___36850 + (1));
i__27624__auto___36850 = G__36851;
continue;
} else {
}
break;
}

var argseq__27631__auto__ = ((((0) < args__27630__auto__.length))?(new cljs.core.IndexedSeq(args__27630__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__27631__auto__);
});

figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_out_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);

return null;
});

figwheel.client.repl_out_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq36848){
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36848));
});

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__27630__auto__ = [];
var len__27623__auto___36853 = arguments.length;
var i__27624__auto___36854 = (0);
while(true){
if((i__27624__auto___36854 < len__27623__auto___36853)){
args__27630__auto__.push((arguments[i__27624__auto___36854]));

var G__36855 = (i__27624__auto___36854 + (1));
i__27624__auto___36854 = G__36855;
continue;
} else {
}
break;
}

var argseq__27631__auto__ = ((((0) < args__27630__auto__.length))?(new cljs.core.IndexedSeq(args__27630__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__27631__auto__);
});

figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_err_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"err","err",-2089457205),args);

return null;
});

figwheel.client.repl_err_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq36852){
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36852));
});

figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core.set_print_fn_BANG_.call(null,figwheel.client.repl_out_print_fn);

cljs.core.set_print_err_fn_BANG_.call(null,figwheel.client.repl_err_print_fn);

return null;
});
figwheel.client.autoload_QMARK_ = (function figwheel$client$autoload_QMARK_(){
return figwheel.client.utils.persistent_config_get.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),true);
});
figwheel.client.toggle_autoload = (function figwheel$client$toggle_autoload(){
var res = figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),cljs.core.not.call(null,figwheel.client.autoload_QMARK_.call(null)));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Toggle autoload deprecated! Use (figwheel.client/set-autoload! false)")].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Figwheel autoloading "),cljs.core.str((cljs.core.truth_(figwheel.client.autoload_QMARK_.call(null))?"ON":"OFF"))].join(''));

return res;
});
goog.exportSymbol('figwheel.client.toggle_autoload', figwheel.client.toggle_autoload);
/**
 * Figwheel by default loads code changes as you work. Sometimes you
 *   just want to work on your code without the ramifications of
 *   autoloading and simply load your code piecemeal in the REPL. You can
 *   turn autoloading on and of with this method. 
 * 
 *   (figwheel.client/set-autoload false)
 * 
 *   NOTE: This is a persistent setting, meaning that it will persist
 *   through browser reloads.
 */
figwheel.client.set_autoload = (function figwheel$client$set_autoload(b){
if((b === true) || (b === false)){
} else {
throw (new Error("Assert failed: (or (true? b) (false? b))"));
}

return figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),b);
});
goog.exportSymbol('figwheel.client.set_autoload', figwheel.client.set_autoload);
figwheel.client.repl_pprint = (function figwheel$client$repl_pprint(){
return figwheel.client.utils.persistent_config_get.call(null,new cljs.core.Keyword(null,"figwheel-repl-pprint","figwheel-repl-pprint",1076150873),true);
});
goog.exportSymbol('figwheel.client.repl_pprint', figwheel.client.repl_pprint);
/**
 * This method gives you the ability to turn the pretty printing of
 *   the REPL's return value on and off.
 *   
 *   (figwheel.client/set-repl-pprint false)
 * 
 *   NOTE: This is a persistent setting, meaning that it will persist
 *   through browser reloads.
 */
figwheel.client.set_repl_pprint = (function figwheel$client$set_repl_pprint(b){
if((b === true) || (b === false)){
} else {
throw (new Error("Assert failed: (or (true? b) (false? b))"));
}

return figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-repl-pprint","figwheel-repl-pprint",1076150873),b);
});
goog.exportSymbol('figwheel.client.set_repl_pprint', figwheel.client.set_repl_pprint);
figwheel.client.repl_result_pr_str = (function figwheel$client$repl_result_pr_str(v){
if(cljs.core.truth_(figwheel.client.repl_pprint.call(null))){
return figwheel.client.utils.pprint_to_string.call(null,v);
} else {
return cljs.core.pr_str.call(null,v);
}
});
goog.exportSymbol('figwheel.client.repl_result_pr_str', figwheel.client.repl_result_pr_str);
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel$client$get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__36856){
var map__36859 = p__36856;
var map__36859__$1 = ((((!((map__36859 == null)))?((((map__36859.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36859.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36859):map__36859);
var message = cljs.core.get.call(null,map__36859__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__36859__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str(class$),cljs.core.str(" : "),cljs.core.str(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__26548__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__26548__auto__)){
return or__26548__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__26536__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__26536__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__26536__auto__;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function figwheel$client$block_reload_file_state_QMARK_(msg_names,opts){
return (cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts)));
});
figwheel.client.warning_append_state_QMARK_ = (function figwheel$client$warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function figwheel$client$warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function figwheel$client$rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function figwheel$client$compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function figwheel$client$compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function figwheel$client$css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function figwheel$client$file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__29473__auto___37021 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29473__auto___37021,ch){
return (function (){
var f__29474__auto__ = (function (){var switch__29361__auto__ = ((function (c__29473__auto___37021,ch){
return (function (state_36990){
var state_val_36991 = (state_36990[(1)]);
if((state_val_36991 === (7))){
var inst_36986 = (state_36990[(2)]);
var state_36990__$1 = state_36990;
var statearr_36992_37022 = state_36990__$1;
(statearr_36992_37022[(2)] = inst_36986);

(statearr_36992_37022[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36991 === (1))){
var state_36990__$1 = state_36990;
var statearr_36993_37023 = state_36990__$1;
(statearr_36993_37023[(2)] = null);

(statearr_36993_37023[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36991 === (4))){
var inst_36943 = (state_36990[(7)]);
var inst_36943__$1 = (state_36990[(2)]);
var state_36990__$1 = (function (){var statearr_36994 = state_36990;
(statearr_36994[(7)] = inst_36943__$1);

return statearr_36994;
})();
if(cljs.core.truth_(inst_36943__$1)){
var statearr_36995_37024 = state_36990__$1;
(statearr_36995_37024[(1)] = (5));

} else {
var statearr_36996_37025 = state_36990__$1;
(statearr_36996_37025[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36991 === (15))){
var inst_36950 = (state_36990[(8)]);
var inst_36965 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_36950);
var inst_36966 = cljs.core.first.call(null,inst_36965);
var inst_36967 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_36966);
var inst_36968 = [cljs.core.str("Figwheel: Not loading code with warnings - "),cljs.core.str(inst_36967)].join('');
var inst_36969 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_36968);
var state_36990__$1 = state_36990;
var statearr_36997_37026 = state_36990__$1;
(statearr_36997_37026[(2)] = inst_36969);

(statearr_36997_37026[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36991 === (13))){
var inst_36974 = (state_36990[(2)]);
var state_36990__$1 = state_36990;
var statearr_36998_37027 = state_36990__$1;
(statearr_36998_37027[(2)] = inst_36974);

(statearr_36998_37027[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36991 === (6))){
var state_36990__$1 = state_36990;
var statearr_36999_37028 = state_36990__$1;
(statearr_36999_37028[(2)] = null);

(statearr_36999_37028[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36991 === (17))){
var inst_36972 = (state_36990[(2)]);
var state_36990__$1 = state_36990;
var statearr_37000_37029 = state_36990__$1;
(statearr_37000_37029[(2)] = inst_36972);

(statearr_37000_37029[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36991 === (3))){
var inst_36988 = (state_36990[(2)]);
var state_36990__$1 = state_36990;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36990__$1,inst_36988);
} else {
if((state_val_36991 === (12))){
var inst_36949 = (state_36990[(9)]);
var inst_36963 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_36949,opts);
var state_36990__$1 = state_36990;
if(cljs.core.truth_(inst_36963)){
var statearr_37001_37030 = state_36990__$1;
(statearr_37001_37030[(1)] = (15));

} else {
var statearr_37002_37031 = state_36990__$1;
(statearr_37002_37031[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36991 === (2))){
var state_36990__$1 = state_36990;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36990__$1,(4),ch);
} else {
if((state_val_36991 === (11))){
var inst_36950 = (state_36990[(8)]);
var inst_36955 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_36956 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_36950);
var inst_36957 = cljs.core.async.timeout.call(null,(1000));
var inst_36958 = [inst_36956,inst_36957];
var inst_36959 = (new cljs.core.PersistentVector(null,2,(5),inst_36955,inst_36958,null));
var state_36990__$1 = state_36990;
return cljs.core.async.ioc_alts_BANG_.call(null,state_36990__$1,(14),inst_36959);
} else {
if((state_val_36991 === (9))){
var inst_36950 = (state_36990[(8)]);
var inst_36976 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_36977 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_36950);
var inst_36978 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_36977);
var inst_36979 = [cljs.core.str("Not loading: "),cljs.core.str(inst_36978)].join('');
var inst_36980 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_36979);
var state_36990__$1 = (function (){var statearr_37003 = state_36990;
(statearr_37003[(10)] = inst_36976);

return statearr_37003;
})();
var statearr_37004_37032 = state_36990__$1;
(statearr_37004_37032[(2)] = inst_36980);

(statearr_37004_37032[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36991 === (5))){
var inst_36943 = (state_36990[(7)]);
var inst_36945 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_36946 = (new cljs.core.PersistentArrayMap(null,2,inst_36945,null));
var inst_36947 = (new cljs.core.PersistentHashSet(null,inst_36946,null));
var inst_36948 = figwheel.client.focus_msgs.call(null,inst_36947,inst_36943);
var inst_36949 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_36948);
var inst_36950 = cljs.core.first.call(null,inst_36948);
var inst_36951 = figwheel.client.autoload_QMARK_.call(null);
var state_36990__$1 = (function (){var statearr_37005 = state_36990;
(statearr_37005[(8)] = inst_36950);

(statearr_37005[(9)] = inst_36949);

return statearr_37005;
})();
if(cljs.core.truth_(inst_36951)){
var statearr_37006_37033 = state_36990__$1;
(statearr_37006_37033[(1)] = (8));

} else {
var statearr_37007_37034 = state_36990__$1;
(statearr_37007_37034[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36991 === (14))){
var inst_36961 = (state_36990[(2)]);
var state_36990__$1 = state_36990;
var statearr_37008_37035 = state_36990__$1;
(statearr_37008_37035[(2)] = inst_36961);

(statearr_37008_37035[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36991 === (16))){
var state_36990__$1 = state_36990;
var statearr_37009_37036 = state_36990__$1;
(statearr_37009_37036[(2)] = null);

(statearr_37009_37036[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36991 === (10))){
var inst_36982 = (state_36990[(2)]);
var state_36990__$1 = (function (){var statearr_37010 = state_36990;
(statearr_37010[(11)] = inst_36982);

return statearr_37010;
})();
var statearr_37011_37037 = state_36990__$1;
(statearr_37011_37037[(2)] = null);

(statearr_37011_37037[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36991 === (8))){
var inst_36949 = (state_36990[(9)]);
var inst_36953 = figwheel.client.reload_file_state_QMARK_.call(null,inst_36949,opts);
var state_36990__$1 = state_36990;
if(cljs.core.truth_(inst_36953)){
var statearr_37012_37038 = state_36990__$1;
(statearr_37012_37038[(1)] = (11));

} else {
var statearr_37013_37039 = state_36990__$1;
(statearr_37013_37039[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__29473__auto___37021,ch))
;
return ((function (switch__29361__auto__,c__29473__auto___37021,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__29362__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__29362__auto____0 = (function (){
var statearr_37017 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_37017[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__29362__auto__);

(statearr_37017[(1)] = (1));

return statearr_37017;
});
var figwheel$client$file_reloader_plugin_$_state_machine__29362__auto____1 = (function (state_36990){
while(true){
var ret_value__29363__auto__ = (function (){try{while(true){
var result__29364__auto__ = switch__29361__auto__.call(null,state_36990);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29364__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29364__auto__;
}
break;
}
}catch (e37018){if((e37018 instanceof Object)){
var ex__29365__auto__ = e37018;
var statearr_37019_37040 = state_36990;
(statearr_37019_37040[(5)] = ex__29365__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36990);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37018;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29363__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37041 = state_36990;
state_36990 = G__37041;
continue;
} else {
return ret_value__29363__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__29362__auto__ = function(state_36990){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__29362__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__29362__auto____1.call(this,state_36990);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__29362__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__29362__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__29362__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__29362__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__29362__auto__;
})()
;})(switch__29361__auto__,c__29473__auto___37021,ch))
})();
var state__29475__auto__ = (function (){var statearr_37020 = f__29474__auto__.call(null);
(statearr_37020[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29473__auto___37021);

return statearr_37020;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29475__auto__);
});})(c__29473__auto___37021,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__37042_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__37042_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
figwheel.client.get_ua_product = (function figwheel$client$get_ua_product(){
if(cljs.core.truth_(figwheel.client.utils.node_env_QMARK_.call(null))){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
}
});
var base_path_37045 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_37045){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{figwheel.client.enable_repl_print_BANG_.call(null);

var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value], null));
}catch (e37044){if((e37044 instanceof Error)){
var e = e37044;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_37045], null));
} else {
var e = e37044;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}finally {figwheel.client.enable_repl_print_BANG_.call(null);
}});})(base_path_37045))
;
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return cljs.user = ({});
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__37046){
var map__37055 = p__37046;
var map__37055__$1 = ((((!((map__37055 == null)))?((((map__37055.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37055.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37055):map__37055);
var opts = map__37055__$1;
var build_id = cljs.core.get.call(null,map__37055__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__37055,map__37055__$1,opts,build_id){
return (function (p__37057){
var vec__37058 = p__37057;
var seq__37059 = cljs.core.seq.call(null,vec__37058);
var first__37060 = cljs.core.first.call(null,seq__37059);
var seq__37059__$1 = cljs.core.next.call(null,seq__37059);
var map__37061 = first__37060;
var map__37061__$1 = ((((!((map__37061 == null)))?((((map__37061.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37061.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37061):map__37061);
var msg = map__37061__$1;
var msg_name = cljs.core.get.call(null,map__37061__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__37059__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__37058,seq__37059,first__37060,seq__37059__$1,map__37061,map__37061__$1,msg,msg_name,_,map__37055,map__37055__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__37058,seq__37059,first__37060,seq__37059__$1,map__37061,map__37061__$1,msg,msg_name,_,map__37055,map__37055__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__37055,map__37055__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__37069){
var vec__37070 = p__37069;
var seq__37071 = cljs.core.seq.call(null,vec__37070);
var first__37072 = cljs.core.first.call(null,seq__37071);
var seq__37071__$1 = cljs.core.next.call(null,seq__37071);
var map__37073 = first__37072;
var map__37073__$1 = ((((!((map__37073 == null)))?((((map__37073.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37073.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37073):map__37073);
var msg = map__37073__$1;
var msg_name = cljs.core.get.call(null,map__37073__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__37071__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__37075){
var map__37087 = p__37075;
var map__37087__$1 = ((((!((map__37087 == null)))?((((map__37087.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37087.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37087):map__37087);
var on_compile_warning = cljs.core.get.call(null,map__37087__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__37087__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__37087,map__37087__$1,on_compile_warning,on_compile_fail){
return (function (p__37089){
var vec__37090 = p__37089;
var seq__37091 = cljs.core.seq.call(null,vec__37090);
var first__37092 = cljs.core.first.call(null,seq__37091);
var seq__37091__$1 = cljs.core.next.call(null,seq__37091);
var map__37093 = first__37092;
var map__37093__$1 = ((((!((map__37093 == null)))?((((map__37093.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37093.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37093):map__37093);
var msg = map__37093__$1;
var msg_name = cljs.core.get.call(null,map__37093__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__37091__$1;
var pred__37095 = cljs.core._EQ_;
var expr__37096 = msg_name;
if(cljs.core.truth_(pred__37095.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__37096))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__37095.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__37096))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__37087,map__37087__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.auto_jump_to_error = (function figwheel$client$auto_jump_to_error(opts,error){
if(cljs.core.truth_(new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920).cljs$core$IFn$_invoke$arity$1(opts))){
return figwheel.client.heads_up.auto_notify_source_file_line.call(null,error);
} else {
return null;
}
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__29473__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29473__auto__,msg_hist,msg_names,msg){
return (function (){
var f__29474__auto__ = (function (){var switch__29361__auto__ = ((function (c__29473__auto__,msg_hist,msg_names,msg){
return (function (state_37324){
var state_val_37325 = (state_37324[(1)]);
if((state_val_37325 === (7))){
var inst_37244 = (state_37324[(2)]);
var state_37324__$1 = state_37324;
if(cljs.core.truth_(inst_37244)){
var statearr_37326_37376 = state_37324__$1;
(statearr_37326_37376[(1)] = (8));

} else {
var statearr_37327_37377 = state_37324__$1;
(statearr_37327_37377[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37325 === (20))){
var inst_37318 = (state_37324[(2)]);
var state_37324__$1 = state_37324;
var statearr_37328_37378 = state_37324__$1;
(statearr_37328_37378[(2)] = inst_37318);

(statearr_37328_37378[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37325 === (27))){
var inst_37314 = (state_37324[(2)]);
var state_37324__$1 = state_37324;
var statearr_37329_37379 = state_37324__$1;
(statearr_37329_37379[(2)] = inst_37314);

(statearr_37329_37379[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37325 === (1))){
var inst_37237 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_37324__$1 = state_37324;
if(cljs.core.truth_(inst_37237)){
var statearr_37330_37380 = state_37324__$1;
(statearr_37330_37380[(1)] = (2));

} else {
var statearr_37331_37381 = state_37324__$1;
(statearr_37331_37381[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37325 === (24))){
var inst_37316 = (state_37324[(2)]);
var state_37324__$1 = state_37324;
var statearr_37332_37382 = state_37324__$1;
(statearr_37332_37382[(2)] = inst_37316);

(statearr_37332_37382[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37325 === (4))){
var inst_37322 = (state_37324[(2)]);
var state_37324__$1 = state_37324;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37324__$1,inst_37322);
} else {
if((state_val_37325 === (15))){
var inst_37320 = (state_37324[(2)]);
var state_37324__$1 = state_37324;
var statearr_37333_37383 = state_37324__$1;
(statearr_37333_37383[(2)] = inst_37320);

(statearr_37333_37383[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37325 === (21))){
var inst_37273 = (state_37324[(2)]);
var inst_37274 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_37275 = figwheel.client.auto_jump_to_error.call(null,opts,inst_37274);
var state_37324__$1 = (function (){var statearr_37334 = state_37324;
(statearr_37334[(7)] = inst_37273);

return statearr_37334;
})();
var statearr_37335_37384 = state_37324__$1;
(statearr_37335_37384[(2)] = inst_37275);

(statearr_37335_37384[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37325 === (31))){
var inst_37303 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_37324__$1 = state_37324;
if(cljs.core.truth_(inst_37303)){
var statearr_37336_37385 = state_37324__$1;
(statearr_37336_37385[(1)] = (34));

} else {
var statearr_37337_37386 = state_37324__$1;
(statearr_37337_37386[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37325 === (32))){
var inst_37312 = (state_37324[(2)]);
var state_37324__$1 = state_37324;
var statearr_37338_37387 = state_37324__$1;
(statearr_37338_37387[(2)] = inst_37312);

(statearr_37338_37387[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37325 === (33))){
var inst_37299 = (state_37324[(2)]);
var inst_37300 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_37301 = figwheel.client.auto_jump_to_error.call(null,opts,inst_37300);
var state_37324__$1 = (function (){var statearr_37339 = state_37324;
(statearr_37339[(8)] = inst_37299);

return statearr_37339;
})();
var statearr_37340_37388 = state_37324__$1;
(statearr_37340_37388[(2)] = inst_37301);

(statearr_37340_37388[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37325 === (13))){
var inst_37258 = figwheel.client.heads_up.clear.call(null);
var state_37324__$1 = state_37324;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37324__$1,(16),inst_37258);
} else {
if((state_val_37325 === (22))){
var inst_37279 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_37280 = figwheel.client.heads_up.append_warning_message.call(null,inst_37279);
var state_37324__$1 = state_37324;
var statearr_37341_37389 = state_37324__$1;
(statearr_37341_37389[(2)] = inst_37280);

(statearr_37341_37389[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37325 === (36))){
var inst_37310 = (state_37324[(2)]);
var state_37324__$1 = state_37324;
var statearr_37342_37390 = state_37324__$1;
(statearr_37342_37390[(2)] = inst_37310);

(statearr_37342_37390[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37325 === (29))){
var inst_37290 = (state_37324[(2)]);
var inst_37291 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_37292 = figwheel.client.auto_jump_to_error.call(null,opts,inst_37291);
var state_37324__$1 = (function (){var statearr_37343 = state_37324;
(statearr_37343[(9)] = inst_37290);

return statearr_37343;
})();
var statearr_37344_37391 = state_37324__$1;
(statearr_37344_37391[(2)] = inst_37292);

(statearr_37344_37391[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37325 === (6))){
var inst_37239 = (state_37324[(10)]);
var state_37324__$1 = state_37324;
var statearr_37345_37392 = state_37324__$1;
(statearr_37345_37392[(2)] = inst_37239);

(statearr_37345_37392[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37325 === (28))){
var inst_37286 = (state_37324[(2)]);
var inst_37287 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_37288 = figwheel.client.heads_up.display_warning.call(null,inst_37287);
var state_37324__$1 = (function (){var statearr_37346 = state_37324;
(statearr_37346[(11)] = inst_37286);

return statearr_37346;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37324__$1,(29),inst_37288);
} else {
if((state_val_37325 === (25))){
var inst_37284 = figwheel.client.heads_up.clear.call(null);
var state_37324__$1 = state_37324;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37324__$1,(28),inst_37284);
} else {
if((state_val_37325 === (34))){
var inst_37305 = figwheel.client.heads_up.flash_loaded.call(null);
var state_37324__$1 = state_37324;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37324__$1,(37),inst_37305);
} else {
if((state_val_37325 === (17))){
var inst_37264 = (state_37324[(2)]);
var inst_37265 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_37266 = figwheel.client.auto_jump_to_error.call(null,opts,inst_37265);
var state_37324__$1 = (function (){var statearr_37347 = state_37324;
(statearr_37347[(12)] = inst_37264);

return statearr_37347;
})();
var statearr_37348_37393 = state_37324__$1;
(statearr_37348_37393[(2)] = inst_37266);

(statearr_37348_37393[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37325 === (3))){
var inst_37256 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_37324__$1 = state_37324;
if(cljs.core.truth_(inst_37256)){
var statearr_37349_37394 = state_37324__$1;
(statearr_37349_37394[(1)] = (13));

} else {
var statearr_37350_37395 = state_37324__$1;
(statearr_37350_37395[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37325 === (12))){
var inst_37252 = (state_37324[(2)]);
var state_37324__$1 = state_37324;
var statearr_37351_37396 = state_37324__$1;
(statearr_37351_37396[(2)] = inst_37252);

(statearr_37351_37396[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37325 === (2))){
var inst_37239 = (state_37324[(10)]);
var inst_37239__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_37324__$1 = (function (){var statearr_37352 = state_37324;
(statearr_37352[(10)] = inst_37239__$1);

return statearr_37352;
})();
if(cljs.core.truth_(inst_37239__$1)){
var statearr_37353_37397 = state_37324__$1;
(statearr_37353_37397[(1)] = (5));

} else {
var statearr_37354_37398 = state_37324__$1;
(statearr_37354_37398[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37325 === (23))){
var inst_37282 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_37324__$1 = state_37324;
if(cljs.core.truth_(inst_37282)){
var statearr_37355_37399 = state_37324__$1;
(statearr_37355_37399[(1)] = (25));

} else {
var statearr_37356_37400 = state_37324__$1;
(statearr_37356_37400[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37325 === (35))){
var state_37324__$1 = state_37324;
var statearr_37357_37401 = state_37324__$1;
(statearr_37357_37401[(2)] = null);

(statearr_37357_37401[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37325 === (19))){
var inst_37277 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_37324__$1 = state_37324;
if(cljs.core.truth_(inst_37277)){
var statearr_37358_37402 = state_37324__$1;
(statearr_37358_37402[(1)] = (22));

} else {
var statearr_37359_37403 = state_37324__$1;
(statearr_37359_37403[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37325 === (11))){
var inst_37248 = (state_37324[(2)]);
var state_37324__$1 = state_37324;
var statearr_37360_37404 = state_37324__$1;
(statearr_37360_37404[(2)] = inst_37248);

(statearr_37360_37404[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37325 === (9))){
var inst_37250 = figwheel.client.heads_up.clear.call(null);
var state_37324__$1 = state_37324;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37324__$1,(12),inst_37250);
} else {
if((state_val_37325 === (5))){
var inst_37241 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_37324__$1 = state_37324;
var statearr_37361_37405 = state_37324__$1;
(statearr_37361_37405[(2)] = inst_37241);

(statearr_37361_37405[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37325 === (14))){
var inst_37268 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_37324__$1 = state_37324;
if(cljs.core.truth_(inst_37268)){
var statearr_37362_37406 = state_37324__$1;
(statearr_37362_37406[(1)] = (18));

} else {
var statearr_37363_37407 = state_37324__$1;
(statearr_37363_37407[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37325 === (26))){
var inst_37294 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_37324__$1 = state_37324;
if(cljs.core.truth_(inst_37294)){
var statearr_37364_37408 = state_37324__$1;
(statearr_37364_37408[(1)] = (30));

} else {
var statearr_37365_37409 = state_37324__$1;
(statearr_37365_37409[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37325 === (16))){
var inst_37260 = (state_37324[(2)]);
var inst_37261 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_37262 = figwheel.client.heads_up.display_exception.call(null,inst_37261);
var state_37324__$1 = (function (){var statearr_37366 = state_37324;
(statearr_37366[(13)] = inst_37260);

return statearr_37366;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37324__$1,(17),inst_37262);
} else {
if((state_val_37325 === (30))){
var inst_37296 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_37297 = figwheel.client.heads_up.display_warning.call(null,inst_37296);
var state_37324__$1 = state_37324;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37324__$1,(33),inst_37297);
} else {
if((state_val_37325 === (10))){
var inst_37254 = (state_37324[(2)]);
var state_37324__$1 = state_37324;
var statearr_37367_37410 = state_37324__$1;
(statearr_37367_37410[(2)] = inst_37254);

(statearr_37367_37410[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37325 === (18))){
var inst_37270 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_37271 = figwheel.client.heads_up.display_exception.call(null,inst_37270);
var state_37324__$1 = state_37324;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37324__$1,(21),inst_37271);
} else {
if((state_val_37325 === (37))){
var inst_37307 = (state_37324[(2)]);
var state_37324__$1 = state_37324;
var statearr_37368_37411 = state_37324__$1;
(statearr_37368_37411[(2)] = inst_37307);

(statearr_37368_37411[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37325 === (8))){
var inst_37246 = figwheel.client.heads_up.flash_loaded.call(null);
var state_37324__$1 = state_37324;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37324__$1,(11),inst_37246);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__29473__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__29361__auto__,c__29473__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__29362__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__29362__auto____0 = (function (){
var statearr_37372 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_37372[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__29362__auto__);

(statearr_37372[(1)] = (1));

return statearr_37372;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__29362__auto____1 = (function (state_37324){
while(true){
var ret_value__29363__auto__ = (function (){try{while(true){
var result__29364__auto__ = switch__29361__auto__.call(null,state_37324);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29364__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29364__auto__;
}
break;
}
}catch (e37373){if((e37373 instanceof Object)){
var ex__29365__auto__ = e37373;
var statearr_37374_37412 = state_37324;
(statearr_37374_37412[(5)] = ex__29365__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37324);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37373;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29363__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37413 = state_37324;
state_37324 = G__37413;
continue;
} else {
return ret_value__29363__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__29362__auto__ = function(state_37324){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__29362__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__29362__auto____1.call(this,state_37324);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__29362__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__29362__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__29362__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__29362__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__29362__auto__;
})()
;})(switch__29361__auto__,c__29473__auto__,msg_hist,msg_names,msg))
})();
var state__29475__auto__ = (function (){var statearr_37375 = f__29474__auto__.call(null);
(statearr_37375[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29473__auto__);

return statearr_37375;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29475__auto__);
});})(c__29473__auto__,msg_hist,msg_names,msg))
);

return c__29473__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__29473__auto___37476 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29473__auto___37476,ch){
return (function (){
var f__29474__auto__ = (function (){var switch__29361__auto__ = ((function (c__29473__auto___37476,ch){
return (function (state_37459){
var state_val_37460 = (state_37459[(1)]);
if((state_val_37460 === (1))){
var state_37459__$1 = state_37459;
var statearr_37461_37477 = state_37459__$1;
(statearr_37461_37477[(2)] = null);

(statearr_37461_37477[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37460 === (2))){
var state_37459__$1 = state_37459;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37459__$1,(4),ch);
} else {
if((state_val_37460 === (3))){
var inst_37457 = (state_37459[(2)]);
var state_37459__$1 = state_37459;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37459__$1,inst_37457);
} else {
if((state_val_37460 === (4))){
var inst_37447 = (state_37459[(7)]);
var inst_37447__$1 = (state_37459[(2)]);
var state_37459__$1 = (function (){var statearr_37462 = state_37459;
(statearr_37462[(7)] = inst_37447__$1);

return statearr_37462;
})();
if(cljs.core.truth_(inst_37447__$1)){
var statearr_37463_37478 = state_37459__$1;
(statearr_37463_37478[(1)] = (5));

} else {
var statearr_37464_37479 = state_37459__$1;
(statearr_37464_37479[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37460 === (5))){
var inst_37447 = (state_37459[(7)]);
var inst_37449 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_37447);
var state_37459__$1 = state_37459;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37459__$1,(8),inst_37449);
} else {
if((state_val_37460 === (6))){
var state_37459__$1 = state_37459;
var statearr_37465_37480 = state_37459__$1;
(statearr_37465_37480[(2)] = null);

(statearr_37465_37480[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37460 === (7))){
var inst_37455 = (state_37459[(2)]);
var state_37459__$1 = state_37459;
var statearr_37466_37481 = state_37459__$1;
(statearr_37466_37481[(2)] = inst_37455);

(statearr_37466_37481[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37460 === (8))){
var inst_37451 = (state_37459[(2)]);
var state_37459__$1 = (function (){var statearr_37467 = state_37459;
(statearr_37467[(8)] = inst_37451);

return statearr_37467;
})();
var statearr_37468_37482 = state_37459__$1;
(statearr_37468_37482[(2)] = null);

(statearr_37468_37482[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
});})(c__29473__auto___37476,ch))
;
return ((function (switch__29361__auto__,c__29473__auto___37476,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__29362__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__29362__auto____0 = (function (){
var statearr_37472 = [null,null,null,null,null,null,null,null,null];
(statearr_37472[(0)] = figwheel$client$heads_up_plugin_$_state_machine__29362__auto__);

(statearr_37472[(1)] = (1));

return statearr_37472;
});
var figwheel$client$heads_up_plugin_$_state_machine__29362__auto____1 = (function (state_37459){
while(true){
var ret_value__29363__auto__ = (function (){try{while(true){
var result__29364__auto__ = switch__29361__auto__.call(null,state_37459);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29364__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29364__auto__;
}
break;
}
}catch (e37473){if((e37473 instanceof Object)){
var ex__29365__auto__ = e37473;
var statearr_37474_37483 = state_37459;
(statearr_37474_37483[(5)] = ex__29365__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37459);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37473;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29363__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37484 = state_37459;
state_37459 = G__37484;
continue;
} else {
return ret_value__29363__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__29362__auto__ = function(state_37459){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__29362__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__29362__auto____1.call(this,state_37459);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__29362__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__29362__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__29362__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__29362__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__29362__auto__;
})()
;})(switch__29361__auto__,c__29473__auto___37476,ch))
})();
var state__29475__auto__ = (function (){var statearr_37475 = f__29474__auto__.call(null);
(statearr_37475[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29473__auto___37476);

return statearr_37475;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29475__auto__);
});})(c__29473__auto___37476,ch))
);


figwheel.client.heads_up.ensure_container.call(null);

return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.enforce_project_plugin = (function figwheel$client$enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__29473__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29473__auto__){
return (function (){
var f__29474__auto__ = (function (){var switch__29361__auto__ = ((function (c__29473__auto__){
return (function (state_37505){
var state_val_37506 = (state_37505[(1)]);
if((state_val_37506 === (1))){
var inst_37500 = cljs.core.async.timeout.call(null,(3000));
var state_37505__$1 = state_37505;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37505__$1,(2),inst_37500);
} else {
if((state_val_37506 === (2))){
var inst_37502 = (state_37505[(2)]);
var inst_37503 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_37505__$1 = (function (){var statearr_37507 = state_37505;
(statearr_37507[(7)] = inst_37502);

return statearr_37507;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37505__$1,inst_37503);
} else {
return null;
}
}
});})(c__29473__auto__))
;
return ((function (switch__29361__auto__,c__29473__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__29362__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__29362__auto____0 = (function (){
var statearr_37511 = [null,null,null,null,null,null,null,null];
(statearr_37511[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__29362__auto__);

(statearr_37511[(1)] = (1));

return statearr_37511;
});
var figwheel$client$enforce_project_plugin_$_state_machine__29362__auto____1 = (function (state_37505){
while(true){
var ret_value__29363__auto__ = (function (){try{while(true){
var result__29364__auto__ = switch__29361__auto__.call(null,state_37505);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29364__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29364__auto__;
}
break;
}
}catch (e37512){if((e37512 instanceof Object)){
var ex__29365__auto__ = e37512;
var statearr_37513_37515 = state_37505;
(statearr_37513_37515[(5)] = ex__29365__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37505);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37512;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29363__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37516 = state_37505;
state_37505 = G__37516;
continue;
} else {
return ret_value__29363__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__29362__auto__ = function(state_37505){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__29362__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__29362__auto____1.call(this,state_37505);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__29362__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__29362__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__29362__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__29362__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__29362__auto__;
})()
;})(switch__29361__auto__,c__29473__auto__))
})();
var state__29475__auto__ = (function (){var statearr_37514 = f__29474__auto__.call(null);
(statearr_37514[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29473__auto__);

return statearr_37514;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29475__auto__);
});})(c__29473__auto__))
);

return c__29473__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.enforce_figwheel_version_plugin = (function figwheel$client$enforce_figwheel_version_plugin(opts){
return (function (msg_hist){
var temp__4657__auto__ = new cljs.core.Keyword(null,"figwheel-version","figwheel-version",1409553832).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,msg_hist));
if(cljs.core.truth_(temp__4657__auto__)){
var figwheel_version = temp__4657__auto__;
if(cljs.core.not_EQ_.call(null,figwheel_version,figwheel.client._figwheel_version_)){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different version of Figwheel.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__29473__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29473__auto__,figwheel_version,temp__4657__auto__){
return (function (){
var f__29474__auto__ = (function (){var switch__29361__auto__ = ((function (c__29473__auto__,figwheel_version,temp__4657__auto__){
return (function (state_37539){
var state_val_37540 = (state_37539[(1)]);
if((state_val_37540 === (1))){
var inst_37533 = cljs.core.async.timeout.call(null,(2000));
var state_37539__$1 = state_37539;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37539__$1,(2),inst_37533);
} else {
if((state_val_37540 === (2))){
var inst_37535 = (state_37539[(2)]);
var inst_37536 = [cljs.core.str("Figwheel Client Version <strong>"),cljs.core.str(figwheel.client._figwheel_version_),cljs.core.str("</strong> is not equal to "),cljs.core.str("Figwheel Sidecar Version <strong>"),cljs.core.str(figwheel_version),cljs.core.str("</strong>"),cljs.core.str(".  Shutting down Websocket Connection!"),cljs.core.str("<h4>To fix try:</h4>"),cljs.core.str("<ol><li>Reload this page and make sure you are not getting a cached version of the client.</li>"),cljs.core.str("<li>You may have to clean (delete compiled assets) and rebuild to make sure that the new client code is being used.</li>"),cljs.core.str("<li>Also, make sure you have consistent Figwheel dependencies.</li></ol>")].join('');
var inst_37537 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_37536);
var state_37539__$1 = (function (){var statearr_37541 = state_37539;
(statearr_37541[(7)] = inst_37535);

return statearr_37541;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37539__$1,inst_37537);
} else {
return null;
}
}
});})(c__29473__auto__,figwheel_version,temp__4657__auto__))
;
return ((function (switch__29361__auto__,c__29473__auto__,figwheel_version,temp__4657__auto__){
return (function() {
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__29362__auto__ = null;
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__29362__auto____0 = (function (){
var statearr_37545 = [null,null,null,null,null,null,null,null];
(statearr_37545[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__29362__auto__);

(statearr_37545[(1)] = (1));

return statearr_37545;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__29362__auto____1 = (function (state_37539){
while(true){
var ret_value__29363__auto__ = (function (){try{while(true){
var result__29364__auto__ = switch__29361__auto__.call(null,state_37539);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29364__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29364__auto__;
}
break;
}
}catch (e37546){if((e37546 instanceof Object)){
var ex__29365__auto__ = e37546;
var statearr_37547_37549 = state_37539;
(statearr_37547_37549[(5)] = ex__29365__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37539);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37546;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29363__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37550 = state_37539;
state_37539 = G__37550;
continue;
} else {
return ret_value__29363__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__29362__auto__ = function(state_37539){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__29362__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__29362__auto____1.call(this,state_37539);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__29362__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__29362__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__29362__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__29362__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__29362__auto__;
})()
;})(switch__29361__auto__,c__29473__auto__,figwheel_version,temp__4657__auto__))
})();
var state__29475__auto__ = (function (){var statearr_37548 = f__29474__auto__.call(null);
(statearr_37548[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29473__auto__);

return statearr_37548;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29475__auto__);
});})(c__29473__auto__,figwheel_version,temp__4657__auto__))
);

return c__29473__auto__;
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__37551){
var map__37555 = p__37551;
var map__37555__$1 = ((((!((map__37555 == null)))?((((map__37555.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37555.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37555):map__37555);
var file = cljs.core.get.call(null,map__37555__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__37555__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__37555__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__37557 = "";
var G__37557__$1 = (cljs.core.truth_(file)?[cljs.core.str(G__37557),cljs.core.str("file "),cljs.core.str(file)].join(''):G__37557);
var G__37557__$2 = (cljs.core.truth_(line)?[cljs.core.str(G__37557__$1),cljs.core.str(" at line "),cljs.core.str(line)].join(''):G__37557__$1);
if(cljs.core.truth_((function (){var and__26536__auto__ = line;
if(cljs.core.truth_(and__26536__auto__)){
return column;
} else {
return and__26536__auto__;
}
})())){
return [cljs.core.str(G__37557__$2),cljs.core.str(", column "),cljs.core.str(column)].join('');
} else {
return G__37557__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__37558){
var map__37565 = p__37558;
var map__37565__$1 = ((((!((map__37565 == null)))?((((map__37565.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37565.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37565):map__37565);
var ed = map__37565__$1;
var formatted_exception = cljs.core.get.call(null,map__37565__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__37565__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__37565__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__37567_37571 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__37568_37572 = null;
var count__37569_37573 = (0);
var i__37570_37574 = (0);
while(true){
if((i__37570_37574 < count__37569_37573)){
var msg_37575 = cljs.core._nth.call(null,chunk__37568_37572,i__37570_37574);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_37575);

var G__37576 = seq__37567_37571;
var G__37577 = chunk__37568_37572;
var G__37578 = count__37569_37573;
var G__37579 = (i__37570_37574 + (1));
seq__37567_37571 = G__37576;
chunk__37568_37572 = G__37577;
count__37569_37573 = G__37578;
i__37570_37574 = G__37579;
continue;
} else {
var temp__4657__auto___37580 = cljs.core.seq.call(null,seq__37567_37571);
if(temp__4657__auto___37580){
var seq__37567_37581__$1 = temp__4657__auto___37580;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37567_37581__$1)){
var c__27359__auto___37582 = cljs.core.chunk_first.call(null,seq__37567_37581__$1);
var G__37583 = cljs.core.chunk_rest.call(null,seq__37567_37581__$1);
var G__37584 = c__27359__auto___37582;
var G__37585 = cljs.core.count.call(null,c__27359__auto___37582);
var G__37586 = (0);
seq__37567_37571 = G__37583;
chunk__37568_37572 = G__37584;
count__37569_37573 = G__37585;
i__37570_37574 = G__37586;
continue;
} else {
var msg_37587 = cljs.core.first.call(null,seq__37567_37581__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_37587);

var G__37588 = cljs.core.next.call(null,seq__37567_37581__$1);
var G__37589 = null;
var G__37590 = (0);
var G__37591 = (0);
seq__37567_37571 = G__37588;
chunk__37568_37572 = G__37589;
count__37569_37573 = G__37590;
i__37570_37574 = G__37591;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(cause)){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Error on "),cljs.core.str(figwheel.client.file_line_column.call(null,ed))].join(''));
} else {
}

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__37592){
var map__37595 = p__37592;
var map__37595__$1 = ((((!((map__37595 == null)))?((((map__37595.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37595.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37595):map__37595);
var w = map__37595__$1;
var message = cljs.core.get.call(null,map__37595__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),[cljs.core.str("Figwheel: Compile Warning - "),cljs.core.str(new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(message)),cljs.core.str(" in "),cljs.core.str(figwheel.client.file_line_column.call(null,message))].join(''));

return w;
});
figwheel.client.default_before_load = (function figwheel$client$default_before_load(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function figwheel$client$default_on_cssload(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded CSS files");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if(typeof figwheel.client.config_defaults !== 'undefined'){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[new cljs.core.Var(function(){return figwheel.client.default_on_compile_warning;},new cljs.core.Symbol("figwheel.client","default-on-compile-warning","figwheel.client/default-on-compile-warning",584144208,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-warning","default-on-compile-warning",-18911586,null),"resources/public/js/compiled/out/figwheel/client.cljs",33,1,357,357,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"message","message",1234475525,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"w","w",1994700528,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_warning)?figwheel.client.default_on_compile_warning.cljs$lang$test:null)])),figwheel.client.default_on_jsload,true,new cljs.core.Var(function(){return figwheel.client.default_on_compile_fail;},new cljs.core.Symbol("figwheel.client","default-on-compile-fail","figwheel.client/default-on-compile-fail",1384826337,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-fail","default-on-compile-fail",-158814813,null),"resources/public/js/compiled/out/figwheel/client.cljs",30,1,349,349,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"formatted-exception","formatted-exception",1524042501,null),new cljs.core.Symbol(null,"exception-data","exception-data",1128056641,null),new cljs.core.Symbol(null,"cause","cause",1872432779,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"ed","ed",2076825751,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_fail)?figwheel.client.default_on_compile_fail.cljs$lang$test:null)])),false,true,[cljs.core.str("ws://"),cljs.core.str((cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),cljs.core.str("/figwheel-ws")].join(''),false,figwheel.client.default_before_load,false,false,(100),true,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.fill_url_template = (function figwheel$client$fill_url_template(config){
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
return cljs.core.update_in.call(null,config,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938)], null),(function (x){
return clojure.string.replace.call(null,clojure.string.replace.call(null,x,"[[client-hostname]]",location.hostname),"[[client-port]]",location.port);
}));
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"enforce-figwheel-version-plugin","enforce-figwheel-version-plugin",-1916185220),figwheel.client.enforce_figwheel_version_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = ((cljs.core.not.call(null,figwheel.client.utils.html_env_QMARK_.call(null)))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__26536__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__26536__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__26536__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_message_watch = (function figwheel$client$add_message_watch(key,callback){
return cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,key,(function (_,___$1,___$2,msg_hist){
return callback.call(null,cljs.core.first.call(null,msg_hist));
}));
});
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__37607 = cljs.core.seq.call(null,plugins);
var chunk__37608 = null;
var count__37609 = (0);
var i__37610 = (0);
while(true){
if((i__37610 < count__37609)){
var vec__37611 = cljs.core._nth.call(null,chunk__37608,i__37610);
var k = cljs.core.nth.call(null,vec__37611,(0),null);
var plugin = cljs.core.nth.call(null,vec__37611,(1),null);
if(cljs.core.truth_(plugin)){
var pl_37617 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__37607,chunk__37608,count__37609,i__37610,pl_37617,vec__37611,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_37617.call(null,msg_hist);
});})(seq__37607,chunk__37608,count__37609,i__37610,pl_37617,vec__37611,k,plugin))
);
} else {
}

var G__37618 = seq__37607;
var G__37619 = chunk__37608;
var G__37620 = count__37609;
var G__37621 = (i__37610 + (1));
seq__37607 = G__37618;
chunk__37608 = G__37619;
count__37609 = G__37620;
i__37610 = G__37621;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__37607);
if(temp__4657__auto__){
var seq__37607__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37607__$1)){
var c__27359__auto__ = cljs.core.chunk_first.call(null,seq__37607__$1);
var G__37622 = cljs.core.chunk_rest.call(null,seq__37607__$1);
var G__37623 = c__27359__auto__;
var G__37624 = cljs.core.count.call(null,c__27359__auto__);
var G__37625 = (0);
seq__37607 = G__37622;
chunk__37608 = G__37623;
count__37609 = G__37624;
i__37610 = G__37625;
continue;
} else {
var vec__37614 = cljs.core.first.call(null,seq__37607__$1);
var k = cljs.core.nth.call(null,vec__37614,(0),null);
var plugin = cljs.core.nth.call(null,vec__37614,(1),null);
if(cljs.core.truth_(plugin)){
var pl_37626 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__37607,chunk__37608,count__37609,i__37610,pl_37626,vec__37614,k,plugin,seq__37607__$1,temp__4657__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_37626.call(null,msg_hist);
});})(seq__37607,chunk__37608,count__37609,i__37610,pl_37626,vec__37614,k,plugin,seq__37607__$1,temp__4657__auto__))
);
} else {
}

var G__37627 = cljs.core.next.call(null,seq__37607__$1);
var G__37628 = null;
var G__37629 = (0);
var G__37630 = (0);
seq__37607 = G__37627;
chunk__37608 = G__37628;
count__37609 = G__37629;
i__37610 = G__37630;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function figwheel$client$start(var_args){
var args37631 = [];
var len__27623__auto___37638 = arguments.length;
var i__27624__auto___37639 = (0);
while(true){
if((i__27624__auto___37639 < len__27623__auto___37638)){
args37631.push((arguments[i__27624__auto___37639]));

var G__37640 = (i__27624__auto___37639 + (1));
i__27624__auto___37639 = G__37640;
continue;
} else {
}
break;
}

var G__37633 = args37631.length;
switch (G__37633) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args37631.length)].join('')));

}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if((goog.dependencies_ == null)){
return null;
} else {
if(typeof figwheel.client.__figwheel_start_once__ !== 'undefined'){
return null;
} else {
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.fill_url_template.call(null,figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370)))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts);

figwheel.client.enable_repl_print_BANG_.call(null);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

var seq__37634_37642 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__37635_37643 = null;
var count__37636_37644 = (0);
var i__37637_37645 = (0);
while(true){
if((i__37637_37645 < count__37636_37644)){
var msg_37646 = cljs.core._nth.call(null,chunk__37635_37643,i__37637_37645);
figwheel.client.socket.handle_incoming_message.call(null,msg_37646);

var G__37647 = seq__37634_37642;
var G__37648 = chunk__37635_37643;
var G__37649 = count__37636_37644;
var G__37650 = (i__37637_37645 + (1));
seq__37634_37642 = G__37647;
chunk__37635_37643 = G__37648;
count__37636_37644 = G__37649;
i__37637_37645 = G__37650;
continue;
} else {
var temp__4657__auto___37651 = cljs.core.seq.call(null,seq__37634_37642);
if(temp__4657__auto___37651){
var seq__37634_37652__$1 = temp__4657__auto___37651;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37634_37652__$1)){
var c__27359__auto___37653 = cljs.core.chunk_first.call(null,seq__37634_37652__$1);
var G__37654 = cljs.core.chunk_rest.call(null,seq__37634_37652__$1);
var G__37655 = c__27359__auto___37653;
var G__37656 = cljs.core.count.call(null,c__27359__auto___37653);
var G__37657 = (0);
seq__37634_37642 = G__37654;
chunk__37635_37643 = G__37655;
count__37636_37644 = G__37656;
i__37637_37645 = G__37657;
continue;
} else {
var msg_37658 = cljs.core.first.call(null,seq__37634_37652__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_37658);

var G__37659 = cljs.core.next.call(null,seq__37634_37652__$1);
var G__37660 = null;
var G__37661 = (0);
var G__37662 = (0);
seq__37634_37642 = G__37659;
chunk__37635_37643 = G__37660;
count__37636_37644 = G__37661;
i__37637_37645 = G__37662;
continue;
}
} else {
}
}
break;
}

return figwheel.client.socket.open.call(null,system_options);
}));
}
}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

figwheel.client.start.cljs$lang$maxFixedArity = 1;

figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(var_args){
var args__27630__auto__ = [];
var len__27623__auto___37667 = arguments.length;
var i__27624__auto___37668 = (0);
while(true){
if((i__27624__auto___37668 < len__27623__auto___37667)){
args__27630__auto__.push((arguments[i__27624__auto___37668]));

var G__37669 = (i__27624__auto___37668 + (1));
i__27624__auto___37668 = G__37669;
continue;
} else {
}
break;
}

var argseq__27631__auto__ = ((((0) < args__27630__auto__.length))?(new cljs.core.IndexedSeq(args__27630__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__27631__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__37664){
var map__37665 = p__37664;
var map__37665__$1 = ((((!((map__37665 == null)))?((((map__37665.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37665.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37665):map__37665);
var opts = map__37665__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq37663){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37663));
});

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e37671){if((e37671 instanceof Error)){
var e = e37671;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e37671;

}
}});
figwheel.client.console_intro_message = "Figwheel has compiled a temporary helper application to your :output-file.\n\nThe code currently in your configured output file does not\nrepresent the code that you are trying to compile.\n\nThis temporary application is intended to help you continue to get\nfeedback from Figwheel until the build you are working on compiles\ncorrectly.\n\nWhen your ClojureScript source code compiles correctly this helper\napplication will auto-reload and pick up your freshly compiled\nClojureScript program.";
figwheel.client.bad_compile_helper_app = (function figwheel$client$bad_compile_helper_app(){
cljs.core.enable_console_print_BANG_.call(null);

var config = figwheel.client.fetch_data_from_env.call(null);
cljs.core.println.call(null,figwheel.client.console_intro_message);

figwheel.client.heads_up.bad_compile_screen.call(null);

if(cljs.core.truth_(goog.dependencies_)){
} else {
goog.dependencies_ = true;
}

figwheel.client.start.call(null,config);

return figwheel.client.add_message_watch.call(null,new cljs.core.Keyword(null,"listen-for-successful-compile","listen-for-successful-compile",-995277603),((function (config){
return (function (p__37675){
var map__37676 = p__37675;
var map__37676__$1 = ((((!((map__37676 == null)))?((((map__37676.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37676.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37676):map__37676);
var msg_name = cljs.core.get.call(null,map__37676__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return location.href = location.href;
} else {
return null;
}
});})(config))
);
});

//# sourceMappingURL=client.js.map?rel=1496160790934