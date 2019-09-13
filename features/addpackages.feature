Feature: Is it possible to add package yet?
  Everybody wants to know when will we be able to add package


    Scenario: Package isn't added
    Given package isn't added
    When I ask whether it's possible to add package yet
    Then I should be told "Nope"

    Scenario: Package is added
    Given package is added
    When I ask whether it's possible to add package yet
    Then I should be told "Yep"