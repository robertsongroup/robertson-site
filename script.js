// Robertson Business Consulting - shared scroll animation
(function () {
  var targets = document.querySelectorAll('.svc, .reveal');
  if (!targets.length) return;
  if (!('IntersectionObserver' in window)) {
    targets.forEach(function (el) { el.classList.add('in', 'visible'); });
    return;
  }
  var obs = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      if (e.isIntersecting) {
        e.target.classList.add('in', 'visible');
        obs.unobserve(e.target);
      }
    });
  }, { threshold: 0.15 });
  targets.forEach(function (el) { obs.observe(el); });
})();
