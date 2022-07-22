const pannels = document.querySelectorAll("#business .pannel");
const businessTitles = document.querySelectorAll("#business .title");
const select = document.querySelector("#recommend .selectBar");
const selectList = document.querySelector("#recommend .selectList");
let siblings = [];

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

select.addEventListener("click", (e) => {
  e.preventDefault();
  select.classList.toggle("open");
  selectList.classList.toggle("open");
});
