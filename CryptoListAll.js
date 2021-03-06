! function() {
  "use strict";
  var t = {
    width: 1100,
    height: 512,
    defaultColumn: "overview",
    defaultScreen: "most_capitalized",
    market: "america",
    showToolbar: !0
  };
  var e = document.createElement("a");

  function r(t) {
    e.href = t, e.host || (e.href = e.href);
    var r = e.host;
    e.pathname;
    return "http:" === e.protocol && (r = r.replace(/:80$/, "")), "https:" === e.protocol && (r = r.replace(/:443$/, "")), {
      host: r,
      pathname: ("/" === e.pathname[0] ? "" : "/") + e.pathname,
      href: e.href
    }
  }
  var i = function() {
      var t = this;
      this._getScriptsInfo().forEach(function(e) {
        t._replaceScript(e)
      })
    },
    n = {
      embedWidgetSitePath: {
        configurable: !0
      },
      widgetName: {
        configurable: !0
      },
      defaultSettings: {
        configurable: !0
      },
      propertiesToWorkWith: {
        configurable: !0
      },
      propertiesToSkipInHash: {
        configurable: !0
      }
    };
  n.embedWidgetSitePath.get = function() {
    throw new Error("Method must be overridden")
  }, n.widgetName.get = function() {
    throw new Error("Method must be overridden")
  }, n.defaultSettings.get = function() {
    throw new Error("Method must be overridden")
  }, n.propertiesToWorkWith.get = function() {
    return []
  }, i.prototype.filterRawSettings = function(t) {
    var e = this,
      r = {};
    return Object.keys(t).forEach(function(i) {
      -1 !== e.propertiesToWorkWith.indexOf(i) && (r[i] = t[i])
    }), r
  }, n.propertiesToSkipInHash.get = function() {
    return ["customer", "locale"]
  }, i.prototype._getScriptsInfo = function() {
    var t = function() {
      if (document.currentScript) return document.currentScript.src;
      for (var t = document.getElementsByTagName("script"), e = 0; e < t.length; e++)
        if ("interactive" === t[e].readyState) return t[e].src;
      try {
        throw new Error
      } catch (t) {
        var r = /\((.*?):\d+:\d+\)\s*$/m.exec(t.stack);
        if (r) return r[1]
      }
      return null
    }();
    if (!t) return console.error("Could not self-replace the script, widget embedding has been aborted"), [];
    for (var e = r(t), i = e.host, n = e.href, o = document.getElementsByTagName("script"), s = [], a = 0; a < o.length; a++) {
      var c = o.item(a);
      c.src && r(c.src).href === n && s.push(c)
    }
    var h, p = (void 0 === (h = i) && (h = location.host), -1 !== ["i18n.tradingview.com", "partial.tradingview.com", "www.tradingview.com", "wwwcn.tradingview.com"].indexOf(h) || -1 !== ["d33t3vvu2t2yu5.cloudfront.net", "dwq4do82y8xi7.cloudfront.net", "s.tradingview.com", "s3.tradingview.com"].indexOf(h) || h.match(/^[a-z]{2}\.tradingview\.com/) || h.match(/prod-[^.]+.tradingview.com/) ? "battle" : -1 !== h.indexOf("tradingview.com") ? "staging" : h.match(/webcharts/) ? "staging_local" : (h.match(/^localhost(:\d+)?$/), "local"));
    return s.map(function(t) {
      return {
        scriptHost: i,
        scriptEnv: p,
        scriptElement: t
      }
    })
  }, i.prototype._replaceScript = function(t) {
    var e = t.scriptEnv,
      r = t.scriptHost,
      i = t.scriptElement;
    this.script = i;
    var n = this._scriptContentToJSON();
    n && (this.settings = this.filterRawSettings(n)), n && this._isValidSettings() || (console.error("Invalid settings provided, fall back to defaults"), this.settings = this.filterRawSettings(this.defaultSettings));
    var o, s = isNaN(this.settings.height) ? this.settings.height : this.settings.height + "px",
      a = isNaN(this.settings.width) ? this.settings.width : this.settings.width + "px";
    this.script.parentNode && this.script.parentNode.classList.contains("tradingview-widget-container") ? this.iframeContainer = this.script.parentNode : this.iframeContainer = document.createElement("div"), this.iframeContainer.style.width = a, this.iframeContainer.style.height = s, this.iframeContainer.appendChild(((o = document.createElement("style")).innerHTML = "\n\t.tradingview-widget-copyright {\n\t\tfont-size: 13px !important;\n\t\tline-height: 32px !important;\n\t\ttext-align: center !important;\n\t\tvertical-align: middle !important;\n\t\tfont-family: 'Trebuchet MS', Tahoma, Arial, sans-serif !important;\n\t\tcolor: #9db2bd !important;\n\t}\n\n\t.tradingview-widget-copyright .blue-text {\n\t\tcolor: #3bb3e4 !important;\n\t}\n\n\t.tradingview-widget-copyright a {\n\t\ttext-decoration: none !important;\n\t\tcolor: #9db2bd !important;\n\t}\n\n\t.tradingview-widget-copyright a:visited {\n\t\tcolor: #9db2bd !important;\n\t}\n\n\t.tradingview-widget-copyright a:hover .blue-text {\n\t\tcolor: #38acdb !important;\n\t}\n\n\t.tradingview-widget-copyright a:active .blue-text {\n\t\tcolor: #299dcd !important;\n\t}\n\n\t.tradingview-widget-copyright a:visited .blue-text {\n\t\tcolor: #3bb3e4 !important;\n\t}\n\t", o));
    var c = this._extractOldStyleEmbedCopyrightFromDOM(),
      h = c && !this.settings.whitelabel,
      p = this.iframeContainer.querySelector(".tradingview-widget-copyright"),
      d = c || p ? "calc(" + s + " - 32px)" : s;
    this.settings.utm_source = location.hostname, this.settings.utm_medium = p ? "widget_new" : "widget", this.settings.utm_campaign = this.widgetName, this.iframe = this._createIframe(d, a, r, e, i.id);
    var l = this.iframeContainer.querySelector(".tradingview-widget-container__widget");
    if (l ? (this.script.parentNode.replaceChild(this.iframe, l), this.script.parentNode.removeChild(this.script)) : (this.iframeContainer.appendChild(this.iframe), this.script.parentNode.replaceChild(this.iframeContainer, this.script)), h) {
      var g = document.createElement("div");
      g.style.height = "32px", g.style.lineHeight = "32px", g.style.width = a, g.style.textAlign = "center", g.style.verticalAlign = "middle", g.innerHTML = c.innerHTML, this.iframeContainer.appendChild(g)
    }
  }, i.prototype._iframeSrcBase = function(t, e) {
    var r = "https://s.tradingview.com";
    return "local" === e ? r = "http://" + t : "staging" === e && (r = -1 !== t.indexOf("beta.tradingview.com") ? "https://betacdn.tradingview.com" : "https://" + t), this.settings.customer && -1 !== this.propertiesToSkipInHash.indexOf("customer") && (r += "/" + this.settings.customer), r + this.embedWidgetSitePath
  }, i.prototype._isValidSettings = function() {
    var t = function(t) {
      if (void 0 === t) return !0;
      var e = parseInt(t) + "%" == t + "";
      return parseInt(t) + "" == t + "" || e
    };
    return t(this.settings.width) && t(this.settings.height)
  }, i.prototype._buildGetQueryString = function() {
    var t = this.settings.locale;
    return t ? "?locale=" + t : ""
  }, i.prototype._buildHashString = function(t) {
    var e = this,
      r = {};
    return t && (r.frameElementId = t), Object.keys(this.settings).forEach(function(t) {
      -1 === e.propertiesToSkipInHash.indexOf(t) && (r[t] = e.settings[t])
    }), Object.keys(r).length > 0 ? "#" + encodeURIComponent(JSON.stringify(r)) : ""
  }, i.prototype._scriptContentToJSON = function() {
    var t = this.script.innerHTML.trim();
    try {
      return JSON.parse(t)
    } catch (t) {
      return console.error("Widget settings parse error: " + t), null
    }
  }, i.prototype._createIframe = function(t, e, r, i, n) {
    var o = document.createElement("iframe");
    n && (o.id = n), this.settings.enableScrolling || o.setAttribute("scrolling", "no"), o.setAttribute("allowtransparency", !0), o.setAttribute("frameborder", 0), o.style.boxSizing = "border-box", o.style.height = t, o.style.width = e;
    var s = this._iframeSrcBase(r, i) + this._buildGetQueryString() + this._buildHashString(n);
    return o.setAttribute("src", s), o
  }, i.prototype._extractOldStyleEmbedCopyrightFromDOM = function() {
    return function(t) {
      if (null === t) return null;
      var e = t.querySelector("#tradingview-copyright"),
        r = t.querySelector("#tradingview-quotes"),
        i = e || r;
      return i && t.removeChild(i), i
    }(this.script.parentNode)
  }, Object.defineProperties(i.prototype, n), new(function(e) {
    function r() {
      e.apply(this, arguments)
    }
    e && (r.__proto__ = e), r.prototype = Object.create(e && e.prototype), r.prototype.constructor = r;
    var i = {
      widgetName: {
        configurable: !0
      },
      embedWidgetSitePath: {
        configurable: !0
      },
      defaultSettings: {
        configurable: !0
      },
      propertiesToWorkWith: {
        configurable: !0
      },
      propertiesToSkipInHash: {
        configurable: !0
      }
    };
    return i.widgetName.get = function() {
      return "forex" === this.settings.market ? "forexscreener" : "crypto_mkt" === this.settings.screener_type ? "cryptomktscreener" : "crypto" === this.settings.market ? "cryptoscreener" : "screener"
    }, i.embedWidgetSitePath.get = function() {
      return "crypto_mkt" === this.settings.screener_type ? "/cryptomktscreenerwidget/" : "/screenerwidget/"
    }, i.defaultSettings.get = function() {
      return t
    }, i.propertiesToWorkWith.get = function() {
      return ["customer", "defaultColumn", "defaultScreen", "displayCurrency", "height", "largeChartUrl", "locale", "market", "screener_type", "showToolbar", "transparency", "whitelabel", "width"]
    }, i.propertiesToSkipInHash.get = function() {
      var t = ["locale"];
      return this.settings && this.settings.screener_type && "crypto_mkt" === this.settings.screener_type && t.push("customer"), t
    }, r.prototype.filterRawSettings = function(t) {
      var r = e.prototype.filterRawSettings.call(this, t);
      return "crypto_mkt" === r.screener_type && (r.market = "crypto"), r.enableScrolling = !0, r
    }, Object.defineProperties(r.prototype, i), r
  }(i))
}();