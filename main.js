document.addEventListener('DOMContentLoaded', () => {
  fetchNews();
  updateTokenStats();
});

function fetchNews() {
  const newsContainer = document.getElementById('news-container');
  const news = [
    { title: 'Ronin Chain Reaches New Milestone!', content: 'The Ronin Chain has surpassed 1 million daily transactions.' },
    { title: 'Crypto Market Insights', content: 'Key insights into the current state of the crypto market.' },
    { title: 'Ronin’s New Features', content: 'Ronin introduces new security and staking features for users.' }
  ];

  news.forEach(article => {
    const newsItem = document.createElement('div');
    newsItem.classList.add('news-item');
    newsItem.innerHTML = `
      <h3>${article.title}</h3>
      <p>${article.content}</p>
    `;
    newsContainer.appendChild(newsItem);
  });
}

function updateTokenStats() {
  document.getElementById('token-price').innerText = '$2.45';
  document.getElementById('market-cap').innerText = '$1.5B';
  document.getElementById('volume-24h').innerText = '$45M';
}
