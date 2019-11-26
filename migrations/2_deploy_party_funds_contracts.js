const Migrations = artifacts.require("PartyFunds");

module.exports = function(deployer) {
  deployer.deploy(Migrations);
};
