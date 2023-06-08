*** Settings ***
Library           OperatingSystem
Documentation  This is the test for the Login page

*** Variables ***

${APP-INPUT-USERNAME} //input[@title="username"]
${APP-INPUT-EMAIL} //input[@title="email"]
${APP-INPUT-CHECKBOX} //input[@type="checkbox"]
${APP-INPUT-LOGIN} //input[@value="Log In"]

*** Test Cases ***
TEST3
    Log     ${APP-INPUT-USERNAME}
    Log     ${APP-INPUT-EMAIL}
    Log     ${APP-INPUT-CHECKBOX}
    Log     ${APP-INPUT-LOGIN}
