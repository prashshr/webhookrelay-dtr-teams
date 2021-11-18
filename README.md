# webhookrelay-dtr-teams
A test script to parse JSON webhook resposne from DTR to Adaptive Card Format

How-to:

```
cd parsewebhook
docker run -i --rm -v $PWD/parsewebhook/template.json:/parsewebhook/template.json -v $PWD/parsewebhook/webhookdata.json:/parsewebhook/webhookdata.json sharmapr/parsewebhook
```
