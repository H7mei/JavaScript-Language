// jQuery
// $(".search-button").on("click", function () {
//   $.ajax({
//     url: `http://www.omdbapi.com/?apikey=16bab44a&s=` + $(`.input-keyword`).val(),
//     success: (result) => {
//       const movies = result.Search;
//       let cards = ``;
//       movies.forEach((m) => {
//         cards += showCard(m);
//       });
//       $(`.movies-container`).html(cards);

//       // ketika tombol detail di click
//       $(`.modal-detail-button`).on("click", function () {
//         $.ajax({
//           url: "http://www.omdbapi.com/?apikey=16bab44a&i=" + $(this).data("imdbid"),
//           success: (m) => {
//             const movieDetail = showMovieDetail(m);
//             $(`.modal-body`).html(movieDetail);
//           },
//           error: (e) => {
//             console.log(e.responseText);
//           },
//         });
//       });
//     },
//     error: (error) => {
//       alert(error.message);
//     },
//   });
// });

// fetch 1
// const searchButton = document.querySelector(`.search-button`);
// searchButton.addEventListener("click", function () {
//   const inputKeyword = document.querySelector(`.input-keyword`);
//   fetch(`http://www.omdbapi.com/?apikey=16bab44a&s=` + inputKeyword.value)
//     .then((response) => response.json())
//     .then((response) => {
//       const movies = response.Search;
//       let cards = ``;
//       movies.forEach((m) => (cards += showCard(m)));
//       const movieContainer = document.querySelector(`.movies-container`);
//       movieContainer.innerHTML = cards;

//       // ketika tombol detail di click
//       const modalDetailButton = document.querySelectorAll(`.modal-detail-button`);
//       modalDetailButton.forEach((btn) => {
//         btn.addEventListener("click", function () {
//           const imdb = this.dataset.imdbid;
//           fetch(`http://www.omdbapi.com/?apikey=16bab44a&i=` + imdb)
//             .then((response) => response.json())
//             .then((m) => {
//               const movieDetail = showMovieDetail(m);
//               const modalBody = document.querySelector(`.modal-body`);
//               modalBody.innerHTML = movieDetail;
//             });
//         });
//       });
//     });
// });

// fetch revactoring (async/await)
const searchButton = document.querySelector(`.search-button`);
searchButton.addEventListener("click", async function () {
  try {
    const inputKeyword = document.querySelector(`.input-keyword`);
    const movie = await getMovies(inputKeyword.value);
    updateUI(movie);
  } catch (e) {
    alert(e);
  }
});

function getMovies(keyword) {
  return fetch(`http://www.omdbapi.com/?apikey=16bab44a&s=` + keyword)
    .then((response) => {
      if (!response.ok) {
        throw new Error(response.statusText);
      }
      return response.json();
    })
    .then((response) => {
      if (!response.Response) {
        throw new Error(response.Error);
      }
      return response.Search;
    });
}

function updateUI(movies) {
  let cards = ``;
  movies.forEach((m) => (cards += showCard(m)));
  const movieContainer = document.querySelector(`.movies-container`);
  movieContainer.innerHTML = cards;
}

function getMoviesDetail(imdbid) {
  return fetch(`http://www.omdbapi.com/?apikey=16bab44a&i=` + imdbid)
    .then((response) => response.json())
    .then((m) => m);
}

function updateUiDetail(m) {
  const movieDetail = showMovieDetail(m);
  const modalBody = document.querySelector(`.modal-body`);
  modalBody.innerHTML = movieDetail;
}
// event binding
document.addEventListener(`click`, async function (e) {
  if (e.target.classList.contains(`modal-detail-button`)) {
    const imdbid = e.target.dataset.imdbid;
    const movieDetail = await getMoviesDetail(imdbid);
    updateUiDetail(movieDetail);
  }
});

function showCard(m) {
  return `<div class="col-md-4 my-3"">
    <div class="card">
      <img src="${m.Poster}" class="card-img-top" alt="" />
      <div class="card-body">
        <h5 class="card-title">${m.Title}</h5>
        <h6 class="card-subtitle mb-2 text-muted">${m.Year}</h6>
        <a href="#" class="btn btn-primary modal-detail-button" data-toggle="modal" data-target="#movieModal" data-imdbid="${m.imdbID}">Show Details</a>
      </div>
    </div>
  </div>`;
}

function showMovieDetail(m) {
  return `<div class="container-fluid">
    <div class="row">
      <div class="col-md-3">
        <img src="${m.Poster}" class="img-fluid" />
      </div>
      <div class="col-md">
        <ul class="list-group">
          <li class="list-group-item"><h4>${m.Title} (${m.Year})</h4></li>
          <li class="list-group-item"><strong>Actors : </strong>${m.Actors}</li>
          <li class="list-group-item"><strong>imdbRating : </strong> ${m.imdbRating}</li>
          <li class="list-group-item"><strong>Gendre : </strong> ${m.Genre}</li>
          <li class="list-group-item"><strong>Plot : </strong> ${m.Plot}</li>
        </ul>
      </div>
    </div>
  </div>`;
}
