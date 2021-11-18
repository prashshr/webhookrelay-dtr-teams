# webhookrelay-dtr-teams
A test script to parse JSON webhook resposne from DTR for a `tag_push` event, to an Adaptive Card Format understood my MS Teams.

How-to:

```
cd parsewebhook
docker run -i --rm -v $PWD/parsewebhook/template.json:/parsewebhook/template.json -v $PWD/parsewebhook/webhookdata.json:/parsewebhook/webhookdata.json sharmapr/parsewebhook
```
