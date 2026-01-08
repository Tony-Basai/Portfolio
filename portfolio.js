const itemButton = document.querySelectorAll(".button__plus");

itemButton.forEach((item) =>{
    item.addEventListener("click", listHandler);
});

function listHandler (event) {
    event.preventDefault();

    let button = event.currentTarget;
    let returnButton = event.target.closest(".accordion-items__button");
    let returnContent = returnButton.nextElementSibling;
    
    returnButton.classList.toggle("active");

    if (returnButton.classList.contains("active")) {
        returnContent.style.maxHeight = returnContent.scrollHeight + "rem";
        button.textContent = "−";
        returnButton.style.background = "var(--too-light-yellow)";
    } else {
        returnContent.style.maxHeight = 0;
        button.textContent = "+";
        returnButton.style.background = "var(--yellow)";
    }
};

window.addEventListener('DOMContentLoaded', () => {

  const button = document.querySelector(".about-me__button");
  const modal = document.querySelector(".modal");
  const buttonClose = document.querySelector(".modal__buttom-close");
  const buttonDownload = document.querySelectorAll(".modal__buttom-download");

  button.addEventListener("click", () => {
      modal.classList.remove("modal--hidden");
      document.body.classList.add('no-scroll');
  });

  buttonClose.addEventListener("click", clearModal);

  buttonDownload.forEach(button => {
      button.addEventListener("click", clearModal)
  });

  function clearModal() {
          modal.classList.add("modal--hidden");
          document.body.classList.remove('no-scroll');
  }

  const swiper = new Swiper('.swiper', {
    autoplay:{
      delay: 6000,
      disableOnInteraction: false,
      pauseOnMouseEnter: true,
    },  
    keyboard:{
      enabled: true,
      onlyInViewport: true,
    },
    loop: true,
    slidesPerView: 2,
    slidesPerView: 1,
    centeredSlides: true,
    spaceBetween: 16,
    breakpoints: {
      481: {
        slidesPerView: 2,
        centeredSlides: false,
        spaceBetween: 16,
      },
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      dynamicBullets: true,
    },
  });


  const elements = document.querySelectorAll('.fade-in');

  const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {            if (entry.isIntersecting) {
              entry.target.classList.add('fade-in--visible');
              observer.unobserve(entry.target); // один раз
          }
      });
  }, {
      threshold: 0.2
  });

  elements.forEach(el => observer.observe(el));

});
