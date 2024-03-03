var generator = require("generate-password");

var password = generator.generate({
  length: 15,
  numbers: true,
  strict: true,
});

console.log(password);
