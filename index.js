const today = new Date();
const cards = document.querySelectorAll(".card-product");

cards.forEach((card) => {
  const day = card.querySelector(".card-product-day").innerText;
  const date = card.querySelector(".card-product-date").innerText;
  console.log(today.toDateString(), `${day} ${date}`)
  if (today.toDateString().includes(`${day} ${date}`)) {
    card.classList.add("today");
  }
});
