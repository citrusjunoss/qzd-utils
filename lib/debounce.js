"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
exports.throttle = exports.debounce = void 0;
var root_1 = __importDefault(require("./utils/root"));
var validate_1 = require("./validate");
function debounce(func, wait, option) {
    var lastArgs, lastThis, maxWait, result, timerId, lastCallTime;
    var lastInvokeTime = 0;
    var leading = false;
    var maxing = false;
    var trailing = true;
    var options = __assign({ leading: false, maxWait: 0, trailing: true }, { option: option });
    // Bypass `requestAnimationFrame` by explicitly setting `wait=0`.
    var useRAF = !wait && wait !== 0 && typeof root_1["default"].requestAnimationFrame === 'function';
    if (typeof func !== 'function') {
        throw new TypeError('Expected a function');
    }
    wait = +wait || 0;
    if (validate_1.isObject(options) && options) {
        leading = !!options.leading;
        maxing = 'maxWait' in options;
        maxWait = maxing ? Math.max(+options.maxWait || 0, wait) : 0;
        trailing = 'trailing' in options ? !!options.trailing : trailing;
    }
    function invokeFunc(time) {
        var args = lastArgs;
        var thisArg = lastThis;
        lastArgs = lastThis = undefined;
        lastInvokeTime = time;
        result = func.apply(thisArg, args);
        return result;
    }
    function startTimer(pendingFunc, wait) {
        if (useRAF) {
            root_1["default"].cancelAnimationFrame(timerId);
            return root_1["default"].requestAnimationFrame(pendingFunc);
        }
        return setTimeout(pendingFunc, wait);
    }
    function cancelTimer(id) {
        if (useRAF) {
            return root_1["default"].cancelAnimationFrame(id);
        }
        clearTimeout(id);
    }
    function leadingEdge(time) {
        // Reset any `maxWait` timer.
        lastInvokeTime = time;
        // Start the timer for the trailing edge.
        timerId = startTimer(timerExpired, wait);
        // Invoke the leading edge.
        return leading ? invokeFunc(time) : result;
    }
    function remainingWait(time) {
        var timeSinceLastCall = time - (lastCallTime || 0);
        var timeSinceLastInvoke = time - lastInvokeTime;
        var timeWaiting = wait - timeSinceLastCall;
        return maxing
            ? Math.min(timeWaiting, maxWait - timeSinceLastInvoke)
            : timeWaiting;
    }
    function shouldInvoke(time) {
        var timeSinceLastCall = time - (lastCallTime || 0);
        var timeSinceLastInvoke = time - lastInvokeTime;
        // Either this is the first call, activity has stopped and we're at the
        // trailing edge, the system time has gone backwards and we're treating
        // it as the trailing edge, or we've hit the `maxWait` limit.
        return (lastCallTime === undefined ||
            timeSinceLastCall >= wait ||
            timeSinceLastCall < 0 ||
            (maxing && timeSinceLastInvoke >= maxWait));
    }
    function timerExpired() {
        var time = Date.now();
        if (shouldInvoke(time)) {
            return trailingEdge(time);
        }
        // Restart the timer.
        timerId = startTimer(timerExpired, remainingWait(time));
    }
    function trailingEdge(time) {
        timerId = undefined;
        // Only invoke if we have `lastArgs` which means `func` has been
        // debounced at least once.
        if (trailing && lastArgs) {
            return invokeFunc(time);
        }
        lastArgs = lastThis = undefined;
        return result;
    }
    function cancel() {
        if (timerId !== undefined) {
            cancelTimer(timerId);
        }
        lastInvokeTime = 0;
        lastArgs = lastCallTime = lastThis = timerId = undefined;
    }
    function flush() {
        return timerId === undefined ? result : trailingEdge(Date.now());
    }
    function pending() {
        return timerId !== undefined;
    }
    function debounced() {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var time = Date.now();
        var isInvoking = shouldInvoke(time);
        lastArgs = args;
        lastThis = this;
        lastCallTime = time;
        if (isInvoking) {
            if (timerId === undefined) {
                return leadingEdge(lastCallTime);
            }
            if (maxing) {
                // Handle invocations in a tight loop.
                timerId = startTimer(timerExpired, wait);
                return invokeFunc(lastCallTime);
            }
        }
        if (timerId === undefined) {
            timerId = startTimer(timerExpired, wait);
        }
        return result;
    }
    debounced.cancel = cancel;
    debounced.flush = flush;
    debounced.pending = pending;
    return debounced;
}
exports.debounce = debounce;
function throttle(func, wait, option) {
    var leading = true;
    var trailing = true;
    var options = option || { leading: true, trailing: true };
    if (typeof func !== 'function') {
        throw new TypeError('Expected a function');
    }
    if (validate_1.isObject(options)) {
        leading = 'leading' in options ? !!options.leading : leading;
        trailing = 'trailing' in options ? !!options.trailing : trailing;
    }
    return debounce(func, wait, {
        leading: leading,
        trailing: trailing,
        maxWait: wait
    });
}
exports.throttle = throttle;
