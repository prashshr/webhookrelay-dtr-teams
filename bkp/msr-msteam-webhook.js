// import * as ACData from "adaptivecards-templating";
// import * as AdaptiveCards from "adaptivecards";

import { createRequire } from 'module';
const require = createRequire(import.meta.url);

var ACData = require("adaptivecards-templating"); 
var AdaptiveCards = require("adaptivecards");

// Define a template payload
var templatePayload = {
    "type": "AdaptiveCard",
    "version": "1.0",
    "body": [
        {
            "type": "TextBlock",
            "text": "Hello ${name}!"
        }
    ]
};

'use strict';

const fs = require('fs');

let rawdata = fs.readFileSync('student.json');
let student = JSON.parse(rawdata);

 
// Create a Template instance from the template payload
// var template = new ACData.Template(templatePayload);
var template = new ACData.Template(student);
 
// Expand the template with your `$root` data object.
// This binds it to the data and produces the final Adaptive Card payload
var cardPayload = template.expand({
   $root: {
	       "push_data": {
		               "pushed_at": 1634288993,
		               "images": [],
		               "tag": "v1",
		               "pusher": "sharmapr"
		           },
	       "callback_url": "https://registry.hub.docker.com/u/sharmapr/httpbin/hook/2aig4df3fce0j4d40fc5g4ce1i4eadai5/",
	       "repository": {
		               "status": "Active",
		               "description": "",
		               "is_trusted": false,
		               "full_description": null,
		               "repo_url": "https://hub.docker.com/r/sharmapr/httpbin",
		               "owner": "sharmapr",
		               "is_official": false,
		               "is_private": false,
		               "name": "httpbin",
		               "namespace": "sharmapr",
		               "star_count": 0,
		               "comment_count": 0,
		               "date_created": 1620117991,
		               "repo_name": "sharmapr/httpbin"
		           }
   }

});
 
// OPTIONAL: Render the card (requires that the adaptivecards library be loaded)
var adaptiveCard = new AdaptiveCards.AdaptiveCard();
adaptiveCard.parse(cardPayload);
// document.getElementById('exampleDiv').appendChild(adaptiveCard.render());
console.log(cardPayload)
