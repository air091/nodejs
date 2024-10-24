import * as fs from 'fs';

// CREATE A FILE USING CALLBACK API
fs.mkdir('c:/nodejs', (error) => {
  if (error) throw error;
  console.log('Directory is created...');
});

