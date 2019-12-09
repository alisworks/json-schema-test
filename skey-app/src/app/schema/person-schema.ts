/**
 * Conforms with 'jsonschema' npm package
 * Contains Schema Definitions for Person, Address json
 */

// Address, to be embedded on Person
export const addressSchema = {
    "id": "/Address",
    "type": "object",
    "properties": {
        "lines": {
            "type": "array",
            "items": {"type": "string"}
        },
        "zip": {"type": "string"},
        "city": {"type": "string"},
        "country": {"type": "string"}
    },
    "required": ["country"]
};

// Person
export const personSchema = {
    "id": "/Person",
    "type": "object",
    "properties": {
        "name": {"type": "string"},
        "address": {"$ref": "/Address"},
        "age": {"type": "integer", "minimum": 1},
        "gender": {
            "type": "string",
            "enum": ["M", "F", "O"]
        },
        "contact": {
            "type": "string",
            "pattern": "^(\\([0-9]{3}\\))?[0-9]{3}-[0-9]{4}$"
        },
        "childrens": {
            "type": "array",
            "items": {"$ref": "/Person"}
        },
    },

};
