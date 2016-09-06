var WebPageTest = require('webpagetest');
var _ = require("lodash");
var schedule = require('node-schedule');
var config = require('./config/testConfig.js');
var fs = require("fs");

var wpt = new WebPageTest(config.server);
var rule = new schedule.RecurrenceRule();
rule.minute = config.minute;

function timeStamp() {

    var now = new Date();
    var date = [ now.getMonth() + 1, now.getDate(), now.getFullYear() ];
    var time = [ now.getHours(), now.getMinutes(), now.getSeconds() ];
    return date.join("_") + "_" + time.join("_") ;
}

var testConfig= config.test;
var scheduleJobId = schedule.scheduleJob(rule, function(){
    var timeNow='./log/'+timeStamp()+'output.log';
    fs.open(timeNow,'a',function(err,fd){
        for (var i=0;i<testConfig.length;i++) {  
            var testOption = _.extend({},config.options,testConfig[i].options);
            var testUrl = testConfig[i].url;
            /***execute test***/
            wpt.runTest(testUrl, testOption, function(err, data) {
                console.log(err || data);
                fs.appendFile(timeNow,JSON.stringify(err || data,null,4),  function(err) {
                    if (err) {
                        return console.error(err);
                    }
                });
            });
        }
    });
});