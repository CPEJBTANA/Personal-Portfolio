document.addEventListener("DOMContentLoaded", function () {
  const aboutSection = document.querySelector(".About");
  const WorksSection = document.querySelector(".Works");
  const contactSection = document.querySelector(".Contact"); // Updated selector

  function handleScroll() {
    const aboutPosition = aboutSection.getBoundingClientRect().top;
    const contactPosition = contactSection.getBoundingClientRect().top;
    const WorksPosition = WorksSection.getBoundingClientRect().top;
    const screenPosition = window.innerHeight;

    if (aboutPosition < screenPosition) {
      aboutSection.classList.add("visible");
    }

    if (contactPosition < screenPosition) {
      contactSection.classList.add("visible");
    }
    if (WorksPosition < screenPosition) {
      WorksSection.classList.add("visible");
    }
  }

  window.addEventListener("scroll", handleScroll);
});
