var scrollFunctionForDiv = function(element, maxScroll, scrollAmount, scrollVelocity, direction) {
  setTimeout(function() {
    if (direction == 'left') {
      if (scrollAmount > -(maxScroll + scrollVelocity)) {
        scrollAmount = scrollAmount - scrollVelocity;
        element.style.marginLeft = scrollAmount + "px";
        scrollFunctionForDiv(element, maxScroll, scrollAmount, scrollVelocity, direction);
      } else {
        scrollAmount = scrollAmount + scrollVelocity;
        element.style.marginLeft = scrollAmount + "px";
        scrollFunctionForDiv(element, maxScroll, scrollAmount, scrollVelocity, 'right');
      }
    }
    if (direction == 'right') {
      if (scrollAmount < scrollVelocity) {
        scrollAmount = scrollAmount + scrollVelocity;
        element.style.marginLeft = scrollAmount + "px";
        scrollFunctionForDiv(element, maxScroll, scrollAmount, scrollVelocity, direction);
      } else {
        scrollAmount = scrollAmount - scrollVelocity;
        element.style.marginLeft = scrollAmount + "px";
        scrollFunctionForDiv(element, maxScroll, scrollAmount, scrollVelocity, 'left');
      }
    }
  }, 1000);
}
var scrollIfNeeded = function(element) {
  var scrollVelocity = 40;
  var totalWidth = element.offsetWidth;
  var scrollWidth = element.scrollWidth;
  var maxScroll = scrollWidth - totalWidth;
  if (maxScroll > 0) {
    scrollFunctionForDiv(element, maxScroll, scrollVelocity, scrollVelocity, 'left');
  }
}

function cccCreateCSSSelector(selector, styleRules) {
  var style = document.createElement('style');
  style.type = 'text/css';
  document.getElementsByTagName('head')[0].appendChild(style);
  if (!(style.sheet || {}).insertRule) {
    (style.styleSheet || style.sheet).addRule(selector, styleRules);
  } else {
    style.sheet.insertRule(selector + "{" + styleRules + "}", 0);
  }
}

function cccRefreshHeaderV3DataHeader() {
  var url = 'https://min-api.cryptocompare.com/data/pricemultifull?fsyms=BTC,ETH,BCH,XRP,LTC,ADA,DASH,XEM,XMR,BTG,XLM,NEO,ETC,QTUM,MONA,XVG,DOGE&tsyms=USD&extraParams=W_local';
  var xhr = typeof XMLHttpRequest != 'undefined' ? new XMLHttpRequest() : new ActiveXObject('Microsoft.XMLHTTP');

  xhr.open('get', url, true);
  xhr.onreadystatechange = function() {
    var status;
    var data;

    if (xhr.readyState == 4) {
      status = xhr.status;
      if (status == 200) {
        data = JSON.parse(xhr.responseText);

        var fsyms = 'BTC,ETH,BCH,XRP,LTC,ADA,DASH,XEM,XMR,BTG,XLM,NEO,ETC,QTUM,MONA,XVG,DOGE'.split(',');
        var tsyms = 'USD'.split(',');

        for (var i = 0; i < fsyms.length; i++) {
          for (var k = 0; k < tsyms.length; k++) {
            var fsym = fsyms[i];
            var tsym = tsyms[k];
            if (fsym == tsym) {
              continue;
            };
            var priceElm = document.getElementById('CCCHeader3Price_' + fsym + '_' + tsym);

            priceElm.innerHTML = data.DISPLAY[fsym][tsym].PRICE;

            if (cccCurrentTheme.General.showChangePercent) {
              var changePctContainer = document.getElementById('CCCHeader3ChangePctContainer_' + fsym + '_' + tsym);
              var changePctElm = document.getElementById('CCCHeader3ChangePct_' + fsym + '_' + tsym);
              ChangePct = data.RAW[fsym][tsym].CHANGEPCT24HOUR;

              changePctElm = data.DISPLAY[fsym][tsym].CHANGEPCT24HOUR + ' %';
              if (ChangePct >= 0) {
                changePctContainer.style.color = cccCurrentTheme.Trend.colorUp;
              } else {
                changePctContainer.style.color = cccCurrentTheme.Trend.colorDown;
              }
            }
          }
        }
      } else {
        // pass
      }
    }
  };
  xhr.send();
}

var cccCurrentTheme = {
  General: {
    background: '#FFF',
    priceText: '#000',
    showLogo: true,
    showChangePercent: true,
    enableMarquee: false
  },
  Currency: {
    color: '#000'
  },
  Trend: {
    colorUp: '#3d9400',
    colorDown: '#A11B0A',
    colorUnchanged: '#2C4C76'
  }
};

if (typeof cccTheme !== 'undefined') {
  for (var key in cccCurrentTheme) {
    var group = cccCurrentTheme[key];
    for (var prop in group) {
      if (!group.hasOwnProperty(prop)) continue;
      if (cccTheme.hasOwnProperty(key) && cccTheme[key].hasOwnProperty(prop)) {
        cccCurrentTheme[key][prop] = cccTheme[key][prop];
      }
    }
  }
}

if (typeof cccThemeV3Header !== 'undefined') {
  for (var key in cccCurrentTheme) {
    var group = cccCurrentTheme[key];
    for (var prop in group) {
      if (!group.hasOwnProperty(prop)) continue;
      if (cccThemeV3Header.hasOwnProperty(key) && cccThemeV3Header[key].hasOwnProperty(prop)) {
        cccCurrentTheme[key][prop] = cccThemeV3Header[key][prop];
      }
    }
  }
}


var embedable = document.createElement("div");
var embedableChart = document.createElement("div");
var style = document.createElement("style");

embedable.className = "ccc-widget ccc-header-v3";
embedable.id = 'marquee-container';
embedable.style.background = cccCurrentTheme.General.background;
embedable.style.boxSizing = "border-box";
embedable.style.lineHeight = "1";
embedable.style.overflow = "hidden";

cccCreateCSSSelector('#marq_kill_marg_bor', 'border:none!important;margin:0!important');
cccCreateCSSSelector('.ccc-coin-header-v3-container', 'white-space: nowrap;');
cccCreateCSSSelector('.ccc-header-v3-ccc-price-container', 'margin-right: 15px; display: inline-block;');
cccCreateCSSSelector('.ccc-header-v3 a', 'text-decoration: none; display: inline-block;');
cccCreateCSSSelector('.ccc-header-v3 a:hover', 'text-decoration: none;');
cccCreateCSSSelector('.ccc-header-v3 a:focus', 'text-decoration: none;');
cccCreateCSSSelector('.ccc-header-v3-price-name', 'vertical-align: middle; font-family: Roboto, sans-serif; color: ' + cccCurrentTheme.Currency.color + '; font-weight: 100;  margin: 0px; color: ' + cccCurrentTheme.General.priceText);
cccCreateCSSSelector('.ccc-header-v3-price-value', 'vertical-align: middle; font-family: "Roboto", sans-serif;  text-decoration: none; height: 40px;');
cccCreateCSSSelector('.ccc-header-v3-price-change', 'vertical-align: middle; font-family: "Roboto", sans-serif; display:inline-block; vertical-align: middle;');
cccCreateCSSSelector('.ccc-header-v3-price-logo', 'height: 25px; width: 25px;');


var inner = document.createElement("div");
inner.id = "marquee-inner";

var embedableCoin = document.createElement("div");
embedableCoin.className = "ccc-coin-header-v3-container marquee";
embedableCoin.id = "marquee-element";
embedableCoin.style.margin = "0px";
embedableCoin.style.padding = "0px";
embedableCoin.style.whiteSpace = "no-wrap";
embedableCoin.style.transition = "1s all linear";


var fsym = 'BTC';


var priceDiv = document.createElement("div");
priceDiv.className = "ccc-header-v3-ccc-price-container";
var elChange = '';
var elLogo = '';

if (cccCurrentTheme.General.showChangePercent)
  elChange = `
					<span
						class="ccc-header-v3-price-change"
						id="CCCHeader3ChangePctContainer_` + fsym + `_USD"
						style="color: ` + cccCurrentTheme.Trend.colorDown + `;"
					>
						(<span id="CCCHeader3ChangePct` + fsym + `_USD">-3.66 %</span>)
					</span>
		`;

if (cccCurrentTheme.General.showLogo) {
  elLogo = `
			<img class="ccc-header-v3-price-logo" src="https://www.cryptocompare.com/media/19633/btc.png" style="vertical-align: middle;"/>
		`;
}



priceDiv.innerHTML = `
									<a href="https://www.cryptocompare.com/coins/btc/overview/USD" target="_blank" rel="nofollow">
										` + elLogo + `
										<span class="ccc-header-v3-price-name">BTC: </span>
										<span class="ccc-header-v3-price-value"  style="color: ` + cccCurrentTheme.General.priceText + `;" id="CCCHeader3Price_` + fsym + `_USD" >
											$ 7,920.12
										</span>
										` + elChange + `
									</a>
									`;
embedableCoin.appendChild(priceDiv);


var fsym = 'ETH';


var priceDiv = document.createElement("div");
priceDiv.className = "ccc-header-v3-ccc-price-container";
var elChange = '';
var elLogo = '';

if (cccCurrentTheme.General.showChangePercent)
  elChange = `
					<span
						class="ccc-header-v3-price-change"
						id="CCCHeader3ChangePctContainer_` + fsym + `_USD"
						style="color: ` + cccCurrentTheme.Trend.colorDown + `;"
					>
						(<span id="CCCHeader3ChangePct` + fsym + `_USD">-2.73 %</span>)
					</span>
		`;

if (cccCurrentTheme.General.showLogo) {
  elLogo = `
			<img class="ccc-header-v3-price-logo" src="https://www.cryptocompare.com/media/20646/eth_logo.png" style="vertical-align: middle;"/>
		`;
}



priceDiv.innerHTML = `
									<a href="https://www.cryptocompare.com/coins/eth/overview/USD" target="_blank" rel="nofollow">
										` + elLogo + `
										<span class="ccc-header-v3-price-name">ETH: </span>
										<span class="ccc-header-v3-price-value"  style="color: ` + cccCurrentTheme.General.priceText + `;" id="CCCHeader3Price_` + fsym + `_USD" >
											$ 463.49
										</span>
										` + elChange + `
									</a>
									`;
embedableCoin.appendChild(priceDiv);


var fsym = 'BCH';


var priceDiv = document.createElement("div");
priceDiv.className = "ccc-header-v3-ccc-price-container";
var elChange = '';
var elLogo = '';

if (cccCurrentTheme.General.showChangePercent)
  elChange = `
					<span
						class="ccc-header-v3-price-change"
						id="CCCHeader3ChangePctContainer_` + fsym + `_USD"
						style="color: ` + cccCurrentTheme.Trend.colorDown + `;"
					>
						(<span id="CCCHeader3ChangePct` + fsym + `_USD">-4.86 %</span>)
					</span>
		`;

if (cccCurrentTheme.General.showLogo) {
  elLogo = `
			<img class="ccc-header-v3-price-logo" src="https://www.cryptocompare.com/media/1383919/12-bitcoin-cash-square-crop-small-grn.png" style="vertical-align: middle;"/>
		`;
}



priceDiv.innerHTML = `
									<a href="https://www.cryptocompare.com/coins/bch/overview/USD" target="_blank" rel="nofollow">
										` + elLogo + `
										<span class="ccc-header-v3-price-name">BCH: </span>
										<span class="ccc-header-v3-price-value"  style="color: ` + cccCurrentTheme.General.priceText + `;" id="CCCHeader3Price_` + fsym + `_USD" >
											$ 798.75
										</span>
										` + elChange + `
									</a>
									`;
embedableCoin.appendChild(priceDiv);


var fsym = 'XRP';


var priceDiv = document.createElement("div");
priceDiv.className = "ccc-header-v3-ccc-price-container";
var elChange = '';
var elLogo = '';

if (cccCurrentTheme.General.showChangePercent)
  elChange = `
					<span
						class="ccc-header-v3-price-change"
						id="CCCHeader3ChangePctContainer_` + fsym + `_USD"
						style="color: ` + cccCurrentTheme.Trend.colorDown + `;"
					>
						(<span id="CCCHeader3ChangePct` + fsym + `_USD">-2.61 %</span>)
					</span>
		`;

if (cccCurrentTheme.General.showLogo) {
  elLogo = `
			<img class="ccc-header-v3-price-logo" src="https://www.cryptocompare.com/media/34477776/xrp.png" style="vertical-align: middle;"/>
		`;
}



priceDiv.innerHTML = `
									<a href="https://www.cryptocompare.com/coins/xrp/overview/USD" target="_blank" rel="nofollow">
										` + elLogo + `
										<span class="ccc-header-v3-price-name">XRP: </span>
										<span class="ccc-header-v3-price-value"  style="color: ` + cccCurrentTheme.General.priceText + `;" id="CCCHeader3Price_` + fsym + `_USD" >
											$ 0.4518
										</span>
										` + elChange + `
									</a>
									`;
embedableCoin.appendChild(priceDiv);


var fsym = 'LTC';


var priceDiv = document.createElement("div");
priceDiv.className = "ccc-header-v3-ccc-price-container";
var elChange = '';
var elLogo = '';

if (cccCurrentTheme.General.showChangePercent)
  elChange = `
					<span
						class="ccc-header-v3-price-change"
						id="CCCHeader3ChangePctContainer_` + fsym + `_USD"
						style="color: ` + cccCurrentTheme.Trend.colorDown + `;"
					>
						(<span id="CCCHeader3ChangePct` + fsym + `_USD">-3.94 %</span>)
					</span>
		`;

if (cccCurrentTheme.General.showLogo) {
  elLogo = `
			<img class="ccc-header-v3-price-logo" src="https://www.cryptocompare.com/media/19782/litecoin-logo.png" style="vertical-align: middle;"/>
		`;
}



priceDiv.innerHTML = `
									<a href="https://www.cryptocompare.com/coins/ltc/overview/USD" target="_blank" rel="nofollow">
										` + elLogo + `
										<span class="ccc-header-v3-price-name">LTC: </span>
										<span class="ccc-header-v3-price-value"  style="color: ` + cccCurrentTheme.General.priceText + `;" id="CCCHeader3Price_` + fsym + `_USD" >
											$ 83.45
										</span>
										` + elChange + `
									</a>
									`;
embedableCoin.appendChild(priceDiv);


var fsym = 'ADA';


var priceDiv = document.createElement("div");
priceDiv.className = "ccc-header-v3-ccc-price-container";
var elChange = '';
var elLogo = '';

if (cccCurrentTheme.General.showChangePercent)
  elChange = `
					<span
						class="ccc-header-v3-price-change"
						id="CCCHeader3ChangePctContainer_` + fsym + `_USD"
						style="color: ` + cccCurrentTheme.Trend.colorDown + `;"
					>
						(<span id="CCCHeader3ChangePct` + fsym + `_USD">-1.90 %</span>)
					</span>
		`;

if (cccCurrentTheme.General.showLogo) {
  elLogo = `
			<img class="ccc-header-v3-price-logo" src="https://www.cryptocompare.com/media/12318177/ada.png" style="vertical-align: middle;"/>
		`;
}



priceDiv.innerHTML = `
									<a href="https://www.cryptocompare.com/coins/ADA/overview/USD" target="_blank" rel="nofollow">
										` + elLogo + `
										<span class="ccc-header-v3-price-name">ADA: </span>
										<span class="ccc-header-v3-price-value"  style="color: ` + cccCurrentTheme.General.priceText + `;" id="CCCHeader3Price_` + fsym + `_USD" >
											$ 0.1636
										</span>
										` + elChange + `
									</a>
									`;
embedableCoin.appendChild(priceDiv);


var fsym = 'DASH';


var priceDiv = document.createElement("div");
priceDiv.className = "ccc-header-v3-ccc-price-container";
var elChange = '';
var elLogo = '';

if (cccCurrentTheme.General.showChangePercent)
  elChange = `
					<span
						class="ccc-header-v3-price-change"
						id="CCCHeader3ChangePctContainer_` + fsym + `_USD"
						style="color: ` + cccCurrentTheme.Trend.colorUp + `;"
					>
						(<span id="CCCHeader3ChangePct` + fsym + `_USD">1.10 %</span>)
					</span>
		`;

if (cccCurrentTheme.General.showLogo) {
  elLogo = `
			<img class="ccc-header-v3-price-logo" src="https://www.cryptocompare.com/media/33842920/dash.png" style="vertical-align: middle;"/>
		`;
}



priceDiv.innerHTML = `
									<a href="https://www.cryptocompare.com/coins/DASH/overview/USD" target="_blank" rel="nofollow">
										` + elLogo + `
										<span class="ccc-header-v3-price-name">DASH: </span>
										<span class="ccc-header-v3-price-value"  style="color: ` + cccCurrentTheme.General.priceText + `;" id="CCCHeader3Price_` + fsym + `_USD" >
											$ 239.50
										</span>
										` + elChange + `
									</a>
									`;
embedableCoin.appendChild(priceDiv);


var fsym = 'XEM';


var priceDiv = document.createElement("div");
priceDiv.className = "ccc-header-v3-ccc-price-container";
var elChange = '';
var elLogo = '';

if (cccCurrentTheme.General.showChangePercent)
  elChange = `
					<span
						class="ccc-header-v3-price-change"
						id="CCCHeader3ChangePctContainer_` + fsym + `_USD"
						style="color: ` + cccCurrentTheme.Trend.colorDown + `;"
					>
						(<span id="CCCHeader3ChangePct` + fsym + `_USD">-4.20 %</span>)
					</span>
		`;

if (cccCurrentTheme.General.showLogo) {
  elLogo = `
			<img class="ccc-header-v3-price-logo" src="https://www.cryptocompare.com/media/20490/xem.png" style="vertical-align: middle;"/>
		`;
}



priceDiv.innerHTML = `
									<a href="https://www.cryptocompare.com/coins/xem/overview/USD" target="_blank" rel="nofollow">
										` + elLogo + `
										<span class="ccc-header-v3-price-name">XEM: </span>
										<span class="ccc-header-v3-price-value"  style="color: ` + cccCurrentTheme.General.priceText + `;" id="CCCHeader3Price_` + fsym + `_USD" >
											$ 0.1733
										</span>
										` + elChange + `
									</a>
									`;
embedableCoin.appendChild(priceDiv);


var fsym = 'XMR';


var priceDiv = document.createElement("div");
priceDiv.className = "ccc-header-v3-ccc-price-container";
var elChange = '';
var elLogo = '';

if (cccCurrentTheme.General.showChangePercent)
  elChange = `
					<span
						class="ccc-header-v3-price-change"
						id="CCCHeader3ChangePctContainer_` + fsym + `_USD"
						style="color: ` + cccCurrentTheme.Trend.colorDown + `;"
					>
						(<span id="CCCHeader3ChangePct` + fsym + `_USD">-5.30 %</span>)
					</span>
		`;

if (cccCurrentTheme.General.showLogo) {
  elLogo = `
			<img class="ccc-header-v3-price-logo" src="https://www.cryptocompare.com/media/19969/xmr.png" style="vertical-align: middle;"/>
		`;
}



priceDiv.innerHTML = `
									<a href="https://www.cryptocompare.com/coins/xmr/overview/USD" target="_blank" rel="nofollow">
										` + elLogo + `
										<span class="ccc-header-v3-price-name">XMR: </span>
										<span class="ccc-header-v3-price-value"  style="color: ` + cccCurrentTheme.General.priceText + `;" id="CCCHeader3Price_` + fsym + `_USD" >
											$ 136.99
										</span>
										` + elChange + `
									</a>
									`;
embedableCoin.appendChild(priceDiv);


var fsym = 'BTG';


var priceDiv = document.createElement("div");
priceDiv.className = "ccc-header-v3-ccc-price-container";
var elChange = '';
var elLogo = '';

if (cccCurrentTheme.General.showChangePercent)
  elChange = `
					<span
						class="ccc-header-v3-price-change"
						id="CCCHeader3ChangePctContainer_` + fsym + `_USD"
						style="color: ` + cccCurrentTheme.Trend.colorDown + `;"
					>
						(<span id="CCCHeader3ChangePct` + fsym + `_USD">-4.02 %</span>)
					</span>
		`;

if (cccCurrentTheme.General.showLogo) {
  elLogo = `
			<img class="ccc-header-v3-price-logo" src="https://www.cryptocompare.com/media/27011062/btg.png" style="vertical-align: middle;"/>
		`;
}



priceDiv.innerHTML = `
									<a href="https://www.cryptocompare.com/coins/btg/overview/USD" target="_blank" rel="nofollow">
										` + elLogo + `
										<span class="ccc-header-v3-price-name">BTG: </span>
										<span class="ccc-header-v3-price-value"  style="color: ` + cccCurrentTheme.General.priceText + `;" id="CCCHeader3Price_` + fsym + `_USD" >
											$ 29.84
										</span>
										` + elChange + `
									</a>
									`;
embedableCoin.appendChild(priceDiv);


var fsym = 'XLM';


var priceDiv = document.createElement("div");
priceDiv.className = "ccc-header-v3-ccc-price-container";
var elChange = '';
var elLogo = '';

if (cccCurrentTheme.General.showChangePercent)
  elChange = `
					<span
						class="ccc-header-v3-price-change"
						id="CCCHeader3ChangePctContainer_` + fsym + `_USD"
						style="color: ` + cccCurrentTheme.Trend.colorDown + `;"
					>
						(<span id="CCCHeader3ChangePct` + fsym + `_USD">-9.32 %</span>)
					</span>
		`;

if (cccCurrentTheme.General.showLogo) {
  elLogo = `
			<img class="ccc-header-v3-price-logo" src="https://www.cryptocompare.com/media/20696/str.png" style="vertical-align: middle;"/>
		`;
}



priceDiv.innerHTML = `
									<a href="https://www.cryptocompare.com/coins/xlm/overview/USD" target="_blank" rel="nofollow">
										` + elLogo + `
										<span class="ccc-header-v3-price-name">XLM: </span>
										<span class="ccc-header-v3-price-value"  style="color: ` + cccCurrentTheme.General.priceText + `;" id="CCCHeader3Price_` + fsym + `_USD" >
											$ 0.3064
										</span>
										` + elChange + `
									</a>
									`;
embedableCoin.appendChild(priceDiv);


var fsym = 'NEO';


var priceDiv = document.createElement("div");
priceDiv.className = "ccc-header-v3-ccc-price-container";
var elChange = '';
var elLogo = '';

if (cccCurrentTheme.General.showChangePercent)
  elChange = `
					<span
						class="ccc-header-v3-price-change"
						id="CCCHeader3ChangePctContainer_` + fsym + `_USD"
						style="color: ` + cccCurrentTheme.Trend.colorDown + `;"
					>
						(<span id="CCCHeader3ChangePct` + fsym + `_USD">-4.83 %</span>)
					</span>
		`;

if (cccCurrentTheme.General.showLogo) {
  elLogo = `
			<img class="ccc-header-v3-price-logo" src="https://www.cryptocompare.com/media/1383858/neo.jpg" style="vertical-align: middle;"/>
		`;
}



priceDiv.innerHTML = `
									<a href="https://www.cryptocompare.com/coins/neo/overview/USD" target="_blank" rel="nofollow">
										` + elLogo + `
										<span class="ccc-header-v3-price-name">NEO: </span>
										<span class="ccc-header-v3-price-value"  style="color: ` + cccCurrentTheme.General.priceText + `;" id="CCCHeader3Price_` + fsym + `_USD" >
											$ 33.11
										</span>
										` + elChange + `
									</a>
									`;
embedableCoin.appendChild(priceDiv);


var fsym = 'ETC';


var priceDiv = document.createElement("div");
priceDiv.className = "ccc-header-v3-ccc-price-container";
var elChange = '';
var elLogo = '';

if (cccCurrentTheme.General.showChangePercent)
  elChange = `
					<span
						class="ccc-header-v3-price-change"
						id="CCCHeader3ChangePctContainer_` + fsym + `_USD"
						style="color: ` + cccCurrentTheme.Trend.colorDown + `;"
					>
						(<span id="CCCHeader3ChangePct` + fsym + `_USD">-0.06 %</span>)
					</span>
		`;

if (cccCurrentTheme.General.showLogo) {
  elLogo = `
			<img class="ccc-header-v3-price-logo" src="https://www.cryptocompare.com/media/33752295/etc_new.png" style="vertical-align: middle;"/>
		`;
}



priceDiv.innerHTML = `
									<a href="https://www.cryptocompare.com/coins/etc/overview/USD" target="_blank" rel="nofollow">
										` + elLogo + `
										<span class="ccc-header-v3-price-name">ETC: </span>
										<span class="ccc-header-v3-price-value"  style="color: ` + cccCurrentTheme.General.priceText + `;" id="CCCHeader3Price_` + fsym + `_USD" >
											$ 16.62
										</span>
										` + elChange + `
									</a>
									`;
embedableCoin.appendChild(priceDiv);


var fsym = 'QTUM';


var priceDiv = document.createElement("div");
priceDiv.className = "ccc-header-v3-ccc-price-container";
var elChange = '';
var elLogo = '';

if (cccCurrentTheme.General.showChangePercent)
  elChange = `
					<span
						class="ccc-header-v3-price-change"
						id="CCCHeader3ChangePctContainer_` + fsym + `_USD"
						style="color: ` + cccCurrentTheme.Trend.colorDown + `;"
					>
						(<span id="CCCHeader3ChangePct` + fsym + `_USD">-1.31 %</span>)
					</span>
		`;

if (cccCurrentTheme.General.showLogo) {
  elLogo = `
			<img class="ccc-header-v3-price-logo" src="https://www.cryptocompare.com/media/1383382/qtum.png" style="vertical-align: middle;"/>
		`;
}



priceDiv.innerHTML = `
									<a href="https://www.cryptocompare.com/coins/QTUM/overview/USD" target="_blank" rel="nofollow">
										` + elLogo + `
										<span class="ccc-header-v3-price-name">QTUM: </span>
										<span class="ccc-header-v3-price-value"  style="color: ` + cccCurrentTheme.General.priceText + `;" id="CCCHeader3Price_` + fsym + `_USD" >
											$ 7.81
										</span>
										` + elChange + `
									</a>
									`;
embedableCoin.appendChild(priceDiv);


var fsym = 'MONA';


var priceDiv = document.createElement("div");
priceDiv.className = "ccc-header-v3-ccc-price-container";
var elChange = '';
var elLogo = '';

if (cccCurrentTheme.General.showChangePercent)
  elChange = `
					<span
						class="ccc-header-v3-price-change"
						id="CCCHeader3ChangePctContainer_` + fsym + `_USD"
						style="color: ` + cccCurrentTheme.Trend.colorUp + `;"
					>
						(<span id="CCCHeader3ChangePct` + fsym + `_USD">4.66 %</span>)
					</span>
		`;

if (cccCurrentTheme.General.showLogo) {
  elLogo = `
			<img class="ccc-header-v3-price-logo" src="https://www.cryptocompare.com/media/19801/mona.png" style="vertical-align: middle;"/>
		`;
}



priceDiv.innerHTML = `
									<a href="https://www.cryptocompare.com/coins/MONA/overview/USD" target="_blank" rel="nofollow">
										` + elLogo + `
										<span class="ccc-header-v3-price-name">MONA: </span>
										<span class="ccc-header-v3-price-value"  style="color: ` + cccCurrentTheme.General.priceText + `;" id="CCCHeader3Price_` + fsym + `_USD" >
											$ 2.22
										</span>
										` + elChange + `
									</a>
									`;
embedableCoin.appendChild(priceDiv);


var fsym = 'XVG';


var priceDiv = document.createElement("div");
priceDiv.className = "ccc-header-v3-ccc-price-container";
var elChange = '';
var elLogo = '';

if (cccCurrentTheme.General.showChangePercent)
  elChange = `
					<span
						class="ccc-header-v3-price-change"
						id="CCCHeader3ChangePctContainer_` + fsym + `_USD"
						style="color: ` + cccCurrentTheme.Trend.colorDown + `;"
					>
						(<span id="CCCHeader3ChangePct` + fsym + `_USD">-6.45 %</span>)
					</span>
		`;

if (cccCurrentTheme.General.showLogo) {
  elLogo = `
			<img class="ccc-header-v3-price-logo" src="https://www.cryptocompare.com/media/12318032/xvg.png" style="vertical-align: middle;"/>
		`;
}



priceDiv.innerHTML = `
									<a href="https://www.cryptocompare.com/coins/XVG/overview/USD" target="_blank" rel="nofollow">
										` + elLogo + `
										<span class="ccc-header-v3-price-name">XVG: </span>
										<span class="ccc-header-v3-price-value"  style="color: ` + cccCurrentTheme.General.priceText + `;" id="CCCHeader3Price_` + fsym + `_USD" >
											$ 0.02297
										</span>
										` + elChange + `
									</a>
									`;
embedableCoin.appendChild(priceDiv);


var fsym = 'DOGE';


var priceDiv = document.createElement("div");
priceDiv.className = "ccc-header-v3-ccc-price-container";
var elChange = '';
var elLogo = '';

if (cccCurrentTheme.General.showChangePercent)
  elChange = `
					<span
						class="ccc-header-v3-price-change"
						id="CCCHeader3ChangePctContainer_` + fsym + `_USD"
						style="color: ` + cccCurrentTheme.Trend.colorDown + `;"
					>
						(<span id="CCCHeader3ChangePct` + fsym + `_USD">-5.29 %</span>)
					</span>
		`;

if (cccCurrentTheme.General.showLogo) {
  elLogo = `
			<img class="ccc-header-v3-price-logo" src="https://www.cryptocompare.com/media/19684/doge.png" style="vertical-align: middle;"/>
		`;
}



priceDiv.innerHTML = `
									<a href="https://www.cryptocompare.com/coins/doge/overview/USD" target="_blank" rel="nofollow">
										` + elLogo + `
										<span class="ccc-header-v3-price-name">DOGE: </span>
										<span class="ccc-header-v3-price-value"  style="color: ` + cccCurrentTheme.General.priceText + `;" id="CCCHeader3Price_` + fsym + `_USD" >
											$ 0.003330
										</span>
										` + elChange + `
									</a>
									`;
embedableCoin.appendChild(priceDiv);



inner.appendChild(embedableCoin);
embedable.appendChild(inner);

embedableCoin.appendChild(style);
document.currentScript.parentNode.appendChild(embedable);
var cccHeaderV3RefreshDataInterval = setInterval(cccRefreshHeaderV3DataHeader, 30000);


if (cccCurrentTheme.General.enableMarquee) {
  new scrollIfNeeded(embedableCoin);
}