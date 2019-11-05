Feature: Providing proper information click on register then register should be successful

    Background:
        Given I browse "http://localhost:5000/users/register"

    Scenario: Register Successful
        Given I am on "http://localhost:5000/users/register"
        When I fill in the following:
            | input[name='name']      | testing             |
            | input[name='email']     | testing10@gmail.com |
            | input[name='password']  | aaaaaa1             |
            | input[name='password2'] | aaaaaa1             |
        When I press "register"
        And I should see "You are now registered and can log in"

    Scenario: GoToLogin
        Given I am on "http://localhost:5000/users/register"
        When I follow "a[href='/users/login']"
        Then I should be on "/users/login"

