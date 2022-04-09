Feature: Checking if login and register function works


Scenario: Checking if I can log in
    Given I launch the website with URL of the website
    When I get to the page
        And I click on the Log in button
        And I get to the Log in page
        And Insert the username and password
    Then I am getting to the Home page again

Scenario: Checking if I can register
    Given I launch the website with URL of the website
    And I got to the Home page
    And I clicked on Sign Up
    And I am on Register page
    When I insert username and password credentials
    Then I should get to the Log in page to login into the system
