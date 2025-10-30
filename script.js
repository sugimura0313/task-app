document.addEventListener("DOMContentLoaded", () => {
  const toggleButtons = document.querySelectorAll(".toggle-btn");
  const views = document.querySelectorAll(".view");

  toggleButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const target = button.dataset.target;

      toggleButtons.forEach((btn) => btn.classList.remove("active"));
      button.classList.add("active");

      views.forEach((view) => {
        view.classList.toggle("hidden", view.dataset.view !== target);
      });
    });
  });
});
