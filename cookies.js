document.getElementById("acceptCookies").addEventListener("click", function () {
  localStorage.setItem("cookiesAccepted", "true");
  document.getElementById("cookie-banner").style.display = "none";
});

document.getElementById("rejectCookies").addEventListener("click", function () {
  localStorage.setItem("cookiesAccepted", "false");
  document.getElementById("cookie-banner").style.display = "none";
});

window.addEventListener("load", function () {
  const cookiesAccepted = localStorage.getItem("cookiesAccepted");
  if (cookiesAccepted === "true" || cookiesAccepted === "false") {
    document.getElementById("cookie-banner").style.display = "none";
  }
});
