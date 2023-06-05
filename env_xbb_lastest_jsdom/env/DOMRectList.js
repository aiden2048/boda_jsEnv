// DOMRectList对象

bodavm.memory.globalobj['DOMRectList'] = function DOMRectList() {
  console.log_copy('DOMRectList 实例化对象参数为 ->', JSON.stringify_bo(arguments, function (k, v) {
    if (v == window) {
      return 'window';
    } else {
      return v;
    }
  }));
  if (!(this instanceof DOMRectList)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  this._boisinit = bodavm.config.isinit;
};
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['DOMRectList'], "DOMRectList");
bodavm.toolsFunc.defineProperty('DOMRectList', "length", {
  configurable: true,
  enumerable: true,
  get: function length() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['DOMRectList'].prototype, "DOMRectList", "length_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('DOMRectList', "item", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function item() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['DOMRectList'].prototype, "DOMRectList", "item", arguments);
  }
}, 'prototype');