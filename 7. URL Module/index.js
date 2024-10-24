import { URL } from 'url';

const _URL = new URL('https://www.google.com:8080/p/a/t/h?query=string#hash');
// console.log('hash:', _URL.hash);
// console.log('host:', _URL.host);
// console.log('hostname:', _URL.hostname);
// console.log('port:', _URL.port);
// console.log('href:', _URL.href);
// console.log('protocol:', _URL.protocol);
// console.log('search:', _URL.search);
// console.log('search params:', _URL.searchParams);

// WORKS THE SAME
console.log(_URL.toString());
console.log(_URL.toJSON());
