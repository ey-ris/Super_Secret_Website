//const music = document.getElementById('background-music');
//music.play();

document.getElementById('music-toggle').addEventListener('click', function() {
  const music = document.getElementById('background-music');
  if (music.paused) {
    music.play();
  } else {
    music.pause();
  }
});

document.getElementById('quiz-form').addEventListener('submit', function(e) {
  e.preventDefault();
  alert('Thank you for completing the quiz!');
});
