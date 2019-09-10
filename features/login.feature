Feature: Is the username and password correct?
  If it is correct then send to admin panel

  Scenario: username isn't correct
    Given username is admin and password is admin
    When I ask about whether username and password is correct if admin and admin is entered
    Then I should be told "Yes"