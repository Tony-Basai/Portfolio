const button = document.querySelector(".about-me__button");
const modal = document.querySelector(".modal");

button.addEventListener("click", () => {
    modal.classList.remove("modal--hidden");
    document.body.classList.add('no-scroll');
});

const buttonClose = document.querySelector(".modal__buttom-close");

buttonClose.addEventListener("click", () => {
    clearModal()
});

const buttonDownload = document.querySelector(".modal__buttom-download");

buttonDownload.addEventListener("click", () => {
    clearModal()
});

function clearModal() {
        modal.classList.add("modal--hidden");
        document.body.classList.remove('no-scroll');
}

buttonDownload.addEventListener ('click', (e) => modalSubmit(e));

function modalSubmit (e) {
    e.preventDefault();  
}

buttonClose.addEventListener ('click', (e) => modalSubmit(e));

function modalSubmit (e) {
    e.preventDefault();  
}

const itemDate = document.querySelectorAll(".item-accordion__items");

itemDate.forEach((item) =>{
    item.addEventListener("click", listHandler);
});

function listHandler (event) {
    event.preventDefault();
    let returnDate = event.target.closest(".accordion-items__mark");
    let returnContent = returnDate.nextElementSibling;
    
    returnDate.classList.toggle("active");
    if (returnDate.classList.contains("active")) {
        returnContent.style.maxHeight = returnContent.scrollHeight + "rem";
    } else {
        returnContent.style.maxHeight = 0;
    }
};

window.addEventListener('DOMContentLoaded', () => {
    const swiper = new Swiper('.swiper', {
      loop: true,
      slidesPerView: 2,
      spaceBetween: 30,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
    });
});
