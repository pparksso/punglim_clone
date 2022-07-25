const header = document.querySelector("#header");
const infoBtn = document.querySelector("#footer .richwood");
const info = document.querySelector("#footer .info");
const subDepth01 = document.querySelectorAll("#subHeader .depth01");
const subDepth02 = document.querySelectorAll("#subHeader .depth02");

window.addEventListener("wheel", (e) => {
  let scrollTop = document.documentElement.scrollTop;
  let deltaY = e.deltaY;
  scrollTop > 150 ? header.classList.add("on") : header.classList.remove("on");
  scrollTop >= 1000 && deltaY > 0 ? header.classList.add("off") : header.classList.remove("off");
});

infoBtn.addEventListener("click", () => {
  info.classList.toggle("on");
  infoBtn.classList.toggle("on");
});

subDepth01.forEach((item, index) => {
  item.addEventListener("click", (e) => {
    e.preventDefault();
    subDepth02.forEach((item2, index02) => {
      if (index === index02) {
        item2.classList.add("open");
      } else {
        item2.classList.remove("open");
      }
    });
  });
});
