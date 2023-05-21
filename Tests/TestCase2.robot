*** Settings ***
Library           OperatingSystem
Documentation  This is the test for the Sign-up page

*** Variables ***

${APP-INPUT-USERNAME} //input[@title="username"]
${APP-INPUT-EMAIL} //input[@title="email"]
${APP-INPUT-PASSWORD} //input[@title="password"]
${APP-INPUT-CONFIRM} //input[@title="confirm"]
${APP-INPUT-REGISTER} //input[@value="Register Now"]

*** Test Cases ***
TEST2
    Log     ${APP-INPUT-USERNAME}
    Log     ${APP-INPUT-EMAIL}
    Log     ${APP-INPUT-PASSWORD}
    Log     ${APP-INPUT-CONFIRM}
    Log     ${APP-INPUT-REGISTER}

