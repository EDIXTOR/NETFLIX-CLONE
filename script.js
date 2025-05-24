document.addEventListener("DOMContentLoaded", () => {
  // Slider functionality
  const slider = document.getElementById("cardSlider");
  const leftBtn = document.querySelector(".slider-btn.left");
  const rightBtn = document.querySelector(".slider-btn.right");
  const scrollAmount = 300;

  if (leftBtn && rightBtn && slider) {
    leftBtn.addEventListener("click", () => {
      slider.scrollBy({ left: -scrollAmount, behavior: "smooth" });
    });

    rightBtn.addEventListener("click", () => {
      slider.scrollBy({ left: scrollAmount, behavior: "smooth" });
    });
  }

  // FAQ functionality with auto-closing other items
  const faqItems = document.querySelectorAll(".faq-item");

  faqItems.forEach((item) => {
    const question = item.querySelector(".faq-question");

    question.addEventListener("click", () => {
      // Close all other FAQ items first
      faqItems.forEach(otherItem => {
        if (otherItem !== item) {
          otherItem.classList.remove("active");
          otherItem.querySelector(".faq-answer").classList.remove("show");
        }
      });
      
      // Toggle current item
      item.classList.toggle("active");
      const answer = item.querySelector(".faq-answer");
      answer.classList.toggle("show");
    });
  });
});