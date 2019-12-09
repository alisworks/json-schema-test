import {addressSchema, personSchema} from "../schema/person-schema";
const Validator = require('jsonschema').Validator;

/**
 * Custom Json Validator class to validate incoming payloads
 * against predefined JSon Schemas using 'jsonschema' npm package.
 */
export class JsonSchemaValidator {
    jsonValidator:any;

    constructor() {
        this.jsonValidator = new Validator();
    }

    /**
     * Initialize/load available schemas to validatior
     */
    initSchemas(){
        this.jsonValidator.addSchema(addressSchema, '/Address');
        this.jsonValidator.addSchema(personSchema, '/Person');
    }

    /**
     * Validates Json payload using PersonSchema
     * @param payload
     * @return error if exists or the validated payload
     */
    async validatePersonSchema (payload){
        const v= this.jsonValidator;
        const result = v.validate(payload, personSchema);
        if (result.errors && result.errors.length>0){
            throw Error(result.errors);
        }

        return payload;
    }
}
