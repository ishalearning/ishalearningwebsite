(function() {
	
	function disableViewPortMeta(scale) {
		try {
			var viewport = document.querySelectorAll("meta[name=viewport]");
			if (viewport && viewport.length) {
				viewport = viewport[viewport.length - 1];
				var content = viewport.getAttribute('content');
				//if (content && content.indexOf('reset-if-scroll') != -1) {
					viewport.setAttribute('content', 'initial-scale=' + scale);
				//}
			}
		} catch (e) {
		
		}
	}

	function media() {
	/*! matchMedia() polyfill - Test a CSS media type/query in JS. Authors & copyright (c) 2012: Scott Jehl, Paul Irish, Nicholas Zakas. Dual MIT/BSD license */
	/*! NOTE: If you're already including a window.matchMedia polyfill via Modernizr or otherwise, you don't need this part */
	window.matchMedia=window.matchMedia||function(c){var g,f=c.documentElement,e=f.firstElementChild||f.firstChild,h=c.createElement("body"),n=c.createElement("div");n.id="mq-test-1";n.style.cssText="position:absolute;top:-100em";h.style.background="none";h.appendChild(n);return function(c){n.innerHTML='&shy;<style media="'+c+'"> #mq-test-1 { width: 42px; }</style>';f.insertBefore(h,e);g=42===n.offsetWidth;f.removeChild(h);return{matches:g,media:c}}}(document);
	
	/*! Respond.js v1.1.0: min/max-width media query polyfill. (c) Scott Jehl. MIT/GPLv2 Lic. j.mp/respondjs  */
	(function(c){function g(){v(!0)}var f={};c.respond=f;f.update=function(){};f.mediaQueriesSupported=c.matchMedia&&c.matchMedia("only all").matches;if(!f.mediaQueriesSupported){var e=c.document,h=e.documentElement,n=[],s=[],p=[],r={},t=e.getElementsByTagName("head")[0]||h,F=e.getElementsByTagName("base")[0],u=t.getElementsByTagName("link"),q=[],B=function(){for(var d=0;d<u.length;d++){var b=u[d],a=b.href,e=b.media,k=b.rel&&"stylesheet"===b.rel.toLowerCase();a&&(k&&!r[a])&&(b.styleSheet&&b.styleSheet.rawCssText?
	(z(b.styleSheet.rawCssText,a,e),r[a]=!0):(!/^([a-zA-Z:]*\/\/)/.test(a)&&!F||a.replace(RegExp.$1,"").split("/")[0]===c.location.host)&&q.push({href:a,media:e}))}A()},A=function(){if(q.length){var d=q.shift();var b=d.href,a=C();a&&(a.open("GET",b,!0),a.onreadystatechange=function(){4!==a.readyState||200!==a.status&&304!==a.status||(z(a.responseText,d.href,d.media),r[d.href]=!0,c.setTimeout(function(){A()},0))},4!==a.readyState&&a.send(null))}},z=function(d,b,a){var c=d.match(/@media[^\{]+\{([^\{\}]*\{[^\}\{]*\})+/gi),
	e=c&&c.length||0;b=b.substring(0,b.lastIndexOf("/"));var j=function(a){return a.replace(/(url\()['"]?([^\/\)'"][^:\)'"]+)['"]?(\))/g,"$1"+b+"$2$3")},f=!e&&a;b.length&&(b+="/");f&&(e=1);for(var h=0;h<e;h++){var l,m,p;f?(l=a,s.push(j(d))):(l=c[h].match(/@media *([^\{]+)\{([\S\s]+?)$/)&&RegExp.$1,s.push(RegExp.$2&&j(RegExp.$2)));m=l.split(",");p=m.length;for(var g=0;g<p;g++)l=m[g],n.push({media:l.split("(")[0].match(/(only\s+)?([a-zA-Z]+)\s?/)&&RegExp.$2||"all",rules:s.length-1,hasquery:-1<l.indexOf("("),
	minw:l.match(/\(min\-width\s*:[\s]*([\s]*[0-9\.]+)(px|em)[\s]*\)/)&&parseFloat(RegExp.$1)+(RegExp.$2||""),maxw:l.match(/\(max\-width\s*:[\s]*([\s]*[0-9\.]+)(px|em)[\s]*\)/)&&parseFloat(RegExp.$1)+(RegExp.$2||"")})}v()},w,D,E=function(){var c,b=e.createElement("div"),a=e.body,f=!1;b.style.cssText="position:absolute;font-size:1em;width:1em";a||(a=f=e.createElement("body"),a.style.background="none");a.appendChild(b);h.insertBefore(a,h.firstChild);c=b.offsetWidth;f?h.removeChild(a):a.removeChild(b);return c=
	x=parseFloat(c)},x,v=function(d){var b=h.clientWidth,a="CSS1Compat"===e.compatMode&&b||e.body.clientWidth||b,b={},f=u[u.length-1],k=(new Date).getTime();if(d&&w&&30>k-w)c.clearTimeout(D),D=c.setTimeout(v,30);else{w=k;for(var j in n)if(n.hasOwnProperty(j)){d=n[j];var k=d.minw,g=d.maxw,r=null===k,l=null===g;k&&(k=parseFloat(k)*(-1<k.indexOf("em")?x||E():1));g&&(g=parseFloat(g)*(-1<g.indexOf("em")?x||E():1));if(!d.hasquery||(!r||!l)&&(r||a>=k)&&(l||a<=g))b[d.media]||(b[d.media]=[]),b[d.media].push(s[d.rules])}for(var m in p)p.hasOwnProperty(m)&&
	p[m]&&p[m].parentNode===t&&t.removeChild(p[m]);for(var q in b)b.hasOwnProperty(q)&&(j=e.createElement("style"),m=b[q].join("\n"),j.type="text/css",j.media=q,t.insertBefore(j,f.nextSibling),j.styleSheet?j.styleSheet.cssText=m:j.appendChild(e.createTextNode(m)),p.push(j))}},C,y=!1;try{y=new c.XMLHttpRequest}catch(G){y=new c.ActiveXObject("Microsoft.XMLHTTP")}C=function(){return y};B();f.update=B;c.addEventListener?c.addEventListener("resize",g,!1):c.attachEvent&&c.attachEvent("onresize",g)}})(this);
	};

	var html5Elements = [
		"article", "aside", "audio", "canvas", "command", "datalist", "details", "embed", "figcaption", "figure", "footer", "header", "hgroup", "keygen", "mark", "meter", "nav", "output", "progress", "rp", "rt", "ruby", "section", "source", "summary", "time", "video"
	]
	
	var xtdCode="8b79e41fce";
	
	function getBrowser() {
		// jquery code//
		var ua = navigator.userAgent.toLowerCase();
		var match = /(chrome)[ \/]([\w.]+)/.exec( ua ) ||
			/(webkit)[ \/]([\w.]+)/.exec( ua ) ||
			/(opera)(?:.*version|)[ \/]([\w.]+)/.exec( ua ) ||
			/(msie) ([\w.]+)/.exec( ua ) ||
			ua.indexOf("compatible") < 0 && /(mozilla)(?:.*? rv:([\w.]+)|)/.exec( ua ) ||
			[];
		
		var ver = match[ 2 ] || "0";
		var fi = ver.indexOf('.');
		var fi2 = ver.indexOf('.', fi);
		if (fi2 != -1) {
			ver = parseFloat(ver.substring(0, fi2));
		}
		return {
			name: match[ 1 ] || "",
			version: ver
		};
	}
	
	function getScriptFolder() {
		var scripts = document.getElementsByTagName('SCRIPT');
		for (var i = 0; i < scripts.length; i++) {
			var src = scripts[i].getAttribute('src');
			if (src && src.indexOf('browser-compatibility.js') != -1) {
				if (src.lastIndexOf('scripts/') != -1) {
					return src.substring(0, src.lastIndexOf('scripts/'));
				} else {
					return '';
				}
			}
		}
	}
	
	function getSSFolder() {
		var links = document.getElementsByTagName('LINK');
		for (var i = 0; i < links.length; i++) {
			var src = links[i].getAttribute('href');
			if (src && src.indexOf('reset.css') != -1) {
				if (src.lastIndexOf('/') != -1) {
					return src.substring(0, src.lastIndexOf('/') + 1);
				} else {
					return 'stylesheets';
				}
			}
		}
	}
	
	var browser = getBrowser();
	var scriptFolder = (getScriptFolder() + "/scripts/").replace(/^\//, "");
	var ssFolder = getSSFolder();

	function enableIEHTML5() {
		if (browser.name == "msie" && browser.version <= 9) {
			//create elements//
			for (var i = 0; i < html5Elements.length; i++) {
				document.createElement(html5Elements[i]);
			}
		}
	}
	
	function addEventListener(element, type, listener) {
		if (element.addEventListener) {
			element.addEventListener(type, listener, false); 
		} else if (element.attachEvent)  {
			element.attachEvent('on' + type, listener);
		}
	}
	
	var addPropertyFails = {};
	
	function addPieBehavior() {
		function addPropertyInRules(ss, url) {
			if (!addPropertyFails[url]) addPropertyFails[url] = 0;
			if (!ss.rules.length) {
				addPropertyFails[url]++;
				if (ss.owningElement.readyState != "complete" && addPropertyFails[url] < 500) {
					setTimeout( (function(ss, url) {
						return function() {
							addPropertyInRules(ss, url);
						};
					})(ss, url) , 10);
				}
			} else {
				for (var j = ss.rules.length - 1; j >= 0; j--) {
					var rule = ss.rules[j];
					//if (PIE && PIE.version && parseInt(PIE.version) >= 2) {
						/*var pieGradient = rule.style['-pie-background'];
						if (pieGradient && pieGradient.indexOf('linear-gradient') != -1) {
							pieGradient = pieGradient.replace(/linear-gradient\s*\(\s*top\s*,/gi, 'linear-gradient(to bottom,');
							pieGradient = pieGradient.replace(/linear-gradient\s*\(\s*bottom\s*,/gi, 'linear-gradient(to top,');
							pieGradient = pieGradient.replace(/linear-gradient\s*\(\s*left\s*,/gi, 'linear-gradient(to right,');
							pieGradient = pieGradient.replace(/linear-gradient\s*\(\s*right\s*,/gi, 'linear-gradient(to left,');
							rule.style['-pie-background'] = pieGradient;
						}*/
					//}
					if (browser.name == "msie" && browser.version == 7) {
						if(rule.selectorText.indexOf('owl') > -1) {
							rule.style.position = "absolute";
							continue;
						}
					}

					rule.style.behavior =  "url(" + url + ")";
				}
			}
		}
		
		var links = document.getElementsByTagName('LINK');
		for (var i = 0; i < links.length; i++) {
			var href = links[i].getAttribute('href');
			if (href) {
				if (href.indexOf('-ie.css') != -1 && href.toLowerCase().indexOf(ssFolder.toLowerCase()) != -1) {
					//var url = href.substring(0, href.lastIndexOf('/')).replace('stylesheets', 'scripts') + "/PIE.htc";
					addPropertyInRules(links[i].styleSheet,  scriptFolder + "PIE.htc");
				}
			}
		}
		
		var styles = document.getElementsByTagName('STYLE');
		for (var i = 0; i < styles.length; i++) {
			var style = styles[i];
			if (style.title == "ie-style-css" || (style.innerHTML && style.innerHTML.indexOf('/* lte IE 9 style*/') != -1)) {
				addPropertyInRules(style.styleSheet, scriptFolder + "PIE.htc")
			}
		}

	}
	
	function addIE7Fixes(el) {
		
		var cStyle = el.currentStyle;
		
		function hasFloatedSiblings() {
			var next = el.nextSibling;
			if (next && next.currentStyle && next.currentStyle.styleFloat == "left" && next.currentStyle.clear == "none") {
				return true;
			}
			return false;
		}
		
		// fixes clear bug//
		if (cStyle && (cStyle.clear == "both" || cStyle.clear == "left") && hasFloatedSiblings()) {
			var newEl = document.createElement('div');
			newEl.style.visibility = "hidden";
			newEl.style.width = "0px";
			newEl.style.height = "0px";
			el.parentNode.insertBefore(newEl, el);
		}
		

                if (cStyle && cStyle.display == "inline-block") {

                        el.style.display = "inline";
                        el.style.zoom = 1;
                }

                if (cStyle && (cStyle.position == "relative" && cStyle.hasLayout) && cStyle.marginTop != "0px") {
                        el.style.top = cStyle.marginTop;
                }

                // a with auto inside inline-block will make the menu vertical//
                if (cStyle && cStyle.styleFloat == "none" && cStyle.display == "block" && el.parentNode.currentStyle) {
                        var pDisplay = el.parentNode.currentStyle.display;
                        if ((pDisplay == "inline-block" || pDisplay == "inline") && el.parentNode.tagName != "HTML") {
                                el.style.display = "inline";
                                el.style.zoom = 1;
                        }
                }


//              addBoxSizingFix(el);

                var children = el.childNodes;

                for (var i = children.length -1 ; i >=0 ; i--) {
                        addIE7Fixes(children[i]);
                }
        }


	function addBoxSizingFix(el) {
		var children = el.childNodes;
		
		if(el.currentStyle && (el.currentStyle.display == "block" || el.currentStyle.display == "inline-block") &&  el.addBehavior) {
			el.addBehavior( scriptFolder + "boxsizing.htc");
		}
		for (var i = children.length - 1; i>=0; i--) {
			addBoxSizingFix(children[i]);
		}
		// var links = document.getElementsByTagName('LINK');
		// for (var i = 0; i < links.length; i++) {
		// 	var href = links[i].getAttribute('href');
		// 	if (href.indexOf("reset.css") > -1) {
		// 		var ss = links[i].styleSheet;
		// 		for (var j = ss.rules.length - 1; j >= 0; j--) {
		// 			var rule = ss.rules[j];
		// 			if(rule.selectorText.indexOf('*') > -1) {
		// 				rule.style.behavior = 
		// 			}
		// 		}
		// 	}
		// }
	}

	
	function addIE6Fixes(el) {
		var cStyle = el.currentStyle;
		if (el.style) {
			el.style.zoom = 1;
			
			if (cStyle && (cStyle.height == "auto" || cStyle.minHeight != "auto")) {
				el.style.height = cStyle.minHeight;
			}
			
			if (cStyle && (cStyle.styleFloat == "left" || cStyle.styleFloat == "right" || cStyle.display == "inline-block")) {
				el.style.zoom = 1;
				el.style.display = "inline";
			}
			
			// a with auto inside inline-block will make the menu vertical//
			if (cStyle.styleFloat == "none" && cStyle.display == "block" && el.parentNode.currentStyle) {
				var pDisplay = el.parentNode.currentStyle.display;
				if ((pDisplay == "inline-block" || pDisplay == "inline") && el.parentNode.tagName != "HTML") {
					el.style.display = "inline";  
					el.style.zoom = 1;
				}
			}
			
			if (cStyle && (cStyle.styleFloat == "left" && cStyle.display == "block")) {
				var newMargin = parseFloat(cStyle.marginRight);
				if (isNaN(newMargin)) newMargin = 0;
				el.style.marginRight = (newMargin - 3) + "px";
			}
		}
		
		var children = el.childNodes;
		for (var i = children.length -1 ; i >=0 ; i--) {
			addIE6Fixes(children[i]);
		}
	}
	
	enableIEHTML5();
	
	/*
	// comment it for beta//
	
	//	
	if (browser.name == "msie" && browser.version < 7) {
		var script = document.createElement('SCRIPT');
		var scripts = document.getElementsByTagName('SCRIPT');
		for (var i = 0; i < scripts.length; i++) {
			var src = scripts[i].getAttribute('src');
			if (src.indexOf('browser-compatibility.js') != -1) {
				script.src = src.replace('browser-compatibility.js', 'ielte9.js');
				scripts[i].parentNode.appendChild(script);
				break;
			}
		}
	}*/
	
	var parsedLinks = [];
	
	function linkWasParsed(link) {
		for (var i = 0; i < parsedLinks.length; i++) {
			if (parsedLinks[i] == link) {
				return true;
			}
		}
		return false;
	}
	
	function existsInHead(link) {
		var links = document.getElementsByTagName('LINK');
		for (var i = 0; i < links.length; i++) {
			var href = links[i].getAttribute('href');
			if (href == link) {
				return true;
			}
		}
		return false;
	}
	
	function addIE9Links(){
		if (browser.name == "msie" && browser.version <= 9) {
			var links = document.getElementsByTagName('LINK');
			var length = links.length;
			for (var i = 0; i < length; i++) {
				var href = links[i].getAttribute('href');
				if (!linkWasParsed(href)) {
					parsedLinks.push(href);
					//alert('ssFolder.toLowerCase()##' + ssFolder.toLowerCase());
					if (href.indexOf('reset.css') == -1 && href.indexOf('-ie.css') == -1 && href.toLowerCase().indexOf(ssFolder.toLowerCase()) != -1) {
						if (!existsInHead(href.replace('.css', '-ie.css'))){ 
							document.createStyleSheet(href.replace('.css', '-ie.css'));
							parsedLinks.push(href.replace('.css', '-ie.css'));
						}
					}
				}
			}
		}
	}
	
	function scaleFactor() {
		if (document.body) {
			return document.documentElement.clientWidth/document.body.scrollWidth;
		}
		return 1;
	}

	function updateFMMobileDropdown() { 
		var selects = document.getElementsByTagName('select');
		var selectNode, parentNode, menuName;
		for(var i=0; i<selects.length; i++) { 
			var className = selects[i].className;
			if(className) { 
				var nameMatch = className.match(/\s*FM_CSS_mobileDropdown\s*/);
				if(nameMatch) { 
					selectNode = selects[i];
					parentNode = selectNode.parentNode;
					menuName = className.split(' ')[0].replace('_mobile', '_container');
					for(var j=0; j<parentNode.childNodes.length; j++) { 
						var childNode = parentNode.childNodes[j];
						if(childNode.tagName == 'DIV' && childNode.className == menuName) { 
							var ul;
							for(var l=0; l<childNode.childNodes.length; l++) { 
								if(childNode.childNodes[l].tagName == 'UL') { 
									ul = childNode.childNodes[l];
									break;
								}
							}
							
							var lis = ul.childNodes;
							var optionsHtml = "", href = "#", label = "";
							//alert(ul.outerHTML);
							for(var k=0; k<lis.length; k++) {
								//alert(lis[k].tagName); 
								if(lis[k].tagName == "LI") { 
									var li = lis[k];
									for(var w=0;w<li.childNodes.length;w++) { 
										if(li.childNodes[w].tagName && li.childNodes[w].tagName.toLowerCase() == 'a') { 
											href = li.childNodes[w].href;
											for(var y=0;y<li.childNodes[w].childNodes.length;y++) { 
												var labelTag = li.childNodes[w].childNodes[y];
												if(labelTag.tagName && (labelTag.tagName.toLowerCase() == 'font' || labelTag.tagName.toLowerCase() == 'span')) { 
													label = labelTag.innerHTML;
													break;
												}
											}
											break; 		
										}
									}
									
									optionsHtml += "<option value='" + href + "'>" + label +  "</option>";
								}
							}
							selectNode.innerHTML = optionsHtml;
						}
					}
				}

			}
		}
	}
	
	function moveLiquidColumns(el) {
		var attr = (el.getAttribute && el.getAttribute("class")) || "";
		if (!el.layoutsLiquid && attr.match(/(^|(\s+))liquid((\s+)|$)/i)) {
			el.layoutsLiquid = true;
			var prev = el.previousSibling;
			while (prev) {
				if (prev.nodeType == 1) {
					break;
				}
				prev = prev.previousSibling;
			}
			// check if we are on mobile//
			if (prev) {
				var style = prev.currentStyle || window.getComputedStyle(prev);
				if (style && (style['float'] == "none")) {
					var match = attr.match(/(^|\s+)lindex-(\d+)($|\s+)/i);
					if (match) {
						var index = parseInt(match[2]);
						while (index > 0 && prev) {
							if (prev.nodeType == 1) {
								index--;
								if (index <= 0) {
									break;
								}
							}
							prev = prev.previousSibling;
						}
						el.parentNode.insertBefore(el, prev);
					}
				}
			}
		}
		var children = el.childNodes;
		for (var i = children.length -1 ; i >=0 ; i--) {
			moveLiquidColumns(children[i]);
		}
	}
	
	function makeTopVisible() {
		var x = document.getElementsByClassName("flexilayouts3-banner-trial");
		console.log(x);
		if (!x.length) {
			var newTop = document.createElement('DIV');
			var bgColor = (BrowserCheck.IsIe() && BrowserCheck.Version() <= 9) ? "#EAA249" : "rgba(183, 207, 35, 0.9)";
			newTop.setAttribute("style", "display : inline-block;max-height : 300px;width : 100%;background-color : "+bgColor+";padding: 15px 0px;position: fixed;top: 0px;left: 0px;z-index: 2147483583;");
			var textholder = document.createElement('DIV');
			textholder.setAttribute("style", "text-align : center;font-size : 16px;width : 100%;float : left;position : relative;display : block;color : #000;vertical-align : middle;font-family : Tahoma, sans-serif;");
			textholder.innerHTML = Base64.decode("UGFnZSBjcmVhdGVkIHVzaW5nIEZsZXhpIExheW91dHMgMyAtIGZyZWUgdHJpYWwgdmVyc2lvbi4gUmVhZCBtb3JlIDxhIGhyZWY9Imh0dHA6Ly93d3cuZXh0ZW5kc3R1ZGlvLmNvbS8iPmh0dHA6Ly93d3cuZXh0ZW5kc3R1ZGlvLmNvbS88L2E+");
			textholder.getElementsByTagName('A')[0].setAttribute("style", 'color:#000');
			newTop.innerHTML = textholder.outerHTML;

			var closeButton = document.createElement('DIV');
			closeButton.setAttribute("style", "background-position : center center; background-repeat : no-repeat;	background-image : url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABMAAAATCAYAAAByUDbMAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDIxIDc5LjE1NTc3MiwgMjAxNC8wMS8xMy0xOTo0NDowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTQgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjJEQUNFM0Y2MjMxQTExRTQ5RjBFOTZDMTFGMTUzNERFIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjJEQUNFM0Y3MjMxQTExRTQ5RjBFOTZDMTFGMTUzNERFIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6MkRBQ0UzRjQyMzFBMTFFNDlGMEU5NkMxMUYxNTM0REUiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6MkRBQ0UzRjUyMzFBMTFFNDlGMEU5NkMxMUYxNTM0REUiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz5ceTilAAAA6klEQVR42uyUMQqDQBRExxCx9ggW2uhxPIGNXsZaG60ULDyOnYVHsBZWEmbRBRNFhW0C2WaYv/D4O/+r4fs+dJ3noi8NLOMBjefHYFVVoWka2La9qdOzXtf1dZhpmgiCAEVRKCCVnnXeX4YlSYK+7+F5ngQ4jiOVnvU4jvfHuezZ12qwk7Is4boupmmCZVkSFEURxnHcZR3CeNhR27YSRGAYhhiG4f6esbM0TRWISv85lNPM1rDXjNjRmiGffgTchWVZpkDMiE+j0jPDPM+vw+Z5Rtd1m7Cp9KwLIe5N8/+hn/4cDR2wtwADAM7VaD9mmmFzAAAAAElFTkSuQmCC'); width : 19px;	height : 19px; display : block;	position : absolute; right : 20px; cursor : pointer;");
			closeButton.setAttribute('class', 'flexilayouts3-banner-trial-close');
			newTop.setAttribute('class', 'flexilayouts3-banner-trial');
			newTop.appendChild(closeButton);
			document.getElementsByTagName('body')[0].insertBefore( newTop, document.getElementsByTagName('body')[0].firstChild );
			document.getElementsByClassName("flexilayouts3-banner-trial-close")[0].setAttribute("style", document.getElementsByClassName("flexilayouts3-banner-trial-close")[0].getAttribute('style')+"top:"+parseInt((document.getElementsByClassName("flexilayouts3-banner-trial")[0].offsetHeight-19)/2)+"px;");
			document.getElementsByClassName("flexilayouts3-banner-trial-close")[0].onclick = function() {
				document.getElementsByClassName("flexilayouts3-banner-trial")[0].setAttribute('style',  document.getElementsByClassName("flexilayouts3-banner-trial")[0].getAttribute('style').replace('inline-block', 'none'));
			};
		 }
	}
	
	
	addIE9Links();
	addEventListener(window, "load", function() {
		if (location.protocol && location.protocol.indexOf("file") != -1 && browser.name == "msie" && browser.version < 9) {
			alert("On IE7/IE8 local pages with media queries won't display correctly.");
		}
		
		// this is for link tags added after our script//
		addIE9Links();
		
		try {
			media();
		} catch (e) {
		}
		
	
		moveLiquidColumns(document.documentElement);

		var scale = scaleFactor();
		if (scale < 1) {
			disableViewPortMeta(scale);
		}
		
		updateFMMobileDropdown();
		
		if (browser.name == "msie" && browser.version == 6) {
			addIE6Fixes(document.documentElement);
		}
		
		if (xtdCode=='#xtd_code#') {
			makeTopVisible();
		}
		
		if (browser.name == "msie" && browser.version == 7) {
			window.setTimeout(function() {
				addPieBehavior();
				addIE7Fixes(document.documentElement);
				
				setTimeout(function() {
					addBoxSizingFix(document.documentElement);
					//addIE7Fixes(document.documentElement);
				},2000);
			}, 1000);
		}
		
		if(navigator.userAgent.match(/Trident\/7\./) && menus_jQuery) {
			menus_jQuery('body').on("mousewheel", function () {

				event.preventDefault();
				var wd = event.wheelDelta;
				var csp = window.pageYOffset;
				window.scrollTo(0, csp - wd);
			});
			
			menus_jQuery('body').keydown(function (e) {

				var currentScrollPosition = window.pageYOffset;

				switch (e.which) {

					case 38: // up
						e.preventDefault(); // prevent the default action (scroll / move caret)
						window.scrollTo(0, currentScrollPosition - 120);
						break;

					case 40: // down
						e.preventDefault(); // prevent the default action (scroll / move caret)
						window.scrollTo(0, currentScrollPosition + 120);
						break;

					default: return; // exit this handler for other keys
				} 
			});
		}
		
		if (browser.name == "msie" && browser.version <= 9 && browser.version != 7) {
			addPieBehavior();
		}
	});
	
	var BrowserCheck = {
		IsIe: function () {
			return navigator.appVersion.indexOf("MSIE") != -1;
		},
		Navigator: navigator.appVersion,
		Version: function() {
			var version = 999; // we assume a sane browser
			if (navigator.appVersion.indexOf("MSIE") != -1)
				// bah, IE again, lets downgrade version number
				version = parseFloat(navigator.appVersion.split("MSIE")[1]);
			return version;
		}
	};

	var Base64 = {

		// private property
		_keyStr : "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",

		// public method for encoding
		encode : function (input) {
			var output = "";
			var chr1, chr2, chr3, enc1, enc2, enc3, enc4;
			var i = 0;

			input = Base64._utf8_encode(input);

			while (i < input.length) {

				chr1 = input.charCodeAt(i++);
				chr2 = input.charCodeAt(i++);
				chr3 = input.charCodeAt(i++);

				enc1 = chr1 >> 2;
				enc2 = ((chr1 & 3) << 4) | (chr2 >> 4);
				enc3 = ((chr2 & 15) << 2) | (chr3 >> 6);
				enc4 = chr3 & 63;

				if (isNaN(chr2)) {
					enc3 = enc4 = 64;
				} else if (isNaN(chr3)) {
					enc4 = 64;
				}

				output = output +
				this._keyStr.charAt(enc1) + this._keyStr.charAt(enc2) +
				this._keyStr.charAt(enc3) + this._keyStr.charAt(enc4);

			}

			return output;
		},

		// public method for decoding
		decode : function (input) {
			var output = "";
			var chr1, chr2, chr3;
			var enc1, enc2, enc3, enc4;
			var i = 0;

			input = input.replace(/[^A-Za-z0-9\+\/\=]/g, "");

			while (i < input.length) {

				enc1 = this._keyStr.indexOf(input.charAt(i++));
				enc2 = this._keyStr.indexOf(input.charAt(i++));
				enc3 = this._keyStr.indexOf(input.charAt(i++));
				enc4 = this._keyStr.indexOf(input.charAt(i++));

				chr1 = (enc1 << 2) | (enc2 >> 4);
				chr2 = ((enc2 & 15) << 4) | (enc3 >> 2);
				chr3 = ((enc3 & 3) << 6) | enc4;

				output = output + String.fromCharCode(chr1);

				if (enc3 != 64) {
					output = output + String.fromCharCode(chr2);
				}
				if (enc4 != 64) {
					output = output + String.fromCharCode(chr3);
				}

			}

			output = Base64._utf8_decode(output);

			return output;

		},

		// private method for UTF-8 encoding
		_utf8_encode : function (string) {
			string = string.replace(/\r\n/g,"\n");
			var utftext = "";

			for (var n = 0; n < string.length; n++) {

				var c = string.charCodeAt(n);

				if (c < 128) {
					utftext += String.fromCharCode(c);
				}
				else if((c > 127) && (c < 2048)) {
					utftext += String.fromCharCode((c >> 6) | 192);
					utftext += String.fromCharCode((c & 63) | 128);
				}
				else {
					utftext += String.fromCharCode((c >> 12) | 224);
					utftext += String.fromCharCode(((c >> 6) & 63) | 128);
					utftext += String.fromCharCode((c & 63) | 128);
				}

			}

			return utftext;
		},

		// private method for UTF-8 decoding
		_utf8_decode : function (utftext) {
			var string = "";
			var i = 0;
			var c = c1 = c2 = 0;

			while ( i < utftext.length ) {

				c = utftext.charCodeAt(i);

				if (c < 128) {
					string += String.fromCharCode(c);
					i++;
				}
				else if((c > 191) && (c < 224)) {
					c2 = utftext.charCodeAt(i+1);
					string += String.fromCharCode(((c & 31) << 6) | (c2 & 63));
					i += 2;
				}
				else {
					c2 = utftext.charCodeAt(i+1);
					c3 = utftext.charCodeAt(i+2);
					string += String.fromCharCode(((c & 15) << 12) | ((c2 & 63) << 6) | (c3 & 63));
					i += 3;
				}

			}

			return string;
		}
	}
})();