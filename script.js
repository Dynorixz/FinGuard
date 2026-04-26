const menuBtn = document.getElementById("menuBtn");
const nav = document.getElementById("nav");

menuBtn.addEventListener("click", () => {
  nav.classList.toggle("active");
});

document.querySelectorAll(".nav a").forEach((link) => {
  link.addEventListener("click", () => {
    nav.classList.remove("active");
  });
});

document.querySelectorAll(".btn").forEach((button) => {
  button.addEventListener("click", () => {
    if (button.textContent.trim().includes("RuStore")) {
      console.log("FinGuard скоро появится в RuStore");
    }
  });
});
