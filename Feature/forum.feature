Feature: Checking if the renaming file function and saving new forums function works

Scenario: Inserting new topics

    Given I launched the website on the Home page
        And I click on the Log in button 
        And Inserting Username and Password on Log in page
        And I click on New Forum button on Home page

    When I insert new forum topic
        And I insert forum name 
        And I insert short summary less than 100 characters
        And I insert description for the purpose of the new forum
        And upload avatar from the the files folder(name of the folder)
        And I click on the Submit button
    Then I am on the Home page