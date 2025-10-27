// SEARCH FEATURE
const searchInput = document.getElementById("Search");
const cards = document.querySelectorAll(".card");

searchInput.addEventListener("input", () => {
  const query = searchInput.value.toLowerCase();

  cards.forEach(card => {
    const text = card.innerText.toLowerCase();
    card.style.display = text.includes(query) ? "block" : "none";
  });
});



// MODAL FEATURE
const seeMoreButtons = document.querySelectorAll(".see-more");
const modal = document.getElementById("modal");
const modalBody = document.getElementById("modal-body");
const closeBtn = document.querySelector(".modal-close");

seeMoreButtons.forEach(button => {
  button.addEventListener("click", () => {
    const card = button.closest(".card");
    const clone = card.cloneNode(true); 

    // remove button inside modal
    const btnInside = clone.querySelector(".see-more");
    if (btnInside) btnInside.remove();

    const info = clone.querySelector(".info");
    const map = clone.querySelector(".map");
    if (info) info.style.display = "block";
    if (map) map.style.display = "block";
    

    modalBody.innerHTML = ""; // clear previous
    modalBody.appendChild(clone);

    modal.style.display = "flex"; // show modal clear
  });
});

// Close modal
closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
});

// Close when clicking outside
modal.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
  }
});



window.addEventListener('scroll', () => {
  const header = document.querySelector('.navbar');
  if (window.scrollY > 50) {
    header.classList.add('blurred');
  } else {
    header.classList.remove('blurred');
  }
});


