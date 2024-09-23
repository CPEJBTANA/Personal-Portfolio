$(document).ready(function () {
  function toggleMenu() {
    $(".BurgerMenuPop").toggleClass("active");
  }

  $(".burger-icon").on("click", function () {
    toggleMenu();
  });

  $(".BurgerMenuPop a").on("click", function () {
    toggleMenu();
  });
});

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

  // Typing effect code
  const titles = [
    "Front-End Developer",
    "Graphic Designer",
    "Computer Engineer",
  ];
  let currentTitleIndex = 0;
  let currentCharIndex = 0;
  let isDeleting = false;
  const typingSpeed = 150;
  const erasingSpeed = 100;
  const delayBetweenTitles = 2000;
  const typingElement = document.querySelector(".typing-effect");

  function type() {
    const currentTitle = titles[currentTitleIndex];
    if (isDeleting) {
      typingElement.textContent = currentTitle.substring(
        0,
        currentCharIndex - 1
      );
      currentCharIndex--;
      if (currentCharIndex === 0) {
        isDeleting = false;
        currentTitleIndex = (currentTitleIndex + 1) % titles.length;
        setTimeout(type, typingSpeed);
      } else {
        setTimeout(type, erasingSpeed);
      }
    } else {
      typingElement.textContent = currentTitle.substring(
        0,
        currentCharIndex + 1
      );
      currentCharIndex++;
      if (currentCharIndex === currentTitle.length) {
        isDeleting = true;
        setTimeout(type, delayBetweenTitles);
      } else {
        setTimeout(type, typingSpeed);
      }
    }
  }

  setTimeout(type, typingSpeed);
});
document
  .getElementById("download-cv-link")
  .addEventListener("click", function () {
    alert("CV Downloading...");
  });
