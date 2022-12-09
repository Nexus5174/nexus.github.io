localStorage.setItem(
  "IconGif",
  "https://media.tenor.com/jFn8sS1Et-0AAAAM/cat.gif"
);

function updateGif() {
  var icon = document.getElementById("icon");
  icon.src = localStorage.IconGif;
}

function getFact() {
  var limit = 1;
  var FactText = document.getElementById("facts");

  const settings = {
    async: true,
    crossDomain: true,
    url: "https://facts-by-api-ninjas.p.rapidapi.com/v1/facts?limit=" + limit,
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "eb33b3735emsh6630f59760fd8c3p1fa8d7jsn39ffd81c4dca",
      "X-RapidAPI-Host": "facts-by-api-ninjas.p.rapidapi.com",
    },
  };

  $.ajax(settings).done(function (response) {
    var fact = response[0].fact;
    FactText.innerHTML = fact + ".";
  });
}

function updateText() {
  var Element = document.getElementById("dialog");
  Element.innerHTML = "test moment";
}
