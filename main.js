require = require("esm")(module /* , options*/);

const { helloWolf } = require("./handlers/api");

module.exports = {
  helloWolf
};
