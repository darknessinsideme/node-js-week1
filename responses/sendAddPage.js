'use strict';
let state = require('/home/kali/Downloads/Node.js-master/week1/homework/src/index');
let sum = state
function sendAddPage(response) {
  response.setHeader('Content-Type', 'text/html');
  response.write(`
    <!html>
    <html>
      <head>
        <title>Hello</title>
        <link href="styles.css" type="text/css" rel="stylesheet"/>
      </head>
      <body>
      ${sum += 1}
      </body>
    </html>
  `);
}

module.exports = sendAddPage;
