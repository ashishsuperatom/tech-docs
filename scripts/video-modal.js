window.addEventListener('hashchange', function() {
  var v = document.getElementById('lp-demo-video');
  if (!v) return;
  if (location.hash === '#lp-video-modal') {
    v.play();
  } else {
    v.pause();
    v.currentTime = 0;
  }
});
