import http from 'http';
const server = http.createServer((request, response) => {
  response.writeHead(202, 'Good', { 'Content-type': 'text/html' });
  response.write('<h1>THIS IS A SERVER USING NODE JS</h1>');

});

server.listen(8080, () => console.log('Server is active...'));