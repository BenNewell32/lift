function yana() {
  var x = document.getElementById("yana");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
  var y = document.getElementById("lift");
  y.style.display = "none";
  var z = document.getElementById("benny");
  z.style.display = "none";

  var t = document.getElementById("pro");
  t.style.display = "none";
  var u = document.getElementById("follow");
  u.style.display = "none";

  $("html, body")
    .delay(100)
    .animate({ scrollTop: $("#yana").offset().top }, 1000);

    document.getElementById("liftbutton").classList.remove("active")
    document.getElementById("bennybutton").classList.remove("active")
    document.getElementById("probutton").classList.remove("active")
    document.getElementById("followbutton").classList.remove("active")

    document.getElementById("yanabutton").classList.add("active")

}

function benny() {
  var x = document.getElementById("benny");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
  var y = document.getElementById("lift");
  y.style.display = "none";
  var z = document.getElementById("yana");
  z.style.display = "none";

  var t = document.getElementById("pro");
  t.style.display = "none";

  var u = document.getElementById("follow");
  u.style.display = "none";

  $("html, body")
    .delay(100)
    .animate({ scrollTop: $("#yana").offset().top }, 1000);
    document.getElementById("liftbutton").classList.remove("active")
    document.getElementById("yanabutton").classList.remove("active")
    document.getElementById("probutton").classList.remove("active")
    document.getElementById("followbutton").classList.remove("active")

    document.getElementById("bennybutton").classList.add("active")
}

function lift() {
  var x = document.getElementById("lift");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
  var y = document.getElementById("yana");
  y.style.display = "none";
  var z = document.getElementById("benny");
  z.style.display = "none";

  var t = document.getElementById("pro");
  t.style.display = "none";
  var u = document.getElementById("follow");
  u.style.display = "none";

  $("html, body")
    .delay(100)
    .animate({ scrollTop: $("#yana").offset().top }, 1000);

    document.getElementById("bennybutton").classList.remove("active")
    document.getElementById("yanabutton").classList.remove("active")
    document.getElementById("probutton").classList.remove("active")
    document.getElementById("followbutton").classList.remove("active")

    document.getElementById("liftbutton").classList.add("active")
}

function pro() {
  var x = document.getElementById("pro");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
  var y = document.getElementById("yana");
  y.style.display = "none";
  var z = document.getElementById("benny");
  z.style.display = "none";

  var t = document.getElementById("lift");
  t.style.display = "none";
  var u = document.getElementById("follow");
  u.style.display = "none";

  $("html, body")
    .delay(100)
    .animate({ scrollTop: $("#yana").offset().top }, 1000);

    document.getElementById("liftbutton").classList.remove("active")
    document.getElementById("yanabutton").classList.remove("active")
    document.getElementById("bennybutton").classList.remove("active")
    document.getElementById("followbutton").classList.remove("active")

    document.getElementById("probutton").classList.add("active")
}

function follow() {
  var x = document.getElementById("follow");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
  var y = document.getElementById("yana");
  y.style.display = "none";
  var z = document.getElementById("benny");
  z.style.display = "none";

  var t = document.getElementById("pro");
  t.style.display = "none";
  var u = document.getElementById("lift");
  u.style.display = "none";

  $("html, body")
    .delay(100)
    .animate({ scrollTop: $("#yana").offset().top }, 1000);

    document.getElementById("liftbutton").classList.remove("active")
    document.getElementById("yanabutton").classList.remove("active")
    document.getElementById("probutton").classList.remove("active")
    document.getElementById("bennybutton").classList.remove("active")

    document.getElementById("followbutton").classList.add("active")
}


function reveal() {
  var reveals = document.querySelectorAll(".reveal");
  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 150;
    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}

function hideArrow() {
  var arrows = document.querySelectorAll(".arrow");
  for (var i = 0; i < arrows.length; i++) {
    arrows[i].classList.add("inactive");
  }
}

if (window.screen.width >= 724) {
  window.addEventListener("load", reveal);
  window.addEventListener("load", hideArrow);
  window.addEventListener("scroll", reveal);
} else {
  window.addEventListener("scroll", reveal);
}
