const fs = require("fs");

if (!fs.existsSync("./welcome.txt")) {
  fs.writeFile("./welcome.txt", "Hello Node", (error) => {
    if (error) {
      console.log(error);
    }
  });
}

fs.readFile("./hello.txt", "utf8", (error, data) => {
  if (error) {
    console.log(error);
  } else {
    console.log(data); 
  }
});
