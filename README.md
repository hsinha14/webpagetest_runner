# WebPageTest Runner

WebPageTest Runner automates the webpagetests to run on multiple URLs at specific interval.

## Dependencies
- WebPageTest API Wrapper
To automate the tests, WebPageTest API Wrapper for NodeJS has been used which is a NPM package that wraps WebPageTest API for NodeJS.
It is installed globally:
npm install webpagetest -g

- Node Schedule
To schedule the WPT automation, we have used Node Schedule:

Node Schedule is a flexible job scheduler for Node.js. It allows us to schedule jobs (arbitrary functions) for execution at specific dates, with optional recurrence rules. 

Installation:
npm install

## Pre-requisites
- The server for webpagetest for testing of privated instances should be up and running. 

- Tester should be up and running which is the location to test from. This project by default uses Local-WPTDriver:Chrome as its location.

## Configuration
To configure automation 

1. Git clone the repository.
1. Go to /webpagetest_runner/config.
1. Inside config folder, open the testConfig.js file
1. server : String, if specified, overrides the WebPageTest server
1. options : 
 - location -> String, location to test from
 -	runs -> Number, number of test runs 
1. test : array which contains the list of urls to run and options if any to override the existing default options.
1. minute: specifies the minute of each hour the scheduling has been to set to recurrancing.

## Viewing result

- To view the test results, visit 
WebPageTest_server_url/testlog.php?days=1&filter=&all=on
For example, http://localhost:8888/testlog.php?days=1&filter=&all=on

and clicking on an url will bring you to the results for that test

- Log files:
Output of each test run in every hour is logged in a log file with timestamp inside log folder
The link to the URL and CSV file of the generated report can be found in data object.


