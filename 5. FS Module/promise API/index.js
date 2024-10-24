import * as fs from 'fs/promises';

// CREATING DIRECTORY / FOLDER
try {
  // creating a folder: add recursive if u want to create a folder all together
  // await fs.mkdir('c:\\nodejs', { recursive: true });

  // READ FILES IN THE FOLDER
  // const files = await fs.readdir('c:\\nodejs');
  // for (const file of files) {
  //   console.log(file);
  // }

  // REMOVE FOLDER: CANT REMOVE IF FOLDER CONTAINS FILES
  // await fs.rmdir('c:\\nodejs\\content');

  // CREATE AND WRITE FILES
  // await fs.writeFile('ReadMe.md', 'This is a new file created and write content in js.');

  // READ A FILE
  // const data = await fs.readFile('ReadMe.md', 'utf-8');
  // console.log(data);

  // APPEND FILE
  // await fs.appendFile('ReadMe.md', 'Appending data: Getting started in Node JS');
  // const data = await fs.readFile('ReadMe.md', 'utf-8');
  // console.log(data);

  // COPY FILE
  // await fs.copyFile('ReadMe.md', 'ReadMe2.txt');

  // GETTING INFORMATION OF A FILE
  const info = await fs.stat('ReadMe2.txt');
  console.log(info);
  console.log('Is it a file? ', info.isFile());

} catch (error) {
  console.log(error);
}