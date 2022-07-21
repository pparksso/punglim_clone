const header = document.querySelector("#header");
const pannels = document.querySelectorAll("#business .pannel");
const businessTitles = document.querySelectorAll("#business .title");
let siblings = [];
window.addEventListener("scroll", (e) => {
  let scrollTop = document.documentElement.scrollTop;
  let deltaY = e.deltaY;
  if (scrollTop > 0) {
    header.classList.add("on");
  } else {
    header.classList.remove("on");
  }
  if (scrollTop >= 1000) {
    header.classList.add("off");
  } else {
    header.classList.remove("off");
  }
});

new Swiper("#mainVisual .swiper", {
  effect: "fade", //slide, fade, cube, coverflow, card
  speed: 1000,
  loop: true,
  navigation: {
    nextEl: "#mainVisual .next",
    prevEl: "#mainVisual .prev",
  },
  autoplay: {
    delay: 10000,
    disableOnInteraction: false,
  },
  pagination: {
    el: "#mainVisual .pagination",
    type: "bullets",
    clickable: true,
  },
});

new Swiper("#update .search", {
  effect: "fade",
  fadeEffect: {
    crossFade: true,
  },
  speed: 1000,
  loop: true,
  navigation: {
    nextEl: ".nav .next",
    prevEl: ".nav .prev",
  },
  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
    pauseOnMouseEnter: true,
  },
  pagination: {
    el: ".nav .pagination",
    type: "fraction",
    formatFractionCurrent: function (number) {
      return `0${number}`;
    },
    formatFractionTotal: function (number) {
      return `0${number}`;
    },
  },
});

const titleSiblingsList = () => {
  siblings = [...businessTitles];
  siblings.forEach((item, index) => {
    item.addEventListener("click", (e) => {
      e.preventDefault();
      siblings.forEach((item2) => {
        item2.classList.remove("on");
      });
      item.classList.add("on");
      pannels.forEach((item3, index2) => {
        index === index2 ? item3.classList.add("on") : item3.classList.remove("on");
      });
    });
  });
};
titleSiblingsList();
