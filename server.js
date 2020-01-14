const chalk = require('chalk');
const myHttp = require('http');
require('dotenv').config();

const name = 'Ashraf';
console.log(name);
console.log(chalk.blue(name));

const myServer = myHttp.createServer((request, response) => {
  console.log(`Requested URL: ${request.url}`);
  if (request.url === '/') {
    response.write('You are in home page');
    response.end();
  } else if (request.url === '/ptwd102019') {
    response.write('You are in ptwd102019');
    response.end();
  } else {
    response.write("This page doesn't exist");
    response.end();
  }
});

// myServer.listen(3000, () => console.log('I am running on port: 3000'));
myServer.listen(process.env.PORT, () =>
  console.log('I am running on port: 3000')
);
