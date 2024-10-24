import http from 'http';
// CREATION OF SERVER
const server = http.createServer((request, response) => {
  // console.log(request);

  // SHOW DATA TO A SERVER
  // response.setHeader('Content-type', 'text/html');
  // response.statusCode = 404;
  // response.statusMessage = 'No way';
  
  // SHORTHAND FOR STATUS (CODE, MESSAGE, AND HEADER)
  response.writeHead(202, 'Good', { 'Content-type': 'text/html' });

  response.write('<h1>THIS IS A SERVER USING NODE JS</h1>');
});

// LISTENING ON PORT: 8080
server.listen(8080, () => console.log('Server is active...'));