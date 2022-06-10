const card_content_1 = document.querySelector(".card-1");
const card_content_2 = document.querySelector(".card-2");
const rating_buttons = document.querySelectorAll(".rating-btn");
const score = document.querySelector(".chosen-rating");
let stars_score = 3; // deflaut value

submit.addEventListener("click", onSubmit);
rating_buttons.forEach((btn) => {
  btn.addEventListener("click", handleRatingClick);
});
function onSubmit() {
  card_content_1.classList.add("hide");
  score.textContent = stars_score;
  card_content_2.classList.remove("hide");
}

function handleRatingClick(event) {
  rating_buttons.forEach((btn) => {
    btn.classList.remove("active");
  });
  event.target.classList.add("active");

  stars_score = event.target.textContent;
  console.log(stars_score);
}
