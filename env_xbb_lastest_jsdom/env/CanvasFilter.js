// CanvasFilter对象

bodavm.memory.globalobj['CanvasFilter'] = function CanvasFilter() {
  console.log_copy('CanvasFilter 实例化对象参数为 ->', JSON.stringify_bo(arguments, function (k, v) {
    if (v == window) {
      return 'window';
    } else {
      return v;
    }
  }));
  if (!(this instanceof CanvasFilter)) {
    return bodavm.toolsFunc.throwError("TypeError", "Failed to construct 'CanvasFilter': 1 argument required, but only 0 present.");
  }
  ;
  this._boisinit = bodavm.config.isinit;
};
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['CanvasFilter'], "CanvasFilter");