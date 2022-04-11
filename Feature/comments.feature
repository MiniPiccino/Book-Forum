Feature: Checking if inserting comment function works

Scenario: Inserting new comment on forum topic

    Given I launched the website
        And I click on Show Forum button on forum topic on Home page
    When I insert comment in textbox
        And I click submit
    Then I get to the page with that topic with comments underneath

