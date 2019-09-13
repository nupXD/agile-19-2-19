const assert = require('assert');
const { Given, When, Then } = require('cucumber');


function isPackageAdded(package) {
if (package === "added") {
    return "Yep"; 
  } else {
    return "Nope";
  }
}


Given('package isn\'t added', function () {
  this.package = 'notadded';
});

  Given('package is added', function () {
    this.package = 'added';
  });

  When('I ask whether it\'s possible to add package yet', function () {
    this.actualAnswer = isPackageAdded(this.package);
  });

  Then('I should be told {string}', function (expectedAnswer) {
    assert.equal(this.actualAnswer, expectedAnswer);
  });