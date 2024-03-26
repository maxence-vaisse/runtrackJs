document.getElementById("button").onclick = function() {
    citation();
  };
  
  function citation() {
    var citationText = document.getElementById("citation").textContent;
    console.log(citationText);
  }
  