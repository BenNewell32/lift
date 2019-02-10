
function showNewToAnalytics(){
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

}

function showTableau(){
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
}

function showOracle(){
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
}

function showTableauDetail(){
  var y = document.getElementById("TableauDetail");
  if (y.style.display === "none") {
  y.style.display = "block";
  } else {
  y.style.display = "none";
  }
}

function ShowOracleDetail(){
  var y = document.getElementById("OracleDetail");
  if (y.style.display === "none") {
  y.style.display = "block";
  } else {
  y.style.display = "none";
  }
  
}

function benConsulting(){
window.location.href = 'https://benmnewell.wixsite.com/website/book-online/tableau-consulting';
}

function zachConsulting(){
  window.location.href = 'https://benmnewell.wixsite.com/website/book-online/oracle-consulting';
  }

function showBenEngagements(){
  var y = document.getElementById("benEngagements");
  if (y.style.display === "none") {
  y.style.display = "block";
  } else {
  y.style.display = "none";
  }
}

function showZachEngagements(){
  var y = document.getElementById("zachEngagements");
  if (y.style.display === "none") {
  y.style.display = "block";
  } else {
  y.style.display = "none";
  }
}