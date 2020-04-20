// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"muto/kigui.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
window.addEventListener("DOMContentLoaded", function () {
  if (kigui.layout.header.msg.close.getElement() !== null) {
    kigui.layout.header.msg.close.getElement().addEventListener("click", function () {
      kigui.layout.header.msg.hide();
    });
  }

  var b = document.querySelectorAll(".kigui-o-f_f");

  if (b !== null) {
    var a;

    for (a = 0; a < b.length; a++) {
      b[a].onclick = function () {
        this.classList.toggle("kigui-o-f_h");
      };
    }
  }
});
var kigui = {
  layout: {
    body: {
      element: null,
      getElement: function getElement() {
        if (this.element === null) {
          this.element = document.querySelector(".kigui-l-b");
        }

        return this.element;
      },
      enableScroll: function enableScroll() {
        kigui.layout.body.getElement().classList.remove("kigui-l-b_h");
      },
      disableScroll: function disableScroll() {
        kigui.layout.body.getElement().classList.add("kigui-l-b_h");
      }
    },
    header: {
      msg: {
        text: {
          element: null,
          getElement: function getElement() {
            if (this.element === null) {
              this.element = document.querySelector(".kigui-l-h-m-t");
            }

            return this.element;
          },
          setText: function setText(b) {
            var a = kigui.layout.header.msg.text.getElement();

            if (a !== null) {
              a.innerText = b;
            }
          }
        },
        close: {
          element: null,
          getElement: function getElement() {
            if (this.element === null) {
              this.element = document.querySelector(".kigui-l-h-m-c");
            }

            return this.element;
          }
        },
        code: "",
        element: null,
        getElement: function getElement() {
          if (this.element === null) {
            this.element = document.querySelector(".kigui-l-h-m");
          }

          return this.element;
        },
        show: function show() {
          var a = this.getElement();

          if (a !== null) {
            a.classList.add("kigui-l-h-m_o");
          }

          if (kigui.layout.header.getElement().classList.contains("kigui-l-h_f")) {
            kigui.layout.others.msg.getElement().classList.add("kigui-l-h-m_o");
          }
        },
        hide: function hide() {
          var a = this.getElement();

          if (a !== null) {
            a.classList.remove("kigui-l-h-m_o");
          }

          if (kigui.layout.header.getElement().classList.contains("kigui-l-h_f")) {
            kigui.layout.others.msg.getElement().classList.remove("kigui-l-h-m_o");
          }

          if (typeof Storage !== "undefined") {
            localStorage.setItem("msgCode", kigui.layout.header.msg.code);
          }
        },
        toggle: function toggle() {
          var a = this.getElement();

          if (a !== null) {
            a.classList.toggle("kigui-l-h-m_o");
          }
        },
        setCode: function setCode(a) {
          this.code = a;
        },
        getCode: function getCode() {
          return this.code;
        },
        loadCode: function loadCode() {
          return localStorage.getItem("msgCode");
        },
        isNewMsg: function isNewMsg() {
          return this.getCode() !== this.loadCode();
        },
        setEvent: function setEvent(c, b, a) {
          this.text.setText(c);
          this.setCode(b);

          if (a === true) {
            window.addEventListener("load", function () {
              if (kigui.layout.header.msg.isNewMsg()) {
                kigui.layout.header.msg.show();
              }
            });
          } else {
            window.addEventListener("load", function () {
              kigui.layout.header.msg.show();
            });
          }
        }
      },
      element: null,
      getElement: function getElement() {
        if (this.element === null) {
          this.element = document.querySelector(".kigui-l-h");
        }

        return this.element;
      },
      setShadow: function setShadow(a) {
        a ? this.getElement().classList.add("kigui-l-h_s") : this.getElement().classList.remove("kigui-l-h_s");
      },
      setFixed: function setFixed(a) {
        a ? this.getElement().classList.add("kigui-l-h_f") : this.getElement().classList.remove("kigui-l-h_f");
      }
    },
    sidemenu: {
      element: null,
      getElement: function getElement() {
        if (this.element === null) {
          this.element = document.querySelector(".kigui-l-s");
        }

        return this.element;
      },
      show: function show() {
        this.getElement().classList.add("kigui-l-s_o");
      },
      hide: function hide() {
        this.getElement().classList.remove("kigui-l-s_o");
      },
      eventMenuOpen: function eventMenuOpen() {
        kigui.layout.sidemenu.show();
        kigui.layout.body.disableScroll();
        kigui.layout.others.pageCover.show();
      },
      eventMenuClose: function eventMenuClose() {
        kigui.layout.sidemenu.hide();
        kigui.layout.body.enableScroll();
        kigui.layout.others.pageCover.hide();
      }
    },
    contents: {
      element: null,
      getElement: function getElement() {
        if (this.element === null) {
          this.element = document.querySelector(".kigui-l-c");
        }

        return this.element;
      }
    },
    others: {
      msg: {
        element: null,
        getElement: function getElement() {
          if (this.element === null) {
            this.element = document.querySelector(".kigui-l-o-m");
          }

          return this.element;
        }
      },
      pageCover: {
        element: null,
        getElement: function getElement() {
          if (this.element === null) {
            this.element = document.querySelector(".kigui-l-o-p");
          }

          return this.element;
        },
        show: function show() {
          if (this.getElement() !== null) {
            this.getElement().classList.add("kigui-l-o-p_o");
          }
        },
        hide: function hide() {
          if (this.getElement() !== null) {
            this.getElement().classList.remove("kigui-l-o-p_o");
          }
        }
      }
    }
  }
};
var _default = kigui;
exports.default = _default;
},{}],"muto/script.js":[function(require,module,exports) {
"use strict";

var _kigui = _interopRequireDefault(require("./kigui"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var swOpenMode;
var isWebView = getUrlVars().mode === "webview" ? true : false;
window.addEventListener("DOMContentLoaded", function () {
  if (isWebView) {
    setWebViewMode();
  } else {
    setNormalMode();
  }

  swOpenMode = document.getElementById("swOpenMode");
  loadSettings();
  var abc = document.querySelectorAll(".abc > .kigui-o-f");
  var i;

  for (i = 0; i < abc.length; i++) {
    abc[i].addEventListener("click", openRecipeEvent);
  }

  document.getElementById("btnMenu").addEventListener("click", _kigui.default.layout.sidemenu.eventMenuOpen);
  document.getElementById("btnBack").addEventListener("click", btnBackEvent); //뒤로 가기 버튼 이벤트

  document.getElementById("btnInfo").addEventListener("click", function () {
    closePagesAll();
    openInfo();

    _kigui.default.layout.sidemenu.eventMenuClose();
  });

  var pageCover = _kigui.default.layout.others.pageCover.getElement();

  pageCover.addEventListener("click", _kigui.default.layout.sidemenu.eventMenuClose);
  pageCover.addEventListener("mousewheel", _kigui.default.layout.sidemenu.eventMenuClose);
  pageCover.addEventListener("touchmove", _kigui.default.layout.sidemenu.eventMenuClose);
  /*오픈 모드*/

  swOpenMode.addEventListener("change", refleshOpenMode);
  closePagesAll();
  openAbc();
});

function openRecipeEvent() {
  if (swOpenMode.checked === false) this.classList.toggle("show");
}

function refleshOpenMode() {
  var abc = document.querySelector(".abc");

  if (swOpenMode.checked == true) {
    abc.classList.add("open_mode");
  } else {
    abc.classList.remove("open_mode");
  } //설정 저장


  if (typeof Storage !== "undefined") {
    localStorage.setItem("openMode", swOpenMode.checked.toString());
  }
}

function loadSettings() {
  if (typeof Storage !== "undefined") {
    var openMode = localStorage.getItem("openMode");

    if (openMode !== null) {
      swOpenMode.checked = openMode === "true";
      refleshOpenMode();
    }
  }
}

function setWebViewMode() {
  var adElem = document.getElementById("ad");
  adElem.parentNode.removeChild(adElem);
  document.getElementById("btnAndroidApp").style.display = "none";
}

function setNormalMode() {
  var adScript = document.createElement("script");
  adScript.async = true;
  adScript.src = "//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js";
  document.getElementsByTagName("head")[0].appendChild(adScript);
}

function getUrlVars() {
  var vars = [],
      hash;
  var hashes = window.location.href.slice(window.location.href.indexOf("?") + 1).split("&");

  for (var i = 0; i < hashes.length; i++) {
    hash = hashes[i].split("=");
    vars.push(hash[0]);
    vars[hash[0]] = hash[1];
  }

  return vars;
}

function closePagesAll() {
  _kigui.default.layout.contents.getElement().classList.remove("o-abc");

  _kigui.default.layout.contents.getElement().classList.remove("o-info");
}
/**
 *  제작자 설명 부분 읽는 곳
 */


function openInfo() {
  _kigui.default.layout.contents.getElement().classList.add("o-info");

  document.getElementById("btnBack").style.display = "block";
  document.getElementById("btnMenu").style.display = "none";
}
/**
 * 무토 메인 여는 것
 */


function openAbc() {
  _kigui.default.layout.contents.getElement().classList.add("o-abc");

  document.getElementById("btnBack").style.display = "none";
  document.getElementById("btnMenu").style.display = "block";
}

function btnBackEvent() {
  closePagesAll();
  openAbc();
}
},{"./kigui":"muto/kigui.js"}],"node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "13289" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["node_modules/parcel-bundler/src/builtins/hmr-runtime.js","muto/script.js"], null)
//# sourceMappingURL=/script.9a7b2d42.js.map