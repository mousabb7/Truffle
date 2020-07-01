const heloo = artifacts.require('./HelloWorld');

const helloSettings = {
  name: "Mousab"
}

module.exports = function(deployer){
  deployer.deploy(heloo);
};