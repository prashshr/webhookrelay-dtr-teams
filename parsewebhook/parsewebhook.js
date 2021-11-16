import { createRequire } from 'module';
const require = createRequire(import.meta.url);

'use strict';

const fs = require('fs');

// Import modules
var ACData = require("adaptivecards-templating");
var AdaptiveCards = require("adaptivecards");

// Get adaptive card template
let template_rawdata = fs.readFileSync('template.json');
let templatePayload = JSON.parse(template_rawdata);

// Get webhook json payload from file
let webhook_rawdata = fs.readFileSync('webhookdata.json');
let webhookdata = JSON.parse(webhook_rawdata);

// Create a Template instance from the template payload
// var template = new ACData.Template(templatePayload);
var template = new ACData.Template(templatePayload);

var cardPayload = template.expand({
        $root: webhookdata
});


// OPTIONAL: Render the card (requires that the adaptivecards library be loaded)
var adaptiveCard = new AdaptiveCards.AdaptiveCard();
adaptiveCard.parse(cardPayload);
// document.getElementById('exampleDiv').appendChild(adaptiveCard.render());
console.log(cardPayload)
