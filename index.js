;
(function () {
    'use strict';
    var __ = {util: "placeholder"};
    var base = {

        curry:function curry(fn) {
            var  oThis= this;
            return oThis._curryN(fn.length, fn);
        },
        map: function(){
            var oThis = this;
            this.curry(oThis._map);
        },
        _map: function(){
            var len = functor.length,
                result = Array(len);
            for (var i = 0; i < len; i++) {
                result[i] = fn(functor[i]);
            }
            return result;
        },
        /* 对象转数组
         * {}->[]
         */
        toArray: function _toArray(o) {
            var a = [];
            for (var i = 0; i < o.length; i++)a.push(o[i]);
            return a;
        },
        _curryN: function(length, fn) {
            var oThis = this;
            return oThis.arity(length, function () {
                var n = arguments.length;
                var shortfall = length - n;
                var idx = n;
                while (--idx >= 0) {
                    if (arguments[idx] === __) {
                        shortfall += 1;
                    }
                }
                if (shortfall <= 0) {
                    return fn.apply(this, arguments);
                } else {
                    var initialArgs = oThis.toArray(arguments);
                    return oThis._curryN(shortfall, function () {
                        var currentArgs = oThis.toArray(arguments);
                        var combinedArgs = [];
                        var idx = -1;
                        while (++idx < n) {
                            var val = initialArgs[idx];
                            combinedArgs[idx] = (val === __ ? currentArgs.shift() : val);
                        }
                        return fn.apply(this, combinedArgs.concat(currentArgs));
                    });
                }
            })
        },

        //改变function的length
        arity: function arity(n, fn) {
            switch (n) {
                case 0:
                    return function () {
                        return fn.apply(this, arguments);
                    };
                case 1:
                    return function (a0) {
                        void a0;
                        return fn.apply(this, arguments);
                    };
                case 2:
                    return function (a0, a1) {
                        void a1;
                        return fn.apply(this, arguments);
                    };
                case 3:
                    return function (a0, a1, a2) {
                        void a2;
                        return fn.apply(this, arguments);
                    };
                case 4:
                    return function (a0, a1, a2, a3) {
                        void a3;
                        return fn.apply(this, arguments);
                    };
                case 5:
                    return function (a0, a1, a2, a3, a4) {
                        void a4;
                        return fn.apply(this, arguments);
                    };
                case 6:
                    return function (a0, a1, a2, a3, a4, a5) {
                        void a5;
                        return fn.apply(this, arguments);
                    };
                case 7:
                    return function (a0, a1, a2, a3, a4, a5, a6) {
                        void a6;
                        return fn.apply(this, arguments);
                    };
                case 8:
                    return function (a0, a1, a2, a3, a4, a5, a6, a7) {
                        void a7;
                        return fn.apply(this, arguments);
                    };
                case 9:
                    return function (a0, a1, a2, a3, a4, a5, a6, a7, a8) {
                        void a8;
                        return fn.apply(this, arguments);
                    };
                case 10:
                    return function (a0, a1, a2, a3, a4, a5, a6, a7, a8, a9) {
                        void a9;
                        return fn.apply(this, arguments);
                    };
                default:
                    throw new Error('First argument to arity must be a non-negative integer no greater than ten');
            }
        }
        }


    /**
     *
     * @type {{}}
     */
    var R = {
        map: base.map
        ,curry: base.curry
        ,toArray: base.toArray
    };
    /**
     * 外部暴露接口
     */
    if (typeof exports === 'object') {
        module.exports = R;
    } else if (typeof define === 'function' && define.amd) {
        define(function () {
            return R;
        });
    } else {
        this.R = R;
    }
}.call(this));
