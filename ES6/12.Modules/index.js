import { getContents } from 'module';

getContents('http://google.com/json', result =>{
  console.log(result);
});
