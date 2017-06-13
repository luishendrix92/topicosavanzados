// Compiled by ClojureScript 1.9.229 {}
goog.provide('devtools.formatters.templating');
goog.require('cljs.core');
goog.require('cljs.pprint');
goog.require('clojure.walk');
goog.require('devtools.util');
goog.require('devtools.protocols');
goog.require('devtools.formatters.helpers');
goog.require('devtools.formatters.state');
goog.require('clojure.string');
devtools.formatters.templating.mark_as_group_BANG_ = (function devtools$formatters$templating$mark_as_group_BANG_(value){
var x40376_40377 = value;
x40376_40377.devtools$protocols$IGroup$ = true;


return value;
});
devtools.formatters.templating.group_QMARK_ = (function devtools$formatters$templating$group_QMARK_(value){
if(!((value == null))){
if((false) || (value.devtools$protocols$IGroup$)){
return true;
} else {
if((!value.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,devtools.protocols.IGroup,value);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,devtools.protocols.IGroup,value);
}
});
devtools.formatters.templating.mark_as_template_BANG_ = (function devtools$formatters$templating$mark_as_template_BANG_(value){
var x40381_40382 = value;
x40381_40382.devtools$protocols$ITemplate$ = true;


return value;
});
devtools.formatters.templating.template_QMARK_ = (function devtools$formatters$templating$template_QMARK_(value){
if(!((value == null))){
if((false) || (value.devtools$protocols$ITemplate$)){
return true;
} else {
if((!value.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,devtools.protocols.ITemplate,value);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,devtools.protocols.ITemplate,value);
}
});
devtools.formatters.templating.mark_as_surrogate_BANG_ = (function devtools$formatters$templating$mark_as_surrogate_BANG_(value){
var x40386_40387 = value;
x40386_40387.devtools$protocols$ISurrogate$ = true;


return value;
});
devtools.formatters.templating.surrogate_QMARK_ = (function devtools$formatters$templating$surrogate_QMARK_(value){
if(!((value == null))){
if((false) || (value.devtools$protocols$ISurrogate$)){
return true;
} else {
if((!value.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,devtools.protocols.ISurrogate,value);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,devtools.protocols.ISurrogate,value);
}
});
devtools.formatters.templating.reference_QMARK_ = (function devtools$formatters$templating$reference_QMARK_(value){
var and__26536__auto__ = devtools.formatters.templating.group_QMARK_.call(null,value);
if(cljs.core.truth_(and__26536__auto__)){
return cljs.core._EQ_.call(null,(value[(0)]),"object");
} else {
return and__26536__auto__;
}
});
devtools.formatters.templating.make_group = (function devtools$formatters$templating$make_group(var_args){
var args__27630__auto__ = [];
var len__27623__auto___40395 = arguments.length;
var i__27624__auto___40396 = (0);
while(true){
if((i__27624__auto___40396 < len__27623__auto___40395)){
args__27630__auto__.push((arguments[i__27624__auto___40396]));

var G__40397 = (i__27624__auto___40396 + (1));
i__27624__auto___40396 = G__40397;
continue;
} else {
}
break;
}

var argseq__27631__auto__ = ((((0) < args__27630__auto__.length))?(new cljs.core.IndexedSeq(args__27630__auto__.slice((0)),(0),null)):null);
return devtools.formatters.templating.make_group.cljs$core$IFn$_invoke$arity$variadic(argseq__27631__auto__);
});

devtools.formatters.templating.make_group.cljs$core$IFn$_invoke$arity$variadic = (function (items){
var group = devtools.formatters.templating.mark_as_group_BANG_.call(null,[]);
var seq__40391_40398 = cljs.core.seq.call(null,items);
var chunk__40392_40399 = null;
var count__40393_40400 = (0);
var i__40394_40401 = (0);
while(true){
if((i__40394_40401 < count__40393_40400)){
var item_40402 = cljs.core._nth.call(null,chunk__40392_40399,i__40394_40401);
if(cljs.core.some_QMARK_.call(null,item_40402)){
if(cljs.core.coll_QMARK_.call(null,item_40402)){
(group["push"]).apply(group,devtools.formatters.templating.mark_as_group_BANG_.call(null,cljs.core.into_array.call(null,item_40402)));
} else {
group.push(devtools.formatters.helpers.pref.call(null,item_40402));
}
} else {
}

var G__40403 = seq__40391_40398;
var G__40404 = chunk__40392_40399;
var G__40405 = count__40393_40400;
var G__40406 = (i__40394_40401 + (1));
seq__40391_40398 = G__40403;
chunk__40392_40399 = G__40404;
count__40393_40400 = G__40405;
i__40394_40401 = G__40406;
continue;
} else {
var temp__4657__auto___40407 = cljs.core.seq.call(null,seq__40391_40398);
if(temp__4657__auto___40407){
var seq__40391_40408__$1 = temp__4657__auto___40407;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__40391_40408__$1)){
var c__27359__auto___40409 = cljs.core.chunk_first.call(null,seq__40391_40408__$1);
var G__40410 = cljs.core.chunk_rest.call(null,seq__40391_40408__$1);
var G__40411 = c__27359__auto___40409;
var G__40412 = cljs.core.count.call(null,c__27359__auto___40409);
var G__40413 = (0);
seq__40391_40398 = G__40410;
chunk__40392_40399 = G__40411;
count__40393_40400 = G__40412;
i__40394_40401 = G__40413;
continue;
} else {
var item_40414 = cljs.core.first.call(null,seq__40391_40408__$1);
if(cljs.core.some_QMARK_.call(null,item_40414)){
if(cljs.core.coll_QMARK_.call(null,item_40414)){
(group["push"]).apply(group,devtools.formatters.templating.mark_as_group_BANG_.call(null,cljs.core.into_array.call(null,item_40414)));
} else {
group.push(devtools.formatters.helpers.pref.call(null,item_40414));
}
} else {
}

var G__40415 = cljs.core.next.call(null,seq__40391_40408__$1);
var G__40416 = null;
var G__40417 = (0);
var G__40418 = (0);
seq__40391_40398 = G__40415;
chunk__40392_40399 = G__40416;
count__40393_40400 = G__40417;
i__40394_40401 = G__40418;
continue;
}
} else {
}
}
break;
}

return group;
});

devtools.formatters.templating.make_group.cljs$lang$maxFixedArity = (0);

devtools.formatters.templating.make_group.cljs$lang$applyTo = (function (seq40390){
return devtools.formatters.templating.make_group.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq40390));
});

devtools.formatters.templating.make_template = (function devtools$formatters$templating$make_template(var_args){
var args__27630__auto__ = [];
var len__27623__auto___40426 = arguments.length;
var i__27624__auto___40427 = (0);
while(true){
if((i__27624__auto___40427 < len__27623__auto___40426)){
args__27630__auto__.push((arguments[i__27624__auto___40427]));

var G__40428 = (i__27624__auto___40427 + (1));
i__27624__auto___40427 = G__40428;
continue;
} else {
}
break;
}

var argseq__27631__auto__ = ((((2) < args__27630__auto__.length))?(new cljs.core.IndexedSeq(args__27630__auto__.slice((2)),(0),null)):null);
return devtools.formatters.templating.make_template.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__27631__auto__);
});

devtools.formatters.templating.make_template.cljs$core$IFn$_invoke$arity$variadic = (function (tag,style,children){
var tag__$1 = devtools.formatters.helpers.pref.call(null,tag);
var style__$1 = devtools.formatters.helpers.pref.call(null,style);
var template = devtools.formatters.templating.mark_as_template_BANG_.call(null,[tag__$1,((cljs.core.empty_QMARK_.call(null,style__$1))?({}):({"style": style__$1}))]);
var seq__40422_40429 = cljs.core.seq.call(null,children);
var chunk__40423_40430 = null;
var count__40424_40431 = (0);
var i__40425_40432 = (0);
while(true){
if((i__40425_40432 < count__40424_40431)){
var child_40433 = cljs.core._nth.call(null,chunk__40423_40430,i__40425_40432);
if(cljs.core.some_QMARK_.call(null,child_40433)){
if(cljs.core.coll_QMARK_.call(null,child_40433)){
(template["push"]).apply(template,devtools.formatters.templating.mark_as_template_BANG_.call(null,cljs.core.into_array.call(null,cljs.core.keep.call(null,devtools.formatters.helpers.pref,child_40433))));
} else {
var temp__4655__auto___40434 = devtools.formatters.helpers.pref.call(null,child_40433);
if(cljs.core.truth_(temp__4655__auto___40434)){
var child_value_40435 = temp__4655__auto___40434;
template.push(child_value_40435);
} else {
}
}
} else {
}

var G__40436 = seq__40422_40429;
var G__40437 = chunk__40423_40430;
var G__40438 = count__40424_40431;
var G__40439 = (i__40425_40432 + (1));
seq__40422_40429 = G__40436;
chunk__40423_40430 = G__40437;
count__40424_40431 = G__40438;
i__40425_40432 = G__40439;
continue;
} else {
var temp__4657__auto___40440 = cljs.core.seq.call(null,seq__40422_40429);
if(temp__4657__auto___40440){
var seq__40422_40441__$1 = temp__4657__auto___40440;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__40422_40441__$1)){
var c__27359__auto___40442 = cljs.core.chunk_first.call(null,seq__40422_40441__$1);
var G__40443 = cljs.core.chunk_rest.call(null,seq__40422_40441__$1);
var G__40444 = c__27359__auto___40442;
var G__40445 = cljs.core.count.call(null,c__27359__auto___40442);
var G__40446 = (0);
seq__40422_40429 = G__40443;
chunk__40423_40430 = G__40444;
count__40424_40431 = G__40445;
i__40425_40432 = G__40446;
continue;
} else {
var child_40447 = cljs.core.first.call(null,seq__40422_40441__$1);
if(cljs.core.some_QMARK_.call(null,child_40447)){
if(cljs.core.coll_QMARK_.call(null,child_40447)){
(template["push"]).apply(template,devtools.formatters.templating.mark_as_template_BANG_.call(null,cljs.core.into_array.call(null,cljs.core.keep.call(null,devtools.formatters.helpers.pref,child_40447))));
} else {
var temp__4655__auto___40448 = devtools.formatters.helpers.pref.call(null,child_40447);
if(cljs.core.truth_(temp__4655__auto___40448)){
var child_value_40449 = temp__4655__auto___40448;
template.push(child_value_40449);
} else {
}
}
} else {
}

var G__40450 = cljs.core.next.call(null,seq__40422_40441__$1);
var G__40451 = null;
var G__40452 = (0);
var G__40453 = (0);
seq__40422_40429 = G__40450;
chunk__40423_40430 = G__40451;
count__40424_40431 = G__40452;
i__40425_40432 = G__40453;
continue;
}
} else {
}
}
break;
}

return template;
});

devtools.formatters.templating.make_template.cljs$lang$maxFixedArity = (2);

devtools.formatters.templating.make_template.cljs$lang$applyTo = (function (seq40419){
var G__40420 = cljs.core.first.call(null,seq40419);
var seq40419__$1 = cljs.core.next.call(null,seq40419);
var G__40421 = cljs.core.first.call(null,seq40419__$1);
var seq40419__$2 = cljs.core.next.call(null,seq40419__$1);
return devtools.formatters.templating.make_template.cljs$core$IFn$_invoke$arity$variadic(G__40420,G__40421,seq40419__$2);
});

devtools.formatters.templating.concat_templates_BANG_ = (function devtools$formatters$templating$concat_templates_BANG_(var_args){
var args__27630__auto__ = [];
var len__27623__auto___40456 = arguments.length;
var i__27624__auto___40457 = (0);
while(true){
if((i__27624__auto___40457 < len__27623__auto___40456)){
args__27630__auto__.push((arguments[i__27624__auto___40457]));

var G__40458 = (i__27624__auto___40457 + (1));
i__27624__auto___40457 = G__40458;
continue;
} else {
}
break;
}

var argseq__27631__auto__ = ((((1) < args__27630__auto__.length))?(new cljs.core.IndexedSeq(args__27630__auto__.slice((1)),(0),null)):null);
return devtools.formatters.templating.concat_templates_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__27631__auto__);
});

devtools.formatters.templating.concat_templates_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (template,templates){
return devtools.formatters.templating.mark_as_template_BANG_.call(null,goog.object.get(template,"concat").apply(template,cljs.core.into_array.call(null,cljs.core.map.call(null,cljs.core.into_array,cljs.core.keep.call(null,devtools.formatters.helpers.pref,templates)))));
});

devtools.formatters.templating.concat_templates_BANG_.cljs$lang$maxFixedArity = (1);

devtools.formatters.templating.concat_templates_BANG_.cljs$lang$applyTo = (function (seq40454){
var G__40455 = cljs.core.first.call(null,seq40454);
var seq40454__$1 = cljs.core.next.call(null,seq40454);
return devtools.formatters.templating.concat_templates_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__40455,seq40454__$1);
});

devtools.formatters.templating.extend_template_BANG_ = (function devtools$formatters$templating$extend_template_BANG_(var_args){
var args__27630__auto__ = [];
var len__27623__auto___40461 = arguments.length;
var i__27624__auto___40462 = (0);
while(true){
if((i__27624__auto___40462 < len__27623__auto___40461)){
args__27630__auto__.push((arguments[i__27624__auto___40462]));

var G__40463 = (i__27624__auto___40462 + (1));
i__27624__auto___40462 = G__40463;
continue;
} else {
}
break;
}

var argseq__27631__auto__ = ((((1) < args__27630__auto__.length))?(new cljs.core.IndexedSeq(args__27630__auto__.slice((1)),(0),null)):null);
return devtools.formatters.templating.extend_template_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__27631__auto__);
});

devtools.formatters.templating.extend_template_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (template,args){
return devtools.formatters.templating.concat_templates_BANG_.call(null,template,args);
});

devtools.formatters.templating.extend_template_BANG_.cljs$lang$maxFixedArity = (1);

devtools.formatters.templating.extend_template_BANG_.cljs$lang$applyTo = (function (seq40459){
var G__40460 = cljs.core.first.call(null,seq40459);
var seq40459__$1 = cljs.core.next.call(null,seq40459);
return devtools.formatters.templating.extend_template_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__40460,seq40459__$1);
});

devtools.formatters.templating.make_surrogate = (function devtools$formatters$templating$make_surrogate(var_args){
var args40464 = [];
var len__27623__auto___40469 = arguments.length;
var i__27624__auto___40470 = (0);
while(true){
if((i__27624__auto___40470 < len__27623__auto___40469)){
args40464.push((arguments[i__27624__auto___40470]));

var G__40471 = (i__27624__auto___40470 + (1));
i__27624__auto___40470 = G__40471;
continue;
} else {
}
break;
}

var G__40466 = args40464.length;
switch (G__40466) {
case 1:
return devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args40464.length)].join('')));

}
});

devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$1 = (function (object){
return devtools.formatters.templating.make_surrogate.call(null,object,null);
});

devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$2 = (function (object,header){
return devtools.formatters.templating.make_surrogate.call(null,object,header,null);
});

devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$3 = (function (object,header,body){
return devtools.formatters.templating.make_surrogate.call(null,object,header,body,(0));
});

devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$4 = (function (object,header,body,start_index){
return devtools.formatters.templating.mark_as_surrogate_BANG_.call(null,(function (){var obj40468 = {"target":object,"header":header,"body":body,"startIndex":(function (){var or__26548__auto__ = start_index;
if(cljs.core.truth_(or__26548__auto__)){
return or__26548__auto__;
} else {
return (0);
}
})()};
return obj40468;
})());
});

devtools.formatters.templating.make_surrogate.cljs$lang$maxFixedArity = 4;

devtools.formatters.templating.get_surrogate_target = (function devtools$formatters$templating$get_surrogate_target(surrogate){
if(cljs.core.truth_(devtools.formatters.templating.surrogate_QMARK_.call(null,surrogate))){
} else {
throw (new Error("Assert failed: (surrogate? surrogate)"));
}

return goog.object.get(surrogate,"target");
});
devtools.formatters.templating.get_surrogate_header = (function devtools$formatters$templating$get_surrogate_header(surrogate){
if(cljs.core.truth_(devtools.formatters.templating.surrogate_QMARK_.call(null,surrogate))){
} else {
throw (new Error("Assert failed: (surrogate? surrogate)"));
}

return goog.object.get(surrogate,"header");
});
devtools.formatters.templating.get_surrogate_body = (function devtools$formatters$templating$get_surrogate_body(surrogate){
if(cljs.core.truth_(devtools.formatters.templating.surrogate_QMARK_.call(null,surrogate))){
} else {
throw (new Error("Assert failed: (surrogate? surrogate)"));
}

return goog.object.get(surrogate,"body");
});
devtools.formatters.templating.get_surrogate_start_index = (function devtools$formatters$templating$get_surrogate_start_index(surrogate){
if(cljs.core.truth_(devtools.formatters.templating.surrogate_QMARK_.call(null,surrogate))){
} else {
throw (new Error("Assert failed: (surrogate? surrogate)"));
}

return goog.object.get(surrogate,"startIndex");
});
devtools.formatters.templating.make_reference = (function devtools$formatters$templating$make_reference(var_args){
var args__27630__auto__ = [];
var len__27623__auto___40479 = arguments.length;
var i__27624__auto___40480 = (0);
while(true){
if((i__27624__auto___40480 < len__27623__auto___40479)){
args__27630__auto__.push((arguments[i__27624__auto___40480]));

var G__40481 = (i__27624__auto___40480 + (1));
i__27624__auto___40480 = G__40481;
continue;
} else {
}
break;
}

var argseq__27631__auto__ = ((((1) < args__27630__auto__.length))?(new cljs.core.IndexedSeq(args__27630__auto__.slice((1)),(0),null)):null);
return devtools.formatters.templating.make_reference.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__27631__auto__);
});

devtools.formatters.templating.make_reference.cljs$core$IFn$_invoke$arity$variadic = (function (object,p__40475){
var vec__40476 = p__40475;
var state_override_fn = cljs.core.nth.call(null,vec__40476,(0),null);
if(((state_override_fn == null)) || (cljs.core.fn_QMARK_.call(null,state_override_fn))){
} else {
throw (new Error("Assert failed: (or (nil? state-override-fn) (fn? state-override-fn))"));
}

if((object == null)){
return devtools.formatters.templating.make_template.call(null,new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.Keyword(null,"nil-style","nil-style",-1505044832),new cljs.core.Keyword(null,"nil-label","nil-label",-587789203));
} else {
var sub_state = ((cljs.core.some_QMARK_.call(null,state_override_fn))?state_override_fn.call(null,devtools.formatters.state.get_current_state.call(null)):devtools.formatters.state.get_current_state.call(null));
return devtools.formatters.templating.make_group.call(null,"object",({"object": object, "config": sub_state}));
}
});

devtools.formatters.templating.make_reference.cljs$lang$maxFixedArity = (1);

devtools.formatters.templating.make_reference.cljs$lang$applyTo = (function (seq40473){
var G__40474 = cljs.core.first.call(null,seq40473);
var seq40473__$1 = cljs.core.next.call(null,seq40473);
return devtools.formatters.templating.make_reference.cljs$core$IFn$_invoke$arity$variadic(G__40474,seq40473__$1);
});

devtools.formatters.templating._STAR_current_render_stack_STAR_ = cljs.core.PersistentVector.EMPTY;
devtools.formatters.templating._STAR_current_render_path_STAR_ = cljs.core.PersistentVector.EMPTY;
devtools.formatters.templating.pprint_str = (function devtools$formatters$templating$pprint_str(markup){
var sb__27534__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_40485_40488 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_40486_40489 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_40485_40488,_STAR_print_fn_STAR_40486_40489,sb__27534__auto__){
return (function (x__27535__auto__){
return sb__27534__auto__.append(x__27535__auto__);
});})(_STAR_print_newline_STAR_40485_40488,_STAR_print_fn_STAR_40486_40489,sb__27534__auto__))
;

try{var _STAR_print_level_STAR_40487_40490 = cljs.core._STAR_print_level_STAR_;
cljs.core._STAR_print_level_STAR_ = (300);

try{cljs.pprint.pprint.call(null,markup);
}finally {cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR_40487_40490;
}}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_40486_40489;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_40485_40488;
}
return [cljs.core.str(sb__27534__auto__)].join('');
});
devtools.formatters.templating.print_preview = (function devtools$formatters$templating$print_preview(markup){
var _STAR_print_level_STAR_40492 = cljs.core._STAR_print_level_STAR_;
cljs.core._STAR_print_level_STAR_ = (1);

try{return cljs.core.pr_str.call(null,markup);
}finally {cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR_40492;
}});
devtools.formatters.templating.add_stack_separators = (function devtools$formatters$templating$add_stack_separators(stack){
return cljs.core.interpose.call(null,"-------------",stack);
});
devtools.formatters.templating.replace_fns_with_markers = (function devtools$formatters$templating$replace_fns_with_markers(stack){
var f = (function (v){
if(cljs.core.fn_QMARK_.call(null,v)){
return "##fn##";
} else {
return v;
}
});
return clojure.walk.prewalk.call(null,f,stack);
});
devtools.formatters.templating.pprint_render_calls = (function devtools$formatters$templating$pprint_render_calls(stack){
return cljs.core.map.call(null,devtools.formatters.templating.pprint_str,stack);
});
devtools.formatters.templating.pprint_render_stack = (function devtools$formatters$templating$pprint_render_stack(stack){
return clojure.string.join.call(null,"\n",devtools.formatters.templating.add_stack_separators.call(null,devtools.formatters.templating.pprint_render_calls.call(null,devtools.formatters.templating.replace_fns_with_markers.call(null,cljs.core.reverse.call(null,stack)))));
});
devtools.formatters.templating.pprint_render_path = (function devtools$formatters$templating$pprint_render_path(path){
return devtools.formatters.templating.pprint_str.call(null,path);
});
devtools.formatters.templating.assert_markup_error = (function devtools$formatters$templating$assert_markup_error(msg){
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str(msg),cljs.core.str("\n"),cljs.core.str("Render path: "),cljs.core.str(devtools.formatters.templating.pprint_render_path.call(null,devtools.formatters.templating._STAR_current_render_path_STAR_)),cljs.core.str("\n"),cljs.core.str("Render stack:\n"),cljs.core.str(devtools.formatters.templating.pprint_render_stack.call(null,devtools.formatters.templating._STAR_current_render_stack_STAR_))].join('')),cljs.core.str("\n"),cljs.core.str("false")].join('')));

});
devtools.formatters.templating.surrogate_markup_QMARK_ = (function devtools$formatters$templating$surrogate_markup_QMARK_(markup){
return (cljs.core.sequential_QMARK_.call(null,markup)) && (cljs.core._EQ_.call(null,cljs.core.first.call(null,markup),"surrogate"));
});
devtools.formatters.templating.render_special = (function devtools$formatters$templating$render_special(name,args){
var G__40494 = name;
switch (G__40494) {
case "surrogate":
var obj = cljs.core.first.call(null,args);
var converted_args = cljs.core.map.call(null,devtools.formatters.templating.render_json_ml_STAR_,cljs.core.rest.call(null,args));
return cljs.core.apply.call(null,devtools.formatters.templating.make_surrogate,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [obj], null),converted_args));

break;
case "reference":
var obj = cljs.core.first.call(null,args);
var converted_obj = (cljs.core.truth_(devtools.formatters.templating.surrogate_markup_QMARK_.call(null,obj))?devtools.formatters.templating.render_json_ml_STAR_.call(null,obj):obj);
return cljs.core.apply.call(null,devtools.formatters.templating.make_reference,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [converted_obj], null),cljs.core.rest.call(null,args)));

break;
default:
return devtools.formatters.templating.assert_markup_error.call(null,[cljs.core.str("no matching special tag name: '"),cljs.core.str(name),cljs.core.str("'")].join(''));

}
});
devtools.formatters.templating.emptyish_QMARK_ = (function devtools$formatters$templating$emptyish_QMARK_(v){
if((cljs.core.seqable_QMARK_.call(null,v)) || (cljs.core.array_QMARK_.call(null,v)) || (typeof v === 'string')){
return cljs.core.empty_QMARK_.call(null,v);
} else {
return false;
}
});
devtools.formatters.templating.render_subtree = (function devtools$formatters$templating$render_subtree(tag,children){
var vec__40499 = tag;
var html_tag = cljs.core.nth.call(null,vec__40499,(0),null);
var style = cljs.core.nth.call(null,vec__40499,(1),null);
return cljs.core.apply.call(null,devtools.formatters.templating.make_template,html_tag,style,cljs.core.map.call(null,devtools.formatters.templating.render_json_ml_STAR_,cljs.core.remove.call(null,devtools.formatters.templating.emptyish_QMARK_,cljs.core.map.call(null,devtools.formatters.helpers.pref,children))));
});
devtools.formatters.templating.render_json_ml_STAR_ = (function devtools$formatters$templating$render_json_ml_STAR_(markup){
if(!(cljs.core.sequential_QMARK_.call(null,markup))){
return markup;
} else {
var _STAR_current_render_path_STAR_40503 = devtools.formatters.templating._STAR_current_render_path_STAR_;
devtools.formatters.templating._STAR_current_render_path_STAR_ = cljs.core.conj.call(null,devtools.formatters.templating._STAR_current_render_path_STAR_,cljs.core.first.call(null,markup));

try{var tag = devtools.formatters.helpers.pref.call(null,cljs.core.first.call(null,markup));
if(typeof tag === 'string'){
return devtools.formatters.templating.render_special.call(null,tag,cljs.core.rest.call(null,markup));
} else {
if(cljs.core.sequential_QMARK_.call(null,tag)){
return devtools.formatters.templating.render_subtree.call(null,tag,cljs.core.rest.call(null,markup));
} else {
return devtools.formatters.templating.assert_markup_error.call(null,[cljs.core.str("invalid json-ml markup at "),cljs.core.str(devtools.formatters.templating.print_preview.call(null,markup)),cljs.core.str(":")].join(''));

}
}
}finally {devtools.formatters.templating._STAR_current_render_path_STAR_ = _STAR_current_render_path_STAR_40503;
}}
});
devtools.formatters.templating.render_json_ml = (function devtools$formatters$templating$render_json_ml(markup){
var _STAR_current_render_stack_STAR_40506 = devtools.formatters.templating._STAR_current_render_stack_STAR_;
var _STAR_current_render_path_STAR_40507 = devtools.formatters.templating._STAR_current_render_path_STAR_;
devtools.formatters.templating._STAR_current_render_stack_STAR_ = cljs.core.conj.call(null,devtools.formatters.templating._STAR_current_render_stack_STAR_,markup);

devtools.formatters.templating._STAR_current_render_path_STAR_ = cljs.core.conj.call(null,devtools.formatters.templating._STAR_current_render_path_STAR_,"<render-json-ml>");

try{return devtools.formatters.templating.render_json_ml_STAR_.call(null,markup);
}finally {devtools.formatters.templating._STAR_current_render_path_STAR_ = _STAR_current_render_path_STAR_40507;

devtools.formatters.templating._STAR_current_render_stack_STAR_ = _STAR_current_render_stack_STAR_40506;
}});
devtools.formatters.templating.assert_failed_markup_rendering = (function devtools$formatters$templating$assert_failed_markup_rendering(initial_value,value){
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("result of markup rendering must be a template,\n"),cljs.core.str("resolved to "),cljs.core.str(devtools.formatters.templating.pprint_str.call(null,value)),cljs.core.str("initial value: "),cljs.core.str(devtools.formatters.templating.pprint_str.call(null,initial_value))].join('')),cljs.core.str("\n"),cljs.core.str("false")].join('')));

});
devtools.formatters.templating.render_markup_STAR_ = (function devtools$formatters$templating$render_markup_STAR_(initial_value,value){
while(true){
if(cljs.core.fn_QMARK_.call(null,value)){
var G__40508 = initial_value;
var G__40509 = value.call(null);
initial_value = G__40508;
value = G__40509;
continue;
} else {
if((value instanceof cljs.core.Keyword)){
var G__40510 = initial_value;
var G__40511 = devtools.formatters.helpers.pref.call(null,value);
initial_value = G__40510;
value = G__40511;
continue;
} else {
if(cljs.core.sequential_QMARK_.call(null,value)){
var G__40512 = initial_value;
var G__40513 = devtools.formatters.templating.render_json_ml.call(null,value);
initial_value = G__40512;
value = G__40513;
continue;
} else {
if(cljs.core.truth_(devtools.formatters.templating.template_QMARK_.call(null,value))){
return value;
} else {
if(cljs.core.truth_(devtools.formatters.templating.surrogate_QMARK_.call(null,value))){
return value;
} else {
if(cljs.core.truth_(devtools.formatters.templating.reference_QMARK_.call(null,value))){
return value;
} else {
return devtools.formatters.templating.assert_failed_markup_rendering.call(null,initial_value,value);

}
}
}
}
}
}
break;
}
});
devtools.formatters.templating.render_markup = (function devtools$formatters$templating$render_markup(value){
return devtools.formatters.templating.render_markup_STAR_.call(null,value,value);
});

//# sourceMappingURL=templating.js.map?rel=1496160796535