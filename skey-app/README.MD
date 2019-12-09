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

#### Manual Tests
Use the token below with curl or Postman
```
eyJhbGciOiJSUzI1NiJ9.eyAgICAgICAgICAgICJuYW1lIjogIlBlcnNvbiBBIiwgICAgICAgICAgICAiY29udGFjdCI6ICIoNDQ0KTU1NS0xMjEyIiwgICAgICAgICAgICAiYWRkcmVzcyI6IHsgICAgICAgICAgICAgICAgImxpbmVzIjogWyAgICAgICAgICAgICAgICAgICAgIlVuaXQjMTEiLCAgICAgICAgICAgICAgICAgICAgIjEyMyBEb24gbWlsbHMgUmQiICAgICAgICAgICAgICAgIF0sICAgICAgICAgICAgICAgICJ6aXAiOiAiQTFCMkMzIiwgICAgICAgICAgICAgICAgImNpdHkiOiAiVG9yb250byIsICAgICAgICAgICAgICAgICJjb3VudHJ5IjogIkNBIiAgICAgICAgICAgIH0sICAgICAgICAgICAgImNoaWxkcmVucyI6IFsgICAgICAgICAgICAgICAgeyAgICAgICAgICAgICAgICAgICAgIm5hbWUiOiAiQ2hpbGQgMSBvZiBQZXJzb24gQSIsICAgICAgICAgICAgICAgICAgICAiZ2VuZGVyIjogIk0iLCAgICAgICAgICAgICAgICAgICAgImFnZSI6IDExICAgICAgICAgICAgICAgIH0sICAgICAgICAgICAgICAgIHsgICAgICAgICAgICAgICAgICAgICJuYW1lIjogIkNoaWxkIDIgb2YgUGVyc29uIEEiLCAgICAgICAgICAgICAgICAgICAgImdlbmRlciI6ICJGIiwgICAgICAgICAgICAgICAgICAgICJhZ2UiOiAzMSwgICAgICAgICAgICAgICAgICAgICJhZGRyZXNzIjogeyAgICAgICAgICAgICAgICAgICAgICAgICJsaW5lcyI6IFsgICAgICAgICAgICAgICAgICAgICAgICAgICAgIjQ1NiBTb21ld2hlcmUgU3QiICAgICAgICAgICAgICAgICAgICAgICAgXSwgICAgICAgICAgICAgICAgICAgICAgICAiemlwIjogIks0TDdNOSIsICAgICAgICAgICAgICAgICAgICAgICAgImNpdHkiOiAiVW5rbm93biIsICAgICAgICAgICAgICAgICAgICAgICAgImNvdW50cnkiOiAiQ0EiICAgICAgICAgICAgICAgICAgICB9ICAgICAgICAgICAgICAgIH0gICAgICAgICAgICBdICAgICAgICB9.mFqPAtqKLR6h5XDd9YhN856ysQGDNaDAZXKDgIeHq3uEPRdp3GSTykPCDO4QkVz-UXCF6UHpgDU9QULk5Jt5DpRODRL-csQogjOvwgOnYwfYEzymz0dFP_nv4ePRnXw0DlbZW8Uk-NQL-_DTSmlgRqYjErLs6k8kcCvV6z230XYkvgqhrz1GcP8ZKQRuKL94FYoDx9tY_ph8ed98pod3kqFE8iBisC1SJWYMExVEvkTfwqV69kxkF_SyZmO5zSJ-10IfS78sbZLTsx4ekUuzjiJ0EN5pIh3pvHBt1v8cv3sI3B0iR4TG_sa6hc2CgwZ-LvoKzHGIjWwg5MPCzTGapxQvGMBYIsKCKt2dGGD443p0gdRavX1IyfuO4V6Y6lBr_LxMC9GfoVlHpJjXjXkBSdzluXDmnJJQzTdyWiis1xjbMl1dj_jK3KjQxLvSy55ETaaZ_BcgVH3wVfpYygFqt6VjKsQzmhYGZ6mbiRqylG5DFx-RZyCVAwsCg88o438XRoYZ_o1V_WQZvoYoYhO3-r-1MIT8UpdnH03M8JcTT4KwEcHFDgndWwACpslwMPNffIGaAkbeaEwjEl64dMhduMu8gKKN2NxjhAnAMyIB45m5BXxA3rAiFctHEvqBJ4B0La3XfhiyDapQ1OI9gDGy504wi3t6q6kqO-SWxAJNSZc
```

The above token corresponds to Json object: <br/>
```
{
	"name": "Person A",
	"contact": "(444)555-1212",
	"address": {
		"lines": [
"Unit#11",
			"123 Don mills Rd"
		],
		"zip": "A1B2C3",
		"city": "Toronto",
		"country": "CA"
	},
	"childrens": [
		{
			"name": "Child 1 of Person A",
			"gender": "M",
			"age": 11
		},
		{
			"name": "Child 2 of Person A",
			"gender": "F",
			"age": 31,
			"address": {
				"lines": [
					"456 Somewhere St"
				],
				"zip": "K4L7M9",
				"city": "Unknown",
				"country": "CA"
			}
		}
	]
}
```

