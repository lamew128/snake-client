const net = require("net");
const {connect} = require("./client");

const handleUserInput = function (key) {
  // your code here
  if (key === '\u0003') {
;    process.exit();
  } else if (key === 'W' || key ==='w') {

  } else if (key === 'A' || key ==='a') {
    
  } else if (key === 'S' || key ==='s') {
    
  } else if (key === 'D' || key ==='d') {
    
  }
};

const setupInput = function () {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  return stdin;
};

console.log("Connecting ...");
connect();
setupInput();