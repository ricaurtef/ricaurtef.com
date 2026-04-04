(function () {
  var root = document.documentElement;
  var stored = sessionStorage.getItem('theme');

  if (stored) {
    root.setAttribute('data-theme', stored);
  } else {
    var hour = new Date().getHours();
    root.setAttribute('data-theme', hour >= 7 && hour < 19 ? 'light' : 'dark');
  }
})();

function toggleTheme() {
  var current = document.documentElement.getAttribute('data-theme');
  var next = current === 'dark' ? 'light' : 'dark';
  document.documentElement.setAttribute('data-theme', next);
  sessionStorage.setItem('theme', next);
}
