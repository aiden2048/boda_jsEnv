// Notification对象

bodavm.memory.globalobj['Notification'] = function Notification() {
  console.log_copy('Notification 实例化对象参数为 ->', JSON.stringify_bo(arguments, function (k, v) {
    if (v == window) {
      return 'window';
    } else {
      return v;
    }
  }));
  if (!(this instanceof Notification)) {
    return bodavm.toolsFunc.throwError("TypeError", "Failed to construct 'Notification': 1 argument required, but only 0 present.");
  }
  ;
  this._boisinit = bodavm.config.isinit;
};
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['Notification'], "Notification");
bodavm.memory.globalobj['Notification'].prototype.__proto__ = bodavm.memory.globalobj['EventTarget'].prototype;
bodavm.memory.globalobj['Notification'].__proto__ = bodavm.memory.globalobj['EventTarget'];
bodavm.toolsFunc.defineProperty('Notification', "permission", {
  configurable: true,
  enumerable: true,
  get: function permission() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Notification'].undefined, "Notification", "permission_get", arguments, 'default');
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty('Notification', "maxActions", {
  configurable: true,
  enumerable: true,
  get: function maxActions() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Notification'].undefined, "Notification", "maxActions_get", arguments, 2);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty('Notification', "requestPermission", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function requestPermission() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Notification'].undefined, "Notification", "requestPermission", arguments);
  }
});
bodavm.toolsFunc.defineProperty('Notification', "onclick", {
  configurable: true,
  enumerable: true,
  get: function onclick() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Notification'].prototype, "Notification", "onclick_get", arguments);
  },
  set: function onclick() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Notification'].prototype, "Notification", "onclick_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('Notification', "onshow", {
  configurable: true,
  enumerable: true,
  get: function onshow() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Notification'].prototype, "Notification", "onshow_get", arguments);
  },
  set: function onshow() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Notification'].prototype, "Notification", "onshow_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('Notification', "onerror", {
  configurable: true,
  enumerable: true,
  get: function onerror() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Notification'].prototype, "Notification", "onerror_get", arguments);
  },
  set: function onerror() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Notification'].prototype, "Notification", "onerror_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('Notification', "onclose", {
  configurable: true,
  enumerable: true,
  get: function onclose() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Notification'].prototype, "Notification", "onclose_get", arguments);
  },
  set: function onclose() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Notification'].prototype, "Notification", "onclose_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('Notification', "title", {
  configurable: true,
  enumerable: true,
  get: function title() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Notification'].prototype, "Notification", "title_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('Notification', "dir", {
  configurable: true,
  enumerable: true,
  get: function dir() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Notification'].prototype, "Notification", "dir_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('Notification', "lang", {
  configurable: true,
  enumerable: true,
  get: function lang() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Notification'].prototype, "Notification", "lang_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('Notification', "body", {
  configurable: true,
  enumerable: true,
  get: function body() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Notification'].prototype, "Notification", "body_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('Notification', "tag", {
  configurable: true,
  enumerable: true,
  get: function tag() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Notification'].prototype, "Notification", "tag_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('Notification', "icon", {
  configurable: true,
  enumerable: true,
  get: function icon() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Notification'].prototype, "Notification", "icon_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('Notification', "badge", {
  configurable: true,
  enumerable: true,
  get: function badge() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Notification'].prototype, "Notification", "badge_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('Notification', "vibrate", {
  configurable: true,
  enumerable: true,
  get: function vibrate() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Notification'].prototype, "Notification", "vibrate_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('Notification', "timestamp", {
  configurable: true,
  enumerable: true,
  get: function timestamp() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Notification'].prototype, "Notification", "timestamp_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('Notification', "renotify", {
  configurable: true,
  enumerable: true,
  get: function renotify() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Notification'].prototype, "Notification", "renotify_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('Notification', "silent", {
  configurable: true,
  enumerable: true,
  get: function silent() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Notification'].prototype, "Notification", "silent_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('Notification', "requireInteraction", {
  configurable: true,
  enumerable: true,
  get: function requireInteraction() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Notification'].prototype, "Notification", "requireInteraction_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('Notification', "data", {
  configurable: true,
  enumerable: true,
  get: function data() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Notification'].prototype, "Notification", "data_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('Notification', "actions", {
  configurable: true,
  enumerable: true,
  get: function actions() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Notification'].prototype, "Notification", "actions_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('Notification', "close", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function close() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Notification'].prototype, "Notification", "close", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('Notification', "image", {
  configurable: true,
  enumerable: true,
  get: function image() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Notification'].prototype, "Notification", "image_get", arguments);
  },
  set: undefined
}, 'prototype');