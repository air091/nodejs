import path from 'path';

// console.log(path.basename('c:\\asd\\index.js'));
// console.log(path.basename('c:\\asd\\index.js', '.js'));
// // REMOVING THE FILE EXTENSION

// console.log('directory name:', path.dirname('c:\\asd\\index.js'));
// console.log('extension name:', path.extname('c:\\asd\\index.js'));

// console.log('join name:', path.join('d:', 'Air-web', 'activity', 'tool-kit'));
// console.log('join name(GO-DOWN):', path.join('d:', 'Air-web', 'activity', 'tool-kit', '..'));
// // GO DOWN A LEVEL

// console.log('normalize path:', path.normalize('c://cousesr\\home\\activity\\services'));

// console.log(path.parse('c:/asd/index.js'));
console.log(path.parse('c:/asd/index.js').ext);