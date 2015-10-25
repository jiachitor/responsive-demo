/* Modernizr 2.6.2 (Custom Build) | MIT & BSD
 * Build: http://modernizr.com/download/#-fontface-backgroundsize-borderimage-borderradius-boxshadow-flexbox-hsla-multiplebgs-opacity-rgba-textshadow-cssanimations-csscolumns-generatedcontent-cssgradients-cssreflections-csstransforms-csstransforms3d-csstransitions-applicationcache-canvas-canvastext-draganddrop-hashchange-history-audio-video-indexeddb-input-inputtypes-localstorage-postmessage-sessionstorage-websockets-websqldatabase-webworkers-geolocation-inlinesvg-smil-svg-svgclippaths-touch-webgl-shiv-mq-cssclasses-addtest-prefixed-teststyles-testprop-testallprops-hasevent-prefixes-domprefixes-load
 */
;
window.Modernizr = function(a, b, c) {
    function D(a) {
      j.cssText = a
    }

    function E(a, b) {
      return D(n.join(a + ";") + (b || ""))
    }

    function F(a, b) {
      return typeof a === b
    }

    function G(a, b) {
      return !!~("" + a).indexOf(b)
    }

    function H(a, b) {
      for (var d in a) {
        var e = a[d];
        if (!G(e, "-") && j[e] !== c) return b == "pfx" ? e : !0
      }
      return !1
    }

    function I(a, b, d) {
      for (var e in a) {
        var f = b[a[e]];
        if (f !== c) return d === !1 ? a[e] : F(f, "function") ? f.bind(d || b) : f
      }
      return !1
    }

    function J(a, b, c) {
      var d = a.charAt(0).toUpperCase() + a.slice(1),
        e = (a + " " + p.join(d + " ") + d).split(" ");
      return F(b, "string") || F(b, "undefined") ? H(e, b) : (e = (a + " " + q.join(d + " ") + d).split(" "), I(e, b, c))
    }

    function K() {
      e.input = function(c) {
        for (var d = 0, e = c.length; d < e; d++) u[c[d]] = c[d] in k;
        return u.list && (u.list = !!b.createElement("datalist") && !!a.HTMLDataListElement), u
      }("autocomplete autofocus list placeholder max min multiple pattern required step".split(" ")), e.inputtypes = function(a) {
        for (var d = 0, e, f, h, i = a.length; d < i; d++) k.setAttribute("type", f = a[d]), e = k.type !== "text", e && (k.value = l, k.style.cssText = "position:absolute;visibility:hidden;", /^range$/.test(f) && k.style.WebkitAppearance !== c ? (g.appendChild(k), h = b.defaultView, e = h.getComputedStyle && h.getComputedStyle(k, null).WebkitAppearance !== "textfield" && k.offsetHeight !== 0, g.removeChild(k)) : /^(search|tel)$/.test(f) || (/^(url|email)$/.test(f) ? e = k.checkValidity && k.checkValidity() === !1 : e = k.value != l)), t[a[d]] = !!e;
        return t
      }("search tel url email datetime date month week time datetime-local number range color".split(" "))
    }
    var d = "2.6.2",
      e = {},
      f = !0,
      g = b.documentElement,
      h = "modernizr",
      i = b.createElement(h),
      j = i.style,
      k = b.createElement("input"),
      l = ":)",
      m = {}.toString,
      n = " -webkit- -moz- -o- -ms- ".split(" "),
      o = "Webkit Moz O ms",
      p = o.split(" "),
      q = o.toLowerCase().split(" "),
      r = {
        svg: "http://www.w3.org/2000/svg"
      },
      s = {},
      t = {},
      u = {},
      v = [],
      w = v.slice,
      x, y = function(a, c, d, e) {
        var f, i, j, k, l = b.createElement("div"),
          m = b.body,
          n = m || b.createElement("body");
        if (parseInt(d, 10))
          while (d--) j = b.createElement("div"), j.id = e ? e[d] : h + (d + 1), l.appendChild(j);
        return f = ["&#173;", '<style id="s', h, '">', a, "</style>"].join(""), l.id = h, (m ? l : n).innerHTML += f, n.appendChild(l), m || (n.style.background = "", n.style.overflow = "hidden", k = g.style.overflow, g.style.overflow = "hidden", g.appendChild(n)), i = c(l, a), m ? l.parentNode.removeChild(l) : (n.parentNode.removeChild(n), g.style.overflow = k), !!i
      },
      z = function(b) {
        var c = a.matchMedia || a.msMatchMedia;
        if (c) return c(b).matches;
        var d;
        return y("@media " + b + " { #" + h + " { position: absolute; } }", function(b) {
          d = (a.getComputedStyle ? getComputedStyle(b, null) : b.currentStyle)["position"] == "absolute"
        }), d
      },
      A = function() {
        function d(d, e) {
          e = e || b.createElement(a[d] || "div"), d = "on" + d;
          var f = d in e;
          return f || (e.setAttribute || (e = b.createElement("div")), e.setAttribute && e.removeAttribute && (e.setAttribute(d, ""), f = F(e[d], "function"), F(e[d], "undefined") || (e[d] = c), e.removeAttribute(d))), e = null, f
        }
        var a = {
          select: "input",
          change: "input",
          submit: "form",
          reset: "form",
          error: "img",
          load: "img",
          abort: "img"
        };
        return d
      }(),
      B = {}.hasOwnProperty,
      C;
    !F(B, "undefined") && !F(B.call, "undefined") ? C = function(a, b) {
      return B.call(a, b)
    } : C = function(a, b) {
      return b in a && F(a.constructor.prototype[b], "undefined")
    }, Function.prototype.bind || (Function.prototype.bind = function(b) {
      var c = this;
      if (typeof c != "function") throw new TypeError;
      var d = w.call(arguments, 1),
        e = function() {
          if (this instanceof e) {
            var a = function() {};
            a.prototype = c.prototype;
            var f = new a,
              g = c.apply(f, d.concat(w.call(arguments)));
            return Object(g) === g ? g : f
          }
          return c.apply(b, d.concat(w.call(arguments)))
        };
      return e
    }), s.flexbox = function() {
      return J("flexWrap")
    }, s.canvas = function() {
      var a = b.createElement("canvas");
      return !!a.getContext && !!a.getContext("2d")
    }, s.canvastext = function() {
      return !!e.canvas && !!F(b.createElement("canvas").getContext("2d").fillText, "function")
    }, s.webgl = function() {
      return !!a.WebGLRenderingContext
    }, s.touch = function() {
      var c;
      return "ontouchstart" in a || a.DocumentTouch && b instanceof DocumentTouch ? c = !0 : y(["@media (", n.join("touch-enabled),("), h, ")", "{#modernizr{top:9px;position:absolute}}"].join(""), function(a) {
        c = a.offsetTop === 9
      }), c
    }, s.geolocation = function() {
      return "geolocation" in navigator
    }, s.postmessage = function() {
      return !!a.postMessage
    }, s.websqldatabase = function() {
      return !!a.openDatabase
    }, s.indexedDB = function() {
      return !!J("indexedDB", a)
    }, s.hashchange = function() {
      return A("hashchange", a) && (b.documentMode === c || b.documentMode > 7)
    }, s.history = function() {
      return !!a.history && !!history.pushState
    }, s.draganddrop = function() {
      var a = b.createElement("div");
      return "draggable" in a || "ondragstart" in a && "ondrop" in a
    }, s.websockets = function() {
      return "WebSocket" in a || "MozWebSocket" in a
    }, s.rgba = function() {
      return D("background-color:rgba(150,255,150,.5)"), G(j.backgroundColor, "rgba")
    }, s.hsla = function() {
      return D("background-color:hsla(120,40%,100%,.5)"), G(j.backgroundColor, "rgba") || G(j.backgroundColor, "hsla")
    }, s.multiplebgs = function() {
      return D("background:url(https://),url(https://),red url(https://)"), /(url\s*\(.*?){3}/.test(j.background)
    }, s.backgroundsize = function() {
      return J("backgroundSize")
    }, s.borderimage = function() {
      return J("borderImage")
    }, s.borderradius = function() {
      return J("borderRadius")
    }, s.boxshadow = function() {
      return J("boxShadow")
    }, s.textshadow = function() {
      return b.createElement("div").style.textShadow === ""
    }, s.opacity = function() {
      return E("opacity:.55"), /^0.55$/.test(j.opacity)
    }, s.cssanimations = function() {
      return J("animationName")
    }, s.csscolumns = function() {
      return J("columnCount")
    }, s.cssgradients = function() {
      var a = "background-image:",
        b = "gradient(linear,left top,right bottom,from(#9f9),to(white));",
        c = "linear-gradient(left top,#9f9, white);";
      return D((a + "-webkit- ".split(" ").join(b + a) + n.join(c + a)).slice(0, -a.length)), G(j.backgroundImage, "gradient")
    }, s.cssreflections = function() {
      return J("boxReflect")
    }, s.csstransforms = function() {
      return !!J("transform")
    }, s.csstransforms3d = function() {
      var a = !!J("perspective");
      return a && "webkitPerspective" in g.style && y("@media (transform-3d),(-webkit-transform-3d){#modernizr{left:9px;position:absolute;height:3px;}}", function(b, c) {
        a = b.offsetLeft === 9 && b.offsetHeight === 3
      }), a
    }, s.csstransitions = function() {
      return J("transition")
    }, s.fontface = function() {
      var a;
      return y('@font-face {font-family:"font";src:url("https://")}', function(c, d) {
        var e = b.getElementById("smodernizr"),
          f = e.sheet || e.styleSheet,
          g = f ? f.cssRules && f.cssRules[0] ? f.cssRules[0].cssText : f.cssText || "" : "";
        a = /src/i.test(g) && g.indexOf(d.split(" ")[0]) === 0
      }), a
    }, s.generatedcontent = function() {
      var a;
      return y(["#", h, "{font:0/0 a}#", h, ':after{content:"', l, '";visibility:hidden;font:3px/1 a}'].join(""), function(b) {
        a = b.offsetHeight >= 3
      }), a
    }, s.video = function() {
      var a = b.createElement("video"),
        c = !1;
      try {
        if (c = !!a.canPlayType) c = new Boolean(c), c.ogg = a.canPlayType('video/ogg; codecs="theora"').replace(/^no$/, ""), c.h264 = a.canPlayType('video/mp4; codecs="avc1.42E01E"').replace(/^no$/, ""), c.webm = a.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/^no$/, "")
      } catch (d) {}
      return c
    }, s.audio = function() {
      var a = b.createElement("audio"),
        c = !1;
      try {
        if (c = !!a.canPlayType) c = new Boolean(c), c.ogg = a.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/, ""), c.mp3 = a.canPlayType("audio/mpeg;").replace(/^no$/, ""), c.wav = a.canPlayType('audio/wav; codecs="1"').replace(/^no$/, ""), c.m4a = (a.canPlayType("audio/x-m4a;") || a.canPlayType("audio/aac;")).replace(/^no$/, "")
      } catch (d) {}
      return c
    }, s.localstorage = function() {
      try {
        return localStorage.setItem(h, h), localStorage.removeItem(h), !0
      } catch (a) {
        return !1
      }
    }, s.sessionstorage = function() {
      try {
        return sessionStorage.setItem(h, h), sessionStorage.removeItem(h), !0
      } catch (a) {
        return !1
      }
    }, s.webworkers = function() {
      return !!a.Worker
    }, s.applicationcache = function() {
      return !!a.applicationCache
    }, s.svg = function() {
      return !!b.createElementNS && !!b.createElementNS(r.svg, "svg").createSVGRect
    }, s.inlinesvg = function() {
      var a = b.createElement("div");
      return a.innerHTML = "<svg/>", (a.firstChild && a.firstChild.namespaceURI) == r.svg
    }, s.smil = function() {
      return !!b.createElementNS && /SVGAnimate/.test(m.call(b.createElementNS(r.svg, "animate")))
    }, s.svgclippaths = function() {
      return !!b.createElementNS && /SVGClipPath/.test(m.call(b.createElementNS(r.svg, "clipPath")))
    };
    for (var L in s) C(s, L) && (x = L.toLowerCase(), e[x] = s[L](), v.push((e[x] ? "" : "no-") + x));
    return e.input || K(), e.addTest = function(a, b) {
        if (typeof a == "object")
          for (var d in a) C(a, d) && e.addTest(d, a[d]);
        else {
          a = a.toLowerCase();
          if (e[a] !== c) return e;
          b = typeof b == "function" ? b() : b, typeof f != "undefined" && f && (g.className += " " + (b ? "" : "no-") + a), e[a] = b
        }
        return e
      }, D(""), i = k = null,
      function(a, b) {
        function k(a, b) {
          var c = a.createElement("p"),
            d = a.getElementsByTagName("head")[0] || a.documentElement;
          return c.innerHTML = "x<style>" + b + "</style>", d.insertBefore(c.lastChild, d.firstChild)
        }

        function l() {
          var a = r.elements;
          return typeof a == "string" ? a.split(" ") : a
        }

        function m(a) {
          var b = i[a[g]];
          return b || (b = {}, h++, a[g] = h, i[h] = b), b
        }

        function n(a, c, f) {
          c || (c = b);
          if (j) return c.createElement(a);
          f || (f = m(c));
          var g;
          return f.cache[a] ? g = f.cache[a].cloneNode() : e.test(a) ? g = (f.cache[a] = f.createElem(a)).cloneNode() : g = f.createElem(a), g.canHaveChildren && !d.test(a) ? f.frag.appendChild(g) : g
        }

        function o(a, c) {
          a || (a = b);
          if (j) return a.createDocumentFragment();
          c = c || m(a);
          var d = c.frag.cloneNode(),
            e = 0,
            f = l(),
            g = f.length;
          for (; e < g; e++) d.createElement(f[e]);
          return d
        }

        function p(a, b) {
          b.cache || (b.cache = {}, b.createElem = a.createElement, b.createFrag = a.createDocumentFragment, b.frag = b.createFrag()), a.createElement = function(c) {
            return r.shivMethods ? n(c, a, b) : b.createElem(c)
          }, a.createDocumentFragment = Function("h,f", "return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&(" + l().join().replace(/\w+/g, function(a) {
            return b.createElem(a), b.frag.createElement(a), 'c("' + a + '")'
          }) + ");return n}")(r, b.frag)
        }

        function q(a) {
          a || (a = b);
          var c = m(a);
          return r.shivCSS && !f && !c.hasCSS && (c.hasCSS = !!k(a, "article,aside,figcaption,figure,footer,header,hgroup,nav,section{display:block}mark{background:#FF0;color:#000}")), j || p(a, c), a
        }
        var c = a.html5 || {},
          d = /^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,
          e = /^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,
          f, g = "_html5shiv",
          h = 0,
          i = {},
          j;
        (function() {
          try {
            var a = b.createElement("a");
            a.innerHTML = "<xyz></xyz>", f = "hidden" in a, j = a.childNodes.length == 1 || function() {
              b.createElement("a");
              var a = b.createDocumentFragment();
              return typeof a.cloneNode == "undefined" || typeof a.createDocumentFragment == "undefined" || typeof a.createElement == "undefined"
            }()
          } catch (c) {
            f = !0, j = !0
          }
        })();
        var r = {
          elements: c.elements || "abbr article aside audio bdi canvas data datalist details figcaption figure footer header hgroup mark meter nav output progress section summary time video",
          shivCSS: c.shivCSS !== !1,
          supportsUnknownElements: j,
          shivMethods: c.shivMethods !== !1,
          type: "default",
          shivDocument: q,
          createElement: n,
          createDocumentFragment: o
        };
        a.html5 = r, q(b)
      }(this, b), e._version = d, e._prefixes = n, e._domPrefixes = q, e._cssomPrefixes = p, e.mq = z, e.hasEvent = A, e.testProp = function(a) {
        return H([a])
      }, e.testAllProps = J, e.testStyles = y, e.prefixed = function(a, b, c) {
        return b ? J(a, b, c) : J(a, "pfx")
      }, g.className = g.className.replace(/(^|\s)no-js(\s|$)/, "$1$2") + (f ? " js " + v.join(" ") : ""), e
  }(this, this.document),
  function(a, b, c) {
    function d(a) {
      return "[object Function]" == o.call(a)
    }

    function e(a) {
      return "string" == typeof a
    }

    function f() {}

    function g(a) {
      return !a || "loaded" == a || "complete" == a || "uninitialized" == a
    }

    function h() {
      var a = p.shift();
      q = 1, a ? a.t ? m(function() {
        ("c" == a.t ? B.injectCss : B.injectJs)(a.s, 0, a.a, a.x, a.e, 1)
      }, 0) : (a(), h()) : q = 0
    }

    function i(a, c, d, e, f, i, j) {
      function k(b) {
        if (!o && g(l.readyState) && (u.r = o = 1, !q && h(), l.onload = l.onreadystatechange = null, b)) {
          "img" != a && m(function() {
            t.removeChild(l)
          }, 50);
          for (var d in y[c]) y[c].hasOwnProperty(d) && y[c][d].onload()
        }
      }
      var j = j || B.errorTimeout,
        l = b.createElement(a),
        o = 0,
        r = 0,
        u = {
          t: d,
          s: c,
          e: f,
          a: i,
          x: j
        };
      1 === y[c] && (r = 1, y[c] = []), "object" == a ? l.data = c : (l.src = c, l.type = a), l.width = l.height = "0", l.onerror = l.onload = l.onreadystatechange = function() {
        k.call(this, r)
      }, p.splice(e, 0, u), "img" != a && (r || 2 === y[c] ? (t.insertBefore(l, s ? null : n), m(k, j)) : y[c].push(l))
    }

    function j(a, b, c, d, f) {
      return q = 0, b = b || "j", e(a) ? i("c" == b ? v : u, a, b, this.i++, c, d, f) : (p.splice(this.i++, 0, a), 1 == p.length && h()), this
    }

    function k() {
      var a = B;
      return a.loader = {
        load: j,
        i: 0
      }, a
    }
    var l = b.documentElement,
      m = a.setTimeout,
      n = b.getElementsByTagName("script")[0],
      o = {}.toString,
      p = [],
      q = 0,
      r = "MozAppearance" in l.style,
      s = r && !!b.createRange().compareNode,
      t = s ? l : n.parentNode,
      l = a.opera && "[object Opera]" == o.call(a.opera),
      l = !!b.attachEvent && !l,
      u = r ? "object" : l ? "script" : "img",
      v = l ? "script" : u,
      w = Array.isArray || function(a) {
        return "[object Array]" == o.call(a)
      },
      x = [],
      y = {},
      z = {
        timeout: function(a, b) {
          return b.length && (a.timeout = b[0]), a
        }
      },
      A, B;
    B = function(a) {
      function b(a) {
        var a = a.split("!"),
          b = x.length,
          c = a.pop(),
          d = a.length,
          c = {
            url: c,
            origUrl: c,
            prefixes: a
          },
          e, f, g;
        for (f = 0; f < d; f++) g = a[f].split("="), (e = z[g.shift()]) && (c = e(c, g));
        for (f = 0; f < b; f++) c = x[f](c);
        return c
      }

      function g(a, e, f, g, h) {
        var i = b(a),
          j = i.autoCallback;
        i.url.split(".").pop().split("?").shift(), i.bypass || (e && (e = d(e) ? e : e[a] || e[g] || e[a.split("/").pop().split("?")[0]]), i.instead ? i.instead(a, e, f, g, h) : (y[i.url] ? i.noexec = !0 : y[i.url] = 1, f.load(i.url, i.forceCSS || !i.forceJS && "css" == i.url.split(".").pop().split("?").shift() ? "c" : c, i.noexec, i.attrs, i.timeout), (d(e) || d(j)) && f.load(function() {
          k(), e && e(i.origUrl, h, g), j && j(i.origUrl, h, g), y[i.url] = 2
        })))
      }

      function h(a, b) {
        function c(a, c) {
          if (a) {
            if (e(a)) c || (j = function() {
              var a = [].slice.call(arguments);
              k.apply(this, a), l()
            }), g(a, j, b, 0, h);
            else if (Object(a) === a)
              for (n in m = function() {
                  var b = 0,
                    c;
                  for (c in a) a.hasOwnProperty(c) && b++;
                  return b
                }(), a) a.hasOwnProperty(n) && (!c && !--m && (d(j) ? j = function() {
                var a = [].slice.call(arguments);
                k.apply(this, a), l()
              } : j[n] = function(a) {
                return function() {
                  var b = [].slice.call(arguments);
                  a && a.apply(this, b), l()
                }
              }(k[n])), g(a[n], j, b, n, h))
          } else !c && l()
        }
        var h = !!a.test,
          i = a.load || a.both,
          j = a.callback || f,
          k = j,
          l = a.complete || f,
          m, n;
        c(h ? a.yep : a.nope, !!i), i && c(i)
      }
      var i, j, l = this.yepnope.loader;
      if (e(a)) g(a, 0, l, 0);
      else if (w(a))
        for (i = 0; i < a.length; i++) j = a[i], e(j) ? g(j, 0, l, 0) : w(j) ? B(j) : Object(j) === j && h(j, l);
      else Object(a) === a && h(a, l)
    }, B.addPrefix = function(a, b) {
      z[a] = b
    }, B.addFilter = function(a) {
      x.push(a)
    }, B.errorTimeout = 1e4, null == b.readyState && b.addEventListener && (b.readyState = "loading", b.addEventListener("DOMContentLoaded", A = function() {
      b.removeEventListener("DOMContentLoaded", A, 0), b.readyState = "complete"
    }, 0)), a.yepnope = k(), a.yepnope.executeStack = h, a.yepnope.injectJs = function(a, c, d, e, i, j) {
      var k = b.createElement("script"),
        l, o, e = e || B.errorTimeout;
      k.src = a;
      for (o in d) k.setAttribute(o, d[o]);
      c = j ? h : c || f, k.onreadystatechange = k.onload = function() {
        !l && g(k.readyState) && (l = 1, c(), k.onload = k.onreadystatechange = null)
      }, m(function() {
        l || (l = 1, c(1))
      }, e), i ? k.onload() : n.parentNode.insertBefore(k, n)
    }, a.yepnope.injectCss = function(a, c, d, e, g, i) {
      var e = b.createElement("link"),
        j, c = i ? h : c || f;
      e.href = a, e.rel = "stylesheet", e.type = "text/css";
      for (j in d) e.setAttribute(j, d[j]);
      g || (n.parentNode.insertBefore(e, n), m(c, 0))
    }
  }(this, document), Modernizr.load = function() {
    yepnope.apply(window, [].slice.call(arguments, 0))
  };

/*
 *         ________                                                            ________
 *         ______(_)_____ ____  __________________  __ _____________________   ______(_)_______
 *         _____  /_  __ `/  / / /  _ \_  ___/_  / / / ___  __ \  _ \__  __ \  _____  /__  ___/
 *         ____  / / /_/ // /_/ //  __/  /   _  /_/ /____  /_/ /  __/_  /_/ /______  / _(__  )
 *         ___  /  \__, / \__,_/ \___//_/    _\__, /_(_)  .___/\___/_  .___/_(_)__  /  /____/
 *         /___/     /_/                     /____/    /_/          /_/        /___/
 *
 *        http://pep.briangonzalez.org
 *        Kinetic drag for mobile/desktop.
 *
 *        Copyright (c) 2014 Brian Gonzalez
 *        Licensed under the MIT license.
 *
 *        Title generated using "Speed" @
 *        http://patorjk.com/software/taag/#p=display&f=Speed&t=jquery.pep.js
 */

;
(function($, window, undefined) {

  "use strict";

  //  create the defaults once
  var pluginName = 'pep';
  var defaults = {

    // Options
    // ----------------------------------------------------------------------------------------------
    // See ** https://github.com/briangonzalez/jquery.pep.js ** for fully documented options.
    // It was too hard to manage options here and in the readme.
    // ----------------------------------------------------------------------------------------------
    initiate: function() {},
    start: function() {},
    drag: function() {},
    stop: function() {},
    easing: null,
    rest: function() {},
    moveTo: false,
    callIfNotStarted: ['stop', 'rest'],
    startThreshold: [0, 0],
    grid: [1, 1],
    debug: false,
    activeClass: 'pep-active',
    multiplier: 1,
    velocityMultiplier: 2.5,
    shouldPreventDefault: true,
    allowDragEventPropagation: true,
    stopEvents: '',
    hardwareAccelerate: true,
    useCSSTranslation: true,
    disableSelect: true,
    cssEaseString: "cubic-bezier(0.190, 1.000, 0.220, 1.000)",
    cssEaseDuration: 1000,
    shouldEase: true,
    droppable: false,
    droppableActiveClass: 'pep-dpa',
    overlapFunction: false,
    constrainTo: false,
    removeMargins: true,
    place: true,
    deferPlacement: false,
    axis: null,
    forceNonCSS3Movement: false,
    elementsWithInteraction: 'input',
    revert: false,
    revertAfter: 'stop',
    revertIf: function() {
      return true;
    },
    ignoreRightClick: true,
    startPos: {
      left: null,
      top: null
    },
    useBoundingClientRect: false
  };

  //  ---------------------------------
  //  -----  Our main Pep object  -----
  //  ---------------------------------
  function Pep(el, options) {

    this.name = pluginName;

    // reference to our DOM object
    // and it's jQuery equivalent.
    this.el = el;
    this.$el = $(el);

    //  merge in defaults
    this.options = $.extend({}, defaults, options);

    // store document/body so we don't need to keep grabbing them
    // throughout the code
    this.$document = $(this.$el[0].ownerDocument);
    this.$body = this.$document.find('body');

    //  Create our triggers based on touch/click device
    this.moveTrigger = "MSPointerMove pointermove touchmove mousemove";
    this.startTrigger = "MSPointerDown pointerdown touchstart mousedown";
    this.stopTrigger = "MSPointerUp pointerup touchend mouseup";
    this.startTriggerArray = this.startTrigger.split(' ');
    this.moveTriggerArray = this.moveTrigger.split(' ');
    this.stopTriggerArray = this.stopTrigger.split(' ');
    this.stopEvents = [this.stopTrigger, this.options.stopEvents].join(' ');

    if (this.options.constrainTo === 'window')
      this.$container = this.$document;
    else if (this.options.constrainTo && (this.options.constrainTo !== 'parent'))
      this.$container = $(this.options.constrainTo);
    else
      this.$container = this.$el.parent();

    // IE need this
    if (this.isPointerEventCompatible())
      this.applyMSDefaults();

    this.CSSEaseHash = this.getCSSEaseHash();
    this.scale = 1;
    this.started = false;
    this.disabled = false;
    this.activeDropRegions = [];
    this.resetVelocityQueue();

    this.init();
    return this;
  }

  //  init();
  //    initialization logic
  //    you already have access to the DOM el and the options via the instance,
  //    e.g., this.el and this.options
  Pep.prototype.init = function() {

    if (this.options.debug)
      this.buildDebugDiv();

    if (this.options.disableSelect)
      this.disableSelect();

    // position the parent & place the object, if necessary.
    if (this.options.place && !this.options.deferPlacement) {
      this.positionParent();
      this.placeObject();
    }

    this.ev = {}; // to store our event movements
    this.pos = {}; // to store positions
    this.subscribe();
  };

  //  subscribe();
  //    useful in the event we want to programmatically
  //    interact with our Pep object.
  //      e.g.:     $('#pep').trigger('stop')
  Pep.prototype.subscribe = function() {
    var self = this;

    // Subscribe to our start event
    this.onStartEvent = function(ev) {
      self.handleStart(ev);
    };
    this.$el.on(this.startTrigger, this.onStartEvent);

    // Add a flag to events that start on elements that should allow interaction
    // so handleStart() can ignore them but allow them to bubble up through the DOM
    this.onStartEventOnElementsWithInteraction = function(ev) {
      ev.ignorePropagation = true;
    };
    this.$el.on(
      this.startTrigger,
      this.options.elementsWithInteraction,
      this.onStartEventOnElementsWithInteraction
    );

    // Subscribe to our stop event
    this.onStopEvents = function(ev) {
      self.handleStop(ev);
    };
    this.$document.on(this.stopEvents, this.onStopEvents);

    // Subscribe to our move event
    this.onMoveEvents = function(ev) {
      self.moveEvent = ev;
    };
    this.$document.on(this.moveTrigger, this.onMoveEvents);
  };

  Pep.prototype.unsubscribe = function() {
    this.$el.off(this.startTrigger, this.onStartEvent);
    this.$el.off(
      this.startTrigger,
      this.options.elementsWithInteraction,
      this.onStartEventOnElementsWithInteraction
    );
    this.$document.off(this.stopEvents, this.onStopEvents);
    this.$document.off(this.moveTrigger, this.onMoveEvents);
  };

  //  handleStart();
  //    once this.startTrigger occurs, handle all of the logic
  //    that must go on. This is where Pep's heavy lifting is done.
  Pep.prototype.handleStart = function(ev) {

    // ignorePropagation is set to true if the event originates from an element
    // listed in this.options.elementsWithInteraction
    if (ev.ignorePropagation) return;

    var self = this;

    // only continue chugging if our start event is a valid move event.
    if (this.isValidMoveEvent(ev) && !this.disabled) {

      if (!(this.options.ignoreRightClick && ev.which === 3)) {

        // IE10 Hack. Me not happy.
        if (this.isPointerEventCompatible() && ev.preventManipulation)
          ev.preventManipulation();

        // normalize event
        ev = this.normalizeEvent(ev);

        // position the parent & place the object, if necessary.
        if (this.options.place && this.options.deferPlacement) {
          this.positionParent();
          this.placeObject();
        }

        // log it
        this.log({
          type: 'event',
          event: ev.type
        });

        // hardware accelerate, if necessary.
        if (this.options.hardwareAccelerate && !this.hardwareAccelerated) {
          this.hardwareAccelerate();
          this.hardwareAccelerated = true;
        }

        // fire user's initiate event.
        var shouldContinue = this.options.initiate.call(this, ev, this);
        if (shouldContinue === false)
          return;


        // cancel the rest timeout
        clearTimeout(this.restTimeout);

        // add active class and reset css animation, if necessary
        this.$el.addClass(this.options.activeClass);
        this.removeCSSEasing();

        // store event's x & y values for later use
        this.startX = this.ev.x = ev.pep.x;
        this.startY = this.ev.y = ev.pep.y;

        // store initial offset.
        this.initialPosition = this.initialPosition || this.$el.position();

        // store the initial touch/click event, used to calculate the inital delta values.
        this.startEvent = this.moveEvent = ev;

        // make object active, so watchMoveLoop starts looping.
        this.active = true;

        // preventDefault(), is necessary
        if (this.options.shouldPreventDefault)
          ev.preventDefault();

        // allow / disallow event bubbling
        if (!this.options.allowDragEventPropagation)
          ev.stopPropagation();

        // animation loop to ensure we don't fire
        // too many unneccessary repaints
        (function watchMoveLoop() {
          if (!self.active) return;
          self.handleMove();
          self.requestAnimationFrame(watchMoveLoop);
        })();

        (function watchEasingLoop() {
          if (!self.options.easing) return;
          if (self.easing) self.options.easing.call(self, null, self);
          self.requestAnimationFrame(watchEasingLoop);
        })();
      }
    }
  };

  //  handleMove();
  //    the logic for when the move events occur
  Pep.prototype.handleMove = function() {

    // setup our event object
    if (typeof(this.moveEvent) === 'undefined')
      return;

    // get our move event's x & y
    var ev = this.normalizeEvent(this.moveEvent);
    var curX = window.parseInt(ev.pep.x / this.options.grid[0]) * this.options.grid[0];
    var curY = window.parseInt(ev.pep.y / this.options.grid[1]) * this.options.grid[1];

    // last in, first out (LIFO) queue to help us manage velocity
    this.addToLIFO({
      time: ev.timeStamp,
      x: curX,
      y: curY
    });

    // calculate values necessary to moving
    var dx, dy;

    if ($.inArray(ev.type, this.startTriggerArray) > -1) {
      dx = 0;
      dy = 0;
    } else {
      dx = curX - this.ev.x;
      dy = curY - this.ev.y;
    }

    this.dx = dx;
    this.dy = dy;
    this.ev.x = curX;
    this.ev.y = curY;

    // no movement in either direction -- so return
    if (dx === 0 && dy === 0) {
      this.log({
        type: 'event',
        event: '** stopped **'
      });
      return;
    }

    // check if object has moved past X/Y thresholds
    // if so, fire users start event
    var initialDx = Math.abs(this.startX - curX);
    var initialDy = Math.abs(this.startY - curY);
    if (!this.started && (initialDx > this.options.startThreshold[0] || initialDy > this.options.startThreshold[1])) {
      this.started = true;
      this.$el.addClass('pep-start');
      this.options.start.call(this, this.startEvent, this);
    }

    // Move before calculate position and fire events
    this.doMoveTo(dx, dy);

    // Calculate our drop regions
    if (this.options.droppable) {
      this.calculateActiveDropRegions();
    }

    // fire user's drag event.
    var continueDrag = this.options.drag.call(this, ev, this);

    if (continueDrag === false) {
      this.resetVelocityQueue();
      return;
    }

    // log the move trigger & event position
    this.log({
      type: 'event',
      event: ev.type
    });
    this.log({
      type: 'event-coords',
      x: this.ev.x,
      y: this.ev.y
    });
    this.log({
      type: 'velocity'
    });
  };

  Pep.prototype.doMoveTo = function(dx, dy) {
    var hash = this.handleConstraint(dx, dy);
    var xOp, yOp;

    // if using not using CSS transforms, move object via absolute position
    if (typeof this.options.moveTo === 'function') {
      xOp = (dx >= 0) ? "+=" + Math.abs(dx / this.scale) * this.options.multiplier : "-=" + Math.abs(dx / this.scale) * this.options.multiplier;
      yOp = (dy >= 0) ? "+=" + Math.abs(dy / this.scale) * this.options.multiplier : "-=" + Math.abs(dy / this.scale) * this.options.multiplier;

      if (this.options.constrainTo) {
        xOp = (hash.x !== false) ? hash.x : xOp;
        yOp = (hash.y !== false) ? hash.y : yOp;
      }

      // only move along single axis, if necessary
      if (this.options.axis === 'x') yOp = hash.y;
      if (this.options.axis === 'y') xOp = hash.x;

      this.options.moveTo.call(this, xOp, yOp);
    } else if (!this.shouldUseCSSTranslation()) {
      xOp = (dx >= 0) ? "+=" + Math.abs(dx / this.scale) * this.options.multiplier : "-=" + Math.abs(dx / this.scale) * this.options.multiplier;
      yOp = (dy >= 0) ? "+=" + Math.abs(dy / this.scale) * this.options.multiplier : "-=" + Math.abs(dy / this.scale) * this.options.multiplier;

      if (this.options.constrainTo) {
        xOp = (hash.x !== false) ? hash.x : xOp;
        yOp = (hash.y !== false) ? hash.y : yOp;
      }

      // only move along single axis, if necessary
      if (this.options.axis === 'x') yOp = hash.y;
      if (this.options.axis === 'y') xOp = hash.x;

      this.moveTo(xOp, yOp);
    } else {

      dx = (dx / this.scale) * this.options.multiplier;
      dy = (dy / this.scale) * this.options.multiplier;

      if (this.options.constrainTo) {
        dx = (hash.x === false) ? dx : 0;
        dy = (hash.y === false) ? dy : 0;
      }

      // only move along single axis, if necessary
      if (this.options.axis === 'x') dy = 0;
      if (this.options.axis === 'y') dx = 0;

      this.moveToUsingTransforms(dx, dy);
    }
  };

  //  handleStop();
  //    the logic for when the stop events occur
  Pep.prototype.handleStop = function(ev) {

    // no need to handle stop event if we're not active
    if (!this.active)
      return;

    // log it
    this.log({
      type: 'event',
      event: ev.type
    });

    // make object inactive, so watchMoveLoop returns
    this.active = false;

    // make object easing.
    this.easing = true;

    // remove our start class
    this.$el.removeClass('pep-start')
      .addClass('pep-ease');

    // Calculate our drop regions
    if (this.options.droppable) {
      this.calculateActiveDropRegions();
    }

    // fire user's stop event.
    if (this.started || (!this.started && $.inArray('stop', this.options.callIfNotStarted) > -1)) {
      this.options.stop.call(this, ev, this);
    }

    // ease the object, if necessary.
    if (this.options.shouldEase) {
      this.ease(ev, this.started);
    } else {
      this.removeActiveClass();
    }

    if (this.options.revert && (this.options.revertAfter === 'stop' || !this.options.shouldEase) && (this.options.revertIf && this.options.revertIf.call(this))) {
      this.revert();
    }

    // this must be set to false after
    // the user's stop event is called, so the dev
    // has access to it.
    this.started = false;

    // reset the velocity queue
    this.resetVelocityQueue();

  };

  //  ease();
  //    used in conjunction with the LIFO queue
  //    to ease the object after stop
  Pep.prototype.ease = function(ev, started) {

    var pos = this.$el.position();
    var vel = this.velocity();
    var dt = this.dt;
    var x = (vel.x / this.scale) * this.options.multiplier;
    var y = (vel.y / this.scale) * this.options.multiplier;

    var hash = this.handleConstraint(x, y, true);

    // ✪  Apply the CSS3 animation easing magic  ✪
    if (this.cssAnimationsSupported())
      this.$el.css(this.getCSSEaseHash());

    var xOp = (vel.x > 0) ? "+=" + x : "-=" + Math.abs(x);
    var yOp = (vel.y > 0) ? "+=" + y : "-=" + Math.abs(y);

    if (this.options.constrainTo) {
      xOp = (hash.x !== false) ? hash.x : xOp;
      yOp = (hash.y !== false) ? hash.y : yOp;
    }

    if (this.options.axis === 'x') yOp = "+=0";
    if (this.options.axis === 'y') xOp = "+=0";

    // ease it via JS, the last true tells it to animate.
    var jsAnimateFallback = !this.cssAnimationsSupported() || this.options.forceNonCSS3Movement;
    if (typeof this.options.moveTo === 'function') {
      this.options.moveTo.call(this, xOp, yOp);
    } else {
      this.moveTo(xOp, yOp, jsAnimateFallback);
    }

    // when the rest occurs, remove active class and call
    // user's rest event.
    var self = this;
    this.restTimeout = setTimeout(function() {

      // Calculate our drop regions
      if (self.options.droppable) {
        self.calculateActiveDropRegions();
      }

      self.easing = false;

      // call users rest event.
      if (started || (!started && $.inArray('rest', self.options.callIfNotStarted) > -1)) {
        self.options.rest.call(self, ev, self);
      }

      // revert thy self!
      if (self.options.revert && (self.options.revertAfter === 'ease' && self.options.shouldEase) && (self.options.revertIf && self.options.revertIf.call(self))) {
        self.revert();
      }

      // remove active class
      self.removeActiveClass();

    }, this.options.cssEaseDuration);

  };

  // normalizeEvent()
  Pep.prototype.normalizeEvent = function(ev) {
    ev.pep = {};

    if (this.isTouch(ev)) {

      ev.pep.x = ev.originalEvent.touches[0].pageX;
      ev.pep.y = ev.originalEvent.touches[0].pageY;
      ev.pep.type = ev.type;

    } else if (this.isPointerEventCompatible() || !this.isTouch(ev)) {

      if (ev.pageX) {
        ev.pep.x = ev.pageX;
        ev.pep.y = ev.pageY;
      } else {
        ev.pep.x = ev.originalEvent.pageX;
        ev.pep.y = ev.originalEvent.pageY;
      }

      ev.pep.type = ev.type;

    }

    return ev;
  };

  // resetVelocityQueue()
  //
  Pep.prototype.resetVelocityQueue = function() {
    this.velocityQueue = new Array(5);
  };

  //  moveTo();
  //    move the object to an x and/or y value
  //    using jQuery's .css function -- this fxn uses the
  //    .css({top: "+=20", left: "-=30"}) syntax
  Pep.prototype.moveTo = function(x, y, animate) {

    this.log({
      type: 'delta',
      x: x,
      y: y
    });
    if (animate) {
      this.$el.animate({
        top: y,
        left: x
      }, 0, 'easeOutQuad', {
        queue: false
      });
    } else {
      this.$el.stop(true, false).css({
        top: y,
        left: x
      });
    }

  };

  //  moveToUsingTransforms();
  //    move the object to an x and/or y value
  Pep.prototype.moveToUsingTransforms = function(x, y) {

    // Check for our initial values if we don't have them.
    var matrixArray = this.matrixToArray(this.matrixString());
    if (!this.cssX)
      this.cssX = this.xTranslation(matrixArray);

    if (!this.cssY)
      this.cssY = this.yTranslation(matrixArray);

    // CSS3 transforms are additive from current position
    this.cssX = this.cssX + x;
    this.cssY = this.cssY + y;

    this.log({
      type: 'delta',
      x: x,
      y: y
    });

    matrixArray[4] = this.cssX;
    matrixArray[5] = this.cssY;

    this.translation = this.arrayToMatrix(matrixArray);
    this.transform(this.translation);
  };

  Pep.prototype.transform = function(value) {
    this.$el.css({
      '-webkit-transform': value,
      '-moz-transform': value,
      '-ms-transform': value,
      '-o-transform': value,
      'transform': value
    });
  };

  Pep.prototype.xTranslation = function(matrixArray) {
    matrixArray = matrixArray || this.matrixToArray(this.matrixString());
    return parseInt(matrixArray[4], 10);
  };

  Pep.prototype.yTranslation = function(matrixArray) {
    matrixArray = matrixArray || this.matrixToArray(this.matrixString());
    return parseInt(matrixArray[5], 10);
  };


  // 3 helper functions for working with the
  // objects CSS3 transforms
  // matrixString
  // matrixToArray
  // arrayToMatrix
  Pep.prototype.matrixString = function() {

    var validMatrix = function(o) {
      return !(!o || o === 'none' || o.indexOf('matrix') < 0);
    };

    var matrix = "matrix(1, 0, 0, 1, 0, 0)";

    if (validMatrix(this.$el.css('-webkit-transform')))
      matrix = this.$el.css('-webkit-transform');

    if (validMatrix(this.$el.css('-moz-transform')))
      matrix = this.$el.css('-moz-transform');

    if (validMatrix(this.$el.css('-ms-transform')))
      matrix = this.$el.css('-ms-transform');

    if (validMatrix(this.$el.css('-o-transform')))
      matrix = this.$el.css('-o-transform');

    if (validMatrix(this.$el.css('transform')))
      matrix = this.$el.css('transform');

    return matrix;
  };

  Pep.prototype.matrixToArray = function(str) {
    return str.split('(')[1].split(')')[0].split(',');
  };

  Pep.prototype.arrayToMatrix = function(array) {
    return "matrix(" + array.join(',') + ")";
  };

  //  addToLIFO();
  //    a Last-In/First-Out array of the 5 most recent
  //    velocity points, which is used for easing
  Pep.prototype.addToLIFO = function(val) {
    // last in, first out
    var arr = this.velocityQueue;
    arr = arr.slice(1, arr.length);
    arr.push(val);
    this.velocityQueue = arr;
  };

  //  velocity();
  //    using the LIFO, calculate velocity and return
  //    velocity in each direction (x & y)
  Pep.prototype.velocity = function() {
    var sumX = 0;
    var sumY = 0;

    for (var i = 0; i < this.velocityQueue.length - 1; i++) {
      if (this.velocityQueue[i]) {
        sumX += (this.velocityQueue[i + 1].x - this.velocityQueue[i].x);
        sumY += (this.velocityQueue[i + 1].y - this.velocityQueue[i].y);
        this.dt = (this.velocityQueue[i + 1].time - this.velocityQueue[i].time);
      }
    }

    // return velocity in each direction.
    return {
      x: sumX * this.options.velocityMultiplier,
      y: sumY * this.options.velocityMultiplier
    };
  };

  Pep.prototype.revert = function() {
    if (this.shouldUseCSSTranslation()) {
      this.moveToUsingTransforms(-this.xTranslation(), -this.yTranslation());
    }

    if (this.options.place) {
      this.moveTo(this.initialPosition.left, this.initialPosition.top);
    }
  };

  //  requestAnimationFrame();
  //    requestAnimationFrame Polyfill
  //    More info:
  //    http://paulirish.com/2011/requestanimationframe-for-smart-animating/
  Pep.prototype.requestAnimationFrame = function(callback) {
    return window.requestAnimationFrame && window.requestAnimationFrame(callback) ||
      window.webkitRequestAnimationFrame && window.webkitRequestAnimationFrame(callback) ||
      window.mozRequestAnimationFrame && window.mozRequestAnimationFrame(callback) ||
      window.oRequestAnimationFrame && window.mozRequestAnimationFrame(callback) ||
      window.msRequestAnimationFrame && window.msRequestAnimationFrame(callback) ||
      window.setTimeout(callback, 1000 / 60);
  };

  //  positionParent();
  //    add the right positioning to the parent object
  Pep.prototype.positionParent = function() {

    if (!this.options.constrainTo || this.parentPositioned)
      return;

    this.parentPositioned = true;

    // make `relative` parent if necessary
    if (this.options.constrainTo === 'parent') {
      this.$container.css({
        position: 'relative'
      });
    } else if (this.options.constrainTo === 'window' &&
      this.$container.get(0).nodeName !== "#document" &&
      this.$container.css('position') !== 'static') {
      this.$container.css({
        position: 'static'
      });
    }

  };

  //  placeObject();
  //    add the right positioning to the object
  Pep.prototype.placeObject = function() {

    if (this.objectPlaced)
      return;

    this.objectPlaced = true;

    this.offset = (this.options.constrainTo === 'parent' || this.hasNonBodyRelative()) ?
      this.$el.position() : this.$el.offset();

    // better to leave absolute position alone if
    // it already has one.
    if (parseInt(this.$el.css('left'), 10))
      this.offset.left = this.$el.css('left');

    if (typeof this.options.startPos.left === "number")
      this.offset.left = this.options.startPos.left;

    if (parseInt(this.$el.css('top'), 10))
      this.offset.top = this.$el.css('top');

    if (typeof this.options.startPos.top === "number")
      this.offset.top = this.options.startPos.top;

    if (this.options.removeMargins)
      this.$el.css({
        margin: 0
      });

    this.$el.css({
      position: 'absolute',
      top: this.offset.top,
      left: this.offset.left
    });

  };

  //  hasNonBodyRelative()
  //    returns true if any parent other than the body
  //    has relative positioning
  Pep.prototype.hasNonBodyRelative = function() {
    return this.$el.parents().filter(function() {
      var $this = $(this);
      return $this.is('body') || $this.css('position') === 'relative';
    }).length > 1;
  };

  //  setScale()
  //    set the scale of the object being moved.
  Pep.prototype.setScale = function(val) {
    this.scale = val;
  };

  //  setMultiplier()
  //    set the multiplier of the object being moved.
  Pep.prototype.setMultiplier = function(val) {
    this.options.multiplier = val;
  };

  //  removeCSSEasing();
  //    remove CSS easing properties, if necessary
  Pep.prototype.removeCSSEasing = function() {
    if (this.cssAnimationsSupported())
      this.$el.css(this.getCSSEaseHash(true));
  };

  //  disableSelect();
  //    add the property which causes the object
  //    to not be selected user drags over text areas
  Pep.prototype.disableSelect = function() {

    this.$el.css({
      '-webkit-touch-callout': 'none',
      '-webkit-user-select': 'none',
      '-khtml-user-select': 'none',
      '-moz-user-select': 'none',
      '-ms-user-select': 'none',
      'user-select': 'none'
    });

  };

  // removeActiveClass()
  //  Removes the active class.
  Pep.prototype.removeActiveClass = function() {
    this.$el.removeClass([this.options.activeClass, 'pep-ease'].join(' '));
  };

  //  handleConstraint();
  //    returns a hash of where to move to
  //    when we constrain to parent/window
  Pep.prototype.handleConstraint = function(dx, dy, accountForTranslation) {
    var pos = this.$el.position();
    this.pos.x = pos.left;
    this.pos.y = pos.top;

    var hash = {
      x: false,
      y: false
    };

    var upperYLimit, upperXLimit, lowerXLimit, lowerYLimit;

    // log our positions
    this.log({
      type: "pos-coords",
      x: this.pos.x,
      y: this.pos.y
    });

    if ($.isArray(this.options.constrainTo)) {

      if (this.options.constrainTo[3] !== undefined && this.options.constrainTo[1] !== undefined) {
        upperXLimit = this.options.constrainTo[1] === false ? Infinity : this.options.constrainTo[1];
        lowerXLimit = this.options.constrainTo[3] === false ? -Infinity : this.options.constrainTo[3];
      }
      if (this.options.constrainTo[0] !== false && this.options.constrainTo[2] !== false) {
        upperYLimit = this.options.constrainTo[2] === false ? Infinity : this.options.constrainTo[2];
        lowerYLimit = this.options.constrainTo[0] === false ? -Infinity : this.options.constrainTo[0];
      }

      // is our object trying to move outside lower X & Y limits?
      if (this.pos.x + dx < lowerXLimit) hash.x = lowerXLimit;
      if (this.pos.y + dy < lowerYLimit) hash.y = lowerYLimit;

    } else if (typeof this.options.constrainTo === 'string') {
      lowerXLimit = 0;
      lowerYLimit = 0;
      upperXLimit = this.$container.width() - (this.options.useBoundingClientRect ? this.$el[0].getBoundingClientRect().width : this.$el.outerWidth());
      upperYLimit = this.$container.height() - (this.options.useBoundingClientRect ? this.$el[0].getBoundingClientRect().height : this.$el.outerHeight());

      // is our object trying to move outside lower X & Y limits?
      if (this.pos.x + dx < 0) hash.x = 0;
      if (this.pos.y + dy < 0) hash.y = 0;
    }

    // is our object trying to move outside upper X & Y limits?
    if (this.pos.x + dx > upperXLimit) hash.x = upperXLimit;
    if (this.pos.y + dy > upperYLimit) hash.y = upperYLimit;

    // Account for translation, which makes movement a little tricky.
    if (this.shouldUseCSSTranslation() && accountForTranslation) {
      if (hash.x === lowerXLimit && this.xTranslation()) hash.x = lowerXLimit - this.xTranslation();
      if (hash.x === upperXLimit && this.xTranslation()) hash.x = upperXLimit - this.xTranslation();

      if (hash.y === lowerYLimit && this.yTranslation()) hash.y = lowerYLimit - this.yTranslation();
      if (hash.y === upperYLimit && this.yTranslation()) hash.y = upperYLimit - this.yTranslation();
    }

    return hash;
  };

  //  getCSSEaseHash();
  //    returns a hash of params used in conjunction
  //    with this.options.cssEaseString
  Pep.prototype.getCSSEaseHash = function(reset) {
    if (typeof(reset) === 'undefined') reset = false;

    var cssEaseString;
    if (reset) {
      cssEaseString = '';
    } else if (this.CSSEaseHash) {
      return this.CSSEaseHash;
    } else {
      cssEaseString = ['all', this.options.cssEaseDuration + 'ms', this.options.cssEaseString].join(' ');
    }

    return {
      '-webkit-transition': cssEaseString, // chrome, safari, etc.
      '-moz-transition': cssEaseString, // firefox
      '-ms-transition': cssEaseString, // microsoft
      '-o-transition': cssEaseString, // opera
      'transition': cssEaseString // future
    };
  };

  // calculateActiveDropRegions()
  //    sets parent droppables of this.
  Pep.prototype.calculateActiveDropRegions = function() {
    var self = this;
    this.activeDropRegions.length = 0;

    $.each($(this.options.droppable), function(idx, el) {
      var $el = $(el);
      if (self.isOverlapping($el, self.$el)) {
        $el.addClass(self.options.droppableActiveClass);
        self.activeDropRegions.push($el);
      } else {
        $el.removeClass(self.options.droppableActiveClass);
      }
    });

  };

  //  isOverlapping();
  //    returns true if element a over
  Pep.prototype.isOverlapping = function($a, $b) {

    if (this.options.overlapFunction) {
      return this.options.overlapFunction($a, $b);
    }

    var rect1 = $a[0].getBoundingClientRect();
    var rect2 = $b[0].getBoundingClientRect();

    return !(rect1.right < rect2.left ||
      rect1.left > rect2.right ||
      rect1.bottom < rect2.top ||
      rect1.top > rect2.bottom);
  };

  //  isTouch();
  //    returns whether or not event is a touch event
  Pep.prototype.isTouch = function(ev) {
    return ev.type.search('touch') > -1;
  };

  // isPointerEventCompatible();
  //    return whether or note our device is pointer
  //    event compatible; typically means where on a
  //    touch Win8 device
  Pep.prototype.isPointerEventCompatible = function() {
    return ("MSPointerEvent" in window);
  };

  // applyMSDefaults();
  Pep.prototype.applyMSDefaults = function(first_argument) {
    this.$el.css({
      '-ms-touch-action': 'none',
      'touch-action': 'none',
      '-ms-scroll-chaining': 'none',
      '-ms-scroll-limit': '0 0 0 0'
    });
  };

  //  isValidMoveEvent();
  //    returns true if we're on a non-touch device -- or --
  //    if the event is **single** touch event on a touch device
  Pep.prototype.isValidMoveEvent = function(ev) {
    return (!this.isTouch(ev) || (this.isTouch(ev) && ev.originalEvent && ev.originalEvent.touches && ev.originalEvent.touches.length === 1));
  };

  //  shouldUseCSSTranslation();
  //    return true if we should use CSS transforms for move the object
  Pep.prototype.shouldUseCSSTranslation = function() {

    if (this.options.forceNonCSS3Movement)
      return false;

    if (typeof(this.useCSSTranslation) !== "undefined")
      return this.useCSSTranslation;

    var useCSSTranslation = false;

    if (!this.options.useCSSTranslation || (typeof(Modernizr) !== "undefined" && !Modernizr.csstransforms)) {
      useCSSTranslation = false;
    } else {
      useCSSTranslation = true;
    }

    this.useCSSTranslation = useCSSTranslation;
    return useCSSTranslation;
  };

  //  cssAnimationsSupported():
  //    returns true if the browser supports CSS animations
  //    which are used for easing..
  Pep.prototype.cssAnimationsSupported = function() {

    if (typeof(this.cssAnimationsSupport) !== "undefined") {
      return this.cssAnimationsSupport;
    }

    // If the page has Modernizr, let them do the heavy lifting.
    if ((typeof(Modernizr) !== "undefined" && Modernizr.cssanimations)) {
      this.cssAnimationsSupport = true;
      return true;
    }

    var animation = false,
      elm = document.createElement('div'),
      animationstring = 'animation',
      keyframeprefix = '',
      domPrefixes = 'Webkit Moz O ms Khtml'.split(' '),
      pfx = '';

    if (elm.style.animationName) {
      animation = true;
    }

    if (animation === false) {
      for (var i = 0; i < domPrefixes.length; i++) {
        if (elm.style[domPrefixes[i] + 'AnimationName'] !== undefined) {
          pfx = domPrefixes[i];
          animationstring = pfx + 'Animation';
          keyframeprefix = '-' + pfx.toLowerCase() + '-';
          animation = true;
          break;
        }
      }
    }

    this.cssAnimationsSupport = animation;
    return animation;
  };

  //  hardwareAccelerate();
  //    add fool-proof CSS3 hardware acceleration.
  Pep.prototype.hardwareAccelerate = function() {
    this.$el.css({
      '-webkit-perspective': 1000,
      'perspective': 1000,
      '-webkit-backface-visibility': 'hidden',
      'backface-visibility': 'hidden'
    });
  };

  //  getMovementValues();
  //    returns object pos, event position, and velocity in each direction.
  Pep.prototype.getMovementValues = function() {
    return {
      ev: this.ev,
      pos: this.pos,
      velocity: this.velocity()
    };
  };

  //  buildDebugDiv();
  //    Create a little div in the lower right corner of the window
  //    for extra info about the object currently moving
  Pep.prototype.buildDebugDiv = function() {

    // Build the debugDiv and it's inner HTML -- if necessary
    var $debugDiv;
    if ($('#pep-debug').length === 0) {
      $debugDiv = $('<div></div>');
      $debugDiv
        .attr('id', 'pep-debug')
        .append("<div style='font-weight:bold; background: red; color: white;'>DEBUG MODE</div>")
        .append("<div id='pep-debug-event'>no event</div>")
        .append("<div id='pep-debug-ev-coords'>event coords: <span class='pep-x'>-</span>, <span class='pep-y'>-</span></div>")
        .append("<div id='pep-debug-pos-coords'>position coords: <span class='pep-x'>-</span>, <span class='pep-y'>-</span></div>")
        .append("<div id='pep-debug-velocity'>velocity: <span class='pep-x'>-</span>, <span class='pep-y'>-</span></div>")
        .append("<div id='pep-debug-delta'>&Delta; movement: <span class='pep-x'>-</span>, <span class='pep-y'>-</span></div>")
        .css({
          position: 'fixed',
          bottom: 5,
          right: 5,
          zIndex: 99999,
          textAlign: 'right',
          fontFamily: 'Arial, sans',
          fontSize: 10,
          border: '1px solid #DDD',
          padding: '3px',
          background: 'white',
          color: '#333'
        });
    }

    var self = this;
    setTimeout(function() {
      self.debugElements = {
        $event: $("#pep-debug-event"),
        $velocityX: $("#pep-debug-velocity .pep-x"),
        $velocityY: $("#pep-debug-velocity .pep-y"),
        $dX: $("#pep-debug-delta .pep-x"),
        $dY: $("#pep-debug-delta .pep-y"),
        $evCoordsX: $("#pep-debug-ev-coords .pep-x"),
        $evCoordsY: $("#pep-debug-ev-coords .pep-y"),
        $posCoordsX: $("#pep-debug-pos-coords .pep-x"),
        $posCoordsY: $("#pep-debug-pos-coords .pep-y")
      };
    }, 0);

    $('body').append($debugDiv);
  };

  // log()
  Pep.prototype.log = function(opts) {
    if (!this.options.debug) return;

    switch (opts.type) {
      case "event":
        this.debugElements.$event.text(opts.event);
        break;
      case "pos-coords":
        this.debugElements.$posCoordsX.text(opts.x);
        this.debugElements.$posCoordsY.text(opts.y);
        break;
      case "event-coords":
        this.debugElements.$evCoordsX.text(opts.x);
        this.debugElements.$evCoordsY.text(opts.y);
        break;
      case "delta":
        this.debugElements.$dX.text(opts.x);
        this.debugElements.$dY.text(opts.y);
        break;
      case "velocity":
        var vel = this.velocity();
        this.debugElements.$velocityX.text(Math.round(vel.x));
        this.debugElements.$velocityY.text(Math.round(vel.y));
        break;
    }
  };

  // toggle()
  //  toggle the pep object
  Pep.prototype.toggle = function(on) {
    if (typeof(on) === "undefined") {
      this.disabled = !this.disabled;
    } else {
      this.disabled = !on;
    }
  };

  //  *** Special Easings functions ***
  //    Used for JS easing fallback
  //    We can use any of these for a
  //    good intertia ease
  $.extend($.easing, {
    easeOutQuad: function(x, t, b, c, d) {
      return -c * (t /= d) * (t - 2) + b;
    },
    easeOutCirc: function(x, t, b, c, d) {
      return c * Math.sqrt(1 - (t = t / d - 1) * t) + b;
    },
    easeOutExpo: function(x, t, b, c, d) {
      return (t === d) ? b + c : c * (-Math.pow(2, -10 * t / d) + 1) + b;
    }
  });

  //  wrap it
  //    A really lightweight plugin wrapper around the constructor,
  //    preventing against multiple instantiations.
  $.fn[pluginName] = function(options) {
    return this.each(function() {
      if (!$.data(this, 'plugin_' + pluginName)) {
        var pepObj = new Pep(this, options);
        $.data(this, 'plugin_' + pluginName, pepObj);
        $.pep.peps.push(pepObj);
      }
    });
  };

  //  The   _   ___ ___
  //       /_\ | _ \_ _|
  //      / _ \|  _/| |
  //     /_/ \_\_| |___|
  //
  $.pep = {};
  $.pep.peps = [];
  $.pep.toggleAll = function(on) {
    $.each(this.peps, function(index, pepObj) {
      pepObj.toggle(on);
    });
  };

  $.pep.unbind = function($obj) {
    var pep = $obj.data('plugin_' + pluginName);

    if (typeof pep === 'undefined')
      return;

    pep.toggle(false);
    pep.unsubscribe();
    $obj.removeData('plugin_' + pluginName);

  };

}(jQuery, window));


$(function() {
  var layerShowIng = 0;

  /*获取视窗可见区域高度 */
  function getViewportHeight() {
    return document.documentElement.clientHeight || document.body.clientHeight;
  };

  /*获取视窗可见区域宽度*/
  function getViewportWidth() {
    return document.documentElement.clientWidth || document.body.clientWidth;
  };

  /*获取视窗可见区域宽度*/
  function getCentration(VW, VH, w, h) {
    var topScroll = document.documentElement.scrollTop + document.body.scrollTop; //为了解决chrome下的bug
    var leftScroll = document.documentElement.scrollLeft + document.body.scrollLeft;
    var divTop = (VH - parseInt(h)) / 2 + topScroll,
      divLeft = (VW - parseInt(w)) / 2 + leftScroll;
    return {
      top: divTop,
      left: divLeft
    }
  };

  /*浮动窗口飞入右上角*/
  function flyToRightTop() {
    var layer = $("#layer"),
      ViewportWidth = getViewportWidth(),
      ViewportHeight = getViewportHeight();
    var layerW = layer.width(),
      layerH = layer.height(),
      RTWidth = layerW * 0.4,
      RTHeight = layerH * 0.4,
      toLeftP = ViewportWidth - RTWidth - 35;

    $.pep.unbind(layer); // unbind

    layer.animate({
      top: 15,
      left: toLeftP,
      width: RTWidth,
      height: RTHeight
    }, 500, function() {

      /*layer.on("click dblclick", ".img", function(e) {
        that = $(this);
        if (e.type === "click") {     
          if (e.target == this) {
            layerShowIng = true;
            layerShow();
          }
        }else if(e.type === "dblclick"){
          
        }
      });*/

    });


  }

  /*浮动窗口飞入右下角*/
  function flyToRightBottom() {
    var layer = $("#layer"),
      ViewportWidth = getViewportWidth(),
      ViewportHeight = getViewportHeight();
    var layerW = layer.width(),
      layerH = layer.height(),
      RTWidth = layerW * 0.4,
      RTHeight = layerH * 0.4,
      toTopP = ViewportHeight - RTHeight - 35
    toLeftP = ViewportWidth - RTWidth - 35;

    $.pep.unbind(layer); // unbind

    layer.animate({
      top: toTopP,
      left: toLeftP,
      width: RTWidth,
      height: RTHeight
    }, 500, function() {
      layer.pep({
        axis: 'x',
        drag: bottomDragMove,
        stop: bottomDragStop,
        rest: bottomDragRest
      });
    });
  }

  /*浮动窗口飞入中心*/
  function flyToCenter() {
    var layer = $("#layer"),
      ViewportWidth = getViewportWidth(),
      ViewportHeight = getViewportHeight();
    var layerW = layer.width(),
      layerH = layer.height(),
      RTWidth = ViewportWidth * 0.8,
      RTHeight = ViewportHeight * 0.6;
    var positionTL = getCentration(ViewportWidth, ViewportHeight, RTWidth, RTHeight);

    layer.animate({
      top: positionTL.top,
      left: positionTL.left,
      width: RTWidth,
      height: RTHeight
    }, 500, function() {
      layer.pep({
        axis: 'y',
        drag: centerDrag
      });
    });
  }


  //中心拖动
  function centerDrag(ev, obj) {
    var drag = $(obj.el);
    var vel = obj.velocity();

    if (vel.y > 20) {
      flyToRightBottom();
    } else if (vel.y < -20) {
      flyToRightTop();
    }
  }

  //底部拖动中
  function bottomDragMove(ev, obj) {
    var drag = $(obj.el),
      vel = obj.velocity(),
      ViewportWidth = getViewportWidth(),
      layerW = drag.width(),
      leftPosition = ViewportWidth - layerW - 35,
      left = Math.abs(leftPosition - String(drag.position().left));


    if (left > 0) {
      var dragMaxLength = layerW * 1.5,
        transparency = 1 - left / dragMaxLength;
      drag.css({
        opacity: transparency
      });

    }

  }

  //底部拖动停止
  function bottomDragStop(ev, obj) {
    
  }

  //底部拖动停止
  function bottomDragRest(ev, obj) {
    var drag = $(obj.el),
      vel = obj.velocity(),
      ViewportWidth = getViewportWidth(),
      layerW = drag.width(),
      startLeftPosition = ViewportWidth - layerW - 35,
      restLeftPosition = String(drag.position().left),
      length = Math.abs(startLeftPosition - restLeftPosition),
      showMaxLength = layerW * 0.5,
      endPosition = ViewportWidth - layerW * 2;

    if (length > showMaxLength) {

      if (restLeftPosition > endPosition) {
        $.pep.unbind(drag); // unbind
        drag.animate({
          opacity: 0,
          left: endPosition
        }, 200, function() {
          layerShowIng = 0;
        });
      } else {
        $.pep.unbind(drag); // unbind
        drag.animate({
          opacity: 0
        }, 100, function() {
          layerShowIng = 0;
        });
      }


    }

  }



  function layerShow() {
    var layer = $("#layer"),
      ViewportWidth = getViewportWidth(),
      ViewportHeight = getViewportHeight(),
      layerWidth = ViewportWidth * 0.8,
      layerHeight = ViewportHeight * 0.6;
    var positionTL = getCentration(ViewportWidth, ViewportHeight, layerWidth, layerHeight);
    layer.css({
      top: positionTL.top,
      left: positionTL.left,
      width: layerWidth,
      height: layerHeight
    });
    layer.addClass("layer-show");
    layer.pep({
      axis: 'y',
      drag: centerDrag
    });
  }



  //图片点击弹出视频窗口
  $(".list").on("click", ".img", function(e) {
    that = $(this);
    if (e.type === "click") {
      console.log(e.target == this)
      if (e.target == this) {
        console.log(layerShowIng)
        if (layerShowIng == 0) {
          layerShowIng = 1;
          layerShow();
        } else if (layerShowIng == 1 || layerShowIng == 2 || layerShowIng == 3) {

        }
      }
    }
  });

  $("#chat-form").bind("submit", function() {
    var val = MEditor.getContent();
    if (val.length > 0) {
      CHAT.insert({
        title: {
          'class': 'red bold',
          'html': '标题'
        },
        content: [{
          'class': 'blue',
          'html': val
        }]
      });
    }
    return false;
  });
});