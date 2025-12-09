document.addEventListener('DOMContentLoaded', () => {
  const videos = document.querySelectorAll('.hover-video');
  videos.forEach((video) => {
    // Ensure sensible defaults
    video.muted = true;
    video.loop = true;
    video.playsInline = true;

    // Play on hover
    video.addEventListener('mouseenter', () => {
      // attempt to play (returns a promise)
      const p = video.play();
      if (p && p.catch) p.catch(() => {});
    });

    // Pause and rewind when mouse leaves
    video.addEventListener('mouseleave', () => {
        video.load();
        //      video.pause();
    //   try { video.currentTime = 0; } catch (e) { /* ignore */ }
    });

    // Touch devices: toggle on tap
    video.addEventListener('click', () => {
      if (video.paused) video.play();
      else { video.pause(); try { video.currentTime = 0; } catch (e) {} }
    });
  });
});
