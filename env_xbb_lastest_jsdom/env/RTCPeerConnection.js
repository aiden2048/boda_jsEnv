// RTCPeerConnection对象

bodavm.memory.globalobj['RTCPeerConnection'] = function RTCPeerConnection() {
  console.log_copy('RTCPeerConnection 实例化对象参数为 ->', JSON.stringify_bo(arguments, function (k, v) {
    if (v == window) {
      return 'window';
    } else {
      return v;
    }
  }));
  this._boarg = new bodaobj.window.RTCPeerConnection();
  this._boisinit = bodavm.config.isinit;
};
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['RTCPeerConnection'], "RTCPeerConnection");
bodavm.memory.globalobj['RTCPeerConnection'].prototype.__proto__ = bodavm.memory.globalobj['EventTarget'].prototype;
bodavm.memory.globalobj['RTCPeerConnection'].__proto__ = bodavm.memory.globalobj['EventTarget'];
bodavm.toolsFunc.defineProperty('RTCPeerConnection', "generateCertificate", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function generateCertificate() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['RTCPeerConnection'].undefined, "RTCPeerConnection", "generateCertificate", arguments);
  }
});
bodavm.toolsFunc.defineProperty('RTCPeerConnection', "localDescription", {
  configurable: true,
  enumerable: true,
  get: function localDescription() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['RTCPeerConnection'].prototype, "RTCPeerConnection", "localDescription_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('RTCPeerConnection', "currentLocalDescription", {
  configurable: true,
  enumerable: true,
  get: function currentLocalDescription() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['RTCPeerConnection'].prototype, "RTCPeerConnection", "currentLocalDescription_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('RTCPeerConnection', "pendingLocalDescription", {
  configurable: true,
  enumerable: true,
  get: function pendingLocalDescription() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['RTCPeerConnection'].prototype, "RTCPeerConnection", "pendingLocalDescription_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('RTCPeerConnection', "remoteDescription", {
  configurable: true,
  enumerable: true,
  get: function remoteDescription() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['RTCPeerConnection'].prototype, "RTCPeerConnection", "remoteDescription_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('RTCPeerConnection', "currentRemoteDescription", {
  configurable: true,
  enumerable: true,
  get: function currentRemoteDescription() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['RTCPeerConnection'].prototype, "RTCPeerConnection", "currentRemoteDescription_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('RTCPeerConnection', "pendingRemoteDescription", {
  configurable: true,
  enumerable: true,
  get: function pendingRemoteDescription() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['RTCPeerConnection'].prototype, "RTCPeerConnection", "pendingRemoteDescription_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('RTCPeerConnection', "signalingState", {
  configurable: true,
  enumerable: true,
  get: function signalingState() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['RTCPeerConnection'].prototype, "RTCPeerConnection", "signalingState_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('RTCPeerConnection', "iceGatheringState", {
  configurable: true,
  enumerable: true,
  get: function iceGatheringState() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['RTCPeerConnection'].prototype, "RTCPeerConnection", "iceGatheringState_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('RTCPeerConnection', "iceConnectionState", {
  configurable: true,
  enumerable: true,
  get: function iceConnectionState() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['RTCPeerConnection'].prototype, "RTCPeerConnection", "iceConnectionState_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('RTCPeerConnection', "connectionState", {
  configurable: true,
  enumerable: true,
  get: function connectionState() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['RTCPeerConnection'].prototype, "RTCPeerConnection", "connectionState_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('RTCPeerConnection', "canTrickleIceCandidates", {
  configurable: true,
  enumerable: true,
  get: function canTrickleIceCandidates() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['RTCPeerConnection'].prototype, "RTCPeerConnection", "canTrickleIceCandidates_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('RTCPeerConnection', "onnegotiationneeded", {
  configurable: true,
  enumerable: true,
  get: function onnegotiationneeded() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['RTCPeerConnection'].prototype, "RTCPeerConnection", "onnegotiationneeded_get", arguments);
  },
  set: function onnegotiationneeded() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['RTCPeerConnection'].prototype, "RTCPeerConnection", "onnegotiationneeded_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('RTCPeerConnection', "onicecandidate", {
  configurable: true,
  enumerable: true,
  get: function onicecandidate() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['RTCPeerConnection'].prototype, "RTCPeerConnection", "onicecandidate_get", arguments);
  },
  set: function onicecandidate() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['RTCPeerConnection'].prototype, "RTCPeerConnection", "onicecandidate_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('RTCPeerConnection', "onsignalingstatechange", {
  configurable: true,
  enumerable: true,
  get: function onsignalingstatechange() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['RTCPeerConnection'].prototype, "RTCPeerConnection", "onsignalingstatechange_get", arguments);
  },
  set: function onsignalingstatechange() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['RTCPeerConnection'].prototype, "RTCPeerConnection", "onsignalingstatechange_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('RTCPeerConnection', "oniceconnectionstatechange", {
  configurable: true,
  enumerable: true,
  get: function oniceconnectionstatechange() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['RTCPeerConnection'].prototype, "RTCPeerConnection", "oniceconnectionstatechange_get", arguments);
  },
  set: function oniceconnectionstatechange() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['RTCPeerConnection'].prototype, "RTCPeerConnection", "oniceconnectionstatechange_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('RTCPeerConnection', "onconnectionstatechange", {
  configurable: true,
  enumerable: true,
  get: function onconnectionstatechange() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['RTCPeerConnection'].prototype, "RTCPeerConnection", "onconnectionstatechange_get", arguments);
  },
  set: function onconnectionstatechange() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['RTCPeerConnection'].prototype, "RTCPeerConnection", "onconnectionstatechange_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('RTCPeerConnection', "onicegatheringstatechange", {
  configurable: true,
  enumerable: true,
  get: function onicegatheringstatechange() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['RTCPeerConnection'].prototype, "RTCPeerConnection", "onicegatheringstatechange_get", arguments);
  },
  set: function onicegatheringstatechange() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['RTCPeerConnection'].prototype, "RTCPeerConnection", "onicegatheringstatechange_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('RTCPeerConnection', "onicecandidateerror", {
  configurable: true,
  enumerable: true,
  get: function onicecandidateerror() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['RTCPeerConnection'].prototype, "RTCPeerConnection", "onicecandidateerror_get", arguments);
  },
  set: function onicecandidateerror() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['RTCPeerConnection'].prototype, "RTCPeerConnection", "onicecandidateerror_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('RTCPeerConnection', "ontrack", {
  configurable: true,
  enumerable: true,
  get: function ontrack() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['RTCPeerConnection'].prototype, "RTCPeerConnection", "ontrack_get", arguments);
  },
  set: function ontrack() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['RTCPeerConnection'].prototype, "RTCPeerConnection", "ontrack_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('RTCPeerConnection', "sctp", {
  configurable: true,
  enumerable: true,
  get: function sctp() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['RTCPeerConnection'].prototype, "RTCPeerConnection", "sctp_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('RTCPeerConnection', "ondatachannel", {
  configurable: true,
  enumerable: true,
  get: function ondatachannel() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['RTCPeerConnection'].prototype, "RTCPeerConnection", "ondatachannel_get", arguments);
  },
  set: function ondatachannel() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['RTCPeerConnection'].prototype, "RTCPeerConnection", "ondatachannel_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('RTCPeerConnection', "onaddstream", {
  configurable: true,
  enumerable: true,
  get: function onaddstream() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['RTCPeerConnection'].prototype, "RTCPeerConnection", "onaddstream_get", arguments);
  },
  set: function onaddstream() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['RTCPeerConnection'].prototype, "RTCPeerConnection", "onaddstream_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('RTCPeerConnection', "onremovestream", {
  configurable: true,
  enumerable: true,
  get: function onremovestream() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['RTCPeerConnection'].prototype, "RTCPeerConnection", "onremovestream_get", arguments);
  },
  set: function onremovestream() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['RTCPeerConnection'].prototype, "RTCPeerConnection", "onremovestream_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('RTCPeerConnection', "addIceCandidate", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function addIceCandidate() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['RTCPeerConnection'].prototype, "RTCPeerConnection", "addIceCandidate", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('RTCPeerConnection', "addStream", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function addStream() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['RTCPeerConnection'].prototype, "RTCPeerConnection", "addStream", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('RTCPeerConnection', "addTrack", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function addTrack() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['RTCPeerConnection'].prototype, "RTCPeerConnection", "addTrack", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('RTCPeerConnection', "addTransceiver", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function addTransceiver() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['RTCPeerConnection'].prototype, "RTCPeerConnection", "addTransceiver", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('RTCPeerConnection', "close", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function close() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['RTCPeerConnection'].prototype, "RTCPeerConnection", "close", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('RTCPeerConnection', "createAnswer", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function createAnswer() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['RTCPeerConnection'].prototype, "RTCPeerConnection", "createAnswer", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('RTCPeerConnection', "createDTMFSender", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function createDTMFSender() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['RTCPeerConnection'].prototype, "RTCPeerConnection", "createDTMFSender", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('RTCPeerConnection', "createDataChannel", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function createDataChannel() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['RTCPeerConnection'].prototype, "RTCPeerConnection", "createDataChannel", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('RTCPeerConnection', "createOffer", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function createOffer() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['RTCPeerConnection'].prototype, "RTCPeerConnection", "createOffer", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('RTCPeerConnection', "getConfiguration", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function getConfiguration() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['RTCPeerConnection'].prototype, "RTCPeerConnection", "getConfiguration", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('RTCPeerConnection', "getLocalStreams", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function getLocalStreams() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['RTCPeerConnection'].prototype, "RTCPeerConnection", "getLocalStreams", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('RTCPeerConnection', "getReceivers", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function getReceivers() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['RTCPeerConnection'].prototype, "RTCPeerConnection", "getReceivers", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('RTCPeerConnection', "getRemoteStreams", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function getRemoteStreams() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['RTCPeerConnection'].prototype, "RTCPeerConnection", "getRemoteStreams", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('RTCPeerConnection', "getSenders", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function getSenders() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['RTCPeerConnection'].prototype, "RTCPeerConnection", "getSenders", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('RTCPeerConnection', "getStats", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function getStats() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['RTCPeerConnection'].prototype, "RTCPeerConnection", "getStats", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('RTCPeerConnection', "getTransceivers", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function getTransceivers() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['RTCPeerConnection'].prototype, "RTCPeerConnection", "getTransceivers", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('RTCPeerConnection', "removeStream", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function removeStream() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['RTCPeerConnection'].prototype, "RTCPeerConnection", "removeStream", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('RTCPeerConnection', "removeTrack", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function removeTrack() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['RTCPeerConnection'].prototype, "RTCPeerConnection", "removeTrack", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('RTCPeerConnection', "restartIce", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function restartIce() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['RTCPeerConnection'].prototype, "RTCPeerConnection", "restartIce", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('RTCPeerConnection', "setConfiguration", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function setConfiguration() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['RTCPeerConnection'].prototype, "RTCPeerConnection", "setConfiguration", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('RTCPeerConnection', "setLocalDescription", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function setLocalDescription() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['RTCPeerConnection'].prototype, "RTCPeerConnection", "setLocalDescription", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('RTCPeerConnection', "setRemoteDescription", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function setRemoteDescription() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['RTCPeerConnection'].prototype, "RTCPeerConnection", "setRemoteDescription", arguments);
  }
}, 'prototype');