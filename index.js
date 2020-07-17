const today = new Date();
const cards = document.querySelectorAll(".card-product");

cards.forEach((card) => {
  const cardDay = card.querySelector("p").innerText.slice(-2);
  if (today.getDate() === Number.parseInt(cardDay, 10)) {
    card.classList.add("today");
  }
});
