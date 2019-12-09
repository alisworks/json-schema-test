## skey-app
skey-app is a json payload validator app that 
- Uses public/private keypair to check authenticity of the incoming payloads
- Uses JSON Schema validator to validate json payload contents

#### Getting Started
Typescript is the main language that has been used along with other npm packages.

##### Commands   
Run application <br/>
`$npm run start`

Run application in dev mode <br/>
`$npm run dev:live`

Compile typescript code to js files for deployment <br/>
`$npm run build`
<br/>
- The above command will transpile the code and generate js files under the <root>/dist folder.
- Please note that the RSA key pairs are not copied and should be regenerated for different environments - such as staging/production.  


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




