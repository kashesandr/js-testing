Feature: Greater Common Delimiter
  As a user
  I want to be sure that the app works well

  Scenario: Get title of website
    Given I go on the website "http://localhost:8080/"
    Then should the title of the page be "Greatest Common Delimiter"

  Scenario: Speakers
    Given I go on the website "http://localhost:8080/"
    When I set a value "5" for the "first number"
    When I set a value "10" for the "second number"
    When I click on the "result button"
    Then I see the value "5" in the "result" element