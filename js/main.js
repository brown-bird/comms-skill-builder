// Mark active nav link based on current page
(function () {
  var path = window.location.pathname;
  document.querySelectorAll('.site-nav a').forEach(function (link) {
    if (link.getAttribute('href') && path.endsWith(link.getAttribute('href'))) {
      link.style.color = 'var(--color-accent)';
      link.style.fontWeight = '600';
    }
  });
})();
