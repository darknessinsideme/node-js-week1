"use strict";


let http = require('http');
let path = require('path')

let state = 10;


let PORT = 8080;
let localhost = "127.0.0.1";



let server = http.createServer(function(request, response){
  console.log('request was made:'+request.url);
  response.writeHead(200,{'content-Type':'text/html'});

// if (http://127.0.0.1:8080/ == http://127.0.0.1:8080/add)
  switch (request.url) {
   
     case '/':
      console.log(request.url)
      response.write(`<h2>The state is : ${state}</h2>`)

      break;
    case '/add':
      response.write(`<h2>The state is : ${++state}</h2>`)
      break;
    case '/substact':
      response.write(`<h2>The state is : ${--state}</h2>`)
      break;
    case '/reset':
      response.write(`<h2>The state is : ${state = 10}</h2>`)
      break;
    default:
      const extension = path.extname(request.url);
      if (extension === '') {
        response.statusCode = 302;
        response.setHeader('Location', '/');
      }
      else {
        response.statusCode = 404;
        // sendText(response, 'File not found');
      }
  }

  response.end()

})



server.listen(PORT, () => {
  console.log(`Server started http://${localhost}:${PORT}`);
});