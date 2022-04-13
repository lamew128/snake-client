let connection;
const handleUserInput = function (key) {
  // your code here
  if (key === '\u0003') {
      process.exit();
  } else if (key === 'W' || key ==='w') {
    connection.write("Move: up");
  } else if (key === 'A' || key ==='a') {
    connection.write("Move: left");
  } else if (key === 'S' || key ==='s') {
    connection.write("Move: down");
  } else if (key === 'D' || key ==='d') {
    connection.write("Move: right");
  }
};

const setupInput = function (conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  return stdin;
};

module.exports = {setupInput};