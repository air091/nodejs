import http from 'http';
import fs from 'fs';

const server = http.createServer(( request, response ) => {
  
  if ( request.url === '/' || request.url === '/home' ) {
    response.writeHead(200, 'OK', { 'Content-Type': 'text/html' });
    fs.readFile('./10. Serving Pages/public/home.html', ( error, data ) => {
      if ( error ) throw error;
      response.end( data );
    });

  } else if ( request.url === '/about' ) {
    response.writeHead(200, 'OK', { 'Content-Type': 'text/html' });
    fs.readFile('./10. Serving Pages/public/about.html', ( error, data ) => {
      if ( error ) throw error;
      response.end( data );
    });

  } else {
    response.writeHead(404, 'BAD', { 'Content-Type': 'text/html' });
    response.end('<h1>404 PAGE NOT FOUND</h1>');
    
  }
});

server.listen(8080, () => console.log('Server is active...'));