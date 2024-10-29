const http = require("http");
const requestHandler = require('./requestHandler');


function compare(num) {
  if(num = 10){
    console.log('num is 10');
    
  }
  else{
    console.log('Not 10');
    
  }
}



const server = http.createServer(requestHandler);
const PORT = 3001;
server.listen(PORT, () => {
  console.log(`Server running at: http://localhost:${PORT}`);
});