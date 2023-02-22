window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.querySelector("#scroll-back-on-top").style.display = "block";
  } else {
    document.querySelector("#scroll-back-on-top").style.display = "none";
  }
}

document.querySelector("#scroll-back-on-top").addEventListener("click", function() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
});