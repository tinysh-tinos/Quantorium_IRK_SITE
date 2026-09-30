document.addEventListener('DOMContentLoaded', () => {
  const galaxiesContainer = document.getElementById('galaxiesContainer');
  const mainContainer = document.getElementById('mainContainer');
  const mainImg = document.getElementById('mainImg');
  const body = document.body;

  mainImg.addEventListener('click', () => {
    // Показываем контейнер с галактиками
    galaxiesContainer.style.display = 'flex';

    // Скрываем стартовый экран
    mainContainer.style.display = 'none';

    // Меняем фон
    body.style.background = 'radial-gradient(circle at center, #020813 0%, #000000 100%)';
  });
});