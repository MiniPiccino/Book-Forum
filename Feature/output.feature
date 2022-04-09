Feature: Checking if the function showForum works which shows forums on home page
and detail function work which show details about the forum

Scenario: Show Forums on Home page

    Given I launched the website on the Home page
    THEN I see forums

Scenario: Show details about forum

    Given I launched the website on the Home Page
    When I click on the button Show Forum
    Then I get to the detail page about that forum

