const movieList = document.getElementById('movieList');

function addMovie() {
  const movieName = document.getElementById('movieInput').value.trim();
  const rating = document.getElementById('ratingInput').value;

  if (movieName === "") return alert("Enter a movie name!");

  const li = document.createElement('li');
  li.innerHTML = `
    <span>${movieName} - ${rating}</span>
    <div class="actions">
      <span onclick="toggleFav(this)">❤️</span>
      <span onclick="deleteMovie(this)">🗑️</span>
    </div>
  `;
  movieList.appendChild(li);
  document.getElementById('movieInput').value = "";
}

function toggleFav(el) {
  el.classList.toggle('fav');
}

function deleteMovie(el) {
  el.parentElement.parentElement.remove();
}
