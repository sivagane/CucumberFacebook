@tag
Feature: To Check the Registration page of Facebook Application

@tag2
Scenario Outline: Facebook Application
Given User enters the Login Page
Then User enters the "<firstname>" , "<lastname>" , "<emailid>" , "<newpassword>"
And User Selects the "<day>" , "<month>" , "<year>"

Then User Clicks the SignUp button
Then User Close the Browser

Examples:
     |firstname|lastname|emailid               |newpassword|day |month|year|gender|
     |siva     |ganesh  |sivag91@gmail.com     |1234       |08  |09   |1990|male  |
     |Abi      |rami    |abi@gmail.com         |2345       |01  |11   |1994|female|
     |Java     |Selenium|Java@gmail.com        |3456       |00  |00   |0000|male  |