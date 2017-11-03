/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = h;
var i
var stack = []

function h(type, props) {
  var node
  var children = []

  for (i = arguments.length; i-- > 2; ) {
    stack.push(arguments[i])
  }

  while (stack.length) {
    if (Array.isArray((node = stack.pop()))) {
      for (i = node.length; i--; ) {
        stack.push(node[i])
      }
    } else if (node != null && node !== true && node !== false) {
      children.push(typeof node === "number" ? (node = node + "") : node)
    }
  }

  return typeof type === "string"
    ? { type: type, props: props || {}, children: children }
    : type(props || {}, children)
}


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _hyperapp = __webpack_require__(2);

(0, _hyperapp.app)({
  state: {
    count: 0
  },
  view: function view(state, actions) {
    return (0, _hyperapp.h)("main", {}, [(0, _hyperapp.h)("h1", {}, state.count), (0, _hyperapp.h)("button", {
      onclick: actions.down,
      disabled: state.count <= 0
    }, "–"), (0, _hyperapp.h)("button", {
      onclick: actions.up
    }, "+")]);
  },
  actions: {
    down: function down(state) {
      return { count: state.count - 1 };
    },
    up: function up(state) {
      return { count: state.count + 1 };
    }
  }
});

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__h__ = __webpack_require__(0);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return __WEBPACK_IMPORTED_MODULE_0__h__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app__ = __webpack_require__(3);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "app", function() { return __WEBPACK_IMPORTED_MODULE_1__app__["a"]; });




/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = app;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__h__ = __webpack_require__(0);


function app(props, container) {
  var root = (container = container || document.body).children[0]
  var node = toVNode(root, [].map)
  var callbacks = []
  var skipRender
  var globalState
  var globalActions

  repaint(flush(init(props, (globalState = {}), (globalActions = {}))))

  return globalActions

  function repaint() {
    if (props.view && !skipRender) {
      requestAnimationFrame(render, (skipRender = !skipRender))
    }
  }

  function render() {
    flush(
      (root = patchElement(
        container,
        root,
        node,
        (node = props.view(globalState, globalActions)),
        (skipRender = !skipRender)
      ))
    )
  }

  function flush(cb) {
    while ((cb = callbacks.pop())) cb()
  }

  function toVNode(element, map) {
    return (
      element &&
      Object(__WEBPACK_IMPORTED_MODULE_0__h__["a" /* h */])(
        element.tagName.toLowerCase(),
        {},
        map.call(element.childNodes, function(element) {
          return element.nodeType === 3
            ? element.nodeValue
            : toVNode(element, map)
        })
      )
    )
  }

  function init(module, state, actions) {
    if (module.init) {
      callbacks.push(function() {
        module.init(state, actions)
      })
    }

    assign(state, module.state)

    initActions(state, actions, module.actions)

    for (var i in module.modules) {
      init(module.modules[i], (state[i] = {}), (actions[i] = {}))
    }
  }

  function initActions(state, actions, source) {
    Object.keys(source || {}).map(function(i) {
      if (typeof source[i] === "function") {
        actions[i] = function(data) {
          return typeof (data = source[i](state, actions, data)) === "function"
            ? data(update)
            : update(data)
        }
      } else {
        initActions(state[i] || (state[i] = {}), (actions[i] = {}), source[i])
      }
    })

    function update(data) {
      return (
        typeof data === "function"
          ? update(data(state))
          : data && repaint(assign(state, data)),
        state
      )
    }
  }

  function assign(target, source) {
    for (var i in source) {
      target[i] = source[i]
    }
    return target
  }

  function merge(target, source) {
    return assign(assign({}, target), source)
  }

  function createElement(node, isSVG) {
    if (typeof node === "string") {
      var element = document.createTextNode(node)
    } else {
      var element = (isSVG = isSVG || node.type === "svg")
        ? document.createElementNS("http://www.w3.org/2000/svg", node.type)
        : document.createElement(node.type)

      if (node.props && node.props.oncreate) {
        callbacks.push(function() {
          node.props.oncreate(element)
        })
      }

      for (var i = 0; i < node.children.length; i++) {
        element.appendChild(createElement(node.children[i], isSVG))
      }

      for (var i in node.props) {
        setElementProp(element, i, node.props[i])
      }
    }
    return element
  }

  function setElementProp(element, name, value, oldValue) {
    if (name === "key") {
    } else if (name === "style") {
      for (var name in merge(oldValue, (value = value || {}))) {
        element.style[name] = value[name] || ""
      }
    } else {
      try {
        element[name] = value
      } catch (_) {}

      if (typeof value !== "function") {
        if (value) {
          element.setAttribute(name, value)
        } else {
          element.removeAttribute(name)
        }
      }
    }
  }

  function updateElement(element, oldProps, props) {
    for (var i in merge(oldProps, props)) {
      var value = props[i]
      var oldValue = i === "value" || i === "checked" ? element[i] : oldProps[i]

      if (value !== oldValue) {
        value !== oldValue && setElementProp(element, i, value, oldValue)
      }
    }

    if (props && props.onupdate) {
      callbacks.push(function() {
        props.onupdate(element, oldProps)
      })
    }
  }

  function removeElement(parent, element, props) {
    if (
      props &&
      props.onremove &&
      typeof (props = props.onremove(element)) === "function"
    ) {
      props(remove)
    } else {
      remove()
    }

    function remove() {
      parent.removeChild(element)
    }
  }

  function getKey(node) {
    if (node && node.props) {
      return node.props.key
    }
  }

  function patchElement(parent, element, oldNode, node, isSVG, nextSibling) {
    if (oldNode == null) {
      element = parent.insertBefore(createElement(node, isSVG), element)
    } else if (node.type != null && node.type === oldNode.type) {
      updateElement(element, oldNode.props, node.props)

      isSVG = isSVG || node.type === "svg"

      var len = node.children.length
      var oldLen = oldNode.children.length
      var oldKeyed = {}
      var oldElements = []
      var keyed = {}

      for (var i = 0; i < oldLen; i++) {
        var oldElement = (oldElements[i] = element.childNodes[i])
        var oldChild = oldNode.children[i]
        var oldKey = getKey(oldChild)

        if (null != oldKey) {
          oldKeyed[oldKey] = [oldElement, oldChild]
        }
      }

      var i = 0
      var j = 0

      while (j < len) {
        var oldElement = oldElements[i]
        var oldChild = oldNode.children[i]
        var newChild = node.children[j]

        var oldKey = getKey(oldChild)
        if (keyed[oldKey]) {
          i++
          continue
        }

        var newKey = getKey(newChild)

        var keyedNode = oldKeyed[newKey] || []

        if (null == newKey) {
          if (null == oldKey) {
            patchElement(element, oldElement, oldChild, newChild, isSVG)
            j++
          }
          i++
        } else {
          if (oldKey === newKey) {
            patchElement(element, keyedNode[0], keyedNode[1], newChild, isSVG)
            i++
          } else if (keyedNode[0]) {
            element.insertBefore(keyedNode[0], oldElement)
            patchElement(element, keyedNode[0], keyedNode[1], newChild, isSVG)
          } else {
            patchElement(element, oldElement, null, newChild, isSVG)
          }

          j++
          keyed[newKey] = newChild
        }
      }

      while (i < oldLen) {
        var oldChild = oldNode.children[i]
        var oldKey = getKey(oldChild)
        if (null == oldKey) {
          removeElement(element, oldElements[i], oldChild.props)
        }
        i++
      }

      for (var i in oldKeyed) {
        var keyedNode = oldKeyed[i]
        var reusableNode = keyedNode[1]
        if (!keyed[reusableNode.props.key]) {
          removeElement(element, keyedNode[0], reusableNode.props)
        }
      }
    } else if (element && node !== element.nodeValue) {
      if (typeof node === "string" && typeof oldNode === "string") {
        element.nodeValue = node
      } else {
        element = parent.insertBefore(
          createElement(node, isSVG),
          (nextSibling = element)
        )
        removeElement(parent, nextSibling, oldNode.props)
      }
    }
    return element
  }
}


/***/ })
/******/ ]);