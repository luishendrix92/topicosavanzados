// Compiled by ClojureScript 1.9.229 {}
goog.provide('devtools.format');
goog.require('cljs.core');
goog.require('devtools.context');

/**
 * @interface
 */
devtools.format.IDevtoolsFormat = function(){};

devtools.format._header = (function devtools$format$_header(value){
if((!((value == null))) && (!((value.devtools$format$IDevtoolsFormat$_header$arity$1 == null)))){
return value.devtools$format$IDevtoolsFormat$_header$arity$1(value);
} else {
var x__27211__auto__ = (((value == null))?null:value);
var m__27212__auto__ = (devtools.format._header[goog.typeOf(x__27211__auto__)]);
if(!((m__27212__auto__ == null))){
return m__27212__auto__.call(null,value);
} else {
var m__27212__auto____$1 = (devtools.format._header["_"]);
if(!((m__27212__auto____$1 == null))){
return m__27212__auto____$1.call(null,value);
} else {
throw cljs.core.missing_protocol.call(null,"IDevtoolsFormat.-header",value);
}
}
}
});

devtools.format._has_body = (function devtools$format$_has_body(value){
if((!((value == null))) && (!((value.devtools$format$IDevtoolsFormat$_has_body$arity$1 == null)))){
return value.devtools$format$IDevtoolsFormat$_has_body$arity$1(value);
} else {
var x__27211__auto__ = (((value == null))?null:value);
var m__27212__auto__ = (devtools.format._has_body[goog.typeOf(x__27211__auto__)]);
if(!((m__27212__auto__ == null))){
return m__27212__auto__.call(null,value);
} else {
var m__27212__auto____$1 = (devtools.format._has_body["_"]);
if(!((m__27212__auto____$1 == null))){
return m__27212__auto____$1.call(null,value);
} else {
throw cljs.core.missing_protocol.call(null,"IDevtoolsFormat.-has-body",value);
}
}
}
});

devtools.format._body = (function devtools$format$_body(value){
if((!((value == null))) && (!((value.devtools$format$IDevtoolsFormat$_body$arity$1 == null)))){
return value.devtools$format$IDevtoolsFormat$_body$arity$1(value);
} else {
var x__27211__auto__ = (((value == null))?null:value);
var m__27212__auto__ = (devtools.format._body[goog.typeOf(x__27211__auto__)]);
if(!((m__27212__auto__ == null))){
return m__27212__auto__.call(null,value);
} else {
var m__27212__auto____$1 = (devtools.format._body["_"]);
if(!((m__27212__auto____$1 == null))){
return m__27212__auto____$1.call(null,value);
} else {
throw cljs.core.missing_protocol.call(null,"IDevtoolsFormat.-body",value);
}
}
}
});

devtools.format.setup_BANG_ = (function devtools$format$setup_BANG_(){
if(cljs.core.truth_(devtools.format._STAR_setup_done_STAR_)){
return null;
} else {
devtools.format._STAR_setup_done_STAR_ = true;

devtools.format.make_template_fn = (function (){var temp__4657__auto__ = goog.object.get(devtools.context.get_root.call(null),"devtools");
if(cljs.core.truth_(temp__4657__auto__)){
var o__37710__auto__ = temp__4657__auto__;
var temp__4657__auto____$1 = goog.object.get(o__37710__auto__,"formatters");
if(cljs.core.truth_(temp__4657__auto____$1)){
var o__37710__auto____$1 = temp__4657__auto____$1;
var temp__4657__auto____$2 = goog.object.get(o__37710__auto____$1,"templating");
if(cljs.core.truth_(temp__4657__auto____$2)){
var o__37709__auto__ = temp__4657__auto____$2;
return goog.object.get(o__37709__auto__,"make_template");
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format.make_group_fn = (function (){var temp__4657__auto__ = goog.object.get(devtools.context.get_root.call(null),"devtools");
if(cljs.core.truth_(temp__4657__auto__)){
var o__37710__auto__ = temp__4657__auto__;
var temp__4657__auto____$1 = goog.object.get(o__37710__auto__,"formatters");
if(cljs.core.truth_(temp__4657__auto____$1)){
var o__37710__auto____$1 = temp__4657__auto____$1;
var temp__4657__auto____$2 = goog.object.get(o__37710__auto____$1,"templating");
if(cljs.core.truth_(temp__4657__auto____$2)){
var o__37709__auto__ = temp__4657__auto____$2;
return goog.object.get(o__37709__auto__,"make_group");
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format.make_reference_fn = (function (){var temp__4657__auto__ = goog.object.get(devtools.context.get_root.call(null),"devtools");
if(cljs.core.truth_(temp__4657__auto__)){
var o__37710__auto__ = temp__4657__auto__;
var temp__4657__auto____$1 = goog.object.get(o__37710__auto__,"formatters");
if(cljs.core.truth_(temp__4657__auto____$1)){
var o__37710__auto____$1 = temp__4657__auto____$1;
var temp__4657__auto____$2 = goog.object.get(o__37710__auto____$1,"templating");
if(cljs.core.truth_(temp__4657__auto____$2)){
var o__37709__auto__ = temp__4657__auto____$2;
return goog.object.get(o__37709__auto__,"make_reference");
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format.make_surrogate_fn = (function (){var temp__4657__auto__ = goog.object.get(devtools.context.get_root.call(null),"devtools");
if(cljs.core.truth_(temp__4657__auto__)){
var o__37710__auto__ = temp__4657__auto__;
var temp__4657__auto____$1 = goog.object.get(o__37710__auto__,"formatters");
if(cljs.core.truth_(temp__4657__auto____$1)){
var o__37710__auto____$1 = temp__4657__auto____$1;
var temp__4657__auto____$2 = goog.object.get(o__37710__auto____$1,"templating");
if(cljs.core.truth_(temp__4657__auto____$2)){
var o__37709__auto__ = temp__4657__auto____$2;
return goog.object.get(o__37709__auto__,"make_surrogate");
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format.render_markup_fn = (function (){var temp__4657__auto__ = goog.object.get(devtools.context.get_root.call(null),"devtools");
if(cljs.core.truth_(temp__4657__auto__)){
var o__37710__auto__ = temp__4657__auto__;
var temp__4657__auto____$1 = goog.object.get(o__37710__auto__,"formatters");
if(cljs.core.truth_(temp__4657__auto____$1)){
var o__37710__auto____$1 = temp__4657__auto____$1;
var temp__4657__auto____$2 = goog.object.get(o__37710__auto____$1,"templating");
if(cljs.core.truth_(temp__4657__auto____$2)){
var o__37709__auto__ = temp__4657__auto____$2;
return goog.object.get(o__37709__auto__,"render_markup");
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format._LT_header_GT__fn = (function (){var temp__4657__auto__ = goog.object.get(devtools.context.get_root.call(null),"devtools");
if(cljs.core.truth_(temp__4657__auto__)){
var o__37710__auto__ = temp__4657__auto__;
var temp__4657__auto____$1 = goog.object.get(o__37710__auto__,"formatters");
if(cljs.core.truth_(temp__4657__auto____$1)){
var o__37710__auto____$1 = temp__4657__auto____$1;
var temp__4657__auto____$2 = goog.object.get(o__37710__auto____$1,"markup");
if(cljs.core.truth_(temp__4657__auto____$2)){
var o__37709__auto__ = temp__4657__auto____$2;
return goog.object.get(o__37709__auto__,"_LT_header_GT_");
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format._LT_standard_body_GT__fn = (function (){var temp__4657__auto__ = goog.object.get(devtools.context.get_root.call(null),"devtools");
if(cljs.core.truth_(temp__4657__auto__)){
var o__37710__auto__ = temp__4657__auto__;
var temp__4657__auto____$1 = goog.object.get(o__37710__auto__,"formatters");
if(cljs.core.truth_(temp__4657__auto____$1)){
var o__37710__auto____$1 = temp__4657__auto____$1;
var temp__4657__auto____$2 = goog.object.get(o__37710__auto____$1,"markup");
if(cljs.core.truth_(temp__4657__auto____$2)){
var o__37709__auto__ = temp__4657__auto____$2;
return goog.object.get(o__37709__auto__,"_LT_standard_body_GT_");
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

if(cljs.core.truth_(devtools.format.make_template_fn)){
} else {
throw (new Error("Assert failed: make-template-fn"));
}

if(cljs.core.truth_(devtools.format.make_group_fn)){
} else {
throw (new Error("Assert failed: make-group-fn"));
}

if(cljs.core.truth_(devtools.format.make_reference_fn)){
} else {
throw (new Error("Assert failed: make-reference-fn"));
}

if(cljs.core.truth_(devtools.format.make_surrogate_fn)){
} else {
throw (new Error("Assert failed: make-surrogate-fn"));
}

if(cljs.core.truth_(devtools.format.render_markup_fn)){
} else {
throw (new Error("Assert failed: render-markup-fn"));
}

if(cljs.core.truth_(devtools.format._LT_header_GT__fn)){
} else {
throw (new Error("Assert failed: <header>-fn"));
}

if(cljs.core.truth_(devtools.format._LT_standard_body_GT__fn)){
return null;
} else {
throw (new Error("Assert failed: <standard-body>-fn"));
}
}
});
devtools.format.render_markup = (function devtools$format$render_markup(var_args){
var args__27630__auto__ = [];
var len__27623__auto___37731 = arguments.length;
var i__27624__auto___37732 = (0);
while(true){
if((i__27624__auto___37732 < len__27623__auto___37731)){
args__27630__auto__.push((arguments[i__27624__auto___37732]));

var G__37733 = (i__27624__auto___37732 + (1));
i__27624__auto___37732 = G__37733;
continue;
} else {
}
break;
}

var argseq__27631__auto__ = ((((0) < args__27630__auto__.length))?(new cljs.core.IndexedSeq(args__27630__auto__.slice((0)),(0),null)):null);
return devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic(argseq__27631__auto__);
});

devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.render_markup_fn,args);
});

devtools.format.render_markup.cljs$lang$maxFixedArity = (0);

devtools.format.render_markup.cljs$lang$applyTo = (function (seq37730){
return devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37730));
});

devtools.format.make_template = (function devtools$format$make_template(var_args){
var args__27630__auto__ = [];
var len__27623__auto___37735 = arguments.length;
var i__27624__auto___37736 = (0);
while(true){
if((i__27624__auto___37736 < len__27623__auto___37735)){
args__27630__auto__.push((arguments[i__27624__auto___37736]));

var G__37737 = (i__27624__auto___37736 + (1));
i__27624__auto___37736 = G__37737;
continue;
} else {
}
break;
}

var argseq__27631__auto__ = ((((0) < args__27630__auto__.length))?(new cljs.core.IndexedSeq(args__27630__auto__.slice((0)),(0),null)):null);
return devtools.format.make_template.cljs$core$IFn$_invoke$arity$variadic(argseq__27631__auto__);
});

devtools.format.make_template.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_template_fn,args);
});

devtools.format.make_template.cljs$lang$maxFixedArity = (0);

devtools.format.make_template.cljs$lang$applyTo = (function (seq37734){
return devtools.format.make_template.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37734));
});

devtools.format.make_group = (function devtools$format$make_group(var_args){
var args__27630__auto__ = [];
var len__27623__auto___37739 = arguments.length;
var i__27624__auto___37740 = (0);
while(true){
if((i__27624__auto___37740 < len__27623__auto___37739)){
args__27630__auto__.push((arguments[i__27624__auto___37740]));

var G__37741 = (i__27624__auto___37740 + (1));
i__27624__auto___37740 = G__37741;
continue;
} else {
}
break;
}

var argseq__27631__auto__ = ((((0) < args__27630__auto__.length))?(new cljs.core.IndexedSeq(args__27630__auto__.slice((0)),(0),null)):null);
return devtools.format.make_group.cljs$core$IFn$_invoke$arity$variadic(argseq__27631__auto__);
});

devtools.format.make_group.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_group_fn,args);
});

devtools.format.make_group.cljs$lang$maxFixedArity = (0);

devtools.format.make_group.cljs$lang$applyTo = (function (seq37738){
return devtools.format.make_group.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37738));
});

devtools.format.make_surrogate = (function devtools$format$make_surrogate(var_args){
var args__27630__auto__ = [];
var len__27623__auto___37743 = arguments.length;
var i__27624__auto___37744 = (0);
while(true){
if((i__27624__auto___37744 < len__27623__auto___37743)){
args__27630__auto__.push((arguments[i__27624__auto___37744]));

var G__37745 = (i__27624__auto___37744 + (1));
i__27624__auto___37744 = G__37745;
continue;
} else {
}
break;
}

var argseq__27631__auto__ = ((((0) < args__27630__auto__.length))?(new cljs.core.IndexedSeq(args__27630__auto__.slice((0)),(0),null)):null);
return devtools.format.make_surrogate.cljs$core$IFn$_invoke$arity$variadic(argseq__27631__auto__);
});

devtools.format.make_surrogate.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_surrogate_fn,args);
});

devtools.format.make_surrogate.cljs$lang$maxFixedArity = (0);

devtools.format.make_surrogate.cljs$lang$applyTo = (function (seq37742){
return devtools.format.make_surrogate.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37742));
});

devtools.format.template = (function devtools$format$template(var_args){
var args__27630__auto__ = [];
var len__27623__auto___37747 = arguments.length;
var i__27624__auto___37748 = (0);
while(true){
if((i__27624__auto___37748 < len__27623__auto___37747)){
args__27630__auto__.push((arguments[i__27624__auto___37748]));

var G__37749 = (i__27624__auto___37748 + (1));
i__27624__auto___37748 = G__37749;
continue;
} else {
}
break;
}

var argseq__27631__auto__ = ((((0) < args__27630__auto__.length))?(new cljs.core.IndexedSeq(args__27630__auto__.slice((0)),(0),null)):null);
return devtools.format.template.cljs$core$IFn$_invoke$arity$variadic(argseq__27631__auto__);
});

devtools.format.template.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_template_fn,args);
});

devtools.format.template.cljs$lang$maxFixedArity = (0);

devtools.format.template.cljs$lang$applyTo = (function (seq37746){
return devtools.format.template.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37746));
});

devtools.format.group = (function devtools$format$group(var_args){
var args__27630__auto__ = [];
var len__27623__auto___37751 = arguments.length;
var i__27624__auto___37752 = (0);
while(true){
if((i__27624__auto___37752 < len__27623__auto___37751)){
args__27630__auto__.push((arguments[i__27624__auto___37752]));

var G__37753 = (i__27624__auto___37752 + (1));
i__27624__auto___37752 = G__37753;
continue;
} else {
}
break;
}

var argseq__27631__auto__ = ((((0) < args__27630__auto__.length))?(new cljs.core.IndexedSeq(args__27630__auto__.slice((0)),(0),null)):null);
return devtools.format.group.cljs$core$IFn$_invoke$arity$variadic(argseq__27631__auto__);
});

devtools.format.group.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_group_fn,args);
});

devtools.format.group.cljs$lang$maxFixedArity = (0);

devtools.format.group.cljs$lang$applyTo = (function (seq37750){
return devtools.format.group.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37750));
});

devtools.format.surrogate = (function devtools$format$surrogate(var_args){
var args__27630__auto__ = [];
var len__27623__auto___37755 = arguments.length;
var i__27624__auto___37756 = (0);
while(true){
if((i__27624__auto___37756 < len__27623__auto___37755)){
args__27630__auto__.push((arguments[i__27624__auto___37756]));

var G__37757 = (i__27624__auto___37756 + (1));
i__27624__auto___37756 = G__37757;
continue;
} else {
}
break;
}

var argseq__27631__auto__ = ((((0) < args__27630__auto__.length))?(new cljs.core.IndexedSeq(args__27630__auto__.slice((0)),(0),null)):null);
return devtools.format.surrogate.cljs$core$IFn$_invoke$arity$variadic(argseq__27631__auto__);
});

devtools.format.surrogate.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_surrogate_fn,args);
});

devtools.format.surrogate.cljs$lang$maxFixedArity = (0);

devtools.format.surrogate.cljs$lang$applyTo = (function (seq37754){
return devtools.format.surrogate.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37754));
});

devtools.format.reference = (function devtools$format$reference(var_args){
var args__27630__auto__ = [];
var len__27623__auto___37765 = arguments.length;
var i__27624__auto___37766 = (0);
while(true){
if((i__27624__auto___37766 < len__27623__auto___37765)){
args__27630__auto__.push((arguments[i__27624__auto___37766]));

var G__37767 = (i__27624__auto___37766 + (1));
i__27624__auto___37766 = G__37767;
continue;
} else {
}
break;
}

var argseq__27631__auto__ = ((((1) < args__27630__auto__.length))?(new cljs.core.IndexedSeq(args__27630__auto__.slice((1)),(0),null)):null);
return devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__27631__auto__);
});

devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic = (function (object,p__37761){
var vec__37762 = p__37761;
var state_override = cljs.core.nth.call(null,vec__37762,(0),null);
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_reference_fn,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [object,((function (vec__37762,state_override){
return (function (p1__37758_SHARP_){
return cljs.core.merge.call(null,p1__37758_SHARP_,state_override);
});})(vec__37762,state_override))
], null));
});

devtools.format.reference.cljs$lang$maxFixedArity = (1);

devtools.format.reference.cljs$lang$applyTo = (function (seq37759){
var G__37760 = cljs.core.first.call(null,seq37759);
var seq37759__$1 = cljs.core.next.call(null,seq37759);
return devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic(G__37760,seq37759__$1);
});

devtools.format.standard_reference = (function devtools$format$standard_reference(target){
devtools.format.setup_BANG_.call(null);

return devtools.format.make_template_fn.call(null,new cljs.core.Keyword(null,"ol","ol",932524051),new cljs.core.Keyword(null,"standard-ol-style","standard-ol-style",2143825615),devtools.format.make_template_fn.call(null,new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.Keyword(null,"standard-li-style","standard-li-style",413442955),devtools.format.make_reference_fn.call(null,target)));
});
devtools.format.build_header = (function devtools$format$build_header(var_args){
var args__27630__auto__ = [];
var len__27623__auto___37769 = arguments.length;
var i__27624__auto___37770 = (0);
while(true){
if((i__27624__auto___37770 < len__27623__auto___37769)){
args__27630__auto__.push((arguments[i__27624__auto___37770]));

var G__37771 = (i__27624__auto___37770 + (1));
i__27624__auto___37770 = G__37771;
continue;
} else {
}
break;
}

var argseq__27631__auto__ = ((((0) < args__27630__auto__.length))?(new cljs.core.IndexedSeq(args__27630__auto__.slice((0)),(0),null)):null);
return devtools.format.build_header.cljs$core$IFn$_invoke$arity$variadic(argseq__27631__auto__);
});

devtools.format.build_header.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return devtools.format.render_markup.call(null,cljs.core.apply.call(null,devtools.format._LT_header_GT__fn,args));
});

devtools.format.build_header.cljs$lang$maxFixedArity = (0);

devtools.format.build_header.cljs$lang$applyTo = (function (seq37768){
return devtools.format.build_header.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37768));
});

devtools.format.standard_body_template = (function devtools$format$standard_body_template(var_args){
var args__27630__auto__ = [];
var len__27623__auto___37774 = arguments.length;
var i__27624__auto___37775 = (0);
while(true){
if((i__27624__auto___37775 < len__27623__auto___37774)){
args__27630__auto__.push((arguments[i__27624__auto___37775]));

var G__37776 = (i__27624__auto___37775 + (1));
i__27624__auto___37775 = G__37776;
continue;
} else {
}
break;
}

var argseq__27631__auto__ = ((((1) < args__27630__auto__.length))?(new cljs.core.IndexedSeq(args__27630__auto__.slice((1)),(0),null)):null);
return devtools.format.standard_body_template.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__27631__auto__);
});

devtools.format.standard_body_template.cljs$core$IFn$_invoke$arity$variadic = (function (lines,rest){
devtools.format.setup_BANG_.call(null);

var args = cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.map.call(null,(function (x){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [x], null);
}),lines)], null),rest);
return devtools.format.render_markup.call(null,cljs.core.apply.call(null,devtools.format._LT_standard_body_GT__fn,args));
});

devtools.format.standard_body_template.cljs$lang$maxFixedArity = (1);

devtools.format.standard_body_template.cljs$lang$applyTo = (function (seq37772){
var G__37773 = cljs.core.first.call(null,seq37772);
var seq37772__$1 = cljs.core.next.call(null,seq37772);
return devtools.format.standard_body_template.cljs$core$IFn$_invoke$arity$variadic(G__37773,seq37772__$1);
});


//# sourceMappingURL=format.js.map?rel=1496160791365