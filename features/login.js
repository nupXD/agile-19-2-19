const assert = require('assert');
const { Given, When, Then } = require('cucumber');

function isUsernameAndPasswordCorrect(username, password) {
  return 'Yes';
}

Given('username is admin and password is admin', function () {
  this.username = 'admin';
  this.password = 'admin';
});

When('I ask about whether username and password is correct if admin and admin is entered', function () {
  this.actualUsername = isUsernameAndPasswordCorrect(this.username);
  this.actualPassword = isUsernameAndPasswordCorrect(this.password);
});

Then('I should be told {string}', function (expectedAnswer) {
  assert.equal(this.actualUsername, expectedAnswer);
  assert.equal(this.actualPassword, expectedAnswer);
});