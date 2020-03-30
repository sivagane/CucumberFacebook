$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("C:/Users/jegan/eclipse-workspace/CucumberFacebook/src/test/java/org/features/Cucmberfacebk.feature");
formatter.feature({
  "line": 2,
  "name": "To Check the Registration page of Facebook Application",
  "description": "",
  "id": "to-check-the-registration-page-of-facebook-application",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@tag"
    }
  ]
});
formatter.scenarioOutline({
  "line": 5,
  "name": "Facebook Application",
  "description": "",
  "id": "to-check-the-registration-page-of-facebook-application;facebook-application",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@tag2"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "User enters the Login Page",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "User enters the \"\u003cfirstname\u003e\" , \"\u003clastname\u003e\" , \"\u003cemailid\u003e\" , \"\u003cnewpassword\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "User Selects the \"\u003cday\u003e\" , \"\u003cmonth\u003e\" , \"\u003cyear\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "User Clicks the SignUp button",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "User Close the Browser",
  "keyword": "Then "
});
formatter.examples({
  "line": 13,
  "name": "",
  "description": "",
  "id": "to-check-the-registration-page-of-facebook-application;facebook-application;",
  "rows": [
    {
      "cells": [
        "firstname",
        "lastname",
        "emailid",
        "newpassword",
        "day",
        "month",
        "year",
        "gender"
      ],
      "line": 14,
      "id": "to-check-the-registration-page-of-facebook-application;facebook-application;;1"
    },
    {
      "cells": [
        "siva",
        "ganesh",
        "sivag91@gmail.com",
        "1234",
        "08",
        "09",
        "1990",
        "male"
      ],
      "line": 15,
      "id": "to-check-the-registration-page-of-facebook-application;facebook-application;;2"
    },
    {
      "cells": [
        "Abi",
        "rami",
        "abi@gmail.com",
        "2345",
        "01",
        "11",
        "1994",
        "female"
      ],
      "line": 16,
      "id": "to-check-the-registration-page-of-facebook-application;facebook-application;;3"
    },
    {
      "cells": [
        "Java",
        "Selenium",
        "Java@gmail.com",
        "3456",
        "00",
        "00",
        "0000",
        "male"
      ],
      "line": 17,
      "id": "to-check-the-registration-page-of-facebook-application;facebook-application;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 15,
  "name": "Facebook Application",
  "description": "",
  "id": "to-check-the-registration-page-of-facebook-application;facebook-application;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@tag"
    },
    {
      "line": 4,
      "name": "@tag2"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "User enters the Login Page",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "User enters the \"siva\" , \"ganesh\" , \"sivag91@gmail.com\" , \"1234\"",
  "matchedColumns": [
    0,
    1,
    2,
    3
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "User Selects the \"08\" , \"09\" , \"1990\"",
  "matchedColumns": [
    4,
    5,
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "User Clicks the SignUp button",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "User Close the Browser",
  "keyword": "Then "
});
formatter.match({
  "location": "Stepdefinition.user_enters_the_Login_Page()"
});
