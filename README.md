# webhookrelay-dtr-teams
A test script to parse JSON webhook resposne from DTR to Adaptive Card Format

How-to:

```
docker run -i --rm -v templatedefault:/parsewebhook/template.json -v webhookdatadefault:/parsewebhook/webhookdata.json sharmapr/parsewebhook
```
