const Migrations = artifacts.require("Funds");

module.exports = function(deployer) {
  deployer.deploy(Migrations);
};
