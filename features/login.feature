Feature: Login Page

    Background:
        Given I browse "http://localhost:5000/users/login"

    Scenario: Login Unsuccessful
        Given I am on "http://localhost:5000/users/login"
        When I fill in the following:
            | input[name='email']    | ' ' |
            | input[name='password'] | ' ' |
        And I click on "#login1"
        Then I should see "login"

    Scenario: Login Success
        Given I am on "http://localhost:5000/users/login"
        When I fill in the following:
            | input[name='email']    | a@gmail.com |
            | input[name='password'] | aaaaaa1     |
        And I click on "#login1"
        Then I should be on "/dashboard"

    Scenario: Logout
        Given I am on "/dashboard"
        When I follow "a[href='/users/logout']"
        Then I should be on "/users/login"

    Scenario: GoToRegister
        Given I am on "http://localhost:5000/users/login"
        When I follow "a[href='/users/register']"
        Then I should be on "/users/register"



