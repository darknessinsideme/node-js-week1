'use strict';

// TODO: Write the homework code in this file


let state = 10;

module.exports = state;

const http = require('http');
const path = require('path');


const sendStatePage = require('/home/kali/Downloads/Node.js-master/week1/homework/responses/sendStatePage');
const sendAddPage = require('/home/kali/Downloads/Node.js-master/week1/homework/responses/sendAddPage');
const sendSubstactPage    = require('/home/kali/Downloads/Node.js-master/week1/homework/responses/sendSubstactPage.js');
const sendResetPage      = require('/home/kali/Downloads/Node.js-master/week1/homework/responses/sendResetPage.js');

const PORT = 8080;
const localhost = "127.0.0.1"
function handleRequest(request, response) {
  console.log(request.method, request.url);

  switch (request.url) {
    case '/':
      sendStatePage(response);
      break;
    case '/add':
      sendAddPage(response);
      break;
    case '/substact':
      sendSubstactPage(response);
      break;
    case '/reset':
      sendResetPage(response)
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

  response.end();
}

const server = http.createServer(handleRequest);

server.listen(PORT, () => {
  console.log(`Server started http://${localhost}:${PORT}`);
});


















































// var time = 0 ;

// setTimeout(function(){
//   time += 2;
//   console.log(time + " second passed")
// },2000)
// console.log(__dirname)
// console.log(__filename)