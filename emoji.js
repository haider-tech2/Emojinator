const apiUrl = 'https://emoji-api.com/emojis?access_key=2bfc68380ed0da93608b1eabb202591fd40ad98d';
  const emojisContainer = document.getElementById('emojis');
  const searchForm = document.getElementById('searchForm');
  const searchInput = document.getElementById('searchInput');

  // Function to fetch and display emojis
  function fetchAndDisplayEmojis(query = '') {
    const url = `${apiUrl}&search=${query}`;
    
    fetch(url)
      .then(response => response.json())
      .then(data => {
        displayEmojis(data);
      })
      .catch(error => console.error('Error fetching data:', error));
  }

  // Function to display emojis on the page
  function displayEmojis(emojis) {
    emojisContainer.innerHTML = '';

    emojis.forEach(emoji => {
      const emojiElement = document.createElement('div');
      emojiElement.classList.add('emoji');
      emojiElement.textContent = emoji.character;
      emojisContainer.appendChild(emojiElement);
    });
  }

  // Event listener for form submission
  searchForm.addEventListener('submit', function (event) {
    event.preventDefault();
    const searchTerm = searchInput.value.trim();
    fetchAndDisplayEmojis(searchTerm);
  });

  // Initial load without search term
  fetchAndDisplayEmojis();