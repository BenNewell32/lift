function yanaAbout() {
  var x = document.getElementById("yanaAbout");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
  var y = document.getElementById("yanaSponsors");
  y.style.display = "none";
  var z = document.getElementById("yanaLessons");
  z.style.display = "none";

  var t = document.getElementById("benAbout");
  t.style.display = "none";

  var q = document.getElementById("benSponsors");
  q.style.display = "none";
  var r = document.getElementById("benLessons");
  r.style.display = "none";

  $("html, body")
    .delay(100)
    .animate({ scrollTop: $("#yana").offset().top }, 1000);
}

function yanaLessons() {
  var x = document.getElementById("yanaLessons");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
  var y = document.getElementById("yanaAbout");
  y.style.display = "none";
  var z = document.getElementById("yanaSponsors");
  z.style.display = "none";

  var t = document.getElementById("benAbout");
  t.style.display = "none";

  var q = document.getElementById("benSponsors");
  q.style.display = "none";
  var r = document.getElementById("benLessons");
  r.style.display = "none";

  $("html, body")
    .delay(100)
    .animate({ scrollTop: $("#yana").offset().top }, 1000);
}

function yanaSponsors() {
  var x = document.getElementById("yanaSponsors");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
  var y = document.getElementById("yanaAbout");
  y.style.display = "none";
  var z = document.getElementById("yanaLessons");
  z.style.display = "none";

  var t = document.getElementById("benAbout");
  t.style.display = "none";

  var q = document.getElementById("benSponsors");
  q.style.display = "none";
  var r = document.getElementById("benLessons");
  r.style.display = "none";

  $("html, body")
    .delay(100)
    .animate({ scrollTop: $("#yana").offset().top }, 1000);
}

function benAbout() {
  var x = document.getElementById("benAbout");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
  var y = document.getElementById("benSponsors");
  y.style.display = "none";
  var z = document.getElementById("benLessons");
  z.style.display = "none";

  var t = document.getElementById("yanaAbout");
  t.style.display = "none";

  var q = document.getElementById("yanaSponsors");
  q.style.display = "none";
  var r = document.getElementById("yanaLessons");
  r.style.display = "none";

  $("html, body")
    .delay(100)
    .animate({ scrollTop: $("#ben").offset().top }, 1000);
}

function benLessons() {
  var x = document.getElementById("benLessons");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
  var y = document.getElementById("benAbout");
  y.style.display = "none";
  var z = document.getElementById("benSponsors");
  z.style.display = "none";

  var t = document.getElementById("yanaAbout");
  t.style.display = "none";

  var q = document.getElementById("yanaSponsors");
  q.style.display = "none";
  var r = document.getElementById("yanaLessons");
  r.style.display = "none";

  $("html, body")
    .delay(100)
    .animate({ scrollTop: $("#ben").offset().top }, 1000);
}

function benSponsors() {
  var x = document.getElementById("benSponsors");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
  var y = document.getElementById("benAbout");
  y.style.display = "none";
  var z = document.getElementById("benLessons");
  z.style.display = "none";

  var t = document.getElementById("yanaAbout");
  t.style.display = "none";

  var q = document.getElementById("yanaSponsors");
  q.style.display = "none";
  var r = document.getElementById("yanaLessons");
  r.style.display = "none";

  $("html, body")
    .delay(100)
    .animate({ scrollTop: $("#ben").offset().top }, 1000);
}

function showNewToAnalytics() {
  var x = document.getElementById("newToAnalytics");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
  var y = document.getElementById("Oracle");
  y.style.display = "none";
  var z = document.getElementById("Tableau");
  z.style.display = "none";

  var t = document.getElementById("TableauDetail");
  t.style.display = "none";

  var q = document.getElementById("OracleDetail");
  q.style.display = "none";

  $("html, body")
    .delay(100)
    .animate({ scrollTop: $("#oracleButton").offset().top }, 1000);
}

function showTableau() {
  var x = document.getElementById("newToAnalytics");
  x.style.display = "none";
  var y = document.getElementById("Oracle");
  y.style.display = "none";
  var z = document.getElementById("Tableau");
  if (z.style.display === "none") {
    z.style.display = "block";
  } else {
    z.style.display = "none";
  }

  var t = document.getElementById("TableauDetail");
  t.style.display = "none";

  var q = document.getElementById("OracleDetail");
  q.style.display = "none";

  $("html, body")
    .delay(100)
    .animate({ scrollTop: $("#oracleButton").offset().top }, 1000);
}

function showOracle() {
  var x = document.getElementById("newToAnalytics");
  x.style.display = "none";
  var y = document.getElementById("Oracle");

  if (y.style.display === "none") {
    y.style.display = "block";
  } else {
    y.style.display = "none";
  }
  var z = document.getElementById("Tableau");
  z.style.display = "none";

  var q = document.getElementById("TableauDetail");
  q.style.display = "none";

  var t = document.getElementById("OracleDetail");
  t.style.display = "none";

  $("html, body")
    .delay(100)
    .animate({ scrollTop: $("#oracleButton").offset().top }, 1000);
}

function showTableauDetail() {
  var y = document.getElementById("TableauDetail");
  if (y.style.display === "none") {
    y.style.display = "block";
  } else {
    y.style.display = "none";
  }

  $("html, body")
    .delay(100)
    .animate({ scrollTop: $("#TableauDetail").offset().top }, 1000);
}

function ShowOracleDetail() {
  var y = document.getElementById("OracleDetail");
  if (y.style.display === "none") {
    y.style.display = "block";
  } else {
    y.style.display = "none";
  }

  $("html, body")
    .delay(100)
    .animate({ scrollTop: $("#OracleDetail").offset().top }, 1000);
}

function benConsulting() {
  window.location.href =
    "https://www.liftkc.online/book-online/tableau-consulting";
}

function zachConsulting() {
  window.location.href =
    "https://www.liftkc.online/book-online/oracle-consulting";
}

function showBenEngagements() {
  var y = document.getElementById("benEngagements");
  if (y.style.display === "none") {
    y.style.display = "block";
  } else {
    y.style.display = "none";
  }

  $("html, body")
    .delay(100)
    .animate({ scrollTop: $("#benEngagements").offset().top }, 1000);
}

function showZachEngagements() {
  var y = document.getElementById("zachEngagements");
  if (y.style.display === "none") {
    y.style.display = "block";
  } else {
    y.style.display = "none";
  }

  $("html, body")
    .delay(100)
    .animate({ scrollTop: $("#zachEngagements").offset().top }, 1000);
}
