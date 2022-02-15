Feature: Login

  I want to log into Conduit
  
  @smoke @skip
  Scenario: Successful Login
    Given I open page with url "/"
    When click link "Log In"
    * I type email "ipiliavskyi@gmail.com"
    And I click on "Continue" button
    * I type password "Pilyav4ik1986"
    And I click on "Sign in" button

  @smoke
  Scenario: Unsuccessful Login
    Given I open page with url "/"
    When click link "Log In"
    * I type email "ipiliavskyi@gmail.com22"
    And I click on "Continue" button
    Then I see message "There is no account for the username or email you entered."