// USBIsochronousOutTransferResult对象

bodavm.memory.globalobj['USBIsochronousOutTransferResult'] = function USBIsochronousOutTransferResult() {
  console.log_copy('USBIsochronousOutTransferResult 实例化对象参数为 ->', JSON.stringify_bo(arguments, function (k, v) {
    if (v == window) {
      return 'window';
    } else {
      return v;
    }
  }));
  if (!(this instanceof USBIsochronousOutTransferResult)) {
    return bodavm.toolsFunc.throwError("TypeError", "Failed to construct 'USBIsochronousOutTransferResult': 1 argument required, but only 0 present.");
  }
  ;
  this._boisinit = bodavm.config.isinit;
};
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['USBIsochronousOutTransferResult'], "USBIsochronousOutTransferResult");
bodavm.toolsFunc.defineProperty('USBIsochronousOutTransferResult', "packets", {
  configurable: true,
  enumerable: true,
  get: function packets() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['USBIsochronousOutTransferResult'].prototype, "USBIsochronousOutTransferResult", "packets_get", arguments);
  },
  set: undefined
}, 'prototype');