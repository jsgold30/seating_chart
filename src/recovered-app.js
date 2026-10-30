import { headTableGeometry } from '../shared/head-table.mjs';
import { createFeatures, guestInitials } from './features.jsx';
(function () {
  const R = document.createElement("link").relList;
  if (R && R.supports && R.supports("modulepreload")) return;
  for (const Q of document.querySelectorAll('link[rel="modulepreload"]')) o(Q);
  new MutationObserver((Q) => {
    for (const Z of Q)
      if (Z.type === "childList")
        for (const rt of Z.addedNodes)
          rt.tagName === "LINK" && rt.rel === "modulepreload" && o(rt);
  }).observe(document, { childList: !0, subtree: !0 });
  function z(Q) {
    const Z = {};
    return (
      Q.integrity && (Z.integrity = Q.integrity),
      Q.referrerPolicy && (Z.referrerPolicy = Q.referrerPolicy),
      Q.crossOrigin === "use-credentials"
        ? (Z.credentials = "include")
        : Q.crossOrigin === "anonymous"
          ? (Z.credentials = "omit")
          : (Z.credentials = "same-origin"),
      Z
    );
  }
  function o(Q) {
    if (Q.ep) return;
    Q.ep = !0;
    const Z = z(Q);
    fetch(Q.href, Z);
  }
})();
function By(S) {
  return S && S.__esModule && Object.prototype.hasOwnProperty.call(S, "default")
    ? S.default
    : S;
}
var Kf = { exports: {} },
  Hu = {};
var Nm;
function Gy() {
  if (Nm) return Hu;
  Nm = 1;
  var S = Symbol.for("react.transitional.element"),
    R = Symbol.for("react.fragment");
  function z(o, Q, Z) {
    var rt = null;
    if (
      (Z !== void 0 && (rt = "" + Z),
      Q.key !== void 0 && (rt = "" + Q.key),
      "key" in Q)
    ) {
      Z = {};
      for (var mt in Q) mt !== "key" && (Z[mt] = Q[mt]);
    } else Z = Q;
    return (
      (Q = Z.ref),
      { $$typeof: S, type: o, key: rt, ref: Q !== void 0 ? Q : null, props: Z }
    );
  }
  return ((Hu.Fragment = R), (Hu.jsx = z), (Hu.jsxs = z), Hu);
}
var _m;
function Ly() {
  return (_m || ((_m = 1), (Kf.exports = Gy())), Kf.exports);
}
var c = Ly(),
  kf = { exports: {} },
  wu = {},
  Jf = { exports: {} },
  $f = {};
var zm;
function Vy() {
  return (
    zm ||
      ((zm = 1),
      (function (S) {
        function R(O, B) {
          var d = O.length;
          O.push(B);
          t: for (; 0 < d;) {
            var C = (d - 1) >>> 1,
              k = O[C];
            if (0 < Q(k, B)) ((O[C] = B), (O[d] = k), (d = C));
            else break t;
          }
        }
        function z(O) {
          return O.length === 0 ? null : O[0];
        }
        function o(O) {
          if (O.length === 0) return null;
          var B = O[0],
            d = O.pop();
          if (d !== B) {
            O[0] = d;
            t: for (var C = 0, k = O.length, G = k >>> 1; C < G;) {
              var q = 2 * (C + 1) - 1,
                L = O[q],
                r = q + 1,
                j = O[r];
              if (0 > Q(L, d))
                r < k && 0 > Q(j, L)
                  ? ((O[C] = j), (O[r] = d), (C = r))
                  : ((O[C] = L), (O[q] = d), (C = q));
              else if (r < k && 0 > Q(j, d)) ((O[C] = j), (O[r] = d), (C = r));
              else break t;
            }
          }
          return B;
        }
        function Q(O, B) {
          var d = O.sortIndex - B.sortIndex;
          return d !== 0 ? d : O.id - B.id;
        }
        if (
          ((S.unstable_now = void 0),
          typeof performance == "object" &&
            typeof performance.now == "function")
        ) {
          var Z = performance;
          S.unstable_now = function () {
            return Z.now();
          };
        } else {
          var rt = Date,
            mt = rt.now();
          S.unstable_now = function () {
            return rt.now() - mt;
          };
        }
        var V = [],
          gt = [],
          X = 1,
          N = null,
          w = 3,
          dt = !1,
          ct = !1,
          st = !1,
          vt = !1,
          Ut = typeof setTimeout == "function" ? setTimeout : null,
          Ht = typeof clearTimeout == "function" ? clearTimeout : null,
          zt = typeof setImmediate < "u" ? setImmediate : null;
        function qt(O) {
          for (var B = z(gt); B !== null;) {
            if (B.callback === null) o(gt);
            else if (B.startTime <= O)
              (o(gt), (B.sortIndex = B.expirationTime), R(V, B));
            else break;
            B = z(gt);
          }
        }
        function te(O) {
          if (((st = !1), qt(O), !ct))
            if (z(V) !== null) ((ct = !0), Et || ((Et = !0), H()));
            else {
              var B = z(gt);
              B !== null && nt(te, B.startTime - O);
            }
        }
        var Et = !1,
          $ = -1,
          m = 5,
          y = -1;
        function x() {
          return vt ? !0 : !(S.unstable_now() - y < m);
        }
        function A() {
          if (((vt = !1), Et)) {
            var O = S.unstable_now();
            y = O;
            var B = !0;
            try {
              t: {
                ((ct = !1), st && ((st = !1), Ht($), ($ = -1)), (dt = !0));
                var d = w;
                try {
                  e: {
                    for (
                      qt(O), N = z(V);
                      N !== null && !(N.expirationTime > O && x());
                    ) {
                      var C = N.callback;
                      if (typeof C == "function") {
                        ((N.callback = null), (w = N.priorityLevel));
                        var k = C(N.expirationTime <= O);
                        if (((O = S.unstable_now()), typeof k == "function")) {
                          ((N.callback = k), qt(O), (B = !0));
                          break e;
                        }
                        (N === z(V) && o(V), qt(O));
                      } else o(V);
                      N = z(V);
                    }
                    if (N !== null) B = !0;
                    else {
                      var G = z(gt);
                      (G !== null && nt(te, G.startTime - O), (B = !1));
                    }
                  }
                  break t;
                } finally {
                  ((N = null), (w = d), (dt = !1));
                }
                B = void 0;
              }
            } finally {
              B ? H() : (Et = !1);
            }
          }
        }
        var H;
        if (typeof zt == "function")
          H = function () {
            zt(A);
          };
        else if (typeof MessageChannel < "u") {
          var ot = new MessageChannel(),
            Ct = ot.port2;
          ((ot.port1.onmessage = A),
            (H = function () {
              Ct.postMessage(null);
            }));
        } else
          H = function () {
            Ut(A, 0);
          };
        function nt(O, B) {
          $ = Ut(function () {
            O(S.unstable_now());
          }, B);
        }
        ((S.unstable_IdlePriority = 5),
          (S.unstable_ImmediatePriority = 1),
          (S.unstable_LowPriority = 4),
          (S.unstable_NormalPriority = 3),
          (S.unstable_Profiling = null),
          (S.unstable_UserBlockingPriority = 2),
          (S.unstable_cancelCallback = function (O) {
            O.callback = null;
          }),
          (S.unstable_forceFrameRate = function (O) {
            0 > O || 125 < O
              ? console.error(
                  "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported",
                )
              : (m = 0 < O ? Math.floor(1e3 / O) : 5);
          }),
          (S.unstable_getCurrentPriorityLevel = function () {
            return w;
          }),
          (S.unstable_next = function (O) {
            switch (w) {
              case 1:
              case 2:
              case 3:
                var B = 3;
                break;
              default:
                B = w;
            }
            var d = w;
            w = B;
            try {
              return O();
            } finally {
              w = d;
            }
          }),
          (S.unstable_requestPaint = function () {
            vt = !0;
          }),
          (S.unstable_runWithPriority = function (O, B) {
            switch (O) {
              case 1:
              case 2:
              case 3:
              case 4:
              case 5:
                break;
              default:
                O = 3;
            }
            var d = w;
            w = O;
            try {
              return B();
            } finally {
              w = d;
            }
          }),
          (S.unstable_scheduleCallback = function (O, B, d) {
            var C = S.unstable_now();
            switch (
              (typeof d == "object" && d !== null
                ? ((d = d.delay),
                  (d = typeof d == "number" && 0 < d ? C + d : C))
                : (d = C),
              O)
            ) {
              case 1:
                var k = -1;
                break;
              case 2:
                k = 250;
                break;
              case 5:
                k = 1073741823;
                break;
              case 4:
                k = 1e4;
                break;
              default:
                k = 5e3;
            }
            return (
              (k = d + k),
              (O = {
                id: X++,
                callback: B,
                priorityLevel: O,
                startTime: d,
                expirationTime: k,
                sortIndex: -1,
              }),
              d > C
                ? ((O.sortIndex = d),
                  R(gt, O),
                  z(V) === null &&
                    O === z(gt) &&
                    (st ? (Ht($), ($ = -1)) : (st = !0), nt(te, d - C)))
                : ((O.sortIndex = k),
                  R(V, O),
                  ct || dt || ((ct = !0), Et || ((Et = !0), H()))),
              O
            );
          }),
          (S.unstable_shouldYield = x),
          (S.unstable_wrapCallback = function (O) {
            var B = w;
            return function () {
              var d = w;
              w = B;
              try {
                return O.apply(this, arguments);
              } finally {
                w = d;
              }
            };
          }));
      })($f)),
    $f
  );
}
var Cm;
function Xy() {
  return (Cm || ((Cm = 1), (Jf.exports = Vy())), Jf.exports);
}
var Ff = { exports: {} },
  St = {};
var Om;
function Qy() {
  if (Om) return St;
  Om = 1;
  var S = Symbol.for("react.transitional.element"),
    R = Symbol.for("react.portal"),
    z = Symbol.for("react.fragment"),
    o = Symbol.for("react.strict_mode"),
    Q = Symbol.for("react.profiler"),
    Z = Symbol.for("react.consumer"),
    rt = Symbol.for("react.context"),
    mt = Symbol.for("react.forward_ref"),
    V = Symbol.for("react.suspense"),
    gt = Symbol.for("react.memo"),
    X = Symbol.for("react.lazy"),
    N = Symbol.for("react.activity"),
    w = Symbol.for("react.view_transition"),
    dt = Symbol.iterator;
  function ct(r) {
    return r === null || typeof r != "object"
      ? null
      : ((r = (dt && r[dt]) || r["@@iterator"]),
        typeof r == "function" ? r : null);
  }
  var st = {
      isMounted: function () {
        return !1;
      },
      enqueueForceUpdate: function () {},
      enqueueReplaceState: function () {},
      enqueueSetState: function () {},
    },
    vt = Object.assign,
    Ut = {};
  function Ht(r, j, Y) {
    ((this.props = r),
      (this.context = j),
      (this.refs = Ut),
      (this.updater = Y || st));
  }
  ((Ht.prototype.isReactComponent = {}),
    (Ht.prototype.setState = function (r, j) {
      if (typeof r != "object" && typeof r != "function" && r != null)
        throw Error(
          "takes an object of state variables to update or a function which returns an object of state variables.",
        );
      this.updater.enqueueSetState(this, r, j, "setState");
    }),
    (Ht.prototype.forceUpdate = function (r) {
      this.updater.enqueueForceUpdate(this, r, "forceUpdate");
    }));
  function zt() {}
  zt.prototype = Ht.prototype;
  function qt(r, j, Y) {
    ((this.props = r),
      (this.context = j),
      (this.refs = Ut),
      (this.updater = Y || st));
  }
  var te = (qt.prototype = new zt());
  ((te.constructor = qt), vt(te, Ht.prototype), (te.isPureReactComponent = !0));
  var Et = Array.isArray;
  function $() {}
  var m = { H: null, A: null, T: null, S: null },
    y = Object.prototype.hasOwnProperty;
  function x(r, j, Y) {
    var I = Y.ref;
    return {
      $$typeof: S,
      type: r,
      key: j,
      ref: I !== void 0 ? I : null,
      props: Y,
    };
  }
  function A(r, j) {
    return x(r.type, j, r.props);
  }
  function H(r) {
    return typeof r == "object" && r !== null && r.$$typeof === S;
  }
  function ot(r) {
    var j = { "=": "=0", ":": "=2" };
    return (
      "$" +
      r.replace(/[=:]/g, function (Y) {
        return j[Y];
      })
    );
  }
  var Ct = /\/+/g;
  function nt(r, j) {
    return typeof r == "object" && r !== null && r.key != null
      ? ot("" + r.key)
      : j.toString(36);
  }
  function O(r) {
    switch (r.status) {
      case "fulfilled":
        return r.value;
      case "rejected":
        throw r.reason;
      default:
        switch (
          (typeof r.status == "string"
            ? r.then($, $)
            : ((r.status = "pending"),
              r.then(
                function (j) {
                  r.status === "pending" &&
                    ((r.status = "fulfilled"), (r.value = j));
                },
                function (j) {
                  r.status === "pending" &&
                    ((r.status = "rejected"), (r.reason = j));
                },
              )),
          r.status)
        ) {
          case "fulfilled":
            return r.value;
          case "rejected":
            throw r.reason;
        }
    }
    throw r;
  }
  function B(r, j, Y, I, W) {
    var F = typeof r;
    (F === "undefined" || F === "boolean") && (r = null);
    var ut = !1;
    if (r === null) ut = !0;
    else
      switch (F) {
        case "bigint":
        case "string":
        case "number":
          ut = !0;
          break;
        case "object":
          switch (r.$$typeof) {
            case S:
            case R:
              ut = !0;
              break;
            case X:
              return ((ut = r._init), B(ut(r._payload), j, Y, I, W));
          }
      }
    if (ut)
      return (
        (W = W(r)),
        (ut = I === "" ? "." + nt(r, 0) : I),
        Et(W)
          ? ((Y = ""),
            ut != null && (Y = ut.replace(Ct, "$&/") + "/"),
            B(W, j, Y, "", function (Yt) {
              return Yt;
            }))
          : W != null &&
            (H(W) &&
              (W = A(
                W,
                Y +
                  (W.key == null || (r && r.key === W.key)
                    ? ""
                    : ("" + W.key).replace(Ct, "$&/") + "/") +
                  ut,
              )),
            j.push(W)),
        1
      );
    ut = 0;
    var U = I === "" ? "." : I + ":";
    if (Et(r))
      for (var P = 0; P < r.length; P++)
        ((I = r[P]), (F = U + nt(I, P)), (ut += B(I, j, Y, F, W)));
    else if (((P = ct(r)), typeof P == "function"))
      for (r = P.call(r), P = 0; !(I = r.next()).done;)
        ((I = I.value), (F = U + nt(I, P++)), (ut += B(I, j, Y, F, W)));
    else if (F === "object") {
      if (typeof r.then == "function") return B(O(r), j, Y, I, W);
      throw (
        (j = String(r)),
        Error(
          "Objects are not valid as a React child (found: " +
            (j === "[object Object]"
              ? "object with keys {" + Object.keys(r).join(", ") + "}"
              : j) +
            "). If you meant to render a collection of children, use an array instead.",
        )
      );
    }
    return ut;
  }
  function d(r, j, Y) {
    if (r == null) return r;
    var I = [],
      W = 0;
    return (
      B(r, I, "", "", function (F) {
        return j.call(Y, F, W++);
      }),
      I
    );
  }
  function C(r) {
    if (r._status === -1) {
      var j = r._result,
        Y = j();
      (Y.then(
        function (I) {
          (r._status === 0 || r._status === -1) &&
            ((r._status = 1),
            (r._result = I),
            Y.status === void 0 && ((Y.status = "fulfilled"), (Y.value = I)));
        },
        function (I) {
          (r._status === 0 || r._status === -1) &&
            ((r._status = 2),
            (r._result = I),
            Y.status === void 0 && ((Y.status = "rejected"), (Y.reason = I)));
        },
      ),
        r._status === -1 && ((r._status = 0), (r._result = Y)));
    }
    if (r._status === 1) return r._result.default;
    throw r._result;
  }
  var k =
    typeof reportError == "function"
      ? reportError
      : function (r) {
          if (
            typeof window == "object" &&
            typeof window.ErrorEvent == "function"
          ) {
            var j = new window.ErrorEvent("error", {
              bubbles: !0,
              cancelable: !0,
              message:
                typeof r == "object" &&
                r !== null &&
                typeof r.message == "string"
                  ? String(r.message)
                  : String(r),
              error: r,
            });
            if (!window.dispatchEvent(j)) return;
          } else if (
            typeof process == "object" &&
            typeof process.emit == "function"
          ) {
            process.emit("uncaughtException", r);
            return;
          }
          console.error(r);
        };
  function G(r) {
    var j = m.T,
      Y = {};
    ((Y.types = j !== null ? j.types : null), (m.T = Y));
    try {
      var I = r(),
        W = m.S;
      (W !== null && W(Y, I),
        typeof I == "object" &&
          I !== null &&
          typeof I.then == "function" &&
          I.then($, k));
    } catch (F) {
      k(F);
    } finally {
      (j !== null && Y.types !== null && (j.types = Y.types), (m.T = j));
    }
  }
  function q(r) {
    var j = m.T;
    if (j !== null) {
      var Y = j.types;
      Y === null ? (j.types = [r]) : Y.indexOf(r) === -1 && Y.push(r);
    } else G(q.bind(null, r));
  }
  var L = {
    map: d,
    forEach: function (r, j, Y) {
      d(
        r,
        function () {
          j.apply(this, arguments);
        },
        Y,
      );
    },
    count: function (r) {
      var j = 0;
      return (
        d(r, function () {
          j++;
        }),
        j
      );
    },
    toArray: function (r) {
      return (
        d(r, function (j) {
          return j;
        }) || []
      );
    },
    only: function (r) {
      if (!H(r))
        throw Error(
          "React.Children.only expected to receive a single React element child.",
        );
      return r;
    },
  };
  return (
    (St.Activity = N),
    (St.Children = L),
    (St.Component = Ht),
    (St.Fragment = z),
    (St.Profiler = Q),
    (St.PureComponent = qt),
    (St.StrictMode = o),
    (St.Suspense = V),
    (St.ViewTransition = w),
    (St.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = m),
    (St.__COMPILER_RUNTIME = {
      __proto__: null,
      c: function (r) {
        return m.H.useMemoCache(r);
      },
    }),
    (St.addTransitionType = q),
    (St.cache = function (r) {
      return function () {
        return r.apply(null, arguments);
      };
    }),
    (St.cacheSignal = function () {
      return null;
    }),
    (St.cloneElement = function (r, j, Y) {
      if (r == null)
        throw Error(
          "The argument must be a React element, but you passed " + r + ".",
        );
      var I = vt({}, r.props),
        W = r.key;
      if (j != null)
        for (F in (j.key !== void 0 && (W = "" + j.key), j))
          !y.call(j, F) ||
            F === "key" ||
            F === "__self" ||
            F === "__source" ||
            (F === "ref" && j.ref === void 0) ||
            (I[F] = j[F]);
      var F = arguments.length - 2;
      if (F === 1) I.children = Y;
      else if (1 < F) {
        for (var ut = Array(F), U = 0; U < F; U++) ut[U] = arguments[U + 2];
        I.children = ut;
      }
      return x(r.type, W, I);
    }),
    (St.createContext = function (r) {
      return (
        (r = {
          $$typeof: rt,
          _currentValue: r,
          _currentValue2: r,
          _threadCount: 0,
          Provider: null,
          Consumer: null,
        }),
        (r.Provider = r),
        (r.Consumer = { $$typeof: Z, _context: r }),
        r
      );
    }),
    (St.createElement = function (r, j, Y) {
      var I,
        W = {},
        F = null;
      if (j != null)
        for (I in (j.key !== void 0 && (F = "" + j.key), j))
          y.call(j, I) &&
            I !== "key" &&
            I !== "__self" &&
            I !== "__source" &&
            (W[I] = j[I]);
      var ut = arguments.length - 2;
      if (ut === 1) W.children = Y;
      else if (1 < ut) {
        for (var U = Array(ut), P = 0; P < ut; P++) U[P] = arguments[P + 2];
        W.children = U;
      }
      if (r && r.defaultProps)
        for (I in ((ut = r.defaultProps), ut))
          W[I] === void 0 && (W[I] = ut[I]);
      return x(r, F, W);
    }),
    (St.createRef = function () {
      return { current: null };
    }),
    (St.forwardRef = function (r) {
      return { $$typeof: mt, render: r };
    }),
    (St.isValidElement = H),
    (St.lazy = function (r) {
      return { $$typeof: X, _payload: { _status: -1, _result: r }, _init: C };
    }),
    (St.memo = function (r, j) {
      return { $$typeof: gt, type: r, compare: j === void 0 ? null : j };
    }),
    (St.startTransition = G),
    (St.unstable_useCacheRefresh = function () {
      return m.H.useCacheRefresh();
    }),
    (St.use = function (r) {
      return m.H.use(r);
    }),
    (St.useActionState = function (r, j, Y) {
      return m.H.useActionState(r, j, Y);
    }),
    (St.useCallback = function (r, j) {
      return m.H.useCallback(r, j);
    }),
    (St.useContext = function (r) {
      return m.H.useContext(r);
    }),
    (St.useDebugValue = function () {}),
    (St.useDeferredValue = function (r, j) {
      return m.H.useDeferredValue(r, j);
    }),
    (St.useEffect = function (r, j) {
      return m.H.useEffect(r, j);
    }),
    (St.useEffectEvent = function (r) {
      return m.H.useEffectEvent(r);
    }),
    (St.useId = function () {
      return m.H.useId();
    }),
    (St.useImperativeHandle = function (r, j, Y) {
      return m.H.useImperativeHandle(r, j, Y);
    }),
    (St.useInsertionEffect = function (r, j) {
      return m.H.useInsertionEffect(r, j);
    }),
    (St.useLayoutEffect = function (r, j) {
      return m.H.useLayoutEffect(r, j);
    }),
    (St.useMemo = function (r, j) {
      return m.H.useMemo(r, j);
    }),
    (St.useOptimistic = function (r, j) {
      return m.H.useOptimistic(r, j);
    }),
    (St.useReducer = function (r, j, Y) {
      return m.H.useReducer(r, j, Y);
    }),
    (St.useRef = function (r) {
      return m.H.useRef(r);
    }),
    (St.useState = function (r) {
      return m.H.useState(r);
    }),
    (St.useSyncExternalStore = function (r, j, Y) {
      return m.H.useSyncExternalStore(r, j, Y);
    }),
    (St.useTransition = function () {
      return m.H.useTransition();
    }),
    (St.version = "19.3.1"),
    St
  );
}
var Am;
function nr() {
  return (Am || ((Am = 1), (Ff.exports = Qy())), Ff.exports);
}
var If = { exports: {} },
  Ne = {};
var Dm;
function Zy() {
  if (Dm) return Ne;
  Dm = 1;
  var S = nr();
  function R(X) {
    var N = "https://react.dev/errors/" + X;
    if (1 < arguments.length) {
      N += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var w = 2; w < arguments.length; w++)
        N += "&args[]=" + encodeURIComponent(arguments[w]);
    }
    return (
      "Minified React error #" +
      X +
      "; visit " +
      N +
      " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    );
  }
  function z() {}
  var o = {
      d: {
        f: z,
        r: function () {
          throw Error(R(522));
        },
        D: z,
        C: z,
        L: z,
        m: z,
        X: z,
        S: z,
        M: z,
      },
      p: 0,
      findDOMNode: null,
    },
    Q = Symbol.for("react.portal"),
    Z = Symbol.for("react.recoverable"),
    rt = Symbol.for("react.optimistic_key");
  function mt(X, N, w) {
    var dt =
      3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: Q,
      key: dt == null ? null : dt === rt ? rt : "" + dt,
      children: X,
      containerInfo: N,
      implementation: w,
    };
  }
  var V = S.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function gt(X, N) {
    if (X === "font") return "";
    if (typeof N == "string") return N === "use-credentials" ? N : "";
  }
  return (
    (Ne.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = o),
    (Ne.browser = function (X) {
      return { $$typeof: Z, _reason: X };
    }),
    (Ne.createPortal = function (X, N) {
      var w =
        2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
      if (!N || (N.nodeType !== 1 && N.nodeType !== 9 && N.nodeType !== 11))
        throw Error(R(299));
      return mt(X, N, null, w);
    }),
    (Ne.flushSync = function (X) {
      var N = V.T,
        w = o.p;
      try {
        if (((V.T = null), (o.p = 2), X)) return X();
      } finally {
        ((V.T = N), (o.p = w), o.d.f());
      }
    }),
    (Ne.preconnect = function (X, N) {
      typeof X == "string" &&
        (N
          ? ((N = N.crossOrigin),
            (N =
              typeof N == "string"
                ? N === "use-credentials"
                  ? N
                  : ""
                : void 0))
          : (N = null),
        o.d.C(X, N));
    }),
    (Ne.prefetchDNS = function (X) {
      typeof X == "string" && o.d.D(X);
    }),
    (Ne.preinit = function (X, N) {
      if (typeof X == "string" && N && typeof N.as == "string") {
        var w = N.as,
          dt = gt(w, N.crossOrigin),
          ct = typeof N.integrity == "string" ? N.integrity : void 0,
          st = typeof N.fetchPriority == "string" ? N.fetchPriority : void 0;
        w === "style"
          ? o.d.S(X, typeof N.precedence == "string" ? N.precedence : void 0, {
              crossOrigin: dt,
              integrity: ct,
              fetchPriority: st,
            })
          : w === "script" &&
            o.d.X(X, {
              crossOrigin: dt,
              integrity: ct,
              fetchPriority: st,
              nonce: typeof N.nonce == "string" ? N.nonce : void 0,
            });
      }
    }),
    (Ne.preinitModule = function (X, N) {
      if (typeof X == "string")
        if (typeof N == "object" && N !== null) {
          if (N.as == null || N.as === "script") {
            var w = gt(N.as, N.crossOrigin);
            o.d.M(X, {
              crossOrigin: w,
              integrity: typeof N.integrity == "string" ? N.integrity : void 0,
              nonce: typeof N.nonce == "string" ? N.nonce : void 0,
              fetchPriority:
                typeof N.fetchPriority == "string" ? N.fetchPriority : void 0,
            });
          }
        } else N == null && o.d.M(X);
    }),
    (Ne.preload = function (X, N) {
      if (
        typeof X == "string" &&
        typeof N == "object" &&
        N !== null &&
        typeof N.as == "string"
      ) {
        var w = N.as,
          dt = gt(w, N.crossOrigin);
        o.d.L(X, w, {
          crossOrigin: dt,
          integrity: typeof N.integrity == "string" ? N.integrity : void 0,
          nonce: typeof N.nonce == "string" ? N.nonce : void 0,
          type: typeof N.type == "string" ? N.type : void 0,
          fetchPriority:
            typeof N.fetchPriority == "string" ? N.fetchPriority : void 0,
          referrerPolicy:
            typeof N.referrerPolicy == "string" ? N.referrerPolicy : void 0,
          imageSrcSet:
            typeof N.imageSrcSet == "string" ? N.imageSrcSet : void 0,
          imageSizes: typeof N.imageSizes == "string" ? N.imageSizes : void 0,
          media: typeof N.media == "string" ? N.media : void 0,
        });
      }
    }),
    (Ne.preloadModule = function (X, N) {
      if (typeof X == "string")
        if (N) {
          var w = gt(N.as, N.crossOrigin);
          o.d.m(X, {
            as: typeof N.as == "string" && N.as !== "script" ? N.as : void 0,
            crossOrigin: w,
            integrity: typeof N.integrity == "string" ? N.integrity : void 0,
            nonce: typeof N.nonce == "string" ? N.nonce : void 0,
            fetchPriority:
              typeof N.fetchPriority == "string" ? N.fetchPriority : void 0,
          });
        } else o.d.m(X);
    }),
    (Ne.requestFormReset = function (X) {
      o.d.r(X);
    }),
    (Ne.unstable_batchedUpdates = function (X, N) {
      return X(N);
    }),
    (Ne.useFormState = function (X, N, w) {
      return V.H.useFormState(X, N, w);
    }),
    (Ne.useFormStatus = function () {
      return V.H.useHostTransitionStatus();
    }),
    (Ne.version = "19.3.1"),
    Ne
  );
}
var Mm;
function km() {
  if (Mm) return If.exports;
  Mm = 1;
  function S() {
    if (!(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
    ))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(S);
      } catch (R) {
        console.error(R);
      }
  }
  return (S(), (If.exports = Zy()), If.exports);
}
var Rm;
function Ky() {
  if (Rm) return wu;
  Rm = 1;
  var S = Xy(),
    R = nr(),
    z = km();
  function o(t) {
    var e = "https://react.dev/errors/" + t;
    if (1 < arguments.length) {
      e += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var l = 2; l < arguments.length; l++)
        e += "&args[]=" + encodeURIComponent(arguments[l]);
    }
    return (
      "Minified React error #" +
      t +
      "; visit " +
      e +
      " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    );
  }
  function Q(t) {
    return !(!t || (t.nodeType !== 1 && t.nodeType !== 9 && t.nodeType !== 11));
  }
  function Z(t) {
    for (var e = t, l = e; l && !l.alternate;)
      ((e = l), (e.flags & 4098) !== 0 && (t = e.return), (l = e.return));
    for (; e.return;) e = e.return;
    return e.tag === 3 ? t : null;
  }
  function rt(t) {
    if (t.tag === 13) {
      var e = t.memoizedState;
      if (
        (e === null && ((t = t.alternate), t !== null && (e = t.memoizedState)),
        e !== null)
      )
        return e.dehydrated;
    }
    return null;
  }
  function mt(t) {
    if (t.tag === 31) {
      var e = t.memoizedState;
      if (
        (e === null && ((t = t.alternate), t !== null && (e = t.memoizedState)),
        e !== null)
      )
        return e.dehydrated;
    }
    return null;
  }
  function V(t) {
    if (Z(t) !== t) throw Error(o(188));
  }
  function gt(t) {
    var e = t.alternate;
    if (!e) {
      if (((e = Z(t)), e === null)) throw Error(o(188));
      return e !== t ? null : t;
    }
    for (var l = t, a = e; ;) {
      var n = l.return;
      if (n === null) break;
      var u = n.alternate;
      if (u === null) {
        if (((a = n.return), a !== null)) {
          l = a;
          continue;
        }
        break;
      }
      if (n.child === u.child) {
        for (u = n.child; u;) {
          if (u === l) return (V(n), t);
          if (u === a) return (V(n), e);
          u = u.sibling;
        }
        throw Error(o(188));
      }
      if (l.return !== a.return) ((l = n), (a = u));
      else {
        for (var i = !1, s = n.child; s;) {
          if (s === l) {
            ((i = !0), (l = n), (a = u));
            break;
          }
          if (s === a) {
            ((i = !0), (a = n), (l = u));
            break;
          }
          s = s.sibling;
        }
        if (!i) {
          for (s = u.child; s;) {
            if (s === l) {
              ((i = !0), (l = u), (a = n));
              break;
            }
            if (s === a) {
              ((i = !0), (a = u), (l = n));
              break;
            }
            s = s.sibling;
          }
          if (!i) throw Error(o(189));
        }
      }
      if (l.alternate !== a) throw Error(o(190));
    }
    if (l.tag !== 3) throw Error(o(188));
    return l.stateNode.current === l ? t : e;
  }
  function X(t) {
    var e = t.tag;
    if (e === 5 || e === 26 || e === 27 || e === 6) return t;
    for (t = t.child; t !== null;) {
      if (((e = X(t)), e !== null)) return e;
      t = t.sibling;
    }
    return null;
  }
  function N(t, e, l, a, n, u) {
    for (; t !== null;) {
      if (
        ((t.tag === 5 || t.tag === 27 || t.tag === 6) && l(t, a, n, u)) ||
        ((t.tag !== 22 || t.memoizedState === null) &&
          (e || (t.tag !== 5 && t.tag !== 27)) &&
          N(t.child, e, l, a, n, u))
      )
        return !0;
      t = t.sibling;
    }
    return !1;
  }
  function w(t) {
    for (t = t.return; t !== null;) {
      if (t.tag === 3 || t.tag === 5 || t.tag === 27) return t;
      t = t.return;
    }
    return null;
  }
  function dt(t) {
    var e = !1;
    for (
      t = t.return;
      t !== null &&
      (t.tag === 4 && (e = !0), !(t.tag === 3 || t.tag === 5 || t.tag === 27));
    )
      t = t.return;
    return e;
  }
  function ct(t) {
    var e = [null, null],
      l = w(t);
    return (l === null || st(e, t, l.child, { foundSelf: !1 }), e);
  }
  function st(t, e, l, a) {
    for (; l !== null;) {
      if (l === e) a.foundSelf = !0;
      else if (l.tag === 5 || l.tag === 27 || l.tag === 6) {
        if (a.foundSelf) return ((t[1] = l), !0);
        t[0] = l;
      } else if (
        (l.tag !== 22 || l.memoizedState === null) &&
        st(t, e, l.child, a)
      )
        return !0;
      l = l.sibling;
    }
    return !1;
  }
  function vt(t) {
    switch (t.tag) {
      case 5:
      case 27:
      case 6:
        return t.stateNode;
      case 3:
        return t.stateNode.containerInfo;
      default:
        throw Error(o(559));
    }
  }
  var Ut = null,
    Ht = null;
  function zt(t, e, l) {
    return t === l ? !0 : t === e ? ((Ut = t), !0) : !1;
  }
  function qt(t, e, l) {
    return t === l
      ? ((Ht = t), !1)
      : t === e
        ? (Ht !== null && (Ut = t), !0)
        : !1;
  }
  function te(t) {
    if (t === null) return null;
    do t = t === null ? null : t.return;
    while (t && t.tag !== 5 && t.tag !== 27 && t.tag !== 3);
    return t || null;
  }
  function Et(t, e, l) {
    for (var a = 0, n = t; n; n = l(n)) a++;
    n = 0;
    for (var u = e; u; u = l(u)) n++;
    for (; 0 < a - n;) ((t = l(t)), a--);
    for (; 0 < n - a;) ((e = l(e)), n--);
    for (; a--;) {
      if (t === e || (e !== null && t === e.alternate)) return t;
      ((t = l(t)), (e = l(e)));
    }
    return null;
  }
  var $ = Object.assign,
    m = Symbol.for("react.element"),
    y = Symbol.for("react.transitional.element"),
    x = Symbol.for("react.portal"),
    A = Symbol.for("react.fragment"),
    H = Symbol.for("react.strict_mode"),
    ot = Symbol.for("react.profiler"),
    Ct = Symbol.for("react.consumer"),
    nt = Symbol.for("react.context"),
    O = Symbol.for("react.forward_ref"),
    B = Symbol.for("react.suspense"),
    d = Symbol.for("react.suspense_list"),
    C = Symbol.for("react.memo"),
    k = Symbol.for("react.lazy"),
    G = Symbol.for("react.activity"),
    q = Symbol.for("react.legacy_hidden"),
    L = Symbol.for("react.memo_cache_sentinel"),
    r = Symbol.for("react.view_transition"),
    j = Symbol.for("react.recoverable"),
    Y = Symbol.iterator;
  function I(t) {
    return t === null || typeof t != "object"
      ? null
      : ((t = (Y && t[Y]) || t["@@iterator"]),
        typeof t == "function" ? t : null);
  }
  var W = Symbol.for("react.client.reference");
  function F(t) {
    if (t == null) return null;
    if (typeof t == "function")
      return t.$$typeof === W ? null : t.displayName || t.name || null;
    if (typeof t == "string") return t;
    switch (t) {
      case A:
        return "Fragment";
      case ot:
        return "Profiler";
      case H:
        return "StrictMode";
      case B:
        return "Suspense";
      case d:
        return "SuspenseList";
      case G:
        return "Activity";
      case r:
        return "ViewTransition";
    }
    if (typeof t == "object")
      switch (t.$$typeof) {
        case x:
          return "Portal";
        case nt:
          return t.displayName || "Context";
        case Ct:
          return (t._context.displayName || "Context") + ".Consumer";
        case O:
          var e = t.render;
          return (
            (t = t.displayName),
            t ||
              ((t = e.displayName || e.name || ""),
              (t = t !== "" ? "ForwardRef(" + t + ")" : "ForwardRef")),
            t
          );
        case C:
          return (
            (e = t.displayName || null),
            e !== null ? e : F(t.type) || "Memo"
          );
        case k:
          ((e = t._payload), (t = t._init));
          try {
            return F(t(e));
          } catch {}
      }
    return null;
  }
  var ut = Array.isArray,
    U = R.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
    P = z.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
    Yt = { pending: !1, data: null, method: null, action: null },
    Bt = [],
    pt = -1;
  function it(t) {
    return { current: t };
  }
  function Nt(t) {
    0 > pt || ((t.current = Bt[pt]), (Bt[pt] = null), pt--);
  }
  function at(t, e) {
    (pt++, (Bt[pt] = t.current), (t.current = e));
  }
  var jt = it(null),
    It = it(null),
    de = it(null),
    he = it(null);
  function _e(t, e) {
    switch ((at(de, e), at(It, t), at(jt, null), e.nodeType)) {
      case 9:
      case 11:
        t = (t = e.documentElement) && (t = t.namespaceURI) ? Uh(t) : 0;
        break;
      default:
        if (((t = e.tagName), (e = e.namespaceURI)))
          ((e = Uh(e)), (t = Hh(e, t)));
        else
          switch (t) {
            case "svg":
              t = 1;
              break;
            case "math":
              t = 2;
              break;
            default:
              t = 0;
          }
    }
    (Nt(jt), at(jt, t));
  }
  function $t() {
    (Nt(jt), Nt(It), Nt(de));
  }
  function me(t) {
    var e = t.memoizedState;
    (e !== null && ((Bn._currentValue = e.memoizedState), at(he, t)),
      (e = jt.current));
    var l = Hh(e, t.type);
    e !== l && (at(It, t), at(jt, l));
  }
  function Vt(t) {
    (It.current === t && (Nt(jt), Nt(It)),
      he.current === t && (Nt(he), (Bn._currentValue = Yt)));
  }
  var Dt, ze;
  function yt(t) {
    if (Dt === void 0)
      try {
        throw Error();
      } catch (l) {
        var e = l.stack.trim().match(/\n( *(at )?)/);
        ((Dt = (e && e[1]) || ""),
          (ze =
            -1 <
            l.stack.indexOf(`
    at`)
              ? " (<anonymous>)"
              : -1 < l.stack.indexOf("@")
                ? "@unknown:0:0"
                : ""));
      }
    return (
      `
` +
      Dt +
      t +
      ze
    );
  }
  var kl = !1;
  function Ze(t, e) {
    if (!t || kl) return "";
    kl = !0;
    var l = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      var a = {
        DetermineComponentFrameRoot: function () {
          try {
            if (e) {
              var M = function () {
                throw Error();
              };
              if (
                (Object.defineProperty(M.prototype, "props", {
                  set: function () {
                    throw Error();
                  },
                }),
                typeof Reflect == "object" && Reflect.construct)
              ) {
                try {
                  Reflect.construct(M, []);
                } catch (K) {
                  var v = K;
                }
                Reflect.construct(t, [], M);
              } else {
                try {
                  M.call();
                } catch (K) {
                  v = K;
                }
                M = !1;
                try {
                  var E = Object.getOwnPropertyDescriptor(t.prototype, "props");
                  (Object.defineProperty(t.prototype, "props", {
                    configurable: !0,
                    set: function () {
                      throw Error();
                    },
                  }),
                    (M = !0),
                    new t());
                } finally {
                  M &&
                    (E !== void 0
                      ? Object.defineProperty(t.prototype, "props", E)
                      : delete t.prototype.props);
                }
              }
            } else {
              try {
                throw Error();
              } catch (K) {
                v = K;
              }
              (M = t()) &&
                typeof M.catch == "function" &&
                M.catch(function () {});
            }
          } catch (K) {
            if (K && v && typeof K.stack == "string") return [K.stack, v.stack];
          }
          return [null, null];
        },
      };
      a.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
      var n = Object.getOwnPropertyDescriptor(
        a.DetermineComponentFrameRoot,
        "name",
      );
      n &&
        n.configurable &&
        Object.defineProperty(a.DetermineComponentFrameRoot, "name", {
          value: "DetermineComponentFrameRoot",
        });
      var u = a.DetermineComponentFrameRoot(),
        i = u[0],
        s = u[1];
      if (i && s) {
        var f = i.split(`
`),
          b = s.split(`
`);
        for (
          n = a = 0;
          a < f.length && !f[a].includes("DetermineComponentFrameRoot");
        )
          a++;
        for (; n < b.length && !b[n].includes("DetermineComponentFrameRoot");)
          n++;
        if (a === f.length || n === b.length)
          for (
            a = f.length - 1, n = b.length - 1;
            1 <= a && 0 <= n && f[a] !== b[n];
          )
            n--;
        for (; 1 <= a && 0 <= n; a--, n--)
          if (f[a] !== b[n]) {
            if (a !== 1 || n !== 1)
              do
                if ((a--, n--, 0 > n || f[a] !== b[n])) {
                  var _ =
                    `
` + f[a].replace(" at new ", " at ");
                  return (
                    t.displayName &&
                      _.includes("<anonymous>") &&
                      (_ = _.replace("<anonymous>", t.displayName)),
                    _
                  );
                }
              while (1 <= a && 0 <= n);
            break;
          }
      }
    } finally {
      ((kl = !1), (Error.prepareStackTrace = l));
    }
    return (l = t ? t.displayName || t.name : "") ? yt(l) : "";
  }
  function qe(t, e) {
    switch (t.tag) {
      case 26:
      case 27:
      case 5:
        return yt(t.type);
      case 16:
        return yt("Lazy");
      case 13:
        return t.child !== e && e !== null
          ? yt("Suspense Fallback")
          : yt("Suspense");
      case 19:
        return yt("SuspenseList");
      case 0:
      case 15:
        return Ze(t.type, !1);
      case 11:
        return Ze(t.type.render, !1);
      case 1:
        return Ze(t.type, !0);
      case 31:
        return yt("Activity");
      case 30:
        return yt("ViewTransition");
      default:
        return "";
    }
  }
  function gl(t) {
    try {
      var e = "",
        l = null;
      do ((e += qe(t, l)), (l = t), (t = t.return));
      while (t);
      return e;
    } catch (a) {
      return (
        `
Error generating stack: ` +
        a.message +
        `
` +
        a.stack
      );
    }
  }
  var g = Object.prototype.hasOwnProperty,
    tt = S.unstable_scheduleCallback,
    bt = S.unstable_cancelCallback,
    Ce = S.unstable_shouldYield,
    De = S.unstable_requestPaint,
    ue = S.unstable_now,
    Oe = S.unstable_getCurrentPriorityLevel,
    Jl = S.unstable_ImmediatePriority,
    $l = S.unstable_UserBlockingPriority,
    Fa = S.unstable_NormalPriority,
    yc = S.unstable_LowPriority,
    Ia = S.unstable_IdlePriority,
    gc = S.log,
    Bu = S.unstable_setDisableYieldValue,
    Fl = null,
    Me = null;
  function Il(t) {
    if (
      (typeof gc == "function" && Bu(t),
      Me && typeof Me.setStrictMode == "function")
    )
      try {
        Me.setStrictMode(Fl, t);
      } catch {}
  }
  var Ke = Math.clz32 ? Math.clz32 : Wm,
    Fm = Math.log,
    Im = Math.LN2;
  function Wm(t) {
    return ((t >>>= 0), t === 0 ? 32 : (31 - ((Fm(t) / Im) | 0)) | 0);
  }
  var Gu = 256,
    Lu = 262144,
    Vu = 4194304;
  function za(t) {
    var e = t & 42;
    if (e !== 0) return e;
    switch (t & -t) {
      case 1:
        return 1;
      case 2:
        return 2;
      case 4:
        return 4;
      case 8:
        return 8;
      case 16:
        return 16;
      case 32:
        return 32;
      case 64:
        return 64;
      case 128:
        return 128;
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
        return t & -t;
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return t & 3932160;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return t & 62914560;
      case 67108864:
        return 67108864;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 0;
      default:
        return t;
    }
  }
  function Xu(t, e, l) {
    var a = t.pendingLanes;
    if (a === 0) return 0;
    var n = 0,
      u = t.suspendedLanes,
      i = t.pingedLanes;
    t = t.warmLanes;
    var s = a & 134217727;
    return (
      s !== 0
        ? ((a = s & ~u),
          a !== 0
            ? (n = za(a))
            : ((i &= s),
              i !== 0
                ? (n = za(i))
                : l || ((l = s & ~t), l !== 0 && (n = za(l)))))
        : ((s = a & ~u),
          s !== 0
            ? (n = za(s))
            : i !== 0
              ? (n = za(i))
              : l || ((l = a & ~t), l !== 0 && (n = za(l)))),
      n === 0
        ? 0
        : e !== 0 &&
            e !== n &&
            (e & u) === 0 &&
            ((u = n & -n),
            (l = e & -e),
            u >= l || (u === 32 && (l & 4194048) !== 0))
          ? e
          : n
    );
  }
  function Xn(t, e) {
    return (t.pendingLanes & ~(t.suspendedLanes & ~t.pingedLanes) & e) === 0;
  }
  function ur(t, e) {
    (e & 8) !== 0 && (e |= e & 32);
    var l = t.entangledLanes;
    if (l !== 0)
      for (t = t.entanglements, l &= e; 0 < l;) {
        var a = 31 - Ke(l),
          n = 1 << a;
        ((e |= t[a]), (l &= ~n));
      }
    return e;
  }
  function Pm(t, e) {
    switch (t) {
      case 1:
      case 2:
      case 4:
      case 8:
      case 64:
        return e + 250;
      case 16:
      case 32:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return e + 5e3;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return -1;
      case 67108864:
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  }
  function ir() {
    var t = Vu;
    return ((Vu <<= 1), (Vu & 62914560) === 0 && (Vu = 4194304), t);
  }
  function pc(t) {
    for (var e = [], l = 0; 31 > l; l++) e.push(t);
    return e;
  }
  function Qn(t, e) {
    ((t.pendingLanes |= e),
      e !== 268435456 &&
        ((t.suspendedLanes = 0), (t.pingedLanes = 0), (t.warmLanes = 0)));
  }
  function t0(t, e, l, a, n, u) {
    var i = t.pendingLanes;
    ((t.pendingLanes = l),
      (t.suspendedLanes = 0),
      (t.pingedLanes = 0),
      (t.warmLanes = 0),
      (t.expiredLanes &= l),
      (t.entangledLanes &= l),
      (t.errorRecoveryDisabledLanes &= l),
      (t.shellSuspendCounter = 0));
    var s = t.entanglements,
      f = t.expirationTimes,
      b = t.hiddenUpdates;
    for (l = i & ~l; 0 < l;) {
      var _ = 31 - Ke(l),
        M = 1 << _;
      ((s[_] = 0), (f[_] = -1));
      var v = b[_];
      if (v !== null)
        for (b[_] = null, _ = 0; _ < v.length; _++) {
          var E = v[_];
          E !== null && (E.lane &= -536870913);
        }
      l &= ~M;
    }
    (a !== 0 && cr(t, a, 0),
      u !== 0 && n === 0 && t.tag !== 0 && (t.suspendedLanes |= u & ~(i & ~e)));
  }
  function cr(t, e, l) {
    ((t.pendingLanes |= e), (t.suspendedLanes &= ~e));
    var a = 31 - Ke(e);
    ((t.entangledLanes |= e),
      (t.entanglements[a] = t.entanglements[a] | 1073741824 | (l & 261930)));
  }
  function sr(t, e) {
    var l = (t.entangledLanes |= e);
    for (t = t.entanglements; l;) {
      var a = 31 - Ke(l),
        n = 1 << a;
      ((n & e) | (t[a] & e) && (t[a] |= e), (l &= ~n));
    }
  }
  function fr(t, e) {
    var l = e & -e;
    return (
      (l = (l & 42) !== 0 ? 1 : bc(l)),
      (l & (t.suspendedLanes | e)) !== 0 ? 0 : l
    );
  }
  function bc(t) {
    switch (t) {
      case 2:
        t = 1;
        break;
      case 8:
        t = 4;
        break;
      case 32:
        t = 16;
        break;
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        t = 128;
        break;
      case 268435456:
        t = 134217728;
        break;
      default:
        t = 0;
    }
    return t;
  }
  function Sc(t) {
    return (
      (t &= -t),
      2 < t ? (8 < t ? ((t & 134217727) !== 0 ? 32 : 268435456) : 8) : 2
    );
  }
  function rr() {
    var t = P.p;
    return t !== 0 ? t : ((t = window.event), t === void 0 ? 32 : pm(t.type));
  }
  function or(t, e) {
    var l = P.p;
    try {
      return ((P.p = t), e());
    } finally {
      P.p = l;
    }
  }
  var Ml = Math.random().toString(36).slice(2),
    be = "__reactFiber$" + Ml,
    Ye = "__reactProps$" + Ml,
    Wa = "__reactContainer$" + Ml,
    dr = "__reactEvents$" + Ml,
    e0 = "__reactListeners$" + Ml,
    l0 = "__reactHandles$" + Ml,
    hr = "__reactResources$" + Ml,
    Zn = "__reactMarker$" + Ml,
    Qu = "__reactLoad$" + Ml;
  function Zu(t) {
    (delete t[be], delete t[Ye], delete t[e0], delete t[l0]);
  }
  function Ca(t) {
    var e;
    if ((e = t[be])) return e;
    for (var l = t.parentNode; l;) {
      if ((e = l[Wa] || l[be])) {
        if (
          ((l = e.alternate),
          e.child !== null || (l !== null && l.child !== null))
        )
          for (t = Wh(t); t !== null;) {
            if ((l = t[be])) return l;
            t = Wh(t);
          }
        return e;
      }
      ((t = l), (l = t.parentNode));
    }
    return null;
  }
  function Pa(t) {
    if ((t = t[be] || t[Wa])) {
      var e = t.tag;
      if (
        e === 5 ||
        e === 6 ||
        e === 13 ||
        e === 31 ||
        e === 26 ||
        e === 27 ||
        e === 3
      )
        return t;
    }
    return null;
  }
  function Kn(t) {
    var e = t.tag;
    if (e === 5 || e === 26 || e === 27 || e === 6) return t.stateNode;
    throw Error(o(33));
  }
  function tn(t) {
    var e = t[hr];
    return (
      e ||
        (e = t[hr] =
          { hoistableStyles: new Map(), hoistableScripts: new Map() }),
      e
    );
  }
  function ve(t) {
    t[Zn] = !0;
  }
  function mr(t) {
    t[Qu] = void 0;
  }
  var vr = new Set(),
    yr = {};
  function Oa(t, e) {
    (en(t, e), en(t + "Capture", e));
  }
  function en(t, e) {
    for (yr[t] = e, t = 0; t < e.length; t++) vr.add(e[t]);
  }
  var a0 = RegExp(
      "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$",
    ),
    gr = {},
    pr = {};
  function n0(t) {
    return g.call(pr, t)
      ? !0
      : g.call(gr, t)
        ? !1
        : a0.test(t)
          ? (pr[t] = !0)
          : ((gr[t] = !0), !1);
  }
  var Gt = !1;
  function br() {
    var t = Gt;
    return ((Gt = !1), t);
  }
  function Ku(t, e, l) {
    if (n0(e))
      if (l === null) t.removeAttribute(e);
      else {
        switch (typeof l) {
          case "undefined":
          case "function":
          case "symbol":
            t.removeAttribute(e);
            return;
          case "boolean":
            var a = e.toLowerCase().slice(0, 5);
            if (a !== "data-" && a !== "aria-") {
              t.removeAttribute(e);
              return;
            }
        }
        t.setAttribute(e, l);
      }
  }
  function ku(t, e, l) {
    if (l === null) t.removeAttribute(e);
    else {
      switch (typeof l) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          t.removeAttribute(e);
          return;
      }
      t.setAttribute(e, l);
    }
  }
  function Rl(t, e, l, a) {
    if (a === null) t.removeAttribute(l);
    else {
      switch (typeof a) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          t.removeAttribute(l);
          return;
      }
      t.setAttributeNS(e, l, a);
    }
  }
  function ke(t) {
    switch (typeof t) {
      case "bigint":
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return t;
      case "object":
        return t;
      default:
        return "";
    }
  }
  function Sr(t) {
    var e = t.type;
    return (
      (t = t.nodeName) &&
      t.toLowerCase() === "input" &&
      (e === "checkbox" || e === "radio")
    );
  }
  function u0(t, e, l) {
    var a = Object.getOwnPropertyDescriptor(t.constructor.prototype, e);
    if (
      !t.hasOwnProperty(e) &&
      typeof a < "u" &&
      typeof a.get == "function" &&
      typeof a.set == "function"
    ) {
      var n = a.get,
        u = a.set;
      return (
        Object.defineProperty(t, e, {
          configurable: !0,
          get: function () {
            return n.call(this);
          },
          set: function (i) {
            ((l = "" + i), u.call(this, i));
          },
        }),
        Object.defineProperty(t, e, { enumerable: a.enumerable }),
        {
          getValue: function () {
            return l;
          },
          setValue: function (i) {
            l = "" + i;
          },
          stopTracking: function () {
            ((t._valueTracker = null), delete t[e]);
          },
        }
      );
    }
  }
  function xc(t) {
    if (!t._valueTracker) {
      var e = Sr(t) ? "checked" : "value";
      t._valueTracker = u0(t, e, "" + t[e]);
    }
  }
  function xr(t) {
    if (!t) return !1;
    var e = t._valueTracker;
    if (!e) return !0;
    var l = e.getValue(),
      a = "";
    return (
      t && (a = Sr(t) ? (t.checked ? "true" : "false") : t.value),
      (t = a),
      t !== l ? (e.setValue(t), !0) : !1
    );
  }
  var i0 = /[\n"\\]/g;
  function ll(t) {
    return t.replace(i0, function (e) {
      return "\\" + e.charCodeAt(0).toString(16) + " ";
    });
  }
  function Tc(t, e, l, a, n, u, i, s) {
    ((t.name = ""),
      i != null &&
      typeof i != "function" &&
      typeof i != "symbol" &&
      typeof i != "boolean"
        ? (t.type = i)
        : t.removeAttribute("type"),
      e != null
        ? i === "number"
          ? ((e === 0 && t.value === "") || t.value != e) &&
            (t.value = "" + ke(e))
          : t.value !== "" + ke(e) && (t.value = "" + ke(e))
        : (i !== "submit" && i !== "reset") || t.removeAttribute("value"),
      e != null
        ? i === "number" && t.value == e
          ? Ec(t, ke(t.value))
          : Ec(t, ke(e))
        : l != null
          ? Ec(t, ke(l))
          : a != null && t.removeAttribute("value"),
      n == null && u != null && (t.defaultChecked = !!u),
      n != null &&
        (t.checked = n && typeof n != "function" && typeof n != "symbol"),
      s != null &&
      typeof s != "function" &&
      typeof s != "symbol" &&
      typeof s != "boolean"
        ? (t.name = "" + ke(s))
        : t.removeAttribute("name"));
  }
  function Tr(t, e, l, a, n, u, i, s) {
    if (
      (u != null &&
        typeof u != "function" &&
        typeof u != "symbol" &&
        typeof u != "boolean" &&
        (t.type = u),
      e != null || l != null)
    ) {
      if (!((u !== "submit" && u !== "reset") || e != null)) {
        xc(t);
        return;
      }
      ((l = l != null ? "" + ke(l) : ""),
        (e = e != null ? "" + ke(e) : l),
        s || e === t.value || (t.value = e),
        (t.defaultValue = e));
    }
    ((a = a ?? n),
      (a = typeof a != "function" && typeof a != "symbol" && !!a),
      (t.checked = s ? t.checked : !!a),
      (t.defaultChecked = !!a),
      i != null &&
        typeof i != "function" &&
        typeof i != "symbol" &&
        typeof i != "boolean" &&
        (t.name = i),
      xc(t));
  }
  function Ec(t, e) {
    t.defaultValue !== "" + e && (t.defaultValue = "" + e);
  }
  function ln(t, e, l, a) {
    if (((t = t.options), e)) {
      e = {};
      for (var n = 0; n < l.length; n++) e["$" + l[n]] = !0;
      for (l = 0; l < t.length; l++)
        ((n = e.hasOwnProperty("$" + t[l].value)),
          t[l].selected !== n && (t[l].selected = n),
          n && a && (t[l].defaultSelected = !0));
    } else {
      for (l = "" + ke(l), e = null, n = 0; n < t.length; n++) {
        if (t[n].value === l) {
          ((t[n].selected = !0), a && (t[n].defaultSelected = !0));
          return;
        }
        e !== null || t[n].disabled || (e = t[n]);
      }
      e !== null && (e.selected = !0);
    }
  }
  function Er(t, e, l) {
    if (
      e != null &&
      ((e = "" + ke(e)), e !== t.value && (t.value = e), l == null)
    ) {
      t.defaultValue !== e && (t.defaultValue = e);
      return;
    }
    t.defaultValue = l != null ? "" + ke(l) : "";
  }
  function jr(t, e, l, a) {
    if (e == null) {
      if (a != null) {
        if (l != null) throw Error(o(92));
        if (ut(a)) {
          if (1 < a.length) throw Error(o(93));
          a = a[0];
        }
        l = a;
      }
      (l == null && (l = ""), (e = l));
    }
    ((l = ke(e)),
      (t.defaultValue = l),
      (a = t.textContent),
      a === l && a !== "" && a !== null && (t.value = a),
      xc(t));
  }
  function an(t, e) {
    if (e) {
      var l = t.firstChild;
      if (l && l === t.lastChild && l.nodeType === 3) {
        l.nodeValue = e;
        return;
      }
    }
    t.textContent = e;
  }
  var c0 = new Set(
    "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
      " ",
    ),
  );
  function Nr(t, e, l) {
    var a = e.indexOf("--") === 0;
    l == null || typeof l == "boolean" || l === ""
      ? a
        ? t.setProperty(e, "")
        : e === "float"
          ? (t.cssFloat = "")
          : (t[e] = "")
      : a
        ? t.setProperty(e, l)
        : typeof l != "number" || l === 0 || c0.has(e)
          ? e === "float"
            ? (t.cssFloat = l)
            : (t[e] = ("" + l).trim())
          : (t[e] = l + "px");
  }
  function _r(t, e, l) {
    if (e != null && typeof e != "object") throw Error(o(62));
    if (((t = t.style), l != null)) {
      for (var a in l)
        !l.hasOwnProperty(a) ||
          (e != null && e.hasOwnProperty(a)) ||
          (a.indexOf("--") === 0
            ? t.setProperty(a, "")
            : a === "float"
              ? (t.cssFloat = "")
              : (t[a] = ""),
          (Gt = !0));
      for (var n in e)
        ((a = e[n]),
          e.hasOwnProperty(n) && l[n] !== a && (Nr(t, n, a), (Gt = !0)));
    } else for (var u in e) e.hasOwnProperty(u) && Nr(t, u, e[u]);
  }
  function jc(t) {
    if (t.indexOf("-") === -1) return !1;
    switch (t) {
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return !1;
      default:
        return !0;
    }
  }
  var s0 = new Map([
      ["acceptCharset", "accept-charset"],
      ["htmlFor", "for"],
      ["httpEquiv", "http-equiv"],
      ["crossOrigin", "crossorigin"],
      ["accentHeight", "accent-height"],
      ["alignmentBaseline", "alignment-baseline"],
      ["arabicForm", "arabic-form"],
      ["baselineShift", "baseline-shift"],
      ["capHeight", "cap-height"],
      ["clipPath", "clip-path"],
      ["clipRule", "clip-rule"],
      ["colorInterpolation", "color-interpolation"],
      ["colorInterpolationFilters", "color-interpolation-filters"],
      ["colorProfile", "color-profile"],
      ["colorRendering", "color-rendering"],
      ["dominantBaseline", "dominant-baseline"],
      ["enableBackground", "enable-background"],
      ["fillOpacity", "fill-opacity"],
      ["fillRule", "fill-rule"],
      ["floodColor", "flood-color"],
      ["floodOpacity", "flood-opacity"],
      ["fontFamily", "font-family"],
      ["fontSize", "font-size"],
      ["fontSizeAdjust", "font-size-adjust"],
      ["fontStretch", "font-stretch"],
      ["fontStyle", "font-style"],
      ["fontVariant", "font-variant"],
      ["fontWeight", "font-weight"],
      ["glyphName", "glyph-name"],
      ["glyphOrientationHorizontal", "glyph-orientation-horizontal"],
      ["glyphOrientationVertical", "glyph-orientation-vertical"],
      ["horizAdvX", "horiz-adv-x"],
      ["horizOriginX", "horiz-origin-x"],
      ["imageRendering", "image-rendering"],
      ["letterSpacing", "letter-spacing"],
      ["lightingColor", "lighting-color"],
      ["markerEnd", "marker-end"],
      ["markerMid", "marker-mid"],
      ["markerStart", "marker-start"],
      ["maskType", "mask-type"],
      ["overlinePosition", "overline-position"],
      ["overlineThickness", "overline-thickness"],
      ["paintOrder", "paint-order"],
      ["panose-1", "panose-1"],
      ["pointerEvents", "pointer-events"],
      ["renderingIntent", "rendering-intent"],
      ["shapeRendering", "shape-rendering"],
      ["stopColor", "stop-color"],
      ["stopOpacity", "stop-opacity"],
      ["strikethroughPosition", "strikethrough-position"],
      ["strikethroughThickness", "strikethrough-thickness"],
      ["strokeDasharray", "stroke-dasharray"],
      ["strokeDashoffset", "stroke-dashoffset"],
      ["strokeLinecap", "stroke-linecap"],
      ["strokeLinejoin", "stroke-linejoin"],
      ["strokeMiterlimit", "stroke-miterlimit"],
      ["strokeOpacity", "stroke-opacity"],
      ["strokeWidth", "stroke-width"],
      ["textAnchor", "text-anchor"],
      ["textDecoration", "text-decoration"],
      ["textRendering", "text-rendering"],
      ["transformOrigin", "transform-origin"],
      ["underlinePosition", "underline-position"],
      ["underlineThickness", "underline-thickness"],
      ["unicodeBidi", "unicode-bidi"],
      ["unicodeRange", "unicode-range"],
      ["unitsPerEm", "units-per-em"],
      ["vAlphabetic", "v-alphabetic"],
      ["vHanging", "v-hanging"],
      ["vIdeographic", "v-ideographic"],
      ["vMathematical", "v-mathematical"],
      ["vectorEffect", "vector-effect"],
      ["vertAdvY", "vert-adv-y"],
      ["vertOriginX", "vert-origin-x"],
      ["vertOriginY", "vert-origin-y"],
      ["wordSpacing", "word-spacing"],
      ["writingMode", "writing-mode"],
      ["xmlnsXlink", "xmlns:xlink"],
      ["xHeight", "x-height"],
    ]),
    f0 =
      /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function Ju(t) {
    return f0.test("" + t)
      ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')"
      : t;
  }
  function pl() {}
  var Nc = null;
  function _c(t) {
    return (
      (t = t.target || t.srcElement || window),
      t.correspondingUseElement && (t = t.correspondingUseElement),
      t.nodeType === 3 ? t.parentNode : t
    );
  }
  var nn = null,
    un = null;
  function zr(t) {
    var e = Pa(t);
    if (e && (t = e.stateNode)) {
      var l = t[Ye] || null;
      t: switch (((t = e.stateNode), e.type)) {
        case "input":
          if (
            (Tc(
              t,
              l.value,
              l.defaultValue,
              l.defaultValue,
              l.checked,
              l.defaultChecked,
              l.type,
              l.name,
            ),
            (e = l.name),
            l.type === "radio" && e != null)
          ) {
            for (l = t; l.parentNode;) l = l.parentNode;
            for (
              l = l.querySelectorAll(
                'input[name="' + ll("" + e) + '"][type="radio"]',
              ),
                e = 0;
              e < l.length;
              e++
            ) {
              var a = l[e];
              if (a !== t && a.form === t.form) {
                var n = a[Ye] || null;
                if (!n) throw Error(o(90));
                Tc(
                  a,
                  n.value,
                  n.defaultValue,
                  n.defaultValue,
                  n.checked,
                  n.defaultChecked,
                  n.type,
                  n.name,
                );
              }
            }
            for (e = 0; e < l.length; e++)
              ((a = l[e]), a.form === t.form && xr(a));
          }
          break t;
        case "textarea":
          Er(t, l.value, l.defaultValue);
          break t;
        case "select":
          ((e = l.value), e != null && ln(t, !!l.multiple, e, !1));
      }
    }
  }
  var zc = !1;
  function Cr(t, e, l) {
    if (zc) return t(e, l);
    zc = !0;
    try {
      var a = t(e);
      return a;
    } finally {
      if (
        ((zc = !1),
        (nn !== null || un !== null) &&
          (Ji(), nn && ((e = nn), (t = un), (un = nn = null), zr(e), t)))
      )
        for (e = 0; e < t.length; e++) zr(t[e]);
    }
  }
  function kn(t, e) {
    var l = t.stateNode;
    if (l === null) return null;
    var a = l[Ye] || null;
    if (a === null) return null;
    l = a[e];
    t: switch (e) {
      case "onClick":
      case "onClickCapture":
      case "onDoubleClick":
      case "onDoubleClickCapture":
      case "onMouseDown":
      case "onMouseDownCapture":
      case "onMouseMove":
      case "onMouseMoveCapture":
      case "onMouseUp":
      case "onMouseUpCapture":
      case "onMouseEnter":
        ((a = !a.disabled) ||
          ((t = t.type),
          (a = !(
            t === "button" ||
            t === "input" ||
            t === "select" ||
            t === "textarea"
          ))),
          (t = !a));
        break t;
      default:
        t = !1;
    }
    if (t) return null;
    if (l && typeof l != "function") throw Error(o(231, e, typeof l));
    return l;
  }
  var Ul = !(
      typeof window > "u" ||
      typeof window.document > "u" ||
      typeof window.document.createElement > "u"
    ),
    Cc = !1;
  if (Ul)
    try {
      var Jn = {};
      (Object.defineProperty(Jn, "passive", {
        get: function () {
          Cc = !0;
        },
      }),
        window.addEventListener("test", Jn, Jn),
        window.removeEventListener("test", Jn, Jn));
    } catch {
      Cc = !1;
    }
  var Wl = null,
    Oc = null,
    $u = null;
  function Or() {
    if ($u) return $u;
    var t,
      e = Oc,
      l = e.length,
      a,
      n = "value" in Wl ? Wl.value : Wl.textContent,
      u = n.length;
    for (t = 0; t < l && e[t] === n[t]; t++);
    var i = l - t;
    for (a = 1; a <= i && e[l - a] === n[u - a]; a++);
    return ($u = n.slice(t, 1 < a ? 1 - a : void 0));
  }
  function Fu(t) {
    var e = t.keyCode;
    return (
      "charCode" in t
        ? ((t = t.charCode), t === 0 && e === 13 && (t = 13))
        : (t = e),
      t === 10 && (t = 13),
      32 <= t || t === 13 ? t : 0
    );
  }
  function Iu() {
    return !0;
  }
  function Ar() {
    return !1;
  }
  function Re(t) {
    function e(l, a, n, u, i) {
      ((this._reactName = l),
        (this._targetInst = n),
        (this.type = a),
        (this.nativeEvent = u),
        (this.target = i),
        (this.currentTarget = null));
      for (var s in t)
        t.hasOwnProperty(s) && ((l = t[s]), (this[s] = l ? l(u) : u[s]));
      return (
        (this.isDefaultPrevented = (
          u.defaultPrevented != null ? u.defaultPrevented : u.returnValue === !1
        )
          ? Iu
          : Ar),
        (this.isPropagationStopped = Ar),
        this
      );
    }
    return (
      $(e.prototype, {
        preventDefault: function () {
          this.defaultPrevented = !0;
          var l = this.nativeEvent;
          l &&
            (l.preventDefault
              ? l.preventDefault()
              : typeof l.returnValue != "unknown" && (l.returnValue = !1),
            (this.isDefaultPrevented = Iu));
        },
        stopPropagation: function () {
          var l = this.nativeEvent;
          l &&
            (l.stopPropagation
              ? l.stopPropagation()
              : typeof l.cancelBubble != "unknown" && (l.cancelBubble = !0),
            (this.isPropagationStopped = Iu));
        },
        persist: function () {},
        isPersistent: Iu,
      }),
      e
    );
  }
  var Pl = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function (t) {
        return t.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0,
    },
    Wu = Re(Pl),
    $n = $({}, Pl, { view: 0, detail: 0 }),
    r0 = Re($n),
    Ac,
    Dc,
    Fn,
    Pu = $({}, $n, {
      screenX: 0,
      screenY: 0,
      clientX: 0,
      clientY: 0,
      pageX: 0,
      pageY: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      getModifierState: Rc,
      button: 0,
      buttons: 0,
      relatedTarget: function (t) {
        return t.relatedTarget === void 0
          ? t.fromElement === t.srcElement
            ? t.toElement
            : t.fromElement
          : t.relatedTarget;
      },
      movementX: function (t) {
        return "movementX" in t
          ? t.movementX
          : (t !== Fn &&
              (Fn && t.type === "mousemove"
                ? ((Ac = t.screenX - Fn.screenX), (Dc = t.screenY - Fn.screenY))
                : (Dc = Ac = 0),
              (Fn = t)),
            Ac);
      },
      movementY: function (t) {
        return "movementY" in t ? t.movementY : Dc;
      },
    }),
    Dr = Re(Pu),
    o0 = $({}, Pu, { dataTransfer: 0 }),
    d0 = Re(o0),
    h0 = $({}, $n, { relatedTarget: 0 }),
    Mc = Re(h0),
    m0 = $({}, Pl, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
    v0 = Re(m0),
    y0 = $({}, Pl, {
      clipboardData: function (t) {
        return "clipboardData" in t ? t.clipboardData : window.clipboardData;
      },
    }),
    g0 = Re(y0),
    p0 = $({}, Pl, { data: 0 }),
    Mr = Re(p0),
    b0 = {
      Esc: "Escape",
      Spacebar: " ",
      Left: "ArrowLeft",
      Up: "ArrowUp",
      Right: "ArrowRight",
      Down: "ArrowDown",
      Del: "Delete",
      Win: "OS",
      Menu: "ContextMenu",
      Apps: "ContextMenu",
      Scroll: "ScrollLock",
      MozPrintableKey: "Unidentified",
    },
    S0 = {
      8: "Backspace",
      9: "Tab",
      12: "Clear",
      13: "Enter",
      16: "Shift",
      17: "Control",
      18: "Alt",
      19: "Pause",
      20: "CapsLock",
      27: "Escape",
      32: " ",
      33: "PageUp",
      34: "PageDown",
      35: "End",
      36: "Home",
      37: "ArrowLeft",
      38: "ArrowUp",
      39: "ArrowRight",
      40: "ArrowDown",
      45: "Insert",
      46: "Delete",
      112: "F1",
      113: "F2",
      114: "F3",
      115: "F4",
      116: "F5",
      117: "F6",
      118: "F7",
      119: "F8",
      120: "F9",
      121: "F10",
      122: "F11",
      123: "F12",
      144: "NumLock",
      145: "ScrollLock",
      224: "Meta",
    },
    x0 = {
      Alt: "altKey",
      Control: "ctrlKey",
      Meta: "metaKey",
      Shift: "shiftKey",
    };
  function T0(t) {
    var e = this.nativeEvent;
    return e.getModifierState
      ? e.getModifierState(t)
      : (t = x0[t])
        ? !!e[t]
        : !1;
  }
  function Rc() {
    return T0;
  }
  var E0 = $({}, $n, {
      key: function (t) {
        if (t.key) {
          var e = b0[t.key] || t.key;
          if (e !== "Unidentified") return e;
        }
        return t.type === "keypress"
          ? ((t = Fu(t)), t === 13 ? "Enter" : String.fromCharCode(t))
          : t.type === "keydown" || t.type === "keyup"
            ? S0[t.keyCode] || "Unidentified"
            : "";
      },
      code: 0,
      location: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      repeat: 0,
      locale: 0,
      getModifierState: Rc,
      charCode: function (t) {
        return t.type === "keypress" ? Fu(t) : 0;
      },
      keyCode: function (t) {
        return t.type === "keydown" || t.type === "keyup" ? t.keyCode : 0;
      },
      which: function (t) {
        return t.type === "keypress"
          ? Fu(t)
          : t.type === "keydown" || t.type === "keyup"
            ? t.keyCode
            : 0;
      },
    }),
    j0 = Re(E0),
    N0 = $({}, Pu, {
      pointerId: 0,
      width: 0,
      height: 0,
      pressure: 0,
      tangentialPressure: 0,
      tiltX: 0,
      tiltY: 0,
      twist: 0,
      pointerType: 0,
      isPrimary: 0,
    }),
    Rr = Re(N0),
    _0 = $({}, Pl, { submitter: 0 }),
    z0 = Re(_0),
    C0 = $({}, $n, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: Rc,
    }),
    O0 = Re(C0),
    A0 = $({}, Pl, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
    D0 = Re(A0),
    M0 = $({}, Pu, {
      deltaX: function (t) {
        return "deltaX" in t
          ? t.deltaX
          : "wheelDeltaX" in t
            ? -t.wheelDeltaX
            : 0;
      },
      deltaY: function (t) {
        return "deltaY" in t
          ? t.deltaY
          : "wheelDeltaY" in t
            ? -t.wheelDeltaY
            : "wheelDelta" in t
              ? -t.wheelDelta
              : 0;
      },
      deltaZ: 0,
      deltaMode: 0,
    }),
    R0 = Re(M0),
    U0 = $({}, Pl, { newState: 0, oldState: 0, source: 0 }),
    H0 = Re(U0),
    w0 = [9, 13, 27, 32],
    Uc = Ul && "CompositionEvent" in window,
    In = null;
  Ul && "documentMode" in document && (In = document.documentMode);
  var q0 = Ul && "TextEvent" in window && !In,
    Ur = Ul && (!Uc || (In && 8 < In && 11 >= In)),
    Hr = " ",
    wr = !1;
  function qr(t, e) {
    switch (t) {
      case "keyup":
        return w0.indexOf(e.keyCode) !== -1;
      case "keydown":
        return e.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1;
    }
  }
  function Yr(t) {
    return (
      (t = t.detail),
      typeof t == "object" && "data" in t ? t.data : null
    );
  }
  var cn = !1;
  function Y0(t, e) {
    switch (t) {
      case "compositionend":
        return Yr(e);
      case "keypress":
        return e.which !== 32 ? null : ((wr = !0), Hr);
      case "textInput":
        return ((t = e.data), t === Hr && wr ? null : t);
      default:
        return null;
    }
  }
  function B0(t, e) {
    if (cn)
      return t === "compositionend" || (!Uc && qr(t, e))
        ? ((t = Or()), ($u = Oc = Wl = null), (cn = !1), t)
        : null;
    switch (t) {
      case "paste":
        return null;
      case "keypress":
        if (!(e.ctrlKey || e.altKey || e.metaKey) || (e.ctrlKey && e.altKey)) {
          if (e.char && 1 < e.char.length) return e.char;
          if (e.which) return String.fromCharCode(e.which);
        }
        return null;
      case "compositionend":
        return Ur && e.locale !== "ko" ? null : e.data;
      default:
        return null;
    }
  }
  var G0 = {
    color: !0,
    date: !0,
    datetime: !0,
    "datetime-local": !0,
    email: !0,
    month: !0,
    number: !0,
    password: !0,
    range: !0,
    search: !0,
    tel: !0,
    text: !0,
    time: !0,
    url: !0,
    week: !0,
  };
  function Br(t) {
    var e = t && t.nodeName && t.nodeName.toLowerCase();
    return e === "input" ? !!G0[t.type] : e === "textarea";
  }
  function Gr(t, e, l, a) {
    (nn ? (un ? un.push(a) : (un = [a])) : (nn = a),
      (e = tc(e, "onChange")),
      0 < e.length &&
        ((l = new Wu("onChange", "change", null, l, a)),
        t.push({ event: l, listeners: e })));
  }
  var Wn = null,
    Pn = null;
  function L0(t) {
    Ch(t, 0);
  }
  function ti(t) {
    var e = Kn(t);
    if (xr(e)) return t;
  }
  function Lr(t, e) {
    if (t === "change") return e;
  }
  var Vr = !1;
  if (Ul) {
    var Hc;
    if (Ul) {
      var wc = "oninput" in document;
      if (!wc) {
        var Xr = document.createElement("div");
        (Xr.setAttribute("oninput", "return;"),
          (wc = typeof Xr.oninput == "function"));
      }
      Hc = wc;
    } else Hc = !1;
    Vr = Hc && (!document.documentMode || 9 < document.documentMode);
  }
  function Qr() {
    Wn && (Wn.detachEvent("onpropertychange", Zr), (Pn = Wn = null));
  }
  function Zr(t) {
    if (t.propertyName === "value" && ti(Pn)) {
      var e = [];
      (Gr(e, Pn, t, _c(t)), Cr(L0, e));
    }
  }
  function V0(t, e, l) {
    t === "focusin"
      ? (Qr(), (Wn = e), (Pn = l), Wn.attachEvent("onpropertychange", Zr))
      : t === "focusout" && Qr();
  }
  function X0(t) {
    if (t === "selectionchange" || t === "keyup" || t === "keydown")
      return ti(Pn);
  }
  function Q0(t, e) {
    if (t === "click") return ti(e);
  }
  function Z0(t, e) {
    if (t === "input" || t === "change") return ti(e);
  }
  function K0(t, e) {
    return (t === e && (t !== 0 || 1 / t === 1 / e)) || (t !== t && e !== e);
  }
  var Je = typeof Object.is == "function" ? Object.is : K0;
  function tu(t, e) {
    if (Je(t, e)) return !0;
    if (
      typeof t != "object" ||
      t === null ||
      typeof e != "object" ||
      e === null
    )
      return !1;
    var l = Object.keys(t),
      a = Object.keys(e);
    if (l.length !== a.length) return !1;
    for (a = 0; a < l.length; a++) {
      var n = l[a];
      if (!g.call(e, n) || !Je(t[n], e[n])) return !1;
    }
    return !0;
  }
  function qc(t) {
    if (
      ((t = t || (typeof document < "u" ? document : void 0)), typeof t > "u")
    )
      return null;
    try {
      return t.activeElement || t.body;
    } catch {
      return t.body;
    }
  }
  function Kr(t) {
    for (; t && t.firstChild;) t = t.firstChild;
    return t;
  }
  function kr(t, e) {
    var l = Kr(t);
    t = 0;
    for (var a; l;) {
      if (l.nodeType === 3) {
        if (((a = t + l.textContent.length), t <= e && a >= e))
          return { node: l, offset: e - t };
        t = a;
      }
      t: {
        for (; l;) {
          if (l.nextSibling) {
            l = l.nextSibling;
            break t;
          }
          l = l.parentNode;
        }
        l = void 0;
      }
      l = Kr(l);
    }
  }
  function Jr(t, e) {
    return t && e
      ? t === e
        ? !0
        : t && t.nodeType === 3
          ? !1
          : e && e.nodeType === 3
            ? Jr(t, e.parentNode)
            : "contains" in t
              ? t.contains(e)
              : t.compareDocumentPosition
                ? !!(t.compareDocumentPosition(e) & 16)
                : !1
      : !1;
  }
  function $r(t) {
    t =
      t != null &&
      t.ownerDocument != null &&
      t.ownerDocument.defaultView != null
        ? t.ownerDocument.defaultView
        : window;
    for (var e = qc(t.document); e instanceof t.HTMLIFrameElement;) {
      try {
        var l = typeof e.contentWindow.location.href == "string";
      } catch {
        l = !1;
      }
      if (l) t = e.contentWindow;
      else break;
      e = qc(t.document);
    }
    return e;
  }
  function Yc(t) {
    var e = t && t.nodeName && t.nodeName.toLowerCase();
    return (
      e &&
      ((e === "input" &&
        (t.type === "text" ||
          t.type === "search" ||
          t.type === "tel" ||
          t.type === "url" ||
          t.type === "password")) ||
        e === "textarea" ||
        t.contentEditable === "true")
    );
  }
  var k0 = Ul && "documentMode" in document && 11 >= document.documentMode,
    sn = null,
    Bc = null,
    eu = null,
    Gc = !1;
  function Fr(t, e, l) {
    var a =
      l.window === l ? l.document : l.nodeType === 9 ? l : l.ownerDocument;
    Gc ||
      sn == null ||
      sn !== qc(a) ||
      ((a = sn),
      "selectionStart" in a && Yc(a)
        ? (a = { start: a.selectionStart, end: a.selectionEnd })
        : ((a = (
            (a.ownerDocument && a.ownerDocument.defaultView) ||
            window
          ).getSelection()),
          (a = {
            anchorNode: a.anchorNode,
            anchorOffset: a.anchorOffset,
            focusNode: a.focusNode,
            focusOffset: a.focusOffset,
          })),
      (eu && tu(eu, a)) ||
        ((eu = a),
        (a = tc(Bc, "onSelect")),
        0 < a.length &&
          ((e = new Wu("onSelect", "select", null, e, l)),
          t.push({ event: e, listeners: a }),
          (e.target = sn))));
  }
  function Aa(t, e) {
    var l = {};
    return (
      (l[t.toLowerCase()] = e.toLowerCase()),
      (l["Webkit" + t] = "webkit" + e),
      (l["Moz" + t] = "moz" + e),
      l
    );
  }
  var fn = {
      animationend: Aa("Animation", "AnimationEnd"),
      animationiteration: Aa("Animation", "AnimationIteration"),
      animationstart: Aa("Animation", "AnimationStart"),
      transitionrun: Aa("Transition", "TransitionRun"),
      transitionstart: Aa("Transition", "TransitionStart"),
      transitioncancel: Aa("Transition", "TransitionCancel"),
      transitionend: Aa("Transition", "TransitionEnd"),
    },
    Lc = {},
    Ir = {};
  Ul &&
    ((Ir = document.createElement("div").style),
    "AnimationEvent" in window ||
      (delete fn.animationend.animation,
      delete fn.animationiteration.animation,
      delete fn.animationstart.animation),
    "TransitionEvent" in window || delete fn.transitionend.transition);
  function Da(t) {
    if (Lc[t]) return Lc[t];
    if (!fn[t]) return t;
    var e = fn[t],
      l;
    for (l in e) if (e.hasOwnProperty(l) && l in Ir) return (Lc[t] = e[l]);
    return t;
  }
  var Wr = Da("animationend"),
    Pr = Da("animationiteration"),
    to = Da("animationstart"),
    J0 = Da("transitionrun"),
    $0 = Da("transitionstart"),
    F0 = Da("transitioncancel"),
    eo = Da("transitionend"),
    lo = new Map(),
    Vc =
      "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error fullscreenChange fullscreenError gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
        " ",
      );
  Vc.push("scrollEnd");
  function ol(t, e) {
    (lo.set(t, e), Oa(e, [t]));
  }
  var I0 = 0;
  function Hl(t, e) {
    if (t.name != null && t.name !== "auto") return t.name;
    if (e.autoName !== null) return e.autoName;
    t = vl.identifierPrefix;
    var l = I0++;
    return ((t = "_" + t + "t_" + l.toString(32) + "_"), (e.autoName = t));
  }
  function ao(t) {
    if (t == null || typeof t == "string") return t;
    var e = null,
      l = On;
    if (l !== null)
      for (var a = 0; a < l.length; a++) {
        var n = t[l[a]];
        if (n != null) {
          if (n === "none") return "none";
          e = e == null ? n : e + (" " + n);
        }
      }
    return e ?? t.default;
  }
  function wl(t, e) {
    return (
      (t = ao(t)),
      (e = ao(e)),
      e == null ? (t === "auto" ? null : t) : e === "auto" ? null : e
    );
  }
  var ei =
      typeof reportError == "function"
        ? reportError
        : function (t) {
            if (
              typeof window == "object" &&
              typeof window.ErrorEvent == "function"
            ) {
              var e = new window.ErrorEvent("error", {
                bubbles: !0,
                cancelable: !0,
                message:
                  typeof t == "object" &&
                  t !== null &&
                  typeof t.message == "string"
                    ? String(t.message)
                    : String(t),
                error: t,
              });
              if (!window.dispatchEvent(e)) return;
            } else if (
              typeof process == "object" &&
              typeof process.emit == "function"
            ) {
              process.emit("uncaughtException", t);
              return;
            }
            console.error(t);
          },
    al = [],
    rn = 0,
    Xc = 0;
  function li() {
    for (var t = rn, e = (Xc = rn = 0); e < t;) {
      var l = al[e];
      al[e++] = null;
      var a = al[e];
      al[e++] = null;
      var n = al[e];
      al[e++] = null;
      var u = al[e];
      if (((al[e++] = null), a !== null && n !== null)) {
        var i = a.pending;
        (i === null ? (n.next = n) : ((n.next = i.next), (i.next = n)),
          (a.pending = n));
      }
      u !== 0 && no(l, n, u);
    }
  }
  function ai(t, e, l, a) {
    ((al[rn++] = t),
      (al[rn++] = e),
      (al[rn++] = l),
      (al[rn++] = a),
      (Xc |= a),
      (t.lanes |= a),
      (t = t.alternate),
      t !== null && (t.lanes |= a));
  }
  function Qc(t, e, l, a) {
    return (ai(t, e, l, a), ni(t));
  }
  function Ma(t, e) {
    return (ai(t, null, null, e), ni(t));
  }
  function no(t, e, l) {
    t.lanes |= l;
    var a = t.alternate;
    a !== null && (a.lanes |= l);
    for (var n = !1, u = t.return; u !== null;)
      ((u.childLanes |= l),
        (a = u.alternate),
        a !== null && (a.childLanes |= l),
        u.tag === 22 &&
          ((t = u.stateNode), t === null || t._visibility & 1 || (n = !0)),
        (t = u),
        (u = u.return));
    return t.tag === 3
      ? ((u = t.stateNode),
        n &&
          e !== null &&
          ((n = 31 - Ke(l)),
          (t = u.hiddenUpdates),
          (a = t[n]),
          a === null ? (t[n] = [e]) : a.push(e),
          (e.lane = l | 536870912)),
        u)
      : null;
  }
  function ni(t) {
    if (50 < Eu) throw ((Eu = 0), (ki = null), Error(o(185)));
    for (var e = t.return; e !== null;) ((t = e), (e = t.return));
    return t.tag === 3 ? t.stateNode : null;
  }
  var on = {};
  function W0(t, e, l, a) {
    ((this.tag = t),
      (this.key = l),
      (this.sibling =
        this.child =
        this.return =
        this.stateNode =
        this.type =
        this.elementType =
          null),
      (this.index = 0),
      (this.refCleanup = this.ref = null),
      (this.pendingProps = e),
      (this.dependencies =
        this.memoizedState =
        this.updateQueue =
        this.memoizedProps =
          null),
      (this.mode = a),
      (this.subtreeFlags = this.flags = 0),
      (this.deletions = null),
      (this.childLanes = this.lanes = 0),
      (this.alternate = null));
  }
  function Be(t, e, l, a) {
    return new W0(t, e, l, a);
  }
  function Zc(t) {
    return ((t = t.prototype), !(!t || !t.isReactComponent));
  }
  function ql(t, e) {
    var l = t.alternate;
    return (
      l === null
        ? ((l = Be(t.tag, e, t.key, t.mode)),
          (l.elementType = t.elementType),
          (l.type = t.type),
          (l.stateNode = t.stateNode),
          (l.alternate = t),
          (t.alternate = l))
        : ((l.pendingProps = e),
          (l.type = t.type),
          (l.flags = 0),
          (l.subtreeFlags = 0),
          (l.deletions = null)),
      (l.flags = t.flags & 1206910976),
      (l.childLanes = t.childLanes),
      (l.lanes = t.lanes),
      (l.child = t.child),
      (l.memoizedProps = t.memoizedProps),
      (l.memoizedState = t.memoizedState),
      (l.updateQueue = t.updateQueue),
      (e = t.dependencies),
      (l.dependencies =
        e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }),
      (l.sibling = t.sibling),
      (l.index = t.index),
      (l.ref = t.ref),
      (l.refCleanup = t.refCleanup),
      l
    );
  }
  function uo(t, e) {
    t.flags &= 1206910978;
    var l = t.alternate;
    return (
      l === null
        ? ((t.childLanes = 0),
          (t.lanes = e),
          (t.child = null),
          (t.subtreeFlags = 0),
          (t.memoizedProps = null),
          (t.memoizedState = null),
          (t.updateQueue = null),
          (t.dependencies = null),
          (t.stateNode = null))
        : ((t.childLanes = l.childLanes),
          (t.lanes = l.lanes),
          (t.child = l.child),
          (t.subtreeFlags = 0),
          (t.deletions = null),
          (t.memoizedProps = l.memoizedProps),
          (t.memoizedState = l.memoizedState),
          (t.updateQueue = l.updateQueue),
          (t.type = l.type),
          (e = l.dependencies),
          (t.dependencies =
            e === null
              ? null
              : { lanes: e.lanes, firstContext: e.firstContext })),
      t
    );
  }
  function ui(t, e, l, a, n, u) {
    var i = 0;
    if (((a = t), typeof a == "function")) Zc(a) && (i = 1);
    else if (typeof a == "string")
      i = _y(t, l, jt.current)
        ? 26
        : t === "html" || t === "head" || t === "body"
          ? 27
          : 5;
    else
      t: switch (a) {
        case G:
          return ((t = Be(31, l, e, n)), (t.elementType = G), (t.lanes = u), t);
        case A:
          return Ra(l.children, n, u, e);
        case H:
          ((i = 8), (n |= 24));
          break;
        case ot:
          return (
            (t = Be(12, l, e, n | 2)),
            (t.elementType = ot),
            (t.lanes = u),
            t
          );
        case B:
          return ((t = Be(13, l, e, n)), (t.elementType = B), (t.lanes = u), t);
        case d:
          return ((t = Be(19, l, e, n)), (t.elementType = d), (t.lanes = u), t);
        case q:
        case r:
          return (
            (t = n | 32),
            (t = Be(30, l, e, t)),
            (t.elementType = r),
            (t.lanes = u),
            (t.stateNode = {
              autoName: null,
              paired: null,
              clones: null,
              ref: null,
            }),
            t
          );
        default:
          if (typeof a == "object" && a !== null)
            switch (a.$$typeof) {
              case nt:
                i = 10;
                break t;
              case Ct:
                i = 9;
                break t;
              case O:
                i = 11;
                break t;
              case C:
                i = 14;
                break t;
              case k:
                ((i = 16), (a = null));
                break t;
            }
          ((i = 29),
            (l = Error(o(130, t === null ? "null" : typeof t, ""))),
            (a = null));
      }
    return (
      (e = Be(i, l, e, n)),
      (e.elementType = t),
      (e.type = a),
      (e.lanes = u),
      e
    );
  }
  function Ra(t, e, l, a) {
    return ((t = Be(7, t, a, e)), (t.lanes = l), t);
  }
  function Kc(t, e, l) {
    return ((t = Be(6, t, null, e)), (t.lanes = l), t);
  }
  function io(t) {
    var e = Be(18, null, null, 0);
    return ((e.stateNode = t), e);
  }
  function kc(t, e, l) {
    return (
      (e = Be(4, t.children !== null ? t.children : [], t.key, e)),
      (e.lanes = l),
      (e.stateNode = {
        containerInfo: t.containerInfo,
        pendingChildren: null,
        implementation: t.implementation,
      }),
      e
    );
  }
  var co = new WeakMap();
  function nl(t, e) {
    if (typeof t == "object" && t !== null) {
      var l = co.get(t);
      return l !== void 0
        ? l
        : ((e = { value: t, source: e, stack: gl(e) }), co.set(t, e), e);
    }
    return { value: t, source: e, stack: gl(e) };
  }
  var dn = [],
    hn = 0,
    ii = null,
    lu = 0,
    ul = [],
    il = 0,
    ta = null,
    bl = 1,
    Sl = "";
  function Yl(t, e) {
    ((dn[hn++] = lu), (dn[hn++] = ii), (ii = t), (lu = e));
  }
  function so(t, e, l) {
    ((ul[il++] = bl), (ul[il++] = Sl), (ul[il++] = ta), (ta = t));
    var a = bl;
    t = Sl;
    var n = 32 - Ke(a) - 1;
    ((a &= ~(1 << n)), (l += 1));
    var u = 32 - Ke(e) + n;
    if (30 < u) {
      var i = n - (n % 5);
      ((u = (a & ((1 << i) - 1)).toString(32)),
        (a >>= i),
        (n -= i),
        (bl = (1 << (32 - Ke(e) + n)) | (l << n) | a),
        (Sl = u + t));
    } else ((bl = (1 << u) | (l << n) | a), (Sl = t));
  }
  function ci(t) {
    t.return !== null && (Yl(t, 1), so(t, 1, 0));
  }
  function Jc(t) {
    for (; t === ii;)
      ((ii = dn[--hn]), (dn[hn] = null), (lu = dn[--hn]), (dn[hn] = null));
    for (; t === ta;)
      ((ta = ul[--il]),
        (ul[il] = null),
        (Sl = ul[--il]),
        (ul[il] = null),
        (bl = ul[--il]),
        (ul[il] = null));
  }
  function fo(t, e) {
    ((ul[il++] = bl),
      (ul[il++] = Sl),
      (ul[il++] = ta),
      (bl = e.id),
      (Sl = e.overflow),
      (ta = t));
  }
  var ye = null,
    Wt = null,
    _t = !1,
    ea = null,
    cl = !1,
    $c = Error(o(519));
  function la(t) {
    var e = Error(
      o(
        418,
        1 < arguments.length && arguments[1] !== void 0 && arguments[1]
          ? "text"
          : "HTML",
        "",
      ),
    );
    throw (au(nl(e, t)), $c);
  }
  function ro(t) {
    var e = t.stateNode,
      l = t.type,
      a = t.memoizedProps;
    switch (((e[be] = t), (e[Ye] = a), l)) {
      case "dialog":
        (At("cancel", e), At("close", e));
        break;
      case "iframe":
      case "object":
      case "embed":
        At("load", e);
        break;
      case "video":
      case "audio":
        for (l = 0; l < Nu.length; l++) At(Nu[l], e);
        break;
      case "source":
        At("error", e);
        break;
      case "img":
      case "image":
      case "link":
        (At("error", e), At("load", e));
        break;
      case "details":
        At("toggle", e);
        break;
      case "input":
        (At("invalid", e),
          Tr(
            e,
            a.value,
            a.defaultValue,
            a.checked,
            a.defaultChecked,
            a.type,
            a.name,
            !0,
          ));
        break;
      case "select":
        At("invalid", e);
        break;
      case "textarea":
        (At("invalid", e), jr(e, a.value, a.defaultValue, a.children));
    }
    ((l = a.children),
      (typeof l != "string" && typeof l != "number" && typeof l != "bigint") ||
      e.textContent === "" + l ||
      a.suppressHydrationWarning === !0 ||
      Mh(e.textContent, l)
        ? (a.popover != null && (At("beforetoggle", e), At("toggle", e)),
          a.onScroll != null && At("scroll", e),
          a.onScrollEnd != null && At("scrollend", e),
          a.onClick != null && (e.onclick = pl),
          (e = !0))
        : (e = !1),
      e || la(t, !0));
  }
  function si(t) {
    for (ye = t.return; ye;)
      switch (ye.tag) {
        case 5:
        case 31:
        case 13:
          cl = !1;
          return;
        case 27:
        case 3:
          cl = !0;
          return;
        default:
          ye = ye.return;
      }
  }
  function mn(t) {
    if (t !== ye) return !1;
    if (!_t) return (si(t), (_t = !0), !1);
    var e = t.tag,
      l;
    if (
      ((l = e !== 3 && e !== 27) &&
        ((l = e === 5) &&
          ((l = t.type),
          (l =
            !(l !== "form" && l !== "button") || _f(t.type, t.memoizedProps))),
        (l = !l)),
      l && Wt && la(t),
      si(t),
      e === 13)
    ) {
      if (((t = t.memoizedState), (t = t !== null ? t.dehydrated : null), !t))
        throw Error(o(317));
      Wt = Ih(t);
    } else if (e === 31) {
      if (((t = t.memoizedState), (t = t !== null ? t.dehydrated : null), !t))
        throw Error(o(317));
      Wt = Ih(t);
    } else
      e === 27
        ? ((e = Wt), pa(t.type) ? ((t = Hf), (Hf = null), (Wt = t)) : (Wt = e))
        : (Wt = ye ? fl(t.stateNode.nextSibling) : null);
    return !0;
  }
  function Ua() {
    ((Wt = ye = null), (_t = !1));
  }
  function Fc() {
    var t = ea;
    return (
      t !== null &&
        (Ve === null ? (Ve = t) : Ve.push.apply(Ve, t), (ea = null)),
      t
    );
  }
  function au(t) {
    ea === null ? (ea = [t]) : ea.push(t);
  }
  var Ic = it(null),
    Ha = null,
    Bl = null;
  function aa(t, e, l) {
    (at(Ic, e._currentValue), (e._currentValue = l));
  }
  function Gl(t) {
    ((t._currentValue = Ic.current), Nt(Ic));
  }
  function fi(t, e, l) {
    for (; t !== null;) {
      var a = t.alternate;
      if (
        ((t.childLanes & e) !== e
          ? ((t.childLanes |= e), a !== null && (a.childLanes |= e))
          : a !== null && (a.childLanes & e) !== e && (a.childLanes |= e),
        t === l)
      )
        break;
      t = t.return;
    }
  }
  function Wc(t, e, l, a) {
    var n = t.child;
    for (n !== null && (n.return = t); n !== null;) {
      var u = n.dependencies;
      if (u !== null) {
        var i = n.child;
        u = u.firstContext;
        t: for (; u !== null;) {
          var s = u;
          u = n;
          for (var f = 0; f < e.length; f++)
            if (s.context === e[f]) {
              ((u.lanes |= l),
                (s = u.alternate),
                s !== null && (s.lanes |= l),
                fi(u.return, l, t),
                a || (i = null));
              break t;
            }
          u = s.next;
        }
      } else if (n.tag === 18) {
        if (((i = n.return), i === null)) throw Error(o(341));
        ((i.lanes |= l),
          (u = i.alternate),
          u !== null && (u.lanes |= l),
          fi(i, l, t),
          (i = null));
      } else
        n.tag === 13 &&
        n.memoizedState !== null &&
        n.memoizedState.dehydrated === null
          ? ((n.lanes |= l),
            (i = n.alternate),
            i !== null && (i.lanes |= l),
            fi(n.return, l, t),
            (i = n.child),
            (i = i !== null ? i.sibling : null))
          : (i = n.child);
      if (i !== null) i.return = n;
      else
        for (i = n; i !== null;) {
          if (i === t) {
            i = null;
            break;
          }
          if (((n = i.sibling), n !== null)) {
            ((n.return = i.return), (i = n));
            break;
          }
          i = i.return;
        }
      n = i;
    }
  }
  function wa(t, e, l, a) {
    t = null;
    for (var n = e, u = !1; n !== null;) {
      if (!u) {
        if ((n.flags & 524288) !== 0) u = !0;
        else if ((n.flags & 262144) !== 0) break;
      }
      if (n.tag === 10) {
        var i = n.alternate;
        if (i === null) throw Error(o(387));
        if (((i = i.memoizedProps), i !== null)) {
          var s = n.type;
          Je(n.pendingProps.value, i.value) ||
            (t !== null ? t.push(s) : (t = [s]));
        }
      } else if (n === he.current) {
        if (((i = n.alternate), i === null)) throw Error(o(387));
        i.memoizedState.memoizedState !== n.memoizedState.memoizedState &&
          (t !== null ? t.push(Bn) : (t = [Bn]));
      }
      n = n.return;
    }
    return (t !== null && Wc(e, t, l, a), (e.flags |= 262144), t !== null);
  }
  function ri(t) {
    for (t = t.firstContext; t !== null;) {
      if (!Je(t.context._currentValue, t.memoizedValue)) return !0;
      t = t.next;
    }
    return !1;
  }
  function qa(t) {
    ((Ha = t),
      (Bl = null),
      (t = t.dependencies),
      t !== null && (t.firstContext = null));
  }
  function Se(t) {
    return oo(Ha, t);
  }
  function oi(t, e) {
    return (Ha === null && qa(t), oo(t, e));
  }
  function oo(t, e) {
    var l = e._currentValue;
    if (((e = { context: e, memoizedValue: l, next: null }), Bl === null)) {
      if (t === null) throw Error(o(308));
      ((Bl = e),
        (t.dependencies = { lanes: 0, firstContext: e }),
        (t.flags |= 524288));
    } else Bl = Bl.next = e;
    return l;
  }
  var P0 =
      typeof AbortController < "u"
        ? AbortController
        : function () {
            var t = [],
              e = (this.signal = {
                aborted: !1,
                addEventListener: function (l, a) {
                  t.push(a);
                },
              });
            this.abort = function () {
              ((e.aborted = !0),
                t.forEach(function (l) {
                  return l();
                }));
            };
          },
    tv = S.unstable_scheduleCallback,
    ev = S.unstable_NormalPriority,
    ce = {
      $$typeof: nt,
      Consumer: null,
      Provider: null,
      _currentValue: null,
      _currentValue2: null,
      _threadCount: 0,
    };
  function Pc() {
    return { controller: new P0(), data: new Map(), refCount: 0 };
  }
  function nu(t) {
    (t.refCount--,
      t.refCount === 0 &&
        tv(ev, function () {
          t.controller.abort();
        }));
  }
  function ho(t, e) {
    if ((t.pendingLanes & 4194048) !== 0) {
      var l = t.transitionTypes;
      for (
        l === null && (l = t.transitionTypes = []), t = 0;
        t < e.length;
        t++
      ) {
        var a = e[t];
        l.indexOf(a) === -1 && l.push(a);
      }
    }
  }
  var uu = null;
  function lv(t) {
    var e = t.transitionTypes;
    return ((t.transitionTypes = null), e);
  }
  var iu = null,
    ts = 0,
    Ya = 0,
    vn = null;
  function av(t, e) {
    if (iu === null) {
      var l = (iu = []);
      ((ts = 0),
        (Ya = gf()),
        (vn = {
          status: "pending",
          value: void 0,
          then: function (a) {
            l.push(a);
          },
        }));
    }
    return (ts++, e.then(mo, mo), e);
  }
  function mo() {
    if (--ts === 0 && ((uu = null), iu !== null)) {
      vn !== null && (vn.status = "fulfilled");
      var t = iu;
      ((iu = null), (Ya = 0), (vn = null));
      for (var e = 0; e < t.length; e++) (0, t[e])();
    }
  }
  function nv(t, e) {
    var l = [],
      a = {
        status: "pending",
        value: null,
        reason: null,
        then: function (n) {
          l.push(n);
        },
      };
    return (
      t.then(
        function () {
          ((a.status = "fulfilled"), (a.value = e));
          for (var n = 0; n < l.length; n++) (0, l[n])(e);
        },
        function (n) {
          for (a.status = "rejected", a.reason = n, n = 0; n < l.length; n++)
            (0, l[n])(void 0);
        },
      ),
      a
    );
  }
  var vo = U.S;
  U.S = function (t, e) {
    if (
      ((ch = ue()),
      typeof e == "object" &&
        e !== null &&
        typeof e.then == "function" &&
        av(t, e),
      uu !== null)
    )
      for (var l = Rn; l !== null;) (ho(l, uu), (l = l.next));
    if (((l = t.types), l !== null)) {
      for (var a = Rn; a !== null;) (ho(a, l), (a = a.next));
      if (Ya !== 0) {
        ((a = uu), a === null && (a = uu = []));
        for (var n = 0; n < l.length; n++) {
          var u = l[n];
          a.indexOf(u) === -1 && a.push(u);
        }
      }
    }
    vo !== null && vo(t, e);
  };
  var Ba = it(null);
  function es() {
    var t = Ba.current;
    return t !== null ? t : Ft.pooledCache;
  }
  function di(t, e) {
    e === null ? at(Ba, Ba.current) : at(Ba, e.pool);
  }
  function yo() {
    var t = es();
    return t === null ? null : { parent: ce._currentValue, pool: t };
  }
  var yn = Error(o(460)),
    ls = Error(o(474)),
    hi = Error(o(542)),
    mi = { then: function () {} };
  function go(t) {
    return ((t = t.status), t === "fulfilled" || t === "rejected");
  }
  function po(t, e, l) {
    switch (
      ((l = t[l]),
      l === void 0 ? t.push(e) : l !== e && (e.then(pl, pl), (e = l)),
      e.status)
    ) {
      case "fulfilled":
        return e.value;
      case "rejected":
        throw (
          (t = e.reason),
          So(t),
          t === void 0 && !("reason" in e) ? Error(o(600)) : t
        );
      default:
        if (typeof e.status == "string") e.then(pl, pl);
        else {
          if (((t = Ft), t !== null && 100 < t.shellSuspendCounter))
            throw Error(o(482));
          ((t = e),
            (t.status = "pending"),
            t.then(
              function (a) {
                if (e.status === "pending") {
                  var n = e;
                  ((n.status = "fulfilled"), (n.value = a));
                }
              },
              function (a) {
                if (e.status === "pending") {
                  var n = e;
                  ((n.status = "rejected"), (n.reason = a));
                }
              },
            ));
        }
        switch (e.status) {
          case "fulfilled":
            return e.value;
          case "rejected":
            throw ((t = e.reason), So(t), t);
        }
        throw ((La = e), yn);
    }
  }
  function Ga(t) {
    try {
      var e = t._init;
      return e(t._payload);
    } catch (l) {
      throw l !== null && typeof l == "object" && typeof l.then == "function"
        ? ((La = l), yn)
        : l;
    }
  }
  var La = null;
  function bo() {
    if (La === null) throw Error(o(459));
    var t = La;
    return ((La = null), t);
  }
  function So(t) {
    if (t === yn || t === hi) throw Error(o(483));
  }
  var gn = null,
    cu = 0;
  function vi(t) {
    var e = cu;
    return ((cu += 1), gn === null && (gn = []), po(gn, t, e));
  }
  function na(t, e) {
    ((e = e.props.ref), (t.ref = e !== void 0 ? e : null));
  }
  function yi(t, e) {
    throw e.$$typeof === m
      ? Error(o(525))
      : ((t = Object.prototype.toString.call(e)),
        Error(
          o(
            31,
            t === "[object Object]"
              ? "object with keys {" + Object.keys(e).join(", ") + "}"
              : t,
          ),
        ));
  }
  function xo(t) {
    function e(p, h) {
      if (t) {
        var T = p.deletions;
        T === null ? ((p.deletions = [h]), (p.flags |= 16)) : T.push(h);
      }
    }
    function l(p, h) {
      if (!t) return null;
      for (; h !== null;) (e(p, h), (h = h.sibling));
      return null;
    }
    function a(p) {
      for (var h = new Map(); p !== null;)
        (p.key === null ? h.set(p.index, p) : h.set(p.key, p), (p = p.sibling));
      return h;
    }
    function n(p, h) {
      return ((p = ql(p, h)), (p.index = 0), (p.sibling = null), p);
    }
    function u(p, h, T) {
      return (
        (p.index = T),
        t
          ? ((T = p.alternate),
            T !== null
              ? ((T = T.index), T < h ? ((p.flags |= 2), h) : T)
              : ((p.flags |= 134217730), h))
          : ((p.flags |= 1048576), h)
      );
    }
    function i(p) {
      return (t && p.alternate === null && (p.flags |= 134217730), p);
    }
    function s(p, h, T, D) {
      return h === null || h.tag !== 6
        ? ((h = Kc(T, p.mode, D)), (h.return = p), h)
        : ((h = n(h, T)), (h.return = p), h);
    }
    function f(p, h, T, D) {
      var et = T.type;
      return et === A
        ? ((p = _(p, h, T.props.children, D, T.key)), na(p, T), p)
        : h !== null &&
            (h.elementType === et ||
              (typeof et == "object" &&
                et !== null &&
                et.$$typeof === k &&
                Ga(et) === h.type))
          ? ((h = n(h, T.props)), na(h, T), (h.return = p), h)
          : ((h = ui(T.type, T.key, T.props, null, p.mode, D)),
            na(h, T),
            (h.return = p),
            h);
    }
    function b(p, h, T, D) {
      return h === null ||
        h.tag !== 4 ||
        h.stateNode.containerInfo !== T.containerInfo ||
        h.stateNode.implementation !== T.implementation
        ? ((h = kc(T, p.mode, D)), (h.return = p), h)
        : ((h = n(h, T.children || [])), (h.return = p), h);
    }
    function _(p, h, T, D, et) {
      return h === null || h.tag !== 7
        ? ((h = Ra(T, p.mode, D, et)), (h.return = p), h)
        : ((h = n(h, T)), (h.return = p), h);
    }
    function M(p, h, T) {
      if (
        (typeof h == "string" && h !== "") ||
        typeof h == "number" ||
        typeof h == "bigint"
      )
        return ((h = Kc("" + h, p.mode, T)), (h.return = p), h);
      if (typeof h == "object" && h !== null) {
        switch (h.$$typeof) {
          case y:
            return (
              (T = ui(h.type, h.key, h.props, null, p.mode, T)),
              na(T, h),
              (T.return = p),
              T
            );
          case x:
            return ((h = kc(h, p.mode, T)), (h.return = p), h);
          case k:
            return ((h = Ga(h)), M(p, h, T));
        }
        if (ut(h) || I(h))
          return ((h = Ra(h, p.mode, T, null)), (h.return = p), h);
        if (typeof h.then == "function") return M(p, vi(h), T);
        if (h.$$typeof === nt) return M(p, oi(p, h), T);
        yi(p, h);
      }
      return null;
    }
    function v(p, h, T, D) {
      var et = h !== null ? h.key : null;
      if (
        (typeof T == "string" && T !== "") ||
        typeof T == "number" ||
        typeof T == "bigint"
      )
        return et !== null ? null : s(p, h, "" + T, D);
      if (typeof T == "object" && T !== null) {
        switch (T.$$typeof) {
          case y:
            return T.key === et ? f(p, h, T, D) : null;
          case x:
            return T.key === et ? b(p, h, T, D) : null;
          case k:
            return ((T = Ga(T)), v(p, h, T, D));
        }
        if (ut(T) || I(T)) return et !== null ? null : _(p, h, T, D, null);
        if (typeof T.then == "function") return v(p, h, vi(T), D);
        if (T.$$typeof === nt) return v(p, h, oi(p, T), D);
        yi(p, T);
      }
      return null;
    }
    function E(p, h, T, D, et) {
      if (
        (typeof D == "string" && D !== "") ||
        typeof D == "number" ||
        typeof D == "bigint"
      )
        return ((p = p.get(T) || null), s(h, p, "" + D, et));
      if (typeof D == "object" && D !== null) {
        switch (D.$$typeof) {
          case y:
            return (
              (p = p.get(D.key === null ? T : D.key) || null),
              f(h, p, D, et)
            );
          case x:
            return (
              (p = p.get(D.key === null ? T : D.key) || null),
              b(h, p, D, et)
            );
          case k:
            return ((D = Ga(D)), E(p, h, T, D, et));
        }
        if (ut(D) || I(D))
          return ((p = p.get(T) || null), _(h, p, D, et, null));
        if (typeof D.then == "function") return E(p, h, T, vi(D), et);
        if (D.$$typeof === nt) return E(p, h, T, oi(h, D), et);
        yi(h, D);
      }
      return null;
    }
    function K(p, h, T, D) {
      for (
        var et = null, Rt = null, ft = h, ht = (h = 0), re = null;
        ft !== null && ht < T.length;
        ht++
      ) {
        ft.index > ht ? ((re = ft), (ft = null)) : (re = ft.sibling);
        var wt = v(p, ft, T[ht], D);
        if (wt === null) {
          ft === null && (ft = re);
          break;
        }
        (t && ft && wt.alternate === null && e(p, ft),
          (h = u(wt, h, ht)),
          Rt === null ? (et = wt) : (Rt.sibling = wt),
          (Rt = wt),
          (ft = re));
      }
      if (ht === T.length) return (l(p, ft), _t && Yl(p, ht), et);
      if (ft === null) {
        for (; ht < T.length; ht++)
          ((ft = M(p, T[ht], D)),
            ft !== null &&
              ((h = u(ft, h, ht)),
              Rt === null ? (et = ft) : (Rt.sibling = ft),
              (Rt = ft)));
        return (_t && Yl(p, ht), et);
      }
      for (ft = a(ft); ht < T.length; ht++)
        ((re = E(ft, p, ht, T[ht], D)),
          re !== null &&
            (t &&
              ((wt = re.alternate),
              wt !== null && ft.delete(wt.key === null ? ht : wt.key)),
            (h = u(re, h, ht)),
            Rt === null ? (et = re) : (Rt.sibling = re),
            (Rt = re)));
      return (
        t &&
          ft.forEach(function (Ea) {
            return e(p, Ea);
          }),
        _t && Yl(p, ht),
        et
      );
    }
    function lt(p, h, T, D) {
      if (T == null) throw Error(o(151));
      for (
        var et = null,
          Rt = null,
          ft = h,
          ht = (h = 0),
          re = null,
          wt = T.next();
        ft !== null && !wt.done;
        ht++, wt = T.next()
      ) {
        ft.index > ht ? ((re = ft), (ft = null)) : (re = ft.sibling);
        var Ea = v(p, ft, wt.value, D);
        if (Ea === null) {
          ft === null && (ft = re);
          break;
        }
        (t && ft && Ea.alternate === null && e(p, ft),
          (h = u(Ea, h, ht)),
          Rt === null ? (et = Ea) : (Rt.sibling = Ea),
          (Rt = Ea),
          (ft = re));
      }
      if (wt.done) return (l(p, ft), _t && Yl(p, ht), et);
      if (ft === null) {
        for (; !wt.done; ht++, wt = T.next())
          ((wt = M(p, wt.value, D)),
            wt !== null &&
              ((h = u(wt, h, ht)),
              Rt === null ? (et = wt) : (Rt.sibling = wt),
              (Rt = wt)));
        return (_t && Yl(p, ht), et);
      }
      for (ft = a(ft); !wt.done; ht++, wt = T.next())
        ((wt = E(ft, p, ht, wt.value, D)),
          wt !== null &&
            (t &&
              ((re = wt.alternate),
              re !== null && ft.delete(re.key === null ? ht : re.key)),
            (h = u(wt, h, ht)),
            Rt === null ? (et = wt) : (Rt.sibling = wt),
            (Rt = wt)));
      return (
        t &&
          ft.forEach(function (Yy) {
            return e(p, Yy);
          }),
        _t && Yl(p, ht),
        et
      );
    }
    function Tt(p, h, T, D) {
      if (
        (typeof T == "object" &&
          T !== null &&
          T.type === A &&
          T.key === null &&
          T.props.ref === void 0 &&
          (T = T.props.children),
        typeof T == "object" && T !== null)
      ) {
        switch (T.$$typeof) {
          case y:
            t: {
              for (var et = T.key; h !== null;) {
                if (h.key === et) {
                  if (((et = T.type), et === A)) {
                    if (h.tag === 7) {
                      (l(p, h.sibling),
                        (D = n(h, T.props.children)),
                        na(D, T),
                        (D.return = p),
                        (p = D));
                      break t;
                    }
                  } else if (
                    h.elementType === et ||
                    (typeof et == "object" &&
                      et !== null &&
                      et.$$typeof === k &&
                      Ga(et) === h.type)
                  ) {
                    (l(p, h.sibling),
                      (D = n(h, T.props)),
                      na(D, T),
                      (D.return = p),
                      (p = D));
                    break t;
                  }
                  l(p, h);
                  break;
                } else e(p, h);
                h = h.sibling;
              }
              T.type === A
                ? ((D = Ra(T.props.children, p.mode, D, T.key)),
                  na(D, T),
                  (D.return = p),
                  (p = D))
                : ((D = ui(T.type, T.key, T.props, null, p.mode, D)),
                  na(D, T),
                  (D.return = p),
                  (p = D));
            }
            return i(p);
          case x:
            t: {
              for (et = T.key; h !== null;) {
                if (h.key === et)
                  if (
                    h.tag === 4 &&
                    h.stateNode.containerInfo === T.containerInfo &&
                    h.stateNode.implementation === T.implementation
                  ) {
                    (l(p, h.sibling),
                      (D = n(h, T.children || [])),
                      (D.return = p),
                      (p = D));
                    break t;
                  } else {
                    l(p, h);
                    break;
                  }
                else e(p, h);
                h = h.sibling;
              }
              ((D = kc(T, p.mode, D)), (D.return = p), (p = D));
            }
            return i(p);
          case k:
            return ((T = Ga(T)), Tt(p, h, T, D));
        }
        if (ut(T)) return K(p, h, T, D);
        if (I(T)) {
          if (((et = I(T)), typeof et != "function")) throw Error(o(150));
          return ((T = et.call(T)), lt(p, h, T, D));
        }
        if (typeof T.then == "function") return Tt(p, h, vi(T), D);
        if (T.$$typeof === nt) return Tt(p, h, oi(p, T), D);
        yi(p, T);
      }
      return (typeof T == "string" && T !== "") ||
        typeof T == "number" ||
        typeof T == "bigint"
        ? ((T = "" + T),
          h !== null && h.tag === 6
            ? (l(p, h.sibling), (D = n(h, T)), (D.return = p), (p = D))
            : (l(p, h), (D = Kc(T, p.mode, D)), (D.return = p), (p = D)),
          i(p))
        : l(p, h);
    }
    return function (p, h, T, D) {
      try {
        cu = 0;
        var et = Tt(p, h, T, D);
        return ((gn = null), et);
      } catch (ft) {
        if (ft === yn || ft === hi) throw ft;
        var Rt = Be(29, ft, null, p.mode);
        return ((Rt.lanes = D), (Rt.return = p), Rt);
      }
    };
  }
  var Va = xo(!0),
    To = xo(!1),
    ua = !1;
  function as(t) {
    t.updateQueue = {
      baseState: t.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, lanes: 0, hiddenCallbacks: null },
      callbacks: null,
    };
  }
  function ns(t, e) {
    ((t = t.updateQueue),
      e.updateQueue === t &&
        (e.updateQueue = {
          baseState: t.baseState,
          firstBaseUpdate: t.firstBaseUpdate,
          lastBaseUpdate: t.lastBaseUpdate,
          shared: t.shared,
          callbacks: null,
        }));
  }
  function ia(t) {
    return { lane: t, tag: 0, payload: null, callback: null, next: null };
  }
  function ca(t, e, l) {
    var a = t.updateQueue;
    if (a === null) return null;
    if (((a = a.shared), (Lt & 2) !== 0)) {
      var n = a.pending;
      return (
        n === null ? (e.next = e) : ((e.next = n.next), (n.next = e)),
        (a.pending = e),
        (e = ni(t)),
        no(t, null, l),
        e
      );
    }
    return (ai(t, a, e, l), ni(t));
  }
  function su(t, e, l) {
    if (
      ((e = e.updateQueue), e !== null && ((e = e.shared), (l & 4194048) !== 0))
    ) {
      var a = e.lanes;
      ((a &= t.pendingLanes), (l |= a), (e.lanes = l), sr(t, l));
    }
  }
  function us(t, e) {
    var l = t.updateQueue,
      a = t.alternate;
    if (a !== null && ((a = a.updateQueue), l === a)) {
      var n = null,
        u = null;
      if (((l = l.firstBaseUpdate), l !== null)) {
        do {
          var i = {
            lane: l.lane,
            tag: l.tag,
            payload: l.payload,
            callback: null,
            next: null,
          };
          (u === null ? (n = u = i) : (u = u.next = i), (l = l.next));
        } while (l !== null);
        u === null ? (n = u = e) : (u = u.next = e);
      } else n = u = e;
      ((l = {
        baseState: a.baseState,
        firstBaseUpdate: n,
        lastBaseUpdate: u,
        shared: a.shared,
        callbacks: a.callbacks,
      }),
        (t.updateQueue = l));
      return;
    }
    ((t = l.lastBaseUpdate),
      t === null ? (l.firstBaseUpdate = e) : (t.next = e),
      (l.lastBaseUpdate = e));
  }
  var is = !1;
  function fu() {
    if (is) {
      var t = vn;
      if (t !== null) throw t;
    }
  }
  function ru(t, e, l, a) {
    is = !1;
    var n = t.updateQueue;
    ua = !1;
    var u = n.firstBaseUpdate,
      i = n.lastBaseUpdate,
      s = n.shared.pending;
    if (s !== null) {
      n.shared.pending = null;
      var f = s,
        b = f.next;
      ((f.next = null), i === null ? (u = b) : (i.next = b), (i = f));
      var _ = t.alternate;
      _ !== null &&
        ((_ = _.updateQueue),
        (s = _.lastBaseUpdate),
        s !== i &&
          (s === null ? (_.firstBaseUpdate = b) : (s.next = b),
          (_.lastBaseUpdate = f)));
    }
    if (u !== null) {
      var M = n.baseState;
      ((i = 0), (_ = b = f = null), (s = u));
      do {
        var v = s.lane & -536870913,
          E = v !== s.lane;
        if (E ? (Mt & v) === v : (a & v) === v) {
          (v !== 0 && v === Ya && (is = !0),
            _ !== null &&
              (_ = _.next =
                {
                  lane: 0,
                  tag: s.tag,
                  payload: s.payload,
                  callback: null,
                  next: null,
                }));
          t: {
            var K = t,
              lt = s;
            v = e;
            var Tt = l;
            switch (lt.tag) {
              case 1:
                if (((K = lt.payload), typeof K == "function")) {
                  M = K.call(Tt, M, v);
                  break t;
                }
                M = K;
                break t;
              case 3:
                K.flags = (K.flags & -65537) | 128;
              case 0:
                if (
                  ((K = lt.payload),
                  (v = typeof K == "function" ? K.call(Tt, M, v) : K),
                  v == null)
                )
                  break t;
                M = $({}, M, v);
                break t;
              case 2:
                ua = !0;
            }
          }
          ((v = s.callback),
            v !== null &&
              ((t.flags |= 64),
              E && (t.flags |= 8192),
              (E = n.callbacks),
              E === null ? (n.callbacks = [v]) : E.push(v)));
        } else
          ((E = {
            lane: v,
            tag: s.tag,
            payload: s.payload,
            callback: s.callback,
            next: null,
          }),
            _ === null ? ((b = _ = E), (f = M)) : (_ = _.next = E),
            (i |= v));
        if (((s = s.next), s === null)) {
          if (((s = n.shared.pending), s === null)) break;
          ((E = s),
            (s = E.next),
            (E.next = null),
            (n.lastBaseUpdate = E),
            (n.shared.pending = null));
        }
      } while (!0);
      (_ === null && (f = M),
        (n.baseState = f),
        (n.firstBaseUpdate = b),
        (n.lastBaseUpdate = _),
        u === null && (n.shared.lanes = 0),
        (ma |= i),
        (t.lanes = i),
        (t.memoizedState = M));
    }
  }
  function Eo(t, e) {
    if (typeof t != "function") throw Error(o(191, t));
    t.call(e);
  }
  function jo(t, e) {
    var l = t.callbacks;
    if (l !== null)
      for (t.callbacks = null, t = 0; t < l.length; t++) Eo(l[t], e);
  }
  var sa = it(null),
    gi = it(0);
  function No(t, e) {
    ((t = Zl), at(gi, t), at(sa, e), (Zl = t | e.baseLanes));
  }
  function cs() {
    (at(gi, Zl), at(sa, sa.current));
  }
  function ss() {
    ((Zl = gi.current), Nt(sa), Nt(gi));
  }
  var xe = it(null),
    Ae = null;
  function fa(t) {
    var e = t.alternate;
    (at(Te, Te.current & 1),
      at(xe, t),
      Ae === null &&
        (e === null || sa.current !== null || e.memoizedState !== null) &&
        (Ae = t));
  }
  function fs(t) {
    (at(Te, Te.current), at(xe, t), Ae === null && (Ae = t));
  }
  function _o(t) {
    t.tag === 22
      ? (at(Te, Te.current), at(xe, t), Ae === null && (Ae = t))
      : ra();
  }
  function ra() {
    (at(Te, Te.current), at(xe, xe.current));
  }
  function $e(t) {
    (Nt(xe), Ae === t && (Ae = null), Nt(Te));
  }
  var Te = it(0);
  function ou(t, e) {
    (at(xe, xe.current), at(Te, e));
  }
  function rs(t) {
    (Nt(Te), Nt(xe), Ae === t && (Ae = null));
  }
  function pi(t) {
    for (var e = t; e !== null;) {
      if (e.tag === 13) {
        var l = e.memoizedState;
        if (l !== null && ((l = l.dehydrated), l === null || Rf(l) || Uf(l)))
          return e;
      } else if (
        e.tag === 19 &&
        e.memoizedProps.revealOrder !== "independent"
      ) {
        if ((e.flags & 128) !== 0) return e;
      } else if (e.child !== null) {
        ((e.child.return = e), (e = e.child));
        continue;
      }
      if (e === t) break;
      for (; e.sibling === null;) {
        if (e.return === null || e.return === t) return null;
        e = e.return;
      }
      ((e.sibling.return = e.return), (e = e.sibling));
    }
    return null;
  }
  var Ll = 0,
    xt = null,
    Jt = null,
    se = null,
    bi = !1,
    pn = !1,
    Xa = !1,
    Si = 0,
    du = 0,
    bn = null,
    uv = 0;
  function ae() {
    throw Error(o(321));
  }
  function os(t, e) {
    if (e === null) return !1;
    for (var l = 0; l < e.length && l < t.length; l++)
      if (!Je(t[l], e[l])) return !1;
    return !0;
  }
  function ds(t, e, l, a, n, u) {
    return (
      (Ll = u),
      (xt = e),
      (e.memoizedState = null),
      (e.updateQueue = null),
      (e.lanes = 0),
      (U.H = t === null || t.memoizedState === null ? fd : rd),
      (Xa = !1),
      (u = l(a, n)),
      (Xa = !1),
      pn && (u = Co(e, l, a, n)),
      zo(t),
      u
    );
  }
  function zo(t) {
    U.H = zi;
    var e = Jt !== null && Jt.next !== null;
    if (((Ll = 0), (se = Jt = xt = null), (bi = !1), (du = 0), (bn = null), e))
      throw Error(o(300));
    t === null ||
      fe ||
      ((t = t.dependencies), t !== null && ri(t) && (fe = !0));
  }
  function Co(t, e, l, a) {
    xt = t;
    var n = 0;
    do {
      if ((pn && (bn = null), (du = 0), (pn = !1), 25 <= n))
        throw Error(o(301));
      if (((n += 1), (se = Jt = null), t.updateQueue != null)) {
        var u = t.updateQueue;
        ((u.lastEffect = null),
          (u.events = null),
          (u.stores = null),
          u.memoCache != null && (u.memoCache.index = 0));
      }
      ((U.H = hv), (u = e(l, a)));
    } while (pn);
    return u;
  }
  function iv() {
    var t = U.H,
      e = t.useState()[0];
    return (
      (e = typeof e.then == "function" ? hu(e) : e),
      (t = t.useState()[0]),
      (Jt !== null ? Jt.memoizedState : null) !== t && (xt.flags |= 1024),
      e
    );
  }
  function hs() {
    var t = Si !== 0;
    return ((Si = 0), t);
  }
  function ms(t, e, l) {
    ((e.updateQueue = t.updateQueue), (e.flags &= -2053), (t.lanes &= ~l));
  }
  function vs(t) {
    if (bi) {
      for (t = t.memoizedState; t !== null;) {
        var e = t.queue;
        (e !== null && (e.pending = null), (t = t.next));
      }
      bi = !1;
    }
    ((Ll = 0), (se = Jt = xt = null), (pn = !1), (du = Si = 0), (bn = null));
  }
  function Ue() {
    var t = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null,
    };
    return (se === null ? (xt.memoizedState = se = t) : (se = se.next = t), se);
  }
  function ie() {
    if (Jt === null) {
      var t = xt.alternate;
      t = t !== null ? t.memoizedState : null;
    } else t = Jt.next;
    var e = se === null ? xt.memoizedState : se.next;
    if (e !== null) ((se = e), (Jt = t));
    else {
      if (t === null)
        throw xt.alternate === null ? Error(o(467)) : Error(o(310));
      ((Jt = t),
        (t = {
          memoizedState: Jt.memoizedState,
          baseState: Jt.baseState,
          baseQueue: Jt.baseQueue,
          queue: Jt.queue,
          next: null,
        }),
        se === null ? (xt.memoizedState = se = t) : (se = se.next = t));
    }
    return se;
  }
  function xi() {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  }
  function hu(t) {
    var e = du;
    return (
      (du += 1),
      bn === null && (bn = []),
      (t = po(bn, t, e)),
      (e = xt),
      (se === null ? e.memoizedState : se.next) === null &&
        ((e = e.alternate),
        (U.H = e === null || e.memoizedState === null ? fd : rd)),
      t
    );
  }
  function Ti(t) {
    if (t !== null && typeof t == "object") {
      if (typeof t.then == "function") return hu(t);
      if (t.$$typeof === j) return;
      if (t.$$typeof === nt) return Se(t);
    }
    throw Error(o(438, String(t)));
  }
  function ys(t) {
    var e = null,
      l = xt.updateQueue;
    if ((l !== null && (e = l.memoCache), e == null)) {
      var a = xt.alternate;
      a !== null &&
        ((a = a.updateQueue),
        a !== null &&
          ((a = a.memoCache),
          a != null &&
            (e = {
              data: a.data.map(function (n) {
                return n.slice();
              }),
              index: 0,
            })));
    }
    if (
      (e == null && (e = { data: [], index: 0 }),
      l === null && ((l = xi()), (xt.updateQueue = l)),
      (l.memoCache = e),
      (l = e.data[e.index]),
      l === void 0)
    )
      for (l = e.data[e.index] = Array(t), a = 0; a < t; a++) l[a] = L;
    return (e.index++, l);
  }
  function Vl(t, e) {
    return typeof e == "function" ? e(t) : e;
  }
  function Ei(t) {
    var e = ie();
    return gs(e, Jt, t);
  }
  function gs(t, e, l) {
    var a = t.queue;
    if (a === null) throw Error(o(311));
    a.lastRenderedReducer = l;
    var n = t.baseQueue,
      u = a.pending;
    if (u !== null) {
      if (n !== null) {
        var i = n.next;
        ((n.next = u.next), (u.next = i));
      }
      ((e.baseQueue = n = u), (a.pending = null));
    }
    if (((u = t.baseState), n === null)) t.memoizedState = u;
    else {
      e = n.next;
      var s = (i = null),
        f = null,
        b = e,
        _ = !1;
      do {
        var M = b.lane & -536870913;
        if (M !== b.lane ? (Mt & M) === M : (Ll & M) === M) {
          var v = b.revertLane;
          if (v === 0)
            (f !== null &&
              (f = f.next =
                {
                  lane: 0,
                  revertLane: 0,
                  gesture: null,
                  action: b.action,
                  hasEagerState: b.hasEagerState,
                  eagerState: b.eagerState,
                  next: null,
                }),
              M === Ya && (_ = !0));
          else if ((Ll & v) === v) {
            ((b = b.next), v === Ya && (_ = !0));
            continue;
          } else
            ((M = {
              lane: 0,
              revertLane: b.revertLane,
              gesture: null,
              action: b.action,
              hasEagerState: b.hasEagerState,
              eagerState: b.eagerState,
              next: null,
            }),
              f === null ? ((s = f = M), (i = u)) : (f = f.next = M),
              (xt.lanes |= v),
              (ma |= v));
          ((M = b.action),
            Xa && l(u, M),
            (u = b.hasEagerState ? b.eagerState : l(u, M)));
        } else
          ((v = {
            lane: M,
            revertLane: b.revertLane,
            gesture: b.gesture,
            action: b.action,
            hasEagerState: b.hasEagerState,
            eagerState: b.eagerState,
            next: null,
          }),
            f === null ? ((s = f = v), (i = u)) : (f = f.next = v),
            (xt.lanes |= M),
            (ma |= M));
        b = b.next;
      } while (b !== null && b !== e);
      if (
        (f === null ? (i = u) : (f.next = s),
        !Je(u, t.memoizedState) && ((fe = !0), _ && ((l = vn), l !== null)))
      )
        throw l;
      ((t.memoizedState = u),
        (t.baseState = i),
        (t.baseQueue = f),
        (a.lastRenderedState = u));
    }
    return (n === null && (a.lanes = 0), [t.memoizedState, a.dispatch]);
  }
  function ps(t) {
    var e = ie(),
      l = e.queue;
    if (l === null) throw Error(o(311));
    l.lastRenderedReducer = t;
    var a = l.dispatch,
      n = l.pending,
      u = e.memoizedState;
    if (n !== null) {
      l.pending = null;
      var i = (n = n.next);
      do ((u = t(u, i.action)), (i = i.next));
      while (i !== n);
      (Je(u, e.memoizedState) || (fe = !0),
        (e.memoizedState = u),
        e.baseQueue === null && (e.baseState = u),
        (l.lastRenderedState = u));
    }
    return [u, a];
  }
  function Oo(t, e, l) {
    var a = xt,
      n = ie(),
      u = _t;
    if (u) {
      if (l === void 0) throw Error(o(407));
      l = l();
    } else l = e();
    var i = !Je((Jt || n).memoizedState, l);
    if (
      (i && ((n.memoizedState = l), (fe = !0)),
      (n = n.queue),
      xs(Mo.bind(null, a, n, t), [t]),
      (t =
        n.getSnapshot !== e ||
        i ||
        (se !== null && (se.memoizedState.tag & 1) !== 0)),
      Sn(t ? 9 : 8, { destroy: void 0 }, Do.bind(null, a, n, l, e), null),
      t)
    ) {
      if (((a.flags |= 2048), Ft === null)) throw Error(o(349));
      u || (Ll & 127) !== 0 || Ao(a, e, l);
    }
    return l;
  }
  function Ao(t, e, l) {
    ((t.flags |= 16384),
      (t = { getSnapshot: e, value: l }),
      (e = xt.updateQueue),
      e === null
        ? ((e = xi()), (xt.updateQueue = e), (e.stores = [t]))
        : ((l = e.stores), l === null ? (e.stores = [t]) : l.push(t)));
  }
  function Do(t, e, l, a) {
    ((e.value = l), (e.getSnapshot = a), Ro(e) && Uo(t));
  }
  function Mo(t, e, l) {
    return l(function () {
      Ro(e) && Uo(t);
    });
  }
  function Ro(t) {
    var e = t.getSnapshot;
    t = t.value;
    try {
      var l = e();
      return !Je(t, l);
    } catch {
      return !0;
    }
  }
  function Uo(t) {
    var e = Ma(t, 2);
    e !== null && Xe(e, t, 2);
  }
  function bs(t) {
    var e = Ue();
    if (typeof t == "function") {
      var l = t;
      if (((t = l()), Xa)) {
        Il(!0);
        try {
          l();
        } finally {
          Il(!1);
        }
      }
    }
    return (
      (e.memoizedState = e.baseState = t),
      (e.queue = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Vl,
        lastRenderedState: t,
      }),
      e
    );
  }
  function Ho(t, e, l, a) {
    return ((t.baseState = l), gs(t, Jt, typeof a == "function" ? a : Vl));
  }
  function cv(t, e, l, a, n) {
    if (_i(t)) throw Error(o(485));
    if (((t = e.action), t !== null)) {
      var u = {
        payload: n,
        action: t,
        next: null,
        isTransition: !0,
        status: "pending",
        value: null,
        reason: null,
        listeners: [],
        then: function (i) {
          u.listeners.push(i);
        },
      };
      (U.T !== null ? l(!0) : (u.isTransition = !1),
        a(u),
        (l = e.pending),
        l === null
          ? ((u.next = e.pending = u), wo(e, u))
          : ((u.next = l.next), (e.pending = l.next = u)));
    }
  }
  function wo(t, e) {
    var l = e.action,
      a = e.payload,
      n = t.state;
    if (e.isTransition) {
      var u = U.T,
        i = {};
      ((i.types = u !== null ? u.types : null), (U.T = i));
      try {
        var s = l(n, a),
          f = U.S;
        (f !== null && f(i, s), qo(t, e, s));
      } catch (b) {
        Ss(t, e, b);
      } finally {
        (u !== null && i.types !== null && (u.types = i.types), (U.T = u));
      }
    } else
      try {
        ((u = l(n, a)), qo(t, e, u));
      } catch (b) {
        Ss(t, e, b);
      }
  }
  function qo(t, e, l) {
    l !== null && typeof l == "object" && typeof l.then == "function"
      ? l.then(
          function (a) {
            Yo(t, e, a);
          },
          function (a) {
            return Ss(t, e, a);
          },
        )
      : Yo(t, e, l);
  }
  function Yo(t, e, l) {
    ((e.status = "fulfilled"),
      (e.value = l),
      Bo(e),
      (t.state = l),
      (e = t.pending),
      e !== null &&
        ((l = e.next),
        l === e ? (t.pending = null) : ((l = l.next), (e.next = l), wo(t, l))));
  }
  function Ss(t, e, l) {
    var a = t.pending;
    if (((t.pending = null), a !== null)) {
      a = a.next;
      do ((e.status = "rejected"), (e.reason = l), Bo(e), (e = e.next));
      while (e !== a);
    }
    t.action = null;
  }
  function Bo(t) {
    t = t.listeners;
    for (var e = 0; e < t.length; e++) (0, t[e])();
  }
  function Go(t, e) {
    return e;
  }
  function Lo(t, e) {
    if (_t) {
      var l = Ft.formState;
      if (l !== null) {
        t: {
          var a = xt;
          if (_t) {
            if (Wt) {
              e: {
                for (var n = Wt, u = cl; n.nodeType !== 8;) {
                  if (!u) {
                    n = null;
                    break e;
                  }
                  if (((n = fl(n.nextSibling)), n === null)) {
                    n = null;
                    break e;
                  }
                }
                ((u = n.data), (n = u === "F!" || u === "F" ? n : null));
              }
              if (n) {
                ((Wt = fl(n.nextSibling)), (a = n.data === "F!"));
                break t;
              }
            }
            la(a);
          }
          a = !1;
        }
        a && (e = l[0]);
      }
    }
    return (
      (l = Ue()),
      (l.memoizedState = l.baseState = e),
      (a = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Go,
        lastRenderedState: e,
      }),
      (l.queue = a),
      (l = id.bind(null, xt, a)),
      (a.dispatch = l),
      (a = bs(!1)),
      (u = _s.bind(null, xt, !1, a.queue)),
      (a = Ue()),
      (n = { state: e, dispatch: null, action: t, pending: null }),
      (a.queue = n),
      (l = cv.bind(null, xt, n, u, l)),
      (n.dispatch = l),
      (a.memoizedState = t),
      [e, l, !1]
    );
  }
  function Vo(t) {
    var e = ie();
    return Xo(e, Jt, t);
  }
  function Xo(t, e, l) {
    if (
      ((e = gs(t, e, Go)[0]),
      (t = Ei(Vl)[0]),
      typeof e == "object" && e !== null && typeof e.then == "function")
    )
      try {
        var a = hu(e);
      } catch (i) {
        throw i === yn ? hi : i;
      }
    else a = e;
    e = ie();
    var n = e.queue,
      u = n.dispatch;
    return (
      l !== e.memoizedState &&
        ((xt.flags |= 2048),
        Sn(9, { destroy: void 0 }, sv.bind(null, n, l), null)),
      [a, u, t]
    );
  }
  function sv(t, e) {
    t.action = e;
  }
  function Qo(t) {
    var e = ie(),
      l = Jt;
    if (l !== null) return Xo(e, l, t);
    (ie(), (e = e.memoizedState), (l = ie()));
    var a = l.queue.dispatch;
    return ((l.memoizedState = t), [e, a, !1]);
  }
  function Sn(t, e, l, a) {
    return (
      (t = { tag: t, create: l, deps: a, inst: e, next: null }),
      (e = xt.updateQueue),
      e === null && ((e = xi()), (xt.updateQueue = e)),
      (l = e.lastEffect),
      l === null
        ? (e.lastEffect = t.next = t)
        : ((a = l.next), (l.next = t), (t.next = a), (e.lastEffect = t)),
      t
    );
  }
  function Zo() {
    return ie().memoizedState;
  }
  function ji(t, e, l, a) {
    var n = Ue();
    ((xt.flags |= t),
      (n.memoizedState = Sn(
        1 | e,
        { destroy: void 0 },
        l,
        a === void 0 ? null : a,
      )));
  }
  function Ni(t, e, l, a) {
    var n = ie();
    a = a === void 0 ? null : a;
    var u = n.memoizedState.inst;
    Jt !== null && a !== null && os(a, Jt.memoizedState.deps)
      ? (n.memoizedState = Sn(e, u, l, a))
      : ((xt.flags |= t), (n.memoizedState = Sn(1 | e, u, l, a)));
  }
  function Ko(t, e) {
    ji(8390656, 8, t, e);
  }
  function xs(t, e) {
    Ni(2048, 8, t, e);
  }
  function fv(t) {
    xt.flags |= 4;
    var e = xt.updateQueue;
    if (e === null) ((e = xi()), (xt.updateQueue = e), (e.events = [t]));
    else {
      var l = e.events;
      l === null ? (e.events = [t]) : l.push(t);
    }
  }
  function ko(t) {
    var e = ie().memoizedState;
    return (
      fv({ ref: e, nextImpl: t }),
      function () {
        if ((Lt & 2) !== 0) throw Error(o(440));
        return e.impl.apply(void 0, arguments);
      }
    );
  }
  function Jo(t, e) {
    return Ni(4, 2, t, e);
  }
  function $o(t, e) {
    return Ni(4, 4, t, e);
  }
  function Fo(t, e) {
    if (typeof e == "function") {
      t = t();
      var l = e(t);
      return function () {
        typeof l == "function" ? l() : e(null);
      };
    }
    if (e != null)
      return (
        (t = t()),
        (e.current = t),
        function () {
          e.current = null;
        }
      );
  }
  function Io(t, e, l) {
    ((l = l != null ? l.concat([t]) : null), Ni(4, 4, Fo.bind(null, e, t), l));
  }
  function Ts() {}
  function Wo(t, e) {
    var l = ie();
    e = e === void 0 ? null : e;
    var a = l.memoizedState;
    return e !== null && os(e, a[1]) ? a[0] : ((l.memoizedState = [t, e]), t);
  }
  function Po(t, e) {
    var l = ie();
    e = e === void 0 ? null : e;
    var a = l.memoizedState;
    if (e !== null && os(e, a[1])) return a[0];
    if (((a = t()), Xa)) {
      Il(!0);
      try {
        t();
      } finally {
        Il(!1);
      }
    }
    return ((l.memoizedState = [a, e]), a);
  }
  function Es(t, e, l) {
    return l === void 0 || ((Ll & 1073741824) !== 0 && (Mt & 261930) === 0)
      ? (t.memoizedState = e)
      : ((t.memoizedState = l), (t = fh()), (xt.lanes |= t), (ma |= t), l);
  }
  function td(t, e, l, a) {
    return Je(l, e)
      ? l
      : sa.current !== null
        ? ((t = Es(t, l, a)), Je(t, e) || (fe = !0), t)
        : (Ll & 106) === 0 || ((Ll & 1073741824) !== 0 && (Mt & 261930) === 0)
          ? ((fe = !0), (t.memoizedState = l))
          : ((t = fh()), (xt.lanes |= t), (ma |= t), e);
  }
  function ed(t, e, l, a, n) {
    var u = P.p;
    P.p = u !== 0 && 8 > u ? u : 8;
    var i = U.T,
      s = {};
    ((s.types = i !== null ? i.types : null), (U.T = s), _s(t, !1, e, l));
    try {
      var f = n(),
        b = U.S;
      if (
        (b !== null && b(s, f),
        f !== null && typeof f == "object" && typeof f.then == "function")
      ) {
        var _ = nv(f, a);
        mu(t, e, _, Pe(t));
      } else mu(t, e, a, Pe(t));
    } catch (M) {
      mu(t, e, { then: function () {}, status: "rejected", reason: M }, Pe());
    } finally {
      ((P.p = u),
        i !== null && s.types !== null && (i.types = s.types),
        (U.T = i));
    }
  }
  function rv() {}
  function js(t, e, l, a) {
    if (t.tag !== 5) throw Error(o(476));
    var n = ld(t).queue;
    ed(
      t,
      n,
      e,
      Yt,
      l === null
        ? rv
        : function () {
            return (ad(t), l(a));
          },
    );
  }
  function ld(t) {
    var e = t.memoizedState;
    if (e !== null) return e;
    e = {
      memoizedState: Yt,
      baseState: Yt,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Vl,
        lastRenderedState: Yt,
      },
      next: null,
    };
    var l = {};
    return (
      (e.next = {
        memoizedState: l,
        baseState: l,
        baseQueue: null,
        queue: {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: Vl,
          lastRenderedState: l,
        },
        next: null,
      }),
      (t.memoizedState = e),
      (t = t.alternate),
      t !== null && (t.memoizedState = e),
      e
    );
  }
  function ad(t) {
    var e = ld(t);
    (e.next === null && (e = t.alternate.memoizedState),
      mu(t, e.next.queue, {}, Pe()));
  }
  function Ns() {
    return Se(Bn);
  }
  function nd() {
    return ie().memoizedState;
  }
  function ud() {
    return ie().memoizedState;
  }
  function ov(t) {
    for (var e = t.return; e !== null;) {
      switch (e.tag) {
        case 24:
        case 3:
          var l = Pe();
          t = ia(l);
          var a = ca(e, t, l);
          (a !== null && (Xe(a, e, l), su(a, e, l)),
            (e = { cache: Pc() }),
            (t.payload = e));
          return;
      }
      e = e.return;
    }
  }
  function dv(t, e, l) {
    var a = Pe();
    ((l = {
      lane: a,
      revertLane: 0,
      gesture: null,
      action: l,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
      _i(t)
        ? cd(e, l)
        : ((l = Qc(t, e, l, a)), l !== null && (Xe(l, t, a), sd(l, e, a))));
  }
  function id(t, e, l) {
    var a = Pe();
    mu(t, e, l, a);
  }
  function mu(t, e, l, a) {
    var n = {
      lane: a,
      revertLane: 0,
      gesture: null,
      action: l,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    };
    if (_i(t)) cd(e, n);
    else {
      var u = t.alternate;
      if (
        t.lanes === 0 &&
        (u === null || u.lanes === 0) &&
        ((u = e.lastRenderedReducer), u !== null)
      )
        try {
          var i = e.lastRenderedState,
            s = u(i, l);
          if (((n.hasEagerState = !0), (n.eagerState = s), Je(s, i)))
            return (ai(t, e, n, 0), Ft === null && li(), !1);
        } catch {}
      if (((l = Qc(t, e, n, a)), l !== null))
        return (Xe(l, t, a), sd(l, e, a), !0);
    }
    return !1;
  }
  function _s(t, e, l, a) {
    if (
      ((a = {
        lane: 2,
        revertLane: gf(),
        gesture: null,
        action: a,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      }),
      _i(t))
    ) {
      if (e) throw Error(o(479));
    } else ((e = Qc(t, l, a, 2)), e !== null && Xe(e, t, 2));
  }
  function _i(t) {
    var e = t.alternate;
    return t === xt || (e !== null && e === xt);
  }
  function cd(t, e) {
    pn = bi = !0;
    var l = t.pending;
    (l === null ? (e.next = e) : ((e.next = l.next), (l.next = e)),
      (t.pending = e));
  }
  function sd(t, e, l) {
    if ((l & 4194048) !== 0) {
      var a = e.lanes;
      ((a &= t.pendingLanes), (l |= a), (e.lanes = l), sr(t, l));
    }
  }
  var zi = {
      readContext: Se,
      use: Ti,
      useCallback: ae,
      useContext: ae,
      useEffect: ae,
      useImperativeHandle: ae,
      useLayoutEffect: ae,
      useInsertionEffect: ae,
      useMemo: ae,
      useReducer: ae,
      useRef: ae,
      useState: ae,
      useDebugValue: ae,
      useDeferredValue: ae,
      useTransition: ae,
      useSyncExternalStore: ae,
      useId: ae,
      useHostTransitionStatus: ae,
      useFormState: ae,
      useActionState: ae,
      useOptimistic: ae,
      useMemoCache: ae,
      useCacheRefresh: ae,
      useEffectEvent: ae,
    },
    fd = {
      readContext: Se,
      use: Ti,
      useCallback: function (t, e) {
        return ((Ue().memoizedState = [t, e === void 0 ? null : e]), t);
      },
      useContext: Se,
      useEffect: Ko,
      useImperativeHandle: function (t, e, l) {
        ((l = l != null ? l.concat([t]) : null),
          ji(4194308, 4, Fo.bind(null, e, t), l));
      },
      useLayoutEffect: function (t, e) {
        return ji(4194308, 4, t, e);
      },
      useInsertionEffect: function (t, e) {
        ji(4, 2, t, e);
      },
      useMemo: function (t, e) {
        var l = Ue();
        e = e === void 0 ? null : e;
        var a = t();
        if (Xa) {
          Il(!0);
          try {
            t();
          } finally {
            Il(!1);
          }
        }
        return ((l.memoizedState = [a, e]), a);
      },
      useReducer: function (t, e, l) {
        var a = Ue();
        if (l !== void 0) {
          var n = l(e);
          if (Xa) {
            Il(!0);
            try {
              l(e);
            } finally {
              Il(!1);
            }
          }
        } else n = e;
        return (
          (a.memoizedState = a.baseState = n),
          (t = {
            pending: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: t,
            lastRenderedState: n,
          }),
          (a.queue = t),
          (t = t.dispatch = dv.bind(null, xt, t)),
          [a.memoizedState, t]
        );
      },
      useRef: function (t) {
        var e = Ue();
        return ((t = { current: t }), (e.memoizedState = t));
      },
      useState: function (t) {
        t = bs(t);
        var e = t.queue,
          l = id.bind(null, xt, e);
        return ((e.dispatch = l), [t.memoizedState, l]);
      },
      useDebugValue: Ts,
      useDeferredValue: function (t, e) {
        var l = Ue();
        return Es(l, t, e);
      },
      useTransition: function () {
        var t = bs(!1);
        return (
          (t = ed.bind(null, xt, t.queue, !0, !1)),
          (Ue().memoizedState = t),
          [!1, t]
        );
      },
      useSyncExternalStore: function (t, e, l) {
        var a = xt,
          n = Ue();
        if (_t) {
          if (l === void 0) throw Error(o(407));
          l = l();
        } else {
          if (((l = e()), Ft === null)) throw Error(o(349));
          (Mt & 127) !== 0 || Ao(a, e, l);
        }
        n.memoizedState = l;
        var u = { value: l, getSnapshot: e };
        return (
          (n.queue = u),
          Ko(Mo.bind(null, a, u, t), [t]),
          (a.flags |= 2048),
          Sn(9, { destroy: void 0 }, Do.bind(null, a, u, l, e), null),
          l
        );
      },
      useId: function () {
        var t = Ue(),
          e = Ft.identifierPrefix;
        if (_t) {
          var l = Sl,
            a = bl;
          ((l = (a & ~(1 << (32 - Ke(a) - 1))).toString(32) + l),
            (e = "_" + e + "R_" + l),
            (l = Si++),
            0 < l && (e += "H" + l.toString(32)),
            (e += "_"));
        } else ((l = uv++), (e = "_" + e + "r_" + l.toString(32) + "_"));
        return (t.memoizedState = e);
      },
      useHostTransitionStatus: Ns,
      useFormState: Lo,
      useActionState: Lo,
      useOptimistic: function (t) {
        var e = Ue();
        e.memoizedState = e.baseState = t;
        var l = {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: null,
          lastRenderedState: null,
        };
        return (
          (e.queue = l),
          (e = _s.bind(null, xt, !0, l)),
          (l.dispatch = e),
          [t, e]
        );
      },
      useMemoCache: ys,
      useCacheRefresh: function () {
        return (Ue().memoizedState = ov.bind(null, xt));
      },
      useEffectEvent: function (t) {
        var e = Ue(),
          l = { impl: t };
        return (
          (e.memoizedState = l),
          function () {
            if ((Lt & 2) !== 0) throw Error(o(440));
            return l.impl.apply(void 0, arguments);
          }
        );
      },
    },
    rd = {
      readContext: Se,
      use: Ti,
      useCallback: Wo,
      useContext: Se,
      useEffect: xs,
      useImperativeHandle: Io,
      useInsertionEffect: Jo,
      useLayoutEffect: $o,
      useMemo: Po,
      useReducer: Ei,
      useRef: Zo,
      useState: function () {
        return Ei(Vl);
      },
      useDebugValue: Ts,
      useDeferredValue: function (t, e) {
        var l = ie();
        return td(l, Jt.memoizedState, t, e);
      },
      useTransition: function () {
        var t = Ei(Vl)[0],
          e = ie().memoizedState;
        return [typeof t == "boolean" ? t : hu(t), e];
      },
      useSyncExternalStore: Oo,
      useId: nd,
      useHostTransitionStatus: Ns,
      useFormState: Vo,
      useActionState: Vo,
      useOptimistic: function (t, e) {
        var l = ie();
        return Ho(l, Jt, t, e);
      },
      useMemoCache: ys,
      useCacheRefresh: ud,
      useEffectEvent: ko,
    },
    hv = {
      readContext: Se,
      use: Ti,
      useCallback: Wo,
      useContext: Se,
      useEffect: xs,
      useImperativeHandle: Io,
      useInsertionEffect: Jo,
      useLayoutEffect: $o,
      useMemo: Po,
      useReducer: ps,
      useRef: Zo,
      useState: function () {
        return ps(Vl);
      },
      useDebugValue: Ts,
      useDeferredValue: function (t, e) {
        var l = ie();
        return Jt === null ? Es(l, t, e) : td(l, Jt.memoizedState, t, e);
      },
      useTransition: function () {
        var t = ps(Vl)[0],
          e = ie().memoizedState;
        return [typeof t == "boolean" ? t : hu(t), e];
      },
      useSyncExternalStore: Oo,
      useId: nd,
      useHostTransitionStatus: Ns,
      useFormState: Qo,
      useActionState: Qo,
      useOptimistic: function (t, e) {
        var l = ie();
        return Jt !== null
          ? Ho(l, Jt, t, e)
          : ((l.baseState = t), [t, l.queue.dispatch]);
      },
      useMemoCache: ys,
      useCacheRefresh: ud,
      useEffectEvent: ko,
    };
  function zs(t, e, l, a) {
    ((e = t.memoizedState),
      (l = l(a, e)),
      (l = l == null ? e : $({}, e, l)),
      (t.memoizedState = l),
      t.lanes === 0 && (t.updateQueue.baseState = l));
  }
  var Cs = {
    enqueueSetState: function (t, e, l) {
      t = t._reactInternals;
      var a = Pe(),
        n = ia(a);
      ((n.payload = e),
        l != null && (n.callback = l),
        (e = ca(t, n, a)),
        e !== null && (Xe(e, t, a), su(e, t, a)));
    },
    enqueueReplaceState: function (t, e, l) {
      t = t._reactInternals;
      var a = Pe(),
        n = ia(a);
      ((n.tag = 1),
        (n.payload = e),
        l != null && (n.callback = l),
        (e = ca(t, n, a)),
        e !== null && (Xe(e, t, a), su(e, t, a)));
    },
    enqueueForceUpdate: function (t, e) {
      t = t._reactInternals;
      var l = Pe(),
        a = ia(l);
      ((a.tag = 2),
        e != null && (a.callback = e),
        (e = ca(t, a, l)),
        e !== null && (Xe(e, t, l), su(e, t, l)));
    },
  };
  function od(t, e, l, a, n, u, i) {
    return (
      (t = t.stateNode),
      typeof t.shouldComponentUpdate == "function"
        ? t.shouldComponentUpdate(a, u, i)
        : e.prototype && e.prototype.isPureReactComponent
          ? !tu(l, a) || !tu(n, u)
          : !0
    );
  }
  function dd(t, e, l, a) {
    ((t = e.state),
      typeof e.componentWillReceiveProps == "function" &&
        e.componentWillReceiveProps(l, a),
      typeof e.UNSAFE_componentWillReceiveProps == "function" &&
        e.UNSAFE_componentWillReceiveProps(l, a),
      e.state !== t && Cs.enqueueReplaceState(e, e.state, null));
  }
  function Qa(t, e) {
    var l = e;
    if ("ref" in e) {
      l = {};
      for (var a in e) a !== "ref" && (l[a] = e[a]);
    }
    if ((t = t.defaultProps)) {
      l === e && (l = $({}, l));
      for (var n in t) l[n] === void 0 && (l[n] = t[n]);
    }
    return l;
  }
  function hd(t) {
    ei(t);
  }
  function md(t) {
    console.error(t);
  }
  function vd(t) {
    ei(t);
  }
  function Ci(t, e) {
    try {
      var l = t.onUncaughtError;
      l(e.value, { componentStack: e.stack });
    } catch (a) {
      setTimeout(function () {
        throw a;
      });
    }
  }
  function yd(t, e, l) {
    try {
      var a = t.onCaughtError;
      a(l.value, {
        componentStack: l.stack,
        errorBoundary: e.tag === 1 ? e.stateNode : null,
      });
    } catch (n) {
      setTimeout(function () {
        throw n;
      });
    }
  }
  function Os(t, e, l) {
    return (
      (l = ia(l)),
      (l.tag = 3),
      (l.payload = { element: null }),
      (l.callback = function () {
        Ci(t, e);
      }),
      l
    );
  }
  function gd(t) {
    return ((t = ia(t)), (t.tag = 3), t);
  }
  function pd(t, e, l, a) {
    var n = l.type.getDerivedStateFromError;
    if (typeof n == "function") {
      var u = a.value;
      ((t.payload = function () {
        return n(u);
      }),
        (t.callback = function () {
          yd(e, l, a);
        }));
    }
    var i = l.stateNode;
    i !== null &&
      typeof i.componentDidCatch == "function" &&
      (t.callback = function () {
        (yd(e, l, a),
          typeof n != "function" &&
            (va === null ? (va = new Set([this])) : va.add(this)));
        var s = a.stack;
        this.componentDidCatch(a.value, {
          componentStack: s !== null ? s : "",
        });
      });
  }
  function mv(t, e, l, a, n) {
    if (
      ((l.flags |= 32768),
      a !== null && typeof a == "object" && typeof a.then == "function")
    ) {
      if (
        ((e = l.alternate),
        e !== null && wa(e, l, n, !0),
        (l = xe.current),
        l !== null)
      ) {
        switch (l.tag) {
          case 31:
          case 13:
          case 19:
            return (
              Ae === null ? $i() : l.alternate === null && ne === 0 && (ne = 3),
              (l.flags &= -257),
              (l.flags |= 65536),
              (l.lanes = n),
              a === mi
                ? (l.flags |= 16384)
                : ((e = l.updateQueue),
                  e === null ? (l.updateQueue = new Set([a])) : e.add(a),
                  mf(t, a, n)),
              !1
            );
          case 22:
            return (
              (l.flags |= 65536),
              a === mi
                ? (l.flags |= 16384)
                : ((e = l.updateQueue),
                  e === null
                    ? ((e = {
                        transitions: null,
                        markerInstances: null,
                        retryQueue: new Set([a]),
                      }),
                      (l.updateQueue = e))
                    : ((l = e.retryQueue),
                      l === null ? (e.retryQueue = new Set([a])) : l.add(a)),
                  mf(t, a, n)),
              !1
            );
        }
        throw Error(o(435, l.tag));
      }
      return (mf(t, a, n), $i(), !1);
    }
    if (_t)
      return (
        (e = xe.current),
        e !== null
          ? ((e.flags & 65536) === 0 && (e.flags |= 256),
            (e.flags |= 65536),
            (e.lanes = n),
            a !== $c && ((t = Error(o(422), { cause: a })), au(nl(t, l))))
          : (a !== $c && ((e = Error(o(423), { cause: a })), au(nl(e, l))),
            (t = t.current.alternate),
            (t.flags |= 65536),
            (n &= -n),
            (t.lanes |= n),
            (a = nl(a, l)),
            (n = Os(t.stateNode, a, n)),
            us(t, n),
            ne !== 4 && (ne = 2)),
        !1
      );
    var u = Error(o(520), { cause: a });
    if (
      ((u = nl(u, l)),
      Tu === null ? (Tu = [u]) : Tu.push(u),
      ne !== 4 && (ne = 2),
      e === null)
    )
      return !0;
    ((a = nl(a, l)), (l = e));
    do {
      switch (l.tag) {
        case 3:
          return (
            (l.flags |= 65536),
            (t = n & -n),
            (l.lanes |= t),
            (t = Os(l.stateNode, a, t)),
            us(l, t),
            !1
          );
        case 1:
          if (
            ((e = l.type),
            (u = l.stateNode),
            (l.flags & 128) === 0 &&
              (typeof e.getDerivedStateFromError == "function" ||
                (u !== null &&
                  typeof u.componentDidCatch == "function" &&
                  (va === null || !va.has(u)))))
          )
            return (
              (l.flags |= 65536),
              (n &= -n),
              (l.lanes |= n),
              (n = gd(n)),
              pd(n, t, l, a),
              us(l, n),
              !1
            );
          break;
        case 22:
          if (l.memoizedState !== null) return ((l.flags |= 65536), !1);
      }
      l = l.return;
    } while (l !== null);
    return !1;
  }
  var As = Error(o(461)),
    fe = !1;
  function oe(t, e, l, a) {
    e.child = t === null ? To(e, null, l, a) : Va(e, t.child, l, a);
  }
  function bd(t, e, l, a, n) {
    l = l.render;
    var u = e.ref;
    if ("ref" in a) {
      var i = {};
      for (var s in a) s !== "ref" && (i[s] = a[s]);
    } else i = a;
    return (
      qa(e),
      (a = ds(t, e, l, i, u, n)),
      (s = hs()),
      t !== null && !fe
        ? (ms(t, e, n), Xl(t, e, n))
        : (_t && s && ci(e), (e.flags |= 1), oe(t, e, a, n), e.child)
    );
  }
  function Sd(t, e, l, a, n) {
    if (t === null) {
      var u = l.type;
      return typeof u == "function" &&
        !Zc(u) &&
        u.defaultProps === void 0 &&
        l.compare === null
        ? ((e.tag = 15), (e.type = u), xd(t, e, u, a, n))
        : ((t = ui(l.type, null, a, e, e.mode, n)),
          (t.ref = e.ref),
          (t.return = e),
          (e.child = t));
    }
    if (((u = t.child), !Ys(t, n))) {
      var i = u.memoizedProps;
      if (
        ((l = l.compare), (l = l !== null ? l : tu), l(i, a) && t.ref === e.ref)
      )
        return Xl(t, e, n);
    }
    return (
      (e.flags |= 1),
      (t = ql(u, a)),
      (t.ref = e.ref),
      (t.return = e),
      (e.child = t)
    );
  }
  function xd(t, e, l, a, n) {
    if (t !== null) {
      var u = t.memoizedProps;
      if (tu(u, a) && t.ref === e.ref)
        if (((fe = !1), (e.pendingProps = a = u), Ys(t, n)))
          (t.flags & 131072) !== 0 && (fe = !0);
        else return ((e.lanes = t.lanes), Xl(t, e, n));
    }
    return Ds(t, e, l, a, n);
  }
  function Td(t, e, l, a) {
    var n = a.children,
      u = t !== null ? t.memoizedState : null;
    if (
      (t === null &&
        e.stateNode === null &&
        (e.stateNode = {
          _visibility: 1,
          _pendingMarkers: null,
          _retryCache: null,
          _transitions: null,
        }),
      a.mode === "hidden")
    ) {
      if ((e.flags & 128) !== 0) {
        if (((u = u !== null ? u.baseLanes | l : l), t !== null)) {
          for (a = e.child = t.child, n = 0; a !== null;)
            ((n = n | a.lanes | a.childLanes), (a = a.sibling));
          a = n & ~u;
        } else ((a = 0), (e.child = null));
        return Ed(t, e, u, l, a);
      }
      if ((l & 536870912) !== 0)
        ((e.memoizedState = { baseLanes: 0, cachePool: null }),
          t !== null && di(e, u !== null ? u.cachePool : null),
          u !== null ? No(e, u) : cs(),
          _o(e));
      else
        return (
          (a = e.lanes = 536870912),
          Ed(t, e, u !== null ? u.baseLanes | l : l, l, a)
        );
    } else
      u !== null
        ? (di(e, u.cachePool), No(e, u), ra(), (e.memoizedState = null))
        : (t !== null && di(e, null), cs(), ra());
    return (oe(t, e, n, l), e.child);
  }
  function vu(t, e) {
    return (
      (t !== null && t.tag === 22) ||
        e.stateNode !== null ||
        (e.stateNode = {
          _visibility: 1,
          _pendingMarkers: null,
          _retryCache: null,
          _transitions: null,
        }),
      e.sibling
    );
  }
  function Ed(t, e, l, a, n) {
    var u = es();
    return (
      (u = u === null ? null : { parent: ce._currentValue, pool: u }),
      (e.memoizedState = { baseLanes: l, cachePool: u }),
      t !== null && di(e, null),
      cs(),
      _o(e),
      t !== null && wa(t, e, a, !0),
      (e.childLanes = n),
      null
    );
  }
  function Oi(t, e) {
    return (
      (e = Ai({ mode: e.mode, children: e.children }, t.mode)),
      (e.ref = t.ref),
      (t.child = e),
      (e.return = t),
      e
    );
  }
  function jd(t, e, l) {
    return (
      Va(e, t.child, null, l),
      (t = Oi(e, e.pendingProps)),
      (t.flags |= 2),
      $e(e),
      (e.memoizedState = null),
      t
    );
  }
  function vv(t, e, l) {
    var a = e.pendingProps,
      n = (e.flags & 128) !== 0;
    if (((e.flags &= -129), t === null)) {
      if (_t) {
        if (a.mode === "hidden")
          return (
            (t = Oi(e, a)),
            (e.lanes = 536870912),
            (t.memoizedState = { baseLanes: 0, cachePool: null }),
            vu(null, t)
          );
        if (
          (fs(e),
          (t = Wt)
            ? ((t = Fh(t, cl)),
              (t = t !== null && t.data === "&" ? t : null),
              t !== null &&
                ((e.memoizedState = {
                  dehydrated: t,
                  treeContext: ta !== null ? { id: bl, overflow: Sl } : null,
                  retryLane: 536870912,
                  hydrationErrors: null,
                }),
                (l = io(t)),
                (l.return = e),
                (e.child = l),
                (ye = e),
                (Wt = null)))
            : (t = null),
          t === null)
        )
          throw la(e);
        return ((e.lanes = 536870912), null);
      }
      return Oi(e, a);
    }
    var u = t.memoizedState;
    if (u !== null) {
      var i = u.dehydrated;
      if ((fs(e), n))
        if (e.flags & 256) ((e.flags &= -257), (e = jd(t, e, l)));
        else if (e.memoizedState !== null)
          ((e.child = t.child), (e.flags |= 128), (e = null));
        else throw Error(o(558));
      else if (
        (fe || wa(t, e, l, !1), (n = (l & t.childLanes) !== 0), fe || n)
      ) {
        if (sa.current === null) {
          if (
            ((a = Ft),
            a !== null && ((i = fr(a, l)), i !== 0 && i !== u.retryLane))
          )
            throw ((u.retryLane = i), Ma(t, i), Xe(a, t, i), As);
          $i();
        }
        e = jd(t, e, l);
      } else
        ((t = u.treeContext),
          (Wt = fl(i.nextSibling)),
          (ye = e),
          (_t = !0),
          (ea = null),
          (cl = !1),
          t !== null && fo(e, t),
          (e = Oi(e, a)),
          (e.flags |= 134221824));
      return e;
    }
    return (
      (t = ql(t.child, { mode: a.mode, children: a.children })),
      (t.ref = e.ref),
      (e.child = t),
      (t.return = e),
      t
    );
  }
  function xn(t, e) {
    var l = e.ref;
    if (l === null) t !== null && t.ref !== null && (e.flags |= 4194816);
    else {
      if (typeof l != "function" && typeof l != "object") throw Error(o(284));
      (t === null || t.ref !== l) && (e.flags |= 4194816);
    }
  }
  function Ds(t, e, l, a, n) {
    return (
      qa(e),
      (l = ds(t, e, l, a, void 0, n)),
      (a = hs()),
      t !== null && !fe
        ? (ms(t, e, n), Xl(t, e, n))
        : (_t && a && ci(e), (e.flags |= 1), oe(t, e, l, n), e.child)
    );
  }
  function Nd(t, e, l, a, n, u) {
    return (
      qa(e),
      (e.updateQueue = null),
      (l = Co(e, a, l, n)),
      zo(t),
      (a = hs()),
      t !== null && !fe
        ? (ms(t, e, u), Xl(t, e, u))
        : (_t && a && ci(e), (e.flags |= 1), oe(t, e, l, u), e.child)
    );
  }
  function _d(t, e, l, a, n) {
    if ((qa(e), e.stateNode === null)) {
      var u = on,
        i = l.contextType;
      (typeof i == "object" && i !== null && (u = Se(i)),
        (u = new l(a, u)),
        (e.memoizedState =
          u.state !== null && u.state !== void 0 ? u.state : null),
        (u.updater = Cs),
        (e.stateNode = u),
        (u._reactInternals = e),
        (u = e.stateNode),
        (u.props = a),
        (u.state = e.memoizedState),
        (u.refs = {}),
        as(e),
        (i = l.contextType),
        (u.context = typeof i == "object" && i !== null ? Se(i) : on),
        (u.state = e.memoizedState),
        (i = l.getDerivedStateFromProps),
        typeof i == "function" && (zs(e, l, i, a), (u.state = e.memoizedState)),
        typeof l.getDerivedStateFromProps == "function" ||
          typeof u.getSnapshotBeforeUpdate == "function" ||
          (typeof u.UNSAFE_componentWillMount != "function" &&
            typeof u.componentWillMount != "function") ||
          ((i = u.state),
          typeof u.componentWillMount == "function" && u.componentWillMount(),
          typeof u.UNSAFE_componentWillMount == "function" &&
            u.UNSAFE_componentWillMount(),
          i !== u.state && Cs.enqueueReplaceState(u, u.state, null),
          ru(e, a, u, n),
          fu(),
          (u.state = e.memoizedState)),
        typeof u.componentDidMount == "function" && (e.flags |= 4194308),
        (a = !0));
    } else if (t === null) {
      u = e.stateNode;
      var s = e.memoizedProps,
        f = Qa(l, s);
      u.props = f;
      var b = u.context,
        _ = l.contextType;
      ((i = on), typeof _ == "object" && _ !== null && (i = Se(_)));
      var M = l.getDerivedStateFromProps;
      ((_ =
        typeof M == "function" ||
        typeof u.getSnapshotBeforeUpdate == "function"),
        (s = e.pendingProps !== s),
        _ ||
          (typeof u.UNSAFE_componentWillReceiveProps != "function" &&
            typeof u.componentWillReceiveProps != "function") ||
          ((s || b !== i) && dd(e, u, a, i)),
        (ua = !1));
      var v = e.memoizedState;
      ((u.state = v),
        ru(e, a, u, n),
        fu(),
        (b = e.memoizedState),
        s || v !== b || ua
          ? (typeof M == "function" && (zs(e, l, M, a), (b = e.memoizedState)),
            (f = ua || od(e, l, f, a, v, b, i))
              ? (_ ||
                  (typeof u.UNSAFE_componentWillMount != "function" &&
                    typeof u.componentWillMount != "function") ||
                  (typeof u.componentWillMount == "function" &&
                    u.componentWillMount(),
                  typeof u.UNSAFE_componentWillMount == "function" &&
                    u.UNSAFE_componentWillMount()),
                typeof u.componentDidMount == "function" &&
                  (e.flags |= 4194308))
              : (typeof u.componentDidMount == "function" &&
                  (e.flags |= 4194308),
                (e.memoizedProps = a),
                (e.memoizedState = b)),
            (u.props = a),
            (u.state = b),
            (u.context = i),
            (a = f))
          : (typeof u.componentDidMount == "function" && (e.flags |= 4194308),
            (a = !1)));
    } else {
      ((u = e.stateNode),
        ns(t, e),
        (i = e.memoizedProps),
        (_ = Qa(l, i)),
        (u.props = _),
        (M = e.pendingProps),
        (v = u.context),
        (b = l.contextType),
        (f = on),
        typeof b == "object" && b !== null && (f = Se(b)),
        (s = l.getDerivedStateFromProps),
        (b =
          typeof s == "function" ||
          typeof u.getSnapshotBeforeUpdate == "function") ||
          (typeof u.UNSAFE_componentWillReceiveProps != "function" &&
            typeof u.componentWillReceiveProps != "function") ||
          ((i !== M || v !== f) && dd(e, u, a, f)),
        (ua = !1),
        (v = e.memoizedState),
        (u.state = v),
        ru(e, a, u, n),
        fu());
      var E = e.memoizedState;
      i !== M ||
      v !== E ||
      ua ||
      (t !== null && t.dependencies !== null && ri(t.dependencies))
        ? (typeof s == "function" && (zs(e, l, s, a), (E = e.memoizedState)),
          (_ =
            ua ||
            od(e, l, _, a, v, E, f) ||
            (t !== null && t.dependencies !== null && ri(t.dependencies)))
            ? (b ||
                (typeof u.UNSAFE_componentWillUpdate != "function" &&
                  typeof u.componentWillUpdate != "function") ||
                (typeof u.componentWillUpdate == "function" &&
                  u.componentWillUpdate(a, E, f),
                typeof u.UNSAFE_componentWillUpdate == "function" &&
                  u.UNSAFE_componentWillUpdate(a, E, f)),
              typeof u.componentDidUpdate == "function" && (e.flags |= 4),
              typeof u.getSnapshotBeforeUpdate == "function" &&
                (e.flags |= 1024))
            : (typeof u.componentDidUpdate != "function" ||
                (i === t.memoizedProps && v === t.memoizedState) ||
                (e.flags |= 4),
              typeof u.getSnapshotBeforeUpdate != "function" ||
                (i === t.memoizedProps && v === t.memoizedState) ||
                (e.flags |= 1024),
              (e.memoizedProps = a),
              (e.memoizedState = E)),
          (u.props = a),
          (u.state = E),
          (u.context = f),
          (a = _))
        : (typeof u.componentDidUpdate != "function" ||
            (i === t.memoizedProps && v === t.memoizedState) ||
            (e.flags |= 4),
          typeof u.getSnapshotBeforeUpdate != "function" ||
            (i === t.memoizedProps && v === t.memoizedState) ||
            (e.flags |= 1024),
          (a = !1));
    }
    return (
      (u = a),
      xn(t, e),
      (a = (e.flags & 128) !== 0),
      u || a
        ? ((u = e.stateNode),
          (l =
            a && typeof l.getDerivedStateFromError != "function"
              ? null
              : u.render()),
          (e.flags |= 1),
          t !== null && a
            ? ((e.child = Va(e, t.child, null, n)),
              (e.child = Va(e, null, l, n)))
            : oe(t, e, l, n),
          (e.memoizedState = u.state),
          (t = e.child))
        : (t = Xl(t, e, n)),
      t
    );
  }
  function zd(t, e, l, a) {
    return (Ua(), (e.flags |= 256), oe(t, e, l, a), e.child);
  }
  var Ms = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0,
    hydrationErrors: null,
  };
  function Rs(t) {
    return { baseLanes: t, cachePool: yo() };
  }
  function Us(t, e, l) {
    return ((t = t !== null ? t.childLanes & ~l : 0), e && (t |= We), t);
  }
  function Cd(t, e, l) {
    var a = e.pendingProps,
      n = !1,
      u = (e.flags & 128) !== 0,
      i;
    if (
      ((i = u) ||
        (i =
          t !== null && t.memoizedState === null ? !1 : (Te.current & 2) !== 0),
      i && ((n = !0), (e.flags &= -129)),
      (i = (e.flags & 32) !== 0),
      (e.flags &= -33),
      t === null)
    ) {
      if (_t) {
        if (
          (n ? fa(e) : ra(),
          (t = Wt)
            ? ((t = Fh(t, cl)),
              (t = t !== null && t.data !== "&" ? t : null),
              t !== null &&
                ((e.memoizedState = {
                  dehydrated: t,
                  treeContext: ta !== null ? { id: bl, overflow: Sl } : null,
                  retryLane: 536870912,
                  hydrationErrors: null,
                }),
                (l = io(t)),
                (l.return = e),
                (e.child = l),
                (ye = e),
                (Wt = null)))
            : (t = null),
          t === null)
        )
          throw la(e);
        return (Uf(t) ? (e.lanes = 32) : (e.lanes = 536870912), null);
      }
      return (
        (u = a.children),
        (a = a.fallback),
        n
          ? (ra(),
            (n = e.mode),
            (u = Ai({ mode: "hidden", children: u }, n)),
            (a = Ra(a, n, l, null)),
            (u.return = e),
            (a.return = e),
            (u.sibling = a),
            (e.child = u),
            (a = e.child),
            (a.memoizedState = Rs(l)),
            (a.childLanes = Us(t, i, l)),
            (e.memoizedState = Ms),
            vu(null, a))
          : (fa(e), Hs(e, u))
      );
    }
    var s = t.memoizedState;
    if (s !== null) {
      var f = s.dehydrated;
      if (f !== null) return yv(t, e, u, i, a, f, s, l);
    }
    return n
      ? (ra(),
        (n = a.fallback),
        (u = e.mode),
        (s = t.child),
        (f = s.sibling),
        (a = ql(s, { mode: "hidden", children: a.children })),
        (a.subtreeFlags = s.subtreeFlags & 1206910976),
        f !== null ? (n = ql(f, n)) : ((n = Ra(n, u, l, null)), (n.flags |= 2)),
        (n.return = e),
        (a.return = e),
        (a.sibling = n),
        (e.child = a),
        vu(null, a),
        (a = e.child),
        (n = t.child.memoizedState),
        n === null
          ? (n = Rs(l))
          : ((u = n.cachePool),
            u !== null
              ? ((s = ce._currentValue),
                (u = u.parent !== s ? { parent: s, pool: s } : u))
              : (u = yo()),
            (n = { baseLanes: n.baseLanes | l, cachePool: u })),
        (a.memoizedState = n),
        (a.childLanes = Us(t, i, l)),
        (e.memoizedState = Ms),
        vu(t.child, a))
      : (fa(e),
        (l = t.child),
        (t = l.sibling),
        (l = ql(l, { mode: "visible", children: a.children })),
        (l.return = e),
        (l.sibling = null),
        t !== null &&
          ((i = e.deletions),
          i === null ? ((e.deletions = [t]), (e.flags |= 16)) : i.push(t)),
        (e.child = l),
        (e.memoizedState = null),
        l);
  }
  function Hs(t, e) {
    return (
      (e = Ai({ mode: "visible", children: e }, t.mode)),
      (e.return = t),
      (t.child = e)
    );
  }
  function Ai(t, e) {
    return ((t = Be(22, t, null, e)), (t.lanes = 0), t);
  }
  function Di(t, e, l) {
    return (
      Va(e, t.child, null, l),
      (t = Hs(e, e.pendingProps.children)),
      (t.flags |= 2),
      (e.memoizedState = null),
      t
    );
  }
  function yv(t, e, l, a, n, u, i, s) {
    if (l)
      return e.flags & 256
        ? (fa(e), (e.flags &= -257), Di(t, e, s))
        : e.memoizedState !== null
          ? (ra(), (e.child = t.child), (e.flags |= 128), null)
          : (ra(),
            (u = n.fallback),
            (i = e.mode),
            (n = Ai({ mode: "visible", children: n.children }, i)),
            (u = Ra(u, i, s, null)),
            (u.flags |= 2),
            (n.return = e),
            (u.return = e),
            (n.sibling = u),
            (e.child = n),
            Va(e, t.child, null, s),
            (n = e.child),
            (n.memoizedState = Rs(s)),
            (n.childLanes = Us(t, a, s)),
            (e.memoizedState = Ms),
            vu(null, n));
    if ((fa(e), Uf(u))) {
      if (((a = u.nextSibling && u.nextSibling.dataset), a)) var f = a.dgst;
      return (
        (a = f),
        a !== "" &&
          ((n = Error(o(419))),
          (n.stack = ""),
          (n.digest = a),
          au({ value: n, source: null, stack: null })),
        Di(t, e, s)
      );
    }
    if ((fe || wa(t, e, s, !1), (a = (s & t.childLanes) !== 0), fe || a)) {
      if (sa.current !== null) return Di(t, e, s);
      if (
        ((a = Ft), a !== null && ((n = fr(a, s)), n !== 0 && n !== i.retryLane))
      )
        throw ((i.retryLane = n), Ma(t, n), Xe(a, t, n), As);
      return (Rf(u) || $i(), Di(t, e, s));
    }
    return Rf(u)
      ? ((e.flags |= 192), (e.child = t.child), null)
      : ((t = i.treeContext),
        (Wt = fl(u.nextSibling)),
        (ye = e),
        (_t = !0),
        (ea = null),
        (cl = !1),
        t !== null && fo(e, t),
        (e = Hs(e, n.children)),
        (e.flags |= 134221824),
        e);
  }
  function Od(t, e, l) {
    t.lanes |= e;
    var a = t.alternate;
    (a !== null && (a.lanes |= e), fi(t.return, e, l));
  }
  function Ad(t) {
    for (var e = null; t !== null;) {
      var l = t.alternate;
      (l !== null && pi(l) === null && (e = t), (t = t.sibling));
    }
    return e;
  }
  function Mi(t, e, l, a, n, u) {
    var i = t.memoizedState;
    i === null
      ? (t.memoizedState = {
          isBackwards: e,
          rendering: null,
          renderingStartTime: 0,
          last: a,
          tail: l,
          tailMode: n,
          treeForkCount: u,
        })
      : ((i.isBackwards = e),
        (i.rendering = null),
        (i.renderingStartTime = 0),
        (i.last = a),
        (i.tail = l),
        (i.tailMode = n),
        (i.treeForkCount = u));
  }
  function ws(t) {
    var e = t.child;
    for (t.child = null; e !== null;) {
      var l = e.sibling;
      ((e.sibling = t.child), (t.child = e), (e = l));
    }
  }
  function qs(t, e, l) {
    var a = e.pendingProps,
      n = a.revealOrder,
      u = a.tail;
    a = a.children;
    var i = Te.current;
    if (e.flags & 128) return (ou(e, i), null);
    var s = (i & 2) !== 0;
    if (
      (s ? ((i = (i & 1) | 2), (e.flags |= 128)) : (i &= 1),
      ou(e, i),
      n === "backwards" && t !== null
        ? (ws(t), oe(t, e, a, l), ws(t))
        : oe(t, e, a, l),
      (a = _t ? lu : 0),
      !s && t !== null && (t.flags & 128) !== 0)
    )
      t: for (t = e.child; t !== null;) {
        if (t.tag === 13) t.memoizedState !== null && Od(t, l, e);
        else if (t.tag === 19) Od(t, l, e);
        else if (t.child !== null) {
          ((t.child.return = t), (t = t.child));
          continue;
        }
        if (t === e) break t;
        for (; t.sibling === null;) {
          if (t.return === null || t.return === e) break t;
          t = t.return;
        }
        ((t.sibling.return = t.return), (t = t.sibling));
      }
    switch (n) {
      case "backwards":
        ((l = Ad(e.child)),
          l === null
            ? ((n = e.child), (e.child = null))
            : ((n = l.sibling), (l.sibling = null), ws(e)),
          Mi(e, !0, n, null, u, a));
        break;
      case "unstable_legacy-backwards":
        for (l = null, n = e.child, e.child = null; n !== null;) {
          if (((t = n.alternate), t !== null && pi(t) === null)) {
            e.child = n;
            break;
          }
          ((t = n.sibling), (n.sibling = l), (l = n), (n = t));
        }
        Mi(e, !0, l, null, u, a);
        break;
      case "together":
        Mi(e, !1, null, null, void 0, a);
        break;
      case "independent":
        e.memoizedState = null;
        break;
      default:
        ((l = Ad(e.child)),
          l === null
            ? ((n = e.child), (e.child = null))
            : ((n = l.sibling), (l.sibling = null)),
          Mi(e, !1, n, l, u, a));
    }
    return e.child;
  }
  function Dd(t, e, l) {
    var a = e.pendingProps;
    return (aa(e, e.type, a.value), oe(t, e, a.children, l), e.child);
  }
  function Xl(t, e, l) {
    if (
      (t !== null && (e.dependencies = t.dependencies),
      (ma |= e.lanes),
      (l & e.childLanes) === 0)
    )
      if (t !== null) {
        if ((wa(t, e, l, !1), (l & e.childLanes) === 0)) return null;
      } else return null;
    if (t !== null && e.child !== t.child) throw Error(o(153));
    if (e.child !== null) {
      for (
        t = e.child, l = ql(t, t.pendingProps), e.child = l, l.return = e;
        t.sibling !== null;
      )
        ((t = t.sibling),
          (l = l.sibling = ql(t, t.pendingProps)),
          (l.return = e));
      l.sibling = null;
    }
    return e.child;
  }
  function Ys(t, e) {
    return (t.lanes & e) !== 0
      ? !0
      : ((t = t.dependencies), !!(t !== null && ri(t)));
  }
  function gv(t, e, l) {
    switch (e.tag) {
      case 3:
        (_e(e, e.stateNode.containerInfo),
          aa(e, ce, t.memoizedState.cache),
          Ua());
        break;
      case 27:
      case 5:
        me(e);
        break;
      case 4:
        _e(e, e.stateNode.containerInfo);
        break;
      case 10:
        aa(e, e.type, e.memoizedProps.value);
        break;
      case 31:
        if (e.memoizedState !== null) return ((e.flags |= 128), fs(e), null);
        break;
      case 13:
        var a = e.memoizedState;
        if (a !== null) {
          if (a.dehydrated !== null) return (fa(e), (e.flags |= 128), null);
          a = wa(t, e, l, !1);
          var n = e.child.childLanes;
          return a || (l & n) !== 0
            ? Cd(t, e, l)
            : (fa(e), (t = Xl(t, e, l)), t !== null ? t.sibling : null);
        }
        fa(e);
        break;
      case 19:
        if (e.flags & 128) return qs(t, e, l);
        if (
          ((n = (t.flags & 128) !== 0),
          (a = (l & e.childLanes) !== 0),
          a || (wa(t, e, l, !1), (a = (l & e.childLanes) !== 0)),
          n)
        ) {
          if (a) return qs(t, e, l);
          e.flags |= 128;
        }
        if (
          ((n = e.memoizedState),
          n !== null &&
            ((n.rendering = null), (n.tail = null), (n.lastEffect = null)),
          ou(e, Te.current),
          a)
        )
          break;
        return null;
      case 22:
        return ((e.lanes = 0), Td(t, e, l, e.pendingProps));
      case 24:
        aa(e, ce, t.memoizedState.cache);
    }
    return Xl(t, e, l);
  }
  function Md(t, e, l) {
    if (t !== null)
      if (t.memoizedProps !== e.pendingProps) fe = !0;
      else {
        if (!Ys(t, l) && (e.flags & 128) === 0) return ((fe = !1), gv(t, e, l));
        fe = (t.flags & 131072) !== 0;
      }
    else ((fe = !1), _t && (e.flags & 1048576) !== 0 && so(e, lu, e.index));
    switch (((e.lanes = 0), e.tag)) {
      case 16:
        t: {
          var a = e.pendingProps;
          if (((t = Ga(e.elementType)), (e.type = t), typeof t == "function"))
            Zc(t)
              ? ((a = Qa(t, a)), (e.tag = 1), (e = _d(null, e, t, a, l)))
              : ((e.tag = 0), (e = Ds(null, e, t, a, l)));
          else {
            if (t != null) {
              var n = t.$$typeof;
              if (n === O) {
                ((e.tag = 11), (e = bd(null, e, t, a, l)));
                break t;
              } else if (n === C) {
                ((e.tag = 14), (e = Sd(null, e, t, a, l)));
                break t;
              } else if (n === nt) {
                ((e.tag = 10), (e.type = t), (e = Dd(null, e, l)));
                break t;
              }
            }
            throw ((e = F(t) || t), Error(o(306, e, "")));
          }
        }
        return e;
      case 0:
        return Ds(t, e, e.type, e.pendingProps, l);
      case 1:
        return ((a = e.type), (n = Qa(a, e.pendingProps)), _d(t, e, a, n, l));
      case 3:
        t: {
          if ((_e(e, e.stateNode.containerInfo), t === null))
            throw Error(o(387));
          a = e.pendingProps;
          var u = e.memoizedState;
          ((n = u.element), ns(t, e), ru(e, a, null, l));
          var i = e.memoizedState;
          if (
            ((a = i.cache),
            aa(e, ce, a),
            a !== u.cache && Wc(e, [ce], l, !0),
            fu(),
            (a = i.element),
            u.isDehydrated)
          )
            if (
              ((u = { element: a, isDehydrated: !1, cache: i.cache }),
              (e.updateQueue.baseState = u),
              (e.memoizedState = u),
              e.flags & 256)
            ) {
              e = zd(t, e, a, l);
              break t;
            } else if (a !== n) {
              ((n = nl(Error(o(424)), e)), au(n), (e = zd(t, e, a, l)));
              break t;
            } else
              for (
                t = e.stateNode.containerInfo,
                  t.nodeType === 9
                    ? (t = t.body)
                    : (t = t.nodeName === "HTML" ? t.ownerDocument.body : t),
                  Wt = fl(t.firstChild),
                  ye = e,
                  _t = !0,
                  ea = null,
                  cl = !0,
                  l = To(e, null, a, l),
                  e.child = l;
                l;
              )
                ((l.flags = (l.flags & -3) | 134221824), (l = l.sibling));
          else {
            if ((Ua(), a === n)) {
              e = Xl(t, e, l);
              break t;
            }
            oe(t, e, a, l);
          }
          e = e.child;
        }
        return e;
      case 26:
        return (
          xn(t, e),
          t === null
            ? (l = am(e.type, null, e.pendingProps, null))
              ? (e.memoizedState = l)
              : _t || (e.stateNode = wh(e.type, e.pendingProps, de.current, e))
            : (e.memoizedState = am(
                e.type,
                t.memoizedProps,
                e.pendingProps,
                t.memoizedState,
              )),
          null
        );
      case 27:
        return (
          me(e),
          t === null &&
            _t &&
            ((a = e.stateNode = Ph(e.type, e.pendingProps, de.current)),
            (ye = e),
            (cl = !0),
            (n = Wt),
            pa(e.type) ? ((Hf = n), (Wt = fl(a.firstChild))) : (Wt = n)),
          oe(t, e, e.pendingProps.children, l),
          xn(t, e),
          t === null && (e.flags |= 4194304),
          e.child
        );
      case 5:
        return (
          t === null &&
            _t &&
            ((n = a = Wt) &&
              ((a = oy(a, e.type, e.pendingProps, cl)),
              a !== null
                ? ((e.stateNode = a),
                  (ye = e),
                  (Wt = fl(a.firstChild)),
                  (cl = !1),
                  (n = !0))
                : (n = !1)),
            n || la(e)),
          me(e),
          (n = e.type),
          (u = e.pendingProps),
          (i = t !== null ? t.memoizedProps : null),
          (a = u.children),
          _f(n, u) ? (a = null) : i !== null && _f(n, i) && (e.flags |= 32),
          e.memoizedState !== null &&
            ((n = ds(t, e, iv, null, null, l)), (Bn._currentValue = n)),
          xn(t, e),
          oe(t, e, a, l),
          e.child
        );
      case 6:
        return (
          t === null &&
            _t &&
            ((t = l = Wt) &&
              ((l = dy(l, e.pendingProps, cl)),
              l !== null
                ? ((e.stateNode = l), (ye = e), (Wt = null), (t = !0))
                : (t = !1)),
            t || la(e)),
          null
        );
      case 13:
        return Cd(t, e, l);
      case 4:
        return (
          _e(e, e.stateNode.containerInfo),
          (a = e.pendingProps),
          t === null ? (e.child = Va(e, null, a, l)) : oe(t, e, a, l),
          e.child
        );
      case 11:
        return bd(t, e, e.type, e.pendingProps, l);
      case 7:
        return ((a = e.pendingProps), xn(t, e), oe(t, e, a, l), e.child);
      case 8:
        return (oe(t, e, e.pendingProps.children, l), e.child);
      case 12:
        return (oe(t, e, e.pendingProps.children, l), e.child);
      case 10:
        return Dd(t, e, l);
      case 9:
        return (
          (n = e.type._context),
          (a = e.pendingProps.children),
          qa(e),
          (n = Se(n)),
          (a = a(n)),
          (e.flags |= 1),
          oe(t, e, a, l),
          e.child
        );
      case 14:
        return Sd(t, e, e.type, e.pendingProps, l);
      case 15:
        return xd(t, e, e.type, e.pendingProps, l);
      case 19:
        return qs(t, e, l);
      case 31:
        return vv(t, e, l);
      case 22:
        return Td(t, e, l, e.pendingProps);
      case 24:
        return (
          qa(e),
          (a = Se(ce)),
          t === null
            ? ((n = es()),
              n === null &&
                ((n = Ft),
                (u = Pc()),
                (n.pooledCache = u),
                u.refCount++,
                u !== null && (n.pooledCacheLanes |= l),
                (n = u)),
              (e.memoizedState = { parent: a, cache: n }),
              as(e),
              aa(e, ce, n))
            : ((t.lanes & l) !== 0 && (ns(t, e), ru(e, null, null, l), fu()),
              (n = t.memoizedState),
              (u = e.memoizedState),
              n.parent !== a
                ? ((n = { parent: a, cache: a }),
                  (e.memoizedState = n),
                  e.lanes === 0 &&
                    (e.memoizedState = e.updateQueue.baseState = n),
                  aa(e, ce, a))
                : ((a = u.cache),
                  aa(e, ce, a),
                  a !== n.cache && Wc(e, [ce], l, !0))),
          oe(t, e, e.pendingProps.children, l),
          e.child
        );
      case 30:
        return (
          e.stateNode === null &&
            (e.stateNode = {
              autoName: null,
              paired: null,
              clones: null,
              ref: null,
            }),
          (a = e.pendingProps),
          a.name != null && a.name !== "auto"
            ? (e.flags |= t === null ? 18882560 : 18874368)
            : _t && ci(e),
          t !== null && t.memoizedProps.name !== a.name
            ? (e.flags |= 4194816)
            : xn(t, e),
          oe(t, e, a.children, l),
          e.child
        );
      case 29:
        throw e.pendingProps;
    }
    throw Error(o(156, e.tag));
  }
  function Ql(t) {
    t.flags |= 4;
  }
  function Bs(t, e, l, a, n) {
    var u;
    if (
      ((u = (t.mode & 32) !== 0) &&
        (u =
          l === null
            ? cm(e, a)
            : cm(e, a) && (a.src !== l.src || a.srcSet !== l.srcSet)),
      u)
    ) {
      if (((t.flags |= 16777216), (n & 335544128) === n))
        if (t.stateNode.complete) t.flags |= 8192;
        else if (hh()) t.flags |= 8192;
        else throw ((La = mi), ls);
    } else t.flags &= -16777217;
  }
  function Rd(t, e) {
    if (e.type !== "stylesheet" || (e.state.loading & 4) !== 0)
      t.flags &= -16777217;
    else if (((t.flags |= 16777216), !sm(e)))
      if (hh()) t.flags |= 8192;
      else throw ((La = mi), ls);
  }
  function Ri(t, e) {
    (e !== null && (t.flags |= 4),
      t.flags & 16384 &&
        ((e = t.tag !== 22 ? ir() : 536870912), (t.lanes |= e), (_n |= e)));
  }
  function yu(t, e) {
    if (!_t)
      switch (t.tailMode) {
        case "visible":
          break;
        case "collapsed":
          for (var l = t.tail, a = null; l !== null;)
            (l.alternate !== null && (a = l), (l = l.sibling));
          a === null
            ? e || t.tail === null
              ? (t.tail = null)
              : (t.tail.sibling = null)
            : (a.sibling = null);
          break;
        default:
          for (e = t.tail, l = null; e !== null;)
            (e.alternate !== null && (l = e), (e = e.sibling));
          l === null ? (t.tail = null) : (l.sibling = null);
      }
  }
  function Pt(t) {
    var e = t.alternate !== null && t.alternate.child === t.child,
      l = 0,
      a = 0;
    if (e)
      for (var n = t.child; n !== null;)
        ((l |= n.lanes | n.childLanes),
          (a |= n.subtreeFlags & 1206910976),
          (a |= n.flags & 1206910976),
          (n.return = t),
          (n = n.sibling));
    else
      for (n = t.child; n !== null;)
        ((l |= n.lanes | n.childLanes),
          (a |= n.subtreeFlags),
          (a |= n.flags),
          (n.return = t),
          (n = n.sibling));
    return ((t.subtreeFlags |= a), (t.childLanes = l), e);
  }
  function pv(t, e, l) {
    var a = e.pendingProps;
    switch ((Jc(e), e.tag)) {
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return (Pt(e), null);
      case 1:
        return (Pt(e), null);
      case 3:
        return (
          (l = e.stateNode),
          (a = null),
          t !== null && (a = t.memoizedState.cache),
          e.memoizedState.cache !== a && (e.flags |= 2048),
          Gl(ce),
          $t(),
          l.pendingContext &&
            ((l.context = l.pendingContext), (l.pendingContext = null)),
          (t === null || t.child === null) &&
            (mn(e)
              ? Ql(e)
              : t === null ||
                (t.memoizedState.isDehydrated && (e.flags & 256) === 0) ||
                ((e.flags |= 1024), Fc())),
          Pt(e),
          null
        );
      case 26:
        var n = e.type,
          u = e.memoizedState;
        return (
          t === null
            ? (Ql(e),
              u !== null ? (Pt(e), Rd(e, u)) : (Pt(e), Bs(e, n, null, a, l)))
            : u
              ? u !== t.memoizedState
                ? (Ql(e), Pt(e), Rd(e, u))
                : (Pt(e), (e.flags &= -16777217))
              : ((t = t.memoizedProps),
                t !== a && Ql(e),
                Pt(e),
                Bs(e, n, t, a, l)),
          null
        );
      case 27:
        if (
          (Vt(e),
          (l = de.current),
          (n = e.type),
          t !== null && e.stateNode != null)
        )
          t.memoizedProps !== a && Ql(e);
        else {
          if (!a) {
            if (e.stateNode === null) throw Error(o(166));
            return (Pt(e), (e.subtreeFlags &= -33554433), null);
          }
          ((t = jt.current),
            mn(e) ? ro(e) : ((t = Ph(n, a, l)), (e.stateNode = t), Ql(e)));
        }
        return (Pt(e), (e.subtreeFlags &= -33554433), null);
      case 5:
        if ((Vt(e), (n = e.type), t !== null && e.stateNode != null))
          t.memoizedProps !== a && Ql(e);
        else {
          if (!a) {
            if (e.stateNode === null) throw Error(o(166));
            return (Pt(e), (e.subtreeFlags &= -33554433), null);
          }
          if (((u = jt.current), mn(e))) ro(e);
          else {
            var i = zu(de.current);
            switch (u) {
              case 1:
                u = i.createElementNS("http://www.w3.org/2000/svg", n);
                break;
              case 2:
                u = i.createElementNS("http://www.w3.org/1998/Math/MathML", n);
                break;
              default:
                switch (n) {
                  case "svg":
                    u = i.createElementNS("http://www.w3.org/2000/svg", n);
                    break;
                  case "math":
                    u = i.createElementNS(
                      "http://www.w3.org/1998/Math/MathML",
                      n,
                    );
                    break;
                  case "script":
                    ((u = i.createElement("div")),
                      (u.innerHTML = "<script><\/script>"),
                      (u = u.removeChild(u.firstChild)));
                    break;
                  case "select":
                    ((u =
                      typeof a.is == "string"
                        ? i.createElement("select", { is: a.is })
                        : i.createElement("select")),
                      a.multiple
                        ? (u.multiple = !0)
                        : a.size && (u.size = a.size));
                    break;
                  default:
                    u =
                      typeof a.is == "string"
                        ? i.createElement(n, { is: a.is })
                        : i.createElement(n);
                }
            }
            ((u[be] = e), (u[Ye] = a));
            t: for (i = e.child; i !== null;) {
              if (i.tag === 5 || i.tag === 6) u.appendChild(i.stateNode);
              else if (i.tag !== 4 && i.tag !== 27 && i.child !== null) {
                ((i.child.return = i), (i = i.child));
                continue;
              }
              if (i === e) break t;
              for (; i.sibling === null;) {
                if (i.return === null || i.return === e) break t;
                i = i.return;
              }
              ((i.sibling.return = i.return), (i = i.sibling));
            }
            e.stateNode = u;
            t: switch ((je(u, n, a), n)) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                a = !!a.autoFocus;
                break t;
              case "img":
                a = !0;
                break t;
              default:
                a = !1;
            }
            a && Ql(e);
          }
        }
        return (
          Pt(e),
          (e.subtreeFlags &= -33554433),
          Bs(e, e.type, t === null ? null : t.memoizedProps, e.pendingProps, l),
          null
        );
      case 6:
        if (t && e.stateNode != null) t.memoizedProps !== a && Ql(e);
        else {
          if (typeof a != "string" && e.stateNode === null) throw Error(o(166));
          if (((t = de.current), mn(e))) {
            if (
              ((t = e.stateNode),
              (l = e.memoizedProps),
              (a = null),
              (n = ye),
              n !== null)
            )
              switch (n.tag) {
                case 27:
                case 5:
                  a = n.memoizedProps;
              }
            ((t[be] = e),
              (t = !!(
                t.nodeValue === l ||
                (a !== null && a.suppressHydrationWarning === !0) ||
                Mh(t.nodeValue, l)
              )),
              t || la(e, !0));
          } else
            ((t = zu(t).createTextNode(a)), (t[be] = e), (e.stateNode = t));
        }
        return (Pt(e), null);
      case 31:
        if (((l = e.memoizedState), t === null || t.memoizedState !== null)) {
          if (((a = mn(e)), l !== null)) {
            if (t === null) {
              if (!a) throw Error(o(318));
              if (
                ((t = e.memoizedState),
                (t = t !== null ? t.dehydrated : null),
                !t)
              )
                throw Error(o(557));
              t[be] = e;
            } else
              (Ua(),
                (e.flags & 128) === 0 && (e.memoizedState = null),
                (e.flags |= 4));
            (Pt(e), (t = !1));
          } else
            ((l = Fc()),
              t !== null &&
                t.memoizedState !== null &&
                (t.memoizedState.hydrationErrors = l),
              (t = !0));
          if (!t) return e.flags & 256 ? ($e(e), e) : ($e(e), null);
          if ((e.flags & 128) !== 0) throw Error(o(558));
        }
        return (Pt(e), null);
      case 13:
        if (
          ((a = e.memoizedState),
          t === null ||
            (t.memoizedState !== null && t.memoizedState.dehydrated !== null))
        ) {
          if (((n = mn(e)), a !== null && a.dehydrated !== null)) {
            if (t === null) {
              if (!n) throw Error(o(318));
              if (
                ((n = e.memoizedState),
                (n = n !== null ? n.dehydrated : null),
                !n)
              )
                throw Error(o(317));
              n[be] = e;
            } else
              (Ua(),
                (e.flags & 128) === 0 && (e.memoizedState = null),
                (e.flags |= 4));
            (Pt(e), (n = !1));
          } else
            ((n = Fc()),
              t !== null &&
                t.memoizedState !== null &&
                (t.memoizedState.hydrationErrors = n),
              (n = !0));
          if (!n) return e.flags & 256 ? ($e(e), e) : ($e(e), null);
        }
        return (
          $e(e),
          (e.flags & 128) !== 0
            ? ((e.lanes = l), e)
            : ((l = a !== null),
              (t = t !== null && t.memoizedState !== null),
              l &&
                ((a = e.child),
                (n = null),
                a.alternate !== null &&
                  a.alternate.memoizedState !== null &&
                  a.alternate.memoizedState.cachePool !== null &&
                  (n = a.alternate.memoizedState.cachePool.pool),
                (u = null),
                a.memoizedState !== null &&
                  a.memoizedState.cachePool !== null &&
                  (u = a.memoizedState.cachePool.pool),
                u !== n && (a.flags |= 2048)),
              l !== t && l && (e.child.flags |= 8192),
              Ri(e, e.updateQueue),
              Pt(e),
              null)
        );
      case 4:
        return (
          $t(),
          t === null && xf(e.stateNode.containerInfo),
          (e.flags |= 67108864),
          Pt(e),
          null
        );
      case 10:
        return (Gl(e.type), Pt(e), null);
      case 19:
        if ((rs(e), (a = e.memoizedState), a === null)) return (Pt(e), null);
        if (((n = (e.flags & 128) !== 0), (u = a.rendering), u === null))
          if (n) yu(a, !1);
          else {
            if (ne !== 0 || (t !== null && (t.flags & 128) !== 0))
              for (t = e.child; t !== null;) {
                if (((u = pi(t)), u !== null)) {
                  for (
                    e.flags |= 128,
                      yu(a, !1),
                      t = u.updateQueue,
                      e.updateQueue = t,
                      Ri(e, t),
                      e.subtreeFlags = 0,
                      t = l,
                      l = e.child;
                    l !== null;
                  )
                    (uo(l, t), (l = l.sibling));
                  return (
                    ou(e, (Te.current & 1) | 2),
                    _t && Yl(e, a.treeForkCount),
                    e.child
                  );
                }
                t = t.sibling;
              }
            a.tail !== null &&
              ue() > Zi &&
              ((e.flags |= 128), (n = !0), yu(a, !1), (e.lanes = 4194304));
          }
        else {
          if (!n)
            if (((t = pi(u)), t !== null)) {
              if (
                ((e.flags |= 128),
                (n = !0),
                (t = t.updateQueue),
                (e.updateQueue = t),
                Ri(e, t),
                yu(a, !0),
                a.tail === null &&
                  a.tailMode !== "collapsed" &&
                  a.tailMode !== "visible" &&
                  !u.alternate &&
                  !_t)
              )
                return (Pt(e), null);
            } else
              2 * ue() - a.renderingStartTime > Zi &&
                l !== 536870912 &&
                ((e.flags |= 128), (n = !0), yu(a, !1), (e.lanes = 4194304));
          a.isBackwards
            ? ((u.sibling = e.child), (e.child = u))
            : ((t = a.last),
              t !== null ? (t.sibling = u) : (e.child = u),
              (a.last = u));
        }
        if (a.tail !== null) {
          t = a.tail;
          t: {
            for (l = t; l !== null;) {
              if (l.alternate !== null) {
                l = !1;
                break t;
              }
              l = l.sibling;
            }
            l = !0;
          }
          return (
            (a.rendering = t),
            (a.tail = t.sibling),
            (a.renderingStartTime = ue()),
            (t.sibling = null),
            (u = Te.current),
            (u = n ? (u & 1) | 2 : u & 1),
            a.tailMode === "visible" || a.tailMode === "collapsed" || !l || _t
              ? ou(e, u)
              : ((l = u), at(xe, e), at(Te, l), Ae === null && (Ae = e)),
            _t && Yl(e, a.treeForkCount),
            t
          );
        }
        return (Pt(e), null);
      case 22:
      case 23:
        return (
          $e(e),
          ss(),
          (a = e.memoizedState !== null),
          t !== null
            ? (t.memoizedState !== null) !== a && (e.flags |= 8192)
            : a && (e.flags |= 8192),
          a
            ? (l & 536870912) !== 0 &&
              (e.flags & 128) === 0 &&
              (Pt(e), e.subtreeFlags & 6 && (e.flags |= 8192))
            : Pt(e),
          (l = e.updateQueue),
          l !== null && Ri(e, l.retryQueue),
          (l = null),
          t !== null &&
            t.memoizedState !== null &&
            t.memoizedState.cachePool !== null &&
            (l = t.memoizedState.cachePool.pool),
          (a = null),
          e.memoizedState !== null &&
            e.memoizedState.cachePool !== null &&
            (a = e.memoizedState.cachePool.pool),
          a !== l && (e.flags |= 2048),
          t !== null && Nt(Ba),
          null
        );
      case 24:
        return (
          (l = null),
          t !== null && (l = t.memoizedState.cache),
          e.memoizedState.cache !== l && (e.flags |= 2048),
          Gl(ce),
          Pt(e),
          null
        );
      case 25:
        return null;
      case 30:
        return ((e.flags |= 33554432), Pt(e), null);
    }
    throw Error(o(156, e.tag));
  }
  function bv(t, e) {
    switch ((Jc(e), e.tag)) {
      case 1:
        return (
          (t = e.flags),
          t & 65536 ? ((e.flags = (t & -65537) | 128), e) : null
        );
      case 3:
        return (
          Gl(ce),
          $t(),
          (t = e.flags),
          (t & 65536) !== 0 && (t & 128) === 0
            ? ((e.flags = (t & -65537) | 128), e)
            : null
        );
      case 26:
      case 27:
      case 5:
        return (Vt(e), null);
      case 31:
        if (e.memoizedState !== null) {
          if (($e(e), e.alternate === null)) throw Error(o(340));
          Ua();
        }
        return (
          (t = e.flags),
          t & 65536 ? ((e.flags = (t & -65537) | 128), e) : null
        );
      case 13:
        if (
          ($e(e), (t = e.memoizedState), t !== null && t.dehydrated !== null)
        ) {
          if (e.alternate === null) throw Error(o(340));
          Ua();
        }
        return (
          (t = e.flags),
          t & 65536 ? ((e.flags = (t & -65537) | 128), e) : null
        );
      case 19:
        return (
          rs(e),
          (t = e.flags),
          t & 65536
            ? ((e.flags = (t & -65537) | 128),
              (t = e.memoizedState),
              t !== null && ((t.rendering = null), (t.tail = null)),
              (e.flags |= 4),
              e)
            : null
        );
      case 4:
        return ($t(), null);
      case 10:
        return (Gl(e.type), null);
      case 22:
      case 23:
        return (
          $e(e),
          ss(),
          t !== null && Nt(Ba),
          (t = e.flags),
          t & 65536 ? ((e.flags = (t & -65537) | 128), e) : null
        );
      case 24:
        return (Gl(ce), null);
      case 25:
        return null;
      default:
        return null;
    }
  }
  function Ud(t, e) {
    switch ((Jc(e), e.tag)) {
      case 3:
        (Gl(ce), $t());
        break;
      case 26:
      case 27:
      case 5:
        Vt(e);
        break;
      case 4:
        $t();
        break;
      case 31:
        e.memoizedState !== null && $e(e);
        break;
      case 13:
        $e(e);
        break;
      case 19:
        rs(e);
        break;
      case 10:
        Gl(e.type);
        break;
      case 22:
      case 23:
        ($e(e), ss(), t !== null && Nt(Ba));
        break;
      case 24:
        Gl(ce);
    }
  }
  function gu(t, e) {
    try {
      var l = e.updateQueue,
        a = l !== null ? l.lastEffect : null;
      if (a !== null) {
        var n = a.next;
        l = n;
        do {
          if ((l.tag & t) === t) {
            a = void 0;
            var u = l.create,
              i = l.inst;
            ((a = u()), (i.destroy = a));
          }
          l = l.next;
        } while (l !== n);
      }
    } catch (s) {
      Zt(e, e.return, s);
    }
  }
  function oa(t, e, l) {
    try {
      var a = e.updateQueue,
        n = a !== null ? a.lastEffect : null;
      if (n !== null) {
        var u = n.next;
        a = u;
        do {
          if ((a.tag & t) === t) {
            var i = a.inst,
              s = i.destroy;
            if (s !== void 0) {
              ((i.destroy = void 0), (n = e));
              var f = l,
                b = s;
              try {
                b();
              } catch (_) {
                Zt(n, f, _);
              }
            }
          }
          a = a.next;
        } while (a !== u);
      }
    } catch (_) {
      Zt(e, e.return, _);
    }
  }
  function Hd(t) {
    var e = t.updateQueue;
    if (e !== null) {
      var l = t.stateNode;
      try {
        jo(e, l);
      } catch (a) {
        Zt(t, t.return, a);
      }
    }
  }
  function wd(t, e, l) {
    ((l.props = Qa(t.type, t.memoizedProps)), (l.state = t.memoizedState));
    try {
      l.componentWillUnmount();
    } catch (a) {
      Zt(t, e, a);
    }
  }
  function xl(t, e) {
    try {
      var l = t.ref;
      if (l !== null) {
        switch (t.tag) {
          case 26:
          case 27:
          case 5:
            var a = t.stateNode;
            break;
          case 30:
            var n = t.stateNode,
              u = Hl(t.memoizedProps, n);
            ((n.ref === null || n.ref.name !== u) && (n.ref = Xh(u)),
              (a = n.ref));
            break;
          case 7:
            if (t.stateNode === null) {
              var i = new tl(t);
              (N(t.child, !1, fy, i, void 0, void 0), (t.stateNode = i));
            }
            a = t.stateNode;
            break;
          default:
            a = t.stateNode;
        }
        typeof l == "function" ? (t.refCleanup = l(a)) : (l.current = a);
      }
    } catch (s) {
      Zt(t, e, s);
    }
  }
  function Ee(t, e) {
    var l = t.ref,
      a = t.refCleanup;
    if (l !== null)
      if (typeof a == "function")
        try {
          a();
        } catch (n) {
          Zt(t, e, n);
        } finally {
          ((t.refCleanup = null),
            (t = t.alternate),
            t != null && (t.refCleanup = null));
        }
      else if (typeof l == "function")
        try {
          l(null);
        } catch (n) {
          Zt(t, e, n);
        }
      else l.current = null;
  }
  function Ui(t, e) {
    if (
      (t.tag === 5 || t.tag === 27 || t.tag === 6) &&
      t.alternate === null &&
      e !== null
    )
      for (var l = 0; l < e.length; l++) $h(t.stateNode, e[l]);
  }
  function qd(t) {
    for (
      var e = t.return;
      e !== null && (Ls(e) && $h(t.stateNode, e.stateNode), !Gs(e));
    )
      e = e.return;
  }
  function pu(t) {
    for (
      var e = t.return;
      e !== null && (Ls(e) && ry(t.stateNode, e.stateNode), !Gs(e));
    )
      e = e.return;
  }
  function Gs(t) {
    return t.tag === 5 || t.tag === 3 || t.tag === 27;
  }
  function Ls(t) {
    return t && t.tag === 7 && t.stateNode !== null;
  }
  function Vs(t) {
    var e = t.type,
      l = t.memoizedProps,
      a = t.stateNode;
    try {
      t: switch (e) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          l.autoFocus && a.focus();
          break t;
        case "img":
          l.src ? (a.src = l.src) : l.srcSet && (a.srcset = l.srcSet);
      }
    } catch (n) {
      Zt(t, t.return, n);
    }
  }
  function Xs(t, e, l) {
    try {
      var a = t.stateNode;
      (Zv(a, t.type, l, e), (a[Ye] = e));
    } catch (n) {
      Zt(t, t.return, n);
    }
  }
  function Yd(t) {
    return (
      t.tag === 5 ||
      t.tag === 3 ||
      t.tag === 26 ||
      (t.tag === 27 && pa(t.type)) ||
      t.tag === 4
    );
  }
  function Qs(t) {
    t: for (;;) {
      for (; t.sibling === null;) {
        if (t.return === null || Yd(t.return)) return null;
        t = t.return;
      }
      for (
        t.sibling.return = t.return, t = t.sibling;
        t.tag !== 5 && t.tag !== 6 && t.tag !== 18;
      ) {
        if (
          (t.tag === 27 && pa(t.type)) ||
          t.flags & 2 ||
          t.child === null ||
          t.tag === 4
        )
          continue t;
        ((t.child.return = t), (t = t.child));
      }
      if (!(t.flags & 2)) return t.stateNode;
    }
  }
  function Zs(t, e, l, a) {
    var n = t.tag;
    if (n === 5 || n === 6)
      ((n = t.stateNode),
        e
          ? (l.nodeType === 9
              ? l.body
              : l.nodeName === "HTML"
                ? l.ownerDocument.body
                : l
            ).insertBefore(n, e)
          : ((e =
              l.nodeType === 9
                ? l.body
                : l.nodeName === "HTML"
                  ? l.ownerDocument.body
                  : l),
            e.appendChild(n),
            (l = l._reactRootContainer),
            l != null || e.onclick !== null || (e.onclick = pl)),
        Ui(t, a),
        (Gt = !0));
    else if (
      n !== 4 &&
      (n === 27 &&
        (Ui(t, a), (a = null), pa(t.type) && ((l = t.stateNode), (e = null))),
      (t = t.child),
      t !== null)
    )
      for (Zs(t, e, l, a), t = t.sibling; t !== null;)
        (Zs(t, e, l, a), (t = t.sibling));
  }
  function Hi(t, e, l, a) {
    var n = t.tag;
    if (n === 5 || n === 6)
      ((n = t.stateNode),
        e ? l.insertBefore(n, e) : l.appendChild(n),
        Ui(t, a),
        (Gt = !0));
    else if (
      n !== 4 &&
      (n === 27 && (Ui(t, a), (a = null), pa(t.type) && (l = t.stateNode)),
      (t = t.child),
      t !== null)
    )
      for (Hi(t, e, l, a), t = t.sibling; t !== null;)
        (Hi(t, e, l, a), (t = t.sibling));
  }
  function Bd(t) {
    var e = t.stateNode,
      l = t.memoizedProps;
    try {
      for (var a = t.type, n = e.attributes; n.length;)
        e.removeAttributeNode(n[0]);
      (je(e, a, l), (e[be] = t), (e[Ye] = l));
    } catch (u) {
      Zt(t, t.return, u);
    }
  }
  var wi = !1,
    Fe = null;
  function Gd(t) {
    (t.tag === 30 || (t.subtreeFlags & 33554432) !== 0) && (wi = !0);
  }
  var Tl = null;
  function Ld() {
    var t = Tl;
    return ((Tl = null), t);
  }
  var Ge = 0;
  function Tn(t, e, l, a, n) {
    return ((Ge = 0), Vd(t.child, e, l, a, n));
  }
  function Vd(t, e, l, a, n) {
    for (var u = !1; t !== null;) {
      if (t.tag === 5) {
        var i = t.stateNode;
        if (a !== null) {
          var s = Of(i);
          (a.push(s), s.view && (u = !0));
        } else u || (Of(i).view && (u = !0));
        ((wi = !0), Lh(i, Ge === 0 ? e : e + "_" + Ge, l), Ge++);
      } else
        (t.tag !== 22 || t.memoizedState === null) &&
          ((t.tag === 30 && n) || (Vd(t.child, e, l, a, n) && (u = !0)));
      t = t.sibling;
    }
    return u;
  }
  function El(t, e) {
    for (; t !== null;)
      (t.tag === 5
        ? Vh(t.stateNode, t.memoizedProps)
        : (t.tag !== 22 || t.memoizedState === null) &&
          ((t.tag === 30 && e) || El(t.child, e)),
        (t = t.sibling));
  }
  function qi(t) {
    if ((t.subtreeFlags & 18874368) !== 0)
      for (t = t.child; t !== null;) {
        if (
          (t.tag !== 22 || t.memoizedState === null) &&
          (qi(t),
          t.tag === 30 && (t.flags & 18874368) !== 0 && t.stateNode.paired)
        ) {
          var e = t.memoizedProps;
          if (e.name == null || e.name === "auto") throw Error(o(544));
          var l = e.name;
          ((e = wl(e.default, e.share)),
            e !== "none" && (Tn(t, l, e, null, !1) || El(t.child, !1)));
        }
        t = t.sibling;
      }
  }
  function Ks(t, e) {
    if (t.tag === 30) {
      var l = t.stateNode,
        a = t.memoizedProps,
        n = Hl(a, l),
        u = wl(a.default, l.paired ? a.share : a.enter);
      u !== "none"
        ? Tn(t, n, u, null, !1)
          ? (qi(t), l.paired || e || An(t, a.onEnter))
          : El(t.child, !1)
        : qi(t);
    } else if ((t.subtreeFlags & 33554432) !== 0)
      for (t = t.child; t !== null;) (Ks(t, e), (t = t.sibling));
    else qi(t);
  }
  function ks(t) {
    if (Fe !== null && Fe.size !== 0) {
      var e = Fe;
      if ((t.subtreeFlags & 18874368) !== 0)
        for (t = t.child; t !== null;) {
          if (t.tag !== 22 || t.memoizedState === null) {
            if (t.tag === 30 && (t.flags & 18874368) !== 0) {
              var l = t.memoizedProps,
                a = l.name;
              if (a != null && a !== "auto") {
                var n = e.get(a);
                if (n !== void 0) {
                  var u = wl(l.default, l.share);
                  if (
                    (u !== "none" &&
                      (Tn(t, a, u, null, !1)
                        ? ((u = t.stateNode),
                          (n.paired = u),
                          (u.paired = n),
                          An(t, l.onShare))
                        : El(t.child, !1)),
                    e.delete(a),
                    e.size === 0)
                  )
                    break;
                }
              }
            }
            ks(t);
          }
          t = t.sibling;
        }
    }
  }
  function Js(t) {
    if (t.tag === 30) {
      var e = t.memoizedProps,
        l = Hl(e, t.stateNode),
        a = Fe !== null ? Fe.get(l) : void 0,
        n = wl(e.default, a !== void 0 ? e.share : e.exit);
      (n !== "none" &&
        (Tn(t, l, n, null, !1)
          ? a !== void 0
            ? ((n = t.stateNode),
              (a.paired = n),
              (n.paired = a),
              Fe.delete(l),
              An(t, e.onShare))
            : An(t, e.onExit)
          : El(t.child, !1)),
        Fe !== null && ks(t));
    } else if ((t.subtreeFlags & 33554432) !== 0)
      for (t = t.child; t !== null;) (Js(t), (t = t.sibling));
    else Fe !== null && ks(t);
  }
  function Xd(t) {
    for (t = t.child; t !== null;) {
      if (t.tag === 30) {
        var e = t.memoizedProps,
          l = Hl(e, t.stateNode);
        ((e = wl(e.default, e.update)),
          (t.flags &= -5),
          e !== "none" && Tn(t, l, e, (t.memoizedState = []), !1));
      } else (t.subtreeFlags & 33554432) !== 0 && Xd(t);
      t = t.sibling;
    }
  }
  function $s(t) {
    if ((t.subtreeFlags & 18874368) !== 0)
      for (t = t.child; t !== null;) {
        if (t.tag !== 22 || t.memoizedState === null) {
          if (t.tag === 30 && (t.flags & 18874368) !== 0) {
            var e = t.stateNode;
            e.paired !== null && ((e.paired = null), El(t.child, !1));
          }
          $s(t);
        }
        t = t.sibling;
      }
  }
  function Yi(t) {
    if (t.tag === 30) ((t.stateNode.paired = null), El(t.child, !1), $s(t));
    else if ((t.subtreeFlags & 33554432) !== 0)
      for (t = t.child; t !== null;) (Yi(t), (t = t.sibling));
    else $s(t);
  }
  function Qd(t) {
    for (t = t.child; t !== null;)
      (t.tag === 30
        ? El(t.child, !1)
        : (t.subtreeFlags & 33554432) !== 0 && Qd(t),
        (t = t.sibling));
  }
  function Fs(t, e, l, a, n, u, i) {
    for (var s = !1; e !== null;) {
      if (e.tag === 5) {
        var f = e.stateNode;
        if (u !== null && Ge < u.length) {
          var b = u[Ge],
            _ = Of(f);
          (b.view || _.view) && (s = !0);
          var M;
          if ((M = (t.flags & 4) === 0))
            if (_.clip) M = !0;
            else {
              M = b.rect;
              var v = _.rect;
              M =
                M.y !== v.y ||
                M.x !== v.x ||
                M.height !== v.height ||
                M.width !== v.width;
            }
          (M && (t.flags |= 4),
            _.abs
              ? (_ = !b.abs)
              : ((b = b.rect),
                (_ = _.rect),
                (_ = b.height !== _.height || b.width !== _.width)),
            _ && (t.flags |= 32));
        } else t.flags |= 32;
        ((t.flags & 4) !== 0 && Lh(f, Ge === 0 ? l : l + "_" + Ge, n),
          (s && (t.flags & 4) !== 0) ||
            (Tl === null && (Tl = []),
            Tl.push(f, Ge === 0 ? a : a + "_" + Ge, e.memoizedProps)),
          Ge++);
      } else
        (e.tag !== 22 || e.memoizedState === null) &&
          (e.tag === 30 && i
            ? (t.flags |= e.flags & 32)
            : Fs(t, e.child, l, a, n, u, i) && (s = !0));
      e = e.sibling;
    }
    return s;
  }
  function Zd(t, e) {
    for (t = t.child; t !== null;) {
      if (t.tag === 30) {
        var l = t.memoizedProps,
          a = t.stateNode,
          n = Hl(l, a),
          u = wl(l.default, l.update),
          i;
        ((i = t.memoizedState), (t.memoizedState = null), (a = t));
        var s = t.child;
        ((Ge = 0),
          (n = Fs(a, s, n, n, u, i, !1)),
          (t.flags & 4) !== 0 && n && An(t, l.onUpdate));
      } else (t.subtreeFlags & 33554432) !== 0 && Zd(t);
      t = t.sibling;
    }
  }
  var ge = !1,
    Xt = !1,
    jl = !1,
    Is = !1,
    Kd = typeof WeakSet == "function" ? WeakSet : Set,
    pe = null,
    Nl = !1,
    bu = !1,
    Bi = !1,
    Ws = !1;
  function Sv(t, e, l) {
    if (((t = t.containerInfo), (jf = Gn), (t = $r(t)), Yc(t))) {
      if ("selectionStart" in t)
        var a = { start: t.selectionStart, end: t.selectionEnd };
      else
        t: {
          a = ((a = t.ownerDocument) && a.defaultView) || window;
          var n = a.getSelection && a.getSelection();
          if (n && n.rangeCount !== 0) {
            a = n.anchorNode;
            var u = n.anchorOffset,
              i = n.focusNode;
            n = n.focusOffset;
            try {
              (a.nodeType, i.nodeType);
            } catch {
              a = null;
              break t;
            }
            var s = 0,
              f = -1,
              b = -1,
              _ = 0,
              M = 0,
              v = t,
              E = null;
            e: for (;;) {
              for (
                var K;
                v !== a || (u !== 0 && v.nodeType !== 3) || (f = s + u),
                  v !== i || (n !== 0 && v.nodeType !== 3) || (b = s + n),
                  v.nodeType === 3 && (s += v.nodeValue.length),
                  (K = v.firstChild) !== null;
              )
                ((E = v), (v = K));
              for (;;) {
                if (v === t) break e;
                if (
                  (E === a && ++_ === u && (f = s),
                  E === i && ++M === n && (b = s),
                  (K = v.nextSibling) !== null)
                )
                  break;
                ((v = E), (E = v.parentNode));
              }
              v = K;
            }
            a = f === -1 || b === -1 ? null : { start: f, end: b };
          } else a = null;
        }
      a = a || { start: 0, end: 0 };
    } else a = null;
    for (
      Nf = { focusedElem: t, selectionRange: a },
        Gn = !1,
        l = (l & 335544064) === l,
        pe = e,
        e = l ? 9270 : 1024;
      pe !== null;
    ) {
      if (((t = pe), l && ((a = t.deletions), a !== null)))
        for (u = 0; u < a.length; u++) l && Js(a[u]);
      if (t.alternate === null && (t.flags & 2) !== 0) (l && Gd(t), Gi(l));
      else {
        if (t.tag === 22) {
          if (((a = t.alternate), t.memoizedState !== null)) {
            (a !== null && a.memoizedState === null && l && Js(a), Gi(l));
            continue;
          } else if (a !== null && a.memoizedState !== null) {
            (l && Gd(t), Gi(l));
            continue;
          }
        }
        ((a = t.child),
          (t.subtreeFlags & e) !== 0 && a !== null
            ? ((a.return = t), (pe = a))
            : (l && Xd(t), Gi(l)));
      }
    }
    Fe = null;
  }
  function Gi(t) {
    for (; pe !== null;) {
      var e = pe,
        l = t,
        a = e.alternate,
        n = e.flags;
      switch (e.tag) {
        case 0:
        case 11:
        case 15:
          break;
        case 1:
          if ((n & 1024) !== 0 && a !== null) {
            ((l = void 0), (n = a.memoizedProps), (a = a.memoizedState));
            var u = e.stateNode;
            try {
              var i = Qa(e.type, n);
              ((l = u.getSnapshotBeforeUpdate(i, a)),
                (u.__reactInternalSnapshotBeforeUpdate = l));
            } catch (s) {
              Zt(e, e.return, s);
            }
          }
          break;
        case 3:
          if ((n & 1024) !== 0) {
            if (((a = e.stateNode.containerInfo), (l = a.nodeType), l === 9))
              Mf(a);
            else if (l === 1)
              switch (a.nodeName) {
                case "HEAD":
                case "HTML":
                case "BODY":
                  Mf(a);
                  break;
                default:
                  a.textContent = "";
              }
          }
          break;
        case 5:
        case 26:
        case 27:
        case 6:
        case 4:
        case 17:
          break;
        case 30:
          l &&
            a !== null &&
            ((l = Hl(a.memoizedProps, a.stateNode)),
            (n = e.memoizedProps),
            (n = wl(n.default, n.update)),
            n !== "none" && Tn(a, l, n, (a.memoizedState = []), !0));
          break;
        default:
          if ((n & 1024) !== 0) throw Error(o(163));
      }
      if (((a = e.sibling), a !== null)) {
        ((a.return = e.return), (pe = a));
        break;
      }
      pe = e.return;
    }
  }
  function kd(t, e, l) {
    var a = l.flags;
    switch (l.tag) {
      case 0:
      case 11:
      case 15:
        (_l(t, l), a & 4 && gu(5, l));
        break;
      case 1:
        if ((_l(t, l), a & 4))
          if (((t = l.stateNode), e === null))
            try {
              t.componentDidMount();
            } catch (i) {
              Zt(l, l.return, i);
            }
          else {
            var n = Qa(l.type, e.memoizedProps);
            e = e.memoizedState;
            try {
              t.componentDidUpdate(n, e, t.__reactInternalSnapshotBeforeUpdate);
            } catch (i) {
              Zt(l, l.return, i);
            }
          }
        (a & 64 && Hd(l), a & 512 && xl(l, l.return));
        break;
      case 3:
        if ((_l(t, l), a & 64 && ((t = l.updateQueue), t !== null))) {
          if (((e = null), l.child !== null))
            switch (l.child.tag) {
              case 27:
              case 5:
                e = l.child.stateNode;
                break;
              case 1:
                e = l.child.stateNode;
            }
          try {
            jo(t, e);
          } catch (i) {
            Zt(l, l.return, i);
          }
        }
        break;
      case 27:
        e === null && a & 4 && Bd(l);
      case 26:
      case 5:
        (_l(t, l), e === null && a & 4 && Vs(l), a & 512 && xl(l, l.return));
        break;
      case 12:
        _l(t, l);
        break;
      case 31:
        (_l(t, l), a & 4 && Id(t, l));
        break;
      case 13:
        (_l(t, l),
          a & 4 && Wd(t, l),
          a & 64 &&
            ((t = l.memoizedState),
            t !== null &&
              ((t = t.dehydrated),
              t !== null && ((l = Mv.bind(null, l)), hy(t, l)))));
        break;
      case 22:
        if (((a = l.memoizedState !== null || ge), !a)) {
          var u = (e !== null && e.memoizedState !== null) || Xt;
          ((e = ge),
            (n = Xt),
            (ge = a),
            (Xt = u) && !n
              ? ((a = 2),
                (l.subtreeFlags & 8772) !== 0 && (a |= 1),
                ml(t, l, a))
              : _l(t, l),
            (ge = e),
            (Xt = n));
        }
        break;
      case 30:
        (_l(t, l), a & 512 && xl(l, l.return));
        break;
      case 7:
        a & 512 && xl(l, l.return);
      default:
        _l(t, l);
    }
  }
  function Ps(t, e) {
    for (t = t.child; t !== null;) (Jd(t, e), (t = t.sibling));
  }
  function Jd(t, e) {
    switch (t.tag) {
      case 5:
      case 26:
        try {
          var l = t.stateNode;
          if (e) {
            var a = l.style;
            typeof a.setProperty == "function"
              ? a.setProperty("display", "none", "important")
              : (a.display = "none");
          } else {
            var n = t.stateNode,
              u = t.memoizedProps.style,
              i = u != null && u.hasOwnProperty("display") ? u.display : null;
            n.style.display =
              i == null || typeof i == "boolean" ? "" : ("" + i).trim();
          }
        } catch (f) {
          Zt(t, t.return, f);
        }
        tf(t, e);
        break;
      case 6:
        try {
          ((t.stateNode.nodeValue = e ? "" : t.memoizedProps), (Gt = !0));
        } catch (f) {
          Zt(t, t.return, f);
        }
        break;
      case 18:
        try {
          var s = t.stateNode;
          e ? Gh(s, !0) : Gh(t.stateNode, !1);
        } catch (f) {
          Zt(t, t.return, f);
        }
        break;
      case 22:
      case 23:
        t.memoizedState === null && Ps(t, e);
        break;
      default:
        Ps(t, e);
    }
  }
  function tf(t, e) {
    if (t.subtreeFlags & 67108864)
      for (t = t.child; t !== null;) {
        t: {
          var l = t,
            a = e;
          switch (l.tag) {
            case 4:
              Jd(l, a);
              break t;
            case 22:
              l.memoizedState === null && tf(l, a);
              break t;
            default:
              tf(l, a);
          }
        }
        t = t.sibling;
      }
  }
  function $d(t) {
    var e = t.alternate;
    (e !== null && ((t.alternate = null), $d(e)),
      (t.child = null),
      (t.deletions = null),
      (t.sibling = null),
      t.tag === 5 && ((e = t.stateNode), e !== null && Zu(e)),
      (t.stateNode = null),
      (t.return = null),
      (t.dependencies = null),
      (t.memoizedProps = null),
      (t.memoizedState = null),
      (t.pendingProps = null),
      (t.stateNode = null),
      (t.updateQueue = null));
  }
  var ee = null,
    Le = !1;
  function dl(t, e, l) {
    for (l = l.child; l !== null;) (Fd(t, e, l), (l = l.sibling));
  }
  function Fd(t, e, l) {
    if (Me && typeof Me.onCommitFiberUnmount == "function")
      try {
        Me.onCommitFiberUnmount(Fl, l);
      } catch {}
    switch (l.tag) {
      case 26:
        (Xt || Ee(l, e),
          dl(t, e, l),
          l.memoizedState
            ? l.memoizedState.count--
            : l.stateNode &&
              !Xt &&
              ((l = l.stateNode), l.parentNode.removeChild(l)));
        break;
      case 27:
        (Xt || Ee(l, e), pu(l));
        var a = ee,
          n = Le;
        (pa(l.type) && ((ee = l.stateNode), (Le = !1)),
          dl(t, e, l),
          tm(l.stateNode, l.type, l.memoizedProps),
          (ee = a),
          (Le = n));
        break;
      case 5:
        (Xt || Ee(l, e), pu(l));
      case 6:
        if (
          (l.tag === 6 && pu(l),
          (a = ee),
          (n = Le),
          (ee = null),
          dl(t, e, l),
          (ee = a),
          (Le = n),
          ee !== null)
        )
          if (Le)
            try {
              ((ee.nodeType === 9
                ? ee.body
                : ee.nodeName === "HTML"
                  ? ee.ownerDocument.body
                  : ee
              ).removeChild(l.stateNode),
                (Gt = !0));
            } catch (u) {
              Zt(l, e, u);
            }
          else
            try {
              (ee.removeChild(l.stateNode), (Gt = !0));
            } catch (u) {
              Zt(l, e, u);
            }
        break;
      case 18:
        ee !== null &&
          (Le
            ? ((t = ee),
              Bh(
                t.nodeType === 9
                  ? t.body
                  : t.nodeName === "HTML"
                    ? t.ownerDocument.body
                    : t,
                l.stateNode,
              ),
              Ln(t))
            : Bh(ee, l.stateNode));
        break;
      case 4:
        ((a = ee),
          (n = Le),
          (ee = l.stateNode.containerInfo),
          (Le = !0),
          dl(t, e, l),
          (ee = a),
          (Le = n));
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        (oa(2, l, e), Xt || oa(4, l, e), dl(t, e, l));
        break;
      case 1:
        (Xt ||
          (Ee(l, e),
          (a = l.stateNode),
          typeof a.componentWillUnmount == "function" && wd(l, e, a)),
          dl(t, e, l));
        break;
      case 21:
        dl(t, e, l);
        break;
      case 22:
        ((Xt = (a = Xt) || l.memoizedState !== null), dl(t, e, l), (Xt = a));
        break;
      case 30:
        (Ee(l, e), dl(t, e, l));
        break;
      case 7:
        (Xt || Ee(l, e), dl(t, e, l));
        break;
      default:
        dl(t, e, l);
    }
  }
  function Id(t, e) {
    if (
      e.memoizedState === null &&
      ((t = e.alternate), t !== null && ((t = t.memoizedState), t !== null))
    ) {
      t = t.dehydrated;
      try {
        Ln(t);
      } catch (l) {
        Zt(e, e.return, l);
      }
    }
  }
  function Wd(t, e) {
    if (
      e.memoizedState === null &&
      ((t = e.alternate),
      t !== null &&
        ((t = t.memoizedState), t !== null && ((t = t.dehydrated), t !== null)))
    )
      try {
        Ln(t);
      } catch (l) {
        Zt(e, e.return, l);
      }
  }
  function xv(t) {
    switch (t.tag) {
      case 31:
      case 13:
      case 19:
        var e = t.stateNode;
        return (e === null && (e = t.stateNode = new Kd()), e);
      case 22:
        return (
          (t = t.stateNode),
          (e = t._retryCache),
          e === null && (e = t._retryCache = new Kd()),
          e
        );
      default:
        throw Error(o(435, t.tag));
    }
  }
  function Li(t, e) {
    var l = xv(t);
    e.forEach(function (a) {
      if (!l.has(a)) {
        l.add(a);
        var n = Rv.bind(null, t, a);
        a.then(n, n);
      }
    });
  }
  function He(t, e, l) {
    var a = e.deletions;
    if (a !== null)
      for (var n = 0; n < a.length; n++) {
        var u = a[n],
          i = t,
          s = e,
          f = s;
        t: for (; f !== null;) {
          switch (f.tag) {
            case 27:
              if (pa(f.type)) {
                ((ee = f.stateNode), (Le = !1));
                break t;
              }
              break;
            case 5:
              ((ee = f.stateNode), (Le = !1));
              break t;
            case 3:
            case 4:
              ((ee = f.stateNode.containerInfo), (Le = !0));
              break t;
          }
          f = f.return;
        }
        if (ee === null) throw Error(o(160));
        (Fd(i, s, u),
          (ee = null),
          (Le = !1),
          (i = u.alternate),
          i !== null && (i.return = null),
          (u.return = null));
      }
    if (e.subtreeFlags & 13886)
      for (e = e.child; e !== null;) (Pd(e, t, l), (e = e.sibling));
  }
  var hl = null;
  function Pd(t, e, l) {
    var a = t.alternate,
      n = t.flags;
    switch (t.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        if (
          n & 4 &&
          ((a = t.updateQueue), (a = a !== null ? a.events : null), a !== null)
        )
          for (var u = 0; u < a.length; u++) {
            var i = a[u];
            i.ref.impl = i.nextImpl;
          }
        (He(e, t, l),
          we(t),
          n & 4 && (oa(3, t, t.return), gu(3, t), oa(5, t, t.return)));
        break;
      case 1:
        (He(e, t, l),
          we(t),
          n & 512 && (Xt || a === null || Ee(a, a.return)),
          n & 64 &&
            ge &&
            ((t = t.updateQueue),
            t !== null &&
              ((e = t.callbacks),
              e !== null &&
                ((l = t.shared.hiddenCallbacks),
                (t.shared.hiddenCallbacks = l === null ? e : l.concat(e))))));
        break;
      case 26:
        if (
          ((u = hl),
          He(e, t, l),
          we(t),
          n & 512 && (Xt || a === null || Ee(a, a.return)),
          n & 4)
        )
          if (
            ((n = a !== null ? a.memoizedState : null),
            (l = t.memoizedState),
            a === null)
          )
            if (l === null)
              if (t.stateNode === null)
                if (ge)
                  t.stateNode = wh(t.type, t.memoizedProps, e.containerInfo, t);
                else {
                  t: {
                    ((e = t.type),
                      (l = t.memoizedProps),
                      (n = u.ownerDocument || u));
                    e: switch (e) {
                      case "title":
                        ((a = n.getElementsByTagName("title")[0]),
                          (!a ||
                            a[Zn] ||
                            a[be] ||
                            a.namespaceURI === "http://www.w3.org/2000/svg" ||
                            a.hasAttribute("itemprop")) &&
                            ((a = n.createElement(e)),
                            n.head.insertBefore(
                              a,
                              n.querySelector("head > title"),
                            )),
                          je(a, e, l),
                          (a[be] = t),
                          ve(a),
                          (e = a));
                        break t;
                      case "link":
                        if (
                          (u = im("link", "href", n).get(e + (l.href || "")))
                        ) {
                          for (i = 0; i < u.length; i++)
                            if (
                              ((a = u[i]),
                              a.getAttribute("href") ===
                                (l.href == null || l.href === ""
                                  ? null
                                  : l.href) &&
                                a.getAttribute("rel") ===
                                  (l.rel == null ? null : l.rel) &&
                                a.getAttribute("title") ===
                                  (l.title == null ? null : l.title) &&
                                a.getAttribute("crossorigin") ===
                                  (l.crossOrigin == null
                                    ? null
                                    : l.crossOrigin))
                            ) {
                              u.splice(i, 1);
                              break e;
                            }
                        }
                        ((a = n.createElement(e)),
                          je(a, e, l),
                          n.head.appendChild(a));
                        break;
                      case "meta":
                        if (
                          (u = im("meta", "content", n).get(
                            e + (l.content || ""),
                          ))
                        ) {
                          for (i = 0; i < u.length; i++)
                            if (
                              ((a = u[i]),
                              a.getAttribute("content") ===
                                (l.content == null ? null : "" + l.content) &&
                                a.getAttribute("name") ===
                                  (l.name == null ? null : l.name) &&
                                a.getAttribute("property") ===
                                  (l.property == null ? null : l.property) &&
                                a.getAttribute("http-equiv") ===
                                  (l.httpEquiv == null ? null : l.httpEquiv) &&
                                a.getAttribute("charset") ===
                                  (l.charSet == null ? null : l.charSet))
                            ) {
                              u.splice(i, 1);
                              break e;
                            }
                        }
                        ((a = n.createElement(e)),
                          je(a, e, l),
                          n.head.appendChild(a));
                        break;
                      default:
                        throw Error(o(468, e));
                    }
                    ((a[be] = t), ve(a), (e = a));
                  }
                  t.stateNode = e;
                }
              else ge || Bf(u, t.type, t.stateNode);
            else t.stateNode = um(u, l, t.memoizedProps);
          else
            n !== l
              ? (n === null
                  ? ((e = a.stateNode),
                    e === null || Xt || e.parentNode.removeChild(e))
                  : n.count--,
                l === null
                  ? ge || Bf(u, t.type, t.stateNode)
                  : um(u, l, t.memoizedProps))
              : l === null &&
                t.stateNode !== null &&
                Xs(t, t.memoizedProps, a.memoizedProps);
        break;
      case 27:
        (He(e, t, l),
          we(t),
          n & 512 && (Xt || a === null || Ee(a, a.return)),
          a !== null && n & 4 && Xs(t, t.memoizedProps, a.memoizedProps));
        break;
      case 5:
        if (
          ((u = jl),
          (jl = !1),
          He(e, t, l),
          (jl = u),
          we(t),
          n & 512 && (Xt || a === null || Ee(a, a.return)),
          t.flags & 32)
        ) {
          e = t.stateNode;
          try {
            (an(e, ""), (Gt = !0));
          } catch (_) {
            Zt(t, t.return, _);
          }
        }
        (n & 4 &&
          t.stateNode != null &&
          ((e = t.memoizedProps), Xs(t, e, a !== null ? a.memoizedProps : e)),
          n & 1024 && (Is = !0));
        break;
      case 6:
        if ((He(e, t, l), we(t), n & 4)) {
          if (t.stateNode === null) throw Error(o(162));
          ((e = t.memoizedProps), (l = t.stateNode));
          try {
            ((l.nodeValue = e), (Gt = !0));
          } catch (_) {
            Zt(t, t.return, _);
          }
        }
        break;
      case 3:
        if (
          ((Gt = !1),
          (lc = null),
          (u = hl),
          (hl = Cu(e.containerInfo)),
          He(e, t, l),
          (hl = u),
          we(t),
          n & 4 && a !== null && a.memoizedState.isDehydrated)
        )
          try {
            Ln(e.containerInfo);
          } catch (_) {
            Zt(t, t.return, _);
          }
        (Is && ((Is = !1), th(t)), (Gt = !1));
        break;
      case 4:
        ((n = jl),
          (jl = ge),
          (a = br()),
          (u = hl),
          (hl = Cu(t.stateNode.containerInfo)),
          He(e, t, l),
          we(t),
          (hl = u),
          Gt && bu && (Bi = !0),
          (Gt = a),
          (jl = n));
        break;
      case 12:
        (He(e, t, l), we(t));
        break;
      case 31:
        (He(e, t, l),
          we(t),
          n & 4 &&
            ((e = t.updateQueue),
            e !== null && ((t.updateQueue = null), Li(t, e))));
        break;
      case 13:
        (He(e, t, l),
          we(t),
          t.child.flags & 8192 &&
            (t.memoizedState !== null) !=
              (a !== null && a.memoizedState !== null) &&
            (Qi = ue()),
          n & 4 &&
            ((e = t.updateQueue),
            e !== null && ((t.updateQueue = null), Li(t, e))));
        break;
      case 22:
        ((u = t.memoizedState !== null),
          (i = a !== null && a.memoizedState !== null));
        var s = ge,
          f = Xt,
          b = jl;
        ((ge = s || u),
          (jl = b || u),
          (Xt = f || i),
          He(e, t, l),
          (Xt = f),
          (jl = b),
          (ge = s),
          we(t),
          n & 8192 &&
            ((e = t.stateNode),
            (e._visibility = u ? e._visibility & -2 : e._visibility | 1),
            !u ||
              a === null ||
              i ||
              ge ||
              Xt ||
              ((e = i || Xt),
              (l = ge),
              (a = Xt),
              (ge = u || ge),
              (Xt = e),
              da(t, 2),
              (ge = l),
              (Xt = a)),
            (!u && jl) || Ps(t, u)),
          n & 4 &&
            ((e = t.updateQueue),
            e !== null &&
              ((l = e.retryQueue),
              l !== null && ((e.retryQueue = null), Li(t, l)))));
        break;
      case 19:
        (He(e, t, l),
          we(t),
          n & 4 &&
            ((e = t.updateQueue),
            e !== null && ((t.updateQueue = null), Li(t, e))));
        break;
      case 30:
        (n & 512 && (Xt || a === null || Ee(a, a.return)),
          (n = br()),
          (u = bu),
          (i = (l & 335544064) === l),
          (s = t.memoizedProps),
          (bu = i && wl(s.default, s.update) !== "none"),
          He(e, t, l),
          we(t),
          i && a !== null && Gt && (t.flags |= 4),
          (bu = u),
          (Gt = n));
        break;
      case 21:
        break;
      case 7:
        (n & 512 && (Xt || a === null || Ee(a, a.return)),
          a && a.stateNode !== null && (a.stateNode._fragmentFiber = t));
      default:
        (He(e, t, l), we(t));
    }
  }
  function we(t) {
    var e = t.flags;
    if (e & 2) {
      try {
        for (var l, a = t.return; a !== null;) {
          if (Yd(a)) {
            l = a;
            break;
          }
          a = a.return;
        }
        a = null;
        for (var n = t.return; n !== null;) {
          if (Ls(n)) {
            var u = n.stateNode;
            a === null ? (a = [u]) : a.push(u);
          }
          if (Gs(n)) break;
          n = n.return;
        }
        var i = a;
        if (l == null) throw Error(o(160));
        switch (l.tag) {
          case 27:
            var s = l.stateNode,
              f = Qs(t);
            Hi(t, f, s, i);
            break;
          case 5:
            var b = l.stateNode;
            l.flags & 32 && (an(b, ""), (l.flags &= -33));
            var _ = Qs(t);
            Hi(t, _, b, i);
            break;
          case 3:
          case 4:
            var M = l.stateNode.containerInfo,
              v = Qs(t);
            Zs(t, v, M, i);
            break;
          default:
            throw Error(o(161));
        }
      } catch (E) {
        Zt(t, t.return, E);
      }
      t.flags &= -3;
    }
    e & 4096 && (t.flags &= -4097);
  }
  function th(t) {
    if (t.subtreeFlags & 1024)
      for (t = t.child; t !== null;) {
        var e = t;
        (th(e),
          e.tag === 5 &&
            e.flags & 1024 &&
            ((e = e.stateNode), (Gn = !0), e.reset(), (Gn = !1)),
          (t = t.sibling));
      }
  }
  function En(t, e) {
    if (e.subtreeFlags & 9270)
      for (e = e.child; e !== null;) (eh(e, t), (e = e.sibling));
    else Zd(e);
  }
  function eh(t, e) {
    var l = t.alternate;
    if (l === null) Ks(t, !1);
    else
      switch (t.tag) {
        case 3:
          if (((Ws = Nl = !1), Ld(), En(e, t), !Nl && !Bi)) {
            if (((t = Tl), t !== null))
              for (var a = 0; a < t.length; a += 3) {
                l = t[a];
                var n = t[a + 1];
                (Vh(l, t[a + 2]),
                  (l = l.ownerDocument.documentElement),
                  l !== null &&
                    l.animate(
                      { opacity: [0, 0], pointerEvents: ["none", "none"] },
                      {
                        duration: 0,
                        fill: "forwards",
                        pseudoElement: "::view-transition-group(" + n + ")",
                      },
                    ));
              }
            ((t = e.containerInfo),
              (t =
                t.nodeType === 9
                  ? t.documentElement
                  : t.ownerDocument.documentElement),
              t !== null &&
                t.style.viewTransitionName === "" &&
                ((t.style.viewTransitionName = "none"),
                t.animate(
                  { opacity: [0, 0], pointerEvents: ["none", "none"] },
                  {
                    duration: 0,
                    fill: "forwards",
                    pseudoElement: "::view-transition-group(root)",
                  },
                ),
                t.animate(
                  { width: [0, 0], height: [0, 0] },
                  {
                    duration: 0,
                    fill: "forwards",
                    pseudoElement: "::view-transition",
                  },
                )),
              (Ws = !0));
          }
          Tl = null;
          break;
        case 5:
          En(e, t);
          break;
        case 4:
          ((a = Nl), (Nl = !1), En(e, t), Nl && (Bi = !0), (Nl = a));
          break;
        case 22:
          t.memoizedState === null &&
            (l.memoizedState !== null ? Ks(t, !1) : En(e, t));
          break;
        case 30:
          ((a = Nl), (n = Ld()), (Nl = !1), En(e, t), Nl && (t.flags |= 4));
          var u = t.memoizedProps,
            i = t.stateNode;
          ((e = Hl(u, i)), (i = Hl(l.memoizedProps, i)));
          var s = wl(u.default, u.update);
          (s === "none"
            ? (e = !1)
            : ((u = l.memoizedState),
              (l.memoizedState = null),
              (l = t.child),
              (Ge = 0),
              (e = Fs(t, l, e, i, s, u, !0)),
              Ge !== (u === null ? 0 : u.length) && (t.flags |= 32)),
            (t.flags & 4) !== 0 && e
              ? (An(t, t.memoizedProps.onUpdate), (Tl = n))
              : n !== null && (n.push.apply(n, Tl), (Tl = n)),
            (Nl = (t.flags & 32) !== 0 ? !0 : a));
          break;
        default:
          En(e, t);
      }
  }
  function _l(t, e) {
    if (e.subtreeFlags & 8772)
      for (e = e.child; e !== null;) (kd(t, e.alternate, e), (e = e.sibling));
  }
  function da(t, e) {
    for (t = t.child; t !== null;) {
      var l = t,
        a = e;
      switch (l.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          (oa(4, l, l.return), da(l, a));
          break;
        case 1:
          Ee(l, l.return);
          var n = l.stateNode;
          (typeof n.componentWillUnmount == "function" && wd(l, l.return, n),
            da(l, a));
          break;
        case 27:
          (a & 2) !== 0 && tm(l.stateNode, l.type, l.memoizedProps);
        case 5:
          (Ee(l, l.return), (l.tag !== 5 && l.tag !== 27) || pu(l), da(l, a));
          break;
        case 6:
          pu(l);
          break;
        case 26:
          (Ee(l, l.return),
            (n = l.stateNode),
            l.memoizedState !== null ||
              n === null ||
              Xt ||
              n.parentNode.removeChild(n),
            da(l, a));
          break;
        case 22:
          l.memoizedState === null && da(l, a);
          break;
        case 30:
          (Ee(l, l.return), da(l, a));
          break;
        case 7:
          Ee(l, l.return);
        default:
          da(l, a);
      }
      t = t.sibling;
    }
  }
  function ml(t, e, l) {
    for (
      l = (e.subtreeFlags & 8772) !== 0 ? l : l & -2, e = e.child;
      e !== null;
    ) {
      var a = e.alternate,
        n = t,
        u = e,
        i = u.flags,
        s = (l & 1) !== 0;
      switch (u.tag) {
        case 0:
        case 11:
        case 15:
          (ml(n, u, l), gu(4, u));
          break;
        case 1:
          if (
            (ml(n, u, l),
            (a = u),
            (n = a.stateNode),
            typeof n.componentDidMount == "function")
          )
            try {
              n.componentDidMount();
            } catch (_) {
              Zt(a, a.return, _);
            }
          if (((a = u), (n = a.updateQueue), n !== null)) {
            var f = a.stateNode;
            try {
              var b = n.shared.hiddenCallbacks;
              if (b !== null)
                for (n.shared.hiddenCallbacks = null, n = 0; n < b.length; n++)
                  Eo(b[n], f);
            } catch (_) {
              Zt(a, a.return, _);
            }
          }
          (s && i & 64 && Hd(u), xl(u, u.return));
          break;
        case 27:
          (l & 2) !== 0 && Bd(u);
        case 5:
          ((u.tag !== 5 && u.tag !== 27) || qd(u),
            ml(n, u, l),
            s && a === null && i & 4 && Vs(u),
            xl(u, u.return));
          break;
        case 6:
          qd(u);
          break;
        case 26:
          ((f = u.stateNode),
            u.memoizedState !== null ||
              f === null ||
              ge ||
              Bf(Cu(f.ownerDocument), u.type, f),
            ml(n, u, l),
            s && a === null && i & 4 && Vs(u),
            xl(u, u.return));
          break;
        case 12:
          ml(n, u, l);
          break;
        case 31:
          (ml(n, u, l), s && i & 4 && Id(n, u));
          break;
        case 13:
          (ml(n, u, l), s && i & 4 && Wd(n, u));
          break;
        case 22:
          (u.memoizedState === null && ml(n, u, l), xl(u, u.return));
          break;
        case 30:
          (ml(n, u, l), xl(u, u.return));
          break;
        case 7:
          xl(u, u.return);
        default:
          ml(n, u, l);
      }
      e = e.sibling;
    }
  }
  function ef(t, e) {
    var l = null;
    (t !== null &&
      t.memoizedState !== null &&
      t.memoizedState.cachePool !== null &&
      (l = t.memoizedState.cachePool.pool),
      (t = null),
      e.memoizedState !== null &&
        e.memoizedState.cachePool !== null &&
        (t = e.memoizedState.cachePool.pool),
      t !== l && (t != null && t.refCount++, l != null && nu(l)));
  }
  function lf(t, e) {
    ((t = null),
      e.alternate !== null && (t = e.alternate.memoizedState.cache),
      (e = e.memoizedState.cache),
      e !== t && (e.refCount++, t != null && nu(t)));
  }
  function sl(t, e, l, a) {
    var n = (l & 335544064) === l;
    if (e.subtreeFlags & (n ? 10262 : 10256))
      for (e = e.child; e !== null;) (lh(t, e, l, a), (e = e.sibling));
    else n && Qd(e);
  }
  function lh(t, e, l, a) {
    var n = (l & 335544064) === l;
    n &&
      e.alternate === null &&
      e.return !== null &&
      e.return.alternate !== null &&
      Yi(e);
    var u = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 15:
        (sl(t, e, l, a), u & 2048 && gu(9, e));
        break;
      case 1:
        sl(t, e, l, a);
        break;
      case 3:
        (sl(t, e, l, a),
          n &&
            Ws &&
            ((t = t.containerInfo),
            (t =
              t.nodeType === 9
                ? t.body
                : t.nodeName === "HTML"
                  ? t.ownerDocument.body
                  : t),
            t.style.viewTransitionName === "root" &&
              (t.style.viewTransitionName = ""),
            (t = t.ownerDocument.documentElement),
            t !== null &&
              t.style.viewTransitionName === "none" &&
              (t.style.viewTransitionName = "")),
          u & 2048 &&
            ((u = null),
            e.alternate !== null && (u = e.alternate.memoizedState.cache),
            (e = e.memoizedState.cache),
            e !== u && (e.refCount++, u != null && nu(u))));
        break;
      case 12:
        if (u & 2048) {
          (sl(t, e, l, a), (u = e.stateNode));
          try {
            var i = e.memoizedProps,
              s = i.id,
              f = i.onPostCommit;
            typeof f == "function" &&
              f(
                s,
                e.alternate === null ? "mount" : "update",
                u.passiveEffectDuration,
                -0,
              );
          } catch (b) {
            Zt(e, e.return, b);
          }
        } else sl(t, e, l, a);
        break;
      case 31:
        sl(t, e, l, a);
        break;
      case 13:
        sl(t, e, l, a);
        break;
      case 23:
        break;
      case 22:
        ((i = e.stateNode),
          (s = e.alternate),
          e.memoizedState !== null
            ? (n && s !== null && s.memoizedState === null && Yi(s),
              i._visibility & 2 ? sl(t, e, l, a) : Su(t, e))
            : (n && s !== null && s.memoizedState !== null && Yi(e),
              i._visibility & 2
                ? sl(t, e, l, a)
                : ((i._visibility |= 2),
                  jn(t, e, l, a, (e.subtreeFlags & 10256) !== 0 || !1))),
          u & 2048 && ef(s, e));
        break;
      case 24:
        (sl(t, e, l, a), u & 2048 && lf(e.alternate, e));
        break;
      case 30:
        (n &&
          ((u = e.alternate), u !== null && (El(u.child, !0), El(e.child, !0))),
          sl(t, e, l, a));
        break;
      default:
        sl(t, e, l, a);
    }
  }
  function jn(t, e, l, a, n) {
    for (
      n = n && ((e.subtreeFlags & 10256) !== 0 || !1), e = e.child;
      e !== null;
    ) {
      var u = t,
        i = e,
        s = l,
        f = a,
        b = i.flags;
      switch (i.tag) {
        case 0:
        case 11:
        case 15:
          (jn(u, i, s, f, n), gu(8, i));
          break;
        case 23:
          break;
        case 22:
          var _ = i.stateNode;
          (i.memoizedState !== null
            ? _._visibility & 2
              ? jn(u, i, s, f, n)
              : Su(u, i)
            : ((_._visibility |= 2), jn(u, i, s, f, n)),
            n && b & 2048 && ef(i.alternate, i));
          break;
        case 24:
          (jn(u, i, s, f, n), n && b & 2048 && lf(i.alternate, i));
          break;
        default:
          jn(u, i, s, f, n);
      }
      e = e.sibling;
    }
  }
  function Su(t, e) {
    if (e.subtreeFlags & 10256)
      for (e = e.child; e !== null;) {
        var l = t,
          a = e,
          n = a.flags;
        switch (a.tag) {
          case 22:
            (Su(l, a), n & 2048 && ef(a.alternate, a));
            break;
          case 24:
            (Su(l, a), n & 2048 && lf(a.alternate, a));
            break;
          default:
            Su(l, a);
        }
        e = e.sibling;
      }
  }
  var Za = 8192;
  function Ka(t, e, l) {
    if (t.subtreeFlags & Za)
      for (t = t.child; t !== null;) (ah(t, e, l), (t = t.sibling));
  }
  function ah(t, e, l) {
    switch (t.tag) {
      case 26:
        (Ka(t, e, l),
          t.flags & Za &&
            (t.memoizedState !== null
              ? zy(l, hl, t.memoizedState, t.memoizedProps)
              : ((t = t.stateNode), (e & 335544128) === e && rm(l, t))));
        break;
      case 5:
        (Ka(t, e, l),
          t.flags & Za &&
            ((t = t.stateNode), (e & 335544128) === e && rm(l, t)));
        break;
      case 3:
      case 4:
        var a = hl;
        ((hl = Cu(t.stateNode.containerInfo)), Ka(t, e, l), (hl = a));
        break;
      case 22:
        t.memoizedState === null &&
          ((a = t.alternate),
          a !== null && a.memoizedState !== null
            ? ((a = Za), (Za = 16777216), Ka(t, e, l), (Za = a))
            : Ka(t, e, l));
        break;
      case 30:
        if (
          (t.flags & Za) !== 0 &&
          ((a = t.memoizedProps.name), a != null && a !== "auto")
        ) {
          var n = t.stateNode;
          ((n.paired = null), Fe === null && (Fe = new Map()), Fe.set(a, n));
        }
        Ka(t, e, l);
        break;
      default:
        Ka(t, e, l);
    }
  }
  function nh(t) {
    var e = t.alternate;
    if (e !== null && ((t = e.child), t !== null)) {
      e.child = null;
      do ((e = t.sibling), (t.sibling = null), (t = e));
      while (t !== null);
    }
  }
  function xu(t) {
    var e = t.deletions;
    if ((t.flags & 16) !== 0) {
      if (e !== null)
        for (var l = 0; l < e.length; l++) {
          var a = e[l];
          ((pe = a), ih(a, t));
        }
      nh(t);
    }
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null;) (uh(t), (t = t.sibling));
  }
  function uh(t) {
    switch (t.tag) {
      case 0:
      case 11:
      case 15:
        (xu(t), t.flags & 2048 && oa(9, t, t.return));
        break;
      case 3:
        xu(t);
        break;
      case 12:
        xu(t);
        break;
      case 22:
        var e = t.stateNode;
        t.memoizedState !== null &&
        e._visibility & 2 &&
        (t.return === null || t.return.tag !== 13)
          ? ((e._visibility &= -3), Vi(t))
          : xu(t);
        break;
      default:
        xu(t);
    }
  }
  function Vi(t) {
    var e = t.deletions;
    if ((t.flags & 16) !== 0) {
      if (e !== null)
        for (var l = 0; l < e.length; l++) {
          var a = e[l];
          ((pe = a), ih(a, t));
        }
      nh(t);
    }
    for (t = t.child; t !== null;) {
      switch (((e = t), e.tag)) {
        case 0:
        case 11:
        case 15:
          (oa(8, e, e.return), Vi(e));
          break;
        case 22:
          ((l = e.stateNode),
            l._visibility & 2 && ((l._visibility &= -3), Vi(e)));
          break;
        default:
          Vi(e);
      }
      t = t.sibling;
    }
  }
  function ih(t, e) {
    for (; pe !== null;) {
      var l = pe;
      switch (l.tag) {
        case 0:
        case 11:
        case 15:
          oa(8, l, e);
          break;
        case 23:
        case 22:
          if (l.memoizedState !== null && l.memoizedState.cachePool !== null) {
            var a = l.memoizedState.cachePool.pool;
            a != null && a.refCount++;
          }
          break;
        case 24:
          nu(l.memoizedState.cache);
      }
      if (((a = l.child), a !== null)) ((a.return = l), (pe = a));
      else
        t: for (l = t; pe !== null;) {
          a = pe;
          var n = a.sibling,
            u = a.return;
          if (($d(a), a === l)) {
            pe = null;
            break t;
          }
          if (n !== null) {
            ((n.return = u), (pe = n));
            break t;
          }
          pe = u;
        }
    }
  }
  var Tv = {
      getCacheForType: function (t) {
        var e = Se(ce),
          l = e.data.get(t);
        return (l === void 0 && ((l = t()), e.data.set(t, l)), l);
      },
      cacheSignal: function () {
        return Se(ce).controller.signal;
      },
    },
    Ev = typeof WeakMap == "function" ? WeakMap : Map,
    Lt = 0,
    Ft = null,
    Ot = null,
    Mt = 0,
    Qt = 0,
    Ie = null,
    ha = !1,
    Nn = !1,
    af = !1,
    Zl = 0,
    ne = 0,
    ma = 0,
    ka = 0,
    Xi = 0,
    We = 0,
    _n = 0,
    Tu = null,
    Ve = null,
    nf = !1,
    Qi = 0,
    ch = 0,
    Zi = 1 / 0,
    Ki = null,
    va = null,
    le = 0,
    vl = null,
    Ja = null,
    zl = 0,
    uf = 0,
    cf = null,
    sh = null,
    zn = null,
    Cn = null,
    On = null,
    Eu = 0,
    ki = null;
  function Pe() {
    return (Lt & 2) !== 0 && Mt !== 0 ? Mt & -Mt : U.T !== null ? gf() : rr();
  }
  function fh() {
    if (We === 0)
      if ((Mt & 536870912) === 0 || _t) {
        var t = Lu;
        ((Lu <<= 1), (Lu & 3932160) === 0 && (Lu = 262144), (We = t));
      } else We = 536870912;
    return ((t = xe.current), t !== null && (t.flags |= 32), We);
  }
  function An(t, e) {
    if (e != null) {
      var l = t.stateNode,
        a = l.ref;
      (a === null && (a = l.ref = Xh(Hl(t.memoizedProps, l))),
        Cn === null && (Cn = []),
        Cn.push(e.bind(null, a)));
    }
  }
  function Xe(t, e, l) {
    (((t === Ft && (Qt === 2 || Qt === 9)) || t.cancelPendingCommit !== null) &&
      (Dn(t, 0), ya(t, Mt, We, !1)),
      Qn(t, l),
      ((Lt & 2) === 0 || t !== Ft) &&
        (t === Ft &&
          ((Lt & 2) === 0 && (ka |= l), ne === 4 && ya(t, Mt, We, !1)),
        Cl(t)));
  }
  function rh(t, e, l) {
    if ((Lt & 6) !== 0) throw Error(o(327));
    var a = (!l && (e & 127) === 0 && (e & t.expiredLanes) === 0) || Xn(t, e),
      n = a ? _v(t, e) : ff(t, e, !0),
      u = a;
    do {
      if (n === 0) {
        Nn && !a && ya(t, e, 0, !1);
        break;
      } else {
        if (((l = t.current.alternate), u && !jv(l))) {
          ((n = ff(t, e, !1)), (u = !1));
          continue;
        }
        if (n === 2) {
          if (((u = e), t.errorRecoveryDisabledLanes & u)) var i = 0;
          else
            ((i = t.pendingLanes & -536870913),
              (i = i !== 0 ? i : i & 536870912 ? 536870912 : 0));
          if (i !== 0) {
            e = i;
            t: {
              var s = t;
              n = Tu;
              var f = s.current.memoizedState.isDehydrated;
              if (
                (f && (Dn(s, i).flags |= 256),
                (i = ff(s, i, !1)),
                i !== 2 && i !== 6)
              ) {
                if (af && !f) {
                  ((s.errorRecoveryDisabledLanes |= u), (ka |= u), (n = 4));
                  break t;
                }
                ((u = Ve),
                  (Ve = n),
                  u !== null &&
                    (Ve === null ? (Ve = u) : Ve.push.apply(Ve, u)));
              }
              n = i;
            }
            if (((u = !1), n !== 2)) continue;
          }
        }
        if (n === 1) {
          (Dn(t, 0), ya(t, e, 0, !0));
          break;
        }
        t: {
          switch (((a = t), (u = n), u)) {
            case 0:
            case 1:
              throw Error(o(345));
            case 4:
              if ((e & 4194048) !== e && (e & 62914560) !== e) break;
            case 6:
              ya(a, e, We, !ha);
              break t;
            case 2:
              Ve = null;
              break;
            case 3:
            case 5:
              break;
            default:
              throw Error(o(329));
          }
          if ((e & 62914560) === e && ((n = Qi + 300 - ue()), 10 < n)) {
            if ((ya(a, e, We, !ha), Xu(a, 0, !0) !== 0)) break t;
            ((zl = e),
              (a.timeoutHandle = Cf(
                oh.bind(
                  null,
                  a,
                  l,
                  Ve,
                  Ki,
                  nf,
                  e,
                  We,
                  ka,
                  _n,
                  ha,
                  u,
                  "Throttled",
                  -0,
                  0,
                ),
                n,
              )));
            break t;
          }
          oh(a, l, Ve, Ki, nf, e, We, ka, _n, ha, u, null, -0, 0);
        }
      }
      break;
    } while (!0);
    Cl(t);
  }
  function oh(t, e, l, a, n, u, i, s, f, b, _, M, v, E) {
    t.timeoutHandle = -1;
    var K = e.subtreeFlags,
      lt = (u & 335544064) === u;
    if (
      ((M = null),
      (lt || K & 8192 || (K & 16785408) === 16785408) &&
        ((M = {
          stylesheets: null,
          count: 0,
          imgCount: 0,
          imgBytes: 0,
          suspenseyImages: [],
          waitingForImages: !0,
          waitingForViewTransition: !1,
          unsuspend: pl,
        }),
        (Fe = null),
        ah(e, u, M),
        lt &&
          ((K = M),
          (lt = t.containerInfo),
          (lt = (lt.nodeType === 9 ? lt : lt.ownerDocument)
            .__reactViewTransition),
          lt != null &&
            (K.count++,
            (K.waitingForViewTransition = !0),
            (K = Du.bind(K)),
            lt.finished.then(K, K))),
        (K =
          (u & 62914560) === u
            ? Qi - ue()
            : (u & 4194048) === u
              ? ch - ue()
              : 0),
        (K = Cy(M, K)),
        K !== null))
    ) {
      ((zl = u),
        (t.cancelPendingCommit = K(
          bh.bind(null, t, e, u, l, a, n, i, s, f, b, _, M, null, v, E),
        )),
        ya(t, u, i, !b));
      return;
    }
    bh(t, e, u, l, a, n, i, s, f, b, _, M);
  }
  function jv(t) {
    for (var e = t; ;) {
      var l = e.tag;
      if (
        (l === 0 || l === 11 || l === 15) &&
        e.flags & 16384 &&
        ((l = e.updateQueue), l !== null && ((l = l.stores), l !== null))
      )
        for (var a = 0; a < l.length; a++) {
          var n = l[a],
            u = n.getSnapshot;
          n = n.value;
          try {
            if (!Je(u(), n)) return !1;
          } catch {
            return !1;
          }
        }
      if (((l = e.child), e.subtreeFlags & 16384 && l !== null))
        ((l.return = e), (e = l));
      else {
        if (e === t) break;
        for (; e.sibling === null;) {
          if (e.return === null || e.return === t) return !0;
          e = e.return;
        }
        ((e.sibling.return = e.return), (e = e.sibling));
      }
    }
    return !0;
  }
  function ya(t, e, l, a) {
    ((e = ur(t, e)),
      (e &= ~Xi),
      (e &= ~ka),
      (t.suspendedLanes |= e),
      (t.pingedLanes &= ~e),
      a && (t.warmLanes |= e),
      (a = t.expirationTimes));
    for (var n = e; 0 < n;) {
      var u = 31 - Ke(n),
        i = 1 << u;
      ((a[u] = -1), (n &= ~i));
    }
    l !== 0 && cr(t, l, e);
  }
  function Ji() {
    return (Lt & 6) === 0 ? (ju(0), !1) : !0;
  }
  function sf() {
    if (Ot !== null) {
      if (Qt === 0) var t = Ot.return;
      else ((t = Ot), (Bl = Ha = null), vs(t), (gn = null), (cu = 0), (t = Ot));
      for (; t !== null;) (Ud(t.alternate, t), (t = t.return));
      Ot = null;
    }
  }
  function Dn(t, e) {
    var l = t.timeoutHandle;
    return (
      l !== -1 && ((t.timeoutHandle = -1), Jv(l)),
      (l = t.cancelPendingCommit),
      l !== null && ((t.cancelPendingCommit = null), l()),
      (zl = 0),
      sf(),
      (Ft = t),
      (Ot = l = ql(t.current, null)),
      (Mt = e),
      (Qt = 0),
      (Ie = null),
      (ha = !1),
      (Nn = Xn(t, e)),
      (af = !1),
      (_n = We = Xi = ka = ma = ne = 0),
      (Ve = Tu = null),
      (nf = !1),
      (Zl = ur(t, e)),
      li(),
      l
    );
  }
  function dh(t, e) {
    ((xt = null),
      (U.H = zi),
      e === yn || e === hi
        ? ((e = bo()), (Qt = 3))
        : e === ls
          ? ((e = bo()), (Qt = 4))
          : (Qt =
              e === As
                ? 8
                : e !== null &&
                    typeof e == "object" &&
                    typeof e.then == "function"
                  ? 6
                  : 1),
      (Ie = e),
      Ot === null && ((ne = 1), Ci(t, nl(e, t.current))));
  }
  function hh() {
    var t = xe.current;
    return t === null
      ? !0
      : (Mt & 4194048) === Mt
        ? Ae === null
        : (Mt & 62914560) === Mt || (Mt & 536870912) !== 0
          ? t === Ae
          : !1;
  }
  function mh() {
    var t = U.H;
    return ((U.H = zi), t === null ? zi : t);
  }
  function vh() {
    var t = U.A;
    return ((U.A = Tv), t);
  }
  function $i() {
    ((ne = 4),
      ha || ((Mt & 4194048) !== Mt && xe.current !== null) || (Nn = !0),
      ((ma & 134217727) === 0 && (ka & 134217727) === 0) ||
        Ft === null ||
        ya(Ft, Mt, We, !1));
  }
  function ff(t, e, l) {
    var a = Lt;
    Lt |= 2;
    var n = mh(),
      u = vh();
    ((Ft !== t || Mt !== e) && ((Ki = null), Dn(t, e)), (e = !1));
    var i = ne;
    t: do
      try {
        if (Qt !== 0 && Ot !== null) {
          var s = Ot,
            f = Ie;
          switch (Qt) {
            case 8:
              (sf(), (i = 6));
              break t;
            case 3:
            case 2:
            case 9:
            case 6:
              xe.current === null && (e = !0);
              var b = Qt;
              if (((Qt = 0), (Ie = null), Mn(t, s, f, b), l && Nn)) {
                i = 0;
                break t;
              }
              break;
            default:
              ((b = Qt), (Qt = 0), (Ie = null), Mn(t, s, f, b));
          }
        }
        (Nv(), (i = ne));
        break;
      } catch (_) {
        dh(t, _);
      }
    while (!0);
    return (
      e && t.shellSuspendCounter++,
      (Bl = Ha = null),
      (Lt = a),
      (U.H = n),
      (U.A = u),
      Ot === null && ((Ft = null), (Mt = 0), li()),
      i
    );
  }
  function Nv() {
    for (; Ot !== null;) yh(Ot);
  }
  function _v(t, e) {
    var l = Lt;
    Lt |= 2;
    var a = mh(),
      n = vh();
    Ft !== t || Mt !== e
      ? ((Ki = null), (Zi = ue() + 500), Dn(t, e))
      : (Nn = Xn(t, e));
    t: do
      try {
        if (Qt !== 0 && Ot !== null) {
          e = Ot;
          var u = Ie;
          e: switch (Qt) {
            case 1:
              ((Qt = 0), (Ie = null), Mn(t, e, u, 1));
              break;
            case 2:
            case 9:
              if (go(u)) {
                ((Qt = 0), (Ie = null), gh(e));
                break;
              }
              ((e = function () {
                ((Qt !== 2 && Qt !== 9) || Ft !== t || (Qt = 7), Cl(t));
              }),
                u.then(e, e));
              break t;
            case 3:
              Qt = 7;
              break t;
            case 4:
              Qt = 5;
              break t;
            case 7:
              go(u)
                ? ((Qt = 0), (Ie = null), gh(e))
                : ((Qt = 0), (Ie = null), Mn(t, e, u, 7));
              break;
            case 5:
              var i = null;
              switch (Ot.tag) {
                case 26:
                  i = Ot.memoizedState;
                case 5:
                case 27:
                  var s = Ot;
                  if (i ? sm(i) : s.stateNode.complete) {
                    ((Qt = 0), (Ie = null));
                    var f = s.sibling;
                    if (f !== null) Ot = f;
                    else {
                      var b = s.return;
                      b !== null ? ((Ot = b), Fi(b)) : (Ot = null);
                    }
                    break e;
                  }
              }
              ((Qt = 0), (Ie = null), Mn(t, e, u, 5));
              break;
            case 6:
              ((Qt = 0), (Ie = null), Mn(t, e, u, 6));
              break;
            case 8:
              (sf(), (ne = 6));
              break t;
            default:
              throw Error(o(462));
          }
        }
        zv();
        break;
      } catch (_) {
        dh(t, _);
      }
    while (!0);
    return (
      (Bl = Ha = null),
      (U.H = a),
      (U.A = n),
      (Lt = l),
      Ot !== null ? 0 : ((Ft = null), (Mt = 0), li(), ne)
    );
  }
  function zv() {
    for (; Ot !== null && !Ce();) yh(Ot);
  }
  function yh(t) {
    var e = Md(t.alternate, t, Zl);
    ((t.memoizedProps = t.pendingProps), e === null ? Fi(t) : (Ot = e));
  }
  function gh(t) {
    var e = t,
      l = e.alternate;
    switch (e.tag) {
      case 15:
      case 0:
        e = Nd(l, e, e.pendingProps, e.type, void 0, Mt);
        break;
      case 11:
        e = Nd(l, e, e.pendingProps, e.type.render, e.ref, Mt);
        break;
      case 5:
        vs(e);
        var a = e;
        a === ye &&
          (_t
            ? (si(a), a.tag === 5 && a.stateNode != null && (Wt = a.stateNode))
            : (si(a), (_t = !0)));
      default:
        (Ud(l, e), (e = Ot = uo(e, Zl)), (e = Md(l, e, Zl)));
    }
    ((t.memoizedProps = t.pendingProps), e === null ? Fi(t) : (Ot = e));
  }
  function Mn(t, e, l, a) {
    ((Bl = Ha = null), vs(e), (gn = null), (cu = 0));
    var n = e.return;
    try {
      if (mv(t, n, e, l, Mt)) {
        ((ne = 1), Ci(t, nl(l, t.current)), (Ot = null));
        return;
      }
    } catch (u) {
      if (n !== null) throw ((Ot = n), u);
      ((ne = 1), Ci(t, nl(l, t.current)), (Ot = null));
      return;
    }
    e.flags & 32768
      ? (_t || a === 1
          ? (t = !0)
          : Nn || (Mt & 536870912) !== 0
            ? (t = !1)
            : ((ha = t = !0),
              (a === 2 || a === 9 || a === 3 || a === 6) &&
                ((a = xe.current),
                a !== null && a.tag === 13 && (a.flags |= 16384))),
        ph(e, t))
      : Fi(e);
  }
  function Fi(t) {
    var e = t;
    do {
      if ((e.flags & 32768) !== 0) {
        ph(e, ha);
        return;
      }
      t = e.return;
      var l = pv(e.alternate, e, Zl);
      if (l !== null) {
        Ot = l;
        return;
      }
      if (((e = e.sibling), e !== null)) {
        Ot = e;
        return;
      }
      Ot = e = t;
    } while (e !== null);
    ne === 0 && (ne = 5);
  }
  function ph(t, e) {
    do {
      var l = bv(t.alternate, t);
      if (l !== null) {
        ((l.flags &= 32767), (Ot = l));
        return;
      }
      if (
        ((l = t.return),
        l !== null &&
          ((l.flags |= 32768), (l.subtreeFlags = 0), (l.deletions = null)),
        !e && ((t = t.sibling), t !== null))
      ) {
        Ot = t;
        return;
      }
      Ot = t = l;
    } while (t !== null);
    ((ne = 6), (Ot = null));
  }
  function bh(t, e, l, a, n, u, i, s, f, b, _, M) {
    t.cancelPendingCommit = null;
    do Ii();
    while (le !== 0);
    if ((Lt & 6) !== 0) throw Error(o(327));
    if (e !== null) {
      if (e === t.current) throw Error(o(177));
      (t === Ft && ((Ot = Ft = null), (Mt = 0)),
        (Ja = e),
        (vl = t),
        (zl = l),
        (cf = n),
        (sh = a),
        Cv(t, e, l, i, s, f, M));
    }
  }
  function Cv(t, e, l, a, n, u, i) {
    var s = e.lanes | e.childLanes;
    if (
      ((uf = s),
      (s |= Xc),
      t0(t, l, s, a, n, u),
      (Cn = null),
      (l & 335544064) === l
        ? ((On = lv(t)), (a = 10262))
        : ((On = null), (a = 10256)),
      (e.subtreeFlags & a) !== 0 || (e.flags & a) !== 0
        ? ((t.callbackNode = null),
          (t.callbackPriority = 0),
          Uv(Fa, function () {
            return (hf(), null);
          }))
        : ((t.callbackNode = null), (t.callbackPriority = 0)),
      (wi = !1),
      (a = (e.flags & 13878) !== 0),
      (e.subtreeFlags & 13878) !== 0 || a)
    ) {
      ((a = U.T), (U.T = null), (n = P.p), (P.p = 2), (u = Lt), (Lt |= 4));
      try {
        Sv(t, e, l);
      } finally {
        ((Lt = u), (P.p = n), (U.T = a));
      }
    }
    ((le = 1),
      wi
        ? (zn = ty(i, t.containerInfo, On, rf, of, Av, df, hf, Ov))
        : (rf(), of(), df()));
  }
  function Ov(t) {
    if (le !== 0) {
      var e = vl.onRecoverableError;
      e(t, { componentStack: null });
    }
  }
  function Av() {
    le === 3 && ((le = 0), eh(Ja, vl), (le = 4));
  }
  function rf() {
    if (le === 1) {
      le = 0;
      var t = vl,
        e = Ja,
        l = zl,
        a = (e.flags & 13878) !== 0;
      if ((e.subtreeFlags & 13878) !== 0 || a) {
        ((a = U.T), (U.T = null));
        var n = P.p;
        P.p = 2;
        var u = Lt;
        Lt |= 4;
        try {
          ((bu = Bi = !1), Pd(e, t, l), (l = Nf));
          var i = $r(t.containerInfo),
            s = l.focusedElem,
            f = l.selectionRange;
          if (
            i !== s &&
            s &&
            s.ownerDocument &&
            Jr(s.ownerDocument.documentElement, s)
          ) {
            if (f !== null && Yc(s)) {
              var b = f.start,
                _ = f.end;
              if ((_ === void 0 && (_ = b), "selectionStart" in s))
                ((s.selectionStart = b),
                  (s.selectionEnd = Math.min(_, s.value.length)));
              else {
                var M = s.ownerDocument || document,
                  v = (M && M.defaultView) || window;
                if (v.getSelection) {
                  var E = v.getSelection(),
                    K = s.textContent.length,
                    lt = Math.min(f.start, K),
                    Tt = f.end === void 0 ? lt : Math.min(f.end, K);
                  !E.extend && lt > Tt && ((i = Tt), (Tt = lt), (lt = i));
                  var p = kr(s, lt),
                    h = kr(s, Tt);
                  if (
                    p &&
                    h &&
                    (E.rangeCount !== 1 ||
                      E.anchorNode !== p.node ||
                      E.anchorOffset !== p.offset ||
                      E.focusNode !== h.node ||
                      E.focusOffset !== h.offset)
                  ) {
                    var T = M.createRange();
                    (T.setStart(p.node, p.offset),
                      E.removeAllRanges(),
                      lt > Tt
                        ? (E.addRange(T), E.extend(h.node, h.offset))
                        : (T.setEnd(h.node, h.offset), E.addRange(T)));
                  }
                }
              }
            }
            for (M = [], E = s; (E = E.parentNode);)
              E.nodeType === 1 &&
                M.push({ element: E, left: E.scrollLeft, top: E.scrollTop });
            for (
              typeof s.focus == "function" && s.focus(), s = 0;
              s < M.length;
              s++
            ) {
              var D = M[s];
              ((D.element.scrollLeft = D.left), (D.element.scrollTop = D.top));
            }
          }
          ((Gn = !!jf), (Nf = jf = null));
        } finally {
          ((Lt = u), (P.p = n), (U.T = a));
        }
      }
      ((t.current = e), (le = 2));
    }
  }
  function of() {
    if (le === 2) {
      le = 0;
      var t = vl,
        e = Ja,
        l = (e.flags & 8772) !== 0;
      if ((e.subtreeFlags & 8772) !== 0 || l) {
        ((l = U.T), (U.T = null));
        var a = P.p;
        P.p = 2;
        var n = Lt;
        Lt |= 4;
        try {
          kd(t, e.alternate, e);
        } finally {
          ((Lt = n), (P.p = a), (U.T = l));
        }
      }
      le = 3;
    }
  }
  function df() {
    if (le === 4 || le === 3) {
      le = 0;
      var t = zn;
      ((zn = null), De());
      var e = vl,
        l = Ja,
        a = zl,
        n = sh,
        u = (a & 335544064) === a ? 10262 : 10256;
      if (
        ((l.subtreeFlags & u) !== 0 || (l.flags & u) !== 0
          ? (le = 5)
          : ((le = 0), (Ja = vl = null), Sh(e, e.pendingLanes)),
        (u = e.pendingLanes),
        u === 0 && (va = null),
        Sc(a),
        (l = l.stateNode),
        Me && typeof Me.onCommitFiberRoot == "function")
      )
        try {
          Me.onCommitFiberRoot(Fl, l, void 0, (l.current.flags & 128) === 128);
        } catch {}
      if (n !== null) {
        ((l = U.T), (u = P.p), (P.p = 2), (U.T = null));
        try {
          for (var i = e.onRecoverableError, s = 0; s < n.length; s++) {
            var f = n[s];
            i(f.value, { componentStack: f.stack });
          }
        } finally {
          ((U.T = l), (P.p = u));
        }
      }
      if (
        ((n = Cn),
        (i = On),
        (On = null),
        n !== null && ((Cn = null), i === null && (i = []), t !== null))
      )
        for (f = 0; f < n.length; f++)
          ((l = (0, n[f])(i)), l !== void 0 && t.finished.finally(l));
      ((zl & 3) !== 0 && Ii(),
        Cl(e),
        (u = e.pendingLanes),
        (a & 261930) !== 0 && (u & 42) !== 0
          ? e === ki
            ? Eu++
            : ((Eu = 0), (ki = e))
          : ((Eu = 0), (ki = null)),
        ju(0));
    }
  }
  function Sh(t, e) {
    (t.pooledCacheLanes &= e) === 0 &&
      ((e = t.pooledCache), e != null && ((t.pooledCache = null), nu(e)));
  }
  function Ii() {
    return (
      zn !== null && (zn.skipTransition(), (zn = null)),
      rf(),
      of(),
      df(),
      hf()
    );
  }
  function hf() {
    if (le !== 5) return !1;
    var t = vl,
      e = uf;
    uf = 0;
    var l = Sc(zl),
      a = U.T,
      n = P.p;
    try {
      ((P.p = 32 > l ? 32 : l), (U.T = null), (l = cf), (cf = null));
      var u = vl,
        i = zl;
      if (((le = 0), (Ja = vl = null), (zl = 0), (Lt & 6) !== 0))
        throw Error(o(331));
      var s = Lt;
      if (
        ((Lt |= 4),
        uh(u.current),
        lh(u, u.current, i, l),
        (Lt = s),
        ju(0, !1),
        Me && typeof Me.onPostCommitFiberRoot == "function")
      )
        try {
          Me.onPostCommitFiberRoot(Fl, u);
        } catch {}
      return !0;
    } finally {
      ((P.p = n), (U.T = a), Sh(t, e));
    }
  }
  function xh(t, e, l) {
    ((e = nl(l, e)),
      (e = Os(t.stateNode, e, 2)),
      (t = ca(t, e, 2)),
      t !== null && (Qn(t, 2), Cl(t)));
  }
  function Zt(t, e, l) {
    if (t.tag === 3) xh(t, t, l);
    else
      for (; e !== null;) {
        if (e.tag === 3) {
          xh(e, t, l);
          break;
        } else if (e.tag === 1) {
          var a = e.stateNode;
          if (
            typeof e.type.getDerivedStateFromError == "function" ||
            (typeof a.componentDidCatch == "function" &&
              (va === null || !va.has(a)))
          ) {
            ((t = nl(l, t)),
              (l = gd(2)),
              (a = ca(e, l, 2)),
              a !== null && (pd(l, a, e, t), Qn(a, 2), Cl(a)));
            break;
          }
        }
        e = e.return;
      }
  }
  function mf(t, e, l) {
    var a = t.pingCache;
    if (a === null) {
      a = t.pingCache = new Ev();
      var n = new Set();
      a.set(e, n);
    } else ((n = a.get(e)), n === void 0 && ((n = new Set()), a.set(e, n)));
    n.has(l) ||
      ((af = !0), n.add(l), (t = Dv.bind(null, t, e, l)), e.then(t, t));
  }
  function Dv(t, e, l) {
    var a = t.pingCache;
    (a !== null && a.delete(e),
      (t.pingedLanes |= t.suspendedLanes & l),
      (t.warmLanes &= ~l),
      Ft === t &&
        (Mt & l) === l &&
        ((ne === 4 ||
          (ne === 3 && (Mt & 62914560) === Mt && 300 > ue() - Qi)) &&
        (Lt & 2) === 0
          ? Dn(t, 0)
          : (Xi |= l),
        _n === Mt && (_n = 0)),
      Cl(t));
  }
  function Th(t, e) {
    (e === 0 && (e = ir()), (t = Ma(t, e)), t !== null && (Qn(t, e), Cl(t)));
  }
  function Mv(t) {
    var e = t.memoizedState,
      l = 0;
    (e !== null && (l = e.retryLane), Th(t, l));
  }
  function Rv(t, e) {
    var l = 0;
    switch (t.tag) {
      case 31:
      case 13:
        var a = t.stateNode,
          n = t.memoizedState;
        n !== null && (l = n.retryLane);
        break;
      case 19:
        a = t.stateNode;
        break;
      case 22:
        a = t.stateNode._retryCache;
        break;
      default:
        throw Error(o(314));
    }
    (a !== null && a.delete(e), Th(t, l));
  }
  function Uv(t, e) {
    return tt(t, e);
  }
  var Rn = null,
    Un = null,
    vf = !1,
    Wi = !1,
    yf = !1,
    ga = 0;
  function Cl(t) {
    (t !== Un &&
      t.next === null &&
      (Un === null ? (Rn = Un = t) : (Un = Un.next = t)),
      (Wi = !0),
      vf || ((vf = !0), wv()));
  }
  function ju(t, e) {
    if (!yf && Wi) {
      yf = !0;
      do
        for (var l = !1, a = Rn; a !== null;) {
          if (t !== 0) {
            var n = a.pendingLanes;
            if (n === 0) var u = 0;
            else {
              var i = a.suspendedLanes,
                s = a.pingedLanes;
              ((u = (1 << (31 - Ke(42 | t) + 1)) - 1),
                (u &= n & ~(i & ~s)),
                (u = u & 201326741 ? (u & 201326741) | 1 : u ? u | 2 : 0));
            }
            u !== 0 && ((l = !0), _h(a, u));
          } else
            ((u = Mt),
              (u = Xu(
                a,
                a === Ft ? u : 0,
                a.cancelPendingCommit !== null || a.timeoutHandle !== -1,
              )),
              (u & 3) === 0 || Xn(a, u) || ((l = !0), _h(a, u)));
          a = a.next;
        }
      while (l);
      yf = !1;
    }
  }
  function Hv() {
    Eh();
  }
  function Eh() {
    Wi = vf = !1;
    var t = 0;
    ga !== 0 && kv() && (t = ga);
    for (var e = ue(), l = null, a = Rn; a !== null;) {
      var n = a.next,
        u = jh(a, e);
      (u === 0
        ? ((a.next = null),
          l === null ? (Rn = n) : (l.next = n),
          n === null && (Un = l))
        : ((l = a), (t !== 0 || (u & 3) !== 0) && (Wi = !0)),
        (a = n));
    }
    ((le !== 0 && le !== 5) || ju(t), ga !== 0 && (ga = 0));
  }
  function jh(t, e) {
    for (
      var l = t.suspendedLanes,
        a = t.pingedLanes,
        n = t.expirationTimes,
        u = t.pendingLanes & -62914561;
      0 < u;
    ) {
      var i = 31 - Ke(u),
        s = 1 << i,
        f = n[i];
      (f === -1
        ? ((s & l) === 0 || (s & a) !== 0) && (n[i] = Pm(s, e))
        : f <= e && (t.expiredLanes |= s),
        (u &= ~s));
    }
    if (
      ((e = Ft),
      (l = Mt),
      (l = Xu(
        t,
        t === e ? l : 0,
        t.cancelPendingCommit !== null || t.timeoutHandle !== -1,
      )),
      (a = t.callbackNode),
      l === 0 ||
        (t === e && (Qt === 2 || Qt === 9)) ||
        t.cancelPendingCommit !== null)
    )
      return (
        a !== null && a !== null && bt(a),
        (t.callbackNode = null),
        (t.callbackPriority = 0)
      );
    if ((l & 3) === 0 || Xn(t, l)) {
      if (((e = l & -l), e === t.callbackPriority)) return e;
      switch ((a !== null && bt(a), Sc(l))) {
        case 2:
        case 8:
          l = $l;
          break;
        case 32:
          l = Fa;
          break;
        case 268435456:
          l = Ia;
          break;
        default:
          l = Fa;
      }
      return (
        (a = Nh.bind(null, t)),
        (l = tt(l, a)),
        (t.callbackPriority = e),
        (t.callbackNode = l),
        e
      );
    }
    return (
      a !== null && a !== null && bt(a),
      (t.callbackPriority = 2),
      (t.callbackNode = null),
      2
    );
  }
  function Nh(t, e) {
    if (le !== 0 && le !== 5)
      return ((t.callbackNode = null), (t.callbackPriority = 0), null);
    var l = t.callbackNode;
    if (Ii() && t.callbackNode !== l) return null;
    var a = Mt;
    return (
      (a = Xu(
        t,
        t === Ft ? a : 0,
        t.cancelPendingCommit !== null || t.timeoutHandle !== -1,
      )),
      a === 0
        ? null
        : (rh(t, a, e),
          jh(t, ue()),
          t.callbackNode != null && t.callbackNode === l
            ? Nh.bind(null, t)
            : null)
    );
  }
  function _h(t, e) {
    if (Ii()) return null;
    rh(t, e, !0);
  }
  function wv() {
    $v(function () {
      (Lt & 6) !== 0 ? tt(Jl, Hv) : Eh();
    });
  }
  function gf() {
    if (ga === 0) {
      var t = Ya;
      (t === 0 && ((t = Gu), (Gu <<= 1), (Gu & 261888) === 0 && (Gu = 256)),
        (ga = t));
    }
    return ga;
  }
  function zh(t) {
    return t == null || typeof t == "symbol" || typeof t == "boolean"
      ? null
      : typeof t == "function"
        ? t
        : Ju(t);
  }
  function qv(t, e, l, a, n) {
    if (e === "submit" && l && l.stateNode === n) {
      var u = zh((n[Ye] || null).action),
        i = a.submitter;
      i &&
        ((e = (e = i[Ye] || null)
          ? zh(e.formAction)
          : i.getAttribute("formAction")),
        e !== null && ((u = e), (i = null)));
      var s = new Wu("action", "action", null, a, n);
      t.push({
        event: s,
        listeners: [
          {
            instance: null,
            listener: function () {
              if (a.defaultPrevented) {
                if (ga !== 0) {
                  var f = new FormData(n, i);
                  js(
                    l,
                    { pending: !0, data: f, method: n.method, action: u },
                    null,
                    f,
                  );
                }
              } else
                typeof u == "function" &&
                  (s.preventDefault(),
                  (f = new FormData(n, i)),
                  js(
                    l,
                    { pending: !0, data: f, method: n.method, action: u },
                    u,
                    f,
                  ));
            },
            currentTarget: n,
          },
        ],
      });
    }
  }
  for (var pf = 0; pf < Vc.length; pf++) {
    var bf = Vc[pf],
      Yv = bf.toLowerCase(),
      Bv = bf[0].toUpperCase() + bf.slice(1);
    ol(Yv, "on" + Bv);
  }
  (ol(Wr, "onAnimationEnd"),
    ol(Pr, "onAnimationIteration"),
    ol(to, "onAnimationStart"),
    ol("dblclick", "onDoubleClick"),
    ol("focusin", "onFocus"),
    ol("focusout", "onBlur"),
    ol(J0, "onTransitionRun"),
    ol($0, "onTransitionStart"),
    ol(F0, "onTransitionCancel"),
    ol(eo, "onTransitionEnd"),
    en("onMouseEnter", ["mouseout", "mouseover"]),
    en("onMouseLeave", ["mouseout", "mouseover"]),
    en("onPointerEnter", ["pointerout", "pointerover"]),
    en("onPointerLeave", ["pointerout", "pointerover"]),
    Oa(
      "onChange",
      "change click focusin focusout input keydown keyup selectionchange".split(
        " ",
      ),
    ),
    Oa(
      "onSelect",
      "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
        " ",
      ),
    ),
    Oa("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]),
    Oa(
      "onCompositionEnd",
      "compositionend focusout keydown keypress keyup mousedown".split(" "),
    ),
    Oa(
      "onCompositionStart",
      "compositionstart focusout keydown keypress keyup mousedown".split(" "),
    ),
    Oa(
      "onCompositionUpdate",
      "compositionupdate focusout keydown keypress keyup mousedown".split(" "),
    ));
  var Nu =
      "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
        " ",
      ),
    Gv = new Set(
      "beforetoggle cancel close invalid load scroll scrollend toggle"
        .split(" ")
        .concat(Nu),
    );
  function Ch(t, e) {
    e = (e & 4) !== 0;
    for (var l = 0; l < t.length; l++) {
      var a = t[l],
        n = a.event;
      a = a.listeners;
      t: {
        var u = void 0;
        if (e)
          for (var i = a.length - 1; 0 <= i; i--) {
            var s = a[i],
              f = s.instance,
              b = s.currentTarget;
            if (((s = s.listener), f !== u && n.isPropagationStopped()))
              break t;
            ((u = s), (n.currentTarget = b));
            try {
              u(n);
            } catch (_) {
              ei(_);
            }
            ((n.currentTarget = null), (u = f));
          }
        else
          for (i = 0; i < a.length; i++) {
            if (
              ((s = a[i]),
              (f = s.instance),
              (b = s.currentTarget),
              (s = s.listener),
              f !== u && n.isPropagationStopped())
            )
              break t;
            ((u = s), (n.currentTarget = b));
            try {
              u(n);
            } catch (_) {
              ei(_);
            }
            ((n.currentTarget = null), (u = f));
          }
      }
    }
  }
  function At(t, e) {
    var l = e[dr];
    l === void 0 && (l = e[dr] = new Set());
    var a = t + "__bubble";
    l.has(a) || (Oh(e, t, 2, !1), l.add(a));
  }
  function Sf(t, e, l) {
    var a = 0;
    (e && (a |= 4), Oh(l, t, a, e));
  }
  var Pi = "_reactListening" + Math.random().toString(36).slice(2);
  function xf(t) {
    if (!t[Pi]) {
      ((t[Pi] = !0),
        vr.forEach(function (l) {
          l !== "selectionchange" && (Gv.has(l) || Sf(l, !1, t), Sf(l, !0, t));
        }));
      var e = t.nodeType === 9 ? t : t.ownerDocument;
      e === null || e[Pi] || ((e[Pi] = !0), Sf("selectionchange", !1, e));
    }
  }
  function Oh(t, e, l, a) {
    switch (pm(e)) {
      case 2:
        var n = My;
        break;
      case 8:
        n = Ry;
        break;
      default:
        n = Lf;
    }
    ((l = n.bind(null, e, l, t)),
      (n = void 0),
      !Cc ||
        (e !== "touchstart" && e !== "touchmove" && e !== "wheel") ||
        (n = !0),
      a
        ? n !== void 0
          ? t.addEventListener(e, l, { capture: !0, passive: n })
          : t.addEventListener(e, l, !0)
        : n !== void 0
          ? t.addEventListener(e, l, { passive: n })
          : t.addEventListener(e, l, !1));
  }
  function Tf(t, e, l, a, n) {
    var u = a;
    if ((e & 1) === 0 && (e & 2) === 0 && a !== null)
      t: for (;;) {
        if (a === null) return;
        var i = a.tag;
        if (i === 3 || i === 4) {
          var s = a.stateNode.containerInfo;
          if (s === n) break;
          if (i === 4)
            for (i = a.return; i !== null;) {
              var f = i.tag;
              if ((f === 3 || f === 4) && i.stateNode.containerInfo === n)
                return;
              i = i.return;
            }
          for (; s !== null;) {
            if (((i = Ca(s)), i === null)) return;
            if (((f = i.tag), f === 5 || f === 6 || f === 26 || f === 27)) {
              a = u = i;
              continue t;
            }
            s = s.parentNode;
          }
        }
        a = a.return;
      }
    Cr(function () {
      var b = u,
        _ = _c(l),
        M = [];
      t: {
        var v = lo.get(t);
        if (v !== void 0) {
          var E = Wu,
            K = t;
          switch (t) {
            case "keypress":
              if (Fu(l) === 0) break t;
            case "keydown":
            case "keyup":
              E = j0;
              break;
            case "focusin":
              ((K = "focus"), (E = Mc));
              break;
            case "focusout":
              ((K = "blur"), (E = Mc));
              break;
            case "beforeblur":
            case "afterblur":
              E = Mc;
              break;
            case "click":
              if (l.button === 2) break t;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              E = Dr;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              E = d0;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              E = O0;
              break;
            case Wr:
            case Pr:
            case to:
              E = v0;
              break;
            case eo:
              E = D0;
              break;
            case "scroll":
            case "scrollend":
              E = r0;
              break;
            case "wheel":
              E = R0;
              break;
            case "copy":
            case "cut":
            case "paste":
              E = g0;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              E = Rr;
              break;
            case "submit":
              E = z0;
              break;
            case "toggle":
            case "beforetoggle":
              E = H0;
          }
          var lt = (e & 4) !== 0,
            Tt = !lt && (t === "scroll" || t === "scrollend"),
            p = lt ? (v !== null ? v + "Capture" : null) : v;
          lt = [];
          for (var h = b, T; h !== null;) {
            var D = h;
            if (
              ((T = D.stateNode),
              (D = D.tag),
              (D !== 5 && D !== 26 && D !== 27) ||
                T === null ||
                p === null ||
                ((D = kn(h, p)), D != null && lt.push(_u(h, D, T))),
              Tt)
            )
              break;
            h = h.return;
          }
          0 < lt.length &&
            ((v = new E(v, K, null, l, _)),
            M.push({ event: v, listeners: lt }));
        }
      }
      if ((e & 7) === 0) {
        t: {
          if (
            ((E = t === "mouseover" || t === "pointerover"),
            (v = t === "mouseout" || t === "pointerout"),
            E &&
              l !== Nc &&
              (K = l.relatedTarget || l.fromElement) &&
              (Ca(K) || K[Wa]))
          )
            break t;
          (v || E) &&
            ((K =
              _.window === _
                ? _
                : (E = _.ownerDocument)
                  ? E.defaultView || E.parentWindow
                  : window),
            v
              ? ((E = l.relatedTarget || l.toElement),
                (v = b),
                (E = E ? Ca(E) : null),
                E !== null &&
                  ((Tt = Z(E)),
                  (lt = E.tag),
                  E !== Tt || (lt !== 5 && lt !== 27 && lt !== 6)) &&
                  (E = null))
              : ((v = null), (E = b)),
            v !== E &&
              ((lt = Dr),
              (D = "onMouseLeave"),
              (p = "onMouseEnter"),
              (h = "mouse"),
              (t === "pointerout" || t === "pointerover") &&
                ((lt = Rr),
                (D = "onPointerLeave"),
                (p = "onPointerEnter"),
                (h = "pointer")),
              (Tt = v == null ? K : Kn(v)),
              (T = E == null ? K : Kn(E)),
              (K = new lt(D, h + "leave", v, l, _)),
              (K.target = Tt),
              (K.relatedTarget = T),
              (D = null),
              Ca(_) === b &&
                ((lt = new lt(p, h + "enter", E, l, _)),
                (lt.target = T),
                (lt.relatedTarget = Tt),
                (D = lt)),
              (Tt = D),
              (lt = v && E ? Et(v, E, Lv) : null),
              v !== null && Ah(M, K, v, lt, !1),
              E !== null && Tt !== null && Ah(M, Tt, E, lt, !0)));
        }
        t: {
          if (
            ((v = b ? Kn(b) : window),
            (E = v.nodeName && v.nodeName.toLowerCase()),
            E === "select" || (E === "input" && v.type === "file"))
          )
            var et = Lr;
          else if (Br(v))
            if (Vr) et = Z0;
            else {
              et = X0;
              var Rt = V0;
            }
          else
            ((E = v.nodeName),
              !E ||
              E.toLowerCase() !== "input" ||
              (v.type !== "checkbox" && v.type !== "radio")
                ? b && jc(b.elementType) && (et = Lr)
                : (et = Q0));
          if (et && (et = et(t, b))) {
            Gr(M, et, l, _);
            break t;
          }
          Rt && Rt(t, v, b);
        }
        switch (((Rt = b ? Kn(b) : window), t)) {
          case "focusin":
            (Br(Rt) || Rt.contentEditable === "true") &&
              ((sn = Rt), (Bc = b), (eu = null));
            break;
          case "focusout":
            eu = Bc = sn = null;
            break;
          case "mousedown":
            Gc = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            ((Gc = !1), Fr(M, l, _));
            break;
          case "selectionchange":
            if (k0) break;
          case "keydown":
          case "keyup":
            Fr(M, l, _);
        }
        var ft;
        if (Uc)
          t: {
            switch (t) {
              case "compositionstart":
                var ht = "onCompositionStart";
                break t;
              case "compositionend":
                ht = "onCompositionEnd";
                break t;
              case "compositionupdate":
                ht = "onCompositionUpdate";
                break t;
            }
            ht = void 0;
          }
        else
          cn
            ? qr(t, l) && (ht = "onCompositionEnd")
            : t === "keydown" &&
              l.keyCode === 229 &&
              (ht = "onCompositionStart");
        (ht &&
          (Ur &&
            l.locale !== "ko" &&
            (cn || ht !== "onCompositionStart"
              ? ht === "onCompositionEnd" && cn && (ft = Or())
              : ((Wl = _),
                (Oc = "value" in Wl ? Wl.value : Wl.textContent),
                (cn = !0))),
          (Rt = tc(b, ht)),
          0 < Rt.length &&
            ((ht = new Mr(ht, t, null, l, _)),
            M.push({ event: ht, listeners: Rt }),
            ft
              ? (ht.data = ft)
              : ((ft = Yr(l)), ft !== null && (ht.data = ft)))),
          (ft = q0 ? Y0(t, l) : B0(t, l)) &&
            ((ht = tc(b, "onBeforeInput")),
            0 < ht.length &&
              ((Rt = new Mr("onBeforeInput", "beforeinput", null, l, _)),
              M.push({ event: Rt, listeners: ht }),
              (Rt.data = ft))),
          qv(M, t, b, l, _));
      }
      Ch(M, e);
    });
  }
  function _u(t, e, l) {
    return { instance: t, listener: e, currentTarget: l };
  }
  function tc(t, e) {
    for (var l = e + "Capture", a = []; t !== null;) {
      var n = t,
        u = n.stateNode;
      if (
        ((n = n.tag),
        (n !== 5 && n !== 26 && n !== 27) ||
          u === null ||
          ((n = kn(t, l)),
          n != null && a.unshift(_u(t, n, u)),
          (n = kn(t, e)),
          n != null && a.push(_u(t, n, u))),
        t.tag === 3)
      )
        return a;
      t = t.return;
    }
    return [];
  }
  function Lv(t) {
    if (t === null) return null;
    do t = t.return;
    while (t && t.tag !== 5 && t.tag !== 27);
    return t || null;
  }
  function Ah(t, e, l, a, n) {
    for (var u = e._reactName, i = []; l !== null && l !== a;) {
      var s = l,
        f = s.alternate,
        b = s.stateNode;
      if (((s = s.tag), f !== null && f === a)) break;
      ((s !== 5 && s !== 26 && s !== 27) ||
        b === null ||
        ((f = b),
        n
          ? ((b = kn(l, u)), b != null && i.unshift(_u(l, b, f)))
          : n || ((b = kn(l, u)), b != null && i.push(_u(l, b, f)))),
        (l = l.return));
    }
    i.length !== 0 && t.push({ event: e, listeners: i });
  }
  var Vv = /\r\n?/g,
    Xv = /\u0000|\uFFFD/g;
  function Dh(t) {
    return (typeof t == "string" ? t : "" + t)
      .replace(
        Vv,
        `
`,
      )
      .replace(Xv, "");
  }
  function Mh(t, e) {
    return ((e = Dh(e)), Dh(t) === e);
  }
  function Kt(t, e, l, a, n, u) {
    switch (l) {
      case "children":
        if (typeof a == "string")
          e === "body" || (e === "textarea" && a === "") || an(t, a);
        else if (typeof a == "number" || typeof a == "bigint")
          e !== "body" && an(t, "" + a);
        else return;
        break;
      case "className":
        ku(t, "class", a);
        break;
      case "tabIndex":
        ku(t, "tabindex", a);
        break;
      case "dir":
      case "role":
      case "viewBox":
      case "width":
      case "height":
        ku(t, l, a);
        break;
      case "style":
        _r(t, a, u);
        return;
      case "data":
        if (e !== "object") {
          ku(t, "data", a);
          break;
        }
      case "src":
      case "href":
        if (a === "" && (e !== "a" || l !== "href")) {
          t.removeAttribute(l);
          break;
        }
        if (
          a == null ||
          typeof a == "function" ||
          typeof a == "symbol" ||
          typeof a == "boolean"
        ) {
          t.removeAttribute(l);
          break;
        }
        ((a = Ju(a)), t.setAttribute(l, a));
        break;
      case "action":
      case "formAction":
        if (typeof a == "function") {
          t.setAttribute(
            l,
            "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')",
          );
          break;
        } else
          typeof u == "function" &&
            (l === "formAction"
              ? (e !== "input" && Kt(t, e, "name", n.name, n, null),
                Kt(t, e, "formEncType", n.formEncType, n, null),
                Kt(t, e, "formMethod", n.formMethod, n, null),
                Kt(t, e, "formTarget", n.formTarget, n, null))
              : (Kt(t, e, "encType", n.encType, n, null),
                Kt(t, e, "method", n.method, n, null),
                Kt(t, e, "target", n.target, n, null)));
        if (a == null || typeof a == "symbol" || typeof a == "boolean") {
          t.removeAttribute(l);
          break;
        }
        ((a = Ju(a)), t.setAttribute(l, a));
        break;
      case "onClick":
        a != null && (t.onclick = pl);
        return;
      case "onScroll":
        a != null && At("scroll", t);
        return;
      case "onScrollEnd":
        a != null && At("scrollend", t);
        return;
      case "dangerouslySetInnerHTML":
        if (a != null) {
          if (typeof a != "object" || !("__html" in a)) throw Error(o(61));
          if (((l = a.__html), l != null)) {
            if (n.children != null) throw Error(o(60));
            u?.__html !== l && (t.innerHTML = l);
          }
        }
        break;
      case "multiple":
        t.multiple = a && typeof a != "function" && typeof a != "symbol";
        break;
      case "muted":
        t.muted = a && typeof a != "function" && typeof a != "symbol";
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "defaultValue":
      case "defaultChecked":
      case "innerHTML":
      case "ref":
        break;
      case "autoFocus":
        break;
      case "xlinkHref":
        if (
          a == null ||
          typeof a == "function" ||
          typeof a == "boolean" ||
          typeof a == "symbol"
        ) {
          t.removeAttribute("xlink:href");
          break;
        }
        ((l = Ju(a)),
          t.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", l));
        break;
      case "contentEditable":
      case "spellCheck":
      case "draggable":
      case "value":
      case "autoReverse":
      case "externalResourcesRequired":
      case "focusable":
      case "preserveAlpha":
        a != null && typeof a != "function" && typeof a != "symbol"
          ? t.setAttribute(l, a)
          : t.removeAttribute(l);
        break;
      case "inert":
      case "allowFullScreen":
      case "async":
      case "autoPlay":
      case "controls":
      case "credentialless":
      case "default":
      case "defer":
      case "disabled":
      case "disablePictureInPicture":
      case "disableRemotePlayback":
      case "formNoValidate":
      case "hidden":
      case "loop":
      case "noModule":
      case "noValidate":
      case "open":
      case "playsInline":
      case "readOnly":
      case "required":
      case "reversed":
      case "scoped":
      case "seamless":
      case "itemScope":
        a && typeof a != "function" && typeof a != "symbol"
          ? t.setAttribute(l, "")
          : t.removeAttribute(l);
        break;
      case "capture":
      case "download":
        a === !0
          ? t.setAttribute(l, "")
          : a !== !1 &&
              a != null &&
              typeof a != "function" &&
              typeof a != "symbol"
            ? t.setAttribute(l, a)
            : t.removeAttribute(l);
        break;
      case "cols":
      case "rows":
      case "size":
      case "span":
        a != null &&
        typeof a != "function" &&
        typeof a != "symbol" &&
        !isNaN(a) &&
        1 <= a
          ? t.setAttribute(l, a)
          : t.removeAttribute(l);
        break;
      case "rowSpan":
      case "start":
        a == null || typeof a == "function" || typeof a == "symbol" || isNaN(a)
          ? t.removeAttribute(l)
          : t.setAttribute(l, a);
        break;
      case "popover":
        (At("beforetoggle", t), At("toggle", t), Ku(t, "popover", a));
        break;
      case "xlinkActuate":
        Rl(t, "http://www.w3.org/1999/xlink", "xlink:actuate", a);
        break;
      case "xlinkArcrole":
        Rl(t, "http://www.w3.org/1999/xlink", "xlink:arcrole", a);
        break;
      case "xlinkRole":
        Rl(t, "http://www.w3.org/1999/xlink", "xlink:role", a);
        break;
      case "xlinkShow":
        Rl(t, "http://www.w3.org/1999/xlink", "xlink:show", a);
        break;
      case "xlinkTitle":
        Rl(t, "http://www.w3.org/1999/xlink", "xlink:title", a);
        break;
      case "xlinkType":
        Rl(t, "http://www.w3.org/1999/xlink", "xlink:type", a);
        break;
      case "xmlBase":
        Rl(t, "http://www.w3.org/XML/1998/namespace", "xml:base", a);
        break;
      case "xmlLang":
        Rl(t, "http://www.w3.org/XML/1998/namespace", "xml:lang", a);
        break;
      case "xmlSpace":
        Rl(t, "http://www.w3.org/XML/1998/namespace", "xml:space", a);
        break;
      case "is":
        Ku(t, "is", a);
        break;
      case "innerText":
      case "textContent":
        return;
      default:
        if (
          !(2 < l.length) ||
          (l[0] !== "o" && l[0] !== "O") ||
          (l[1] !== "n" && l[1] !== "N")
        )
          ((l = s0.get(l) || l), Ku(t, l, a));
        else return;
    }
    Gt = !0;
  }
  function Ef(t, e, l, a, n, u) {
    switch (l) {
      case "style":
        _r(t, a, u);
        return;
      case "dangerouslySetInnerHTML":
        if (a != null) {
          if (typeof a != "object" || !("__html" in a)) throw Error(o(61));
          if (((l = a.__html), l != null)) {
            if (n.children != null) throw Error(o(60));
            u?.__html !== l && (t.innerHTML = l);
          }
        }
        break;
      case "children":
        if (typeof a == "string") an(t, a);
        else if (typeof a == "number" || typeof a == "bigint") an(t, "" + a);
        else return;
        break;
      case "onScroll":
        a != null && At("scroll", t);
        return;
      case "onScrollEnd":
        a != null && At("scrollend", t);
        return;
      case "onClick":
        a != null && (t.onclick = pl);
        return;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "innerHTML":
      case "ref":
        return;
      case "innerText":
      case "textContent":
        return;
      default:
        if (!yr.hasOwnProperty(l))
          t: {
            if (
              l[0] === "o" &&
              l[1] === "n" &&
              ((n = l.endsWith("Capture")),
              (u = l.slice(2, n ? l.length - 7 : void 0)),
              (e = t[Ye] || null),
              (e = e != null ? e[l] : null),
              typeof e == "function" && t.removeEventListener(u, e, n),
              typeof a == "function")
            ) {
              (typeof e != "function" &&
                e !== null &&
                (l in t
                  ? (t[l] = null)
                  : t.hasAttribute(l) && t.removeAttribute(l)),
                t.addEventListener(u, a, n));
              break t;
            }
            ((Gt = !0),
              l in t
                ? (t[l] = a)
                : a === !0
                  ? t.setAttribute(l, "")
                  : Ku(t, l, a));
          }
        return;
    }
    Gt = !0;
  }
  function je(t, e, l) {
    switch (e) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "img":
        (At("error", t), At("load", t));
        var a = !1,
          n = !1,
          u;
        for (u in l)
          if (l.hasOwnProperty(u)) {
            var i = l[u];
            if (i != null)
              switch (u) {
                case "src":
                  a = !0;
                  break;
                case "srcSet":
                  n = !0;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  throw Error(o(137, e));
                default:
                  Kt(t, e, u, i, l, null);
              }
          }
        (n && Kt(t, e, "srcSet", l.srcSet, l, null),
          a && Kt(t, e, "src", l.src, l, null));
        return;
      case "input":
        At("invalid", t);
        var s = (u = i = n = null),
          f = null,
          b = null;
        for (a in l)
          if (l.hasOwnProperty(a)) {
            var _ = l[a];
            if (_ != null)
              switch (a) {
                case "name":
                  n = _;
                  break;
                case "type":
                  i = _;
                  break;
                case "checked":
                  f = _;
                  break;
                case "defaultChecked":
                  b = _;
                  break;
                case "value":
                  u = _;
                  break;
                case "defaultValue":
                  s = _;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  if (_ != null) throw Error(o(137, e));
                  break;
                default:
                  Kt(t, e, a, _, l, null);
              }
          }
        Tr(t, u, s, f, b, i, n, !1);
        return;
      case "select":
        (At("invalid", t), (a = i = u = null));
        for (n in l)
          if (l.hasOwnProperty(n) && ((s = l[n]), s != null))
            switch (n) {
              case "value":
                u = s;
                break;
              case "defaultValue":
                i = s;
                break;
              case "multiple":
                a = s;
              default:
                Kt(t, e, n, s, l, null);
            }
        ((e = u),
          (l = i),
          (t.multiple = !!a),
          e != null ? ln(t, !!a, e, !1) : l != null && ln(t, !!a, l, !0));
        return;
      case "textarea":
        (At("invalid", t), (u = n = a = null));
        for (i in l)
          if (l.hasOwnProperty(i) && ((s = l[i]), s != null))
            switch (i) {
              case "value":
                a = s;
                break;
              case "defaultValue":
                n = s;
                break;
              case "children":
                u = s;
                break;
              case "dangerouslySetInnerHTML":
                if (s != null) throw Error(o(91));
                break;
              default:
                Kt(t, e, i, s, l, null);
            }
        jr(t, a, n, u);
        return;
      case "option":
        for (f in l)
          l.hasOwnProperty(f) &&
            ((a = l[f]), a != null) &&
            (f === "selected"
              ? (t.selected =
                  a && typeof a != "function" && typeof a != "symbol")
              : Kt(t, e, f, a, l, null));
        return;
      case "dialog":
        (At("beforetoggle", t),
          At("toggle", t),
          At("cancel", t),
          At("close", t));
        break;
      case "iframe":
      case "object":
        At("load", t);
        break;
      case "video":
      case "audio":
        for (a = 0; a < Nu.length; a++) At(Nu[a], t);
        break;
      case "image":
        (At("error", t), At("load", t));
        break;
      case "details":
        At("toggle", t);
        break;
      case "embed":
      case "source":
      case "link":
        (At("error", t), At("load", t));
      case "area":
      case "base":
      case "br":
      case "col":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "track":
      case "wbr":
      case "menuitem":
        for (b in l)
          if (l.hasOwnProperty(b) && ((a = l[b]), a != null))
            switch (b) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(o(137, e));
              default:
                Kt(t, e, b, a, l, null);
            }
        return;
      default:
        if (jc(e)) {
          for (_ in l)
            l.hasOwnProperty(_) &&
              ((a = l[_]), a !== void 0 && Ef(t, e, _, a, l, void 0));
          return;
        }
    }
    for (s in l)
      l.hasOwnProperty(s) && ((a = l[s]), a != null && Kt(t, e, s, a, l, null));
  }
  var Qv = {};
  function Zv(t, e, l, a) {
    switch (e) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "input":
        var n = null,
          u = null,
          i = null,
          s = null,
          f = null,
          b = null,
          _ = null;
        for (E in l) {
          var M = l[E];
          if (l.hasOwnProperty(E) && M != null)
            switch (E) {
              case "checked":
                break;
              case "value":
                break;
              case "defaultValue":
                f = M;
              default:
                a.hasOwnProperty(E) || Kt(t, e, E, null, a, M);
            }
        }
        for (var v in a) {
          var E = a[v];
          if (((M = l[v]), a.hasOwnProperty(v) && (E != null || M != null)))
            switch (v) {
              case "type":
                (E !== M && (Gt = !0), (u = E));
                break;
              case "name":
                (E !== M && (Gt = !0), (n = E));
                break;
              case "checked":
                (E !== M && (Gt = !0), (b = E));
                break;
              case "defaultChecked":
                (E !== M && (Gt = !0), (_ = E));
                break;
              case "value":
                (E !== M && (Gt = !0), (i = E));
                break;
              case "defaultValue":
                (E !== M && (Gt = !0), (s = E));
                break;
              case "children":
              case "dangerouslySetInnerHTML":
                if (E != null) throw Error(o(137, e));
                break;
              default:
                E !== M && Kt(t, e, v, E, a, M);
            }
        }
        Tc(t, i, s, f, b, _, u, n);
        return;
      case "select":
        E = i = s = v = null;
        for (u in l)
          if (((f = l[u]), l.hasOwnProperty(u) && f != null))
            switch (u) {
              case "value":
                break;
              case "multiple":
                E = f;
              default:
                a.hasOwnProperty(u) || Kt(t, e, u, null, a, f);
            }
        for (n in a)
          if (
            ((u = a[n]),
            (f = l[n]),
            a.hasOwnProperty(n) && (u != null || f != null))
          )
            switch (n) {
              case "value":
                (u !== f && (Gt = !0), (v = u));
                break;
              case "defaultValue":
                (u !== f && (Gt = !0), (s = u));
                break;
              case "multiple":
                (u !== f && (Gt = !0), (i = u));
              default:
                u !== f && Kt(t, e, n, u, a, f);
            }
        ((e = s),
          (l = i),
          (a = E),
          v != null
            ? ln(t, !!l, v, !1)
            : !!a != !!l &&
              (e != null ? ln(t, !!l, e, !0) : ln(t, !!l, l ? [] : "", !1)));
        return;
      case "textarea":
        E = v = null;
        for (s in l)
          if (
            ((n = l[s]),
            l.hasOwnProperty(s) && n != null && !a.hasOwnProperty(s))
          )
            switch (s) {
              case "value":
                break;
              case "children":
                break;
              default:
                Kt(t, e, s, null, a, n);
            }
        for (i in a)
          if (
            ((n = a[i]),
            (u = l[i]),
            a.hasOwnProperty(i) && (n != null || u != null))
          )
            switch (i) {
              case "value":
                (n !== u && (Gt = !0), (v = n));
                break;
              case "defaultValue":
                (n !== u && (Gt = !0), (E = n));
                break;
              case "children":
                break;
              case "dangerouslySetInnerHTML":
                if (n != null) throw Error(o(91));
                break;
              default:
                n !== u && Kt(t, e, i, n, a, u);
            }
        Er(t, v, E);
        return;
      case "option":
        for (var K in l)
          ((v = l[K]),
            l.hasOwnProperty(K) &&
              v != null &&
              !a.hasOwnProperty(K) &&
              (K === "selected" ? (t.selected = !1) : Kt(t, e, K, null, a, v)));
        for (f in a)
          ((v = a[f]),
            (E = l[f]),
            a.hasOwnProperty(f) &&
              v !== E &&
              (v != null || E != null) &&
              (f === "selected"
                ? (v !== E && (Gt = !0),
                  (t.selected =
                    v && typeof v != "function" && typeof v != "symbol"))
                : Kt(t, e, f, v, a, E)));
        return;
      case "img":
      case "link":
      case "area":
      case "base":
      case "br":
      case "col":
      case "embed":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "source":
      case "track":
      case "wbr":
      case "menuitem":
        for (var lt in l)
          ((v = l[lt]),
            l.hasOwnProperty(lt) &&
              v != null &&
              !a.hasOwnProperty(lt) &&
              Kt(t, e, lt, null, a, v));
        for (b in a)
          if (
            ((v = a[b]),
            (E = l[b]),
            a.hasOwnProperty(b) && v !== E && (v != null || E != null))
          )
            switch (b) {
              case "children":
              case "dangerouslySetInnerHTML":
                if (v != null) throw Error(o(137, e));
                break;
              default:
                Kt(t, e, b, v, a, E);
            }
        return;
      default:
        if (jc(e)) {
          for (var Tt in l)
            ((v = l[Tt]),
              l.hasOwnProperty(Tt) &&
                v !== void 0 &&
                !a.hasOwnProperty(Tt) &&
                Ef(t, e, Tt, void 0, a, v));
          for (_ in a)
            ((v = a[_]),
              (E = l[_]),
              !a.hasOwnProperty(_) ||
                v === E ||
                (v === void 0 && E === void 0) ||
                Ef(t, e, _, v, a, E));
          return;
        }
    }
    for (var p in l)
      ((v = l[p]),
        l.hasOwnProperty(p) &&
          v != null &&
          !a.hasOwnProperty(p) &&
          Kt(t, e, p, null, a, v));
    for (M in a)
      ((v = a[M]),
        (E = l[M]),
        !a.hasOwnProperty(M) ||
          v === E ||
          (v == null && E == null) ||
          Kt(t, e, M, v, a, E));
  }
  function Rh(t) {
    switch (t) {
      case "css":
      case "script":
      case "font":
      case "img":
      case "image":
      case "input":
      case "link":
        return !0;
      default:
        return !1;
    }
  }
  function Kv() {
    if (typeof performance.getEntriesByType == "function") {
      for (
        var t = 0, e = 0, l = performance.getEntriesByType("resource"), a = 0;
        a < l.length;
        a++
      ) {
        var n = l[a],
          u = n.transferSize,
          i = n.initiatorType,
          s = n.duration;
        if (u && s && Rh(i)) {
          for (i = 0, s = n.responseEnd, a += 1; a < l.length; a++) {
            var f = l[a],
              b = f.startTime;
            if (b > s) break;
            var _ = f.transferSize,
              M = f.initiatorType;
            _ &&
              Rh(M) &&
              ((f = f.responseEnd), (i += _ * (f < s ? 1 : (s - b) / (f - b))));
          }
          if ((--a, (e += (8 * (u + i)) / (n.duration / 1e3)), t++, 10 < t))
            break;
        }
      }
      if (0 < t) return e / t / 1e6;
    }
    return navigator.connection &&
      ((t = navigator.connection.downlink), typeof t == "number")
      ? t
      : 5;
  }
  var jf = null,
    Nf = null;
  function zu(t) {
    return t.nodeType === 9 ? t : t.ownerDocument;
  }
  function Uh(t) {
    switch (t) {
      case "http://www.w3.org/2000/svg":
        return 1;
      case "http://www.w3.org/1998/Math/MathML":
        return 2;
      default:
        return 0;
    }
  }
  function Hh(t, e) {
    if (t === 0)
      switch (e) {
        case "svg":
          return 1;
        case "math":
          return 2;
        default:
          return 0;
      }
    return t === 1 && e === "foreignObject" ? 0 : t;
  }
  function wh(t, e, l, a) {
    return (
      (l = zu(l).createElement(t)),
      (l[be] = a),
      (l[Ye] = e),
      je(l, t, e),
      ve(l),
      l
    );
  }
  function _f(t, e) {
    return (
      t === "textarea" ||
      t === "noscript" ||
      typeof e.children == "string" ||
      typeof e.children == "number" ||
      typeof e.children == "bigint" ||
      (typeof e.dangerouslySetInnerHTML == "object" &&
        e.dangerouslySetInnerHTML !== null &&
        e.dangerouslySetInnerHTML.__html != null)
    );
  }
  var zf = null;
  function kv() {
    var t = window.event;
    return t && t.type === "popstate"
      ? t === zf
        ? !1
        : ((zf = t), !0)
      : ((zf = null), !1);
  }
  var Cf = typeof setTimeout == "function" ? setTimeout : void 0,
    Jv = typeof clearTimeout == "function" ? clearTimeout : void 0,
    qh = typeof Promise == "function" ? Promise : void 0,
    Yh =
      typeof requestAnimationFrame == "function" ? requestAnimationFrame : Cf,
    $v =
      typeof queueMicrotask == "function"
        ? queueMicrotask
        : typeof qh < "u"
          ? function (t) {
              return qh.resolve(null).then(t).catch(Fv);
            }
          : Cf;
  function Fv(t) {
    setTimeout(function () {
      throw t;
    });
  }
  function pa(t) {
    return t === "head";
  }
  function Bh(t, e) {
    var l = e,
      a = 0;
    do {
      var n = l.nextSibling;
      if ((t.removeChild(l), n && n.nodeType === 8))
        if (((l = n.data), l === "/$" || l === "/&")) {
          if (a === 0) {
            (t.removeChild(n), Ln(e));
            return;
          }
          a--;
        } else if (
          l === "$" ||
          l === "$?" ||
          l === "$~" ||
          l === "$!" ||
          l === "&"
        )
          a++;
        else if (l === "html") wf(t.ownerDocument.documentElement);
        else if (l === "head") {
          ((l = t.ownerDocument.head), wf(l));
          for (var u = l.firstChild; u;) {
            var i = u.nextSibling,
              s = u.nodeName;
            (u[Zn] ||
              s === "SCRIPT" ||
              s === "STYLE" ||
              (s === "LINK" && u.rel.toLowerCase() === "stylesheet") ||
              l.removeChild(u),
              (u = i));
          }
        } else l === "body" && wf(t.ownerDocument.body);
      l = n;
    } while (l);
    Ln(e);
  }
  function Gh(t, e) {
    var l = t;
    t = 0;
    do {
      var a = l.nextSibling;
      if (
        (l.nodeType === 1
          ? e
            ? ((l._stashedDisplay = l.style.display),
              (l.style.display = "none"))
            : ((l.style.display = l._stashedDisplay || ""),
              l.getAttribute("style") === "" && l.removeAttribute("style"))
          : l.nodeType === 3 &&
            (e
              ? ((l._stashedText = l.nodeValue), (l.nodeValue = ""))
              : (l.nodeValue = l._stashedText || "")),
        a && a.nodeType === 8)
      )
        if (((l = a.data), l === "/$")) {
          if (t === 0) break;
          t--;
        } else (l !== "$" && l !== "$?" && l !== "$~" && l !== "$!") || t++;
      l = a;
    } while (l);
  }
  function Lh(t, e, l) {
    if (
      ((e = CSS.escape(e) !== e ? "r-" + btoa(e).replace(/=/g, "") : e),
      (t.style.viewTransitionName = e),
      l != null && (t.style.viewTransitionClass = l),
      (l = getComputedStyle(t)),
      l.display === "inline")
    ) {
      if (((e = t.getClientRects()), e.length === 1)) var a = 1;
      else
        for (var n = (a = 0); n < e.length; n++) {
          var u = e[n];
          0 < u.width && 0 < u.height && a++;
        }
      a === 1 &&
        ((t = t.style),
        (t.display = e.length === 1 ? "inline-block" : "block"),
        (t.marginTop = "-" + l.paddingTop),
        (t.marginBottom = "-" + l.paddingBottom));
    }
  }
  function Vh(t, e) {
    ((t = t.style), (e = e.style));
    var l =
      e != null
        ? e.hasOwnProperty("viewTransitionName")
          ? e.viewTransitionName
          : e.hasOwnProperty("view-transition-name")
            ? e["view-transition-name"]
            : null
        : null;
    ((t.viewTransitionName =
      l == null || typeof l == "boolean" ? "" : ("" + l).trim()),
      (l =
        e != null
          ? e.hasOwnProperty("viewTransitionClass")
            ? e.viewTransitionClass
            : e.hasOwnProperty("view-transition-class")
              ? e["view-transition-class"]
              : null
          : null),
      (t.viewTransitionClass =
        l == null || typeof l == "boolean" ? "" : ("" + l).trim()),
      t.display === "inline-block" &&
        (e == null
          ? (t.display = t.margin = "")
          : ((l = e.display),
            (t.display = l == null || typeof l == "boolean" ? "" : l),
            (l = e.margin),
            l != null
              ? (t.margin = l)
              : ((l = e.hasOwnProperty("marginTop")
                  ? e.marginTop
                  : e["margin-top"]),
                (t.marginTop = l == null || typeof l == "boolean" ? "" : l),
                (e = e.hasOwnProperty("marginBottom")
                  ? e.marginBottom
                  : e["margin-bottom"]),
                (t.marginBottom =
                  e == null || typeof e == "boolean" ? "" : e)))));
  }
  function Iv(t, e, l) {
    return (
      (l = l.ownerDocument.defaultView),
      {
        rect: t,
        abs: e.position === "absolute" || e.position === "fixed",
        clip:
          e.clipPath !== "none" ||
          e.overflow !== "visible" ||
          e.filter !== "none" ||
          e.mask !== "none" ||
          e.mask !== "none" ||
          e.borderRadius !== "0px",
        view:
          0 <= t.bottom &&
          0 <= t.right &&
          t.top <= l.innerHeight &&
          t.left <= l.innerWidth,
      }
    );
  }
  function Of(t) {
    var e = t.getBoundingClientRect(),
      l = getComputedStyle(t);
    return Iv(e, l, t);
  }
  function Wv(t) {
    return t.documentElement.clientHeight;
  }
  function Pv(t) {
    (this.addEventListener("load", t), this.addEventListener("error", t));
  }
  function ty(t, e, l, a, n, u, i, s, f) {
    var b = e.nodeType === 9 ? e : e.ownerDocument;
    try {
      var _ = b.startViewTransition({
        update: function () {
          var v = b.defaultView,
            E = v.navigation && v.navigation.transition,
            K = b.fonts.status;
          a();
          var lt = [];
          if (
            (K === "loaded" &&
              (Wv(b), b.fonts.status === "loading" && lt.push(b.fonts.ready)),
            (K = lt.length),
            t !== null)
          )
            for (var Tt = t.suspenseyImages, p = 0, h = 0; h < Tt.length; h++) {
              var T = Tt[h];
              if (!T.complete) {
                var D = T.getBoundingClientRect();
                if (
                  0 < D.bottom &&
                  0 < D.right &&
                  D.top < v.innerHeight &&
                  D.left < v.innerWidth
                ) {
                  if (((p += fm(T)), p > ac)) {
                    lt.length = K;
                    break;
                  }
                  ((T = new Promise(Pv.bind(T))), lt.push(T));
                }
              }
            }
          if (0 < lt.length)
            return (
              (v = Promise.race([
                Promise.all(lt),
                new Promise(function (et) {
                  return setTimeout(et, 500);
                }),
              ]).then(n, n)),
              (E ? Promise.allSettled([E.finished, v]) : v).then(u, u)
            );
          if ((n(), E)) return E.finished.then(u, u);
          u();
        },
        types: l,
      });
      b.__reactViewTransition = _;
      var M = [];
      return (
        _.ready.then(
          function () {
            for (
              var v = b.documentElement.getAnimations({ subtree: !0 }), E = 0;
              E < v.length;
              E++
            ) {
              var K = v[E],
                lt = K.effect,
                Tt = lt.pseudoElement;
              if (Tt != null && Tt.startsWith("::view-transition")) {
                (M.push(K), (K = lt.getKeyframes()));
                for (var p = (Tt = void 0), h = !0, T = 0; T < K.length; T++) {
                  var D = K[T],
                    et = D.width;
                  if (Tt === void 0) Tt = et;
                  else if (Tt !== et) {
                    h = !1;
                    break;
                  }
                  if (((et = D.height), p === void 0)) p = et;
                  else if (p !== et) {
                    h = !1;
                    break;
                  }
                  (delete D.width,
                    delete D.height,
                    D.transform === "none" && delete D.transform);
                }
                h &&
                  Tt !== void 0 &&
                  p !== void 0 &&
                  (lt.setKeyframes(K),
                  (h = getComputedStyle(lt.target, lt.pseudoElement)),
                  h.width !== Tt || h.height !== p) &&
                  ((h = K[0]),
                  (h.width = Tt),
                  (h.height = p),
                  (h = K[K.length - 1]),
                  (h.width = Tt),
                  (h.height = p),
                  lt.setKeyframes(K));
              }
            }
            i();
          },
          function (v) {
            b.__reactViewTransition === _ && (b.__reactViewTransition = null);
            try {
              (typeof v == "object" &&
                v !== null &&
                v.name === "InvalidStateError" &&
                (v.message ===
                  "View transition was skipped because document visibility state is hidden." ||
                  v.message ===
                    "Skipping view transition because document visibility state has become hidden." ||
                  v.message ===
                    "Skipping view transition because viewport size changed." ||
                  v.message ===
                    "Transition was aborted because of invalid state") &&
                (v = null),
                v !== null && f(v));
            } finally {
              (a(), n(), i());
            }
          },
        ),
        _.finished.finally(function () {
          for (var v = 0; v < M.length; v++) M[v].cancel();
          (b.__reactViewTransition === _ && (b.__reactViewTransition = null),
            s());
        }),
        _
      );
    } catch {
      return (a(), n(), i(), null);
    }
  }
  function $a(t, e) {
    ((this._scope = document.documentElement),
      (this._selector = "::view-transition-" + t + "(" + e + ")"));
  }
  (($a.prototype.animate = function (t, e) {
    return (
      (e = typeof e == "number" ? { duration: e } : $({}, e)),
      (e.pseudoElement = this._selector),
      this._scope.animate(t, e)
    );
  }),
    ($a.prototype.getAnimations = function () {
      for (
        var t = this._scope,
          e = this._selector,
          l = t.getAnimations({ subtree: !0 }),
          a = [],
          n = 0;
        n < l.length;
        n++
      ) {
        var u = l[n].effect;
        u !== null && u.target === t && u.pseudoElement === e && a.push(l[n]);
      }
      return a;
    }),
    ($a.prototype.getComputedStyle = function () {
      return getComputedStyle(this._scope, this._selector);
    }));
  function Xh(t) {
    return {
      name: t,
      group: new $a("group", t),
      imagePair: new $a("image-pair", t),
      old: new $a("old", t),
      new: new $a("new", t),
    };
  }
  function tl(t) {
    ((this._fragmentFiber = t),
      (this._observers = this._eventListeners = null));
  }
  tl.prototype.addEventListener = function (t, e, l) {
    var a = null,
      n = null;
    if (!(
      l != null &&
      typeof l != "boolean" &&
      ((a = l.signal || null), a !== null && a.aborted)
    )) {
      this._eventListeners === null && (this._eventListeners = []);
      var u = this._eventListeners;
      if (Zh(u, t, e, l) === -1) {
        var i = this,
          s = e;
        (l != null &&
          typeof l != "boolean" &&
          l.once === !0 &&
          (s = function (f) {
            (i.removeEventListener(t, e, l),
              typeof e == "function" ? e.call(this, f) : e.handleEvent(f));
          }),
          a !== null &&
            ((n = i.removeEventListener.bind(i, t, e, l)),
            a.addEventListener("abort", n, { once: !0 }),
            (n = a.removeEventListener.bind(a, "abort", n))),
          (a = Hn(l)),
          u.push({
            type: t,
            listener: e,
            optionsOrUseCapture: l,
            attachedListener: s,
            cleanup: n,
          }),
          N(this._fragmentFiber.child, !1, ey, t, s, a));
      }
      this._eventListeners = u;
    }
  };
  function ey(t, e, l, a) {
    return (vt(t).addEventListener(e, l, a), !1);
  }
  tl.prototype.removeEventListener = function (t, e, l) {
    var a = this._eventListeners;
    if (a !== null && ((e = Zh(a, t, e, l)), e !== -1)) {
      var n = a[e];
      l = n.attachedListener;
      var u = n.cleanup;
      ((n = Hn(n.optionsOrUseCapture)),
        N(this._fragmentFiber.child, !1, ly, t, l, n),
        a.splice(e, 1),
        u !== null && u());
    }
  };
  function ly(t, e, l, a) {
    return (vt(t).removeEventListener(e, l, a), !1);
  }
  function Hn(t) {
    return t != null &&
      typeof t != "boolean" &&
      (t.once === !0 || t.signal instanceof AbortSignal)
      ? { capture: t.capture, passive: t.passive }
      : t;
  }
  function Qh(t) {
    return t == null
      ? "c=0"
      : typeof t == "boolean"
        ? "c=" + (t ? "1" : "0")
        : "c=" + (t.capture ? "1" : "0");
  }
  function Zh(t, e, l, a) {
    if (t.length === 0) return -1;
    a = Qh(a);
    for (var n = 0; n < t.length; n++) {
      var u = t[n];
      if (u.type === e && u.listener === l && Qh(u.optionsOrUseCapture) === a)
        return n;
    }
    return -1;
  }
  ((tl.prototype.dispatchEvent = function (t) {
    var e = w(this._fragmentFiber);
    if (e === null) return !0;
    e = vt(e);
    var l = this._eventListeners;
    if ((l !== null && 0 < l.length) || !t.bubbles) {
      var a =
        e.nodeType === 9 ? e.createComment("") : document.createTextNode("");
      if (l)
        for (var n = 0; n < l.length; n++) {
          var u = l[n];
          a.addEventListener(
            u.type,
            u.attachedListener,
            Hn(u.optionsOrUseCapture),
          );
        }
      if ((e.appendChild(a), (t = a.dispatchEvent(t)), l))
        for (n = 0; n < l.length; n++)
          ((u = l[n]),
            a.removeEventListener(
              u.type,
              u.attachedListener,
              Hn(u.optionsOrUseCapture),
            ));
      return (e.removeChild(a), t);
    }
    return e.dispatchEvent(t);
  }),
    (tl.prototype.focus = function (t) {
      N(this._fragmentFiber.child, !0, Kh, t, void 0, void 0);
    }));
  function Kh(t, e) {
    return t.tag === 6 ? !1 : ((t = vt(t)), my(t, e));
  }
  tl.prototype.focusLast = function (t) {
    var e = [];
    N(this._fragmentFiber.child, !0, Af, e, void 0, void 0);
    for (var l = e.length - 1; 0 <= l && !Kh(e[l], t); l--);
  };
  function Af(t, e) {
    return (e.push(t), !1);
  }
  tl.prototype.blur = function () {
    var t = w(this._fragmentFiber);
    t !== null &&
      ((t = vt(t)),
      (t = zu(t).activeElement),
      t !== null && N(this._fragmentFiber.child, !1, ay, t, void 0, void 0));
  };
  function ay(t, e) {
    return t.tag === 6
      ? !1
      : ((t = vt(t)), t === e || t.contains(e) ? (e.blur(), !0) : !1);
  }
  tl.prototype.observeUsing = function (t) {
    (this._observers === null && (this._observers = new Set()),
      this._observers.add(t),
      N(this._fragmentFiber.child, !1, ny, t, void 0, void 0));
  };
  function ny(t, e) {
    return (t.tag === 6 || ((t = vt(t)), e.observe(t)), !1);
  }
  tl.prototype.unobserveUsing = function (t) {
    var e = this._observers;
    if (e !== null && e.has(t)) {
      (e.delete(t), N(this._fragmentFiber.child, !1, uy, t, void 0, void 0));
      for (var l = (e = 0); l < yl.length; l++) {
        var a = yl[l];
        a.fragmentInstance === this && a.observer === t
          ? t.unobserve(a.instance)
          : (yl[e++] = a);
      }
      yl.length = e;
    }
  };
  function uy(t, e) {
    return (t.tag === 6 || ((t = vt(t)), e.unobserve(t)), !1);
  }
  var yl = [],
    Df = !1;
  function iy(t, e, l) {
    (yl.push({ fragmentInstance: t, observer: e, instance: l }),
      Df ||
        ((Df = !0),
        vy(function () {
          Df = !1;
          var a = yl;
          yl = [];
          for (var n = 0; n < a.length; n++) {
            var u = a[n];
            u.observer.unobserve(u.instance);
          }
        })));
  }
  tl.prototype.getClientRects = function () {
    var t = [];
    return (N(this._fragmentFiber.child, !1, cy, t, void 0, void 0), t);
  };
  function cy(t, e) {
    if (t.tag === 6) {
      t = t.stateNode;
      var l = t.ownerDocument.createRange();
      (l.selectNodeContents(t), e.push.apply(e, l.getClientRects()));
    } else ((t = vt(t)), e.push.apply(e, t.getClientRects()));
    return !1;
  }
  ((tl.prototype.getRootNode = function (t) {
    var e = w(this._fragmentFiber);
    return e === null ? this : vt(e).getRootNode(t);
  }),
    (tl.prototype.compareDocumentPosition = function (t) {
      var e = w(this._fragmentFiber);
      if (e === null) return Node.DOCUMENT_POSITION_DISCONNECTED;
      var l = [];
      N(this._fragmentFiber.child, !1, Af, l, void 0, void 0);
      var a = vt(e);
      if (l.length === 0) {
        if (((l = a), dt(this._fragmentFiber))) {
          t: {
            for (e = this._fragmentFiber.return; e !== null;) {
              if (e.tag === 4) {
                e = e.stateNode.containerInfo;
                break t;
              }
              if (e.tag === 3 || e.tag === 5 || e.tag === 27) break;
              e = e.return;
            }
            e = null;
          }
          e != null && (l = e);
        }
        e = this._fragmentFiber;
        var n = (a = l.compareDocumentPosition(t));
        return (
          l === t
            ? (n = Node.DOCUMENT_POSITION_CONTAINS)
            : a & Node.DOCUMENT_POSITION_CONTAINED_BY &&
              ((l = ct(e)[1]),
              l === null
                ? (n = Node.DOCUMENT_POSITION_PRECEDING)
                : ((t = vt(l).compareDocumentPosition(t)),
                  (n =
                    t === 0 || t & Node.DOCUMENT_POSITION_FOLLOWING
                      ? Node.DOCUMENT_POSITION_FOLLOWING
                      : Node.DOCUMENT_POSITION_PRECEDING))),
          (n |= Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC)
        );
      }
      ((e = vt(l[0])), (n = vt(l[l.length - 1])));
      var u = dt(this._fragmentFiber) ? e.parentElement : a;
      if (u == null) return Node.DOCUMENT_POSITION_DISCONNECTED;
      ((a = u.compareDocumentPosition(e) & Node.DOCUMENT_POSITION_CONTAINED_BY),
        (u =
          u.compareDocumentPosition(n) & Node.DOCUMENT_POSITION_CONTAINED_BY));
      var i = e.compareDocumentPosition(t),
        s = n.compareDocumentPosition(t),
        f =
          i & Node.DOCUMENT_POSITION_CONTAINED_BY ||
          s & Node.DOCUMENT_POSITION_CONTAINED_BY;
      return (
        (s =
          a &&
          u &&
          i & Node.DOCUMENT_POSITION_FOLLOWING &&
          s & Node.DOCUMENT_POSITION_PRECEDING),
        (e =
          (a && e === t) || (u && n === t) || f || s
            ? Node.DOCUMENT_POSITION_CONTAINED_BY
            : (!a && e === t) || (!u && n === t)
              ? Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC
              : i),
        e & Node.DOCUMENT_POSITION_DISCONNECTED ||
        e & Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC ||
        sy(e, this._fragmentFiber, l[0], l[l.length - 1], t)
          ? e
          : Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC
      );
    }));
  function sy(t, e, l, a, n) {
    var u = Ca(n);
    if (t & Node.DOCUMENT_POSITION_CONTAINED_BY) {
      if ((l = !!u))
        t: {
          for (; u !== null;) {
            if (u.tag === 7 && (u === e || u.alternate === e)) {
              l = !0;
              break t;
            }
            u = u.return;
          }
          l = !1;
        }
      return l;
    }
    if (t & Node.DOCUMENT_POSITION_CONTAINS) {
      if (u === null)
        return (
          (u = n.ownerDocument),
          n === u || n === u.documentElement || n === u.body
        );
      t: {
        for (u = e, e = w(e); u !== null;) {
          if (!(
            (u.tag !== 5 && u.tag !== 3 && u.tag !== 27) ||
            (u !== e && u.alternate !== e)
          )) {
            u = !0;
            break t;
          }
          u = u.return;
        }
        u = !1;
      }
      return u;
    }
    return t & Node.DOCUMENT_POSITION_PRECEDING
      ? ((e = !!u) &&
          !(e = u === l) &&
          ((e = Et(l, u, te)),
          e === null
            ? (e = !1)
            : (N(e, !0, zt, u, l), (u = Ut), (Ut = null), (e = u !== null))),
        e)
      : t & Node.DOCUMENT_POSITION_FOLLOWING
        ? ((e = !!u) &&
            !(e = u === a) &&
            ((e = Et(a, u, te)),
            e === null
              ? (e = !1)
              : (N(e, !0, qt, u, a),
                (u = Ut),
                (Ht = Ut = null),
                (e = u !== null))),
          e)
        : !1;
  }
  function kh(t, e) {
    var l = t.ownerDocument.createRange();
    (l.selectNodeContents(t),
      (t = l.getBoundingClientRect()),
      window.scrollTo(
        window.scrollX + t.left,
        e
          ? window.scrollY + t.top
          : window.scrollY + t.bottom - window.innerHeight,
      ));
  }
  tl.prototype.scrollIntoView = function (t) {
    if (typeof t == "object") throw Error(o(566));
    var e = [];
    N(this._fragmentFiber.child, !1, Af, e, void 0, void 0);
    var l = t !== !1;
    if (e.length === 0) {
      var a = ct(this._fragmentFiber);
      if (
        ((a = l ? a[1] || a[0] || w(this._fragmentFiber) : a[0] || a[1]),
        a === null)
      )
        return;
      if (a.tag === 6) {
        ((t = vt(a)), kh(t, l));
        return;
      }
      if (((a = vt(a)), a.nodeType !== 9)) {
        if (a.nodeType === 11) {
          ((l = "host" in a ? a.host : null),
            l !== null && l.scrollIntoView(t));
          return;
        }
        a.scrollIntoView(t);
      }
    }
    for (a = l ? e.length - 1 : 0; a !== (l ? -1 : e.length);) {
      var n = e[a];
      (n.tag === 6 ? ((n = vt(n)), kh(n, l)) : vt(n).scrollIntoView(t),
        (a += l ? -1 : 1));
    }
  };
  function fy(t, e) {
    return ((t = vt(t)), Jh(t, e), !1);
  }
  function Jh(t, e) {
    (t.reactFragments == null && (t.reactFragments = new Set()),
      t.reactFragments.add(e));
  }
  function $h(t, e) {
    var l = e._eventListeners;
    if (l !== null)
      for (var a = 0; a < l.length; a++) {
        var n = l[a];
        t.addEventListener(
          n.type,
          n.attachedListener,
          Hn(n.optionsOrUseCapture),
        );
      }
    t.nodeType !== 3 &&
      ((l = e._observers),
      l !== null &&
        l.forEach(function (u) {
          for (var i = 0, s = 0; s < yl.length; s++) {
            var f = yl[s];
            (f.fragmentInstance !== e ||
              f.observer !== u ||
              f.instance !== t) &&
              (yl[i++] = f);
          }
          ((yl.length = i), u.observe(t));
        }),
      Jh(t, e));
  }
  function ry(t, e) {
    var l = e._eventListeners;
    if (l !== null)
      for (var a = 0; a < l.length; a++) {
        var n = l[a];
        t.removeEventListener(
          n.type,
          n.attachedListener,
          Hn(n.optionsOrUseCapture),
        );
      }
    t.nodeType !== 3 &&
      ((l = e._observers),
      l !== null &&
        l.forEach(function (u) {
          typeof u.rootMargin == "string" ? iy(e, u, t) : u.unobserve(t);
        }),
      t.reactFragments != null && t.reactFragments.delete(e));
  }
  function Mf(t) {
    var e = t.firstChild;
    for (e && e.nodeType === 10 && (e = e.nextSibling); e;) {
      var l = e;
      switch (((e = e.nextSibling), l.nodeName)) {
        case "HTML":
        case "HEAD":
        case "BODY":
          (Mf(l), Zu(l));
          continue;
        case "SCRIPT":
        case "STYLE":
          continue;
        case "LINK":
          if (l.rel.toLowerCase() === "stylesheet") continue;
      }
      t.removeChild(l);
    }
  }
  function oy(t, e, l, a) {
    for (; t.nodeType === 1;) {
      var n = l;
      if (t.nodeName.toLowerCase() !== e.toLowerCase()) {
        if (!a && (t.nodeName !== "INPUT" || t.type !== "hidden")) break;
      } else if (a) {
        if (!t[Zn])
          switch (e) {
            case "meta":
              if (!t.hasAttribute("itemprop")) break;
              return t;
            case "link":
              if (
                ((u = t.getAttribute("rel")),
                u === "stylesheet" && t.hasAttribute("data-precedence"))
              )
                break;
              if (
                u !== n.rel ||
                t.getAttribute("href") !==
                  (n.href == null || n.href === "" ? null : n.href) ||
                t.getAttribute("crossorigin") !==
                  (n.crossOrigin == null ? null : n.crossOrigin) ||
                t.getAttribute("title") !== (n.title == null ? null : n.title)
              )
                break;
              return t;
            case "style":
              if (t.hasAttribute("data-precedence")) break;
              return t;
            case "script":
              if (
                ((u = t.getAttribute("src")),
                (u !== (n.src == null ? null : n.src) ||
                  t.getAttribute("type") !== (n.type == null ? null : n.type) ||
                  t.getAttribute("crossorigin") !==
                    (n.crossOrigin == null ? null : n.crossOrigin)) &&
                  u &&
                  t.hasAttribute("async") &&
                  !t.hasAttribute("itemprop"))
              )
                break;
              return t;
            default:
              return t;
          }
      } else if (e === "input" && t.type === "hidden") {
        var u = n.name == null ? null : "" + n.name;
        if (n.type === "hidden" && t.getAttribute("name") === u) return t;
      } else return t;
      if (((t = fl(t.nextSibling)), t === null)) break;
    }
    return null;
  }
  function dy(t, e, l) {
    if (e === "") return null;
    for (; t.nodeType !== 3;)
      if (
        ((t.nodeType !== 1 || t.nodeName !== "INPUT" || t.type !== "hidden") &&
          !l) ||
        ((t = fl(t.nextSibling)), t === null)
      )
        return null;
    return t;
  }
  function Fh(t, e) {
    for (; t.nodeType !== 8;)
      if (
        ((t.nodeType !== 1 || t.nodeName !== "INPUT" || t.type !== "hidden") &&
          !e) ||
        ((t = fl(t.nextSibling)), t === null)
      )
        return null;
    return t;
  }
  function Rf(t) {
    return t.data === "$?" || t.data === "$~";
  }
  function Uf(t) {
    return (
      t.data === "$!" ||
      (t.data === "$?" && t.ownerDocument.readyState !== "loading")
    );
  }
  function hy(t, e) {
    var l = t.ownerDocument;
    if (t.data === "$~") t._reactRetry = e;
    else if (t.data !== "$?" || l.readyState !== "loading") e();
    else {
      var a = function () {
        (e(), l.removeEventListener("DOMContentLoaded", a));
      };
      (l.addEventListener("DOMContentLoaded", a), (t._reactRetry = a));
    }
  }
  function fl(t) {
    for (; t != null; t = t.nextSibling) {
      var e = t.nodeType;
      if (e === 1 || e === 3) break;
      if (e === 8) {
        if (
          ((e = t.data),
          e === "$" ||
            e === "$!" ||
            e === "$?" ||
            e === "$~" ||
            e === "&" ||
            e === "F!" ||
            e === "F")
        )
          break;
        if (e === "/$" || e === "/&") return null;
      }
    }
    return t;
  }
  var Hf = null;
  function Ih(t) {
    t = t.nextSibling;
    for (var e = 0; t;) {
      if (t.nodeType === 8) {
        var l = t.data;
        if (l === "/$" || l === "/&") {
          if (e === 0) return fl(t.nextSibling);
          e--;
        } else
          (l !== "$" && l !== "$!" && l !== "$?" && l !== "$~" && l !== "&") ||
            e++;
      }
      t = t.nextSibling;
    }
    return null;
  }
  function Wh(t) {
    t = t.previousSibling;
    for (var e = 0; t;) {
      if (t.nodeType === 8) {
        var l = t.data;
        if (l === "$" || l === "$!" || l === "$?" || l === "$~" || l === "&") {
          if (e === 0) return t;
          e--;
        } else (l !== "/$" && l !== "/&") || e++;
      }
      t = t.previousSibling;
    }
    return null;
  }
  function my(t, e) {
    function l() {
      a = !0;
    }
    if (t.ownerDocument.activeElement === t) return !0;
    var a = !1;
    try {
      (t.ownerDocument.addEventListener("focus", l, !0),
        (t.focus || HTMLElement.prototype.focus).call(t, e));
    } finally {
      t.ownerDocument.removeEventListener("focus", l, !0);
    }
    return a;
  }
  function vy(t) {
    Yh(function () {
      Yh(function (e) {
        return t(e);
      });
    });
  }
  function Ph(t, e, l) {
    switch (((e = zu(l)), t)) {
      case "html":
        if (((t = e.documentElement), !t)) throw Error(o(452));
        return t;
      case "head":
        if (((t = e.head), !t)) throw Error(o(453));
        return t;
      case "body":
        if (((t = e.body), !t)) throw Error(o(454));
        return t;
      default:
        throw Error(o(451));
    }
  }
  function tm(t, e, l) {
    for (var a in l) {
      var n = l[a];
      l.hasOwnProperty(a) && n != null && Kt(t, e, a, null, Qv, n);
    }
    (l.dangerouslySetInnerHTML != null && (t.textContent = ""),
      t.onclick === pl && (t.onclick = null),
      Zu(t));
  }
  function wf(t) {
    for (var e = t.attributes; e.length;) t.removeAttributeNode(e[0]);
    Zu(t);
  }
  var rl = new Map(),
    em = new Set();
  function Cu(t) {
    if (typeof t.getRootNode == "function") {
      var e = t.getRootNode();
      if (e.nodeType === 9 || e.nodeType === 11) return e;
    }
    return t.nodeType === 9 ? t : t.ownerDocument;
  }
  var Kl = P.d;
  P.d = { f: yy, r: gy, D: py, C: by, L: Sy, m: xy, X: Ey, S: Ty, M: jy };
  function yy() {
    var t = Kl.f(),
      e = Ji();
    return t || e;
  }
  function gy(t) {
    var e = Pa(t);
    e !== null && e.tag === 5 && e.type === "form" ? ad(e) : Kl.r(t);
  }
  var wn = typeof document > "u" ? null : document;
  function lm(t, e, l) {
    var a = wn;
    if (a && typeof e == "string" && e) {
      var n = ll(e);
      ((n = 'link[rel="' + t + '"][href="' + n + '"]'),
        typeof l == "string" && (n += '[crossorigin="' + l + '"]'),
        em.has(n) ||
          (em.add(n),
          (t = { rel: t, crossOrigin: l, href: e }),
          a.querySelector(n) === null &&
            ((e = a.createElement("link")),
            je(e, "link", t),
            ve(e),
            a.head.appendChild(e))));
    }
  }
  function py(t) {
    (Kl.D(t), lm("dns-prefetch", t, null));
  }
  function by(t, e) {
    (Kl.C(t, e), lm("preconnect", t, e));
  }
  function Sy(t, e, l) {
    Kl.L(t, e, l);
    var a = wn;
    if (a && t && e) {
      var n = 'link[rel="preload"][as="' + ll(e) + '"]';
      e === "image" && l && l.imageSrcSet
        ? ((n += '[imagesrcset="' + ll(l.imageSrcSet) + '"]'),
          typeof l.imageSizes == "string" &&
            (n += '[imagesizes="' + ll(l.imageSizes) + '"]'))
        : (n += '[href="' + ll(t) + '"]');
      var u = n;
      switch (e) {
        case "style":
          u = qn(t);
          break;
        case "script":
          u = Yn(t);
      }
      if (!(
        rl.has(u) ||
        ((t = $(
          {
            rel: "preload",
            href: e === "image" && l && l.imageSrcSet ? void 0 : t,
            as: e,
          },
          l,
        )),
        rl.set(u, t),
        a.querySelector(n) !== null ||
          (e === "style" && a.querySelector(Ou(u))) ||
          (e === "script" && a.querySelector(Au(u))))
      )) {
        var i = a.createElement("link");
        (je(i, "link", t),
          e === "style" &&
            ((i[Qu] = !0),
            (i.onload = i.onerror =
              function () {
                mr(i);
              })),
          ve(i),
          a.head.appendChild(i));
      }
    }
  }
  function xy(t, e) {
    Kl.m(t, e);
    var l = wn;
    if (l && t) {
      var a = e && typeof e.as == "string" ? e.as : "script",
        n =
          'link[rel="modulepreload"][as="' + ll(a) + '"][href="' + ll(t) + '"]',
        u = n;
      switch (a) {
        case "audioworklet":
        case "paintworklet":
        case "serviceworker":
        case "sharedworker":
        case "worker":
        case "script":
          u = Yn(t);
      }
      if (
        !rl.has(u) &&
        ((t = $({ rel: "modulepreload", href: t }, e)),
        rl.set(u, t),
        l.querySelector(n) === null)
      ) {
        switch (a) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            if (l.querySelector(Au(u))) return;
        }
        ((a = l.createElement("link")),
          je(a, "link", t),
          ve(a),
          l.head.appendChild(a));
      }
    }
  }
  function Ty(t, e, l) {
    Kl.S(t, e, l);
    var a = wn;
    if (a && t) {
      var n = tn(a).hoistableStyles,
        u = qn(t);
      e = e || "default";
      var i = n.get(u);
      if (!i) {
        var s = { loading: 0, preload: null };
        if ((i = a.querySelector(Ou(u)))) s.loading = 5;
        else {
          ((t = $({ rel: "stylesheet", href: t, "data-precedence": e }, l)),
            (l = rl.get(u)) && qf(t, l));
          var f = (i = a.createElement("link"));
          (ve(f),
            je(f, "link", t),
            (f._p = new Promise(function (b, _) {
              ((f.onload = b), (f.onerror = _));
            })),
            f.addEventListener("load", function () {
              s.loading |= 1;
            }),
            f.addEventListener("error", function () {
              s.loading |= 2;
            }),
            (s.loading |= 4),
            ec(i, e, a));
        }
        ((i = { type: "stylesheet", instance: i, count: 1, state: s }),
          n.set(u, i));
      }
    }
  }
  function Ey(t, e) {
    Kl.X(t, e);
    var l = wn;
    if (l && t) {
      var a = tn(l).hoistableScripts,
        n = Yn(t),
        u = a.get(n);
      u ||
        ((u = l.querySelector(Au(n))),
        u ||
          ((t = $({ src: t, async: !0 }, e)),
          (e = rl.get(n)) && Yf(t, e),
          (u = l.createElement("script")),
          ve(u),
          je(u, "link", t),
          l.head.appendChild(u)),
        (u = { type: "script", instance: u, count: 1, state: null }),
        a.set(n, u));
    }
  }
  function jy(t, e) {
    Kl.M(t, e);
    var l = wn;
    if (l && t) {
      var a = tn(l).hoistableScripts,
        n = Yn(t),
        u = a.get(n);
      u ||
        ((u = l.querySelector(Au(n))),
        u ||
          ((t = $({ src: t, async: !0, type: "module" }, e)),
          (e = rl.get(n)) && Yf(t, e),
          (u = l.createElement("script")),
          ve(u),
          je(u, "link", t),
          l.head.appendChild(u)),
        (u = { type: "script", instance: u, count: 1, state: null }),
        a.set(n, u));
    }
  }
  function am(t, e, l, a) {
    var n = (n = de.current) ? Cu(n) : null;
    if (!n) throw Error(o(446));
    switch (t) {
      case "meta":
      case "title":
        return null;
      case "style":
        return typeof l.precedence == "string" && typeof l.href == "string"
          ? ((l = qn(l.href)),
            (e = tn(n).hoistableStyles),
            (a = e.get(l)),
            a ||
              ((a = { type: "style", instance: null, count: 0, state: null }),
              e.set(l, a)),
            a)
          : { type: "void", instance: null, count: 0, state: null };
      case "link":
        if (
          l.rel === "stylesheet" &&
          typeof l.href == "string" &&
          typeof l.precedence == "string"
        ) {
          t = qn(l.href);
          var u = tn(n).hoistableStyles,
            i = u.get(t);
          if (
            (i ||
              ((n = n.ownerDocument || n),
              (i = {
                type: "stylesheet",
                instance: null,
                count: 0,
                state: { loading: 0, preload: null },
              }),
              u.set(t, i),
              (u = n.querySelector(Ou(t)))
                ? u._p || ((i.instance = u), (i.state.loading = 5))
                : ((u = rl.get(t)),
                  u ||
                    ((u = {
                      rel: "preload",
                      as: "style",
                      href: l.href,
                      crossOrigin: l.crossOrigin,
                      integrity: l.integrity,
                      media: l.media,
                      hrefLang: l.hrefLang,
                      referrerPolicy: l.referrerPolicy,
                    }),
                    rl.set(t, u)),
                  Ny(n, t, u, i.state))),
            e && a === null)
          )
            throw Error(o(528, ""));
          return i;
        }
        if (e && a !== null) throw Error(o(529, ""));
        return null;
      case "script":
        return (
          (e = l.async),
          (l = l.src),
          typeof l == "string" &&
          e &&
          typeof e != "function" &&
          typeof e != "symbol"
            ? ((l = Yn(l)),
              (e = tn(n).hoistableScripts),
              (a = e.get(l)),
              a ||
                ((a = {
                  type: "script",
                  instance: null,
                  count: 0,
                  state: null,
                }),
                e.set(l, a)),
              a)
            : { type: "void", instance: null, count: 0, state: null }
        );
      default:
        throw Error(o(444, t));
    }
  }
  function qn(t) {
    return 'href="' + ll(t) + '"';
  }
  function Ou(t) {
    return 'link[rel="stylesheet"][' + t + "]";
  }
  function nm(t) {
    return $({}, t, { "data-precedence": t.precedence, precedence: null });
  }
  function Ny(t, e, l, a) {
    if ((e = t.querySelector('link[rel="preload"][as="style"][' + e + "]"))) {
      if (e[Qu] !== !0) {
        a.loading = 1;
        return;
      }
    } else
      ((e = t.createElement("link")),
        (e[Qu] = !0),
        (e.onload = e.onerror = mr.bind(null, e)),
        je(e, "link", l),
        ve(e),
        t.head.appendChild(e));
    ((a.preload = e),
      e.addEventListener("load", function () {
        return (a.loading |= 1);
      }),
      e.addEventListener("error", function () {
        return (a.loading |= 2);
      }));
  }
  function Yn(t) {
    return '[src="' + ll(t) + '"]';
  }
  function Au(t) {
    return "script[async]" + t;
  }
  function um(t, e, l) {
    if ((e.count++, e.instance === null))
      switch (e.type) {
        case "style":
          var a = t.querySelector('style[data-href~="' + ll(l.href) + '"]');
          if (a) return ((e.instance = a), ve(a), a);
          var n = $({}, l, {
            "data-href": l.href,
            "data-precedence": l.precedence,
            href: null,
            precedence: null,
          });
          return (
            (a = (t.ownerDocument || t).createElement("style")),
            ve(a),
            je(a, "style", n),
            ec(a, l.precedence, t),
            (e.instance = a)
          );
        case "stylesheet":
          n = qn(l.href);
          var u = t.querySelector(Ou(n));
          if (u) return ((e.state.loading |= 4), (e.instance = u), ve(u), u);
          ((a = nm(l)),
            (n = rl.get(n)) && qf(a, n),
            (u = (t.ownerDocument || t).createElement("link")),
            ve(u));
          var i = u;
          return (
            (i._p = new Promise(function (s, f) {
              ((i.onload = s), (i.onerror = f));
            })),
            je(u, "link", a),
            (e.state.loading |= 4),
            ec(u, l.precedence, t),
            (e.instance = u)
          );
        case "script":
          return (
            (u = Yn(l.src)),
            (n = t.querySelector(Au(u)))
              ? ((e.instance = n), ve(n), n)
              : ((a = l),
                (n = rl.get(u)) && ((a = $({}, l)), Yf(a, n)),
                (t = t.ownerDocument || t),
                (n = t.createElement("script")),
                ve(n),
                je(n, "link", a),
                t.head.appendChild(n),
                (e.instance = n))
          );
        case "void":
          return null;
        default:
          throw Error(o(443, e.type));
      }
    else
      e.type === "stylesheet" &&
        (e.state.loading & 4) === 0 &&
        ((a = e.instance), (e.state.loading |= 4), ec(a, l.precedence, t));
    return e.instance;
  }
  function ec(t, e, l) {
    for (
      var a = l.querySelectorAll(
          'link[rel="stylesheet"][data-precedence],style[data-precedence]',
        ),
        n = a.length ? a[a.length - 1] : null,
        u = n,
        i = 0;
      i < a.length;
      i++
    ) {
      var s = a[i];
      if (s.dataset.precedence === e) u = s;
      else if (u !== n) break;
    }
    u
      ? u.parentNode.insertBefore(t, u.nextSibling)
      : ((e = l.nodeType === 9 ? l.head : l), e.insertBefore(t, e.firstChild));
  }
  function qf(t, e) {
    (t.crossOrigin == null && (t.crossOrigin = e.crossOrigin),
      t.referrerPolicy == null && (t.referrerPolicy = e.referrerPolicy),
      t.title == null && (t.title = e.title));
  }
  function Yf(t, e) {
    (t.crossOrigin == null && (t.crossOrigin = e.crossOrigin),
      t.referrerPolicy == null && (t.referrerPolicy = e.referrerPolicy),
      t.integrity == null && (t.integrity = e.integrity));
  }
  var lc = null;
  function im(t, e, l) {
    if (lc === null) {
      var a = new Map(),
        n = (lc = new Map());
      n.set(l, a);
    } else ((n = lc), (a = n.get(l)), a || ((a = new Map()), n.set(l, a)));
    if (a.has(t)) return a;
    for (
      a.set(t, null), l = l.getElementsByTagName(t), n = 0;
      n < l.length;
      n++
    ) {
      var u = l[n];
      if (
        !(
          u[Zn] ||
          u[be] ||
          (t === "link" && u.getAttribute("rel") === "stylesheet")
        ) &&
        u.namespaceURI !== "http://www.w3.org/2000/svg"
      ) {
        var i = u.getAttribute(e) || "";
        i = t + i;
        var s = a.get(i);
        s ? s.push(u) : a.set(i, [u]);
      }
    }
    return a;
  }
  function Bf(t, e, l) {
    ((t = t.ownerDocument || t),
      t.head.insertBefore(
        l,
        e === "title" ? t.querySelector("head > title") : null,
      ));
  }
  function _y(t, e, l) {
    if (l === 1 || e.itemProp != null) return !1;
    switch (t) {
      case "meta":
      case "title":
        return !0;
      case "style":
        if (
          typeof e.precedence != "string" ||
          typeof e.href != "string" ||
          e.href === ""
        )
          break;
        return !0;
      case "link":
        if (
          typeof e.rel != "string" ||
          typeof e.href != "string" ||
          e.href === "" ||
          e.onLoad ||
          e.onError
        )
          break;
        return e.rel === "stylesheet"
          ? ((t = e.disabled), typeof e.precedence == "string" && t == null)
          : !0;
      case "script":
        if (
          e.async &&
          typeof e.async != "function" &&
          typeof e.async != "symbol" &&
          !e.onLoad &&
          !e.onError &&
          e.src &&
          typeof e.src == "string"
        )
          return !0;
    }
    return !1;
  }
  function cm(t, e) {
    return (
      t === "img" &&
      e.src != null &&
      e.src !== "" &&
      e.onLoad == null &&
      e.loading !== "lazy"
    );
  }
  function sm(t) {
    return !(t.type === "stylesheet" && (t.state.loading & 3) === 0);
  }
  function fm(t) {
    return (
      (t.width || 100) *
      (t.height || 100) *
      (typeof devicePixelRatio == "number" ? devicePixelRatio : 1) *
      0.25
    );
  }
  function rm(t, e) {
    typeof e.decode == "function" &&
      (t.imgCount++,
      e.complete || ((t.imgBytes += fm(e)), t.suspenseyImages.push(e)),
      (t = Oy.bind(t)),
      e.decode().then(t, t));
  }
  function zy(t, e, l, a) {
    if (
      l.type === "stylesheet" &&
      (typeof a.media != "string" || matchMedia(a.media).matches !== !1) &&
      (l.state.loading & 4) === 0
    ) {
      if (l.instance === null) {
        var n = qn(a.href),
          u = e.querySelector(Ou(n));
        if (u) {
          ((e = u._p),
            e !== null &&
              typeof e == "object" &&
              typeof e.then == "function" &&
              (t.count++, (t = Du.bind(t)), e.then(t, t)),
            (l.state.loading |= 4),
            (l.instance = u),
            ve(u));
          return;
        }
        ((u = e.ownerDocument || e),
          (a = nm(a)),
          (n = rl.get(n)) && qf(a, n),
          (u = u.createElement("link")),
          ve(u));
        var i = u;
        ((i._p = new Promise(function (s, f) {
          ((i.onload = s), (i.onerror = f));
        })),
          je(u, "link", a),
          (l.instance = u));
      }
      (t.stylesheets === null && (t.stylesheets = new Map()),
        t.stylesheets.set(l, e),
        (e = l.state.preload) &&
          (l.state.loading & 3) === 0 &&
          (t.count++,
          (l = Du.bind(t)),
          e.addEventListener("load", l),
          e.addEventListener("error", l)));
    }
  }
  var ac = 0;
  function Cy(t, e) {
    return (
      t.stylesheets && t.count === 0 && uc(t, t.stylesheets),
      0 < t.count || 0 < t.imgCount
        ? function (l) {
            var a = setTimeout(function () {
              if ((t.stylesheets && uc(t, t.stylesheets), t.unsuspend)) {
                var u = t.unsuspend;
                ((t.unsuspend = null), u());
              }
            }, 6e4 + e);
            0 < t.imgBytes && ac === 0 && (ac = 62500 * Kv());
            var n = setTimeout(
              function () {
                if (
                  ((t.waitingForImages = !1),
                  t.count === 0 &&
                    (t.stylesheets && uc(t, t.stylesheets), t.unsuspend))
                ) {
                  var u = t.unsuspend;
                  ((t.unsuspend = null), u());
                }
              },
              (t.imgBytes > ac ? 50 : 800) + e,
            );
            return (
              (t.unsuspend = l),
              function () {
                ((t.unsuspend = null), clearTimeout(a), clearTimeout(n));
              }
            );
          }
        : null
    );
  }
  function om(t) {
    if (t.count === 0 && (t.imgCount === 0 || !t.waitingForImages)) {
      if (t.stylesheets) uc(t, t.stylesheets);
      else if (t.unsuspend) {
        var e = t.unsuspend;
        ((t.unsuspend = null), e());
      }
    }
  }
  function Du() {
    (this.count--, om(this));
  }
  function Oy() {
    (this.imgCount--, om(this));
  }
  var nc = null;
  function uc(t, e) {
    ((t.stylesheets = null),
      t.unsuspend !== null &&
        (t.count++,
        (nc = new Map()),
        e.forEach(Ay, t),
        (nc = null),
        Du.call(t)));
  }
  function Ay(t, e) {
    if (!(e.state.loading & 4)) {
      var l = nc.get(t);
      if (l) var a = l.get(null);
      else {
        ((l = new Map()), nc.set(t, l));
        for (
          var n = t.querySelectorAll(
              "link[data-precedence],style[data-precedence]",
            ),
            u = 0;
          u < n.length;
          u++
        ) {
          var i = n[u];
          (i.nodeName === "LINK" || i.getAttribute("media") !== "not all") &&
            (l.set(i.dataset.precedence, i), (a = i));
        }
        a && l.set(null, a);
      }
      ((n = e.instance),
        (i = n.getAttribute("data-precedence")),
        (u = l.get(i) || a),
        u === a && l.set(null, n),
        l.set(i, n),
        this.count++,
        (a = Du.bind(this)),
        n.addEventListener("load", a),
        n.addEventListener("error", a),
        u
          ? u.parentNode.insertBefore(n, u.nextSibling)
          : ((t = t.nodeType === 9 ? t.head : t),
            t.insertBefore(n, t.firstChild)),
        (e.state.loading |= 4));
    }
  }
  var Bn = {
    $$typeof: nt,
    Provider: null,
    Consumer: null,
    _currentValue: Yt,
    _currentValue2: Yt,
    _threadCount: 0,
  };
  function Dy(t, e, l, a, n, u, i, s, f) {
    ((this.tag = 1),
      (this.containerInfo = t),
      (this.pingCache = this.current = this.pendingChildren = null),
      (this.timeoutHandle = -1),
      (this.callbackNode =
        this.next =
        this.pendingContext =
        this.context =
        this.cancelPendingCommit =
          null),
      (this.callbackPriority = 0),
      (this.expirationTimes = pc(-1)),
      (this.entangledLanes =
        this.shellSuspendCounter =
        this.errorRecoveryDisabledLanes =
        this.expiredLanes =
        this.warmLanes =
        this.pingedLanes =
        this.suspendedLanes =
        this.pendingLanes =
          0),
      (this.entanglements = pc(0)),
      (this.hiddenUpdates = pc(null)),
      (this.identifierPrefix = a),
      (this.onUncaughtError = n),
      (this.onCaughtError = u),
      (this.onRecoverableError = i),
      (this.pooledCache = null),
      (this.pooledCacheLanes = 0),
      (this.formState = f),
      (this.transitionTypes = null),
      (this.incompleteTransitions = new Map()));
  }
  function dm(t, e, l, a, n, u, i, s, f, b, _, M) {
    return (
      (t = new Dy(t, e, l, i, f, b, _, M, s)),
      (e = 1),
      u === !0 && (e |= 24),
      (u = Be(3, null, null, e)),
      (t.current = u),
      (u.stateNode = t),
      (e = Pc()),
      e.refCount++,
      (t.pooledCache = e),
      e.refCount++,
      (u.memoizedState = { element: a, isDehydrated: l, cache: e }),
      as(u),
      t
    );
  }
  function hm(t) {
    return t ? ((t = on), t) : on;
  }
  function mm(t, e, l, a, n, u) {
    ((n = hm(n)),
      a.context === null ? (a.context = n) : (a.pendingContext = n),
      (a = ia(e)),
      (a.payload = { element: l }),
      (u = u === void 0 ? null : u),
      u !== null && (a.callback = u),
      (l = ca(t, a, e)),
      l !== null && (Xe(l, t, e), su(l, t, e)));
  }
  function vm(t, e) {
    if (((t = t.memoizedState), t !== null && t.dehydrated !== null)) {
      var l = t.retryLane;
      t.retryLane = l !== 0 && l < e ? l : e;
    }
  }
  function Gf(t, e) {
    (vm(t, e), (t = t.alternate) && vm(t, e));
  }
  function ym(t) {
    if (t.tag === 13 || t.tag === 31) {
      var e = Ma(t, 67108864);
      (e !== null && Xe(e, t, 67108864), Gf(t, 67108864));
    }
  }
  function gm(t) {
    if (t.tag === 13 || t.tag === 31) {
      var e = Pe();
      e = bc(e);
      var l = Ma(t, e);
      (l !== null && Xe(l, t, e), Gf(t, e));
    }
  }
  var Gn = !0;
  function My(t, e, l, a) {
    var n = U.T;
    U.T = null;
    var u = P.p;
    try {
      ((P.p = 2), Lf(t, e, l, a));
    } finally {
      ((P.p = u), (U.T = n));
    }
  }
  function Ry(t, e, l, a) {
    var n = U.T;
    U.T = null;
    var u = P.p;
    try {
      ((P.p = 8), Lf(t, e, l, a));
    } finally {
      ((P.p = u), (U.T = n));
    }
  }
  function Lf(t, e, l, a) {
    if (Gn) {
      var n = Vf(a);
      if (n === null) (Tf(t, e, a, ic, l), bm(t, a));
      else if (Hy(n, t, e, l, a)) a.stopPropagation();
      else if ((bm(t, a), e & 4 && -1 < Uy.indexOf(t))) {
        for (; n !== null;) {
          var u = Pa(n);
          if (u !== null)
            switch (u.tag) {
              case 3:
                if (((u = u.stateNode), u.current.memoizedState.isDehydrated)) {
                  var i = za(u.pendingLanes);
                  if (i !== 0) {
                    var s = u;
                    for (s.pendingLanes |= 2, s.entangledLanes |= 2; i;) {
                      var f = 1 << (31 - Ke(i));
                      ((s.entanglements[1] |= f), (i &= ~f));
                    }
                    (Cl(u), (Lt & 6) === 0 && ((Zi = ue() + 500), ju(0)));
                  }
                }
                break;
              case 31:
              case 13:
                ((s = Ma(u, 2)), s !== null && Xe(s, u, 2), Ji(), Gf(u, 2));
            }
          if (((u = Vf(a)), u === null && Tf(t, e, a, ic, l), u === n)) break;
          n = u;
        }
        n !== null && a.stopPropagation();
      } else Tf(t, e, a, null, l);
    }
  }
  function Vf(t) {
    return ((t = _c(t)), Xf(t));
  }
  var ic = null;
  function Xf(t) {
    if (((ic = null), (t = Ca(t)), t !== null)) {
      var e = Z(t);
      if (e === null) t = null;
      else {
        var l = e.tag;
        if (l === 13) {
          if (((t = rt(e)), t !== null)) return t;
          t = null;
        } else if (l === 31) {
          if (((t = mt(e)), t !== null)) return t;
          t = null;
        } else if (l === 3) {
          if (e.stateNode.current.memoizedState.isDehydrated)
            return e.tag === 3 ? e.stateNode.containerInfo : null;
          t = null;
        } else e !== t && (t = null);
      }
    }
    return ((ic = t), null);
  }
  function pm(t) {
    switch (t) {
      case "beforetoggle":
      case "cancel":
      case "click":
      case "close":
      case "contextmenu":
      case "copy":
      case "cut":
      case "auxclick":
      case "dblclick":
      case "dragend":
      case "dragstart":
      case "drop":
      case "focusin":
      case "focusout":
      case "input":
      case "invalid":
      case "keydown":
      case "keypress":
      case "keyup":
      case "mousedown":
      case "mouseup":
      case "paste":
      case "pause":
      case "play":
      case "pointercancel":
      case "pointerdown":
      case "pointerup":
      case "ratechange":
      case "reset":
      case "seeked":
      case "submit":
      case "toggle":
      case "touchcancel":
      case "touchend":
      case "touchstart":
      case "volumechange":
      case "change":
      case "selectionchange":
      case "textInput":
      case "compositionstart":
      case "compositionend":
      case "compositionupdate":
      case "beforeblur":
      case "afterblur":
      case "beforeinput":
      case "blur":
      case "fullscreenchange":
      case "fullscreenerror":
      case "focus":
      case "hashchange":
      case "popstate":
      case "select":
      case "selectstart":
        return 2;
      case "drag":
      case "dragenter":
      case "dragexit":
      case "dragleave":
      case "dragover":
      case "mousemove":
      case "mouseout":
      case "mouseover":
      case "pointermove":
      case "pointerout":
      case "pointerover":
      case "resize":
      case "scroll":
      case "touchmove":
      case "wheel":
      case "mouseenter":
      case "mouseleave":
      case "pointerenter":
      case "pointerleave":
        return 8;
      case "message":
        switch (Oe()) {
          case Jl:
            return 2;
          case $l:
            return 8;
          case Fa:
          case yc:
            return 32;
          case Ia:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var Qf = !1,
    ba = null,
    Sa = null,
    xa = null,
    Mu = new Map(),
    Ru = new Map(),
    Ta = [],
    Uy =
      "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
        " ",
      );
  function bm(t, e) {
    switch (t) {
      case "focusin":
      case "focusout":
        ba = null;
        break;
      case "dragenter":
      case "dragleave":
        Sa = null;
        break;
      case "mouseover":
      case "mouseout":
        xa = null;
        break;
      case "pointerover":
      case "pointerout":
        Mu.delete(e.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        Ru.delete(e.pointerId);
    }
  }
  function Uu(t, e, l, a, n, u) {
    return t === null || t.nativeEvent !== u
      ? ((t = {
          blockedOn: e,
          domEventName: l,
          eventSystemFlags: a,
          nativeEvent: u,
          targetContainers: [n],
        }),
        e !== null && ((e = Pa(e)), e !== null && ym(e)),
        t)
      : ((t.eventSystemFlags |= a),
        (e = t.targetContainers),
        n !== null && e.indexOf(n) === -1 && e.push(n),
        t);
  }
  function Hy(t, e, l, a, n) {
    switch (e) {
      case "focusin":
        return ((ba = Uu(ba, t, e, l, a, n)), !0);
      case "dragenter":
        return ((Sa = Uu(Sa, t, e, l, a, n)), !0);
      case "mouseover":
        return ((xa = Uu(xa, t, e, l, a, n)), !0);
      case "pointerover":
        var u = n.pointerId;
        return (Mu.set(u, Uu(Mu.get(u) || null, t, e, l, a, n)), !0);
      case "gotpointercapture":
        return (
          (u = n.pointerId),
          Ru.set(u, Uu(Ru.get(u) || null, t, e, l, a, n)),
          !0
        );
    }
    return !1;
  }
  function Sm(t) {
    var e = Ca(t.target);
    if (e !== null) {
      var l = Z(e);
      if (l !== null) {
        if (((e = l.tag), e === 13)) {
          if (((e = rt(l)), e !== null)) {
            ((t.blockedOn = e),
              or(t.priority, function () {
                gm(l);
              }));
            return;
          }
        } else if (e === 31) {
          if (((e = mt(l)), e !== null)) {
            ((t.blockedOn = e),
              or(t.priority, function () {
                gm(l);
              }));
            return;
          }
        } else if (e === 3 && l.stateNode.current.memoizedState.isDehydrated) {
          t.blockedOn = l.tag === 3 ? l.stateNode.containerInfo : null;
          return;
        }
      }
    }
    t.blockedOn = null;
  }
  function cc(t) {
    if (t.blockedOn !== null) return !1;
    for (var e = t.targetContainers; 0 < e.length;) {
      var l = Vf(t.nativeEvent);
      if (l === null) {
        l = t.nativeEvent;
        var a = new l.constructor(l.type, l);
        ((Nc = a), l.target.dispatchEvent(a), (Nc = null));
      } else return ((e = Pa(l)), e !== null && ym(e), (t.blockedOn = l), !1);
      e.shift();
    }
    return !0;
  }
  function xm(t, e, l) {
    cc(t) && l.delete(e);
  }
  function wy() {
    ((Qf = !1),
      ba !== null && cc(ba) && (ba = null),
      Sa !== null && cc(Sa) && (Sa = null),
      xa !== null && cc(xa) && (xa = null),
      Mu.forEach(xm),
      Ru.forEach(xm));
  }
  function sc(t, e) {
    t.blockedOn === e &&
      ((t.blockedOn = null),
      Qf ||
        ((Qf = !0),
        S.unstable_scheduleCallback(S.unstable_NormalPriority, wy)));
  }
  var fc = null;
  function Tm(t) {
    fc !== t &&
      ((fc = t),
      S.unstable_scheduleCallback(S.unstable_NormalPriority, function () {
        fc === t && (fc = null);
        for (var e = 0; e < t.length; e += 3) {
          var l = t[e],
            a = t[e + 1],
            n = t[e + 2];
          if (typeof a != "function") {
            if (Xf(a || l) === null) continue;
            break;
          }
          var u = Pa(l);
          u !== null &&
            (t.splice(e, 3),
            (e -= 3),
            js(u, { pending: !0, data: n, method: l.method, action: a }, a, n));
        }
      }));
  }
  function Ln(t) {
    function e(f) {
      return sc(f, t);
    }
    (ba !== null && sc(ba, t),
      Sa !== null && sc(Sa, t),
      xa !== null && sc(xa, t),
      Mu.forEach(e),
      Ru.forEach(e));
    for (var l = 0; l < Ta.length; l++) {
      var a = Ta[l];
      a.blockedOn === t && (a.blockedOn = null);
    }
    for (; 0 < Ta.length && ((l = Ta[0]), l.blockedOn === null);)
      (Sm(l), l.blockedOn === null && Ta.shift());
    if (((l = (t.ownerDocument || t).$$reactFormReplay), l != null))
      for (a = 0; a < l.length; a += 3) {
        var n = l[a],
          u = l[a + 1],
          i = n[Ye] || null;
        if (typeof u == "function") i || Tm(l);
        else if (i) {
          var s = null;
          if (u && u.hasAttribute("formAction")) {
            if (((n = u), (i = u[Ye] || null))) s = i.formAction;
            else if (Xf(n) !== null) continue;
          } else s = i.action;
          (typeof s == "function" ? (l[a + 1] = s) : (l.splice(a, 3), (a -= 3)),
            Tm(l));
        }
      }
  }
  function Em() {
    function t(u) {
      u.canIntercept &&
        u.info === "react-transition" &&
        u.intercept({
          handler: function () {
            return new Promise(function (i) {
              return (n = i);
            });
          },
          focusReset: "manual",
          scroll: "manual",
        });
    }
    function e() {
      (n !== null && (n(), (n = null)), a || setTimeout(l, 20));
    }
    function l() {
      if (!a && !navigation.transition) {
        var u = navigation.currentEntry;
        u &&
          u.url != null &&
          navigation.navigate(u.url, {
            state: u.getState(),
            info: "react-transition",
            history: "replace",
          });
      }
    }
    if (typeof navigation == "object") {
      var a = !1,
        n = null;
      return (
        navigation.addEventListener("navigate", t),
        navigation.addEventListener("navigatesuccess", e),
        navigation.addEventListener("navigateerror", e),
        setTimeout(l, 100),
        function () {
          ((a = !0),
            navigation.removeEventListener("navigate", t),
            navigation.removeEventListener("navigatesuccess", e),
            navigation.removeEventListener("navigateerror", e),
            n !== null && (n(), (n = null)));
        }
      );
    }
  }
  function Zf(t) {
    this._internalRoot = t;
  }
  ((rc.prototype.render = Zf.prototype.render =
    function (t) {
      var e = this._internalRoot;
      if (e === null) throw Error(o(409));
      var l = e.current,
        a = Pe();
      mm(l, a, t, e, null, null);
    }),
    (rc.prototype.unmount = Zf.prototype.unmount =
      function () {
        var t = this._internalRoot;
        if (t !== null) {
          this._internalRoot = null;
          var e = t.containerInfo;
          (mm(t.current, 2, null, t, null, null), Ji(), (e[Wa] = null));
        }
      }));
  function rc(t) {
    this._internalRoot = t;
  }
  rc.prototype.unstable_scheduleHydration = function (t) {
    if (t) {
      var e = rr();
      t = { blockedOn: null, target: t, priority: e };
      for (var l = 0; l < Ta.length && e !== 0 && e < Ta[l].priority; l++);
      (Ta.splice(l, 0, t), l === 0 && Sm(t));
    }
  };
  var jm = R.version;
  if (jm !== "19.3.1") throw Error(o(527, jm, "19.3.1"));
  P.findDOMNode = function (t) {
    var e = t._reactInternals;
    if (e === void 0)
      throw typeof t.render == "function"
        ? Error(o(188))
        : ((t = Object.keys(t).join(",")), Error(o(268, t)));
    return (
      (t = gt(e)),
      (t = t !== null ? X(t) : null),
      (t = t === null ? null : t.stateNode),
      t
    );
  };
  var qy = {
    bundleType: 0,
    version: "19.3.1",
    rendererPackageName: "react-dom",
    currentDispatcherRef: U,
    reconcilerVersion: "19.3.1",
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var oc = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!oc.isDisabled && oc.supportsFiber)
      try {
        ((Fl = oc.inject(qy)), (Me = oc));
      } catch {}
  }
  return (
    (wu.createRoot = function (t, e) {
      if (!Q(t)) throw Error(o(299));
      var l = !1,
        a = "",
        n = hd,
        u = md,
        i = vd;
      return (
        e != null &&
          (e.unstable_strictMode === !0 && (l = !0),
          e.identifierPrefix !== void 0 && (a = e.identifierPrefix),
          e.onUncaughtError !== void 0 && (n = e.onUncaughtError),
          e.onCaughtError !== void 0 && (u = e.onCaughtError),
          e.onRecoverableError !== void 0 && (i = e.onRecoverableError)),
        (e = dm(t, 1, !1, null, null, l, a, null, n, u, i, Em)),
        (t[Wa] = e.current),
        xf(t),
        new Zf(e)
      );
    }),
    (wu.hydrateRoot = function (t, e, l) {
      if (!Q(t)) throw Error(o(299));
      var a = !1,
        n = "",
        u = hd,
        i = md,
        s = vd,
        f = null;
      return (
        l != null &&
          (l.unstable_strictMode === !0 && (a = !0),
          l.identifierPrefix !== void 0 && (n = l.identifierPrefix),
          l.onUncaughtError !== void 0 && (u = l.onUncaughtError),
          l.onCaughtError !== void 0 && (i = l.onCaughtError),
          l.onRecoverableError !== void 0 && (s = l.onRecoverableError),
          l.formState !== void 0 && (f = l.formState)),
        (e = dm(t, 1, !0, e, l ?? null, a, n, f, u, i, s, Em)),
        (e.context = hm(null)),
        (l = e.current),
        (a = Pe()),
        (a = bc(a)),
        (n = ia(a)),
        (n.callback = null),
        ca(l, n, a),
        (l = a),
        (e.current.lanes = l),
        Qn(e, l),
        Cl(e),
        (t[Wa] = e.current),
        xf(t),
        new rc(e)
      );
    }),
    (wu.version = "19.3.1"),
    wu
  );
}
var Um;
function ky() {
  if (Um) return kf.exports;
  Um = 1;
  function S() {
    if (!(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
    ))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(S);
      } catch (R) {
        console.error(R);
      }
  }
  return (S(), (kf.exports = Ky()), kf.exports);
}
var Jy = ky(),
  J = nr();
const $y = (S) => S.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(),
  Jm = (...S) =>
    S.filter((R, z, o) => !!R && R.trim() !== "" && o.indexOf(R) === z)
      .join(" ")
      .trim();
var Fy = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};
const Iy = J.forwardRef(
  (
    {
      color: S = "currentColor",
      size: R = 24,
      strokeWidth: z = 2,
      absoluteStrokeWidth: o,
      className: Q = "",
      children: Z,
      iconNode: rt,
      ...mt
    },
    V,
  ) =>
    J.createElement(
      "svg",
      {
        ref: V,
        ...Fy,
        width: R,
        height: R,
        stroke: S,
        strokeWidth: o ? (Number(z) * 24) / Number(R) : z,
        className: Jm("lucide", Q),
        ...mt,
      },
      [
        ...rt.map(([gt, X]) => J.createElement(gt, X)),
        ...(Array.isArray(Z) ? Z : [Z]),
      ],
    ),
);
const kt = (S, R) => {
  const z = J.forwardRef(({ className: o, ...Q }, Z) =>
    J.createElement(Iy, {
      ref: Z,
      iconNode: R,
      className: Jm(`lucide-${$y(S)}`, o),
      ...Q,
    }),
  );
  return ((z.displayName = `${S}`), z);
};
const mc = kt("Armchair", [
  ["path", { d: "M19 9V6a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v3", key: "irtipd" }],
  [
    "path",
    {
      d: "M3 16a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-5a2 2 0 0 0-4 0v1.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V11a2 2 0 0 0-4 0z",
      key: "1qyhux",
    },
  ],
  ["path", { d: "M5 18v2", key: "ppbyun" }],
  ["path", { d: "M19 18v2", key: "gy7782" }],
]);
const Vn = kt("ArrowRight", [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "m12 5 7 7-7 7", key: "xquz4c" }],
]);
const Wy = kt("CheckCheck", [
  ["path", { d: "M18 6 7 17l-5-5", key: "116fxf" }],
  ["path", { d: "m22 10-7.5 7.5L13 16", key: "ke71qq" }],
]);
const qu = kt("Check", [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]]);
const Py = kt("ChevronDown", [["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]]);
const tg = kt("ChevronRight", [
  ["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }],
]);
const eg = kt("CircleCheck", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "m9 12 2 2 4-4", key: "dzmm74" }],
]);
const lg = kt("CircleHelp", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3", key: "1u773s" }],
  ["path", { d: "M12 17h.01", key: "p32p05" }],
]);
const ag = kt("Copy", [
  [
    "rect",
    {
      width: "14",
      height: "14",
      x: "8",
      y: "8",
      rx: "2",
      ry: "2",
      key: "17jyea",
    },
  ],
  [
    "path",
    {
      d: "M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",
      key: "zix9uf",
    },
  ],
]);
const Hm = kt("Download", [
  ["path", { d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4", key: "ih7n3h" }],
  ["polyline", { points: "7 10 12 15 17 10", key: "2ggqvy" }],
  ["line", { x1: "12", x2: "12", y1: "15", y2: "3", key: "1vk2je" }],
]);
const wm = kt("FileSpreadsheet", [
  [
    "path",
    {
      d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",
      key: "1rqfz7",
    },
  ],
  ["path", { d: "M14 2v4a2 2 0 0 0 2 2h4", key: "tnqrlb" }],
  ["path", { d: "M8 13h2", key: "yr2amv" }],
  ["path", { d: "M14 13h2", key: "un5t4a" }],
  ["path", { d: "M8 17h2", key: "2yhykz" }],
  ["path", { d: "M14 17h2", key: "10kma7" }],
]);
const dc = kt("Flower2", [
  [
    "path",
    {
      d: "M12 5a3 3 0 1 1 3 3m-3-3a3 3 0 1 0-3 3m3-3v1M9 8a3 3 0 1 0 3 3M9 8h1m5 0a3 3 0 1 1-3 3m3-3h-1m-2 3v-1",
      key: "3pnvol",
    },
  ],
  ["circle", { cx: "12", cy: "8", r: "2", key: "1822b1" }],
  ["path", { d: "M12 10v12", key: "6ubwww" }],
  ["path", { d: "M12 22c4.2 0 7-1.667 7-5-4.2 0-7 1.667-7 5Z", key: "9hd38g" }],
  [
    "path",
    { d: "M12 22c-4.2 0-7-1.667-7-5 4.2 0 7 1.667 7 5Z", key: "ufn41s" },
  ],
]);
const ng = kt("GripVertical", [
  ["circle", { cx: "9", cy: "12", r: "1", key: "1vctgf" }],
  ["circle", { cx: "9", cy: "5", r: "1", key: "hp0tcf" }],
  ["circle", { cx: "9", cy: "19", r: "1", key: "fkjjf6" }],
  ["circle", { cx: "15", cy: "12", r: "1", key: "1tmaij" }],
  ["circle", { cx: "15", cy: "5", r: "1", key: "19l28e" }],
  ["circle", { cx: "15", cy: "19", r: "1", key: "f4zoj3" }],
]);
const Wf = kt("Heart", [
  [
    "path",
    {
      d: "M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z",
      key: "c3ymky",
    },
  ],
]);
const qm = kt("LayoutGrid", [
  ["rect", { width: "7", height: "7", x: "3", y: "3", rx: "1", key: "1g98yp" }],
  [
    "rect",
    { width: "7", height: "7", x: "14", y: "3", rx: "1", key: "6d4xhi" },
  ],
  [
    "rect",
    { width: "7", height: "7", x: "14", y: "14", rx: "1", key: "nxv5o0" },
  ],
  [
    "rect",
    { width: "7", height: "7", x: "3", y: "14", rx: "1", key: "1bb6yr" },
  ],
]);
const ug = kt("List", [
  ["path", { d: "M3 12h.01", key: "nlz23k" }],
  ["path", { d: "M3 18h.01", key: "1tta3j" }],
  ["path", { d: "M3 6h.01", key: "1rqtza" }],
  ["path", { d: "M8 12h13", key: "1za7za" }],
  ["path", { d: "M8 18h13", key: "1lx6n3" }],
  ["path", { d: "M8 6h13", key: "ik3vkj" }],
]);
const ig = kt("LoaderCircle", [
  ["path", { d: "M21 12a9 9 0 1 1-6.219-8.56", key: "13zald" }],
]);
const Ym = kt("Minus", [["path", { d: "M5 12h14", key: "1ays0h" }]]);
const Bm = kt("MousePointer2", [
  [
    "path",
    {
      d: "M4.037 4.688a.495.495 0 0 1 .651-.651l16 6.5a.5.5 0 0 1-.063.947l-6.124 1.58a2 2 0 0 0-1.438 1.435l-1.579 6.126a.5.5 0 0 1-.947.063z",
      key: "edeuup",
    },
  ],
]);
const ja = kt("Plus", [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "M12 5v14", key: "s699le" }],
]);
const er = kt("RefreshCw", [
  [
    "path",
    { d: "M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8", key: "v9h5vc" },
  ],
  ["path", { d: "M21 3v5h-5", key: "1q7to0" }],
  [
    "path",
    { d: "M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16", key: "3uifl3" },
  ],
  ["path", { d: "M8 16H3v5", key: "1cv678" }],
]);
const Gm = kt("Search", [
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }],
  ["path", { d: "m21 21-4.3-4.3", key: "1qie3q" }],
]);
const cg = kt("Share2", [
  ["circle", { cx: "18", cy: "5", r: "3", key: "gq8acd" }],
  ["circle", { cx: "6", cy: "12", r: "3", key: "w7nqdw" }],
  ["circle", { cx: "18", cy: "19", r: "3", key: "1xt0gg" }],
  [
    "line",
    { x1: "8.59", x2: "15.42", y1: "13.51", y2: "17.49", key: "47mynk" },
  ],
  ["line", { x1: "15.41", x2: "8.59", y1: "6.51", y2: "10.49", key: "1n3mei" }],
]);
const Yu = kt("ShieldCheck", [
  [
    "path",
    {
      d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",
      key: "oel41y",
    },
  ],
  ["path", { d: "m9 12 2 2 4-4", key: "dzmm74" }],
]);
const lr = kt("Trash2", [
  ["path", { d: "M3 6h18", key: "d0wm0j" }],
  ["path", { d: "M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6", key: "4alrt4" }],
  ["path", { d: "M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2", key: "v07s0e" }],
  ["line", { x1: "10", x2: "10", y1: "11", y2: "17", key: "1uufr5" }],
  ["line", { x1: "14", x2: "14", y1: "11", y2: "17", key: "xtxkd" }],
]);
const ar = kt("Upload", [
  ["path", { d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4", key: "ih7n3h" }],
  ["polyline", { points: "17 8 12 3 7 8", key: "t8dd8p" }],
  ["line", { x1: "12", x2: "12", y1: "3", y2: "15", key: "widbto" }],
]);
const sg = kt("UserRoundCheck", [
  ["path", { d: "M2 21a8 8 0 0 1 13.292-6", key: "bjp14o" }],
  ["circle", { cx: "10", cy: "8", r: "5", key: "o932ke" }],
  ["path", { d: "m16 19 2 2 4-4", key: "1b14m6" }],
]);
const hc = kt("Users", [
  ["path", { d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2", key: "1yyitq" }],
  ["circle", { cx: "9", cy: "7", r: "4", key: "nufk8" }],
  ["path", { d: "M22 21v-2a4 4 0 0 0-3-3.87", key: "kshegd" }],
  ["path", { d: "M16 3.13a4 4 0 0 1 0 7.75", key: "1da9ce" }],
]);
const Na = kt("X", [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }],
]);
async function Ol(S, R = "", z, o) {
  const Q = await fetch(S ? `/api/weddings/${S.id}${R}` : "/api/weddings", {
      method: o || (z === void 0 ? "GET" : "POST"),
      headers: {
        ...(z === void 0 ? {} : { "Content-Type": "application/json" }),
        ...(S ? { Authorization: `Bearer ${S.key}` } : {}),
      },
      ...(z === void 0 ? {} : { body: JSON.stringify(z) }),
    }),
    Z = await Q.json();
  if (!Q.ok) throw new Error(Z.error || "Unable to reach your seating plan.");
  return Z;
}
function fg() {
  const S = location.pathname.match(/^\/w\/([a-f0-9-]+)$/)?.[1],
    R = new URLSearchParams(location.hash.slice(1)).get("key");
  if (S) {
    try {
      const z = JSON.parse(localStorage.getItem(`gather:${S}`) || "null");
      if (R)
        return {
          id: S,
          key: R,
          ...(z?.key === R && z.editorKey ? { editorKey: z.editorKey } : {}),
        };
      if (z?.key) return z;
    } catch {}
    throw new Error(
      "This link is missing its invitation key. Ask the plan owner to send the full private link.",
    );
  }
  try {
    return JSON.parse(localStorage.getItem("gather:last") || "null");
  } catch {
    return null;
  }
}
function Pf(S) {
  try {
    (localStorage.setItem(`gather:${S.id}`, JSON.stringify(S)),
      localStorage.setItem("gather:last", JSON.stringify(S)));
  } catch {}
  history.replaceState(null, "", `/w/${S.id}#key=${S.key}`);
}
function Lm(S, R) {
  return `${location.origin}/w/${S}#key=${R}`;
}
let Vm = 0,
  tr;
function $m(S = !0) {
  J.useEffect(() => {
    if (S) {
      if (Vm++ === 0) {
        const R = document.body,
          z = window.scrollX,
          o = window.scrollY,
          Q = {
            position: R.style.position,
            top: R.style.top,
            left: R.style.left,
            width: R.style.width,
            overflow: R.style.overflow,
          };
        (Object.assign(R.style, {
          position: "fixed",
          top: `${-o}px`,
          left: `${-z}px`,
          width: "100%",
          overflow: "hidden",
        }),
          (tr = () => {
            (Object.assign(R.style, Q), window.scrollTo(z, o));
          }));
      }
      return () => {
        --Vm === 0 && (tr?.(), (tr = void 0));
      };
    }
  }, [S]);
}
function rg() {
  const S = window.visualViewport,
    R = () => {
      (document.documentElement.style.setProperty(
        "--visible-height",
        `${S?.height ?? window.innerHeight}px`,
      ),
        document.documentElement.style.setProperty(
          "--visible-top",
          `${S?.offsetTop ?? 0}px`,
        ));
    };
  (R(),
    S?.addEventListener("resize", R),
    S?.addEventListener("scroll", R),
    window.addEventListener("resize", R));
}
function Al({
  title: S,
  eyebrow: R,
  children: z,
  onClose: o,
  wide: Q = !1,
  className: Z = "",
}) {
  const rt = J.useRef(null);
  return (
    $m(),
    J.useEffect(() => {
      const mt = document.activeElement,
        V = rt.current,
        gt = () =>
          Array.from(
            V?.querySelectorAll(
              'button:not(:disabled),input,select,textarea,a[href],[tabindex="0"]',
            ) || [],
          );
      gt()[0]?.focus();
      const X = (N) => {
        if ((N.key === "Escape" && o(), N.key === "Tab")) {
          const w = gt(),
            dt = w[0],
            ct = w.at(-1);
          N.shiftKey && document.activeElement === dt
            ? (N.preventDefault(), ct?.focus())
            : !N.shiftKey &&
              document.activeElement === ct &&
              (N.preventDefault(), dt?.focus());
        }
      };
      return (
        document.addEventListener("keydown", X),
        () => {
          (document.removeEventListener("keydown", X),
            mt?.focus({ preventScroll: !0 }));
        }
      );
    }, [o]),
    c.jsx("div", {
      className: "modal-backdrop",
      onMouseDown: (mt) => {
        mt.target === mt.currentTarget && o();
      },
      children: c.jsxs("div", {
        ref: rt,
        className: `modal ${Q ? "modal-wide" : ""} ${Z}`,
        role: "dialog",
        "aria-modal": "true",
        "aria-label": S,
        children: [
          c.jsx("button", {
            className: "icon-button modal-close",
            "aria-label": "Close dialog",
            onClick: o,
            children: c.jsx(Na, { size: 19 }),
          }),
          R && c.jsx("div", { className: "eyebrow", children: R }),
          c.jsx("h2", { children: S }),
          z,
        ],
      }),
    })
  );
}
function Xm({
  guest: S,
  selected: R,
  onSelect: z,
  tableName: o,
  onUnseat: Q,
  onDelete: Z,
}) {
  return c.jsxs("div", {
    className: `guest-row ${R ? "selected" : ""}`,
    draggable: !0,
    onDragStart: (rt) => {
      (rt.dataTransfer.setData("text/plain", S.id),
        (rt.dataTransfer.effectAllowed = "move"));
    },
    onDragEnd: (rt) => {
      rt.currentTarget.classList.remove("dragging");
    },
    children: [
      c.jsx(ng, { className: "drag-grip", size: 14 }),
      c.jsxs("button", {
        className: "guest-select",
        onClick: z,
        "aria-pressed": !!R,
        "aria-label": `Select ${S.name}`,
        children: [
          c.jsxs("span", {
            className: "guest-name",
            children: [
              c.jsx("strong", { children: S.name }),
              c.jsx("span", { children: o || "Click for guest details" }),
            ],
          }),
          S.tableId
            ? c.jsx(qu, { size: 14, className: "guest-check" })
            : c.jsx(tg, { size: 13, className: "guest-chevron" }),
        ],
      }),
      Q &&
        c.jsx("button", {
          className: "icon-button unseat",
          "aria-label": `Unseat ${S.name}`,
          onClick: Q,
          children: c.jsx(Na, { size: 14 }),
        }),
      Z &&
        c.jsx("button", {
          className: "icon-button guest-delete",
          draggable: !1,
          "aria-label": `Delete ${S.name}`,
          title: "Delete guest",
          onClick: Z,
          children: c.jsx(lr, { size: 14 }),
        }),
    ],
  });
}
function Qm({ value: S, label: R }) {
  const [z, o] = J.useState(!1),
    [Q, Z] = J.useState(!1),
    rt = J.useRef(null);
  async function mt() {
    try {
      (await navigator.clipboard.writeText(S),
        o(!0),
        setTimeout(() => o(!1), 2500));
    } catch {
      (rt.current?.select(), Z(!0));
    }
  }
  return c.jsxs(c.Fragment, {
    children: [
      c.jsx("label", { className: "field-label", children: R }),
      c.jsxs("div", {
        className: "copy-field",
        children: [
          c.jsx("input", { ref: rt, value: S, readOnly: !0, "aria-label": R }),
          c.jsxs("button", {
            className: "button primary",
            onClick: mt,
            children: [
              z ? c.jsx(qu, { size: 16 }) : c.jsx(ag, { size: 16 }),
              " ",
              z ? "Copied" : "Copy",
            ],
          }),
        ],
      }),
      Q &&
        c.jsx("p", {
          className: "muted",
          children: "The link is selected. Use your device’s Copy command.",
        }),
    ],
  });
}
var Zm = km();
function _a(S) {
  return S.number === 18
    ? "Head table"
    : `Table ${String(S.number).padStart(2, "0")}`;
}
function el(S) {
  return S.name === _a(S) ? "" : S.name;
}
function Qe(S) {
  const R = el(S);
  return R ? `${_a(S)} · ${R}` : _a(S);
}
function og({
  tables: S,
  guests: R,
  selectedGuest: z,
  onTable: o,
  onAssign: Q,
  onGuest: Z,
  onMoveTable: rt,
  zoom: mt,
  floorPlan,
  sizing = "fit",
}) {
  const [V, gt] = J.useState(null),
    [X, N] = J.useState(null),
    [w, dt] = J.useState(null),
    ct = J.useRef(null),
    st = J.useRef(!1),
    vt = J.useRef(null),
    Ut = J.useRef(null),
    [Ht, zt] = J.useState(null);
  const [viewport, setViewport] = J.useState({width:0,height:0});
  const panTimer = J.useRef(null);
  J.useLayoutEffect(() => {
    const container = vt.current?.closest(".board-scroll");
    if(!container)return;
    const measure = () => setViewport(previous => {
      const width=container.clientWidth, height=container.clientHeight;
      return previous.width===width&&previous.height===height ? previous : {width,height};
    });
    const observer=new ResizeObserver(measure);observer.observe(container);measure();
    return () => observer.disconnect();
  }, []);
  function startSeatPan() {
    if(panTimer.current)return;
    panTimer.current=setInterval(() => {
      const active=ct.current,container=vt.current?.closest(".board-scroll");
      if(!active?.active||!container)return;
      const bounds=container.getBoundingClientRect(),px=active.currentX??active.x,py=active.currentY??active.y;
      if(px<bounds.left||px>bounds.right)return;
      const speed=(value,min,max)=>value<min+40?-Math.min(18,Math.ceil((min+40-value)/3)):value>max-40?Math.min(18,Math.ceil((value-max+40)/3)):0;
      const beforeX=container.scrollLeft,beforeY=container.scrollTop;
      container.scrollLeft+=speed(px,bounds.left,bounds.right);container.scrollTop+=speed(py,bounds.top,bounds.bottom);
      if(container.scrollLeft!==beforeX||container.scrollTop!==beforeY)dt({guestId:active.guestId,x:px,y:py,target:y(px,py,active.guestId)});
    },32);
  }
  function qt() {
    const d = Ut.current;
    ((Ut.current = null),
      d?.node.hasPointerCapture(d.pointerId) &&
        d.node.releasePointerCapture(d.pointerId),
      zt(null));
  }
  function te(d, C) {
    d.button !== 0 ||
      !d.isPrimary ||
      d.target.closest(".chair") ||
      ((Ut.current = {
        node: d.currentTarget,
        pointerId: d.pointerId,
        pointerType: d.pointerType,
        table: C,
        startX: d.clientX,
        startY: d.clientY,
        x: C.x,
        y: C.y,
        active: !1,
      }),
      d.currentTarget.setPointerCapture(d.pointerId));
  }
  function Et(d) {
    const C = Ut.current;
    if (
      !C ||
      C.pointerId !== d.pointerId ||
      (!C.active && Math.hypot(d.clientX - C.startX, d.clientY - C.startY) < 6)
    )
      return;
    const k = vt.current?.getScreenCTM();
    if (!k) return;
    ((C.active = !0), (st.current = !0), N(null));
    const G = k.inverse(),
      q = new DOMPoint(C.startX, C.startY).matrixTransform(G),
      L = new DOMPoint(d.clientX, d.clientY).matrixTransform(G),
      r = C.table.number === 18;
    ((C.x = Math.max(
      r ? 185 : 65,
      Math.min(r ? 615 : 735, C.table.x + L.x - q.x),
    )),
      (C.y = Math.max(85, Math.min(625, C.table.y + L.y - q.y))),
      zt({ id: C.table.id, x: C.x, y: C.y }),
      d.preventDefault());
  }
  function $(d) {
    const C = Ut.current;
    if (!C || C.pointerId !== d.pointerId) return;
    const k = !C.active && C.pointerType === "touch";
    ((C.active || k) && ((st.current = !0), d.preventDefault()),
      qt(),
      C.active ? rt(C.table.id, C.x, C.y) : k && o(C.table));
  }
  function m() {
    if(panTimer.current){clearInterval(panTimer.current);panTimer.current=null;}
    const d = ct.current;
    ((ct.current = null),
      d?.timer && clearTimeout(d.timer),
      d?.node.hasPointerCapture(d.pointerId) &&
        d.node.releasePointerCapture(d.pointerId),
      dt(null));
  }
  (J.useEffect(() => {
    const d = () => {
        ((ct.current?.active || Ut.current?.active) && (st.current = !0),
          m(),
          qt());
      },
      C = (q) => {
        q.key === "Escape" &&
          (ct.current || Ut.current) &&
          (q.preventDefault(), d());
      },
      k = (q) => {
        q.cancelable &&
          q.touches.length === 1 &&
          q.target instanceof Element &&
          (q.target.closest(".chair.occupied") ||
            (!q.target.closest(".chair") &&
              q.target.closest(".table-target"))) &&
          q.preventDefault();
      },
      G = vt.current;
    return (
      G?.addEventListener("touchstart", k, { passive: !1 }),
      document.addEventListener("keydown", C),
      window.addEventListener("blur", d),
      document.addEventListener("visibilitychange", d),
      () => {
        (G?.removeEventListener("touchstart", k),
          document.removeEventListener("keydown", C),
          window.removeEventListener("blur", d),
          document.removeEventListener("visibilitychange", d),
          m(),
          qt());
      }
    );
  }, []),
    J.useEffect(() => {
      const d = ct.current;
      d &&
        !R.some(
          (C) =>
            C.id === d.guestId &&
            C.tableId === d.tableId &&
            C.seatIndex === d.seatIndex,
        ) &&
        ((st.current = !0), m());
    }, [R]));
  function y(d, C, k) {
    const hit=document.elementFromPoint(d,C);
    const chair=hit?.closest('.chair[data-seat-index]');
    if(chair&&vt.current?.contains(chair)) {
      const tableId=chair.dataset.tableId,index=Number(chair.dataset.seatIndex);
      return {tableId,index,swap:R.some(guest=>guest.tableId===tableId&&guest.seatIndex===index&&guest.id!==k),blocked:false};
    }
    const target=hit?.closest('.table-target[data-table-id]');
    if(!target||!vt.current?.contains(target))return null;
    const table=S.find(item=>item.id===target.dataset.tableId);
    if(!table)return null;
    return {tableId:table.id,index:undefined,blocked:R.filter(guest=>guest.tableId===table.id&&guest.id!==k).length>=table.capacity};
  }
  function x(d, C) {
    if (d.button !== 0 || !d.isPrimary) return;
    (m(), (st.current = !1));
    const k = {
      node: d.currentTarget,
      pointerId: d.pointerId,
      pointerType: d.pointerType,
      guestId: C.id,
      tableId: C.tableId,
      seatIndex: C.seatIndex,
      x: d.clientX,
      y: d.clientY,
      active: !1,
      timer: null,
    };
    ((ct.current = k),
      d.currentTarget.setPointerCapture(d.pointerId),
      (k.timer = setTimeout(() => {
        ct.current === k &&
          ((k.active = !0),
          (k.timer = null),
          N(null),
          startSeatPan(),
          dt({ guestId: C.id, x: k.x, y: k.y, target: y(k.x, k.y, C.id) }));
      }, 350)));
  }
  function A(d) {
    const active=ct.current;
    if(!active||active.pointerId!==d.pointerId)return;
    if(!active.active) {
      if(Math.hypot(d.clientX-active.x,d.clientY-active.y)<5)return;
      active.active=true;
      if(active.timer){clearTimeout(active.timer);active.timer=null;}
      N(null);
    }
    d.preventDefault();
    active.currentX=d.clientX;active.currentY=d.clientY;startSeatPan();
    dt({guestId:active.guestId,x:d.clientX,y:d.clientY,target:y(d.clientX,d.clientY,active.guestId)});
  }
  function H(d) {
    const C = ct.current;
    if (!C || C.pointerId !== d.pointerId) return;
    const k = C.active ? y(d.clientX, d.clientY, C.guestId) : null;
    C.active && (d.preventDefault(), (st.current = !0));
    const G =
      !C.active && C.pointerType === "touch"
        ? R.find((q) => q.id === C.guestId)
        : void 0;
    (G && (d.preventDefault(), (st.current = !0), N(null)),
      m(),
      k && (k.tableId !== C.tableId || k.index !== C.seatIndex)
        ? Q(C.guestId, k.tableId, k.index)
        : G && Z(G));
  }
  const ot = X
      ? R.find((d) => d.tableId === X.tableId && d.seatIndex === X.index)
      : void 0,
    Ct = X ? S.find((d) => d.id === X.tableId) : void 0,
    nt = w ? R.find((d) => d.id === w.guestId) : void 0,
    O = w?.target ? S.find((d) => d.id === w.target.tableId) : void 0;
  function B(d, C, k) {
    const G = R.find((j) => j.tableId === d.id && j.seatIndex === C),
      q = `${Qe(d)}, chair ${C + 1}: ${G?.name || "Open"}`;
    function L() {
      (N(null), G ? Z(G) : z ? Q(z, d.id, C) : o(d));
    }
    const r = w?.target?.tableId === d.id && w.target.index === C;
    const seat = c.jsx(
      "rect",
      {
        ...k,
        rx: "5",
        className: `chair${G ? " occupied" : ""}${w?.guestId === G?.id && G ? " chair-dragging" : ""}${r ? " seat-drop-target" : ""}`,
        "data-table-id": d.id,
        "data-seat-index": C,
        role: "img",
        "aria-label": q,
        tabIndex: G ? 0 : -1,
        onPointerDown: (j) => {
          G ? x(j, G) : (st.current = !1);
        },
        onContextMenu: (j) => {
          G && j.preventDefault();
        },
        onDragStart: (j) => j.preventDefault(),
        onMouseEnter: (j) => {
          if (ct.current?.active) return;
          const Y = j.currentTarget.getBoundingClientRect();
          N({
            tableId: d.id,
            index: C,
            left: Math.max(8, Math.min(Y.left, window.innerWidth - 260)),
            top: Math.max(8, Math.min(Y.bottom + 8, window.innerHeight - 120)),
          });
        },
        onMouseLeave: () => N(null),
        onFocus: (j) => {
          const Y = j.currentTarget.getBoundingClientRect();
          N({
            tableId: d.id,
            index: C,
            left: Math.max(8, Math.min(Y.left, window.innerWidth - 260)),
            top: Math.max(8, Math.min(Y.bottom + 8, window.innerHeight - 120)),
          });
        },
        onBlur: () => N(null),
        onClick: (j) => {
          (j.stopPropagation(), L());
        },
        onKeyDown: (j) => {
          (j.key === "Enter" || j.key === " ") &&
            (j.preventDefault(), j.stopPropagation(), L());
        },
        onDragOver: (j) => {
          (j.preventDefault(),
            j.stopPropagation(),
            (j.dataTransfer.dropEffect = "move"));
        },
        onDrop: (j) => {
          (j.preventDefault(), j.stopPropagation(), N(null), gt(null));
          const Y = j.dataTransfer.getData("text/plain");
          Y && Q(Y, d.id, C);
        },
      },
      C,
    );
    const angle = Number.parseFloat(k.transform?.slice(7) || "0") * Math.PI / 180;
    const centerX = Number(k.x) + Number(k.width) / 2;
    const centerY = Number(k.y) + Number(k.height) / 2;
    return c.jsxs(c.Fragment, {
      children: [seat, G && c.jsx("text", {
        className: `chair-initials${w?.guestId === G.id ? " chair-initials-dragging" : ""}`,
        "data-guest-id": G.id,
        "aria-hidden": true,
        x: centerX * Math.cos(angle) - centerY * Math.sin(angle),
        y: centerX * Math.sin(angle) + centerY * Math.cos(angle),
        textAnchor: "middle", dominantBaseline: "central",
        style: { fontSize: d.number === 18 ? Math.min(6.2, Number(k.width) * .58) : 5.5 },
        children: guestInitials(G.name),
      })],
    }, C);
  }
  const canvasWidth=sizing==="fit" ? Math.min(viewport.width-2,(viewport.height-8)*800/705+8) : viewport.width-2;
  return c.jsxs("div", {
    className: `plan-canvas${w ? " seat-drag-active" : ""}`,
    style: { width: viewport.width ? `${Math.max(1,Math.floor(canvasWidth*mt))}px` : "100%", minWidth: 0, "--zoom": mt },
    children: [
      c.jsxs("svg", {
        ref: vt,
        className: "floor-svg",
        viewBox: "0 0 800 705",
        "aria-label":
          "Reception floor plan with 17 round tables and a 30-seat head table",
        onPointerDownCapture: () => {
          st.current = !1;
        },
        onPointerMove: (d) => {
          (A(d), Et(d));
        },
        onPointerUp: (d) => {
          (H(d), $(d));
        },
        onPointerCancel: () => {
          ((st.current = !0), m(), qt());
        },
        onLostPointerCapture: () => {
          (ct.current || Ut.current) && ((st.current = !0), m(), qt());
        },
        onClickCapture: (d) => {
          st.current &&
            d.detail !== 0 &&
            (d.preventDefault(), d.stopPropagation());
        },
        children: [
          c.jsxs("defs", {
            children: [
              c.jsx("pattern", {
                id: "dance-pattern",
                width: "18",
                height: "18",
                patternUnits: "userSpaceOnUse",
                patternTransform: "rotate(45)",
                children: c.jsx("path", {
                  d: "M0 0V18",
                  stroke: "#eee9de",
                  strokeWidth: ".7",
                }),
              }),
              c.jsx("filter", {
                id: "table-shadow",
                x: "-40%",
                y: "-40%",
                width: "180%",
                height: "180%",
                children: c.jsx("feDropShadow", {
                  dx: "0",
                  dy: "2",
                  stdDeviation: "3",
                  floodColor: "#333d2d",
                  floodOpacity: ".045",
                }),
              }),
            ],
          }),
          c.jsxs("g", {
            fill: "#fffdfa",
            stroke: "#c9c9bd",
            strokeWidth: "2",
            children: [
              c.jsx("path", {
                d: "M20 60V36H575 M627 36H708 M758 36H780V670H693 M646 670H585 M535 670H92 M43 670H20V60",
                fill: "#fffdfa",
              }),
              c.jsx("path", {
                d: "M140 670V552H540V670",
                fill: "none",
                strokeWidth: "1.5",
              }),
            ],
          }),
          c.jsxs("g", {
            stroke: "#dbd9d0",
            fill: "none",
            strokeWidth: "1",
            children: [
              c.jsx("path", {
                d: "M575 36V8 Q601 8 601 36 M627 36V8 Q601 8 601 36 M708 36V8 Q733 8 733 36 M758 36V8 Q733 8 733 36",
              }),
              c.jsx("path", {
                d: "M43 670V694 Q67 694 67 670 M92 670V694 Q67 694 67 670 M535 670V694 Q560 694 560 670 M585 670V694 Q560 694 560 670 M646 670V694 Q669 694 669 670 M693 670V694 Q669 694 669 670",
              }),
              c.jsx("path", {
                d: "M140 587h-26q0 25 26 25 M140 637h-26q0-25 26-25 M540 587h26q0 25-26 25 M540 637h26q0-25-26-25",
              }),
            ],
          }),
          c.jsx(VenueLayer, { floorPlan }),
          S.map((d) => {
            const C = R.filter((q) => q.tableId === d.id),
              k = d.number === 18,
              G = C.length >= d.capacity;
            return c.jsxs(
              "g",
              {
                transform: `translate(${Ht?.id === d.id ? Ht.x : d.x} ${Ht?.id === d.id ? Ht.y : d.y})`,
                onPointerDown: (q) => te(q, d),
                className: `table-target ${V === d.id || w?.target?.tableId === d.id ? "drag-over" : ""} ${w?.target?.tableId === d.id && w.target.blocked ? "table-drop-full" : ""} ${z && !G ? "table-available" : ""}`,
                "data-table-id": d.id,
                tabIndex: 0,
                role: "button",
                "aria-label": `${Qe(d)}, ${C.length} of ${d.capacity} seated${z ? ", select to seat selected guest" : ""}`,
                onClick: () => o(d),
                onKeyDown: (q) => {
                  (q.key === "Enter" || q.key === " ") &&
                    (q.preventDefault(), o(d));
                },
                onDragOver: (q) => {
                  (q.preventDefault(),
                    (q.dataTransfer.dropEffect = "move"),
                    gt(d.id));
                },
                onDragLeave: (q) => {
                  q.currentTarget.contains(q.relatedTarget) || gt(null);
                },
                onDrop: (q) => {
                  (q.preventDefault(), gt(null));
                  const L = q.dataTransfer.getData("text/plain");
                  L && Q(L, d.id);
                },
                children: [
                  k
                    ? c.jsxs(c.Fragment, {
                        children: [
                          c.jsx("rect", {
                            x: "-172",
                            y: "-48",
                            width: "344",
                            height: "122",
                            rx: "18",
                            fill: "transparent",
                          }),
                          headTableGeometry(d.capacity).chairs.map(chair => B(d, chair.index, {
                            x:chair.x,y:chair.y,width:chair.width,height:chair.height,
                          })),
                          headTableGeometry(d.capacity).sections.map(section => c.jsx("rect", {
                            x:section.x,y:-18,width:section.width,height:36,rx:1,
                            "data-head-section":section.index,
                            className:`head-section-surface ${section.index===2?"table-surface":""} ${G?"full":""}`,
                          },section.index)),
                          c.jsxs("text", {
                            textAnchor: "middle",
                            y: 49,
                            className: "head-name",
                            children: [
                              "HEAD TABLE ",
                              c.jsxs("tspan", {
                                className: "head-count",
                                children: [" · ", C.length, " / ", d.capacity],
                              }),
                            ],
                          }),
                          el(d) &&
                            c.jsx("text", {
                              textAnchor: "middle",
                              y: "61",
                              className: "head-count",
                              children: el(d).slice(0, 40),
                            }),
                        ],
                      })
                    : c.jsxs(c.Fragment, {
                        children: [
                          c.jsx("circle", { r: "44", fill: "transparent" }),
                          Array.from({ length: d.capacity }, (q, L) => {
                            const r =
                              (L / d.capacity) * Math.PI * 2 - Math.PI / 2;
                            return B(d, L, {
                              x: -6,
                              y: -41,
                              width: 12,
                              height: 15,
                              transform: `rotate(${(r * 180) / Math.PI + 90})`,
                            });
                          }),
                          c.jsx("circle", {
                            r: "29",
                            className: `table-surface ${G ? "full" : ""}`,
                            filter: "url(#table-shadow)",
                          }),
                          c.jsx("text", {
                            textAnchor: "middle",
                            y: "1",
                            className: "table-number",
                            children: String(d.number).padStart(2, "0"),
                          }),
                          c.jsxs("text", {
                            textAnchor: "middle",
                            y: "15",
                            className: "table-count",
                            children: [C.length, " / ", d.capacity],
                          }),
                        ],
                      }),
                  !k &&
                    el(d) &&
                    c.jsx("text", {
                      textAnchor: "middle",
                      y: "51",
                      className: "table-custom-name",
                      children:
                        el(d).length > 20 ? el(d).slice(0, 19) + "…" : el(d),
                    }),
                ],
              },
              d.id,
            );
          }),
          c.jsxs("g", {
            transform: "translate(55 594)",
            className: "compass",
            children: [
              c.jsx("path", { d: "M0-13L-5 2L0-1L5 2Z", fill: "#9b9f8d" }),
              c.jsx("text", { y: "18", textAnchor: "middle", children: "N" }),
            ],
          }),
        ],
      }),
      X &&
        Ct &&
        !w &&
        Zm.createPortal(
          c.jsxs("div", {
            className: "chair-tooltip",
            id: "chair-tooltip",
            role: "tooltip",
            style: { left: X.left, top: X.top },
            children: [
              c.jsx("strong", { children: ot?.name || "Open chair" }),
              c.jsxs("span", { children: [Qe(Ct), " · Chair ", X.index + 1] }),
            ],
          }),
          document.body,
        ),
      w &&
        nt &&
        Zm.createPortal(
          c.jsxs("div", {
            className: `seat-drag-preview${w.target?.blocked ? " blocked" : ""}`,
            role: "status",
            style: {
              left: Math.max(8, Math.min(w.x + 16, window.innerWidth - 256)),
              top: Math.max(8, Math.min(w.y + 18, window.innerHeight - 90)),
            },
            children: [
              c.jsx("strong", { children: nt.name }),
              c.jsx("span", {
                children: w.target?.blocked
                  ? "This table is full. Choose another table or an open chair."
                  : O
                    ? w.target.swap ? `${Qe(O)} · Drop to swap seats` : w.target.index === undefined ? `${Qe(O)} · Next open chair` : `${Qe(O)} · Chair ${w.target.index + 1}`
                    : "Drop on a table or an open chair",
              }),
            ],
          }),
          document.body,
        ),
    ],
  });
}
function dg({ table: S, guests: R, onGuest: z, onAssign: o }) {
  const Q = S.number === 18,
    Z = Math.ceil(S.capacity / 2),
    rt = J.useRef(null),
    [mt, V] = J.useState(1e3);
  J.useEffect(() => {
    const x = rt.current;
    if (!x) return;
    const A = new ResizeObserver(([H]) => V(H.contentRect.width));
    return (A.observe(x), () => A.disconnect());
  }, []);
  const [gt, X] = J.useState(null),
    [N, w] = J.useState(null),
    dt = J.useRef(null),
    ct = J.useRef(!1);
  function st() {
    const x = dt.current;
    ((dt.current = null),
      x &&
        (clearTimeout(x.timer),
        x.node.hasPointerCapture(x.pointerId) &&
          x.node.releasePointerCapture(x.pointerId)),
      X(null),
      w(null));
  }
  J.useEffect(() => {
    const x = () => {
        ((ct.current = !0), st());
      },
      A = (H) => {
        H.key === "Escape" && x();
      };
    return (
      window.addEventListener("blur", x),
      document.addEventListener("keydown", A),
      () => {
        (window.removeEventListener("blur", x),
          document.removeEventListener("keydown", A),
          st());
      }
    );
  }, []);
  function vt(x, A) {
    const H = document.elementFromPoint(x, A)?.closest("[data-detail-seat]");
    return H && rt.current?.contains(H) ? Number(H.dataset.detailSeat) : null;
  }
  function Ut(x) {
    return R.some((A) => A.tableId === S.id && A.seatIndex === x);
  }
  function Ht(x, A) {
    if (((ct.current = !1), x.pointerType !== "touch" || !x.isPrimary)) return;
    st();
    const H = {
      node: x.currentTarget,
      pointerId: x.pointerId,
      guestId: A.id,
      x: x.clientX,
      y: x.clientY,
      active: !1,
      timer: setTimeout(() => {
        ((H.active = !0), X(A.id));
      }, 350),
    };
    ((dt.current = H), x.currentTarget.setPointerCapture(x.pointerId));
  }
  function zt(x) {
    const A = dt.current;
    if (!(!A || A.pointerId !== x.pointerId)) {
      if (!A.active) {
        Math.hypot(x.clientX - A.x, x.clientY - A.y) > 8 &&
          ((ct.current = !0), st());
        return;
      }
      (x.preventDefault(), w(vt(x.clientX, x.clientY)));
    }
  }
  function qt(x) {
    const A = dt.current;
    if (!A || A.pointerId !== x.pointerId) return;
    const H = A.active ? vt(x.clientX, x.clientY) : null;
    (A.active && (x.preventDefault(), (ct.current = !0)),
      st(),
      H !== null && o(A.guestId, H));
  }
  const [te, Et] = J.useState(() => matchMedia("(pointer: coarse)").matches);
  J.useEffect(() => {
    const x = matchMedia("(pointer: coarse)"),
      A = () => Et(x.matches);
    return (
      x.addEventListener("change", A),
      () => x.removeEventListener("change", A)
    );
  }, []);
  const headGeometry = headTableGeometry(S.capacity);
  const compactHead = Q && (mt - 24) / Math.max(headGeometry.topCount,S.capacity-headGeometry.topCount) < 44;
  const compactFont = Math.max(4, Math.min(10, ((mt - 16 - (Z - 1) * 2) / Z - 4) / 1.75));
  const $ = Z,
    y = Array.from({ length: S.capacity }, (x, A) => {
      const H = R.find((nt) => nt.tableId === S.id && nt.seatIndex === A),
        ot = (A / S.capacity) * Math.PI * 2 - Math.PI / 2,
        Ct = Q
          ? undefined
          : {
              left: `${50 + 36 * Math.cos(ot)}%`,
              top: `${50 + 39 * Math.sin(ot)}%`,
            };
      const geometryChair = Q ? headGeometry.chairs[A] : null;
      const rowCount = geometryChair ? headGeometry.chairs.filter(chair => chair.section===geometryChair.section&&chair.side===geometryChair.side).length : 1;
      const sectionWidth = geometryChair ? headGeometry.sections[geometryChair.section].width : 1;
      const seatFont = compactHead ? Math.max(3,Math.min(10,(((mt-24)*sectionWidth/312-(rowCount-1))/rowCount-4)/1.7)) : compactFont;
      return c.jsxs(
        "button",
        {
          type: "button",
          className: `detail-chair ${H ? "occupied" : ""} ${N === A ? "drop-open" : ""}`,
          style: Ct,
          "aria-disabled": !H,
          "data-detail-seat": A,
          draggable: !!H && !te,
          "aria-label": `${Qe(S)}, chair ${A + 1}: ${H?.name || "Open"}`,
          onClick: () => {
            H && z(H);
          },
          onPointerDown: (nt) => {
            ((ct.current = !1), H && Ht(nt, H));
          },
          onContextMenu: (nt) => {
            H && nt.preventDefault();
          },
          onDragStart: (nt) => {
            H &&
              (nt.dataTransfer.setData("text/plain", H.id),
              (nt.dataTransfer.effectAllowed = "move"),
              X(H.id),
              (ct.current = !0));
          },
          onDragEnd: () => {
            (X(null), w(null));
          },
          onDragOver: (nt) => {
            (nt.preventDefault(),
              nt.stopPropagation(),
              (nt.dataTransfer.dropEffect = "move"),
              w(A));
          },
          onDragLeave: () => w(null),
          onDrop: (nt) => {
            (nt.preventDefault(), nt.stopPropagation());
            const O = nt.dataTransfer.getData("text/plain");
            (st(), O && o(O, A));
          },
          children: [
            c.jsxs("span", {
              className: "detail-chair-number",
              style: compactHead ? {fontSize:Math.min(7,seatFont*1.2)} : undefined,
              children: [compactHead ? "" : "Chair ", A + 1],
            }),
            c.jsx("strong", {
              title: H?.name || "Open seat",
              style: compactHead ? {fontSize: seatFont} : undefined,
              children: H ? compactHead ? guestInitials(H.name) : H.name : compactHead ? "—" : "Open seat",
            }),
          ],
        },
        A,
      );
    });
  return c.jsxs("section", {
    className: "table-seating",
    "aria-label": "Enlarged table seating",
    children: [
      c.jsx("p", {
        className: "table-seating-hint",
        children:
          compactHead ? "The whole table is shown with initials. Tap a guest for full details; hold and drag to move a seat." : "Click a guest for details. Drag onto a chair to move or swap seats; on touch screens, hold first.",
      }),
      c.jsx("div", {
        ref: rt,
        className: "table-seating-scroll",
        tabIndex: 0,
        "aria-label": "Table seating view",
        onPointerMove: zt,
        onPointerUp: qt,
        onPointerCancel: () => {
          ((ct.current = !0), st());
        },
        onLostPointerCapture: () => {
          dt.current && ((ct.current = !0), st());
        },
        onClickCapture: (x) => {
          ct.current &&
            x.detail !== 0 &&
            (x.preventDefault(), x.stopPropagation());
        },
        children: c.jsxs("div", {
          className: `table-seating-diagram ${Q ? `head-seating${compactHead ? " head-seating-compact" : ""}` : "round-seating"}`,
          style: Q ? { "--seat-columns": $ } : void 0,
          children: Q ? headGeometry.sections.map(section => c.jsxs("div", {
            className:"head-detail-section",style:{flex:section.width},"data-head-section":section.index,
            children:[
              c.jsx("div",{className:"head-detail-row",style:{"--row-seats":Math.max(1,headGeometry.chairs.filter(chair=>chair.section===section.index&&chair.side==='top').length)},children:headGeometry.chairs.filter(chair=>chair.section===section.index&&chair.side==='top').map(chair=>y[chair.index])}),
              c.jsx("div",{className:"detail-table head-detail-surface",children:section.index===2?c.jsx("span",{children:el(S)||"Head table"}):null}),
              c.jsx("div",{className:"head-detail-row",style:{"--row-seats":Math.max(1,headGeometry.chairs.filter(chair=>chair.section===section.index&&chair.side==='bottom').length)},children:headGeometry.chairs.filter(chair=>chair.section===section.index&&chair.side==='bottom').map(chair=>y[chair.index])}),
            ],
          },section.index)) : [
            c.jsxs("div",{className:"detail-table",children:[
              c.jsx("strong",{children:_a(S)}),el(S)&&c.jsx("span",{children:el(S)}),
              c.jsx("small",{children:`${R.filter(guest=>guest.tableId===S.id).length} / ${S.capacity} seated`}),
            ]}),
            y,
          ],
        }),
      }),
      gt &&
        c.jsxs("p", {
          className: "table-seating-hint",
          role: "status",
          children: [
            "Moving ",
            R.find((x) => x.id === gt)?.name,
            " · ",
            N !== null && Ut(N) ? "Drop to swap seats" : "Drop on an open seat",
          ],
        }),
    ],
  });
}
var vc = { exports: {} };
var hg = vc.exports,
  Km;
function mg() {
  return (
    Km ||
      ((Km = 1),
      (function (S, R) {
        ((z, o) => {
          S.exports = o();
        })(hg, function z() {
          var o =
              typeof self < "u"
                ? self
                : typeof window < "u"
                  ? window
                  : o !== void 0
                    ? o
                    : {},
            Q = !o.document && !!o.postMessage,
            Z = o.IS_PAPA_WORKER || !1,
            rt = {},
            mt = 0,
            V = {};
          function gt(m) {
            return m.charCodeAt(0) === 65279 ? m.slice(1) : m;
          }
          function X(m) {
            ((this._handle = null),
              (this._finished = !1),
              (this._completed = !1),
              (this._halted = !1),
              (this._input = null),
              (this._baseIndex = 0),
              (this._partialLine = ""),
              (this._rowCount = 0),
              (this._start = 0),
              (this._nextChunk = null),
              (this.isFirstChunk = !0),
              (this._completeResults = { data: [], errors: [], meta: {} }),
              function (y) {
                var x = te(y);
                ((x.chunkSize = parseInt(x.chunkSize)),
                  y.step || y.chunk || (x.chunkSize = null),
                  (this._handle = new st(x)),
                  ((this._handle.streamer = this)._config = x));
              }.call(this, m),
              (this.parseChunk = function (y, x) {
                var A = parseInt(this._config.skipFirstNLines) || 0;
                if (this.isFirstChunk && 0 < A) {
                  let ot = this._config.newline;
                  (ot ||
                    ((H = this._config.quoteChar || '"'),
                    (ot = this._handle.guessLineEndings(y, H))),
                    (y = [...y.split(ot).slice(A)].join(ot)));
                }
                (this.isFirstChunk &&
                  $(this._config.beforeFirstChunk) &&
                  (H = this._config.beforeFirstChunk(y)) !== void 0 &&
                  (y = H),
                  (this.isFirstChunk = !1),
                  (this._halted = !1));
                var A = this._partialLine + y,
                  H =
                    ((this._partialLine = ""),
                    this._handle.parse(A, this._baseIndex, !this._finished));
                if (!this._handle.paused() && !this._handle.aborted()) {
                  if (
                    ((y = H.meta.cursor),
                    (A =
                      (this._finished ||
                        ((this._partialLine = A.substring(y - this._baseIndex)),
                        (this._baseIndex = y)),
                      H && H.data && (this._rowCount += H.data.length),
                      this._finished ||
                        (this._config.preview &&
                          this._rowCount >= this._config.preview))),
                    Z)
                  )
                    o.postMessage({
                      results: H,
                      workerId: V.WORKER_ID,
                      finished: A,
                    });
                  else if ($(this._config.chunk) && !x) {
                    if (
                      (this._config.chunk(H, this._handle),
                      this._handle.paused() || this._handle.aborted())
                    )
                      return void (this._halted = !0);
                    this._completeResults = H = void 0;
                  }
                  return (
                    this._config.step ||
                      this._config.chunk ||
                      ((this._completeResults.data =
                        this._completeResults.data.concat(H.data)),
                      (this._completeResults.errors =
                        this._completeResults.errors.concat(H.errors)),
                      (this._completeResults.meta = H.meta)),
                    this._completed ||
                      !A ||
                      !$(this._config.complete) ||
                      (H && H.meta.aborted) ||
                      (this._config.complete(
                        this._completeResults,
                        this._input,
                      ),
                      (this._completed = !0)),
                    A || (H && H.meta.paused) || this._nextChunk(),
                    H
                  );
                }
                this._halted = !0;
              }),
              (this._sendError = function (y) {
                $(this._config.error)
                  ? this._config.error(y)
                  : Z &&
                    this._config.error &&
                    o.postMessage({
                      workerId: V.WORKER_ID,
                      error: y,
                      finished: !1,
                    });
              }));
          }
          function N(m) {
            var y;
            ((m = m || {}).chunkSize || (m.chunkSize = V.RemoteChunkSize),
              X.call(this, m),
              (this._nextChunk = Q
                ? function () {
                    (this._readChunk(), this._chunkLoaded());
                  }
                : function () {
                    this._readChunk();
                  }),
              (this.stream = function (x) {
                ((this._input = x), this._nextChunk());
              }),
              (this._readChunk = function () {
                if (this._finished) this._chunkLoaded();
                else {
                  if (
                    ((y = new XMLHttpRequest()),
                    this._config.withCredentials &&
                      (y.withCredentials = this._config.withCredentials),
                    Q ||
                      ((y.onload = Et(this._chunkLoaded, this)),
                      (y.onerror = Et(this._chunkError, this))),
                    (y.ontimeout = Et(this._chunkTimeout, this)),
                    y.open(
                      this._config.downloadRequestBody ? "POST" : "GET",
                      this._input,
                      !Q,
                    ),
                    this._config.downloadTimeout &&
                      !Q &&
                      (y.timeout = this._config.downloadTimeout),
                    this._config.downloadRequestHeaders)
                  ) {
                    var x,
                      A = this._config.downloadRequestHeaders;
                    for (x in A) y.setRequestHeader(x, A[x]);
                  }
                  var H;
                  this._config.chunkSize &&
                    ((H = this._start + this._config.chunkSize - 1),
                    y.setRequestHeader(
                      "Range",
                      "bytes=" + this._start + "-" + H,
                    ));
                  try {
                    y.send(this._config.downloadRequestBody);
                  } catch (ot) {
                    this._chunkError(ot.message);
                  }
                  Q && y.status === 0 && this._chunkError();
                }
              }),
              (this._chunkLoaded = function () {
                y.readyState === 4 &&
                  (y.status < 200 || 400 <= y.status
                    ? this._chunkError()
                    : ((this._start +=
                        this._config.chunkSize || y.responseText.length),
                      (this._finished =
                        !this._config.chunkSize ||
                        this._start >=
                          ((x) =>
                            (x = x.getResponseHeader("Content-Range")) !== null
                              ? parseInt(x.substring(x.lastIndexOf("/") + 1))
                              : -1)(y)),
                      this.parseChunk(y.responseText)));
              }),
              (this._chunkError = function (x) {
                ((x = y.statusText || x), this._sendError(new Error(x)));
              }),
              (this._chunkTimeout = function () {
                this._chunkError(
                  "Request timed out after " +
                    this._config.downloadTimeout +
                    "ms",
                );
              }));
          }
          function w(m) {
            ((m = m || {}).chunkSize || (m.chunkSize = V.LocalChunkSize),
              X.call(this, m));
            var y,
              x,
              A = typeof FileReader < "u";
            ((this.stream = function (H) {
              ((this._input = H),
                (x = H.slice || H.webkitSlice || H.mozSlice),
                A
                  ? (((y = new FileReader()).onload = Et(
                      this._chunkLoaded,
                      this,
                    )),
                    (y.onerror = Et(this._chunkError, this)))
                  : (y = new FileReaderSync()),
                this._nextChunk());
            }),
              (this._nextChunk = function () {
                this._finished ||
                  (this._config.preview &&
                    !(this._rowCount < this._config.preview)) ||
                  this._readChunk();
              }),
              (this._readChunk = function () {
                var H = this._input,
                  ot =
                    (this._config.chunkSize &&
                      ((ot = Math.min(
                        this._start + this._config.chunkSize,
                        this._input.size,
                      )),
                      (H = x.call(H, this._start, ot))),
                    y.readAsText(H, this._config.encoding));
                A || this._chunkLoaded({ target: { result: ot } });
              }),
              (this._chunkLoaded = function (H) {
                ((this._start += this._config.chunkSize),
                  (this._finished =
                    !this._config.chunkSize || this._start >= this._input.size),
                  this.parseChunk(H.target.result));
              }),
              (this._chunkError = function () {
                this._sendError(y.error);
              }));
          }
          function dt(m) {
            var y;
            (X.call(this, (m = m || {})),
              (this.stream = function (x) {
                return ((y = x), this._nextChunk());
              }),
              (this._nextChunk = function () {
                var x, A;
                if (!this._finished)
                  return (
                    (x = this._config.chunkSize),
                    (y = x
                      ? ((A = y.substring(0, x)), y.substring(x))
                      : ((A = y), "")),
                    (this._finished = !y),
                    this.parseChunk(A)
                  );
              }));
          }
          function ct(m) {
            X.call(this, (m = m || {}));
            var y = [],
              x = !0,
              A = !1;
            ((this.pause = function () {
              (X.prototype.pause.apply(this, arguments), this._input.pause());
            }),
              (this.resume = function () {
                (X.prototype.resume.apply(this, arguments),
                  this._input.resume());
              }),
              (this.stream = function (H) {
                ((this._input = H),
                  this._input.on("data", this._streamData),
                  this._input.on("end", this._streamEnd),
                  this._input.on("error", this._streamError));
              }),
              (this._checkIsFinished = function () {
                A && y.length === 1 && (this._finished = !0);
              }),
              (this._nextChunk = function () {
                (this._checkIsFinished(),
                  y.length ? this.parseChunk(y.shift()) : (x = !0));
              }),
              (this._streamData = Et(function (H) {
                try {
                  (y.push(
                    typeof H == "string"
                      ? H
                      : H.toString(this._config.encoding),
                  ),
                    x &&
                      ((x = !1),
                      this._checkIsFinished(),
                      this.parseChunk(y.shift())));
                } catch (ot) {
                  this._streamError(ot);
                }
              }, this)),
              (this._streamError = Et(function (H) {
                (this._streamCleanUp(), this._sendError(H));
              }, this)),
              (this._streamEnd = Et(function () {
                (this._streamCleanUp(), (A = !0), this._streamData(""));
              }, this)),
              (this._streamCleanUp = Et(function () {
                (this._input.removeListener("data", this._streamData),
                  this._input.removeListener("end", this._streamEnd),
                  this._input.removeListener("error", this._streamError));
              }, this)));
          }
          function st(m) {
            var y,
              x,
              A,
              H,
              ot = Math.pow(2, 53),
              Ct = -ot,
              nt = /^\s*-?(\d+\.?|\.\d+|\d+\.\d+)([eE][-+]?\d+)?\s*$/,
              O =
                /^((\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z)))$/,
              B = this,
              d = 0,
              C = 0,
              k = !1,
              G = !1,
              q = [],
              L = { data: [], errors: [], meta: {} };
            function r(W) {
              return m.skipEmptyLines === "greedy"
                ? W.join("").trim() === ""
                : W.length === 1 && W[0].length === 0;
            }
            function j() {
              if (
                (L &&
                  A &&
                  (I(
                    "Delimiter",
                    "UndetectableDelimiter",
                    "Unable to auto-detect delimiting character; defaulted to '" +
                      V.DefaultDelimiter +
                      "'",
                  ),
                  (A = !1)),
                m.skipEmptyLines &&
                  (L.data = L.data.filter(function (P) {
                    return !r(P);
                  })),
                Y())
              ) {
                let P = function (Yt) {
                  q.push(Yt);
                };
                var U = P;
                if (L)
                  if (Array.isArray(L.data[0])) {
                    for (var W = 0; Y() && W < L.data.length; W++)
                      L.data[W].forEach(P);
                    L.data.splice(0, 1);
                  } else L.data.forEach(P);
              }
              function F(P, Yt) {
                for (var Bt = m.header ? {} : [], pt = 0; pt < P.length; pt++) {
                  var it = pt,
                    Nt = P[pt],
                    Nt = ((at, jt) =>
                      ((It) => (
                        m.dynamicTypingFunction &&
                          m.dynamicTyping[It] === void 0 &&
                          (m.dynamicTyping[It] = m.dynamicTypingFunction(It)),
                        (m.dynamicTyping[It] || m.dynamicTyping) === !0
                      ))(at)
                        ? jt === "true" ||
                          jt === "TRUE" ||
                          (jt !== "false" &&
                            jt !== "FALSE" &&
                            (((It) => {
                              if (
                                nt.test(It) &&
                                ((It = parseFloat(It)), Ct < It && It < ot)
                              )
                                return 1;
                            })(jt)
                              ? parseFloat(jt)
                              : O.test(jt)
                                ? new Date(jt)
                                : jt === ""
                                  ? null
                                  : jt))
                        : jt)(
                      (it = m.header
                        ? pt >= q.length
                          ? "__parsed_extra"
                          : q[pt]
                        : it),
                      (Nt = m.transform ? m.transform(Nt, it) : Nt),
                    );
                  it === "__parsed_extra"
                    ? ((Bt[it] = Bt[it] || []), Bt[it].push(Nt))
                    : (Bt[it] = Nt);
                }
                return (
                  m.header &&
                    (pt > q.length
                      ? I(
                          "FieldMismatch",
                          "TooManyFields",
                          "Too many fields: expected " +
                            q.length +
                            " fields but parsed " +
                            pt,
                          C + Yt,
                        )
                      : pt < q.length &&
                        I(
                          "FieldMismatch",
                          "TooFewFields",
                          "Too few fields: expected " +
                            q.length +
                            " fields but parsed " +
                            pt,
                          C + Yt,
                        )),
                  Bt
                );
              }
              var ut;
              L &&
                (m.header || m.dynamicTyping || m.transform) &&
                ((ut = 1),
                !L.data.length || Array.isArray(L.data[0])
                  ? ((L.data = L.data.map(F)), (ut = L.data.length))
                  : (L.data = F(L.data, 0)),
                m.header && L.meta && (L.meta.fields = q),
                (C += ut));
            }
            function Y() {
              return m.header && q.length === 0;
            }
            function I(W, F, ut, U) {
              ((W = { type: W, code: F, message: ut }),
                U !== void 0 && (W.row = U),
                L.errors.push(W));
            }
            ($(m.step) &&
              ((H = m.step),
              (m.step = function (W) {
                ((L = W),
                  Y()
                    ? j()
                    : (j(),
                      L.data.length !== 0 &&
                        ((d += W.data.length),
                        m.preview && d > m.preview
                          ? x.abort()
                          : ((L.data = L.data[0]), H(L, B)))));
              })),
              (this.parse = function (W, F, ut) {
                var U = m.quoteChar || '"',
                  U =
                    (m.newline || (m.newline = this.guessLineEndings(W, U)),
                    (A = !1),
                    m.delimiter
                      ? $(m.delimiter) &&
                        ((m.delimiter = m.delimiter(W)),
                        (L.meta.delimiter = m.delimiter))
                      : ((U = ((P, Yt, Bt, pt, it) => {
                          var Nt, at, jt, It;
                          it = it || [
                            ",",
                            "	",
                            "|",
                            ";",
                            V.RECORD_SEP,
                            V.UNIT_SEP,
                          ];
                          for (var de = 0; de < it.length; de++) {
                            for (
                              var he,
                                _e = it[de],
                                $t = 0,
                                me = 0,
                                Vt = 0,
                                Dt =
                                  ((jt = void 0),
                                  new Ut({
                                    comments: pt,
                                    delimiter: _e,
                                    newline: Yt,
                                    preview: 10,
                                  }).parse(P)),
                                ze = 0;
                              ze < Dt.data.length;
                              ze++
                            )
                              Bt && r(Dt.data[ze])
                                ? Vt++
                                : ((he = Dt.data[ze].length),
                                  (me += he),
                                  jt === void 0
                                    ? (jt = he)
                                    : 0 < he &&
                                      (($t += Math.abs(he - jt)), (jt = he)));
                            (0 < Dt.data.length && (me /= Dt.data.length - Vt),
                              1.99 < me &&
                                (at === void 0 ||
                                  $t < at ||
                                  ($t === at && It < me)) &&
                                ((at = $t), (Nt = _e), (It = me)));
                          }
                          return {
                            successful: !!(m.delimiter = Nt),
                            bestDelimiter: Nt,
                          };
                        })(
                          W,
                          m.newline,
                          m.skipEmptyLines,
                          m.comments,
                          m.delimitersToGuess,
                        )).successful
                          ? (m.delimiter = U.bestDelimiter)
                          : ((A = !0), (m.delimiter = V.DefaultDelimiter)),
                        (L.meta.delimiter = m.delimiter)),
                    te(m));
                return (
                  (U.header = Y()),
                  m.preview && m.header && U.preview++,
                  (y = W),
                  (x = new Ut(U)),
                  (L = x.parse(y, F, ut)),
                  j(),
                  k ? { meta: { paused: !0 } } : L || { meta: { paused: !1 } }
                );
              }),
              (this.paused = function () {
                return k;
              }),
              (this.pause = function () {
                ((k = !0),
                  x.abort(),
                  (y = $(m.chunk) ? "" : y.substring(x.getCharIndex())));
              }),
              (this.resume = function () {
                B.streamer._halted
                  ? ((k = !1), B.streamer.parseChunk(y, !0))
                  : setTimeout(B.resume, 3);
              }),
              (this.aborted = function () {
                return G;
              }),
              (this.abort = function () {
                ((G = !0),
                  x.abort(),
                  (L.meta.aborted = !0),
                  $(m.complete) && m.complete(L),
                  (y = ""));
              }),
              (this.guessLineEndings = function (P, U) {
                P = P.substring(0, 1048576);
                var U = new RegExp(vt(U) + "([^]*?)" + vt(U), "gm"),
                  ut = (P = P.replace(U, "")).split("\r"),
                  U = P.split(`
`),
                  P = 1 < U.length && U[0].length < ut[0].length;
                if (ut.length === 1 || P)
                  return `
`;
                for (var Yt = 0, Bt = 0; Bt < ut.length; Bt++)
                  ut[Bt][0] ===
                    `
` && Yt++;
                return Yt >= ut.length / 2
                  ? `\r
`
                  : "\r";
              }));
          }
          function vt(m) {
            return m.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
          }
          function Ut(m) {
            var y = (m = m || {}).delimiter,
              x = m.newline,
              A = m.comments,
              H = m.step,
              ot = m.preview,
              Ct = m.fastMode,
              nt = null,
              O = !1,
              B = m.quoteChar == null ? '"' : m.quoteChar,
              d = B;
            if (
              (m.escapeChar !== void 0 && (d = m.escapeChar),
              (typeof y != "string" || -1 < V.BAD_DELIMITERS.indexOf(y)) &&
                (y = ","),
              A === y)
            )
              throw new Error("Comment character same as delimiter");
            (A === !0
              ? (A = "#")
              : (typeof A != "string" || -1 < V.BAD_DELIMITERS.indexOf(A)) &&
                (A = !1),
              x !==
                `
` &&
                x !== "\r" &&
                x !==
                  `\r
` &&
                (x = `
`));
            var C = 0,
              k = !1;
            ((this.parse = function (G, q, L) {
              if (typeof G != "string")
                throw new Error("Input must be a string");
              var r = G.length,
                j = y.length,
                Y = x.length,
                I = A.length,
                W = $(H),
                F = [],
                ut = [],
                U = [],
                P = (C = 0);
              if (!G) return $t();
              if (Ct || (Ct !== !1 && G.indexOf(B) === -1)) {
                for (var Yt = G.split(x), Bt = 0; Bt < Yt.length; Bt++) {
                  if (((U = Yt[Bt]), (C += U.length), Bt !== Yt.length - 1))
                    C += x.length;
                  else if (L) return $t();
                  if (!A || U.substring(0, I) !== A) {
                    if (W) {
                      if (((F = []), It(U.split(y)), me(), k)) return $t();
                    } else It(U.split(y));
                    if (ot && ot <= Bt) return ((F = F.slice(0, ot)), $t(!0));
                  }
                }
                return $t();
              }
              for (
                var pt = G.indexOf(y, C),
                  it = G.indexOf(x, C),
                  Nt = new RegExp(vt(d) + vt(B), "g"),
                  at = G.indexOf(B, C);
                ;
              )
                if (G[C] === B)
                  for (at = C, C++; ;) {
                    if ((at = G.indexOf(B, at + 1)) === -1)
                      return (
                        L ||
                          ut.push({
                            type: "Quotes",
                            code: "MissingQuotes",
                            message: "Quoted field unterminated",
                            row: F.length,
                            index: C,
                          }),
                        he()
                      );
                    if (at === r - 1)
                      return he(G.substring(C, at).replace(Nt, B));
                    if (B === d && G[at + 1] === d) at++;
                    else if (B === d || at === 0 || G[at - 1] !== d) {
                      pt !== -1 && pt < at + 1 && (pt = G.indexOf(y, at + 1));
                      var jt = de(
                        (it =
                          it !== -1 && it < at + 1
                            ? G.indexOf(x, at + 1)
                            : it) === -1
                          ? pt
                          : Math.min(pt, it),
                      );
                      if (G.substr(at + 1 + jt, j) === y) {
                        (U.push(G.substring(C, at).replace(Nt, B)),
                          G[(C = at + 1 + jt + j)] !== B &&
                            (at = G.indexOf(B, C)),
                          (pt = G.indexOf(y, C)),
                          (it = G.indexOf(x, C)));
                        break;
                      }
                      if (
                        ((jt = de(it)),
                        G.substring(at + 1 + jt, at + 1 + jt + Y) === x)
                      ) {
                        if (
                          (U.push(G.substring(C, at).replace(Nt, B)),
                          _e(at + 1 + jt + Y),
                          (pt = G.indexOf(y, C)),
                          (at = G.indexOf(B, C)),
                          W && (me(), k))
                        )
                          return $t();
                        if (ot && F.length >= ot) return $t(!0);
                        break;
                      }
                      (ut.push({
                        type: "Quotes",
                        code: "InvalidQuotes",
                        message: "Trailing quote on quoted field is malformed",
                        row: F.length,
                        index: C,
                      }),
                        at++);
                    }
                  }
                else if (A && U.length === 0 && G.substring(C, C + I) === A) {
                  if (it === -1) return $t();
                  ((C = it + Y),
                    (it = G.indexOf(x, C)),
                    (pt = G.indexOf(y, C)));
                } else if (pt !== -1 && (pt < it || it === -1))
                  (U.push(G.substring(C, pt)),
                    (C = pt + j),
                    (pt = G.indexOf(y, C)));
                else {
                  if (it === -1) break;
                  if ((U.push(G.substring(C, it)), _e(it + Y), W && (me(), k)))
                    return $t();
                  if (ot && F.length >= ot) return $t(!0);
                }
              return he();
              function It(Vt) {
                (F.push(Vt), (P = C));
              }
              function de(Vt) {
                var Dt = 0;
                return (Dt =
                  Vt !== -1 &&
                  (Vt = G.substring(at + 1, Vt)) &&
                  Vt.trim() === ""
                    ? Vt.length
                    : Dt);
              }
              function he(Vt) {
                return (
                  L ||
                    (Vt === void 0 && (Vt = G.substring(C)),
                    U.push(Vt),
                    (C = r),
                    It(U),
                    W && me()),
                  $t()
                );
              }
              function _e(Vt) {
                ((C = Vt), It(U), (U = []), (it = G.indexOf(x, C)));
              }
              function $t(Vt) {
                if (m.header && !q && F.length && !O) {
                  var Dt = F[0],
                    ze = Object.create(null),
                    yt = new Set(Dt);
                  let kl = !1;
                  for (let Ze = 0; Ze < Dt.length; Ze++) {
                    let qe = gt(Dt[Ze]);
                    if (
                      ze[
                        (qe = $(m.transformHeader)
                          ? m.transformHeader(qe, Ze)
                          : qe)
                      ]
                    ) {
                      let gl,
                        g = ze[qe];
                      for (; (gl = qe + "_" + g), g++, yt.has(gl););
                      (yt.add(gl),
                        (Dt[Ze] = gl),
                        ze[qe]++,
                        (kl = !0),
                        ((nt = nt === null ? {} : nt)[gl] = qe));
                    } else ((ze[qe] = 1), (Dt[Ze] = qe));
                    yt.add(qe);
                  }
                  (kl && console.warn("Duplicate headers found and renamed."),
                    (O = !0));
                }
                return {
                  data: F,
                  errors: ut,
                  meta: {
                    delimiter: y,
                    linebreak: x,
                    aborted: k,
                    truncated: !!Vt,
                    cursor: P + (q || 0),
                    renamedHeaders: nt,
                  },
                };
              }
              function me() {
                (H($t()), (F = []), (ut = []));
              }
            }),
              (this.abort = function () {
                k = !0;
              }),
              (this.getCharIndex = function () {
                return C;
              }));
          }
          function Ht(m) {
            var y = m.data,
              x = rt[y.workerId],
              A = !1;
            if (y.error) x.userError(y.error, y.file);
            else if (y.results && y.results.data) {
              var H = {
                abort: function () {
                  ((A = !0),
                    zt(y.workerId, {
                      data: [],
                      errors: [],
                      meta: { aborted: !0 },
                    }));
                },
                pause: qt,
                resume: qt,
              };
              if ($(x.userStep)) {
                for (
                  var ot = 0;
                  ot < y.results.data.length &&
                  (x.userStep(
                    {
                      data: y.results.data[ot],
                      errors: y.results.errors,
                      meta: y.results.meta,
                    },
                    H,
                  ),
                  !A);
                  ot++
                );
                delete y.results;
              } else
                $(x.userChunk) &&
                  (x.userChunk(y.results, H, y.file), delete y.results);
            }
            y.finished && !A && zt(y.workerId, y.results);
          }
          function zt(m, y) {
            var x = rt[m];
            ($(x.userComplete) && x.userComplete(y),
              x.terminate(),
              delete rt[m]);
          }
          function qt() {
            throw new Error("Not implemented.");
          }
          function te(m) {
            if (typeof m != "object" || m === null) return m;
            var y,
              x = Array.isArray(m) ? [] : {};
            for (y in m) x[y] = te(m[y]);
            return x;
          }
          function Et(m, y) {
            return function () {
              m.apply(y, arguments);
            };
          }
          function $(m) {
            return typeof m == "function";
          }
          return (
            (V.parse = function (m, y) {
              var x = (y = y || {}).dynamicTyping || !1;
              if (
                ($(x) && ((y.dynamicTypingFunction = x), (x = {})),
                (y.dynamicTyping = x),
                (y.transform = !!$(y.transform) && y.transform),
                y.downloadTimeout !== void 0)
              ) {
                var x = parseInt(y.downloadTimeout);
                if (isNaN(x))
                  throw new Error(
                    "Config downloadTimeout value (" +
                      y.downloadTimeout +
                      ") not parsable by parseInt(val).",
                  );
                y.downloadTimeout = x;
              }
              if (!y.worker || !V.WORKERS_SUPPORTED)
                return (
                  (x = null),
                  V.NODE_STREAM_INPUT,
                  typeof m == "string"
                    ? ((m = gt(m)), (x = new (y.download ? N : dt)(y)))
                    : m.readable === !0 && $(m.read) && $(m.on)
                      ? (x = new ct(y))
                      : ((o.File && m instanceof File) ||
                          m instanceof Object) &&
                        (x = new w(y)),
                  x.stream(m)
                );
              (((x = (() => {
                var A;
                return (
                  !!V.WORKERS_SUPPORTED &&
                  ((A = (() => {
                    var H = o.URL || o.webkitURL || null,
                      ot = z.toString();
                    return (
                      V.BLOB_URL ||
                      (V.BLOB_URL = H.createObjectURL(
                        new Blob(
                          [
                            "var global = (function() { if (typeof self !== 'undefined') { return self; } if (typeof window !== 'undefined') { return window; } if (typeof global !== 'undefined') { return global; } return {}; })(); global.IS_PAPA_WORKER=true; ",
                            "(",
                            ot,
                            ")();",
                          ],
                          { type: "text/javascript" },
                        ),
                      ))
                    );
                  })()),
                  ((A = new o.Worker(A)).onmessage = Ht),
                  (A.id = mt++),
                  (rt[A.id] = A))
                );
              })()).userStep = y.step),
                (x.userChunk = y.chunk),
                (x.userComplete = y.complete),
                (x.userError = y.error),
                (y.step = $(y.step)),
                (y.chunk = $(y.chunk)),
                (y.complete = $(y.complete)),
                (y.error = $(y.error)),
                delete y.worker,
                x.postMessage({ input: m, config: y, workerId: x.id }));
            }),
            (V.unparse = function (m, y) {
              var x = !1,
                A = !0,
                H = ",",
                ot = `\r
`,
                Ct = '"',
                nt = Ct + Ct,
                O = !1,
                B = null,
                d = !1,
                C =
                  ((() => {
                    if (typeof y == "object") {
                      if (
                        (typeof y.delimiter != "string" ||
                          V.BAD_DELIMITERS.filter(function (q) {
                            return y.delimiter.indexOf(q) !== -1;
                          }).length ||
                          (H = y.delimiter),
                        (typeof y.quotes != "boolean" &&
                          typeof y.quotes != "function" &&
                          !Array.isArray(y.quotes)) ||
                          (x = y.quotes),
                        (typeof y.skipEmptyLines != "boolean" &&
                          typeof y.skipEmptyLines != "string") ||
                          (O = y.skipEmptyLines),
                        typeof y.newline == "string" && (ot = y.newline),
                        typeof y.quoteChar == "string" &&
                          ((Ct = y.quoteChar), (nt = Ct + Ct)),
                        typeof y.header == "boolean" && (A = y.header),
                        Array.isArray(y.columns))
                      ) {
                        if (y.columns.length === 0)
                          throw new Error("Option columns is empty");
                        B = y.columns;
                      }
                      (y.escapeChar !== void 0 && (nt = y.escapeChar + Ct),
                        y.escapeFormulae instanceof RegExp
                          ? (d = y.escapeFormulae)
                          : typeof y.escapeFormulae == "boolean" &&
                            y.escapeFormulae &&
                            (d = /^[=+\-@\t\r].*$/));
                    }
                  })(),
                  new RegExp(vt(Ct), "g"));
              if (
                (typeof m == "string" && (m = JSON.parse(m)), Array.isArray(m))
              ) {
                if (!m.length || Array.isArray(m[0])) return k(null, m, O);
                if (typeof m[0] == "object")
                  return k(B || Object.keys(m[0]), m, O);
              } else if (typeof m == "object")
                return (
                  typeof m.data == "string" && (m.data = JSON.parse(m.data)),
                  Array.isArray(m.data) &&
                    (m.fields || (m.fields = (m.meta && m.meta.fields) || B),
                    m.fields ||
                      (m.fields = Array.isArray(m.data[0])
                        ? m.fields
                        : typeof m.data[0] == "object"
                          ? Object.keys(m.data[0])
                          : []),
                    Array.isArray(m.data[0]) ||
                      typeof m.data[0] == "object" ||
                      (m.data = [m.data])),
                  k(m.fields || [], m.data || [], O)
                );
              throw new Error("Unable to serialize unrecognized input");
              function k(q, L, r) {
                var j = "",
                  Y =
                    (typeof q == "string" && (q = JSON.parse(q)),
                    typeof L == "string" && (L = JSON.parse(L)),
                    Array.isArray(q) && 0 < q.length),
                  I = !Array.isArray(L[0]);
                if (Y && A) {
                  for (var W = 0; W < q.length; W++)
                    (0 < W && (j += H), (j += G(q[W], W)));
                  0 < L.length && (j += ot);
                }
                for (var F = 0; F < L.length; F++) {
                  var ut = (Y ? q : L[F]).length,
                    U = !1,
                    P = Y ? Object.keys(L[F]).length === 0 : L[F].length === 0;
                  if (
                    (r &&
                      !Y &&
                      (U =
                        r === "greedy"
                          ? L[F].join("").trim() === ""
                          : L[F].length === 1 && L[F][0].length === 0),
                    r === "greedy" && Y)
                  ) {
                    for (var Yt = [], Bt = 0; Bt < ut; Bt++) {
                      var pt = I ? q[Bt] : Bt;
                      Yt.push(L[F][pt]);
                    }
                    U = Yt.join("").trim() === "";
                  }
                  if (!U) {
                    for (var it = 0; it < ut; it++) {
                      0 < it && !P && (j += H);
                      var Nt = Y && I ? q[it] : it;
                      j += G(L[F][Nt], it);
                    }
                    F < L.length - 1 && (!r || (0 < ut && !P)) && (j += ot);
                  }
                }
                return j;
              }
              function G(q, L) {
                var r, j, Y;
                return q == null
                  ? ""
                  : q.constructor === Date
                    ? isNaN(q.getTime())
                      ? ""
                      : q.toISOString()
                    : ((Y = !1),
                      d &&
                        typeof q == "string" &&
                        d.test(q) &&
                        ((q = "'" + q), (Y = !0)),
                      (j = (r = q.toString()).replace(C, nt)),
                      (Y =
                        Y ||
                        x === !0 ||
                        (typeof x == "function" && x(q, L)) ||
                        (Array.isArray(x) && x[L]) ||
                        ((I, W) => {
                          for (var F = 0; F < W.length; F++)
                            if (-1 < I.indexOf(W[F])) return !0;
                          return !1;
                        })(j, V.BAD_DELIMITERS) ||
                        -1 < j.indexOf(H) ||
                        -1 < r.indexOf(Ct) ||
                        j.charAt(0) === " " ||
                        j.charAt(j.length - 1) === " ")
                        ? Ct + j + Ct
                        : j);
              }
            }),
            (V.RECORD_SEP = ""),
            (V.UNIT_SEP = ""),
            (V.BYTE_ORDER_MARK = "\uFEFF"),
            (V.BAD_DELIMITERS = [
              "\r",
              `
`,
              '"',
              V.BYTE_ORDER_MARK,
            ]),
            (V.WORKERS_SUPPORTED = !Q && !!o.Worker),
            (V.NODE_STREAM_INPUT = 1),
            (V.LocalChunkSize = 10485760),
            (V.RemoteChunkSize = 5242880),
            (V.DefaultDelimiter = ","),
            (V.Parser = Ut),
            (V.ParserHandle = st),
            (V.NetworkStreamer = N),
            (V.FileStreamer = w),
            (V.StringStreamer = dt),
            (V.ReadableStreamStreamer = ct),
            Z &&
              (o.onmessage = function (m) {
                ((m = m.data),
                  V.WORKER_ID === void 0 && m && (V.WORKER_ID = m.workerId),
                  typeof m.input == "string"
                    ? o.postMessage({
                        workerId: V.WORKER_ID,
                        results: V.parse(m.input, m.config),
                        finished: !0,
                      })
                    : ((o.File && m.input instanceof File) ||
                        m.input instanceof Object) &&
                      (m = V.parse(m.input, m.config)) &&
                      o.postMessage({
                        workerId: V.WORKER_ID,
                        results: m,
                        finished: !0,
                      }));
              }),
            ((N.prototype = Object.create(X.prototype)).constructor = N),
            ((w.prototype = Object.create(X.prototype)).constructor = w),
            ((dt.prototype = Object.create(dt.prototype)).constructor = dt),
            ((ct.prototype = Object.create(X.prototype)).constructor = ct),
            V
          );
        });
      })(vc)),
    vc.exports
  );
}
var vg = mg();
const yg = By(vg),
  Dl = (S) =>
    String(S ?? "")
      .trim()
      .replace(/\s+/g, " ")
      .toLowerCase(),
  gg = new Set([
    "yes",
    "attending",
    "accepted",
    "accept",
    "confirmed",
    "true",
    "1",
    "going",
    "will attend",
    "rsvp yes",
  ]);
function pg(S) {
  return gg.has(Dl(S));
}
function bg(S) {
  const R = yg.parse(S.replace(/^\uFEFF/, ""), {
    header: !0,
    skipEmptyLines: "greedy",
    transformHeader: (z) => z.trim(),
  });
  if (R.errors.length)
    throw new Error(`Could not read CSV: ${R.errors[0].message}`);
  if (!R.meta.fields?.length || !R.data.length)
    throw new Error("This CSV has no guest rows.");
  if (R.data.length > 5e3)
    throw new Error("Please import no more than 5,000 guests at a time.");
  return { headers: R.meta.fields, rows: R.data };
}
function Sg(S) {
  const R = (...o) => S.find((Q) => o.includes(Dl(Q))) || "",
    z =
      Dl(S[0]) === "first name" &&
      Dl(S[1]) === "last name" &&
      Dl(S[8]) === "wedding day - rsvp" &&
      /^wedding day - .*dietary/i.test(S[9] || "");
  return {
    template: z ? "the-knot-wedding-day" : "",
    name: z ? "" : R("full name", "guest name", "name"),
    firstName: R("first name", "first"),
    lastName: R("last name", "last"),
    status: z
      ? S[8]
      : S.find(
          (o) => /wedding/i.test(o) && /rsvp|status|attend|response/i.test(o),
        ) || R("rsvp status", "rsvp", "attending", "status", "response"),
    email: R("email", "email address"),
    externalId: R("guest id", "id", "guest identifier"),
    household: z ? "" : R("household", "party", "group", "household name"),
    meal: z ? "" : R("meal", "meal choice", "meal selection", "dinner choice"),
    dietary: z
      ? S[9]
      : S.find((o) => /wedding/i.test(o) && /dietary|allerg/i.test(o)) ||
        R(
          "dietary restrictions",
          "dietary requirements",
          "dietary notes",
          "allergies",
        ),
  };
}
function xg(S, R) {
  if (!R.status)
    throw new Error("Choose the RSVP column for your wedding event.");
  if (!R.name && !R.firstName)
    throw new Error("Choose a full-name or first-name column.");
  const z = new Set();
  return S.map((o, Q) => {
    const Z = (
      R.name
        ? String(o[R.name] ?? "")
        : `${o[R.firstName] ?? ""} ${o[R.lastName] ?? ""}`
    )
      .trim()
      .replace(/\s+/g, " ");
    if (!Z) throw new Error(`Row ${Q + 2} is missing a name.`);
    const rt = String(o[R.email] ?? "").trim(),
      mt = String(o[R.externalId] ?? "").trim(),
      V = mt ? `id:${Dl(mt)}` : `name:${Dl(Z)}|${Dl(rt)}`;
    if (z.has(V))
      throw new Error(
        `“${Z}” appears more than once. Map a unique guest ID or email column so each person can be identified.`,
      );
    return (
      z.add(V),
      {
        sourceKey: V,
        name: Z,
        attending:
          R.template === "the-knot-wedding-day" ||
          Dl(R.status) === "wedding day - rsvp"
            ? Dl(o[R.status]) === "attending"
            : pg(o[R.status]),
        email: rt,
        dietary: R.dietary ? String(o[R.dietary] ?? "").trim() : void 0,
        household: String(o[R.household] ?? "").trim(),
        meal: String(o[R.meal] ?? "").trim(),
      }
    );
  });
}
function Tg({ onClose: S, onImport: R, busy: z, session: o, revision: Q }) {
  const [Z, rt] = J.useState(null),
    [mt, V] = J.useState(null),
    [gt, X] = J.useState(""),
    [N, w] = J.useState(""),
    [dt, ct] = J.useState(!1),
    [st, vt] = J.useState(!1),
    [Ut, Ht] = J.useState(!1),
    [zt, qt] = J.useState(null),
    [te, Et] = J.useState(!1),
    [$, m] = J.useState(""),
    [y, x] = J.useState(0),
    A = J.useMemo(() => {
      if (!Z || !mt) return { guests: [], error: "" };
      try {
        return { guests: xg(Z.rows, mt), error: "" };
      } catch (O) {
        return { guests: [], error: O.message };
      }
    }, [Z, mt]);
  J.useEffect(() => {
    let O = !1;
    if ((qt(null), vt(!1), Ht(!1), m(""), !A.guests.length || A.error)) {
      Et(!1);
      return;
    }
    Et(!0);
    const B = setTimeout(() => {
      Ol(o, "/import/preview", { guests: A.guests, complete: dt })
        .then((d) => {
          O || qt(d);
        })
        .catch((d) => {
          O || m(d.message);
        })
        .finally(() => {
          O || Et(!1);
        });
    }, 200);
    return () => {
      ((O = !0), clearTimeout(B));
    };
  }, [A, dt, o, Q, y]);
  async function H(O) {
    if (O) {
      if ((w(""), O.size > 3e6)) {
        w("Choose a CSV smaller than 3 MB.");
        return;
      }
      try {
        const B = bg(await O.text());
        (rt(B), V(Sg(B.headers)), X(O.name), vt(!1), ct(!1));
      } catch (B) {
        w(B.message);
      }
    }
  }
  const ot = A.guests.filter((O) => O.attending).length,
    Ct = mt?.template === "the-knot-wedding-day",
    nt = zt?.removals.filter((O) => O.table).length || 0;
  return c.jsxs(Al, {
    title: Z
      ? "Review your guest-list update."
      : "Update your guests. Keep their places.",
    eyebrow: "IMPORT GUEST LIST",
    onClose: S,
    wide: !!Z,
    children: [
      Z
        ? mt &&
          c.jsxs(c.Fragment, {
            children: [
              c.jsxs("p", {
                className: "modal-intro",
                children: [
                  c.jsx(wm, { size: 16 }),
                  gt,
                  " · ",
                  Z.rows.length,
                  " guest rows",
                ],
              }),
              c.jsxs("div", {
                className: "notice",
                children: [
                  c.jsx(Yu, { size: 19 }),
                  c.jsxs("div", {
                    children: [
                      c.jsx("strong", {
                        children: Ct
                          ? "The Knot wedding-day export recognized"
                          : "Choose your wedding-day columns",
                      }),
                      c.jsx("p", {
                        children: Ct
                          ? "Names: columns A + B. Wedding attendance: column I, Attending only. Dietary restrictions: column J. Rehearsal dinner fields are ignored."
                          : "Use the wedding RSVP and wedding dietary columns, rather than fields for another event.",
                      }),
                    ],
                  }),
                ],
              }),
              !Ct &&
                c.jsx("div", {
                  className: "mapping-grid",
                  children: [
                    ["name", "Full name"],
                    ["firstName", "First name (if separate)"],
                    ["lastName", "Last name (if separate)"],
                    ["status", "Wedding RSVP status *"],
                    ["externalId", "Unique guest ID"],
                    ["email", "Email"],
                    ["dietary", "Wedding dietary restrictions"],
                  ].map(([O, B]) =>
                    c.jsxs(
                      "label",
                      {
                        className: "field-label",
                        children: [
                          B,
                          c.jsxs("select", {
                            value: mt[O],
                            onChange: (d) => V({ ...mt, [O]: d.target.value }),
                            children: [
                              c.jsx("option", {
                                value: "",
                                children: "Select a column",
                              }),
                              Z.headers.map((d) =>
                                c.jsx("option", { value: d, children: d }, d),
                              ),
                            ],
                          }),
                        ],
                      },
                      O,
                    ),
                  ),
                }),
              A.error
                ? c.jsx("div", {
                    className: "form-error",
                    role: "alert",
                    children: A.error,
                  })
                : c.jsxs("div", {
                    className: "import-summary",
                    children: [
                      c.jsx(eg, { size: 21 }),
                      c.jsxs("span", {
                        children: [
                          c.jsxs("strong", { children: [ot, " attending"] }),
                          " in this CSV.",
                          c.jsx("br", {}),
                          c.jsxs("small", {
                            children: [
                              Z.rows.length - ot,
                              " declined, pending, or unrecognized responses are excluded from new attendees.",
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
              c.jsxs("details", {
                className: "import-options",
                children: [
                  c.jsx("summary", {
                    children: "Attendance and removal options",
                  }),
                  c.jsxs("label", {
                    className: "checkbox-label",
                    children: [
                      c.jsx("input", {
                        type: "checkbox",
                        checked: dt,
                        onChange: (O) => ct(O.target.checked),
                      }),
                      "Also remove previously imported guests missing from this file or no longer marked attending. Leave this off to keep every existing guest and seat.",
                    ],
                  }),
                ],
              }),
              te &&
                c.jsx("p", {
                  className: "fine-print",
                  role: "status",
                  children:
                    "Checking this upload against your saved seating plan…",
                }),
              $ &&
                c.jsxs("div", {
                  className: "form-error",
                  role: "alert",
                  children: [
                    $,
                    c.jsxs("button", {
                      className: "text-button",
                      onClick: () => x((O) => O + 1),
                      children: [c.jsx(er, { size: 13 }), "Check again"],
                    }),
                  ],
                }),
              zt &&
                c.jsxs("div", {
                  className: "import-review",
                  "aria-label": "Import changes preview",
                  children: [
                    c.jsxs("div", {
                      className: "import-preserved",
                      children: [
                        c.jsx(mc, { size: 19 }),
                        c.jsxs("strong", {
                          children: [
                            zt.preservedSeats,
                            " seated guests keep their tables",
                          ],
                        }),
                      ],
                    }),
                    c.jsxs("div", {
                      className: "import-change-counts",
                      children: [
                        c.jsxs("span", {
                          children: [
                            c.jsx("strong", { children: zt.added }),
                            " new attendees",
                          ],
                        }),
                        c.jsxs("span", {
                          children: [
                            c.jsx("strong", { children: zt.updated }),
                            " existing guests updated",
                          ],
                        }),
                        c.jsxs("span", {
                          children: [
                            c.jsx("strong", { children: zt.removals.length }),
                            " guests removed",
                          ],
                        }),
                      ],
                    }),
                    !dt &&
                      zt.keptExisting > 0 &&
                      c.jsxs("p", {
                        children: [
                          zt.keptExisting,
                          " other existing guests will also be kept.",
                        ],
                      }),
                    zt.demoRemoved > 0 &&
                      c.jsxs("p", {
                        children: [
                          zt.demoRemoved,
                          " fictional sample guests will be replaced with your real guest list.",
                        ],
                      }),
                    zt.removals.length > 0 &&
                      c.jsxs(c.Fragment, {
                        children: [
                          c.jsxs("p", {
                            className: "removal-heading",
                            children: [
                              "Review these removals · ",
                              nt,
                              " occupied seats will be freed",
                            ],
                          }),
                          c.jsx("ul", {
                            className: "import-removals",
                            children: zt.removals.map((O) =>
                              c.jsxs(
                                "li",
                                {
                                  children: [
                                    c.jsx("strong", { children: O.name }),
                                    c.jsx("span", {
                                      children: O.table
                                        ? Qe(O.table)
                                        : "Unseated",
                                    }),
                                  ],
                                },
                                O.id,
                              ),
                            ),
                          }),
                        ],
                      }),
                  ],
                }),
              c.jsx("p", {
                className: "fine-print",
                children: Ct
                  ? "Only Attending in column I is eligible. Column J supplies the latest wedding-day dietary restrictions, including clearing an old note when the new cell is blank."
                  : "Attending values: Yes, Attending, Accepted, Accept, Confirmed, True, 1, Going, Will attend, RSVP yes. Choose a wedding dietary column to update dietary notes.",
              }),
              c.jsxs("label", {
                className: "checkbox-label",
                children: [
                  c.jsx("input", {
                    type: "checkbox",
                    checked: st,
                    onChange: (O) => vt(O.target.checked),
                  }),
                  "I selected the wedding event’s RSVP column and reviewed the changes above.",
                ],
              }),
              !!zt?.removals.length &&
                c.jsxs("label", {
                  className: "checkbox-label removal-confirmation",
                  children: [
                    c.jsx("input", {
                      type: "checkbox",
                      checked: Ut,
                      onChange: (O) => Ht(O.target.checked),
                    }),
                    "Remove the ",
                    zt.removals.length,
                    " guests listed above and free their seats.",
                  ],
                }),
              c.jsxs("div", {
                className: "modal-actions",
                children: [
                  c.jsx("button", {
                    className: "button secondary",
                    disabled: z,
                    onClick: () => {
                      (rt(null), V(null));
                    },
                    children: "Choose another file",
                  }),
                  c.jsxs("button", {
                    className: "button primary",
                    disabled:
                      z ||
                      te ||
                      !!A.error ||
                      !st ||
                      !zt ||
                      zt.revision !== Q ||
                      (zt.removals.length > 0 && !Ut),
                    onClick: async () => {
                      zt &&
                        ((await R(A.guests, {
                          complete: dt,
                          expectedRevision: zt.revision,
                        })) ||
                          x((B) => B + 1));
                    },
                    children: [
                      z ? "Updating…" : "Update guest list",
                      c.jsx(ar, { size: 16 }),
                    ],
                  }),
                ],
              }),
            ],
          })
        : c.jsxs(c.Fragment, {
            children: [
              c.jsx("p", {
                className: "modal-intro",
                children:
                  "Upload your latest CSV from The Knot. Existing guests keep their tables; new attending guests join the unseated pool.",
              }),
              c.jsxs("div", {
                className: "notice",
                children: [
                  c.jsx(Yu, { size: 20 }),
                  c.jsxs("div", {
                    children: [
                      c.jsx("strong", {
                        children: "Your seating progress stays put",
                      }),
                      c.jsx("p", {
                        children:
                          "Uploads add or update guests by default. Guests missing from a newer CSV stay in your plan. Table numbers, custom names, and seating assignments are kept.",
                      }),
                    ],
                  }),
                ],
              }),
              c.jsxs("label", {
                className: "upload-area",
                onDragOver: (O) => O.preventDefault(),
                onDrop: (O) => {
                  (O.preventDefault(), H(O.dataTransfer.files[0]));
                },
                children: [
                  c.jsx("span", {
                    className: "upload-icon",
                    children: c.jsx(wm, { size: 28 }),
                  }),
                  c.jsx("strong", { children: "Drop your CSV here" }),
                  c.jsx("span", {
                    children: "or click to choose a file · up to 3 MB",
                  }),
                  c.jsx("input", {
                    type: "file",
                    accept: ".csv,text/csv",
                    onChange: (O) => {
                      H(O.target.files?.[0]);
                    },
                  }),
                ],
              }),
              c.jsx("p", {
                className: "fine-print",
                children:
                  "Use the same guest ID column on each upload when available. Otherwise, we match unique names and use email to distinguish guests with the same name. Ambiguous matches are stopped for review.",
              }),
            ],
          }),
      N && c.jsx("p", { className: "form-error", role: "alert", children: N }),
    ],
  });
}
const { GuestTablePicker, VenueLayer, FloorPlanEditor } = createFeatures(J, Al);

function Eg() {
  const [pickerOpen, setPickerOpen] = J.useState(false);
  const [planSizing, setPlanSizing] = J.useState("fit");
  const [S, R] = J.useState(null),
    [z, o] = J.useState(null),
    [Q, Z] = J.useState(""),
    [rt, mt] = J.useState(""),
    [V, gt] = J.useState(""),
    [X, N] = J.useState(!1),
    [w, dt] = J.useState(!1),
    [ct, st] = J.useState(null),
    [vt, Ut] = J.useState("plan"),
    [Ht, zt] = J.useState("unseated"),
    [qt, te] = J.useState(""),
    [Et, $] = J.useState(null),
    [m, y] = J.useState(null),
    [x, A] = J.useState(1),
    [H, ot] = J.useState("map"),
    [Ct, nt] = J.useState(!1),
    [O, B] = J.useState(""),
    [d, C] = J.useState(""),
    [k, G] = J.useState(!1),
    [q, L] = J.useState(null),
    [r, j] = J.useState(null),
    [Y, I] = J.useState(null);
  $m(Ct);
  const W = J.useRef(!1),
    F = J.useRef(-1),
    ut = J.useRef(0),
    U = J.useCallback(() => {
      (st(null), G(!1), L(null));
    }, []),
    P = J.useCallback(() => y(null), []),
    Yt = J.useCallback(() => {
      (j(null), I(null));
    }, []),
    Bt = J.useCallback((g) => {
      g.revision >= F.current && ((F.current = g.revision), o(g));
    }, []);
  (J.useEffect(() => {
    W.current ||
      ((W.current = !0),
      (async () => {
        try {
          let g = fg();
          g || (g = await Ol(null, "", { name: "Our wedding" }));
          const tt = await Ol(g);
          ((F.current = tt.revision), Pf(g), R(g), B(g.editorKey || ""), o(tt));
        } catch (g) {
          Z(g.message);
        }
      })());
  }, []),
    J.useEffect(() => {
      if (!S) return;
      const g = new AbortController();
      let tt,
        bt = !1;
      async function Ce() {
        try {
          const ue = await fetch(`/api/weddings/${S.id}/events`, {
            headers: { Authorization: `Bearer ${S.key}` },
            signal: g.signal,
          });
          if (!ue.ok)
            throw (
              ue.status === 401 &&
                (Z(
                  "This invitation link has been replaced. Ask the plan owner for a new link.",
                ),
                (bt = !0)),
              new Error("Connection unavailable")
            );
          const Oe = ue.body.getReader(),
            Jl = new TextDecoder();
          let $l = "";
          for (N(!0); !bt;) {
            const { value: Fa, done: yc } = await Oe.read();
            if (yc) break;
            $l += Jl.decode(Fa, { stream: !0 });
            let Ia;
            for (
              ;
              (Ia = $l.indexOf(`

`)) >= 0;
            ) {
              const gc = $l.slice(0, Ia);
              $l = $l.slice(Ia + 2);
              const Bu = gc
                .split(
                  `
`,
                )
                .find((Fl) => Fl.startsWith("data: "));
              if (Bu && JSON.parse(Bu.slice(6)).revision > F.current) {
                const Me = await Ol(S);
                bt || Bt(Me);
              }
            }
          }
        } catch {}
        bt ||
          (N(!1),
          (tt = setTimeout(() => {
            Ce();
          }, 2500)));
      }
      Ce();
      const De = () => {
        document.visibilityState === "visible" &&
          Ol(S)
            .then(Bt)
            .catch(() => {});
      };
      return (
        document.addEventListener("visibilitychange", De),
        () => {
          ((bt = !0),
            g.abort(),
            tt && clearTimeout(tt),
            document.removeEventListener("visibilitychange", De));
        }
      );
    }, [S, Bt]),
    J.useEffect(() => {
      if (!V) return;
      const g = setTimeout(() => gt(""), 4e3);
      return () => clearTimeout(g);
    }, [V]),
    J.useEffect(() => {
      Et && z && !z.guests.some((g) => g.id === Et) && $(null);
    }, [z, Et]),
    J.useEffect(() => {
      r && z && !z.guests.some((g) => g.id === r) && Yt();
    }, [z, r, Yt]));
  async function pt(g, tt, bt) {
    if (!S) return !1;
    (ut.current++, dt(!0), mt(""));
    try {
      return (Bt(await Ol(S, g, tt, bt)), !0);
    } catch (Ce) {
      return (mt(Ce.message), !1);
    } finally {
      (ut.current--, dt(ut.current > 0));
    }
  }
  async function it(g, tt, bt) {
    const guest=z?.guests.find(item=>item.id===g);
    if(!guest)return false;
    if(guest.tableId===tt&&(bt===undefined||guest.seatIndex===bt))return true;
    const success=await pt('/assign',{
      guestId:g,tableId:tt,seatIndex:bt,
      swap:bt!==undefined&&z.guests.some(item=>item.tableId===tt&&item.seatIndex===bt&&item.id!==g),
    });
    if(success){$(null);setPickerOpen(false);gt(tt?`${guest.name} seated at ${Qe(z.tables.find(item=>item.id===tt))}.`:`${guest.name} moved to the unseated pool.`);}
    return success;
  }
  async function Nt(g) {
    (dt(!0), mt(""));
    try {
      const tt = await Ol(null, "", {
          name: g ? "The sample wedding" : "Our wedding",
          demo: g,
        }),
        bt = await Ol(tt);
      ((F.current = bt.revision),
        Pf(tt),
        R(tt),
        B(tt.editorKey || ""),
        o(bt),
        $(null),
        y(null),
        st(null),
        Z(""),
        zt("unseated"));
    } catch (tt) {
      mt(tt.message);
    } finally {
      dt(!1);
    }
  }
  function at(g) {
    (L(g), y(null), st("delete"));
  }
  function jt(g) {
    (I(m), y(null), $(null), j(g.id), nt(!1));
  }
  async function It() {
    const g = q;
    g &&
      (await pt(`/guests/${g.id}`, void 0, "DELETE")) &&
      (U(), gt(`${g.name} removed from the guest list.`));
  }
  async function de() {
    if (S) {
      (dt(!0), mt(""));
      try {
        const { key: g } = await Ol(S, "/sharing", {}),
          tt = { ...S, editorKey: g };
        (Pf(tt),
          R(tt),
          B(g),
          G(!1),
          gt("New family link created. Previous family links no longer work."));
      } catch (g) {
        mt(g.message);
      } finally {
        dt(!1);
      }
    }
  }
  function he() {
    if (!z) return;
    const g = (Oe) => `"${Oe.replaceAll('"', '""')}"`,
      tt = (Oe) => g(/^[\s]*[=+@\-\t\r]/.test(Oe) ? `'${Oe}` : Oe),
      bt = [
        ["Name", "Wedding dietary restrictions", "Table"],
        ...z.guests.map((Oe) => [
          Oe.name,
          Oe.dietary,
          z.tables.find((Jl) => Jl.id === Oe.tableId)
            ? Qe(z.tables.find((Jl) => Jl.id === Oe.tableId))
            : "Unseated",
        ]),
      ],
      Ce = new Blob(
        [
          "\uFEFF" +
            bt.map((Oe) => Oe.map(tt).join(",")).join(`\r
`),
        ],
        { type: "text/csv;charset=utf-8;" },
      ),
      De = URL.createObjectURL(Ce),
      ue = document.createElement("a");
    ((ue.href = De),
      (ue.download = "wedding-seating-plan.csv"),
      ue.click(),
      setTimeout(() => URL.revokeObjectURL(De), 1e3),
      gt("Your seating plan has been exported."));
  }
  const _e = z?.guests.filter((g) => !g.tableId) || [],
    $t = z?.guests.filter((g) => g.tableId) || [],
    me = J.useMemo(
      () =>
        z?.guests.filter(
          (g) =>
            (Ht === "all" || (Ht === "unseated" ? !g.tableId : !!g.tableId)) &&
            `${g.name} ${g.dietary}`.toLowerCase().includes(qt.toLowerCase()),
        ) || [],
      [z, Ht, qt],
    ),
    Vt = z?.guests.find((g) => g.id === Et),
    Dt = z?.guests.find((g) => g.id === r),
    ze = z?.tables.find((g) => g.id === Dt?.tableId),
    yt = z?.tables.find((g) => g.id === m),
    kl = z?.tables.reduce((g, tt) => g + tt.capacity, 0) || 200;
  function Ze(g) {
    Et ? (it(Et, g.id), nt(!1)) : y(g.id);
  }
  if (Q)
    return c.jsxs("div", {
      className: "standalone",
      children: [
        c.jsxs("span", {
          className: "brand",
          children: [
            c.jsx(dc, {}),
            "Placecard",
            c.jsx("span", { className: "brand-dot", children: "." }),
          ],
        }),
        c.jsxs("div", {
          className: "standalone-card",
          children: [
            c.jsx(Yu, { size: 32 }),
            c.jsx("h1", { children: "Open seating plan" }),
            c.jsx("p", { children: Q }),
            c.jsxs("button", {
              className: "button primary",
              onClick: () => location.reload(),
              children: ["Try again", c.jsx(er, { size: 16 })],
            }),
            c.jsx("button", {
              className: "text-button",
              disabled: w,
              onClick: () => {
                Nt(!1);
              },
              children: "Create a separate new plan",
            }),
            rt && c.jsx("p", { role: "alert", children: rt }),
          ],
        }),
      ],
    });
  if (!z)
    return c.jsxs("div", {
      className: "standalone loading",
      children: [
        c.jsxs("span", {
          className: "brand",
          children: [
            c.jsx(dc, {}),
            "Placecard",
            c.jsx("span", { className: "brand-dot", children: "." }),
          ],
        }),
        c.jsx(ig, { className: "spin" }),
        c.jsx("p", { children: "Loading plan…" }),
      ],
    });
  const qe = z.date
      ? new Date(`${z.date}T12:00:00`).toLocaleDateString("en-US", {
          month: "long",
          day: "numeric",
          year: "numeric",
        })
      : null,
    gl = c.jsxs("aside", {
      className: `guest-panel ${Ct ? "mobile-open" : ""}`,
      children: [
        c.jsxs("div", {
          className: "pool-heading",
          children: [
            c.jsx("div", {
              children: c.jsxs("h2", {
                children: [
                  "Your guests ",
                  c.jsx("span", {
                    className: "count-badge",
                    children: z.guests.length,
                  }),
                ],
              }),
            }),
            c.jsx("button", {
              className: "icon-button add-guest",
              "aria-label": "Add a guest",
              onClick: () => st("add"),
              children: c.jsx(ja, { size: 18 }),
            }),
            c.jsx("button", {
              className: "icon-button mobile-close",
              "aria-label": "Close guest pool",
              onClick: () => nt(!1),
              children: c.jsx(Na, { size: 18 }),
            }),
          ],
        }),
        c.jsxs("label", {
          className: "search-field",
          children: [
            c.jsx(Gm, { size: 16 }),
            c.jsx("input", {
              placeholder: "Find a guest or dietary need…",
              "aria-label": "Search guests",
              value: qt,
              onChange: (g) => te(g.target.value),
            }),
            qt &&
              c.jsx("button", {
                className: "icon-button",
                "aria-label": "Clear search",
                onClick: () => te(""),
                children: c.jsx(Na, { size: 13 }),
              }),
          ],
        }),
        c.jsx("div", {
          className: "guest-filters",
          role: "tablist",
          "aria-label": "Guest seating status",
          children: ["unseated", "seated", "all"].map((g) =>
            c.jsxs(
              "button",
              {
                role: "tab",
                "aria-selected": Ht === g,
                className: Ht === g ? "active" : "",
                onClick: () => zt(g),
                children: [
                  g === "unseated"
                    ? "Unseated"
                    : g === "seated"
                      ? "Seated"
                      : "All",
                  " ",
                  c.jsx("span", {
                    children:
                      g === "unseated"
                        ? _e.length
                        : g === "seated"
                          ? $t.length
                          : z.guests.length,
                  }),
                ],
              },
              g,
            ),
          ),
        }),
        c.jsxs("div", {
          className: "pool-list-heading",
          children: [
            c.jsx("span", {
              children:
                Ht === "unseated"
                  ? "READY FOR A SEAT"
                  : Ht === "seated"
                    ? "SEATED"
                    : "ALL GUESTS",
            }),
            c.jsx("span", { children: me.length }),
          ],
        }),
        c.jsx("div", {
          className: "guest-list",
          onDragOver: (g) => {
            (g.preventDefault(), (g.dataTransfer.dropEffect = "move"));
          },
          onDrop: (g) => {
            g.preventDefault();
            const tt = g.dataTransfer.getData("text/plain");
            tt && it(tt, null);
          },
          children: me.length
            ? me.map((g) =>
                c.jsx(
                  Xm,
                  {
                    guest: g,
                    selected: Et === g.id,
                    onDelete: () => at(g),
                    onSelect: () => {
                      ($(g.id), setPickerOpen(true), mt(""),
                        window.innerWidth < 900 && nt(!1));
                    },
                    tableName: g.tableId
                      ? Qe(z.tables.find((tt) => tt.id === g.tableId))
                      : void 0,
                  },
                  g.id,
                ),
              )
            : c.jsxs("div", {
                className: "pool-empty",
                children: [
                  c.jsxs("span", {
                    className: "empty-illustration",
                    children: [
                      c.jsx(hc, { size: 29 }),
                      c.jsx(Wf, { size: 14 }),
                    ],
                  }),
                  c.jsx("h3", {
                    children: qt
                      ? "No guests found"
                      : z.guests.length
                        ? Ht === "unseated"
                          ? "All guests seated."
                          : "No guests seated yet."
                        : "No guests yet.",
                  }),
                  c.jsx("p", {
                    children: qt
                      ? "Try a different name or family."
                      : z.guests.length
                        ? Ht === "unseated"
                          ? ""
                          : "Drag a guest onto a table, or select a guest and choose their table."
                        : "Import a CSV or add a guest.",
                  }),
                  !z.guests.length &&
                    z.role === "owner" &&
                    c.jsxs(c.Fragment, {
                      children: [
                        c.jsxs("button", {
                          className: "button primary",
                          onClick: () => st("connect"),
                          children: [c.jsx(ar, { size: 15 }), "Import CSV"],
                        }),
                        c.jsxs("button", {
                          className: "text-button",
                          disabled: w,
                          onClick: () => {
                            Nt(!0);
                          },
                          children: [
                            "Explore with sample guests",
                            c.jsx(Vn, { size: 13 }),
                          ],
                        }),
                      ],
                    }),
                ],
              }),
        }),
        c.jsxs("div", {
          className: "pool-footer",
          children: [
            c.jsx(Bm, { size: 15 }),
            c.jsxs("span", {
              children: [
                "Drag a guest to a table.",
                c.jsx("br", {}),
                c.jsx("strong", { children: "Or tap a guest, then a table." }),
              ],
            }),
          ],
        }),
      ],
    });
  return c.jsxs(c.Fragment, {
    children: [
      c.jsxs("header", {
        className: "site-header",
        children: [
          c.jsxs("a", {
            className: "brand",
            href: "/",
            onClick: (g) => {
              (g.preventDefault(), Ut("plan"));
            },
            "aria-label": "Placecard home",
            children: [
              c.jsx(dc, { size: 25, strokeWidth: 1.5 }),
              "Placecard",
              c.jsx("span", { className: "brand-dot", children: "." }),
            ],
          }),
          c.jsx("span", { className: "header-divider" }),
          c.jsxs("button", {
            className: "event-switch",
            onClick: () => st("settings"),
            children: [
              c.jsx("span", {
                className: "event-icon",
                children: c.jsx(Wf, { size: 13 }),
              }),
              c.jsx("span", { children: z.name }),
              c.jsx(Py, { size: 13 }),
            ],
          }),
          c.jsxs("nav", {
            className: "main-nav",
            "aria-label": "Main navigation",
            children: [
              c.jsx("button", {
                className: vt === "plan" ? "active" : "",
                onClick: () => Ut("plan"),
                children: "Seating plan",
              }),
              c.jsx("button", {
                className: vt === "guests" ? "active" : "",
                onClick: () => Ut("guests"),
                children: "Guest list",
              }),
            ],
          }),
          c.jsxs("div", {
            className: "header-right",
            children: [
              c.jsxs("div", {
                className: "header-plan-actions",
                children: [
                  z.role === "owner" &&
                    c.jsxs("button", {
                      className: "button secondary",
                      onClick: () => st("connect"),
                      children: [c.jsx(ar, { size: 16 }), "Import guest list"],
                    }),
                  c.jsxs("button", {
                    className: "button primary",
                    onClick: () => st("share"),
                    children: [c.jsx(cg, { size: 16 }), "Share plan"],
                  }),
                ],
              }),
            ],
          }),
        ],
      }),
      c.jsxs("main", {
        className: "page",
        children: [
          z.demo &&
            c.jsxs("div", {
              className: "demo-banner",
              children: [
                c.jsx(dc, { size: 17 }),
                c.jsx("span", {
                  children:
                    "You’re exploring a sample wedding. These are fictional guests.",
                }),
                c.jsxs("button", {
                  disabled: w,
                  onClick: () => {
                    Nt(!1);
                  },
                  children: ["Start your own plan", c.jsx(Vn, { size: 14 })],
                }),
              ],
            }),
          c.jsxs("section", {
            className: "summary-bar",
            "aria-label": "Seating summary",
            children: [
              c.jsxs("div", {
                className: "stat",
                children: [
                  c.jsx("span", {
                    className: "stat-icon",
                    children: c.jsx(hc, { size: 20 }),
                  }),
                  c.jsxs("div", {
                    children: [
                      c.jsx("strong", { children: z.guests.length }),
                      c.jsx("span", { children: "Guests" }),
                    ],
                  }),
                ],
              }),
              c.jsx("span", { className: "stat-divider" }),
              c.jsxs("div", {
                className: "stat",
                children: [
                  c.jsx("span", {
                    className: "stat-icon sage",
                    children: c.jsx(sg, { size: 21 }),
                  }),
                  c.jsxs("div", {
                    children: [
                      c.jsx("strong", { children: $t.length }),
                      c.jsx("span", { children: "Seated" }),
                    ],
                  }),
                ],
              }),
              c.jsx("span", { className: "stat-divider" }),
              c.jsxs("div", {
                className: "stat",
                children: [
                  c.jsx("span", {
                    className: "stat-icon peach",
                    children: c.jsx(mc, { size: 21 }),
                  }),
                  c.jsxs("div", {
                    children: [
                      c.jsxs("strong", {
                        children: [
                          _e.length,
                          c.jsx("span", { className: "tiny-dot" }),
                        ],
                      }),
                      c.jsx("span", { children: "To seat" }),
                    ],
                  }),
                ],
              }),
              c.jsx("span", { className: "stat-divider" }),
              c.jsxs("div", {
                className: "stat tables-stat",
                children: [
                  c.jsx("span", {
                    className: "stat-icon",
                    children: c.jsx(qm, { size: 19 }),
                  }),
                  c.jsxs("div", {
                    children: [
                      c.jsxs("strong", {
                        children: [
                          z.tables.length,
                          c.jsxs("small", { children: [" / ", kl, " seats"] }),
                        ],
                      }),
                      c.jsx("span", { children: "Tables" }),
                    ],
                  }),
                ],
              }),
            ],
          }),
          rt &&
            c.jsxs("div", {
              className: "error-banner",
              role: "alert",
              children: [
                c.jsx("span", { children: rt }),
                c.jsx("button", {
                  className: "icon-button",
                  "aria-label": "Dismiss error",
                  onClick: () => mt(""),
                  children: c.jsx(Na, { size: 17 }),
                }),
              ],
            }),
          Vt &&
            c.jsxs("div", {
              className: "selection-banner",
              role: "status",
              children: [
                c.jsxs("div", {
                  className: "selected-guest-details",
                  "aria-label": "Guest details",
                  children: [
                    c.jsx("strong", { children: Vt.name }),
                    c.jsxs("p", {
                      children: [
                        c.jsx("span", {
                          children: "Wedding dietary restrictions:",
                        }),
                        " ",
                        Vt.dietary || "None noted",
                      ],
                    }),
                    c.jsx("small", {
                      children: Vt.tableId
                        ? `${Qe(z.tables.find((g) => g.id === Vt.tableId))} · Chair ${(Vt.seatIndex ?? 0) + 1}`
                        : "Unseated · Choose a table or an open chair to seat this guest.",
                    }),
                  ],
                }),
                c.jsxs("button", {
                  className: "text-button",
                  onClick: () => $(null),
                  children: ["Cancel", c.jsx(Na, { size: 14 })],
                }),
              ],
            }),
          vt === "plan"
            ? c.jsxs("section", {
                className: "workspace",
                children: [
                  gl,
                  c.jsxs("div", {
                    className: "board-panel",
                    children: [
                      c.jsxs("div", {
                        className: "board-toolbar",
                        children: [
                          c.jsxs("div", {
                            className: "board-tools",
                            children: [
                              c.jsxs("button", {
                      className: "button secondary customize-floor-button",
                      onClick: () => { mt(""); st("floor-plan"); },
                      "aria-label": "Customize floor plan",
                      children: [
                        c.jsx("span", { className: "customize-label-full", children: "Customize floor plan" }),
                        c.jsx("span", { className: "customize-label-short", children: "Customize" }),
                      ],
                    }),
                              c.jsxs("div", {
                                className: "zoom-controls",
                                children: [
                                  c.jsx("button", {
                                    "aria-label": "Zoom out",
                                    disabled: x <= 0.75,
                                    onClick: () =>
                                      A((g) => Math.max(0.75, g - 0.25)),
                                    children: c.jsx(Ym, { size: 14 }),
                                  }),
                                  c.jsxs("span", {
                                    children: [Math.round(x * 100), "%"],
                                  }),
                                  c.jsx("button", {
                                    "aria-label": "Zoom in",
                                    disabled: x >= 1.5,
                                    onClick: () =>
                                      A((g) => Math.min(1.5, g + 0.25)),
                                    children: c.jsx(ja, { size: 14 }),
                                  }),
                                ],
                              }),
                              c.jsx("button", {
                                className: "button secondary fit-plan-button",
                                "aria-label": planSizing === "fit" ? "Fill available width" : "Fit entire floor plan",
                                title: planSizing === "fit" ? "Fill available width" : "Fit entire floor plan",
                                onClick: () => { setPlanSizing(planSizing === "fit" ? "width" : "fit"); A(1); },
                                children: planSizing === "fit" ? "Fill" : "Fit",
                              }),
                              c.jsxs("div", {
                                className: "view-switch",
                                "aria-label": "Floor plan view",
                                children: [
                                  c.jsx("button", {
                                    title: "Floor plan",
                                    "aria-label": "Floor plan view",
                                    "aria-pressed": H === "map",
                                    className: H === "map" ? "active" : "",
                                    onClick: () => ot("map"),
                                    children: c.jsx(qm, { size: 16 }),
                                  }),
                                  c.jsx("button", {
                                    title: "Table list",
                                    "aria-label": "Table list view",
                                    "aria-pressed": H === "list",
                                    className: H === "list" ? "active" : "",
                                    onClick: () => ot("list"),
                                    children: c.jsx(ug, { size: 17 }),
                                  }),
                                ],
                              }),
                            ],
                          }),
                        ],
                      }),
                      c.jsx("div", {
                        className: "board-scroll",
                        children:
                          H === "map"
                            ? c.jsx(og, {
                                tables: z.tables,
                                guests: z.guests,
                                selectedGuest: Et,
                                onTable: Ze,
                                onAssign: (g, tt, bt) => {
                                  it(g, tt, bt);
                                },
                                onGuest: jt,
                                onMoveTable: (g, tt, bt) => {
                                  pt(
                                    `/tables/${g}/position`,
                                    { x: tt, y: bt },
                                    "PATCH",
                                  );
                                },
                                zoom: x,
                              floorPlan: z.floorPlan,
                              sizing: planSizing,
                              })
                            : c.jsx("div", {
                                className: "table-grid",
                                children: z.tables.map((g) => {
                                  const tt = z.guests.filter(
                                    (bt) => bt.tableId === g.id,
                                  ).length;
                                  return c.jsxs(
                                    "button",
                                    {
                                      className: `table-card ${tt === g.capacity ? "is-full" : ""}`,
                                      onClick: () => Ze(g),
                                      onDragOver: (bt) => bt.preventDefault(),
                                      onDrop: (bt) => {
                                        (bt.preventDefault(),
                                          it(
                                            bt.dataTransfer.getData(
                                              "text/plain",
                                            ),
                                            g.id,
                                          ));
                                      },
                                      children: [
                                        c.jsx("span", {
                                          className: "table-card-number",
                                          children:
                                            g.number === 18
                                              ? c.jsx(Wf, { size: 20 })
                                              : String(g.number).padStart(
                                                  2,
                                                  "0",
                                                ),
                                        }),
                                        c.jsx("strong", { children: _a(g) }),
                                        el(g) &&
                                          c.jsx("span", {
                                            className: "table-card-custom-name",
                                            children: el(g),
                                          }),
                                        c.jsxs("span", {
                                          children: [
                                            tt,
                                            " of ",
                                            g.capacity,
                                            " guests",
                                          ],
                                        }),
                                        c.jsx("div", {
                                          className: "table-progress",
                                          children: c.jsx("span", {
                                            style: {
                                              width: `${(tt / g.capacity) * 100}%`,
                                            },
                                          }),
                                        }),
                                      ],
                                    },
                                    g.id,
                                  );
                                }),
                              }),
                      }),
                      c.jsxs("div", {
                        className: "board-footer",
                        children: [
                          c.jsxs("div", {
                            className: "legend",
                            children: [
                              c.jsxs("span", {
                                children: [
                                  c.jsx("i", { className: "legend-occupied" }),
                                  "Seated",
                                ],
                              }),
                              c.jsxs("span", {
                                children: [c.jsx("i", {}), "Open seat"],
                              }),
                            ],
                          }),
                          c.jsxs("span", {
                            className: "board-hint",
                            children: [
                              c.jsx(Bm, { size: 13 }),
                              "Drag guests from their chairs to any table · Drag table centers to move",
                            ],
                          }),
                          c.jsxs("button", {
                            className: "text-button",
                            onClick: he,
                            children: [
                              c.jsx(Hm, { size: 14 }),
                              c.jsx("span", { children: "Export plan" }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              })
            : c.jsxs("section", {
                className: "directory",
                children: [
                  c.jsxs("div", {
                    className: "directory-header",
                    children: [
                      c.jsxs("div", {
                        children: [
                          c.jsx("h2", { children: "Guests" }),
                          c.jsxs("p", {
                            children: [
                              z.guests.length,
                              " attending · ",
                              _e.length,
                              " to seat",
                            ],
                          }),
                        ],
                      }),
                      c.jsxs("div", {
                        className: "directory-actions",
                        children: [
                          c.jsxs("label", {
                            className: "search-field",
                            children: [
                              c.jsx(Gm, { size: 16 }),
                              c.jsx("input", {
                                "aria-label": "Search guest directory",
                                placeholder: "Search guests or dietary notes…",
                                value: qt,
                                onChange: (g) => te(g.target.value),
                              }),
                            ],
                          }),
                          c.jsxs("button", {
                            className: "button primary",
                            onClick: () => st("add"),
                            children: [c.jsx(ja, { size: 15 }), "Add guest"],
                          }),
                          c.jsxs("button", {
                            className: "button secondary",
                            onClick: he,
                            children: [c.jsx(Hm, { size: 16 }), "Export"],
                          }),
                        ],
                      }),
                    ],
                  }),
                  c.jsxs("div", {
                    className: "directory-table-wrap",
                    children: [
                      c.jsxs("table", {
                        className: "directory-table",
                        children: [
                          c.jsx("thead", {
                            children: c.jsxs("tr", {
                              children: [
                                c.jsx("th", { children: "Guest" }),
                                c.jsx("th", { children: "Table" }),
                                c.jsx("th", {
                                  children: c.jsx("span", {
                                    className: "sr-only",
                                    children: "Actions",
                                  }),
                                }),
                              ],
                            }),
                          }),
                          c.jsx("tbody", {
                            children: z.guests
                              .filter((g) =>
                                `${g.name} ${g.dietary}`
                                  .toLowerCase()
                                  .includes(qt.toLowerCase()),
                              )
                              .map((g) =>
                                c.jsxs(
                                  "tr",
                                  {
                                    children: [
                                      c.jsx("td", {
                                        children: c.jsx("button", {
                                          className: "directory-name",
                                          "aria-label": `View ${g.name}`,
                                          onClick: () => jt(g),
                                          children: c.jsx("strong", {
                                            children: g.name,
                                          }),
                                        }),
                                      }),
                                      c.jsx("td", {
                                        children: c.jsxs("select", {
                                          "aria-label": `Table for ${g.name}`,
                                          value: g.tableId || "",
                                          onChange: (tt) => {
                                            it(g.id, tt.target.value || null);
                                          },
                                          children: [
                                            c.jsx("option", {
                                              value: "",
                                              children: "Unseated",
                                            }),
                                            z.tables.map((tt) =>
                                              c.jsxs(
                                                "option",
                                                {
                                                  value: tt.id,
                                                  children: [
                                                    Qe(tt),
                                                    " (",
                                                    z.guests.filter(
                                                      (bt) =>
                                                        bt.tableId === tt.id,
                                                    ).length,
                                                    "/",
                                                    tt.capacity,
                                                    ")",
                                                  ],
                                                },
                                                tt.id,
                                              ),
                                            ),
                                          ],
                                        }),
                                      }),
                                      c.jsx("td", {
                                        children: c.jsx("button", {
                                          className: "icon-button",
                                          "aria-label": `Delete ${g.name}`,
                                          onClick: () => at(g),
                                          children: c.jsx(lr, { size: 15 }),
                                        }),
                                      }),
                                    ],
                                  },
                                  g.id,
                                ),
                              ),
                          }),
                        ],
                      }),
                      !z.guests.length &&
                        c.jsxs("div", {
                          className: "directory-empty",
                          children: [
                            c.jsx(hc, { size: 32 }),
                            c.jsx("h3", { children: "No guests yet." }),
                            c.jsx("p", {
                              children:
                                "Connect a guest list or add your first guest to get started.",
                            }),
                            c.jsxs("button", {
                              className: "button primary",
                              onClick: () => st("add"),
                              children: [
                                c.jsx(ja, { size: 15 }),
                                "Add your first guest",
                              ],
                            }),
                          ],
                        }),
                    ],
                  }),
                ],
              }),
          c.jsx("div", {
            className: "page-footer",
            children: c.jsxs("span", {
              children: [
                qe || "",
                c.jsx("span", { className: "footer-dot", children: "·" }),
                z.role === "owner"
                  ? "Your private planning space"
                  : "Shared family planning space",
              ],
            }),
          }),
        ],
      }),
      vt === "plan" &&
        c.jsxs("button", {
          className: "mobile-pool-button button primary",
          onClick: () => nt(!0),
          children: [
            c.jsx(hc, { size: 17 }),
            "Guests",
            c.jsxs("small", { children: [_e.length, " unseated"] }),
          ],
        }),
      Ct && c.jsx("div", { className: "mobile-scrim", onClick: () => nt(!1) }),
      V &&
        c.jsxs("div", {
          className: "toast",
          role: "status",
          children: [c.jsx(qu, { size: 17 }), V],
        }),
      rt &&
        (ct || yt || Dt) &&
        c.jsxs("div", {
          className: "toast error-toast",
          role: "alert",
          children: [
            c.jsx("span", { children: rt }),
            c.jsx("button", {
              className: "icon-button",
              "aria-label": "Dismiss error",
              onClick: () => mt(""),
              children: c.jsx(Na, { size: 15 }),
            }),
          ],
        }),
      Dt &&
        c.jsxs(Al, {
          title: Dt.name,
          onClose: Yt,
          children: [
            c.jsx("div", {
              className: "guest-info-location",
              children: c.jsxs("div", {
                children: [
                  c.jsx("strong", { children: ze ? Qe(ze) : "Unseated" }),
                  c.jsx("span", {
                    children:
                      ze && Dt.seatIndex !== null
                        ? `Chair ${Dt.seatIndex + 1}`
                        : "Ready for a seat",
                  }),
                ],
              }),
            }),
            c.jsxs("dl", {
              className: "guest-info-fields",
              children: [
                c.jsxs("div", {
                  children: [
                    c.jsx("dt", { children: "Wedding dietary restrictions" }),
                    c.jsx("dd", { children: Dt.dietary || "None noted" }),
                  ],
                }),
                Dt.household &&
                  c.jsxs("div", {
                    children: [
                      c.jsx("dt", { children: "Household" }),
                      c.jsx("dd", { children: Dt.household }),
                    ],
                  }),
                Dt.meal &&
                  c.jsxs("div", {
                    children: [
                      c.jsx("dt", { children: "Meal" }),
                      c.jsx("dd", { children: Dt.meal }),
                    ],
                  }),
                Dt.email &&
                  c.jsxs("div", {
                    children: [
                      c.jsx("dt", { children: "Email" }),
                      c.jsx("dd", { children: Dt.email }),
                    ],
                  }),
              ],
            }),
            c.jsxs("div", {
              className: "modal-actions guest-info-actions",
              children: [
                Dt.tableId &&
                  c.jsxs("button", {
                    className: "button secondary",
                    disabled: w,
                    onClick: () => {
                      it(Dt.id, null);
                    },
                    children: [c.jsx(Na, { size: 15 }), "Unseat guest"],
                  }),
                c.jsxs("button", {
                  className: "button primary",
                  disabled: w,
                  onClick: () => {
                    ($(Dt.id), setPickerOpen(true), mt(""), Ut("plan"), ot("map"), Yt());
                  },
                  children: [
                    c.jsx(mc, { size: 15 }),
                    Dt.tableId ? "Move guest" : "Choose a seat",
                  ],
                }),
              ],
            }),
            Y &&
              c.jsxs("button", {
                className: "text-button guest-back-table",
                onClick: () => {
                  (y(Y), Yt());
                },
                children: ["Back to table", c.jsx(Vn, { size: 14 })],
              }),
          ],
        }),
      pickerOpen && Vt && c.jsx(GuestTablePicker, {
        key: Vt.id, guest: Vt, tables:z.tables, guests:z.guests,busy:w,error:rt,
        onClose:()=>{setPickerOpen(false);$(null);},
        onMap:()=>{setPickerOpen(false);Ut("plan");ot("map");nt(false);},
        onAssign:it,
      }),
      ct === "floor-plan" && c.jsx(FloorPlanEditor, {
        floorPlan:z.floorPlan, tables:z.tables,guests:z.guests,busy:w,error:rt,onClose:U,
        onSave:async data=>{const result=await pt("/floor-plan",data,"PATCH");if(result)gt("Floor plan saved.");return result;},
      }),
      ct === "connect" &&
        c.jsx(Tg, {
          onClose: U,
          busy: w,
          session: S,
          revision: z.revision,
          onImport: async (g, tt) => {
            const bt = await pt("/import", { guests: g, ...tt });
            return (
              bt
                ? (U(),
                  gt(
                    tt.complete
                      ? "Guest list updated. Reviewed roster changes applied."
                      : "Guest list updated. Existing seating progress is preserved.",
                  ))
                : Ol(S)
                    .then(Bt)
                    .catch(() => {}),
              bt
            );
          },
        }),
      ct === "share" &&
        c.jsxs(Al, {
          title: "Share plan",
          onClose: U,
          children: [
            c.jsx("p", {
              className: "modal-intro",
              children:
                "Share your private family link with your in-laws. Everyone can move guests between tables, and changes appear live.",
            }),
            z.role === "owner"
              ? c.jsxs(c.Fragment, {
                  children: [
                    O
                      ? c.jsx(Qm, {
                          label: "Family editing link",
                          value: Lm(z.id, O),
                        })
                      : c.jsxs("div", {
                          className: "notice",
                          children: [
                            c.jsx(Yu, { size: 20 }),
                            c.jsxs("div", {
                              children: [
                                c.jsx("strong", {
                                  children:
                                    "Your family link isn’t stored on this device.",
                                }),
                                c.jsx("p", {
                                  children:
                                    "Create a replacement to share. Previously shared family links will stop working.",
                                }),
                                c.jsxs("button", {
                                  className: "button primary",
                                  disabled: w,
                                  onClick: () => {
                                    de();
                                  },
                                  children: [
                                    "Create family link",
                                    c.jsx(Vn, { size: 15 }),
                                  ],
                                }),
                              ],
                            }),
                          ],
                        }),
                    c.jsxs("p", {
                      className: "fine-print",
                      children: [
                        c.jsx(Yu, { size: 14 }),
                        "Anyone with this link can see the guest list and edit seating. Send it privately. Your owner link gives additional sharing controls; keep it to yourself.",
                      ],
                    }),
                    O &&
                      (k
                        ? c.jsx("div", {
                            className: "notice",
                            children: c.jsxs("div", {
                              children: [
                                c.jsx("strong", {
                                  children: "Replace your family link?",
                                }),
                                c.jsx("p", {
                                  children:
                                    "Old family links will stop working immediately.",
                                }),
                                c.jsxs("div", {
                                  className: "modal-actions",
                                  children: [
                                    c.jsx("button", {
                                      className: "button secondary",
                                      onClick: () => G(!1),
                                      children: "Keep current link",
                                    }),
                                    c.jsx("button", {
                                      className: "button primary",
                                      disabled: w,
                                      onClick: () => {
                                        de();
                                      },
                                      children: "Replace link",
                                    }),
                                  ],
                                }),
                              ],
                            }),
                          })
                        : c.jsxs("button", {
                            className: "text-button",
                            onClick: () => G(!0),
                            children: [
                              c.jsx(er, { size: 13 }),
                              "Replace family link",
                            ],
                          })),
                  ],
                })
              : c.jsxs(c.Fragment, {
                  children: [
                    c.jsx(Qm, {
                      label: "Family editing link",
                      value: Lm(z.id, S.key),
                    }),
                    c.jsx("p", {
                      className: "fine-print",
                      children:
                        "Only share with people the couple wants to help. Anyone with this link can see guest names and edit this plan.",
                    }),
                  ],
                }),
            ["localhost", "127.0.0.1", "0.0.0.0"].includes(location.hostname) &&
              c.jsx("div", {
                className: "notice warning",
                children: c.jsxs("div", {
                  children: [
                    c.jsx("strong", {
                      children: "This app is running locally.",
                    }),
                    c.jsx("p", {
                      children:
                        "This link only works on this computer. Deploy the app to a public HTTPS host before sending it to family.",
                    }),
                  ],
                }),
              }),
          ],
        }),
      ct === "delete" &&
        q &&
        c.jsxs(Al, {
          title: "Delete this guest?",
          onClose: U,
          children: [
            c.jsx("div", {
              className: "delete-guest-preview",
              children: c.jsxs("div", {
                children: [
                  c.jsx("strong", { children: q.name }),
                  c.jsx("p", {
                    children: q.tableId
                      ? `Currently seated at ${Qe(z.tables.find((g) => g.id === q.tableId))}`
                      : "Currently in the unseated guest pool",
                  }),
                ],
              }),
            }),
            c.jsx("p", {
              className: "modal-intro",
              children:
                "This removes the guest from this plan and frees their seat. Everyone editing the plan will see the change.",
            }),
            q.source === "import" &&
              c.jsx("p", {
                className: "fine-print",
                children:
                  "This changes your seating plan only. A future guest-list import or sync may add this person again.",
              }),
            c.jsxs("div", {
              className: "modal-actions",
              children: [
                c.jsx("button", {
                  className: "button secondary",
                  onClick: U,
                  children: "Cancel",
                }),
                c.jsxs("button", {
                  className: "button danger",
                  disabled: w,
                  onClick: () => {
                    It();
                  },
                  children: [
                    c.jsx(lr, { size: 15 }),
                    w ? "Deleting…" : "Delete guest",
                  ],
                }),
              ],
            }),
          ],
        }),
      ct === "table-add" &&
        c.jsx(Al, {
          title: "Add a round table",
          onClose: U,
          children: c.jsxs("form", {
            onSubmit: (g) => {
              g.preventDefault();
              const tt = new FormData(g.currentTarget);
              pt("/tables", { capacity: Number(tt.get("capacity")) }).then(
                (bt) => {
                  bt &&
                    (U(),
                    gt("Round table added. Drag its center to position it."));
                },
              );
            },
            children: [
              c.jsxs("label", {
                className: "field-label",
                children: [
                  "Chairs",
                  c.jsx("input", {
                    name: "capacity",
                    type: "number",
                    min: 1,
                    max: 60,
                    defaultValue: 10,
                    required: !0,
                  }),
                ],
              }),
              c.jsxs("div", {
                className: "modal-actions",
                children: [
                  c.jsx("button", {
                    type: "button",
                    className: "button secondary",
                    onClick: U,
                    children: "Cancel",
                  }),
                  c.jsx("button", {
                    className: "button primary",
                    disabled: w,
                    children: "Add table",
                  }),
                ],
              }),
            ],
          }),
        }),
      ct === "add" &&
        c.jsxs(Al, {
          title: "Add guest",
          onClose: U,
          children: [
            c.jsx("p", {
              className: "modal-intro",
              children: "Add an attending guest to your seating pool.",
            }),
            c.jsxs("form", {
              onSubmit: (g) => {
                g.preventDefault();
                const tt = new FormData(g.currentTarget);
                pt("/guests", {
                  name: tt.get("name"),
                  dietary: tt.get("dietary"),
                }).then((bt) => {
                  bt && (U(), gt("Guest added to the pool."));
                });
              },
              children: [
                c.jsxs("label", {
                  className: "field-label",
                  children: [
                    "Full name",
                    c.jsx("input", {
                      name: "name",
                      required: !0,
                      maxLength: 120,
                      placeholder: "e.g. Charlotte Bennett",
                      autoComplete: "off",
                    }),
                  ],
                }),
                c.jsxs("label", {
                  className: "field-label",
                  children: [
                    "Dietary restrictions ",
                    c.jsx("small", { children: "Wedding day · optional" }),
                    c.jsx("textarea", {
                      name: "dietary",
                      maxLength: 2e3,
                      placeholder: "e.g. Nut allergy, gluten-free, vegetarian",
                      rows: 3,
                    }),
                  ],
                }),
                c.jsxs("div", {
                  className: "modal-actions",
                  children: [
                    c.jsx("button", {
                      type: "button",
                      className: "button secondary",
                      onClick: U,
                      children: "Cancel",
                    }),
                    c.jsxs("button", {
                      className: "button primary",
                      disabled: w,
                      children: ["Add guest", c.jsx(ja, { size: 16 })],
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),
      ct === "settings" &&
        c.jsxs(Al, {
          title: "Wedding details",
          onClose: U,
          children: [
            c.jsxs("form", {
              onSubmit: (g) => {
                g.preventDefault();
                const tt = new FormData(g.currentTarget);
                pt(
                  "",
                  { name: tt.get("name"), date: tt.get("date") },
                  "PATCH",
                ).then((bt) => {
                  bt && (U(), gt("Wedding details saved."));
                });
              },
              children: [
                c.jsxs("label", {
                  className: "field-label",
                  children: [
                    "Wedding name",
                    c.jsx("input", {
                      name: "name",
                      defaultValue: z.name,
                      required: !0,
                      maxLength: 120,
                    }),
                  ],
                }),
                c.jsxs("label", {
                  className: "field-label",
                  children: [
                    "Wedding date ",
                    c.jsx("small", { children: "Optional" }),
                    c.jsx("input", {
                      type: "date",
                      name: "date",
                      defaultValue: z.date,
                    }),
                  ],
                }),
                c.jsxs("div", {
                  className: "modal-actions",
                  children: [
                    c.jsx("button", {
                      type: "button",
                      className: "button secondary",
                      onClick: U,
                      children: "Cancel",
                    }),
                    c.jsxs("button", {
                      className: "button primary",
                      disabled: w,
                      children: ["Save details", c.jsx(qu, { size: 15 })],
                    }),
                  ],
                }),
              ],
            }),
            z.role === "owner" &&
              c.jsxs("div", {
                className: "settings-extra",
                children: [
                  c.jsxs("button", {
                    className: "text-button",
                    onClick: () => st("new"),
                    children: [
                      c.jsx(ja, { size: 14 }),
                      "Create a separate seating plan",
                    ],
                  }),
                  c.jsx("p", {
                    className: "fine-print",
                    children:
                      "Your current plan remains available through its private link.",
                  }),
                ],
              }),
          ],
        }),
      ct === "new" &&
        c.jsxs(Al, {
          title: "Create a seating plan",
          onClose: U,
          children: [
            c.jsx("p", {
              className: "modal-intro",
              children:
                "Create a new, empty wedding plan with your venue layout. Your current plan stays available at its existing link.",
            }),
            c.jsxs("div", {
              className: "modal-actions",
              children: [
                c.jsx("button", {
                  className: "button secondary",
                  onClick: U,
                  children: "Go back",
                }),
                c.jsxs("button", {
                  className: "button primary",
                  disabled: w,
                  onClick: () => {
                    Nt(!1);
                  },
                  children: ["Create new plan", c.jsx(Vn, { size: 15 })],
                }),
              ],
            }),
          ],
        }),
      ct === "help" &&
        c.jsxs(Al, {
          title: "Help",
          onClose: U,
          children: [
            c.jsxs("div", {
              className: "help-steps",
              children: [
                c.jsxs("div", {
                  children: [
                    c.jsx("span", { children: "01" }),
                    c.jsxs("section", {
                      children: [
                        c.jsx("h3", { children: "Import guests" }),
                        c.jsx("p", {
                          children:
                            "Add attending guests, or use the optional CSV import. Automatic The Knot access still needs an authorized integration.",
                        }),
                      ],
                    }),
                  ],
                }),
                c.jsxs("div", {
                  children: [
                    c.jsx("span", { children: "02" }),
                    c.jsxs("section", {
                      children: [
                        c.jsx("h3", { children: "Seat guests" }),
                        c.jsx("p", {
                          children:
                            "Drag guests to tables. On a phone or with a keyboard, select a guest and then select a table. Click a seated guest for their details, or drag their chair to any table or another chair. Click any table for an enlarged seating view and to change its name or capacity.",
                        }),
                      ],
                    }),
                  ],
                }),
                c.jsxs("div", {
                  children: [
                    c.jsx("span", { children: "03" }),
                    c.jsxs("section", {
                      children: [
                        c.jsx("h3", { children: "Share the plan" }),
                        c.jsx("p", {
                          children:
                            "Send the family editing link to your in-laws after deployment. Changes save automatically and appear on everyone’s open plan.",
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
            c.jsx("p", {
              className: "fine-print",
              children:
                "Your venue starts with 17 round tables of 10 and a head table of 30. Export the plan any time for your venue or coordinator.",
            }),
            c.jsxs("button", {
              className: "button primary full-width",
              onClick: U,
              children: ["Close", c.jsx(Vn, { size: 15 })],
            }),
          ],
        }),
      yt &&
        c.jsxs(Al, {
          title: _a(yt),
          onClose: P,
          className: `table-detail-modal ${yt.number === 18 ? "head-table-modal" : ""}`,
          children: [
            c.jsx("p", { className: "table-detail-count", children:
              `${z.guests.filter(g => g.tableId === yt.id).length} of ${yt.capacity} seated · ${yt.capacity - z.guests.filter(g => g.tableId === yt.id).length} chairs available` }),
            c.jsx(dg, {
              key: yt.id,
              table: yt,
              guests: z.guests,
              onGuest: jt,
              onAssign: (g, tt) => {
                it(g, yt.id, tt);
              },
            }),
            c.jsxs("label", {
              className: "field-label",
              children: [
                "Seat an unseated guest",
                c.jsxs("select", {
                  "aria-label": `Seat a guest at ${Qe(yt)}`,
                  value: "",
                  disabled:
                    w ||
                    z.guests.filter((g) => g.tableId === yt.id).length >=
                      yt.capacity,
                  onChange: (g) => {
                    g.target.value && it(g.target.value, yt.id);
                  },
                  children: [
                    c.jsx("option", { value: "", children: "Choose a guest…" }),
                    _e.map((g) =>
                      c.jsx("option", { value: g.id, children: g.name }, g.id),
                    ),
                  ],
                }),
              ],
            }),            c.jsxs("details", { className: "table-details-disclosure", children: [
              c.jsx("summary", { children: `Guest list · ${z.guests.filter(g => g.tableId === yt.id).length} seated` }),
            c.jsxs("div", {
              className: "table-guest-list",
              children: [
                z.guests
                  .filter((g) => g.tableId === yt.id)
                  .map((g) =>
                    c.jsx(
                      Xm,
                      {
                        guest: g,
                        onSelect: () => jt(g),
                        onUnseat: () => {
                          it(g.id, null);
                        },
                        onDelete: () => at(g),
                      },
                      g.id,
                    ),
                  ),
                !z.guests.some((g) => g.tableId === yt.id) &&
                  c.jsx("p", {
                    className: "table-empty",
                    children: "No guests seated.",
                  }),
              ],
            }),
            ] }),
            c.jsxs("details", { className: "table-details-disclosure", children: [
              c.jsx("summary", { children: "Table settings" }),
            c.jsxs("div", {
              className: "chair-count-controls",
              children: [
                c.jsx("span", { children: "Chairs" }),
                c.jsx("button", {
                  className: "icon-button",
                  "aria-label": "Remove a chair",
                  disabled:
                    w ||
                    yt.capacity <= 1 ||
                    z.guests.some(
                      (g) =>
                        g.tableId === yt.id &&
                        (g.seatIndex ?? 0) >= yt.capacity - 1,
                    ),
                  onClick: () => {
                    pt(
                      `/tables/${yt.id}`,
                      { name: yt.name, capacity: yt.capacity - 1 },
                      "PATCH",
                    );
                  },
                  children: c.jsx(Ym, { size: 16 }),
                }),
                c.jsx("strong", { children: yt.capacity }),
                c.jsx("button", {
                  className: "icon-button",
                  "aria-label": "Add a chair",
                  disabled: w || yt.capacity >= 60,
                  onClick: () => {
                    pt(
                      `/tables/${yt.id}`,
                      { name: yt.name, capacity: yt.capacity + 1 },
                      "PATCH",
                    );
                  },
                  children: c.jsx(ja, { size: 16 }),
                }),
                c.jsx("small", {
                  children: "Unseat a guest before removing their chair.",
                }),
              ],
            }),
            c.jsxs(
              "form",
              {
                className: "table-name-form",
                onSubmit: (g) => {
                  g.preventDefault();
                  const tt = new FormData(g.currentTarget),
                    bt = String(tt.get("name") || "").trim() || _a(yt);
                  pt(
                    `/tables/${yt.id}`,
                    { name: bt, capacity: yt.capacity },
                    "PATCH",
                  ).then((Ce) => {
                    Ce && gt(`${_a(yt)} name saved.`);
                  });
                },
                children: [
                  c.jsxs("label", {
                    className: "field-label",
                    children: [
                      "Table name ",
                      c.jsx("small", {
                        children: "Optional · table number stays the same",
                      }),
                      c.jsx("input", {
                        name: "name",
                        defaultValue: el(yt),
                        maxLength: 120,
                        placeholder: "e.g. College friends",
                      }),
                    ],
                  }),
                  c.jsxs("button", {
                    className: "button secondary",
                    disabled: w,
                    children: ["Save name", c.jsx(qu, { size: 15 })],
                  }),
                ],
              },
              `name-${yt.id}-${yt.name}`,
            ),
            ] }),
          ],
        }),
    ],
  });
}
rg();
Jy.createRoot(document.getElementById("root")).render(c.jsx(Eg, {}));
