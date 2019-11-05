Feature: Home page

    Background:
        Given I browse "http://localhost:5000/"

    Scenario: Check home page
        Given I am on "http://localhost:5000/"
        Then I should see "tours"