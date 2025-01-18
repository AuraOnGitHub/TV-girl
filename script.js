document.addEventListener('DOMContentLoaded', function() {
  var video = document.getElementById('autoplayVideo');
  var observer = new IntersectionObserver(function(entries) {
      entries.forEach(function(entry) {
      if (entry.isIntersecting) {
          video.play();
      } else {
          video.pause();
          video.currentTime = 0; // Reset the video to the beginning
      }
      });
  }, { threshold: 0.5 });

  observer.observe(video);
});
document.addEventListener('DOMContentLoaded', function() {
  var video = document.getElementById('autoplayVideo');
  var observer = new IntersectionObserver(function(entries) {
      entries.forEach(function(entry) {
      if (entry.isIntersecting) {
          video.muted = false;
          video.play();
      } else {
          video.muted = true;
          video.pause();
      }
      });
  }, { threshold: 0.5 });

  observer.observe(video);
  });