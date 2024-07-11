! function (e) {
  var t = {};

  function n(i) {
    if (t[i]) return t[i].exports;
    var o = t[i] = {
      i: i,
      l: !1,
      exports: {}
    };
    return e[i].call(o.exports, o, o.exports, n), o.l = !0, o.exports;
  }
  n.m = e, n.c = t, n.d = function (e, t, i) {
    n.o(e, t) || Object.defineProperty(e, t, {
      enumerable: !0,
      get: i
    });
  }, n.r = function (e) {
    "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
      value: "Module"
    }), Object.defineProperty(e, "__esModule", {
      value: !0
    });
  }, n.t = function (e, t) {
    if (1 & t && (e = n(e)), 8 & t) return e;
    if (4 & t && "object" == typeof e && e && e.__esModule) return e;
    var i = Object.create(null);
    if (n.r(i), Object.defineProperty(i, "default", {
      enumerable: !0,
      value: e
    }), 2 & t && "string" != typeof e)
      for (var o in e) n.d(i, o, function (t) {
        return e[t];
      }.bind(null, o));
    return i;
  }, n.n = function (e) {
    var t = e && e.__esModule ? function () {
      return e.default;
    } : function () {
      return e;
    };
    return n.d(t, "a", t), t;
  }, n.o = function (e, t) {
    return Object.prototype.hasOwnProperty.call(e, t);
  }, n.p = "/assets", n(n.s = 6);
}([function (e, t, n) {
  var i; /*! jQuery v3.2.1 | (c) JS Foundation and other contributors | jquery.org/license */
  ! function (t, n) {
    "use strict";
    "object" == typeof e.exports ? e.exports = t.document ? n(t, !0) : function (e) {
      if (!e.document) throw new Error("jQuery requires a window with a document");
      return n(e);
    } : n(t);
  }("undefined" != typeof window ? window : this, function (n, o) {
    "use strict";
    var r = [],
      s = n.document,
      a = Object.getPrototypeOf,
      l = r.slice,
      c = r.concat,
      u = r.push,
      d = r.indexOf,
      p = {},
      h = p.toString,
      f = p.hasOwnProperty,
      m = f.toString,
      g = m.call(Object),
      v = {};

    function b(e, t) {
      var n = (t = t || s).createElement("script");
      n.text = e, t.head.appendChild(n).parentNode.removeChild(n);
    }
    var y = "3.2.1",
      w = function (e, t) {
        return new w.fn.init(e, t);
      },
      C = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
      x = /^-ms-/,
      _ = /-([a-z])/g,
      $ = function (e, t) {
        return t.toUpperCase();
      };

    function k(e) {
      var t = !!e && "length" in e && e.length,
        n = w.type(e);
      return "function" !== n && !w.isWindow(e) && ("array" === n || 0 === t || "number" == typeof t && t > 0 && t - 1 in e);
    }
    w.fn = w.prototype = {
      jquery: y,
      constructor: w,
      length: 0,
      toArray: function () {
        return l.call(this);
      },
      get: function (e) {
        return null == e ? l.call(this) : e < 0 ? this[e + this.length] : this[e];
      },
      pushStack: function (e) {
        var t = w.merge(this.constructor(), e);
        return t.prevObject = this, t;
      },
      each: function (e) {
        return w.each(this, e);
      },
      map: function (e) {
        return this.pushStack(w.map(this, function (t, n) {
          return e.call(t, n, t);
        }));
      },
      slice: function () {
        return this.pushStack(l.apply(this, arguments));
      },
      first: function () {
        return this.eq(0);
      },
      last: function () {
        return this.eq(-1);
      },
      eq: function (e) {
        var t = this.length,
          n = +e + (e < 0 ? t : 0);
        return this.pushStack(n >= 0 && n < t ? [this[n]] : []);
      },
      end: function () {
        return this.prevObject || this.constructor();
      },
      push: u,
      sort: r.sort,
      splice: r.splice
    }, w.extend = w.fn.extend = function () {
      var e, t, n, i, o, r, s = arguments[0] || {},
        a = 1,
        l = arguments.length,
        c = !1;
      for ("boolean" == typeof s && (c = s, s = arguments[a] || {}, a++), "object" == typeof s || w.isFunction(s) || (s = {}), a === l && (s = this, a--); a < l; a++)
        if (null != (e = arguments[a]))
          for (t in e) n = s[t], s !== (i = e[t]) && (c && i && (w.isPlainObject(i) || (o = Array.isArray(i))) ? (o ? (o = !1, r = n && Array.isArray(n) ? n : []) : r = n && w.isPlainObject(n) ? n : {}, s[t] = w.extend(c, r, i)) : void 0 !== i && (s[t] = i));
      return s;
    }, w.extend({
      expando: "jQuery" + (y + Math.random()).replace(/\D/g, ""),
      isReady: !0,
      error: function (e) {
        throw new Error(e);
      },
      noop: function () { },
      isFunction: function (e) {
        return "function" === w.type(e);
      },
      isWindow: function (e) {
        return null != e && e === e.window;
      },
      isNumeric: function (e) {
        var t = w.type(e);
        return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e));
      },
      isPlainObject: function (e) {
        var t, n;
        return !(!e || "[object Object]" !== h.call(e) || (t = a(e)) && (n = f.call(t, "constructor") && t.constructor, "function" != typeof n || m.call(n) !== g));
      },
      isEmptyObject: function (e) {
        var t;
        for (t in e) return !1;
        return !0;
      },
      type: function (e) {
        return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? p[h.call(e)] || "object" : typeof e;
      },
      globalEval: function (e) {
        b(e);
      },
      camelCase: function (e) {
        return e.replace(x, "ms-").replace(_, $);
      },
      each: function (e, t) {
        var n, i = 0;
        if (k(e))
          for (n = e.length; i < n && !1 !== t.call(e[i], i, e[i]); i++);
        else
          for (i in e)
            if (!1 === t.call(e[i], i, e[i])) break;
        return e;
      },
      trim: function (e) {
        return null == e ? "" : (e + "").replace(C, "");
      },
      makeArray: function (e, t) {
        var n = t || [];
        return null != e && (k(Object(e)) ? w.merge(n, "string" == typeof e ? [e] : e) : u.call(n, e)), n;
      },
      inArray: function (e, t, n) {
        return null == t ? -1 : d.call(t, e, n);
      },
      merge: function (e, t) {
        for (var n = +t.length, i = 0, o = e.length; i < n; i++) e[o++] = t[i];
        return e.length = o, e;
      },
      grep: function (e, t, n) {
        for (var i = [], o = 0, r = e.length, s = !n; o < r; o++) !t(e[o], o) !== s && i.push(e[o]);
        return i;
      },
      map: function (e, t, n) {
        var i, o, r = 0,
          s = [];
        if (k(e))
          for (i = e.length; r < i; r++) null != (o = t(e[r], r, n)) && s.push(o);
        else
          for (r in e) null != (o = t(e[r], r, n)) && s.push(o);
        return c.apply([], s);
      },
      guid: 1,
      proxy: function (e, t) {
        var n, i, o;
        if ("string" == typeof t && (n = e[t], t = e, e = n), w.isFunction(e)) return i = l.call(arguments, 2), (o = function () {
          return e.apply(t || this, i.concat(l.call(arguments)));
        }).guid = e.guid = e.guid || w.guid++, o;
      },
      now: Date.now,
      support: v
    }), "function" == typeof Symbol && (w.fn[Symbol.iterator] = r[Symbol.iterator]), w.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function (e, t) {
      p["[object " + t + "]"] = t.toLowerCase();
    });
    var T = function (e) {
      var t, n, i, o, r, s, a, l, c, u, d, p, h, f, m, g, v, b, y, w = "sizzle" + 1 * new Date,
        C = e.document,
        x = 0,
        _ = 0,
        $ = se(),
        k = se(),
        T = se(),
        E = function (e, t) {
          return e === t && (d = !0), 0;
        },
        S = {}.hasOwnProperty,
        D = [],
        I = D.pop,
        A = D.push,
        O = D.push,
        N = D.slice,
        P = function (e, t) {
          for (var n = 0, i = e.length; n < i; n++)
            if (e[n] === t) return n;
          return -1;
        },
        j = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
        L = "[\\x20\\t\\r\\n\\f]",
        M = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",
        R = "\\[" + L + "*(" + M + ")(?:" + L + "*([*^$|!~]?=)" + L + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + M + "))|)" + L + "*\\]",
        H = ":(" + M + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + R + ")*)|.*)\\)|)",
        W = new RegExp(L + "+", "g"),
        F = new RegExp("^" + L + "+|((?:^|[^\\\\])(?:\\\\.)*)" + L + "+$", "g"),
        q = new RegExp("^" + L + "*," + L + "*"),
        U = new RegExp("^" + L + "*([>+~]|" + L + ")" + L + "*"),
        B = new RegExp("=" + L + "*([^\\]'\"]*?)" + L + "*\\]", "g"),
        z = new RegExp(H),
        V = new RegExp("^" + M + "SAR"),
        G = {
          ID: new RegExp("^#(" + M + ")"),
          CLASS: new RegExp("^\\.(" + M + ")"),
          TAG: new RegExp("^(" + M + "|[*])"),
          ATTR: new RegExp("^" + R),
          PSEUDO: new RegExp("^" + H),
          CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + L + "*(even|odd|(([+-]|)(\\d*)n|)" + L + "*(?:([+-]|)" + L + "*(\\d+)|))" + L + "*\\)|)", "i"),
          bool: new RegExp("^(?:" + j + ")$", "i"),
          needsContext: new RegExp("^" + L + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + L + "*((?:-\\d)?\\d*)" + L + "*\\)|)(?=[^-]|$)", "i")
        },
        K = /^(?:input|select|textarea|button)$/i,
        Y = /^h\d$/i,
        Q = /^[^{]+\{\s*\[native \w/,
        X = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
        J = /[+~]/,
        Z = new RegExp("\\\\([\\da-f]{1,6}" + L + "?|(" + L + ")|.)", "ig"),
        ee = function (e, t, n) {
          var i = "0x" + t - 65536;
          return i != i || n ? t : i < 0 ? String.fromCharCode(i + 65536) : String.fromCharCode(i >> 10 | 55296, 1023 & i | 56320);
        },
        te = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
        ne = function (e, t) {
          return t ? "\0" === e ? "�" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e;
        },
        ie = function () {
          p();
        },
        oe = be(function (e) {
          return !0 === e.disabled && ("form" in e || "label" in e);
        }, {
          dir: "parentNode",
          next: "legend"
        });
      try {
        O.apply(D = N.call(C.childNodes), C.childNodes), D[C.childNodes.length].nodeType;
      } catch (e) {
        O = {
          apply: D.length ? function (e, t) {
            A.apply(e, N.call(t));
          } : function (e, t) {
            for (var n = e.length, i = 0; e[n++] = t[i++];);
            e.length = n - 1;
          }
        };
      }

      function re(e, t, i, o) {
        var r, a, c, u, d, f, v, b = t && t.ownerDocument,
          x = t ? t.nodeType : 9;
        if (i = i || [], "string" != typeof e || !e || 1 !== x && 9 !== x && 11 !== x) return i;
        if (!o && ((t ? t.ownerDocument || t : C) !== h && p(t), t = t || h, m)) {
          if (11 !== x && (d = X.exec(e)))
            if (r = d[1]) {
              if (9 === x) {
                if (!(c = t.getElementById(r))) return i;
                if (c.id === r) return i.push(c), i;
              } else if (b && (c = b.getElementById(r)) && y(t, c) && c.id === r) return i.push(c), i;
            } else {
              if (d[2]) return O.apply(i, t.getElementsByTagName(e)), i;
              if ((r = d[3]) && n.getElementsByClassName && t.getElementsByClassName) return O.apply(i, t.getElementsByClassName(r)), i;
            } if (n.qsa && !T[e + " "] && (!g || !g.test(e))) {
              if (1 !== x) b = t, v = e;
              else if ("object" !== t.nodeName.toLowerCase()) {
                for ((u = t.getAttribute("id")) ? u = u.replace(te, ne) : t.setAttribute("id", u = w), a = (f = s(e)).length; a--;) f[a] = "#" + u + " " + ve(f[a]);
                v = f.join(","), b = J.test(e) && me(t.parentNode) || t;
              }
              if (v) try {
                return O.apply(i, b.querySelectorAll(v)), i;
              } catch (e) { } finally {
                  u === w && t.removeAttribute("id");
                }
            }
        }
        return l(e.replace(F, "$1"), t, i, o);
      }

      function se() {
        var e = [];
        return function t(n, o) {
          return e.push(n + " ") > i.cacheLength && delete t[e.shift()], t[n + " "] = o;
        };
      }

      function ae(e) {
        return e[w] = !0, e;
      }

      function le(e) {
        var t = h.createElement("fieldset");
        try {
          return !!e(t);
        } catch (e) {
          return !1;
        } finally {
          t.parentNode && t.parentNode.removeChild(t), t = null;
        }
      }

      function ce(e, t) {
        for (var n = e.split("|"), o = n.length; o--;) i.attrHandle[n[o]] = t;
      }

      function ue(e, t) {
        var n = t && e,
          i = n && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex;
        if (i) return i;
        if (n)
          for (; n = n.nextSibling;)
            if (n === t) return -1;
        return e ? 1 : -1;
      }

      function de(e) {
        return function (t) {
          return "input" === t.nodeName.toLowerCase() && t.type === e;
        };
      }

      function pe(e) {
        return function (t) {
          var n = t.nodeName.toLowerCase();
          return ("input" === n || "button" === n) && t.type === e;
        };
      }

      function he(e) {
        return function (t) {
          return "form" in t ? t.parentNode && !1 === t.disabled ? "label" in t ? "label" in t.parentNode ? t.parentNode.disabled === e : t.disabled === e : t.isDisabled === e || t.isDisabled !== !e && oe(t) === e : t.disabled === e : "label" in t && t.disabled === e;
        };
      }

      function fe(e) {
        return ae(function (t) {
          return t = +t, ae(function (n, i) {
            for (var o, r = e([], n.length, t), s = r.length; s--;) n[o = r[s]] && (n[o] = !(i[o] = n[o]));
          });
        });
      }

      function me(e) {
        return e && void 0 !== e.getElementsByTagName && e;
      }
      for (t in n = re.support = {}, r = re.isXML = function (e) {
        var t = e && (e.ownerDocument || e).documentElement;
        return !!t && "HTML" !== t.nodeName;
      }, p = re.setDocument = function (e) {
        var t, o, s = e ? e.ownerDocument || e : C;
        return s !== h && 9 === s.nodeType && s.documentElement ? (f = (h = s).documentElement, m = !r(h), C !== h && (o = h.defaultView) && o.top !== o && (o.addEventListener ? o.addEventListener("unload", ie, !1) : o.attachEvent && o.attachEvent("onunload", ie)), n.attributes = le(function (e) {
          return e.className = "i", !e.getAttribute("className");
        }), n.getElementsByTagName = le(function (e) {
          return e.appendChild(h.createComment("")), !e.getElementsByTagName("*").length;
        }), n.getElementsByClassName = Q.test(h.getElementsByClassName), n.getById = le(function (e) {
          return f.appendChild(e).id = w, !h.getElementsByName || !h.getElementsByName(w).length;
        }), n.getById ? (i.filter.ID = function (e) {
          var t = e.replace(Z, ee);
          return function (e) {
            return e.getAttribute("id") === t;
          };
        }, i.find.ID = function (e, t) {
          if (void 0 !== t.getElementById && m) {
            var n = t.getElementById(e);
            return n ? [n] : [];
          }
        }) : (i.filter.ID = function (e) {
          var t = e.replace(Z, ee);
          return function (e) {
            var n = void 0 !== e.getAttributeNode && e.getAttributeNode("id");
            return n && n.value === t;
          };
        }, i.find.ID = function (e, t) {
          if (void 0 !== t.getElementById && m) {
            var n, i, o, r = t.getElementById(e);
            if (r) {
              if ((n = r.getAttributeNode("id")) && n.value === e) return [r];
              for (o = t.getElementsByName(e), i = 0; r = o[i++];)
                if ((n = r.getAttributeNode("id")) && n.value === e) return [r];
            }
            return [];
          }
        }), i.find.TAG = n.getElementsByTagName ? function (e, t) {
          return void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e) : n.qsa ? t.querySelectorAll(e) : void 0;
        } : function (e, t) {
          var n, i = [],
            o = 0,
            r = t.getElementsByTagName(e);
          if ("*" === e) {
            for (; n = r[o++];) 1 === n.nodeType && i.push(n);
            return i;
          }
          return r;
        }, i.find.CLASS = n.getElementsByClassName && function (e, t) {
          if (void 0 !== t.getElementsByClassName && m) return t.getElementsByClassName(e);
        }, v = [], g = [], (n.qsa = Q.test(h.querySelectorAll)) && (le(function (e) {
          f.appendChild(e).innerHTML = "<a id='" + w + "'></a><select id='" + w + "-\r\\' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && g.push("[*^$]=" + L + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || g.push("\\[" + L + "*(?:value|" + j + ")"), e.querySelectorAll("[id~=" + w + "-]").length || g.push("~="), e.querySelectorAll(":checked").length || g.push(":checked"), e.querySelectorAll("a#" + w + "+*").length || g.push(".#.+[+~]");
        }), le(function (e) {
          e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
          var t = h.createElement("input");
          t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && g.push("name" + L + "*[*^$|!~]?="), 2 !== e.querySelectorAll(":enabled").length && g.push(":enabled", ":disabled"), f.appendChild(e).disabled = !0, 2 !== e.querySelectorAll(":disabled").length && g.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), g.push(",.*:");
        })), (n.matchesSelector = Q.test(b = f.matches || f.webkitMatchesSelector || f.mozMatchesSelector || f.oMatchesSelector || f.msMatchesSelector)) && le(function (e) {
          n.disconnectedMatch = b.call(e, "*"), b.call(e, "[s!='']:x"), v.push("!=", H);
        }), g = g.length && new RegExp(g.join("|")), v = v.length && new RegExp(v.join("|")), t = Q.test(f.compareDocumentPosition), y = t || Q.test(f.contains) ? function (e, t) {
          var n = 9 === e.nodeType ? e.documentElement : e,
            i = t && t.parentNode;
          return e === i || !(!i || 1 !== i.nodeType || !(n.contains ? n.contains(i) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(i)));
        } : function (e, t) {
          if (t)
            for (; t = t.parentNode;)
              if (t === e) return !0;
          return !1;
        }, E = t ? function (e, t) {
          if (e === t) return d = !0, 0;
          var i = !e.compareDocumentPosition - !t.compareDocumentPosition;
          return i || (1 & (i = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !n.sortDetached && t.compareDocumentPosition(e) === i ? e === h || e.ownerDocument === C && y(C, e) ? -1 : t === h || t.ownerDocument === C && y(C, t) ? 1 : u ? P(u, e) - P(u, t) : 0 : 4 & i ? -1 : 1);
        } : function (e, t) {
          if (e === t) return d = !0, 0;
          var n, i = 0,
            o = e.parentNode,
            r = t.parentNode,
            s = [e],
            a = [t];
          if (!o || !r) return e === h ? -1 : t === h ? 1 : o ? -1 : r ? 1 : u ? P(u, e) - P(u, t) : 0;
          if (o === r) return ue(e, t);
          for (n = e; n = n.parentNode;) s.unshift(n);
          for (n = t; n = n.parentNode;) a.unshift(n);
          for (; s[i] === a[i];) i++;
          return i ? ue(s[i], a[i]) : s[i] === C ? -1 : a[i] === C ? 1 : 0;
        }, h) : h;
      }, re.matches = function (e, t) {
        return re(e, null, null, t);
      }, re.matchesSelector = function (e, t) {
        if ((e.ownerDocument || e) !== h && p(e), t = t.replace(B, "='$1']"), n.matchesSelector && m && !T[t + " "] && (!v || !v.test(t)) && (!g || !g.test(t))) try {
          var i = b.call(e, t);
          if (i || n.disconnectedMatch || e.document && 11 !== e.document.nodeType) return i;
        } catch (e) { }
        return re(t, h, null, [e]).length > 0;
      }, re.contains = function (e, t) {
        return (e.ownerDocument || e) !== h && p(e), y(e, t);
      }, re.attr = function (e, t) {
        (e.ownerDocument || e) !== h && p(e);
        var o = i.attrHandle[t.toLowerCase()],
          r = o && S.call(i.attrHandle, t.toLowerCase()) ? o(e, t, !m) : void 0;
        return void 0 !== r ? r : n.attributes || !m ? e.getAttribute(t) : (r = e.getAttributeNode(t)) && r.specified ? r.value : null;
      }, re.escape = function (e) {
        return (e + "").replace(te, ne);
      }, re.error = function (e) {
        throw new Error("Syntax error, unrecognized expression: " + e);
      }, re.uniqueSort = function (e) {
        var t, i = [],
          o = 0,
          r = 0;
        if (d = !n.detectDuplicates, u = !n.sortStable && e.slice(0), e.sort(E), d) {
          for (; t = e[r++];) t === e[r] && (o = i.push(r));
          for (; o--;) e.splice(i[o], 1);
        }
        return u = null, e;
      }, o = re.getText = function (e) {
        var t, n = "",
          i = 0,
          r = e.nodeType;
        if (r) {
          if (1 === r || 9 === r || 11 === r) {
            if ("string" == typeof e.textContent) return e.textContent;
            for (e = e.firstChild; e; e = e.nextSibling) n += o(e);
          } else if (3 === r || 4 === r) return e.nodeValue;
        } else
          for (; t = e[i++];) n += o(t);
        return n;
      }, (i = re.selectors = {
        cacheLength: 50,
        createPseudo: ae,
        match: G,
        attrHandle: {},
        find: {},
        relative: {
          ">": {
            dir: "parentNode",
            first: !0
          },
          " ": {
            dir: "parentNode"
          },
          "+": {
            dir: "previousSibling",
            first: !0
          },
          "~": {
            dir: "previousSibling"
          }
        },
        preFilter: {
          ATTR: function (e) {
            return e[1] = e[1].replace(Z, ee), e[3] = (e[3] || e[4] || e[5] || "").replace(Z, ee), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4);
          },
          CHILD: function (e) {
            return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || re.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && re.error(e[0]), e;
          },
          PSEUDO: function (e) {
            var t, n = !e[6] && e[2];
            return G.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && z.test(n) && (t = s(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3));
          }
        },
        filter: {
          TAG: function (e) {
            var t = e.replace(Z, ee).toLowerCase();
            return "*" === e ? function () {
              return !0;
            } : function (e) {
              return e.nodeName && e.nodeName.toLowerCase() === t;
            };
          },
          CLASS: function (e) {
            var t = $[e + " "];
            return t || (t = new RegExp("(^|" + L + ")" + e + "(" + L + "|$)")) && $(e, function (e) {
              return t.test("string" == typeof e.className && e.className || void 0 !== e.getAttribute && e.getAttribute("class") || "");
            });
          },
          ATTR: function (e, t, n) {
            return function (i) {
              var o = re.attr(i, e);
              return null == o ? "!=" === t : !t || (o += "", "=" === t ? o === n : "!=" === t ? o !== n : "^=" === t ? n && 0 === o.indexOf(n) : "*=" === t ? n && o.indexOf(n) > -1 : "$=" === t ? n && o.slice(-n.length) === n : "~=" === t ? (" " + o.replace(W, " ") + " ").indexOf(n) > -1 : "|=" === t && (o === n || o.slice(0, n.length + 1) === n + "-"));
            };
          },
          CHILD: function (e, t, n, i, o) {
            var r = "nth" !== e.slice(0, 3),
              s = "last" !== e.slice(-4),
              a = "of-type" === t;
            return 1 === i && 0 === o ? function (e) {
              return !!e.parentNode;
            } : function (t, n, l) {
              var c, u, d, p, h, f, m = r !== s ? "nextSibling" : "previousSibling",
                g = t.parentNode,
                v = a && t.nodeName.toLowerCase(),
                b = !l && !a,
                y = !1;
              if (g) {
                if (r) {
                  for (; m;) {
                    for (p = t; p = p[m];)
                      if (a ? p.nodeName.toLowerCase() === v : 1 === p.nodeType) return !1;
                    f = m = "only" === e && !f && "nextSibling";
                  }
                  return !0;
                }
                if (f = [s ? g.firstChild : g.lastChild], s && b) {
                  for (y = (h = (c = (u = (d = (p = g)[w] || (p[w] = {}))[p.uniqueID] || (d[p.uniqueID] = {}))[e] || [])[0] === x && c[1]) && c[2], p = h && g.childNodes[h]; p = ++h && p && p[m] || (y = h = 0) || f.pop();)
                    if (1 === p.nodeType && ++y && p === t) {
                      u[e] = [x, h, y];
                      break;
                    }
                } else if (b && (y = h = (c = (u = (d = (p = t)[w] || (p[w] = {}))[p.uniqueID] || (d[p.uniqueID] = {}))[e] || [])[0] === x && c[1]), !1 === y)
                  for (;
                    (p = ++h && p && p[m] || (y = h = 0) || f.pop()) && ((a ? p.nodeName.toLowerCase() !== v : 1 !== p.nodeType) || !++y || (b && ((u = (d = p[w] || (p[w] = {}))[p.uniqueID] || (d[p.uniqueID] = {}))[e] = [x, y]), p !== t)););
                return (y -= o) === i || y % i == 0 && y / i >= 0;
              }
            };
          },
          PSEUDO: function (e, t) {
            var n, o = i.pseudos[e] || i.setFilters[e.toLowerCase()] || re.error("unsupported pseudo: " + e);
            return o[w] ? o(t) : o.length > 1 ? (n = [e, e, "", t], i.setFilters.hasOwnProperty(e.toLowerCase()) ? ae(function (e, n) {
              for (var i, r = o(e, t), s = r.length; s--;) e[i = P(e, r[s])] = !(n[i] = r[s]);
            }) : function (e) {
              return o(e, 0, n);
            }) : o;
          }
        },
        pseudos: {
          not: ae(function (e) {
            var t = [],
              n = [],
              i = a(e.replace(F, "$1"));
            return i[w] ? ae(function (e, t, n, o) {
              for (var r, s = i(e, null, o, []), a = e.length; a--;)(r = s[a]) && (e[a] = !(t[a] = r));
            }) : function (e, o, r) {
              return t[0] = e, i(t, null, r, n), t[0] = null, !n.pop();
            };
          }),
          has: ae(function (e) {
            return function (t) {
              return re(e, t).length > 0;
            };
          }),
          contains: ae(function (e) {
            return e = e.replace(Z, ee),
              function (t) {
                return (t.textContent || t.innerText || o(t)).indexOf(e) > -1;
              };
          }),
          lang: ae(function (e) {
            return V.test(e || "") || re.error("unsupported lang: " + e), e = e.replace(Z, ee).toLowerCase(),
              function (t) {
                var n;
                do {
                  if (n = m ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return (n = n.toLowerCase()) === e || 0 === n.indexOf(e + "-");
                } while ((t = t.parentNode) && 1 === t.nodeType);
                return !1;
              };
          }),
          target: function (t) {
            var n = e.location && e.location.hash;
            return n && n.slice(1) === t.id;
          },
          root: function (e) {
            return e === f;
          },
          focus: function (e) {
            return e === h.activeElement && (!h.hasFocus || h.hasFocus()) && !!(e.type || e.href || ~e.tabIndex);
          },
          enabled: he(!1),
          disabled: he(!0),
          checked: function (e) {
            var t = e.nodeName.toLowerCase();
            return "input" === t && !!e.checked || "option" === t && !!e.selected;
          },
          selected: function (e) {
            return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected;
          },
          empty: function (e) {
            for (e = e.firstChild; e; e = e.nextSibling)
              if (e.nodeType < 6) return !1;
            return !0;
          },
          parent: function (e) {
            return !i.pseudos.empty(e);
          },
          header: function (e) {
            return Y.test(e.nodeName);
          },
          input: function (e) {
            return K.test(e.nodeName);
          },
          button: function (e) {
            var t = e.nodeName.toLowerCase();
            return "input" === t && "button" === e.type || "button" === t;
          },
          text: function (e) {
            var t;
            return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase());
          },
          first: fe(function () {
            return [0];
          }),
          last: fe(function (e, t) {
            return [t - 1];
          }),
          eq: fe(function (e, t, n) {
            return [n < 0 ? n + t : n];
          }),
          even: fe(function (e, t) {
            for (var n = 0; n < t; n += 2) e.push(n);
            return e;
          }),
          odd: fe(function (e, t) {
            for (var n = 1; n < t; n += 2) e.push(n);
            return e;
          }),
          lt: fe(function (e, t, n) {
            for (var i = n < 0 ? n + t : n; --i >= 0;) e.push(i);
            return e;
          }),
          gt: fe(function (e, t, n) {
            for (var i = n < 0 ? n + t : n; ++i < t;) e.push(i);
            return e;
          })
        }
      }).pseudos.nth = i.pseudos.eq, {
        radio: !0,
        checkbox: !0,
        file: !0,
        password: !0,
        image: !0
      }) i.pseudos[t] = de(t);
      for (t in {
        submit: !0,
        reset: !0
      }) i.pseudos[t] = pe(t);

      function ge() { }

      function ve(e) {
        for (var t = 0, n = e.length, i = ""; t < n; t++) i += e[t].value;
        return i;
      }

      function be(e, t, n) {
        var i = t.dir,
          o = t.next,
          r = o || i,
          s = n && "parentNode" === r,
          a = _++;
        return t.first ? function (t, n, o) {
          for (; t = t[i];)
            if (1 === t.nodeType || s) return e(t, n, o);
          return !1;
        } : function (t, n, l) {
          var c, u, d, p = [x, a];
          if (l) {
            for (; t = t[i];)
              if ((1 === t.nodeType || s) && e(t, n, l)) return !0;
          } else
            for (; t = t[i];)
              if (1 === t.nodeType || s)
                if (u = (d = t[w] || (t[w] = {}))[t.uniqueID] || (d[t.uniqueID] = {}), o && o === t.nodeName.toLowerCase()) t = t[i] || t;
                else {
                  if ((c = u[r]) && c[0] === x && c[1] === a) return p[2] = c[2];
                  if (u[r] = p, p[2] = e(t, n, l)) return !0;
                } return !1;
        };
      }

      function ye(e) {
        return e.length > 1 ? function (t, n, i) {
          for (var o = e.length; o--;)
            if (!e[o](t, n, i)) return !1;
          return !0;
        } : e[0];
      }

      function we(e, t, n, i, o) {
        for (var r, s = [], a = 0, l = e.length, c = null != t; a < l; a++)(r = e[a]) && (n && !n(r, i, o) || (s.push(r), c && t.push(a)));
        return s;
      }

      function Ce(e, t, n, i, o, r) {
        return i && !i[w] && (i = Ce(i)), o && !o[w] && (o = Ce(o, r)), ae(function (r, s, a, l) {
          var c, u, d, p = [],
            h = [],
            f = s.length,
            m = r || function (e, t, n) {
              for (var i = 0, o = t.length; i < o; i++) re(e, t[i], n);
              return n;
            }(t || "*", a.nodeType ? [a] : a, []),
            g = !e || !r && t ? m : we(m, p, e, a, l),
            v = n ? o || (r ? e : f || i) ? [] : s : g;
          if (n && n(g, v, a, l), i)
            for (c = we(v, h), i(c, [], a, l), u = c.length; u--;)(d = c[u]) && (v[h[u]] = !(g[h[u]] = d));
          if (r) {
            if (o || e) {
              if (o) {
                for (c = [], u = v.length; u--;)(d = v[u]) && c.push(g[u] = d);
                o(null, v = [], c, l);
              }
              for (u = v.length; u--;)(d = v[u]) && (c = o ? P(r, d) : p[u]) > -1 && (r[c] = !(s[c] = d));
            }
          } else v = we(v === s ? v.splice(f, v.length) : v), o ? o(null, s, v, l) : O.apply(s, v);
        });
      }

      function xe(e) {
        for (var t, n, o, r = e.length, s = i.relative[e[0].type], a = s || i.relative[" "], l = s ? 1 : 0, u = be(function (e) {
          return e === t;
        }, a, !0), d = be(function (e) {
          return P(t, e) > -1;
        }, a, !0), p = [function (e, n, i) {
          var o = !s && (i || n !== c) || ((t = n).nodeType ? u(e, n, i) : d(e, n, i));
          return t = null, o;
        }]; l < r; l++)
          if (n = i.relative[e[l].type]) p = [be(ye(p), n)];
          else {
            if ((n = i.filter[e[l].type].apply(null, e[l].matches))[w]) {
              for (o = ++l; o < r && !i.relative[e[o].type]; o++);
              return Ce(l > 1 && ye(p), l > 1 && ve(e.slice(0, l - 1).concat({
                value: " " === e[l - 2].type ? "*" : ""
              })).replace(F, "$1"), n, l < o && xe(e.slice(l, o)), o < r && xe(e = e.slice(o)), o < r && ve(e));
            }
            p.push(n);
          } return ye(p);
      }

      function _e(e, t) {
        var n = t.length > 0,
          o = e.length > 0,
          r = function (r, s, a, l, u) {
            var d, f, g, v = 0,
              b = "0",
              y = r && [],
              w = [],
              C = c,
              _ = r || o && i.find.TAG("*", u),
              $ = x += null == C ? 1 : Math.random() || .1,
              k = _.length;
            for (u && (c = s === h || s || u); b !== k && null != (d = _[b]); b++) {
              if (o && d) {
                for (f = 0, s || d.ownerDocument === h || (p(d), a = !m); g = e[f++];)
                  if (g(d, s || h, a)) {
                    l.push(d);
                    break;
                  } u && (x = $);
              }
              n && ((d = !g && d) && v--, r && y.push(d));
            }
            if (v += b, n && b !== v) {
              for (f = 0; g = t[f++];) g(y, w, s, a);
              if (r) {
                if (v > 0)
                  for (; b--;) y[b] || w[b] || (w[b] = I.call(l));
                w = we(w);
              }
              O.apply(l, w), u && !r && w.length > 0 && v + t.length > 1 && re.uniqueSort(l);
            }
            return u && (x = $, c = C), y;
          };
        return n ? ae(r) : r;
      }
      return ge.prototype = i.filters = i.pseudos, i.setFilters = new ge, s = re.tokenize = function (e, t) {
        var n, o, r, s, a, l, c, u = k[e + " "];
        if (u) return t ? 0 : u.slice(0);
        for (a = e, l = [], c = i.preFilter; a;) {
          for (s in n && !(o = q.exec(a)) || (o && (a = a.slice(o[0].length) || a), l.push(r = [])), n = !1, (o = U.exec(a)) && (n = o.shift(), r.push({
            value: n,
            type: o[0].replace(F, " ")
          }), a = a.slice(n.length)), i.filter) !(o = G[s].exec(a)) || c[s] && !(o = c[s](o)) || (n = o.shift(), r.push({
            value: n,
            type: s,
            matches: o
          }), a = a.slice(n.length));
          if (!n) break;
        }
        return t ? a.length : a ? re.error(e) : k(e, l).slice(0);
      }, a = re.compile = function (e, t) {
        var n, i = [],
          o = [],
          r = T[e + " "];
        if (!r) {
          for (t || (t = s(e)), n = t.length; n--;)(r = xe(t[n]))[w] ? i.push(r) : o.push(r);
          (r = T(e, _e(o, i))).selector = e;
        }
        return r;
      }, l = re.select = function (e, t, n, o) {
        var r, l, c, u, d, p = "function" == typeof e && e,
          h = !o && s(e = p.selector || e);
        if (n = n || [], 1 === h.length) {
          if ((l = h[0] = h[0].slice(0)).length > 2 && "ID" === (c = l[0]).type && 9 === t.nodeType && m && i.relative[l[1].type]) {
            if (!(t = (i.find.ID(c.matches[0].replace(Z, ee), t) || [])[0])) return n;
            p && (t = t.parentNode), e = e.slice(l.shift().value.length);
          }
          for (r = G.needsContext.test(e) ? 0 : l.length; r-- && (c = l[r], !i.relative[u = c.type]);)
            if ((d = i.find[u]) && (o = d(c.matches[0].replace(Z, ee), J.test(l[0].type) && me(t.parentNode) || t))) {
              if (l.splice(r, 1), !(e = o.length && ve(l))) return O.apply(n, o), n;
              break;
            }
        }
        return (p || a(e, h))(o, t, !m, n, !t || J.test(e) && me(t.parentNode) || t), n;
      }, n.sortStable = w.split("").sort(E).join("") === w, n.detectDuplicates = !!d, p(), n.sortDetached = le(function (e) {
        return 1 & e.compareDocumentPosition(h.createElement("fieldset"));
      }), le(function (e) {
        return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href");
      }) || ce("type|href|height|width", function (e, t, n) {
        if (!n) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2);
      }), n.attributes && le(function (e) {
        return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value");
      }) || ce("value", function (e, t, n) {
        if (!n && "input" === e.nodeName.toLowerCase()) return e.defaultValue;
      }), le(function (e) {
        return null == e.getAttribute("disabled");
      }) || ce(j, function (e, t, n) {
        var i;
        if (!n) return !0 === e[t] ? t.toLowerCase() : (i = e.getAttributeNode(t)) && i.specified ? i.value : null;
      }), re;
    }(n);
    w.find = T, w.expr = T.selectors, w.expr[":"] = w.expr.pseudos, w.uniqueSort = w.unique = T.uniqueSort, w.text = T.getText, w.isXMLDoc = T.isXML, w.contains = T.contains, w.escapeSelector = T.escape;
    var E = function (e, t, n) {
      for (var i = [], o = void 0 !== n;
        (e = e[t]) && 9 !== e.nodeType;)
        if (1 === e.nodeType) {
          if (o && w(e).is(n)) break;
          i.push(e);
        } return i;
    },
      S = function (e, t) {
        for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
        return n;
      },
      D = w.expr.match.needsContext;

    function I(e, t) {
      return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase();
    }
    var A = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i,
      O = /^.[^:#\[\.,]*$/;

    function N(e, t, n) {
      return w.isFunction(t) ? w.grep(e, function (e, i) {
        return !!t.call(e, i, e) !== n;
      }) : t.nodeType ? w.grep(e, function (e) {
        return e === t !== n;
      }) : "string" != typeof t ? w.grep(e, function (e) {
        return d.call(t, e) > -1 !== n;
      }) : O.test(t) ? w.filter(t, e, n) : (t = w.filter(t, e), w.grep(e, function (e) {
        return d.call(t, e) > -1 !== n && 1 === e.nodeType;
      }));
    }
    w.filter = function (e, t, n) {
      var i = t[0];
      return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === i.nodeType ? w.find.matchesSelector(i, e) ? [i] : [] : w.find.matches(e, w.grep(t, function (e) {
        return 1 === e.nodeType;
      }));
    }, w.fn.extend({
      find: function (e) {
        var t, n, i = this.length,
          o = this;
        if ("string" != typeof e) return this.pushStack(w(e).filter(function () {
          for (t = 0; t < i; t++)
            if (w.contains(o[t], this)) return !0;
        }));
        for (n = this.pushStack([]), t = 0; t < i; t++) w.find(e, o[t], n);
        return i > 1 ? w.uniqueSort(n) : n;
      },
      filter: function (e) {
        return this.pushStack(N(this, e || [], !1));
      },
      not: function (e) {
        return this.pushStack(N(this, e || [], !0));
      },
      is: function (e) {
        return !!N(this, "string" == typeof e && D.test(e) ? w(e) : e || [], !1).length;
      }
    });
    var P, j = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
    (w.fn.init = function (e, t, n) {
      var i, o;
      if (!e) return this;
      if (n = n || P, "string" == typeof e) {
        if (!(i = "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3 ? [null, e, null] : j.exec(e)) || !i[1] && t) return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
        if (i[1]) {
          if (t = t instanceof w ? t[0] : t, w.merge(this, w.parseHTML(i[1], t && t.nodeType ? t.ownerDocument || t : s, !0)), A.test(i[1]) && w.isPlainObject(t))
            for (i in t) w.isFunction(this[i]) ? this[i](t[i]) : this.attr(i, t[i]);
          return this;
        }
        return (o = s.getElementById(i[2])) && (this[0] = o, this.length = 1), this;
      }
      return e.nodeType ? (this[0] = e, this.length = 1, this) : w.isFunction(e) ? void 0 !== n.ready ? n.ready(e) : e(w) : w.makeArray(e, this);
    }).prototype = w.fn, P = w(s);
    var L = /^(?:parents|prev(?:Until|All))/,
      M = {
        children: !0,
        contents: !0,
        next: !0,
        prev: !0
      };

    function R(e, t) {
      for (;
        (e = e[t]) && 1 !== e.nodeType;);
      return e;
    }
    w.fn.extend({
      has: function (e) {
        var t = w(e, this),
          n = t.length;
        return this.filter(function () {
          for (var e = 0; e < n; e++)
            if (w.contains(this, t[e])) return !0;
        });
      },
      closest: function (e, t) {
        var n, i = 0,
          o = this.length,
          r = [],
          s = "string" != typeof e && w(e);
        if (!D.test(e))
          for (; i < o; i++)
            for (n = this[i]; n && n !== t; n = n.parentNode)
              if (n.nodeType < 11 && (s ? s.index(n) > -1 : 1 === n.nodeType && w.find.matchesSelector(n, e))) {
                r.push(n);
                break;
              } return this.pushStack(r.length > 1 ? w.uniqueSort(r) : r);
      },
      index: function (e) {
        return e ? "string" == typeof e ? d.call(w(e), this[0]) : d.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1;
      },
      add: function (e, t) {
        return this.pushStack(w.uniqueSort(w.merge(this.get(), w(e, t))));
      },
      addBack: function (e) {
        return this.add(null == e ? this.prevObject : this.prevObject.filter(e));
      }
    }), w.each({
      parent: function (e) {
        var t = e.parentNode;
        return t && 11 !== t.nodeType ? t : null;
      },
      parents: function (e) {
        return E(e, "parentNode");
      },
      parentsUntil: function (e, t, n) {
        return E(e, "parentNode", n);
      },
      next: function (e) {
        return R(e, "nextSibling");
      },
      prev: function (e) {
        return R(e, "previousSibling");
      },
      nextAll: function (e) {
        return E(e, "nextSibling");
      },
      prevAll: function (e) {
        return E(e, "previousSibling");
      },
      nextUntil: function (e, t, n) {
        return E(e, "nextSibling", n);
      },
      prevUntil: function (e, t, n) {
        return E(e, "previousSibling", n);
      },
      siblings: function (e) {
        return S((e.parentNode || {}).firstChild, e);
      },
      children: function (e) {
        return S(e.firstChild);
      },
      contents: function (e) {
        return I(e, "iframe") ? e.contentDocument : (I(e, "template") && (e = e.content || e), w.merge([], e.childNodes));
      }
    }, function (e, t) {
      w.fn[e] = function (n, i) {
        var o = w.map(this, t, n);
        return "Until" !== e.slice(-5) && (i = n), i && "string" == typeof i && (o = w.filter(i, o)), this.length > 1 && (M[e] || w.uniqueSort(o), L.test(e) && o.reverse()), this.pushStack(o);
      };
    });
    var H = /[^\x20\t\r\n\f]+/g;

    function W(e) {
      return e;
    }

    function F(e) {
      throw e;
    }

    function q(e, t, n, i) {
      var o;
      try {
        e && w.isFunction(o = e.promise) ? o.call(e).done(t).fail(n) : e && w.isFunction(o = e.then) ? o.call(e, t, n) : t.apply(void 0, [e].slice(i));
      } catch (e) {
        n.apply(void 0, [e]);
      }
    }
    w.Callbacks = function (e) {
      e = "string" == typeof e ? function (e) {
        var t = {};
        return w.each(e.match(H) || [], function (e, n) {
          t[n] = !0;
        }), t;
      }(e) : w.extend({}, e);
      var t, n, i, o, r = [],
        s = [],
        a = -1,
        l = function () {
          for (o = o || e.once, i = t = !0; s.length; a = -1)
            for (n = s.shift(); ++a < r.length;) !1 === r[a].apply(n[0], n[1]) && e.stopOnFalse && (a = r.length, n = !1);
          e.memory || (n = !1), t = !1, o && (r = n ? [] : "");
        },
        c = {
          add: function () {
            return r && (n && !t && (a = r.length - 1, s.push(n)), function t(n) {
              w.each(n, function (n, i) {
                w.isFunction(i) ? e.unique && c.has(i) || r.push(i) : i && i.length && "string" !== w.type(i) && t(i);
              });
            }(arguments), n && !t && l()), this;
          },
          remove: function () {
            return w.each(arguments, function (e, t) {
              for (var n;
                (n = w.inArray(t, r, n)) > -1;) r.splice(n, 1), n <= a && a--;
            }), this;
          },
          has: function (e) {
            return e ? w.inArray(e, r) > -1 : r.length > 0;
          },
          empty: function () {
            return r && (r = []), this;
          },
          disable: function () {
            return o = s = [], r = n = "", this;
          },
          disabled: function () {
            return !r;
          },
          lock: function () {
            return o = s = [], n || t || (r = n = ""), this;
          },
          locked: function () {
            return !!o;
          },
          fireWith: function (e, n) {
            return o || (n = [e, (n = n || []).slice ? n.slice() : n], s.push(n), t || l()), this;
          },
          fire: function () {
            return c.fireWith(this, arguments), this;
          },
          fired: function () {
            return !!i;
          }
        };
      return c;
    }, w.extend({
      Deferred: function (e) {
        var t = [
          ["notify", "progress", w.Callbacks("memory"), w.Callbacks("memory"), 2],
          ["resolve", "done", w.Callbacks("once memory"), w.Callbacks("once memory"), 0, "resolved"],
          ["reject", "fail", w.Callbacks("once memory"), w.Callbacks("once memory"), 1, "rejected"]
        ],
          i = "pending",
          o = {
            state: function () {
              return i;
            },
            always: function () {
              return r.done(arguments).fail(arguments), this;
            },
            catch: function (e) {
              return o.then(null, e);
            },
            pipe: function () {
              var e = arguments;
              return w.Deferred(function (n) {
                w.each(t, function (t, i) {
                  var o = w.isFunction(e[i[4]]) && e[i[4]];
                  r[i[1]](function () {
                    var e = o && o.apply(this, arguments);
                    e && w.isFunction(e.promise) ? e.promise().progress(n.notify).done(n.resolve).fail(n.reject) : n[i[0] + "With"](this, o ? [e] : arguments);
                  });
                }), e = null;
              }).promise();
            },
            then: function (e, i, o) {
              var r = 0;

              function s(e, t, i, o) {
                return function () {
                  var a = this,
                    l = arguments,
                    c = function () {
                      var n, c;
                      if (!(e < r)) {
                        if ((n = i.apply(a, l)) === t.promise()) throw new TypeError("Thenable self-resolution");
                        c = n && ("object" == typeof n || "function" == typeof n) && n.then, w.isFunction(c) ? o ? c.call(n, s(r, t, W, o), s(r, t, F, o)) : (r++, c.call(n, s(r, t, W, o), s(r, t, F, o), s(r, t, W, t.notifyWith))) : (i !== W && (a = void 0, l = [n]), (o || t.resolveWith)(a, l));
                      }
                    },
                    u = o ? c : function () {
                      try {
                        c();
                      } catch (n) {
                        w.Deferred.exceptionHook && w.Deferred.exceptionHook(n, u.stackTrace), e + 1 >= r && (i !== F && (a = void 0, l = [n]), t.rejectWith(a, l));
                      }
                    };
                  e ? u() : (w.Deferred.getStackHook && (u.stackTrace = w.Deferred.getStackHook()), n.setTimeout(u));
                };
              }
              return w.Deferred(function (n) {
                t[0][3].add(s(0, n, w.isFunction(o) ? o : W, n.notifyWith)), t[1][3].add(s(0, n, w.isFunction(e) ? e : W)), t[2][3].add(s(0, n, w.isFunction(i) ? i : F));
              }).promise();
            },
            promise: function (e) {
              return null != e ? w.extend(e, o) : o;
            }
          },
          r = {};
        return w.each(t, function (e, n) {
          var s = n[2],
            a = n[5];
          o[n[1]] = s.add, a && s.add(function () {
            i = a;
          }, t[3 - e][2].disable, t[0][2].lock), s.add(n[3].fire), r[n[0]] = function () {
            return r[n[0] + "With"](this === r ? void 0 : this, arguments), this;
          }, r[n[0] + "With"] = s.fireWith;
        }), o.promise(r), e && e.call(r, r), r;
      },
      when: function (e) {
        var t = arguments.length,
          n = t,
          i = Array(n),
          o = l.call(arguments),
          r = w.Deferred(),
          s = function (e) {
            return function (n) {
              i[e] = this, o[e] = arguments.length > 1 ? l.call(arguments) : n, --t || r.resolveWith(i, o);
            };
          };
        if (t <= 1 && (q(e, r.done(s(n)).resolve, r.reject, !t), "pending" === r.state() || w.isFunction(o[n] && o[n].then))) return r.then();
        for (; n--;) q(o[n], s(n), r.reject);
        return r.promise();
      }
    });
    var U = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
    w.Deferred.exceptionHook = function (e, t) {
      n.console && n.console.warn && e && U.test(e.name) && n.console.warn("jQuery.Deferred exception: " + e.message, e.stack, t);
    }, w.readyException = function (e) {
      n.setTimeout(function () {
        throw e;
      });
    };
    var B = w.Deferred();

    function z() {
      s.removeEventListener("DOMContentLoaded", z), n.removeEventListener("load", z), w.ready();
    }
    w.fn.ready = function (e) {
      return B.then(e).catch(function (e) {
        w.readyException(e);
      }), this;
    }, w.extend({
      isReady: !1,
      readyWait: 1,
      ready: function (e) {
        (!0 === e ? --w.readyWait : w.isReady) || (w.isReady = !0, !0 !== e && --w.readyWait > 0 || B.resolveWith(s, [w]));
      }
    }), w.ready.then = B.then, "complete" === s.readyState || "loading" !== s.readyState && !s.documentElement.doScroll ? n.setTimeout(w.ready) : (s.addEventListener("DOMContentLoaded", z), n.addEventListener("load", z));
    var V = function (e, t, n, i, o, r, s) {
      var a = 0,
        l = e.length,
        c = null == n;
      if ("object" === w.type(n))
        for (a in o = !0, n) V(e, t, a, n[a], !0, r, s);
      else if (void 0 !== i && (o = !0, w.isFunction(i) || (s = !0), c && (s ? (t.call(e, i), t = null) : (c = t, t = function (e, t, n) {
        return c.call(w(e), n);
      })), t))
        for (; a < l; a++) t(e[a], n, s ? i : i.call(e[a], a, t(e[a], n)));
      return o ? e : c ? t.call(e) : l ? t(e[0], n) : r;
    },
      G = function (e) {
        return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType;
      };

    function K() {
      this.expando = w.expando + K.uid++;
    }
    K.uid = 1, K.prototype = {
      cache: function (e) {
        var t = e[this.expando];
        return t || (t = {}, G(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, {
          value: t,
          configurable: !0
        }))), t;
      },
      set: function (e, t, n) {
        var i, o = this.cache(e);
        if ("string" == typeof t) o[w.camelCase(t)] = n;
        else
          for (i in t) o[w.camelCase(i)] = t[i];
        return o;
      },
      get: function (e, t) {
        return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][w.camelCase(t)];
      },
      access: function (e, t, n) {
        return void 0 === t || t && "string" == typeof t && void 0 === n ? this.get(e, t) : (this.set(e, t, n), void 0 !== n ? n : t);
      },
      remove: function (e, t) {
        var n, i = e[this.expando];
        if (void 0 !== i) {
          if (void 0 !== t) {
            Array.isArray(t) ? t = t.map(w.camelCase) : t = (t = w.camelCase(t)) in i ? [t] : t.match(H) || [], n = t.length;
            for (; n--;) delete i[t[n]];
          } (void 0 === t || w.isEmptyObject(i)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando]);
        }
      },
      hasData: function (e) {
        var t = e[this.expando];
        return void 0 !== t && !w.isEmptyObject(t);
      }
    };
    var Y = new K,
      Q = new K,
      X = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
      J = /[A-Z]/g;

    function Z(e, t, n) {
      var i;
      if (void 0 === n && 1 === e.nodeType)
        if (i = "data-" + t.replace(J, "-$&").toLowerCase(), "string" == typeof (n = e.getAttribute(i))) {
          try {
            n = function (e) {
              return "true" === e || "false" !== e && ("null" === e ? null : e === +e + "" ? +e : X.test(e) ? JSON.parse(e) : e);
            }(n);
          } catch (e) { }
          Q.set(e, t, n);
        } else n = void 0;
      return n;
    }
    w.extend({
      hasData: function (e) {
        return Q.hasData(e) || Y.hasData(e);
      },
      data: function (e, t, n) {
        return Q.access(e, t, n);
      },
      removeData: function (e, t) {
        Q.remove(e, t);
      },
      _data: function (e, t, n) {
        return Y.access(e, t, n);
      },
      _removeData: function (e, t) {
        Y.remove(e, t);
      }
    }), w.fn.extend({
      data: function (e, t) {
        var n, i, o, r = this[0],
          s = r && r.attributes;
        if (void 0 === e) {
          if (this.length && (o = Q.get(r), 1 === r.nodeType && !Y.get(r, "hasDataAttrs"))) {
            for (n = s.length; n--;) s[n] && (0 === (i = s[n].name).indexOf("data-") && (i = w.camelCase(i.slice(5)), Z(r, i, o[i])));
            Y.set(r, "hasDataAttrs", !0);
          }
          return o;
        }
        return "object" == typeof e ? this.each(function () {
          Q.set(this, e);
        }) : V(this, function (t) {
          var n;
          if (r && void 0 === t) {
            if (void 0 !== (n = Q.get(r, e))) return n;
            if (void 0 !== (n = Z(r, e))) return n;
          } else this.each(function () {
            Q.set(this, e, t);
          });
        }, null, t, arguments.length > 1, null, !0);
      },
      removeData: function (e) {
        return this.each(function () {
          Q.remove(this, e);
        });
      }
    }), w.extend({
      queue: function (e, t, n) {
        var i;
        if (e) return t = (t || "fx") + "queue", i = Y.get(e, t), n && (!i || Array.isArray(n) ? i = Y.access(e, t, w.makeArray(n)) : i.push(n)), i || [];
      },
      dequeue: function (e, t) {
        t = t || "fx";
        var n = w.queue(e, t),
          i = n.length,
          o = n.shift(),
          r = w._queueHooks(e, t);
        "inprogress" === o && (o = n.shift(), i--), o && ("fx" === t && n.unshift("inprogress"), delete r.stop, o.call(e, function () {
          w.dequeue(e, t);
        }, r)), !i && r && r.empty.fire();
      },
      _queueHooks: function (e, t) {
        var n = t + "queueHooks";
        return Y.get(e, n) || Y.access(e, n, {
          empty: w.Callbacks("once memory").add(function () {
            Y.remove(e, [t + "queue", n]);
          })
        });
      }
    }), w.fn.extend({
      queue: function (e, t) {
        var n = 2;
        return "string" != typeof e && (t = e, e = "fx", n--), arguments.length < n ? w.queue(this[0], e) : void 0 === t ? this : this.each(function () {
          var n = w.queue(this, e, t);
          w._queueHooks(this, e), "fx" === e && "inprogress" !== n[0] && w.dequeue(this, e);
        });
      },
      dequeue: function (e) {
        return this.each(function () {
          w.dequeue(this, e);
        });
      },
      clearQueue: function (e) {
        return this.queue(e || "fx", []);
      },
      promise: function (e, t) {
        var n, i = 1,
          o = w.Deferred(),
          r = this,
          s = this.length,
          a = function () {
            --i || o.resolveWith(r, [r]);
          };
        for ("string" != typeof e && (t = e, e = void 0), e = e || "fx"; s--;)(n = Y.get(r[s], e + "queueHooks")) && n.empty && (i++, n.empty.add(a));
        return a(), o.promise(t);
      }
    });
    var ee = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
      te = new RegExp("^(?:([+-])=|)(" + ee + ")([a-z%]*)$", "i"),
      ne = ["Top", "Right", "Bottom", "Left"],
      ie = function (e, t) {
        return "none" === (e = t || e).style.display || "" === e.style.display && w.contains(e.ownerDocument, e) && "none" === w.css(e, "display");
      },
      oe = function (e, t, n, i) {
        var o, r, s = {};
        for (r in t) s[r] = e.style[r], e.style[r] = t[r];
        for (r in o = n.apply(e, i || []), t) e.style[r] = s[r];
        return o;
      };

    function re(e, t, n, i) {
      var o, r = 1,
        s = 20,
        a = i ? function () {
          return i.cur();
        } : function () {
          return w.css(e, t, "");
        },
        l = a(),
        c = n && n[3] || (w.cssNumber[t] ? "" : "px"),
        u = (w.cssNumber[t] || "px" !== c && +l) && te.exec(w.css(e, t));
      if (u && u[3] !== c) {
        c = c || u[3], n = n || [], u = +l || 1;
        do {
          u /= r = r || ".5", w.style(e, t, u + c);
        } while (r !== (r = a() / l) && 1 !== r && --s);
      }
      return n && (u = +u || +l || 0, o = n[1] ? u + (n[1] + 1) * n[2] : +n[2], i && (i.unit = c, i.start = u, i.end = o)), o;
    }
    var se = {};

    function ae(e) {
      var t, n = e.ownerDocument,
        i = e.nodeName,
        o = se[i];
      return o || (t = n.body.appendChild(n.createElement(i)), o = w.css(t, "display"), t.parentNode.removeChild(t), "none" === o && (o = "block"), se[i] = o, o);
    }

    function le(e, t) {
      for (var n, i, o = [], r = 0, s = e.length; r < s; r++)(i = e[r]).style && (n = i.style.display, t ? ("none" === n && (o[r] = Y.get(i, "display") || null, o[r] || (i.style.display = "")), "" === i.style.display && ie(i) && (o[r] = ae(i))) : "none" !== n && (o[r] = "none", Y.set(i, "display", n)));
      for (r = 0; r < s; r++) null != o[r] && (e[r].style.display = o[r]);
      return e;
    }
    w.fn.extend({
      show: function () {
        return le(this, !0);
      },
      hide: function () {
        return le(this);
      },
      toggle: function (e) {
        return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function () {
          ie(this) ? w(this).show() : w(this).hide();
        });
      }
    });
    var ce = /^(?:checkbox|radio)$/i,
      ue = /<([a-z][^\/\0>\x20\t\r\n\f]+)/i,
      de = /^$|\/(?:java|ecma)script/i,
      pe = {
        option: [1, "<select multiple='multiple'>", "</select>"],
        thead: [1, "<table>", "</table>"],
        col: [2, "<table><colgroup>", "</colgroup></table>"],
        tr: [2, "<table><tbody>", "</tbody></table>"],
        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
        _default: [0, "", ""]
      };

    function he(e, t) {
      var n;
      return n = void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t || "*") : void 0 !== e.querySelectorAll ? e.querySelectorAll(t || "*") : [], void 0 === t || t && I(e, t) ? w.merge([e], n) : n;
    }

    function fe(e, t) {
      for (var n = 0, i = e.length; n < i; n++) Y.set(e[n], "globalEval", !t || Y.get(t[n], "globalEval"));
    }
    pe.optgroup = pe.option, pe.tbody = pe.tfoot = pe.colgroup = pe.caption = pe.thead, pe.th = pe.td;
    var me = /<|&#?\w+;/;

    function ge(e, t, n, i, o) {
      for (var r, s, a, l, c, u, d = t.createDocumentFragment(), p = [], h = 0, f = e.length; h < f; h++)
        if ((r = e[h]) || 0 === r)
          if ("object" === w.type(r)) w.merge(p, r.nodeType ? [r] : r);
          else if (me.test(r)) {
            for (s = s || d.appendChild(t.createElement("div")), a = (ue.exec(r) || ["", ""])[1].toLowerCase(), l = pe[a] || pe._default, s.innerHTML = l[1] + w.htmlPrefilter(r) + l[2], u = l[0]; u--;) s = s.lastChild;
            w.merge(p, s.childNodes), (s = d.firstChild).textContent = "";
          } else p.push(t.createTextNode(r));
      for (d.textContent = "", h = 0; r = p[h++];)
        if (i && w.inArray(r, i) > -1) o && o.push(r);
        else if (c = w.contains(r.ownerDocument, r), s = he(d.appendChild(r), "script"), c && fe(s), n)
          for (u = 0; r = s[u++];) de.test(r.type || "") && n.push(r);
      return d;
    } ! function () {
      var e = s.createDocumentFragment().appendChild(s.createElement("div")),
        t = s.createElement("input");
      t.setAttribute("type", "radio"), t.setAttribute("checked", "checked"), t.setAttribute("name", "t"), e.appendChild(t), v.checkClone = e.cloneNode(!0).cloneNode(!0).lastChild.checked, e.innerHTML = "<textarea>x</textarea>", v.noCloneChecked = !!e.cloneNode(!0).lastChild.defaultValue;
    }();
    var ve = s.documentElement,
      be = /^key/,
      ye = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
      we = /^([^.]*)(?:\.(.+)|)/;

    function Ce() {
      return !0;
    }

    function xe() {
      return !1;
    }

    function _e() {
      try {
        return s.activeElement;
      } catch (e) { }
    }

    function $e(e, t, n, i, o, r) {
      var s, a;
      if ("object" == typeof t) {
        for (a in "string" != typeof n && (i = i || n, n = void 0), t) $e(e, a, n, i, t[a], r);
        return e;
      }
      if (null == i && null == o ? (o = n, i = n = void 0) : null == o && ("string" == typeof n ? (o = i, i = void 0) : (o = i, i = n, n = void 0)), !1 === o) o = xe;
      else if (!o) return e;
      return 1 === r && (s = o, (o = function (e) {
        return w().off(e), s.apply(this, arguments);
      }).guid = s.guid || (s.guid = w.guid++)), e.each(function () {
        w.event.add(this, t, o, i, n);
      });
    }
    w.event = {
      global: {},
      add: function (e, t, n, i, o) {
        var r, s, a, l, c, u, d, p, h, f, m, g = Y.get(e);
        if (g)
          for (n.handler && (n = (r = n).handler, o = r.selector), o && w.find.matchesSelector(ve, o), n.guid || (n.guid = w.guid++), (l = g.events) || (l = g.events = {}), (s = g.handle) || (s = g.handle = function (t) {
            return void 0 !== w && w.event.triggered !== t.type ? w.event.dispatch.apply(e, arguments) : void 0;
          }), c = (t = (t || "").match(H) || [""]).length; c--;) h = m = (a = we.exec(t[c]) || [])[1], f = (a[2] || "").split(".").sort(), h && (d = w.event.special[h] || {}, h = (o ? d.delegateType : d.bindType) || h, d = w.event.special[h] || {}, u = w.extend({
            type: h,
            origType: m,
            data: i,
            handler: n,
            guid: n.guid,
            selector: o,
            needsContext: o && w.expr.match.needsContext.test(o),
            namespace: f.join(".")
          }, r), (p = l[h]) || ((p = l[h] = []).delegateCount = 0, d.setup && !1 !== d.setup.call(e, i, f, s) || e.addEventListener && e.addEventListener(h, s)), d.add && (d.add.call(e, u), u.handler.guid || (u.handler.guid = n.guid)), o ? p.splice(p.delegateCount++, 0, u) : p.push(u), w.event.global[h] = !0);
      },
      remove: function (e, t, n, i, o) {
        var r, s, a, l, c, u, d, p, h, f, m, g = Y.hasData(e) && Y.get(e);
        if (g && (l = g.events)) {
          for (c = (t = (t || "").match(H) || [""]).length; c--;)
            if (h = m = (a = we.exec(t[c]) || [])[1], f = (a[2] || "").split(".").sort(), h) {
              for (d = w.event.special[h] || {}, p = l[h = (i ? d.delegateType : d.bindType) || h] || [], a = a[2] && new RegExp("(^|\\.)" + f.join("\\.(?:.*\\.|)") + "(\\.|$)"), s = r = p.length; r--;) u = p[r], !o && m !== u.origType || n && n.guid !== u.guid || a && !a.test(u.namespace) || i && i !== u.selector && ("**" !== i || !u.selector) || (p.splice(r, 1), u.selector && p.delegateCount--, d.remove && d.remove.call(e, u));
              s && !p.length && (d.teardown && !1 !== d.teardown.call(e, f, g.handle) || w.removeEvent(e, h, g.handle), delete l[h]);
            } else
              for (h in l) w.event.remove(e, h + t[c], n, i, !0);
          w.isEmptyObject(l) && Y.remove(e, "handle events");
        }
      },
      dispatch: function (e) {
        var t, n, i, o, r, s, a = w.event.fix(e),
          l = new Array(arguments.length),
          c = (Y.get(this, "events") || {})[a.type] || [],
          u = w.event.special[a.type] || {};
        for (l[0] = a, t = 1; t < arguments.length; t++) l[t] = arguments[t];
        if (a.delegateTarget = this, !u.preDispatch || !1 !== u.preDispatch.call(this, a)) {
          for (s = w.event.handlers.call(this, a, c), t = 0;
            (o = s[t++]) && !a.isPropagationStopped();)
            for (a.currentTarget = o.elem, n = 0;
              (r = o.handlers[n++]) && !a.isImmediatePropagationStopped();) a.rnamespace && !a.rnamespace.test(r.namespace) || (a.handleObj = r, a.data = r.data, void 0 !== (i = ((w.event.special[r.origType] || {}).handle || r.handler).apply(o.elem, l)) && !1 === (a.result = i) && (a.preventDefault(), a.stopPropagation()));
          return u.postDispatch && u.postDispatch.call(this, a), a.result;
        }
      },
      handlers: function (e, t) {
        var n, i, o, r, s, a = [],
          l = t.delegateCount,
          c = e.target;
        if (l && c.nodeType && !("click" === e.type && e.button >= 1))
          for (; c !== this; c = c.parentNode || this)
            if (1 === c.nodeType && ("click" !== e.type || !0 !== c.disabled)) {
              for (r = [], s = {}, n = 0; n < l; n++) void 0 === s[o = (i = t[n]).selector + " "] && (s[o] = i.needsContext ? w(o, this).index(c) > -1 : w.find(o, this, null, [c]).length), s[o] && r.push(i);
              r.length && a.push({
                elem: c,
                handlers: r
              });
            } return c = this, l < t.length && a.push({
              elem: c,
              handlers: t.slice(l)
            }), a;
      },
      addProp: function (e, t) {
        Object.defineProperty(w.Event.prototype, e, {
          enumerable: !0,
          configurable: !0,
          get: w.isFunction(t) ? function () {
            if (this.originalEvent) return t(this.originalEvent);
          } : function () {
            if (this.originalEvent) return this.originalEvent[e];
          },
          set: function (t) {
            Object.defineProperty(this, e, {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: t
            });
          }
        });
      },
      fix: function (e) {
        return e[w.expando] ? e : new w.Event(e);
      },
      special: {
        load: {
          noBubble: !0
        },
        focus: {
          trigger: function () {
            if (this !== _e() && this.focus) return this.focus(), !1;
          },
          delegateType: "focusin"
        },
        blur: {
          trigger: function () {
            if (this === _e() && this.blur) return this.blur(), !1;
          },
          delegateType: "focusout"
        },
        click: {
          trigger: function () {
            if ("checkbox" === this.type && this.click && I(this, "input")) return this.click(), !1;
          },
          _default: function (e) {
            return I(e.target, "a");
          }
        },
        beforeunload: {
          postDispatch: function (e) {
            void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result);
          }
        }
      }
    }, w.removeEvent = function (e, t, n) {
      e.removeEventListener && e.removeEventListener(t, n);
    }, w.Event = function (e, t) {
      return this instanceof w.Event ? (e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? Ce : xe, this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target, this.currentTarget = e.currentTarget, this.relatedTarget = e.relatedTarget) : this.type = e, t && w.extend(this, t), this.timeStamp = e && e.timeStamp || w.now(), void (this[w.expando] = !0)) : new w.Event(e, t);
    }, w.Event.prototype = {
      constructor: w.Event,
      isDefaultPrevented: xe,
      isPropagationStopped: xe,
      isImmediatePropagationStopped: xe,
      isSimulated: !1,
      preventDefault: function () {
        var e = this.originalEvent;
        this.isDefaultPrevented = Ce, e && !this.isSimulated && e.preventDefault();
      },
      stopPropagation: function () {
        var e = this.originalEvent;
        this.isPropagationStopped = Ce, e && !this.isSimulated && e.stopPropagation();
      },
      stopImmediatePropagation: function () {
        var e = this.originalEvent;
        this.isImmediatePropagationStopped = Ce, e && !this.isSimulated && e.stopImmediatePropagation(), this.stopPropagation();
      }
    }, w.each({
      altKey: !0,
      bubbles: !0,
      cancelable: !0,
      changedTouches: !0,
      ctrlKey: !0,
      detail: !0,
      eventPhase: !0,
      metaKey: !0,
      pageX: !0,
      pageY: !0,
      shiftKey: !0,
      view: !0,
      char: !0,
      charCode: !0,
      key: !0,
      keyCode: !0,
      button: !0,
      buttons: !0,
      clientX: !0,
      clientY: !0,
      offsetX: !0,
      offsetY: !0,
      pointerId: !0,
      pointerType: !0,
      screenX: !0,
      screenY: !0,
      targetTouches: !0,
      toElement: !0,
      touches: !0,
      which: function (e) {
        var t = e.button;
        return null == e.which && be.test(e.type) ? null != e.charCode ? e.charCode : e.keyCode : !e.which && void 0 !== t && ye.test(e.type) ? 1 & t ? 1 : 2 & t ? 3 : 4 & t ? 2 : 0 : e.which;
      }
    }, w.event.addProp), w.each({
      mouseenter: "mouseover",
      mouseleave: "mouseout",
      pointerenter: "pointerover",
      pointerleave: "pointerout"
    }, function (e, t) {
      w.event.special[e] = {
        delegateType: t,
        bindType: t,
        handle: function (e) {
          var n, i = e.relatedTarget,
            o = e.handleObj;
          return i && (i === this || w.contains(this, i)) || (e.type = o.origType, n = o.handler.apply(this, arguments), e.type = t), n;
        }
      };
    }), w.fn.extend({
      on: function (e, t, n, i) {
        return $e(this, e, t, n, i);
      },
      one: function (e, t, n, i) {
        return $e(this, e, t, n, i, 1);
      },
      off: function (e, t, n) {
        var i, o;
        if (e && e.preventDefault && e.handleObj) return i = e.handleObj, w(e.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler), this;
        if ("object" == typeof e) {
          for (o in e) this.off(o, t, e[o]);
          return this;
        }
        return !1 !== t && "function" != typeof t || (n = t, t = void 0), !1 === n && (n = xe), this.each(function () {
          w.event.remove(this, e, n, t);
        });
      }
    });
    var ke = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
      Te = /<script|<style|<link/i,
      Ee = /checked\s*(?:[^=]|=\s*.checked.)/i,
      Se = /^true\/(.*)/,
      De = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

    function Ie(e, t) {
      return I(e, "table") && I(11 !== t.nodeType ? t : t.firstChild, "tr") && w(">tbody", e)[0] || e;
    }

    function Ae(e) {
      return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e;
    }

    function Oe(e) {
      var t = Se.exec(e.type);
      return t ? e.type = t[1] : e.removeAttribute("type"), e;
    }

    function Ne(e, t) {
      var n, i, o, r, s, a, l, c;
      if (1 === t.nodeType) {
        if (Y.hasData(e) && (r = Y.access(e), s = Y.set(t, r), c = r.events))
          for (o in delete s.handle, s.events = {}, c)
            for (n = 0, i = c[o].length; n < i; n++) w.event.add(t, o, c[o][n]);
        Q.hasData(e) && (a = Q.access(e), l = w.extend({}, a), Q.set(t, l));
      }
    }

    function Pe(e, t) {
      var n = t.nodeName.toLowerCase();
      "input" === n && ce.test(e.type) ? t.checked = e.checked : "input" !== n && "textarea" !== n || (t.defaultValue = e.defaultValue);
    }

    function je(e, t, n, i) {
      t = c.apply([], t);
      var o, r, s, a, l, u, d = 0,
        p = e.length,
        h = p - 1,
        f = t[0],
        m = w.isFunction(f);
      if (m || p > 1 && "string" == typeof f && !v.checkClone && Ee.test(f)) return e.each(function (o) {
        var r = e.eq(o);
        m && (t[0] = f.call(this, o, r.html())), je(r, t, n, i);
      });
      if (p && (r = (o = ge(t, e[0].ownerDocument, !1, e, i)).firstChild, 1 === o.childNodes.length && (o = r), r || i)) {
        for (a = (s = w.map(he(o, "script"), Ae)).length; d < p; d++) l = o, d !== h && (l = w.clone(l, !0, !0), a && w.merge(s, he(l, "script"))), n.call(e[d], l, d);
        if (a)
          for (u = s[s.length - 1].ownerDocument, w.map(s, Oe), d = 0; d < a; d++) l = s[d], de.test(l.type || "") && !Y.access(l, "globalEval") && w.contains(u, l) && (l.src ? w._evalUrl && w._evalUrl(l.src) : b(l.textContent.replace(De, ""), u));
      }
      return e;
    }

    function Le(e, t, n) {
      for (var i, o = t ? w.filter(t, e) : e, r = 0; null != (i = o[r]); r++) n || 1 !== i.nodeType || w.cleanData(he(i)), i.parentNode && (n && w.contains(i.ownerDocument, i) && fe(he(i, "script")), i.parentNode.removeChild(i));
      return e;
    }
    w.extend({
      htmlPrefilter: function (e) {
        return e.replace(ke, "<$1></$2>");
      },
      clone: function (e, t, n) {
        var i, o, r, s, a = e.cloneNode(!0),
          l = w.contains(e.ownerDocument, e);
        if (!(v.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || w.isXMLDoc(e)))
          for (s = he(a), i = 0, o = (r = he(e)).length; i < o; i++) Pe(r[i], s[i]);
        if (t)
          if (n)
            for (r = r || he(e), s = s || he(a), i = 0, o = r.length; i < o; i++) Ne(r[i], s[i]);
          else Ne(e, a);
        return (s = he(a, "script")).length > 0 && fe(s, !l && he(e, "script")), a;
      },
      cleanData: function (e) {
        for (var t, n, i, o = w.event.special, r = 0; void 0 !== (n = e[r]); r++)
          if (G(n)) {
            if (t = n[Y.expando]) {
              if (t.events)
                for (i in t.events) o[i] ? w.event.remove(n, i) : w.removeEvent(n, i, t.handle);
              n[Y.expando] = void 0;
            }
            n[Q.expando] && (n[Q.expando] = void 0);
          }
      }
    }), w.fn.extend({
      detach: function (e) {
        return Le(this, e, !0);
      },
      remove: function (e) {
        return Le(this, e);
      },
      text: function (e) {
        return V(this, function (e) {
          return void 0 === e ? w.text(this) : this.empty().each(function () {
            1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e);
          });
        }, null, e, arguments.length);
      },
      append: function () {
        return je(this, arguments, function (e) {
          1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || Ie(this, e).appendChild(e);
        });
      },
      prepend: function () {
        return je(this, arguments, function (e) {
          if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
            var t = Ie(this, e);
            t.insertBefore(e, t.firstChild);
          }
        });
      },
      before: function () {
        return je(this, arguments, function (e) {
          this.parentNode && this.parentNode.insertBefore(e, this);
        });
      },
      after: function () {
        return je(this, arguments, function (e) {
          this.parentNode && this.parentNode.insertBefore(e, this.nextSibling);
        });
      },
      empty: function () {
        for (var e, t = 0; null != (e = this[t]); t++) 1 === e.nodeType && (w.cleanData(he(e, !1)), e.textContent = "");
        return this;
      },
      clone: function (e, t) {
        return e = null != e && e, t = null == t ? e : t, this.map(function () {
          return w.clone(this, e, t);
        });
      },
      html: function (e) {
        return V(this, function (e) {
          var t = this[0] || {},
            n = 0,
            i = this.length;
          if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
          if ("string" == typeof e && !Te.test(e) && !pe[(ue.exec(e) || ["", ""])[1].toLowerCase()]) {
            e = w.htmlPrefilter(e);
            try {
              for (; n < i; n++) 1 === (t = this[n] || {}).nodeType && (w.cleanData(he(t, !1)), t.innerHTML = e);
              t = 0;
            } catch (e) { }
          }
          t && this.empty().append(e);
        }, null, e, arguments.length);
      },
      replaceWith: function () {
        var e = [];
        return je(this, arguments, function (t) {
          var n = this.parentNode;
          w.inArray(this, e) < 0 && (w.cleanData(he(this)), n && n.replaceChild(t, this));
        }, e);
      }
    }), w.each({
      appendTo: "append",
      prependTo: "prepend",
      insertBefore: "before",
      insertAfter: "after",
      replaceAll: "replaceWith"
    }, function (e, t) {
      w.fn[e] = function (e) {
        for (var n, i = [], o = w(e), r = o.length - 1, s = 0; s <= r; s++) n = s === r ? this : this.clone(!0), w(o[s])[t](n), u.apply(i, n.get());
        return this.pushStack(i);
      };
    });
    var Me = /^margin/,
      Re = new RegExp("^(" + ee + ")(?!px)[a-z%]+$", "i"),
      He = function (e) {
        var t = e.ownerDocument.defaultView;
        return t && t.opener || (t = n), t.getComputedStyle(e);
      };

    function We(e, t, n) {
      var i, o, r, s, a = e.style;
      return (n = n || He(e)) && ("" !== (s = n.getPropertyValue(t) || n[t]) || w.contains(e.ownerDocument, e) || (s = w.style(e, t)), !v.pixelMarginRight() && Re.test(s) && Me.test(t) && (i = a.width, o = a.minWidth, r = a.maxWidth, a.minWidth = a.maxWidth = a.width = s, s = n.width, a.width = i, a.minWidth = o, a.maxWidth = r)), void 0 !== s ? s + "" : s;
    }

    function Fe(e, t) {
      return {
        get: function () {
          return e() ? void delete this.get : (this.get = t).apply(this, arguments);
        }
      };
    } ! function () {
      function e() {
        if (l) {
          l.style.cssText = "box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%", l.innerHTML = "", ve.appendChild(a);
          var e = n.getComputedStyle(l);
          t = "1%" !== e.top, r = "2px" === e.marginLeft, i = "4px" === e.width, l.style.marginRight = "50%", o = "4px" === e.marginRight, ve.removeChild(a), l = null;
        }
      }
      var t, i, o, r, a = s.createElement("div"),
        l = s.createElement("div");
      l.style && (l.style.backgroundClip = "content-box", l.cloneNode(!0).style.backgroundClip = "", v.clearCloneStyle = "content-box" === l.style.backgroundClip, a.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute", a.appendChild(l), w.extend(v, {
        pixelPosition: function () {
          return e(), t;
        },
        boxSizingReliable: function () {
          return e(), i;
        },
        pixelMarginRight: function () {
          return e(), o;
        },
        reliableMarginLeft: function () {
          return e(), r;
        }
      }));
    }();
    var qe = /^(none|table(?!-c[ea]).+)/,
      Ue = /^--/,
      Be = {
        position: "absolute",
        visibility: "hidden",
        display: "block"
      },
      ze = {
        letterSpacing: "0",
        fontWeight: "400"
      },
      Ve = ["Webkit", "Moz", "ms"],
      Ge = s.createElement("div").style;

    function Ke(e) {
      var t = w.cssProps[e];
      return t || (t = w.cssProps[e] = function (e) {
        if (e in Ge) return e;
        for (var t = e[0].toUpperCase() + e.slice(1), n = Ve.length; n--;)
          if ((e = Ve[n] + t) in Ge) return e;
      }(e) || e), t;
    }

    function Ye(e, t, n) {
      var i = te.exec(t);
      return i ? Math.max(0, i[2] - (n || 0)) + (i[3] || "px") : t;
    }

    function Qe(e, t, n, i, o) {
      var r, s = 0;
      for (r = n === (i ? "border" : "content") ? 4 : "width" === t ? 1 : 0; r < 4; r += 2) "margin" === n && (s += w.css(e, n + ne[r], !0, o)), i ? ("content" === n && (s -= w.css(e, "padding" + ne[r], !0, o)), "margin" !== n && (s -= w.css(e, "border" + ne[r] + "Width", !0, o))) : (s += w.css(e, "padding" + ne[r], !0, o), "padding" !== n && (s += w.css(e, "border" + ne[r] + "Width", !0, o)));
      return s;
    }

    function Xe(e, t, n) {
      var i, o = He(e),
        r = We(e, t, o),
        s = "border-box" === w.css(e, "boxSizing", !1, o);
      return Re.test(r) ? r : (i = s && (v.boxSizingReliable() || r === e.style[t]), "auto" === r && (r = e["offset" + t[0].toUpperCase() + t.slice(1)]), (r = parseFloat(r) || 0) + Qe(e, t, n || (s ? "border" : "content"), i, o) + "px");
    }

    function Je(e, t, n, i, o) {
      return new Je.prototype.init(e, t, n, i, o);
    }
    w.extend({
      cssHooks: {
        opacity: {
          get: function (e, t) {
            if (t) {
              var n = We(e, "opacity");
              return "" === n ? "1" : n;
            }
          }
        }
      },
      cssNumber: {
        animationIterationCount: !0,
        columnCount: !0,
        fillOpacity: !0,
        flexGrow: !0,
        flexShrink: !0,
        fontWeight: !0,
        lineHeight: !0,
        opacity: !0,
        order: !0,
        orphans: !0,
        widows: !0,
        zIndex: !0,
        zoom: !0
      },
      cssProps: {
        float: "cssFloat"
      },
      style: function (e, t, n, i) {
        if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
          var o, r, s, a = w.camelCase(t),
            l = Ue.test(t),
            c = e.style;
          return l || (t = Ke(a)), s = w.cssHooks[t] || w.cssHooks[a], void 0 === n ? s && "get" in s && void 0 !== (o = s.get(e, !1, i)) ? o : c[t] : ("string" === (r = typeof n) && (o = te.exec(n)) && o[1] && (n = re(e, t, o), r = "number"), void (null != n && n == n && ("number" === r && (n += o && o[3] || (w.cssNumber[a] ? "" : "px")), v.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (c[t] = "inherit"), s && "set" in s && void 0 === (n = s.set(e, n, i)) || (l ? c.setProperty(t, n) : c[t] = n))));
        }
      },
      css: function (e, t, n, i) {
        var o, r, s, a = w.camelCase(t);
        return Ue.test(t) || (t = Ke(a)), (s = w.cssHooks[t] || w.cssHooks[a]) && "get" in s && (o = s.get(e, !0, n)), void 0 === o && (o = We(e, t, i)), "normal" === o && t in ze && (o = ze[t]), "" === n || n ? (r = parseFloat(o), !0 === n || isFinite(r) ? r || 0 : o) : o;
      }
    }), w.each(["height", "width"], function (e, t) {
      w.cssHooks[t] = {
        get: function (e, n, i) {
          if (n) return !qe.test(w.css(e, "display")) || e.getClientRects().length && e.getBoundingClientRect().width ? Xe(e, t, i) : oe(e, Be, function () {
            return Xe(e, t, i);
          });
        },
        set: function (e, n, i) {
          var o, r = i && He(e),
            s = i && Qe(e, t, i, "border-box" === w.css(e, "boxSizing", !1, r), r);
          return s && (o = te.exec(n)) && "px" !== (o[3] || "px") && (e.style[t] = n, n = w.css(e, t)), Ye(0, n, s);
        }
      };
    }), w.cssHooks.marginLeft = Fe(v.reliableMarginLeft, function (e, t) {
      if (t) return (parseFloat(We(e, "marginLeft")) || e.getBoundingClientRect().left - oe(e, {
        marginLeft: 0
      }, function () {
        return e.getBoundingClientRect().left;
      })) + "px";
    }), w.each({
      margin: "",
      padding: "",
      border: "Width"
    }, function (e, t) {
      w.cssHooks[e + t] = {
        expand: function (n) {
          for (var i = 0, o = {}, r = "string" == typeof n ? n.split(" ") : [n]; i < 4; i++) o[e + ne[i] + t] = r[i] || r[i - 2] || r[0];
          return o;
        }
      }, Me.test(e) || (w.cssHooks[e + t].set = Ye);
    }), w.fn.extend({
      css: function (e, t) {
        return V(this, function (e, t, n) {
          var i, o, r = {},
            s = 0;
          if (Array.isArray(t)) {
            for (i = He(e), o = t.length; s < o; s++) r[t[s]] = w.css(e, t[s], !1, i);
            return r;
          }
          return void 0 !== n ? w.style(e, t, n) : w.css(e, t);
        }, e, t, arguments.length > 1);
      }
    }), w.Tween = Je, Je.prototype = {
      constructor: Je,
      init: function (e, t, n, i, o, r) {
        this.elem = e, this.prop = n, this.easing = o || w.easing._default, this.options = t, this.start = this.now = this.cur(), this.end = i, this.unit = r || (w.cssNumber[n] ? "" : "px");
      },
      cur: function () {
        var e = Je.propHooks[this.prop];
        return e && e.get ? e.get(this) : Je.propHooks._default.get(this);
      },
      run: function (e) {
        var t, n = Je.propHooks[this.prop];
        return this.options.duration ? this.pos = t = w.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : Je.propHooks._default.set(this), this;
      }
    }, Je.prototype.init.prototype = Je.prototype, Je.propHooks = {
      _default: {
        get: function (e) {
          var t;
          return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = w.css(e.elem, e.prop, "")) && "auto" !== t ? t : 0;
        },
        set: function (e) {
          w.fx.step[e.prop] ? w.fx.step[e.prop](e) : 1 !== e.elem.nodeType || null == e.elem.style[w.cssProps[e.prop]] && !w.cssHooks[e.prop] ? e.elem[e.prop] = e.now : w.style(e.elem, e.prop, e.now + e.unit);
        }
      }
    }, Je.propHooks.scrollTop = Je.propHooks.scrollLeft = {
      set: function (e) {
        e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now);
      }
    }, w.easing = {
      linear: function (e) {
        return e;
      },
      swing: function (e) {
        return .5 - Math.cos(e * Math.PI) / 2;
      },
      _default: "swing"
    }, w.fx = Je.prototype.init, w.fx.step = {};
    var Ze, et, tt = /^(?:toggle|show|hide)$/,
      nt = /queueHooks$/;

    function it() {
      et && (!1 === s.hidden && n.requestAnimationFrame ? n.requestAnimationFrame(it) : n.setTimeout(it, w.fx.interval), w.fx.tick());
    }

    function ot() {
      return n.setTimeout(function () {
        Ze = void 0;
      }), Ze = w.now();
    }

    function rt(e, t) {
      var n, i = 0,
        o = {
          height: e
        };
      for (t = t ? 1 : 0; i < 4; i += 2 - t) o["margin" + (n = ne[i])] = o["padding" + n] = e;
      return t && (o.opacity = o.width = e), o;
    }

    function st(e, t, n) {
      for (var i, o = (at.tweeners[t] || []).concat(at.tweeners["*"]), r = 0, s = o.length; r < s; r++)
        if (i = o[r].call(n, t, e)) return i;
    }

    function at(e, t, n) {
      var i, o, r = 0,
        s = at.prefilters.length,
        a = w.Deferred().always(function () {
          delete l.elem;
        }),
        l = function () {
          if (o) return !1;
          for (var t = Ze || ot(), n = Math.max(0, c.startTime + c.duration - t), i = 1 - (n / c.duration || 0), r = 0, s = c.tweens.length; r < s; r++) c.tweens[r].run(i);
          return a.notifyWith(e, [c, i, n]), i < 1 && s ? n : (s || a.notifyWith(e, [c, 1, 0]), a.resolveWith(e, [c]), !1);
        },
        c = a.promise({
          elem: e,
          props: w.extend({}, t),
          opts: w.extend(!0, {
            specialEasing: {},
            easing: w.easing._default
          }, n),
          originalProperties: t,
          originalOptions: n,
          startTime: Ze || ot(),
          duration: n.duration,
          tweens: [],
          createTween: function (t, n) {
            var i = w.Tween(e, c.opts, t, n, c.opts.specialEasing[t] || c.opts.easing);
            return c.tweens.push(i), i;
          },
          stop: function (t) {
            var n = 0,
              i = t ? c.tweens.length : 0;
            if (o) return this;
            for (o = !0; n < i; n++) c.tweens[n].run(1);
            return t ? (a.notifyWith(e, [c, 1, 0]), a.resolveWith(e, [c, t])) : a.rejectWith(e, [c, t]), this;
          }
        }),
        u = c.props;
      for (function (e, t) {
        var n, i, o, r, s;
        for (n in e)
          if (o = t[i = w.camelCase(n)], r = e[n], Array.isArray(r) && (o = r[1], r = e[n] = r[0]), n !== i && (e[i] = r, delete e[n]), (s = w.cssHooks[i]) && "expand" in s)
            for (n in r = s.expand(r), delete e[i], r) n in e || (e[n] = r[n], t[n] = o);
          else t[i] = o;
      }(u, c.opts.specialEasing); r < s; r++)
        if (i = at.prefilters[r].call(c, e, u, c.opts)) return w.isFunction(i.stop) && (w._queueHooks(c.elem, c.opts.queue).stop = w.proxy(i.stop, i)), i;
      return w.map(u, st, c), w.isFunction(c.opts.start) && c.opts.start.call(e, c), c.progress(c.opts.progress).done(c.opts.done, c.opts.complete).fail(c.opts.fail).always(c.opts.always), w.fx.timer(w.extend(l, {
        elem: e,
        anim: c,
        queue: c.opts.queue
      })), c;
    }
    w.Animation = w.extend(at, {
      tweeners: {
        "*": [function (e, t) {
          var n = this.createTween(e, t);
          return re(n.elem, e, te.exec(t), n), n;
        }]
      },
      tweener: function (e, t) {
        w.isFunction(e) ? (t = e, e = ["*"]) : e = e.match(H);
        for (var n, i = 0, o = e.length; i < o; i++) n = e[i], at.tweeners[n] = at.tweeners[n] || [], at.tweeners[n].unshift(t);
      },
      prefilters: [function (e, t, n) {
        var i, o, r, s, a, l, c, u, d = "width" in t || "height" in t,
          p = this,
          h = {},
          f = e.style,
          m = e.nodeType && ie(e),
          g = Y.get(e, "fxshow");
        for (i in n.queue || (null == (s = w._queueHooks(e, "fx")).unqueued && (s.unqueued = 0, a = s.empty.fire, s.empty.fire = function () {
          s.unqueued || a();
        }), s.unqueued++, p.always(function () {
          p.always(function () {
            s.unqueued--, w.queue(e, "fx").length || s.empty.fire();
          });
        })), t)
          if (o = t[i], tt.test(o)) {
            if (delete t[i], r = r || "toggle" === o, o === (m ? "hide" : "show")) {
              if ("show" !== o || !g || void 0 === g[i]) continue;
              m = !0;
            }
            h[i] = g && g[i] || w.style(e, i);
          } if ((l = !w.isEmptyObject(t)) || !w.isEmptyObject(h))
          for (i in d && 1 === e.nodeType && (n.overflow = [f.overflow, f.overflowX, f.overflowY], null == (c = g && g.display) && (c = Y.get(e, "display")), "none" === (u = w.css(e, "display")) && (c ? u = c : (le([e], !0), c = e.style.display || c, u = w.css(e, "display"), le([e]))), ("inline" === u || "inline-block" === u && null != c) && "none" === w.css(e, "float") && (l || (p.done(function () {
            f.display = c;
          }), null == c && (u = f.display, c = "none" === u ? "" : u)), f.display = "inline-block")), n.overflow && (f.overflow = "hidden", p.always(function () {
            f.overflow = n.overflow[0], f.overflowX = n.overflow[1], f.overflowY = n.overflow[2];
          })), l = !1, h) l || (g ? "hidden" in g && (m = g.hidden) : g = Y.access(e, "fxshow", {
            display: c
          }), r && (g.hidden = !m), m && le([e], !0), p.done(function () {
            for (i in m || le([e]), Y.remove(e, "fxshow"), h) w.style(e, i, h[i]);
          })), l = st(m ? g[i] : 0, i, p), i in g || (g[i] = l.start, m && (l.end = l.start, l.start = 0));
      }],
      prefilter: function (e, t) {
        t ? at.prefilters.unshift(e) : at.prefilters.push(e);
      }
    }), w.speed = function (e, t, n) {
      var i = e && "object" == typeof e ? w.extend({}, e) : {
        complete: n || !n && t || w.isFunction(e) && e,
        duration: e,
        easing: n && t || t && !w.isFunction(t) && t
      };
      return w.fx.off ? i.duration = 0 : "number" != typeof i.duration && (i.duration in w.fx.speeds ? i.duration = w.fx.speeds[i.duration] : i.duration = w.fx.speeds._default), null != i.queue && !0 !== i.queue || (i.queue = "fx"), i.old = i.complete, i.complete = function () {
        w.isFunction(i.old) && i.old.call(this), i.queue && w.dequeue(this, i.queue);
      }, i;
    }, w.fn.extend({
      fadeTo: function (e, t, n, i) {
        return this.filter(ie).css("opacity", 0).show().end().animate({
          opacity: t
        }, e, n, i);
      },
      animate: function (e, t, n, i) {
        var o = w.isEmptyObject(e),
          r = w.speed(t, n, i),
          s = function () {
            var t = at(this, w.extend({}, e), r);
            (o || Y.get(this, "finish")) && t.stop(!0);
          };
        return s.finish = s, o || !1 === r.queue ? this.each(s) : this.queue(r.queue, s);
      },
      stop: function (e, t, n) {
        var i = function (e) {
          var t = e.stop;
          delete e.stop, t(n);
        };
        return "string" != typeof e && (n = t, t = e, e = void 0), t && !1 !== e && this.queue(e || "fx", []), this.each(function () {
          var t = !0,
            o = null != e && e + "queueHooks",
            r = w.timers,
            s = Y.get(this);
          if (o) s[o] && s[o].stop && i(s[o]);
          else
            for (o in s) s[o] && s[o].stop && nt.test(o) && i(s[o]);
          for (o = r.length; o--;) r[o].elem !== this || null != e && r[o].queue !== e || (r[o].anim.stop(n), t = !1, r.splice(o, 1));
          !t && n || w.dequeue(this, e);
        });
      },
      finish: function (e) {
        return !1 !== e && (e = e || "fx"), this.each(function () {
          var t, n = Y.get(this),
            i = n[e + "queue"],
            o = n[e + "queueHooks"],
            r = w.timers,
            s = i ? i.length : 0;
          for (n.finish = !0, w.queue(this, e, []), o && o.stop && o.stop.call(this, !0), t = r.length; t--;) r[t].elem === this && r[t].queue === e && (r[t].anim.stop(!0), r.splice(t, 1));
          for (t = 0; t < s; t++) i[t] && i[t].finish && i[t].finish.call(this);
          delete n.finish;
        });
      }
    }), w.each(["toggle", "show", "hide"], function (e, t) {
      var n = w.fn[t];
      w.fn[t] = function (e, i, o) {
        return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(rt(t, !0), e, i, o);
      };
    }), w.each({
      slideDown: rt("show"),
      slideUp: rt("hide"),
      slideToggle: rt("toggle"),
      fadeIn: {
        opacity: "show"
      },
      fadeOut: {
        opacity: "hide"
      },
      fadeToggle: {
        opacity: "toggle"
      }
    }, function (e, t) {
      w.fn[e] = function (e, n, i) {
        return this.animate(t, e, n, i);
      };
    }), w.timers = [], w.fx.tick = function () {
      var e, t = 0,
        n = w.timers;
      for (Ze = w.now(); t < n.length; t++)(e = n[t])() || n[t] !== e || n.splice(t--, 1);
      n.length || w.fx.stop(), Ze = void 0;
    }, w.fx.timer = function (e) {
      w.timers.push(e), w.fx.start();
    }, w.fx.interval = 13, w.fx.start = function () {
      et || (et = !0, it());
    }, w.fx.stop = function () {
      et = null;
    }, w.fx.speeds = {
      slow: 600,
      fast: 200,
      _default: 400
    }, w.fn.delay = function (e, t) {
      return e = w.fx && w.fx.speeds[e] || e, t = t || "fx", this.queue(t, function (t, i) {
        var o = n.setTimeout(t, e);
        i.stop = function () {
          n.clearTimeout(o);
        };
      });
    },
      function () {
        var e = s.createElement("input"),
          t = s.createElement("select").appendChild(s.createElement("option"));
        e.type = "checkbox", v.checkOn = "" !== e.value, v.optSelected = t.selected, (e = s.createElement("input")).value = "t", e.type = "radio", v.radioValue = "t" === e.value;
      }();
    var lt, ct = w.expr.attrHandle;
    w.fn.extend({
      attr: function (e, t) {
        return V(this, w.attr, e, t, arguments.length > 1);
      },
      removeAttr: function (e) {
        return this.each(function () {
          w.removeAttr(this, e);
        });
      }
    }), w.extend({
      attr: function (e, t, n) {
        var i, o, r = e.nodeType;
        if (3 !== r && 8 !== r && 2 !== r) return void 0 === e.getAttribute ? w.prop(e, t, n) : (1 === r && w.isXMLDoc(e) || (o = w.attrHooks[t.toLowerCase()] || (w.expr.match.bool.test(t) ? lt : void 0)), void 0 !== n ? null === n ? void w.removeAttr(e, t) : o && "set" in o && void 0 !== (i = o.set(e, n, t)) ? i : (e.setAttribute(t, n + ""), n) : o && "get" in o && null !== (i = o.get(e, t)) ? i : null == (i = w.find.attr(e, t)) ? void 0 : i);
      },
      attrHooks: {
        type: {
          set: function (e, t) {
            if (!v.radioValue && "radio" === t && I(e, "input")) {
              var n = e.value;
              return e.setAttribute("type", t), n && (e.value = n), t;
            }
          }
        }
      },
      removeAttr: function (e, t) {
        var n, i = 0,
          o = t && t.match(H);
        if (o && 1 === e.nodeType)
          for (; n = o[i++];) e.removeAttribute(n);
      }
    }), lt = {
      set: function (e, t, n) {
        return !1 === t ? w.removeAttr(e, n) : e.setAttribute(n, n), n;
      }
    }, w.each(w.expr.match.bool.source.match(/\w+/g), function (e, t) {
      var n = ct[t] || w.find.attr;
      ct[t] = function (e, t, i) {
        var o, r, s = t.toLowerCase();
        return i || (r = ct[s], ct[s] = o, o = null != n(e, t, i) ? s : null, ct[s] = r), o;
      };
    });
    var ut = /^(?:input|select|textarea|button)$/i,
      dt = /^(?:a|area)$/i;

    function pt(e) {
      return (e.match(H) || []).join(" ");
    }

    function ht(e) {
      return e.getAttribute && e.getAttribute("class") || "";
    }
    w.fn.extend({
      prop: function (e, t) {
        return V(this, w.prop, e, t, arguments.length > 1);
      },
      removeProp: function (e) {
        return this.each(function () {
          delete this[w.propFix[e] || e];
        });
      }
    }), w.extend({
      prop: function (e, t, n) {
        var i, o, r = e.nodeType;
        if (3 !== r && 8 !== r && 2 !== r) return 1 === r && w.isXMLDoc(e) || (t = w.propFix[t] || t, o = w.propHooks[t]), void 0 !== n ? o && "set" in o && void 0 !== (i = o.set(e, n, t)) ? i : e[t] = n : o && "get" in o && null !== (i = o.get(e, t)) ? i : e[t];
      },
      propHooks: {
        tabIndex: {
          get: function (e) {
            var t = w.find.attr(e, "tabindex");
            return t ? parseInt(t, 10) : ut.test(e.nodeName) || dt.test(e.nodeName) && e.href ? 0 : -1;
          }
        }
      },
      propFix: {
        for: "htmlFor",
        class: "className"
      }
    }), v.optSelected || (w.propHooks.selected = {
      get: function (e) {
        var t = e.parentNode;
        return t && t.parentNode && t.parentNode.selectedIndex, null;
      },
      set: function (e) {
        var t = e.parentNode;
        t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex);
      }
    }), w.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
      w.propFix[this.toLowerCase()] = this;
    }), w.fn.extend({
      addClass: function (e) {
        var t, n, i, o, r, s, a, l = 0;
        if (w.isFunction(e)) return this.each(function (t) {
          w(this).addClass(e.call(this, t, ht(this)));
        });
        if ("string" == typeof e && e)
          for (t = e.match(H) || []; n = this[l++];)
            if (o = ht(n), i = 1 === n.nodeType && " " + pt(o) + " ") {
              for (s = 0; r = t[s++];) i.indexOf(" " + r + " ") < 0 && (i += r + " ");
              o !== (a = pt(i)) && n.setAttribute("class", a);
            } return this;
      },
      removeClass: function (e) {
        var t, n, i, o, r, s, a, l = 0;
        if (w.isFunction(e)) return this.each(function (t) {
          w(this).removeClass(e.call(this, t, ht(this)));
        });
        if (!arguments.length) return this.attr("class", "");
        if ("string" == typeof e && e)
          for (t = e.match(H) || []; n = this[l++];)
            if (o = ht(n), i = 1 === n.nodeType && " " + pt(o) + " ") {
              for (s = 0; r = t[s++];)
                for (; i.indexOf(" " + r + " ") > -1;) i = i.replace(" " + r + " ", " ");
              o !== (a = pt(i)) && n.setAttribute("class", a);
            } return this;
      },
      toggleClass: function (e, t) {
        var n = typeof e;
        return "boolean" == typeof t && "string" === n ? t ? this.addClass(e) : this.removeClass(e) : w.isFunction(e) ? this.each(function (n) {
          w(this).toggleClass(e.call(this, n, ht(this), t), t);
        }) : this.each(function () {
          var t, i, o, r;
          if ("string" === n)
            for (i = 0, o = w(this), r = e.match(H) || []; t = r[i++];) o.hasClass(t) ? o.removeClass(t) : o.addClass(t);
          else void 0 !== e && "boolean" !== n || ((t = ht(this)) && Y.set(this, "__className__", t), this.setAttribute && this.setAttribute("class", t || !1 === e ? "" : Y.get(this, "__className__") || ""));
        });
      },
      hasClass: function (e) {
        var t, n, i = 0;
        for (t = " " + e + " "; n = this[i++];)
          if (1 === n.nodeType && (" " + pt(ht(n)) + " ").indexOf(t) > -1) return !0;
        return !1;
      }
    });
    var ft = /\r/g;
    w.fn.extend({
      val: function (e) {
        var t, n, i, o = this[0];
        return arguments.length ? (i = w.isFunction(e), this.each(function (n) {
          var o;
          1 === this.nodeType && (null == (o = i ? e.call(this, n, w(this).val()) : e) ? o = "" : "number" == typeof o ? o += "" : Array.isArray(o) && (o = w.map(o, function (e) {
            return null == e ? "" : e + "";
          })), (t = w.valHooks[this.type] || w.valHooks[this.nodeName.toLowerCase()]) && "set" in t && void 0 !== t.set(this, o, "value") || (this.value = o));
        })) : o ? (t = w.valHooks[o.type] || w.valHooks[o.nodeName.toLowerCase()]) && "get" in t && void 0 !== (n = t.get(o, "value")) ? n : "string" == typeof (n = o.value) ? n.replace(ft, "") : null == n ? "" : n : void 0;
      }
    }), w.extend({
      valHooks: {
        option: {
          get: function (e) {
            var t = w.find.attr(e, "value");
            return null != t ? t : pt(w.text(e));
          }
        },
        select: {
          get: function (e) {
            var t, n, i, o = e.options,
              r = e.selectedIndex,
              s = "select-one" === e.type,
              a = s ? null : [],
              l = s ? r + 1 : o.length;
            for (i = r < 0 ? l : s ? r : 0; i < l; i++)
              if (((n = o[i]).selected || i === r) && !n.disabled && (!n.parentNode.disabled || !I(n.parentNode, "optgroup"))) {
                if (t = w(n).val(), s) return t;
                a.push(t);
              } return a;
          },
          set: function (e, t) {
            for (var n, i, o = e.options, r = w.makeArray(t), s = o.length; s--;)((i = o[s]).selected = w.inArray(w.valHooks.option.get(i), r) > -1) && (n = !0);
            return n || (e.selectedIndex = -1), r;
          }
        }
      }
    }), w.each(["radio", "checkbox"], function () {
      w.valHooks[this] = {
        set: function (e, t) {
          if (Array.isArray(t)) return e.checked = w.inArray(w(e).val(), t) > -1;
        }
      }, v.checkOn || (w.valHooks[this].get = function (e) {
        return null === e.getAttribute("value") ? "on" : e.value;
      });
    });
    var mt = /^(?:focusinfocus|focusoutblur)$/;
    w.extend(w.event, {
      trigger: function (e, t, i, o) {
        var r, a, l, c, u, d, p, h = [i || s],
          m = f.call(e, "type") ? e.type : e,
          g = f.call(e, "namespace") ? e.namespace.split(".") : [];
        if (a = l = i = i || s, 3 !== i.nodeType && 8 !== i.nodeType && !mt.test(m + w.event.triggered) && (m.indexOf(".") > -1 && (m = (g = m.split(".")).shift(), g.sort()), u = m.indexOf(":") < 0 && "on" + m, (e = e[w.expando] ? e : new w.Event(m, "object" == typeof e && e)).isTrigger = o ? 2 : 3, e.namespace = g.join("."), e.rnamespace = e.namespace ? new RegExp("(^|\\.)" + g.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, e.result = void 0, e.target || (e.target = i), t = null == t ? [e] : w.makeArray(t, [e]), p = w.event.special[m] || {}, o || !p.trigger || !1 !== p.trigger.apply(i, t))) {
          if (!o && !p.noBubble && !w.isWindow(i)) {
            for (c = p.delegateType || m, mt.test(c + m) || (a = a.parentNode); a; a = a.parentNode) h.push(a), l = a;
            l === (i.ownerDocument || s) && h.push(l.defaultView || l.parentWindow || n);
          }
          for (r = 0;
            (a = h[r++]) && !e.isPropagationStopped();) e.type = r > 1 ? c : p.bindType || m, (d = (Y.get(a, "events") || {})[e.type] && Y.get(a, "handle")) && d.apply(a, t), (d = u && a[u]) && d.apply && G(a) && (e.result = d.apply(a, t), !1 === e.result && e.preventDefault());
          return e.type = m, o || e.isDefaultPrevented() || p._default && !1 !== p._default.apply(h.pop(), t) || !G(i) || u && w.isFunction(i[m]) && !w.isWindow(i) && ((l = i[u]) && (i[u] = null), w.event.triggered = m, i[m](), w.event.triggered = void 0, l && (i[u] = l)), e.result;
        }
      },
      simulate: function (e, t, n) {
        var i = w.extend(new w.Event, n, {
          type: e,
          isSimulated: !0
        });
        w.event.trigger(i, null, t);
      }
    }), w.fn.extend({
      trigger: function (e, t) {
        return this.each(function () {
          w.event.trigger(e, t, this);
        });
      },
      triggerHandler: function (e, t) {
        var n = this[0];
        if (n) return w.event.trigger(e, t, n, !0);
      }
    }), w.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function (e, t) {
      w.fn[t] = function (e, n) {
        return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t);
      };
    }), w.fn.extend({
      hover: function (e, t) {
        return this.mouseenter(e).mouseleave(t || e);
      }
    }), v.focusin = "onfocusin" in n, v.focusin || w.each({
      focus: "focusin",
      blur: "focusout"
    }, function (e, t) {
      var n = function (e) {
        w.event.simulate(t, e.target, w.event.fix(e));
      };
      w.event.special[t] = {
        setup: function () {
          var i = this.ownerDocument || this,
            o = Y.access(i, t);
          o || i.addEventListener(e, n, !0), Y.access(i, t, (o || 0) + 1);
        },
        teardown: function () {
          var i = this.ownerDocument || this,
            o = Y.access(i, t) - 1;
          o ? Y.access(i, t, o) : (i.removeEventListener(e, n, !0), Y.remove(i, t));
        }
      };
    });
    var gt = n.location,
      vt = w.now(),
      bt = /\?/;
    w.parseXML = function (e) {
      var t;
      if (!e || "string" != typeof e) return null;
      try {
        t = (new n.DOMParser).parseFromString(e, "text/xml");
      } catch (e) {
        t = void 0;
      }
      return t && !t.getElementsByTagName("parsererror").length || w.error("Invalid XML: " + e), t;
    };
    var yt = /\[\]$/,
      wt = /\r?\n/g,
      Ct = /^(?:submit|button|image|reset|file)$/i,
      xt = /^(?:input|select|textarea|keygen)/i;

    function _t(e, t, n, i) {
      var o;
      if (Array.isArray(t)) w.each(t, function (t, o) {
        n || yt.test(e) ? i(e, o) : _t(e + "[" + ("object" == typeof o && null != o ? t : "") + "]", o, n, i);
      });
      else if (n || "object" !== w.type(t)) i(e, t);
      else
        for (o in t) _t(e + "[" + o + "]", t[o], n, i);
    }
    w.param = function (e, t) {
      var n, i = [],
        o = function (e, t) {
          var n = w.isFunction(t) ? t() : t;
          i[i.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n);
        };
      if (Array.isArray(e) || e.jquery && !w.isPlainObject(e)) w.each(e, function () {
        o(this.name, this.value);
      });
      else
        for (n in e) _t(n, e[n], t, o);
      return i.join("&");
    }, w.fn.extend({
      serialize: function () {
        return w.param(this.serializeArray());
      },
      serializeArray: function () {
        return this.map(function () {
          var e = w.prop(this, "elements");
          return e ? w.makeArray(e) : this;
        }).filter(function () {
          var e = this.type;
          return this.name && !w(this).is(":disabled") && xt.test(this.nodeName) && !Ct.test(e) && (this.checked || !ce.test(e));
        }).map(function (e, t) {
          var n = w(this).val();
          return null == n ? null : Array.isArray(n) ? w.map(n, function (e) {
            return {
              name: t.name,
              value: e.replace(wt, "\r\n")
            };
          }) : {
            name: t.name,
            value: n.replace(wt, "\r\n")
          };
        }).get();
      }
    });
    var $t = /%20/g,
      kt = /#.*$/,
      Tt = /([?&])_=[^&]*/,
      Et = /^(.*?):[ \t]*([^\r\n]*)$/gm,
      St = /^(?:GET|HEAD)$/,
      Dt = /^\/\//,
      It = {},
      At = {},
      Ot = "*/".concat("*"),
      Nt = s.createElement("a");

    function Pt(e) {
      return function (t, n) {
        "string" != typeof t && (n = t, t = "*");
        var i, o = 0,
          r = t.toLowerCase().match(H) || [];
        if (w.isFunction(n))
          for (; i = r[o++];) "+" === i[0] ? (i = i.slice(1) || "*", (e[i] = e[i] || []).unshift(n)) : (e[i] = e[i] || []).push(n);
      };
    }

    function jt(e, t, n, i) {
      var o = {},
        r = e === At;

      function s(a) {
        var l;
        return o[a] = !0, w.each(e[a] || [], function (e, a) {
          var c = a(t, n, i);
          return "string" != typeof c || r || o[c] ? r ? !(l = c) : void 0 : (t.dataTypes.unshift(c), s(c), !1);
        }), l;
      }
      return s(t.dataTypes[0]) || !o["*"] && s("*");
    }

    function Lt(e, t) {
      var n, i, o = w.ajaxSettings.flatOptions || {};
      for (n in t) void 0 !== t[n] && ((o[n] ? e : i || (i = {}))[n] = t[n]);
      return i && w.extend(!0, e, i), e;
    }
    Nt.href = gt.href, w.extend({
      active: 0,
      lastModified: {},
      etag: {},
      ajaxSettings: {
        url: gt.href,
        type: "GET",
        isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(gt.protocol),
        global: !0,
        processData: !0,
        async: !0,
        contentType: "application/x-www-form-urlencoded; charset=UTF-8",
        accepts: {
          "*": Ot,
          text: "text/plain",
          html: "text/html",
          xml: "application/xml, text/xml",
          json: "application/json, text/javascript"
        },
        contents: {
          xml: /\bxml\b/,
          html: /\bhtml/,
          json: /\bjson\b/
        },
        responseFields: {
          xml: "responseXML",
          text: "responseText",
          json: "responseJSON"
        },
        converters: {
          "* text": String,
          "text html": !0,
          "text json": JSON.parse,
          "text xml": w.parseXML
        },
        flatOptions: {
          url: !0,
          context: !0
        }
      },
      ajaxSetup: function (e, t) {
        return t ? Lt(Lt(e, w.ajaxSettings), t) : Lt(w.ajaxSettings, e);
      },
      ajaxPrefilter: Pt(It),
      ajaxTransport: Pt(At),
      ajax: function (e, t) {
        "object" == typeof e && (t = e, e = void 0), t = t || {};
        var i, o, r, a, l, c, u, d, p, h, f = w.ajaxSetup({}, t),
          m = f.context || f,
          g = f.context && (m.nodeType || m.jquery) ? w(m) : w.event,
          v = w.Deferred(),
          b = w.Callbacks("once memory"),
          y = f.statusCode || {},
          C = {},
          x = {},
          _ = "canceled",
          $ = {
            readyState: 0,
            getResponseHeader: function (e) {
              var t;
              if (u) {
                if (!a)
                  for (a = {}; t = Et.exec(r);) a[t[1].toLowerCase()] = t[2];
                t = a[e.toLowerCase()];
              }
              return null == t ? null : t;
            },
            getAllResponseHeaders: function () {
              return u ? r : null;
            },
            setRequestHeader: function (e, t) {
              return null == u && (e = x[e.toLowerCase()] = x[e.toLowerCase()] || e, C[e] = t), this;
            },
            overrideMimeType: function (e) {
              return null == u && (f.mimeType = e), this;
            },
            statusCode: function (e) {
              var t;
              if (e)
                if (u) $.always(e[$.status]);
                else
                  for (t in e) y[t] = [y[t], e[t]];
              return this;
            },
            abort: function (e) {
              var t = e || _;
              return i && i.abort(t), k(0, t), this;
            }
          };
        if (v.promise($), f.url = ((e || f.url || gt.href) + "").replace(Dt, gt.protocol + "//"), f.type = t.method || t.type || f.method || f.type, f.dataTypes = (f.dataType || "*").toLowerCase().match(H) || [""], null == f.crossDomain) {
          c = s.createElement("a");
          try {
            c.href = f.url, c.href = c.href, f.crossDomain = Nt.protocol + "//" + Nt.host != c.protocol + "//" + c.host;
          } catch (e) {
            f.crossDomain = !0;
          }
        }
        if (f.data && f.processData && "string" != typeof f.data && (f.data = w.param(f.data, f.traditional)), jt(It, f, t, $), u) return $;
        for (p in (d = w.event && f.global) && 0 == w.active++ && w.event.trigger("ajaxStart"), f.type = f.type.toUpperCase(), f.hasContent = !St.test(f.type), o = f.url.replace(kt, ""), f.hasContent ? f.data && f.processData && 0 === (f.contentType || "").indexOf("application/x-www-form-urlencoded") && (f.data = f.data.replace($t, "+")) : (h = f.url.slice(o.length), f.data && (o += (bt.test(o) ? "&" : "?") + f.data, delete f.data), !1 === f.cache && (o = o.replace(Tt, "$1"), h = (bt.test(o) ? "&" : "?") + "_=" + vt++ + h), f.url = o + h), f.ifModified && (w.lastModified[o] && $.setRequestHeader("If-Modified-Since", w.lastModified[o]), w.etag[o] && $.setRequestHeader("If-None-Match", w.etag[o])), (f.data && f.hasContent && !1 !== f.contentType || t.contentType) && $.setRequestHeader("Content-Type", f.contentType), $.setRequestHeader("Accept", f.dataTypes[0] && f.accepts[f.dataTypes[0]] ? f.accepts[f.dataTypes[0]] + ("*" !== f.dataTypes[0] ? ", " + Ot + "; q=0.01" : "") : f.accepts["*"]), f.headers) $.setRequestHeader(p, f.headers[p]);
        if (f.beforeSend && (!1 === f.beforeSend.call(m, $, f) || u)) return $.abort();
        if (_ = "abort", b.add(f.complete), $.done(f.success), $.fail(f.error), i = jt(At, f, t, $)) {
          if ($.readyState = 1, d && g.trigger("ajaxSend", [$, f]), u) return $;
          f.async && f.timeout > 0 && (l = n.setTimeout(function () {
            $.abort("timeout");
          }, f.timeout));
          try {
            u = !1, i.send(C, k);
          } catch (e) {
            if (u) throw e;
            k(-1, e);
          }
        } else k(-1, "No Transport");

        function k(e, t, s, a) {
          var c, p, h, C, x, _ = t;
          u || (u = !0, l && n.clearTimeout(l), i = void 0, r = a || "", $.readyState = e > 0 ? 4 : 0, c = e >= 200 && e < 300 || 304 === e, s && (C = function (e, t, n) {
            for (var i, o, r, s, a = e.contents, l = e.dataTypes;
              "*" === l[0];) l.shift(), void 0 === i && (i = e.mimeType || t.getResponseHeader("Content-Type"));
            if (i)
              for (o in a)
                if (a[o] && a[o].test(i)) {
                  l.unshift(o);
                  break;
                } if (l[0] in n) r = l[0];
            else {
              for (o in n) {
                if (!l[0] || e.converters[o + " " + l[0]]) {
                  r = o;
                  break;
                }
                s || (s = o);
              }
              r = r || s;
            }
            if (r) return r !== l[0] && l.unshift(r), n[r];
          }(f, $, s)), C = function (e, t, n, i) {
            var o, r, s, a, l, c = {},
              u = e.dataTypes.slice();
            if (u[1])
              for (s in e.converters) c[s.toLowerCase()] = e.converters[s];
            for (r = u.shift(); r;)
              if (e.responseFields[r] && (n[e.responseFields[r]] = t), !l && i && e.dataFilter && (t = e.dataFilter(t, e.dataType)), l = r, r = u.shift())
                if ("*" === r) r = l;
                else if ("*" !== l && l !== r) {
                  if (!(s = c[l + " " + r] || c["* " + r]))
                    for (o in c)
                      if ((a = o.split(" "))[1] === r && (s = c[l + " " + a[0]] || c["* " + a[0]])) {
                        !0 === s ? s = c[o] : !0 !== c[o] && (r = a[0], u.unshift(a[1]));
                        break;
                      } if (!0 !== s)
                    if (s && e.throws) t = s(t);
                    else try {
                      t = s(t);
                    } catch (e) {
                      return {
                        state: "parsererror",
                        error: s ? e : "No conversion from " + l + " to " + r
                      };
                    }
                }
            return {
              state: "success",
              data: t
            };
          }(f, C, $, c), c ? (f.ifModified && ((x = $.getResponseHeader("Last-Modified")) && (w.lastModified[o] = x), (x = $.getResponseHeader("etag")) && (w.etag[o] = x)), 204 === e || "HEAD" === f.type ? _ = "nocontent" : 304 === e ? _ = "notmodified" : (_ = C.state, p = C.data, c = !(h = C.error))) : (h = _, !e && _ || (_ = "error", e < 0 && (e = 0))), $.status = e, $.statusText = (t || _) + "", c ? v.resolveWith(m, [p, _, $]) : v.rejectWith(m, [$, _, h]), $.statusCode(y), y = void 0, d && g.trigger(c ? "ajaxSuccess" : "ajaxError", [$, f, c ? p : h]), b.fireWith(m, [$, _]), d && (g.trigger("ajaxComplete", [$, f]), --w.active || w.event.trigger("ajaxStop")));
        }
        return $;
      },
      getJSON: function (e, t, n) {
        return w.get(e, t, n, "json");
      },
      getScript: function (e, t) {
        return w.get(e, void 0, t, "script");
      }
    }), w.each(["get", "post"], function (e, t) {
      w[t] = function (e, n, i, o) {
        return w.isFunction(n) && (o = o || i, i = n, n = void 0), w.ajax(w.extend({
          url: e,
          type: t,
          dataType: o,
          data: n,
          success: i
        }, w.isPlainObject(e) && e));
      };
    }), w._evalUrl = function (e) {
      return w.ajax({
        url: e,
        type: "GET",
        dataType: "script",
        cache: !0,
        async: !1,
        global: !1,
        throws: !0
      });
    }, w.fn.extend({
      wrapAll: function (e) {
        var t;
        return this[0] && (w.isFunction(e) && (e = e.call(this[0])), t = w(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map(function () {
          for (var e = this; e.firstElementChild;) e = e.firstElementChild;
          return e;
        }).append(this)), this;
      },
      wrapInner: function (e) {
        return w.isFunction(e) ? this.each(function (t) {
          w(this).wrapInner(e.call(this, t));
        }) : this.each(function () {
          var t = w(this),
            n = t.contents();
          n.length ? n.wrapAll(e) : t.append(e);
        });
      },
      wrap: function (e) {
        var t = w.isFunction(e);
        return this.each(function (n) {
          w(this).wrapAll(t ? e.call(this, n) : e);
        });
      },
      unwrap: function (e) {
        return this.parent(e).not("body").each(function () {
          w(this).replaceWith(this.childNodes);
        }), this;
      }
    }), w.expr.pseudos.hidden = function (e) {
      return !w.expr.pseudos.visible(e);
    }, w.expr.pseudos.visible = function (e) {
      return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length);
    }, w.ajaxSettings.xhr = function () {
      try {
        return new n.XMLHttpRequest;
      } catch (e) { }
    };
    var Mt = {
      0: 200,
      1223: 204
    },
      Rt = w.ajaxSettings.xhr();
    v.cors = !!Rt && "withCredentials" in Rt, v.ajax = Rt = !!Rt, w.ajaxTransport(function (e) {
      var t, i;
      if (v.cors || Rt && !e.crossDomain) return {
        send: function (o, r) {
          var s, a = e.xhr();
          if (a.open(e.type, e.url, e.async, e.username, e.password), e.xhrFields)
            for (s in e.xhrFields) a[s] = e.xhrFields[s];
          for (s in e.mimeType && a.overrideMimeType && a.overrideMimeType(e.mimeType), e.crossDomain || o["X-Requested-With"] || (o["X-Requested-With"] = "XMLHttpRequest"), o) a.setRequestHeader(s, o[s]);
          t = function (e) {
            return function () {
              t && (t = i = a.onload = a.onerror = a.onabort = a.onreadystatechange = null, "abort" === e ? a.abort() : "error" === e ? "number" != typeof a.status ? r(0, "error") : r(a.status, a.statusText) : r(Mt[a.status] || a.status, a.statusText, "text" !== (a.responseType || "text") || "string" != typeof a.responseText ? {
                binary: a.response
              } : {
                text: a.responseText
              }, a.getAllResponseHeaders()));
            };
          }, a.onload = t(), i = a.onerror = t("error"), void 0 !== a.onabort ? a.onabort = i : a.onreadystatechange = function () {
            4 === a.readyState && n.setTimeout(function () {
              t && i();
            });
          }, t = t("abort");
          try {
            a.send(e.hasContent && e.data || null);
          } catch (e) {
            if (t) throw e;
          }
        },
        abort: function () {
          t && t();
        }
      };
    }), w.ajaxPrefilter(function (e) {
      e.crossDomain && (e.contents.script = !1);
    }), w.ajaxSetup({
      accepts: {
        script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
      },
      contents: {
        script: /\b(?:java|ecma)script\b/
      },
      converters: {
        "text script": function (e) {
          return w.globalEval(e), e;
        }
      }
    }), w.ajaxPrefilter("script", function (e) {
      void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET");
    }), w.ajaxTransport("script", function (e) {
      var t, n;
      if (e.crossDomain) return {
        send: function (i, o) {
          t = w("<script>").prop({
            charset: e.scriptCharset,
            src: e.url
          }).on("load error", n = function (e) {
            t.remove(), n = null, e && o("error" === e.type ? 404 : 200, e.type);
          }), s.head.appendChild(t[0]);
        },
        abort: function () {
          n && n();
        }
      };
    });
    var Ht = [],
      Wt = /(=)\?(?=&|$)|\?\?/;
    w.ajaxSetup({
      jsonp: "callback",
      jsonpCallback: function () {
        var e = Ht.pop() || w.expando + "_" + vt++;
        return this[e] = !0, e;
      }
    }), w.ajaxPrefilter("json jsonp", function (e, t, i) {
      var o, r, s, a = !1 !== e.jsonp && (Wt.test(e.url) ? "url" : "string" == typeof e.data && 0 === (e.contentType || "").indexOf("application/x-www-form-urlencoded") && Wt.test(e.data) && "data");
      if (a || "jsonp" === e.dataTypes[0]) return o = e.jsonpCallback = w.isFunction(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback, a ? e[a] = e[a].replace(Wt, "$1" + o) : !1 !== e.jsonp && (e.url += (bt.test(e.url) ? "&" : "?") + e.jsonp + "=" + o), e.converters["script json"] = function () {
        return s || w.error(o + " was not called"), s[0];
      }, e.dataTypes[0] = "json", r = n[o], n[o] = function () {
        s = arguments;
      }, i.always(function () {
        void 0 === r ? w(n).removeProp(o) : n[o] = r, e[o] && (e.jsonpCallback = t.jsonpCallback, Ht.push(o)), s && w.isFunction(r) && r(s[0]), s = r = void 0;
      }), "script";
    }), v.createHTMLDocument = function () {
      var e = s.implementation.createHTMLDocument("").body;
      return e.innerHTML = "<form></form><form></form>", 2 === e.childNodes.length;
    }(), w.parseHTML = function (e, t, n) {
      return "string" != typeof e ? [] : ("boolean" == typeof t && (n = t, t = !1), t || (v.createHTMLDocument ? ((i = (t = s.implementation.createHTMLDocument("")).createElement("base")).href = s.location.href, t.head.appendChild(i)) : t = s), o = A.exec(e), r = !n && [], o ? [t.createElement(o[1])] : (o = ge([e], t, r), r && r.length && w(r).remove(), w.merge([], o.childNodes)));
      var i, o, r;
    }, w.fn.load = function (e, t, n) {
      var i, o, r, s = this,
        a = e.indexOf(" ");
      return a > -1 && (i = pt(e.slice(a)), e = e.slice(0, a)), w.isFunction(t) ? (n = t, t = void 0) : t && "object" == typeof t && (o = "POST"), s.length > 0 && w.ajax({
        url: e,
        type: o || "GET",
        dataType: "html",
        data: t
      }).done(function (e) {
        r = arguments, s.html(i ? w("<div>").append(w.parseHTML(e)).find(i) : e);
      }).always(n && function (e, t) {
        s.each(function () {
          n.apply(this, r || [e.responseText, t, e]);
        });
      }), this;
    }, w.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (e, t) {
      w.fn[t] = function (e) {
        return this.on(t, e);
      };
    }), w.expr.pseudos.animated = function (e) {
      return w.grep(w.timers, function (t) {
        return e === t.elem;
      }).length;
    }, w.offset = {
      setOffset: function (e, t, n) {
        var i, o, r, s, a, l, c = w.css(e, "position"),
          u = w(e),
          d = {};
        "static" === c && (e.style.position = "relative"), a = u.offset(), r = w.css(e, "top"), l = w.css(e, "left"), ("absolute" === c || "fixed" === c) && (r + l).indexOf("auto") > -1 ? (s = (i = u.position()).top, o = i.left) : (s = parseFloat(r) || 0, o = parseFloat(l) || 0), w.isFunction(t) && (t = t.call(e, n, w.extend({}, a))), null != t.top && (d.top = t.top - a.top + s), null != t.left && (d.left = t.left - a.left + o), "using" in t ? t.using.call(e, d) : u.css(d);
      }
    }, w.fn.extend({
      offset: function (e) {
        if (arguments.length) return void 0 === e ? this : this.each(function (t) {
          w.offset.setOffset(this, e, t);
        });
        var t, n, i, o, r = this[0];
        return r ? r.getClientRects().length ? (i = r.getBoundingClientRect(), n = (t = r.ownerDocument).documentElement, o = t.defaultView, {
          top: i.top + o.pageYOffset - n.clientTop,
          left: i.left + o.pageXOffset - n.clientLeft
        }) : {
          top: 0,
          left: 0
        } : void 0;
      },
      position: function () {
        if (this[0]) {
          var e, t, n = this[0],
            i = {
              top: 0,
              left: 0
            };
          return "fixed" === w.css(n, "position") ? t = n.getBoundingClientRect() : (e = this.offsetParent(), t = this.offset(), I(e[0], "html") || (i = e.offset()), i = {
            top: i.top + w.css(e[0], "borderTopWidth", !0),
            left: i.left + w.css(e[0], "borderLeftWidth", !0)
          }), {
            top: t.top - i.top - w.css(n, "marginTop", !0),
            left: t.left - i.left - w.css(n, "marginLeft", !0)
          };
        }
      },
      offsetParent: function () {
        return this.map(function () {
          for (var e = this.offsetParent; e && "static" === w.css(e, "position");) e = e.offsetParent;
          return e || ve;
        });
      }
    }), w.each({
      scrollLeft: "pageXOffset",
      scrollTop: "pageYOffset"
    }, function (e, t) {
      var n = "pageYOffset" === t;
      w.fn[e] = function (i) {
        return V(this, function (e, i, o) {
          var r;
          return w.isWindow(e) ? r = e : 9 === e.nodeType && (r = e.defaultView), void 0 === o ? r ? r[t] : e[i] : void (r ? r.scrollTo(n ? r.pageXOffset : o, n ? o : r.pageYOffset) : e[i] = o);
        }, e, i, arguments.length);
      };
    }), w.each(["top", "left"], function (e, t) {
      w.cssHooks[t] = Fe(v.pixelPosition, function (e, n) {
        if (n) return n = We(e, t), Re.test(n) ? w(e).position()[t] + "px" : n;
      });
    }), w.each({
      Height: "height",
      Width: "width"
    }, function (e, t) {
      w.each({
        padding: "inner" + e,
        content: t,
        "": "outer" + e
      }, function (n, i) {
        w.fn[i] = function (o, r) {
          var s = arguments.length && (n || "boolean" != typeof o),
            a = n || (!0 === o || !0 === r ? "margin" : "border");
          return V(this, function (t, n, o) {
            var r;
            return w.isWindow(t) ? 0 === i.indexOf("outer") ? t["inner" + e] : t.document.documentElement["client" + e] : 9 === t.nodeType ? (r = t.documentElement, Math.max(t.body["scroll" + e], r["scroll" + e], t.body["offset" + e], r["offset" + e], r["client" + e])) : void 0 === o ? w.css(t, n, a) : w.style(t, n, o, a);
          }, t, s ? o : void 0, s);
        };
      });
    }), w.fn.extend({
      bind: function (e, t, n) {
        return this.on(e, null, t, n);
      },
      unbind: function (e, t) {
        return this.off(e, null, t);
      },
      delegate: function (e, t, n, i) {
        return this.on(t, e, n, i);
      },
      undelegate: function (e, t, n) {
        return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n);
      }
    }), w.holdReady = function (e) {
      e ? w.readyWait++ : w.ready(!0);
    }, w.isArray = Array.isArray, w.parseJSON = JSON.parse, w.nodeName = I, void 0 === (i = function () {
      return w;
    }.apply(t, [])) || (e.exports = i);
    var Ft = n.jQuery,
      qt = n.$;
    return w.noConflict = function (e) {
      return n.$ === w && (n.$ = qt), e && n.jQuery === w && (n.jQuery = Ft), w;
    }, o || (n.jQuery = n.$ = w), w;
  });
}, function (e, t, n) {
  "use strict";
  var i = n(4),
    o = n.n(i),
    r = {
      paypalClick: function (e) {
        e.preventDefault();
        var t = $(e.target).parents("form");
        $("#paypal-button").prop("disabled", !0), $("#stripe-button").prop("disabled", !0), $("#coinbase-button").prop("disabled", !0), o.a.create(t.find("button#paypal-button").get(0)).start();
        var n = t.serializeArray();
        n.find(e => "payment_method" === e.name).value = "paypal", $.ajax({
          type: "POST",
          url: t.attr("action"),
          data: $.param(n)
        }).done(function (e) {
          window.location = e;
        }).fail(function () {
          window.location.reload(!0);
        });
      },
      stripeClick: function (e) {
        e.preventDefault();
        var t = $(e.target).parents("form");
        $("#paypal-button").prop("disabled", !0), $("#stripe-button").prop("disabled", !0), $("#coinbase-button").prop("disabled", !0), o.a.create(t.find("button#stripe-button").get(0)).start();
        var n = setInterval(function () {
          if (void 0 !== Stripe) {
            clearInterval(n);
            var e = t.serializeArray();
            e.find(e => "payment_method" === e.name).value = "stripe";
            var i = $('meta[name="stripe-public-key"]').attr("content"),
              o = Stripe(i);
            $.ajax({
              type: "POST",
              url: t.attr("action"),
              data: $.param(e)
            }).done(function (e) {
              o.redirectToCheckout({
                sessionId: e
              });
            }).fail(function () {
              window.location.reload(!0);
            });
          }
        }, 10);
      },
      coinbaseClick: function (e) {
        e.preventDefault();
        var t = $(e.target).parents("form");
        $("#paypal-button").prop("disabled", !0), $("#stripe-button").prop("disabled", !0), $("#coinbase-button").prop("disabled", !0), o.a.create(t.find("button#coinbase-button").get(0)).start();
        var n = t.serializeArray();
        n.find(e => "payment_method" === e.name).value = "coinbase", $.ajax({
          type: "POST",
          url: t.attr("action"),
          data: $.param(n)
        }).done(function (e) {
          window.location = e;
        }).fail(function () {
          window.location.reload(!0);
        });
      }
    };
  if (t.a = r, $("button#paypal-button").click(r.paypalClick), $("button#stripe-button").click(r.stripeClick), $("button#coinbase-button").click(r.coinbaseClick), $("#order-redirect-countdown").length) {
    var s = $("#order-redirect-countdown");
    var a = setInterval(function () {
      s.text(parseInt(s.text()) - 1), parseInt(s.text()) <= 0 && (clearInterval(a), location.href = $("#order-redirect-countdown-link").attr("href"));
    }, 1e3);
  }
}, function (e, t, n) {
  var i, o, r;
  o = [], void 0 === (r = "function" == typeof (i = function () {
    "use strict";
    var e = ["decimals", "thousand", "mark", "prefix", "suffix", "encoder", "decoder", "negativeBefore", "negative", "edit", "undo"];

    function t(e) {
      return e.split("").reverse().join("");
    }

    function n(e, t) {
      return e.substring(0, t.length) === t;
    }

    function i(e, t, n) {
      if ((e[t] || e[n]) && e[t] === e[n]) throw new Error(t);
    }

    function o(e) {
      return "number" == typeof e && isFinite(e);
    }

    function r(e, n, i, r, s, a, l, c, u, d, p, h) {
      var f, m, g, v = h,
        b = "",
        y = "";
      return a && (h = a(h)), !!o(h) && (!1 !== e && 0 === parseFloat(h.toFixed(e)) && (h = 0), h < 0 && (f = !0, h = Math.abs(h)), !1 !== e && (h = function (e, t) {
        return e = e.toString().split("e"), (+((e = (e = Math.round(+(e[0] + "e" + (e[1] ? +e[1] + t : t)))).toString().split("e"))[0] + "e" + (e[1] ? +e[1] - t : -t))).toFixed(t);
      }(h, e)), -1 !== (h = h.toString()).indexOf(".") ? (m = h.split("."), g = m[0], i && (b = i + m[1])) : g = h, n && (g = t((g = t(g).match(/.{1,3}/g)).join(t(n)))), f && c && (y += c), r && (y += r), f && u && (y += u), y += g, y += b, s && (y += s), d && (y = d(y, v)), y);
    }

    function s(e, t, i, r, s, a, l, c, u, d, p, h) {
      var f, m = "";
      return p && (h = p(h)), !(!h || "string" != typeof h) && (c && n(h, c) && (h = h.replace(c, ""), f = !0), r && n(h, r) && (h = h.replace(r, "")), u && n(h, u) && (h = h.replace(u, ""), f = !0), s && function (e, t) {
        return e.slice(-1 * t.length) === t;
      }(h, s) && (h = h.slice(0, -1 * s.length)), t && (h = h.split(t).join("")), i && (h = h.replace(i, ".")), f && (m += "-"), "" !== (m = (m += h).replace(/[^0-9\.\-.]/g, "")) && (m = Number(m), l && (m = l(m)), !!o(m) && m));
    }

    function a(t, n, i) {
      var o, r = [];
      for (o = 0; o < e.length; o += 1) r.push(t[e[o]]);
      return r.push(i), n.apply("", r);
    }
    return function t(n) {
      if (!(this instanceof t)) return new t(n);
      "object" == typeof n && (n = function (t) {
        var n, o, r, s = {};
        for (void 0 === t.suffix && (t.suffix = t.postfix), n = 0; n < e.length; n += 1)
          if (o = e[n], void 0 === (r = t[o])) "negative" !== o || s.negativeBefore ? "mark" === o && "." !== s.thousand ? s[o] = "." : s[o] = !1 : s[o] = "-";
          else if ("decimals" === o) {
            if (!(r >= 0 && r < 8)) throw new Error(o);
            s[o] = r;
          } else if ("encoder" === o || "decoder" === o || "edit" === o || "undo" === o) {
            if ("function" != typeof r) throw new Error(o);
            s[o] = r;
          } else {
            if ("string" != typeof r) throw new Error(o);
            s[o] = r;
          }
        return i(s, "mark", "thousand"), i(s, "prefix", "negative"), i(s, "prefix", "negativeBefore"), s;
      }(n), this.to = function (e) {
        return a(n, r, e);
      }, this.from = function (e) {
        return a(n, s, e);
      });
    };
  }) ? i.apply(t, o) : i) || (e.exports = r);
}, function (e, t, n) {
  var i, o, r; /*! nouislider -11.1.0 - 2016-12-10 16:00:32 */
  o = [], void 0 === (r = "function" == typeof (i = function () {
    "use strict";

    function e(e) {
      return null !== e && void 0 !== e;
    }

    function t(e) {
      e.preventDefault();
    }

    function n(e) {
      return "number" == typeof e && !isNaN(e) && isFinite(e);
    }

    function i(e, t, n) {
      n > 0 && (a(e, t), setTimeout(function () {
        l(e, t);
      }, n));
    }

    function o(e) {
      return Math.max(Math.min(e, 100), 0);
    }

    function r(e) {
      return Array.isArray(e) ? e : [e];
    }

    function s(e) {
      var t = (e = String(e)).split(".");
      return t.length > 1 ? t[1].length : 0;
    }

    function a(e, t) {
      e.classList ? e.classList.add(t) : e.className += " " + t;
    }

    function l(e, t) {
      e.classList ? e.classList.remove(t) : e.className = e.className.replace(new RegExp("(^|\\b)" + t.split(" ").join("|") + "(\\b|$)", "gi"), " ");
    }

    function c(e) {
      var t = void 0 !== window.pageXOffset,
        n = "CSS1Compat" === (e.compatMode || "");
      return {
        x: t ? window.pageXOffset : n ? e.documentElement.scrollLeft : e.body.scrollLeft,
        y: t ? window.pageYOffset : n ? e.documentElement.scrollTop : e.body.scrollTop
      };
    }

    function u(e, t) {
      return 100 / (t - e);
    }

    function d(e, t) {
      return 100 * t / (e[1] - e[0]);
    }

    function p(e, t) {
      for (var n = 1; e >= t[n];) n += 1;
      return n;
    }

    function h(e, t, n) {
      if (n >= e.slice(-1)[0]) return 100;
      var i = p(n, e),
        o = e[i - 1],
        r = e[i],
        s = t[i - 1],
        a = t[i];
      return s + function (e, t) {
        return d(e, e[0] < 0 ? t + Math.abs(e[0]) : t - e[0]);
      }([o, r], n) / u(s, a);
    }

    function f(e, t, n, i) {
      if (100 === i) return i;
      var o = p(i, e),
        r = e[o - 1],
        s = e[o];
      return n ? i - r > (s - r) / 2 ? s : r : t[o - 1] ? e[o - 1] + function (e, t) {
        return Math.round(e / t) * t;
      }(i - e[o - 1], t[o - 1]) : i;
    }

    function m(e, t, i) {
      var o;
      if ("number" == typeof t && (t = [t]), !Array.isArray(t)) throw new Error("noUiSlider (" + H + "): 'range' contains invalid value.");
      if (!n(o = "min" === e ? 0 : "max" === e ? 100 : parseFloat(e)) || !n(t[0])) throw new Error("noUiSlider (" + H + "): 'range' value isn't numeric.");
      i.xPct.push(o), i.xVal.push(t[0]), o ? i.xSteps.push(!isNaN(t[1]) && t[1]) : isNaN(t[1]) || (i.xSteps[0] = t[1]), i.xHighestCompleteStep.push(0);
    }

    function g(e, t, n) {
      if (!t) return !0;
      n.xSteps[e] = d([n.xVal[e], n.xVal[e + 1]], t) / u(n.xPct[e], n.xPct[e + 1]);
      var i = (n.xVal[e + 1] - n.xVal[e]) / n.xNumSteps[e],
        o = Math.ceil(Number(i.toFixed(3)) - 1),
        r = n.xVal[e] + n.xNumSteps[e] * o;
      n.xHighestCompleteStep[e] = r;
    }

    function v(e, t, n) {
      this.xPct = [], this.xVal = [], this.xSteps = [n || !1], this.xNumSteps = [!1], this.xHighestCompleteStep = [], this.snap = t;
      var i, o = [];
      for (i in e) e.hasOwnProperty(i) && o.push([e[i], i]);
      for (o.length && "object" == typeof o[0][0] ? o.sort(function (e, t) {
        return e[0][0] - t[0][0];
      }) : o.sort(function (e, t) {
        return e[0] - t[0];
      }), i = 0; i < o.length; i++) m(o[i][1], o[i][0], this);
      for (this.xNumSteps = this.xSteps.slice(0), i = 0; i < this.xNumSteps.length; i++) g(i, this.xNumSteps[i], this);
    }

    function b(e) {
      if (function (e) {
        return "object" == typeof e && "function" == typeof e.to && "function" == typeof e.from;
      }(e)) return !0;
      throw new Error("noUiSlider (" + H + "): 'format' requires 'to' and 'from' methods.");
    }

    function y(e, t) {
      if (!n(t)) throw new Error("noUiSlider (" + H + "): 'step' is not numeric.");
      e.singleStep = t;
    }

    function w(e, t) {
      if ("object" != typeof t || Array.isArray(t)) throw new Error("noUiSlider (" + H + "): 'range' is not an object.");
      if (void 0 === t.min || void 0 === t.max) throw new Error("noUiSlider (" + H + "): Missing 'min' or 'max' in 'range'.");
      if (t.min === t.max) throw new Error("noUiSlider (" + H + "): 'range' 'min' and 'max' cannot be equal.");
      e.spectrum = new v(t, e.snap, e.singleStep);
    }

    function C(e, t) {
      if (t = r(t), !Array.isArray(t) || !t.length) throw new Error("noUiSlider (" + H + "): 'start' option is incorrect.");
      e.handles = t.length, e.start = t;
    }

    function x(e, t) {
      if (e.snap = t, "boolean" != typeof t) throw new Error("noUiSlider (" + H + "): 'snap' option must be a boolean.");
    }

    function _(e, t) {
      if (e.animate = t, "boolean" != typeof t) throw new Error("noUiSlider (" + H + "): 'animate' option must be a boolean.");
    }

    function $(e, t) {
      if (e.animationDuration = t, "number" != typeof t) throw new Error("noUiSlider (" + H + "): 'animationDuration' option must be a number.");
    }

    function k(e, t) {
      var n, i = [!1];
      if ("lower" === t ? t = [!0, !1] : "upper" === t && (t = [!1, !0]), !0 === t || !1 === t) {
        for (n = 1; n < e.handles; n++) i.push(t);
        i.push(!1);
      } else {
        if (!Array.isArray(t) || !t.length || t.length !== e.handles + 1) throw new Error("noUiSlider (" + H + "): 'connect' option doesn't match handle count.");
        i = t;
      }
      e.connect = i;
    }

    function T(e, t) {
      switch (t) {
        case "horizontal":
          e.ort = 0;
          break;
        case "vertical":
          e.ort = 1;
          break;
        default:
          throw new Error("noUiSlider (" + H + "): 'orientation' option is invalid.");
      }
    }

    function E(e, t) {
      if (!n(t)) throw new Error("noUiSlider (" + H + "): 'margin' option must be numeric.");
      if (0 !== t && (e.margin = e.spectrum.getMargin(t), !e.margin)) throw new Error("noUiSlider (" + H + "): 'margin' option is only supported on linear sliders.");
    }

    function S(e, t) {
      if (!n(t)) throw new Error("noUiSlider (" + H + "): 'limit' option must be numeric.");
      if (e.limit = e.spectrum.getMargin(t), !e.limit || e.handles < 2) throw new Error("noUiSlider (" + H + "): 'limit' option is only supported on linear sliders with 2 or more handles.");
    }

    function D(e, t) {
      if (!n(t) && !Array.isArray(t)) throw new Error("noUiSlider (" + H + "): 'padding' option must be numeric or array of exactly 2 numbers.");
      if (Array.isArray(t) && 2 !== t.length && !n(t[0]) && !n(t[1])) throw new Error("noUiSlider (" + H + "): 'padding' option must be numeric or array of exactly 2 numbers.");
      if (0 !== t) {
        if (Array.isArray(t) || (t = [t, t]), e.padding = [e.spectrum.getMargin(t[0]), e.spectrum.getMargin(t[1])], !1 === e.padding[0] || !1 === e.padding[1]) throw new Error("noUiSlider (" + H + "): 'padding' option is only supported on linear sliders.");
        if (e.padding[0] < 0 || e.padding[1] < 0) throw new Error("noUiSlider (" + H + "): 'padding' option must be a positive number(s).");
        if (e.padding[0] + e.padding[1] >= 100) throw new Error("noUiSlider (" + H + "): 'padding' option must not exceed 100% of the range.");
      }
    }

    function I(e, t) {
      switch (t) {
        case "ltr":
          e.dir = 0;
          break;
        case "rtl":
          e.dir = 1;
          break;
        default:
          throw new Error("noUiSlider (" + H + "): 'direction' option was not recognized.");
      }
    }

    function A(e, t) {
      if ("string" != typeof t) throw new Error("noUiSlider (" + H + "): 'behaviour' must be a string containing options.");
      var n = t.indexOf("tap") >= 0,
        i = t.indexOf("drag") >= 0,
        o = t.indexOf("fixed") >= 0,
        r = t.indexOf("snap") >= 0,
        s = t.indexOf("hover") >= 0;
      if (o) {
        if (2 !== e.handles) throw new Error("noUiSlider (" + H + "): 'fixed' behaviour must be used with 2 handles");
        E(e, e.start[1] - e.start[0]);
      }
      e.events = {
        tap: n || r,
        drag: i,
        fixed: o,
        snap: r,
        hover: s
      };
    }

    function O(e, t) {
      if (!1 !== t)
        if (!0 === t) {
          e.tooltips = [];
          for (var n = 0; n < e.handles; n++) e.tooltips.push(!0);
        } else {
          if (e.tooltips = r(t), e.tooltips.length !== e.handles) throw new Error("noUiSlider (" + H + "): must pass a formatter for all handles.");
          e.tooltips.forEach(function (e) {
            if ("boolean" != typeof e && ("object" != typeof e || "function" != typeof e.to)) throw new Error("noUiSlider (" + H + "): 'tooltips' must be passed a formatter or 'false'.");
          });
        }
    }

    function N(e, t) {
      e.ariaFormat = t, b(t);
    }

    function P(e, t) {
      e.format = t, b(t);
    }

    function j(e, t) {
      if ("string" != typeof t && !1 !== t) throw new Error("noUiSlider (" + H + "): 'cssPrefix' must be a string or `false`.");
      e.cssPrefix = t;
    }

    function L(e, t) {
      if ("object" != typeof t) throw new Error("noUiSlider (" + H + "): 'cssClasses' must be an object.");
      if ("string" == typeof e.cssPrefix)
        for (var n in e.cssClasses = {}, t) t.hasOwnProperty(n) && (e.cssClasses[n] = e.cssPrefix + t[n]);
      else e.cssClasses = t;
    }

    function M(t) {
      var n = {
        margin: 0,
        limit: 0,
        padding: 0,
        animate: !0,
        animationDuration: 300,
        ariaFormat: W,
        format: W
      },
        i = {
          step: {
            r: !1,
            t: y
          },
          start: {
            r: !0,
            t: C
          },
          connect: {
            r: !0,
            t: k
          },
          direction: {
            r: !0,
            t: I
          },
          snap: {
            r: !1,
            t: x
          },
          animate: {
            r: !1,
            t: _
          },
          animationDuration: {
            r: !1,
            t: $
          },
          range: {
            r: !0,
            t: w
          },
          orientation: {
            r: !1,
            t: T
          },
          margin: {
            r: !1,
            t: E
          },
          limit: {
            r: !1,
            t: S
          },
          padding: {
            r: !1,
            t: D
          },
          behaviour: {
            r: !0,
            t: A
          },
          ariaFormat: {
            r: !1,
            t: N
          },
          format: {
            r: !1,
            t: P
          },
          tooltips: {
            r: !1,
            t: O
          },
          cssPrefix: {
            r: !0,
            t: j
          },
          cssClasses: {
            r: !0,
            t: L
          }
        },
        o = {
          connect: !1,
          direction: "ltr",
          behaviour: "tap",
          orientation: "horizontal",
          cssPrefix: "noUi-",
          cssClasses: {
            target: "target",
            base: "base",
            origin: "origin",
            handle: "handle",
            handleLower: "handle-lower",
            handleUpper: "handle-upper",
            horizontal: "horizontal",
            vertical: "vertical",
            background: "background",
            connect: "connect",
            connects: "connects",
            ltr: "ltr",
            rtl: "rtl",
            draggable: "draggable",
            drag: "state-drag",
            tap: "state-tap",
            active: "active",
            tooltip: "tooltip",
            pips: "pips",
            pipsHorizontal: "pips-horizontal",
            pipsVertical: "pips-vertical",
            marker: "marker",
            markerHorizontal: "marker-horizontal",
            markerVertical: "marker-vertical",
            markerNormal: "marker-normal",
            markerLarge: "marker-large",
            markerSub: "marker-sub",
            value: "value",
            valueHorizontal: "value-horizontal",
            valueVertical: "value-vertical",
            valueNormal: "value-normal",
            valueLarge: "value-large",
            valueSub: "value-sub"
          }
        };
      t.format && !t.ariaFormat && (t.ariaFormat = t.format), Object.keys(i).forEach(function (r) {
        if (!e(t[r]) && void 0 === o[r]) {
          if (i[r].r) throw new Error("noUiSlider (" + H + "): '" + r + "' is required.");
          return !0;
        }
        i[r].t(n, e(t[r]) ? t[r] : o[r]);
      }), n.pips = t.pips;
      var r = document.createElement("div"),
        s = void 0 !== r.style.msTransform,
        a = void 0 !== r.style.transform;
      return n.transformRule = a ? "transform" : s ? "msTransform" : "webkitTransform", n.style = [
        ["left", "top"],
        ["right", "bottom"]
      ][n.dir][n.ort], n;
    }

    function R(e, n, s) {
      function u(e, t) {
        var n = ne.createElement("div");
        return t && a(n, t), e.appendChild(n), n;
      }

      function d(e, t) {
        var i = u(e, n.cssClasses.origin),
          o = u(i, n.cssClasses.handle);
        return o.setAttribute("data-handle", t), o.setAttribute("tabindex", "0"), o.setAttribute("role", "slider"), o.setAttribute("aria-orientation", n.ort ? "vertical" : "horizontal"), 0 === t ? a(o, n.cssClasses.handleLower) : t === n.handles - 1 && a(o, n.cssClasses.handleUpper), i;
      }

      function p(e, t) {
        return !!t && u(e, n.cssClasses.connect);
      }

      function h(e, t) {
        return !!n.tooltips[t] && u(e.firstChild, n.cssClasses.tooltip);
      }

      function f(e, t, i) {
        function o(e, t) {
          var i = t === n.cssClasses.value,
            o = i ? d : p,
            r = i ? l : c;
          return t + " " + o[n.ort] + " " + r[e];
        }

        function r(e, r) {
          r[1] = r[1] && t ? t(r[0], r[1]) : r[1];
          var a = u(s, !1);
          a.className = o(r[1], n.cssClasses.marker), a.style[n.style] = e + "%", r[1] && ((a = u(s, !1)).className = o(r[1], n.cssClasses.value), a.setAttribute("data-value", r[0]), a.style[n.style] = e + "%", a.innerText = i.to(r[0]));
        }
        var s = ne.createElement("div"),
          l = [n.cssClasses.valueNormal, n.cssClasses.valueLarge, n.cssClasses.valueSub],
          c = [n.cssClasses.markerNormal, n.cssClasses.markerLarge, n.cssClasses.markerSub],
          d = [n.cssClasses.valueHorizontal, n.cssClasses.valueVertical],
          p = [n.cssClasses.markerHorizontal, n.cssClasses.markerVertical];
        return a(s, n.cssClasses.pips), a(s, 0 === n.ort ? n.cssClasses.pipsHorizontal : n.cssClasses.pipsVertical), Object.keys(e).forEach(function (t) {
          r(t, e[t]);
        }), s;
      }

      function m() {
        z && (function (e) {
          e.parentElement.removeChild(e);
        }(z), z = null);
      }

      function g(e) {
        m();
        var t = e.mode,
          n = e.density || 1,
          i = e.filter || !1,
          o = e.values || !1,
          r = e.stepped || !1,
          s = function (e, t, n) {
            if ("range" === e || "steps" === e) return Z.xVal;
            if ("count" === e) {
              if (t < 2) throw new Error("noUiSlider (" + H + "): 'values' (>= 2) required for mode 'count'.");
              var i = t - 1,
                o = 100 / i;
              for (t = []; i--;) t[i] = i * o;
              t.push(100), e = "positions";
            }
            return "positions" === e ? t.map(function (e) {
              return Z.fromStepping(n ? Z.getStep(e) : e);
            }) : "values" === e ? n ? t.map(function (e) {
              return Z.fromStepping(Z.getStep(Z.toStepping(e)));
            }) : t : void 0;
          }(t, o, r),
          a = function (e, t, n) {
            function i(e, t) {
              return (e + t).toFixed(7) / 1;
            }
            var o = {},
              r = Z.xVal[0],
              s = Z.xVal[Z.xVal.length - 1],
              a = !1,
              l = !1,
              c = 0;
            return (n = function (e) {
              return e.filter(function (e) {
                return !this[e] && (this[e] = !0);
              }, {});
            }(n.slice().sort(function (e, t) {
              return e - t;
            })))[0] !== r && (n.unshift(r), a = !0), n[n.length - 1] !== s && (n.push(s), l = !0), n.forEach(function (r, s) {
              var u, d, p, h, f, m, g, v, b, y = r,
                w = n[s + 1];
              if ("steps" === t && (u = Z.xNumSteps[s]), u || (u = w - y), !1 !== y && void 0 !== w)
                for (u = Math.max(u, 1e-7), d = y; d <= w; d = i(d, u)) {
                  for (g = (f = (h = Z.toStepping(d)) - c) / e, b = f / (v = Math.round(g)), p = 1; p <= v; p += 1) o[(c + p * b).toFixed(5)] = ["x", 0];
                  m = n.indexOf(d) > -1 ? 1 : "steps" === t ? 2 : 0, !s && a && (m = 0), d === w && l || (o[h.toFixed(5)] = [d, m]), c = h;
                }
            }), o;
          }(n, t, s),
          l = e.format || {
            to: Math.round
          };
        return z = Y.appendChild(f(a, i, l));
      }

      function v() {
        var e = F.getBoundingClientRect(),
          t = "offset" + ["Width", "Height"][n.ort];
        return 0 === n.ort ? e.width || F[t] : e.height || F[t];
      }

      function b(e, t, i, o) {
        var r = function (r) {
          return !!(r = function (e, t, n) {
            var i, o, r = 0 === e.type.indexOf("touch"),
              s = 0 === e.type.indexOf("mouse"),
              a = 0 === e.type.indexOf("pointer");
            if (0 === e.type.indexOf("MSPointer") && (a = !0), r) {
              var l = function (e) {
                return e.target === n || n.contains(e.target);
              };
              if ("touchstart" === e.type) {
                var u = Array.prototype.filter.call(e.touches, l);
                if (u.length > 1) return !1;
                i = u[0].pageX, o = u[0].pageY;
              } else {
                var d = Array.prototype.find.call(e.changedTouches, l);
                if (!d) return !1;
                i = d.pageX, o = d.pageY;
              }
            }
            return t = t || c(ne), (s || a) && (i = e.clientX + t.x, o = e.clientY + t.y), e.pageOffset = t, e.points = [i, o], e.cursor = s || a, e;
          }(r, o.pageOffset, o.target || t)) && !(Y.hasAttribute("disabled") && !o.doNotReject) && !(function (e, t) {
            return e.classList ? e.classList.contains(t) : new RegExp("\\b" + t + "\\b").test(e.className);
          }(Y, n.cssClasses.tap) && !o.doNotReject) && !(e === V.start && void 0 !== r.buttons && r.buttons > 1) && (!o.hover || !r.buttons) && (K || r.preventDefault(), r.calcPoint = r.points[n.ort], void i(r, o));
        },
          s = [];
        return e.split(" ").forEach(function (e) {
          t.addEventListener(e, r, !!K && {
            passive: !0
          }), s.push([e, r]);
        }), s;
      }

      function y(e) {
        var t = e - function (e, t) {
          var n = e.getBoundingClientRect(),
            i = e.ownerDocument,
            o = i.documentElement,
            r = c(i);
          return /webkit.*Chrome.*Mobile/i.test(navigator.userAgent) && (r.x = 0), t ? n.top + r.y - o.clientTop : n.left + r.x - o.clientLeft;
        }(F, n.ort),
          i = 100 * t / v();
        return i = o(i), n.dir ? 100 - i : i;
      }

      function w(e, t) {
        "mouseout" === e.type && "HTML" === e.target.nodeName && null === e.relatedTarget && x(e, t);
      }

      function C(e, t) {
        if (-1 === navigator.appVersion.indexOf("MSIE 9") && 0 === e.buttons && 0 !== t.buttonsProperty) return x(e, t);
        var i = (n.dir ? -1 : 1) * (e.calcPoint - t.startCalcPoint);
        A(i > 0, 100 * i / t.baseSize, t.locations, t.handleNumbers);
      }

      function x(e, i) {
        i.handle && (l(i.handle, n.cssClasses.active), J -= 1), i.listeners.forEach(function (e) {
          ie.removeEventListener(e[0], e[1]);
        }), 0 === J && (l(Y, n.cssClasses.drag), P(), e.cursor && (oe.style.cursor = "", oe.removeEventListener("selectstart", t))), i.handleNumbers.forEach(function (e) {
          E("change", e), E("set", e), E("end", e);
        });
      }

      function _(e, i) {
        var o;
        if (1 === i.handleNumbers.length) {
          var r = q[i.handleNumbers[0]];
          if (r.hasAttribute("disabled")) return !1;
          o = r.children[0], J += 1, a(o, n.cssClasses.active);
        }
        e.stopPropagation();
        var s = [],
          l = b(V.move, ie, C, {
            target: e.target,
            handle: o,
            listeners: s,
            startCalcPoint: e.calcPoint,
            baseSize: v(),
            pageOffset: e.pageOffset,
            handleNumbers: i.handleNumbers,
            buttonsProperty: e.buttons,
            locations: Q.slice()
          }),
          c = b(V.end, ie, x, {
            target: e.target,
            handle: o,
            listeners: s,
            doNotReject: !0,
            handleNumbers: i.handleNumbers
          }),
          u = b("mouseout", ie, w, {
            target: e.target,
            handle: o,
            listeners: s,
            doNotReject: !0,
            handleNumbers: i.handleNumbers
          });
        s.push.apply(s, l.concat(c, u)), e.cursor && (oe.style.cursor = getComputedStyle(e.target).cursor, q.length > 1 && a(Y, n.cssClasses.drag), oe.addEventListener("selectstart", t, !1)), i.handleNumbers.forEach(function (e) {
          E("start", e);
        });
      }

      function $(e) {
        e.stopPropagation();
        var t = y(e.calcPoint),
          o = function (e) {
            var t = 100,
              n = !1;
            return q.forEach(function (i, o) {
              if (!i.hasAttribute("disabled")) {
                var r = Math.abs(Q[o] - e);
                (r < t || 100 === r && 100 === t) && (n = o, t = r);
              }
            }), n;
          }(t);
        if (!1 === o) return !1;
        n.events.snap || i(Y, n.cssClasses.tap, n.animationDuration), j(o, t, !0, !0), P(), E("slide", o, !0), E("update", o, !0), E("change", o, !0), E("set", o, !0), n.events.snap && _(e, {
          handleNumbers: [o]
        });
      }

      function k(e) {
        var t = y(e.calcPoint),
          n = Z.getStep(t),
          i = Z.fromStepping(n);
        Object.keys(te).forEach(function (e) {
          "hover" === e.split(".")[0] && te[e].forEach(function (e) {
            e.call(B, i);
          });
        });
      }

      function T(e, t) {
        te[e] = te[e] || [], te[e].push(t), "update" === e.split(".")[0] && q.forEach(function (e, t) {
          E("update", t);
        });
      }

      function E(e, t, i) {
        Object.keys(te).forEach(function (o) {
          var r = o.split(".")[0];
          e === r && te[o].forEach(function (e) {
            e.call(B, ee.map(n.format.to), t, ee.slice(), i || !1, Q.slice());
          });
        });
      }

      function S(e) {
        return e + "%";
      }

      function D(e, t, i, r, s, a) {
        return q.length > 1 && (r && t > 0 && (i = Math.max(i, e[t - 1] + n.margin)), s && t < q.length - 1 && (i = Math.min(i, e[t + 1] - n.margin))), q.length > 1 && n.limit && (r && t > 0 && (i = Math.min(i, e[t - 1] + n.limit)), s && t < q.length - 1 && (i = Math.max(i, e[t + 1] - n.limit))), n.padding && (0 === t && (i = Math.max(i, n.padding[0])), t === q.length - 1 && (i = Math.min(i, 100 - n.padding[1]))), !((i = o(i = Z.getStep(i))) === e[t] && !a) && i;
      }

      function I(e, t) {
        var i = n.ort;
        return (i ? t : e) + ", " + (i ? e : t);
      }

      function A(e, t, n, i) {
        var o = n.slice(),
          r = [!e, e],
          s = [e, !e];
        i = i.slice(), e && i.reverse(), i.length > 1 ? i.forEach(function (e, n) {
          var i = D(o, e, o[e] + t, r[n], s[n], !1);
          !1 === i ? t = 0 : (t = i - o[e], o[e] = i);
        }) : r = s = [!0];
        var a = !1;
        i.forEach(function (e, i) {
          a = j(e, n[e] + t, r[i], s[i]) || a;
        }), a && i.forEach(function (e) {
          E("update", e), E("slide", e);
        });
      }

      function O(e, t) {
        return n.dir ? 100 - e - t : e;
      }

      function N(e, t) {
        Q[e] = t, ee[e] = Z.fromStepping(t);
        var i = "translate(" + I(S(O(t, 0) - re), "0") + ")";
        q[e].style[n.transformRule] = i, L(e), L(e + 1);
      }

      function P() {
        X.forEach(function (e) {
          var t = Q[e] > 50 ? -1 : 1,
            n = 3 + (q.length + t * e);
          q[e].style.zIndex = n;
        });
      }

      function j(e, t, n, i) {
        return !1 !== (t = D(Q, e, t, n, i, !1)) && (N(e, t), !0);
      }

      function L(e) {
        if (U[e]) {
          var t = 0,
            i = 100;
          0 !== e && (t = Q[e - 1]), e !== U.length - 1 && (i = Q[e]);
          var o = i - t,
            r = "translate(" + I(S(O(t, o)), "0") + ")",
            s = "scale(" + I(o / 100, "1") + ")";
          U[e].style[n.transformRule] = r + " " + s;
        }
      }

      function R(e, t) {
        var o = r(e),
          s = void 0 === Q[0];
        t = void 0 === t || !!t, n.animate && !s && i(Y, n.cssClasses.tap, n.animationDuration), X.forEach(function (e) {
          j(e, function (e, t) {
            return null === e || !1 === e || void 0 === e ? Q[t] : ("number" == typeof e && (e = String(e)), e = n.format.from(e), !1 === (e = Z.toStepping(e)) || isNaN(e) ? Q[t] : e);
          }(o[e], e), !0, !1);
        }), X.forEach(function (e) {
          j(e, Q[e], !0, !0);
        }), P(), X.forEach(function (e) {
          E("update", e), null !== o[e] && t && E("set", e);
        });
      }

      function W() {
        var e = ee.map(n.format.to);
        return 1 === e.length ? e[0] : e;
      }
      var F, q, U, B, z, V = window.navigator.pointerEnabled ? {
        start: "pointerdown",
        move: "pointermove",
        end: "pointerup"
      } : window.navigator.msPointerEnabled ? {
        start: "MSPointerDown",
        move: "MSPointerMove",
        end: "MSPointerUp"
      } : {
        start: "mousedown touchstart",
        move: "mousemove touchmove",
        end: "mouseup touchend"
      },
        G = window.CSS && CSS.supports && CSS.supports("touch-action", "none"),
        K = G && function () {
          var e = !1;
          try {
            var t = Object.defineProperty({}, "passive", {
              get: function () {
                e = !0;
              }
            });
            window.addEventListener("test", null, t);
          } catch (e) { }
          return e;
        }(),
        Y = e,
        Q = [],
        X = [],
        J = 0,
        Z = n.spectrum,
        ee = [],
        te = {},
        ne = e.ownerDocument,
        ie = ne.documentElement,
        oe = ne.body,
        re = "rtl" === ne.dir || 1 === n.ort ? 0 : 100;
      return function (e) {
        a(e, n.cssClasses.target), 0 === n.dir ? a(e, n.cssClasses.ltr) : a(e, n.cssClasses.rtl), 0 === n.ort ? a(e, n.cssClasses.horizontal) : a(e, n.cssClasses.vertical), F = u(e, n.cssClasses.base);
      }(Y),
        function (e, t) {
          var i = u(t, n.cssClasses.connects);
          q = [], (U = []).push(p(i, e[0]));
          for (var o = 0; o < n.handles; o++) q.push(d(t, o)), X[o] = o, U.push(p(i, e[o + 1]));
        }(n.connect, F),
        function (e) {
          e.fixed || q.forEach(function (e, t) {
            b(V.start, e.children[0], _, {
              handleNumbers: [t]
            });
          }), e.tap && b(V.start, F, $, {}), e.hover && b(V.move, F, k, {
            hover: !0
          }), e.drag && U.forEach(function (t, i) {
            if (!1 !== t && 0 !== i && i !== U.length - 1) {
              var o = q[i - 1],
                r = q[i],
                s = [t];
              a(t, n.cssClasses.draggable), e.fixed && (s.push(o.children[0]), s.push(r.children[0])), s.forEach(function (e) {
                b(V.start, e, _, {
                  handles: [o, r],
                  handleNumbers: [i - 1, i]
                });
              });
            }
          });
        }(n.events), R(n.start), B = {
          destroy: function () {
            for (var e in n.cssClasses) n.cssClasses.hasOwnProperty(e) && l(Y, n.cssClasses[e]);
            for (; Y.firstChild;) Y.removeChild(Y.firstChild);
            delete Y.noUiSlider;
          },
          steps: function () {
            return Q.map(function (e, t) {
              var n = Z.getNearbySteps(e),
                i = ee[t],
                o = n.thisStep.step,
                r = null;
              !1 !== o && i + o > n.stepAfter.startValue && (o = n.stepAfter.startValue - i), r = i > n.thisStep.startValue ? n.thisStep.step : !1 !== n.stepBefore.step && i - n.stepBefore.highestStep, 100 === e ? o = null : 0 === e && (r = null);
              var s = Z.countStepDecimals();
              return null !== o && !1 !== o && (o = Number(o.toFixed(s))), null !== r && !1 !== r && (r = Number(r.toFixed(s))), [r, o];
            });
          },
          on: T,
          off: function (e) {
            var t = e && e.split(".")[0],
              n = t && e.substring(t.length);
            Object.keys(te).forEach(function (e) {
              var i = e.split(".")[0],
                o = e.substring(i.length);
              t && t !== i || n && n !== o || delete te[e];
            });
          },
          get: W,
          set: R,
          reset: function (e) {
            R(n.start, e);
          },
          __moveHandles: function (e, t, n) {
            A(e, t, Q, n);
          },
          options: s,
          updateOptions: function (e, t) {
            var i = W(),
              o = ["margin", "limit", "padding", "range", "animate", "snap", "step", "format"];
            o.forEach(function (t) {
              void 0 !== e[t] && (s[t] = e[t]);
            });
            var r = M(s);
            o.forEach(function (t) {
              void 0 !== e[t] && (n[t] = r[t]);
            }), Z = r.spectrum, n.margin = r.margin, n.limit = r.limit, n.padding = r.padding, n.pips && g(n.pips), Q = [], R(e.start || i, t);
          },
          target: Y,
          removePips: m,
          pips: g
        }, n.pips && g(n.pips), n.tooltips && function () {
          var e = q.map(h);
          T("update", function (t, i, o) {
            if (e[i]) {
              var r = t[i];
              !0 !== n.tooltips[i] && (r = n.tooltips[i].to(o[i])), e[i].innerHTML = r;
            }
          });
        }(), T("update", function (e, t, i, o, r) {
          X.forEach(function (e) {
            var t = q[e],
              o = D(Q, e, 0, !0, !0, !0),
              s = D(Q, e, 100, !0, !0, !0),
              a = r[e],
              l = n.ariaFormat.to(i[e]);
            t.children[0].setAttribute("aria-valuemin", o.toFixed(1)), t.children[0].setAttribute("aria-valuemax", s.toFixed(1)), t.children[0].setAttribute("aria-valuenow", a.toFixed(1)), t.children[0].setAttribute("aria-valuetext", l);
          });
        }), B;
    }
    var H = "11.1.0";
    v.prototype.getMargin = function (e) {
      var t = this.xNumSteps[0];
      if (t && e / t % 1 != 0) throw new Error("noUiSlider (" + H + "): 'limit', 'margin' and 'padding' must be divisible by step.");
      return 2 === this.xPct.length && d(this.xVal, e);
    }, v.prototype.toStepping = function (e) {
      return e = h(this.xVal, this.xPct, e);
    }, v.prototype.fromStepping = function (e) {
      return function (e, t, n) {
        if (n >= 100) return e.slice(-1)[0];
        var i = p(n, t),
          o = e[i - 1],
          r = e[i],
          s = t[i - 1];
        return function (e, t) {
          return t * (e[1] - e[0]) / 100 + e[0];
        }([o, r], (n - s) * u(s, t[i]));
      }(this.xVal, this.xPct, e);
    }, v.prototype.getStep = function (e) {
      return e = f(this.xPct, this.xSteps, this.snap, e);
    }, v.prototype.getNearbySteps = function (e) {
      var t = p(e, this.xPct);
      return {
        stepBefore: {
          startValue: this.xVal[t - 2],
          step: this.xNumSteps[t - 2],
          highestStep: this.xHighestCompleteStep[t - 2]
        },
        thisStep: {
          startValue: this.xVal[t - 1],
          step: this.xNumSteps[t - 1],
          highestStep: this.xHighestCompleteStep[t - 1]
        },
        stepAfter: {
          startValue: this.xVal[t - 0],
          step: this.xNumSteps[t - 0],
          highestStep: this.xHighestCompleteStep[t - 0]
        }
      };
    }, v.prototype.countStepDecimals = function () {
      var e = this.xNumSteps.map(s);
      return Math.max.apply(null, e);
    }, v.prototype.convert = function (e) {
      return this.getStep(this.toStepping(e));
    };
    var W = {
      to: function (e) {
        return void 0 !== e && e.toFixed(2);
      },
      from: Number
    };
    return {
      version: H,
      create: function (e, t) {
        if (!e || !e.nodeName) throw new Error("noUiSlider (" + H + "): create requires a single element, got: " + e);
        if (e.noUiSlider) throw new Error("noUiSlider (" + H + "): Slider was already initialized.");
        var n = M(t),
          i = R(e, n, t);
        return e.noUiSlider = i, i;
      }
    };
  }) ? i.apply(t, o) : i) || (e.exports = r);
}, function (e, t, n) {
  /*!
   * Ladda 0.9.4 (2014-06-21, 11:24)
   * http://lab.hakim.se/ladda
   * MIT licensed
   *
   * Copyright (C) 2014 Hakim El Hattab, http://hakim.se
   */
  e.exports = function (e) {
    "use strict";

    function t(e) {
      if (void 0 !== e) {
        e.querySelector(".ladda-label") || (e.innerHTML = '<span class="ladda-label">' + e.innerHTML + "</span>");
        var t, n = document.createElement("span");
        n.className = "ladda-spinner", e.appendChild(n);
        var i, s = {
          start: function () {
            return t || (t = o(e)), e.setAttribute("disabled", ""), e.setAttribute("data-loading", ""), clearTimeout(i), t.spin(n), this.setProgress(0), this;
          },
          startAfter: function (e) {
            return clearTimeout(i), i = setTimeout(function () {
              s.start();
            }, e), this;
          },
          stop: function () {
            return e.removeAttribute("disabled"), e.removeAttribute("data-loading"), clearTimeout(i), t && (i = setTimeout(function () {
              t.stop();
            }, 1e3)), this;
          },
          toggle: function () {
            return this.isLoading() ? this.stop() : this.start(), this;
          },
          setProgress: function (t) {
            t = Math.max(Math.min(t, 1), 0);
            var n = e.querySelector(".ladda-progress");
            0 === t && n && n.parentNode ? n.parentNode.removeChild(n) : (n || ((n = document.createElement("div")).className = "ladda-progress", e.appendChild(n)), n.style.width = (t || 0) * e.offsetWidth + "px");
          },
          enable: function () {
            return this.stop(), this;
          },
          disable: function () {
            return this.stop(), e.setAttribute("disabled", ""), this;
          },
          isLoading: function () {
            return e.hasAttribute("data-loading");
          },
          remove: function () {
            clearTimeout(i), e.removeAttribute("disabled", ""), e.removeAttribute("data-loading", ""), t && (t.stop(), t = null);
            for (var n = 0, o = r.length; o > n; n++)
              if (s === r[n]) {
                r.splice(n, 1);
                break;
              }
          }
        };
        return r.push(s), s;
      }
      console.warn("Ladda button target must be defined.");
    }

    function n(e, t) {
      for (; e.parentNode && e.tagName !== t;) e = e.parentNode;
      return t === e.tagName ? e : void 0;
    }

    function i(e) {
      for (var t = ["input", "textarea"], n = [], i = 0; t.length > i; i++)
        for (var o = e.getElementsByTagName(t[i]), r = 0; o.length > r; r++) o[r].hasAttribute("required") && n.push(o[r]);
      return n;
    }

    function o(t) {
      var n, i = t.offsetHeight;
      0 === i && (i = parseFloat(window.getComputedStyle(t).height)), i > 32 && (i *= .8), t.hasAttribute("data-spinner-size") && (i = parseInt(t.getAttribute("data-spinner-size"), 10)), t.hasAttribute("data-spinner-color") && (n = t.getAttribute("data-spinner-color"));
      var o = .2 * i,
        r = .6 * o,
        s = 7 > o ? 2 : 3;
      return new e({
        color: n || "#fff",
        lines: 12,
        radius: o,
        length: r,
        width: s,
        zIndex: "auto",
        top: "auto",
        left: "auto",
        className: ""
      });
    }
    var r = [];
    return {
      bind: function (e, o) {
        o = o || {};
        var r = [];
        "string" == typeof e ? r = function (e) {
          for (var t = [], n = 0; e.length > n; n++) t.push(e[n]);
          return t;
        }(document.querySelectorAll(e)) : "object" == typeof e && "string" == typeof e.nodeName && (r = [e]);
        for (var s = 0, a = r.length; a > s; s++) ! function () {
          var e = r[s];
          if ("function" == typeof e.addEventListener) {
            var a = t(e),
              l = -1;
            e.addEventListener("click", function () {
              var t = !0,
                r = n(e, "FORM");
              if (void 0 !== r)
                for (var s = i(r), c = 0; s.length > c; c++) "" === s[c].value.replace(/^\s+|\s+$/g, "") && (t = !1);
              t && (a.startAfter(1), "number" == typeof o.timeout && (clearTimeout(l), l = setTimeout(a.stop, o.timeout)), "function" == typeof o.callback && o.callback.apply(null, [a]));
            }, !1);
          }
        }();
      },
      create: t,
      stopAll: function () {
        for (var e = 0, t = r.length; t > e; e++) r[e].stop();
      }
    };
  }(n(20));
}, function (e, t, n) {
  "use strict";
  n.r(t);
  var i = n(1),
    o = function (e) {
      e.preventDefault(), $("#modal-tip .modal-content").empty().load($(this).attr("href"), s), $("#modal-tip").modal("show");
    },
    r = function () {
      var e = $("#modal-tip form");
      parseInt(e.find("input#amount").val()) >= 4 && parseInt(e.find("#hidden-booster-id").val()) > 0 ? (e.find("#paypal-button").prop("disabled", !1), e.find("#stripe-button").prop("disabled", !1), e.find("#coinbase-button").prop("disabled", !1)) : (e.find("#paypal-button").prop("disabled", !0), e.find("#stripe-button").prop("disabled", !0), e.find("#coinbase-button").prop("disabled", !0));
    },
    s = function () {
      var e = $("#modal-tip form");
      e.length > 0 && (e.find(".tips-booster-dropdown a").on("click", function () {
        e.find(".tips-booster-dropdown").find("button").html($(this).html()), e.find("#hidden-booster-id").val($(this).attr("data-value")), r();
      }), e.find("input#amount").mask("0000").on("input", function () {
        $(this).parent().tooltip("hide"), r();
      }).blur(function () {
        1 === parseInt($(this).val()) && $(this).parent().tooltip("show");
      }), $(".form-control").on("focus", function () {
        $(this).parent(".input-group").addClass("input-group-focus");
      }).on("blur", function () {
        $(this).parent(".input-group").removeClass("input-group-focus");
      }).on("keydown", function () {
        $("#form_error").hide();
      }), setTimeout(function () {
        $("input#amount").focus();
      }, 500), e.find("#paypal-button").click(i.a.paypalClick), e.find("#stripe-button").click(i.a.stripeClick), e.find("#coinbase-button").click(i.a.coinbaseClick));
    },
    a = {
      enableTipButtons: function () {
        var e = $(".show-modal-tip");
        e.length > 0 && (e.unbind("click"), e.click(o));
      }
    };
  t.default = a;
}, function (e, t, n) {
  n(27), window.$ = window.jQuery = n(0), n(7), n(9), n(10), n(11), n(12), n(13), n(14), window.Phoenix = n(15), n(16), n(17), n(18), n(21), n(24), n(25), n(26), n(5);
  var i = $("form.validate");
  i.length > 0 && i.validate({
    submit: {
      settings: {
        inputContainer: ".input-group",
        errorListClass: "form-tooltip-error"
      }
    }
  }), $(".chart").length && $(".chart").easyPieChart({
    easing: "easeOutBounce",
    barColor: "#18ce0f",
    trackColor: "#e3e3e3",
    onStep: function (e, t, n) {
      $(this.el).find(".percent").text(Math.round(n));
    }
  });
  var o = $("#owl-carousel-reviews");

  function r() {
    $(window).scrollTop() > 30 ? $("nav.navbar-main").addClass("with-background") : $("nav.navbar-main").removeClass("with-background");
  }
  o.length && ("true" == o.attr("data-autoplay") ? o.owlCarousel({
    items: 2,
    itemsDesktop: !1,
    itemsDesktopSmall: [1199, 1],
    itemsTablet: [768, 1],
    itemsMobile: [479, 1],
    autoPlay: !0,
    stopOnHover: !0
  }) : o.owlCarousel({
    items: 2,
    itemsDesktop: !1,
    itemsDesktopSmall: [1199, 1],
    itemsTablet: [768, 1],
    itemsMobile: [479, 1]
  }), $("#owl-carousel-reviews-container").find(".next").click(function () {
    return o.trigger("owl.next"), !1;
  }), $("#owl-carousel-reviews-container").find(".prev").click(function () {
    return o.trigger("owl.prev"), !1;
  })), $(".show-modal-review").click(function (e) {
    e.preventDefault(), $("#modal-review .modal-content").empty().load($(this).attr("href")), $("#modal-review").modal("show");
  }), window.navPriority('[data-nav="priority"]'), $(document).ready(function () {
    $(window).scroll(function () {
      r();
    }), r();
  });
}, function (e, t, n) {
  (function (e) {
    /*!
     * Bootstrap v4.1.3 (https://getbootstrap.com/)
     * Copyright 2011-2018 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
     * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
     */
    ! function (e, i) {
      i(t, n(0));
    }(0, function (t, n) {
      "use strict";

      function i(e, t) {
        for (var n = 0; n < t.length; n++) {
          var i = t[n];
          i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i);
        }
      }

      function o(e, t, n) {
        return t && i(e.prototype, t), n && i(e, n), e;
      }

      function r(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0
        }) : e[t] = n, e;
      }

      function s(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {},
            i = Object.keys(n);
          "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter(function (e) {
            return Object.getOwnPropertyDescriptor(n, e).enumerable;
          }))), i.forEach(function (t) {
            r(e, t, n[t]);
          });
        }
        return e;
      }
      for (var a = function (e) {
        var t = "transitionend";

        function n(e) {
          return {}.toString.call(e).match(/\s([a-z]+)/i)[1].toLowerCase();
        }

        function i(t) {
          var n = this,
            i = !1;
          return e(this).one(o.TRANSITION_END, function () {
            i = !0;
          }), setTimeout(function () {
            i || o.triggerTransitionEnd(n);
          }, t), this;
        }
        var o = {
          TRANSITION_END: "bsTransitionEnd",
          getUID: function (e) {
            do {
              e += ~~(1e6 * Math.random());
            } while (document.getElementById(e));
            return e;
          },
          getSelectorFromElement: function (e) {
            var t = e.getAttribute("data-target");
            t && "#" !== t || (t = e.getAttribute("href") || "");
            try {
              return document.querySelector(t) ? t : null;
            } catch (e) {
              return null;
            }
          },
          getTransitionDurationFromElement: function (t) {
            if (!t) return 0;
            var n = e(t).css("transition-duration");
            return parseFloat(n) ? (n = n.split(",")[0], 1e3 * parseFloat(n)) : 0;
          },
          reflow: function (e) {
            return e.offsetHeight;
          },
          triggerTransitionEnd: function (n) {
            e(n).trigger(t);
          },
          supportsTransitionEnd: function () {
            return Boolean(t);
          },
          isElement: function (e) {
            return (e[0] || e).nodeType;
          },
          typeCheckConfig: function (e, t, i) {
            for (var r in i)
              if (Object.prototype.hasOwnProperty.call(i, r)) {
                var s = i[r],
                  a = t[r],
                  l = a && o.isElement(a) ? "element" : n(a);
                if (!new RegExp(s).test(l)) throw new Error(e.toUpperCase() + ': Option "' + r + '" provided type "' + l + '" but expected type "' + s + '".');
              }
          }
        };
        return e.fn.emulateTransitionEnd = i, e.event.special[o.TRANSITION_END] = {
          bindType: t,
          delegateType: t,
          handle: function (t) {
            if (e(t.target).is(this)) return t.handleObj.handler.apply(this, arguments);
          }
        }, o;
      }(n = n && n.hasOwnProperty("default") ? n.default : n), l = function (e) {
        var t = e.fn.alert,
          n = {
            CLOSE: "close.bs.alert",
            CLOSED: "closed.bs.alert",
            CLICK_DATA_API: "click.bs.alert.data-api"
          },
          i = "alert",
          r = "fade",
          s = "show",
          l = function () {
            function t(e) {
              this._element = e;
            }
            var l = t.prototype;
            return l.close = function (e) {
              var t = this._element;
              e && (t = this._getRootElement(e)), this._triggerCloseEvent(t).isDefaultPrevented() || this._removeElement(t);
            }, l.dispose = function () {
              e.removeData(this._element, "bs.alert"), this._element = null;
            }, l._getRootElement = function (t) {
              var n = a.getSelectorFromElement(t),
                o = !1;
              return n && (o = document.querySelector(n)), o || (o = e(t).closest("." + i)[0]), o;
            }, l._triggerCloseEvent = function (t) {
              var i = e.Event(n.CLOSE);
              return e(t).trigger(i), i;
            }, l._removeElement = function (t) {
              var n = this;
              if (e(t).removeClass(s), e(t).hasClass(r)) {
                var i = a.getTransitionDurationFromElement(t);
                e(t).one(a.TRANSITION_END, function (e) {
                  return n._destroyElement(t, e);
                }).emulateTransitionEnd(i);
              } else this._destroyElement(t);
            }, l._destroyElement = function (t) {
              e(t).detach().trigger(n.CLOSED).remove();
            }, t._jQueryInterface = function (n) {
              return this.each(function () {
                var i = e(this),
                  o = i.data("bs.alert");
                o || (o = new t(this), i.data("bs.alert", o)), "close" === n && o[n](this);
              });
            }, t._handleDismiss = function (e) {
              return function (t) {
                t && t.preventDefault(), e.close(this);
              };
            }, o(t, null, [{
              key: "VERSION",
              get: function () {
                return "4.1.3";
              }
            }]), t;
          }();
        return e(document).on(n.CLICK_DATA_API, '[data-dismiss="alert"]', l._handleDismiss(new l)), e.fn.alert = l._jQueryInterface, e.fn.alert.Constructor = l, e.fn.alert.noConflict = function () {
          return e.fn.alert = t, l._jQueryInterface;
        }, l;
      }(n), c = function (e) {
        var t = "button",
          n = e.fn[t],
          i = "active",
          r = "btn",
          s = "focus",
          a = '[data-toggle^="button"]',
          l = '[data-toggle="buttons"]',
          c = "input",
          u = ".active",
          d = ".btn",
          p = {
            CLICK_DATA_API: "click.bs.button.data-api",
            FOCUS_BLUR_DATA_API: "focus.bs.button.data-api blur.bs.button.data-api"
          },
          h = function () {
            function t(e) {
              this._element = e;
            }
            var n = t.prototype;
            return n.toggle = function () {
              var t = !0,
                n = !0,
                o = e(this._element).closest(l)[0];
              if (o) {
                var r = this._element.querySelector(c);
                if (r) {
                  if ("radio" === r.type)
                    if (r.checked && this._element.classList.contains(i)) t = !1;
                    else {
                      var s = o.querySelector(u);
                      s && e(s).removeClass(i);
                    } if (t) {
                      if (r.hasAttribute("disabled") || o.hasAttribute("disabled") || r.classList.contains("disabled") || o.classList.contains("disabled")) return;
                      r.checked = !this._element.classList.contains(i), e(r).trigger("change");
                    }
                  r.focus(), n = !1;
                }
              }
              n && this._element.setAttribute("aria-pressed", !this._element.classList.contains(i)), t && e(this._element).toggleClass(i);
            }, n.dispose = function () {
              e.removeData(this._element, "bs.button"), this._element = null;
            }, t._jQueryInterface = function (n) {
              return this.each(function () {
                var i = e(this).data("bs.button");
                i || (i = new t(this), e(this).data("bs.button", i)), "toggle" === n && i[n]();
              });
            }, o(t, null, [{
              key: "VERSION",
              get: function () {
                return "4.1.3";
              }
            }]), t;
          }();
        return e(document).on(p.CLICK_DATA_API, a, function (t) {
          t.preventDefault();
          var n = t.target;
          e(n).hasClass(r) || (n = e(n).closest(d)), h._jQueryInterface.call(e(n), "toggle");
        }).on(p.FOCUS_BLUR_DATA_API, a, function (t) {
          var n = e(t.target).closest(d)[0];
          e(n).toggleClass(s, /^focus(in)?$/.test(t.type));
        }), e.fn[t] = h._jQueryInterface, e.fn[t].Constructor = h, e.fn[t].noConflict = function () {
          return e.fn[t] = n, h._jQueryInterface;
        }, h;
      }(n), u = function (e) {
        var t = "carousel",
          n = "bs.carousel",
          i = "." + n,
          r = e.fn[t],
          l = {
            interval: 5e3,
            keyboard: !0,
            slide: !1,
            pause: "hover",
            wrap: !0
          },
          c = {
            interval: "(number|boolean)",
            keyboard: "boolean",
            slide: "(boolean|string)",
            pause: "(string|boolean)",
            wrap: "boolean"
          },
          u = "next",
          d = "prev",
          p = "left",
          h = "right",
          f = {
            SLIDE: "slide" + i,
            SLID: "slid" + i,
            KEYDOWN: "keydown" + i,
            MOUSEENTER: "mouseenter" + i,
            MOUSELEAVE: "mouseleave" + i,
            TOUCHEND: "touchend" + i,
            LOAD_DATA_API: "load.bs.carousel.data-api",
            CLICK_DATA_API: "click.bs.carousel.data-api"
          },
          m = "carousel",
          g = "active",
          v = "slide",
          b = "carousel-item-right",
          y = "carousel-item-left",
          w = "carousel-item-next",
          C = "carousel-item-prev",
          x = {
            ACTIVE: ".active",
            ACTIVE_ITEM: ".active.carousel-item",
            ITEM: ".carousel-item",
            NEXT_PREV: ".carousel-item-next, .carousel-item-prev",
            INDICATORS: ".carousel-indicators",
            DATA_SLIDE: "[data-slide], [data-slide-to]",
            DATA_RIDE: '[data-ride="carousel"]'
          },
          _ = function () {
            function r(t, n) {
              this._items = null, this._interval = null, this._activeElement = null, this._isPaused = !1, this._isSliding = !1, this.touchTimeout = null, this._config = this._getConfig(n), this._element = e(t)[0], this._indicatorsElement = this._element.querySelector(x.INDICATORS), this._addEventListeners();
            }
            var _ = r.prototype;
            return _.next = function () {
              this._isSliding || this._slide(u);
            }, _.nextWhenVisible = function () {
              !document.hidden && e(this._element).is(":visible") && "hidden" !== e(this._element).css("visibility") && this.next();
            }, _.prev = function () {
              this._isSliding || this._slide(d);
            }, _.pause = function (e) {
              e || (this._isPaused = !0), this._element.querySelector(x.NEXT_PREV) && (a.triggerTransitionEnd(this._element), this.cycle(!0)), clearInterval(this._interval), this._interval = null;
            }, _.cycle = function (e) {
              e || (this._isPaused = !1), this._interval && (clearInterval(this._interval), this._interval = null), this._config.interval && !this._isPaused && (this._interval = setInterval((document.visibilityState ? this.nextWhenVisible : this.next).bind(this), this._config.interval));
            }, _.to = function (t) {
              var n = this;
              this._activeElement = this._element.querySelector(x.ACTIVE_ITEM);
              var i = this._getItemIndex(this._activeElement);
              if (!(t > this._items.length - 1 || t < 0))
                if (this._isSliding) e(this._element).one(f.SLID, function () {
                  return n.to(t);
                });
                else {
                  if (i === t) return this.pause(), void this.cycle();
                  var o = t > i ? u : d;
                  this._slide(o, this._items[t]);
                }
            }, _.dispose = function () {
              e(this._element).off(i), e.removeData(this._element, n), this._items = null, this._config = null, this._element = null, this._interval = null, this._isPaused = null, this._isSliding = null, this._activeElement = null, this._indicatorsElement = null;
            }, _._getConfig = function (e) {
              return e = s({}, l, e), a.typeCheckConfig(t, e, c), e;
            }, _._addEventListeners = function () {
              var t = this;
              this._config.keyboard && e(this._element).on(f.KEYDOWN, function (e) {
                return t._keydown(e);
              }), "hover" === this._config.pause && (e(this._element).on(f.MOUSEENTER, function (e) {
                return t.pause(e);
              }).on(f.MOUSELEAVE, function (e) {
                return t.cycle(e);
              }), "ontouchstart" in document.documentElement && e(this._element).on(f.TOUCHEND, function () {
                t.pause(), t.touchTimeout && clearTimeout(t.touchTimeout), t.touchTimeout = setTimeout(function (e) {
                  return t.cycle(e);
                }, 500 + t._config.interval);
              }));
            }, _._keydown = function (e) {
              if (!/input|textarea/i.test(e.target.tagName)) switch (e.which) {
                case 37:
                  e.preventDefault(), this.prev();
                  break;
                case 39:
                  e.preventDefault(), this.next();
              }
            }, _._getItemIndex = function (e) {
              return this._items = e && e.parentNode ? [].slice.call(e.parentNode.querySelectorAll(x.ITEM)) : [], this._items.indexOf(e);
            }, _._getItemByDirection = function (e, t) {
              var n = e === u,
                i = e === d,
                o = this._getItemIndex(t),
                r = this._items.length - 1;
              if ((i && 0 === o || n && o === r) && !this._config.wrap) return t;
              var s = (o + (e === d ? -1 : 1)) % this._items.length;
              return -1 === s ? this._items[this._items.length - 1] : this._items[s];
            }, _._triggerSlideEvent = function (t, n) {
              var i = this._getItemIndex(t),
                o = this._getItemIndex(this._element.querySelector(x.ACTIVE_ITEM)),
                r = e.Event(f.SLIDE, {
                  relatedTarget: t,
                  direction: n,
                  from: o,
                  to: i
                });
              return e(this._element).trigger(r), r;
            }, _._setActiveIndicatorElement = function (t) {
              if (this._indicatorsElement) {
                var n = [].slice.call(this._indicatorsElement.querySelectorAll(x.ACTIVE));
                e(n).removeClass(g);
                var i = this._indicatorsElement.children[this._getItemIndex(t)];
                i && e(i).addClass(g);
              }
            }, _._slide = function (t, n) {
              var i, o, r, s = this,
                l = this._element.querySelector(x.ACTIVE_ITEM),
                c = this._getItemIndex(l),
                d = n || l && this._getItemByDirection(t, l),
                m = this._getItemIndex(d),
                _ = Boolean(this._interval);
              if (t === u ? (i = y, o = w, r = p) : (i = b, o = C, r = h), d && e(d).hasClass(g)) this._isSliding = !1;
              else if (!this._triggerSlideEvent(d, r).isDefaultPrevented() && l && d) {
                this._isSliding = !0, _ && this.pause(), this._setActiveIndicatorElement(d);
                var $ = e.Event(f.SLID, {
                  relatedTarget: d,
                  direction: r,
                  from: c,
                  to: m
                });
                if (e(this._element).hasClass(v)) {
                  e(d).addClass(o), a.reflow(d), e(l).addClass(i), e(d).addClass(i);
                  var k = a.getTransitionDurationFromElement(l);
                  e(l).one(a.TRANSITION_END, function () {
                    e(d).removeClass(i + " " + o).addClass(g), e(l).removeClass(g + " " + o + " " + i), s._isSliding = !1, setTimeout(function () {
                      return e(s._element).trigger($);
                    }, 0);
                  }).emulateTransitionEnd(k);
                } else e(l).removeClass(g), e(d).addClass(g), this._isSliding = !1, e(this._element).trigger($);
                _ && this.cycle();
              }
            }, r._jQueryInterface = function (t) {
              return this.each(function () {
                var i = e(this).data(n),
                  o = s({}, l, e(this).data());
                "object" == typeof t && (o = s({}, o, t));
                var a = "string" == typeof t ? t : o.slide;
                if (i || (i = new r(this, o), e(this).data(n, i)), "number" == typeof t) i.to(t);
                else if ("string" == typeof a) {
                  if (void 0 === i[a]) throw new TypeError('No method named "' + a + '"');
                  i[a]();
                } else o.interval && (i.pause(), i.cycle());
              });
            }, r._dataApiClickHandler = function (t) {
              var i = a.getSelectorFromElement(this);
              if (i) {
                var o = e(i)[0];
                if (o && e(o).hasClass(m)) {
                  var l = s({}, e(o).data(), e(this).data()),
                    c = this.getAttribute("data-slide-to");
                  c && (l.interval = !1), r._jQueryInterface.call(e(o), l), c && e(o).data(n).to(c), t.preventDefault();
                }
              }
            }, o(r, null, [{
              key: "VERSION",
              get: function () {
                return "4.1.3";
              }
            }, {
              key: "Default",
              get: function () {
                return l;
              }
            }]), r;
          }();
        return e(document).on(f.CLICK_DATA_API, x.DATA_SLIDE, _._dataApiClickHandler), e(window).on(f.LOAD_DATA_API, function () {
          for (var t = [].slice.call(document.querySelectorAll(x.DATA_RIDE)), n = 0, i = t.length; n < i; n++) {
            var o = e(t[n]);
            _._jQueryInterface.call(o, o.data());
          }
        }), e.fn[t] = _._jQueryInterface, e.fn[t].Constructor = _, e.fn[t].noConflict = function () {
          return e.fn[t] = r, _._jQueryInterface;
        }, _;
      }(n), d = function (e) {
        var t = "collapse",
          n = "bs.collapse",
          i = e.fn[t],
          r = {
            toggle: !0,
            parent: ""
          },
          l = {
            toggle: "boolean",
            parent: "(string|element)"
          },
          c = {
            SHOW: "show.bs.collapse",
            SHOWN: "shown.bs.collapse",
            HIDE: "hide.bs.collapse",
            HIDDEN: "hidden.bs.collapse",
            CLICK_DATA_API: "click.bs.collapse.data-api"
          },
          u = "show",
          d = "collapse",
          p = "collapsing",
          h = "collapsed",
          f = "width",
          m = "height",
          g = {
            ACTIVES: ".show, .collapsing",
            DATA_TOGGLE: '[data-toggle="collapse"]'
          },
          v = function () {
            function i(t, n) {
              this._isTransitioning = !1, this._element = t, this._config = this._getConfig(n), this._triggerArray = e.makeArray(document.querySelectorAll('[data-toggle="collapse"][href="#' + t.id + '"],[data-toggle="collapse"][data-target="#' + t.id + '"]'));
              for (var i = [].slice.call(document.querySelectorAll(g.DATA_TOGGLE)), o = 0, r = i.length; o < r; o++) {
                var s = i[o],
                  l = a.getSelectorFromElement(s),
                  c = [].slice.call(document.querySelectorAll(l)).filter(function (e) {
                    return e === t;
                  });
                null !== l && c.length > 0 && (this._selector = l, this._triggerArray.push(s));
              }
              this._parent = this._config.parent ? this._getParent() : null, this._config.parent || this._addAriaAndCollapsedClass(this._element, this._triggerArray), this._config.toggle && this.toggle();
            }
            var v = i.prototype;
            return v.toggle = function () {
              e(this._element).hasClass(u) ? this.hide() : this.show();
            }, v.show = function () {
              var t, o, r = this;
              if (!this._isTransitioning && !e(this._element).hasClass(u) && (this._parent && 0 === (t = [].slice.call(this._parent.querySelectorAll(g.ACTIVES)).filter(function (e) {
                return e.getAttribute("data-parent") === r._config.parent;
              })).length && (t = null), !(t && (o = e(t).not(this._selector).data(n)) && o._isTransitioning))) {
                var s = e.Event(c.SHOW);
                if (e(this._element).trigger(s), !s.isDefaultPrevented()) {
                  t && (i._jQueryInterface.call(e(t).not(this._selector), "hide"), o || e(t).data(n, null));
                  var l = this._getDimension();
                  e(this._element).removeClass(d).addClass(p), this._element.style[l] = 0, this._triggerArray.length && e(this._triggerArray).removeClass(h).attr("aria-expanded", !0), this.setTransitioning(!0);
                  var f = "scroll" + (l[0].toUpperCase() + l.slice(1)),
                    m = a.getTransitionDurationFromElement(this._element);
                  e(this._element).one(a.TRANSITION_END, function () {
                    e(r._element).removeClass(p).addClass(d).addClass(u), r._element.style[l] = "", r.setTransitioning(!1), e(r._element).trigger(c.SHOWN);
                  }).emulateTransitionEnd(m), this._element.style[l] = this._element[f] + "px";
                }
              }
            }, v.hide = function () {
              var t = this;
              if (!this._isTransitioning && e(this._element).hasClass(u)) {
                var n = e.Event(c.HIDE);
                if (e(this._element).trigger(n), !n.isDefaultPrevented()) {
                  var i = this._getDimension();
                  this._element.style[i] = this._element.getBoundingClientRect()[i] + "px", a.reflow(this._element), e(this._element).addClass(p).removeClass(d).removeClass(u);
                  var o = this._triggerArray.length;
                  if (o > 0)
                    for (var r = 0; r < o; r++) {
                      var s = this._triggerArray[r],
                        l = a.getSelectorFromElement(s);
                      if (null !== l) e([].slice.call(document.querySelectorAll(l))).hasClass(u) || e(s).addClass(h).attr("aria-expanded", !1);
                    }
                  this.setTransitioning(!0);
                  this._element.style[i] = "";
                  var f = a.getTransitionDurationFromElement(this._element);
                  e(this._element).one(a.TRANSITION_END, function () {
                    t.setTransitioning(!1), e(t._element).removeClass(p).addClass(d).trigger(c.HIDDEN);
                  }).emulateTransitionEnd(f);
                }
              }
            }, v.setTransitioning = function (e) {
              this._isTransitioning = e;
            }, v.dispose = function () {
              e.removeData(this._element, n), this._config = null, this._parent = null, this._element = null, this._triggerArray = null, this._isTransitioning = null;
            }, v._getConfig = function (e) {
              return (e = s({}, r, e)).toggle = Boolean(e.toggle), a.typeCheckConfig(t, e, l), e;
            }, v._getDimension = function () {
              return e(this._element).hasClass(f) ? f : m;
            }, v._getParent = function () {
              var t = this,
                n = null;
              a.isElement(this._config.parent) ? (n = this._config.parent, void 0 !== this._config.parent.jquery && (n = this._config.parent[0])) : n = document.querySelector(this._config.parent);
              var o = '[data-toggle="collapse"][data-parent="' + this._config.parent + '"]',
                r = [].slice.call(n.querySelectorAll(o));
              return e(r).each(function (e, n) {
                t._addAriaAndCollapsedClass(i._getTargetFromElement(n), [n]);
              }), n;
            }, v._addAriaAndCollapsedClass = function (t, n) {
              if (t) {
                var i = e(t).hasClass(u);
                n.length && e(n).toggleClass(h, !i).attr("aria-expanded", i);
              }
            }, i._getTargetFromElement = function (e) {
              var t = a.getSelectorFromElement(e);
              return t ? document.querySelector(t) : null;
            }, i._jQueryInterface = function (t) {
              return this.each(function () {
                var o = e(this),
                  a = o.data(n),
                  l = s({}, r, o.data(), "object" == typeof t && t ? t : {});
                if (!a && l.toggle && /show|hide/.test(t) && (l.toggle = !1), a || (a = new i(this, l), o.data(n, a)), "string" == typeof t) {
                  if (void 0 === a[t]) throw new TypeError('No method named "' + t + '"');
                  a[t]();
                }
              });
            }, o(i, null, [{
              key: "VERSION",
              get: function () {
                return "4.1.3";
              }
            }, {
              key: "Default",
              get: function () {
                return r;
              }
            }]), i;
          }();
        return e(document).on(c.CLICK_DATA_API, g.DATA_TOGGLE, function (t) {
          "A" === t.currentTarget.tagName && t.preventDefault();
          var i = e(this),
            o = a.getSelectorFromElement(this),
            r = [].slice.call(document.querySelectorAll(o));
          e(r).each(function () {
            var t = e(this),
              o = t.data(n) ? "toggle" : i.data();
            v._jQueryInterface.call(t, o);
          });
        }), e.fn[t] = v._jQueryInterface, e.fn[t].Constructor = v, e.fn[t].noConflict = function () {
          return e.fn[t] = i, v._jQueryInterface;
        }, v;
      }(n), p = "undefined" != typeof window && "undefined" != typeof document, h = ["Edge", "Trident", "Firefox"], f = 0, m = 0; m < h.length; m += 1)
        if (p && navigator.userAgent.indexOf(h[m]) >= 0) {
          f = 1;
          break;
        } var g = p && window.Promise ? function (e) {
          var t = !1;
          return function () {
            t || (t = !0, window.Promise.resolve().then(function () {
              t = !1, e();
            }));
          };
        } : function (e) {
          var t = !1;
          return function () {
            t || (t = !0, setTimeout(function () {
              t = !1, e();
            }, f));
          };
        };

      function v(e) {
        return e && "[object Function]" === {}.toString.call(e);
      }

      function b(e, t) {
        if (1 !== e.nodeType) return [];
        var n = getComputedStyle(e, null);
        return t ? n[t] : n;
      }

      function y(e) {
        return "HTML" === e.nodeName ? e : e.parentNode || e.host;
      }

      function w(e) {
        if (!e) return document.body;
        switch (e.nodeName) {
          case "HTML":
          case "BODY":
            return e.ownerDocument.body;
          case "#document":
            return e.body;
        }
        var t = b(e),
          n = t.overflow,
          i = t.overflowX,
          o = t.overflowY;
        return /(auto|scroll|overlay)/.test(n + o + i) ? e : w(y(e));
      }
      var C = p && !(!window.MSInputMethodContext || !document.documentMode),
        x = p && /MSIE 10/.test(navigator.userAgent);

      function _(e) {
        return 11 === e ? C : 10 === e ? x : C || x;
      }

      function $(e) {
        if (!e) return document.documentElement;
        for (var t = _(10) ? document.body : null, n = e.offsetParent; n === t && e.nextElementSibling;) n = (e = e.nextElementSibling).offsetParent;
        var i = n && n.nodeName;
        return i && "BODY" !== i && "HTML" !== i ? -1 !== ["TD", "TABLE"].indexOf(n.nodeName) && "static" === b(n, "position") ? $(n) : n : e ? e.ownerDocument.documentElement : document.documentElement;
      }

      function k(e) {
        return null !== e.parentNode ? k(e.parentNode) : e;
      }

      function T(e, t) {
        if (!(e && e.nodeType && t && t.nodeType)) return document.documentElement;
        var n = e.compareDocumentPosition(t) & Node.DOCUMENT_POSITION_FOLLOWING,
          i = n ? e : t,
          o = n ? t : e,
          r = document.createRange();
        r.setStart(i, 0), r.setEnd(o, 0);
        var s = r.commonAncestorContainer;
        if (e !== s && t !== s || i.contains(o)) return function (e) {
          var t = e.nodeName;
          return "BODY" !== t && ("HTML" === t || $(e.firstElementChild) === e);
        }(s) ? s : $(s);
        var a = k(e);
        return a.host ? T(a.host, t) : T(e, k(t).host);
      }

      function E(e) {
        var t = "top" === (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "top") ? "scrollTop" : "scrollLeft",
          n = e.nodeName;
        if ("BODY" === n || "HTML" === n) {
          var i = e.ownerDocument.documentElement;
          return (e.ownerDocument.scrollingElement || i)[t];
        }
        return e[t];
      }

      function S(e, t) {
        var n = "x" === t ? "Left" : "Top",
          i = "Left" === n ? "Right" : "Bottom";
        return parseFloat(e["border" + n + "Width"], 10) + parseFloat(e["border" + i + "Width"], 10);
      }

      function D(e, t, n, i) {
        return Math.max(t["offset" + e], t["scroll" + e], n["client" + e], n["offset" + e], n["scroll" + e], _(10) ? n["offset" + e] + i["margin" + ("Height" === e ? "Top" : "Left")] + i["margin" + ("Height" === e ? "Bottom" : "Right")] : 0);
      }

      function I() {
        var e = document.body,
          t = document.documentElement,
          n = _(10) && getComputedStyle(t);
        return {
          height: D("Height", e, t, n),
          width: D("Width", e, t, n)
        };
      }
      var A = function (e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
      },
        O = function () {
          function e(e, t) {
            for (var n = 0; n < t.length; n++) {
              var i = t[n];
              i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i);
            }
          }
          return function (t, n, i) {
            return n && e(t.prototype, n), i && e(t, i), t;
          };
        }(),
        N = function (e, t, n) {
          return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
          }) : e[t] = n, e;
        },
        P = Object.assign || function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i]);
          }
          return e;
        };

      function j(e) {
        return P({}, e, {
          right: e.left + e.width,
          bottom: e.top + e.height
        });
      }

      function L(e) {
        var t = {};
        try {
          if (_(10)) {
            t = e.getBoundingClientRect();
            var n = E(e, "top"),
              i = E(e, "left");
            t.top += n, t.left += i, t.bottom += n, t.right += i;
          } else t = e.getBoundingClientRect();
        } catch (e) { }
        var o = {
          left: t.left,
          top: t.top,
          width: t.right - t.left,
          height: t.bottom - t.top
        },
          r = "HTML" === e.nodeName ? I() : {},
          s = r.width || e.clientWidth || o.right - o.left,
          a = r.height || e.clientHeight || o.bottom - o.top,
          l = e.offsetWidth - s,
          c = e.offsetHeight - a;
        if (l || c) {
          var u = b(e);
          l -= S(u, "x"), c -= S(u, "y"), o.width -= l, o.height -= c;
        }
        return j(o);
      }

      function M(e, t) {
        var n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          i = _(10),
          o = "HTML" === t.nodeName,
          r = L(e),
          s = L(t),
          a = w(e),
          l = b(t),
          c = parseFloat(l.borderTopWidth, 10),
          u = parseFloat(l.borderLeftWidth, 10);
        n && "HTML" === t.nodeName && (s.top = Math.max(s.top, 0), s.left = Math.max(s.left, 0));
        var d = j({
          top: r.top - s.top - c,
          left: r.left - s.left - u,
          width: r.width,
          height: r.height
        });
        if (d.marginTop = 0, d.marginLeft = 0, !i && o) {
          var p = parseFloat(l.marginTop, 10),
            h = parseFloat(l.marginLeft, 10);
          d.top -= c - p, d.bottom -= c - p, d.left -= u - h, d.right -= u - h, d.marginTop = p, d.marginLeft = h;
        }
        return (i && !n ? t.contains(a) : t === a && "BODY" !== a.nodeName) && (d = function (e, t) {
          var n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
            i = E(t, "top"),
            o = E(t, "left"),
            r = n ? -1 : 1;
          return e.top += i * r, e.bottom += i * r, e.left += o * r, e.right += o * r, e;
        }(d, t)), d;
      }

      function R(e) {
        if (!e || !e.parentElement || _()) return document.documentElement;
        for (var t = e.parentElement; t && "none" === b(t, "transform");) t = t.parentElement;
        return t || document.documentElement;
      }

      function H(e, t, n, i) {
        var o = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
          r = {
            top: 0,
            left: 0
          },
          s = o ? R(e) : T(e, t);
        if ("viewport" === i) r = function (e) {
          var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            n = e.ownerDocument.documentElement,
            i = M(e, n),
            o = Math.max(n.clientWidth, window.innerWidth || 0),
            r = Math.max(n.clientHeight, window.innerHeight || 0),
            s = t ? 0 : E(n),
            a = t ? 0 : E(n, "left");
          return j({
            top: s - i.top + i.marginTop,
            left: a - i.left + i.marginLeft,
            width: o,
            height: r
          });
        }(s, o);
        else {
          var a = void 0;
          "scrollParent" === i ? "BODY" === (a = w(y(t))).nodeName && (a = e.ownerDocument.documentElement) : a = "window" === i ? e.ownerDocument.documentElement : i;
          var l = M(a, s, o);
          if ("HTML" !== a.nodeName || function e(t) {
            var n = t.nodeName;
            return "BODY" !== n && "HTML" !== n && ("fixed" === b(t, "position") || e(y(t)));
          }(s)) r = l;
          else {
            var c = I(),
              u = c.height,
              d = c.width;
            r.top += l.top - l.marginTop, r.bottom = u + l.top, r.left += l.left - l.marginLeft, r.right = d + l.left;
          }
        }
        return r.left += n, r.top += n, r.right -= n, r.bottom -= n, r;
      }

      function W(e, t, n, i, o) {
        var r = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0;
        if (-1 === e.indexOf("auto")) return e;
        var s = H(n, i, r, o),
          a = {
            top: {
              width: s.width,
              height: t.top - s.top
            },
            right: {
              width: s.right - t.right,
              height: s.height
            },
            bottom: {
              width: s.width,
              height: s.bottom - t.bottom
            },
            left: {
              width: t.left - s.left,
              height: s.height
            }
          },
          l = Object.keys(a).map(function (e) {
            return P({
              key: e
            }, a[e], {
              area: function (e) {
                return e.width * e.height;
              }(a[e])
            });
          }).sort(function (e, t) {
            return t.area - e.area;
          }),
          c = l.filter(function (e) {
            var t = e.width,
              i = e.height;
            return t >= n.clientWidth && i >= n.clientHeight;
          }),
          u = c.length > 0 ? c[0].key : l[0].key,
          d = e.split("-")[1];
        return u + (d ? "-" + d : "");
      }

      function F(e, t, n) {
        var i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        return M(n, i ? R(t) : T(t, n), i);
      }

      function q(e) {
        var t = getComputedStyle(e),
          n = parseFloat(t.marginTop) + parseFloat(t.marginBottom),
          i = parseFloat(t.marginLeft) + parseFloat(t.marginRight);
        return {
          width: e.offsetWidth + i,
          height: e.offsetHeight + n
        };
      }

      function U(e) {
        var t = {
          left: "right",
          right: "left",
          bottom: "top",
          top: "bottom"
        };
        return e.replace(/left|right|bottom|top/g, function (e) {
          return t[e];
        });
      }

      function B(e, t, n) {
        n = n.split("-")[0];
        var i = q(e),
          o = {
            width: i.width,
            height: i.height
          },
          r = -1 !== ["right", "left"].indexOf(n),
          s = r ? "top" : "left",
          a = r ? "left" : "top",
          l = r ? "height" : "width",
          c = r ? "width" : "height";
        return o[s] = t[s] + t[l] / 2 - i[l] / 2, o[a] = n === a ? t[a] - i[c] : t[U(a)], o;
      }

      function z(e, t) {
        return Array.prototype.find ? e.find(t) : e.filter(t)[0];
      }

      function V(e, t, n) {
        return (void 0 === n ? e : e.slice(0, function (e, t, n) {
          if (Array.prototype.findIndex) return e.findIndex(function (e) {
            return e[t] === n;
          });
          var i = z(e, function (e) {
            return e[t] === n;
          });
          return e.indexOf(i);
        }(e, "name", n))).forEach(function (e) {
          e.function && console.warn("`modifier.function` is deprecated, use `modifier.fn`!");
          var n = e.function || e.fn;
          e.enabled && v(n) && (t.offsets.popper = j(t.offsets.popper), t.offsets.reference = j(t.offsets.reference), t = n(t, e));
        }), t;
      }

      function G(e, t) {
        return e.some(function (e) {
          var n = e.name;
          return e.enabled && n === t;
        });
      }

      function K(e) {
        for (var t = [!1, "ms", "Webkit", "Moz", "O"], n = e.charAt(0).toUpperCase() + e.slice(1), i = 0; i < t.length; i++) {
          var o = t[i],
            r = o ? "" + o + n : e;
          if (void 0 !== document.body.style[r]) return r;
        }
        return null;
      }

      function Y(e) {
        var t = e.ownerDocument;
        return t ? t.defaultView : window;
      }

      function Q(e, t, n, i) {
        n.updateBound = i, Y(e).addEventListener("resize", n.updateBound, {
          passive: !0
        });
        var o = w(e);
        return function e(t, n, i, o) {
          var r = "BODY" === t.nodeName,
            s = r ? t.ownerDocument.defaultView : t;
          s.addEventListener(n, i, {
            passive: !0
          }), r || e(w(s.parentNode), n, i, o), o.push(s);
        }(o, "scroll", n.updateBound, n.scrollParents), n.scrollElement = o, n.eventsEnabled = !0, n;
      }

      function X() {
        this.state.eventsEnabled && (cancelAnimationFrame(this.scheduleUpdate), this.state = function (e, t) {
          return Y(e).removeEventListener("resize", t.updateBound), t.scrollParents.forEach(function (e) {
            e.removeEventListener("scroll", t.updateBound);
          }), t.updateBound = null, t.scrollParents = [], t.scrollElement = null, t.eventsEnabled = !1, t;
        }(this.reference, this.state));
      }

      function J(e) {
        return "" !== e && !isNaN(parseFloat(e)) && isFinite(e);
      }

      function Z(e, t) {
        Object.keys(t).forEach(function (n) {
          var i = ""; - 1 !== ["width", "height", "top", "right", "bottom", "left"].indexOf(n) && J(t[n]) && (i = "px"), e.style[n] = t[n] + i;
        });
      }

      function ee(e, t, n) {
        var i = z(e, function (e) {
          return e.name === t;
        }),
          o = !!i && e.some(function (e) {
            return e.name === n && e.enabled && e.order < i.order;
          });
        if (!o) {
          var r = "`" + t + "`",
            s = "`" + n + "`";
          console.warn(s + " modifier is required by " + r + " modifier in order to work, be sure to include it before " + r + "!");
        }
        return o;
      }
      var te = ["auto-start", "auto", "auto-end", "top-start", "top", "top-end", "right-start", "right", "right-end", "bottom-end", "bottom", "bottom-start", "left-end", "left", "left-start"],
        ne = te.slice(3);

      function ie(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          n = ne.indexOf(e),
          i = ne.slice(n + 1).concat(ne.slice(0, n));
        return t ? i.reverse() : i;
      }
      var oe = {
        FLIP: "flip",
        CLOCKWISE: "clockwise",
        COUNTERCLOCKWISE: "counterclockwise"
      };

      function re(e, t, n, i) {
        var o = [0, 0],
          r = -1 !== ["right", "left"].indexOf(i),
          s = e.split(/(\+|\-)/).map(function (e) {
            return e.trim();
          }),
          a = s.indexOf(z(s, function (e) {
            return -1 !== e.search(/,|\s/);
          }));
        s[a] && -1 === s[a].indexOf(",") && console.warn("Offsets separated by white space(s) are deprecated, use a comma (,) instead.");
        var l = /\s*,\s*|\s+/,
          c = -1 !== a ? [s.slice(0, a).concat([s[a].split(l)[0]]), [s[a].split(l)[1]].concat(s.slice(a + 1))] : [s];
        return (c = c.map(function (e, i) {
          var o = (1 === i ? !r : r) ? "height" : "width",
            s = !1;
          return e.reduce(function (e, t) {
            return "" === e[e.length - 1] && -1 !== ["+", "-"].indexOf(t) ? (e[e.length - 1] = t, s = !0, e) : s ? (e[e.length - 1] += t, s = !1, e) : e.concat(t);
          }, []).map(function (e) {
            return function (e, t, n, i) {
              var o = e.match(/((?:\-|\+)?\d*\.?\d*)(.*)/),
                r = +o[1],
                s = o[2];
              if (!r) return e;
              if (0 === s.indexOf("%")) {
                var a = void 0;
                switch (s) {
                  case "%p":
                    a = n;
                    break;
                  case "%":
                  case "%r":
                  default:
                    a = i;
                }
                return j(a)[t] / 100 * r;
              }
              if ("vh" === s || "vw" === s) return ("vh" === s ? Math.max(document.documentElement.clientHeight, window.innerHeight || 0) : Math.max(document.documentElement.clientWidth, window.innerWidth || 0)) / 100 * r;
              return r;
            }(e, o, t, n);
          });
        })).forEach(function (e, t) {
          e.forEach(function (n, i) {
            J(n) && (o[t] += n * ("-" === e[i - 1] ? -1 : 1));
          });
        }), o;
      }
      var se = {
        placement: "bottom",
        positionFixed: !1,
        eventsEnabled: !0,
        removeOnDestroy: !1,
        onCreate: function () { },
        onUpdate: function () { },
        modifiers: {
          shift: {
            order: 100,
            enabled: !0,
            fn: function (e) {
              var t = e.placement,
                n = t.split("-")[0],
                i = t.split("-")[1];
              if (i) {
                var o = e.offsets,
                  r = o.reference,
                  s = o.popper,
                  a = -1 !== ["bottom", "top"].indexOf(n),
                  l = a ? "left" : "top",
                  c = a ? "width" : "height",
                  u = {
                    start: N({}, l, r[l]),
                    end: N({}, l, r[l] + r[c] - s[c])
                  };
                e.offsets.popper = P({}, s, u[i]);
              }
              return e;
            }
          },
          offset: {
            order: 200,
            enabled: !0,
            fn: function (e, t) {
              var n = t.offset,
                i = e.placement,
                o = e.offsets,
                r = o.popper,
                s = o.reference,
                a = i.split("-")[0],
                l = void 0;
              return l = J(+n) ? [+n, 0] : re(n, r, s, a), "left" === a ? (r.top += l[0], r.left -= l[1]) : "right" === a ? (r.top += l[0], r.left += l[1]) : "top" === a ? (r.left += l[0], r.top -= l[1]) : "bottom" === a && (r.left += l[0], r.top += l[1]), e.popper = r, e;
            },
            offset: 0
          },
          preventOverflow: {
            order: 300,
            enabled: !0,
            fn: function (e, t) {
              var n = t.boundariesElement || $(e.instance.popper);
              e.instance.reference === n && (n = $(n));
              var i = K("transform"),
                o = e.instance.popper.style,
                r = o.top,
                s = o.left,
                a = o[i];
              o.top = "", o.left = "", o[i] = "";
              var l = H(e.instance.popper, e.instance.reference, t.padding, n, e.positionFixed);
              o.top = r, o.left = s, o[i] = a, t.boundaries = l;
              var c = t.priority,
                u = e.offsets.popper,
                d = {
                  primary: function (e) {
                    var n = u[e];
                    return u[e] < l[e] && !t.escapeWithReference && (n = Math.max(u[e], l[e])), N({}, e, n);
                  },
                  secondary: function (e) {
                    var n = "right" === e ? "left" : "top",
                      i = u[n];
                    return u[e] > l[e] && !t.escapeWithReference && (i = Math.min(u[n], l[e] - ("right" === e ? u.width : u.height))), N({}, n, i);
                  }
                };
              return c.forEach(function (e) {
                var t = -1 !== ["left", "top"].indexOf(e) ? "primary" : "secondary";
                u = P({}, u, d[t](e));
              }), e.offsets.popper = u, e;
            },
            priority: ["left", "right", "top", "bottom"],
            padding: 5,
            boundariesElement: "scrollParent"
          },
          keepTogether: {
            order: 400,
            enabled: !0,
            fn: function (e) {
              var t = e.offsets,
                n = t.popper,
                i = t.reference,
                o = e.placement.split("-")[0],
                r = Math.floor,
                s = -1 !== ["top", "bottom"].indexOf(o),
                a = s ? "right" : "bottom",
                l = s ? "left" : "top",
                c = s ? "width" : "height";
              return n[a] < r(i[l]) && (e.offsets.popper[l] = r(i[l]) - n[c]), n[l] > r(i[a]) && (e.offsets.popper[l] = r(i[a])), e;
            }
          },
          arrow: {
            order: 500,
            enabled: !0,
            fn: function (e, t) {
              var n;
              if (!ee(e.instance.modifiers, "arrow", "keepTogether")) return e;
              var i = t.element;
              if ("string" == typeof i) {
                if (!(i = e.instance.popper.querySelector(i))) return e;
              } else if (!e.instance.popper.contains(i)) return console.warn("WARNING: `arrow.element` must be child of its popper element!"), e;
              var o = e.placement.split("-")[0],
                r = e.offsets,
                s = r.popper,
                a = r.reference,
                l = -1 !== ["left", "right"].indexOf(o),
                c = l ? "height" : "width",
                u = l ? "Top" : "Left",
                d = u.toLowerCase(),
                p = l ? "left" : "top",
                h = l ? "bottom" : "right",
                f = q(i)[c];
              a[h] - f < s[d] && (e.offsets.popper[d] -= s[d] - (a[h] - f)), a[d] + f > s[h] && (e.offsets.popper[d] += a[d] + f - s[h]), e.offsets.popper = j(e.offsets.popper);
              var m = a[d] + a[c] / 2 - f / 2,
                g = b(e.instance.popper),
                v = parseFloat(g["margin" + u], 10),
                y = parseFloat(g["border" + u + "Width"], 10),
                w = m - e.offsets.popper[d] - v - y;
              return w = Math.max(Math.min(s[c] - f, w), 0), e.arrowElement = i, e.offsets.arrow = (N(n = {}, d, Math.round(w)), N(n, p, ""), n), e;
            },
            element: "[x-arrow]"
          },
          flip: {
            order: 600,
            enabled: !0,
            fn: function (e, t) {
              if (G(e.instance.modifiers, "inner")) return e;
              if (e.flipped && e.placement === e.originalPlacement) return e;
              var n = H(e.instance.popper, e.instance.reference, t.padding, t.boundariesElement, e.positionFixed),
                i = e.placement.split("-")[0],
                o = U(i),
                r = e.placement.split("-")[1] || "",
                s = [];
              switch (t.behavior) {
                case oe.FLIP:
                  s = [i, o];
                  break;
                case oe.CLOCKWISE:
                  s = ie(i);
                  break;
                case oe.COUNTERCLOCKWISE:
                  s = ie(i, !0);
                  break;
                default:
                  s = t.behavior;
              }
              return s.forEach(function (a, l) {
                if (i !== a || s.length === l + 1) return e;
                i = e.placement.split("-")[0], o = U(i);
                var c = e.offsets.popper,
                  u = e.offsets.reference,
                  d = Math.floor,
                  p = "left" === i && d(c.right) > d(u.left) || "right" === i && d(c.left) < d(u.right) || "top" === i && d(c.bottom) > d(u.top) || "bottom" === i && d(c.top) < d(u.bottom),
                  h = d(c.left) < d(n.left),
                  f = d(c.right) > d(n.right),
                  m = d(c.top) < d(n.top),
                  g = d(c.bottom) > d(n.bottom),
                  v = "left" === i && h || "right" === i && f || "top" === i && m || "bottom" === i && g,
                  b = -1 !== ["top", "bottom"].indexOf(i),
                  y = !!t.flipVariations && (b && "start" === r && h || b && "end" === r && f || !b && "start" === r && m || !b && "end" === r && g);
                (p || v || y) && (e.flipped = !0, (p || v) && (i = s[l + 1]), y && (r = function (e) {
                  return "end" === e ? "start" : "start" === e ? "end" : e;
                }(r)), e.placement = i + (r ? "-" + r : ""), e.offsets.popper = P({}, e.offsets.popper, B(e.instance.popper, e.offsets.reference, e.placement)), e = V(e.instance.modifiers, e, "flip"));
              }), e;
            },
            behavior: "flip",
            padding: 5,
            boundariesElement: "viewport"
          },
          inner: {
            order: 700,
            enabled: !1,
            fn: function (e) {
              var t = e.placement,
                n = t.split("-")[0],
                i = e.offsets,
                o = i.popper,
                r = i.reference,
                s = -1 !== ["left", "right"].indexOf(n),
                a = -1 === ["top", "left"].indexOf(n);
              return o[s ? "left" : "top"] = r[n] - (a ? o[s ? "width" : "height"] : 0), e.placement = U(t), e.offsets.popper = j(o), e;
            }
          },
          hide: {
            order: 800,
            enabled: !0,
            fn: function (e) {
              if (!ee(e.instance.modifiers, "hide", "preventOverflow")) return e;
              var t = e.offsets.reference,
                n = z(e.instance.modifiers, function (e) {
                  return "preventOverflow" === e.name;
                }).boundaries;
              if (t.bottom < n.top || t.left > n.right || t.top > n.bottom || t.right < n.left) {
                if (!0 === e.hide) return e;
                e.hide = !0, e.attributes["x-out-of-boundaries"] = "";
              } else {
                if (!1 === e.hide) return e;
                e.hide = !1, e.attributes["x-out-of-boundaries"] = !1;
              }
              return e;
            }
          },
          computeStyle: {
            order: 850,
            enabled: !0,
            fn: function (e, t) {
              var n = t.x,
                i = t.y,
                o = e.offsets.popper,
                r = z(e.instance.modifiers, function (e) {
                  return "applyStyle" === e.name;
                }).gpuAcceleration;
              void 0 !== r && console.warn("WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!");
              var s = void 0 !== r ? r : t.gpuAcceleration,
                a = L($(e.instance.popper)),
                l = {
                  position: o.position
                },
                c = {
                  left: Math.floor(o.left),
                  top: Math.round(o.top),
                  bottom: Math.round(o.bottom),
                  right: Math.floor(o.right)
                },
                u = "bottom" === n ? "top" : "bottom",
                d = "right" === i ? "left" : "right",
                p = K("transform"),
                h = void 0,
                f = void 0;
              if (f = "bottom" === u ? -a.height + c.bottom : c.top, h = "right" === d ? -a.width + c.right : c.left, s && p) l[p] = "translate3d(" + h + "px, " + f + "px, 0)", l[u] = 0, l[d] = 0, l.willChange = "transform";
              else {
                var m = "bottom" === u ? -1 : 1,
                  g = "right" === d ? -1 : 1;
                l[u] = f * m, l[d] = h * g, l.willChange = u + ", " + d;
              }
              var v = {
                "x-placement": e.placement
              };
              return e.attributes = P({}, v, e.attributes), e.styles = P({}, l, e.styles), e.arrowStyles = P({}, e.offsets.arrow, e.arrowStyles), e;
            },
            gpuAcceleration: !0,
            x: "bottom",
            y: "right"
          },
          applyStyle: {
            order: 900,
            enabled: !0,
            fn: function (e) {
              return Z(e.instance.popper, e.styles),
                function (e, t) {
                  Object.keys(t).forEach(function (n) {
                    !1 !== t[n] ? e.setAttribute(n, t[n]) : e.removeAttribute(n);
                  });
                }(e.instance.popper, e.attributes), e.arrowElement && Object.keys(e.arrowStyles).length && Z(e.arrowElement, e.arrowStyles), e;
            },
            onLoad: function (e, t, n, i, o) {
              var r = F(o, t, e, n.positionFixed),
                s = W(n.placement, r, t, e, n.modifiers.flip.boundariesElement, n.modifiers.flip.padding);
              return t.setAttribute("x-placement", s), Z(t, {
                position: n.positionFixed ? "fixed" : "absolute"
              }), n;
            },
            gpuAcceleration: void 0
          }
        }
      },
        ae = function () {
          function e(t, n) {
            var i = this,
              o = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
            A(this, e), this.scheduleUpdate = function () {
              return requestAnimationFrame(i.update);
            }, this.update = g(this.update.bind(this)), this.options = P({}, e.Defaults, o), this.state = {
              isDestroyed: !1,
              isCreated: !1,
              scrollParents: []
            }, this.reference = t && t.jquery ? t[0] : t, this.popper = n && n.jquery ? n[0] : n, this.options.modifiers = {}, Object.keys(P({}, e.Defaults.modifiers, o.modifiers)).forEach(function (t) {
              i.options.modifiers[t] = P({}, e.Defaults.modifiers[t] || {}, o.modifiers ? o.modifiers[t] : {});
            }), this.modifiers = Object.keys(this.options.modifiers).map(function (e) {
              return P({
                name: e
              }, i.options.modifiers[e]);
            }).sort(function (e, t) {
              return e.order - t.order;
            }), this.modifiers.forEach(function (e) {
              e.enabled && v(e.onLoad) && e.onLoad(i.reference, i.popper, i.options, e, i.state);
            }), this.update();
            var r = this.options.eventsEnabled;
            r && this.enableEventListeners(), this.state.eventsEnabled = r;
          }
          return O(e, [{
            key: "update",
            value: function () {
              return function () {
                if (!this.state.isDestroyed) {
                  var e = {
                    instance: this,
                    styles: {},
                    arrowStyles: {},
                    attributes: {},
                    flipped: !1,
                    offsets: {}
                  };
                  e.offsets.reference = F(this.state, this.popper, this.reference, this.options.positionFixed), e.placement = W(this.options.placement, e.offsets.reference, this.popper, this.reference, this.options.modifiers.flip.boundariesElement, this.options.modifiers.flip.padding), e.originalPlacement = e.placement, e.positionFixed = this.options.positionFixed, e.offsets.popper = B(this.popper, e.offsets.reference, e.placement), e.offsets.popper.position = this.options.positionFixed ? "fixed" : "absolute", e = V(this.modifiers, e), this.state.isCreated ? this.options.onUpdate(e) : (this.state.isCreated = !0, this.options.onCreate(e));
                }
              }.call(this);
            }
          }, {
            key: "destroy",
            value: function () {
              return function () {
                return this.state.isDestroyed = !0, G(this.modifiers, "applyStyle") && (this.popper.removeAttribute("x-placement"), this.popper.style.position = "", this.popper.style.top = "", this.popper.style.left = "", this.popper.style.right = "", this.popper.style.bottom = "", this.popper.style.willChange = "", this.popper.style[K("transform")] = ""), this.disableEventListeners(), this.options.removeOnDestroy && this.popper.parentNode.removeChild(this.popper), this;
              }.call(this);
            }
          }, {
            key: "enableEventListeners",
            value: function () {
              return function () {
                this.state.eventsEnabled || (this.state = Q(this.reference, this.options, this.state, this.scheduleUpdate));
              }.call(this);
            }
          }, {
            key: "disableEventListeners",
            value: function () {
              return X.call(this);
            }
          }]), e;
        }();
      ae.Utils = ("undefined" != typeof window ? window : e).PopperUtils, ae.placements = te, ae.Defaults = se;
      var le = function (e) {
        var t = "dropdown",
          n = "bs.dropdown",
          i = "." + n,
          r = e.fn[t],
          l = new RegExp("38|40|27"),
          c = {
            HIDE: "hide" + i,
            HIDDEN: "hidden" + i,
            SHOW: "show" + i,
            SHOWN: "shown" + i,
            CLICK: "click" + i,
            CLICK_DATA_API: "click.bs.dropdown.data-api",
            KEYDOWN_DATA_API: "keydown.bs.dropdown.data-api",
            KEYUP_DATA_API: "keyup.bs.dropdown.data-api"
          },
          u = "disabled",
          d = "show",
          p = "dropup",
          h = "dropright",
          f = "dropleft",
          m = "dropdown-menu-right",
          g = "position-static",
          v = '[data-toggle="dropdown"]',
          b = ".dropdown form",
          y = ".dropdown-menu",
          w = ".navbar-nav",
          C = ".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)",
          x = "top-start",
          _ = "top-end",
          $ = "bottom-start",
          k = "bottom-end",
          T = "right-start",
          E = "left-start",
          S = {
            offset: 0,
            flip: !0,
            boundary: "scrollParent",
            reference: "toggle",
            display: "dynamic"
          },
          D = {
            offset: "(number|string|function)",
            flip: "boolean",
            boundary: "(string|element)",
            reference: "(string|element)",
            display: "string"
          },
          I = function () {
            function r(e, t) {
              this._element = e, this._popper = null, this._config = this._getConfig(t), this._menu = this._getMenuElement(), this._inNavbar = this._detectNavbar(), this._addEventListeners();
            }
            var b = r.prototype;
            return b.toggle = function () {
              if (!this._element.disabled && !e(this._element).hasClass(u)) {
                var t = r._getParentFromElement(this._element),
                  n = e(this._menu).hasClass(d);
                if (r._clearMenus(), !n) {
                  var i = {
                    relatedTarget: this._element
                  },
                    o = e.Event(c.SHOW, i);
                  if (e(t).trigger(o), !o.isDefaultPrevented()) {
                    if (!this._inNavbar) {
                      if (void 0 === ae) throw new TypeError("Bootstrap dropdown require Popper.js (https://popper.js.org)");
                      var s = this._element;
                      "parent" === this._config.reference ? s = t : a.isElement(this._config.reference) && (s = this._config.reference, void 0 !== this._config.reference.jquery && (s = this._config.reference[0])), "scrollParent" !== this._config.boundary && e(t).addClass(g), this._popper = new ae(s, this._menu, this._getPopperConfig());
                    }
                    "ontouchstart" in document.documentElement && 0 === e(t).closest(w).length && e(document.body).children().on("mouseover", null, e.noop), this._element.focus(), this._element.setAttribute("aria-expanded", !0), e(this._menu).toggleClass(d), e(t).toggleClass(d).trigger(e.Event(c.SHOWN, i));
                  }
                }
              }
            }, b.dispose = function () {
              e.removeData(this._element, n), e(this._element).off(i), this._element = null, this._menu = null, null !== this._popper && (this._popper.destroy(), this._popper = null);
            }, b.update = function () {
              this._inNavbar = this._detectNavbar(), null !== this._popper && this._popper.scheduleUpdate();
            }, b._addEventListeners = function () {
              var t = this;
              e(this._element).on(c.CLICK, function (e) {
                e.preventDefault(), e.stopPropagation(), t.toggle();
              });
            }, b._getConfig = function (n) {
              return n = s({}, this.constructor.Default, e(this._element).data(), n), a.typeCheckConfig(t, n, this.constructor.DefaultType), n;
            }, b._getMenuElement = function () {
              if (!this._menu) {
                var e = r._getParentFromElement(this._element);
                e && (this._menu = e.querySelector(y));
              }
              return this._menu;
            }, b._getPlacement = function () {
              var t = e(this._element.parentNode),
                n = $;
              return t.hasClass(p) ? (n = x, e(this._menu).hasClass(m) && (n = _)) : t.hasClass(h) ? n = T : t.hasClass(f) ? n = E : e(this._menu).hasClass(m) && (n = k), n;
            }, b._detectNavbar = function () {
              return e(this._element).closest(".navbar").length > 0;
            }, b._getPopperConfig = function () {
              var e = this,
                t = {};
              "function" == typeof this._config.offset ? t.fn = function (t) {
                return t.offsets = s({}, t.offsets, e._config.offset(t.offsets) || {}), t;
              } : t.offset = this._config.offset;
              var n = {
                placement: this._getPlacement(),
                modifiers: {
                  offset: t,
                  flip: {
                    enabled: this._config.flip
                  },
                  preventOverflow: {
                    boundariesElement: this._config.boundary
                  }
                }
              };
              return "static" === this._config.display && (n.modifiers.applyStyle = {
                enabled: !1
              }), n;
            }, r._jQueryInterface = function (t) {
              return this.each(function () {
                var i = e(this).data(n);
                if (i || (i = new r(this, "object" == typeof t ? t : null), e(this).data(n, i)), "string" == typeof t) {
                  if (void 0 === i[t]) throw new TypeError('No method named "' + t + '"');
                  i[t]();
                }
              });
            }, r._clearMenus = function (t) {
              if (!t || 3 !== t.which && ("keyup" !== t.type || 9 === t.which))
                for (var i = [].slice.call(document.querySelectorAll(v)), o = 0, s = i.length; o < s; o++) {
                  var a = r._getParentFromElement(i[o]),
                    l = e(i[o]).data(n),
                    u = {
                      relatedTarget: i[o]
                    };
                  if (t && "click" === t.type && (u.clickEvent = t), l) {
                    var p = l._menu;
                    if (e(a).hasClass(d) && !(t && ("click" === t.type && /input|textarea/i.test(t.target.tagName) || "keyup" === t.type && 9 === t.which) && e.contains(a, t.target))) {
                      var h = e.Event(c.HIDE, u);
                      e(a).trigger(h), h.isDefaultPrevented() || ("ontouchstart" in document.documentElement && e(document.body).children().off("mouseover", null, e.noop), i[o].setAttribute("aria-expanded", "false"), e(p).removeClass(d), e(a).removeClass(d).trigger(e.Event(c.HIDDEN, u)));
                    }
                  }
                }
            }, r._getParentFromElement = function (e) {
              var t, n = a.getSelectorFromElement(e);
              return n && (t = document.querySelector(n)), t || e.parentNode;
            }, r._dataApiKeydownHandler = function (t) {
              if ((/input|textarea/i.test(t.target.tagName) ? !(32 === t.which || 27 !== t.which && (40 !== t.which && 38 !== t.which || e(t.target).closest(y).length)) : l.test(t.which)) && (t.preventDefault(), t.stopPropagation(), !this.disabled && !e(this).hasClass(u))) {
                var n = r._getParentFromElement(this),
                  i = e(n).hasClass(d);
                if ((i || 27 === t.which && 32 === t.which) && (!i || 27 !== t.which && 32 !== t.which)) {
                  var o = [].slice.call(n.querySelectorAll(C));
                  if (0 !== o.length) {
                    var s = o.indexOf(t.target);
                    38 === t.which && s > 0 && s--, 40 === t.which && s < o.length - 1 && s++, s < 0 && (s = 0), o[s].focus();
                  }
                } else {
                  if (27 === t.which) {
                    var a = n.querySelector(v);
                    e(a).trigger("focus");
                  }
                  e(this).trigger("click");
                }
              }
            }, o(r, null, [{
              key: "VERSION",
              get: function () {
                return "4.1.3";
              }
            }, {
              key: "Default",
              get: function () {
                return S;
              }
            }, {
              key: "DefaultType",
              get: function () {
                return D;
              }
            }]), r;
          }();
        return e(document).on(c.KEYDOWN_DATA_API, v, I._dataApiKeydownHandler).on(c.KEYDOWN_DATA_API, y, I._dataApiKeydownHandler).on(c.CLICK_DATA_API + " " + c.KEYUP_DATA_API, I._clearMenus).on(c.CLICK_DATA_API, v, function (t) {
          t.preventDefault(), t.stopPropagation(), I._jQueryInterface.call(e(this), "toggle");
        }).on(c.CLICK_DATA_API, b, function (e) {
          e.stopPropagation();
        }), e.fn[t] = I._jQueryInterface, e.fn[t].Constructor = I, e.fn[t].noConflict = function () {
          return e.fn[t] = r, I._jQueryInterface;
        }, I;
      }(n),
        ce = function (e) {
          var t = "modal",
            n = ".bs.modal",
            i = e.fn.modal,
            r = {
              backdrop: !0,
              keyboard: !0,
              focus: !0,
              show: !0
            },
            l = {
              backdrop: "(boolean|string)",
              keyboard: "boolean",
              focus: "boolean",
              show: "boolean"
            },
            c = {
              HIDE: "hide.bs.modal",
              HIDDEN: "hidden.bs.modal",
              SHOW: "show.bs.modal",
              SHOWN: "shown.bs.modal",
              FOCUSIN: "focusin.bs.modal",
              RESIZE: "resize.bs.modal",
              CLICK_DISMISS: "click.dismiss.bs.modal",
              KEYDOWN_DISMISS: "keydown.dismiss.bs.modal",
              MOUSEUP_DISMISS: "mouseup.dismiss.bs.modal",
              MOUSEDOWN_DISMISS: "mousedown.dismiss.bs.modal",
              CLICK_DATA_API: "click.bs.modal.data-api"
            },
            u = "modal-scrollbar-measure",
            d = "modal-backdrop",
            p = "modal-open",
            h = "fade",
            f = "show",
            m = {
              DIALOG: ".modal-dialog",
              DATA_TOGGLE: '[data-toggle="modal"]',
              DATA_DISMISS: '[data-dismiss="modal"]',
              FIXED_CONTENT: ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",
              STICKY_CONTENT: ".sticky-top"
            },
            g = function () {
              function i(e, t) {
                this._config = this._getConfig(t), this._element = e, this._dialog = e.querySelector(m.DIALOG), this._backdrop = null, this._isShown = !1, this._isBodyOverflowing = !1, this._ignoreBackdropClick = !1, this._scrollbarWidth = 0;
              }
              var g = i.prototype;
              return g.toggle = function (e) {
                return this._isShown ? this.hide() : this.show(e);
              }, g.show = function (t) {
                var n = this;
                if (!this._isTransitioning && !this._isShown) {
                  e(this._element).hasClass(h) && (this._isTransitioning = !0);
                  var i = e.Event(c.SHOW, {
                    relatedTarget: t
                  });
                  e(this._element).trigger(i), this._isShown || i.isDefaultPrevented() || (this._isShown = !0, this._checkScrollbar(), this._setScrollbar(), this._adjustDialog(), e(document.body).addClass(p), this._setEscapeEvent(), this._setResizeEvent(), e(this._element).on(c.CLICK_DISMISS, m.DATA_DISMISS, function (e) {
                    return n.hide(e);
                  }), e(this._dialog).on(c.MOUSEDOWN_DISMISS, function () {
                    e(n._element).one(c.MOUSEUP_DISMISS, function (t) {
                      e(t.target).is(n._element) && (n._ignoreBackdropClick = !0);
                    });
                  }), this._showBackdrop(function () {
                    return n._showElement(t);
                  }));
                }
              }, g.hide = function (t) {
                var n = this;
                if (t && t.preventDefault(), !this._isTransitioning && this._isShown) {
                  var i = e.Event(c.HIDE);
                  if (e(this._element).trigger(i), this._isShown && !i.isDefaultPrevented()) {
                    this._isShown = !1;
                    var o = e(this._element).hasClass(h);
                    if (o && (this._isTransitioning = !0), this._setEscapeEvent(), this._setResizeEvent(), e(document).off(c.FOCUSIN), e(this._element).removeClass(f), e(this._element).off(c.CLICK_DISMISS), e(this._dialog).off(c.MOUSEDOWN_DISMISS), o) {
                      var r = a.getTransitionDurationFromElement(this._element);
                      e(this._element).one(a.TRANSITION_END, function (e) {
                        return n._hideModal(e);
                      }).emulateTransitionEnd(r);
                    } else this._hideModal();
                  }
                }
              }, g.dispose = function () {
                e.removeData(this._element, "bs.modal"), e(window, document, this._element, this._backdrop).off(n), this._config = null, this._element = null, this._dialog = null, this._backdrop = null, this._isShown = null, this._isBodyOverflowing = null, this._ignoreBackdropClick = null, this._scrollbarWidth = null;
              }, g.handleUpdate = function () {
                this._adjustDialog();
              }, g._getConfig = function (e) {
                return e = s({}, r, e), a.typeCheckConfig(t, e, l), e;
              }, g._showElement = function (t) {
                var n = this,
                  i = e(this._element).hasClass(h);
                this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE || document.body.appendChild(this._element), this._element.style.display = "block", this._element.removeAttribute("aria-hidden"), this._element.scrollTop = 0, i && a.reflow(this._element), e(this._element).addClass(f), this._config.focus && this._enforceFocus();
                var o = e.Event(c.SHOWN, {
                  relatedTarget: t
                }),
                  r = function () {
                    n._config.focus && n._element.focus(), n._isTransitioning = !1, e(n._element).trigger(o);
                  };
                if (i) {
                  var s = a.getTransitionDurationFromElement(this._element);
                  e(this._dialog).one(a.TRANSITION_END, r).emulateTransitionEnd(s);
                } else r();
              }, g._enforceFocus = function () {
                var t = this;
                e(document).off(c.FOCUSIN).on(c.FOCUSIN, function (n) {
                  document !== n.target && t._element !== n.target && 0 === e(t._element).has(n.target).length && t._element.focus();
                });
              }, g._setEscapeEvent = function () {
                var t = this;
                this._isShown && this._config.keyboard ? e(this._element).on(c.KEYDOWN_DISMISS, function (e) {
                  27 === e.which && (e.preventDefault(), t.hide());
                }) : this._isShown || e(this._element).off(c.KEYDOWN_DISMISS);
              }, g._setResizeEvent = function () {
                var t = this;
                this._isShown ? e(window).on(c.RESIZE, function (e) {
                  return t.handleUpdate(e);
                }) : e(window).off(c.RESIZE);
              }, g._hideModal = function () {
                var t = this;
                this._element.style.display = "none", this._element.setAttribute("aria-hidden", !0), this._isTransitioning = !1, this._showBackdrop(function () {
                  e(document.body).removeClass(p), t._resetAdjustments(), t._resetScrollbar(), e(t._element).trigger(c.HIDDEN);
                });
              }, g._removeBackdrop = function () {
                this._backdrop && (e(this._backdrop).remove(), this._backdrop = null);
              }, g._showBackdrop = function (t) {
                var n = this,
                  i = e(this._element).hasClass(h) ? h : "";
                if (this._isShown && this._config.backdrop) {
                  if (this._backdrop = document.createElement("div"), this._backdrop.className = d, i && this._backdrop.classList.add(i), e(this._backdrop).appendTo(document.body), e(this._element).on(c.CLICK_DISMISS, function (e) {
                    n._ignoreBackdropClick ? n._ignoreBackdropClick = !1 : e.target === e.currentTarget && ("static" === n._config.backdrop ? n._element.focus() : n.hide());
                  }), i && a.reflow(this._backdrop), e(this._backdrop).addClass(f), !t) return;
                  if (!i) return void t();
                  var o = a.getTransitionDurationFromElement(this._backdrop);
                  e(this._backdrop).one(a.TRANSITION_END, t).emulateTransitionEnd(o);
                } else if (!this._isShown && this._backdrop) {
                  e(this._backdrop).removeClass(f);
                  var r = function () {
                    n._removeBackdrop(), t && t();
                  };
                  if (e(this._element).hasClass(h)) {
                    var s = a.getTransitionDurationFromElement(this._backdrop);
                    e(this._backdrop).one(a.TRANSITION_END, r).emulateTransitionEnd(s);
                  } else r();
                } else t && t();
              }, g._adjustDialog = function () {
                var e = this._element.scrollHeight > document.documentElement.clientHeight;
                !this._isBodyOverflowing && e && (this._element.style.paddingLeft = this._scrollbarWidth + "px"), this._isBodyOverflowing && !e && (this._element.style.paddingRight = this._scrollbarWidth + "px");
              }, g._resetAdjustments = function () {
                this._element.style.paddingLeft = "", this._element.style.paddingRight = "";
              }, g._checkScrollbar = function () {
                var e = document.body.getBoundingClientRect();
                this._isBodyOverflowing = e.left + e.right < window.innerWidth, this._scrollbarWidth = this._getScrollbarWidth();
              }, g._setScrollbar = function () {
                var t = this;
                if (this._isBodyOverflowing) {
                  var n = [].slice.call(document.querySelectorAll(m.FIXED_CONTENT)),
                    i = [].slice.call(document.querySelectorAll(m.STICKY_CONTENT));
                  e(n).each(function (n, i) {
                    var o = i.style.paddingRight,
                      r = e(i).css("padding-right");
                    e(i).data("padding-right", o).css("padding-right", parseFloat(r) + t._scrollbarWidth + "px");
                  }), e(i).each(function (n, i) {
                    var o = i.style.marginRight,
                      r = e(i).css("margin-right");
                    e(i).data("margin-right", o).css("margin-right", parseFloat(r) - t._scrollbarWidth + "px");
                  });
                  var o = document.body.style.paddingRight,
                    r = e(document.body).css("padding-right");
                  e(document.body).data("padding-right", o).css("padding-right", parseFloat(r) + this._scrollbarWidth + "px");
                }
              }, g._resetScrollbar = function () {
                var t = [].slice.call(document.querySelectorAll(m.FIXED_CONTENT));
                e(t).each(function (t, n) {
                  var i = e(n).data("padding-right");
                  e(n).removeData("padding-right"), n.style.paddingRight = i || "";
                });
                var n = [].slice.call(document.querySelectorAll("" + m.STICKY_CONTENT));
                e(n).each(function (t, n) {
                  var i = e(n).data("margin-right");
                  void 0 !== i && e(n).css("margin-right", i).removeData("margin-right");
                });
                var i = e(document.body).data("padding-right");
                e(document.body).removeData("padding-right"), document.body.style.paddingRight = i || "";
              }, g._getScrollbarWidth = function () {
                var e = document.createElement("div");
                e.className = u, document.body.appendChild(e);
                var t = e.getBoundingClientRect().width - e.clientWidth;
                return document.body.removeChild(e), t;
              }, i._jQueryInterface = function (t, n) {
                return this.each(function () {
                  var o = e(this).data("bs.modal"),
                    a = s({}, r, e(this).data(), "object" == typeof t && t ? t : {});
                  if (o || (o = new i(this, a), e(this).data("bs.modal", o)), "string" == typeof t) {
                    if (void 0 === o[t]) throw new TypeError('No method named "' + t + '"');
                    o[t](n);
                  } else a.show && o.show(n);
                });
              }, o(i, null, [{
                key: "VERSION",
                get: function () {
                  return "4.1.3";
                }
              }, {
                key: "Default",
                get: function () {
                  return r;
                }
              }]), i;
            }();
          return e(document).on(c.CLICK_DATA_API, m.DATA_TOGGLE, function (t) {
            var n, i = this,
              o = a.getSelectorFromElement(this);
            o && (n = document.querySelector(o));
            var r = e(n).data("bs.modal") ? "toggle" : s({}, e(n).data(), e(this).data());
            "A" !== this.tagName && "AREA" !== this.tagName || t.preventDefault();
            var l = e(n).one(c.SHOW, function (t) {
              t.isDefaultPrevented() || l.one(c.HIDDEN, function () {
                e(i).is(":visible") && i.focus();
              });
            });
            g._jQueryInterface.call(e(n), r, this);
          }), e.fn.modal = g._jQueryInterface, e.fn.modal.Constructor = g, e.fn.modal.noConflict = function () {
            return e.fn.modal = i, g._jQueryInterface;
          }, g;
        }(n),
        ue = function (e) {
          var t = "tooltip",
            n = ".bs.tooltip",
            i = e.fn[t],
            r = new RegExp("(^|\\s)bs-tooltip\\S+", "g"),
            l = {
              animation: "boolean",
              template: "string",
              title: "(string|element|function)",
              trigger: "string",
              delay: "(number|object)",
              html: "boolean",
              selector: "(string|boolean)",
              placement: "(string|function)",
              offset: "(number|string)",
              container: "(string|element|boolean)",
              fallbackPlacement: "(string|array)",
              boundary: "(string|element)"
            },
            c = {
              AUTO: "auto",
              TOP: "top",
              RIGHT: "right",
              BOTTOM: "bottom",
              LEFT: "left"
            },
            u = {
              animation: !0,
              template: '<div class="tooltip" role="tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>',
              trigger: "hover focus",
              title: "",
              delay: 0,
              html: !1,
              selector: !1,
              placement: "top",
              offset: 0,
              container: !1,
              fallbackPlacement: "flip",
              boundary: "scrollParent"
            },
            d = "show",
            p = "out",
            h = {
              HIDE: "hide" + n,
              HIDDEN: "hidden" + n,
              SHOW: "show" + n,
              SHOWN: "shown" + n,
              INSERTED: "inserted" + n,
              CLICK: "click" + n,
              FOCUSIN: "focusin" + n,
              FOCUSOUT: "focusout" + n,
              MOUSEENTER: "mouseenter" + n,
              MOUSELEAVE: "mouseleave" + n
            },
            f = "fade",
            m = "show",
            g = ".tooltip-inner",
            v = ".arrow",
            b = "hover",
            y = "focus",
            w = "click",
            C = "manual",
            x = function () {
              function i(e, t) {
                if (void 0 === ae) throw new TypeError("Bootstrap tooltips require Popper.js (https://popper.js.org)");
                this._isEnabled = !0, this._timeout = 0, this._hoverState = "", this._activeTrigger = {}, this._popper = null, this.element = e, this.config = this._getConfig(t), this.tip = null, this._setListeners();
              }
              var x = i.prototype;
              return x.enable = function () {
                this._isEnabled = !0;
              }, x.disable = function () {
                this._isEnabled = !1;
              }, x.toggleEnabled = function () {
                this._isEnabled = !this._isEnabled;
              }, x.toggle = function (t) {
                if (this._isEnabled)
                  if (t) {
                    var n = this.constructor.DATA_KEY,
                      i = e(t.currentTarget).data(n);
                    i || (i = new this.constructor(t.currentTarget, this._getDelegateConfig()), e(t.currentTarget).data(n, i)), i._activeTrigger.click = !i._activeTrigger.click, i._isWithActiveTrigger() ? i._enter(null, i) : i._leave(null, i);
                  } else {
                    if (e(this.getTipElement()).hasClass(m)) return void this._leave(null, this);
                    this._enter(null, this);
                  }
              }, x.dispose = function () {
                clearTimeout(this._timeout), e.removeData(this.element, this.constructor.DATA_KEY), e(this.element).off(this.constructor.EVENT_KEY), e(this.element).closest(".modal").off("hide.bs.modal"), this.tip && e(this.tip).remove(), this._isEnabled = null, this._timeout = null, this._hoverState = null, this._activeTrigger = null, null !== this._popper && this._popper.destroy(), this._popper = null, this.element = null, this.config = null, this.tip = null;
              }, x.show = function () {
                var t = this;
                if ("none" === e(this.element).css("display")) throw new Error("Please use show on visible elements");
                var n = e.Event(this.constructor.Event.SHOW);
                if (this.isWithContent() && this._isEnabled) {
                  e(this.element).trigger(n);
                  var i = e.contains(this.element.ownerDocument.documentElement, this.element);
                  if (n.isDefaultPrevented() || !i) return;
                  var o = this.getTipElement(),
                    r = a.getUID(this.constructor.NAME);
                  o.setAttribute("id", r), this.element.setAttribute("aria-describedby", r), this.setContent(), this.config.animation && e(o).addClass(f);
                  var s = "function" == typeof this.config.placement ? this.config.placement.call(this, o, this.element) : this.config.placement,
                    l = this._getAttachment(s);
                  this.addAttachmentClass(l);
                  var c = !1 === this.config.container ? document.body : e(document).find(this.config.container);
                  e(o).data(this.constructor.DATA_KEY, this), e.contains(this.element.ownerDocument.documentElement, this.tip) || e(o).appendTo(c), e(this.element).trigger(this.constructor.Event.INSERTED), this._popper = new ae(this.element, o, {
                    placement: l,
                    modifiers: {
                      offset: {
                        offset: this.config.offset
                      },
                      flip: {
                        behavior: this.config.fallbackPlacement
                      },
                      arrow: {
                        element: v
                      },
                      preventOverflow: {
                        boundariesElement: this.config.boundary
                      }
                    },
                    onCreate: function (e) {
                      e.originalPlacement !== e.placement && t._handlePopperPlacementChange(e);
                    },
                    onUpdate: function (e) {
                      t._handlePopperPlacementChange(e);
                    }
                  }), e(o).addClass(m), "ontouchstart" in document.documentElement && e(document.body).children().on("mouseover", null, e.noop);
                  var u = function () {
                    t.config.animation && t._fixTransition();
                    var n = t._hoverState;
                    t._hoverState = null, e(t.element).trigger(t.constructor.Event.SHOWN), n === p && t._leave(null, t);
                  };
                  if (e(this.tip).hasClass(f)) {
                    var d = a.getTransitionDurationFromElement(this.tip);
                    e(this.tip).one(a.TRANSITION_END, u).emulateTransitionEnd(d);
                  } else u();
                }
              }, x.hide = function (t) {
                var n = this,
                  i = this.getTipElement(),
                  o = e.Event(this.constructor.Event.HIDE),
                  r = function () {
                    n._hoverState !== d && i.parentNode && i.parentNode.removeChild(i), n._cleanTipClass(), n.element.removeAttribute("aria-describedby"), e(n.element).trigger(n.constructor.Event.HIDDEN), null !== n._popper && n._popper.destroy(), t && t();
                  };
                if (e(this.element).trigger(o), !o.isDefaultPrevented()) {
                  if (e(i).removeClass(m), "ontouchstart" in document.documentElement && e(document.body).children().off("mouseover", null, e.noop), this._activeTrigger[w] = !1, this._activeTrigger[y] = !1, this._activeTrigger[b] = !1, e(this.tip).hasClass(f)) {
                    var s = a.getTransitionDurationFromElement(i);
                    e(i).one(a.TRANSITION_END, r).emulateTransitionEnd(s);
                  } else r();
                  this._hoverState = "";
                }
              }, x.update = function () {
                null !== this._popper && this._popper.scheduleUpdate();
              }, x.isWithContent = function () {
                return Boolean(this.getTitle());
              }, x.addAttachmentClass = function (t) {
                e(this.getTipElement()).addClass("bs-tooltip-" + t);
              }, x.getTipElement = function () {
                return this.tip = this.tip || e(this.config.template)[0], this.tip;
              }, x.setContent = function () {
                var t = this.getTipElement();
                this.setElementContent(e(t.querySelectorAll(g)), this.getTitle()), e(t).removeClass(f + " " + m);
              }, x.setElementContent = function (t, n) {
                var i = this.config.html;
                "object" == typeof n && (n.nodeType || n.jquery) ? i ? e(n).parent().is(t) || t.empty().append(n) : t.text(e(n).text()) : t[i ? "html" : "text"](n);
              }, x.getTitle = function () {
                var e = this.element.getAttribute("data-original-title");
                return e || (e = "function" == typeof this.config.title ? this.config.title.call(this.element) : this.config.title), e;
              }, x._getAttachment = function (e) {
                return c[e.toUpperCase()];
              }, x._setListeners = function () {
                var t = this;
                this.config.trigger.split(" ").forEach(function (n) {
                  if ("click" === n) e(t.element).on(t.constructor.Event.CLICK, t.config.selector, function (e) {
                    return t.toggle(e);
                  });
                  else if (n !== C) {
                    var i = n === b ? t.constructor.Event.MOUSEENTER : t.constructor.Event.FOCUSIN,
                      o = n === b ? t.constructor.Event.MOUSELEAVE : t.constructor.Event.FOCUSOUT;
                    e(t.element).on(i, t.config.selector, function (e) {
                      return t._enter(e);
                    }).on(o, t.config.selector, function (e) {
                      return t._leave(e);
                    });
                  }
                  e(t.element).closest(".modal").on("hide.bs.modal", function () {
                    return t.hide();
                  });
                }), this.config.selector ? this.config = s({}, this.config, {
                  trigger: "manual",
                  selector: ""
                }) : this._fixTitle();
              }, x._fixTitle = function () {
                var e = typeof this.element.getAttribute("data-original-title");
                (this.element.getAttribute("title") || "string" !== e) && (this.element.setAttribute("data-original-title", this.element.getAttribute("title") || ""), this.element.setAttribute("title", ""));
              }, x._enter = function (t, n) {
                var i = this.constructor.DATA_KEY;
                (n = n || e(t.currentTarget).data(i)) || (n = new this.constructor(t.currentTarget, this._getDelegateConfig()), e(t.currentTarget).data(i, n)), t && (n._activeTrigger["focusin" === t.type ? y : b] = !0), e(n.getTipElement()).hasClass(m) || n._hoverState === d ? n._hoverState = d : (clearTimeout(n._timeout), n._hoverState = d, n.config.delay && n.config.delay.show ? n._timeout = setTimeout(function () {
                  n._hoverState === d && n.show();
                }, n.config.delay.show) : n.show());
              }, x._leave = function (t, n) {
                var i = this.constructor.DATA_KEY;
                (n = n || e(t.currentTarget).data(i)) || (n = new this.constructor(t.currentTarget, this._getDelegateConfig()), e(t.currentTarget).data(i, n)), t && (n._activeTrigger["focusout" === t.type ? y : b] = !1), n._isWithActiveTrigger() || (clearTimeout(n._timeout), n._hoverState = p, n.config.delay && n.config.delay.hide ? n._timeout = setTimeout(function () {
                  n._hoverState === p && n.hide();
                }, n.config.delay.hide) : n.hide());
              }, x._isWithActiveTrigger = function () {
                for (var e in this._activeTrigger)
                  if (this._activeTrigger[e]) return !0;
                return !1;
              }, x._getConfig = function (n) {
                return "number" == typeof (n = s({}, this.constructor.Default, e(this.element).data(), "object" == typeof n && n ? n : {})).delay && (n.delay = {
                  show: n.delay,
                  hide: n.delay
                }), "number" == typeof n.title && (n.title = n.title.toString()), "number" == typeof n.content && (n.content = n.content.toString()), a.typeCheckConfig(t, n, this.constructor.DefaultType), n;
              }, x._getDelegateConfig = function () {
                var e = {};
                if (this.config)
                  for (var t in this.config) this.constructor.Default[t] !== this.config[t] && (e[t] = this.config[t]);
                return e;
              }, x._cleanTipClass = function () {
                var t = e(this.getTipElement()),
                  n = t.attr("class").match(r);
                null !== n && n.length && t.removeClass(n.join(""));
              }, x._handlePopperPlacementChange = function (e) {
                var t = e.instance;
                this.tip = t.popper, this._cleanTipClass(), this.addAttachmentClass(this._getAttachment(e.placement));
              }, x._fixTransition = function () {
                var t = this.getTipElement(),
                  n = this.config.animation;
                null === t.getAttribute("x-placement") && (e(t).removeClass(f), this.config.animation = !1, this.hide(), this.show(), this.config.animation = n);
              }, i._jQueryInterface = function (t) {
                return this.each(function () {
                  var n = e(this).data("bs.tooltip"),
                    o = "object" == typeof t && t;
                  if ((n || !/dispose|hide/.test(t)) && (n || (n = new i(this, o), e(this).data("bs.tooltip", n)), "string" == typeof t)) {
                    if (void 0 === n[t]) throw new TypeError('No method named "' + t + '"');
                    n[t]();
                  }
                });
              }, o(i, null, [{
                key: "VERSION",
                get: function () {
                  return "4.1.3";
                }
              }, {
                key: "Default",
                get: function () {
                  return u;
                }
              }, {
                key: "NAME",
                get: function () {
                  return t;
                }
              }, {
                key: "DATA_KEY",
                get: function () {
                  return "bs.tooltip";
                }
              }, {
                key: "Event",
                get: function () {
                  return h;
                }
              }, {
                key: "EVENT_KEY",
                get: function () {
                  return n;
                }
              }, {
                key: "DefaultType",
                get: function () {
                  return l;
                }
              }]), i;
            }();
          return e.fn[t] = x._jQueryInterface, e.fn[t].Constructor = x, e.fn[t].noConflict = function () {
            return e.fn[t] = i, x._jQueryInterface;
          }, x;
        }(n),
        de = function (e) {
          var t = "popover",
            n = ".bs.popover",
            i = e.fn[t],
            r = new RegExp("(^|\\s)bs-popover\\S+", "g"),
            a = s({}, ue.Default, {
              placement: "right",
              trigger: "click",
              content: "",
              template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>'
            }),
            l = s({}, ue.DefaultType, {
              content: "(string|element|function)"
            }),
            c = "fade",
            u = "show",
            d = ".popover-header",
            p = ".popover-body",
            h = {
              HIDE: "hide" + n,
              HIDDEN: "hidden" + n,
              SHOW: "show" + n,
              SHOWN: "shown" + n,
              INSERTED: "inserted" + n,
              CLICK: "click" + n,
              FOCUSIN: "focusin" + n,
              FOCUSOUT: "focusout" + n,
              MOUSEENTER: "mouseenter" + n,
              MOUSELEAVE: "mouseleave" + n
            },
            f = function (i) {
              function s() {
                return i.apply(this, arguments) || this;
              } ! function (e, t) {
                e.prototype = Object.create(t.prototype), e.prototype.constructor = e, e.__proto__ = t;
              }(s, i);
              var f = s.prototype;
              return f.isWithContent = function () {
                return this.getTitle() || this._getContent();
              }, f.addAttachmentClass = function (t) {
                e(this.getTipElement()).addClass("bs-popover-" + t);
              }, f.getTipElement = function () {
                return this.tip = this.tip || e(this.config.template)[0], this.tip;
              }, f.setContent = function () {
                var t = e(this.getTipElement());
                this.setElementContent(t.find(d), this.getTitle());
                var n = this._getContent();
                "function" == typeof n && (n = n.call(this.element)), this.setElementContent(t.find(p), n), t.removeClass(c + " " + u);
              }, f._getContent = function () {
                return this.element.getAttribute("data-content") || this.config.content;
              }, f._cleanTipClass = function () {
                var t = e(this.getTipElement()),
                  n = t.attr("class").match(r);
                null !== n && n.length > 0 && t.removeClass(n.join(""));
              }, s._jQueryInterface = function (t) {
                return this.each(function () {
                  var n = e(this).data("bs.popover"),
                    i = "object" == typeof t ? t : null;
                  if ((n || !/destroy|hide/.test(t)) && (n || (n = new s(this, i), e(this).data("bs.popover", n)), "string" == typeof t)) {
                    if (void 0 === n[t]) throw new TypeError('No method named "' + t + '"');
                    n[t]();
                  }
                });
              }, o(s, null, [{
                key: "VERSION",
                get: function () {
                  return "4.1.3";
                }
              }, {
                key: "Default",
                get: function () {
                  return a;
                }
              }, {
                key: "NAME",
                get: function () {
                  return t;
                }
              }, {
                key: "DATA_KEY",
                get: function () {
                  return "bs.popover";
                }
              }, {
                key: "Event",
                get: function () {
                  return h;
                }
              }, {
                key: "EVENT_KEY",
                get: function () {
                  return n;
                }
              }, {
                key: "DefaultType",
                get: function () {
                  return l;
                }
              }]), s;
            }(ue);
          return e.fn[t] = f._jQueryInterface, e.fn[t].Constructor = f, e.fn[t].noConflict = function () {
            return e.fn[t] = i, f._jQueryInterface;
          }, f;
        }(n),
        pe = function (e) {
          var t = "scrollspy",
            n = e.fn[t],
            i = {
              offset: 10,
              method: "auto",
              target: ""
            },
            r = {
              offset: "number",
              method: "string",
              target: "(string|element)"
            },
            l = {
              ACTIVATE: "activate.bs.scrollspy",
              SCROLL: "scroll.bs.scrollspy",
              LOAD_DATA_API: "load.bs.scrollspy.data-api"
            },
            c = "dropdown-item",
            u = "active",
            d = {
              DATA_SPY: '[data-spy="scroll"]',
              ACTIVE: ".active",
              NAV_LIST_GROUP: ".nav, .list-group",
              NAV_LINKS: ".nav-link",
              NAV_ITEMS: ".nav-item",
              LIST_ITEMS: ".list-group-item",
              DROPDOWN: ".dropdown",
              DROPDOWN_ITEMS: ".dropdown-item",
              DROPDOWN_TOGGLE: ".dropdown-toggle"
            },
            p = "offset",
            h = "position",
            f = function () {
              function n(t, n) {
                var i = this;
                this._element = t, this._scrollElement = "BODY" === t.tagName ? window : t, this._config = this._getConfig(n), this._selector = this._config.target + " " + d.NAV_LINKS + "," + this._config.target + " " + d.LIST_ITEMS + "," + this._config.target + " " + d.DROPDOWN_ITEMS, this._offsets = [], this._targets = [], this._activeTarget = null, this._scrollHeight = 0, e(this._scrollElement).on(l.SCROLL, function (e) {
                  return i._process(e);
                }), this.refresh(), this._process();
              }
              var f = n.prototype;
              return f.refresh = function () {
                var t = this,
                  n = this._scrollElement === this._scrollElement.window ? p : h,
                  i = "auto" === this._config.method ? n : this._config.method,
                  o = i === h ? this._getScrollTop() : 0;
                this._offsets = [], this._targets = [], this._scrollHeight = this._getScrollHeight(), [].slice.call(document.querySelectorAll(this._selector)).map(function (t) {
                  var n, r = a.getSelectorFromElement(t);
                  if (r && (n = document.querySelector(r)), n) {
                    var s = n.getBoundingClientRect();
                    if (s.width || s.height) return [e(n)[i]().top + o, r];
                  }
                  return null;
                }).filter(function (e) {
                  return e;
                }).sort(function (e, t) {
                  return e[0] - t[0];
                }).forEach(function (e) {
                  t._offsets.push(e[0]), t._targets.push(e[1]);
                });
              }, f.dispose = function () {
                e.removeData(this._element, "bs.scrollspy"), e(this._scrollElement).off(".bs.scrollspy"), this._element = null, this._scrollElement = null, this._config = null, this._selector = null, this._offsets = null, this._targets = null, this._activeTarget = null, this._scrollHeight = null;
              }, f._getConfig = function (n) {
                if ("string" != typeof (n = s({}, i, "object" == typeof n && n ? n : {})).target) {
                  var o = e(n.target).attr("id");
                  o || (o = a.getUID(t), e(n.target).attr("id", o)), n.target = "#" + o;
                }
                return a.typeCheckConfig(t, n, r), n;
              }, f._getScrollTop = function () {
                return this._scrollElement === window ? this._scrollElement.pageYOffset : this._scrollElement.scrollTop;
              }, f._getScrollHeight = function () {
                return this._scrollElement.scrollHeight || Math.max(document.body.scrollHeight, document.documentElement.scrollHeight);
              }, f._getOffsetHeight = function () {
                return this._scrollElement === window ? window.innerHeight : this._scrollElement.getBoundingClientRect().height;
              }, f._process = function () {
                var e = this._getScrollTop() + this._config.offset,
                  t = this._getScrollHeight(),
                  n = this._config.offset + t - this._getOffsetHeight();
                if (this._scrollHeight !== t && this.refresh(), e >= n) {
                  var i = this._targets[this._targets.length - 1];
                  this._activeTarget !== i && this._activate(i);
                } else {
                  if (this._activeTarget && e < this._offsets[0] && this._offsets[0] > 0) return this._activeTarget = null, void this._clear();
                  for (var o = this._offsets.length; o--;) {
                    this._activeTarget !== this._targets[o] && e >= this._offsets[o] && (void 0 === this._offsets[o + 1] || e < this._offsets[o + 1]) && this._activate(this._targets[o]);
                  }
                }
              }, f._activate = function (t) {
                this._activeTarget = t, this._clear();
                var n = this._selector.split(",");
                n = n.map(function (e) {
                  return e + '[data-target="' + t + '"],' + e + '[href="' + t + '"]';
                });
                var i = e([].slice.call(document.querySelectorAll(n.join(","))));
                i.hasClass(c) ? (i.closest(d.DROPDOWN).find(d.DROPDOWN_TOGGLE).addClass(u), i.addClass(u)) : (i.addClass(u), i.parents(d.NAV_LIST_GROUP).prev(d.NAV_LINKS + ", " + d.LIST_ITEMS).addClass(u), i.parents(d.NAV_LIST_GROUP).prev(d.NAV_ITEMS).children(d.NAV_LINKS).addClass(u)), e(this._scrollElement).trigger(l.ACTIVATE, {
                  relatedTarget: t
                });
              }, f._clear = function () {
                var t = [].slice.call(document.querySelectorAll(this._selector));
                e(t).filter(d.ACTIVE).removeClass(u);
              }, n._jQueryInterface = function (t) {
                return this.each(function () {
                  var i = e(this).data("bs.scrollspy");
                  if (i || (i = new n(this, "object" == typeof t && t), e(this).data("bs.scrollspy", i)), "string" == typeof t) {
                    if (void 0 === i[t]) throw new TypeError('No method named "' + t + '"');
                    i[t]();
                  }
                });
              }, o(n, null, [{
                key: "VERSION",
                get: function () {
                  return "4.1.3";
                }
              }, {
                key: "Default",
                get: function () {
                  return i;
                }
              }]), n;
            }();
          return e(window).on(l.LOAD_DATA_API, function () {
            for (var t = [].slice.call(document.querySelectorAll(d.DATA_SPY)), n = t.length; n--;) {
              var i = e(t[n]);
              f._jQueryInterface.call(i, i.data());
            }
          }), e.fn[t] = f._jQueryInterface, e.fn[t].Constructor = f, e.fn[t].noConflict = function () {
            return e.fn[t] = n, f._jQueryInterface;
          }, f;
        }(n),
        he = function (e) {
          var t = e.fn.tab,
            n = {
              HIDE: "hide.bs.tab",
              HIDDEN: "hidden.bs.tab",
              SHOW: "show.bs.tab",
              SHOWN: "shown.bs.tab",
              CLICK_DATA_API: "click.bs.tab.data-api"
            },
            i = "dropdown-menu",
            r = "active",
            s = "disabled",
            l = "fade",
            c = "show",
            u = ".dropdown",
            d = ".nav, .list-group",
            p = ".active",
            h = "> li > .active",
            f = '[data-toggle="tab"], [data-toggle="pill"], [data-toggle="list"]',
            m = ".dropdown-toggle",
            g = "> .dropdown-menu .active",
            v = function () {
              function t(e) {
                this._element = e;
              }
              var f = t.prototype;
              return f.show = function () {
                var t = this;
                if (!(this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE && e(this._element).hasClass(r) || e(this._element).hasClass(s))) {
                  var i, o, l = e(this._element).closest(d)[0],
                    c = a.getSelectorFromElement(this._element);
                  if (l) {
                    var u = "UL" === l.nodeName ? h : p;
                    o = (o = e.makeArray(e(l).find(u)))[o.length - 1];
                  }
                  var f = e.Event(n.HIDE, {
                    relatedTarget: this._element
                  }),
                    m = e.Event(n.SHOW, {
                      relatedTarget: o
                    });
                  if (o && e(o).trigger(f), e(this._element).trigger(m), !m.isDefaultPrevented() && !f.isDefaultPrevented()) {
                    c && (i = document.querySelector(c)), this._activate(this._element, l);
                    var g = function () {
                      var i = e.Event(n.HIDDEN, {
                        relatedTarget: t._element
                      }),
                        r = e.Event(n.SHOWN, {
                          relatedTarget: o
                        });
                      e(o).trigger(i), e(t._element).trigger(r);
                    };
                    i ? this._activate(i, i.parentNode, g) : g();
                  }
                }
              }, f.dispose = function () {
                e.removeData(this._element, "bs.tab"), this._element = null;
              }, f._activate = function (t, n, i) {
                var o = this,
                  r = ("UL" === n.nodeName ? e(n).find(h) : e(n).children(p))[0],
                  s = i && r && e(r).hasClass(l),
                  c = function () {
                    return o._transitionComplete(t, r, i);
                  };
                if (r && s) {
                  var u = a.getTransitionDurationFromElement(r);
                  e(r).one(a.TRANSITION_END, c).emulateTransitionEnd(u);
                } else c();
              }, f._transitionComplete = function (t, n, o) {
                if (n) {
                  e(n).removeClass(c + " " + r);
                  var s = e(n.parentNode).find(g)[0];
                  s && e(s).removeClass(r), "tab" === n.getAttribute("role") && n.setAttribute("aria-selected", !1);
                }
                if (e(t).addClass(r), "tab" === t.getAttribute("role") && t.setAttribute("aria-selected", !0), a.reflow(t), e(t).addClass(c), t.parentNode && e(t.parentNode).hasClass(i)) {
                  var l = e(t).closest(u)[0];
                  if (l) {
                    var d = [].slice.call(l.querySelectorAll(m));
                    e(d).addClass(r);
                  }
                  t.setAttribute("aria-expanded", !0);
                }
                o && o();
              }, t._jQueryInterface = function (n) {
                return this.each(function () {
                  var i = e(this),
                    o = i.data("bs.tab");
                  if (o || (o = new t(this), i.data("bs.tab", o)), "string" == typeof n) {
                    if (void 0 === o[n]) throw new TypeError('No method named "' + n + '"');
                    o[n]();
                  }
                });
              }, o(t, null, [{
                key: "VERSION",
                get: function () {
                  return "4.1.3";
                }
              }]), t;
            }();
          return e(document).on(n.CLICK_DATA_API, f, function (t) {
            t.preventDefault(), v._jQueryInterface.call(e(this), "show");
          }), e.fn.tab = v._jQueryInterface, e.fn.tab.Constructor = v, e.fn.tab.noConflict = function () {
            return e.fn.tab = t, v._jQueryInterface;
          }, v;
        }(n);
      ! function (e) {
        if (void 0 === e) throw new TypeError("Bootstrap's JavaScript requires jQuery. jQuery must be included before Bootstrap's JavaScript.");
        var t = e.fn.jquery.split(" ")[0].split(".");
        if (t[0] < 2 && t[1] < 9 || 1 === t[0] && 9 === t[1] && t[2] < 1 || t[0] >= 4) throw new Error("Bootstrap's JavaScript requires at least jQuery v1.9.1 but less than v4.0.0");
      }(n), t.Util = a, t.Alert = l, t.Button = c, t.Carousel = u, t.Collapse = d, t.Dropdown = le, t.Modal = ce, t.Popover = de, t.Scrollspy = pe, t.Tab = he, t.Tooltip = ue, Object.defineProperty(t, "__esModule", {
        value: !0
      });
    });
  }).call(this, n(8));
}, function (e, t) {
  var n;
  n = function () {
    return this;
  }();
  try {
    n = n || Function("return this")() || (0, eval)("this");
  } catch (e) {
    "object" == typeof window && (n = window);
  }
  e.exports = n;
}, function (e, t, n) {
  var i, o;
  /**!
   * easy-pie-chart
   * Lightweight plugin to render simple, animated and retina optimized pie charts
   *
   * @license 
   * @author Robert Fleischmann <rendro87@gmail.com> (http://robert-fleischmann.de)
   * @version 2.1.7
   **/
  i = [n(0)], void 0 === (o = function (e) {
    return function (e) {
      var t = function (e, t) {
        var n, i = document.createElement("canvas");
        e.appendChild(i), "object" == typeof G_vmlCanvasManager && G_vmlCanvasManager.initElement(i);
        var o = i.getContext("2d");
        i.width = i.height = t.size;
        var r = 1;
        window.devicePixelRatio > 1 && (r = window.devicePixelRatio, i.style.width = i.style.height = [t.size, "px"].join(""), i.width = i.height = t.size * r, o.scale(r, r)), o.translate(t.size / 2, t.size / 2), o.rotate((t.rotate / 180 - .5) * Math.PI);
        var s = (t.size - t.lineWidth) / 2;
        t.scaleColor && t.scaleLength && (s -= t.scaleLength + 2), Date.now = Date.now || function () {
          return +new Date;
        };
        var a = function (e, t, n) {
          var i = 0 >= (n = Math.min(Math.max(-1, n || 0), 1));
          o.beginPath(), o.arc(0, 0, s, 0, 2 * Math.PI * n, i), o.strokeStyle = e, o.lineWidth = t, o.stroke();
        },
          l = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || function (e) {
            window.setTimeout(e, 1e3 / 60);
          },
          c = function () {
            t.scaleColor && function () {
              var e, n;
              o.lineWidth = 1, o.fillStyle = t.scaleColor, o.save();
              for (var i = 24; i > 0; --i) i % 6 == 0 ? (n = t.scaleLength, e = 0) : (n = .6 * t.scaleLength, e = t.scaleLength - n), o.fillRect(-t.size / 2 + e, 0, n, 1), o.rotate(Math.PI / 12);
              o.restore();
            }(), t.trackColor && a(t.trackColor, t.trackWidth || t.lineWidth, 1);
          };
        this.getCanvas = function () {
          return i;
        }, this.getCtx = function () {
          return o;
        }, this.clear = function () {
          o.clearRect(t.size / -2, t.size / -2, t.size, t.size);
        }, this.draw = function (e) {
          var i;
          t.scaleColor || t.trackColor ? o.getImageData && o.putImageData ? n ? o.putImageData(n, 0, 0) : (c(), n = o.getImageData(0, 0, t.size * r, t.size * r)) : (this.clear(), c()) : this.clear(), o.lineCap = t.lineCap, i = "function" == typeof t.barColor ? t.barColor(e) : t.barColor, a(i, t.lineWidth, e / 100);
        }.bind(this), this.animate = function (e, n) {
          var i = Date.now();
          t.onStart(e, n);
          var o = function () {
            var r = Math.min(Date.now() - i, t.animate.duration),
              s = t.easing(this, r, e, n - e, t.animate.duration);
            this.draw(s), t.onStep(e, n, s), r >= t.animate.duration ? t.onStop(e, n) : l(o);
          }.bind(this);
          l(o);
        }.bind(this);
      },
        n = function (e, n) {
          var i = {
            barColor: "#ef1e25",
            trackColor: "#f9f9f9",
            scaleColor: "#dfe0e0",
            scaleLength: 5,
            lineCap: "round",
            lineWidth: 3,
            trackWidth: void 0,
            size: 110,
            rotate: 0,
            animate: {
              duration: 1e3,
              enabled: !0
            },
            easing: function (e, t, n, i, o) {
              return 1 > (t /= o / 2) ? i / 2 * t * t + n : -i / 2 * (--t * (t - 2) - 1) + n;
            },
            onStart: function (e, t) { },
            onStep: function (e, t, n) { },
            onStop: function (e, t) { }
          };
          if (void 0 !== t) i.renderer = t;
          else {
            if ("undefined" == typeof SVGRenderer) throw new Error("Please load either the SVG- or the CanvasRenderer");
            i.renderer = SVGRenderer;
          }
          var o = {},
            r = 0,
            s = function () {
              for (var t in this.el = e, this.options = o, i) i.hasOwnProperty(t) && (o[t] = n && void 0 !== n[t] ? n[t] : i[t], "function" == typeof o[t] && (o[t] = o[t].bind(this)));
              "string" == typeof o.easing && "undefined" != typeof jQuery && jQuery.isFunction(jQuery.easing[o.easing]) ? o.easing = jQuery.easing[o.easing] : o.easing = i.easing, "number" == typeof o.animate && (o.animate = {
                duration: o.animate,
                enabled: !0
              }), "boolean" != typeof o.animate || o.animate || (o.animate = {
                duration: 1e3,
                enabled: o.animate
              }), this.renderer = new o.renderer(e, o), this.renderer.draw(r), e.dataset && e.dataset.percent ? this.update(parseFloat(e.dataset.percent)) : e.getAttribute && e.getAttribute("data-percent") && this.update(parseFloat(e.getAttribute("data-percent")));
            }.bind(this);
          this.update = function (e) {
            return e = parseFloat(e), o.animate.enabled ? this.renderer.animate(r, e) : this.renderer.draw(e), r = e, this;
          }.bind(this), this.disableAnimation = function () {
            return o.animate.enabled = !1, this;
          }, this.enableAnimation = function () {
            return o.animate.enabled = !0, this;
          }, s();
        };
      e.fn.easyPieChart = function (t) {
        return this.each(function () {
          var i;
          e.data(this, "easyPieChart") || (i = e.extend({}, t, e(this).data()), e.data(this, "easyPieChart", new n(this, i)));
        });
      };
    }(e);
  }.apply(t, i)) || (e.exports = o);
}, function (module, exports) {
  ! function (window, document, $, undefined) {
    window.Validation = {
      form: [],
      labels: {},
      hasScrolled: !1
    }, "function" != typeof Object.preventExtensions && (Object.preventExtensions = function (e) {
      return e;
    });
    var _rules = {
      NOTEMPTY: /\S/,
      INTEGER: /^\d+$/,
      NUMERIC: /^\d+(?:[,\s]\d{3})*(?:\.\d+)?$/,
      MIXED: /^[\w\s-]+$/,
      NAME: /^['a-zãàáäâẽèéëêìíïîõòóöôùúüûñç\s-]+$/i,
      NOSPACE: /^(?!\s)\S*$/,
      TRIM: /^[^\s].*[^\s]$/,
      DATE: /^\d{4}-\d{2}-\d{2}(\s\d{2}:\d{2}(:\d{2})?)?$/,
      EMAIL: /^([^@]+?)@(([a-z0-9]-*)*[a-z0-9]+\.)+([a-z0-9]+)$/i,
      URL: /^(https?:\/\/)?((([a-z0-9]-*)*[a-z0-9]+\.?)*([a-z0-9]+))(\/[\w?=\.-]*)*$/,
      PHONE: /^(\()?\d{3}(\))?(-|\s)?\d{3}(-|\s)\d{4}$/,
      OPTIONAL: /\S/,
      COMPARISON: /^\s*([LV])\s*([<>]=?|==|!=)\s*([^<>=!]+?)\s*$/
    },
      _messages = {
        default: "$ contain error(s).",
        NOTEMPTY: "$ must not be empty.",
        INTEGER: "$ must be an integer.",
        NUMERIC: "$ must be numeric.",
        MIXED: "$ must be letters or numbers (no special characters).",
        NAME: "$ must not contain special characters.",
        NOSPACE: "$ must not contain spaces.",
        TRIM: "$ must not start or end with space character.",
        DATE: "$ is not a valid with format YYYY-MM-DD.",
        EMAIL: "$ is not valid.",
        URL: "$ is not valid.",
        PHONE: "$ is not a valid phone number.",
        "<": "$ must be less than % characters.",
        "<=": "$ must be less or equal to % characters.",
        ">": "$ must be greater than % characters.",
        ">=": "$ must be greater or equal to % characters.",
        "==": "$ must be equal to %",
        "!=": "$ must be different than %"
      },
      _data = {
        validation: "data-validation",
        validationMessage: "data-validation-message",
        regex: "data-validation-regex",
        regexReverse: "data-validation-regex-reverse",
        regexMessage: "data-validation-regex-message",
        group: "data-validation-group",
        label: "data-validation-label",
        errorList: "data-error-list"
      },
      _options = {
        submit: {
          settings: {
            form: null,
            display: "inline",
            insertion: "append",
            allErrors: !1,
            trigger: "click",
            button: "[type='submit']",
            errorClass: "error",
            errorListClass: "error-list",
            errorListContainer: null,
            inputContainer: null,
            clear: "focusin",
            scrollToError: !1
          },
          callback: {
            onInit: null,
            onValidate: null,
            onError: null,
            onBeforeSubmit: null,
            onSubmit: null,
            onAfterSubmit: null
          }
        },
        dynamic: {
          settings: {
            trigger: null,
            delay: 300
          },
          callback: {
            onSuccess: null,
            onError: null,
            onComplete: null
          }
        },
        rules: {},
        messages: {},
        labels: {},
        debug: !1
      },
      _supported = {
        submit: {
          settings: {
            display: ["inline", "block"],
            insertion: ["append", "prepend"],
            allErrors: [!0, !1],
            clear: ["focusin", "keypress", !1],
            trigger: ["click", "dblclick", "focusout", "hover", "mousedown", "mouseenter", "mouseleave", "mousemove", "mouseout", "mouseover", "mouseup", "toggle"]
          }
        },
        dynamic: {
          settings: {
            trigger: ["focusout", "keydown", "keypress", "keyup"]
          }
        },
        debug: [!0, !1]
      },
      Validation = function (node, options) {
        var errors = [],
          messages = {},
          formData = {},
          delegateSuffix = ".vd",
          resetSuffix = ".vr";

        function extendRules() {
          options.rules = $.extend(!0, {}, _rules, options.rules);
        }

        function extendMessages() {
          options.messages = $.extend(!0, {}, _messages, options.messages);
        }

        function extendOptions() {
          options instanceof Object || (options = {});
          var e = Object.preventExtensions($.extend(!0, {}, _options));
          for (var t in options)
            if (options.hasOwnProperty(t) && "debug" !== t)
              if (~["labels", "messages", "rules"].indexOf(t) && options[t] instanceof Object) e[t] = options[t];
              else if (_options[t] && options[t] instanceof Object) {
                for (var n in options[t])
                  if (options[t].hasOwnProperty(n))
                    if (_options[t][n] && options[t][n] instanceof Object) {
                      for (var i in options[t][n]) options[t][n].hasOwnProperty(i) && _supported[t] && _supported[t][n] && _supported[t][n][i] && -1 === $.inArray(options[t][n][i], _supported[t][n][i]) && (options.debug && window.Debug.log({
                        node: node,
                        function: "extendOptions()",
                        arguments: "{" + i + ": " + JSON.stringify(options[t][n][i]) + "}",
                        message: "WARNING - " + i.toString() + ": " + JSON.stringify(options[t][n][i]) + " - unsupported option"
                      }), delete options[t][n][i]);
                      e[t] && e[t][n] && (e[t][n] = $.extend(Object.preventExtensions(e[t][n]), options[t][n]));
                    } else options.debug && window.Debug.log({
                      node: node,
                      function: "extendOptions()",
                      arguments: "{" + n + ": " + JSON.stringify(options[t][n]) + "}",
                      message: "WARNING - " + n + " - invalid option"
                    });
              } else options.debug && window.Debug.log({
                node: node,
                function: "extendOptions()",
                arguments: "{" + t + ": " + JSON.stringify(options[t]) + "}",
                message: "WARNING - " + t + " - invalid option"
              });
          options.debug && $.inArray(options.debug, -1 !== _supported.debug) && (e.debug = options.debug), e.dynamic.settings.trigger && "keypress" === e.dynamic.settings.trigger && "keypress" === e.submit.settings.clear && (e.dynamic.settings.trigger = "keydown"), options = e;
        }

        function delegateDynamicValidation() {
          if (!options.dynamic.settings.trigger) return !1;
          if (options.debug && window.Debug.log({
            node: node,
            function: "delegateDynamicValidation()",
            message: "OK - Dynamic Validation activated on " + node.length + " form(s)"
          }), !node.find("[" + _data.validation + "],[" + _data.regex + "]")[0]) return options.debug && window.Debug.log({
            node: node,
            function: "delegateDynamicValidation()",
            arguments: "node.find([" + _data.validation + "],[" + _data.regex + "])",
            message: "ERROR - [" + _data.validation + "] not found"
          }), !1;
          var e = options.dynamic.settings.trigger + delegateSuffix;
          "focusout" !== options.dynamic.settings.trigger && (e += " change" + delegateSuffix + " paste" + delegateSuffix), $.each(node.find("[" + _data.validation + "],[" + _data.regex + "]"), function (t, n) {
            $(n).unbind(e).on(e, function (e) {
              if ($(this).is(":disabled")) return !1;
              var t = this,
                n = e.keyCode || null;
              _typeWatch(function () {
                validateInput(t) ? _executeCallback(options.dynamic.callback.onSuccess, [node, t, n]) : (displayOneError(t.name), _executeCallback(options.dynamic.callback.onError, [node, t, n, errors[t.name]])), _executeCallback(options.dynamic.callback.onComplete, [node, t, n]);
              }, options.dynamic.settings.delay);
            });
          });
        }

        function delegateValidation() {
          _executeCallback(options.submit.callback.onInit, [node]);
          var e = options.submit.settings.trigger + ".vd";
          if (options.debug && window.Debug.log({
            node: node,
            function: "delegateValidation()",
            message: "OK - Validation activated on " + node.length + " form(s)"
          }), !node.find(options.submit.settings.button)[0]) return options.debug && window.Debug.log({
            node: node,
            function: "delegateValidation()",
            arguments: "{button: " + options.submit.settings.button + "}",
            message: 'ERROR - node.find("' + options.submit.settings.button + '") not found'
          }), !1;
          node.on("submit", !1), node.find(options.submit.settings.button).off(".vd").on(e, function (e) {
            return e.preventDefault(), resetErrors(), _executeCallback(options.submit.callback.onValidate, [node]), validateForm() ? (_executeCallback(options.submit.callback.onBeforeSubmit, [node]), options.submit.callback.onSubmit ? _executeCallback(options.submit.callback.onSubmit, [node, formData]) : submitForm(), _executeCallback(options.submit.callback.onAfterSubmit, [node])) : (displayErrors(), _executeCallback(options.submit.callback.onError, [node, errors, formData])), options.debug && window.Debug.print(), !1;
          });
        }

        function validateForm() {
          var e = !0;
          return formData = {}, $.each(node.find('input:not([type="submit"]), select, textarea'), function (t, n) {
            n = $(n);
            var i = _getInputValue(n[0]),
              o = n.attr("name");
            o && (formData[o] = i), n.attr("disabled") || !n.attr(_data.validation) && !n.attr(_data.regex) || validateInput(n[0], i) || (e = !1);
          }), prepareFormData(), e;
        }

        function prepareFormData() {
          var e, t = {};
          for (var n in formData)
            if (formData.hasOwnProperty(n)) {
              0;
              for (var i = {}, o = [], r = (e = n.split(/\[(.+?)]/g)).length - 1; r >= 0; r--) "" !== e[r] ? (o.length < 1 ? i[e[r]] = Number(formData[n]) || formData[n] : (i = {})[e[r]] = o[o.length - 1], o.push(i)) : e.splice(r, 1);
              t = $.extend(!0, t, i);
            } formData = t;
        }

        function validateInput(e, t) {
          var n = $(e).attr("name");
          t = t || _getInputValue(e);
          if (!n) return options.debug && window.Debug.log({
            node: node,
            function: "validateInput()",
            arguments: '$(input).attr("name")',
            message: "ERROR - Missing input [name]"
          }), !1;
          var i = n.replace(/]$/, "").split(/]\[|[[\]]/g),
            o = window.Validation.labels[n] || options.labels[n] || $(e).attr(_data.label) || i[i.length - 1],
            r = $(e).attr(_data.validation),
            s = $(e).attr(_data.validationMessage),
            a = $(e).attr(_data.regex),
            l = !($(e).attr(_data.regexReverse) === undefined),
            c = $(e).attr(_data.regexMessage),
            u = !1;
          if (r && (r = _api._splitValidation(r)), r instanceof Array && r.length > 0) {
            if ("" === $.trim(t) && ~r.indexOf("OPTIONAL")) return !0;
            $.each(r, function (e, i) {
              if (!0 === u) return !0;
              try {
                validateRule(t, i);
              } catch (e) {
                !s && options.submit.settings.allErrors || (u = !0), e[0] = s || e[0], registerError(n, e[0].replace("SAR", o).replace("%", e[1]));
              }
            });
          }
          if (a) {
            var d = _buildRegexFromString(a);
            if (!(d instanceof RegExp)) return !0;
            try {
              validateRule(t, d, l);
            } catch (e) {
              e[0] = c || e[0], registerError(n, e[0].replace("SAR", o));
            }
          }
          return !errors[n] || errors[n] instanceof Array && 0 === errors[n].length;
        }

        function validateRule(value, rule, reversed) {
          if (rule instanceof RegExp) {
            var isValid = rule.test(value);
            if (reversed && (isValid = !isValid), !isValid) throw [options.messages.default, ""];
          } else if (options.rules[rule]) {
            if (!options.rules[rule].test(value)) throw [options.messages[rule], ""];
          } else {
            var comparison = rule.match(options.rules.COMPARISON);
            if (comparison && 4 === comparison.length) {
              var type = comparison[1],
                operator = comparison[2],
                compared = comparison[3],
                comparedValue;
              switch (type) {
                case "L":
                  if (isNaN(compared)) return options.debug && window.Debug.log({
                    node: node,
                    function: "validateRule()",
                    arguments: "compare: " + compared + " rule: " + rule,
                    message: 'WARNING - Invalid rule, "L" compare must be numeric'
                  }), !1;
                  if (!value || !1 === eval(value.length + operator + parseFloat(compared))) throw [options.messages[operator], compared];
                  break;
                case "V":
                default:
                  if (isNaN(compared)) {
                    if (comparedValue = node.find('[name="' + compared + '"]').val(), !comparedValue) return options.debug && window.Debug.log({
                      node: node,
                      function: "validateRule()",
                      arguments: "compare: " + compared + " rule: " + rule,
                      message: 'WARNING - Unable to find compared field [name="' + compared + '"]'
                    }), !1;
                    if (!value || !eval('"' + encodeURIComponent(value) + '"' + operator + '"' + encodeURIComponent(comparedValue) + '"')) throw [options.messages[operator].replace(" characters", ""), compared];
                  } else if (!value || isNaN(value) || !eval(value + operator + parseFloat(compared))) throw [options.messages[operator].replace(" characters", ""), compared];
              }
            } else options.debug && window.Debug.log({
              node: node,
              function: "validateRule()",
              arguments: "value: " + value + " rule: " + rule,
              message: "WARNING - Invalid comparison"
            });
          }
        }

        function registerError(e, t) {
          errors[e] || (errors[e] = []), t = t.capitalize();
          for (var n = !1, i = 0; i < errors[e].length; i++)
            if (errors[e][i] === t) {
              n = !0;
              break;
            } n || errors[e].push(t);
        }

        function displayOneError(e) {
          var t, n, i, o, r, s, a = '<div class="' + options.submit.settings.errorListClass + '" ' + _data.errorList + "><ul></ul></div>";
          if (!errors.hasOwnProperty(e)) return !1;
          if (o = null, !(t = node.find('[name="' + e + '"]'))[0]) return options.debug && window.Debug.log({
            node: node,
            function: "displayOneError()",
            arguments: '[name="' + e + '"]',
            message: 'ERROR - Unable to find input by name "' + e + '"'
          }), !1;
          if ((r = t.attr(_data.group)) ? (s = node.find('[name="' + e + '"]'), (o = node.find('[id="' + r + '"]'))[0] && (o.addClass(options.submit.settings.errorClass), i = o)) : (t.addClass(options.submit.settings.errorClass), options.submit.settings.inputContainer && t.parentsUntil(node, options.submit.settings.inputContainer).addClass(options.submit.settings.errorClass), (n = t.attr("id")) && (o = node.find('label[for="' + n + '"]')[0]), o || (o = t.parentsUntil(node, "label")[0]), o && (o = $(o)).addClass(options.submit.settings.errorClass)), "inline" === options.submit.settings.display ? i = options.submit.settings.errorListContainer ? t.parentsUntil(node, options.submit.settings.errorListContainer) : i || t.parent() : "block" === options.submit.settings.display && (i = node), "inline" === options.submit.settings.display && i.find("[" + _data.errorList + "]")[0]) return !1;
          ("inline" === options.submit.settings.display || "block" === options.submit.settings.display && !i.find("[" + _data.errorList + "]")[0]) && ("append" === options.submit.settings.insertion ? i.append(a) : "prepend" === options.submit.settings.insertion && i.prepend(a));
          for (var l = 0; l < errors[e].length; l++) i.find("[" + _data.errorList + "] ul").append("<li>" + errors[e][l] + "</li>");
          if (options.submit.settings.clear || options.dynamic.settings.trigger) {
            r && s && (t = s);
            var c = "coucou" + resetSuffix;
            options.submit.settings.clear && (c += " " + options.submit.settings.clear + resetSuffix, ~["radio", "checkbox"].indexOf(t[0].type) && (c += " change" + resetSuffix)), options.dynamic.settings.trigger && (c += " " + options.dynamic.settings.trigger + resetSuffix, "focusout" === options.dynamic.settings.trigger || ~["radio", "checkbox"].indexOf(t[0].type) || (c += " change" + resetSuffix + " paste" + resetSuffix)), t.unbind(c).on(c, function (e, t, n, i, o) {
              return function () {
                o ? $(n).hasClass(options.submit.settings.errorClass) && resetOneError(e, t, n, i, o) : $(t).hasClass(options.submit.settings.errorClass) && resetOneError(e, t, n, i);
              };
            }(e, t, o, i, r));
          }
          if (options.submit.settings.scrollToError && !window.Validation.hasScrolled) {
            window.Validation.hasScrolled = !0;
            var u = parseFloat(options.submit.settings.scrollToError.offset) || 0,
              d = parseFloat(options.submit.settings.scrollToError.duration) || 500,
              p = "block" === options.submit.settings.display ? i : t;
            $("html, body").animate({
              scrollTop: p.offset().top + u
            }, d);
          }
        }

        function displayErrors() {
          for (var e in errors) errors.hasOwnProperty(e) && displayOneError(e);
        }

        function resetOneError(e, t, n, i, o) {
          if (delete errors[e], i) options.submit.settings.inputContainer && (o ? n : t).parentsUntil(node, options.submit.settings.inputContainer).removeClass(options.submit.settings.errorClass), n && n.removeClass(options.submit.settings.errorClass), t.removeClass(options.submit.settings.errorClass), "inline" === options.submit.settings.display && i.find("[" + _data.errorList + "]").remove();
          else {
            if (!t && !(t = node.find('[name="' + e + '"]'))[0]) return options.debug && window.Debug.log({
              node: node,
              function: "resetOneError()",
              arguments: '[name="' + e + '"]',
              message: 'ERROR - Unable to find input by name "' + e + '"'
            }), !1;
            t.trigger("coucou" + resetSuffix);
          }
        }

        function resetErrors() {
          errors = [], window.Validation.hasScrolled = !1, node.find("[" + _data.errorList + "]").remove(), node.find("." + options.submit.settings.errorClass).removeClass(options.submit.settings.errorClass);
        }

        function submitForm() {
          node[0].submit();
        }

        function destroy() {
          return resetErrors(), node.find("[" + _data.validation + "],[" + _data.regex + "]").off(delegateSuffix + " " + resetSuffix), node.find(options.submit.settings.button).off(delegateSuffix).on("click" + delegateSuffix, function () {
            $(this).closest("form")[0].submit();
          }), !0;
        }
        window.Validation.hasScrolled = !1;
        var _getInputValue = function (e) {
          var t;
          switch ($(e).attr("type")) {
            case "checkbox":
              t = $(e).is(":checked") ? 1 : "";
              break;
            case "radio":
              t = node.find('input[name="' + $(e).attr("name") + '"]:checked').val() || "";
              break;
            default:
              t = $(e).val();
          }
          return t;
        },
          _typeWatch = function () {
            var e = 0;
            return function (t, n) {
              clearTimeout(e), e = setTimeout(t, n);
            };
          }(),
          _executeCallback = function (e, t) {
            if (!e) return !1;
            var n;
            if ("function" == typeof e) n = e;
            else if ("string" == typeof e || e instanceof Array) {
              n = window, "string" == typeof e && (e = [e, []]);
              for (var i = e[0].split("."), o = e[1], r = !0, s = 0; s < i.length;) {
                if (void 0 === n) {
                  r = !1;
                  break;
                }
                n = n[i[s++]];
              }
              if (!r || "function" != typeof n) return options.debug && window.Debug.log({
                node: node,
                function: "_executeCallback()",
                arguments: JSON.stringify(e),
                message: 'WARNING - Invalid callback function"'
              }), !1;
            }
            return n.apply(this, $.merge(o || [], t || [])), !0;
          };
        return this.__construct = (extendOptions(), extendRules(), extendMessages(), delegateDynamicValidation(), delegateValidation(), void (options.debug && window.Debug.print())), {
          registerError: registerError,
          displayOneError: displayOneError,
          displayErrors: displayErrors,
          resetOneError: resetOneError,
          resetErrors: resetErrors,
          destroy: destroy
        };
      };
    $.fn.validate = $.validate = function (e) {
      return _api.validate(this, e);
    }, $.fn.addValidation = function (e) {
      return _api.addValidation(this, e);
    }, $.fn.removeValidation = function (e) {
      return _api.removeValidation(this, e);
    }, $.fn.addError = function (e) {
      return _api.addError(this, e);
    }, $.fn.removeError = function (e) {
      return _api.removeError(this, e);
    }, $.fn.alterValidationRules = $.alterValidationRules = function (e) {
      e instanceof Array || (e = [e]);
      for (var t = 0; t < e.length; t++) _api.alterValidationRules(e[t]);
    };
    var _api = {
      _formatValidation: function (e) {
        return "[" === (e = e.toString().replace(/\s/g, "")).charAt(0) && "]" === e.charAt(e.length - 1) && (e = e.replace(/^\[|]$/g, "")), e;
      },
      _splitValidation: function (e) {
        for (var t, n = this._formatValidation(e).split(","), i = 0; i < n.length; i++) t = n[i], /^[a-z]+$/i.test(t) && (n[i] = t.toUpperCase());
        return n;
      },
      _joinValidation: function (e) {
        return "[" + e.join(", ") + "]";
      },
      validate: function (e, t) {
        if ("function" == typeof e) {
          if (!t.submit.settings.form) return window.Debug.log({
            node: e,
            function: "$.validate()",
            arguments: "",
            message: 'Undefined property "options.submit.settings.form - Validation dropped'
          }), void window.Debug.print();
          if (!(e = $(t.submit.settings.form))[0] || "form" !== e[0].nodeName.toLowerCase()) return window.Debug.log({
            function: "$.validate()",
            arguments: t.submit.settings.form,
            message: "Unable to find jQuery form element - Validation dropped"
          }), void window.Debug.print();
        } else if (void 0 === e[0]) return window.Debug.log({
          node: e,
          function: "$.validate()",
          arguments: '$("' + e.selector + '").validate()',
          message: "Unable to find jQuery form element - Validation dropped"
        }), void window.Debug.print();
        return "destroy" === t ? window.Validation.form[e.selector] ? void window.Validation.form[e.selector].destroy() : (window.Debug.log({
          node: e,
          function: '$.validate("destroy")',
          arguments: "",
          message: 'Unable to destroy "' + e.selector + "\", perhaps it's already destroyed?"
        }), void window.Debug.print()) : e.each(function () {
          window.Validation.form[e.selector] = new Validation($(this), t);
        });
      },
      addValidation: function (e, t) {
        var n = this;
        return !!(t = n._splitValidation(t)) && e.each(function () {
          for (var e, i = $(this), o = i.attr(_data.validation), r = o && o.length ? n._splitValidation(o) : [], s = 0; s < t.length; s++) e = n._formatValidation(t[s]), -1 === $.inArray(e, r) && r.push(e);
          r.length && i.attr(_data.validation, n._joinValidation(r));
        });
      },
      removeValidation: function (e, t) {
        var n = this;
        return !!(t = n._splitValidation(t)) && e.each(function () {
          var e, i, o = $(this),
            r = o.attr(_data.validation),
            s = r && r.length ? n._splitValidation(r) : [];
          if (!s.length) return o.removeAttr(_data.validation), !0;
          for (var a = 0; a < t.length; a++) e = n._formatValidation(t[a]), -1 !== (i = $.inArray(e, s)) && s.splice(i, 1);
          if (!s.length) return o.removeAttr(_data.validation), !0;
          o.attr(_data.validation, n._joinValidation(s));
        });
      },
      addError: function (e, t) {
        if (!window.Validation.form[e.selector]) return window.Debug.log({
          node: e,
          function: "$.addError()",
          arguments: "window.Validation.form[" + e.selector + "]",
          message: "ERROR - Invalid node selector"
        }), window.Debug.print(), !1;
        if ("object" != typeof t || "[object Object]" !== Object.prototype.toString.call(t)) return window.Debug.log({
          node: e,
          function: "$.addError()",
          arguments: "window.Validation.form[" + e.selector + "]",
          message: "ERROR - Invalid argument, must be type object"
        }), window.Debug.print(), !1;
        var n, i = !0;
        for (var o in t)
          if (t.hasOwnProperty(o))
            if (t[o] instanceof Array || (t[o] = [t[o]]), (n = $(e.selector).find('[name="' + o + '"]'))[0]) {
              i && (window.Validation.hasScrolled = !1, i = !1), window.Validation.form[e.selector].resetOneError(o, n);
              for (var r = 0; r < t[o].length; r++) "string" == typeof t[o][r] ? window.Validation.form[e.selector].registerError(o, t[o][r]) : (window.Debug.log({
                node: e,
                function: "$.addError()",
                arguments: t[o][r],
                message: 'ERROR - Invalid error object property - Accepted format: {"inputName": "errorString"} or {"inputName": ["errorString", "errorString"]}'
              }), window.Debug.print());
              window.Validation.form[e.selector].displayOneError(o);
            } else window.Debug.log({
              node: e,
              function: "$.addError()",
              arguments: o,
              message: "ERROR - Unable to find $(" + e.selector + ').find("[name="' + o + '"]")'
            }), window.Debug.print();
      },
      removeError: function (e, t) {
        if (!window.Validation.form[e.selector]) return window.Debug.log({
          node: e,
          function: "$.removeError()",
          arguments: "window.Validation.form[" + e.selector + "]",
          message: "ERROR - Invalid node selector"
        }), window.Debug.print(), !1;
        if (!t) return window.Validation.form[e.selector].resetErrors(), !1;
        if ("object" == typeof t && "[object Array]" !== Object.prototype.toString.call(t)) return window.Debug.log({
          node: e,
          function: "$.removeError()",
          arguments: t,
          message: "ERROR - Invalid inputName, must be type String or Array"
        }), window.Debug.print(), !1;
        var n;
        t instanceof Array || (t = [t]);
        for (var i = 0; i < t.length; i++)(n = $(e.selector).find('[name="' + t[i] + '"]'))[0] ? window.Validation.form[e.selector].resetOneError(t[i], n) : (window.Debug.log({
          node: e,
          function: "$.removeError()",
          arguments: t[i],
          message: "ERROR - Unable to find $(" + e.selector + ').find("[name="' + t[i] + '"]")'
        }), window.Debug.print());
      },
      alterValidationRules: function (e) {
        if (!e.rule || !e.regex && !e.message) return window.Debug.log({
          function: "$.alterValidationRules()",
          message: "ERROR - Missing one or multiple parameter(s) {rule, regex, message}"
        }), window.Debug.print(), !1;
        if (e.rule = e.rule.toUpperCase(), e.regex) {
          var t = _buildRegexFromString(e.regex);
          if (!(t instanceof RegExp)) return window.Debug.log({
            function: "$.alterValidationRules(rule)",
            arguments: t.toString(),
            message: "ERROR - Invalid rule"
          }), window.Debug.print(), !1;
          _rules[e.rule] = t;
        }
        return e.message && (_messages[e.rule] = e.message), !0;
      }
    };

    function _buildRegexFromString(e) {
      if (!e || "string" != typeof e && !(e instanceof RegExp)) return s(), !1;
      "string" != typeof e && (e = e.toString());
      for (var t, n, i, o = e.charAt(0), r = e.length - 1; r > 0 && /[gimsxeU]/.test(e.charAt(r));) r--;
      e.charAt(r) !== o && (o = null), o && r !== e.length - 1 && (n = e.substr(r + 1, e.length - 1)), t = o ? e.substr(1, r - 1) : e;
      try {
        i = new RegExp(t, n);
      } catch (e) {
        return s(), !1;
      }
      return i;

      function s() {
        window.Debug.log({
          function: "_buildRegexFromString()",
          arguments: "{pattern: {" + (t || "") + "}, modifier: {" + (n || "") + "}",
          message: "WARNING - Invalid regex given: " + e
        }), window.Debug.print();
      }
    }
    window.Debug = {
      table: {},
      log: function (e) {
        if (!e.message || "string" != typeof e.message) return !1;
        this.table[e.message] = $.extend(Object.preventExtensions({
          node: "",
          function: "",
          arguments: ""
        }), e);
      },
      print: function () {
        if ($.isEmptyObject(this.table)) return !1;
        console.group !== undefined || console.table !== undefined ? (console.groupCollapsed("--- jQuery Form Validation Debug ---"), console.table ? console.table(this.table) : $.each(this.table, function (e, t) {
          console.log(t.Name + ": " + t["Execution Time"] + "ms");
        }), console.groupEnd()) : console.log("Debug is not available on your current browser, try the most recent version of Chrome or Firefox."), this.table = {};
      }
    }, String.prototype.capitalize = function () {
      return this.charAt(0).toUpperCase() + this.slice(1);
    }, Array.prototype.indexOf || (Array.prototype.indexOf = function (e) {
      var t = this.length >>> 0,
        n = Number(arguments[1]) || 0;
      for ((n = n < 0 ? Math.ceil(n) : Math.floor(n)) < 0 && (n += t); n < t; n++)
        if (n in this && this[n] === e) return n;
      return -1;
    }), JSON || JSON.stringify || (JSON.stringify = function (e) {
      var t = typeof e;
      if ("object" !== t || null === e) return "string" === t && (e = '"' + e + '"'), String(e);
      var n, i, o = [],
        r = e && e.constructor === Array;
      for (n in e) "string" === (t = typeof (i = e[n])) ? i = '"' + i + '"' : "object" === t && null !== i && (i = JSON.stringify(i)), o.push((r ? "" : '"' + n + '": ') + String(i));
      return (r ? "[" : "{") + String(o) + (r ? "]" : "}");
    });
  }(window, document, window.jQuery);
}, function (e, t, n) {
  var i, o;
  /*!
   * Bootstrap-select v1.12.4 (http://silviomoreto.github.io/bootstrap-select)
   *
   * Copyright 2013-2017 bootstrap-select
   * Licensed under MIT (https://github.com/silviomoreto/bootstrap-select/blob/master/LICENSE)
   */
  i = [n(0)], void 0 === (o = function (e) {
    return function (e) {
      ! function (e) {
        "use strict";
        String.prototype.includes || function () {
          var e = {}.toString,
            t = function () {
              try {
                var e = {},
                  t = Object.defineProperty,
                  n = t(e, e, e) && t;
              } catch (e) { }
              return n;
            }(),
            n = "".indexOf,
            i = function (t) {
              if (null == this) throw new TypeError;
              var i = String(this);
              if (t && "[object RegExp]" == e.call(t)) throw new TypeError;
              var o = i.length,
                r = String(t),
                s = r.length,
                a = arguments.length > 1 ? arguments[1] : void 0,
                l = a ? Number(a) : 0;
              l != l && (l = 0);
              var c = Math.min(Math.max(l, 0), o);
              return !(s + c > o) && -1 != n.call(i, r, l);
            };
          t ? t(String.prototype, "includes", {
            value: i,
            configurable: !0,
            writable: !0
          }) : String.prototype.includes = i;
        }(), String.prototype.startsWith || function () {
          var e = function () {
            try {
              var e = {},
                t = Object.defineProperty,
                n = t(e, e, e) && t;
            } catch (e) { }
            return n;
          }(),
            t = {}.toString,
            n = function (e) {
              if (null == this) throw new TypeError;
              var n = String(this);
              if (e && "[object RegExp]" == t.call(e)) throw new TypeError;
              var i = n.length,
                o = String(e),
                r = o.length,
                s = arguments.length > 1 ? arguments[1] : void 0,
                a = s ? Number(s) : 0;
              a != a && (a = 0);
              var l = Math.min(Math.max(a, 0), i);
              if (r + l > i) return !1;
              for (var c = -1; ++c < r;)
                if (n.charCodeAt(l + c) != o.charCodeAt(c)) return !1;
              return !0;
            };
          e ? e(String.prototype, "startsWith", {
            value: n,
            configurable: !0,
            writable: !0
          }) : String.prototype.startsWith = n;
        }(), Object.keys || (Object.keys = function (e, t, n) {
          for (t in n = [], e) n.hasOwnProperty.call(e, t) && n.push(t);
          return n;
        });
        var t = {
          useDefault: !1,
          _set: e.valHooks.select.set
        };
        e.valHooks.select.set = function (n, i) {
          return i && !t.useDefault && e(n).data("selected", !0), t._set.apply(this, arguments);
        };
        var n = null,
          i = function () {
            try {
              return new Event("change"), !0;
            } catch (e) {
              return !1;
            }
          }();

        function o(t) {
          return e.each([{
            re: /[\xC0-\xC6]/g,
            ch: "A"
          }, {
            re: /[\xE0-\xE6]/g,
            ch: "a"
          }, {
            re: /[\xC8-\xCB]/g,
            ch: "E"
          }, {
            re: /[\xE8-\xEB]/g,
            ch: "e"
          }, {
            re: /[\xCC-\xCF]/g,
            ch: "I"
          }, {
            re: /[\xEC-\xEF]/g,
            ch: "i"
          }, {
            re: /[\xD2-\xD6]/g,
            ch: "O"
          }, {
            re: /[\xF2-\xF6]/g,
            ch: "o"
          }, {
            re: /[\xD9-\xDC]/g,
            ch: "U"
          }, {
            re: /[\xF9-\xFC]/g,
            ch: "u"
          }, {
            re: /[\xC7-\xE7]/g,
            ch: "c"
          }, {
            re: /[\xD1]/g,
            ch: "N"
          }, {
            re: /[\xF1]/g,
            ch: "n"
          }], function () {
            t = t ? t.replace(this.re, this.ch) : "";
          }), t;
        }
        e.fn.triggerNative = function (e) {
          var t, n = this[0];
          n.dispatchEvent ? (i ? t = new Event(e, {
            bubbles: !0
          }) : (t = document.createEvent("Event")).initEvent(e, !0, !1), n.dispatchEvent(t)) : n.fireEvent ? ((t = document.createEventObject()).eventType = e, n.fireEvent("on" + e, t)) : this.trigger(e);
        }, e.expr.pseudos.icontains = function (t, n, i) {
          var o = e(t).find("a"),
            r = (o.data("tokens") || o.text()).toString().toUpperCase();
          return r.includes(i[3].toUpperCase());
        }, e.expr.pseudos.ibegins = function (t, n, i) {
          var o = e(t).find("a"),
            r = (o.data("tokens") || o.text()).toString().toUpperCase();
          return r.startsWith(i[3].toUpperCase());
        }, e.expr.pseudos.aicontains = function (t, n, i) {
          var o = e(t).find("a"),
            r = (o.data("tokens") || o.data("normalizedText") || o.text()).toString().toUpperCase();
          return r.includes(i[3].toUpperCase());
        }, e.expr.pseudos.aibegins = function (t, n, i) {
          var o = e(t).find("a"),
            r = (o.data("tokens") || o.data("normalizedText") || o.text()).toString().toUpperCase();
          return r.startsWith(i[3].toUpperCase());
        };
        var r = function (e) {
          var t = function (t) {
            return e[t];
          },
            n = "(?:" + Object.keys(e).join("|") + ")",
            i = RegExp(n),
            o = RegExp(n, "g");
          return function (e) {
            return e = null == e ? "" : "" + e, i.test(e) ? e.replace(o, t) : e;
          };
        },
          s = r({
            "&": "&amp;",
            "<": "&lt;",
            ">": "&gt;",
            '"': "&quot;",
            "'": "&#x27;",
            "`": "&#x60;"
          }),
          a = r({
            "&amp;": "&",
            "&lt;": "<",
            "&gt;": ">",
            "&quot;": '"',
            "&#x27;": "'",
            "&#x60;": "`"
          }),
          l = function (n, i) {
            t.useDefault || (e.valHooks.select.set = t._set, t.useDefault = !0), this.$element = e(n), this.$newElement = null, this.$button = null, this.$menu = null, this.$lis = null, this.options = i, null === this.options.title && (this.options.title = this.$element.attr("title"));
            var o = this.options.windowPadding;
            "number" == typeof o && (this.options.windowPadding = [o, o, o, o]), this.val = l.prototype.val, this.render = l.prototype.render, this.refresh = l.prototype.refresh, this.setStyle = l.prototype.setStyle, this.selectAll = l.prototype.selectAll, this.deselectAll = l.prototype.deselectAll, this.destroy = l.prototype.destroy, this.remove = l.prototype.remove, this.show = l.prototype.show, this.hide = l.prototype.hide, this.init();
          };

        function c(t) {
          var n, i = arguments,
            o = t;
          [].shift.apply(i);
          var r = this.each(function () {
            var t = e(this);
            if (t.is("select")) {
              var r = t.data("selectpicker"),
                s = "object" == typeof o && o;
              if (r) {
                if (s)
                  for (var a in s) s.hasOwnProperty(a) && (r.options[a] = s[a]);
              } else {
                var c = e.extend({}, l.DEFAULTS, e.fn.selectpicker.defaults || {}, t.data(), s);
                c.template = e.extend({}, l.DEFAULTS.template, e.fn.selectpicker.defaults ? e.fn.selectpicker.defaults.template : {}, t.data().template, s.template), t.data("selectpicker", r = new l(this, c));
              }
              "string" == typeof o && (n = r[o] instanceof Function ? r[o].apply(r, i) : r.options[o]);
            }
          });
          return void 0 !== n ? n : r;
        }
        l.VERSION = "1.12.4", l.DEFAULTS = {
          noneSelectedText: "Nothing selected",
          noneResultsText: "No results matched {0}",
          countSelectedText: function (e, t) {
            return 1 == e ? "{0} item selected" : "{0} items selected";
          },
          maxOptionsText: function (e, t) {
            return [1 == e ? "Limit reached ({n} item max)" : "Limit reached ({n} items max)", 1 == t ? "Group limit reached ({n} item max)" : "Group limit reached ({n} items max)"];
          },
          selectAllText: "Select All",
          deselectAllText: "Deselect All",
          doneButton: !1,
          doneButtonText: "Close",
          multipleSeparator: ", ",
          styleBase: "btn",
          style: "btn-default",
          size: "auto",
          title: null,
          selectedTextFormat: "values",
          width: !1,
          container: !1,
          hideDisabled: !1,
          showSubtext: !1,
          showIcon: !0,
          showContent: !0,
          dropupAuto: !0,
          header: !1,
          liveSearch: !1,
          liveSearchPlaceholder: null,
          liveSearchNormalize: !1,
          liveSearchStyle: "contains",
          actionsBox: !1,
          iconBase: "glyphicon",
          tickIcon: "glyphicon-ok",
          showTick: !1,
          template: {
            caret: '<span class="caret"></span>'
          },
          maxOptions: !1,
          mobile: !1,
          selectOnTab: !1,
          dropdownAlignRight: !1,
          windowPadding: 0
        }, l.prototype = {
          constructor: l,
          init: function () {
            var t = this,
              n = this.$element.attr("id");
            this.$element.addClass("bs-select-hidden"), this.liObj = {}, this.multiple = this.$element.prop("multiple"), this.autofocus = this.$element.prop("autofocus"), this.$newElement = this.createView(), this.$element.after(this.$newElement).appendTo(this.$newElement), this.$button = this.$newElement.children("button"), this.$menu = this.$newElement.children(".dropdown-menu"), this.$menuInner = this.$menu.children(".inner"), this.$searchbox = this.$menu.find("input"), this.$element.removeClass("bs-select-hidden"), !0 === this.options.dropdownAlignRight && this.$menu.addClass("dropdown-menu-right"), void 0 !== n && (this.$button.attr("data-id", n), e('label[for="' + n + '"]').click(function (e) {
              e.preventDefault(), t.$button.focus();
            })), this.checkDisabled(), this.clickListener(), this.options.liveSearch && this.liveSearchListener(), this.render(), this.setStyle(), this.setWidth(), this.options.container && this.selectPosition(), this.$menu.data("this", this), this.$newElement.data("this", this), this.options.mobile && this.mobile(), this.$newElement.on({
              "hide.bs.dropdown": function (e) {
                t.$menuInner.attr("aria-expanded", !1), t.$element.trigger("hide.bs.select", e);
              },
              "hidden.bs.dropdown": function (e) {
                t.$element.trigger("hidden.bs.select", e);
              },
              "show.bs.dropdown": function (e) {
                t.$menuInner.attr("aria-expanded", !0), t.$element.trigger("show.bs.select", e);
              },
              "shown.bs.dropdown": function (e) {
                t.$element.trigger("shown.bs.select", e);
              }
            }), t.$element[0].hasAttribute("required") && this.$element.on("invalid", function () {
              t.$button.addClass("bs-invalid"), t.$element.on({
                "focus.bs.select": function () {
                  t.$button.focus(), t.$element.off("focus.bs.select");
                },
                "shown.bs.select": function () {
                  t.$element.val(t.$element.val()).off("shown.bs.select");
                },
                "rendered.bs.select": function () {
                  this.validity.valid && t.$button.removeClass("bs-invalid"), t.$element.off("rendered.bs.select");
                }
              }), t.$button.on("blur.bs.select", function () {
                t.$element.focus().blur(), t.$button.off("blur.bs.select");
              });
            }), setTimeout(function () {
              t.$element.trigger("loaded.bs.select");
            });
          },
          createDropdown: function () {
            var t = this.multiple || this.options.showTick ? " show-tick" : "",
              n = this.$element.parent().hasClass("input-group") ? " input-group-btn" : "",
              i = this.autofocus ? " autofocus" : "",
              o = this.options.header ? '<div class="popover-title"><button type="button" class="close" aria-hidden="true">&times;</button>' + this.options.header + "</div>" : "",
              r = this.options.liveSearch ? '<div class="bs-searchbox"><input type="text" class="form-control" autocomplete="off"' + (null === this.options.liveSearchPlaceholder ? "" : ' placeholder="' + s(this.options.liveSearchPlaceholder) + '"') + ' role="textbox" aria-label="Search"></div>' : "",
              a = this.multiple && this.options.actionsBox ? '<div class="bs-actionsbox"><div class="btn-group btn-group-sm btn-block"><button type="button" class="actions-btn bs-select-all btn btn-default">' + this.options.selectAllText + '</button><button type="button" class="actions-btn bs-deselect-all btn btn-default">' + this.options.deselectAllText + "</button></div></div>" : "",
              l = this.multiple && this.options.doneButton ? '<div class="bs-donebutton"><div class="btn-group btn-block"><button type="button" class="btn btn-sm btn-default">' + this.options.doneButtonText + "</button></div></div>" : "",
              c = '<div class="btn-group bootstrap-select' + t + n + '"><button type="button" class="' + this.options.styleBase + ' dropdown-toggle" data-toggle="dropdown"' + i + ' role="button"><span class="filter-option pull-left"></span>&nbsp;<span class="bs-caret">' + this.options.template.caret + '</span></button><div class="dropdown-menu open" role="combobox">' + o + r + a + '<ul class="dropdown-menu inner" role="listbox" aria-expanded="false"></ul>' + l + "</div></div>";
            return e(c);
          },
          createView: function () {
            var e = this.createDropdown(),
              t = this.createLi();
            return e.find("ul")[0].innerHTML = t, e;
          },
          reloadLi: function () {
            var e = this.createLi();
            this.$menuInner[0].innerHTML = e;
          },
          createLi: function () {
            var t = this,
              n = [],
              i = 0,
              r = document.createElement("option"),
              a = -1,
              l = function (e, t, n, i) {
                return "<li" + (void 0 !== n && "" !== n ? ' class="' + n + '"' : "") + (void 0 !== t && null !== t ? ' data-original-index="' + t + '"' : "") + (void 0 !== i && null !== i ? 'data-optgroup="' + i + '"' : "") + ">" + e + "</li>";
              },
              c = function (n, i, r, a) {
                return '<a tabindex="0"' + (void 0 !== i ? ' class="' + i + '"' : "") + (r ? ' style="' + r + '"' : "") + (t.options.liveSearchNormalize ? ' data-normalized-text="' + o(s(e(n).html())) + '"' : "") + (void 0 !== a || null !== a ? ' data-tokens="' + a + '"' : "") + ' role="option">' + n + '<span class="' + t.options.iconBase + " " + t.options.tickIcon + ' check-mark"></span></a>';
              };
            if (this.options.title && !this.multiple && (a--, !this.$element.find(".bs-title-option").length)) {
              var u = this.$element[0];
              r.className = "bs-title-option", r.innerHTML = this.options.title, r.value = "", u.insertBefore(r, u.firstChild);
              var d = e(u.options[u.selectedIndex]);
              void 0 === d.attr("selected") && void 0 === this.$element.data("selected") && (r.selected = !0);
            }
            var p = this.$element.find("option");
            return p.each(function (o) {
              var r = e(this);
              if (a++, !r.hasClass("bs-title-option")) {
                var u, d = this.className || "",
                  h = s(this.style.cssText),
                  f = r.data("content") ? r.data("content") : r.html(),
                  m = r.data("tokens") ? r.data("tokens") : null,
                  g = void 0 !== r.data("subtext") ? '<small class="text-muted">' + r.data("subtext") + "</small>" : "",
                  v = void 0 !== r.data("icon") ? '<span class="' + t.options.iconBase + " " + r.data("icon") + '"></span> ' : "",
                  b = r.parent(),
                  y = "OPTGROUP" === b[0].tagName,
                  w = y && b[0].disabled,
                  C = this.disabled || w;
                if ("" !== v && C && (v = "<span>" + v + "</span>"), t.options.hideDisabled && (C && !y || w)) return u = r.data("prevHiddenIndex"), r.next().data("prevHiddenIndex", void 0 !== u ? u : o), void a--;
                if (r.data("content") || (f = v + '<span class="text">' + f + g + "</span>"), y && !0 !== r.data("divider")) {
                  if (t.options.hideDisabled && C) {
                    if (void 0 === b.data("allOptionsDisabled")) {
                      var x = b.children();
                      b.data("allOptionsDisabled", x.filter(":disabled").length === x.length);
                    }
                    if (b.data("allOptionsDisabled")) return void a--;
                  }
                  var _ = " " + b[0].className || !1;
                  if (0 === r.index()) {
                    i += 1;
                    var $ = b[0].label,
                      k = void 0 !== b.data("subtext") ? '<small class="text-muted">' + b.data("subtext") + "</small>" : "",
                      T = b.data("icon") ? '<span class="' + t.options.iconBase + " " + b.data("icon") + '"></span> ' : "";
                    $ = T + '<span class="text">' + s($) + k + "</span>", 0 !== o && n.length > 0 && (a++, n.push(l("", null, "divider", i + "div"))), a++, n.push(l($, null, "dropdown-header" + _, i));
                  }
                  if (t.options.hideDisabled && C) return void a--;
                  n.push(l(c(f, "opt " + d + _, h, m), o, "", i));
                } else if (!0 === r.data("divider")) n.push(l("", o, "divider"));
                else if (!0 === r.data("hidden")) u = r.data("prevHiddenIndex"), r.next().data("prevHiddenIndex", void 0 !== u ? u : o), n.push(l(c(f, d, h, m), o, "hidden is-hidden"));
                else {
                  var E = this.previousElementSibling && "OPTGROUP" === this.previousElementSibling.tagName;
                  if (!E && t.options.hideDisabled && void 0 !== (u = r.data("prevHiddenIndex"))) {
                    var S = p.eq(u)[0].previousElementSibling;
                    S && "OPTGROUP" === S.tagName && !S.disabled && (E = !0);
                  }
                  E && (a++, n.push(l("", null, "divider", i + "div"))), n.push(l(c(f, d, h, m), o));
                }
                t.liObj[o] = a;
              }
            }), this.multiple || 0 !== this.$element.find("option:selected").length || this.options.title || this.$element.find("option").eq(0).prop("selected", !0).attr("selected", "selected"), n.join("");
          },
          findLis: function () {
            return null == this.$lis && (this.$lis = this.$menu.find("li")), this.$lis;
          },
          render: function (t) {
            var n, i = this,
              o = this.$element.find("option");
            !1 !== t && o.each(function (e) {
              var t = i.findLis().eq(i.liObj[e]);
              i.setDisabled(e, this.disabled || "OPTGROUP" === this.parentNode.tagName && this.parentNode.disabled, t), i.setSelected(e, this.selected, t);
            }), this.togglePlaceholder(), this.tabIndex();
            var r = o.map(function () {
              if (this.selected) {
                if (i.options.hideDisabled && (this.disabled || "OPTGROUP" === this.parentNode.tagName && this.parentNode.disabled)) return;
                var t, n = e(this),
                  o = n.data("icon") && i.options.showIcon ? '<i class="' + i.options.iconBase + " " + n.data("icon") + '"></i> ' : "";
                return t = i.options.showSubtext && n.data("subtext") && !i.multiple ? ' <small class="text-muted">' + n.data("subtext") + "</small>" : "", void 0 !== n.attr("title") ? n.attr("title") : n.data("content") && i.options.showContent ? n.data("content").toString() : o + n.html() + t;
              }
            }).toArray(),
              s = this.multiple ? r.join(this.options.multipleSeparator) : r[0];
            if (this.multiple && this.options.selectedTextFormat.indexOf("count") > -1) {
              var l = this.options.selectedTextFormat.split(">");
              if (l.length > 1 && r.length > l[1] || 1 == l.length && r.length >= 2) {
                n = this.options.hideDisabled ? ", [disabled]" : "";
                var c = o.not('[data-divider="true"], [data-hidden="true"]' + n).length,
                  u = "function" == typeof this.options.countSelectedText ? this.options.countSelectedText(r.length, c) : this.options.countSelectedText;
                s = u.replace("{0}", r.length.toString()).replace("{1}", c.toString());
              }
            }
            void 0 == this.options.title && (this.options.title = this.$element.attr("title")), "static" == this.options.selectedTextFormat && (s = this.options.title), s || (s = void 0 !== this.options.title ? this.options.title : this.options.noneSelectedText), this.$button.attr("title", a(e.trim(s.replace(/<[^>]*>?/g, "")))), this.$button.children(".filter-option").html(s), this.$element.trigger("rendered.bs.select");
          },
          setStyle: function (e, t) {
            this.$element.attr("class") && this.$newElement.addClass(this.$element.attr("class").replace(/selectpicker|mobile-device|bs-select-hidden|validate\[.*\]/gi, ""));
            var n = e || this.options.style;
            "add" == t ? this.$button.addClass(n) : "remove" == t ? this.$button.removeClass(n) : (this.$button.removeClass(this.options.style), this.$button.addClass(n));
          },
          liHeight: function (t) {
            if (t || !1 !== this.options.size && !this.sizeInfo) {
              var n = document.createElement("div"),
                i = document.createElement("div"),
                o = document.createElement("ul"),
                r = document.createElement("li"),
                s = document.createElement("li"),
                a = document.createElement("a"),
                l = document.createElement("span"),
                c = this.options.header && this.$menu.find(".popover-title").length > 0 ? this.$menu.find(".popover-title")[0].cloneNode(!0) : null,
                u = this.options.liveSearch ? document.createElement("div") : null,
                d = this.options.actionsBox && this.multiple && this.$menu.find(".bs-actionsbox").length > 0 ? this.$menu.find(".bs-actionsbox")[0].cloneNode(!0) : null,
                p = this.options.doneButton && this.multiple && this.$menu.find(".bs-donebutton").length > 0 ? this.$menu.find(".bs-donebutton")[0].cloneNode(!0) : null;
              if (l.className = "text", n.className = this.$menu[0].parentNode.className + " open", i.className = "dropdown-menu open", o.className = "dropdown-menu inner", r.className = "divider", l.appendChild(document.createTextNode("Inner text")), a.appendChild(l), s.appendChild(a), o.appendChild(s), o.appendChild(r), c && i.appendChild(c), u) {
                var h = document.createElement("input");
                u.className = "bs-searchbox", h.className = "form-control", u.appendChild(h), i.appendChild(u);
              }
              d && i.appendChild(d), i.appendChild(o), p && i.appendChild(p), n.appendChild(i), document.body.appendChild(n);
              var f = a.offsetHeight,
                m = c ? c.offsetHeight : 0,
                g = u ? u.offsetHeight : 0,
                v = d ? d.offsetHeight : 0,
                b = p ? p.offsetHeight : 0,
                y = e(r).outerHeight(!0),
                w = "function" == typeof getComputedStyle && getComputedStyle(i),
                C = w ? null : e(i),
                x = {
                  vert: parseInt(w ? w.paddingTop : C.css("paddingTop")) + parseInt(w ? w.paddingBottom : C.css("paddingBottom")) + parseInt(w ? w.borderTopWidth : C.css("borderTopWidth")) + parseInt(w ? w.borderBottomWidth : C.css("borderBottomWidth")),
                  horiz: parseInt(w ? w.paddingLeft : C.css("paddingLeft")) + parseInt(w ? w.paddingRight : C.css("paddingRight")) + parseInt(w ? w.borderLeftWidth : C.css("borderLeftWidth")) + parseInt(w ? w.borderRightWidth : C.css("borderRightWidth"))
                },
                _ = {
                  vert: x.vert + parseInt(w ? w.marginTop : C.css("marginTop")) + parseInt(w ? w.marginBottom : C.css("marginBottom")) + 2,
                  horiz: x.horiz + parseInt(w ? w.marginLeft : C.css("marginLeft")) + parseInt(w ? w.marginRight : C.css("marginRight")) + 2
                };
              document.body.removeChild(n), this.sizeInfo = {
                liHeight: f,
                headerHeight: m,
                searchHeight: g,
                actionsHeight: v,
                doneButtonHeight: b,
                dividerHeight: y,
                menuPadding: x,
                menuExtras: _
              };
            }
          },
          setSize: function () {
            if (this.findLis(), this.liHeight(), this.options.header && this.$menu.css("padding-top", 0), !1 !== this.options.size) {
              var t, n, i, o, r, s, a, l, c = this,
                u = this.$menu,
                d = this.$menuInner,
                p = e(window),
                h = this.$newElement[0].offsetHeight,
                f = this.$newElement[0].offsetWidth,
                m = this.sizeInfo.liHeight,
                g = this.sizeInfo.headerHeight,
                v = this.sizeInfo.searchHeight,
                b = this.sizeInfo.actionsHeight,
                y = this.sizeInfo.doneButtonHeight,
                w = this.sizeInfo.dividerHeight,
                C = this.sizeInfo.menuPadding,
                x = this.sizeInfo.menuExtras,
                _ = this.options.hideDisabled ? ".disabled" : "",
                $ = function () {
                  var t, n = c.$newElement.offset(),
                    i = e(c.options.container);
                  c.options.container && !i.is("body") ? ((t = i.offset()).top += parseInt(i.css("borderTopWidth")), t.left += parseInt(i.css("borderLeftWidth"))) : t = {
                    top: 0,
                    left: 0
                  };
                  var o = c.options.windowPadding;
                  r = n.top - t.top - p.scrollTop(), s = p.height() - r - h - t.top - o[2], a = n.left - t.left - p.scrollLeft(), l = p.width() - a - f - t.left - o[1], r -= o[0], a -= o[3];
                };
              if ($(), "auto" === this.options.size) {
                var k = function () {
                  var p, h = function (t, n) {
                    return function (i) {
                      return n ? i.classList ? i.classList.contains(t) : e(i).hasClass(t) : !(i.classList ? i.classList.contains(t) : e(i).hasClass(t));
                    };
                  },
                    w = c.$menuInner[0].getElementsByTagName("li"),
                    _ = Array.prototype.filter ? Array.prototype.filter.call(w, h("hidden", !1)) : c.$lis.not(".hidden"),
                    k = Array.prototype.filter ? Array.prototype.filter.call(_, h("dropdown-header", !0)) : _.filter(".dropdown-header");
                  $(), t = s - x.vert, n = l - x.horiz, c.options.container ? (u.data("height") || u.data("height", u.height()), i = u.data("height"), u.data("width") || u.data("width", u.width()), o = u.data("width")) : (i = u.height(), o = u.width()), c.options.dropupAuto && c.$newElement.toggleClass("dropup", r > s && t - x.vert < i), c.$newElement.hasClass("dropup") && (t = r - x.vert), "auto" === c.options.dropdownAlignRight && u.toggleClass("dropdown-menu-right", a > l && n - x.horiz < o - f), p = _.length + k.length > 3 ? 3 * m + x.vert - 2 : 0, u.css({
                    "max-height": t + "px",
                    overflow: "hidden",
                    "min-height": p + g + v + b + y + "px"
                  }), d.css({
                    "max-height": t - g - v - b - y - C.vert + "px",
                    "overflow-y": "auto",
                    "min-height": Math.max(p - C.vert, 0) + "px"
                  });
                };
                k(), this.$searchbox.off("input.getSize propertychange.getSize").on("input.getSize propertychange.getSize", k), p.off("resize.getSize scroll.getSize").on("resize.getSize scroll.getSize", k);
              } else if (this.options.size && "auto" != this.options.size && this.$lis.not(_).length > this.options.size) {
                var T = this.$lis.not(".divider").not(_).children().slice(0, this.options.size).last().parent().index(),
                  E = this.$lis.slice(0, T + 1).filter(".divider").length;
                t = m * this.options.size + E * w + C.vert, c.options.container ? (u.data("height") || u.data("height", u.height()), i = u.data("height")) : i = u.height(), c.options.dropupAuto && this.$newElement.toggleClass("dropup", r > s && t - x.vert < i), u.css({
                  "max-height": t + g + v + b + y + "px",
                  overflow: "hidden",
                  "min-height": ""
                }), d.css({
                  "max-height": t - C.vert + "px",
                  "overflow-y": "auto",
                  "min-height": ""
                });
              }
            }
          },
          setWidth: function () {
            if ("auto" === this.options.width) {
              this.$menu.css("min-width", "0");
              var e = this.$menu.parent().clone().appendTo("body"),
                t = this.options.container ? this.$newElement.clone().appendTo("body") : e,
                n = e.children(".dropdown-menu").outerWidth(),
                i = t.css("width", "auto").children("button").outerWidth();
              e.remove(), t.remove(), this.$newElement.css("width", Math.max(n, i) + "px");
            } else "fit" === this.options.width ? (this.$menu.css("min-width", ""), this.$newElement.css("width", "").addClass("fit-width")) : this.options.width ? (this.$menu.css("min-width", ""), this.$newElement.css("width", this.options.width)) : (this.$menu.css("min-width", ""), this.$newElement.css("width", ""));
            this.$newElement.hasClass("fit-width") && "fit" !== this.options.width && this.$newElement.removeClass("fit-width");
          },
          selectPosition: function () {
            this.$bsContainer = e('<div class="bs-container" />');
            var t, n, i, o = this,
              r = e(this.options.container),
              s = function (e) {
                o.$bsContainer.addClass(e.attr("class").replace(/form-control|fit-width/gi, "")).toggleClass("dropup", e.hasClass("dropup")), t = e.offset(), r.is("body") ? n = {
                  top: 0,
                  left: 0
                } : ((n = r.offset()).top += parseInt(r.css("borderTopWidth")) - r.scrollTop(), n.left += parseInt(r.css("borderLeftWidth")) - r.scrollLeft()), i = e.hasClass("dropup") ? 0 : e[0].offsetHeight, o.$bsContainer.css({
                  top: t.top - n.top + i,
                  left: t.left - n.left,
                  width: e[0].offsetWidth
                });
              };
            this.$button.on("click", function () {
              var t = e(this);
              o.isDisabled() || (s(o.$newElement), o.$bsContainer.appendTo(o.options.container).toggleClass("open", !t.hasClass("open")).append(o.$menu));
            }), e(window).on("resize scroll", function () {
              s(o.$newElement);
            }), this.$element.on("hide.bs.select", function () {
              o.$menu.data("height", o.$menu.height()), o.$bsContainer.detach();
            });
          },
          setSelected: function (e, t, n) {
            n || (this.togglePlaceholder(), n = this.findLis().eq(this.liObj[e])), n.toggleClass("selected", t).find("a").attr("aria-selected", t);
          },
          setDisabled: function (e, t, n) {
            n || (n = this.findLis().eq(this.liObj[e])), t ? n.addClass("disabled").children("a").attr("href", "#").attr("tabindex", -1).attr("aria-disabled", !0) : n.removeClass("disabled").children("a").removeAttr("href").attr("tabindex", 0).attr("aria-disabled", !1);
          },
          isDisabled: function () {
            return this.$element[0].disabled;
          },
          checkDisabled: function () {
            var e = this;
            this.isDisabled() ? (this.$newElement.addClass("disabled"), this.$button.addClass("disabled").attr("tabindex", -1).attr("aria-disabled", !0)) : (this.$button.hasClass("disabled") && (this.$newElement.removeClass("disabled"), this.$button.removeClass("disabled").attr("aria-disabled", !1)), -1 != this.$button.attr("tabindex") || this.$element.data("tabindex") || this.$button.removeAttr("tabindex")), this.$button.click(function () {
              return !e.isDisabled();
            });
          },
          togglePlaceholder: function () {
            var e = this.$element.val();
            this.$button.toggleClass("bs-placeholder", null === e || "" === e || e.constructor === Array && 0 === e.length);
          },
          tabIndex: function () {
            this.$element.data("tabindex") !== this.$element.attr("tabindex") && -98 !== this.$element.attr("tabindex") && "-98" !== this.$element.attr("tabindex") && (this.$element.data("tabindex", this.$element.attr("tabindex")), this.$button.attr("tabindex", this.$element.data("tabindex"))), this.$element.attr("tabindex", -98);
          },
          clickListener: function () {
            var t = this,
              i = e(document);
            i.data("spaceSelect", !1), this.$button.on("keyup", function (e) {
              /(32)/.test(e.keyCode.toString(10)) && i.data("spaceSelect") && (e.preventDefault(), i.data("spaceSelect", !1));
            }), this.$button.on("click", function () {
              t.setSize();
            }), this.$element.on("shown.bs.select", function () {
              if (t.options.liveSearch || t.multiple) {
                if (!t.multiple) {
                  var e = t.liObj[t.$element[0].selectedIndex];
                  if ("number" != typeof e || !1 === t.options.size) return;
                  var n = t.$lis.eq(e)[0].offsetTop - t.$menuInner[0].offsetTop;
                  n = n - t.$menuInner[0].offsetHeight / 2 + t.sizeInfo.liHeight / 2, t.$menuInner[0].scrollTop = n;
                }
              } else t.$menuInner.find(".selected a").focus();
            }), this.$menuInner.on("click", "li a", function (i) {
              var o = e(this),
                r = o.parent().data("originalIndex"),
                s = t.$element.val(),
                a = t.$element.prop("selectedIndex"),
                l = !0;
              if (t.multiple && 1 !== t.options.maxOptions && i.stopPropagation(), i.preventDefault(), !t.isDisabled() && !o.parent().hasClass("disabled")) {
                var c = t.$element.find("option"),
                  u = c.eq(r),
                  d = u.prop("selected"),
                  p = u.parent("optgroup"),
                  h = t.options.maxOptions,
                  f = p.data("maxOptions") || !1;
                if (t.multiple) {
                  if (u.prop("selected", !d), t.setSelected(r, !d), o.blur(), !1 !== h || !1 !== f) {
                    var m = h < c.filter(":selected").length,
                      g = f < p.find("option:selected").length;
                    if (h && m || f && g)
                      if (h && 1 == h) c.prop("selected", !1), u.prop("selected", !0), t.$menuInner.find(".selected").removeClass("selected"), t.setSelected(r, !0);
                      else if (f && 1 == f) {
                        p.find("option:selected").prop("selected", !1), u.prop("selected", !0);
                        var v = o.parent().data("optgroup");
                        t.$menuInner.find('[data-optgroup="' + v + '"]').removeClass("selected"), t.setSelected(r, !0);
                      } else {
                        var b = "string" == typeof t.options.maxOptionsText ? [t.options.maxOptionsText, t.options.maxOptionsText] : t.options.maxOptionsText,
                          y = "function" == typeof b ? b(h, f) : b,
                          w = y[0].replace("{n}", h),
                          C = y[1].replace("{n}", f),
                          x = e('<div class="notify"></div>');
                        y[2] && (w = w.replace("{var}", y[2][h > 1 ? 0 : 1]), C = C.replace("{var}", y[2][f > 1 ? 0 : 1])), u.prop("selected", !1), t.$menu.append(x), h && m && (x.append(e("<div>" + w + "</div>")), l = !1, t.$element.trigger("maxReached.bs.select")), f && g && (x.append(e("<div>" + C + "</div>")), l = !1, t.$element.trigger("maxReachedGrp.bs.select")), setTimeout(function () {
                          t.setSelected(r, !1);
                        }, 10), x.delay(750).fadeOut(300, function () {
                          e(this).remove();
                        });
                      }
                  }
                } else c.prop("selected", !1), u.prop("selected", !0), t.$menuInner.find(".selected").removeClass("selected").find("a").attr("aria-selected", !1), t.setSelected(r, !0);
                !t.multiple || t.multiple && 1 === t.options.maxOptions ? t.$button.focus() : t.options.liveSearch && t.$searchbox.focus(), l && (s != t.$element.val() && t.multiple || a != t.$element.prop("selectedIndex") && !t.multiple) && (n = [r, u.prop("selected"), d], t.$element.triggerNative("change"));
              }
            }), this.$menu.on("click", "li.disabled a, .popover-title, .popover-title :not(.close)", function (n) {
              n.currentTarget == this && (n.preventDefault(), n.stopPropagation(), t.options.liveSearch && !e(n.target).hasClass("close") ? t.$searchbox.focus() : t.$button.focus());
            }), this.$menuInner.on("click", ".divider, .dropdown-header", function (e) {
              e.preventDefault(), e.stopPropagation(), t.options.liveSearch ? t.$searchbox.focus() : t.$button.focus();
            }), this.$menu.on("click", ".popover-title .close", function () {
              t.$button.click();
            }), this.$searchbox.on("click", function (e) {
              e.stopPropagation();
            }), this.$menu.on("click", ".actions-btn", function (n) {
              t.options.liveSearch ? t.$searchbox.focus() : t.$button.focus(), n.preventDefault(), n.stopPropagation(), e(this).hasClass("bs-select-all") ? t.selectAll() : t.deselectAll();
            }), this.$element.change(function () {
              t.render(!1), t.$element.trigger("changed.bs.select", n), n = null;
            });
          },
          liveSearchListener: function () {
            var t = this,
              n = e('<li class="no-results"></li>');
            this.$button.on("click.dropdown.data-api", function () {
              t.$menuInner.find(".active").removeClass("active"), t.$searchbox.val() && (t.$searchbox.val(""), t.$lis.not(".is-hidden").removeClass("hidden"), n.parent().length && n.remove()), t.multiple || t.$menuInner.find(".selected").addClass("active"), setTimeout(function () {
                t.$searchbox.focus();
              }, 10);
            }), this.$searchbox.on("click.dropdown.data-api focus.dropdown.data-api touchend.dropdown.data-api", function (e) {
              e.stopPropagation();
            }), this.$searchbox.on("input propertychange", function () {
              if (t.$lis.not(".is-hidden").removeClass("hidden"), t.$lis.filter(".active").removeClass("active"), n.remove(), t.$searchbox.val()) {
                var i, r = t.$lis.not(".is-hidden, .divider, .dropdown-header");
                if ((i = t.options.liveSearchNormalize ? r.not(":a" + t._searchStyle() + '("' + o(t.$searchbox.val()) + '")') : r.not(":" + t._searchStyle() + '("' + t.$searchbox.val() + '")')).length === r.length) n.html(t.options.noneResultsText.replace("{0}", '"' + s(t.$searchbox.val()) + '"')), t.$menuInner.append(n), t.$lis.addClass("hidden");
                else {
                  i.addClass("hidden");
                  var a, l = t.$lis.not(".hidden");
                  l.each(function (t) {
                    var n = e(this);
                    n.hasClass("divider") ? void 0 === a ? n.addClass("hidden") : (a && a.addClass("hidden"), a = n) : n.hasClass("dropdown-header") && l.eq(t + 1).data("optgroup") !== n.data("optgroup") ? n.addClass("hidden") : a = null;
                  }), a && a.addClass("hidden"), r.not(".hidden").first().addClass("active"), t.$menuInner.scrollTop(0);
                }
              }
            });
          },
          _searchStyle: function () {
            return {
              begins: "ibegins",
              startsWith: "ibegins"
            }[this.options.liveSearchStyle] || "icontains";
          },
          val: function (e) {
            return void 0 !== e ? (this.$element.val(e), this.render(), this.$element) : this.$element.val();
          },
          changeAll: function (t) {
            if (this.multiple) {
              void 0 === t && (t = !0), this.findLis();
              var n = this.$element.find("option"),
                i = this.$lis.not(".divider, .dropdown-header, .disabled, .hidden"),
                o = i.length,
                r = [];
              if (t) {
                if (i.filter(".selected").length === i.length) return;
              } else if (0 === i.filter(".selected").length) return;
              i.toggleClass("selected", t);
              for (var s = 0; s < o; s++) {
                var a = i[s].getAttribute("data-original-index");
                r[r.length] = n.eq(a)[0];
              }
              e(r).prop("selected", t), this.render(!1), this.togglePlaceholder(), this.$element.triggerNative("change");
            }
          },
          selectAll: function () {
            return this.changeAll(!0);
          },
          deselectAll: function () {
            return this.changeAll(!1);
          },
          toggle: function (e) {
            (e = e || window.event) && e.stopPropagation(), this.$button.trigger("click");
          },
          keydown: function (t) {
            var n, i, o, r, s = e(this),
              a = s.is("input") ? s.parent().parent() : s.parent(),
              l = a.data("this"),
              c = ":not(.disabled, .hidden, .dropdown-header, .divider)",
              u = {
                32: " ",
                48: "0",
                49: "1",
                50: "2",
                51: "3",
                52: "4",
                53: "5",
                54: "6",
                55: "7",
                56: "8",
                57: "9",
                59: ";",
                65: "a",
                66: "b",
                67: "c",
                68: "d",
                69: "e",
                70: "f",
                71: "g",
                72: "h",
                73: "i",
                74: "j",
                75: "k",
                76: "l",
                77: "m",
                78: "n",
                79: "o",
                80: "p",
                81: "q",
                82: "r",
                83: "s",
                84: "t",
                85: "u",
                86: "v",
                87: "w",
                88: "x",
                89: "y",
                90: "z",
                96: "0",
                97: "1",
                98: "2",
                99: "3",
                100: "4",
                101: "5",
                102: "6",
                103: "7",
                104: "8",
                105: "9"
              };
            if (!(r = l.$newElement.hasClass("open")) && (t.keyCode >= 48 && t.keyCode <= 57 || t.keyCode >= 96 && t.keyCode <= 105 || t.keyCode >= 65 && t.keyCode <= 90)) return l.options.container ? l.$button.trigger("click") : (l.setSize(), l.$menu.parent().addClass("open"), r = !0), void l.$searchbox.focus();
            if (l.options.liveSearch && /(^9$|27)/.test(t.keyCode.toString(10)) && r && (t.preventDefault(), t.stopPropagation(), l.$menuInner.click(), l.$button.focus()), /(38|40)/.test(t.keyCode.toString(10))) {
              if (!(n = l.$lis.filter(c)).length) return;
              i = l.options.liveSearch ? n.index(n.filter(".active")) : n.index(n.find("a").filter(":focus").parent()), o = l.$menuInner.data("prevIndex"), 38 == t.keyCode ? (!l.options.liveSearch && i != o || -1 == i || i--, i < 0 && (i += n.length)) : 40 == t.keyCode && ((l.options.liveSearch || i == o) && i++, i %= n.length), l.$menuInner.data("prevIndex", i), l.options.liveSearch ? (t.preventDefault(), s.hasClass("dropdown-toggle") || (n.removeClass("active").eq(i).addClass("active").children("a").focus(), s.focus())) : n.eq(i).children("a").focus();
            } else if (!s.is("input")) {
              var d, p = [];
              (n = l.$lis.filter(c)).each(function (n) {
                e.trim(e(this).children("a").text().toLowerCase()).substring(0, 1) == u[t.keyCode] && p.push(n);
              }), d = e(document).data("keycount"), d++, e(document).data("keycount", d), e.trim(e(":focus").text().toLowerCase()).substring(0, 1) != u[t.keyCode] ? (d = 1, e(document).data("keycount", d)) : d >= p.length && (e(document).data("keycount", 0), d > p.length && (d = 1)), n.eq(p[d - 1]).children("a").focus();
            }
            if ((/(13|32)/.test(t.keyCode.toString(10)) || /(^9$)/.test(t.keyCode.toString(10)) && l.options.selectOnTab) && r) {
              if (/(32)/.test(t.keyCode.toString(10)) || t.preventDefault(), l.options.liveSearch) /(32)/.test(t.keyCode.toString(10)) || (l.$menuInner.find(".active a").click(), s.focus());
              else {
                var h = e(":focus");
                h.click(), h.focus(), t.preventDefault(), e(document).data("spaceSelect", !0);
              }
              e(document).data("keycount", 0);
            } (/(^9$|27)/.test(t.keyCode.toString(10)) && r && (l.multiple || l.options.liveSearch) || /(27)/.test(t.keyCode.toString(10)) && !r) && (l.$menu.parent().removeClass("open"), l.options.container && l.$newElement.removeClass("open"), l.$button.focus());
          },
          mobile: function () {
            this.$element.addClass("mobile-device");
          },
          refresh: function () {
            this.$lis = null, this.liObj = {}, this.reloadLi(), this.render(), this.checkDisabled(), this.liHeight(!0), this.setStyle(), this.setWidth(), this.$lis && this.$searchbox.trigger("propertychange"), this.$element.trigger("refreshed.bs.select");
          },
          hide: function () {
            this.$newElement.hide();
          },
          show: function () {
            this.$newElement.show();
          },
          remove: function () {
            this.$newElement.remove(), this.$element.remove();
          },
          destroy: function () {
            this.$newElement.before(this.$element).remove(), this.$bsContainer ? this.$bsContainer.remove() : this.$menu.remove(), this.$element.off(".bs.select").removeData("selectpicker").removeClass("bs-select-hidden selectpicker");
          }
        };
        var u = e.fn.selectpicker;
        e.fn.selectpicker = c, e.fn.selectpicker.Constructor = l, e.fn.selectpicker.noConflict = function () {
          return e.fn.selectpicker = u, this;
        }, e(document).data("keycount", 0).on("keydown.bs.select", '.bootstrap-select [data-toggle=dropdown], .bootstrap-select [role="listbox"], .bs-searchbox input', l.prototype.keydown).on("focusin.modal", '.bootstrap-select [data-toggle=dropdown], .bootstrap-select [role="listbox"], .bs-searchbox input', function (e) {
          e.stopPropagation();
        }), e(window).on("load.bs.select.data-api", function () {
          e(".selectpicker").each(function () {
            var t = e(this);
            c.call(t, t.data());
          });
        });
      }(e);
    }(e);
  }.apply(t, i)) || (e.exports = o);
}, function (e, t) {
  "function" != typeof Object.create && (Object.create = function (e) {
    function t() { }
    return t.prototype = e, new t;
  }),
    function (e, t, n) {
      var i = {
        init: function (t, n) {
          this.$elem = e(n), this.options = e.extend({}, e.fn.owlCarousel.options, this.$elem.data(), t), this.userOptions = t, this.loadContent();
        },
        loadContent: function () {
          var t, n = this;
          "function" == typeof n.options.beforeInit && n.options.beforeInit.apply(this, [n.$elem]), "string" == typeof n.options.jsonPath ? (t = n.options.jsonPath, e.getJSON(t, function (e) {
            var t, i = "";
            if ("function" == typeof n.options.jsonSuccess) n.options.jsonSuccess.apply(this, [e]);
            else {
              for (t in e.owl) e.owl.hasOwnProperty(t) && (i += e.owl[t].item);
              n.$elem.html(i);
            }
            n.logIn();
          })) : n.logIn();
        },
        logIn: function () {
          this.$elem.data("owl-originalStyles", this.$elem.attr("style")), this.$elem.data("owl-originalClasses", this.$elem.attr("class")), this.$elem.css({
            opacity: 0
          }), this.orignalItems = this.options.items, this.checkBrowser(), this.wrapperWidth = 0, this.checkVisible = null, this.setVars();
        },
        setVars: function () {
          if (0 === this.$elem.children().length) return !1;
          this.baseClass(), this.eventTypes(), this.$userItems = this.$elem.children(), this.itemsAmount = this.$userItems.length, this.wrapItems(), this.$owlItems = this.$elem.find(".owl-item"), this.$owlWrapper = this.$elem.find(".owl-wrapper"), this.playDirection = "next", this.prevItem = 0, this.prevArr = [0], this.currentItem = 0, this.customEvents(), this.onStartup();
        },
        onStartup: function () {
          this.updateItems(), this.calculateAll(), this.buildControls(), this.updateControls(), this.response(), this.moveEvents(), this.stopOnHover(), this.owlStatus(), !1 !== this.options.transitionStyle && this.transitionTypes(this.options.transitionStyle), !0 === this.options.autoPlay && (this.options.autoPlay = 5e3), this.play(), this.$elem.find(".owl-wrapper").css("display", "block"), this.$elem.is(":visible") ? this.$elem.css("opacity", 1) : this.watchVisibility(), this.onstartup = !1, this.eachMoveUpdate(), "function" == typeof this.options.afterInit && this.options.afterInit.apply(this, [this.$elem]);
        },
        eachMoveUpdate: function () {
          !0 === this.options.lazyLoad && this.lazyLoad(), !0 === this.options.autoHeight && this.autoHeight(), this.onVisibleItems(), "function" == typeof this.options.afterAction && this.options.afterAction.apply(this, [this.$elem]);
        },
        updateVars: function () {
          "function" == typeof this.options.beforeUpdate && this.options.beforeUpdate.apply(this, [this.$elem]), this.watchVisibility(), this.updateItems(), this.calculateAll(), this.updatePosition(), this.updateControls(), this.eachMoveUpdate(), "function" == typeof this.options.afterUpdate && this.options.afterUpdate.apply(this, [this.$elem]);
        },
        reload: function () {
          var e = this;
          t.setTimeout(function () {
            e.updateVars();
          }, 0);
        },
        watchVisibility: function () {
          var e = this;
          if (!1 !== e.$elem.is(":visible")) return !1;
          e.$elem.css({
            opacity: 0
          }), t.clearInterval(e.autoPlayInterval), t.clearInterval(e.checkVisible), e.checkVisible = t.setInterval(function () {
            e.$elem.is(":visible") && (e.reload(), e.$elem.animate({
              opacity: 1
            }, 200), t.clearInterval(e.checkVisible));
          }, 500);
        },
        wrapItems: function () {
          this.$userItems.wrapAll('<div class="owl-wrapper">').wrap('<div class="owl-item"></div>'), this.$elem.find(".owl-wrapper").wrap('<div class="owl-wrapper-outer">'), this.wrapperOuter = this.$elem.find(".owl-wrapper-outer"), this.$elem.css("display", "block");
        },
        baseClass: function () {
          var e = this.$elem.hasClass(this.options.baseClass),
            t = this.$elem.hasClass(this.options.theme);
          e || this.$elem.addClass(this.options.baseClass), t || this.$elem.addClass(this.options.theme);
        },
        updateItems: function () {
          var t, n;
          if (!1 === this.options.responsive) return !1;
          if (!0 === this.options.singleItem) return this.options.items = this.orignalItems = 1, this.options.itemsCustom = !1, this.options.itemsDesktop = !1, this.options.itemsDesktopSmall = !1, this.options.itemsTablet = !1, this.options.itemsTabletSmall = !1, this.options.itemsMobile = !1;
          if ((t = e(this.options.responsiveBaseWidth).width()) > (this.options.itemsDesktop[0] || this.orignalItems) && (this.options.items = this.orignalItems), !1 !== this.options.itemsCustom)
            for (this.options.itemsCustom.sort(function (e, t) {
              return e[0] - t[0];
            }), n = 0; n < this.options.itemsCustom.length; n += 1) this.options.itemsCustom[n][0] <= t && (this.options.items = this.options.itemsCustom[n][1]);
          else t <= this.options.itemsDesktop[0] && !1 !== this.options.itemsDesktop && (this.options.items = this.options.itemsDesktop[1]), t <= this.options.itemsDesktopSmall[0] && !1 !== this.options.itemsDesktopSmall && (this.options.items = this.options.itemsDesktopSmall[1]), t <= this.options.itemsTablet[0] && !1 !== this.options.itemsTablet && (this.options.items = this.options.itemsTablet[1]), t <= this.options.itemsTabletSmall[0] && !1 !== this.options.itemsTabletSmall && (this.options.items = this.options.itemsTabletSmall[1]), t <= this.options.itemsMobile[0] && !1 !== this.options.itemsMobile && (this.options.items = this.options.itemsMobile[1]);
          this.options.items > this.itemsAmount && !0 === this.options.itemsScaleUp && (this.options.items = this.itemsAmount);
        },
        response: function () {
          var n, i, o = this;
          if (!0 !== o.options.responsive) return !1;
          i = e(t).width(), o.resizer = function () {
            e(t).width() !== i && (!1 !== o.options.autoPlay && t.clearInterval(o.autoPlayInterval), t.clearTimeout(n), n = t.setTimeout(function () {
              i = e(t).width(), o.updateVars();
            }, o.options.responsiveRefreshRate));
          }, e(t).resize(o.resizer);
        },
        updatePosition: function () {
          this.jumpTo(this.currentItem), !1 !== this.options.autoPlay && this.checkAp();
        },
        appendItemsSizes: function () {
          var t = this,
            n = 0,
            i = t.itemsAmount - t.options.items;
          t.$owlItems.each(function (o) {
            var r = e(this);
            r.css({
              width: t.itemWidth
            }).data("owl-item", Number(o)), 0 != o % t.options.items && o !== i || o > i || (n += 1), r.data("owl-roundPages", n);
          });
        },
        appendWrapperSizes: function () {
          this.$owlWrapper.css({
            width: this.$owlItems.length * this.itemWidth * 2,
            left: 0
          }), this.appendItemsSizes();
        },
        calculateAll: function () {
          this.calculateWidth(), this.appendWrapperSizes(), this.loops(), this.max();
        },
        calculateWidth: function () {
          this.itemWidth = Math.round(this.$elem.width() / this.options.items);
        },
        max: function () {
          var e = -1 * (this.itemsAmount * this.itemWidth - this.options.items * this.itemWidth);
          return this.options.items > this.itemsAmount ? this.maximumPixels = e = this.maximumItem = 0 : (this.maximumItem = this.itemsAmount - this.options.items, this.maximumPixels = e), e;
        },
        min: function () {
          return 0;
        },
        loops: function () {
          var t, n, i = 0,
            o = 0;
          for (this.positionsInArray = [0], this.pagesInArray = [], t = 0; t < this.itemsAmount; t += 1) o += this.itemWidth, this.positionsInArray.push(-o), !0 === this.options.scrollPerPage && ((n = (n = e(this.$owlItems[t])).data("owl-roundPages")) !== i && (this.pagesInArray[i] = this.positionsInArray[t], i = n));
        },
        buildControls: function () {
          !0 !== this.options.navigation && !0 !== this.options.pagination || (this.owlControls = e('<div class="owl-controls"/>').toggleClass("clickable", !this.browser.isTouch).appendTo(this.$elem)), !0 === this.options.pagination && this.buildPagination(), !0 === this.options.navigation && this.buildButtons();
        },
        buildButtons: function () {
          var t = this,
            n = e('<div class="owl-buttons"/>');
          t.owlControls.append(n), t.buttonPrev = e("<div/>", {
            class: "owl-prev",
            html: t.options.navigationText[0] || ""
          }), t.buttonNext = e("<div/>", {
            class: "owl-next",
            html: t.options.navigationText[1] || ""
          }), n.append(t.buttonPrev).append(t.buttonNext), n.on("touchstart.owlControls mousedown.owlControls", 'div[class^="owl"]', function (e) {
            e.preventDefault();
          }), n.on("touchend.owlControls mouseup.owlControls", 'div[class^="owl"]', function (n) {
            n.preventDefault(), e(this).hasClass("owl-next") ? t.next() : t.prev();
          });
        },
        buildPagination: function () {
          var t = this;
          t.paginationWrapper = e('<div class="owl-pagination"/>'), t.owlControls.append(t.paginationWrapper), t.paginationWrapper.on("touchend.owlControls mouseup.owlControls", ".owl-page", function (n) {
            n.preventDefault(), Number(e(this).data("owl-page")) !== t.currentItem && t.goTo(Number(e(this).data("owl-page")), !0);
          });
        },
        updatePagination: function () {
          var t, n, i, o, r, s;
          if (!1 === this.options.pagination) return !1;
          for (this.paginationWrapper.html(""), t = 0, n = this.itemsAmount - this.itemsAmount % this.options.items, o = 0; o < this.itemsAmount; o += 1) 0 == o % this.options.items && (t += 1, n === o && (i = this.itemsAmount - this.options.items), r = e("<div/>", {
            class: "owl-page"
          }), s = e("<span></span>", {
            text: !0 === this.options.paginationNumbers ? t : "",
            class: !0 === this.options.paginationNumbers ? "owl-numbers" : ""
          }), r.append(s), r.data("owl-page", n === o ? i : o), r.data("owl-roundPages", t), this.paginationWrapper.append(r));
          this.checkPagination();
        },
        checkPagination: function () {
          var t = this;
          if (!1 === t.options.pagination) return !1;
          t.paginationWrapper.find(".owl-page").each(function () {
            e(this).data("owl-roundPages") === e(t.$owlItems[t.currentItem]).data("owl-roundPages") && (t.paginationWrapper.find(".owl-page").removeClass("active"), e(this).addClass("active"));
          });
        },
        checkNavigation: function () {
          if (!1 === this.options.navigation) return !1;
          !1 === this.options.rewindNav && (0 === this.currentItem && 0 === this.maximumItem ? (this.buttonPrev.addClass("disabled"), this.buttonNext.addClass("disabled")) : 0 === this.currentItem && 0 !== this.maximumItem ? (this.buttonPrev.addClass("disabled"), this.buttonNext.removeClass("disabled")) : this.currentItem === this.maximumItem ? (this.buttonPrev.removeClass("disabled"), this.buttonNext.addClass("disabled")) : 0 !== this.currentItem && this.currentItem !== this.maximumItem && (this.buttonPrev.removeClass("disabled"), this.buttonNext.removeClass("disabled")));
        },
        updateControls: function () {
          this.updatePagination(), this.checkNavigation(), this.owlControls && (this.options.items >= this.itemsAmount ? this.owlControls.hide() : this.owlControls.show());
        },
        destroyControls: function () {
          this.owlControls && this.owlControls.remove();
        },
        next: function (e) {
          if (this.isTransition) return !1;
          if (this.currentItem += !0 === this.options.scrollPerPage ? this.options.items : 1, this.currentItem > this.maximumItem + (!0 === this.options.scrollPerPage ? this.options.items - 1 : 0)) {
            if (!0 !== this.options.rewindNav) return this.currentItem = this.maximumItem, !1;
            this.currentItem = 0, e = "rewind";
          }
          this.goTo(this.currentItem, e);
        },
        prev: function (e) {
          if (this.isTransition) return !1;
          if (this.currentItem = !0 === this.options.scrollPerPage && 0 < this.currentItem && this.currentItem < this.options.items ? 0 : this.currentItem - (!0 === this.options.scrollPerPage ? this.options.items : 1), 0 > this.currentItem) {
            if (!0 !== this.options.rewindNav) return this.currentItem = 0, !1;
            this.currentItem = this.maximumItem, e = "rewind";
          }
          this.goTo(this.currentItem, e);
        },
        goTo: function (e, n, i) {
          var o = this;
          return !o.isTransition && ("function" == typeof o.options.beforeMove && o.options.beforeMove.apply(this, [o.$elem]), e >= o.maximumItem ? e = o.maximumItem : 0 >= e && (e = 0), o.currentItem = o.owl.currentItem = e, !1 !== o.options.transitionStyle && "drag" !== i && 1 === o.options.items && !0 === o.browser.support3d ? (o.swapSpeed(0), !0 === o.browser.support3d ? o.transition3d(o.positionsInArray[e]) : o.css2slide(o.positionsInArray[e], 1), o.afterGo(), o.singleItemTransition(), !1) : (e = o.positionsInArray[e], !0 === o.browser.support3d ? (o.isCss3Finish = !1, !0 === n ? (o.swapSpeed("paginationSpeed"), t.setTimeout(function () {
            o.isCss3Finish = !0;
          }, o.options.paginationSpeed)) : "rewind" === n ? (o.swapSpeed(o.options.rewindSpeed), t.setTimeout(function () {
            o.isCss3Finish = !0;
          }, o.options.rewindSpeed)) : (o.swapSpeed("slideSpeed"), t.setTimeout(function () {
            o.isCss3Finish = !0;
          }, o.options.slideSpeed)), o.transition3d(e)) : !0 === n ? o.css2slide(e, o.options.paginationSpeed) : "rewind" === n ? o.css2slide(e, o.options.rewindSpeed) : o.css2slide(e, o.options.slideSpeed), void o.afterGo()));
        },
        jumpTo: function (e) {
          "function" == typeof this.options.beforeMove && this.options.beforeMove.apply(this, [this.$elem]), e >= this.maximumItem || -1 === e ? e = this.maximumItem : 0 >= e && (e = 0), this.swapSpeed(0), !0 === this.browser.support3d ? this.transition3d(this.positionsInArray[e]) : this.css2slide(this.positionsInArray[e], 1), this.currentItem = this.owl.currentItem = e, this.afterGo();
        },
        afterGo: function () {
          this.prevArr.push(this.currentItem), this.prevItem = this.owl.prevItem = this.prevArr[this.prevArr.length - 2], this.prevArr.shift(0), this.prevItem !== this.currentItem && (this.checkPagination(), this.checkNavigation(), this.eachMoveUpdate(), !1 !== this.options.autoPlay && this.checkAp()), "function" == typeof this.options.afterMove && this.prevItem !== this.currentItem && this.options.afterMove.apply(this, [this.$elem]);
        },
        stop: function () {
          this.apStatus = "stop", t.clearInterval(this.autoPlayInterval);
        },
        checkAp: function () {
          "stop" !== this.apStatus && this.play();
        },
        play: function () {
          var e = this;
          if (e.apStatus = "play", !1 === e.options.autoPlay) return !1;
          t.clearInterval(e.autoPlayInterval), e.autoPlayInterval = t.setInterval(function () {
            e.next(!0);
          }, e.options.autoPlay);
        },
        swapSpeed: function (e) {
          "slideSpeed" === e ? this.$owlWrapper.css(this.addCssSpeed(this.options.slideSpeed)) : "paginationSpeed" === e ? this.$owlWrapper.css(this.addCssSpeed(this.options.paginationSpeed)) : "string" != typeof e && this.$owlWrapper.css(this.addCssSpeed(e));
        },
        addCssSpeed: function (e) {
          return {
            "-webkit-transition": "all " + e + "ms ease",
            "-moz-transition": "all " + e + "ms ease",
            "-o-transition": "all " + e + "ms ease",
            transition: "all " + e + "ms ease"
          };
        },
        removeTransition: function () {
          return {
            "-webkit-transition": "",
            "-moz-transition": "",
            "-o-transition": "",
            transition: ""
          };
        },
        doTranslate: function (e) {
          return {
            "-webkit-transform": "translate3d(" + e + "px, 0px, 0px)",
            "-moz-transform": "translate3d(" + e + "px, 0px, 0px)",
            "-o-transform": "translate3d(" + e + "px, 0px, 0px)",
            "-ms-transform": "translate3d(" + e + "px, 0px, 0px)",
            transform: "translate3d(" + e + "px, 0px,0px)"
          };
        },
        transition3d: function (e) {
          this.$owlWrapper.css(this.doTranslate(e));
        },
        css2move: function (e) {
          this.$owlWrapper.css({
            left: e
          });
        },
        css2slide: function (e, t) {
          var n = this;
          n.isCssFinish = !1, n.$owlWrapper.stop(!0, !0).animate({
            left: e
          }, {
            duration: t || n.options.slideSpeed,
            complete: function () {
              n.isCssFinish = !0;
            }
          });
        },
        checkBrowser: function () {
          var e = n.createElement("div");
          e.style.cssText = "  -moz-transform:translate3d(0px, 0px, 0px); -ms-transform:translate3d(0px, 0px, 0px); -o-transform:translate3d(0px, 0px, 0px); -webkit-transform:translate3d(0px, 0px, 0px); transform:translate3d(0px, 0px, 0px)", e = e.style.cssText.match(/translate3d\(0px, 0px, 0px\)/g), this.browser = {
            support3d: null !== e && 1 === e.length,
            isTouch: "ontouchstart" in t || t.navigator.msMaxTouchPoints
          };
        },
        moveEvents: function () {
          !1 === this.options.mouseDrag && !1 === this.options.touchDrag || (this.gestures(), this.disabledEvents());
        },
        eventTypes: function () {
          var e = ["s", "e", "x"];
          this.ev_types = {}, !0 === this.options.mouseDrag && !0 === this.options.touchDrag ? e = ["touchstart.owl mousedown.owl", "touchmove.owl mousemove.owl", "touchend.owl touchcancel.owl mouseup.owl"] : !1 === this.options.mouseDrag && !0 === this.options.touchDrag ? e = ["touchstart.owl", "touchmove.owl", "touchend.owl touchcancel.owl"] : !0 === this.options.mouseDrag && !1 === this.options.touchDrag && (e = ["mousedown.owl", "mousemove.owl", "mouseup.owl"]), this.ev_types.start = e[0], this.ev_types.move = e[1], this.ev_types.end = e[2];
        },
        disabledEvents: function () {
          this.$elem.on("dragstart.owl", function (e) {
            e.preventDefault();
          }), this.$elem.on("mousedown.disableTextSelect", function (t) {
            return e(t.target).is("input, textarea, select, option");
          });
        },
        gestures: function () {
          function i(e) {
            if (void 0 !== e.touches) return {
              x: e.touches[0].pageX,
              y: e.touches[0].pageY
            };
            if (void 0 === e.touches) {
              if (void 0 !== e.pageX) return {
                x: e.pageX,
                y: e.pageY
              };
              if (void 0 === e.pageX) return {
                x: e.clientX,
                y: e.clientY
              };
            }
          }

          function o(t) {
            "on" === t ? (e(n).on(a.ev_types.move, r), e(n).on(a.ev_types.end, s)) : "off" === t && (e(n).off(a.ev_types.move), e(n).off(a.ev_types.end));
          }

          function r(o) {
            o = o.originalEvent || o || t.event, a.newPosX = i(o).x - l.offsetX, a.newPosY = i(o).y - l.offsetY, a.newRelativeX = a.newPosX - l.relativePos, "function" == typeof a.options.startDragging && !0 !== l.dragging && 0 !== a.newRelativeX && (l.dragging = !0, a.options.startDragging.apply(a, [a.$elem])), (8 < a.newRelativeX || -8 > a.newRelativeX) && !0 === a.browser.isTouch && (void 0 !== o.preventDefault ? o.preventDefault() : o.returnValue = !1, l.sliding = !0), (10 < a.newPosY || -10 > a.newPosY) && !1 === l.sliding && e(n).off("touchmove.owl"), a.newPosX = Math.max(Math.min(a.newPosX, a.newRelativeX / 5), a.maximumPixels + a.newRelativeX / 5), !0 === a.browser.support3d ? a.transition3d(a.newPosX) : a.css2move(a.newPosX);
          }

          function s(n) {
            var i;
            (n = n.originalEvent || n || t.event).target = n.target || n.srcElement, l.dragging = !1, !0 !== a.browser.isTouch && a.$owlWrapper.removeClass("grabbing"), a.dragDirection = 0 > a.newRelativeX ? a.owl.dragDirection = "left" : a.owl.dragDirection = "right", 0 !== a.newRelativeX && (i = a.getNewPosition(), a.goTo(i, !1, "drag"), l.targetElement === n.target && !0 !== a.browser.isTouch && (e(n.target).on("click.disable", function (t) {
              t.stopImmediatePropagation(), t.stopPropagation(), t.preventDefault(), e(t.target).off("click.disable");
            }), i = (n = e._data(n.target, "events").click).pop(), n.splice(0, 0, i))), o("off");
          }
          var a = this,
            l = {
              offsetX: 0,
              offsetY: 0,
              baseElWidth: 0,
              relativePos: 0,
              position: null,
              minSwipe: null,
              maxSwipe: null,
              sliding: null,
              dargging: null,
              targetElement: null
            };
          a.isCssFinish = !0, a.$elem.on(a.ev_types.start, ".owl-wrapper", function (n) {
            var r;
            if (3 === (n = n.originalEvent || n || t.event).which) return !1;
            if (!(a.itemsAmount <= a.options.items)) {
              if (!1 === a.isCssFinish && !a.options.dragBeforeAnimFinish || !1 === a.isCss3Finish && !a.options.dragBeforeAnimFinish) return !1;
              !1 !== a.options.autoPlay && t.clearInterval(a.autoPlayInterval), !0 === a.browser.isTouch || a.$owlWrapper.hasClass("grabbing") || a.$owlWrapper.addClass("grabbing"), a.newPosX = 0, a.newRelativeX = 0, e(this).css(a.removeTransition()), r = e(this).position(), l.relativePos = r.left, l.offsetX = i(n).x - r.left, l.offsetY = i(n).y - r.top, o("on"), l.sliding = !1, l.targetElement = n.target || n.srcElement;
            }
          });
        },
        getNewPosition: function () {
          var e = this.closestItem();
          return e > this.maximumItem ? e = this.currentItem = this.maximumItem : 0 <= this.newPosX && (this.currentItem = e = 0), e;
        },
        closestItem: function () {
          var t = this,
            n = !0 === t.options.scrollPerPage ? t.pagesInArray : t.positionsInArray,
            i = t.newPosX,
            o = null;
          return e.each(n, function (r, s) {
            i - t.itemWidth / 20 > n[r + 1] && i - t.itemWidth / 20 < s && "left" === t.moveDirection() ? (o = s, t.currentItem = !0 === t.options.scrollPerPage ? e.inArray(o, t.positionsInArray) : r) : i + t.itemWidth / 20 < s && i + t.itemWidth / 20 > (n[r + 1] || n[r] - t.itemWidth) && "right" === t.moveDirection() && (!0 === t.options.scrollPerPage ? (o = n[r + 1] || n[n.length - 1], t.currentItem = e.inArray(o, t.positionsInArray)) : (o = n[r + 1], t.currentItem = r + 1));
          }), t.currentItem;
        },
        moveDirection: function () {
          var e;
          return 0 > this.newRelativeX ? (e = "right", this.playDirection = "next") : (e = "left", this.playDirection = "prev"), e;
        },
        customEvents: function () {
          var e = this;
          e.$elem.on("owl.next", function () {
            e.next();
          }), e.$elem.on("owl.prev", function () {
            e.prev();
          }), e.$elem.on("owl.play", function (t, n) {
            e.options.autoPlay = n, e.play(), e.hoverStatus = "play";
          }), e.$elem.on("owl.stop", function () {
            e.stop(), e.hoverStatus = "stop";
          }), e.$elem.on("owl.goTo", function (t, n) {
            e.goTo(n);
          }), e.$elem.on("owl.jumpTo", function (t, n) {
            e.jumpTo(n);
          });
        },
        stopOnHover: function () {
          var e = this;
          !0 === e.options.stopOnHover && !0 !== e.browser.isTouch && !1 !== e.options.autoPlay && (e.$elem.on("mouseover", function () {
            e.stop();
          }), e.$elem.on("mouseout", function () {
            "stop" !== e.hoverStatus && e.play();
          }));
        },
        lazyLoad: function () {
          var t, n, i, o;
          if (!1 === this.options.lazyLoad) return !1;
          for (t = 0; t < this.itemsAmount; t += 1) "loaded" !== (n = e(this.$owlItems[t])).data("owl-loaded") && (i = n.data("owl-item"), "string" != typeof (o = n.find(".lazyOwl")).data("src") ? n.data("owl-loaded", "loaded") : (void 0 === n.data("owl-loaded") && (o.hide(), n.addClass("loading").data("owl-loaded", "checked")), (!0 !== this.options.lazyFollow || i >= this.currentItem) && i < this.currentItem + this.options.items && o.length && this.lazyPreload(n, o)));
        },
        lazyPreload: function (e, n) {
          function i() {
            e.data("owl-loaded", "loaded").removeClass("loading"), n.removeAttr("data-src"), "fade" === r.options.lazyEffect ? n.fadeIn(400) : n.show(), "function" == typeof r.options.afterLazyLoad && r.options.afterLazyLoad.apply(this, [r.$elem]);
          }
          var o, r = this,
            s = 0;
          "DIV" === n.prop("tagName") ? (n.css("background-image", "url(" + n.data("src") + ")"), o = !0) : n[0].src = n.data("src"),
            function e() {
              s += 1, r.completeImg(n.get(0)) || !0 === o ? i() : 100 >= s ? t.setTimeout(e, 100) : i();
            }();
        },
        autoHeight: function () {
          function n() {
            var n = e(o.$owlItems[o.currentItem]).height();
            o.wrapperOuter.css("height", n + "px"), o.wrapperOuter.hasClass("autoHeight") || t.setTimeout(function () {
              o.wrapperOuter.addClass("autoHeight");
            }, 0);
          }
          var i, o = this,
            r = e(o.$owlItems[o.currentItem]).find("img");
          void 0 !== r.get(0) ? (i = 0, function e() {
            i += 1, o.completeImg(r.get(0)) ? n() : 100 >= i ? t.setTimeout(e, 100) : o.wrapperOuter.css("height", "");
          }()) : n();
        },
        completeImg: function (e) {
          return !(!e.complete || void 0 !== e.naturalWidth && 0 === e.naturalWidth);
        },
        onVisibleItems: function () {
          var t;
          for (!0 === this.options.addClassActive && this.$owlItems.removeClass("active"), this.visibleItems = [], t = this.currentItem; t < this.currentItem + this.options.items; t += 1) this.visibleItems.push(t), !0 === this.options.addClassActive && e(this.$owlItems[t]).addClass("active");
          this.owl.visibleItems = this.visibleItems;
        },
        transitionTypes: function (e) {
          this.outClass = "owl-" + e + "-out", this.inClass = "owl-" + e + "-in";
        },
        singleItemTransition: function () {
          var e = this,
            t = e.outClass,
            n = e.inClass,
            i = e.$owlItems.eq(e.currentItem),
            o = e.$owlItems.eq(e.prevItem),
            r = Math.abs(e.positionsInArray[e.currentItem]) + e.positionsInArray[e.prevItem],
            s = Math.abs(e.positionsInArray[e.currentItem]) + e.itemWidth / 2;
          e.isTransition = !0, e.$owlWrapper.addClass("owl-origin").css({
            "-webkit-transform-origin": s + "px",
            "-moz-perspective-origin": s + "px",
            "perspective-origin": s + "px"
          }), o.css({
            position: "relative",
            left: r + "px"
          }).addClass(t).on("webkitAnimationEnd oAnimationEnd MSAnimationEnd animationend", function () {
            e.endPrev = !0, o.off("webkitAnimationEnd oAnimationEnd MSAnimationEnd animationend"), e.clearTransStyle(o, t);
          }), i.addClass(n).on("webkitAnimationEnd oAnimationEnd MSAnimationEnd animationend", function () {
            e.endCurrent = !0, i.off("webkitAnimationEnd oAnimationEnd MSAnimationEnd animationend"), e.clearTransStyle(i, n);
          });
        },
        clearTransStyle: function (e, t) {
          e.css({
            position: "",
            left: ""
          }).removeClass(t), this.endPrev && this.endCurrent && (this.$owlWrapper.removeClass("owl-origin"), this.isTransition = this.endCurrent = this.endPrev = !1);
        },
        owlStatus: function () {
          this.owl = {
            userOptions: this.userOptions,
            baseElement: this.$elem,
            userItems: this.$userItems,
            owlItems: this.$owlItems,
            currentItem: this.currentItem,
            prevItem: this.prevItem,
            visibleItems: this.visibleItems,
            isTouch: this.browser.isTouch,
            browser: this.browser,
            dragDirection: this.dragDirection
          };
        },
        clearEvents: function () {
          this.$elem.off(".owl owl mousedown.disableTextSelect"), e(n).off(".owl owl"), e(t).off("resize", this.resizer);
        },
        unWrap: function () {
          0 !== this.$elem.children().length && (this.$owlWrapper.unwrap(), this.$userItems.unwrap().unwrap(), this.owlControls && this.owlControls.remove()), this.clearEvents(), this.$elem.attr("style", this.$elem.data("owl-originalStyles") || "").attr("class", this.$elem.data("owl-originalClasses"));
        },
        destroy: function () {
          this.stop(), t.clearInterval(this.checkVisible), this.unWrap(), this.$elem.removeData();
        },
        reinit: function (t) {
          t = e.extend({}, this.userOptions, t), this.unWrap(), this.init(t, this.$elem);
        },
        addItem: function (e, t) {
          var n;
          return !!e && (0 === this.$elem.children().length ? (this.$elem.append(e), this.setVars(), !1) : (this.unWrap(), (n = void 0 === t || -1 === t ? -1 : t) >= this.$userItems.length || -1 === n ? this.$userItems.eq(-1).after(e) : this.$userItems.eq(n).before(e), void this.setVars()));
        },
        removeItem: function (e) {
          if (0 === this.$elem.children().length) return !1;
          e = void 0 === e || -1 === e ? -1 : e, this.unWrap(), this.$userItems.eq(e).remove(), this.setVars();
        }
      };
      e.fn.owlCarousel = function (t) {
        return this.each(function () {
          if (!0 === e(this).data("owl-init")) return !1;
          e(this).data("owl-init", !0);
          var n = Object.create(i);
          n.init(t, this), e.data(this, "owlCarousel", n);
        });
      }, e.fn.owlCarousel.options = {
        items: 5,
        itemsCustom: !1,
        itemsDesktop: [1199, 4],
        itemsDesktopSmall: [979, 3],
        itemsTablet: [768, 2],
        itemsTabletSmall: !1,
        itemsMobile: [479, 1],
        singleItem: !1,
        itemsScaleUp: !1,
        slideSpeed: 200,
        paginationSpeed: 800,
        rewindSpeed: 1e3,
        autoPlay: !1,
        stopOnHover: !1,
        navigation: !1,
        navigationText: ["prev", "next"],
        rewindNav: !0,
        scrollPerPage: !1,
        pagination: !0,
        paginationNumbers: !1,
        responsive: !0,
        responsiveRefreshRate: 200,
        responsiveBaseWidth: t,
        baseClass: "owl-carousel",
        theme: "owl-theme",
        lazyLoad: !1,
        lazyFollow: !0,
        lazyEffect: "fade",
        autoHeight: !1,
        jsonPath: !1,
        jsonSuccess: !1,
        dragBeforeAnimFinish: !0,
        mouseDrag: !0,
        touchDrag: !0,
        addClassActive: !1,
        transitionStyle: !1,
        beforeUpdate: !1,
        afterUpdate: !1,
        beforeInit: !1,
        afterInit: !1,
        beforeMove: !1,
        afterMove: !1,
        afterAction: !1,
        startDragging: !1,
        afterLazyLoad: !1
      };
    }(jQuery, window, document);
}, function (e, t) {
  ! function (e, t, n) {
    "use strict";
    var i = {
      throttle: function (e, t, n) {
        var i, o;
        return t || (t = 250),
          function () {
            var r = n || this,
              s = +new Date,
              a = arguments;
            i && s < i + t ? (clearTimeout(o), o = setTimeout(function () {
              i = s, e.apply(r, a);
            }, t)) : (i = s, e.apply(r, a));
          };
      },
      debounce: function (e, t) {
        var n = null;
        return function () {
          var i = this,
            o = arguments;
          clearTimeout(n), n = setTimeout(function () {
            e.apply(i, o);
          }, t);
        };
      },
      extend: function () {
        for (var e = 1; e < arguments.length; e++)
          for (var t in arguments[e]) arguments[e].hasOwnProperty(t) && (arguments[0][t] = arguments[e][t]);
        return arguments[0];
      },
      isElement: function (e) {
        return !(!e || 1 !== e.nodeType);
      },
      hasClass: function (e, t) {
        return e.className.indexOf(t) > -1;
      },
      isSmallScreen: function () {
        return e.innerWidth <= this.options.navBreakpoint;
      },
      handleResize: function () {
        i.throttle(this.reflowNavigation.bind(this), delay), i.debounce(this.reflowNavigation.bind(this), delay);
        var e = this.isSmallScreen(),
          t = !1;
        if (!this.smallScreen && !e || this.smallScreen && e || (this.smallScreen = e, t = !0), !t) return !1;
      }
    };
    e.Util = i;
  }(window, document),
    /*! matchMedia() polyfill - Test a CSS media type/query in JS. Authors & copyright (c) 2012: Scott Jehl, Paul Irish, Nicholas Zakas. Dual MIT/BSD license */
    window.matchMedia = window.matchMedia || function (e, t) {
      var n = e.documentElement,
        i = n.firstElementChild || n.firstChild,
        o = e.createElement("body"),
        r = e.createElement("div");
      r.id = "mq-test-1", r.style.cssText = "position:absolute;top:-100em", o.style.background = "none", o.appendChild(r);
      var s, a = function (e) {
        return r.innerHTML = '&shy;<style media="' + e + '"> #mq-test-1 { width: 42px; }</style>', n.insertBefore(o, i), bool = 42 === r.offsetWidth, n.removeChild(o), {
          matches: bool,
          media: e
        };
      },
        l = function () {
          var t = n.body,
            i = !1;
          return r.style.cssText = "position:absolute;font-size:1em;width:1em", t || ((t = i = e.createElement("body")).style.background = "none"), t.appendChild(r), n.insertBefore(t, n.firstChild), i ? n.removeChild(t) : t.removeChild(r), s = parseFloat(r.offsetWidth);
        },
        c = a("(min-width: 0px)").matches;
      return function (t) {
        if (c) return a(t);
        var n = t.match(/\(min\-width:[\s]*([\s]*[0-9\.]+)(px|em)[\s]*\)/) && parseFloat(RegExp.$1) + (RegExp.$2 || ""),
          i = t.match(/\(max\-width:[\s]*([\s]*[0-9\.]+)(px|em)[\s]*\)/) && parseFloat(RegExp.$1) + (RegExp.$2 || ""),
          o = null === n,
          r = null === i,
          u = e.body.offsetWidth;
        return n && (n = parseFloat(n) * (n.indexOf("em") > -1 ? s || l() : 1)), i && (i = parseFloat(i) * (i.indexOf("em") > -1 ? s || l() : 1)), bool = (!o || !r) && (o || u >= n) && (r || u <= i), {
          matches: bool,
          media: t
        };
      };
    }(document);
  ! function (e, t, n, i, o) {
    "use strict";
    var r = function (n) {
      this.breakpoints = t.extend({}, "object" == typeof n && n), this.currentView = null, e.addEventListener("resize", t.throttle(this.switch, 20, this)), e.addEventListener("load", t.throttle(this.switch, 20, this));
    };
    r.create = function (e) {
      if (!n) throw new Error("matchMedia is required for BreakpointSwitcher");
      if ("object" == typeof e) return new r(e);
      throw new Error("Options object has to be passed to the constructor");
    }, r.prototype.matchView = function (e) {
      var t = null;
      for (var i in e) n("(min-width: " + i + ")").matches && (t = e[i]);
      return t;
    }, r.prototype.switch = function () {
      var t = this.matchView(this.breakpoints);
      return this.currentView !== t ? (this.currentView && "function" == typeof this.currentView && this.currentView.call(e, !1), "function" == typeof t && t.call(e, !0), this.currentView = t) : null;
    };
  }(window, window.Util, window.matchMedia, document);
  ! function (e, t, n, i) {
    "use strict";
    var o = [],
      r = function (t, i) {
        this.options = i, this.element = "string" == typeof t ? n.querySelector(t) : t, this.resizeListener = null, this.container = this.options.containerSelector ? this.element.querySelectorAll(this.options.containerSelector)[0] : this.element, this.navList = this.element.querySelectorAll("ul")[0], this.overflowMenu = this.createOverflowMenu(), this.overflowList = this.overflowMenu.querySelectorAll("ul")[0], this.overflowDropdown = this.element.parentNode.querySelector("[data-nav-priority-toggle]"), this.overflowBreakpoints = [], this.elementStyle = e.getComputedStyle(this.element), this.breakpoints = this.getBreakpoints(), this.setupEventListeners(), this.reflowNavigation();
      };
    r.DEFAULTS = {
      dropdownLabel: 'More <i class="caret"></i>',
      dropdownMenuClass: "dropdown-menu dropdown-menu-right",
      dropdownMenuTemplate: '<li data-nav-priority-menu class="navbar-nav-more nav-item dropdown" aria-hidden="true"><a id="{{dropdownMenuId}}" href="#" class="navbar-toggle-more nav-link dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false" data-nav-priority-toggle>{{dropdownLabel}}</a><ul class="{{dropdownMenuClass}}" aria-labelledby="{{dropdownMenuId}}"></ul></li>',
      containerSelector: "ul",
      containerWidthOffset: 10,
      threshold: 2
    }, r.create = function (e, n) {
      var i = e.querySelectorAll("li"),
        o = !0;
      if (!t.isElement(e)) throw o = !1, new Error("element has to be DOM Element");
      return (0 === i.length || i.length <= n.threshold) && (o = !1), o ? new r(e, n) : null;
    }, r.prototype.createOverflowMenu = function () {
      var e = this.navList.querySelector("[data-nav-priority-menu]");
      if (!e) {
        var t, i = "nav-link-more-" + o.length,
          r = this.options.dropdownMenuTemplate,
          s = this.navList.children[this.navList.children.length - 1];
        r = r.replace("{{dropdownLabel}}", this.options.dropdownLabel).replace("{{dropdownMenuClass}}", this.options.dropdownMenuClass).replace(new RegExp("{{dropdownMenuId}}", "g"), i), (t = n.createElement("div")).innerHTML = r, s.setAttribute("class", s.className + " is-last"), this.navList.appendChild(t.firstChild), e = this.navList.querySelector("[data-nav-priority-menu]");
      }
      if (!e) throw new Error("overflowMenu does not exist, check your custom dropdownMenuTemplate parameter");
      return e;
    }, r.prototype.getBreakpoints = function () {
      for (var e = [], n = this.navList.children, i = n.length, o = Math.ceil(this.overflowDropdown.getBoundingClientRect().width), r = o, s = 0; s < i; s++) {
        var a = n[s];
        t.hasClass(a, "navbar-nav-more") || (r += Math.ceil(a.getBoundingClientRect().width), e.push(r));
      }
      return e[e.length - 1] -= o, e;
    }, r.prototype.setupEventListeners = function () {
      this.resizeListener = t.throttle(this.reflowNavigation, 10, this), e.addEventListener("resize", this.resizeListener);
    }, r.prototype.addToOverflow = function (e, t) {
      return this.overflowList.insertBefore(e, this.overflowList.firstChild), this.overflowBreakpoints.unshift(t), this.breakpoints.pop(), this.overflowBreakpoints;
    }, r.prototype.removeFromOverflow = function (e, t) {
      return this.breakpoints.push(t), this.overflowBreakpoints.shift(), this.navList.insertBefore(e, this.overflowDropdown.parentNode), this.overflowBreakpoints;
    }, r.prototype.toggleOverflowDropdown = function (e) {
      return this.overflowMenu.setAttribute("aria-hidden", e);
    }, r.prototype.reflowNavigation = function () {
      if (!this.resizeListener) return !1;
      for (var e = Math.ceil(this.container.getBoundingClientRect().width - this.options.containerWidthOffset), n = this.navList.children, i = n.length; i--;)
        if (!t.hasClass(n[i], "navbar-nav-more")) {
          var o = this.breakpoints[i];
          o >= e && this.addToOverflow(n[i], o);
        } for (var r = this.overflowList.children.length; r--;) this.overflowBreakpoints[0] < e && this.removeFromOverflow(this.overflowList.children[0], this.overflowBreakpoints[0]);
      this.toggleOverflowDropdown(0 == this.overflowList.children.length);
    }, r.prototype.destroy = function () {
      if (this.element.removeAttribute("data-nav-priority"), e.removeEventListener("resize", this.resizeListener), this.resizeListener = null, this.overflowList.children.length)
        for (; this.overflowList.children.length;) this.removeFromOverflow(this.overflowList.children[0], this.overflowBreakpoints[0]);
      return this.toggleOverflowDropdown(0 == this.overflowList.children.length), this.element;
    }, e.navPriority = function (e, i) {
      var s = n.querySelectorAll(e);
      if ("string" == typeof i && "destroy" == i) {
        for (var a = 0; a < o.length; a++) {
          (l = o[a]).destroy.call(l);
        }
        o = [];
      }
      if ("string" != typeof i)
        for (a = 0; a < s.length; a++) {
          var l, c = s[a],
            u = t.extend({}, r.DEFAULTS, "object" == typeof i && i);
          if (!(l = c.getAttribute("data-nav-priority"))) {
            var d = r.create(c, u);
            o.push(d), l = c.setAttribute("data-nav-priority", !0);
          }
        }
      return o;
    };
  }(window, window.Util, document);
}, function (e, t) {
  /*!
  
   =========================================================
   * Now UI Kit Pro - v1.2.2
   =========================================================
  
   * Product Page: https://www.creative-tim.com/product/now-ui-kit-pro
   * Copyright 2018 Creative Tim (http://www.creative-tim.com)
  
   * Designed by www.invisionapp.com Coded by www.creative-tim.com
  
   =========================================================
  
   * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
  
   */
  var n, i, o, r, s, a = !0;

  function l(e, t, n) {
    var i;
    return function () {
      var o = this,
        r = arguments;
      clearTimeout(i), i = setTimeout(function () {
        i = null, n || e.apply(o, r);
      }, t), n && !i && e.apply(o, r);
    };
  }
  $(document).ready(function () {
    $('[data-toggle="tooltip"], [rel="tooltip"]').tooltip(), 0 != $(".selectpicker").length && $(".selectpicker").selectpicker({
      iconBase: "now-ui-icons",
      tickIcon: "ui-1_check"
    }), $(window).width() >= 768 && 0 != (n = $('.header[data-parallax="true"]')).length && $(window).on("scroll", i.checkScrollForParallax), $('[data-toggle="popover"]').each(function () {
      color_class = $(this).data("color"), $(this).popover({
        template: '<div class="popover popover-' + color_class + '" role="tooltip"><div class="arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>'
      });
    });
    var e = $(".tagsinput").data("color");
    0 != $(".tagsinput").length && $(".tagsinput").tagsinput(), $(".bootstrap-tagsinput").addClass("badge-" + e), i.initNavbarImage(), $(".navbar-collapse").addClass("show"), o = $(".navbar[color-on-scroll]"), r = o.attr("color-on-scroll") || 500, 0 != $(".navbar[color-on-scroll]").length && (i.checkScrollForTransparentNavbar(), $(window).on("scroll", i.checkScrollForTransparentNavbar)), $(".form-control").on("focus", function () {
      $(this).parent(".input-group").addClass("input-group-focus");
    }).on("blur", function () {
      $(this).parent(".input-group").removeClass("input-group-focus");
    }), $(".bootstrap-switch").each(function () {
      $this = $(this), data_on_label = $this.data("on-label") || "", data_off_label = $this.data("off-label") || "", $this.bootstrapSwitch({
        onText: data_on_label,
        offText: data_off_label
      });
    }), $(window).width() >= 992 && (n = $('.page-header-image[data-parallax="true"]'), $(window).on("scroll", i.checkScrollForParallax)), $(".carousel").carousel({
      interval: 4e3
    }), 0 != $(".datetimepicker").length && $(".datetimepicker").datetimepicker({
      icons: {
        time: "now-ui-icons tech_watch-time",
        date: "now-ui-icons ui-1_calendar-60",
        up: "fa fa-chevron-up",
        down: "fa fa-chevron-down",
        previous: "now-ui-icons arrows-1_minimal-left",
        next: "now-ui-icons arrows-1_minimal-right",
        today: "fa fa-screenshot",
        clear: "fa fa-trash",
        close: "fa fa-remove"
      }
    }), 0 != $(".datepicker").length && $(".datepicker").datetimepicker({
      format: "MM/DD/YYYY",
      icons: {
        time: "now-ui-icons tech_watch-time",
        date: "now-ui-icons ui-1_calendar-60",
        up: "fa fa-chevron-up",
        down: "fa fa-chevron-down",
        previous: "now-ui-icons arrows-1_minimal-left",
        next: "now-ui-icons arrows-1_minimal-right",
        today: "fa fa-screenshot",
        clear: "fa fa-trash",
        close: "fa fa-remove"
      }
    }), 0 != $(".timepicker").length && $(".timepicker").datetimepicker({
      format: "h:mm A",
      icons: {
        time: "now-ui-icons tech_watch-time",
        date: "now-ui-icons ui-1_calendar-60",
        up: "fa fa-chevron-up",
        down: "fa fa-chevron-down",
        previous: "now-ui-icons arrows-1_minimal-left",
        next: "now-ui-icons arrows-1_minimal-right",
        today: "fa fa-screenshot",
        clear: "fa fa-trash",
        close: "fa fa-remove"
      }
    });
  }), $(window).on("resize", function () {
    i.initNavbarImage();
  }), $(document).on("click", ".navbar-toggler", function () {
    $toggle = $(this), 1 == i.misc.navbar_menu_visible ? ($("html").removeClass("nav-open"), i.misc.navbar_menu_visible = 0, $("#bodyClick").remove(), setTimeout(function () {
      $toggle.removeClass("toggled");
    }, 550)) : (setTimeout(function () {
      $toggle.addClass("toggled");
    }, 580), div = '<div id="bodyClick"></div>', $(div).appendTo("body").click(function () {
      $("html").removeClass("nav-open"), i.misc.navbar_menu_visible = 0, setTimeout(function () {
        $toggle.removeClass("toggled"), $("#bodyClick").remove();
      }, 550);
    }), $("html").addClass("nav-open"), i.misc.navbar_menu_visible = 1);
  }), i = {
    misc: {
      navbar_menu_visible: 0
    },
    checkScrollForTransparentNavbar: l(function () {
      $(document).scrollTop() > r ? a && (a = !1, $(".navbar[color-on-scroll]").removeClass("navbar-transparent")) : a || (a = !0, $(".navbar[color-on-scroll]").addClass("navbar-transparent"));
    }, 17),
    initNavbarImage: function () {
      var e = $(".navbar").find(".navbar-translate").siblings(".navbar-collapse"),
        t = e.data("nav-image");
      void 0 != t && ($(window).width() < 991 || $("body").hasClass("burger-menu") ? e.css("background", "url('" + t + "')").removeAttr("data-nav-image").css("background-size", "cover").addClass("has-image") : e.css("background", "").attr("data-nav-image", "" + t).css("background-size", "").removeClass("has-image"));
    },
    initSliders: function () {
      var e = document.getElementById("sliderRegular");
      noUiSlider.create(e, {
        start: 40,
        connect: [!0, !1],
        range: {
          min: 0,
          max: 100
        }
      });
      var t = document.getElementById("sliderDouble");
      noUiSlider.create(t, {
        start: [20, 60],
        connect: !0,
        range: {
          min: 0,
          max: 100
        }
      });
    },
    checkScrollForParallax: l(function () {
      s = $(window).scrollTop() / 3, n.css({
        transform: "translate3d(0," + s + "px,0)",
        "-webkit-transform": "translate3d(0," + s + "px,0)",
        "-ms-transform": "translate3d(0," + s + "px,0)",
        "-o-transform": "translate3d(0," + s + "px,0)"
      });
    }, 6),
    initContactUsMap: function () {
      var e = new google.maps.LatLng(40.748817, -73.985428),
        t = {
          zoom: 13,
          center: e,
          scrollwheel: !1,
          styles: [{
            featureType: "water",
            elementType: "geometry",
            stylers: [{
              color: "#e9e9e9"
            }, {
              lightness: 17
            }]
          }, {
            featureType: "landscape",
            elementType: "geometry",
            stylers: [{
              color: "#f5f5f5"
            }, {
              lightness: 20
            }]
          }, {
            featureType: "road.highway",
            elementType: "geometry.fill",
            stylers: [{
              color: "#ffffff"
            }, {
              lightness: 17
            }]
          }, {
            featureType: "road.highway",
            elementType: "geometry.stroke",
            stylers: [{
              color: "#ffffff"
            }, {
              lightness: 29
            }, {
              weight: .2
            }]
          }, {
            featureType: "road.arterial",
            elementType: "geometry",
            stylers: [{
              color: "#ffffff"
            }, {
              lightness: 18
            }]
          }, {
            featureType: "road.local",
            elementType: "geometry",
            stylers: [{
              color: "#ffffff"
            }, {
              lightness: 16
            }]
          }, {
            featureType: "poi",
            elementType: "geometry",
            stylers: [{
              color: "#f5f5f5"
            }, {
              lightness: 21
            }]
          }, {
            featureType: "poi.park",
            elementType: "geometry",
            stylers: [{
              color: "#dedede"
            }, {
              lightness: 21
            }]
          }, {
            elementType: "labels.text.stroke",
            stylers: [{
              visibility: "on"
            }, {
              color: "#ffffff"
            }, {
              lightness: 16
            }]
          }, {
            elementType: "labels.text.fill",
            stylers: [{
              saturation: 36
            }, {
              color: "#333333"
            }, {
              lightness: 40
            }]
          }, {
            elementType: "labels.icon",
            stylers: [{
              visibility: "off"
            }]
          }, {
            featureType: "transit",
            elementType: "geometry",
            stylers: [{
              color: "#f2f2f2"
            }, {
              lightness: 19
            }]
          }, {
            featureType: "administrative",
            elementType: "geometry.fill",
            stylers: [{
              color: "#fefefe"
            }, {
              lightness: 20
            }]
          }, {
            featureType: "administrative",
            elementType: "geometry.stroke",
            stylers: [{
              color: "#fefefe"
            }, {
              lightness: 17
            }, {
              weight: 1.2
            }]
          }]
        },
        n = new google.maps.Map(document.getElementById("contactUsMap"), t);
      new google.maps.Marker({
        position: e,
        title: "Hello World!"
      }).setMap(n);
    },
    initContactUs2Map: function () {
      var e = new google.maps.LatLng(40.748817, -73.985428),
        t = {
          zoom: 13,
          center: e,
          scrollwheel: !1,
          styles: [{
            featureType: "water",
            elementType: "geometry",
            stylers: [{
              color: "#e9e9e9"
            }, {
              lightness: 17
            }]
          }, {
            featureType: "landscape",
            elementType: "geometry",
            stylers: [{
              color: "#f5f5f5"
            }, {
              lightness: 20
            }]
          }, {
            featureType: "road.highway",
            elementType: "geometry.fill",
            stylers: [{
              color: "#ffffff"
            }, {
              lightness: 17
            }]
          }, {
            featureType: "road.highway",
            elementType: "geometry.stroke",
            stylers: [{
              color: "#ffffff"
            }, {
              lightness: 29
            }, {
              weight: .2
            }]
          }, {
            featureType: "road.arterial",
            elementType: "geometry",
            stylers: [{
              color: "#ffffff"
            }, {
              lightness: 18
            }]
          }, {
            featureType: "road.local",
            elementType: "geometry",
            stylers: [{
              color: "#ffffff"
            }, {
              lightness: 16
            }]
          }, {
            featureType: "poi",
            elementType: "geometry",
            stylers: [{
              color: "#f5f5f5"
            }, {
              lightness: 21
            }]
          }, {
            featureType: "poi.park",
            elementType: "geometry",
            stylers: [{
              color: "#dedede"
            }, {
              lightness: 21
            }]
          }, {
            elementType: "labels.text.stroke",
            stylers: [{
              visibility: "on"
            }, {
              color: "#ffffff"
            }, {
              lightness: 16
            }]
          }, {
            elementType: "labels.text.fill",
            stylers: [{
              saturation: 36
            }, {
              color: "#333333"
            }, {
              lightness: 40
            }]
          }, {
            elementType: "labels.icon",
            stylers: [{
              visibility: "off"
            }]
          }, {
            featureType: "transit",
            elementType: "geometry",
            stylers: [{
              color: "#f2f2f2"
            }, {
              lightness: 19
            }]
          }, {
            featureType: "administrative",
            elementType: "geometry.fill",
            stylers: [{
              color: "#fefefe"
            }, {
              lightness: 20
            }]
          }, {
            featureType: "administrative",
            elementType: "geometry.stroke",
            stylers: [{
              color: "#fefefe"
            }, {
              lightness: 17
            }, {
              weight: 1.2
            }]
          }]
        },
        n = new google.maps.Map(document.getElementById("contactUs2Map"), t);
      new google.maps.Marker({
        position: e,
        title: "Hello World!"
      }).setMap(n);
    }
  };
}, function (e, t, n) {
  "use strict";
  n.r(t), n.d(t, "Channel", function () {
    return g;
  }), n.d(t, "Serializer", function () {
    return v;
  }), n.d(t, "Socket", function () {
    return b;
  }), n.d(t, "LongPoll", function () {
    return y;
  }), n.d(t, "Ajax", function () {
    return w;
  }), n.d(t, "Presence", function () {
    return C;
  });
  const i = "undefined" != typeof self ? self : null,
    o = "undefined" != typeof window ? window : null,
    r = i || o || void 0,
    s = "2.0.0",
    a = {
      connecting: 0,
      open: 1,
      closing: 2,
      closed: 3
    },
    l = 1e4,
    c = 1e3,
    u = {
      closed: "closed",
      errored: "errored",
      joined: "joined",
      joining: "joining",
      leaving: "leaving"
    },
    d = {
      close: "phx_close",
      error: "phx_error",
      join: "phx_join",
      reply: "phx_reply",
      leave: "phx_leave"
    },
    p = [d.close, d.error, d.join, d.reply, d.leave],
    h = {
      longpoll: "longpoll",
      websocket: "websocket"
    };
  let f = e => {
    if ("function" == typeof e) return e;
    return function () {
      return e;
    };
  };
  class m {
    constructor(e, t, n, i) {
      this.channel = e, this.event = t, this.payload = n || function () {
        return {};
      }, this.receivedResp = null, this.timeout = i, this.timeoutTimer = null, this.recHooks = [], this.sent = !1;
    }
    resend(e) {
      this.timeout = e, this.reset(), this.send();
    }
    send() {
      this.hasReceived("timeout") || (this.startTimeout(), this.sent = !0, this.channel.socket.push({
        topic: this.channel.topic,
        event: this.event,
        payload: this.payload(),
        ref: this.ref,
        join_ref: this.channel.joinRef()
      }));
    }
    receive(e, t) {
      return this.hasReceived(e) && t(this.receivedResp.response), this.recHooks.push({
        status: e,
        callback: t
      }), this;
    }
    reset() {
      this.cancelRefEvent(), this.ref = null, this.refEvent = null, this.receivedResp = null, this.sent = !1;
    }
    matchReceive({
      status: e,
      response: t,
      ref: n
    }) {
      this.recHooks.filter(t => t.status === e).forEach(e => e.callback(t));
    }
    cancelRefEvent() {
      this.refEvent && this.channel.off(this.refEvent);
    }
    cancelTimeout() {
      clearTimeout(this.timeoutTimer), this.timeoutTimer = null;
    }
    startTimeout() {
      this.timeoutTimer && this.cancelTimeout(), this.ref = this.channel.socket.makeRef(), this.refEvent = this.channel.replyEventName(this.ref), this.channel.on(this.refEvent, e => {
        this.cancelRefEvent(), this.cancelTimeout(), this.receivedResp = e, this.matchReceive(e);
      }), this.timeoutTimer = setTimeout(() => {
        this.trigger("timeout", {});
      }, this.timeout);
    }
    hasReceived(e) {
      return this.receivedResp && this.receivedResp.status === e;
    }
    trigger(e, t) {
      this.channel.trigger(this.refEvent, {
        status: e,
        response: t
      });
    }
  }
  class g {
    constructor(e, t, n) {
      this.state = u.closed, this.topic = e, this.params = f(t || {}), this.socket = n, this.bindings = [], this.bindingRef = 0, this.timeout = this.socket.timeout, this.joinedOnce = !1, this.joinPush = new m(this, d.join, this.params, this.timeout), this.pushBuffer = [], this.stateChangeRefs = [], this.rejoinTimer = new x(() => {
        this.socket.isConnected() && this.rejoin();
      }, this.socket.rejoinAfterMs), this.stateChangeRefs.push(this.socket.onError(() => this.rejoinTimer.reset())), this.stateChangeRefs.push(this.socket.onOpen(() => {
        this.rejoinTimer.reset(), this.isErrored() && this.rejoin();
      })), this.joinPush.receive("ok", () => {
        this.state = u.joined, this.rejoinTimer.reset(), this.pushBuffer.forEach(e => e.send()), this.pushBuffer = [];
      }), this.joinPush.receive("error", () => {
        this.state = u.errored, this.socket.isConnected() && this.rejoinTimer.scheduleTimeout();
      }), this.onClose(() => {
        this.rejoinTimer.reset(), this.socket.hasLogger() && this.socket.log("channel", `close ${this.topic} ${this.joinRef()}`), this.state = u.closed, this.socket.remove(this);
      }), this.onError(e => {
        this.socket.hasLogger() && this.socket.log("channel", `error ${this.topic}`, e), this.isJoining() && this.joinPush.reset(), this.state = u.errored, this.socket.isConnected() && this.rejoinTimer.scheduleTimeout();
      }), this.joinPush.receive("timeout", () => {
        this.socket.hasLogger() && this.socket.log("channel", `timeout ${this.topic} (${this.joinRef()})`, this.joinPush.timeout), new m(this, d.leave, f({}), this.timeout).send(), this.state = u.errored, this.joinPush.reset(), this.socket.isConnected() && this.rejoinTimer.scheduleTimeout();
      }), this.on(d.reply, (e, t) => {
        this.trigger(this.replyEventName(t), e);
      });
    }
    join(e = this.timeout) {
      if (this.joinedOnce) throw new Error("tried to join multiple times. 'join' can only be called a single time per channel instance");
      return this.timeout = e, this.joinedOnce = !0, this.rejoin(), this.joinPush;
    }
    onClose(e) {
      this.on(d.close, e);
    }
    onError(e) {
      return this.on(d.error, t => e(t));
    }
    on(e, t) {
      let n = this.bindingRef++;
      return this.bindings.push({
        event: e,
        ref: n,
        callback: t
      }), n;
    }
    off(e, t) {
      this.bindings = this.bindings.filter(n => !(n.event === e && (void 0 === t || t === n.ref)));
    }
    canPush() {
      return this.socket.isConnected() && this.isJoined();
    }
    push(e, t, n = this.timeout) {
      if (!this.joinedOnce) throw new Error(`tried to push '${e}' to '${this.topic}' before joining. Use channel.join() before pushing events`);
      let i = new m(this, e, function () {
        return t;
      }, n);
      return this.canPush() ? i.send() : (i.startTimeout(), this.pushBuffer.push(i)), i;
    }
    leave(e = this.timeout) {
      this.rejoinTimer.reset(), this.joinPush.cancelTimeout(), this.state = u.leaving;
      let t = () => {
        this.socket.hasLogger() && this.socket.log("channel", `leave ${this.topic}`), this.trigger(d.close, "leave");
      },
        n = new m(this, d.leave, f({}), e);
      return n.receive("ok", () => t()).receive("timeout", () => t()), n.send(), this.canPush() || n.trigger("ok", {}), n;
    }
    onMessage(e, t, n) {
      return t;
    }
    isLifecycleEvent(e) {
      return p.indexOf(e) >= 0;
    }
    isMember(e, t, n, i) {
      return this.topic === e && (!i || i === this.joinRef() || !this.isLifecycleEvent(t) || (this.socket.hasLogger() && this.socket.log("channel", "dropping outdated message", {
        topic: e,
        event: t,
        payload: n,
        joinRef: i
      }), !1));
    }
    joinRef() {
      return this.joinPush.ref;
    }
    rejoin(e = this.timeout) {
      this.isLeaving() || (this.socket.leaveOpenTopic(this.topic), this.state = u.joining, this.joinPush.resend(e));
    }
    trigger(e, t, n, i) {
      let o = this.onMessage(e, t, n, i);
      if (t && !o) throw new Error("channel onMessage callbacks must return the payload, modified or unmodified");
      let r = this.bindings.filter(t => t.event === e);
      for (let e = 0; e < r.length; e++) {
        r[e].callback(o, n, i || this.joinRef());
      }
    }
    replyEventName(e) {
      return `chan_reply_${e}`;
    }
    isClosed() {
      return this.state === u.closed;
    }
    isErrored() {
      return this.state === u.errored;
    }
    isJoined() {
      return this.state === u.joined;
    }
    isJoining() {
      return this.state === u.joining;
    }
    isLeaving() {
      return this.state === u.leaving;
    }
  }
  let v = {
    encode(e, t) {
      let n = [e.join_ref, e.ref, e.topic, e.event, e.payload];
      return t(JSON.stringify(n));
    },
    decode(e, t) {
      let [n, i, o, r, s] = JSON.parse(e);
      return t({
        join_ref: n,
        ref: i,
        topic: o,
        event: r,
        payload: s
      });
    }
  };
  class b {
    constructor(e, t = {}) {
      this.stateChangeCallbacks = {
        open: [],
        close: [],
        error: [],
        message: []
      }, this.channels = [], this.sendBuffer = [], this.ref = 0, this.timeout = t.timeout || l, this.transport = t.transport || r.WebSocket || y, this.defaultEncoder = v.encode, this.defaultDecoder = v.decode, this.closeWasClean = !1, this.unloaded = !1, this.binaryType = t.binaryType || "arraybuffer", this.transport !== y ? (this.encode = t.encode || this.defaultEncoder, this.decode = t.decode || this.defaultDecoder) : (this.encode = this.defaultEncoder, this.decode = this.defaultDecoder), o && o.addEventListener && o.addEventListener("unload", e => {
        this.conn && (this.unloaded = !0, this.abnormalClose("unloaded"));
      }), this.heartbeatIntervalMs = t.heartbeatIntervalMs || 3e4, this.rejoinAfterMs = (e => t.rejoinAfterMs ? t.rejoinAfterMs(e) : [1e3, 2e3, 5e3][e - 1] || 1e4), this.reconnectAfterMs = (e => this.unloaded ? 100 : t.reconnectAfterMs ? t.reconnectAfterMs(e) : [10, 50, 100, 150, 200, 250, 500, 1e3, 2e3][e - 1] || 5e3), this.logger = t.logger || null, this.longpollerTimeout = t.longpollerTimeout || 2e4, this.params = f(t.params || {}), this.endPoint = `${e}/${h.websocket}`, this.vsn = t.vsn || s, this.heartbeatTimer = null, this.pendingHeartbeatRef = null, this.reconnectTimer = new x(() => {
        this.teardown(() => this.connect());
      }, this.reconnectAfterMs);
    }
    protocol() {
      return location.protocol.match(/^https/) ? "wss" : "ws";
    }
    endPointURL() {
      let e = w.appendParams(w.appendParams(this.endPoint, this.params()), {
        vsn: this.vsn
      });
      return "/" !== e.charAt(0) ? e : "/" === e.charAt(1) ? `${this.protocol()}:${e}` : `${this.protocol()}://${location.host}${e}`;
    }
    disconnect(e, t, n) {
      this.closeWasClean = !0, this.reconnectTimer.reset(), this.teardown(e, t, n);
    }
    connect(e) {
      e && (console && console.log("passing params to connect is deprecated. Instead pass :params to the Socket constructor"), this.params = f(e)), this.conn || (this.closeWasClean = !1, this.conn = new this.transport(this.endPointURL()), this.conn.binaryType = this.binaryType, this.conn.timeout = this.longpollerTimeout, this.conn.onopen = (() => this.onConnOpen()), this.conn.onerror = (e => this.onConnError(e)), this.conn.onmessage = (e => this.onConnMessage(e)), this.conn.onclose = (e => this.onConnClose(e)));
    }
    log(e, t, n) {
      this.logger(e, t, n);
    }
    hasLogger() {
      return null !== this.logger;
    }
    onOpen(e) {
      let t = this.makeRef();
      return this.stateChangeCallbacks.open.push([t, e]), t;
    }
    onClose(e) {
      let t = this.makeRef();
      return this.stateChangeCallbacks.close.push([t, e]), t;
    }
    onError(e) {
      let t = this.makeRef();
      return this.stateChangeCallbacks.error.push([t, e]), t;
    }
    onMessage(e) {
      let t = this.makeRef();
      return this.stateChangeCallbacks.message.push([t, e]), t;
    }
    onConnOpen() {
      this.hasLogger() && this.log("transport", `connected to ${this.endPointURL()}`), this.unloaded = !1, this.closeWasClean = !1, this.flushSendBuffer(), this.reconnectTimer.reset(), this.resetHeartbeat(), this.stateChangeCallbacks.open.forEach(([, e]) => e());
    }
    resetHeartbeat() {
      this.conn && this.conn.skipHeartbeat || (this.pendingHeartbeatRef = null, clearInterval(this.heartbeatTimer), this.heartbeatTimer = setInterval(() => this.sendHeartbeat(), this.heartbeatIntervalMs));
    }
    teardown(e, t, n) {
      if (!this.conn) return e && e();
      this.waitForBufferDone(() => {
        this.conn && (t ? this.conn.close(t, n || "") : this.conn.close()), this.waitForSocketClosed(() => {
          this.conn && (this.conn.onclose = function () { }, this.conn = null), e && e();
        });
      });
    }
    waitForBufferDone(e, t = 1) {
      5 !== t && this.conn && this.conn.bufferedAmount ? setTimeout(() => {
        this.waitForBufferDone(e, t + 1);
      }, 150 * t) : e();
    }
    waitForSocketClosed(e, t = 1) {
      5 !== t && this.conn && this.conn.readyState !== a.closed ? setTimeout(() => {
        this.waitForSocketClosed(e, t + 1);
      }, 150 * t) : e();
    }
    onConnClose(e) {
      this.hasLogger() && this.log("transport", "close", e), this.triggerChanError(), clearInterval(this.heartbeatTimer), this.closeWasClean || this.reconnectTimer.scheduleTimeout(), this.stateChangeCallbacks.close.forEach(([, t]) => t(e));
    }
    onConnError(e) {
      this.hasLogger() && this.log("transport", e), this.triggerChanError(), this.stateChangeCallbacks.error.forEach(([, t]) => t(e));
    }
    triggerChanError() {
      this.channels.forEach(e => {
        e.isErrored() || e.isLeaving() || e.isClosed() || e.trigger(d.error);
      });
    }
    connectionState() {
      switch (this.conn && this.conn.readyState) {
        case a.connecting:
          return "connecting";
        case a.open:
          return "open";
        case a.closing:
          return "closing";
        default:
          return "closed";
      }
    }
    isConnected() {
      return "open" === this.connectionState();
    }
    remove(e) {
      this.off(e.stateChangeRefs), this.channels = this.channels.filter(t => t.joinRef() !== e.joinRef());
    }
    off(e) {
      for (let t in this.stateChangeCallbacks) this.stateChangeCallbacks[t] = this.stateChangeCallbacks[t].filter(([t]) => -1 === e.indexOf(t));
    }
    channel(e, t = {}) {
      let n = new g(e, t, this);
      return this.channels.push(n), n;
    }
    push(e) {
      if (this.hasLogger()) {
        let {
          topic: t,
          event: n,
          payload: i,
          ref: o,
          join_ref: r
        } = e;
        this.log("push", `${t} ${n} (${r}, ${o})`, i);
      }
      this.isConnected() ? this.encode(e, e => this.conn.send(e)) : this.sendBuffer.push(() => this.encode(e, e => this.conn.send(e)));
    }
    makeRef() {
      let e = this.ref + 1;
      return e === this.ref ? this.ref = 0 : this.ref = e, this.ref.toString();
    }
    sendHeartbeat() {
      if (this.isConnected()) {
        if (this.pendingHeartbeatRef) return this.pendingHeartbeatRef = null, this.hasLogger() && this.log("transport", "heartbeat timeout. Attempting to re-establish connection"), void this.abnormalClose("heartbeat timeout");
        this.pendingHeartbeatRef = this.makeRef(), this.push({
          topic: "phoenix",
          event: "heartbeat",
          payload: {},
          ref: this.pendingHeartbeatRef
        });
      }
    }
    abnormalClose(e) {
      this.closeWasClean = !1, this.conn.close(c, e);
    }
    flushSendBuffer() {
      this.isConnected() && this.sendBuffer.length > 0 && (this.sendBuffer.forEach(e => e()), this.sendBuffer = []);
    }
    onConnMessage(e) {
      this.decode(e.data, e => {
        let {
          topic: t,
          event: n,
          payload: i,
          ref: o,
          join_ref: r
        } = e;
        o && o === this.pendingHeartbeatRef && (this.pendingHeartbeatRef = null), this.hasLogger() && this.log("receive", `${i.status || ""} ${t} ${n} ${o && "(" + o + ")" || ""}`, i);
        for (let e = 0; e < this.channels.length; e++) {
          const s = this.channels[e];
          s.isMember(t, n, i, r) && s.trigger(n, i, o, r);
        }
        for (let t = 0; t < this.stateChangeCallbacks.message.length; t++) {
          let [, n] = this.stateChangeCallbacks.message[t];
          n(e);
        }
      });
    }
    leaveOpenTopic(e) {
      let t = this.channels.find(t => t.topic === e && (t.isJoined() || t.isJoining()));
      t && (this.hasLogger() && this.log("transport", `leaving duplicate topic "${e}"`), t.leave());
    }
  }
  class y {
    constructor(e) {
      this.endPoint = null, this.token = null, this.skipHeartbeat = !0, this.onopen = function () { }, this.onerror = function () { }, this.onmessage = function () { }, this.onclose = function () { }, this.pollEndpoint = this.normalizeEndpoint(e), this.readyState = a.connecting, this.poll();
    }
    normalizeEndpoint(e) {
      return e.replace("ws://", "http://").replace("wss://", "https://").replace(new RegExp("(.*)/" + h.websocket), "$1/" + h.longpoll);
    }
    endpointURL() {
      return w.appendParams(this.pollEndpoint, {
        token: this.token
      });
    }
    closeAndRetry() {
      this.close(), this.readyState = a.connecting;
    }
    ontimeout() {
      this.onerror("timeout"), this.closeAndRetry();
    }
    poll() {
      this.readyState !== a.open && this.readyState !== a.connecting || w.request("GET", this.endpointURL(), "application/json", null, this.timeout, this.ontimeout.bind(this), e => {
        if (e) {
          var {
            status: t,
            token: n,
            messages: i
          } = e;
          this.token = n;
        } else var t = 0;
        switch (t) {
          case 200:
            i.forEach(e => this.onmessage({
              data: e
            })), this.poll();
            break;
          case 204:
            this.poll();
            break;
          case 410:
            this.readyState = a.open, this.onopen(), this.poll();
            break;
          case 403:
            this.onerror(), this.close();
            break;
          case 0:
          case 500:
            this.onerror(), this.closeAndRetry();
            break;
          default:
            throw new Error(`unhandled poll status ${t}`);
        }
      });
    }
    send(e) {
      w.request("POST", this.endpointURL(), "application/json", e, this.timeout, this.onerror.bind(this, "timeout"), e => {
        e && 200 === e.status || (this.onerror(e && e.status), this.closeAndRetry());
      });
    }
    close(e, t) {
      this.readyState = a.closed, this.onclose();
    }
  }
  class w {
    static request(e, t, n, i, o, s, a) {
      if (r.XDomainRequest) {
        let n = new XDomainRequest;
        this.xdomainRequest(n, e, t, i, o, s, a);
      } else {
        let l = new r.XMLHttpRequest;
        this.xhrRequest(l, e, t, n, i, o, s, a);
      }
    }
    static xdomainRequest(e, t, n, i, o, r, s) {
      e.timeout = o, e.open(t, n), e.onload = (() => {
        let t = this.parseJSON(e.responseText);
        s && s(t);
      }), r && (e.ontimeout = r), e.onprogress = (() => { }), e.send(i);
    }
    static xhrRequest(e, t, n, i, o, r, s, a) {
      e.open(t, n, !0), e.timeout = r, e.setRequestHeader("Content-Type", i), e.onerror = (() => {
        a && a(null);
      }), e.onreadystatechange = (() => {
        if (e.readyState === this.states.complete && a) {
          let t = this.parseJSON(e.responseText);
          a(t);
        }
      }), s && (e.ontimeout = s), e.send(o);
    }
    static parseJSON(e) {
      if (!e || "" === e) return null;
      try {
        return JSON.parse(e);
      } catch (t) {
        return console && console.log("failed to parse JSON response", e), null;
      }
    }
    static serialize(e, t) {
      let n = [];
      for (var i in e) {
        if (!e.hasOwnProperty(i)) continue;
        let o = t ? `${t}[${i}]` : i,
          r = e[i];
        "object" == typeof r ? n.push(this.serialize(r, o)) : n.push(encodeURIComponent(o) + "=" + encodeURIComponent(r));
      }
      return n.join("&");
    }
    static appendParams(e, t) {
      if (0 === Object.keys(t).length) return e;
      return `${e}${e.match(/\?/) ? "&" : "?"}${this.serialize(t)}`;
    }
  }
  w.states = {
    complete: 4
  };
  class C {
    constructor(e, t = {}) {
      let n = t.events || {
        state: "presence_state",
        diff: "presence_diff"
      };
      this.state = {}, this.pendingDiffs = [], this.channel = e, this.joinRef = null, this.caller = {
        onJoin: function () { },
        onLeave: function () { },
        onSync: function () { }
      }, this.channel.on(n.state, e => {
        let {
          onJoin: t,
          onLeave: n,
          onSync: i
        } = this.caller;
        this.joinRef = this.channel.joinRef(), this.state = C.syncState(this.state, e, t, n), this.pendingDiffs.forEach(e => {
          this.state = C.syncDiff(this.state, e, t, n);
        }), this.pendingDiffs = [], i();
      }), this.channel.on(n.diff, e => {
        let {
          onJoin: t,
          onLeave: n,
          onSync: i
        } = this.caller;
        this.inPendingSyncState() ? this.pendingDiffs.push(e) : (this.state = C.syncDiff(this.state, e, t, n), i());
      });
    }
    onJoin(e) {
      this.caller.onJoin = e;
    }
    onLeave(e) {
      this.caller.onLeave = e;
    }
    onSync(e) {
      this.caller.onSync = e;
    }
    list(e) {
      return C.list(this.state, e);
    }
    inPendingSyncState() {
      return !this.joinRef || this.joinRef !== this.channel.joinRef();
    }
    static syncState(e, t, n, i) {
      let o = this.clone(e),
        r = {},
        s = {};
      return this.map(o, (e, n) => {
        t[e] || (s[e] = n);
      }), this.map(t, (e, t) => {
        let n = o[e];
        if (n) {
          let i = t.metas.map(e => e.phx_ref),
            o = n.metas.map(e => e.phx_ref),
            a = t.metas.filter(e => o.indexOf(e.phx_ref) < 0),
            l = n.metas.filter(e => i.indexOf(e.phx_ref) < 0);
          a.length > 0 && (r[e] = t, r[e].metas = a), l.length > 0 && (s[e] = this.clone(n), s[e].metas = l);
        } else r[e] = t;
      }), this.syncDiff(o, {
        joins: r,
        leaves: s
      }, n, i);
    }
    static syncDiff(e, {
      joins: t,
      leaves: n
    }, i, o) {
      let r = this.clone(e);
      return i || (i = function () { }), o || (o = function () { }), this.map(t, (e, t) => {
        let n = r[e];
        if (r[e] = t, n) {
          let t = r[e].metas.map(e => e.phx_ref),
            i = n.metas.filter(e => t.indexOf(e.phx_ref) < 0);
          r[e].metas.unshift(...i);
        }
        i(e, n, t);
      }), this.map(n, (e, t) => {
        let n = r[e];
        if (!n) return;
        let i = t.metas.map(e => e.phx_ref);
        n.metas = n.metas.filter(e => i.indexOf(e.phx_ref) < 0), o(e, n, t), 0 === n.metas.length && delete r[e];
      }), r;
    }
    static list(e, t) {
      return t || (t = function (e, t) {
        return t;
      }), this.map(e, (e, n) => t(e, n));
    }
    static map(e, t) {
      return Object.getOwnPropertyNames(e).map(n => t(n, e[n]));
    }
    static clone(e) {
      return JSON.parse(JSON.stringify(e));
    }
  }
  class x {
    constructor(e, t) {
      this.callback = e, this.timerCalc = t, this.timer = null, this.tries = 0;
    }
    reset() {
      this.tries = 0, clearTimeout(this.timer);
    }
    scheduleTimeout() {
      clearTimeout(this.timer), this.timer = setTimeout(() => {
        this.tries = this.tries + 1, this.callback();
      }, this.timerCalc(this.tries + 1));
    }
  }
}, function (e, t) {
  ! function (e) {
    "use strict";
    e.fn.idle = function (t) {
      var n, i = !1,
        o = !0,
        r = e.extend({}, {
          idle: 6e4,
          onIdle: function () { },
          onActive: function () { }
        }, t),
        s = null;
      return n = function () {
        i && (i = !1, r.onActive.call()), s && clearTimeout(s), s = setTimeout(function () {
          i = !0, r.onIdle.call();
        }, r.idle);
      }, this.each(function () {
        n(), window.onmousemove = n, window.onmousedown = n, window.ontouchstart = n, window.onkeydown = n, window.onfocus = n, window.addEventListener("scroll", n, !0), e(document).on("visibilitychange webkitvisibilitychange mozvisibilitychange msvisibilitychange", function () {
          document.hidden || document.webkitHidden || document.mozHidden || document.msHidden ? o = !1 : o || (o = !0, n());
        });
      });
    };
  }(jQuery);
}, function (e, t) {
  var n = function (e) {
    $("#modal-login .modal-content").empty().load($(e).attr("href"), f);
  },
    i = function (e) {
      $("#modal-registration .modal-content").empty().load($(e).attr("href"), f);
    },
    o = function (e) {
      $("#modal-reset .modal-content").empty().load($(e).attr("href"), f);
    },
    r = function (e) {
      e.preventDefault(), n(this), $("#modal-login").modal("show");
    },
    s = function (e) {
      e.preventDefault(), n(this), $("#modal-registration").one("hidden.bs.modal", function () {
        $("#modal-login").modal("show");
      }).modal("hide");
    },
    a = function (e) {
      e.preventDefault(), n(this), $("#modal-reset").one("hidden.bs.modal", function () {
        $("#modal-login").modal("show");
      }).modal("hide");
    },
    l = function (e) {
      e.preventDefault(), i(this), $("#modal-registration").modal("show");
    },
    c = function (e) {
      e.preventDefault(), i(this), $("#modal-login").one("hidden.bs.modal", function () {
        $("#modal-registration").modal("show");
      }).modal("hide");
    },
    u = function (e) {
      e.preventDefault(), i(this), $("#modal-reset").one("hidden.bs.modal", function () {
        $("#modal-registration").modal("show");
      }).modal("hide");
    },
    d = function (e) {
      e.preventDefault(), o(this), $("#modal-reset").modal("show");
    },
    p = function (e) {
      e.preventDefault(), o(this), $("#modal-login").one("hidden.bs.modal", function () {
        $("#modal-reset").modal("show");
      }).modal("hide");
    },
    h = function (e) {
      e.preventDefault(), o(this), $("#modal-registration").one("hidden.bs.modal", function () {
        $("#modal-reset").modal("show");
      }).modal("hide");
    };
  $("#modal-login, #modal-registration, #modal-reset").on("shown.bs.modal", function () {
    $(this).find("input:first").focus();
  });
  var f = function () {
    var e = $("#modal-login form, #modal-registration form, #modal-reset form, #order-registration form");
    e.length > 0 && e.validate({
      submit: {
        settings: {
          errorListClass: "form-tooltip-error"
        },
        callback: {
          onSubmit: function (e, t) {
            1 == t.subscribed ? t.subscribed = !0 : delete t.subscribed, e.find("button[type=submit]").prop("disabled", !0);
            var n = $(e).attr("action");
            return $.post(n, t, function (t) {
              "Ok" == t ? location.reload() : 0 == t.indexOf("http") ? location.href = t : (e.find("button[type=submit]").prop("disabled", !1), $(e).parent().parent().html(t), f());
            }.bind(e)), !1;
          },
          onValidate: function (e) {
            $(".form-tooltip-error").remove();
          }
        }
      }
    }), $(".show-modal-registration").unbind("click"), $(".show-modal-registration").click(l), $(".show-modal-registration-from-login").unbind("click"), $(".show-modal-registration-from-login").click(c), $(".show-modal-registration-from-reset").unbind("click"), $(".show-modal-registration-from-reset").click(u), $(".show-modal-login").unbind("click"), $(".show-modal-login").click(r), $(".show-modal-login-from-registration").unbind("click"), $(".show-modal-login-from-registration").click(s), $(".show-modal-login-from-reset").unbind("click"), $(".show-modal-login-from-reset").click(a), $(".show-modal-reset").unbind("click"), $(".show-modal-reset").click(d), $(".show-modal-reset-from-login").unbind("click"), $(".show-modal-reset-from-login").click(p), $(".show-modal-reset-from-registration").unbind("click"), $(".show-modal-reset-from-registration").click(h);
    var t = $(".show-modal-login.auto");
    $(".show-modal-login.auto").removeClass("auto"), t.length > 0 && setTimeout(function () {
      t.click();
    }, 1e3), $(".form-control").on("focus", function () {
      $(this).parent(".input-group").addClass("input-group-focus");
    }).on("blur", function () {
      $(this).parent(".input-group").removeClass("input-group-focus");
    }).on("keydown", function () {
      $("#form_error").hide();
    }), $("#accept").change(function () {
      $("#btn-register").prop("disabled", !$(this).prop("checked"));
    });
  };
  $(document).ready(function () {
    f();
  });
}, function (module, __webpack_exports__, __webpack_require__) {
  "use strict";
  __webpack_require__.r(__webpack_exports__);
  var _vendor_jquery_mask_min__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(19),
    _vendor_jquery_mask_min__WEBPACK_IMPORTED_MODULE_0___default = __webpack_require__.n(_vendor_jquery_mask_min__WEBPACK_IMPORTED_MODULE_0__),
    _vendor_wNumb__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2),
    _vendor_wNumb__WEBPACK_IMPORTED_MODULE_1___default = __webpack_require__.n(_vendor_wNumb__WEBPACK_IMPORTED_MODULE_1__),
    _vendor_nouislider_min__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3),
    _vendor_nouislider_min__WEBPACK_IMPORTED_MODULE_2___default = __webpack_require__.n(_vendor_nouislider_min__WEBPACK_IMPORTED_MODULE_2__),
    _payment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1),
    currencyCode = $("#order-description #selected-currency-code").text(),
    currencyRate = 1,
    currencySymbol = "SAR",
    discountPercent;

  function setCurrency(e) {
    currencyCode = e, $("#order-description #selected-currency-code").text(currencyCode), lookupRateAndSymbol(), $("#store-credit-currency").text(currencySymbol), $("#store-credit-amount").text($("#store-credit-amount").attr("data-amount-" + currencyCode)), updateOrder();
    var t = new Date;
    t.setTime(t.getTime() + 615168e6);
    var n = "expires=" + t.toUTCString();
    document.cookie = "currency=" + currencyCode + ";" + n + "; path=/";
  }

  function lookupRateAndSymbol() {
    $("#order-description .dropdown-item").each(function () {
      $(this).text() == currencyCode && (currencyRate = parseFloat($(this).attr("data-currency-rate")), currencySymbol = $(this).attr("data-currency-symbol"));
    }), $(".hidden-currency").val(currencyCode);
  }

  function applyCurrency() {
    amount *= currencyRate;
  }

  function updateDiscount() {
    discountPercent = parseInt($(".order-discount").attr("data-discount-percent"));
  }

  function applyDiscount() {
    amountWithDiscount = amount, discountPercent > 0 && (amountWithDiscount = amount * (100 - discountPercent) / 100);
  }

  function updateOrder() {
    $("#tab-rating").length ? updateRating() : $("#tab-coaching").length ? updateCoaching() : $("#tab-wins").length ? updateWins() : $("#tab-placement").length && updatePlacement();
  }
  // $(".section-purchase").on("click", "#order-description .dropdown-item", function (e) {
  //   $("#order-description .dropdown .dropdown-toggle").trigger("click"), setCurrency($(this).text()), e.preventDefault();
  // }), lookupRateAndSymbol(), $(".order-discount-container").on("click", ".order-discount-add", function (e) {
  //   e.preventDefault(), $(this).prop("disabled", !0);
  //   var t = $(this).parents("form");
  //   $.ajax({
  //     method: "POST",
  //     url: t.attr("action"),
  //     data: t.serialize()
  //   }).done(function (e) {
  //     $(".order-discount-container").html(e), updateDiscount(), updateOrder(), $(".order-discount").find("i").tooltip();
  //   });
  // }), $(".order-discount-container").on("click", ".order-discount-remove", function (e) {
  //   e.preventDefault(), $.ajax({
  //     method: "POST",
  //     url: $(this).attr("href")
  //   }).done(function (e) {
  //     $(".order-discount-container").html(e), updateDiscount(), updateOrder(), $(".order-discount").find("i").tooltip();
  //   });
  // }), $(".order-discount-container").on("input", ".discount-code", function () {
  //   $(this).val($(this).val().toUpperCase());
  // });
  var isDuo = !1,
    isStream = !1,
    priorityCompletion = !1,
    playOffline = !0,
    supportPercent, duoPercent, streamPercent, priorityCompletionPercent;

  function duoSwitch() {
    isDuo = !isDuo, $("input.duo-switch").prop("checked", isDuo);
  }

  function priorityCompletionSwitch() {
    priorityCompletion = !priorityCompletion, $("input.priority-completion-switch").prop("checked", priorityCompletion);
  }

  function streamSwitch() {
    isStream = !isStream, $("input.stream-switch").prop("checked", isStream);
  }

  function playOfflineSwitch() {
    playOffline = !playOffline, $("input.play-offline-switch").prop("checked", playOffline);
  }
  setTimeout(function () {
    isDuo = $("input.duo-switch").is(":checked"), isStream = $("input.stream-switch").is(":checked"), priorityCompletion = $("input.priority-completion-switch").is(":checked"), playOffline = $("input.play-offline-switch").is(":checked"), updateOrder();
  }, 1);
  var role = "Damage",
    amount, amountWithDiscount, plusMinusTimeout, plusMinusInterval, startRating = 3e3,
    desiredRating = 4e3,
    startTier = 3,
    startDivision = 0,
    desiredTier = 4,
    desiredDivision = 0,
    maxTier = 9,
    minDesiredTier = 1,
    ratingPrices;

  function updateRatingIcon(e, t) {
    e.attr("src", "/assets/img/overwatch/ranks/rank-" + t + ".png?v4");
  }
  var tiers = ["Unranked", "Bronze", "Silver", "Gold", "Platinum", "Diamond", "Master", "Grandmaster", "Champion", "Top 500"],
    divisions = ["5", "4", "3", "2", "1"];

  function rankToString(e, t) {
    return e > 0 && e < 9 ? tiers[e] + " " + divisions[t] : tiers[e];
  }
  var completionHoursForTier = [[0.00, 0.00, 0.00, 0.00, 24], [24, 24, 24, 24, 24], [48, 48, 48, 48, 72], [72, 72, 72, 72, 72], [72, 96, 96, 96, 96], [96, 120, 120, 120, 144], [168, 192, 216, 240, 0], [0, 0, 0, 0, 0], [0, 0, 0, 0, 0], [250.00, 250.00, 250.00, 250.00, 250.00],],
    completionHours = 0;

  function calculateRatingAmount() {
    for (var e = startTier, t = startDivision, n = 0; e !== desiredTier || t !== desiredDivision;) n += ratingPrices[e][t], completionHours = completionHoursForTier[e][t], 5 === (t += 1) && (t = 0, e += 1);
    return n;
  }

  function updateRating() {
    var e = "";
    isDuo && (e += "Duo "), e += "<b>" + rankToString(startTier, startDivision) + "</b>&nbsp;", e += "to&nbsp;<b>" + rankToString(desiredTier, desiredDivision) + "</b>", completionHours = 0, amount = calculateRatingAmount();
    var t = $("#form-rating");
    t.find(".hidden-role").val(role);
    var n = 0;
    isDuo ? (t.find(".hidden-is-duo").val("true"), n += duoPercent) : (t.find(".hidden-is-duo").val("false"), "Support" === role && (n += supportPercent)), isStream ? (t.find(".hidden-stream").val("true"), n += streamPercent) : t.find(".hidden-stream").val("false"), priorityCompletion ? (t.find(".hidden-priority-completion").val("true"), n += priorityCompletionPercent) : t.find(".hidden-priority-completion").val("false"), playOffline ? t.find(".hidden-play-offline").val("true") : t.find(".hidden-play-offline").val("false"), amount *= (100 + n) / 100, applyCurrency(), applyDiscount(), t.find(".hidden-current").val(1e3 * startTier + 100 * startDivision), t.find(".hidden-desired").val(1e3 * desiredTier + 100 * desiredDivision), t.find(".hidden-amount").val(amountWithDiscount.toFixed(2));
    var i = "";
    amount != amountWithDiscount && (i += '<span style="text-decoration:line-through">&nbsp;' + currencySymbol + amount.toFixed(2) + "&nbsp;</span>&nbsp;"), i += "<b>" + currencySymbol + amountWithDiscount.toFixed(2) + "</b>&nbsp;", $("#order-description-amount").html(i);
    isDuo && (completionHours *= 2), e += '<br><span class="small text-muted">Approximate completion time: <b>' + (completionHours <= 24 ? completionHours + " hours" : Math.ceil(completionHours / 24) + " days") + "</b></span>", $("#order-summary").html(e);
  }

  function startTierChanged() {

    $("#start-tier").val(startTier), $("#start-tier").selectpicker("refresh"), startTier <= 1 ? $("#start-tier-minus").attr("disabled", !0) : $("#start-tier-minus").attr("disabled", !1), startTier >= maxTier ? $("#start-tier-plus").attr("disabled", !0) : $("#start-tier-plus").attr("disabled", !1), desiredTier < (minDesiredTier = 4 === startDivision ? startTier + 1 : startTier) && (desiredTier = minDesiredTier), updateRatingIcon($("#start-rating-icon"), startTier, startDivision), desiredTierChanged();
  }

  function desiredTierChanged() {
    $("#desired-tier").val(desiredTier);

    // Disable or enable the minus button based on desiredTier value
    desiredTier <= minDesiredTier ? $("#desired-tier-minus").attr("disabled", true) : $("#desired-tier-minus").attr("disabled", false);

    // Disable or enable the plus button based on desiredTier value
    desiredTier >= maxTier ? $("#desired-tier-plus").attr("disabled", true) : $("#desired-tier-plus").attr("disabled", false);

    // Disable options less than minDesiredTier
    $("#desired-tier option").each(function () {
      parseInt($(this).val()) < minDesiredTier ? $(this).attr("disabled", true) : $(this).attr("disabled", false);
    });

    $("#desired-tier").selectpicker("refresh");

    // Disable desired divisions based on desiredTier value
    if (desiredTier >= 9) {
      desiredDivision = 0;
      $("#desired-division-v").addClass("disabled").addClass("active");
      $("#desired-division-iv").addClass("disabled").removeClass("active");
      $("#desired-division-iii").addClass("disabled").removeClass("active");
      $("#desired-division-ii").addClass("disabled").removeClass("active");
      $("#desired-division-i").addClass("disabled").removeClass("active");
    } else if (desiredTier === 8) {
      $("#desired-division-v").removeClass("disabled");
      $("#desired-division-iv").addClass("disabled").removeClass("active");
      $("#desired-division-iii").addClass("disabled").removeClass("active");
      $("#desired-division-ii").addClass("disabled").removeClass("active");
      $("#desired-division-i").addClass("disabled").removeClass("active");
    } else if (desiredTier === startTier) {
      if (desiredDivision <= startDivision) desiredDivision = startDivision + 1;

      $("#desired-division-v").addClass("disabled").removeClass("active");
      startDivision <= 0 ? $("#desired-division-iv").removeClass("disabled") : $("#desired-division-iv").addClass("disabled");
      startDivision <= 1 ? $("#desired-division-iii").removeClass("disabled") : $("#desired-division-iii").addClass("disabled");
      startDivision <= 2 ? $("#desired-division-ii").removeClass("disabled") : $("#desired-division-ii").addClass("disabled");
      startDivision <= 3 ? $("#desired-division-i").removeClass("disabled") : $("#desired-division-i").addClass("disabled");

      // Activate the desired division
      desiredDivision === 1 ? $("#desired-division-iv").addClass("active") : $("#desired-division-iv").removeClass("active");
      desiredDivision === 2 ? $("#desired-division-iii").addClass("active") : $("#desired-division-iii").removeClass("active");
      desiredDivision === 3 ? $("#desired-division-ii").addClass("active") : $("#desired-division-ii").removeClass("active");
      desiredDivision === 4 ? $("#desired-division-i").addClass("active") : $("#desired-division-i").removeClass("active");
    } else {
      $("#desired-division-i").removeClass("disabled");
      $("#desired-division-ii").removeClass("disabled");
      $("#desired-division-iii").removeClass("disabled");
      $("#desired-division-iv").removeClass("disabled");
      $("#desired-division-v").removeClass("disabled");

      // Activate the desired division
      desiredDivision === 0 ? $("#desired-division-v").addClass("active") : $("#desired-division-v").removeClass("active");
      desiredDivision === 1 ? $("#desired-division-iv").addClass("active") : $("#desired-division-iv").removeClass("active");
      desiredDivision === 2 ? $("#desired-division-iii").addClass("active") : $("#desired-division-iii").removeClass("active");
      desiredDivision === 3 ? $("#desired-division-ii").addClass("active") : $("#desired-division-ii").removeClass("active");
      desiredDivision === 4 ? $("#desired-division-i").addClass("active") : $("#desired-division-i").removeClass("active");
    }

    updateRatingIcon($("#desired-rating-icon"), desiredTier, desiredDivision);
    updateRating();
  }

  $("#tab-rating").length && (ratingPrices = eval($("#tab-rating").attr("data-rating-prices")), supportPercent = parseInt($("#tab-rating").attr("data-support-percent")), duoPercent = parseInt($("#tab-rating").attr("data-duo-percent")), streamPercent = parseInt($("#tab-rating").attr("data-stream-percent")), priorityCompletionPercent = parseInt($("#tab-rating").attr("data-priority-completion-percent")), updateDiscount(), $("#platform .nav-link").click(function (e) {
    e.preventDefault(), $("#form-rating").find(".hidden-platform").val($(this).attr("data-platform"));
  }), $("#role-tank").click(function (e) {
    role = "Tank", updateRating();
  }), $("#role-damage").click(function (e) {
    role = "Damage", updateRating();
  }), $("#role-support").click(function (e) {
    role = "Support", updateRating();
  }), $("#role-open-queue").click(function (e) {
    role = "Open Queue", updateRating();
  }), $("#start-tier").on("change", function () {
    startTier = parseInt($(this).val()), startTierChanged();
  }), $("#desired-tier").on("change", function () {
    desiredTier = parseInt($(this).val()), desiredTierChanged();
  }), $("#start-tier-minus").click(function (e) {
    e.preventDefault(), startTier > 1 && (startTier -= 1, startTierChanged());
  }), $("#start-tier-plus").click(function (e) {
    e.preventDefault(), startTier < maxTier - 1 && (startTier += 1, startTierChanged());
  }), $("#desired-tier-minus").click(function (e) {
    e.preventDefault(), desiredTier > minDesiredTier && (desiredTier -= 1, desiredTierChanged());
  }), $("#desired-tier-plus").click(function (e) {
    e.preventDefault(), desiredTier < maxTier && (desiredTier += 1, desiredTierChanged());
  }), $("#start-division-v").click(function () {
    startDivision = 0, startTierChanged();
  }), $("#start-division-iv").click(function () {
    startDivision = 1, startTierChanged();
  }), $("#start-division-iii").click(function () {
    startDivision = 2, startTierChanged();
  }), $("#start-division-ii").click(function () {
    startDivision = 3, startTierChanged();
  }), $("#start-division-i").click(function () {
    startDivision = 4, startTierChanged();
  }), $("#desired-division-v").click(function () {
    desiredDivision = 0, desiredTierChanged();
  }), $("#desired-division-iv").click(function () {
    desiredDivision = 1, desiredTierChanged();
  }), $("#desired-division-iii").click(function () {
    desiredDivision = 2, desiredTierChanged();
  }), $("#desired-division-ii").click(function () {
    desiredDivision = 3, desiredTierChanged();
  }), $("#desired-division-i").click(function () {
    desiredDivision = 4, desiredTierChanged();
  }), $("#duo-group").click(function (e) {
    e.preventDefault(), duoSwitch(), startTierChanged();
  }), $("#priority-completion-group").click(function (e) {
    e.preventDefault(), priorityCompletionSwitch(), updateRating();
  }), $("#stream-group").click(function (e) {
    e.preventDefault(), streamSwitch(), updateRating();
  }), $("#play-offline-group").click(function (e) {
    e.preventDefault(), playOfflineSwitch(), updateRating();
  }), startTierChanged());
  var coachingHours = 1,
    coachingPriceDefault = 40,
    coachingPrice = coachingPriceDefault;

  function updateCoachingSlider() {
    var e = document.getElementById("coaching-hours-slider");
    void 0 !== e.noUiSlider && null != e.noUiSlider && e.noUiSlider.destroy(), _vendor_nouislider_min__WEBPACK_IMPORTED_MODULE_2___default.a.create(e, {
      start: coachingHours,
      connect: [!0, !1],
      range: {
        min: 1,
        max: 5
      },
      step: 1,
      tooltips: !0,
      format: _vendor_wNumb__WEBPACK_IMPORTED_MODULE_1___default()({
        decimals: 0
      }),
      pips: {
        mode: "values",
        values: [1, 2, 3, 4, 5],
        density: 1e3
      }
    }), e.noUiSlider.on("update", function (e, t) {
      coachingHours = parseInt(e[t]), $("#coaching-hours").val(coachingHours), updateCoaching();
    });
  }

  function updateCoaching() {
    $("#tab-coaching");
    coachingPrice = parseInt($(".card-profile.selected").attr("data-price")), isNaN(coachingPrice) && (coachingPrice = coachingPriceDefault), amount = parseInt(coachingHours) * parseFloat(coachingPrice);
    var e = $("#form-coaching");
    e.find(".hidden-role").val(role);
    var t = 0;
    priorityCompletion ? (e.find(".hidden-priority-completion").val("true"), t += priorityCompletionPercent) : e.find(".hidden-priority-completion").val("false"), amount *= (100 + t) / 100, applyCurrency(), applyDiscount(), e.find(".hidden-games").val(coachingHours), e.find(".hidden-amount").val(amountWithDiscount.toFixed(2));
    var n = $(".card-profile.selected").attr("data-id");
    void 0 !== n && e.find(".hidden-booster-id").val(n);
    var i = $(".card-profile.selected").attr("data-name"),
      o = "<b>" + coachingHours + "</b> hour" + (coachingHours > 1 ? "s" : "") + " of coaching";
    void 0 !== i && (o += " with <b>" + i + "</b>"), $("#order-summary").html(o);
    var r = "";
    amount != amountWithDiscount && (r += '<span style="text-decoration:line-through">&nbsp;' + currencySymbol + amount.toFixed(2) + "&nbsp;</span>&nbsp;"), r += "<b>" + currencySymbol + amountWithDiscount.toFixed(2) + "</b>&nbsp;", $("#order-description-amount").html(r);
  }

  function coachingHoursDecrease() {
    coachingHours > 1 && (coachingHours--, $("#coaching-hours").val(coachingHours), updateCoachingSlider()), updateCoaching();
  }

  function coachingHoursIncrease() {
    coachingHours < 10 && (coachingHours++, $("#coaching-hours").val(coachingHours), updateCoachingSlider()), updateCoaching();
  }
  $("#tab-coaching").length && (priorityCompletionPercent = parseInt($("#tab-coaching").attr("data-priority-completion-percent")), updateDiscount(), $("#platform .nav-link").click(function (e) {
    e.preventDefault(), $("#form-coaching").find(".hidden-platform").val($(this).attr("data-platform"));
  }), $("#coaching-hours").on("input", function () {
    var e = parseInt($("#coaching-hours").val());
    isNaN(e) || ((coachingHours = parseInt($("#coaching-hours").val())) > 5 ? coachingHours = 5 : coachingHours < 1 && (coachingHours = 1), $("#coaching-hours").val(coachingHours), updateCoachingSlider()), updateCoaching();
  }).on("change", function () {
    updateCoaching();
  }).on("blur", function () {
    isNaN(parseInt($("#coaching-hours").val())) && $("#coaching-hours").val(coachingHours);
  }), $("#coaching-hours-minus").mousedown(function () {
    coachingHoursDecrease(), plusMinusTimeout = setTimeout(function () {
      plusMinusInterval = setInterval(function () {
        coachingHoursDecrease();
      }, 125);
    }, 300);
  }).mouseup(function () {
    clearTimeout(plusMinusTimeout), clearInterval(plusMinusInterval);
  }), $("#coaching-hours-plus").mousedown(function () {
    coachingHoursIncrease(), plusMinusTimeout = setTimeout(function () {
      plusMinusInterval = setInterval(function () {
        coachingHoursIncrease();
      }, 125);
    }, 300);
  }).mouseup(function () {
    clearTimeout(plusMinusTimeout), clearInterval(plusMinusInterval);
  }), $(".card-profile").click(function (e) {
    e.preventDefault(), $(".card-profile.selected").removeClass("selected"), $(this).addClass("selected"), updateCoaching();
  }), updateCoachingSlider(), $("#role-tank").click(function (e) {
    role = "Tank", updateCoaching();
  }), $("#role-damage").click(function (e) {
    role = "Damage", updateCoaching();
  }), $("#role-support").click(function (e) {
    role = "Support", updateCoaching();
  }), $("#role-open-queue").click(function (e) {
    role = "Open Queue", updateCoaching();
  }), $("#priority-completion-group").click(function (e) {
    e.preventDefault(), priorityCompletionSwitch(), updateCoaching();
  }));
  var tier = 0,
    division = 0,
    wins = 5,
    maxWins = 50,
    winsSliderPips = [],
    winsPrices;

  function updateWinsSlider() {
    var e = document.getElementById("wins-slider");
    void 0 !== e.noUiSlider && null != e.noUiSlider && e.noUiSlider.destroy(), _vendor_nouislider_min__WEBPACK_IMPORTED_MODULE_2___default.a.create(e, {
      start: wins,
      connect: [!0, !1],
      range: {
        min: 5,
        max: maxWins
      },
      step: 1,
      tooltips: !0,
      format: _vendor_wNumb__WEBPACK_IMPORTED_MODULE_1___default()({
        decimals: 0
      }),
      pips: {
        mode: "values",
        values: winsSliderPips,
        density: 1e3
      }
    }), e.noUiSlider.on("update", function (e, t) {
      wins = parseInt(e[t]), $("#wins").val(wins), updateWins();
    });
  }

  function updateWins() {
    amount = parseInt(wins) * parseFloat(winsPrices[parseInt(tier)][parseInt(division)]);
    var e = $("#form-wins"),
      t = 0;
    e.find(".hidden-role").val(role), isDuo ? (e.find(".hidden-is-duo").val("true"), t += duoPercent) : (e.find(".hidden-is-duo").val("false"), "Support" === role && (t += supportPercent)), isStream ? (e.find(".hidden-stream").val("true"), t += streamPercent) : e.find(".hidden-stream").val("false"), priorityCompletion ? (e.find(".hidden-priority-completion").val("true"), t += priorityCompletionPercent) : e.find(".hidden-priority-completion").val("false"), playOffline ? e.find(".hidden-play-offline").val("true") : e.find(".hidden-play-offline").val("false"), amount *= (100 + t) / 100, applyCurrency(), applyDiscount(), tier >= 9 ? (division = 0, $("#division-v").addClass("disabled").addClass("active"), $("#division-iv").addClass("disabled").removeClass("active"), $("#division-iii").addClass("disabled").removeClass("active"), $("#division-ii").addClass("disabled").removeClass("active"), $("#division-i").addClass("disabled").removeClass("active")) : ($("#division-v").removeClass("disabled"), $("#division-iv").removeClass("disabled"), $("#division-iii").removeClass("disabled"), $("#division-ii").removeClass("disabled"), $("#division-i").removeClass("disabled")), e.find(".hidden-current").val(1e3 * parseInt(tier) + 100 * division), e.find(".hidden-games").val(wins), e.find(".hidden-amount").val(amountWithDiscount.toFixed(2));
    var n = .5 * wins;
    isDuo && (n *= 3);
    var i = "";
    if ((n = Math.ceil(n)) <= 24) {
      var o = "";
      n > 1 && (o = "s"), i = n + " hour" + o;
    } else i = Math.ceil(n / 24) + " days";
    var r = "<b>" + wins + "</b> ";
    isDuo ? r += "Duo " : tier > 0 && (r += role + " "), 0 === tier && (r += "Quick Play "), r += " Win" + (wins > 1 ? "s" : ""), r += '<br><span class="small text-muted">Approximate completion time: <b>' + i + "</b></span>", $("#order-summary").html(r);
    var s = "";
    amount != amountWithDiscount && (s += '<span style="text-decoration:line-through">&nbsp;' + currencySymbol + amount.toFixed(2) + "&nbsp;</span>&nbsp;"), s += "<b>" + currencySymbol + amountWithDiscount.toFixed(2) + "</b>&nbsp;", $("#order-description-amount").html(s), updateRatingIcon($("#rating-icon"), tier, division);
  }

  function winsDecrease() {
    wins > 1 && (wins--, $("#wins").val(wins), updateWinsSlider()), updateWins();
  }

  function winsIncrease() {
    wins < maxWins && (wins++, $("#wins").val(wins), updateWinsSlider()), updateWins();
  }
  $("#tab-wins").length && (winsPrices = eval($("#tab-wins").attr("data-prices")), supportPercent = parseInt($("#tab-wins").attr("data-support-percent")), duoPercent = parseInt($("#tab-wins").attr("data-duo-percent")), streamPercent = parseInt($("#tab-wins").attr("data-stream-percent")), priorityCompletionPercent = parseInt($("#tab-wins").attr("data-priority-completion-percent")), updateDiscount(), $("#platform .nav-link").click(function (e) {
    e.preventDefault(), $("#form-wins").find(".hidden-platform").val($(this).attr("data-platform"));
  }), $("#tier").length ? (tier = 3, division = 0, $("#tier").val(tier), $("#tier").selectpicker("refresh"), $("#tier").on("change", function () {
    tier = parseInt($(this).val()), updateOrder();
  }), $("#tier-minus").click(function (e) {
    e.preventDefault(), tier > 1 && (tier -= 1, $("#tier").val(tier), $("#tier").selectpicker("refresh"), updateOrder());
  }), $("#tier-plus").click(function (e) {
    e.preventDefault(), tier < 9 && (tier += 1, $("#tier").val(tier), $("#tier").selectpicker("refresh"), updateOrder());
  }), $("#division-v").click(function () {
    division = 0, updateOrder();
  }), $("#division-iv").click(function () {
    division = 1, updateOrder();
  }), $("#division-iii").click(function () {
    division = 2, updateOrder();
  }), $("#division-ii").click(function () {
    division = 3, updateOrder();
  }), $("#division-i").click(function () {
    division = 4, updateOrder();
  })) : (tier = 0, division = 0, wins = 10, maxWins = 50, winsSliderPips = [1, 10, 20, 30, 40, 50]), $("#wins").on("input", function () {
    var e = parseInt($("#wins").val());
    isNaN(e) || ((wins = parseInt($("#wins").val())) > 5 ? wins = 5 : wins < 1 && (wins = 1), $("#wins").val(wins), updateWinsSlider()), updateWins();
  }).on("change", function () {
    updateWins();
  }).on("blur", function () {
    isNaN(parseInt($("#wins").val())) && $("#wins").val(wins);
  }), $("#wins-minus").mousedown(function () {
    winsDecrease(), plusMinusTimeout = setTimeout(function () {
      plusMinusInterval = setInterval(function () {
        winsDecrease();
      }, 125);
    }, 300);
  }).mouseup(function () {
    clearTimeout(plusMinusTimeout), clearInterval(plusMinusInterval);
  }), $("#wins-plus").mousedown(function () {
    winsIncrease(), plusMinusTimeout = setTimeout(function () {
      plusMinusInterval = setInterval(function () {
        winsIncrease();
      }, 125);
    }, 300);
  }).mouseup(function () {
    clearTimeout(plusMinusTimeout), clearInterval(plusMinusInterval);
  }), updateWinsSlider(), $("#role-tank").click(function (e) {
    role = "Tank", updateWins();
  }), $("#role-damage").click(function (e) {
    role = "Damage", updateWins();
  }), $("#role-support").click(function (e) {
    role = "Support", updateWins();
  }), $("#role-open-queue").click(function (e) {
    role = "Open Queue", updateWins();
  }), $("#duo-group").click(function (e) {
    e.preventDefault(), duoSwitch(), updateWins();
  }), $("#priority-completion-group").click(function (e) {
    e.preventDefault(), priorityCompletionSwitch(), updateWins();
  }), $("#stream-group").click(function (e) {
    e.preventDefault(), streamSwitch(), updateWins();
  }), $("#play-offline-group").click(function (e) {
    e.preventDefault(), playOfflineSwitch(), updateWins();
  }));
  var placementRank = 5,
    placementGames = 10,
    placementGamesMax = 10,
    placementPrices;

  function updatePlacementSlider() {
    var e = document.getElementById("placement-games-slider");
    void 0 !== e.noUiSlider && null != e.noUiSlider && e.noUiSlider.destroy(), _vendor_nouislider_min__WEBPACK_IMPORTED_MODULE_2___default.a.create(e, {
      start: placementGames,
      connect: [!0, !1],
      range: {
        min: 1,
        max: placementGamesMax
      },
      step: 1,
      tooltips: !0,
      format: _vendor_wNumb__WEBPACK_IMPORTED_MODULE_1___default()({
        decimals: 0
      }),
      pips: {
        mode: "values",
        values: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
        density: 1e3
      }
    }), e.noUiSlider.on("update", function (e, t) {
      placementGames = parseInt(e[t]), $("#placement-games").val(placementGames), updatePlacement();
    });
  }

  function updatePlacement() {
    $("#tab-placement");
    amount = parseInt(placementGames) * parseFloat(placementPrices[parseInt(placementRank)]);
    var e = $("#form-placement"),
      t = 0;
    e.find(".hidden-role").val(role), isDuo ? (e.find(".hidden-is-duo").val("true"), t += duoPercent) : (e.find(".hidden-is-duo").val("false"), "Support" === role && (t += supportPercent)), isStream ? (e.find(".hidden-stream").val("true"), t += streamPercent) : e.find(".hidden-stream").val("false"), priorityCompletion ? (e.find(".hidden-priority-completion").val("true"), t += priorityCompletionPercent) : e.find(".hidden-priority-completion").val("false"), playOffline ? e.find(".hidden-play-offline").val("true") : e.find(".hidden-play-offline").val("false"), amount *= (100 + t) / 100, applyCurrency(), applyDiscount(), e.find(".hidden-current").val(1e3 * placementRank), e.find(".hidden-games").val(placementGames), e.find(".hidden-amount").val(amountWithDiscount.toFixed(2));
    var n = placementGames;
    isDuo && (n *= 3);
    var i = "";
    if (n <= 24) {
      var o = "";
      n > 1 && (o = "s"), i = n + " hour" + o;
    } else i = Math.ceil(n / 24) + " days";
    var r = "<b>" + placementGames + "</b> ";
    r += isDuo ? "Duo " : role + " ", r += " Placement Win" + (placementGames > 1 ? "s" : ""), r += '<br><span class="small text-muted">Approximate completion time: <b>' + i + "</b></span>", $("#order-summary").html(r);
    var s = "";
    amount != amountWithDiscount && (s += '<span style="text-decoration:line-through">&nbsp;' + currencySymbol + amount.toFixed(2) + "&nbsp;</span>&nbsp;"), s += "<b>" + currencySymbol + amountWithDiscount.toFixed(2) + "</b>&nbsp;", $("#order-description-amount").html(s), updateRatingIcon($("#previous-rating-icon"), placementRank, 0);
  }

  function placementGamesDecrease() {
    placementGames > 1 && (placementGames--, $("#placement-games").val(placementGames), updatePlacementSlider()), updatePlacement();
  }

  function placementGamesIncrease() {
    placementGames < placementGamesMax && (placementGames++, $("#placement-games").val(placementGames), updatePlacementSlider()), updatePlacement();
  }
  $("#tab-placement").length && (placementPrices = $("#tab-placement").attr("data-prices").split(","), supportPercent = parseInt($("#tab-placement").attr("data-support-percent")), duoPercent = parseInt($("#tab-placement").attr("data-duo-percent")), streamPercent = parseInt($("#tab-placement").attr("data-stream-percent")), priorityCompletionPercent = parseInt($("#tab-placement").attr("data-priority-completion-percent")), updateDiscount(), $("#platform .nav-link").click(function (e) {
    e.preventDefault(), $("#form-placement").find(".hidden-platform").val($(this).attr("data-platform"));
  }), $("#placement-rank").on("change", function () {
    placementRank = parseInt($(this).val()), updatePlacement();
  }), $("#placement-games").on("input", function () {
    var e = parseInt($("#placement-games").val());
    isNaN(e) || ((placementGames = parseInt($("#placement-games").val())) > placementGamesMax ? placementGames = placementGamesMax : placementGames < 1 && (placementGames = 1), $("#placement-games").val(placementGames), updatePlacementSlider()), updatePlacement();
  }).on("change", function () {
    updatePlacement();
  }).on("blur", function () {
    isNaN(parseInt($("#placement-games").val())) && $("#placement-games").val(placementGames);
  }), $("#placement-games-minus").mousedown(function () {
    placementGamesDecrease(), plusMinusTimeout = setTimeout(function () {
      plusMinusInterval = setInterval(function () {
        placementGamesDecrease();
      }, 125);
    }, 300);
  }).mouseup(function () {
    clearTimeout(plusMinusTimeout), clearInterval(plusMinusInterval);
  }), $("#placement-games-plus").mousedown(function () {
    placementGamesIncrease(), plusMinusTimeout = setTimeout(function () {
      plusMinusInterval = setInterval(function () {
        placementGamesIncrease();
      }, 125);
    }, 300);
  }).mouseup(function () {
    clearTimeout(plusMinusTimeout), clearInterval(plusMinusInterval);
  }), updatePlacementSlider(), $("#role-tank").click(function (e) {
    role = "Tank", placementGamesMax = 10, placementGames > 10 && (placementGames = 10), updatePlacementSlider(), updatePlacement();
  }), $("#role-damage").click(function (e) {
    role = "Damage", placementGamesMax = 10, placementGames > 10 && (placementGames = 10), updatePlacementSlider(), updatePlacement();
  }), $("#role-support").click(function (e) {
    role = "Support", placementGamesMax = 10, placementGames > 10 && (placementGames = 10), updatePlacementSlider(), updatePlacement();
  }), $("#role-open-queue").click(function (e) {
    role = "Open Queue", placementGamesMax = 10, placementGames > 10 && (placementGames = 10), updatePlacementSlider(), updatePlacement();
  }), $("#duo-group").click(function (e) {
    e.preventDefault(), duoSwitch(), updatePlacement();
  }), $("#priority-completion-group").click(function (e) {
    e.preventDefault(), priorityCompletionSwitch(), updatePlacement();
  }), $("#stream-group").click(function (e) {
    e.preventDefault(), streamSwitch(), updatePlacement();
  }), $("#play-offline-group").click(function (e) {
    e.preventDefault(), playOfflineSwitch(), updatePlacement();
  }));
}, function (e, t, n) {
  var i, o, r;
  o = [n(0)], void 0 === (r = "function" == typeof (i = function (e) {
    var t = function (t, n, i) {
      var o = {
        invalid: [],
        getCaret: function () {
          try {
            var e, n = 0,
              i = t.get(0),
              r = document.selection,
              s = i.selectionStart;
            return r && -1 === navigator.appVersion.indexOf("MSIE 10") ? ((e = r.createRange()).moveStart("character", -o.val().length), n = e.text.length) : (s || "0" === s) && (n = s), n;
          } catch (e) { }
        },
        setCaret: function (e) {
          try {
            if (t.is(":focus")) {
              var n, i = t.get(0);
              i.setSelectionRange ? (i.focus(), i.setSelectionRange(e, e)) : ((n = i.createTextRange()).collapse(!0), n.moveEnd("character", e), n.moveStart("character", e), n.select());
            }
          } catch (e) { }
        },
        events: function () {
          t.on("keydown.mask", function (e) {
            t.data("mask-keycode", e.keyCode || e.which);
          }).on(e.jMaskGlobals.useInput ? "input.mask" : "keyup.mask", o.behaviour).on("paste.mask drop.mask", function () {
            setTimeout(function () {
              t.keydown().keyup();
            }, 100);
          }).on("change.mask", function () {
            t.data("changed", !0);
          }).on("blur.mask", function () {
            a === o.val() || t.data("changed") || t.trigger("change"), t.data("changed", !1);
          }).on("blur.mask", function () {
            a = o.val();
          }).on("focus.mask", function (t) {
            !0 === i.selectOnFocus && e(t.target).select();
          }).on("focusout.mask", function () {
            i.clearIfNotMatch && !r.test(o.val()) && o.val("");
          });
        },
        getRegexMask: function () {
          for (var e, t, i, o, r = [], a = 0; a < n.length; a++)(e = s.translation[n.charAt(a)]) ? (t = e.pattern.toString().replace(/.{1}$|^.{1}/g, ""), i = e.optional, (e = e.recursive) ? (r.push(n.charAt(a)), o = {
            digit: n.charAt(a),
            pattern: t
          }) : r.push(i || e ? t + "?" : t)) : r.push(n.charAt(a).replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&"));
          return r = r.join(""), o && (r = r.replace(new RegExp("(" + o.digit + "(.*" + o.digit + ")?)"), "($1)?").replace(new RegExp(o.digit, "g"), o.pattern)), new RegExp(r);
        },
        destroyEvents: function () {
          t.off("input keydown keyup paste drop blur focusout ".split(" ").join(".mask "));
        },
        val: function (e) {
          var n = t.is("input") ? "val" : "text";
          return 0 < arguments.length ? (t[n]() !== e && t[n](e), n = t) : n = t[n](), n;
        },
        getMCharsBeforeCount: function (e, t) {
          for (var i = 0, o = 0, r = n.length; o < r && o < e; o++) s.translation[n.charAt(o)] || (e = t ? e + 1 : e, i++);
          return i;
        },
        caretPos: function (e, t, i, r) {
          return s.translation[n.charAt(Math.min(e - 1, n.length - 1))] ? Math.min(e + i - t - r, i) : o.caretPos(e + 1, t, i, r);
        },
        behaviour: function (n) {
          n = n || window.event, o.invalid = [];
          var i = t.data("mask-keycode");
          if (-1 === e.inArray(i, s.byPassKeys)) {
            var r = o.getCaret(),
              a = o.val().length,
              l = o.getMasked(),
              c = l.length,
              u = o.getMCharsBeforeCount(c - 1) - o.getMCharsBeforeCount(a - 1),
              d = r < a;
            return o.val(l), d && (8 !== i && 46 !== i && (r = o.caretPos(r, a, c, u)), o.setCaret(r)), o.callbacks(n);
          }
        },
        getMasked: function (e, t) {
          var r, a, l = [],
            c = void 0 === t ? o.val() : t + "",
            u = 0,
            d = n.length,
            p = 0,
            h = c.length,
            f = 1,
            m = "push",
            g = -1;
          for (i.reverse ? (m = "unshift", f = -1, r = 0, u = d - 1, p = h - 1, a = function () {
            return -1 < u && -1 < p;
          }) : (r = d - 1, a = function () {
            return u < d && p < h;
          }); a();) {
            var v = n.charAt(u),
              b = c.charAt(p),
              y = s.translation[v];
            y ? (b.match(y.pattern) ? (l[m](b), y.recursive && (-1 === g ? g = u : u === r && (u = g - f), r === g && (u -= f)), u += f) : y.optional ? (u += f, p -= f) : y.fallback ? (l[m](y.fallback), u += f, p -= f) : o.invalid.push({
              p: p,
              v: b,
              e: y.pattern
            }), p += f) : (e || l[m](v), b === v && (p += f), u += f);
          }
          return c = n.charAt(r), d !== h + 1 || s.translation[c] || l.push(c), l.join("");
        },
        callbacks: function (e) {
          var r = o.val(),
            s = r !== a,
            l = [r, e, t, i],
            c = function (e, t, n) {
              "function" == typeof i[e] && t && i[e].apply(this, n);
            };
          c("onChange", !0 === s, l), c("onKeyPress", !0 === s, l), c("onComplete", r.length === n.length, l), c("onInvalid", 0 < o.invalid.length, [r, e, t, o.invalid, i]);
        }
      };
      t = e(t);
      var r, s = this,
        a = o.val();
      n = "function" == typeof n ? n(o.val(), void 0, t, i) : n, s.mask = n, s.options = i, s.remove = function () {
        var e = o.getCaret();
        return o.destroyEvents(), o.val(s.getCleanVal()), o.setCaret(e - o.getMCharsBeforeCount(e)), t;
      }, s.getCleanVal = function () {
        return o.getMasked(!0);
      }, s.getMaskedVal = function (e) {
        return o.getMasked(!1, e);
      }, s.init = function (n) {
        n = n || !1, i = i || {}, s.clearIfNotMatch = e.jMaskGlobals.clearIfNotMatch, s.byPassKeys = e.jMaskGlobals.byPassKeys, s.translation = e.extend({}, e.jMaskGlobals.translation, i.translation), s = e.extend(!0, {}, s, i), r = o.getRegexMask(), !1 === n ? (i.placeholder && t.attr("placeholder", i.placeholder), t.data("mask") && t.attr("autocomplete", "off"), o.destroyEvents(), o.events(), n = o.getCaret(), o.val(o.getMasked()), o.setCaret(n + o.getMCharsBeforeCount(n, !0))) : (o.events(), o.val(o.getMasked()));
      }, s.init(!t.is("input"));
    };
    e.maskWatchers = {};
    var n = function () {
      var n = e(this),
        o = {},
        r = n.attr("data-mask");
      if (n.attr("data-mask-reverse") && (o.reverse = !0), n.attr("data-mask-clearifnotmatch") && (o.clearIfNotMatch = !0), "true" === n.attr("data-mask-selectonfocus") && (o.selectOnFocus = !0), i(n, r, o)) return n.data("mask", new t(this, r, o));
    },
      i = function (t, n, i) {
        i = i || {};
        var o = e(t).data("mask"),
          r = JSON.stringify;
        t = e(t).val() || e(t).text();
        try {
          return "function" == typeof n && (n = n(t)), "object" != typeof o || r(o.options) !== r(i) || o.mask !== n;
        } catch (e) { }
      };
    e.fn.mask = function (n, o) {
      o = o || {};
      var r = this.selector,
        s = e.jMaskGlobals,
        a = s.watchInterval,
        s = o.watchInputs || s.watchInputs,
        l = function () {
          if (i(this, n, o)) return e(this).data("mask", new t(this, n, o));
        };
      return e(this).each(l), r && "" !== r && s && (clearInterval(e.maskWatchers[r]), e.maskWatchers[r] = setInterval(function () {
        e(document).find(r).each(l);
      }, a)), this;
    }, e.fn.masked = function (e) {
      return this.data("mask").getMaskedVal(e);
    }, e.fn.unmask = function () {
      return clearInterval(e.maskWatchers[this.selector]), delete e.maskWatchers[this.selector], this.each(function () {
        var t = e(this).data("mask");
        t && t.remove().removeData("mask");
      });
    }, e.fn.cleanVal = function () {
      return this.data("mask").getCleanVal();
    }, e.applyDataMask = function (t) {
      ((t = t || e.jMaskGlobals.maskElements) instanceof e ? t : e(t)).filter(e.jMaskGlobals.dataMaskAttr).each(n);
    };
    var o = {
      maskElements: "input,td,span,div",
      dataMaskAttr: "*[data-mask]",
      dataMask: !0,
      watchInterval: 300,
      watchInputs: !0,
      useInput: function (e) {
        var t, n = document.createElement("div");
        return (t = (e = "on" + e) in n) || (n.setAttribute(e, "return;"), t = "function" == typeof n[e]), t;
      }("input"),
      watchDataMask: !1,
      byPassKeys: [9, 16, 17, 18, 36, 37, 38, 39, 40, 91],
      translation: {
        0: {
          pattern: /\d/
        },
        9: {
          pattern: /\d/,
          optional: !0
        },
        "#": {
          pattern: /\d/,
          recursive: !0
        },
        A: {
          pattern: /[a-zA-Z0-9]/
        },
        S: {
          pattern: /[a-zA-Z]/
        }
      }
    };
    e.jMaskGlobals = e.jMaskGlobals || {}, (o = e.jMaskGlobals = e.extend(!0, {}, o, e.jMaskGlobals)).dataMask && e.applyDataMask(), setInterval(function () {
      e.jMaskGlobals.watchDataMask && e.applyDataMask();
    }, o.watchInterval);
  }) ? i.apply(t, o) : i) || (e.exports = r);
}, function (e, t, n) {
  e.exports = function () {
    "use strict";

    function e(e, t) {
      var n, i = document.createElement(e || "div");
      for (n in t) i[n] = t[n];
      return i;
    }

    function t(e) {
      for (var t = 1, n = arguments.length; n > t; t++) e.appendChild(arguments[t]);
      return e;
    }

    function n(e, t, n, i) {
      var o = ["opacity", t, ~~(100 * e), n, i].join("-"),
        r = .01 + n / i * 100,
        s = Math.max(1 - (1 - e) / t * (100 - r), e),
        a = l.substring(0, l.indexOf("Animation")).toLowerCase(),
        c = a && "-" + a + "-" || "";
      return u[o] || (d.insertRule("@" + c + "keyframes " + o + "{0%{opacity:" + s + "}" + r + "%{opacity:" + e + "}" + (r + .01) + "%{opacity:1}" + (r + t) % 100 + "%{opacity:" + e + "}100%{opacity:" + s + "}}", d.cssRules.length), u[o] = 1), o;
    }

    function i(e, t) {
      var n, i, o = e.style;
      for (t = t.charAt(0).toUpperCase() + t.slice(1), i = 0; c.length > i; i++)
        if (n = c[i] + t, void 0 !== o[n]) return n;
      return void 0 !== o[t] ? t : void 0;
    }

    function o(e, t) {
      for (var n in t) e.style[i(e, n) || n] = t[n];
      return e;
    }

    function r(e) {
      for (var t = 1; arguments.length > t; t++) {
        var n = arguments[t];
        for (var i in n) void 0 === e[i] && (e[i] = n[i]);
      }
      return e;
    }

    function s(e, t) {
      return "string" == typeof e ? e : e[t % e.length];
    }

    function a(e) {
      this.opts = r(e || {}, a.defaults, p);
    }
    var l, c = ["webkit", "Moz", "ms", "O"],
      u = {},
      d = function () {
        var n = e("style", {
          type: "text/css"
        });
        return t(document.getElementsByTagName("head")[0], n), n.sheet || n.styleSheet;
      }(),
      p = {
        lines: 12,
        length: 7,
        width: 5,
        radius: 10,
        rotate: 0,
        corners: 1,
        color: "#000",
        direction: 1,
        speed: 1,
        trail: 100,
        opacity: .25,
        fps: 20,
        zIndex: 2e9,
        className: "spinner",
        top: "50%",
        left: "50%",
        position: "absolute"
      };
    a.defaults = {}, r(a.prototype, {
      spin: function (t) {
        this.stop();
        var n = this,
          i = n.opts,
          r = n.el = o(e(0, {
            className: i.className
          }), {
            position: i.position,
            width: 0,
            zIndex: i.zIndex
          });
        if (i.radius, i.length, i.width, o(r, {
          left: i.left,
          top: i.top
        }), t && t.insertBefore(r, t.firstChild || null), r.setAttribute("role", "progressbar"), n.lines(r, n.opts), !l) {
          var s, a = 0,
            c = (i.lines - 1) * (1 - i.direction) / 2,
            u = i.fps,
            d = u / i.speed,
            p = (1 - i.opacity) / (d * i.trail / 100),
            h = d / i.lines;
          ! function e() {
            a++;
            for (var t = 0; i.lines > t; t++) s = Math.max(1 - (a + (i.lines - t) * h) % d * p, i.opacity), n.opacity(r, t * i.direction + c, s, i);
            n.timeout = n.el && setTimeout(e, ~~(1e3 / u));
          }();
        }
        return n;
      },
      stop: function () {
        var e = this.el;
        return e && (clearTimeout(this.timeout), e.parentNode && e.parentNode.removeChild(e), this.el = void 0), this;
      },
      lines: function (i, r) {
        function a(t, n) {
          return o(e(), {
            position: "absolute",
            width: r.length + r.width + "px",
            height: r.width + "px",
            background: t,
            boxShadow: n,
            transformOrigin: "left",
            transform: "rotate(" + ~~(360 / r.lines * u + r.rotate) + "deg) translate(" + r.radius + "px,0)",
            borderRadius: (r.corners * r.width >> 1) + "px"
          });
        }
        for (var c, u = 0, d = (r.lines - 1) * (1 - r.direction) / 2; r.lines > u; u++) c = o(e(), {
          position: "absolute",
          top: 1 + ~(r.width / 2) + "px",
          transform: r.hwaccel ? "translate3d(0,0,0)" : "",
          opacity: r.opacity,
          animation: l && n(r.opacity, r.trail, d + u * r.direction, r.lines) + " " + 1 / r.speed + "s linear infinite"
        }), r.shadow && t(c, o(a("#000", "0 0 4px #000"), {
          top: "2px"
        })), t(i, t(c, a(s(r.color, u), "0 0 1px rgba(0,0,0,.1)")));
        return i;
      },
      opacity: function (e, t, n) {
        e.childNodes.length > t && (e.childNodes[t].style.opacity = n);
      }
    });
    var h = o(e("group"), {
      behavior: "url(#default#VML)"
    });
    return !i(h, "transform") && h.adj ? function () {
      function n(t, n) {
        return e("<" + t + ' xmlns="urn:schemas-microsoft.com:vml" class="spin-vml">', n);
      }
      d.addRule(".spin-vml", "behavior:url(#default#VML)"), a.prototype.lines = function (e, i) {
        function r() {
          return o(n("group", {
            coordsize: u + " " + u,
            coordorigin: -c + " " + -c
          }), {
            width: u,
            height: u
          });
        }

        function a(e, a, l) {
          t(p, t(o(r(), {
            rotation: 360 / i.lines * e + "deg",
            left: ~~a
          }), t(o(n("roundrect", {
            arcsize: i.corners
          }), {
            width: c,
            height: i.width,
            left: i.radius,
            top: -i.width >> 1,
            filter: l
          }), n("fill", {
            color: s(i.color, e),
            opacity: i.opacity
          }), n("stroke", {
            opacity: 0
          }))));
        }
        var l, c = i.length + i.width,
          u = 2 * c,
          d = 2 * -(i.width + i.length) + "px",
          p = o(r(), {
            position: "absolute",
            top: d,
            left: d
          });
        if (i.shadow)
          for (l = 1; i.lines >= l; l++) a(l, -2, "progid:DXImageTransform.Microsoft.Blur(pixelradius=2,makeshadow=1,shadowopacity=.3)");
        for (l = 1; i.lines >= l; l++) a(l);
        return t(e, p);
      }, a.prototype.opacity = function (e, t, n, i) {
        var o = e.firstChild;
        i = i.shadow && i.lines || 0, o && o.childNodes.length > t + i && (o = (o = (o = o.childNodes[t + i]) && o.firstChild) && o.firstChild) && (o.opacity = n);
      };
    }() : l = i(h, "animation"), a;
  }();
}, function (e, t, n) {
  "use strict";
  n.r(t);
  n(22), n(23);
  var i = n(5);
  if ($(".section-order").length > 0) {
    var o = Number($("#order-refresh").attr("data-id")),
      r = $(".card-order-summary").attr("data-status");

    function s() {
      $("#order-refresh").load("/overwatch/order/" + o + "/refresh?nocache=" + Math.random(), a);
    }

    function a() {
      $(".chart").easyPieChart({
        easing: "easeOutBounce",
        barColor: "#5eb404",
        trackColor: "#e3e3e3",
        onStep: function (e, t, n) {
          $(this.el).find(".percent").text(Math.round(n));
        }
      }), l = Date.now(), c(), $("#order-refresh").tooltip({
        selector: '[data-toggle="tooltip"]'
      }), "Completed" != r && "Completed" == $(".panel-order").attr("data-status") && location.reload(), i.default.enableTipButtons(), $("#form-assign-previous").length && $("#form-assign-previous").validate({
        submit: {
          callback: {
            onSubmit: function (e, t) {
              return function (e, t) {
                0 != o && (e.find("button").prop("disabled", !0), $.ajax({
                  method: "POST",
                  url: e.attr("action"),
                  data: t
                }).always(function () {
                  s(), e.find("button").prop("disabled", !1);
                }));
              }(e, t), !1;
            }
          }
        }
      });
    }
    a(), $("#options-nav .nav-link").click(function (e) {
      $("#options-collapse").hasClass("collapsed") ? ($("#options-nav .nav-link").removeClass("active"), $("#options .tab-pane").removeClass("show").removeClass("active"), $($(this).attr("href")).addClass("active").addClass("show"), $("#options-collapse").click()) : $(this).hasClass("active") && (setTimeout(function () {
        $("#options-nav .nav-link").removeClass("active");
      }, 1), $("#options-collapse").click());
    }), $("#options-collapse").click(function (e) {
      if ($(this).hasClass("collapsed")) {
        var t = $("#options .tab-pane.show").attr("id");
        $('#options-nav .nav-link[href$="' + t + '"]').addClass("active");
      } else $("#options-nav .nav-link").removeClass("active");
    }), $("#order-refresh").on("click", "#btn-pause, #btn-resume", function (e) {
      e.preventDefault(), 0 != o && ($(this).prop("disabled", !0), $.ajax({
        method: "POST",
        url: $(this).parents("form").attr("action")
      }).done(function (e) {
        $("#order-refresh").html(e), a();
      }));
    });
    var l = Date.now();

    function c() {
      $(".countdown").each(function () {
        var e = $(this).attr("data-seconds") - ((Date.now() - l) / 1e3 | 0);
        e = e > 0 ? e : 0;
        var t = parseInt(e / 3600) % 24,
          n = parseInt(e / 60) % 60,
          i = e % 60,
          o = "";
        t > 0 && (o += (t < 10 ? "0" + t : t) + ":"), o += (n < 10 ? "0" + n : n) + ":" + (i < 10 ? "0" + i : i), $(this).html(o);
      });
    }
    $(".countdown").length && c(), setInterval(c, 1e3);
    var u, d = $("#platform"),
      p = $("#battletag-field");
    $("#region").change(function () {
      $(this).parent().find(".form-tooltip-error").hide();
    }), $("#platform-pc").click(function (e) {
      e.preventDefault(), d.val("PC"), p && (p.find("label").text("BattleTag"), p.find("input").attr("placeholder", "BattleTag#1234"));
    }), $("#platform-psn").click(function (e) {
      e.preventDefault(), d.val("PSN"), p && (p.find("label").text("PSN ID"), p.find("input").attr("placeholder", ""));
    }), $("#platform-xbl").click(function (e) {
      e.preventDefault(), d.val("XBL"), p && (p.find("label").text("Gamertag"), p.find("input").attr("placeholder", ""));
    }), $(document).ready(function () {
      $("#form-update-game-account").length && ("New" === r ? $('#form-update-game-account button[type="submit"]').prop("disabled", !0).html("Submit (available after purchase)") : $("#form-update-game-account").validate({
        submit: {
          settings: {
            errorListClass: "form-tooltip-error"
          },
          callback: {
            onSubmit: function (e, t) {
              ! function (e, t) {
                if (0 == o) return;
                clearTimeout(u), e.find("input, select, button").not(".disabled").prop("disabled", !0).parent(".input-group").addClass("disabled"), e.find("a.nav-link").not(".disabled-forever").addClass("disabled"), e.find('button[type="submit"]').html("Please wait...").removeClass("btn-success").removeClass("btn-danger").addClass("btn-info"), $.ajax({
                  method: "POST",
                  url: e.attr("action"),
                  data: t
                }).done(function (t) {
                  $("#alert-action-required").length && ($("#alert-action-required").remove(), setTimeout(function () {
                    $("#options-collapse").click();
                  }, 3e3)), $("#alert-authentication").length && $("#alert-authentication").removeClass("d-none"), e.find('button[type="submit"]').html("Game account updated").removeClass("btn-info").addClass("btn-success"), u = setTimeout(function () {
                    e.find('button[type="submit"]').html("Submit").removeClass("btn-success").addClass("btn-info");
                  }, 3e3), s();
                }).fail(function () {
                  e.find('button[type="submit"]').html("Try again").removeClass("btn-info").addClass("btn-danger");
                }).always(function () {
                  e.find("input, select, button").not(".disabled").prop("disabled", !1).parent(".input-group").removeClass("disabled"), e.find("a.nav-link").not(".disabled-forever").removeClass("disabled");
                });
              }(e, t);
            }
          }
        }
      }).focusin(function () {
        $(this).find('button[type="submit"]:disabled').removeClass("btn-success").removeClass("btn-danger").addClass("btn-info");
      }));
    });
    var h = $("#role").val(),
      f = 6;

    function m() {
      f = "Tank" === h || "Support" === h ? 3 : 6, $("#min-heroes").text(f);
    }

    function g() {
      $("#order-heroes-selected .badge").addClass("d-none"), $("#order-heroes-selected .badge.none").removeClass("d-none"), "Open Queue" === h ? $("#order-heroes-available .badge").removeClass("d-none") : ($("#order-heroes-available .badge[data-category=" + h.toLowerCase() + "]").removeClass("d-none"), $("#order-heroes-available .badge[data-category!=" + h.toLowerCase() + "]").addClass("d-none")), $("#order-heroes-available .badge.none").addClass("d-none");
    }
    m(), $("#role-damage").click(function (e) {
      e.preventDefault(), "Damage" !== h && (h = "Damage", g(), f = 6, m());
    }), $("#role-tank").click(function (e) {
      e.preventDefault(), "Tank" !== h && (h = "Tank", g(), f = 3, m());
    }), $("#role-support").click(function (e) {
      e.preventDefault(), "Support" !== h && (h = "Support", g(), f = 3, m());
    }), $("#role-open-queue").click(function (e) {
      e.preventDefault(), "Open Queue" !== h && (h = "Open Queue", g(), f = 6, m());
    });
    var v, b, y = !1;

    function w() {
      $("#order-heroes-search").val("");
      var e = $("#order-heroes-selected .badge").not(".d-none").not(".none").length;
      e > 0 ? $("#order-heroes-selected .badge.none").addClass("d-none") : $("#order-heroes-selected .badge.none").removeClass("d-none"), $("#order-heroes-available .badge").not(".d-none").not(".none").show().length > 0 ? $("#order-heroes-available .badge.none").addClass("d-none") : $("#order-heroes-available .badge.none").text("None").removeClass("d-none");
      var t = $("#tab-heroes-button");
      t.removeClass("btn-success"), "New" === r ? t.prop("disabled", !0).html("Submit (available after purchase)") : 0 == e || e >= f ? (t.removeClass("btn-danger").addClass("btn-info").html("Submit"), 0 != o && t.prop("disabled", !1)) : t.removeClass("btn-info").addClass("btn-danger").prop("disabled", !0).html("Select at least " + f + " heroes");
    }
    if ($("#order-heroes-available .badge").click(function () {
      y || ($(this).addClass("d-none"), $('#order-heroes-selected .badge[data-id="' + $(this).attr("data-id") + '"]').removeClass("d-none"), w());
    }), $("#order-heroes-selected .badge").not(".none").click(function () {
      y || ($(this).addClass("d-none"), $('#order-heroes-available .badge[data-id="' + $(this).attr("data-id") + '"]').removeClass("d-none"), w());
    }), $("#tab-heroes-button").click(function (e) {
      if (e.preventDefault(), 0 != o) {
        clearTimeout(v), $(this).html("Please wait...").removeClass("btn-success").removeClass("btn-danger").addClass("btn-info").prop("disabled", !0), y = !0;
        var t = [];
        $("#order-heroes-selected .badge").not(".d-none").not(".none").each(function () {
          t.push($(this).attr("data-id"));
        }), $.ajax({
          method: "POST",
          url: $(this).parent().attr("action"),
          data: {
            role: h,
            heroes: t.join()
          }
        }).done(function () {
          $("#tab-heroes-button").html("Heroes updated").removeClass("btn-info").addClass("btn-success"), v = setTimeout(w, 3e3);
        }).fail(function () {
          $("#tab-heroes-button").html("Try again").removeClass("btn-info").addClass("btn-danger");
        }).always(function () {
          $("#tab-heroes-button").prop("disabled", !1), y = !1;
        });
      }
    }), $("#order-heroes-search").on("input", function () {
      var e = $(this).val().toUpperCase();
      if ($("#order-heroes-available .badge").not(".none").show().not(":contains(" + e + ")").hide(), $("#order-heroes-available .badge").not(".d-none").not(".none").not(":hidden").length > 0) $("#order-heroes-available .badge.none").addClass("d-none");
      else {
        var t = "Not Found";
        e.length <= 0 && (t = "None"), $("#order-heroes-available .badge.none").text(t).removeClass("d-none");
      }
    }).keyup(function (e) {
      if (13 === e.keyCode) {
        var t = $("#order-heroes-available .badge").not(".d-none").not(".none").not(":hidden");
        1 === t.length && (y || (t.addClass("d-none"), $('#order-heroes-selected .badge[data-id="' + t.attr("data-id") + '"]').removeClass("d-none"), w()));
      }
    }), w(), $("#payment").length) {
      let e = !0;

      function C() {
        e ? ($("#payment-order-total").addClass("line-through"), $("#payment-with-store-credit").removeClass("d-none"), $("#payment-without-store-credit").addClass("d-none"), $(".use-store-credit").val("true"), $("#payment-methods").addClass("d-none"), $("#pay-with-store-credit").removeClass("d-none")) : ($("#payment-order-total").removeClass("line-through"), $("#payment-with-store-credit").addClass("d-none"), $("#payment-without-store-credit").removeClass("d-none"), $(".use-store-credit").val("false"), $("#payment-methods").removeClass("d-none"), $("#pay-with-store-credit").addClass("d-none"));
      }
      setTimeout(function () {
        e = $("input.use-store-credit-switch").is(":checked"), C();
      }, 1), $("#use-store-credit-group").click(function (t) {
        t.preventDefault(), e = !e, $("input.use-store-credit-switch").prop("checked", e), C();
      });
    }
    $("#form-update-notes").length && $("#form-update-notes").validate({
      submit: {
        callback: {
          onSubmit: function (e, t) {
            ! function (e, t) {
              if (0 == o) return;
              clearTimeout(b), e.find("textarea, button").prop("disabled", !0), e.find('button[type="submit"]').html("Please wait...").removeClass("btn-success").removeClass("btn-danger").addClass("btn-info"), $.ajax({
                method: "POST",
                url: e.attr("action"),
                data: t
              }).done(function (t) {
                e.find('button[type="submit"]').html("Notes updated").removeClass("btn-info").addClass("btn-success"), b = setTimeout(function () {
                  e.find("button").html("Submit").removeClass("btn-success").addClass("btn-info");
                }, 3e3);
              }).fail(function () {
                e.find('button[type="submit"]').html("Try again").removeClass("btn-info").addClass("btn-danger");
              }).always(function () {
                e.find("textarea, button").prop("disabled", !1);
              });
            }(e, t);
          }
        }
      }
    }).focusin(function () {
      "New" === r ? $("#tab-notes-button").prop("disabled", !0).html("Submit (available after purchase)") : $(this).find('button[type="submit"]').html("Submit").removeClass("btn-success").removeClass("btn-danger").addClass("btn-info");
    }), b = setTimeout(function () {
      "New" === r && $("#tab-notes-button").prop("disabled", !0).html("Submit (available after purchase)");
    }, 1);
    var x = $("#form-review"),
      _ = "",
      k = "";

    function T(e) {
      for (var t = 1; t <= 5; t++) t <= e ? x.find(".star" + t + " img").attr("src", _) : x.find(".star" + t + " img").attr("src", k);
    }
    x.length && (_ = x.attr("data-yellow-star-url"), k = x.attr("data-grey-star-url"), x.find(".star img").mouseover(function () {
      for (var e = parseInt($(this).parent().attr("data-id")), t = 1; t <= e; t++) x.find(".star" + t + " img").attr("src", _);
    }).mouseout(function () {
      T(parseInt(x.find("#review-stars").val()));
    }).click(function () {
      x.find(".form-tooltip-error").hide();
      var e = parseInt($(this).parent().attr("data-id"));
      x.find("#review-stars").val(e), T(e);
    }), x.validate({
      submit: {
        settings: {
          inputContainer: ".input-group",
          errorListClass: "form-tooltip-error"
        },
        callback: {
          onSubmit: function (e, t) {
            ! function (e, t) {
              x.find(".star img").unbind("click").unbind("mouseover").unbind("mouseout"), e.find("textarea, button, input").prop("disabled", !0), e.find(".input-group").addClass("disabled"), e.find("button").html("Please wait...").removeClass("btn-success").removeClass("btn-danger").addClass("btn-info"), $.ajax({
                method: "POST",
                url: e.attr("action"),
                data: t
              }).done(function (t) {
                e.find("button").html("Thank you!").removeClass("btn-info").addClass("btn-success"), $("#promotional-code-group").removeClass("d-none").find(".promotional-code").text(t);
              }).fail(function () {
                e.find("button").html("Try again").removeClass("btn-info").addClass("btn-danger"), e.find("textarea, button, input").prop("disabled", !1), e.find(".input-group").removeClass("disabled");
              });
            }(e, t);
          }
        }
      }
    }).focusin(function () {
      $(this).find("button").html("Submit").removeClass("btn-success").removeClass("btn-danger").addClass("btn-info");
    }));
    var E = !0,
      S = $("#chat-messages").attr("data-id");
    $("#chat-form").length && (o > 0 || ($("#chat-form #message").keypress(function (e) {
      13 != e.charCode && 13 != e.keyCode || (e.preventDefault(), $("#message").val(""));
    }), $("#send-message").on("click", function () {
      event.preventDefault(), $("#message").val("");
    })), $("#chat-form #message").on("input", function (e) {
      $("#message").val().length > 0 ? $("#send-message").removeClass("disabled") : $("#send-message").addClass("disabled"), $(this).css("height", ""), $(this).css("height", $(this).prop("scrollHeight") + 2 + "px");
    }), $(".dropup.emoji .emoji").on("click", function (e) {
      var t = $("#message").val();
      t.length > 0 && " " !== t.slice(-1) && (t += " "), t += this.innerHTML, $("#message").val(t), setTimeout(function () {
        $("#message").focus();
      }, 1);
    }));
    var D = Intl.DateTimeFormat(void 0, {
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit"
    });

    function I(e, t) {
      var n = $("#chat-messages"),
        i = linkifyStr(e.message),
        o = "";
      2 === i.length && /\p{Emoji}/u.test(i) && !/\p{N}/u.test(i) && (o = " emoji");
      var r = D.format(new Date(e.inserted_at));
      if (e.user_id == S) E = !0, n.append('<div class="row me"><div class="col-12 col-sm-10 offset-sm-1"><div class="chat-message"><div class="chat-time">' + r + ' </div><div class="chat-message-text' + o + '">' + i + "</div></div></div></div>");
      else {
        t || document.getElementById("snd-chat").play();
        var s = '<div class="row"><div class="col-12 col-sm-10 offset-sm-1"><div class="chat-message"><div class="chat-name">' + (e.name || e.role);
        "Admin" != e.role && "Support" != e.role || (s += ' <span class="badge badge-success">Admin</span>'), s += '</div><div class="chat-time">' + r + ' </div><div class="chat-message-text' + o + '">' + i + "</div></div></div></div>", n.append(s);
      }
    }

    function A() {
      var e = $("#chat-messages-container");
      e.scrollTop(e[0].scrollHeight);
    }
    if (void 0 !== window.token) {
      let e = new window.Phoenix.Socket("/socket", {
        params: {
          token: window.token
        }
      });
      e.connect();
      var O = "online";
      const t = e.channel("online");
      var N;

      function P() {
        clearTimeout(N), t.push("update_status", {
          status: O
        }), O.startsWith("online") && (O = "online:confirm", N = setTimeout(P, 18e4));
      }
      if (t.join().receive("ok", () => {
        P();
      }).receive("error", () => {
        console.error("Unable to join 'online' channel");
      }), $(document).idle({
        idle: 3e5,
        onIdle: function () {
          O = "away", P();
        },
        onActive: function () {
          O = "online", P();
        }
      }), $("#order-refresh").length && o > 0) {
        const t = e.channel("order:" + o);

        function j(e) {
          e.preventDefault(), "" !== $("#message").val().trim() && t.push("message", {
            message: $("#message").val()
          }), $("#message").val(""), $("#send-message").addClass("disabled"), $("#message").css("height", ""), $("#message").css("height", $(this).prop("scrollHeight") + 2 + "px");
        }
        t.on("history", e => {
          for (var t in $("#chat-messages").html(""), e.messages) I(e.messages[t], !0);
          A();
        }), t.on("message", e => {
          E = function () {
            var e = $("#chat-messages-container"),
              t = e[0].scrollHeight - $(e[0]).innerHeight();
            return e.scrollTop() > t - 50;
          }(), I(e, !1), E && A();
        }), t.on("refresh", e => {
          "new" != e.event && ("completed" == e.event ? window.location.reload(!0) : "battletag" == e.event ? $("#alert-authentication").length > 0 && $("#alert-authentication").remove() : (s(), "history" == e.event && $("#order-games-history").load("/overwatch/order/" + o + "/history?nocache=" + Math.random())));
        }), $("#chat-form #message").keypress(function (e) {
          13 != e.charCode && 13 != e.keyCode || j(e);
        }), $("#send-message").on("click", j), t.join().receive("error", () => {
          console.error("Unable to join 'order' channel");
        });
      }
    }
  }
}, function (e, t) {
  ! function () {
    "use strict";
    var e = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
      return typeof e;
    } : function (e) {
      return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
    };
    ! function (t) {
      function n(e, t) {
        var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
          i = Object.create(e.prototype);
        for (var o in n) i[o] = n[o];
        return i.constructor = t, t.prototype = i, t;
      }
      var i = {
        defaultProtocol: "http",
        events: null,
        format: r,
        formatHref: r,
        nl2br: !1,
        tagName: "a",
        target: function (e, t) {
          return "url" === t ? "_blank" : null;
        },
        validate: !0,
        ignoreTags: [],
        attributes: null,
        className: "linkified"
      };

      function o(e) {
        e = e || {}, this.defaultProtocol = e.defaultProtocol || i.defaultProtocol, this.events = e.events || i.events, this.format = e.format || i.format, this.formatHref = e.formatHref || i.formatHref, this.nl2br = e.nl2br || i.nl2br, this.tagName = e.tagName || i.tagName, this.target = e.target || i.target, this.validate = e.validate || i.validate, this.ignoreTags = [], this.attributes = e.attributes || e.linkAttributes || i.attributes, this.className = e.className || e.linkClass || i.className;
        for (var t = e.ignoreTags || i.ignoreTags, n = 0; n < t.length; n++) this.ignoreTags.push(t[n].toUpperCase());
      }

      function r(e) {
        return e;
      }
      o.prototype = {
        resolve: function (e) {
          var t = e.toHref(this.defaultProtocol);
          return {
            formatted: this.get("format", e.toString(), e),
            formattedHref: this.get("formatHref", t, e),
            tagName: this.get("tagName", t, e),
            className: this.get("className", t, e),
            target: this.get("target", t, e),
            events: this.getObject("events", t, e),
            attributes: this.getObject("attributes", t, e)
          };
        },
        check: function (e) {
          return this.get("validate", e.toString(), e);
        },
        get: function (t, n, o) {
          var r = this[t];
          if (!r) return r;
          switch (void 0 === r ? "undefined" : e(r)) {
            case "function":
              return r(n, o.type);
            case "object":
              var s = r[o.type] || i[t];
              return "function" == typeof s ? s(n, o.type) : s;
          }
          return r;
        },
        getObject: function (e, t, n) {
          var i = this[e];
          return "function" == typeof i ? i(t, n.type) : i;
        }
      };
      var s = Object.freeze({
        defaults: i,
        Options: o,
        contains: function (e, t) {
          for (var n = 0; n < e.length; n++)
            if (e[n] === t) return !0;
          return !1;
        }
      });
      var a = function (e) {
        this.j = [], this.T = e || null;
      };
      a.prototype = {
        defaultTransition: !1,
        on: function (e, t) {
          if (e instanceof Array) {
            for (var n = 0; n < e.length; n++) this.j.push([e[n], t]);
            return this;
          }
          return this.j.push([e, t]), this;
        },
        next: function (e) {
          for (var t = 0; t < this.j.length; t++) {
            var n = this.j[t],
              i = n[0],
              o = n[1];
            if (this.test(e, i)) return o;
          }
          return this.defaultTransition;
        },
        accepts: function () {
          return !!this.T;
        },
        test: function (e, t) {
          return e === t;
        },
        emit: function () {
          return this.T;
        }
      };
      var l = n(a, function (e) {
        this.j = [], this.T = e || null;
      }, {
        test: function (e, t) {
          return e === t || t instanceof RegExp && t.test(e);
        }
      }),
        c = n(a, function (e) {
          this.j = [], this.T = e || null;
        }, {
          jump: function (e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
              n = this.next(new e(""));
            return n === this.defaultTransition ? (n = new this.constructor(t), this.on(e, n)) : t && (n.T = t), n;
          },
          test: function (e, t) {
            return e instanceof t;
          }
        });

      function u(e, t, n, i) {
        for (var o = 0, r = e.length, s = t, a = [], c = void 0; o < r && (c = s.next(e[o]));) s = c, o++;
        if (o >= r) return [];
        for (; o < r - 1;) c = new l(i), a.push(c), s.on(e[o], c), s = c, o++;
        return c = new l(n), a.push(c), s.on(e[r - 1], c), a;
      }
      var d = function (e) {
        e && (this.v = e);
      };

      function p(e) {
        return n(d, function (e) {
          e && (this.v = e);
        }, e ? {
          v: e
        } : {});
      }
      d.prototype = {
        toString: function () {
          return this.v + "";
        }
      };
      var h = p(),
        f = p("@"),
        m = p(":"),
        g = p("."),
        v = p(),
        b = p(),
        y = p("\n"),
        w = p(),
        C = p("+"),
        x = p("#"),
        _ = p(),
        $ = p("mailto:"),
        k = p("?"),
        T = p("/"),
        E = p("_"),
        S = p(),
        D = p(),
        I = p(),
        A = p("{"),
        O = p("["),
        N = p("<"),
        P = p("("),
        j = p("}"),
        L = p("]"),
        M = p(">"),
        R = p(")"),
        H = p("&"),
        W = Object.freeze({
          Base: d,
          DOMAIN: h,
          AT: f,
          COLON: m,
          DOT: g,
          PUNCTUATION: v,
          LOCALHOST: b,
          NL: y,
          NUM: w,
          PLUS: C,
          POUND: x,
          QUERY: k,
          PROTOCOL: _,
          MAILTO: $,
          SLASH: T,
          UNDERSCORE: E,
          SYM: S,
          TLD: D,
          WS: I,
          OPENBRACE: A,
          OPENBRACKET: O,
          OPENANGLEBRACKET: N,
          OPENPAREN: P,
          CLOSEBRACE: j,
          CLOSEBRACKET: L,
          CLOSEANGLEBRACKET: M,
          CLOSEPAREN: R,
          AMPERSAND: H
        }),
        F = "aaa|aarp|abb|abbott|abogado|ac|academy|accenture|accountant|accountants|aco|active|actor|ad|adac|ads|adult|ae|aeg|aero|af|afl|ag|agency|ai|aig|airforce|airtel|al|alibaba|alipay|allfinanz|alsace|am|amica|amsterdam|an|analytics|android|ao|apartments|app|apple|aq|aquarelle|ar|aramco|archi|army|arpa|arte|as|asia|associates|at|attorney|au|auction|audi|audio|author|auto|autos|avianca|aw|ax|axa|az|azure|ba|baidu|band|bank|bar|barcelona|barclaycard|barclays|bargains|bauhaus|bayern|bb|bbc|bbva|bcg|bcn|bd|be|beats|beer|bentley|berlin|best|bet|bf|bg|bh|bharti|bi|bible|bid|bike|bing|bingo|bio|biz|bj|black|blackfriday|bloomberg|blue|bm|bms|bmw|bn|bnl|bnpparibas|bo|boats|boehringer|bom|bond|boo|book|boots|bosch|bostik|bot|boutique|br|bradesco|bridgestone|broadway|broker|brother|brussels|bs|bt|budapest|bugatti|build|builders|business|buy|buzz|bv|bw|by|bz|bzh|ca|cab|cafe|cal|call|camera|camp|cancerresearch|canon|capetown|capital|car|caravan|cards|care|career|careers|cars|cartier|casa|cash|casino|cat|catering|cba|cbn|cc|cd|ceb|center|ceo|cern|cf|cfa|cfd|cg|ch|chanel|channel|chase|chat|cheap|chloe|christmas|chrome|church|ci|cipriani|circle|cisco|citic|city|cityeats|ck|cl|claims|cleaning|click|clinic|clinique|clothing|cloud|club|clubmed|cm|cn|co|coach|codes|coffee|college|cologne|com|commbank|community|company|compare|computer|comsec|condos|construction|consulting|contact|contractors|cooking|cool|coop|corsica|country|coupon|coupons|courses|cr|credit|creditcard|creditunion|cricket|crown|crs|cruises|csc|cu|cuisinella|cv|cw|cx|cy|cymru|cyou|cz|dabur|dad|dance|date|dating|datsun|day|dclk|de|dealer|deals|degree|delivery|dell|deloitte|delta|democrat|dental|dentist|desi|design|dev|diamonds|diet|digital|direct|directory|discount|dj|dk|dm|dnp|do|docs|dog|doha|domains|download|drive|dubai|durban|dvag|dz|earth|eat|ec|edeka|edu|education|ee|eg|email|emerck|energy|engineer|engineering|enterprises|epson|equipment|er|erni|es|esq|estate|et|eu|eurovision|eus|events|everbank|exchange|expert|exposed|express|fage|fail|fairwinds|faith|family|fan|fans|farm|fashion|fast|feedback|ferrero|fi|film|final|finance|financial|firestone|firmdale|fish|fishing|fit|fitness|fj|fk|flickr|flights|florist|flowers|flsmidth|fly|fm|fo|foo|football|ford|forex|forsale|forum|foundation|fox|fr|fresenius|frl|frogans|frontier|fund|furniture|futbol|fyi|ga|gal|gallery|gallup|game|garden|gb|gbiz|gd|gdn|ge|gea|gent|genting|gf|gg|ggee|gh|gi|gift|gifts|gives|giving|gl|glass|gle|global|globo|gm|gmail|gmbh|gmo|gmx|gn|gold|goldpoint|golf|goo|goog|google|gop|got|gov|gp|gq|gr|grainger|graphics|gratis|green|gripe|group|gs|gt|gu|gucci|guge|guide|guitars|guru|gw|gy|hamburg|hangout|haus|hdfcbank|health|healthcare|help|helsinki|here|hermes|hiphop|hitachi|hiv|hk|hm|hn|hockey|holdings|holiday|homedepot|homes|honda|horse|host|hosting|hoteles|hotmail|house|how|hr|hsbc|ht|hu|hyundai|ibm|icbc|ice|icu|id|ie|ifm|iinet|il|im|immo|immobilien|in|industries|infiniti|info|ing|ink|institute|insurance|insure|int|international|investments|io|ipiranga|iq|ir|irish|is|iselect|ist|istanbul|it|itau|iwc|jaguar|java|jcb|je|jetzt|jewelry|jlc|jll|jm|jmp|jo|jobs|joburg|jot|joy|jp|jpmorgan|jprs|juegos|kaufen|kddi|ke|kerryhotels|kerrylogistics|kerryproperties|kfh|kg|kh|ki|kia|kim|kinder|kitchen|kiwi|km|kn|koeln|komatsu|kp|kpn|kr|krd|kred|kuokgroup|kw|ky|kyoto|kz|la|lacaixa|lamborghini|lamer|lancaster|land|landrover|lanxess|lasalle|lat|latrobe|law|lawyer|lb|lc|lds|lease|leclerc|legal|lexus|lgbt|li|liaison|lidl|life|lifeinsurance|lifestyle|lighting|like|limited|limo|lincoln|linde|link|live|living|lixil|lk|loan|loans|local|locus|lol|london|lotte|lotto|love|lr|ls|lt|ltd|ltda|lu|lupin|luxe|luxury|lv|ly|ma|madrid|maif|maison|makeup|man|management|mango|market|marketing|markets|marriott|mba|mc|md|me|med|media|meet|melbourne|meme|memorial|men|menu|meo|mg|mh|miami|microsoft|mil|mini|mk|ml|mm|mma|mn|mo|mobi|mobily|moda|moe|moi|mom|monash|money|montblanc|mormon|mortgage|moscow|motorcycles|mov|movie|movistar|mp|mq|mr|ms|mt|mtn|mtpc|mtr|mu|museum|mutuelle|mv|mw|mx|my|mz|na|nadex|nagoya|name|natura|navy|nc|ne|nec|net|netbank|network|neustar|new|news|nexus|nf|ng|ngo|nhk|ni|nico|nikon|ninja|nissan|nl|no|nokia|norton|nowruz|np|nr|nra|nrw|ntt|nu|nyc|nz|obi|office|okinawa|om|omega|one|ong|onl|online|ooo|oracle|orange|org|organic|origins|osaka|otsuka|ovh|pa|page|pamperedchef|panerai|paris|pars|partners|parts|party|passagens|pe|pet|pf|pg|ph|pharmacy|philips|photo|photography|photos|physio|piaget|pics|pictet|pictures|pid|pin|ping|pink|pizza|pk|pl|place|play|playstation|plumbing|plus|pm|pn|pohl|poker|porn|post|pr|praxi|press|pro|prod|productions|prof|promo|properties|property|protection|ps|pt|pub|pw|pwc|py|qa|qpon|quebec|quest|racing|re|read|realtor|realty|recipes|red|redstone|redumbrella|rehab|reise|reisen|reit|ren|rent|rentals|repair|report|republican|rest|restaurant|review|reviews|rexroth|rich|ricoh|rio|rip|ro|rocher|rocks|rodeo|room|rs|rsvp|ru|ruhr|run|rw|rwe|ryukyu|sa|saarland|safe|safety|sakura|sale|salon|samsung|sandvik|sandvikcoromant|sanofi|sap|sapo|sarl|sas|saxo|sb|sbs|sc|sca|scb|schaeffler|schmidt|scholarships|school|schule|schwarz|science|scor|scot|sd|se|seat|security|seek|select|sener|services|seven|sew|sex|sexy|sfr|sg|sh|sharp|shell|shia|shiksha|shoes|show|shriram|si|singles|site|sj|sk|ski|skin|sky|skype|sl|sm|smile|sn|sncf|so|soccer|social|softbank|software|sohu|solar|solutions|song|sony|soy|space|spiegel|spot|spreadbetting|sr|srl|st|stada|star|starhub|statefarm|statoil|stc|stcgroup|stockholm|storage|store|studio|study|style|su|sucks|supplies|supply|support|surf|surgery|suzuki|sv|swatch|swiss|sx|sy|sydney|symantec|systems|sz|tab|taipei|taobao|tatamotors|tatar|tattoo|tax|taxi|tc|tci|td|team|tech|technology|tel|telecity|telefonica|temasek|tennis|tf|tg|th|thd|theater|theatre|tickets|tienda|tiffany|tips|tires|tirol|tj|tk|tl|tm|tmall|tn|to|today|tokyo|tools|top|toray|toshiba|total|tours|town|toyota|toys|tp|tr|trade|trading|training|travel|travelers|travelersinsurance|trust|trv|tt|tube|tui|tunes|tushu|tv|tvs|tw|tz|ua|ubs|ug|uk|unicom|university|uno|uol|us|uy|uz|va|vacations|vana|vc|ve|vegas|ventures|verisign|versicherung|vet|vg|vi|viajes|video|viking|villas|vin|vip|virgin|vision|vista|vistaprint|viva|vlaanderen|vn|vodka|volkswagen|vote|voting|voto|voyage|vu|vuelos|wales|walter|wang|wanggou|watch|watches|weather|weatherchannel|webcam|weber|website|wed|wedding|weir|wf|whoswho|wien|wiki|williamhill|win|windows|wine|wme|wolterskluwer|work|works|world|ws|wtc|wtf|xbox|xerox|xin|xperia|xxx|xyz|yachts|yahoo|yamaxun|yandex|ye|yodobashi|yoga|yokohama|youtube|yt|za|zara|zero|zip|zm|zone|zuerich|zw".split("|"),
        q = "0123456789".split(""),
        U = "0123456789abcdefghijklmnopqrstuvwxyz".split(""),
        B = [" ", "\f", "\r", "\t", "\v", " ", " ", "᠎"],
        z = [],
        V = function (e) {
          return new l(e);
        },
        G = V(),
        K = V(w),
        Y = V(h),
        Q = V(),
        X = V(I);
      G.on("@", V(f)).on(".", V(g)).on("+", V(C)).on("#", V(x)).on("?", V(k)).on("/", V(T)).on("_", V(E)).on(":", V(m)).on("{", V(A)).on("[", V(O)).on("<", V(N)).on("(", V(P)).on("}", V(j)).on("]", V(L)).on(">", V(M)).on(")", V(R)).on("&", V(H)).on([",", ";", "!", '"', "'"], V(v)), G.on("\n", V(y)).on(B, X), X.on(B, X);
      for (var J = 0; J < F.length; J++) {
        var Z = u(F[J], G, D, h);
        z.push.apply(z, Z);
      }
      var ee = u("file", G, h, h),
        te = u("ftp", G, h, h),
        ne = u("http", G, h, h),
        ie = u("mailto", G, h, h);
      z.push.apply(z, ee), z.push.apply(z, te), z.push.apply(z, ne);
      var oe = ee.pop(),
        re = te.pop(),
        se = ne.pop(),
        ae = ie.pop(),
        le = V(h),
        ce = V(_),
        ue = V($);
      re.on("s", le).on(":", ce), se.on("s", le).on(":", ce), z.push(le), oe.on(":", ce), le.on(":", ce), ae.on(":", ue);
      var de = u("localhost", G, b, h);
      z.push.apply(z, de), G.on(q, K), K.on("-", Q).on(q, K).on(U, Y), Y.on("-", Q).on(U, Y);
      for (var pe = 0; pe < z.length; pe++) z[pe].on("-", Q).on(U, Y);
      Q.on("-", Q).on(q, Y).on(U, Y), G.defaultTransition = V(S);
      var he = function (e) {
        for (var t = e.replace(/[A-Z]/g, function (e) {
          return e.toLowerCase();
        }), n = e.length, i = [], o = 0; o < n;) {
          for (var r = G, s = null, a = 0, l = null, c = -1; o < n && (s = r.next(t[o]));) null, (r = s).accepts() ? (c = 0, l = r) : c >= 0 && c++, a++, o++;
          if (!(c < 0)) {
            o -= c, a -= c;
            var u = l.emit();
            i.push(new u(e.substr(o - a, a)));
          }
        }
        return i;
      },
        fe = G,
        me = Object.freeze({
          State: l,
          TOKENS: W,
          run: he,
          start: fe
        });

      function ge(e) {
        return e instanceof h || e instanceof D;
      }
      var ve = function (e) {
        e && (this.v = e);
      };
      ve.prototype = {
        type: "token",
        isLink: !1,
        toString: function () {
          for (var e = [], t = 0; t < this.v.length; t++) e.push(this.v[t].toString());
          return e.join("");
        },
        toHref: function () {
          return this.toString();
        },
        toObject: function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "http";
          return {
            type: this.type,
            value: this.toString(),
            href: this.toHref(e)
          };
        }
      };
      var be = n(ve, function (e) {
        e && (this.v = e);
      }, {
        type: "email",
        isLink: !0
      }),
        ye = n(ve, function (e) {
          e && (this.v = e);
        }, {
          type: "email",
          isLink: !0,
          toHref: function () {
            this.v;
            return "mailto:" + this.toString();
          }
        }),
        we = n(ve, function (e) {
          e && (this.v = e);
        }, {
          type: "text"
        }),
        Ce = n(ve, function (e) {
          e && (this.v = e);
        }, {
          type: "nl"
        }),
        xe = n(ve, function (e) {
          e && (this.v = e);
        }, {
          type: "url",
          isLink: !0,
          toHref: function () {
            for (var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "http", t = !1, n = !1, i = this.v, o = [], r = 0; i[r] instanceof _;) t = !0, o.push(i[r].toString().toLowerCase()), r++;
            for (; i[r] instanceof T;) n = !0, o.push(i[r].toString()), r++;
            for (; ge(i[r]);) o.push(i[r].toString().toLowerCase()), r++;
            for (; r < i.length; r++) o.push(i[r].toString());
            return o = o.join(""), t || n || (o = e + "://" + o), o;
          },
          hasProtocol: function () {
            return this.v[0] instanceof _;
          }
        }),
        _e = Object.freeze({
          Base: ve,
          MAILTOEMAIL: be,
          EMAIL: ye,
          NL: Ce,
          TEXT: we,
          URL: xe
        }),
        $e = function (e) {
          return new c(e);
        },
        ke = $e(),
        Te = $e(),
        Ee = $e(),
        Se = $e(),
        De = $e(),
        Ie = $e(),
        Ae = $e(),
        Oe = $e(xe),
        Ne = $e(),
        Pe = $e(xe),
        je = $e(xe),
        Le = $e(),
        Me = $e(),
        Re = $e(),
        He = $e(),
        We = $e(),
        Fe = $e(xe),
        qe = $e(xe),
        Ue = $e(xe),
        Be = $e(xe),
        ze = $e(),
        Ve = $e(),
        Ge = $e(),
        Ke = $e(),
        Ye = $e(),
        Qe = $e(),
        Xe = $e(ye),
        Je = $e(),
        Ze = $e(ye),
        et = $e(be),
        tt = $e(),
        nt = $e(),
        it = $e(),
        ot = $e(),
        rt = $e(Ce);
      ke.on(y, rt).on(_, Te).on($, Ee).on(T, Se), Te.on(T, Se), Se.on(T, De), ke.on(D, Ie).on(h, Ie).on(b, Oe).on(w, Ie), De.on(D, je).on(h, je).on(w, je).on(b, je), Ie.on(g, Ae), Ye.on(g, Qe), Ae.on(D, Oe).on(h, Ie).on(w, Ie).on(b, Ie), Qe.on(D, Xe).on(h, Ye).on(w, Ye).on(b, Ye), Oe.on(g, Ae), Xe.on(g, Qe), Oe.on(m, Ne).on(T, je), Ne.on(w, Pe), Pe.on(T, je), Xe.on(m, Je), Je.on(w, Ze);
      var st = [h, f, b, w, C, x, _, T, D, E, S, H],
        at = [m, g, k, v, j, L, M, R, A, O, N, P];
      je.on(A, Me).on(O, Re).on(N, He).on(P, We), Le.on(A, Me).on(O, Re).on(N, He).on(P, We), Me.on(j, je), Re.on(L, je), He.on(M, je), We.on(R, je), Fe.on(j, je), qe.on(L, je), Ue.on(M, je), Be.on(R, je), ze.on(j, je), Ve.on(L, je), Ge.on(M, je), Ke.on(R, je), Me.on(st, Fe), Re.on(st, qe), He.on(st, Ue), We.on(st, Be), Me.on(at, ze), Re.on(at, Ve), He.on(at, Ge), We.on(at, Ke), Fe.on(st, Fe), qe.on(st, qe), Ue.on(st, Ue), Be.on(st, Be), Fe.on(at, Fe), qe.on(at, qe), Ue.on(at, Ue), Be.on(at, Be), ze.on(st, Fe), Ve.on(st, qe), Ge.on(st, Ue), Ke.on(st, Be), ze.on(at, ze), Ve.on(at, Ve), Ge.on(at, Ge), Ke.on(at, Ke), je.on(st, je), Le.on(st, je), je.on(at, Le), Le.on(at, Le), Ee.on(D, et).on(h, et).on(w, et).on(b, et), et.on(st, et).on(at, tt), tt.on(st, et).on(at, tt);
      var lt = [h, w, C, x, k, E, S, H, D];
      Ie.on(lt, nt).on(f, it), Oe.on(lt, nt).on(f, it), Ae.on(lt, nt), nt.on(lt, nt).on(f, it).on(g, ot), ot.on(lt, nt), it.on(D, Ye).on(h, Ye).on(b, Xe);
      var ct = function (e) {
        for (var t = e.length, n = 0, i = [], o = []; n < t;) {
          for (var r = ke, s = null, a = null, l = 0, c = null, u = -1; n < t && !(s = r.next(e[n]));) o.push(e[n++]);
          for (; n < t && (a = s || r.next(e[n]));) s = null, (r = a).accepts() ? (u = 0, c = r) : u >= 0 && u++, n++, l++;
          if (u < 0)
            for (var d = n - l; d < n; d++) o.push(e[d]);
          else {
            o.length > 0 && (i.push(new we(o)), o = []), n -= u, l -= u;
            var p = c.emit();
            i.push(new p(e.slice(n - l, n)));
          }
        }
        return o.length > 0 && i.push(new we(o)), i;
      },
        ut = Object.freeze({
          State: c,
          TOKENS: _e,
          run: ct,
          start: ke
        });
      Array.isArray || (Array.isArray = function (e) {
        return "[object Array]" === Object.prototype.toString.call(e);
      });
      var dt = function (e) {
        return ct(he(e));
      };
      t.find = function (e) {
        for (var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null, n = dt(e), i = [], o = 0; o < n.length; o++) {
          var r = n[o];
          !r.isLink || t && r.type !== t || i.push(r.toObject());
        }
        return i;
      }, t.inherits = n, t.options = s, t.parser = ut, t.scanner = me, t.test = function (e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          n = dt(e);
        return 1 === n.length && n[0].isLink && (!t || n[0].type === t);
      }, t.tokenize = dt;
    }(self.linkify = self.linkify || {});
  }();
}, function (e, t, n) {
  "use strict";
  ! function (e, t) {
    var n = function (e) {
      var t = e.tokenize,
        n = e.options.Options;

      function i(e) {
        return e.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
      }

      function o(e) {
        return e.replace(/"/g, "&quot;");
      }

      function r(e) {
        if (!e) return "";
        var t = [];
        for (var n in e) {
          var i = e[n] + "";
          t.push(n + '="' + o(i) + '"');
        }
        return t.join(" ");
      }

      function s(e) {
        var s = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        s = new n(s);
        for (var a = t(e), l = [], c = 0; c < a.length; c++) {
          var u = a[c];
          if ("nl" === u.type && s.nl2br) l.push("<br>\n");
          else if (u.isLink && s.check(u)) {
            var d = s.resolve(u),
              p = d.formatted,
              h = d.formattedHref,
              f = d.tagName,
              m = d.className,
              g = d.target,
              v = d.attributes,
              b = "<" + f + ' href="' + o(h) + '"';
            m && (b += ' class="' + o(m) + '"'), g && (b += ' target="' + o(g) + '"'), v && (b += " " + r(v)), b += ">" + i(p) + "</" + f + ">", l.push(b);
          } else l.push(i(u.toString()));
        }
        return l.join("");
      }
      return String.prototype.linkify || (String.prototype.linkify = function (e) {
        return s(this, e);
      }), s;
    }(t);
    e.linkifyStr = n;
  }(window, linkify);
}, function (e, t) {
  function n() {
    $("#input-group-position").find(".form-tooltip-error").remove(), $("#position-coach").prop("checked") || $("#position-booster").prop("checked") || $("#position-writer").prop("checked") ? $("#position").removeAttr("data-validation") : $("#position").attr("data-validation", "[L>0]");
  }

  function i() {
    $("#platform-pc").prop("checked") ? ($("#battletag").attr("data-validation-regex", "/^.{3,12}#\\d{4,6}$/"), $("#input-group-battletag").removeClass("d-none")) : ($("#battletag").val(""), $("#battletag").removeAttr("data-validation-regex"), $("#input-group-battletag").addClass("d-none"));
  }

  function o() {
    $("#platform-psn").prop("checked") ? ($("#psn-online-id").attr("data-validation", "[L>=3, L<=16]"), $("#input-group-psn-online-id").removeClass("d-none")) : ($("#psn-online-id").val(""), $("#psn-online-id").removeAttr("data-validation"), $("#input-group-psn-online-id").addClass("d-none"));
  }

  function r() {
    $("#platform-xbl").prop("checked") ? ($("#xbox-gamertag").attr("data-validation", "[L>=1, L<=15]"), $("#input-group-xbox-gamertag").removeClass("d-none")) : ($("#xbox-gamertag").val(""), $("#xbox-gamertag").removeAttr("data-validation"), $("#input-group-xbox-gamertag").addClass("d-none"));
  }

  function s() {
    $("#input-group-platform").find(".form-tooltip-error").remove(), $("#platform-pc").prop("checked") || $("#platform-psn").prop("checked") || $("#platform-xbl").prop("checked") || $("#platform-switch").prop("checked") ? $("#platform").removeAttr("data-validation") : $("#platform").attr("data-validation", "[L>0]");
  }
  $("#form-jobs").length && ($("#position-coach").change(function () {
    n();
  }), $("#position-booster").change(function () {
    n();
  }), $("#position-writer").change(function () {
    n();
  }), $("#platform-pc").change(function () {
    i(), s();
  }), $("#platform-psn").change(function () {
    o(), s();
  }), $("#platform-xbl").change(function () {
    r(), s();
  }), $("#platform-switch").change(function () {
    s();
  }), $("#country").change(function () {
    $("#input-group-country").find(".form-tooltip-error").remove();
  }), i(), o(), r());
}, function (e, t) {
  var n, i;
  $("#form-profile-name").length && $("#form-profile-name").validate({
    submit: {
      settings: {
        inputContainer: ".input-group",
        errorListClass: "form-tooltip-error"
      },
      callback: {
        onSubmit: function (e, t) {
          clearTimeout(n);
          var i = e.find("button");
          return i.prop("disabled", !0), i.html("Updating...").removeClass("btn-info").removeClass("btn-danger").addClass("btn-info"), $.post($(e).attr("action"), t).done(function () {
            i.html("Updated").removeClass("btn-info").addClass("btn-success"), n = setTimeout(function () {
              e.find("button").html("Update").removeClass("btn-success").addClass("btn-info");
            }, 3e3);
          }).fail(function () {
            i.html("Try Again").removeClass("btn-info").addClass("btn-danger");
          }).always(function () {
            i.prop("disabled", !1);
          }), !1;
        }
      }
    }
  }).focusin(function () {
    $(this).find("button").html("Update").removeClass("btn-success").removeClass("btn-danger").addClass("btn-info");
  }), $("#form-profile-password").length && $("#form-profile-password").validate({
    submit: {
      settings: {
        inputContainer: ".input-group",
        errorListClass: "form-tooltip-error"
      },
      callback: {
        onSubmit: function (e, t) {
          clearTimeout(i);
          var n = e.find("button");
          return n.prop("disabled", !0), n.html("Changing password...").removeClass("btn-info").removeClass("btn-danger").addClass("btn-info"), $.post($(e).attr("action"), t).done(function () {
            n.html("Password changed").removeClass("btn-info").addClass("btn-success"), i = setTimeout(function () {
              e.find("button").html("Change password").removeClass("btn-success").addClass("btn-info");
            }, 3e3);
          }).fail(function () {
            n.html("Try Again").removeClass("btn-info").addClass("btn-danger");
          }).always(function () {
            n.prop("disabled", !1), e.find("input").val("");
          }), !1;
        }
      }
    }
  }).focusin(function () {
    $(this).find("button").html("Change password").removeClass("btn-success").removeClass("btn-danger").addClass("btn-info");
  });
}, function (e, t) {
  $("#form-setting").length > 0 && $("#form-setting .switch").click(function (e) {
    if (e.preventDefault(), !$(this).hasClass("disabled")) {
      var t = $(this).find("input[type=checkbox]"),
        n = $(this).attr("data-setting"),
        i = !t.prop("checked");
      t.prop("checked", i), $(this).addClass("disabled");
      var o = $(this),
        r = $(this).find(".switch-result");
      r.removeClass("d-none").removeClass("text-success").removeClass("text-danger").text("Please wait..."), $.ajax({
        method: "POST",
        url: $("#form-setting").attr("action"),
        data: {
          setting: n,
          value: i
        }
      }).done(function (e) {
        r.removeClass("d-none").addClass("text-success").removeClass("text-danger").text("Updated");
      }).fail(function () {
        t.prop("checked", !i), r.removeClass("d-none").removeClass("text-success").addClass("text-danger").text("Error");
      }).always(function () {
        o.removeClass("disabled"), setTimeout(() => {
          r.addClass("d-none");
        }, 3e3);
      });
    }
  });
}, function (e, t) { }]);