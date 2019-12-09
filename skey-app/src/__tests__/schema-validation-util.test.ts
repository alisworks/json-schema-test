import {JsonSchemaValidator} from "../app/utils/schema-validation-util";

/**
 * Test cases to check the JsonSchemaValidator class works as expected
 */

describe('Check invalid Json payload are validated against predefined schemas', function () {
    const schemaValidator = new JsonSchemaValidator();

    beforeAll(() => {
        // Load and init defined schemas
        schemaValidator.initSchemas();
    });

    it('throws error on invalid payload', async function () {
        const testPayload = 'This is an invalid Json';
        try {
            await schemaValidator.validatePersonSchema(testPayload);
        } catch (e) {
            expect(e.message).toMatch('instance is not of a type(s) object');
        }
    });

    it('throws error on invalid empty payload', async function () {
        const testPayloadObj = {};
        try {
            await schemaValidator.validatePersonSchema(testPayloadObj);
        } catch (e) {
            expect(e.message).toMatch('instance is not of a type(s) object');
        }
    });

    it('check error with string instead of int at age', async function () {
        const testPayloadObj = {"name":"Test", "age":"unknown"};
        try {
            await schemaValidator.validatePersonSchema(testPayloadObj);
        } catch (e) {
            expect(e.message).toMatch('instance.age is not of a type(s) integer');
        }
    });

    it('check error on contact regex', async function () {
        const testPayloadObj = {"name":"Test", "contact":"ABC-896-CCC"};
        try {
            await schemaValidator.validatePersonSchema(testPayloadObj);
        } catch (e) {
            expect(e.message).toMatch('instance.contact does not match pattern \"^(\\\\([0-9]{3}\\\\))?[0-9]{3}-[0-9]{4}$\"');
        }
    });

});


describe('Verify valid Json payloads can be validated successfully', function () {
    const schemaValidator = new JsonSchemaValidator();

    beforeAll(() => {
        // Load and init defined schemas
        schemaValidator.initSchemas();
    });

    it('validate a minimal person schema', async function () {
        const testPayloadObj = {"name":"Test"};
        expect(await schemaValidator.validatePersonSchema(testPayloadObj))
            .toBe(testPayloadObj);
    });

    it('validate full person schema payload', async function () {
        const testPayloadObj = {
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
        };
        let result= await schemaValidator.validatePersonSchema(testPayloadObj);

        expect(await schemaValidator.validatePersonSchema(testPayloadObj))
            .toBe(testPayloadObj);
    });

});
