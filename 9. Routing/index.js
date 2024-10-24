import http from 'http';

const server = http.createServer((request, response) => {

  // ROUTING
  // console.log(request.url);
  
  if ( request.url === '/' || request.url === '/home') {
    response.writeHead(200, 'OK', { 'Content-Type': 'text/html' });
    response.end(`<div>
        <h1>HOME</h1>
        <a href="/contact">CONTACT PAGE</a>
      </div>`);
  } else if ( request.url === '/about' ) {
    response.writeHead(200, 'OK', { 'Content-Type': 'text/html' });
    response.end('<h1>ABOUT</h1>');
  } else if ( request.url === '/contact' ) {
    response.writeHead(200, 'OK', { 'Content-Type': 'text/html' });
    response.end('<h1>CONTACT</h1>');
  } else {
    response.writeHead(404, 'BAD', { 'Content-Type': 'text/html' })
    response.end('<h1>PAGE NOT FOUND!</h1>');
  }

});

// YOU CAN SPECIFY USE ROUTING IN NODE JS
// HOME
// ABOUT

server.listen(8080, () => console.log('Server is now active...'));