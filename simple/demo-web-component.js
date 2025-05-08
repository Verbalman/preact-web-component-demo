var B, f, Pe, P, oe, xe, He, Ee, ee, G, J, D = {}, Ne = [], ze = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i, M = Array.isArray;
function C(e, _) {
  for (var t in _) e[t] = _[t];
  return e;
}
function _e(e) {
  e && e.parentNode && e.parentNode.removeChild(e);
}
function K(e, _, t) {
  var n, r, o, l = {};
  for (o in _) o == "key" ? n = _[o] : o == "ref" ? r = _[o] : l[o] = _[o];
  if (arguments.length > 2 && (l.children = arguments.length > 3 ? B.call(arguments, 2) : t), typeof e == "function" && e.defaultProps != null) for (o in e.defaultProps) l[o] == null && (l[o] = e.defaultProps[o]);
  return R(e, l, n, r, null);
}
function R(e, _, t, n, r) {
  var o = { type: e, props: _, key: t, ref: n, __k: null, __: null, __b: 0, __e: null, __c: null, constructor: void 0, __v: r ?? ++Pe, __i: -1, __u: 0 };
  return r == null && f.vnode != null && f.vnode(o), o;
}
function H(e) {
  return e.children;
}
function $(e, _) {
  this.props = e, this.context = _;
}
function E(e, _) {
  if (_ == null) return e.__ ? E(e.__, e.__i + 1) : null;
  for (var t; _ < e.__k.length; _++) if ((t = e.__k[_]) != null && t.__e != null) return t.__e;
  return typeof e.type == "function" ? E(e) : null;
}
function Ae(e) {
  var _, t;
  if ((e = e.__) != null && e.__c != null) {
    for (e.__e = e.__c.base = null, _ = 0; _ < e.__k.length; _++) if ((t = e.__k[_]) != null && t.__e != null) {
      e.__e = e.__c.base = t.__e;
      break;
    }
    return Ae(e);
  }
}
function ie(e) {
  (!e.__d && (e.__d = !0) && P.push(e) && !I.__r++ || oe != f.debounceRendering) && ((oe = f.debounceRendering) || xe)(I);
}
function I() {
  for (var e, _, t, n, r, o, l, u = 1; P.length; ) P.length > u && P.sort(He), e = P.shift(), u = P.length, e.__d && (t = void 0, r = (n = (_ = e).__v).__e, o = [], l = [], _.__P && ((t = C({}, n)).__v = n.__v + 1, f.vnode && f.vnode(t), te(_.__P, t, n, _.__n, _.__P.namespaceURI, 32 & n.__u ? [r] : null, o, r ?? E(n), !!(32 & n.__u), l), t.__v = n.__v, t.__.__k[t.__i] = t, De(o, t, l), t.__e != r && Ae(t)));
  I.__r = 0;
}
function Ue(e, _, t, n, r, o, l, u, c, a, p) {
  var i, h, s, g, k, b, d = n && n.__k || Ne, v = _.length;
  for (c = Be(t, _, d, c, v), i = 0; i < v; i++) (s = t.__k[i]) != null && (h = s.__i == -1 ? D : d[s.__i] || D, s.__i = i, b = te(e, s, h, r, o, l, u, c, a, p), g = s.__e, s.ref && h.ref != s.ref && (h.ref && ne(h.ref, null, s), p.push(s.ref, s.__c || g, s)), k == null && g != null && (k = g), 4 & s.__u || h.__k === s.__k ? c = Te(s, c, e) : typeof s.type == "function" && b !== void 0 ? c = b : g && (c = g.nextSibling), s.__u &= -7);
  return t.__e = k, c;
}
function Be(e, _, t, n, r) {
  var o, l, u, c, a, p = t.length, i = p, h = 0;
  for (e.__k = new Array(r), o = 0; o < r; o++) (l = _[o]) != null && typeof l != "boolean" && typeof l != "function" ? (c = o + h, (l = e.__k[o] = typeof l == "string" || typeof l == "number" || typeof l == "bigint" || l.constructor == String ? R(null, l, null, null, null) : M(l) ? R(H, { children: l }, null, null, null) : l.constructor == null && l.__b > 0 ? R(l.type, l.props, l.key, l.ref ? l.ref : null, l.__v) : l).__ = e, l.__b = e.__b + 1, u = null, (a = l.__i = Ve(l, t, c, i)) != -1 && (i--, (u = t[a]) && (u.__u |= 2)), u == null || u.__v == null ? (a == -1 && (r > p ? h-- : r < p && h++), typeof l.type != "function" && (l.__u |= 4)) : a != c && (a == c - 1 ? h-- : a == c + 1 ? h++ : (a > c ? h-- : h++, l.__u |= 4))) : e.__k[o] = null;
  if (i) for (o = 0; o < p; o++) (u = t[o]) != null && (2 & u.__u) == 0 && (u.__e == n && (n = E(u)), Le(u, u));
  return n;
}
function Te(e, _, t) {
  var n, r;
  if (typeof e.type == "function") {
    for (n = e.__k, r = 0; n && r < n.length; r++) n[r] && (n[r].__ = e, _ = Te(n[r], _, t));
    return _;
  }
  e.__e != _ && (_ && e.type && !t.contains(_) && (_ = E(e)), t.insertBefore(e.__e, _ || null), _ = e.__e);
  do
    _ = _ && _.nextSibling;
  while (_ != null && _.nodeType == 8);
  return _;
}
function z(e, _) {
  return _ = _ || [], e == null || typeof e == "boolean" || (M(e) ? e.some(function(t) {
    z(t, _);
  }) : _.push(e)), _;
}
function Ve(e, _, t, n) {
  var r, o, l = e.key, u = e.type, c = _[t];
  if (c === null && e.key == null || c && l == c.key && u == c.type && (2 & c.__u) == 0) return t;
  if (n > (c != null && (2 & c.__u) == 0 ? 1 : 0)) for (r = t - 1, o = t + 1; r >= 0 || o < _.length; ) {
    if (r >= 0) {
      if ((c = _[r]) && (2 & c.__u) == 0 && l == c.key && u == c.type) return r;
      r--;
    }
    if (o < _.length) {
      if ((c = _[o]) && (2 & c.__u) == 0 && l == c.key && u == c.type) return o;
      o++;
    }
  }
  return -1;
}
function le(e, _, t) {
  _[0] == "-" ? e.setProperty(_, t ?? "") : e[_] = t == null ? "" : typeof t != "number" || ze.test(_) ? t : t + "px";
}
function W(e, _, t, n, r) {
  var o;
  e: if (_ == "style") if (typeof t == "string") e.style.cssText = t;
  else {
    if (typeof n == "string" && (e.style.cssText = n = ""), n) for (_ in n) t && _ in t || le(e.style, _, "");
    if (t) for (_ in t) n && t[_] == n[_] || le(e.style, _, t[_]);
  }
  else if (_[0] == "o" && _[1] == "n") o = _ != (_ = _.replace(Ee, "$1")), _ = _.toLowerCase() in e || _ == "onFocusOut" || _ == "onFocusIn" ? _.toLowerCase().slice(2) : _.slice(2), e.l || (e.l = {}), e.l[_ + o] = t, t ? n ? t.u = n.u : (t.u = ee, e.addEventListener(_, o ? J : G, o)) : e.removeEventListener(_, o ? J : G, o);
  else {
    if (r == "http://www.w3.org/2000/svg") _ = _.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
    else if (_ != "width" && _ != "height" && _ != "href" && _ != "list" && _ != "form" && _ != "tabIndex" && _ != "download" && _ != "rowSpan" && _ != "colSpan" && _ != "role" && _ != "popover" && _ in e) try {
      e[_] = t ?? "";
      break e;
    } catch {
    }
    typeof t == "function" || (t == null || t === !1 && _[4] != "-" ? e.removeAttribute(_) : e.setAttribute(_, _ == "popover" && t == 1 ? "" : t));
  }
}
function ue(e) {
  return function(_) {
    if (this.l) {
      var t = this.l[_.type + e];
      if (_.t == null) _.t = ee++;
      else if (_.t < t.u) return;
      return t(f.event ? f.event(_) : _);
    }
  };
}
function te(e, _, t, n, r, o, l, u, c, a) {
  var p, i, h, s, g, k, b, d, v, N, S, L, A, re, O, U, V, w = _.type;
  if (_.constructor != null) return null;
  128 & t.__u && (c = !!(32 & t.__u), o = [u = _.__e = t.__e]), (p = f.__b) && p(_);
  e: if (typeof w == "function") try {
    if (d = _.props, v = "prototype" in w && w.prototype.render, N = (p = w.contextType) && n[p.__c], S = p ? N ? N.props.value : p.__ : n, t.__c ? b = (i = _.__c = t.__c).__ = i.__E : (v ? _.__c = i = new w(d, S) : (_.__c = i = new $(d, S), i.constructor = w, i.render = Ze), N && N.sub(i), i.props = d, i.state || (i.state = {}), i.context = S, i.__n = n, h = i.__d = !0, i.__h = [], i._sb = []), v && i.__s == null && (i.__s = i.state), v && w.getDerivedStateFromProps != null && (i.__s == i.state && (i.__s = C({}, i.__s)), C(i.__s, w.getDerivedStateFromProps(d, i.__s))), s = i.props, g = i.state, i.__v = _, h) v && w.getDerivedStateFromProps == null && i.componentWillMount != null && i.componentWillMount(), v && i.componentDidMount != null && i.__h.push(i.componentDidMount);
    else {
      if (v && w.getDerivedStateFromProps == null && d !== s && i.componentWillReceiveProps != null && i.componentWillReceiveProps(d, S), !i.__e && i.shouldComponentUpdate != null && i.shouldComponentUpdate(d, i.__s, S) === !1 || _.__v == t.__v) {
        for (_.__v != t.__v && (i.props = d, i.state = i.__s, i.__d = !1), _.__e = t.__e, _.__k = t.__k, _.__k.some(function(T) {
          T && (T.__ = _);
        }), L = 0; L < i._sb.length; L++) i.__h.push(i._sb[L]);
        i._sb = [], i.__h.length && l.push(i);
        break e;
      }
      i.componentWillUpdate != null && i.componentWillUpdate(d, i.__s, S), v && i.componentDidUpdate != null && i.__h.push(function() {
        i.componentDidUpdate(s, g, k);
      });
    }
    if (i.context = S, i.props = d, i.__P = e, i.__e = !1, A = f.__r, re = 0, v) {
      for (i.state = i.__s, i.__d = !1, A && A(_), p = i.render(i.props, i.state, i.context), O = 0; O < i._sb.length; O++) i.__h.push(i._sb[O]);
      i._sb = [];
    } else do
      i.__d = !1, A && A(_), p = i.render(i.props, i.state, i.context), i.state = i.__s;
    while (i.__d && ++re < 25);
    i.state = i.__s, i.getChildContext != null && (n = C(C({}, n), i.getChildContext())), v && !h && i.getSnapshotBeforeUpdate != null && (k = i.getSnapshotBeforeUpdate(s, g)), U = p, p != null && p.type === H && p.key == null && (U = Me(p.props.children)), u = Ue(e, M(U) ? U : [U], _, t, n, r, o, l, u, c, a), i.base = _.__e, _.__u &= -161, i.__h.length && l.push(i), b && (i.__E = i.__ = null);
  } catch (T) {
    if (_.__v = null, c || o != null) if (T.then) {
      for (_.__u |= c ? 160 : 128; u && u.nodeType == 8 && u.nextSibling; ) u = u.nextSibling;
      o[o.indexOf(u)] = null, _.__e = u;
    } else for (V = o.length; V--; ) _e(o[V]);
    else _.__e = t.__e, _.__k = t.__k;
    f.__e(T, _, t);
  }
  else o == null && _.__v == t.__v ? (_.__k = t.__k, _.__e = t.__e) : u = _.__e = qe(t.__e, _, t, n, r, o, l, c, a);
  return (p = f.diffed) && p(_), 128 & _.__u ? void 0 : u;
}
function De(e, _, t) {
  for (var n = 0; n < t.length; n++) ne(t[n], t[++n], t[++n]);
  f.__c && f.__c(_, e), e.some(function(r) {
    try {
      e = r.__h, r.__h = [], e.some(function(o) {
        o.call(r);
      });
    } catch (o) {
      f.__e(o, r.__v);
    }
  });
}
function Me(e) {
  return typeof e != "object" || e == null || e.__b && e.__b > 0 ? e : M(e) ? e.map(Me) : C({}, e);
}
function qe(e, _, t, n, r, o, l, u, c) {
  var a, p, i, h, s, g, k, b = t.props, d = _.props, v = _.type;
  if (v == "svg" ? r = "http://www.w3.org/2000/svg" : v == "math" ? r = "http://www.w3.org/1998/Math/MathML" : r || (r = "http://www.w3.org/1999/xhtml"), o != null) {
    for (a = 0; a < o.length; a++) if ((s = o[a]) && "setAttribute" in s == !!v && (v ? s.localName == v : s.nodeType == 3)) {
      e = s, o[a] = null;
      break;
    }
  }
  if (e == null) {
    if (v == null) return document.createTextNode(d);
    e = document.createElementNS(r, v, d.is && d), u && (f.__m && f.__m(_, o), u = !1), o = null;
  }
  if (v == null) b === d || u && e.data == d || (e.data = d);
  else {
    if (o = o && B.call(e.childNodes), b = t.props || D, !u && o != null) for (b = {}, a = 0; a < e.attributes.length; a++) b[(s = e.attributes[a]).name] = s.value;
    for (a in b) if (s = b[a], a != "children") {
      if (a == "dangerouslySetInnerHTML") i = s;
      else if (!(a in d)) {
        if (a == "value" && "defaultValue" in d || a == "checked" && "defaultChecked" in d) continue;
        W(e, a, null, s, r);
      }
    }
    for (a in d) s = d[a], a == "children" ? h = s : a == "dangerouslySetInnerHTML" ? p = s : a == "value" ? g = s : a == "checked" ? k = s : u && typeof s != "function" || b[a] === s || W(e, a, s, b[a], r);
    if (p) u || i && (p.__html == i.__html || p.__html == e.innerHTML) || (e.innerHTML = p.__html), _.__k = [];
    else if (i && (e.innerHTML = ""), Ue(_.type == "template" ? e.content : e, M(h) ? h : [h], _, t, n, v == "foreignObject" ? "http://www.w3.org/1999/xhtml" : r, o, l, o ? o[0] : t.__k && E(t, 0), u, c), o != null) for (a = o.length; a--; ) _e(o[a]);
    u || (a = "value", v == "progress" && g == null ? e.removeAttribute("value") : g != null && (g !== e[a] || v == "progress" && !g || v == "option" && g != b[a]) && W(e, a, g, b[a], r), a = "checked", k != null && k != e[a] && W(e, a, k, b[a], r));
  }
  return e;
}
function ne(e, _, t) {
  try {
    if (typeof e == "function") {
      var n = typeof e.__u == "function";
      n && e.__u(), n && _ == null || (e.__u = e(_));
    } else e.current = _;
  } catch (r) {
    f.__e(r, t);
  }
}
function Le(e, _, t) {
  var n, r;
  if (f.unmount && f.unmount(e), (n = e.ref) && (n.current && n.current != e.__e || ne(n, null, _)), (n = e.__c) != null) {
    if (n.componentWillUnmount) try {
      n.componentWillUnmount();
    } catch (o) {
      f.__e(o, _);
    }
    n.base = n.__P = null;
  }
  if (n = e.__k) for (r = 0; r < n.length; r++) n[r] && Le(n[r], _, t || typeof e.type != "function");
  t || _e(e.__e), e.__c = e.__ = e.__e = void 0;
}
function Ze(e, _, t) {
  return this.constructor(e, t);
}
function Ge(e, _, t) {
  var n, r, o, l;
  _ == document && (_ = document.documentElement), f.__ && f.__(e, _), r = (n = !1) ? null : _.__k, o = [], l = [], te(_, e = _.__k = K(H, null, [e]), r || D, D, _.namespaceURI, r ? null : _.firstChild ? B.call(_.childNodes) : null, o, r ? r.__e : _.firstChild, n, l), De(o, e, l);
}
B = Ne.slice, f = { __e: function(e, _, t, n) {
  for (var r, o, l; _ = _.__; ) if ((r = _.__c) && !r.__) try {
    if ((o = r.constructor) && o.getDerivedStateFromError != null && (r.setState(o.getDerivedStateFromError(e)), l = r.__d), r.componentDidCatch != null && (r.componentDidCatch(e, n || {}), l = r.__d), l) return r.__E = r;
  } catch (u) {
    e = u;
  }
  throw e;
} }, Pe = 0, $.prototype.setState = function(e, _) {
  var t;
  t = this.__s != null && this.__s != this.state ? this.__s : this.__s = C({}, this.state), typeof e == "function" && (e = e(C({}, t), this.props)), e && C(t, e), e != null && this.__v && (_ && this._sb.push(_), ie(this));
}, $.prototype.forceUpdate = function(e) {
  this.__v && (this.__e = !0, e && this.__h.push(e), ie(this));
}, $.prototype.render = H, P = [], xe = typeof Promise == "function" ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, He = function(e, _) {
  return e.__v.__b - _.__v.__b;
}, I.__r = 0, Ee = /(PointerCapture)$|Capture$/i, ee = 0, G = ue(!1), J = ue(!0);
var Je = 0;
function x(e, _, t, n, r, o) {
  _ || (_ = {});
  var l, u, c = _;
  if ("ref" in c) for (u in c = {}, _) u == "ref" ? l = _[u] : c[u] = _[u];
  var a = { type: e, props: c, key: t, ref: l, __k: null, __: null, __b: 0, __e: null, __c: null, constructor: void 0, __v: --Je, __i: -1, __u: 0, __source: r, __self: o };
  if (typeof e == "function" && (l = e.defaultProps)) for (u in l) c[u] === void 0 && (c[u] = l[u]);
  return f.vnode && f.vnode(a), a;
}
var Q, m, q, ae, X = 0, Oe = [], y = f, ce = y.__b, se = y.__r, fe = y.diffed, pe = y.__c, he = y.unmount, de = y.__;
function Ke(e, _) {
  y.__h && y.__h(m, e, X || _), X = 0;
  var t = m.__H || (m.__H = { __: [], __h: [] });
  return e >= t.__.length && t.__.push({}), t.__[e];
}
function Qe(e) {
  return X = 1, Xe(We, e);
}
function Xe(e, _, t) {
  var n = Ke(Q++, 2);
  if (n.t = e, !n.__c && (n.__ = [t ? t(_) : We(void 0, _), function(u) {
    var c = n.__N ? n.__N[0] : n.__[0], a = n.t(c, u);
    c !== a && (n.__N = [a, n.__[1]], n.__c.setState({}));
  }], n.__c = m, !m.__f)) {
    var r = function(u, c, a) {
      if (!n.__c.__H) return !0;
      var p = n.__c.__H.__.filter(function(h) {
        return !!h.__c;
      });
      if (p.every(function(h) {
        return !h.__N;
      })) return !o || o.call(this, u, c, a);
      var i = n.__c.props !== u;
      return p.forEach(function(h) {
        if (h.__N) {
          var s = h.__[0];
          h.__ = h.__N, h.__N = void 0, s !== h.__[0] && (i = !0);
        }
      }), o && o.call(this, u, c, a) || i;
    };
    m.__f = !0;
    var o = m.shouldComponentUpdate, l = m.componentWillUpdate;
    m.componentWillUpdate = function(u, c, a) {
      if (this.__e) {
        var p = o;
        o = void 0, r(u, c, a), o = p;
      }
      l && l.call(this, u, c, a);
    }, m.shouldComponentUpdate = r;
  }
  return n.__N || n.__;
}
function Ye() {
  for (var e; e = Oe.shift(); ) if (e.__P && e.__H) try {
    e.__H.__h.forEach(j), e.__H.__h.forEach(Y), e.__H.__h = [];
  } catch (_) {
    e.__H.__h = [], y.__e(_, e.__v);
  }
}
y.__b = function(e) {
  m = null, ce && ce(e);
}, y.__ = function(e, _) {
  e && _.__k && _.__k.__m && (e.__m = _.__k.__m), de && de(e, _);
}, y.__r = function(e) {
  se && se(e), Q = 0;
  var _ = (m = e.__c).__H;
  _ && (q === m ? (_.__h = [], m.__h = [], _.__.forEach(function(t) {
    t.__N && (t.__ = t.__N), t.u = t.__N = void 0;
  })) : (_.__h.forEach(j), _.__h.forEach(Y), _.__h = [], Q = 0)), q = m;
}, y.diffed = function(e) {
  fe && fe(e);
  var _ = e.__c;
  _ && _.__H && (_.__H.__h.length && (Oe.push(_) !== 1 && ae === y.requestAnimationFrame || ((ae = y.requestAnimationFrame) || e_)(Ye)), _.__H.__.forEach(function(t) {
    t.u && (t.__H = t.u), t.u = void 0;
  })), q = m = null;
}, y.__c = function(e, _) {
  _.some(function(t) {
    try {
      t.__h.forEach(j), t.__h = t.__h.filter(function(n) {
        return !n.__ || Y(n);
      });
    } catch (n) {
      _.some(function(r) {
        r.__h && (r.__h = []);
      }), _ = [], y.__e(n, t.__v);
    }
  }), pe && pe(e, _);
}, y.unmount = function(e) {
  he && he(e);
  var _, t = e.__c;
  t && t.__H && (t.__H.__.forEach(function(n) {
    try {
      j(n);
    } catch (r) {
      _ = r;
    }
  }), t.__H = void 0, _ && y.__e(_, t.__v));
};
var ve = typeof requestAnimationFrame == "function";
function e_(e) {
  var _, t = function() {
    clearTimeout(n), ve && cancelAnimationFrame(_), setTimeout(e);
  }, n = setTimeout(t, 100);
  ve && (_ = requestAnimationFrame(t));
}
function j(e) {
  var _ = m, t = e.__c;
  typeof t == "function" && (e.__c = void 0, t()), m = _;
}
function Y(e) {
  var _ = m;
  e.__c = e.__(), m = _;
}
function We(e, _) {
  return typeof _ == "function" ? _(e) : _;
}
function __(e, _) {
  for (var t in _) e[t] = _[t];
  return e;
}
function me(e, _) {
  for (var t in e) if (t !== "__source" && !(t in _)) return !0;
  for (var n in _) if (n !== "__source" && e[n] !== _[n]) return !0;
  return !1;
}
function ye(e, _) {
  this.props = e, this.context = _;
}
(ye.prototype = new $()).isPureReactComponent = !0, ye.prototype.shouldComponentUpdate = function(e, _) {
  return me(this.props, e) || me(this.state, _);
};
var ge = f.__b;
f.__b = function(e) {
  e.type && e.type.__f && e.ref && (e.props.ref = e.ref, e.ref = null), ge && ge(e);
};
var t_ = f.__e;
f.__e = function(e, _, t, n) {
  if (e.then) {
    for (var r, o = _; o = o.__; ) if ((r = o.__c) && r.__c) return _.__e == null && (_.__e = t.__e, _.__k = t.__k), r.__c(e, _);
  }
  t_(e, _, t, n);
};
var be = f.unmount;
function Fe(e, _, t) {
  return e && (e.__c && e.__c.__H && (e.__c.__H.__.forEach(function(n) {
    typeof n.__c == "function" && n.__c();
  }), e.__c.__H = null), (e = __({}, e)).__c != null && (e.__c.__P === t && (e.__c.__P = _), e.__c.__e = !0, e.__c = null), e.__k = e.__k && e.__k.map(function(n) {
    return Fe(n, _, t);
  })), e;
}
function Re(e, _, t) {
  return e && t && (e.__v = null, e.__k = e.__k && e.__k.map(function(n) {
    return Re(n, _, t);
  }), e.__c && e.__c.__P === _ && (e.__e && t.appendChild(e.__e), e.__c.__e = !0, e.__c.__P = t)), e;
}
function Z() {
  this.__u = 0, this.o = null, this.__b = null;
}
function je(e) {
  var _ = e.__.__c;
  return _ && _.__a && _.__a(e);
}
function F() {
  this.i = null, this.l = null;
}
f.unmount = function(e) {
  var _ = e.__c;
  _ && _.__R && _.__R(), _ && 32 & e.__u && (e.type = null), be && be(e);
}, (Z.prototype = new $()).__c = function(e, _) {
  var t = _.__c, n = this;
  n.o == null && (n.o = []), n.o.push(t);
  var r = je(n.__v), o = !1, l = function() {
    o || (o = !0, t.__R = null, r ? r(u) : u());
  };
  t.__R = l;
  var u = function() {
    if (!--n.__u) {
      if (n.state.__a) {
        var c = n.state.__a;
        n.__v.__k[0] = Re(c, c.__c.__P, c.__c.__O);
      }
      var a;
      for (n.setState({ __a: n.__b = null }); a = n.o.pop(); ) a.forceUpdate();
    }
  };
  n.__u++ || 32 & _.__u || n.setState({ __a: n.__b = n.__v.__k[0] }), e.then(l, l);
}, Z.prototype.componentWillUnmount = function() {
  this.o = [];
}, Z.prototype.render = function(e, _) {
  if (this.__b) {
    if (this.__v.__k) {
      var t = document.createElement("div"), n = this.__v.__k[0].__c;
      this.__v.__k[0] = Fe(this.__b, t, n.__O = n.__P);
    }
    this.__b = null;
  }
  var r = _.__a && K(H, null, e.fallback);
  return r && (r.__u &= -33), [K(H, null, _.__a ? null : e.children), r];
};
var ke = function(e, _, t) {
  if (++t[1] === t[0] && e.l.delete(_), e.props.revealOrder && (e.props.revealOrder[0] !== "t" || !e.l.size)) for (t = e.i; t; ) {
    for (; t.length > 3; ) t.pop()();
    if (t[1] < t[0]) break;
    e.i = t = t[2];
  }
};
(F.prototype = new $()).__a = function(e) {
  var _ = this, t = je(_.__v), n = _.l.get(e);
  return n[0]++, function(r) {
    var o = function() {
      _.props.revealOrder ? (n.push(r), ke(_, e, n)) : r();
    };
    t ? t(o) : o();
  };
}, F.prototype.render = function(e) {
  this.i = null, this.l = /* @__PURE__ */ new Map();
  var _ = z(e.children);
  e.revealOrder && e.revealOrder[0] === "b" && _.reverse();
  for (var t = _.length; t--; ) this.l.set(_[t], this.i = [1, 0, this.i]);
  return e.children;
}, F.prototype.componentDidUpdate = F.prototype.componentDidMount = function() {
  var e = this;
  this.l.forEach(function(_, t) {
    ke(e, t, _);
  });
};
var n_ = typeof Symbol < "u" && Symbol.for && Symbol.for("react.element") || 60103, r_ = /^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|image(!S)|letter|lighting|marker(?!H|W|U)|overline|paint|pointer|shape|stop|strikethrough|stroke|text(?!L)|transform|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/, o_ = /^on(Ani|Tra|Tou|BeforeInp|Compo)/, i_ = /[A-Z0-9]/g, l_ = typeof document < "u", u_ = function(e) {
  return (typeof Symbol < "u" && typeof Symbol() == "symbol" ? /fil|che|rad/ : /fil|che|ra/).test(e);
};
$.prototype.isReactComponent = {}, ["componentWillMount", "componentWillReceiveProps", "componentWillUpdate"].forEach(function(e) {
  Object.defineProperty($.prototype, e, { configurable: !0, get: function() {
    return this["UNSAFE_" + e];
  }, set: function(_) {
    Object.defineProperty(this, e, { configurable: !0, writable: !0, value: _ });
  } });
});
var we = f.event;
function a_() {
}
function c_() {
  return this.cancelBubble;
}
function s_() {
  return this.defaultPrevented;
}
f.event = function(e) {
  return we && (e = we(e)), e.persist = a_, e.isPropagationStopped = c_, e.isDefaultPrevented = s_, e.nativeEvent = e;
};
var f_ = { enumerable: !1, configurable: !0, get: function() {
  return this.class;
} }, Ce = f.vnode;
f.vnode = function(e) {
  typeof e.type == "string" && function(_) {
    var t = _.props, n = _.type, r = {}, o = n.indexOf("-") === -1;
    for (var l in t) {
      var u = t[l];
      if (!(l === "value" && "defaultValue" in t && u == null || l_ && l === "children" && n === "noscript" || l === "class" || l === "className")) {
        var c = l.toLowerCase();
        l === "defaultValue" && "value" in t && t.value == null ? l = "value" : l === "download" && u === !0 ? u = "" : c === "translate" && u === "no" ? u = !1 : c[0] === "o" && c[1] === "n" ? c === "ondoubleclick" ? l = "ondblclick" : c !== "onchange" || n !== "input" && n !== "textarea" || u_(t.type) ? c === "onfocus" ? l = "onfocusin" : c === "onblur" ? l = "onfocusout" : o_.test(l) && (l = c) : c = l = "oninput" : o && r_.test(l) ? l = l.replace(i_, "-$&").toLowerCase() : u === null && (u = void 0), c === "oninput" && r[l = c] && (l = "oninputCapture"), r[l] = u;
      }
    }
    n == "select" && r.multiple && Array.isArray(r.value) && (r.value = z(t.children).forEach(function(a) {
      a.props.selected = r.value.indexOf(a.props.value) != -1;
    })), n == "select" && r.defaultValue != null && (r.value = z(t.children).forEach(function(a) {
      a.props.selected = r.multiple ? r.defaultValue.indexOf(a.props.value) != -1 : r.defaultValue == a.props.value;
    })), t.class && !t.className ? (r.class = t.class, Object.defineProperty(r, "className", f_)) : (t.className && !t.class || t.class && t.className) && (r.class = r.className = t.className), _.props = r;
  }(e), e.$$typeof = n_, Ce && Ce(e);
};
var $e = f.__r;
f.__r = function(e) {
  $e && $e(e), e.__c;
};
var Se = f.diffed;
f.diffed = function(e) {
  Se && Se(e);
  var _ = e.props, t = e.__e;
  t != null && e.type === "textarea" && "value" in _ && _.value !== t.value && (t.value = _.value == null ? "" : _.value);
};
function p_({ name: e, startCount: _, onChangeCount: t }) {
  const [n, r] = Qe(_ ?? 0);
  return /* @__PURE__ */ x("div", { children: [
    /* @__PURE__ */ x("p", { children: [
      "Hello, ",
      e,
      "!"
    ] }),
    /* @__PURE__ */ x(
      "button",
      {
        onClick: () => {
          r(n + 1), t(n + 1);
        },
        children: [
          "Clicked ",
          n,
          " times"
        ]
      }
    )
  ] });
}
function h_({ displayName: e, startCount: _, onChangeCount: t }) {
  return /* @__PURE__ */ x("div", { children: /* @__PURE__ */ x(
    p_,
    {
      name: e,
      startCount: _,
      onChangeCount: t
    }
  ) });
}
const d_ = ":root{font-family:Inter,system-ui,Avenir,Helvetica,Arial,sans-serif;line-height:1.5;font-weight:400;color:#222;background-color:#fff;font-synthesis:none;text-rendering:optimizeLegibility;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;-webkit-text-size-adjust:100%}body{margin:0;display:flex;align-items:center;min-height:100vh}p{color:green}", Ie = new CSSStyleSheet();
Ie.replaceSync(d_);
class v_ extends HTMLElement {
  constructor() {
    super();
    const _ = this.attachShadow({ mode: "open" });
    _.adoptedStyleSheets = [Ie];
  }
  connectedCallback() {
    this.render();
  }
  static get observedAttributes() {
    return ["displayName", "startCount"];
  }
  attributeChangedCallback() {
    this.render();
  }
  render() {
    const _ = this.getAttribute("displayName") || "Test", t = this.getAttribute("startCount") || 0;
    Ge(
      /* @__PURE__ */ x(
        h_,
        {
          displayName: _,
          startCount: t,
          onChangeCount: (n) => {
            this.dispatchEvent(
              new CustomEvent("onChangeCount", {
                detail: { count: n },
                bubbles: !0,
                composed: !0
              })
            );
          }
        }
      ),
      this.shadowRoot
    );
  }
}
customElements.define("demo-web-component", v_);
