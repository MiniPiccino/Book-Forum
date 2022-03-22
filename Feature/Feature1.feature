Feature: Checking if Feature 1 works
I have to check if the Home page, Login page and Selling page exist. Moreover, have to check if log in works and
inserting new forums


Scenario: Checking if I can log in
    Given I launch the website with URL of the website
    When I get to the page
        And I click on the Log in button
        And I get to the Log in page
        And Insert the username and password
    Then I am getting to the Home page again

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


 


