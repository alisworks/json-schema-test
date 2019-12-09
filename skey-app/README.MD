## skey-app
skey-app is a json payload validator app that 
- Uses public/private keypair to check authenticity of the incoming payloads
- Uses JSON Schema validator to validate json payload contents

#### Getting Started


#### Unit Tests
The following command will run through all the available test files under `__tests__` dir and run the tests.
`$npm run test`

##### Generate key pair for testing (Don't add passphrase to keep things simple)
1. Generate PRIVATE KEY <br/>
`$ssh-keygen -t rsa -b 4096 -m PEM -f <yourfilename>.key`
 <br/> the public/private key pair should be generated at current dir
- Convert the public key to an openssl compatible pem format that can be used with jwt npm package<br/>
`$openssl rsa -in <yourfilename>.key -pubout -outform PEM -out <yourfilename>.key.pub`
<br/> The public




