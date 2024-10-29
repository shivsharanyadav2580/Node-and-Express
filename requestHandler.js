const { URLSearchParams } = require("url");
const fs = require("fs");

const RequestHandler = (req, res) => {
  

  if (req.url === "/") {
    res.write();
    res.end();
  } 
  
};

module.exports = RequestHandler;
