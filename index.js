function toggleMenu() {
  document.querySelector(".nav-links").classList.toggle("show");
}

const categoryCards = document.querySelectorAll(".category-cards .card");
const products = document.querySelectorAll(".product-item");

categoryCards.forEach(card => {
  card.addEventListener("click", () => {
    categoryCards.forEach(c => c.classList.remove("active"));
    card.classList.add("active");
    let category = card.dataset.category;
    products.forEach((product, index) => {
      if (category === "all") {
        if (index < 10) {
          product.style.display = "block";
        } else {
          product.style.display = "none";
        }
      } else {
        if (product.dataset.category === category) {
          product.style.display = "block";
        } else {
          product.style.display = "none";
        }
      }
    });
  });
});

const backToTopBtn = document.getElementById("backToTop");

window.onscroll = function () {
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    backToTopBtn.style.display = "block";
  } else {
    backToTopBtn.style.display = "none";
  }
};

backToTopBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});