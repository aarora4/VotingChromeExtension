var slideIndex = 1;

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function changePopup(){
  chrome.browserAction.setPopup({
     popup:"second_page.html"
  });
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}

if (document.readyState === 'complete') {
  showSlides(slideIndex);
}
else {
  document.onreadystatechange = function () {
    if (document.readyState === "complete") {
      showSlides(slideIndex);

      
    }
  }
}

document.addEventListener('DOMContentLoaded', function() {
  var link = document.getElementById('prev1');
  var container = document.getElementById("mainPopup")
  // onClick's logic below:
  link.addEventListener('click', function() {
      plusSlides(1);
      //container.style.visibility = "hidden";
  });
});

document.addEventListener('DOMContentLoaded', function() {
  var flagButton = document.getElementById('flagButton');
  var container = document.getElementById("mainPopup")
  // onClick's logic below:
  flagButton.addEventListener('click', function() {
      //container.style.visibility = "hidden";
  });
});



document.addEventListener('DOMContentLoaded', function() {
  var link = document.getElementById('next1');
  // onClick's logic below:
  link.addEventListener('click', function() {
      plusSlides(-1);
  });
});

function updateAll(truth, numStatements, flaggedStatement, similarStatement, topic, sourceLink, detailsLink) {
  updateTruth(truth);
  (document.getElementById("numStatementsHeader")).innerHTML = numStatements;
  updateStatements(flaggedStatement, similarStatement, topic)
  updateLinks(sourceLink, detailsLink)
}

function updateTruth(truth) {
  if (truth == "True") {
    (document.getElementById("trueHighlightField")).style.backgroundColor = "#FDFF47";
    (document.getElementById("statementCircleMain")).style.backgroundColor = "#8BE5B3";
    (document.getElementById("statement1Circle")).style.backgroundColor = "#8BE5B3";
    (document.getElementById("statement1Text2")).innerHTML = "Likely True";
    //(document.getElementById("statement2Text4")).innerHTML = <b>Verified Rating:</b> + " True";
  } else if (truth == "Unkown") {
    (document.getElementById("unknownHighlightField")).style.backgroundColor = "#FDFF47";
    (document.getElementById("statementCircleMain")).style.backgroundColor = "#707070";
    (document.getElementById("statement1Circle")).style.backgroundColor = "#707070";
    (document.getElementById("statement1Text2")).innerHTML = "Unknown";
   // (document.getElementById("statement2Text4")).innerHTML = <b>Verified Rating:</b> + " Unknown";
  } else if (truth == "False") {
    (document.getElementById("falseHighlightField")).style.backgroundColor = "#FDFF47";
    (document.getElementById("statementCircleMain")).style.backgroundColor = "#FF907C";
    (document.getElementById("statement1Circle")).style.backgroundColor = "#FF907C";
    (document.getElementById("statement1Text2")).innerHTML = "Likely False";
    //(document.getElementById("statement2Text4")).innerHTML = <b>Verified Rating:</b> + " False";
  } else {
    throw "illegalTruthValue";
  }
}


function updateStatements(flaggedStatement, similarStatement, topic) {
  (document.getElementById("flaggedStatementViewer4")).innerHTML = flaggedStatement;
  (document.getElementById("statement1Text3Content")).innerHTML = "Learn more about " + topic;
  //(document.getElementById("statement2Text2")).innerHTML = <b>Statement:</b>  + " " + similarStatement;
  //(document.getElementById("statement2Text3")).innerHTML = <b>Topic:</b>  + " " + topic;
}

function updateLinks(sourceLink, detailsLink) {
  (document.getElementById("viewSourceURL")).href = sourceLink;
  (document.getElementById("moreDetailsUR")).href = detailsLink;
  (document.getElementById("statement1Text3URL")).href = sourceLink;
 //(document.getElementById("statement2Text5")).innerHTML = <ins><b>Source:</b> sourceLink</ins>;
}