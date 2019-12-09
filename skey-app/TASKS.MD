#### Tasks
1. Create a JSON object that contains a complex object: an array of several objects, a nested object, and a couple of different primitives. Define a JSON schema against which this JSON can be validated, with one field require to match against a regex pattern.
2. Create a public-private keypair.
3. Select an appropriate standard and sign the JSON object.
4. Implement: an http endpoint that accepts POST requests, verifies the signature of the payload, and validates the payload content against the schema defined in step #1.
5. Test: Create an integration test that POSTs the signed payload from step #3 to the endpoint via a REST call, and also then confirms that the signature and the JSON schema validation were successful as well.
6. Documentation: create documentation that explains the above, keeping in mind that the audience could be of varying levels of technical expertise.

##### Bonus tasks:
- Implement additional tests. What else would you test and why?
- Dockerize the app.
- Live deployment to a cloud provider. It would be great if we can run through deployment steps ourselves end to end, otherwise you can walk us through them.
- Protect the endpoint with an SSL certificate (self-signed OK, even better if you can do a free one from LetsEncrypt or similar).
