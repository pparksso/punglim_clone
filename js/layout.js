const header = document.querySelector("#header");
const infoBtn = document.querySelector("#footer .richwood");
const info = document.querySelector("#footer .info");

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
