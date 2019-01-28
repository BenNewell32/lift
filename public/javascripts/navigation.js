
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
}