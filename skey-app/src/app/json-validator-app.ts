import express from 'express';
import {Request, Response} from "express";
import logger from 'morgan';
import cors from 'cors';
import helmet from 'helmet';
import {JsonSchemaValidator} from "./utils/schema-validation-util";
import {verifyWithKey} from "./utils/jwt-util";

/**
 * Runs an nodejs-express application and exposes a REST endpoint 'applicationhost:port/checkValidity'
 *
 */


const appMain: boolean = (require.main === module);
const APP_PORT = 3500;  // Running port for this app


export class JSONApp {
    app: express.Express;
    router: express.Router;
    jsonValidator:JsonSchemaValidator;
    constructor() {
        this.app = express();
        this.router = express.Router();
        this.jsonValidator = new JsonSchemaValidator();
        this.jsonValidator.initSchemas();
    }
    runService() {
        const app =this.app;
        const router = this.router;

        app.use(helmet());
        app.use(logger('dev'));
        app.use(express.text());
        app.use(express.urlencoded({ extended: true }));

        app.use(cors());
        app.use(router);
        this.registerRoutes();

        app.listen(APP_PORT, () => {
            console.log (`Running JSONApp on port : ${APP_PORT}`);
        }).on('error', (err: any) => {
            process.exit(1);
        });
    }
    protected registerRoutes() {
        const router = this.router;

        /**
         * REST endpoint that accepts signed token as plaintext
         */
        router.post('/checkValidity', this.checkValidity.bind(this));
    }

    async checkValidity(req:Request, res:Response){
        // Expect signed json content(token) in the payload
        const tokenPayload =req.body;
        console.log(tokenPayload);

        let verifiedJsonPayload=null;

        try {
            // Try & verify token and unwrap to json object
            verifiedJsonPayload=verifyWithKey(tokenPayload);
            if (!verifiedJsonPayload){
                return res.status(400)
                    .json({
                        status: 'Error',
                        data: `Couldn't verify and/or unwrap the signed token`
                    });
            }
        }catch (e) {
            console.log(e);
            return res.status(401).json({status: 'Error', data: e.message});
        }

        // At this point the content is verified by keypair
        // Validate the json object with schema
        const v= this.jsonValidator;
        return await v.validatePersonSchema(verifiedJsonPayload)
            .then((result)=>{
                res.status(200).json({status: 'OK'});
            })
            .catch((e)=>{
                console.log(e);
                res.status(400).json({status: 'Error', data: e.message});
            });
    }

}

/**
 * Main method that runs the express app when this file is executed
 */
if (appMain) {
    new JSONApp().runService();
}

module.exports = { JSONApp };
