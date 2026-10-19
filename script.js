const welcomeScreen = document.getElementById('galaxiesContainer');
const galaxiesScreen = document.getElementById('galaxies');
const exploreBtn = document.getElementById('mainImg');

exploreBtn.addEventListener('click', () => {
  welcomeScreen.classList.add('hidden');
  galaxiesScreen.classList.add('active');
  requestAnimationFrame(() => {
    galaxiesScreen.classList.add('show');
  });
});

window.addEventListener('load', () => {
  document.body.style.opacity = '0';
  document.body.style.transition = 'opacity 0.8s ease';
  requestAnimationFrame(() => {
    document.body.style.opacity = '1';
  });
});

document.querySelectorAll('.title > span').forEach(wordSpan => {
  wordSpan.innerHTML = wordSpan.textContent
    .split('')
    .map(char => char.trim() === '' ? char : `<span>${char}</span>`)
    .join('');
});