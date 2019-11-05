Feature: Things present in main page

    Background:
        Given I browse "http://localhost:5000/"

    Scenario: Home Page Menu
        Given I am on "http://localhost:5000/"
        When I check "#navi-toggle"
        Then I should see "Home"
        And I should see "popular tours"
        And I should see "stories"
        And I should see "book"
        And I should see "about"

    Scenario: Check home page
        Given I am on "http://localhost:5000/"
        Then I should see "tours"