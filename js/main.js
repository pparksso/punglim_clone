const header = document.querySelector("#header");

window.addEventListener("scroll", (e) => {
  let scrollTop = document.documentElement.scrollTop;
  let deltaY = e.deltaY;
  if (scrollTop > 0) {
    header.classList.add("on");
  } else {
    header.classList.remove("on");
  }
  if (scrollTop >= 1300) {
    header.style.display = "none";
  } else {
    header.style.display = "block";
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
    nextEl: "#new .next",
    prevEl: "#new .prev",
  },
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
    pauseOnMouseEnter: true,
  },
  pagination: {
    el: ".nav .pagination",
    type: "fraction",
  },
});
