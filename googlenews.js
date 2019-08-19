var url = "https://newsapi.org/v2/everything?" +
          'q=Environment&' +
          'from = 2019-01-01&' +
          'sortBy=popularity&' +
          'apiKey=b5776ce636424093b1d98ef61ff23c46';

var req = new Request(url);

fetch(req).then(function(response) {
  console.log(response.json());
})
