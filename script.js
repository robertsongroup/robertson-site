// Robertson Business Consulting — scroll reveal
(function () {
  var t = document.querySelectorAll('.svc, .reveal');
  if (!t.length) return;
  if (!('IntersectionObserver' in window)) {
    t.forEach(function (el) { el.classList.add('in', 'visible'); });
    return;
  }
  var o = new IntersectionObserver(function (es) {
    es.forEach(function (e) {
      if (e.isIntersecting) { e.target.classList.add('in', 'visible'); o.unobserve(e.target); }
    });
  }, { threshold: 0.2 });
  t.forEach(function (el) { o.observe(el); });
})();
