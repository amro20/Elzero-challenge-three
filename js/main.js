let div = document.querySelector(".scroll-to-top");
window.onscroll = function () {
  if (this.scrollY >= 1000) {
    div.classList.add("show");
  } else {
    div.classList.remove("show");
  }
};
