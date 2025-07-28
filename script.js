window.addEventListener('DOMContentLoaded', () => {
    // Wait 16 seconds, then switch from video to RSVP
    setTimeout(() => {
      document.getElementById('video-container').style.display = 'none';
      document.getElementById('rsvp-container').classList.remove('hidden');
    }, 16000); // 16,000 milliseconds = 16 seconds
  });
  