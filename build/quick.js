var qk = new function() {
  var a, c, e = Object.create(HTMLElement.prototype);
  e.show = function() {
    this.style.display = "block";
  };
  e.hide = function() {
    this.style.display = "none";
  };
  var f = Object.create(HTMLElement.prototype);
  f.show = function() {
    this.style.display = "block";
  };
  f.hide = function() {
    this.style.display = "none";
  };
  var g = Object.create(HTMLElement.prototype);
  g["goto"] = function() {
    a[c].hide();
    c = h(this.dataset.to);
    a[c].show();
  };
  var k = function() {
    Array.prototype.slice.call(document.querySelectorAll("qk-link")).forEach(function(a) {
      a.addEventListener("click", function() {
        a["goto"]();
      });
    });
  }, h = function(d) {
    for (var b = 0, c = a.length;b < c;b++) {
      if (a[b].dataset.id === d) {
        return b;
      }
    }
    return -1;
  };
  this.go = function(d) {
    document.registerElement("qk-page", {prototype:e});
    document.registerElement("qk-const", {prototype:f});
    document.registerElement("qk-link", {prototype:g});
    k();
    a = document.querySelectorAll("qk-page");
    d = c = h(d.home);
    for (var b = 0, l = a.length;b < l;b++) {
      a[b].hide();
    }
    a[d].show();
  };
};