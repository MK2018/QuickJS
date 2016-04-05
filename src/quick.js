/*
PLAN OF FRAMEWORK:
-------------------------------
NOTES:
-As this is a one-page app framework, "page" shall henceforth mean a division of the site such that only one "page" is displayed at a time

1. HTML has custom tags, or tags with certian attributes applied, which break up the document
	1.a. Include dynamic tags to separate out into "pages", possibly:
		1.a.i. qk-page
	1.b. Include static, permanent tags, possibly:
		1.b.i. qk-const
	1.c. (Possibly, we see where this ended up for Angular) Include conditional, Angular-style tags
2. Custom CSS stylesheet bindings per page
3. JS parsing of all of this info
4. JS using info to carry out info as parsed
-------------------------------
*/
var qk = new function(){

	var pages;
	var datas;
	var currentPage;

	this.go = function(args){
		main.go(args);
	};

	this.goTo = function(to){
		protos.gotoNoArg(to);
	};

	var protos = new function(){
		this.show = function(){
			this.style.display = "block";
		};
		this.hide = function(){
			this.style.display = "none";
		};
		this.gotoNoArg = function(){
			pages[currentPage].hide();
			currentPage = main.pageById(this.dataset.to);
			pages[currentPage].show();
		};
		this.gotoArg = function(toPage){
			pages[currentPage].hide();
			currentPage = toPage;
			pages[currentPage].show();
		};
		this.bindData = function(){
			dataBind.bind(this);
		};
	};

	var dataBind = new function(){

		/**********************************************START OBJECT.WATCH POLYFILL*************************/
		/*
		 * By Eli Grey, http://eligrey.com
		 * Public Domain.
		 * NO WARRANTY EXPRESSED OR IMPLIED. USE AT YOUR OWN RISK.
		 */

		// object.watch
		if (!Object.prototype.watch) {
			Object.defineProperty(Object.prototype, "watch", {
				  enumerable: false
				, configurable: true
				, writable: false
				, value: function (prop, handler) {
					var
					  oldval = this[prop]
					, newval = oldval
					, getter = function () {
						return newval;
					}
					, setter = function (val) {
						oldval = newval;
						return newval = handler.call(this, prop, oldval, val);
					}
					;
					
					if (delete this[prop]) { // can't watch constants
						Object.defineProperty(this, prop, {
							  get: getter
							, set: setter
							, enumerable: true
							, configurable: true
						});
					}
				}
			});
		}

		// object.unwatch
		if (!Object.prototype.unwatch) {
			Object.defineProperty(Object.prototype, "unwatch", {
				  enumerable: false
				, configurable: true
				, writable: false
				, value: function (prop) {
					var val = this[prop];
					delete this[prop]; // remove accessors
					this[prop] = val;
				}
			});
		}

		/**********************************************END OBJECT.WATCH POLYFILL*************************/

		var varsBound = {};

		this.bind = function(bindTo){
			var unbound = bindTo.innerHTML;
			var dataObj = parseDataSource(bindTo.dataset.source, window);
			var bound = getBoundString(dataObj, unbound, bindTo);
			bindTo.innerHTML = bound;
		};

		var registerVarToWatch = function(parent, value, element, unbound){
			parent.watch(String(value), function(varName, ovalue, nvalue){
				varsBound[varName].e.innerHTML = varsBound[varName].u;
				setTimeout(varsBound[varName].e.bind, 100);
				return nvalue;
			});
			varsBound[String(value)] = {"e" : element, "u" : unbound, "p" : parent};
		};

		var getBoundString = function(dataObj, unbound, element){
			var bound = "";
			var ounbound = unbound;
			console.log(ounbound);
			while(unbound.indexOf("[[") > -1){
				path = unbound.substring(unbound.indexOf("[[")+2, unbound.indexOf("]]"));
				bound += unbound.substring(0, unbound.indexOf("[["));
				unbound = unbound.substring(unbound.indexOf("]]")+2);
				specObj = parseDataSource(path.substring(path.indexOf("data.")+5), dataObj);
				registerVarToWatch(dataObj, path.substring(path.indexOf("data.")+5), element, ounbound);
				bound += specObj;
			}
			bound += unbound;
			if(bound.indexOf("[[") > -1){
				bound = getBoundString(dataObj, bound, element);
			}
			return bound;
		};

		var parseDataSource = function(path, root){
			var loc = path.split('.');
			var obj = root;
			while(loc.length > 0){
				obj = obj[loc.shift()];
			}
			return obj;
		};
	};

	var main = new function(){

		var registerElements = function(){
			/**Define qk-page's prototype **/
			var qkpageProto = Object.create(HTMLElement.prototype);
			qkpageProto.show = protos.show;
			qkpageProto.hide = protos.hide;
			/**End qk-page's prototype **/

			/**Define qk-const's prototype **/
			var qkconstProto = Object.create(HTMLElement.prototype);
			qkconstProto.show = protos.show;
			qkconstProto.hide = protos.hide;
			/**End qk-const's prototype **/

			/**Define qk-link's prototype **/
			var qklinkProto = Object.create(HTMLElement.prototype);
			qklinkProto.goto = protos.gotoNoArg;
			/**End qk-link's prototype **/

			/**Define qk-data's prototype **/
			var qkdataProto = Object.create(HTMLElement.prototype);
			qkdataProto.bind = protos.bindData;
			/**End qk-data's prototype **/

			document.registerElement('qk-page', {
				prototype: qkpageProto
			});
			document.registerElement('qk-const', {
				prototype: qkconstProto
			});
			document.registerElement('qk-link', {
				prototype: qklinkProto
			});
			document.registerElement('qk-data', {
				prototype: qkdataProto
			});
		};

		var registerListeners = function(){
			Array.prototype.slice.call(document.querySelectorAll('qk-link')).forEach(function(current){
				current.addEventListener('click', function(){
					current.goto();
				})
			});
		};

		var displayHome = function(home){
			var hId = currentPage = main.pageById(home);
			for(var i = 0, l = pages.length; i < l; i++){
				pages[i].hide();
			}
			pages[hId].show();		
		};

		var fetchPagesAndData = function(){
			pages = document.querySelectorAll('qk-page');
			datas = document.querySelectorAll('qk-data');
		};

		var triggerDataBind = function(){
			for(var i = 0, l = datas.length; i < l; i++){
				datas[i].bind(datas[i]);
			}
		};

		this.pageById = function(id){
			for(var i = 0, l = pages.length; i < l; i++){
				if(pages[i].dataset.id===id)
					return i;
			}
			return -1;
		};

		this.go = function(args){
			registerElements();
			registerListeners();
			fetchPagesAndData();
			triggerDataBind();
			displayHome(args.home);
		};
	};

};