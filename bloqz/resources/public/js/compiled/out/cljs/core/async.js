// Compiled by ClojureScript 1.9.229 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var args29518 = [];
var len__27623__auto___29524 = arguments.length;
var i__27624__auto___29525 = (0);
while(true){
if((i__27624__auto___29525 < len__27623__auto___29524)){
args29518.push((arguments[i__27624__auto___29525]));

var G__29526 = (i__27624__auto___29525 + (1));
i__27624__auto___29525 = G__29526;
continue;
} else {
}
break;
}

var G__29520 = args29518.length;
switch (G__29520) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29518.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async29521 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29521 = (function (f,blockable,meta29522){
this.f = f;
this.blockable = blockable;
this.meta29522 = meta29522;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async29521.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29523,meta29522__$1){
var self__ = this;
var _29523__$1 = this;
return (new cljs.core.async.t_cljs$core$async29521(self__.f,self__.blockable,meta29522__$1));
});

cljs.core.async.t_cljs$core$async29521.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29523){
var self__ = this;
var _29523__$1 = this;
return self__.meta29522;
});

cljs.core.async.t_cljs$core$async29521.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async29521.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async29521.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async29521.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async29521.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta29522","meta29522",-1691712185,null)], null);
});

cljs.core.async.t_cljs$core$async29521.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async29521.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29521";

cljs.core.async.t_cljs$core$async29521.cljs$lang$ctorPrWriter = (function (this__27154__auto__,writer__27155__auto__,opt__27156__auto__){
return cljs.core._write.call(null,writer__27155__auto__,"cljs.core.async/t_cljs$core$async29521");
});

cljs.core.async.__GT_t_cljs$core$async29521 = (function cljs$core$async$__GT_t_cljs$core$async29521(f__$1,blockable__$1,meta29522){
return (new cljs.core.async.t_cljs$core$async29521(f__$1,blockable__$1,meta29522));
});

}

return (new cljs.core.async.t_cljs$core$async29521(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if(!((buff == null))){
if((false) || (buff.cljs$core$async$impl$protocols$UnblockingBuffer$)){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var args29530 = [];
var len__27623__auto___29533 = arguments.length;
var i__27624__auto___29534 = (0);
while(true){
if((i__27624__auto___29534 < len__27623__auto___29533)){
args29530.push((arguments[i__27624__auto___29534]));

var G__29535 = (i__27624__auto___29534 + (1));
i__27624__auto___29534 = G__29535;
continue;
} else {
}
break;
}

var G__29532 = args29530.length;
switch (G__29532) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29530.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("buffer must be supplied when transducer is"),cljs.core.str("\n"),cljs.core.str("buf-or-n")].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var args29537 = [];
var len__27623__auto___29540 = arguments.length;
var i__27624__auto___29541 = (0);
while(true){
if((i__27624__auto___29541 < len__27623__auto___29540)){
args29537.push((arguments[i__27624__auto___29541]));

var G__29542 = (i__27624__auto___29541 + (1));
i__27624__auto___29541 = G__29542;
continue;
} else {
}
break;
}

var G__29539 = args29537.length;
switch (G__29539) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29537.length)].join('')));

}
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.call(null,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.call(null,xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.call(null,cljs.core.async.impl.buffers.promise_buffer.call(null),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var args29544 = [];
var len__27623__auto___29547 = arguments.length;
var i__27624__auto___29548 = (0);
while(true){
if((i__27624__auto___29548 < len__27623__auto___29547)){
args29544.push((arguments[i__27624__auto___29548]));

var G__29549 = (i__27624__auto___29548 + (1));
i__27624__auto___29548 = G__29549;
continue;
} else {
}
break;
}

var G__29546 = args29544.length;
switch (G__29546) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29544.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_29551 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_29551);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_29551,ret){
return (function (){
return fn1.call(null,val_29551);
});})(val_29551,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var args29552 = [];
var len__27623__auto___29555 = arguments.length;
var i__27624__auto___29556 = (0);
while(true){
if((i__27624__auto___29556 < len__27623__auto___29555)){
args29552.push((arguments[i__27624__auto___29556]));

var G__29557 = (i__27624__auto___29556 + (1));
i__27624__auto___29556 = G__29557;
continue;
} else {
}
break;
}

var G__29554 = args29552.length;
switch (G__29554) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29552.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4655__auto__)){
var ret = temp__4655__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__4655__auto__)){
var retb = temp__4655__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4655__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__4655__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__27463__auto___29559 = n;
var x_29560 = (0);
while(true){
if((x_29560 < n__27463__auto___29559)){
(a[x_29560] = (0));

var G__29561 = (x_29560 + (1));
x_29560 = G__29561;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__29562 = (i + (1));
i = G__29562;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async29566 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29566 = (function (alt_flag,flag,meta29567){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta29567 = meta29567;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async29566.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_29568,meta29567__$1){
var self__ = this;
var _29568__$1 = this;
return (new cljs.core.async.t_cljs$core$async29566(self__.alt_flag,self__.flag,meta29567__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async29566.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_29568){
var self__ = this;
var _29568__$1 = this;
return self__.meta29567;
});})(flag))
;

cljs.core.async.t_cljs$core$async29566.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async29566.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async29566.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async29566.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async29566.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta29567","meta29567",-643576214,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async29566.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async29566.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29566";

cljs.core.async.t_cljs$core$async29566.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__27154__auto__,writer__27155__auto__,opt__27156__auto__){
return cljs.core._write.call(null,writer__27155__auto__,"cljs.core.async/t_cljs$core$async29566");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async29566 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async29566(alt_flag__$1,flag__$1,meta29567){
return (new cljs.core.async.t_cljs$core$async29566(alt_flag__$1,flag__$1,meta29567));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async29566(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async29572 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29572 = (function (alt_handler,flag,cb,meta29573){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta29573 = meta29573;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async29572.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29574,meta29573__$1){
var self__ = this;
var _29574__$1 = this;
return (new cljs.core.async.t_cljs$core$async29572(self__.alt_handler,self__.flag,self__.cb,meta29573__$1));
});

cljs.core.async.t_cljs$core$async29572.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29574){
var self__ = this;
var _29574__$1 = this;
return self__.meta29573;
});

cljs.core.async.t_cljs$core$async29572.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async29572.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async29572.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async29572.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async29572.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null)], null)))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta29573","meta29573",-520392874,null)], null);
});

cljs.core.async.t_cljs$core$async29572.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async29572.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29572";

cljs.core.async.t_cljs$core$async29572.cljs$lang$ctorPrWriter = (function (this__27154__auto__,writer__27155__auto__,opt__27156__auto__){
return cljs.core._write.call(null,writer__27155__auto__,"cljs.core.async/t_cljs$core$async29572");
});

cljs.core.async.__GT_t_cljs$core$async29572 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async29572(alt_handler__$1,flag__$1,cb__$1,meta29573){
return (new cljs.core.async.t_cljs$core$async29572(alt_handler__$1,flag__$1,cb__$1,meta29573));
});

}

return (new cljs.core.async.t_cljs$core$async29572(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__29575_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__29575_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__29576_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__29576_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__26548__auto__ = wport;
if(cljs.core.truth_(or__26548__auto__)){
return or__26548__auto__;
} else {
return port;
}
})()], null));
} else {
var G__29577 = (i + (1));
i = G__29577;
continue;
}
} else {
return null;
}
break;
}
})();
var or__26548__auto__ = ret;
if(cljs.core.truth_(or__26548__auto__)){
return or__26548__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4657__auto__ = (function (){var and__26536__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__26536__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__26536__auto__;
}
})();
if(cljs.core.truth_(temp__4657__auto__)){
var got = temp__4657__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__27630__auto__ = [];
var len__27623__auto___29583 = arguments.length;
var i__27624__auto___29584 = (0);
while(true){
if((i__27624__auto___29584 < len__27623__auto___29583)){
args__27630__auto__.push((arguments[i__27624__auto___29584]));

var G__29585 = (i__27624__auto___29584 + (1));
i__27624__auto___29584 = G__29585;
continue;
} else {
}
break;
}

var argseq__27631__auto__ = ((((1) < args__27630__auto__.length))?(new cljs.core.IndexedSeq(args__27630__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__27631__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__29580){
var map__29581 = p__29580;
var map__29581__$1 = ((((!((map__29581 == null)))?((((map__29581.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29581.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29581):map__29581);
var opts = map__29581__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq29578){
var G__29579 = cljs.core.first.call(null,seq29578);
var seq29578__$1 = cljs.core.next.call(null,seq29578);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__29579,seq29578__$1);
});

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var args29586 = [];
var len__27623__auto___29636 = arguments.length;
var i__27624__auto___29637 = (0);
while(true){
if((i__27624__auto___29637 < len__27623__auto___29636)){
args29586.push((arguments[i__27624__auto___29637]));

var G__29638 = (i__27624__auto___29637 + (1));
i__27624__auto___29637 = G__29638;
continue;
} else {
}
break;
}

var G__29588 = args29586.length;
switch (G__29588) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29586.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__29473__auto___29640 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29473__auto___29640){
return (function (){
var f__29474__auto__ = (function (){var switch__29361__auto__ = ((function (c__29473__auto___29640){
return (function (state_29612){
var state_val_29613 = (state_29612[(1)]);
if((state_val_29613 === (7))){
var inst_29608 = (state_29612[(2)]);
var state_29612__$1 = state_29612;
var statearr_29614_29641 = state_29612__$1;
(statearr_29614_29641[(2)] = inst_29608);

(statearr_29614_29641[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29613 === (1))){
var state_29612__$1 = state_29612;
var statearr_29615_29642 = state_29612__$1;
(statearr_29615_29642[(2)] = null);

(statearr_29615_29642[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29613 === (4))){
var inst_29591 = (state_29612[(7)]);
var inst_29591__$1 = (state_29612[(2)]);
var inst_29592 = (inst_29591__$1 == null);
var state_29612__$1 = (function (){var statearr_29616 = state_29612;
(statearr_29616[(7)] = inst_29591__$1);

return statearr_29616;
})();
if(cljs.core.truth_(inst_29592)){
var statearr_29617_29643 = state_29612__$1;
(statearr_29617_29643[(1)] = (5));

} else {
var statearr_29618_29644 = state_29612__$1;
(statearr_29618_29644[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29613 === (13))){
var state_29612__$1 = state_29612;
var statearr_29619_29645 = state_29612__$1;
(statearr_29619_29645[(2)] = null);

(statearr_29619_29645[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29613 === (6))){
var inst_29591 = (state_29612[(7)]);
var state_29612__$1 = state_29612;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29612__$1,(11),to,inst_29591);
} else {
if((state_val_29613 === (3))){
var inst_29610 = (state_29612[(2)]);
var state_29612__$1 = state_29612;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29612__$1,inst_29610);
} else {
if((state_val_29613 === (12))){
var state_29612__$1 = state_29612;
var statearr_29620_29646 = state_29612__$1;
(statearr_29620_29646[(2)] = null);

(statearr_29620_29646[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29613 === (2))){
var state_29612__$1 = state_29612;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29612__$1,(4),from);
} else {
if((state_val_29613 === (11))){
var inst_29601 = (state_29612[(2)]);
var state_29612__$1 = state_29612;
if(cljs.core.truth_(inst_29601)){
var statearr_29621_29647 = state_29612__$1;
(statearr_29621_29647[(1)] = (12));

} else {
var statearr_29622_29648 = state_29612__$1;
(statearr_29622_29648[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29613 === (9))){
var state_29612__$1 = state_29612;
var statearr_29623_29649 = state_29612__$1;
(statearr_29623_29649[(2)] = null);

(statearr_29623_29649[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29613 === (5))){
var state_29612__$1 = state_29612;
if(cljs.core.truth_(close_QMARK_)){
var statearr_29624_29650 = state_29612__$1;
(statearr_29624_29650[(1)] = (8));

} else {
var statearr_29625_29651 = state_29612__$1;
(statearr_29625_29651[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29613 === (14))){
var inst_29606 = (state_29612[(2)]);
var state_29612__$1 = state_29612;
var statearr_29626_29652 = state_29612__$1;
(statearr_29626_29652[(2)] = inst_29606);

(statearr_29626_29652[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29613 === (10))){
var inst_29598 = (state_29612[(2)]);
var state_29612__$1 = state_29612;
var statearr_29627_29653 = state_29612__$1;
(statearr_29627_29653[(2)] = inst_29598);

(statearr_29627_29653[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29613 === (8))){
var inst_29595 = cljs.core.async.close_BANG_.call(null,to);
var state_29612__$1 = state_29612;
var statearr_29628_29654 = state_29612__$1;
(statearr_29628_29654[(2)] = inst_29595);

(statearr_29628_29654[(1)] = (10));


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
});})(c__29473__auto___29640))
;
return ((function (switch__29361__auto__,c__29473__auto___29640){
return (function() {
var cljs$core$async$state_machine__29362__auto__ = null;
var cljs$core$async$state_machine__29362__auto____0 = (function (){
var statearr_29632 = [null,null,null,null,null,null,null,null];
(statearr_29632[(0)] = cljs$core$async$state_machine__29362__auto__);

(statearr_29632[(1)] = (1));

return statearr_29632;
});
var cljs$core$async$state_machine__29362__auto____1 = (function (state_29612){
while(true){
var ret_value__29363__auto__ = (function (){try{while(true){
var result__29364__auto__ = switch__29361__auto__.call(null,state_29612);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29364__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29364__auto__;
}
break;
}
}catch (e29633){if((e29633 instanceof Object)){
var ex__29365__auto__ = e29633;
var statearr_29634_29655 = state_29612;
(statearr_29634_29655[(5)] = ex__29365__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29612);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29633;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29363__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29656 = state_29612;
state_29612 = G__29656;
continue;
} else {
return ret_value__29363__auto__;
}
break;
}
});
cljs$core$async$state_machine__29362__auto__ = function(state_29612){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29362__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29362__auto____1.call(this,state_29612);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29362__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29362__auto____0;
cljs$core$async$state_machine__29362__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29362__auto____1;
return cljs$core$async$state_machine__29362__auto__;
})()
;})(switch__29361__auto__,c__29473__auto___29640))
})();
var state__29475__auto__ = (function (){var statearr_29635 = f__29474__auto__.call(null);
(statearr_29635[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29473__auto___29640);

return statearr_29635;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29475__auto__);
});})(c__29473__auto___29640))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__29844){
var vec__29845 = p__29844;
var v = cljs.core.nth.call(null,vec__29845,(0),null);
var p = cljs.core.nth.call(null,vec__29845,(1),null);
var job = vec__29845;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__29473__auto___30031 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29473__auto___30031,res,vec__29845,v,p,job,jobs,results){
return (function (){
var f__29474__auto__ = (function (){var switch__29361__auto__ = ((function (c__29473__auto___30031,res,vec__29845,v,p,job,jobs,results){
return (function (state_29852){
var state_val_29853 = (state_29852[(1)]);
if((state_val_29853 === (1))){
var state_29852__$1 = state_29852;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29852__$1,(2),res,v);
} else {
if((state_val_29853 === (2))){
var inst_29849 = (state_29852[(2)]);
var inst_29850 = cljs.core.async.close_BANG_.call(null,res);
var state_29852__$1 = (function (){var statearr_29854 = state_29852;
(statearr_29854[(7)] = inst_29849);

return statearr_29854;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29852__$1,inst_29850);
} else {
return null;
}
}
});})(c__29473__auto___30031,res,vec__29845,v,p,job,jobs,results))
;
return ((function (switch__29361__auto__,c__29473__auto___30031,res,vec__29845,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__29362__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__29362__auto____0 = (function (){
var statearr_29858 = [null,null,null,null,null,null,null,null];
(statearr_29858[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__29362__auto__);

(statearr_29858[(1)] = (1));

return statearr_29858;
});
var cljs$core$async$pipeline_STAR__$_state_machine__29362__auto____1 = (function (state_29852){
while(true){
var ret_value__29363__auto__ = (function (){try{while(true){
var result__29364__auto__ = switch__29361__auto__.call(null,state_29852);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29364__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29364__auto__;
}
break;
}
}catch (e29859){if((e29859 instanceof Object)){
var ex__29365__auto__ = e29859;
var statearr_29860_30032 = state_29852;
(statearr_29860_30032[(5)] = ex__29365__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29852);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29859;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29363__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30033 = state_29852;
state_29852 = G__30033;
continue;
} else {
return ret_value__29363__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__29362__auto__ = function(state_29852){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__29362__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__29362__auto____1.call(this,state_29852);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__29362__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__29362__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__29362__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__29362__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__29362__auto__;
})()
;})(switch__29361__auto__,c__29473__auto___30031,res,vec__29845,v,p,job,jobs,results))
})();
var state__29475__auto__ = (function (){var statearr_29861 = f__29474__auto__.call(null);
(statearr_29861[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29473__auto___30031);

return statearr_29861;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29475__auto__);
});})(c__29473__auto___30031,res,vec__29845,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__29862){
var vec__29863 = p__29862;
var v = cljs.core.nth.call(null,vec__29863,(0),null);
var p = cljs.core.nth.call(null,vec__29863,(1),null);
var job = vec__29863;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__27463__auto___30034 = n;
var __30035 = (0);
while(true){
if((__30035 < n__27463__auto___30034)){
var G__29866_30036 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__29866_30036) {
case "compute":
var c__29473__auto___30038 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__30035,c__29473__auto___30038,G__29866_30036,n__27463__auto___30034,jobs,results,process,async){
return (function (){
var f__29474__auto__ = (function (){var switch__29361__auto__ = ((function (__30035,c__29473__auto___30038,G__29866_30036,n__27463__auto___30034,jobs,results,process,async){
return (function (state_29879){
var state_val_29880 = (state_29879[(1)]);
if((state_val_29880 === (1))){
var state_29879__$1 = state_29879;
var statearr_29881_30039 = state_29879__$1;
(statearr_29881_30039[(2)] = null);

(statearr_29881_30039[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29880 === (2))){
var state_29879__$1 = state_29879;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29879__$1,(4),jobs);
} else {
if((state_val_29880 === (3))){
var inst_29877 = (state_29879[(2)]);
var state_29879__$1 = state_29879;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29879__$1,inst_29877);
} else {
if((state_val_29880 === (4))){
var inst_29869 = (state_29879[(2)]);
var inst_29870 = process.call(null,inst_29869);
var state_29879__$1 = state_29879;
if(cljs.core.truth_(inst_29870)){
var statearr_29882_30040 = state_29879__$1;
(statearr_29882_30040[(1)] = (5));

} else {
var statearr_29883_30041 = state_29879__$1;
(statearr_29883_30041[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29880 === (5))){
var state_29879__$1 = state_29879;
var statearr_29884_30042 = state_29879__$1;
(statearr_29884_30042[(2)] = null);

(statearr_29884_30042[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29880 === (6))){
var state_29879__$1 = state_29879;
var statearr_29885_30043 = state_29879__$1;
(statearr_29885_30043[(2)] = null);

(statearr_29885_30043[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29880 === (7))){
var inst_29875 = (state_29879[(2)]);
var state_29879__$1 = state_29879;
var statearr_29886_30044 = state_29879__$1;
(statearr_29886_30044[(2)] = inst_29875);

(statearr_29886_30044[(1)] = (3));


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
});})(__30035,c__29473__auto___30038,G__29866_30036,n__27463__auto___30034,jobs,results,process,async))
;
return ((function (__30035,switch__29361__auto__,c__29473__auto___30038,G__29866_30036,n__27463__auto___30034,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__29362__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__29362__auto____0 = (function (){
var statearr_29890 = [null,null,null,null,null,null,null];
(statearr_29890[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__29362__auto__);

(statearr_29890[(1)] = (1));

return statearr_29890;
});
var cljs$core$async$pipeline_STAR__$_state_machine__29362__auto____1 = (function (state_29879){
while(true){
var ret_value__29363__auto__ = (function (){try{while(true){
var result__29364__auto__ = switch__29361__auto__.call(null,state_29879);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29364__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29364__auto__;
}
break;
}
}catch (e29891){if((e29891 instanceof Object)){
var ex__29365__auto__ = e29891;
var statearr_29892_30045 = state_29879;
(statearr_29892_30045[(5)] = ex__29365__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29879);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29891;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29363__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30046 = state_29879;
state_29879 = G__30046;
continue;
} else {
return ret_value__29363__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__29362__auto__ = function(state_29879){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__29362__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__29362__auto____1.call(this,state_29879);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__29362__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__29362__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__29362__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__29362__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__29362__auto__;
})()
;})(__30035,switch__29361__auto__,c__29473__auto___30038,G__29866_30036,n__27463__auto___30034,jobs,results,process,async))
})();
var state__29475__auto__ = (function (){var statearr_29893 = f__29474__auto__.call(null);
(statearr_29893[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29473__auto___30038);

return statearr_29893;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29475__auto__);
});})(__30035,c__29473__auto___30038,G__29866_30036,n__27463__auto___30034,jobs,results,process,async))
);


break;
case "async":
var c__29473__auto___30047 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__30035,c__29473__auto___30047,G__29866_30036,n__27463__auto___30034,jobs,results,process,async){
return (function (){
var f__29474__auto__ = (function (){var switch__29361__auto__ = ((function (__30035,c__29473__auto___30047,G__29866_30036,n__27463__auto___30034,jobs,results,process,async){
return (function (state_29906){
var state_val_29907 = (state_29906[(1)]);
if((state_val_29907 === (1))){
var state_29906__$1 = state_29906;
var statearr_29908_30048 = state_29906__$1;
(statearr_29908_30048[(2)] = null);

(statearr_29908_30048[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29907 === (2))){
var state_29906__$1 = state_29906;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29906__$1,(4),jobs);
} else {
if((state_val_29907 === (3))){
var inst_29904 = (state_29906[(2)]);
var state_29906__$1 = state_29906;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29906__$1,inst_29904);
} else {
if((state_val_29907 === (4))){
var inst_29896 = (state_29906[(2)]);
var inst_29897 = async.call(null,inst_29896);
var state_29906__$1 = state_29906;
if(cljs.core.truth_(inst_29897)){
var statearr_29909_30049 = state_29906__$1;
(statearr_29909_30049[(1)] = (5));

} else {
var statearr_29910_30050 = state_29906__$1;
(statearr_29910_30050[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29907 === (5))){
var state_29906__$1 = state_29906;
var statearr_29911_30051 = state_29906__$1;
(statearr_29911_30051[(2)] = null);

(statearr_29911_30051[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29907 === (6))){
var state_29906__$1 = state_29906;
var statearr_29912_30052 = state_29906__$1;
(statearr_29912_30052[(2)] = null);

(statearr_29912_30052[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29907 === (7))){
var inst_29902 = (state_29906[(2)]);
var state_29906__$1 = state_29906;
var statearr_29913_30053 = state_29906__$1;
(statearr_29913_30053[(2)] = inst_29902);

(statearr_29913_30053[(1)] = (3));


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
});})(__30035,c__29473__auto___30047,G__29866_30036,n__27463__auto___30034,jobs,results,process,async))
;
return ((function (__30035,switch__29361__auto__,c__29473__auto___30047,G__29866_30036,n__27463__auto___30034,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__29362__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__29362__auto____0 = (function (){
var statearr_29917 = [null,null,null,null,null,null,null];
(statearr_29917[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__29362__auto__);

(statearr_29917[(1)] = (1));

return statearr_29917;
});
var cljs$core$async$pipeline_STAR__$_state_machine__29362__auto____1 = (function (state_29906){
while(true){
var ret_value__29363__auto__ = (function (){try{while(true){
var result__29364__auto__ = switch__29361__auto__.call(null,state_29906);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29364__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29364__auto__;
}
break;
}
}catch (e29918){if((e29918 instanceof Object)){
var ex__29365__auto__ = e29918;
var statearr_29919_30054 = state_29906;
(statearr_29919_30054[(5)] = ex__29365__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29906);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29918;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29363__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30055 = state_29906;
state_29906 = G__30055;
continue;
} else {
return ret_value__29363__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__29362__auto__ = function(state_29906){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__29362__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__29362__auto____1.call(this,state_29906);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__29362__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__29362__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__29362__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__29362__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__29362__auto__;
})()
;})(__30035,switch__29361__auto__,c__29473__auto___30047,G__29866_30036,n__27463__auto___30034,jobs,results,process,async))
})();
var state__29475__auto__ = (function (){var statearr_29920 = f__29474__auto__.call(null);
(statearr_29920[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29473__auto___30047);

return statearr_29920;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29475__auto__);
});})(__30035,c__29473__auto___30047,G__29866_30036,n__27463__auto___30034,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__30056 = (__30035 + (1));
__30035 = G__30056;
continue;
} else {
}
break;
}

var c__29473__auto___30057 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29473__auto___30057,jobs,results,process,async){
return (function (){
var f__29474__auto__ = (function (){var switch__29361__auto__ = ((function (c__29473__auto___30057,jobs,results,process,async){
return (function (state_29942){
var state_val_29943 = (state_29942[(1)]);
if((state_val_29943 === (1))){
var state_29942__$1 = state_29942;
var statearr_29944_30058 = state_29942__$1;
(statearr_29944_30058[(2)] = null);

(statearr_29944_30058[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29943 === (2))){
var state_29942__$1 = state_29942;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29942__$1,(4),from);
} else {
if((state_val_29943 === (3))){
var inst_29940 = (state_29942[(2)]);
var state_29942__$1 = state_29942;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29942__$1,inst_29940);
} else {
if((state_val_29943 === (4))){
var inst_29923 = (state_29942[(7)]);
var inst_29923__$1 = (state_29942[(2)]);
var inst_29924 = (inst_29923__$1 == null);
var state_29942__$1 = (function (){var statearr_29945 = state_29942;
(statearr_29945[(7)] = inst_29923__$1);

return statearr_29945;
})();
if(cljs.core.truth_(inst_29924)){
var statearr_29946_30059 = state_29942__$1;
(statearr_29946_30059[(1)] = (5));

} else {
var statearr_29947_30060 = state_29942__$1;
(statearr_29947_30060[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29943 === (5))){
var inst_29926 = cljs.core.async.close_BANG_.call(null,jobs);
var state_29942__$1 = state_29942;
var statearr_29948_30061 = state_29942__$1;
(statearr_29948_30061[(2)] = inst_29926);

(statearr_29948_30061[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29943 === (6))){
var inst_29928 = (state_29942[(8)]);
var inst_29923 = (state_29942[(7)]);
var inst_29928__$1 = cljs.core.async.chan.call(null,(1));
var inst_29929 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_29930 = [inst_29923,inst_29928__$1];
var inst_29931 = (new cljs.core.PersistentVector(null,2,(5),inst_29929,inst_29930,null));
var state_29942__$1 = (function (){var statearr_29949 = state_29942;
(statearr_29949[(8)] = inst_29928__$1);

return statearr_29949;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29942__$1,(8),jobs,inst_29931);
} else {
if((state_val_29943 === (7))){
var inst_29938 = (state_29942[(2)]);
var state_29942__$1 = state_29942;
var statearr_29950_30062 = state_29942__$1;
(statearr_29950_30062[(2)] = inst_29938);

(statearr_29950_30062[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29943 === (8))){
var inst_29928 = (state_29942[(8)]);
var inst_29933 = (state_29942[(2)]);
var state_29942__$1 = (function (){var statearr_29951 = state_29942;
(statearr_29951[(9)] = inst_29933);

return statearr_29951;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29942__$1,(9),results,inst_29928);
} else {
if((state_val_29943 === (9))){
var inst_29935 = (state_29942[(2)]);
var state_29942__$1 = (function (){var statearr_29952 = state_29942;
(statearr_29952[(10)] = inst_29935);

return statearr_29952;
})();
var statearr_29953_30063 = state_29942__$1;
(statearr_29953_30063[(2)] = null);

(statearr_29953_30063[(1)] = (2));


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
});})(c__29473__auto___30057,jobs,results,process,async))
;
return ((function (switch__29361__auto__,c__29473__auto___30057,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__29362__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__29362__auto____0 = (function (){
var statearr_29957 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_29957[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__29362__auto__);

(statearr_29957[(1)] = (1));

return statearr_29957;
});
var cljs$core$async$pipeline_STAR__$_state_machine__29362__auto____1 = (function (state_29942){
while(true){
var ret_value__29363__auto__ = (function (){try{while(true){
var result__29364__auto__ = switch__29361__auto__.call(null,state_29942);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29364__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29364__auto__;
}
break;
}
}catch (e29958){if((e29958 instanceof Object)){
var ex__29365__auto__ = e29958;
var statearr_29959_30064 = state_29942;
(statearr_29959_30064[(5)] = ex__29365__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29942);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29958;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29363__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30065 = state_29942;
state_29942 = G__30065;
continue;
} else {
return ret_value__29363__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__29362__auto__ = function(state_29942){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__29362__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__29362__auto____1.call(this,state_29942);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__29362__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__29362__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__29362__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__29362__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__29362__auto__;
})()
;})(switch__29361__auto__,c__29473__auto___30057,jobs,results,process,async))
})();
var state__29475__auto__ = (function (){var statearr_29960 = f__29474__auto__.call(null);
(statearr_29960[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29473__auto___30057);

return statearr_29960;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29475__auto__);
});})(c__29473__auto___30057,jobs,results,process,async))
);


var c__29473__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29473__auto__,jobs,results,process,async){
return (function (){
var f__29474__auto__ = (function (){var switch__29361__auto__ = ((function (c__29473__auto__,jobs,results,process,async){
return (function (state_29998){
var state_val_29999 = (state_29998[(1)]);
if((state_val_29999 === (7))){
var inst_29994 = (state_29998[(2)]);
var state_29998__$1 = state_29998;
var statearr_30000_30066 = state_29998__$1;
(statearr_30000_30066[(2)] = inst_29994);

(statearr_30000_30066[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29999 === (20))){
var state_29998__$1 = state_29998;
var statearr_30001_30067 = state_29998__$1;
(statearr_30001_30067[(2)] = null);

(statearr_30001_30067[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29999 === (1))){
var state_29998__$1 = state_29998;
var statearr_30002_30068 = state_29998__$1;
(statearr_30002_30068[(2)] = null);

(statearr_30002_30068[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29999 === (4))){
var inst_29963 = (state_29998[(7)]);
var inst_29963__$1 = (state_29998[(2)]);
var inst_29964 = (inst_29963__$1 == null);
var state_29998__$1 = (function (){var statearr_30003 = state_29998;
(statearr_30003[(7)] = inst_29963__$1);

return statearr_30003;
})();
if(cljs.core.truth_(inst_29964)){
var statearr_30004_30069 = state_29998__$1;
(statearr_30004_30069[(1)] = (5));

} else {
var statearr_30005_30070 = state_29998__$1;
(statearr_30005_30070[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29999 === (15))){
var inst_29976 = (state_29998[(8)]);
var state_29998__$1 = state_29998;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29998__$1,(18),to,inst_29976);
} else {
if((state_val_29999 === (21))){
var inst_29989 = (state_29998[(2)]);
var state_29998__$1 = state_29998;
var statearr_30006_30071 = state_29998__$1;
(statearr_30006_30071[(2)] = inst_29989);

(statearr_30006_30071[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29999 === (13))){
var inst_29991 = (state_29998[(2)]);
var state_29998__$1 = (function (){var statearr_30007 = state_29998;
(statearr_30007[(9)] = inst_29991);

return statearr_30007;
})();
var statearr_30008_30072 = state_29998__$1;
(statearr_30008_30072[(2)] = null);

(statearr_30008_30072[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29999 === (6))){
var inst_29963 = (state_29998[(7)]);
var state_29998__$1 = state_29998;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29998__$1,(11),inst_29963);
} else {
if((state_val_29999 === (17))){
var inst_29984 = (state_29998[(2)]);
var state_29998__$1 = state_29998;
if(cljs.core.truth_(inst_29984)){
var statearr_30009_30073 = state_29998__$1;
(statearr_30009_30073[(1)] = (19));

} else {
var statearr_30010_30074 = state_29998__$1;
(statearr_30010_30074[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29999 === (3))){
var inst_29996 = (state_29998[(2)]);
var state_29998__$1 = state_29998;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29998__$1,inst_29996);
} else {
if((state_val_29999 === (12))){
var inst_29973 = (state_29998[(10)]);
var state_29998__$1 = state_29998;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29998__$1,(14),inst_29973);
} else {
if((state_val_29999 === (2))){
var state_29998__$1 = state_29998;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29998__$1,(4),results);
} else {
if((state_val_29999 === (19))){
var state_29998__$1 = state_29998;
var statearr_30011_30075 = state_29998__$1;
(statearr_30011_30075[(2)] = null);

(statearr_30011_30075[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29999 === (11))){
var inst_29973 = (state_29998[(2)]);
var state_29998__$1 = (function (){var statearr_30012 = state_29998;
(statearr_30012[(10)] = inst_29973);

return statearr_30012;
})();
var statearr_30013_30076 = state_29998__$1;
(statearr_30013_30076[(2)] = null);

(statearr_30013_30076[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29999 === (9))){
var state_29998__$1 = state_29998;
var statearr_30014_30077 = state_29998__$1;
(statearr_30014_30077[(2)] = null);

(statearr_30014_30077[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29999 === (5))){
var state_29998__$1 = state_29998;
if(cljs.core.truth_(close_QMARK_)){
var statearr_30015_30078 = state_29998__$1;
(statearr_30015_30078[(1)] = (8));

} else {
var statearr_30016_30079 = state_29998__$1;
(statearr_30016_30079[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29999 === (14))){
var inst_29976 = (state_29998[(8)]);
var inst_29978 = (state_29998[(11)]);
var inst_29976__$1 = (state_29998[(2)]);
var inst_29977 = (inst_29976__$1 == null);
var inst_29978__$1 = cljs.core.not.call(null,inst_29977);
var state_29998__$1 = (function (){var statearr_30017 = state_29998;
(statearr_30017[(8)] = inst_29976__$1);

(statearr_30017[(11)] = inst_29978__$1);

return statearr_30017;
})();
if(inst_29978__$1){
var statearr_30018_30080 = state_29998__$1;
(statearr_30018_30080[(1)] = (15));

} else {
var statearr_30019_30081 = state_29998__$1;
(statearr_30019_30081[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29999 === (16))){
var inst_29978 = (state_29998[(11)]);
var state_29998__$1 = state_29998;
var statearr_30020_30082 = state_29998__$1;
(statearr_30020_30082[(2)] = inst_29978);

(statearr_30020_30082[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29999 === (10))){
var inst_29970 = (state_29998[(2)]);
var state_29998__$1 = state_29998;
var statearr_30021_30083 = state_29998__$1;
(statearr_30021_30083[(2)] = inst_29970);

(statearr_30021_30083[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29999 === (18))){
var inst_29981 = (state_29998[(2)]);
var state_29998__$1 = state_29998;
var statearr_30022_30084 = state_29998__$1;
(statearr_30022_30084[(2)] = inst_29981);

(statearr_30022_30084[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29999 === (8))){
var inst_29967 = cljs.core.async.close_BANG_.call(null,to);
var state_29998__$1 = state_29998;
var statearr_30023_30085 = state_29998__$1;
(statearr_30023_30085[(2)] = inst_29967);

(statearr_30023_30085[(1)] = (10));


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
}
}
}
}
});})(c__29473__auto__,jobs,results,process,async))
;
return ((function (switch__29361__auto__,c__29473__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__29362__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__29362__auto____0 = (function (){
var statearr_30027 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30027[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__29362__auto__);

(statearr_30027[(1)] = (1));

return statearr_30027;
});
var cljs$core$async$pipeline_STAR__$_state_machine__29362__auto____1 = (function (state_29998){
while(true){
var ret_value__29363__auto__ = (function (){try{while(true){
var result__29364__auto__ = switch__29361__auto__.call(null,state_29998);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29364__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29364__auto__;
}
break;
}
}catch (e30028){if((e30028 instanceof Object)){
var ex__29365__auto__ = e30028;
var statearr_30029_30086 = state_29998;
(statearr_30029_30086[(5)] = ex__29365__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29998);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30028;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29363__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30087 = state_29998;
state_29998 = G__30087;
continue;
} else {
return ret_value__29363__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__29362__auto__ = function(state_29998){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__29362__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__29362__auto____1.call(this,state_29998);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__29362__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__29362__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__29362__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__29362__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__29362__auto__;
})()
;})(switch__29361__auto__,c__29473__auto__,jobs,results,process,async))
})();
var state__29475__auto__ = (function (){var statearr_30030 = f__29474__auto__.call(null);
(statearr_30030[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29473__auto__);

return statearr_30030;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29475__auto__);
});})(c__29473__auto__,jobs,results,process,async))
);

return c__29473__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var args30088 = [];
var len__27623__auto___30091 = arguments.length;
var i__27624__auto___30092 = (0);
while(true){
if((i__27624__auto___30092 < len__27623__auto___30091)){
args30088.push((arguments[i__27624__auto___30092]));

var G__30093 = (i__27624__auto___30092 + (1));
i__27624__auto___30092 = G__30093;
continue;
} else {
}
break;
}

var G__30090 = args30088.length;
switch (G__30090) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30088.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var args30095 = [];
var len__27623__auto___30098 = arguments.length;
var i__27624__auto___30099 = (0);
while(true){
if((i__27624__auto___30099 < len__27623__auto___30098)){
args30095.push((arguments[i__27624__auto___30099]));

var G__30100 = (i__27624__auto___30099 + (1));
i__27624__auto___30099 = G__30100;
continue;
} else {
}
break;
}

var G__30097 = args30095.length;
switch (G__30097) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30095.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var args30102 = [];
var len__27623__auto___30155 = arguments.length;
var i__27624__auto___30156 = (0);
while(true){
if((i__27624__auto___30156 < len__27623__auto___30155)){
args30102.push((arguments[i__27624__auto___30156]));

var G__30157 = (i__27624__auto___30156 + (1));
i__27624__auto___30156 = G__30157;
continue;
} else {
}
break;
}

var G__30104 = args30102.length;
switch (G__30104) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30102.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__29473__auto___30159 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29473__auto___30159,tc,fc){
return (function (){
var f__29474__auto__ = (function (){var switch__29361__auto__ = ((function (c__29473__auto___30159,tc,fc){
return (function (state_30130){
var state_val_30131 = (state_30130[(1)]);
if((state_val_30131 === (7))){
var inst_30126 = (state_30130[(2)]);
var state_30130__$1 = state_30130;
var statearr_30132_30160 = state_30130__$1;
(statearr_30132_30160[(2)] = inst_30126);

(statearr_30132_30160[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30131 === (1))){
var state_30130__$1 = state_30130;
var statearr_30133_30161 = state_30130__$1;
(statearr_30133_30161[(2)] = null);

(statearr_30133_30161[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30131 === (4))){
var inst_30107 = (state_30130[(7)]);
var inst_30107__$1 = (state_30130[(2)]);
var inst_30108 = (inst_30107__$1 == null);
var state_30130__$1 = (function (){var statearr_30134 = state_30130;
(statearr_30134[(7)] = inst_30107__$1);

return statearr_30134;
})();
if(cljs.core.truth_(inst_30108)){
var statearr_30135_30162 = state_30130__$1;
(statearr_30135_30162[(1)] = (5));

} else {
var statearr_30136_30163 = state_30130__$1;
(statearr_30136_30163[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30131 === (13))){
var state_30130__$1 = state_30130;
var statearr_30137_30164 = state_30130__$1;
(statearr_30137_30164[(2)] = null);

(statearr_30137_30164[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30131 === (6))){
var inst_30107 = (state_30130[(7)]);
var inst_30113 = p.call(null,inst_30107);
var state_30130__$1 = state_30130;
if(cljs.core.truth_(inst_30113)){
var statearr_30138_30165 = state_30130__$1;
(statearr_30138_30165[(1)] = (9));

} else {
var statearr_30139_30166 = state_30130__$1;
(statearr_30139_30166[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30131 === (3))){
var inst_30128 = (state_30130[(2)]);
var state_30130__$1 = state_30130;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30130__$1,inst_30128);
} else {
if((state_val_30131 === (12))){
var state_30130__$1 = state_30130;
var statearr_30140_30167 = state_30130__$1;
(statearr_30140_30167[(2)] = null);

(statearr_30140_30167[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30131 === (2))){
var state_30130__$1 = state_30130;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30130__$1,(4),ch);
} else {
if((state_val_30131 === (11))){
var inst_30107 = (state_30130[(7)]);
var inst_30117 = (state_30130[(2)]);
var state_30130__$1 = state_30130;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30130__$1,(8),inst_30117,inst_30107);
} else {
if((state_val_30131 === (9))){
var state_30130__$1 = state_30130;
var statearr_30141_30168 = state_30130__$1;
(statearr_30141_30168[(2)] = tc);

(statearr_30141_30168[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30131 === (5))){
var inst_30110 = cljs.core.async.close_BANG_.call(null,tc);
var inst_30111 = cljs.core.async.close_BANG_.call(null,fc);
var state_30130__$1 = (function (){var statearr_30142 = state_30130;
(statearr_30142[(8)] = inst_30110);

return statearr_30142;
})();
var statearr_30143_30169 = state_30130__$1;
(statearr_30143_30169[(2)] = inst_30111);

(statearr_30143_30169[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30131 === (14))){
var inst_30124 = (state_30130[(2)]);
var state_30130__$1 = state_30130;
var statearr_30144_30170 = state_30130__$1;
(statearr_30144_30170[(2)] = inst_30124);

(statearr_30144_30170[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30131 === (10))){
var state_30130__$1 = state_30130;
var statearr_30145_30171 = state_30130__$1;
(statearr_30145_30171[(2)] = fc);

(statearr_30145_30171[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30131 === (8))){
var inst_30119 = (state_30130[(2)]);
var state_30130__$1 = state_30130;
if(cljs.core.truth_(inst_30119)){
var statearr_30146_30172 = state_30130__$1;
(statearr_30146_30172[(1)] = (12));

} else {
var statearr_30147_30173 = state_30130__$1;
(statearr_30147_30173[(1)] = (13));

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
});})(c__29473__auto___30159,tc,fc))
;
return ((function (switch__29361__auto__,c__29473__auto___30159,tc,fc){
return (function() {
var cljs$core$async$state_machine__29362__auto__ = null;
var cljs$core$async$state_machine__29362__auto____0 = (function (){
var statearr_30151 = [null,null,null,null,null,null,null,null,null];
(statearr_30151[(0)] = cljs$core$async$state_machine__29362__auto__);

(statearr_30151[(1)] = (1));

return statearr_30151;
});
var cljs$core$async$state_machine__29362__auto____1 = (function (state_30130){
while(true){
var ret_value__29363__auto__ = (function (){try{while(true){
var result__29364__auto__ = switch__29361__auto__.call(null,state_30130);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29364__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29364__auto__;
}
break;
}
}catch (e30152){if((e30152 instanceof Object)){
var ex__29365__auto__ = e30152;
var statearr_30153_30174 = state_30130;
(statearr_30153_30174[(5)] = ex__29365__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30130);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30152;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29363__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30175 = state_30130;
state_30130 = G__30175;
continue;
} else {
return ret_value__29363__auto__;
}
break;
}
});
cljs$core$async$state_machine__29362__auto__ = function(state_30130){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29362__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29362__auto____1.call(this,state_30130);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29362__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29362__auto____0;
cljs$core$async$state_machine__29362__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29362__auto____1;
return cljs$core$async$state_machine__29362__auto__;
})()
;})(switch__29361__auto__,c__29473__auto___30159,tc,fc))
})();
var state__29475__auto__ = (function (){var statearr_30154 = f__29474__auto__.call(null);
(statearr_30154[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29473__auto___30159);

return statearr_30154;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29475__auto__);
});})(c__29473__auto___30159,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__29473__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29473__auto__){
return (function (){
var f__29474__auto__ = (function (){var switch__29361__auto__ = ((function (c__29473__auto__){
return (function (state_30239){
var state_val_30240 = (state_30239[(1)]);
if((state_val_30240 === (7))){
var inst_30235 = (state_30239[(2)]);
var state_30239__$1 = state_30239;
var statearr_30241_30262 = state_30239__$1;
(statearr_30241_30262[(2)] = inst_30235);

(statearr_30241_30262[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30240 === (1))){
var inst_30219 = init;
var state_30239__$1 = (function (){var statearr_30242 = state_30239;
(statearr_30242[(7)] = inst_30219);

return statearr_30242;
})();
var statearr_30243_30263 = state_30239__$1;
(statearr_30243_30263[(2)] = null);

(statearr_30243_30263[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30240 === (4))){
var inst_30222 = (state_30239[(8)]);
var inst_30222__$1 = (state_30239[(2)]);
var inst_30223 = (inst_30222__$1 == null);
var state_30239__$1 = (function (){var statearr_30244 = state_30239;
(statearr_30244[(8)] = inst_30222__$1);

return statearr_30244;
})();
if(cljs.core.truth_(inst_30223)){
var statearr_30245_30264 = state_30239__$1;
(statearr_30245_30264[(1)] = (5));

} else {
var statearr_30246_30265 = state_30239__$1;
(statearr_30246_30265[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30240 === (6))){
var inst_30219 = (state_30239[(7)]);
var inst_30222 = (state_30239[(8)]);
var inst_30226 = (state_30239[(9)]);
var inst_30226__$1 = f.call(null,inst_30219,inst_30222);
var inst_30227 = cljs.core.reduced_QMARK_.call(null,inst_30226__$1);
var state_30239__$1 = (function (){var statearr_30247 = state_30239;
(statearr_30247[(9)] = inst_30226__$1);

return statearr_30247;
})();
if(inst_30227){
var statearr_30248_30266 = state_30239__$1;
(statearr_30248_30266[(1)] = (8));

} else {
var statearr_30249_30267 = state_30239__$1;
(statearr_30249_30267[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30240 === (3))){
var inst_30237 = (state_30239[(2)]);
var state_30239__$1 = state_30239;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30239__$1,inst_30237);
} else {
if((state_val_30240 === (2))){
var state_30239__$1 = state_30239;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30239__$1,(4),ch);
} else {
if((state_val_30240 === (9))){
var inst_30226 = (state_30239[(9)]);
var inst_30219 = inst_30226;
var state_30239__$1 = (function (){var statearr_30250 = state_30239;
(statearr_30250[(7)] = inst_30219);

return statearr_30250;
})();
var statearr_30251_30268 = state_30239__$1;
(statearr_30251_30268[(2)] = null);

(statearr_30251_30268[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30240 === (5))){
var inst_30219 = (state_30239[(7)]);
var state_30239__$1 = state_30239;
var statearr_30252_30269 = state_30239__$1;
(statearr_30252_30269[(2)] = inst_30219);

(statearr_30252_30269[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30240 === (10))){
var inst_30233 = (state_30239[(2)]);
var state_30239__$1 = state_30239;
var statearr_30253_30270 = state_30239__$1;
(statearr_30253_30270[(2)] = inst_30233);

(statearr_30253_30270[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30240 === (8))){
var inst_30226 = (state_30239[(9)]);
var inst_30229 = cljs.core.deref.call(null,inst_30226);
var state_30239__$1 = state_30239;
var statearr_30254_30271 = state_30239__$1;
(statearr_30254_30271[(2)] = inst_30229);

(statearr_30254_30271[(1)] = (10));


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
});})(c__29473__auto__))
;
return ((function (switch__29361__auto__,c__29473__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__29362__auto__ = null;
var cljs$core$async$reduce_$_state_machine__29362__auto____0 = (function (){
var statearr_30258 = [null,null,null,null,null,null,null,null,null,null];
(statearr_30258[(0)] = cljs$core$async$reduce_$_state_machine__29362__auto__);

(statearr_30258[(1)] = (1));

return statearr_30258;
});
var cljs$core$async$reduce_$_state_machine__29362__auto____1 = (function (state_30239){
while(true){
var ret_value__29363__auto__ = (function (){try{while(true){
var result__29364__auto__ = switch__29361__auto__.call(null,state_30239);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29364__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29364__auto__;
}
break;
}
}catch (e30259){if((e30259 instanceof Object)){
var ex__29365__auto__ = e30259;
var statearr_30260_30272 = state_30239;
(statearr_30260_30272[(5)] = ex__29365__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30239);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30259;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29363__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30273 = state_30239;
state_30239 = G__30273;
continue;
} else {
return ret_value__29363__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__29362__auto__ = function(state_30239){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__29362__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__29362__auto____1.call(this,state_30239);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__29362__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__29362__auto____0;
cljs$core$async$reduce_$_state_machine__29362__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__29362__auto____1;
return cljs$core$async$reduce_$_state_machine__29362__auto__;
})()
;})(switch__29361__auto__,c__29473__auto__))
})();
var state__29475__auto__ = (function (){var statearr_30261 = f__29474__auto__.call(null);
(statearr_30261[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29473__auto__);

return statearr_30261;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29475__auto__);
});})(c__29473__auto__))
);

return c__29473__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__29473__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29473__auto__,f__$1){
return (function (){
var f__29474__auto__ = (function (){var switch__29361__auto__ = ((function (c__29473__auto__,f__$1){
return (function (state_30293){
var state_val_30294 = (state_30293[(1)]);
if((state_val_30294 === (1))){
var inst_30288 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_30293__$1 = state_30293;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30293__$1,(2),inst_30288);
} else {
if((state_val_30294 === (2))){
var inst_30290 = (state_30293[(2)]);
var inst_30291 = f__$1.call(null,inst_30290);
var state_30293__$1 = state_30293;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30293__$1,inst_30291);
} else {
return null;
}
}
});})(c__29473__auto__,f__$1))
;
return ((function (switch__29361__auto__,c__29473__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__29362__auto__ = null;
var cljs$core$async$transduce_$_state_machine__29362__auto____0 = (function (){
var statearr_30298 = [null,null,null,null,null,null,null];
(statearr_30298[(0)] = cljs$core$async$transduce_$_state_machine__29362__auto__);

(statearr_30298[(1)] = (1));

return statearr_30298;
});
var cljs$core$async$transduce_$_state_machine__29362__auto____1 = (function (state_30293){
while(true){
var ret_value__29363__auto__ = (function (){try{while(true){
var result__29364__auto__ = switch__29361__auto__.call(null,state_30293);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29364__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29364__auto__;
}
break;
}
}catch (e30299){if((e30299 instanceof Object)){
var ex__29365__auto__ = e30299;
var statearr_30300_30302 = state_30293;
(statearr_30300_30302[(5)] = ex__29365__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30293);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30299;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29363__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30303 = state_30293;
state_30293 = G__30303;
continue;
} else {
return ret_value__29363__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__29362__auto__ = function(state_30293){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__29362__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__29362__auto____1.call(this,state_30293);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__29362__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__29362__auto____0;
cljs$core$async$transduce_$_state_machine__29362__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__29362__auto____1;
return cljs$core$async$transduce_$_state_machine__29362__auto__;
})()
;})(switch__29361__auto__,c__29473__auto__,f__$1))
})();
var state__29475__auto__ = (function (){var statearr_30301 = f__29474__auto__.call(null);
(statearr_30301[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29473__auto__);

return statearr_30301;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29475__auto__);
});})(c__29473__auto__,f__$1))
);

return c__29473__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var args30304 = [];
var len__27623__auto___30356 = arguments.length;
var i__27624__auto___30357 = (0);
while(true){
if((i__27624__auto___30357 < len__27623__auto___30356)){
args30304.push((arguments[i__27624__auto___30357]));

var G__30358 = (i__27624__auto___30357 + (1));
i__27624__auto___30357 = G__30358;
continue;
} else {
}
break;
}

var G__30306 = args30304.length;
switch (G__30306) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30304.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__29473__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29473__auto__){
return (function (){
var f__29474__auto__ = (function (){var switch__29361__auto__ = ((function (c__29473__auto__){
return (function (state_30331){
var state_val_30332 = (state_30331[(1)]);
if((state_val_30332 === (7))){
var inst_30313 = (state_30331[(2)]);
var state_30331__$1 = state_30331;
var statearr_30333_30360 = state_30331__$1;
(statearr_30333_30360[(2)] = inst_30313);

(statearr_30333_30360[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30332 === (1))){
var inst_30307 = cljs.core.seq.call(null,coll);
var inst_30308 = inst_30307;
var state_30331__$1 = (function (){var statearr_30334 = state_30331;
(statearr_30334[(7)] = inst_30308);

return statearr_30334;
})();
var statearr_30335_30361 = state_30331__$1;
(statearr_30335_30361[(2)] = null);

(statearr_30335_30361[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30332 === (4))){
var inst_30308 = (state_30331[(7)]);
var inst_30311 = cljs.core.first.call(null,inst_30308);
var state_30331__$1 = state_30331;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30331__$1,(7),ch,inst_30311);
} else {
if((state_val_30332 === (13))){
var inst_30325 = (state_30331[(2)]);
var state_30331__$1 = state_30331;
var statearr_30336_30362 = state_30331__$1;
(statearr_30336_30362[(2)] = inst_30325);

(statearr_30336_30362[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30332 === (6))){
var inst_30316 = (state_30331[(2)]);
var state_30331__$1 = state_30331;
if(cljs.core.truth_(inst_30316)){
var statearr_30337_30363 = state_30331__$1;
(statearr_30337_30363[(1)] = (8));

} else {
var statearr_30338_30364 = state_30331__$1;
(statearr_30338_30364[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30332 === (3))){
var inst_30329 = (state_30331[(2)]);
var state_30331__$1 = state_30331;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30331__$1,inst_30329);
} else {
if((state_val_30332 === (12))){
var state_30331__$1 = state_30331;
var statearr_30339_30365 = state_30331__$1;
(statearr_30339_30365[(2)] = null);

(statearr_30339_30365[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30332 === (2))){
var inst_30308 = (state_30331[(7)]);
var state_30331__$1 = state_30331;
if(cljs.core.truth_(inst_30308)){
var statearr_30340_30366 = state_30331__$1;
(statearr_30340_30366[(1)] = (4));

} else {
var statearr_30341_30367 = state_30331__$1;
(statearr_30341_30367[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30332 === (11))){
var inst_30322 = cljs.core.async.close_BANG_.call(null,ch);
var state_30331__$1 = state_30331;
var statearr_30342_30368 = state_30331__$1;
(statearr_30342_30368[(2)] = inst_30322);

(statearr_30342_30368[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30332 === (9))){
var state_30331__$1 = state_30331;
if(cljs.core.truth_(close_QMARK_)){
var statearr_30343_30369 = state_30331__$1;
(statearr_30343_30369[(1)] = (11));

} else {
var statearr_30344_30370 = state_30331__$1;
(statearr_30344_30370[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30332 === (5))){
var inst_30308 = (state_30331[(7)]);
var state_30331__$1 = state_30331;
var statearr_30345_30371 = state_30331__$1;
(statearr_30345_30371[(2)] = inst_30308);

(statearr_30345_30371[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30332 === (10))){
var inst_30327 = (state_30331[(2)]);
var state_30331__$1 = state_30331;
var statearr_30346_30372 = state_30331__$1;
(statearr_30346_30372[(2)] = inst_30327);

(statearr_30346_30372[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30332 === (8))){
var inst_30308 = (state_30331[(7)]);
var inst_30318 = cljs.core.next.call(null,inst_30308);
var inst_30308__$1 = inst_30318;
var state_30331__$1 = (function (){var statearr_30347 = state_30331;
(statearr_30347[(7)] = inst_30308__$1);

return statearr_30347;
})();
var statearr_30348_30373 = state_30331__$1;
(statearr_30348_30373[(2)] = null);

(statearr_30348_30373[(1)] = (2));


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
});})(c__29473__auto__))
;
return ((function (switch__29361__auto__,c__29473__auto__){
return (function() {
var cljs$core$async$state_machine__29362__auto__ = null;
var cljs$core$async$state_machine__29362__auto____0 = (function (){
var statearr_30352 = [null,null,null,null,null,null,null,null];
(statearr_30352[(0)] = cljs$core$async$state_machine__29362__auto__);

(statearr_30352[(1)] = (1));

return statearr_30352;
});
var cljs$core$async$state_machine__29362__auto____1 = (function (state_30331){
while(true){
var ret_value__29363__auto__ = (function (){try{while(true){
var result__29364__auto__ = switch__29361__auto__.call(null,state_30331);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29364__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29364__auto__;
}
break;
}
}catch (e30353){if((e30353 instanceof Object)){
var ex__29365__auto__ = e30353;
var statearr_30354_30374 = state_30331;
(statearr_30354_30374[(5)] = ex__29365__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30331);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30353;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29363__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30375 = state_30331;
state_30331 = G__30375;
continue;
} else {
return ret_value__29363__auto__;
}
break;
}
});
cljs$core$async$state_machine__29362__auto__ = function(state_30331){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29362__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29362__auto____1.call(this,state_30331);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29362__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29362__auto____0;
cljs$core$async$state_machine__29362__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29362__auto____1;
return cljs$core$async$state_machine__29362__auto__;
})()
;})(switch__29361__auto__,c__29473__auto__))
})();
var state__29475__auto__ = (function (){var statearr_30355 = f__29474__auto__.call(null);
(statearr_30355[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29473__auto__);

return statearr_30355;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29475__auto__);
});})(c__29473__auto__))
);

return c__29473__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((!((_ == null))) && (!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__27211__auto__ = (((_ == null))?null:_);
var m__27212__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__27211__auto__)]);
if(!((m__27212__auto__ == null))){
return m__27212__auto__.call(null,_);
} else {
var m__27212__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__27212__auto____$1 == null))){
return m__27212__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((!((m == null))) && (!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__27211__auto__ = (((m == null))?null:m);
var m__27212__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__27211__auto__)]);
if(!((m__27212__auto__ == null))){
return m__27212__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__27212__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__27212__auto____$1 == null))){
return m__27212__auto____$1.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__27211__auto__ = (((m == null))?null:m);
var m__27212__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__27211__auto__)]);
if(!((m__27212__auto__ == null))){
return m__27212__auto__.call(null,m,ch);
} else {
var m__27212__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__27212__auto____$1 == null))){
return m__27212__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__27211__auto__ = (((m == null))?null:m);
var m__27212__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__27211__auto__)]);
if(!((m__27212__auto__ == null))){
return m__27212__auto__.call(null,m);
} else {
var m__27212__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__27212__auto____$1 == null))){
return m__27212__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async30601 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30601 = (function (mult,ch,cs,meta30602){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta30602 = meta30602;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async30601.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_30603,meta30602__$1){
var self__ = this;
var _30603__$1 = this;
return (new cljs.core.async.t_cljs$core$async30601(self__.mult,self__.ch,self__.cs,meta30602__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async30601.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_30603){
var self__ = this;
var _30603__$1 = this;
return self__.meta30602;
});})(cs))
;

cljs.core.async.t_cljs$core$async30601.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async30601.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async30601.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async30601.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async30601.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async30601.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async30601.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta30602","meta30602",-263380635,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async30601.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async30601.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30601";

cljs.core.async.t_cljs$core$async30601.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__27154__auto__,writer__27155__auto__,opt__27156__auto__){
return cljs.core._write.call(null,writer__27155__auto__,"cljs.core.async/t_cljs$core$async30601");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async30601 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async30601(mult__$1,ch__$1,cs__$1,meta30602){
return (new cljs.core.async.t_cljs$core$async30601(mult__$1,ch__$1,cs__$1,meta30602));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async30601(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__29473__auto___30826 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29473__auto___30826,cs,m,dchan,dctr,done){
return (function (){
var f__29474__auto__ = (function (){var switch__29361__auto__ = ((function (c__29473__auto___30826,cs,m,dchan,dctr,done){
return (function (state_30738){
var state_val_30739 = (state_30738[(1)]);
if((state_val_30739 === (7))){
var inst_30734 = (state_30738[(2)]);
var state_30738__$1 = state_30738;
var statearr_30740_30827 = state_30738__$1;
(statearr_30740_30827[(2)] = inst_30734);

(statearr_30740_30827[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30739 === (20))){
var inst_30637 = (state_30738[(7)]);
var inst_30649 = cljs.core.first.call(null,inst_30637);
var inst_30650 = cljs.core.nth.call(null,inst_30649,(0),null);
var inst_30651 = cljs.core.nth.call(null,inst_30649,(1),null);
var state_30738__$1 = (function (){var statearr_30741 = state_30738;
(statearr_30741[(8)] = inst_30650);

return statearr_30741;
})();
if(cljs.core.truth_(inst_30651)){
var statearr_30742_30828 = state_30738__$1;
(statearr_30742_30828[(1)] = (22));

} else {
var statearr_30743_30829 = state_30738__$1;
(statearr_30743_30829[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30739 === (27))){
var inst_30681 = (state_30738[(9)]);
var inst_30679 = (state_30738[(10)]);
var inst_30606 = (state_30738[(11)]);
var inst_30686 = (state_30738[(12)]);
var inst_30686__$1 = cljs.core._nth.call(null,inst_30679,inst_30681);
var inst_30687 = cljs.core.async.put_BANG_.call(null,inst_30686__$1,inst_30606,done);
var state_30738__$1 = (function (){var statearr_30744 = state_30738;
(statearr_30744[(12)] = inst_30686__$1);

return statearr_30744;
})();
if(cljs.core.truth_(inst_30687)){
var statearr_30745_30830 = state_30738__$1;
(statearr_30745_30830[(1)] = (30));

} else {
var statearr_30746_30831 = state_30738__$1;
(statearr_30746_30831[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30739 === (1))){
var state_30738__$1 = state_30738;
var statearr_30747_30832 = state_30738__$1;
(statearr_30747_30832[(2)] = null);

(statearr_30747_30832[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30739 === (24))){
var inst_30637 = (state_30738[(7)]);
var inst_30656 = (state_30738[(2)]);
var inst_30657 = cljs.core.next.call(null,inst_30637);
var inst_30615 = inst_30657;
var inst_30616 = null;
var inst_30617 = (0);
var inst_30618 = (0);
var state_30738__$1 = (function (){var statearr_30748 = state_30738;
(statearr_30748[(13)] = inst_30615);

(statearr_30748[(14)] = inst_30617);

(statearr_30748[(15)] = inst_30616);

(statearr_30748[(16)] = inst_30656);

(statearr_30748[(17)] = inst_30618);

return statearr_30748;
})();
var statearr_30749_30833 = state_30738__$1;
(statearr_30749_30833[(2)] = null);

(statearr_30749_30833[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30739 === (39))){
var state_30738__$1 = state_30738;
var statearr_30753_30834 = state_30738__$1;
(statearr_30753_30834[(2)] = null);

(statearr_30753_30834[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30739 === (4))){
var inst_30606 = (state_30738[(11)]);
var inst_30606__$1 = (state_30738[(2)]);
var inst_30607 = (inst_30606__$1 == null);
var state_30738__$1 = (function (){var statearr_30754 = state_30738;
(statearr_30754[(11)] = inst_30606__$1);

return statearr_30754;
})();
if(cljs.core.truth_(inst_30607)){
var statearr_30755_30835 = state_30738__$1;
(statearr_30755_30835[(1)] = (5));

} else {
var statearr_30756_30836 = state_30738__$1;
(statearr_30756_30836[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30739 === (15))){
var inst_30615 = (state_30738[(13)]);
var inst_30617 = (state_30738[(14)]);
var inst_30616 = (state_30738[(15)]);
var inst_30618 = (state_30738[(17)]);
var inst_30633 = (state_30738[(2)]);
var inst_30634 = (inst_30618 + (1));
var tmp30750 = inst_30615;
var tmp30751 = inst_30617;
var tmp30752 = inst_30616;
var inst_30615__$1 = tmp30750;
var inst_30616__$1 = tmp30752;
var inst_30617__$1 = tmp30751;
var inst_30618__$1 = inst_30634;
var state_30738__$1 = (function (){var statearr_30757 = state_30738;
(statearr_30757[(18)] = inst_30633);

(statearr_30757[(13)] = inst_30615__$1);

(statearr_30757[(14)] = inst_30617__$1);

(statearr_30757[(15)] = inst_30616__$1);

(statearr_30757[(17)] = inst_30618__$1);

return statearr_30757;
})();
var statearr_30758_30837 = state_30738__$1;
(statearr_30758_30837[(2)] = null);

(statearr_30758_30837[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30739 === (21))){
var inst_30660 = (state_30738[(2)]);
var state_30738__$1 = state_30738;
var statearr_30762_30838 = state_30738__$1;
(statearr_30762_30838[(2)] = inst_30660);

(statearr_30762_30838[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30739 === (31))){
var inst_30686 = (state_30738[(12)]);
var inst_30690 = done.call(null,null);
var inst_30691 = cljs.core.async.untap_STAR_.call(null,m,inst_30686);
var state_30738__$1 = (function (){var statearr_30763 = state_30738;
(statearr_30763[(19)] = inst_30690);

return statearr_30763;
})();
var statearr_30764_30839 = state_30738__$1;
(statearr_30764_30839[(2)] = inst_30691);

(statearr_30764_30839[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30739 === (32))){
var inst_30678 = (state_30738[(20)]);
var inst_30681 = (state_30738[(9)]);
var inst_30680 = (state_30738[(21)]);
var inst_30679 = (state_30738[(10)]);
var inst_30693 = (state_30738[(2)]);
var inst_30694 = (inst_30681 + (1));
var tmp30759 = inst_30678;
var tmp30760 = inst_30680;
var tmp30761 = inst_30679;
var inst_30678__$1 = tmp30759;
var inst_30679__$1 = tmp30761;
var inst_30680__$1 = tmp30760;
var inst_30681__$1 = inst_30694;
var state_30738__$1 = (function (){var statearr_30765 = state_30738;
(statearr_30765[(20)] = inst_30678__$1);

(statearr_30765[(9)] = inst_30681__$1);

(statearr_30765[(22)] = inst_30693);

(statearr_30765[(21)] = inst_30680__$1);

(statearr_30765[(10)] = inst_30679__$1);

return statearr_30765;
})();
var statearr_30766_30840 = state_30738__$1;
(statearr_30766_30840[(2)] = null);

(statearr_30766_30840[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30739 === (40))){
var inst_30706 = (state_30738[(23)]);
var inst_30710 = done.call(null,null);
var inst_30711 = cljs.core.async.untap_STAR_.call(null,m,inst_30706);
var state_30738__$1 = (function (){var statearr_30767 = state_30738;
(statearr_30767[(24)] = inst_30710);

return statearr_30767;
})();
var statearr_30768_30841 = state_30738__$1;
(statearr_30768_30841[(2)] = inst_30711);

(statearr_30768_30841[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30739 === (33))){
var inst_30697 = (state_30738[(25)]);
var inst_30699 = cljs.core.chunked_seq_QMARK_.call(null,inst_30697);
var state_30738__$1 = state_30738;
if(inst_30699){
var statearr_30769_30842 = state_30738__$1;
(statearr_30769_30842[(1)] = (36));

} else {
var statearr_30770_30843 = state_30738__$1;
(statearr_30770_30843[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30739 === (13))){
var inst_30627 = (state_30738[(26)]);
var inst_30630 = cljs.core.async.close_BANG_.call(null,inst_30627);
var state_30738__$1 = state_30738;
var statearr_30771_30844 = state_30738__$1;
(statearr_30771_30844[(2)] = inst_30630);

(statearr_30771_30844[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30739 === (22))){
var inst_30650 = (state_30738[(8)]);
var inst_30653 = cljs.core.async.close_BANG_.call(null,inst_30650);
var state_30738__$1 = state_30738;
var statearr_30772_30845 = state_30738__$1;
(statearr_30772_30845[(2)] = inst_30653);

(statearr_30772_30845[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30739 === (36))){
var inst_30697 = (state_30738[(25)]);
var inst_30701 = cljs.core.chunk_first.call(null,inst_30697);
var inst_30702 = cljs.core.chunk_rest.call(null,inst_30697);
var inst_30703 = cljs.core.count.call(null,inst_30701);
var inst_30678 = inst_30702;
var inst_30679 = inst_30701;
var inst_30680 = inst_30703;
var inst_30681 = (0);
var state_30738__$1 = (function (){var statearr_30773 = state_30738;
(statearr_30773[(20)] = inst_30678);

(statearr_30773[(9)] = inst_30681);

(statearr_30773[(21)] = inst_30680);

(statearr_30773[(10)] = inst_30679);

return statearr_30773;
})();
var statearr_30774_30846 = state_30738__$1;
(statearr_30774_30846[(2)] = null);

(statearr_30774_30846[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30739 === (41))){
var inst_30697 = (state_30738[(25)]);
var inst_30713 = (state_30738[(2)]);
var inst_30714 = cljs.core.next.call(null,inst_30697);
var inst_30678 = inst_30714;
var inst_30679 = null;
var inst_30680 = (0);
var inst_30681 = (0);
var state_30738__$1 = (function (){var statearr_30775 = state_30738;
(statearr_30775[(20)] = inst_30678);

(statearr_30775[(9)] = inst_30681);

(statearr_30775[(27)] = inst_30713);

(statearr_30775[(21)] = inst_30680);

(statearr_30775[(10)] = inst_30679);

return statearr_30775;
})();
var statearr_30776_30847 = state_30738__$1;
(statearr_30776_30847[(2)] = null);

(statearr_30776_30847[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30739 === (43))){
var state_30738__$1 = state_30738;
var statearr_30777_30848 = state_30738__$1;
(statearr_30777_30848[(2)] = null);

(statearr_30777_30848[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30739 === (29))){
var inst_30722 = (state_30738[(2)]);
var state_30738__$1 = state_30738;
var statearr_30778_30849 = state_30738__$1;
(statearr_30778_30849[(2)] = inst_30722);

(statearr_30778_30849[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30739 === (44))){
var inst_30731 = (state_30738[(2)]);
var state_30738__$1 = (function (){var statearr_30779 = state_30738;
(statearr_30779[(28)] = inst_30731);

return statearr_30779;
})();
var statearr_30780_30850 = state_30738__$1;
(statearr_30780_30850[(2)] = null);

(statearr_30780_30850[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30739 === (6))){
var inst_30670 = (state_30738[(29)]);
var inst_30669 = cljs.core.deref.call(null,cs);
var inst_30670__$1 = cljs.core.keys.call(null,inst_30669);
var inst_30671 = cljs.core.count.call(null,inst_30670__$1);
var inst_30672 = cljs.core.reset_BANG_.call(null,dctr,inst_30671);
var inst_30677 = cljs.core.seq.call(null,inst_30670__$1);
var inst_30678 = inst_30677;
var inst_30679 = null;
var inst_30680 = (0);
var inst_30681 = (0);
var state_30738__$1 = (function (){var statearr_30781 = state_30738;
(statearr_30781[(20)] = inst_30678);

(statearr_30781[(29)] = inst_30670__$1);

(statearr_30781[(9)] = inst_30681);

(statearr_30781[(21)] = inst_30680);

(statearr_30781[(30)] = inst_30672);

(statearr_30781[(10)] = inst_30679);

return statearr_30781;
})();
var statearr_30782_30851 = state_30738__$1;
(statearr_30782_30851[(2)] = null);

(statearr_30782_30851[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30739 === (28))){
var inst_30697 = (state_30738[(25)]);
var inst_30678 = (state_30738[(20)]);
var inst_30697__$1 = cljs.core.seq.call(null,inst_30678);
var state_30738__$1 = (function (){var statearr_30783 = state_30738;
(statearr_30783[(25)] = inst_30697__$1);

return statearr_30783;
})();
if(inst_30697__$1){
var statearr_30784_30852 = state_30738__$1;
(statearr_30784_30852[(1)] = (33));

} else {
var statearr_30785_30853 = state_30738__$1;
(statearr_30785_30853[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30739 === (25))){
var inst_30681 = (state_30738[(9)]);
var inst_30680 = (state_30738[(21)]);
var inst_30683 = (inst_30681 < inst_30680);
var inst_30684 = inst_30683;
var state_30738__$1 = state_30738;
if(cljs.core.truth_(inst_30684)){
var statearr_30786_30854 = state_30738__$1;
(statearr_30786_30854[(1)] = (27));

} else {
var statearr_30787_30855 = state_30738__$1;
(statearr_30787_30855[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30739 === (34))){
var state_30738__$1 = state_30738;
var statearr_30788_30856 = state_30738__$1;
(statearr_30788_30856[(2)] = null);

(statearr_30788_30856[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30739 === (17))){
var state_30738__$1 = state_30738;
var statearr_30789_30857 = state_30738__$1;
(statearr_30789_30857[(2)] = null);

(statearr_30789_30857[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30739 === (3))){
var inst_30736 = (state_30738[(2)]);
var state_30738__$1 = state_30738;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30738__$1,inst_30736);
} else {
if((state_val_30739 === (12))){
var inst_30665 = (state_30738[(2)]);
var state_30738__$1 = state_30738;
var statearr_30790_30858 = state_30738__$1;
(statearr_30790_30858[(2)] = inst_30665);

(statearr_30790_30858[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30739 === (2))){
var state_30738__$1 = state_30738;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30738__$1,(4),ch);
} else {
if((state_val_30739 === (23))){
var state_30738__$1 = state_30738;
var statearr_30791_30859 = state_30738__$1;
(statearr_30791_30859[(2)] = null);

(statearr_30791_30859[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30739 === (35))){
var inst_30720 = (state_30738[(2)]);
var state_30738__$1 = state_30738;
var statearr_30792_30860 = state_30738__$1;
(statearr_30792_30860[(2)] = inst_30720);

(statearr_30792_30860[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30739 === (19))){
var inst_30637 = (state_30738[(7)]);
var inst_30641 = cljs.core.chunk_first.call(null,inst_30637);
var inst_30642 = cljs.core.chunk_rest.call(null,inst_30637);
var inst_30643 = cljs.core.count.call(null,inst_30641);
var inst_30615 = inst_30642;
var inst_30616 = inst_30641;
var inst_30617 = inst_30643;
var inst_30618 = (0);
var state_30738__$1 = (function (){var statearr_30793 = state_30738;
(statearr_30793[(13)] = inst_30615);

(statearr_30793[(14)] = inst_30617);

(statearr_30793[(15)] = inst_30616);

(statearr_30793[(17)] = inst_30618);

return statearr_30793;
})();
var statearr_30794_30861 = state_30738__$1;
(statearr_30794_30861[(2)] = null);

(statearr_30794_30861[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30739 === (11))){
var inst_30637 = (state_30738[(7)]);
var inst_30615 = (state_30738[(13)]);
var inst_30637__$1 = cljs.core.seq.call(null,inst_30615);
var state_30738__$1 = (function (){var statearr_30795 = state_30738;
(statearr_30795[(7)] = inst_30637__$1);

return statearr_30795;
})();
if(inst_30637__$1){
var statearr_30796_30862 = state_30738__$1;
(statearr_30796_30862[(1)] = (16));

} else {
var statearr_30797_30863 = state_30738__$1;
(statearr_30797_30863[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30739 === (9))){
var inst_30667 = (state_30738[(2)]);
var state_30738__$1 = state_30738;
var statearr_30798_30864 = state_30738__$1;
(statearr_30798_30864[(2)] = inst_30667);

(statearr_30798_30864[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30739 === (5))){
var inst_30613 = cljs.core.deref.call(null,cs);
var inst_30614 = cljs.core.seq.call(null,inst_30613);
var inst_30615 = inst_30614;
var inst_30616 = null;
var inst_30617 = (0);
var inst_30618 = (0);
var state_30738__$1 = (function (){var statearr_30799 = state_30738;
(statearr_30799[(13)] = inst_30615);

(statearr_30799[(14)] = inst_30617);

(statearr_30799[(15)] = inst_30616);

(statearr_30799[(17)] = inst_30618);

return statearr_30799;
})();
var statearr_30800_30865 = state_30738__$1;
(statearr_30800_30865[(2)] = null);

(statearr_30800_30865[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30739 === (14))){
var state_30738__$1 = state_30738;
var statearr_30801_30866 = state_30738__$1;
(statearr_30801_30866[(2)] = null);

(statearr_30801_30866[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30739 === (45))){
var inst_30728 = (state_30738[(2)]);
var state_30738__$1 = state_30738;
var statearr_30802_30867 = state_30738__$1;
(statearr_30802_30867[(2)] = inst_30728);

(statearr_30802_30867[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30739 === (26))){
var inst_30670 = (state_30738[(29)]);
var inst_30724 = (state_30738[(2)]);
var inst_30725 = cljs.core.seq.call(null,inst_30670);
var state_30738__$1 = (function (){var statearr_30803 = state_30738;
(statearr_30803[(31)] = inst_30724);

return statearr_30803;
})();
if(inst_30725){
var statearr_30804_30868 = state_30738__$1;
(statearr_30804_30868[(1)] = (42));

} else {
var statearr_30805_30869 = state_30738__$1;
(statearr_30805_30869[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30739 === (16))){
var inst_30637 = (state_30738[(7)]);
var inst_30639 = cljs.core.chunked_seq_QMARK_.call(null,inst_30637);
var state_30738__$1 = state_30738;
if(inst_30639){
var statearr_30806_30870 = state_30738__$1;
(statearr_30806_30870[(1)] = (19));

} else {
var statearr_30807_30871 = state_30738__$1;
(statearr_30807_30871[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30739 === (38))){
var inst_30717 = (state_30738[(2)]);
var state_30738__$1 = state_30738;
var statearr_30808_30872 = state_30738__$1;
(statearr_30808_30872[(2)] = inst_30717);

(statearr_30808_30872[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30739 === (30))){
var state_30738__$1 = state_30738;
var statearr_30809_30873 = state_30738__$1;
(statearr_30809_30873[(2)] = null);

(statearr_30809_30873[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30739 === (10))){
var inst_30616 = (state_30738[(15)]);
var inst_30618 = (state_30738[(17)]);
var inst_30626 = cljs.core._nth.call(null,inst_30616,inst_30618);
var inst_30627 = cljs.core.nth.call(null,inst_30626,(0),null);
var inst_30628 = cljs.core.nth.call(null,inst_30626,(1),null);
var state_30738__$1 = (function (){var statearr_30810 = state_30738;
(statearr_30810[(26)] = inst_30627);

return statearr_30810;
})();
if(cljs.core.truth_(inst_30628)){
var statearr_30811_30874 = state_30738__$1;
(statearr_30811_30874[(1)] = (13));

} else {
var statearr_30812_30875 = state_30738__$1;
(statearr_30812_30875[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30739 === (18))){
var inst_30663 = (state_30738[(2)]);
var state_30738__$1 = state_30738;
var statearr_30813_30876 = state_30738__$1;
(statearr_30813_30876[(2)] = inst_30663);

(statearr_30813_30876[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30739 === (42))){
var state_30738__$1 = state_30738;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30738__$1,(45),dchan);
} else {
if((state_val_30739 === (37))){
var inst_30697 = (state_30738[(25)]);
var inst_30706 = (state_30738[(23)]);
var inst_30606 = (state_30738[(11)]);
var inst_30706__$1 = cljs.core.first.call(null,inst_30697);
var inst_30707 = cljs.core.async.put_BANG_.call(null,inst_30706__$1,inst_30606,done);
var state_30738__$1 = (function (){var statearr_30814 = state_30738;
(statearr_30814[(23)] = inst_30706__$1);

return statearr_30814;
})();
if(cljs.core.truth_(inst_30707)){
var statearr_30815_30877 = state_30738__$1;
(statearr_30815_30877[(1)] = (39));

} else {
var statearr_30816_30878 = state_30738__$1;
(statearr_30816_30878[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30739 === (8))){
var inst_30617 = (state_30738[(14)]);
var inst_30618 = (state_30738[(17)]);
var inst_30620 = (inst_30618 < inst_30617);
var inst_30621 = inst_30620;
var state_30738__$1 = state_30738;
if(cljs.core.truth_(inst_30621)){
var statearr_30817_30879 = state_30738__$1;
(statearr_30817_30879[(1)] = (10));

} else {
var statearr_30818_30880 = state_30738__$1;
(statearr_30818_30880[(1)] = (11));

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
});})(c__29473__auto___30826,cs,m,dchan,dctr,done))
;
return ((function (switch__29361__auto__,c__29473__auto___30826,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__29362__auto__ = null;
var cljs$core$async$mult_$_state_machine__29362__auto____0 = (function (){
var statearr_30822 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30822[(0)] = cljs$core$async$mult_$_state_machine__29362__auto__);

(statearr_30822[(1)] = (1));

return statearr_30822;
});
var cljs$core$async$mult_$_state_machine__29362__auto____1 = (function (state_30738){
while(true){
var ret_value__29363__auto__ = (function (){try{while(true){
var result__29364__auto__ = switch__29361__auto__.call(null,state_30738);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29364__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29364__auto__;
}
break;
}
}catch (e30823){if((e30823 instanceof Object)){
var ex__29365__auto__ = e30823;
var statearr_30824_30881 = state_30738;
(statearr_30824_30881[(5)] = ex__29365__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30738);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30823;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29363__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30882 = state_30738;
state_30738 = G__30882;
continue;
} else {
return ret_value__29363__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__29362__auto__ = function(state_30738){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__29362__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__29362__auto____1.call(this,state_30738);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__29362__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__29362__auto____0;
cljs$core$async$mult_$_state_machine__29362__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__29362__auto____1;
return cljs$core$async$mult_$_state_machine__29362__auto__;
})()
;})(switch__29361__auto__,c__29473__auto___30826,cs,m,dchan,dctr,done))
})();
var state__29475__auto__ = (function (){var statearr_30825 = f__29474__auto__.call(null);
(statearr_30825[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29473__auto___30826);

return statearr_30825;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29475__auto__);
});})(c__29473__auto___30826,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var args30883 = [];
var len__27623__auto___30886 = arguments.length;
var i__27624__auto___30887 = (0);
while(true){
if((i__27624__auto___30887 < len__27623__auto___30886)){
args30883.push((arguments[i__27624__auto___30887]));

var G__30888 = (i__27624__auto___30887 + (1));
i__27624__auto___30887 = G__30888;
continue;
} else {
}
break;
}

var G__30885 = args30883.length;
switch (G__30885) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30883.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__27211__auto__ = (((m == null))?null:m);
var m__27212__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__27211__auto__)]);
if(!((m__27212__auto__ == null))){
return m__27212__auto__.call(null,m,ch);
} else {
var m__27212__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__27212__auto____$1 == null))){
return m__27212__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__27211__auto__ = (((m == null))?null:m);
var m__27212__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__27211__auto__)]);
if(!((m__27212__auto__ == null))){
return m__27212__auto__.call(null,m,ch);
} else {
var m__27212__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__27212__auto____$1 == null))){
return m__27212__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__27211__auto__ = (((m == null))?null:m);
var m__27212__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__27211__auto__)]);
if(!((m__27212__auto__ == null))){
return m__27212__auto__.call(null,m);
} else {
var m__27212__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__27212__auto____$1 == null))){
return m__27212__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__27211__auto__ = (((m == null))?null:m);
var m__27212__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__27211__auto__)]);
if(!((m__27212__auto__ == null))){
return m__27212__auto__.call(null,m,state_map);
} else {
var m__27212__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__27212__auto____$1 == null))){
return m__27212__auto____$1.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__27211__auto__ = (((m == null))?null:m);
var m__27212__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__27211__auto__)]);
if(!((m__27212__auto__ == null))){
return m__27212__auto__.call(null,m,mode);
} else {
var m__27212__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__27212__auto____$1 == null))){
return m__27212__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__27630__auto__ = [];
var len__27623__auto___30900 = arguments.length;
var i__27624__auto___30901 = (0);
while(true){
if((i__27624__auto___30901 < len__27623__auto___30900)){
args__27630__auto__.push((arguments[i__27624__auto___30901]));

var G__30902 = (i__27624__auto___30901 + (1));
i__27624__auto___30901 = G__30902;
continue;
} else {
}
break;
}

var argseq__27631__auto__ = ((((3) < args__27630__auto__.length))?(new cljs.core.IndexedSeq(args__27630__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__27631__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__30894){
var map__30895 = p__30894;
var map__30895__$1 = ((((!((map__30895 == null)))?((((map__30895.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30895.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30895):map__30895);
var opts = map__30895__$1;
var statearr_30897_30903 = state;
(statearr_30897_30903[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4657__auto__ = cljs.core.async.do_alts.call(null,((function (map__30895,map__30895__$1,opts){
return (function (val){
var statearr_30898_30904 = state;
(statearr_30898_30904[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__30895,map__30895__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4657__auto__)){
var cb = temp__4657__auto__;
var statearr_30899_30905 = state;
(statearr_30899_30905[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq30890){
var G__30891 = cljs.core.first.call(null,seq30890);
var seq30890__$1 = cljs.core.next.call(null,seq30890);
var G__30892 = cljs.core.first.call(null,seq30890__$1);
var seq30890__$2 = cljs.core.next.call(null,seq30890__$1);
var G__30893 = cljs.core.first.call(null,seq30890__$2);
var seq30890__$3 = cljs.core.next.call(null,seq30890__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__30891,G__30892,G__30893,seq30890__$3);
});

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async31071 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31071 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta31072){
this.change = change;
this.mix = mix;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta31072 = meta31072;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async31071.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_31073,meta31072__$1){
var self__ = this;
var _31073__$1 = this;
return (new cljs.core.async.t_cljs$core$async31071(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta31072__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async31071.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_31073){
var self__ = this;
var _31073__$1 = this;
return self__.meta31072;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async31071.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async31071.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async31071.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async31071.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async31071.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async31071.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async31071.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async31071.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str("(solo-modes mode)")].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async31071.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),cljs.core.with_meta(new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta31072","meta31072",2080805406,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async31071.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async31071.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31071";

cljs.core.async.t_cljs$core$async31071.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__27154__auto__,writer__27155__auto__,opt__27156__auto__){
return cljs.core._write.call(null,writer__27155__auto__,"cljs.core.async/t_cljs$core$async31071");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async31071 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async31071(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta31072){
return (new cljs.core.async.t_cljs$core$async31071(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta31072));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async31071(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__29473__auto___31236 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29473__auto___31236,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__29474__auto__ = (function (){var switch__29361__auto__ = ((function (c__29473__auto___31236,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_31173){
var state_val_31174 = (state_31173[(1)]);
if((state_val_31174 === (7))){
var inst_31089 = (state_31173[(2)]);
var state_31173__$1 = state_31173;
var statearr_31175_31237 = state_31173__$1;
(statearr_31175_31237[(2)] = inst_31089);

(statearr_31175_31237[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31174 === (20))){
var inst_31101 = (state_31173[(7)]);
var state_31173__$1 = state_31173;
var statearr_31176_31238 = state_31173__$1;
(statearr_31176_31238[(2)] = inst_31101);

(statearr_31176_31238[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31174 === (27))){
var state_31173__$1 = state_31173;
var statearr_31177_31239 = state_31173__$1;
(statearr_31177_31239[(2)] = null);

(statearr_31177_31239[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31174 === (1))){
var inst_31077 = (state_31173[(8)]);
var inst_31077__$1 = calc_state.call(null);
var inst_31079 = (inst_31077__$1 == null);
var inst_31080 = cljs.core.not.call(null,inst_31079);
var state_31173__$1 = (function (){var statearr_31178 = state_31173;
(statearr_31178[(8)] = inst_31077__$1);

return statearr_31178;
})();
if(inst_31080){
var statearr_31179_31240 = state_31173__$1;
(statearr_31179_31240[(1)] = (2));

} else {
var statearr_31180_31241 = state_31173__$1;
(statearr_31180_31241[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31174 === (24))){
var inst_31124 = (state_31173[(9)]);
var inst_31133 = (state_31173[(10)]);
var inst_31147 = (state_31173[(11)]);
var inst_31147__$1 = inst_31124.call(null,inst_31133);
var state_31173__$1 = (function (){var statearr_31181 = state_31173;
(statearr_31181[(11)] = inst_31147__$1);

return statearr_31181;
})();
if(cljs.core.truth_(inst_31147__$1)){
var statearr_31182_31242 = state_31173__$1;
(statearr_31182_31242[(1)] = (29));

} else {
var statearr_31183_31243 = state_31173__$1;
(statearr_31183_31243[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31174 === (4))){
var inst_31092 = (state_31173[(2)]);
var state_31173__$1 = state_31173;
if(cljs.core.truth_(inst_31092)){
var statearr_31184_31244 = state_31173__$1;
(statearr_31184_31244[(1)] = (8));

} else {
var statearr_31185_31245 = state_31173__$1;
(statearr_31185_31245[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31174 === (15))){
var inst_31118 = (state_31173[(2)]);
var state_31173__$1 = state_31173;
if(cljs.core.truth_(inst_31118)){
var statearr_31186_31246 = state_31173__$1;
(statearr_31186_31246[(1)] = (19));

} else {
var statearr_31187_31247 = state_31173__$1;
(statearr_31187_31247[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31174 === (21))){
var inst_31123 = (state_31173[(12)]);
var inst_31123__$1 = (state_31173[(2)]);
var inst_31124 = cljs.core.get.call(null,inst_31123__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_31125 = cljs.core.get.call(null,inst_31123__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_31126 = cljs.core.get.call(null,inst_31123__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_31173__$1 = (function (){var statearr_31188 = state_31173;
(statearr_31188[(9)] = inst_31124);

(statearr_31188[(12)] = inst_31123__$1);

(statearr_31188[(13)] = inst_31125);

return statearr_31188;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_31173__$1,(22),inst_31126);
} else {
if((state_val_31174 === (31))){
var inst_31155 = (state_31173[(2)]);
var state_31173__$1 = state_31173;
if(cljs.core.truth_(inst_31155)){
var statearr_31189_31248 = state_31173__$1;
(statearr_31189_31248[(1)] = (32));

} else {
var statearr_31190_31249 = state_31173__$1;
(statearr_31190_31249[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31174 === (32))){
var inst_31132 = (state_31173[(14)]);
var state_31173__$1 = state_31173;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31173__$1,(35),out,inst_31132);
} else {
if((state_val_31174 === (33))){
var inst_31123 = (state_31173[(12)]);
var inst_31101 = inst_31123;
var state_31173__$1 = (function (){var statearr_31191 = state_31173;
(statearr_31191[(7)] = inst_31101);

return statearr_31191;
})();
var statearr_31192_31250 = state_31173__$1;
(statearr_31192_31250[(2)] = null);

(statearr_31192_31250[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31174 === (13))){
var inst_31101 = (state_31173[(7)]);
var inst_31108 = inst_31101.cljs$lang$protocol_mask$partition0$;
var inst_31109 = (inst_31108 & (64));
var inst_31110 = inst_31101.cljs$core$ISeq$;
var inst_31111 = (inst_31109) || (inst_31110);
var state_31173__$1 = state_31173;
if(cljs.core.truth_(inst_31111)){
var statearr_31193_31251 = state_31173__$1;
(statearr_31193_31251[(1)] = (16));

} else {
var statearr_31194_31252 = state_31173__$1;
(statearr_31194_31252[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31174 === (22))){
var inst_31133 = (state_31173[(10)]);
var inst_31132 = (state_31173[(14)]);
var inst_31131 = (state_31173[(2)]);
var inst_31132__$1 = cljs.core.nth.call(null,inst_31131,(0),null);
var inst_31133__$1 = cljs.core.nth.call(null,inst_31131,(1),null);
var inst_31134 = (inst_31132__$1 == null);
var inst_31135 = cljs.core._EQ_.call(null,inst_31133__$1,change);
var inst_31136 = (inst_31134) || (inst_31135);
var state_31173__$1 = (function (){var statearr_31195 = state_31173;
(statearr_31195[(10)] = inst_31133__$1);

(statearr_31195[(14)] = inst_31132__$1);

return statearr_31195;
})();
if(cljs.core.truth_(inst_31136)){
var statearr_31196_31253 = state_31173__$1;
(statearr_31196_31253[(1)] = (23));

} else {
var statearr_31197_31254 = state_31173__$1;
(statearr_31197_31254[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31174 === (36))){
var inst_31123 = (state_31173[(12)]);
var inst_31101 = inst_31123;
var state_31173__$1 = (function (){var statearr_31198 = state_31173;
(statearr_31198[(7)] = inst_31101);

return statearr_31198;
})();
var statearr_31199_31255 = state_31173__$1;
(statearr_31199_31255[(2)] = null);

(statearr_31199_31255[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31174 === (29))){
var inst_31147 = (state_31173[(11)]);
var state_31173__$1 = state_31173;
var statearr_31200_31256 = state_31173__$1;
(statearr_31200_31256[(2)] = inst_31147);

(statearr_31200_31256[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31174 === (6))){
var state_31173__$1 = state_31173;
var statearr_31201_31257 = state_31173__$1;
(statearr_31201_31257[(2)] = false);

(statearr_31201_31257[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31174 === (28))){
var inst_31143 = (state_31173[(2)]);
var inst_31144 = calc_state.call(null);
var inst_31101 = inst_31144;
var state_31173__$1 = (function (){var statearr_31202 = state_31173;
(statearr_31202[(15)] = inst_31143);

(statearr_31202[(7)] = inst_31101);

return statearr_31202;
})();
var statearr_31203_31258 = state_31173__$1;
(statearr_31203_31258[(2)] = null);

(statearr_31203_31258[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31174 === (25))){
var inst_31169 = (state_31173[(2)]);
var state_31173__$1 = state_31173;
var statearr_31204_31259 = state_31173__$1;
(statearr_31204_31259[(2)] = inst_31169);

(statearr_31204_31259[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31174 === (34))){
var inst_31167 = (state_31173[(2)]);
var state_31173__$1 = state_31173;
var statearr_31205_31260 = state_31173__$1;
(statearr_31205_31260[(2)] = inst_31167);

(statearr_31205_31260[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31174 === (17))){
var state_31173__$1 = state_31173;
var statearr_31206_31261 = state_31173__$1;
(statearr_31206_31261[(2)] = false);

(statearr_31206_31261[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31174 === (3))){
var state_31173__$1 = state_31173;
var statearr_31207_31262 = state_31173__$1;
(statearr_31207_31262[(2)] = false);

(statearr_31207_31262[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31174 === (12))){
var inst_31171 = (state_31173[(2)]);
var state_31173__$1 = state_31173;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31173__$1,inst_31171);
} else {
if((state_val_31174 === (2))){
var inst_31077 = (state_31173[(8)]);
var inst_31082 = inst_31077.cljs$lang$protocol_mask$partition0$;
var inst_31083 = (inst_31082 & (64));
var inst_31084 = inst_31077.cljs$core$ISeq$;
var inst_31085 = (inst_31083) || (inst_31084);
var state_31173__$1 = state_31173;
if(cljs.core.truth_(inst_31085)){
var statearr_31208_31263 = state_31173__$1;
(statearr_31208_31263[(1)] = (5));

} else {
var statearr_31209_31264 = state_31173__$1;
(statearr_31209_31264[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31174 === (23))){
var inst_31132 = (state_31173[(14)]);
var inst_31138 = (inst_31132 == null);
var state_31173__$1 = state_31173;
if(cljs.core.truth_(inst_31138)){
var statearr_31210_31265 = state_31173__$1;
(statearr_31210_31265[(1)] = (26));

} else {
var statearr_31211_31266 = state_31173__$1;
(statearr_31211_31266[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31174 === (35))){
var inst_31158 = (state_31173[(2)]);
var state_31173__$1 = state_31173;
if(cljs.core.truth_(inst_31158)){
var statearr_31212_31267 = state_31173__$1;
(statearr_31212_31267[(1)] = (36));

} else {
var statearr_31213_31268 = state_31173__$1;
(statearr_31213_31268[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31174 === (19))){
var inst_31101 = (state_31173[(7)]);
var inst_31120 = cljs.core.apply.call(null,cljs.core.hash_map,inst_31101);
var state_31173__$1 = state_31173;
var statearr_31214_31269 = state_31173__$1;
(statearr_31214_31269[(2)] = inst_31120);

(statearr_31214_31269[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31174 === (11))){
var inst_31101 = (state_31173[(7)]);
var inst_31105 = (inst_31101 == null);
var inst_31106 = cljs.core.not.call(null,inst_31105);
var state_31173__$1 = state_31173;
if(inst_31106){
var statearr_31215_31270 = state_31173__$1;
(statearr_31215_31270[(1)] = (13));

} else {
var statearr_31216_31271 = state_31173__$1;
(statearr_31216_31271[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31174 === (9))){
var inst_31077 = (state_31173[(8)]);
var state_31173__$1 = state_31173;
var statearr_31217_31272 = state_31173__$1;
(statearr_31217_31272[(2)] = inst_31077);

(statearr_31217_31272[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31174 === (5))){
var state_31173__$1 = state_31173;
var statearr_31218_31273 = state_31173__$1;
(statearr_31218_31273[(2)] = true);

(statearr_31218_31273[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31174 === (14))){
var state_31173__$1 = state_31173;
var statearr_31219_31274 = state_31173__$1;
(statearr_31219_31274[(2)] = false);

(statearr_31219_31274[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31174 === (26))){
var inst_31133 = (state_31173[(10)]);
var inst_31140 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_31133);
var state_31173__$1 = state_31173;
var statearr_31220_31275 = state_31173__$1;
(statearr_31220_31275[(2)] = inst_31140);

(statearr_31220_31275[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31174 === (16))){
var state_31173__$1 = state_31173;
var statearr_31221_31276 = state_31173__$1;
(statearr_31221_31276[(2)] = true);

(statearr_31221_31276[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31174 === (38))){
var inst_31163 = (state_31173[(2)]);
var state_31173__$1 = state_31173;
var statearr_31222_31277 = state_31173__$1;
(statearr_31222_31277[(2)] = inst_31163);

(statearr_31222_31277[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31174 === (30))){
var inst_31124 = (state_31173[(9)]);
var inst_31133 = (state_31173[(10)]);
var inst_31125 = (state_31173[(13)]);
var inst_31150 = cljs.core.empty_QMARK_.call(null,inst_31124);
var inst_31151 = inst_31125.call(null,inst_31133);
var inst_31152 = cljs.core.not.call(null,inst_31151);
var inst_31153 = (inst_31150) && (inst_31152);
var state_31173__$1 = state_31173;
var statearr_31223_31278 = state_31173__$1;
(statearr_31223_31278[(2)] = inst_31153);

(statearr_31223_31278[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31174 === (10))){
var inst_31077 = (state_31173[(8)]);
var inst_31097 = (state_31173[(2)]);
var inst_31098 = cljs.core.get.call(null,inst_31097,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_31099 = cljs.core.get.call(null,inst_31097,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_31100 = cljs.core.get.call(null,inst_31097,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_31101 = inst_31077;
var state_31173__$1 = (function (){var statearr_31224 = state_31173;
(statearr_31224[(7)] = inst_31101);

(statearr_31224[(16)] = inst_31098);

(statearr_31224[(17)] = inst_31099);

(statearr_31224[(18)] = inst_31100);

return statearr_31224;
})();
var statearr_31225_31279 = state_31173__$1;
(statearr_31225_31279[(2)] = null);

(statearr_31225_31279[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31174 === (18))){
var inst_31115 = (state_31173[(2)]);
var state_31173__$1 = state_31173;
var statearr_31226_31280 = state_31173__$1;
(statearr_31226_31280[(2)] = inst_31115);

(statearr_31226_31280[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31174 === (37))){
var state_31173__$1 = state_31173;
var statearr_31227_31281 = state_31173__$1;
(statearr_31227_31281[(2)] = null);

(statearr_31227_31281[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31174 === (8))){
var inst_31077 = (state_31173[(8)]);
var inst_31094 = cljs.core.apply.call(null,cljs.core.hash_map,inst_31077);
var state_31173__$1 = state_31173;
var statearr_31228_31282 = state_31173__$1;
(statearr_31228_31282[(2)] = inst_31094);

(statearr_31228_31282[(1)] = (10));


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
});})(c__29473__auto___31236,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__29361__auto__,c__29473__auto___31236,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__29362__auto__ = null;
var cljs$core$async$mix_$_state_machine__29362__auto____0 = (function (){
var statearr_31232 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31232[(0)] = cljs$core$async$mix_$_state_machine__29362__auto__);

(statearr_31232[(1)] = (1));

return statearr_31232;
});
var cljs$core$async$mix_$_state_machine__29362__auto____1 = (function (state_31173){
while(true){
var ret_value__29363__auto__ = (function (){try{while(true){
var result__29364__auto__ = switch__29361__auto__.call(null,state_31173);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29364__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29364__auto__;
}
break;
}
}catch (e31233){if((e31233 instanceof Object)){
var ex__29365__auto__ = e31233;
var statearr_31234_31283 = state_31173;
(statearr_31234_31283[(5)] = ex__29365__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31173);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31233;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29363__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31284 = state_31173;
state_31173 = G__31284;
continue;
} else {
return ret_value__29363__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__29362__auto__ = function(state_31173){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__29362__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__29362__auto____1.call(this,state_31173);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__29362__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__29362__auto____0;
cljs$core$async$mix_$_state_machine__29362__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__29362__auto____1;
return cljs$core$async$mix_$_state_machine__29362__auto__;
})()
;})(switch__29361__auto__,c__29473__auto___31236,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__29475__auto__ = (function (){var statearr_31235 = f__29474__auto__.call(null);
(statearr_31235[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29473__auto___31236);

return statearr_31235;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29475__auto__);
});})(c__29473__auto___31236,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__27211__auto__ = (((p == null))?null:p);
var m__27212__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__27211__auto__)]);
if(!((m__27212__auto__ == null))){
return m__27212__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__27212__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__27212__auto____$1 == null))){
return m__27212__auto____$1.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__27211__auto__ = (((p == null))?null:p);
var m__27212__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__27211__auto__)]);
if(!((m__27212__auto__ == null))){
return m__27212__auto__.call(null,p,v,ch);
} else {
var m__27212__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__27212__auto____$1 == null))){
return m__27212__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var args31285 = [];
var len__27623__auto___31288 = arguments.length;
var i__27624__auto___31289 = (0);
while(true){
if((i__27624__auto___31289 < len__27623__auto___31288)){
args31285.push((arguments[i__27624__auto___31289]));

var G__31290 = (i__27624__auto___31289 + (1));
i__27624__auto___31289 = G__31290;
continue;
} else {
}
break;
}

var G__31287 = args31285.length;
switch (G__31287) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31285.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__27211__auto__ = (((p == null))?null:p);
var m__27212__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__27211__auto__)]);
if(!((m__27212__auto__ == null))){
return m__27212__auto__.call(null,p);
} else {
var m__27212__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__27212__auto____$1 == null))){
return m__27212__auto____$1.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__27211__auto__ = (((p == null))?null:p);
var m__27212__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__27211__auto__)]);
if(!((m__27212__auto__ == null))){
return m__27212__auto__.call(null,p,v);
} else {
var m__27212__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__27212__auto____$1 == null))){
return m__27212__auto____$1.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var args31293 = [];
var len__27623__auto___31418 = arguments.length;
var i__27624__auto___31419 = (0);
while(true){
if((i__27624__auto___31419 < len__27623__auto___31418)){
args31293.push((arguments[i__27624__auto___31419]));

var G__31420 = (i__27624__auto___31419 + (1));
i__27624__auto___31419 = G__31420;
continue;
} else {
}
break;
}

var G__31295 = args31293.length;
switch (G__31295) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31293.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__26548__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__26548__auto__)){
return or__26548__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__26548__auto__,mults){
return (function (p1__31292_SHARP_){
if(cljs.core.truth_(p1__31292_SHARP_.call(null,topic))){
return p1__31292_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__31292_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__26548__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async31296 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31296 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta31297){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta31297 = meta31297;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async31296.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_31298,meta31297__$1){
var self__ = this;
var _31298__$1 = this;
return (new cljs.core.async.t_cljs$core$async31296(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta31297__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async31296.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_31298){
var self__ = this;
var _31298__$1 = this;
return self__.meta31297;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async31296.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async31296.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async31296.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async31296.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async31296.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4657__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__4657__auto__)){
var m = temp__4657__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async31296.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async31296.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async31296.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta31297","meta31297",2014875890,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async31296.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async31296.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31296";

cljs.core.async.t_cljs$core$async31296.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__27154__auto__,writer__27155__auto__,opt__27156__auto__){
return cljs.core._write.call(null,writer__27155__auto__,"cljs.core.async/t_cljs$core$async31296");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async31296 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async31296(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta31297){
return (new cljs.core.async.t_cljs$core$async31296(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta31297));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async31296(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__29473__auto___31422 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29473__auto___31422,mults,ensure_mult,p){
return (function (){
var f__29474__auto__ = (function (){var switch__29361__auto__ = ((function (c__29473__auto___31422,mults,ensure_mult,p){
return (function (state_31370){
var state_val_31371 = (state_31370[(1)]);
if((state_val_31371 === (7))){
var inst_31366 = (state_31370[(2)]);
var state_31370__$1 = state_31370;
var statearr_31372_31423 = state_31370__$1;
(statearr_31372_31423[(2)] = inst_31366);

(statearr_31372_31423[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31371 === (20))){
var state_31370__$1 = state_31370;
var statearr_31373_31424 = state_31370__$1;
(statearr_31373_31424[(2)] = null);

(statearr_31373_31424[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31371 === (1))){
var state_31370__$1 = state_31370;
var statearr_31374_31425 = state_31370__$1;
(statearr_31374_31425[(2)] = null);

(statearr_31374_31425[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31371 === (24))){
var inst_31349 = (state_31370[(7)]);
var inst_31358 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_31349);
var state_31370__$1 = state_31370;
var statearr_31375_31426 = state_31370__$1;
(statearr_31375_31426[(2)] = inst_31358);

(statearr_31375_31426[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31371 === (4))){
var inst_31301 = (state_31370[(8)]);
var inst_31301__$1 = (state_31370[(2)]);
var inst_31302 = (inst_31301__$1 == null);
var state_31370__$1 = (function (){var statearr_31376 = state_31370;
(statearr_31376[(8)] = inst_31301__$1);

return statearr_31376;
})();
if(cljs.core.truth_(inst_31302)){
var statearr_31377_31427 = state_31370__$1;
(statearr_31377_31427[(1)] = (5));

} else {
var statearr_31378_31428 = state_31370__$1;
(statearr_31378_31428[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31371 === (15))){
var inst_31343 = (state_31370[(2)]);
var state_31370__$1 = state_31370;
var statearr_31379_31429 = state_31370__$1;
(statearr_31379_31429[(2)] = inst_31343);

(statearr_31379_31429[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31371 === (21))){
var inst_31363 = (state_31370[(2)]);
var state_31370__$1 = (function (){var statearr_31380 = state_31370;
(statearr_31380[(9)] = inst_31363);

return statearr_31380;
})();
var statearr_31381_31430 = state_31370__$1;
(statearr_31381_31430[(2)] = null);

(statearr_31381_31430[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31371 === (13))){
var inst_31325 = (state_31370[(10)]);
var inst_31327 = cljs.core.chunked_seq_QMARK_.call(null,inst_31325);
var state_31370__$1 = state_31370;
if(inst_31327){
var statearr_31382_31431 = state_31370__$1;
(statearr_31382_31431[(1)] = (16));

} else {
var statearr_31383_31432 = state_31370__$1;
(statearr_31383_31432[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31371 === (22))){
var inst_31355 = (state_31370[(2)]);
var state_31370__$1 = state_31370;
if(cljs.core.truth_(inst_31355)){
var statearr_31384_31433 = state_31370__$1;
(statearr_31384_31433[(1)] = (23));

} else {
var statearr_31385_31434 = state_31370__$1;
(statearr_31385_31434[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31371 === (6))){
var inst_31301 = (state_31370[(8)]);
var inst_31349 = (state_31370[(7)]);
var inst_31351 = (state_31370[(11)]);
var inst_31349__$1 = topic_fn.call(null,inst_31301);
var inst_31350 = cljs.core.deref.call(null,mults);
var inst_31351__$1 = cljs.core.get.call(null,inst_31350,inst_31349__$1);
var state_31370__$1 = (function (){var statearr_31386 = state_31370;
(statearr_31386[(7)] = inst_31349__$1);

(statearr_31386[(11)] = inst_31351__$1);

return statearr_31386;
})();
if(cljs.core.truth_(inst_31351__$1)){
var statearr_31387_31435 = state_31370__$1;
(statearr_31387_31435[(1)] = (19));

} else {
var statearr_31388_31436 = state_31370__$1;
(statearr_31388_31436[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31371 === (25))){
var inst_31360 = (state_31370[(2)]);
var state_31370__$1 = state_31370;
var statearr_31389_31437 = state_31370__$1;
(statearr_31389_31437[(2)] = inst_31360);

(statearr_31389_31437[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31371 === (17))){
var inst_31325 = (state_31370[(10)]);
var inst_31334 = cljs.core.first.call(null,inst_31325);
var inst_31335 = cljs.core.async.muxch_STAR_.call(null,inst_31334);
var inst_31336 = cljs.core.async.close_BANG_.call(null,inst_31335);
var inst_31337 = cljs.core.next.call(null,inst_31325);
var inst_31311 = inst_31337;
var inst_31312 = null;
var inst_31313 = (0);
var inst_31314 = (0);
var state_31370__$1 = (function (){var statearr_31390 = state_31370;
(statearr_31390[(12)] = inst_31312);

(statearr_31390[(13)] = inst_31336);

(statearr_31390[(14)] = inst_31311);

(statearr_31390[(15)] = inst_31314);

(statearr_31390[(16)] = inst_31313);

return statearr_31390;
})();
var statearr_31391_31438 = state_31370__$1;
(statearr_31391_31438[(2)] = null);

(statearr_31391_31438[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31371 === (3))){
var inst_31368 = (state_31370[(2)]);
var state_31370__$1 = state_31370;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31370__$1,inst_31368);
} else {
if((state_val_31371 === (12))){
var inst_31345 = (state_31370[(2)]);
var state_31370__$1 = state_31370;
var statearr_31392_31439 = state_31370__$1;
(statearr_31392_31439[(2)] = inst_31345);

(statearr_31392_31439[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31371 === (2))){
var state_31370__$1 = state_31370;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31370__$1,(4),ch);
} else {
if((state_val_31371 === (23))){
var state_31370__$1 = state_31370;
var statearr_31393_31440 = state_31370__$1;
(statearr_31393_31440[(2)] = null);

(statearr_31393_31440[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31371 === (19))){
var inst_31301 = (state_31370[(8)]);
var inst_31351 = (state_31370[(11)]);
var inst_31353 = cljs.core.async.muxch_STAR_.call(null,inst_31351);
var state_31370__$1 = state_31370;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31370__$1,(22),inst_31353,inst_31301);
} else {
if((state_val_31371 === (11))){
var inst_31325 = (state_31370[(10)]);
var inst_31311 = (state_31370[(14)]);
var inst_31325__$1 = cljs.core.seq.call(null,inst_31311);
var state_31370__$1 = (function (){var statearr_31394 = state_31370;
(statearr_31394[(10)] = inst_31325__$1);

return statearr_31394;
})();
if(inst_31325__$1){
var statearr_31395_31441 = state_31370__$1;
(statearr_31395_31441[(1)] = (13));

} else {
var statearr_31396_31442 = state_31370__$1;
(statearr_31396_31442[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31371 === (9))){
var inst_31347 = (state_31370[(2)]);
var state_31370__$1 = state_31370;
var statearr_31397_31443 = state_31370__$1;
(statearr_31397_31443[(2)] = inst_31347);

(statearr_31397_31443[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31371 === (5))){
var inst_31308 = cljs.core.deref.call(null,mults);
var inst_31309 = cljs.core.vals.call(null,inst_31308);
var inst_31310 = cljs.core.seq.call(null,inst_31309);
var inst_31311 = inst_31310;
var inst_31312 = null;
var inst_31313 = (0);
var inst_31314 = (0);
var state_31370__$1 = (function (){var statearr_31398 = state_31370;
(statearr_31398[(12)] = inst_31312);

(statearr_31398[(14)] = inst_31311);

(statearr_31398[(15)] = inst_31314);

(statearr_31398[(16)] = inst_31313);

return statearr_31398;
})();
var statearr_31399_31444 = state_31370__$1;
(statearr_31399_31444[(2)] = null);

(statearr_31399_31444[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31371 === (14))){
var state_31370__$1 = state_31370;
var statearr_31403_31445 = state_31370__$1;
(statearr_31403_31445[(2)] = null);

(statearr_31403_31445[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31371 === (16))){
var inst_31325 = (state_31370[(10)]);
var inst_31329 = cljs.core.chunk_first.call(null,inst_31325);
var inst_31330 = cljs.core.chunk_rest.call(null,inst_31325);
var inst_31331 = cljs.core.count.call(null,inst_31329);
var inst_31311 = inst_31330;
var inst_31312 = inst_31329;
var inst_31313 = inst_31331;
var inst_31314 = (0);
var state_31370__$1 = (function (){var statearr_31404 = state_31370;
(statearr_31404[(12)] = inst_31312);

(statearr_31404[(14)] = inst_31311);

(statearr_31404[(15)] = inst_31314);

(statearr_31404[(16)] = inst_31313);

return statearr_31404;
})();
var statearr_31405_31446 = state_31370__$1;
(statearr_31405_31446[(2)] = null);

(statearr_31405_31446[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31371 === (10))){
var inst_31312 = (state_31370[(12)]);
var inst_31311 = (state_31370[(14)]);
var inst_31314 = (state_31370[(15)]);
var inst_31313 = (state_31370[(16)]);
var inst_31319 = cljs.core._nth.call(null,inst_31312,inst_31314);
var inst_31320 = cljs.core.async.muxch_STAR_.call(null,inst_31319);
var inst_31321 = cljs.core.async.close_BANG_.call(null,inst_31320);
var inst_31322 = (inst_31314 + (1));
var tmp31400 = inst_31312;
var tmp31401 = inst_31311;
var tmp31402 = inst_31313;
var inst_31311__$1 = tmp31401;
var inst_31312__$1 = tmp31400;
var inst_31313__$1 = tmp31402;
var inst_31314__$1 = inst_31322;
var state_31370__$1 = (function (){var statearr_31406 = state_31370;
(statearr_31406[(12)] = inst_31312__$1);

(statearr_31406[(17)] = inst_31321);

(statearr_31406[(14)] = inst_31311__$1);

(statearr_31406[(15)] = inst_31314__$1);

(statearr_31406[(16)] = inst_31313__$1);

return statearr_31406;
})();
var statearr_31407_31447 = state_31370__$1;
(statearr_31407_31447[(2)] = null);

(statearr_31407_31447[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31371 === (18))){
var inst_31340 = (state_31370[(2)]);
var state_31370__$1 = state_31370;
var statearr_31408_31448 = state_31370__$1;
(statearr_31408_31448[(2)] = inst_31340);

(statearr_31408_31448[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31371 === (8))){
var inst_31314 = (state_31370[(15)]);
var inst_31313 = (state_31370[(16)]);
var inst_31316 = (inst_31314 < inst_31313);
var inst_31317 = inst_31316;
var state_31370__$1 = state_31370;
if(cljs.core.truth_(inst_31317)){
var statearr_31409_31449 = state_31370__$1;
(statearr_31409_31449[(1)] = (10));

} else {
var statearr_31410_31450 = state_31370__$1;
(statearr_31410_31450[(1)] = (11));

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
}
}
}
}
}
}
}
}
});})(c__29473__auto___31422,mults,ensure_mult,p))
;
return ((function (switch__29361__auto__,c__29473__auto___31422,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__29362__auto__ = null;
var cljs$core$async$state_machine__29362__auto____0 = (function (){
var statearr_31414 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31414[(0)] = cljs$core$async$state_machine__29362__auto__);

(statearr_31414[(1)] = (1));

return statearr_31414;
});
var cljs$core$async$state_machine__29362__auto____1 = (function (state_31370){
while(true){
var ret_value__29363__auto__ = (function (){try{while(true){
var result__29364__auto__ = switch__29361__auto__.call(null,state_31370);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29364__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29364__auto__;
}
break;
}
}catch (e31415){if((e31415 instanceof Object)){
var ex__29365__auto__ = e31415;
var statearr_31416_31451 = state_31370;
(statearr_31416_31451[(5)] = ex__29365__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31370);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31415;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29363__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31452 = state_31370;
state_31370 = G__31452;
continue;
} else {
return ret_value__29363__auto__;
}
break;
}
});
cljs$core$async$state_machine__29362__auto__ = function(state_31370){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29362__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29362__auto____1.call(this,state_31370);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29362__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29362__auto____0;
cljs$core$async$state_machine__29362__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29362__auto____1;
return cljs$core$async$state_machine__29362__auto__;
})()
;})(switch__29361__auto__,c__29473__auto___31422,mults,ensure_mult,p))
})();
var state__29475__auto__ = (function (){var statearr_31417 = f__29474__auto__.call(null);
(statearr_31417[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29473__auto___31422);

return statearr_31417;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29475__auto__);
});})(c__29473__auto___31422,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var args31453 = [];
var len__27623__auto___31456 = arguments.length;
var i__27624__auto___31457 = (0);
while(true){
if((i__27624__auto___31457 < len__27623__auto___31456)){
args31453.push((arguments[i__27624__auto___31457]));

var G__31458 = (i__27624__auto___31457 + (1));
i__27624__auto___31457 = G__31458;
continue;
} else {
}
break;
}

var G__31455 = args31453.length;
switch (G__31455) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31453.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var args31460 = [];
var len__27623__auto___31463 = arguments.length;
var i__27624__auto___31464 = (0);
while(true){
if((i__27624__auto___31464 < len__27623__auto___31463)){
args31460.push((arguments[i__27624__auto___31464]));

var G__31465 = (i__27624__auto___31464 + (1));
i__27624__auto___31464 = G__31465;
continue;
} else {
}
break;
}

var G__31462 = args31460.length;
switch (G__31462) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31460.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var args31467 = [];
var len__27623__auto___31538 = arguments.length;
var i__27624__auto___31539 = (0);
while(true){
if((i__27624__auto___31539 < len__27623__auto___31538)){
args31467.push((arguments[i__27624__auto___31539]));

var G__31540 = (i__27624__auto___31539 + (1));
i__27624__auto___31539 = G__31540;
continue;
} else {
}
break;
}

var G__31469 = args31467.length;
switch (G__31469) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31467.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__29473__auto___31542 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29473__auto___31542,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__29474__auto__ = (function (){var switch__29361__auto__ = ((function (c__29473__auto___31542,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_31508){
var state_val_31509 = (state_31508[(1)]);
if((state_val_31509 === (7))){
var state_31508__$1 = state_31508;
var statearr_31510_31543 = state_31508__$1;
(statearr_31510_31543[(2)] = null);

(statearr_31510_31543[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31509 === (1))){
var state_31508__$1 = state_31508;
var statearr_31511_31544 = state_31508__$1;
(statearr_31511_31544[(2)] = null);

(statearr_31511_31544[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31509 === (4))){
var inst_31472 = (state_31508[(7)]);
var inst_31474 = (inst_31472 < cnt);
var state_31508__$1 = state_31508;
if(cljs.core.truth_(inst_31474)){
var statearr_31512_31545 = state_31508__$1;
(statearr_31512_31545[(1)] = (6));

} else {
var statearr_31513_31546 = state_31508__$1;
(statearr_31513_31546[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31509 === (15))){
var inst_31504 = (state_31508[(2)]);
var state_31508__$1 = state_31508;
var statearr_31514_31547 = state_31508__$1;
(statearr_31514_31547[(2)] = inst_31504);

(statearr_31514_31547[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31509 === (13))){
var inst_31497 = cljs.core.async.close_BANG_.call(null,out);
var state_31508__$1 = state_31508;
var statearr_31515_31548 = state_31508__$1;
(statearr_31515_31548[(2)] = inst_31497);

(statearr_31515_31548[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31509 === (6))){
var state_31508__$1 = state_31508;
var statearr_31516_31549 = state_31508__$1;
(statearr_31516_31549[(2)] = null);

(statearr_31516_31549[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31509 === (3))){
var inst_31506 = (state_31508[(2)]);
var state_31508__$1 = state_31508;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31508__$1,inst_31506);
} else {
if((state_val_31509 === (12))){
var inst_31494 = (state_31508[(8)]);
var inst_31494__$1 = (state_31508[(2)]);
var inst_31495 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_31494__$1);
var state_31508__$1 = (function (){var statearr_31517 = state_31508;
(statearr_31517[(8)] = inst_31494__$1);

return statearr_31517;
})();
if(cljs.core.truth_(inst_31495)){
var statearr_31518_31550 = state_31508__$1;
(statearr_31518_31550[(1)] = (13));

} else {
var statearr_31519_31551 = state_31508__$1;
(statearr_31519_31551[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31509 === (2))){
var inst_31471 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_31472 = (0);
var state_31508__$1 = (function (){var statearr_31520 = state_31508;
(statearr_31520[(7)] = inst_31472);

(statearr_31520[(9)] = inst_31471);

return statearr_31520;
})();
var statearr_31521_31552 = state_31508__$1;
(statearr_31521_31552[(2)] = null);

(statearr_31521_31552[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31509 === (11))){
var inst_31472 = (state_31508[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_31508,(10),Object,null,(9));
var inst_31481 = chs__$1.call(null,inst_31472);
var inst_31482 = done.call(null,inst_31472);
var inst_31483 = cljs.core.async.take_BANG_.call(null,inst_31481,inst_31482);
var state_31508__$1 = state_31508;
var statearr_31522_31553 = state_31508__$1;
(statearr_31522_31553[(2)] = inst_31483);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31508__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31509 === (9))){
var inst_31472 = (state_31508[(7)]);
var inst_31485 = (state_31508[(2)]);
var inst_31486 = (inst_31472 + (1));
var inst_31472__$1 = inst_31486;
var state_31508__$1 = (function (){var statearr_31523 = state_31508;
(statearr_31523[(10)] = inst_31485);

(statearr_31523[(7)] = inst_31472__$1);

return statearr_31523;
})();
var statearr_31524_31554 = state_31508__$1;
(statearr_31524_31554[(2)] = null);

(statearr_31524_31554[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31509 === (5))){
var inst_31492 = (state_31508[(2)]);
var state_31508__$1 = (function (){var statearr_31525 = state_31508;
(statearr_31525[(11)] = inst_31492);

return statearr_31525;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31508__$1,(12),dchan);
} else {
if((state_val_31509 === (14))){
var inst_31494 = (state_31508[(8)]);
var inst_31499 = cljs.core.apply.call(null,f,inst_31494);
var state_31508__$1 = state_31508;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31508__$1,(16),out,inst_31499);
} else {
if((state_val_31509 === (16))){
var inst_31501 = (state_31508[(2)]);
var state_31508__$1 = (function (){var statearr_31526 = state_31508;
(statearr_31526[(12)] = inst_31501);

return statearr_31526;
})();
var statearr_31527_31555 = state_31508__$1;
(statearr_31527_31555[(2)] = null);

(statearr_31527_31555[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31509 === (10))){
var inst_31476 = (state_31508[(2)]);
var inst_31477 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_31508__$1 = (function (){var statearr_31528 = state_31508;
(statearr_31528[(13)] = inst_31476);

return statearr_31528;
})();
var statearr_31529_31556 = state_31508__$1;
(statearr_31529_31556[(2)] = inst_31477);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31508__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31509 === (8))){
var inst_31490 = (state_31508[(2)]);
var state_31508__$1 = state_31508;
var statearr_31530_31557 = state_31508__$1;
(statearr_31530_31557[(2)] = inst_31490);

(statearr_31530_31557[(1)] = (5));


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
});})(c__29473__auto___31542,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__29361__auto__,c__29473__auto___31542,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__29362__auto__ = null;
var cljs$core$async$state_machine__29362__auto____0 = (function (){
var statearr_31534 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31534[(0)] = cljs$core$async$state_machine__29362__auto__);

(statearr_31534[(1)] = (1));

return statearr_31534;
});
var cljs$core$async$state_machine__29362__auto____1 = (function (state_31508){
while(true){
var ret_value__29363__auto__ = (function (){try{while(true){
var result__29364__auto__ = switch__29361__auto__.call(null,state_31508);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29364__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29364__auto__;
}
break;
}
}catch (e31535){if((e31535 instanceof Object)){
var ex__29365__auto__ = e31535;
var statearr_31536_31558 = state_31508;
(statearr_31536_31558[(5)] = ex__29365__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31508);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31535;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29363__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31559 = state_31508;
state_31508 = G__31559;
continue;
} else {
return ret_value__29363__auto__;
}
break;
}
});
cljs$core$async$state_machine__29362__auto__ = function(state_31508){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29362__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29362__auto____1.call(this,state_31508);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29362__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29362__auto____0;
cljs$core$async$state_machine__29362__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29362__auto____1;
return cljs$core$async$state_machine__29362__auto__;
})()
;})(switch__29361__auto__,c__29473__auto___31542,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__29475__auto__ = (function (){var statearr_31537 = f__29474__auto__.call(null);
(statearr_31537[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29473__auto___31542);

return statearr_31537;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29475__auto__);
});})(c__29473__auto___31542,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var args31561 = [];
var len__27623__auto___31619 = arguments.length;
var i__27624__auto___31620 = (0);
while(true){
if((i__27624__auto___31620 < len__27623__auto___31619)){
args31561.push((arguments[i__27624__auto___31620]));

var G__31621 = (i__27624__auto___31620 + (1));
i__27624__auto___31620 = G__31621;
continue;
} else {
}
break;
}

var G__31563 = args31561.length;
switch (G__31563) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31561.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__29473__auto___31623 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29473__auto___31623,out){
return (function (){
var f__29474__auto__ = (function (){var switch__29361__auto__ = ((function (c__29473__auto___31623,out){
return (function (state_31595){
var state_val_31596 = (state_31595[(1)]);
if((state_val_31596 === (7))){
var inst_31575 = (state_31595[(7)]);
var inst_31574 = (state_31595[(8)]);
var inst_31574__$1 = (state_31595[(2)]);
var inst_31575__$1 = cljs.core.nth.call(null,inst_31574__$1,(0),null);
var inst_31576 = cljs.core.nth.call(null,inst_31574__$1,(1),null);
var inst_31577 = (inst_31575__$1 == null);
var state_31595__$1 = (function (){var statearr_31597 = state_31595;
(statearr_31597[(9)] = inst_31576);

(statearr_31597[(7)] = inst_31575__$1);

(statearr_31597[(8)] = inst_31574__$1);

return statearr_31597;
})();
if(cljs.core.truth_(inst_31577)){
var statearr_31598_31624 = state_31595__$1;
(statearr_31598_31624[(1)] = (8));

} else {
var statearr_31599_31625 = state_31595__$1;
(statearr_31599_31625[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31596 === (1))){
var inst_31564 = cljs.core.vec.call(null,chs);
var inst_31565 = inst_31564;
var state_31595__$1 = (function (){var statearr_31600 = state_31595;
(statearr_31600[(10)] = inst_31565);

return statearr_31600;
})();
var statearr_31601_31626 = state_31595__$1;
(statearr_31601_31626[(2)] = null);

(statearr_31601_31626[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31596 === (4))){
var inst_31565 = (state_31595[(10)]);
var state_31595__$1 = state_31595;
return cljs.core.async.ioc_alts_BANG_.call(null,state_31595__$1,(7),inst_31565);
} else {
if((state_val_31596 === (6))){
var inst_31591 = (state_31595[(2)]);
var state_31595__$1 = state_31595;
var statearr_31602_31627 = state_31595__$1;
(statearr_31602_31627[(2)] = inst_31591);

(statearr_31602_31627[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31596 === (3))){
var inst_31593 = (state_31595[(2)]);
var state_31595__$1 = state_31595;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31595__$1,inst_31593);
} else {
if((state_val_31596 === (2))){
var inst_31565 = (state_31595[(10)]);
var inst_31567 = cljs.core.count.call(null,inst_31565);
var inst_31568 = (inst_31567 > (0));
var state_31595__$1 = state_31595;
if(cljs.core.truth_(inst_31568)){
var statearr_31604_31628 = state_31595__$1;
(statearr_31604_31628[(1)] = (4));

} else {
var statearr_31605_31629 = state_31595__$1;
(statearr_31605_31629[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31596 === (11))){
var inst_31565 = (state_31595[(10)]);
var inst_31584 = (state_31595[(2)]);
var tmp31603 = inst_31565;
var inst_31565__$1 = tmp31603;
var state_31595__$1 = (function (){var statearr_31606 = state_31595;
(statearr_31606[(10)] = inst_31565__$1);

(statearr_31606[(11)] = inst_31584);

return statearr_31606;
})();
var statearr_31607_31630 = state_31595__$1;
(statearr_31607_31630[(2)] = null);

(statearr_31607_31630[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31596 === (9))){
var inst_31575 = (state_31595[(7)]);
var state_31595__$1 = state_31595;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31595__$1,(11),out,inst_31575);
} else {
if((state_val_31596 === (5))){
var inst_31589 = cljs.core.async.close_BANG_.call(null,out);
var state_31595__$1 = state_31595;
var statearr_31608_31631 = state_31595__$1;
(statearr_31608_31631[(2)] = inst_31589);

(statearr_31608_31631[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31596 === (10))){
var inst_31587 = (state_31595[(2)]);
var state_31595__$1 = state_31595;
var statearr_31609_31632 = state_31595__$1;
(statearr_31609_31632[(2)] = inst_31587);

(statearr_31609_31632[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31596 === (8))){
var inst_31576 = (state_31595[(9)]);
var inst_31575 = (state_31595[(7)]);
var inst_31565 = (state_31595[(10)]);
var inst_31574 = (state_31595[(8)]);
var inst_31579 = (function (){var cs = inst_31565;
var vec__31570 = inst_31574;
var v = inst_31575;
var c = inst_31576;
return ((function (cs,vec__31570,v,c,inst_31576,inst_31575,inst_31565,inst_31574,state_val_31596,c__29473__auto___31623,out){
return (function (p1__31560_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__31560_SHARP_);
});
;})(cs,vec__31570,v,c,inst_31576,inst_31575,inst_31565,inst_31574,state_val_31596,c__29473__auto___31623,out))
})();
var inst_31580 = cljs.core.filterv.call(null,inst_31579,inst_31565);
var inst_31565__$1 = inst_31580;
var state_31595__$1 = (function (){var statearr_31610 = state_31595;
(statearr_31610[(10)] = inst_31565__$1);

return statearr_31610;
})();
var statearr_31611_31633 = state_31595__$1;
(statearr_31611_31633[(2)] = null);

(statearr_31611_31633[(1)] = (2));


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
});})(c__29473__auto___31623,out))
;
return ((function (switch__29361__auto__,c__29473__auto___31623,out){
return (function() {
var cljs$core$async$state_machine__29362__auto__ = null;
var cljs$core$async$state_machine__29362__auto____0 = (function (){
var statearr_31615 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31615[(0)] = cljs$core$async$state_machine__29362__auto__);

(statearr_31615[(1)] = (1));

return statearr_31615;
});
var cljs$core$async$state_machine__29362__auto____1 = (function (state_31595){
while(true){
var ret_value__29363__auto__ = (function (){try{while(true){
var result__29364__auto__ = switch__29361__auto__.call(null,state_31595);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29364__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29364__auto__;
}
break;
}
}catch (e31616){if((e31616 instanceof Object)){
var ex__29365__auto__ = e31616;
var statearr_31617_31634 = state_31595;
(statearr_31617_31634[(5)] = ex__29365__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31595);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31616;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29363__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31635 = state_31595;
state_31595 = G__31635;
continue;
} else {
return ret_value__29363__auto__;
}
break;
}
});
cljs$core$async$state_machine__29362__auto__ = function(state_31595){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29362__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29362__auto____1.call(this,state_31595);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29362__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29362__auto____0;
cljs$core$async$state_machine__29362__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29362__auto____1;
return cljs$core$async$state_machine__29362__auto__;
})()
;})(switch__29361__auto__,c__29473__auto___31623,out))
})();
var state__29475__auto__ = (function (){var statearr_31618 = f__29474__auto__.call(null);
(statearr_31618[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29473__auto___31623);

return statearr_31618;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29475__auto__);
});})(c__29473__auto___31623,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var args31636 = [];
var len__27623__auto___31685 = arguments.length;
var i__27624__auto___31686 = (0);
while(true){
if((i__27624__auto___31686 < len__27623__auto___31685)){
args31636.push((arguments[i__27624__auto___31686]));

var G__31687 = (i__27624__auto___31686 + (1));
i__27624__auto___31686 = G__31687;
continue;
} else {
}
break;
}

var G__31638 = args31636.length;
switch (G__31638) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31636.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__29473__auto___31689 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29473__auto___31689,out){
return (function (){
var f__29474__auto__ = (function (){var switch__29361__auto__ = ((function (c__29473__auto___31689,out){
return (function (state_31662){
var state_val_31663 = (state_31662[(1)]);
if((state_val_31663 === (7))){
var inst_31644 = (state_31662[(7)]);
var inst_31644__$1 = (state_31662[(2)]);
var inst_31645 = (inst_31644__$1 == null);
var inst_31646 = cljs.core.not.call(null,inst_31645);
var state_31662__$1 = (function (){var statearr_31664 = state_31662;
(statearr_31664[(7)] = inst_31644__$1);

return statearr_31664;
})();
if(inst_31646){
var statearr_31665_31690 = state_31662__$1;
(statearr_31665_31690[(1)] = (8));

} else {
var statearr_31666_31691 = state_31662__$1;
(statearr_31666_31691[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31663 === (1))){
var inst_31639 = (0);
var state_31662__$1 = (function (){var statearr_31667 = state_31662;
(statearr_31667[(8)] = inst_31639);

return statearr_31667;
})();
var statearr_31668_31692 = state_31662__$1;
(statearr_31668_31692[(2)] = null);

(statearr_31668_31692[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31663 === (4))){
var state_31662__$1 = state_31662;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31662__$1,(7),ch);
} else {
if((state_val_31663 === (6))){
var inst_31657 = (state_31662[(2)]);
var state_31662__$1 = state_31662;
var statearr_31669_31693 = state_31662__$1;
(statearr_31669_31693[(2)] = inst_31657);

(statearr_31669_31693[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31663 === (3))){
var inst_31659 = (state_31662[(2)]);
var inst_31660 = cljs.core.async.close_BANG_.call(null,out);
var state_31662__$1 = (function (){var statearr_31670 = state_31662;
(statearr_31670[(9)] = inst_31659);

return statearr_31670;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31662__$1,inst_31660);
} else {
if((state_val_31663 === (2))){
var inst_31639 = (state_31662[(8)]);
var inst_31641 = (inst_31639 < n);
var state_31662__$1 = state_31662;
if(cljs.core.truth_(inst_31641)){
var statearr_31671_31694 = state_31662__$1;
(statearr_31671_31694[(1)] = (4));

} else {
var statearr_31672_31695 = state_31662__$1;
(statearr_31672_31695[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31663 === (11))){
var inst_31639 = (state_31662[(8)]);
var inst_31649 = (state_31662[(2)]);
var inst_31650 = (inst_31639 + (1));
var inst_31639__$1 = inst_31650;
var state_31662__$1 = (function (){var statearr_31673 = state_31662;
(statearr_31673[(10)] = inst_31649);

(statearr_31673[(8)] = inst_31639__$1);

return statearr_31673;
})();
var statearr_31674_31696 = state_31662__$1;
(statearr_31674_31696[(2)] = null);

(statearr_31674_31696[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31663 === (9))){
var state_31662__$1 = state_31662;
var statearr_31675_31697 = state_31662__$1;
(statearr_31675_31697[(2)] = null);

(statearr_31675_31697[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31663 === (5))){
var state_31662__$1 = state_31662;
var statearr_31676_31698 = state_31662__$1;
(statearr_31676_31698[(2)] = null);

(statearr_31676_31698[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31663 === (10))){
var inst_31654 = (state_31662[(2)]);
var state_31662__$1 = state_31662;
var statearr_31677_31699 = state_31662__$1;
(statearr_31677_31699[(2)] = inst_31654);

(statearr_31677_31699[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31663 === (8))){
var inst_31644 = (state_31662[(7)]);
var state_31662__$1 = state_31662;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31662__$1,(11),out,inst_31644);
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
});})(c__29473__auto___31689,out))
;
return ((function (switch__29361__auto__,c__29473__auto___31689,out){
return (function() {
var cljs$core$async$state_machine__29362__auto__ = null;
var cljs$core$async$state_machine__29362__auto____0 = (function (){
var statearr_31681 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_31681[(0)] = cljs$core$async$state_machine__29362__auto__);

(statearr_31681[(1)] = (1));

return statearr_31681;
});
var cljs$core$async$state_machine__29362__auto____1 = (function (state_31662){
while(true){
var ret_value__29363__auto__ = (function (){try{while(true){
var result__29364__auto__ = switch__29361__auto__.call(null,state_31662);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29364__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29364__auto__;
}
break;
}
}catch (e31682){if((e31682 instanceof Object)){
var ex__29365__auto__ = e31682;
var statearr_31683_31700 = state_31662;
(statearr_31683_31700[(5)] = ex__29365__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31662);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31682;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29363__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31701 = state_31662;
state_31662 = G__31701;
continue;
} else {
return ret_value__29363__auto__;
}
break;
}
});
cljs$core$async$state_machine__29362__auto__ = function(state_31662){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29362__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29362__auto____1.call(this,state_31662);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29362__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29362__auto____0;
cljs$core$async$state_machine__29362__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29362__auto____1;
return cljs$core$async$state_machine__29362__auto__;
})()
;})(switch__29361__auto__,c__29473__auto___31689,out))
})();
var state__29475__auto__ = (function (){var statearr_31684 = f__29474__auto__.call(null);
(statearr_31684[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29473__auto___31689);

return statearr_31684;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29475__auto__);
});})(c__29473__auto___31689,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async31709 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31709 = (function (map_LT_,f,ch,meta31710){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta31710 = meta31710;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async31709.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31711,meta31710__$1){
var self__ = this;
var _31711__$1 = this;
return (new cljs.core.async.t_cljs$core$async31709(self__.map_LT_,self__.f,self__.ch,meta31710__$1));
});

cljs.core.async.t_cljs$core$async31709.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31711){
var self__ = this;
var _31711__$1 = this;
return self__.meta31710;
});

cljs.core.async.t_cljs$core$async31709.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async31709.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async31709.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async31709.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async31709.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async31712 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31712 = (function (map_LT_,f,ch,meta31710,_,fn1,meta31713){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta31710 = meta31710;
this._ = _;
this.fn1 = fn1;
this.meta31713 = meta31713;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async31712.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_31714,meta31713__$1){
var self__ = this;
var _31714__$1 = this;
return (new cljs.core.async.t_cljs$core$async31712(self__.map_LT_,self__.f,self__.ch,self__.meta31710,self__._,self__.fn1,meta31713__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async31712.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_31714){
var self__ = this;
var _31714__$1 = this;
return self__.meta31713;
});})(___$1))
;

cljs.core.async.t_cljs$core$async31712.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async31712.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async31712.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async31712.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__31702_SHARP_){
return f1.call(null,(((p1__31702_SHARP_ == null))?null:self__.f.call(null,p1__31702_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async31712.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta31710","meta31710",715005044,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async31709","cljs.core.async/t_cljs$core$async31709",316382364,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta31713","meta31713",-726402632,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async31712.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async31712.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31712";

cljs.core.async.t_cljs$core$async31712.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__27154__auto__,writer__27155__auto__,opt__27156__auto__){
return cljs.core._write.call(null,writer__27155__auto__,"cljs.core.async/t_cljs$core$async31712");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async31712 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async31712(map_LT___$1,f__$1,ch__$1,meta31710__$1,___$2,fn1__$1,meta31713){
return (new cljs.core.async.t_cljs$core$async31712(map_LT___$1,f__$1,ch__$1,meta31710__$1,___$2,fn1__$1,meta31713));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async31712(self__.map_LT_,self__.f,self__.ch,self__.meta31710,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__26536__auto__ = ret;
if(cljs.core.truth_(and__26536__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__26536__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async31709.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async31709.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async31709.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta31710","meta31710",715005044,null)], null);
});

cljs.core.async.t_cljs$core$async31709.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async31709.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31709";

cljs.core.async.t_cljs$core$async31709.cljs$lang$ctorPrWriter = (function (this__27154__auto__,writer__27155__auto__,opt__27156__auto__){
return cljs.core._write.call(null,writer__27155__auto__,"cljs.core.async/t_cljs$core$async31709");
});

cljs.core.async.__GT_t_cljs$core$async31709 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async31709(map_LT___$1,f__$1,ch__$1,meta31710){
return (new cljs.core.async.t_cljs$core$async31709(map_LT___$1,f__$1,ch__$1,meta31710));
});

}

return (new cljs.core.async.t_cljs$core$async31709(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async31718 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31718 = (function (map_GT_,f,ch,meta31719){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta31719 = meta31719;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async31718.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31720,meta31719__$1){
var self__ = this;
var _31720__$1 = this;
return (new cljs.core.async.t_cljs$core$async31718(self__.map_GT_,self__.f,self__.ch,meta31719__$1));
});

cljs.core.async.t_cljs$core$async31718.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31720){
var self__ = this;
var _31720__$1 = this;
return self__.meta31719;
});

cljs.core.async.t_cljs$core$async31718.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async31718.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async31718.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async31718.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async31718.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async31718.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async31718.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta31719","meta31719",1433970470,null)], null);
});

cljs.core.async.t_cljs$core$async31718.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async31718.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31718";

cljs.core.async.t_cljs$core$async31718.cljs$lang$ctorPrWriter = (function (this__27154__auto__,writer__27155__auto__,opt__27156__auto__){
return cljs.core._write.call(null,writer__27155__auto__,"cljs.core.async/t_cljs$core$async31718");
});

cljs.core.async.__GT_t_cljs$core$async31718 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async31718(map_GT___$1,f__$1,ch__$1,meta31719){
return (new cljs.core.async.t_cljs$core$async31718(map_GT___$1,f__$1,ch__$1,meta31719));
});

}

return (new cljs.core.async.t_cljs$core$async31718(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async31724 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31724 = (function (filter_GT_,p,ch,meta31725){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta31725 = meta31725;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async31724.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31726,meta31725__$1){
var self__ = this;
var _31726__$1 = this;
return (new cljs.core.async.t_cljs$core$async31724(self__.filter_GT_,self__.p,self__.ch,meta31725__$1));
});

cljs.core.async.t_cljs$core$async31724.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31726){
var self__ = this;
var _31726__$1 = this;
return self__.meta31725;
});

cljs.core.async.t_cljs$core$async31724.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async31724.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async31724.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async31724.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async31724.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async31724.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async31724.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async31724.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta31725","meta31725",-277889926,null)], null);
});

cljs.core.async.t_cljs$core$async31724.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async31724.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31724";

cljs.core.async.t_cljs$core$async31724.cljs$lang$ctorPrWriter = (function (this__27154__auto__,writer__27155__auto__,opt__27156__auto__){
return cljs.core._write.call(null,writer__27155__auto__,"cljs.core.async/t_cljs$core$async31724");
});

cljs.core.async.__GT_t_cljs$core$async31724 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async31724(filter_GT___$1,p__$1,ch__$1,meta31725){
return (new cljs.core.async.t_cljs$core$async31724(filter_GT___$1,p__$1,ch__$1,meta31725));
});

}

return (new cljs.core.async.t_cljs$core$async31724(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var args31727 = [];
var len__27623__auto___31771 = arguments.length;
var i__27624__auto___31772 = (0);
while(true){
if((i__27624__auto___31772 < len__27623__auto___31771)){
args31727.push((arguments[i__27624__auto___31772]));

var G__31773 = (i__27624__auto___31772 + (1));
i__27624__auto___31772 = G__31773;
continue;
} else {
}
break;
}

var G__31729 = args31727.length;
switch (G__31729) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31727.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__29473__auto___31775 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29473__auto___31775,out){
return (function (){
var f__29474__auto__ = (function (){var switch__29361__auto__ = ((function (c__29473__auto___31775,out){
return (function (state_31750){
var state_val_31751 = (state_31750[(1)]);
if((state_val_31751 === (7))){
var inst_31746 = (state_31750[(2)]);
var state_31750__$1 = state_31750;
var statearr_31752_31776 = state_31750__$1;
(statearr_31752_31776[(2)] = inst_31746);

(statearr_31752_31776[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31751 === (1))){
var state_31750__$1 = state_31750;
var statearr_31753_31777 = state_31750__$1;
(statearr_31753_31777[(2)] = null);

(statearr_31753_31777[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31751 === (4))){
var inst_31732 = (state_31750[(7)]);
var inst_31732__$1 = (state_31750[(2)]);
var inst_31733 = (inst_31732__$1 == null);
var state_31750__$1 = (function (){var statearr_31754 = state_31750;
(statearr_31754[(7)] = inst_31732__$1);

return statearr_31754;
})();
if(cljs.core.truth_(inst_31733)){
var statearr_31755_31778 = state_31750__$1;
(statearr_31755_31778[(1)] = (5));

} else {
var statearr_31756_31779 = state_31750__$1;
(statearr_31756_31779[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31751 === (6))){
var inst_31732 = (state_31750[(7)]);
var inst_31737 = p.call(null,inst_31732);
var state_31750__$1 = state_31750;
if(cljs.core.truth_(inst_31737)){
var statearr_31757_31780 = state_31750__$1;
(statearr_31757_31780[(1)] = (8));

} else {
var statearr_31758_31781 = state_31750__$1;
(statearr_31758_31781[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31751 === (3))){
var inst_31748 = (state_31750[(2)]);
var state_31750__$1 = state_31750;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31750__$1,inst_31748);
} else {
if((state_val_31751 === (2))){
var state_31750__$1 = state_31750;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31750__$1,(4),ch);
} else {
if((state_val_31751 === (11))){
var inst_31740 = (state_31750[(2)]);
var state_31750__$1 = state_31750;
var statearr_31759_31782 = state_31750__$1;
(statearr_31759_31782[(2)] = inst_31740);

(statearr_31759_31782[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31751 === (9))){
var state_31750__$1 = state_31750;
var statearr_31760_31783 = state_31750__$1;
(statearr_31760_31783[(2)] = null);

(statearr_31760_31783[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31751 === (5))){
var inst_31735 = cljs.core.async.close_BANG_.call(null,out);
var state_31750__$1 = state_31750;
var statearr_31761_31784 = state_31750__$1;
(statearr_31761_31784[(2)] = inst_31735);

(statearr_31761_31784[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31751 === (10))){
var inst_31743 = (state_31750[(2)]);
var state_31750__$1 = (function (){var statearr_31762 = state_31750;
(statearr_31762[(8)] = inst_31743);

return statearr_31762;
})();
var statearr_31763_31785 = state_31750__$1;
(statearr_31763_31785[(2)] = null);

(statearr_31763_31785[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31751 === (8))){
var inst_31732 = (state_31750[(7)]);
var state_31750__$1 = state_31750;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31750__$1,(11),out,inst_31732);
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
});})(c__29473__auto___31775,out))
;
return ((function (switch__29361__auto__,c__29473__auto___31775,out){
return (function() {
var cljs$core$async$state_machine__29362__auto__ = null;
var cljs$core$async$state_machine__29362__auto____0 = (function (){
var statearr_31767 = [null,null,null,null,null,null,null,null,null];
(statearr_31767[(0)] = cljs$core$async$state_machine__29362__auto__);

(statearr_31767[(1)] = (1));

return statearr_31767;
});
var cljs$core$async$state_machine__29362__auto____1 = (function (state_31750){
while(true){
var ret_value__29363__auto__ = (function (){try{while(true){
var result__29364__auto__ = switch__29361__auto__.call(null,state_31750);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29364__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29364__auto__;
}
break;
}
}catch (e31768){if((e31768 instanceof Object)){
var ex__29365__auto__ = e31768;
var statearr_31769_31786 = state_31750;
(statearr_31769_31786[(5)] = ex__29365__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31750);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31768;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29363__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31787 = state_31750;
state_31750 = G__31787;
continue;
} else {
return ret_value__29363__auto__;
}
break;
}
});
cljs$core$async$state_machine__29362__auto__ = function(state_31750){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29362__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29362__auto____1.call(this,state_31750);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29362__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29362__auto____0;
cljs$core$async$state_machine__29362__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29362__auto____1;
return cljs$core$async$state_machine__29362__auto__;
})()
;})(switch__29361__auto__,c__29473__auto___31775,out))
})();
var state__29475__auto__ = (function (){var statearr_31770 = f__29474__auto__.call(null);
(statearr_31770[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29473__auto___31775);

return statearr_31770;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29475__auto__);
});})(c__29473__auto___31775,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args31788 = [];
var len__27623__auto___31791 = arguments.length;
var i__27624__auto___31792 = (0);
while(true){
if((i__27624__auto___31792 < len__27623__auto___31791)){
args31788.push((arguments[i__27624__auto___31792]));

var G__31793 = (i__27624__auto___31792 + (1));
i__27624__auto___31792 = G__31793;
continue;
} else {
}
break;
}

var G__31790 = args31788.length;
switch (G__31790) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31788.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__29473__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29473__auto__){
return (function (){
var f__29474__auto__ = (function (){var switch__29361__auto__ = ((function (c__29473__auto__){
return (function (state_31960){
var state_val_31961 = (state_31960[(1)]);
if((state_val_31961 === (7))){
var inst_31956 = (state_31960[(2)]);
var state_31960__$1 = state_31960;
var statearr_31962_32003 = state_31960__$1;
(statearr_31962_32003[(2)] = inst_31956);

(statearr_31962_32003[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31961 === (20))){
var inst_31926 = (state_31960[(7)]);
var inst_31937 = (state_31960[(2)]);
var inst_31938 = cljs.core.next.call(null,inst_31926);
var inst_31912 = inst_31938;
var inst_31913 = null;
var inst_31914 = (0);
var inst_31915 = (0);
var state_31960__$1 = (function (){var statearr_31963 = state_31960;
(statearr_31963[(8)] = inst_31937);

(statearr_31963[(9)] = inst_31912);

(statearr_31963[(10)] = inst_31915);

(statearr_31963[(11)] = inst_31914);

(statearr_31963[(12)] = inst_31913);

return statearr_31963;
})();
var statearr_31964_32004 = state_31960__$1;
(statearr_31964_32004[(2)] = null);

(statearr_31964_32004[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31961 === (1))){
var state_31960__$1 = state_31960;
var statearr_31965_32005 = state_31960__$1;
(statearr_31965_32005[(2)] = null);

(statearr_31965_32005[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31961 === (4))){
var inst_31901 = (state_31960[(13)]);
var inst_31901__$1 = (state_31960[(2)]);
var inst_31902 = (inst_31901__$1 == null);
var state_31960__$1 = (function (){var statearr_31966 = state_31960;
(statearr_31966[(13)] = inst_31901__$1);

return statearr_31966;
})();
if(cljs.core.truth_(inst_31902)){
var statearr_31967_32006 = state_31960__$1;
(statearr_31967_32006[(1)] = (5));

} else {
var statearr_31968_32007 = state_31960__$1;
(statearr_31968_32007[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31961 === (15))){
var state_31960__$1 = state_31960;
var statearr_31972_32008 = state_31960__$1;
(statearr_31972_32008[(2)] = null);

(statearr_31972_32008[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31961 === (21))){
var state_31960__$1 = state_31960;
var statearr_31973_32009 = state_31960__$1;
(statearr_31973_32009[(2)] = null);

(statearr_31973_32009[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31961 === (13))){
var inst_31912 = (state_31960[(9)]);
var inst_31915 = (state_31960[(10)]);
var inst_31914 = (state_31960[(11)]);
var inst_31913 = (state_31960[(12)]);
var inst_31922 = (state_31960[(2)]);
var inst_31923 = (inst_31915 + (1));
var tmp31969 = inst_31912;
var tmp31970 = inst_31914;
var tmp31971 = inst_31913;
var inst_31912__$1 = tmp31969;
var inst_31913__$1 = tmp31971;
var inst_31914__$1 = tmp31970;
var inst_31915__$1 = inst_31923;
var state_31960__$1 = (function (){var statearr_31974 = state_31960;
(statearr_31974[(9)] = inst_31912__$1);

(statearr_31974[(14)] = inst_31922);

(statearr_31974[(10)] = inst_31915__$1);

(statearr_31974[(11)] = inst_31914__$1);

(statearr_31974[(12)] = inst_31913__$1);

return statearr_31974;
})();
var statearr_31975_32010 = state_31960__$1;
(statearr_31975_32010[(2)] = null);

(statearr_31975_32010[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31961 === (22))){
var state_31960__$1 = state_31960;
var statearr_31976_32011 = state_31960__$1;
(statearr_31976_32011[(2)] = null);

(statearr_31976_32011[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31961 === (6))){
var inst_31901 = (state_31960[(13)]);
var inst_31910 = f.call(null,inst_31901);
var inst_31911 = cljs.core.seq.call(null,inst_31910);
var inst_31912 = inst_31911;
var inst_31913 = null;
var inst_31914 = (0);
var inst_31915 = (0);
var state_31960__$1 = (function (){var statearr_31977 = state_31960;
(statearr_31977[(9)] = inst_31912);

(statearr_31977[(10)] = inst_31915);

(statearr_31977[(11)] = inst_31914);

(statearr_31977[(12)] = inst_31913);

return statearr_31977;
})();
var statearr_31978_32012 = state_31960__$1;
(statearr_31978_32012[(2)] = null);

(statearr_31978_32012[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31961 === (17))){
var inst_31926 = (state_31960[(7)]);
var inst_31930 = cljs.core.chunk_first.call(null,inst_31926);
var inst_31931 = cljs.core.chunk_rest.call(null,inst_31926);
var inst_31932 = cljs.core.count.call(null,inst_31930);
var inst_31912 = inst_31931;
var inst_31913 = inst_31930;
var inst_31914 = inst_31932;
var inst_31915 = (0);
var state_31960__$1 = (function (){var statearr_31979 = state_31960;
(statearr_31979[(9)] = inst_31912);

(statearr_31979[(10)] = inst_31915);

(statearr_31979[(11)] = inst_31914);

(statearr_31979[(12)] = inst_31913);

return statearr_31979;
})();
var statearr_31980_32013 = state_31960__$1;
(statearr_31980_32013[(2)] = null);

(statearr_31980_32013[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31961 === (3))){
var inst_31958 = (state_31960[(2)]);
var state_31960__$1 = state_31960;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31960__$1,inst_31958);
} else {
if((state_val_31961 === (12))){
var inst_31946 = (state_31960[(2)]);
var state_31960__$1 = state_31960;
var statearr_31981_32014 = state_31960__$1;
(statearr_31981_32014[(2)] = inst_31946);

(statearr_31981_32014[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31961 === (2))){
var state_31960__$1 = state_31960;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31960__$1,(4),in$);
} else {
if((state_val_31961 === (23))){
var inst_31954 = (state_31960[(2)]);
var state_31960__$1 = state_31960;
var statearr_31982_32015 = state_31960__$1;
(statearr_31982_32015[(2)] = inst_31954);

(statearr_31982_32015[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31961 === (19))){
var inst_31941 = (state_31960[(2)]);
var state_31960__$1 = state_31960;
var statearr_31983_32016 = state_31960__$1;
(statearr_31983_32016[(2)] = inst_31941);

(statearr_31983_32016[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31961 === (11))){
var inst_31926 = (state_31960[(7)]);
var inst_31912 = (state_31960[(9)]);
var inst_31926__$1 = cljs.core.seq.call(null,inst_31912);
var state_31960__$1 = (function (){var statearr_31984 = state_31960;
(statearr_31984[(7)] = inst_31926__$1);

return statearr_31984;
})();
if(inst_31926__$1){
var statearr_31985_32017 = state_31960__$1;
(statearr_31985_32017[(1)] = (14));

} else {
var statearr_31986_32018 = state_31960__$1;
(statearr_31986_32018[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31961 === (9))){
var inst_31948 = (state_31960[(2)]);
var inst_31949 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_31960__$1 = (function (){var statearr_31987 = state_31960;
(statearr_31987[(15)] = inst_31948);

return statearr_31987;
})();
if(cljs.core.truth_(inst_31949)){
var statearr_31988_32019 = state_31960__$1;
(statearr_31988_32019[(1)] = (21));

} else {
var statearr_31989_32020 = state_31960__$1;
(statearr_31989_32020[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31961 === (5))){
var inst_31904 = cljs.core.async.close_BANG_.call(null,out);
var state_31960__$1 = state_31960;
var statearr_31990_32021 = state_31960__$1;
(statearr_31990_32021[(2)] = inst_31904);

(statearr_31990_32021[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31961 === (14))){
var inst_31926 = (state_31960[(7)]);
var inst_31928 = cljs.core.chunked_seq_QMARK_.call(null,inst_31926);
var state_31960__$1 = state_31960;
if(inst_31928){
var statearr_31991_32022 = state_31960__$1;
(statearr_31991_32022[(1)] = (17));

} else {
var statearr_31992_32023 = state_31960__$1;
(statearr_31992_32023[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31961 === (16))){
var inst_31944 = (state_31960[(2)]);
var state_31960__$1 = state_31960;
var statearr_31993_32024 = state_31960__$1;
(statearr_31993_32024[(2)] = inst_31944);

(statearr_31993_32024[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31961 === (10))){
var inst_31915 = (state_31960[(10)]);
var inst_31913 = (state_31960[(12)]);
var inst_31920 = cljs.core._nth.call(null,inst_31913,inst_31915);
var state_31960__$1 = state_31960;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31960__$1,(13),out,inst_31920);
} else {
if((state_val_31961 === (18))){
var inst_31926 = (state_31960[(7)]);
var inst_31935 = cljs.core.first.call(null,inst_31926);
var state_31960__$1 = state_31960;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31960__$1,(20),out,inst_31935);
} else {
if((state_val_31961 === (8))){
var inst_31915 = (state_31960[(10)]);
var inst_31914 = (state_31960[(11)]);
var inst_31917 = (inst_31915 < inst_31914);
var inst_31918 = inst_31917;
var state_31960__$1 = state_31960;
if(cljs.core.truth_(inst_31918)){
var statearr_31994_32025 = state_31960__$1;
(statearr_31994_32025[(1)] = (10));

} else {
var statearr_31995_32026 = state_31960__$1;
(statearr_31995_32026[(1)] = (11));

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
}
}
}
}
}
}
});})(c__29473__auto__))
;
return ((function (switch__29361__auto__,c__29473__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__29362__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__29362__auto____0 = (function (){
var statearr_31999 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31999[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__29362__auto__);

(statearr_31999[(1)] = (1));

return statearr_31999;
});
var cljs$core$async$mapcat_STAR__$_state_machine__29362__auto____1 = (function (state_31960){
while(true){
var ret_value__29363__auto__ = (function (){try{while(true){
var result__29364__auto__ = switch__29361__auto__.call(null,state_31960);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29364__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29364__auto__;
}
break;
}
}catch (e32000){if((e32000 instanceof Object)){
var ex__29365__auto__ = e32000;
var statearr_32001_32027 = state_31960;
(statearr_32001_32027[(5)] = ex__29365__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31960);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32000;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29363__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32028 = state_31960;
state_31960 = G__32028;
continue;
} else {
return ret_value__29363__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__29362__auto__ = function(state_31960){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__29362__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__29362__auto____1.call(this,state_31960);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__29362__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__29362__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__29362__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__29362__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__29362__auto__;
})()
;})(switch__29361__auto__,c__29473__auto__))
})();
var state__29475__auto__ = (function (){var statearr_32002 = f__29474__auto__.call(null);
(statearr_32002[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29473__auto__);

return statearr_32002;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29475__auto__);
});})(c__29473__auto__))
);

return c__29473__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args32029 = [];
var len__27623__auto___32032 = arguments.length;
var i__27624__auto___32033 = (0);
while(true){
if((i__27624__auto___32033 < len__27623__auto___32032)){
args32029.push((arguments[i__27624__auto___32033]));

var G__32034 = (i__27624__auto___32033 + (1));
i__27624__auto___32033 = G__32034;
continue;
} else {
}
break;
}

var G__32031 = args32029.length;
switch (G__32031) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32029.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var args32036 = [];
var len__27623__auto___32039 = arguments.length;
var i__27624__auto___32040 = (0);
while(true){
if((i__27624__auto___32040 < len__27623__auto___32039)){
args32036.push((arguments[i__27624__auto___32040]));

var G__32041 = (i__27624__auto___32040 + (1));
i__27624__auto___32040 = G__32041;
continue;
} else {
}
break;
}

var G__32038 = args32036.length;
switch (G__32038) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32036.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var args32043 = [];
var len__27623__auto___32094 = arguments.length;
var i__27624__auto___32095 = (0);
while(true){
if((i__27624__auto___32095 < len__27623__auto___32094)){
args32043.push((arguments[i__27624__auto___32095]));

var G__32096 = (i__27624__auto___32095 + (1));
i__27624__auto___32095 = G__32096;
continue;
} else {
}
break;
}

var G__32045 = args32043.length;
switch (G__32045) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32043.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__29473__auto___32098 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29473__auto___32098,out){
return (function (){
var f__29474__auto__ = (function (){var switch__29361__auto__ = ((function (c__29473__auto___32098,out){
return (function (state_32069){
var state_val_32070 = (state_32069[(1)]);
if((state_val_32070 === (7))){
var inst_32064 = (state_32069[(2)]);
var state_32069__$1 = state_32069;
var statearr_32071_32099 = state_32069__$1;
(statearr_32071_32099[(2)] = inst_32064);

(statearr_32071_32099[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32070 === (1))){
var inst_32046 = null;
var state_32069__$1 = (function (){var statearr_32072 = state_32069;
(statearr_32072[(7)] = inst_32046);

return statearr_32072;
})();
var statearr_32073_32100 = state_32069__$1;
(statearr_32073_32100[(2)] = null);

(statearr_32073_32100[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32070 === (4))){
var inst_32049 = (state_32069[(8)]);
var inst_32049__$1 = (state_32069[(2)]);
var inst_32050 = (inst_32049__$1 == null);
var inst_32051 = cljs.core.not.call(null,inst_32050);
var state_32069__$1 = (function (){var statearr_32074 = state_32069;
(statearr_32074[(8)] = inst_32049__$1);

return statearr_32074;
})();
if(inst_32051){
var statearr_32075_32101 = state_32069__$1;
(statearr_32075_32101[(1)] = (5));

} else {
var statearr_32076_32102 = state_32069__$1;
(statearr_32076_32102[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32070 === (6))){
var state_32069__$1 = state_32069;
var statearr_32077_32103 = state_32069__$1;
(statearr_32077_32103[(2)] = null);

(statearr_32077_32103[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32070 === (3))){
var inst_32066 = (state_32069[(2)]);
var inst_32067 = cljs.core.async.close_BANG_.call(null,out);
var state_32069__$1 = (function (){var statearr_32078 = state_32069;
(statearr_32078[(9)] = inst_32066);

return statearr_32078;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32069__$1,inst_32067);
} else {
if((state_val_32070 === (2))){
var state_32069__$1 = state_32069;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32069__$1,(4),ch);
} else {
if((state_val_32070 === (11))){
var inst_32049 = (state_32069[(8)]);
var inst_32058 = (state_32069[(2)]);
var inst_32046 = inst_32049;
var state_32069__$1 = (function (){var statearr_32079 = state_32069;
(statearr_32079[(7)] = inst_32046);

(statearr_32079[(10)] = inst_32058);

return statearr_32079;
})();
var statearr_32080_32104 = state_32069__$1;
(statearr_32080_32104[(2)] = null);

(statearr_32080_32104[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32070 === (9))){
var inst_32049 = (state_32069[(8)]);
var state_32069__$1 = state_32069;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32069__$1,(11),out,inst_32049);
} else {
if((state_val_32070 === (5))){
var inst_32049 = (state_32069[(8)]);
var inst_32046 = (state_32069[(7)]);
var inst_32053 = cljs.core._EQ_.call(null,inst_32049,inst_32046);
var state_32069__$1 = state_32069;
if(inst_32053){
var statearr_32082_32105 = state_32069__$1;
(statearr_32082_32105[(1)] = (8));

} else {
var statearr_32083_32106 = state_32069__$1;
(statearr_32083_32106[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32070 === (10))){
var inst_32061 = (state_32069[(2)]);
var state_32069__$1 = state_32069;
var statearr_32084_32107 = state_32069__$1;
(statearr_32084_32107[(2)] = inst_32061);

(statearr_32084_32107[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32070 === (8))){
var inst_32046 = (state_32069[(7)]);
var tmp32081 = inst_32046;
var inst_32046__$1 = tmp32081;
var state_32069__$1 = (function (){var statearr_32085 = state_32069;
(statearr_32085[(7)] = inst_32046__$1);

return statearr_32085;
})();
var statearr_32086_32108 = state_32069__$1;
(statearr_32086_32108[(2)] = null);

(statearr_32086_32108[(1)] = (2));


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
});})(c__29473__auto___32098,out))
;
return ((function (switch__29361__auto__,c__29473__auto___32098,out){
return (function() {
var cljs$core$async$state_machine__29362__auto__ = null;
var cljs$core$async$state_machine__29362__auto____0 = (function (){
var statearr_32090 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_32090[(0)] = cljs$core$async$state_machine__29362__auto__);

(statearr_32090[(1)] = (1));

return statearr_32090;
});
var cljs$core$async$state_machine__29362__auto____1 = (function (state_32069){
while(true){
var ret_value__29363__auto__ = (function (){try{while(true){
var result__29364__auto__ = switch__29361__auto__.call(null,state_32069);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29364__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29364__auto__;
}
break;
}
}catch (e32091){if((e32091 instanceof Object)){
var ex__29365__auto__ = e32091;
var statearr_32092_32109 = state_32069;
(statearr_32092_32109[(5)] = ex__29365__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32069);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32091;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29363__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32110 = state_32069;
state_32069 = G__32110;
continue;
} else {
return ret_value__29363__auto__;
}
break;
}
});
cljs$core$async$state_machine__29362__auto__ = function(state_32069){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29362__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29362__auto____1.call(this,state_32069);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29362__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29362__auto____0;
cljs$core$async$state_machine__29362__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29362__auto____1;
return cljs$core$async$state_machine__29362__auto__;
})()
;})(switch__29361__auto__,c__29473__auto___32098,out))
})();
var state__29475__auto__ = (function (){var statearr_32093 = f__29474__auto__.call(null);
(statearr_32093[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29473__auto___32098);

return statearr_32093;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29475__auto__);
});})(c__29473__auto___32098,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args32111 = [];
var len__27623__auto___32181 = arguments.length;
var i__27624__auto___32182 = (0);
while(true){
if((i__27624__auto___32182 < len__27623__auto___32181)){
args32111.push((arguments[i__27624__auto___32182]));

var G__32183 = (i__27624__auto___32182 + (1));
i__27624__auto___32182 = G__32183;
continue;
} else {
}
break;
}

var G__32113 = args32111.length;
switch (G__32113) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32111.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__29473__auto___32185 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29473__auto___32185,out){
return (function (){
var f__29474__auto__ = (function (){var switch__29361__auto__ = ((function (c__29473__auto___32185,out){
return (function (state_32151){
var state_val_32152 = (state_32151[(1)]);
if((state_val_32152 === (7))){
var inst_32147 = (state_32151[(2)]);
var state_32151__$1 = state_32151;
var statearr_32153_32186 = state_32151__$1;
(statearr_32153_32186[(2)] = inst_32147);

(statearr_32153_32186[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32152 === (1))){
var inst_32114 = (new Array(n));
var inst_32115 = inst_32114;
var inst_32116 = (0);
var state_32151__$1 = (function (){var statearr_32154 = state_32151;
(statearr_32154[(7)] = inst_32115);

(statearr_32154[(8)] = inst_32116);

return statearr_32154;
})();
var statearr_32155_32187 = state_32151__$1;
(statearr_32155_32187[(2)] = null);

(statearr_32155_32187[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32152 === (4))){
var inst_32119 = (state_32151[(9)]);
var inst_32119__$1 = (state_32151[(2)]);
var inst_32120 = (inst_32119__$1 == null);
var inst_32121 = cljs.core.not.call(null,inst_32120);
var state_32151__$1 = (function (){var statearr_32156 = state_32151;
(statearr_32156[(9)] = inst_32119__$1);

return statearr_32156;
})();
if(inst_32121){
var statearr_32157_32188 = state_32151__$1;
(statearr_32157_32188[(1)] = (5));

} else {
var statearr_32158_32189 = state_32151__$1;
(statearr_32158_32189[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32152 === (15))){
var inst_32141 = (state_32151[(2)]);
var state_32151__$1 = state_32151;
var statearr_32159_32190 = state_32151__$1;
(statearr_32159_32190[(2)] = inst_32141);

(statearr_32159_32190[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32152 === (13))){
var state_32151__$1 = state_32151;
var statearr_32160_32191 = state_32151__$1;
(statearr_32160_32191[(2)] = null);

(statearr_32160_32191[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32152 === (6))){
var inst_32116 = (state_32151[(8)]);
var inst_32137 = (inst_32116 > (0));
var state_32151__$1 = state_32151;
if(cljs.core.truth_(inst_32137)){
var statearr_32161_32192 = state_32151__$1;
(statearr_32161_32192[(1)] = (12));

} else {
var statearr_32162_32193 = state_32151__$1;
(statearr_32162_32193[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32152 === (3))){
var inst_32149 = (state_32151[(2)]);
var state_32151__$1 = state_32151;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32151__$1,inst_32149);
} else {
if((state_val_32152 === (12))){
var inst_32115 = (state_32151[(7)]);
var inst_32139 = cljs.core.vec.call(null,inst_32115);
var state_32151__$1 = state_32151;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32151__$1,(15),out,inst_32139);
} else {
if((state_val_32152 === (2))){
var state_32151__$1 = state_32151;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32151__$1,(4),ch);
} else {
if((state_val_32152 === (11))){
var inst_32131 = (state_32151[(2)]);
var inst_32132 = (new Array(n));
var inst_32115 = inst_32132;
var inst_32116 = (0);
var state_32151__$1 = (function (){var statearr_32163 = state_32151;
(statearr_32163[(10)] = inst_32131);

(statearr_32163[(7)] = inst_32115);

(statearr_32163[(8)] = inst_32116);

return statearr_32163;
})();
var statearr_32164_32194 = state_32151__$1;
(statearr_32164_32194[(2)] = null);

(statearr_32164_32194[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32152 === (9))){
var inst_32115 = (state_32151[(7)]);
var inst_32129 = cljs.core.vec.call(null,inst_32115);
var state_32151__$1 = state_32151;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32151__$1,(11),out,inst_32129);
} else {
if((state_val_32152 === (5))){
var inst_32124 = (state_32151[(11)]);
var inst_32119 = (state_32151[(9)]);
var inst_32115 = (state_32151[(7)]);
var inst_32116 = (state_32151[(8)]);
var inst_32123 = (inst_32115[inst_32116] = inst_32119);
var inst_32124__$1 = (inst_32116 + (1));
var inst_32125 = (inst_32124__$1 < n);
var state_32151__$1 = (function (){var statearr_32165 = state_32151;
(statearr_32165[(11)] = inst_32124__$1);

(statearr_32165[(12)] = inst_32123);

return statearr_32165;
})();
if(cljs.core.truth_(inst_32125)){
var statearr_32166_32195 = state_32151__$1;
(statearr_32166_32195[(1)] = (8));

} else {
var statearr_32167_32196 = state_32151__$1;
(statearr_32167_32196[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32152 === (14))){
var inst_32144 = (state_32151[(2)]);
var inst_32145 = cljs.core.async.close_BANG_.call(null,out);
var state_32151__$1 = (function (){var statearr_32169 = state_32151;
(statearr_32169[(13)] = inst_32144);

return statearr_32169;
})();
var statearr_32170_32197 = state_32151__$1;
(statearr_32170_32197[(2)] = inst_32145);

(statearr_32170_32197[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32152 === (10))){
var inst_32135 = (state_32151[(2)]);
var state_32151__$1 = state_32151;
var statearr_32171_32198 = state_32151__$1;
(statearr_32171_32198[(2)] = inst_32135);

(statearr_32171_32198[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32152 === (8))){
var inst_32124 = (state_32151[(11)]);
var inst_32115 = (state_32151[(7)]);
var tmp32168 = inst_32115;
var inst_32115__$1 = tmp32168;
var inst_32116 = inst_32124;
var state_32151__$1 = (function (){var statearr_32172 = state_32151;
(statearr_32172[(7)] = inst_32115__$1);

(statearr_32172[(8)] = inst_32116);

return statearr_32172;
})();
var statearr_32173_32199 = state_32151__$1;
(statearr_32173_32199[(2)] = null);

(statearr_32173_32199[(1)] = (2));


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
});})(c__29473__auto___32185,out))
;
return ((function (switch__29361__auto__,c__29473__auto___32185,out){
return (function() {
var cljs$core$async$state_machine__29362__auto__ = null;
var cljs$core$async$state_machine__29362__auto____0 = (function (){
var statearr_32177 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32177[(0)] = cljs$core$async$state_machine__29362__auto__);

(statearr_32177[(1)] = (1));

return statearr_32177;
});
var cljs$core$async$state_machine__29362__auto____1 = (function (state_32151){
while(true){
var ret_value__29363__auto__ = (function (){try{while(true){
var result__29364__auto__ = switch__29361__auto__.call(null,state_32151);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29364__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29364__auto__;
}
break;
}
}catch (e32178){if((e32178 instanceof Object)){
var ex__29365__auto__ = e32178;
var statearr_32179_32200 = state_32151;
(statearr_32179_32200[(5)] = ex__29365__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32151);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32178;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29363__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32201 = state_32151;
state_32151 = G__32201;
continue;
} else {
return ret_value__29363__auto__;
}
break;
}
});
cljs$core$async$state_machine__29362__auto__ = function(state_32151){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29362__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29362__auto____1.call(this,state_32151);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29362__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29362__auto____0;
cljs$core$async$state_machine__29362__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29362__auto____1;
return cljs$core$async$state_machine__29362__auto__;
})()
;})(switch__29361__auto__,c__29473__auto___32185,out))
})();
var state__29475__auto__ = (function (){var statearr_32180 = f__29474__auto__.call(null);
(statearr_32180[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29473__auto___32185);

return statearr_32180;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29475__auto__);
});})(c__29473__auto___32185,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args32202 = [];
var len__27623__auto___32276 = arguments.length;
var i__27624__auto___32277 = (0);
while(true){
if((i__27624__auto___32277 < len__27623__auto___32276)){
args32202.push((arguments[i__27624__auto___32277]));

var G__32278 = (i__27624__auto___32277 + (1));
i__27624__auto___32277 = G__32278;
continue;
} else {
}
break;
}

var G__32204 = args32202.length;
switch (G__32204) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32202.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__29473__auto___32280 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29473__auto___32280,out){
return (function (){
var f__29474__auto__ = (function (){var switch__29361__auto__ = ((function (c__29473__auto___32280,out){
return (function (state_32246){
var state_val_32247 = (state_32246[(1)]);
if((state_val_32247 === (7))){
var inst_32242 = (state_32246[(2)]);
var state_32246__$1 = state_32246;
var statearr_32248_32281 = state_32246__$1;
(statearr_32248_32281[(2)] = inst_32242);

(statearr_32248_32281[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32247 === (1))){
var inst_32205 = [];
var inst_32206 = inst_32205;
var inst_32207 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_32246__$1 = (function (){var statearr_32249 = state_32246;
(statearr_32249[(7)] = inst_32207);

(statearr_32249[(8)] = inst_32206);

return statearr_32249;
})();
var statearr_32250_32282 = state_32246__$1;
(statearr_32250_32282[(2)] = null);

(statearr_32250_32282[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32247 === (4))){
var inst_32210 = (state_32246[(9)]);
var inst_32210__$1 = (state_32246[(2)]);
var inst_32211 = (inst_32210__$1 == null);
var inst_32212 = cljs.core.not.call(null,inst_32211);
var state_32246__$1 = (function (){var statearr_32251 = state_32246;
(statearr_32251[(9)] = inst_32210__$1);

return statearr_32251;
})();
if(inst_32212){
var statearr_32252_32283 = state_32246__$1;
(statearr_32252_32283[(1)] = (5));

} else {
var statearr_32253_32284 = state_32246__$1;
(statearr_32253_32284[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32247 === (15))){
var inst_32236 = (state_32246[(2)]);
var state_32246__$1 = state_32246;
var statearr_32254_32285 = state_32246__$1;
(statearr_32254_32285[(2)] = inst_32236);

(statearr_32254_32285[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32247 === (13))){
var state_32246__$1 = state_32246;
var statearr_32255_32286 = state_32246__$1;
(statearr_32255_32286[(2)] = null);

(statearr_32255_32286[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32247 === (6))){
var inst_32206 = (state_32246[(8)]);
var inst_32231 = inst_32206.length;
var inst_32232 = (inst_32231 > (0));
var state_32246__$1 = state_32246;
if(cljs.core.truth_(inst_32232)){
var statearr_32256_32287 = state_32246__$1;
(statearr_32256_32287[(1)] = (12));

} else {
var statearr_32257_32288 = state_32246__$1;
(statearr_32257_32288[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32247 === (3))){
var inst_32244 = (state_32246[(2)]);
var state_32246__$1 = state_32246;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32246__$1,inst_32244);
} else {
if((state_val_32247 === (12))){
var inst_32206 = (state_32246[(8)]);
var inst_32234 = cljs.core.vec.call(null,inst_32206);
var state_32246__$1 = state_32246;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32246__$1,(15),out,inst_32234);
} else {
if((state_val_32247 === (2))){
var state_32246__$1 = state_32246;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32246__$1,(4),ch);
} else {
if((state_val_32247 === (11))){
var inst_32214 = (state_32246[(10)]);
var inst_32210 = (state_32246[(9)]);
var inst_32224 = (state_32246[(2)]);
var inst_32225 = [];
var inst_32226 = inst_32225.push(inst_32210);
var inst_32206 = inst_32225;
var inst_32207 = inst_32214;
var state_32246__$1 = (function (){var statearr_32258 = state_32246;
(statearr_32258[(11)] = inst_32224);

(statearr_32258[(12)] = inst_32226);

(statearr_32258[(7)] = inst_32207);

(statearr_32258[(8)] = inst_32206);

return statearr_32258;
})();
var statearr_32259_32289 = state_32246__$1;
(statearr_32259_32289[(2)] = null);

(statearr_32259_32289[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32247 === (9))){
var inst_32206 = (state_32246[(8)]);
var inst_32222 = cljs.core.vec.call(null,inst_32206);
var state_32246__$1 = state_32246;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32246__$1,(11),out,inst_32222);
} else {
if((state_val_32247 === (5))){
var inst_32214 = (state_32246[(10)]);
var inst_32210 = (state_32246[(9)]);
var inst_32207 = (state_32246[(7)]);
var inst_32214__$1 = f.call(null,inst_32210);
var inst_32215 = cljs.core._EQ_.call(null,inst_32214__$1,inst_32207);
var inst_32216 = cljs.core.keyword_identical_QMARK_.call(null,inst_32207,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_32217 = (inst_32215) || (inst_32216);
var state_32246__$1 = (function (){var statearr_32260 = state_32246;
(statearr_32260[(10)] = inst_32214__$1);

return statearr_32260;
})();
if(cljs.core.truth_(inst_32217)){
var statearr_32261_32290 = state_32246__$1;
(statearr_32261_32290[(1)] = (8));

} else {
var statearr_32262_32291 = state_32246__$1;
(statearr_32262_32291[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32247 === (14))){
var inst_32239 = (state_32246[(2)]);
var inst_32240 = cljs.core.async.close_BANG_.call(null,out);
var state_32246__$1 = (function (){var statearr_32264 = state_32246;
(statearr_32264[(13)] = inst_32239);

return statearr_32264;
})();
var statearr_32265_32292 = state_32246__$1;
(statearr_32265_32292[(2)] = inst_32240);

(statearr_32265_32292[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32247 === (10))){
var inst_32229 = (state_32246[(2)]);
var state_32246__$1 = state_32246;
var statearr_32266_32293 = state_32246__$1;
(statearr_32266_32293[(2)] = inst_32229);

(statearr_32266_32293[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32247 === (8))){
var inst_32214 = (state_32246[(10)]);
var inst_32210 = (state_32246[(9)]);
var inst_32206 = (state_32246[(8)]);
var inst_32219 = inst_32206.push(inst_32210);
var tmp32263 = inst_32206;
var inst_32206__$1 = tmp32263;
var inst_32207 = inst_32214;
var state_32246__$1 = (function (){var statearr_32267 = state_32246;
(statearr_32267[(7)] = inst_32207);

(statearr_32267[(8)] = inst_32206__$1);

(statearr_32267[(14)] = inst_32219);

return statearr_32267;
})();
var statearr_32268_32294 = state_32246__$1;
(statearr_32268_32294[(2)] = null);

(statearr_32268_32294[(1)] = (2));


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
});})(c__29473__auto___32280,out))
;
return ((function (switch__29361__auto__,c__29473__auto___32280,out){
return (function() {
var cljs$core$async$state_machine__29362__auto__ = null;
var cljs$core$async$state_machine__29362__auto____0 = (function (){
var statearr_32272 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32272[(0)] = cljs$core$async$state_machine__29362__auto__);

(statearr_32272[(1)] = (1));

return statearr_32272;
});
var cljs$core$async$state_machine__29362__auto____1 = (function (state_32246){
while(true){
var ret_value__29363__auto__ = (function (){try{while(true){
var result__29364__auto__ = switch__29361__auto__.call(null,state_32246);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29364__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29364__auto__;
}
break;
}
}catch (e32273){if((e32273 instanceof Object)){
var ex__29365__auto__ = e32273;
var statearr_32274_32295 = state_32246;
(statearr_32274_32295[(5)] = ex__29365__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32246);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32273;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29363__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32296 = state_32246;
state_32246 = G__32296;
continue;
} else {
return ret_value__29363__auto__;
}
break;
}
});
cljs$core$async$state_machine__29362__auto__ = function(state_32246){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29362__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29362__auto____1.call(this,state_32246);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29362__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29362__auto____0;
cljs$core$async$state_machine__29362__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29362__auto____1;
return cljs$core$async$state_machine__29362__auto__;
})()
;})(switch__29361__auto__,c__29473__auto___32280,out))
})();
var state__29475__auto__ = (function (){var statearr_32275 = f__29474__auto__.call(null);
(statearr_32275[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29473__auto___32280);

return statearr_32275;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29475__auto__);
});})(c__29473__auto___32280,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map?rel=1496160782469