// Responsive scaling for DC visual embeds (1200×height → container width)
(function() {
  if (!document.getElementById('dc-embed-styles')) {
    var s = document.createElement('style');
    s.id = 'dc-embed-styles';
    s.textContent = '.dc-visual{position:relative;width:100%}.dc-visual iframe{position:absolute;top:0;left:0;width:1200px;border:0;transform-origin:top left;overflow:hidden;pointer-events:none}';
    document.head.appendChild(s);
  }
  function scale() {
    var els = document.querySelectorAll('.dc-visual');
    for (var i = 0; i < els.length; i++) {
      var f = els[i].querySelector('iframe');
      if (f) {
        var h = parseInt(f.getAttribute('data-height'), 10) || 600;
        f.style.height = h + 'px';
        var s = els[i].offsetWidth / 1200;
        f.style.transform = 'scale(' + s + ')';
        els[i].style.height = (h * s) + 'px';
      }
    }
  }
  scale();
  if (!window._dcResize) {
    window._dcResize = true;
    window.addEventListener('resize', scale);
  }
})();
