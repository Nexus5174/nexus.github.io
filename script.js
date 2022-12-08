function getFact() {
  var limit = 1;
  var FactText = document.getElementById("facts");
  console.log(FactText)
  $.ajax({
    method: "GET",
    url: "https://api.api-ninjas.com/v1/facts?limit=" + limit,
    headers: { "X-Api-Key": "/NX/eMZ9yxaMBKsPsjkzmw==JMjnc7LdKtYQNV9W" },
    contentType: "application/json",
    success: function (result) {
      var fact = result[0].fact
      FactText.innerHTML = fact;
    },
    error: function ajaxError(jqXHR) {
      FactText.style.content = jqXHR.responseText;
      console.log(jqXHR.responseText)
    },
  });
}
