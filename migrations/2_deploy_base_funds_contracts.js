const Migrations = artifacts.require("BaseFunds");

module.exports = function(deployer) {
  deployer.deploy(Migrations);
};
