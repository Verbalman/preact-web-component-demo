var B, f, xe, x, re, He, Se, Ne, ee, G, J, D = {}, Ee = [], Ie = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i, M = Array.isArray;
function C(e, _) {
  for (var t in _) e[t] = _[t];
  return e;
}
function _e(e) {
  e && e.parentNode && e.parentNode.removeChild(e);
}
function K(e, _, t) {
  var n, o, r, l = {};
  for (r in _) r == "key" ? n = _[r] : r == "ref" ? o = _[r] : l[r] = _[r];
  if (arguments.length > 2 && (l.children = arguments.length > 3 ? B.call(arguments, 2) : t), typeof e == "function" && e.defaultProps != null) for (r in e.defaultProps) l[r] == null && (l[r] = e.defaultProps[r]);
  return R(e, l, n, o, null);
}
function R(e, _, t, n, o) {
  var r = { type: e, props: _, key: t, ref: n, __k: null, __: null, __b: 0, __e: null, __c: null, constructor: void 0, __v: o ?? ++xe, __i: -1, __u: 0 };
  return o == null && f.vnode != null && f.vnode(r), r;
}
function S(e) {
  return e.children;
}
function $(e, _) {
  this.props = e, this.context = _;
}
function N(e, _) {
  if (_ == null) return e.__ ? N(e.__, e.__i + 1) : null;
  for (var t; _ < e.__k.length; _++) if ((t = e.__k[_]) != null && t.__e != null) return t.__e;
  return typeof e.type == "function" ? N(e) : null;
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
  (!e.__d && (e.__d = !0) && x.push(e) && !I.__r++ || re != f.debounceRendering) && ((re = f.debounceRendering) || He)(I);
}
function I() {
  for (var e, _, t, n, o, r, l, u = 1; x.length; ) x.length > u && x.sort(Se), e = x.shift(), u = x.length, e.__d && (t = void 0, o = (n = (_ = e).__v).__e, r = [], l = [], _.__P && ((t = C({}, n)).__v = n.__v + 1, f.vnode && f.vnode(t), te(_.__P, t, n, _.__n, _.__P.namespaceURI, 32 & n.__u ? [o] : null, r, o ?? N(n), !!(32 & n.__u), l), t.__v = n.__v, t.__.__k[t.__i] = t, De(r, t, l), t.__e != o && Ae(t)));
  I.__r = 0;
}
function Ue(e, _, t, n, o, r, l, u, c, a, p) {
  var i, h, s, g, k, b, d = n && n.__k || Ee, v = _.length;
  for (c = ze(t, _, d, c, v), i = 0; i < v; i++) (s = t.__k[i]) != null && (h = s.__i == -1 ? D : d[s.__i] || D, s.__i = i, b = te(e, s, h, o, r, l, u, c, a, p), g = s.__e, s.ref && h.ref != s.ref && (h.ref && ne(h.ref, null, s), p.push(s.ref, s.__c || g, s)), k == null && g != null && (k = g), 4 & s.__u || h.__k === s.__k ? c = Te(s, c, e) : typeof s.type == "function" && b !== void 0 ? c = b : g && (c = g.nextSibling), s.__u &= -7);
  return t.__e = k, c;
}
function ze(e, _, t, n, o) {
  var r, l, u, c, a, p = t.length, i = p, h = 0;
  for (e.__k = new Array(o), r = 0; r < o; r++) (l = _[r]) != null && typeof l != "boolean" && typeof l != "function" ? (c = r + h, (l = e.__k[r] = typeof l == "string" || typeof l == "number" || typeof l == "bigint" || l.constructor == String ? R(null, l, null, null, null) : M(l) ? R(S, { children: l }, null, null, null) : l.constructor == null && l.__b > 0 ? R(l.type, l.props, l.key, l.ref ? l.ref : null, l.__v) : l).__ = e, l.__b = e.__b + 1, u = null, (a = l.__i = Be(l, t, c, i)) != -1 && (i--, (u = t[a]) && (u.__u |= 2)), u == null || u.__v == null ? (a == -1 && (o > p ? h-- : o < p && h++), typeof l.type != "function" && (l.__u |= 4)) : a != c && (a == c - 1 ? h-- : a == c + 1 ? h++ : (a > c ? h-- : h++, l.__u |= 4))) : e.__k[r] = null;
  if (i) for (r = 0; r < p; r++) (u = t[r]) != null && (2 & u.__u) == 0 && (u.__e == n && (n = N(u)), Le(u, u));
  return n;
}
function Te(e, _, t) {
  var n, o;
  if (typeof e.type == "function") {
    for (n = e.__k, o = 0; n && o < n.length; o++) n[o] && (n[o].__ = e, _ = Te(n[o], _, t));
    return _;
  }
  e.__e != _ && (_ && e.type && !t.contains(_) && (_ = N(e)), t.insertBefore(e.__e, _ || null), _ = e.__e);
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
function Be(e, _, t, n) {
  var o, r, l = e.key, u = e.type, c = _[t];
  if (c === null && e.key == null || c && l == c.key && u == c.type && (2 & c.__u) == 0) return t;
  if (n > (c != null && (2 & c.__u) == 0 ? 1 : 0)) for (o = t - 1, r = t + 1; o >= 0 || r < _.length; ) {
    if (o >= 0) {
      if ((c = _[o]) && (2 & c.__u) == 0 && l == c.key && u == c.type) return o;
      o--;
    }
    if (r < _.length) {
      if ((c = _[r]) && (2 & c.__u) == 0 && l == c.key && u == c.type) return r;
      r++;
    }
  }
  return -1;
}
function le(e, _, t) {
  _[0] == "-" ? e.setProperty(_, t ?? "") : e[_] = t == null ? "" : typeof t != "number" || Ie.test(_) ? t : t + "px";
}
function W(e, _, t, n, o) {
  var r;
  e: if (_ == "style") if (typeof t == "string") e.style.cssText = t;
  else {
    if (typeof n == "string" && (e.style.cssText = n = ""), n) for (_ in n) t && _ in t || le(e.style, _, "");
    if (t) for (_ in t) n && t[_] == n[_] || le(e.style, _, t[_]);
  }
  else if (_[0] == "o" && _[1] == "n") r = _ != (_ = _.replace(Ne, "$1")), _ = _.toLowerCase() in e || _ == "onFocusOut" || _ == "onFocusIn" ? _.toLowerCase().slice(2) : _.slice(2), e.l || (e.l = {}), e.l[_ + r] = t, t ? n ? t.u = n.u : (t.u = ee, e.addEventListener(_, r ? J : G, r)) : e.removeEventListener(_, r ? J : G, r);
  else {
    if (o == "http://www.w3.org/2000/svg") _ = _.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
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
function te(e, _, t, n, o, r, l, u, c, a) {
  var p, i, h, s, g, k, b, d, v, E, P, L, A, oe, O, U, V, w = _.type;
  if (_.constructor != null) return null;
  128 & t.__u && (c = !!(32 & t.__u), r = [u = _.__e = t.__e]), (p = f.__b) && p(_);
  e: if (typeof w == "function") try {
    if (d = _.props, v = "prototype" in w && w.prototype.render, E = (p = w.contextType) && n[p.__c], P = p ? E ? E.props.value : p.__ : n, t.__c ? b = (i = _.__c = t.__c).__ = i.__E : (v ? _.__c = i = new w(d, P) : (_.__c = i = new $(d, P), i.constructor = w, i.render = qe), E && E.sub(i), i.props = d, i.state || (i.state = {}), i.context = P, i.__n = n, h = i.__d = !0, i.__h = [], i._sb = []), v && i.__s == null && (i.__s = i.state), v && w.getDerivedStateFromProps != null && (i.__s == i.state && (i.__s = C({}, i.__s)), C(i.__s, w.getDerivedStateFromProps(d, i.__s))), s = i.props, g = i.state, i.__v = _, h) v && w.getDerivedStateFromProps == null && i.componentWillMount != null && i.componentWillMount(), v && i.componentDidMount != null && i.__h.push(i.componentDidMount);
    else {
      if (v && w.getDerivedStateFromProps == null && d !== s && i.componentWillReceiveProps != null && i.componentWillReceiveProps(d, P), !i.__e && i.shouldComponentUpdate != null && i.shouldComponentUpdate(d, i.__s, P) === !1 || _.__v == t.__v) {
        for (_.__v != t.__v && (i.props = d, i.state = i.__s, i.__d = !1), _.__e = t.__e, _.__k = t.__k, _.__k.some(function(T) {
          T && (T.__ = _);
        }), L = 0; L < i._sb.length; L++) i.__h.push(i._sb[L]);
        i._sb = [], i.__h.length && l.push(i);
        break e;
      }
      i.componentWillUpdate != null && i.componentWillUpdate(d, i.__s, P), v && i.componentDidUpdate != null && i.__h.push(function() {
        i.componentDidUpdate(s, g, k);
      });
    }
    if (i.context = P, i.props = d, i.__P = e, i.__e = !1, A = f.__r, oe = 0, v) {
      for (i.state = i.__s, i.__d = !1, A && A(_), p = i.render(i.props, i.state, i.context), O = 0; O < i._sb.length; O++) i.__h.push(i._sb[O]);
      i._sb = [];
    } else do
      i.__d = !1, A && A(_), p = i.render(i.props, i.state, i.context), i.state = i.__s;
    while (i.__d && ++oe < 25);
    i.state = i.__s, i.getChildContext != null && (n = C(C({}, n), i.getChildContext())), v && !h && i.getSnapshotBeforeUpdate != null && (k = i.getSnapshotBeforeUpdate(s, g)), U = p, p != null && p.type === S && p.key == null && (U = Me(p.props.children)), u = Ue(e, M(U) ? U : [U], _, t, n, o, r, l, u, c, a), i.base = _.__e, _.__u &= -161, i.__h.length && l.push(i), b && (i.__E = i.__ = null);
  } catch (T) {
    if (_.__v = null, c || r != null) if (T.then) {
      for (_.__u |= c ? 160 : 128; u && u.nodeType == 8 && u.nextSibling; ) u = u.nextSibling;
      r[r.indexOf(u)] = null, _.__e = u;
    } else for (V = r.length; V--; ) _e(r[V]);
    else _.__e = t.__e, _.__k = t.__k;
    f.__e(T, _, t);
  }
  else r == null && _.__v == t.__v ? (_.__k = t.__k, _.__e = t.__e) : u = _.__e = Ve(t.__e, _, t, n, o, r, l, c, a);
  return (p = f.diffed) && p(_), 128 & _.__u ? void 0 : u;
}
function De(e, _, t) {
  for (var n = 0; n < t.length; n++) ne(t[n], t[++n], t[++n]);
  f.__c && f.__c(_, e), e.some(function(o) {
    try {
      e = o.__h, o.__h = [], e.some(function(r) {
        r.call(o);
      });
    } catch (r) {
      f.__e(r, o.__v);
    }
  });
}
function Me(e) {
  return typeof e != "object" || e == null || e.__b && e.__b > 0 ? e : M(e) ? e.map(Me) : C({}, e);
}
function Ve(e, _, t, n, o, r, l, u, c) {
  var a, p, i, h, s, g, k, b = t.props, d = _.props, v = _.type;
  if (v == "svg" ? o = "http://www.w3.org/2000/svg" : v == "math" ? o = "http://www.w3.org/1998/Math/MathML" : o || (o = "http://www.w3.org/1999/xhtml"), r != null) {
    for (a = 0; a < r.length; a++) if ((s = r[a]) && "setAttribute" in s == !!v && (v ? s.localName == v : s.nodeType == 3)) {
      e = s, r[a] = null;
      break;
    }
  }
  if (e == null) {
    if (v == null) return document.createTextNode(d);
    e = document.createElementNS(o, v, d.is && d), u && (f.__m && f.__m(_, r), u = !1), r = null;
  }
  if (v == null) b === d || u && e.data == d || (e.data = d);
  else {
    if (r = r && B.call(e.childNodes), b = t.props || D, !u && r != null) for (b = {}, a = 0; a < e.attributes.length; a++) b[(s = e.attributes[a]).name] = s.value;
    for (a in b) if (s = b[a], a != "children") {
      if (a == "dangerouslySetInnerHTML") i = s;
      else if (!(a in d)) {
        if (a == "value" && "defaultValue" in d || a == "checked" && "defaultChecked" in d) continue;
        W(e, a, null, s, o);
      }
    }
    for (a in d) s = d[a], a == "children" ? h = s : a == "dangerouslySetInnerHTML" ? p = s : a == "value" ? g = s : a == "checked" ? k = s : u && typeof s != "function" || b[a] === s || W(e, a, s, b[a], o);
    if (p) u || i && (p.__html == i.__html || p.__html == e.innerHTML) || (e.innerHTML = p.__html), _.__k = [];
    else if (i && (e.innerHTML = ""), Ue(_.type == "template" ? e.content : e, M(h) ? h : [h], _, t, n, v == "foreignObject" ? "http://www.w3.org/1999/xhtml" : o, r, l, r ? r[0] : t.__k && N(t, 0), u, c), r != null) for (a = r.length; a--; ) _e(r[a]);
    u || (a = "value", v == "progress" && g == null ? e.removeAttribute("value") : g != null && (g !== e[a] || v == "progress" && !g || v == "option" && g != b[a]) && W(e, a, g, b[a], o), a = "checked", k != null && k != e[a] && W(e, a, k, b[a], o));
  }
  return e;
}
function ne(e, _, t) {
  try {
    if (typeof e == "function") {
      var n = typeof e.__u == "function";
      n && e.__u(), n && _ == null || (e.__u = e(_));
    } else e.current = _;
  } catch (o) {
    f.__e(o, t);
  }
}
function Le(e, _, t) {
  var n, o;
  if (f.unmount && f.unmount(e), (n = e.ref) && (n.current && n.current != e.__e || ne(n, null, _)), (n = e.__c) != null) {
    if (n.componentWillUnmount) try {
      n.componentWillUnmount();
    } catch (r) {
      f.__e(r, _);
    }
    n.base = n.__P = null;
  }
  if (n = e.__k) for (o = 0; o < n.length; o++) n[o] && Le(n[o], _, t || typeof e.type != "function");
  t || _e(e.__e), e.__c = e.__ = e.__e = void 0;
}
function qe(e, _, t) {
  return this.constructor(e, t);
}
function Ze(e, _, t) {
  var n, o, r, l;
  _ == document && (_ = document.documentElement), f.__ && f.__(e, _), o = (n = !1) ? null : _.__k, r = [], l = [], te(_, e = _.__k = K(S, null, [e]), o || D, D, _.namespaceURI, o ? null : _.firstChild ? B.call(_.childNodes) : null, r, o ? o.__e : _.firstChild, n, l), De(r, e, l);
}
B = Ee.slice, f = { __e: function(e, _, t, n) {
  for (var o, r, l; _ = _.__; ) if ((o = _.__c) && !o.__) try {
    if ((r = o.constructor) && r.getDerivedStateFromError != null && (o.setState(r.getDerivedStateFromError(e)), l = o.__d), o.componentDidCatch != null && (o.componentDidCatch(e, n || {}), l = o.__d), l) return o.__E = o;
  } catch (u) {
    e = u;
  }
  throw e;
} }, xe = 0, $.prototype.setState = function(e, _) {
  var t;
  t = this.__s != null && this.__s != this.state ? this.__s : this.__s = C({}, this.state), typeof e == "function" && (e = e(C({}, t), this.props)), e && C(t, e), e != null && this.__v && (_ && this._sb.push(_), ie(this));
}, $.prototype.forceUpdate = function(e) {
  this.__v && (this.__e = !0, e && this.__h.push(e), ie(this));
}, $.prototype.render = S, x = [], He = typeof Promise == "function" ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, Se = function(e, _) {
  return e.__v.__b - _.__v.__b;
}, I.__r = 0, Ne = /(PointerCapture)$|Capture$/i, ee = 0, G = ue(!1), J = ue(!0);
var Ge = 0;
function H(e, _, t, n, o, r) {
  _ || (_ = {});
  var l, u, c = _;
  if ("ref" in c) for (u in c = {}, _) u == "ref" ? l = _[u] : c[u] = _[u];
  var a = { type: e, props: c, key: t, ref: l, __k: null, __: null, __b: 0, __e: null, __c: null, constructor: void 0, __v: --Ge, __i: -1, __u: 0, __source: o, __self: r };
  if (typeof e == "function" && (l = e.defaultProps)) for (u in l) c[u] === void 0 && (c[u] = l[u]);
  return f.vnode && f.vnode(a), a;
}
var Q, m, q, ae, X = 0, Oe = [], y = f, ce = y.__b, se = y.__r, fe = y.diffed, pe = y.__c, he = y.unmount, de = y.__;
function Je(e, _) {
  y.__h && y.__h(m, e, X || _), X = 0;
  var t = m.__H || (m.__H = { __: [], __h: [] });
  return e >= t.__.length && t.__.push({}), t.__[e];
}
function Ke(e) {
  return X = 1, Qe(We, e);
}
function Qe(e, _, t) {
  var n = Je(Q++, 2);
  if (n.t = e, !n.__c && (n.__ = [t ? t(_) : We(void 0, _), function(u) {
    var c = n.__N ? n.__N[0] : n.__[0], a = n.t(c, u);
    c !== a && (n.__N = [a, n.__[1]], n.__c.setState({}));
  }], n.__c = m, !m.__f)) {
    var o = function(u, c, a) {
      if (!n.__c.__H) return !0;
      var p = n.__c.__H.__.filter(function(h) {
        return !!h.__c;
      });
      if (p.every(function(h) {
        return !h.__N;
      })) return !r || r.call(this, u, c, a);
      var i = n.__c.props !== u;
      return p.forEach(function(h) {
        if (h.__N) {
          var s = h.__[0];
          h.__ = h.__N, h.__N = void 0, s !== h.__[0] && (i = !0);
        }
      }), r && r.call(this, u, c, a) || i;
    };
    m.__f = !0;
    var r = m.shouldComponentUpdate, l = m.componentWillUpdate;
    m.componentWillUpdate = function(u, c, a) {
      if (this.__e) {
        var p = r;
        r = void 0, o(u, c, a), r = p;
      }
      l && l.call(this, u, c, a);
    }, m.shouldComponentUpdate = o;
  }
  return n.__N || n.__;
}
function Xe() {
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
  _ && _.__H && (_.__H.__h.length && (Oe.push(_) !== 1 && ae === y.requestAnimationFrame || ((ae = y.requestAnimationFrame) || Ye)(Xe)), _.__H.__.forEach(function(t) {
    t.u && (t.__H = t.u), t.u = void 0;
  })), q = m = null;
}, y.__c = function(e, _) {
  _.some(function(t) {
    try {
      t.__h.forEach(j), t.__h = t.__h.filter(function(n) {
        return !n.__ || Y(n);
      });
    } catch (n) {
      _.some(function(o) {
        o.__h && (o.__h = []);
      }), _ = [], y.__e(n, t.__v);
    }
  }), pe && pe(e, _);
}, y.unmount = function(e) {
  he && he(e);
  var _, t = e.__c;
  t && t.__H && (t.__H.__.forEach(function(n) {
    try {
      j(n);
    } catch (o) {
      _ = o;
    }
  }), t.__H = void 0, _ && y.__e(_, t.__v));
};
var ve = typeof requestAnimationFrame == "function";
function Ye(e) {
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
function e_(e, _) {
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
var __ = f.__e;
f.__e = function(e, _, t, n) {
  if (e.then) {
    for (var o, r = _; r = r.__; ) if ((o = r.__c) && o.__c) return _.__e == null && (_.__e = t.__e, _.__k = t.__k), o.__c(e, _);
  }
  __(e, _, t, n);
};
var be = f.unmount;
function Fe(e, _, t) {
  return e && (e.__c && e.__c.__H && (e.__c.__H.__.forEach(function(n) {
    typeof n.__c == "function" && n.__c();
  }), e.__c.__H = null), (e = e_({}, e)).__c != null && (e.__c.__P === t && (e.__c.__P = _), e.__c.__e = !0, e.__c = null), e.__k = e.__k && e.__k.map(function(n) {
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
  var o = je(n.__v), r = !1, l = function() {
    r || (r = !0, t.__R = null, o ? o(u) : u());
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
  var o = _.__a && K(S, null, e.fallback);
  return o && (o.__u &= -33), [K(S, null, _.__a ? null : e.children), o];
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
  return n[0]++, function(o) {
    var r = function() {
      _.props.revealOrder ? (n.push(o), ke(_, e, n)) : o();
    };
    t ? t(r) : r();
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
var t_ = typeof Symbol < "u" && Symbol.for && Symbol.for("react.element") || 60103, n_ = /^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|image(!S)|letter|lighting|marker(?!H|W|U)|overline|paint|pointer|shape|stop|strikethrough|stroke|text(?!L)|transform|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/, o_ = /^on(Ani|Tra|Tou|BeforeInp|Compo)/, r_ = /[A-Z0-9]/g, i_ = typeof document < "u", l_ = function(e) {
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
function u_() {
}
function a_() {
  return this.cancelBubble;
}
function c_() {
  return this.defaultPrevented;
}
f.event = function(e) {
  return we && (e = we(e)), e.persist = u_, e.isPropagationStopped = a_, e.isDefaultPrevented = c_, e.nativeEvent = e;
};
var s_ = { enumerable: !1, configurable: !0, get: function() {
  return this.class;
} }, Ce = f.vnode;
f.vnode = function(e) {
  typeof e.type == "string" && function(_) {
    var t = _.props, n = _.type, o = {}, r = n.indexOf("-") === -1;
    for (var l in t) {
      var u = t[l];
      if (!(l === "value" && "defaultValue" in t && u == null || i_ && l === "children" && n === "noscript" || l === "class" || l === "className")) {
        var c = l.toLowerCase();
        l === "defaultValue" && "value" in t && t.value == null ? l = "value" : l === "download" && u === !0 ? u = "" : c === "translate" && u === "no" ? u = !1 : c[0] === "o" && c[1] === "n" ? c === "ondoubleclick" ? l = "ondblclick" : c !== "onchange" || n !== "input" && n !== "textarea" || l_(t.type) ? c === "onfocus" ? l = "onfocusin" : c === "onblur" ? l = "onfocusout" : o_.test(l) && (l = c) : c = l = "oninput" : r && n_.test(l) ? l = l.replace(r_, "-$&").toLowerCase() : u === null && (u = void 0), c === "oninput" && o[l = c] && (l = "oninputCapture"), o[l] = u;
      }
    }
    n == "select" && o.multiple && Array.isArray(o.value) && (o.value = z(t.children).forEach(function(a) {
      a.props.selected = o.value.indexOf(a.props.value) != -1;
    })), n == "select" && o.defaultValue != null && (o.value = z(t.children).forEach(function(a) {
      a.props.selected = o.multiple ? o.defaultValue.indexOf(a.props.value) != -1 : o.defaultValue == a.props.value;
    })), t.class && !t.className ? (o.class = t.class, Object.defineProperty(o, "className", s_)) : (t.className && !t.class || t.class && t.className) && (o.class = o.className = t.className), _.props = o;
  }(e), e.$$typeof = t_, Ce && Ce(e);
};
var $e = f.__r;
f.__r = function(e) {
  $e && $e(e), e.__c;
};
var Pe = f.diffed;
f.diffed = function(e) {
  Pe && Pe(e);
  var _ = e.props, t = e.__e;
  t != null && e.type === "textarea" && "value" in _ && _.value !== t.value && (t.value = _.value == null ? "" : _.value);
};
function f_({ name: e, startCount: _, onChangeCount: t }) {
  const [n, o] = Ke(_ ?? 0);
  return /* @__PURE__ */ H("div", { children: [
    /* @__PURE__ */ H("p", { children: [
      "Hello, ",
      e,
      "!"
    ] }),
    /* @__PURE__ */ H(
      "button",
      {
        onClick: () => {
          o(n + 1), t(n + 1);
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
function p_({ displayName: e, startCount: _, onChangeCount: t }) {
  return /* @__PURE__ */ H("div", { children: /* @__PURE__ */ H(
    f_,
    {
      name: e,
      startCount: _,
      onChangeCount: t
    }
  ) });
}
const h_ = ":root{font-family:Inter,system-ui,Avenir,Helvetica,Arial,sans-serif;line-height:1.5;font-weight:400;color:#222;background-color:#fff;font-synthesis:none;text-rendering:optimizeLegibility;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;-webkit-text-size-adjust:100%}body{margin:0;display:flex;align-items:center;min-height:100vh}p{color:green}";
class d_ extends HTMLElement {
  constructor() {
    super(), this.attachShadow({ mode: "open" });
  }
  connectedCallback() {
    this.shadowRoot.innerHTML = `<style>${h_}</style>`, this.render();
  }
  static get observedAttributes() {
    return ["displayName", "startCount"];
  }
  attributeChangedCallback() {
    this.render();
  }
  render() {
    console.log(this.getAttribute("displayName"));
    const _ = this.getAttribute("displayName") || "Test", t = this.getAttribute("startCount") || 0;
    Ze(
      /* @__PURE__ */ H(
        p_,
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
customElements.define("demo-web-component", d_);
