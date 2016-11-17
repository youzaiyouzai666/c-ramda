;(function () {
  'use strict';
  var base = {
    /*
    * 实现 基本map
    * 基本思路是 简化了for循环 抽象出基本循环方法，使代码简洁
    *@example
    *
    *      var double = x => x * 2;
    *
    *      R.map(double, [1, 2, 3]); //=> [2, 4, 6]
    *
    *      R.map(double, {x: 1, y: 2, z: 3}); //=> {x: 2, y: 4, z: 6}
    * @symb R.map(f, [a, b]) = [f(a), f(b)]
    */
    map: function _map(fn, functor) {
      var len = functor.length,
          result = Array(len);
      for(var i=0;i<len;i++){
        result[i] = fn(functor[i]);
      }
      return result;
    }
  };

  /**
   *
   * @type {{}}
   */
  var R = {
    map: base.map
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
