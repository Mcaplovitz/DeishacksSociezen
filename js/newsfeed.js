var url = 'https://newsapi.org/v2/top-headlines?' +
          'country=us&category=sports' +
          'apiKey=1aa37b27121346e9b6b459f1c10e3ee7';
//var req = new Request(url);
var response = requests.get(url);
console.log(response);
// fetch(req)
//     .then(function(response) {
//         console.log(response.json());
//     })