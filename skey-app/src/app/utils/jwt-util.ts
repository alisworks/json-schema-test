import fs from 'fs';
import jwt from 'jsonwebtoken';

/**
 * This file provides common jwt-util functions.
 *
 * It reads the provided public/private keypair and uses that to
 * facilitate various common jwt utility functions.
 */

const cert_priv = fs.readFileSync(__dirname + '/../../keys/skey_RS256.key', 'utf8');
const cert_pub = fs.readFileSync(__dirname + '/../../keys/skey_RS256.key.pub', 'utf8');

const ALGORITHM_RS256 ='RS256';

/**
 * Accepts a payload and signs it with the Private key. The signed content is called a token
 * that looks something like :
 * 'eyJhbGciOiJSUzI1NiJ9.UGF5bG9hZCBQ.gcx3B9Mf1I7ZEI9Y6hZlts7-CschpECBNR6LAIzDvU'
 * The 'token' contains the actual content that can be read by the receiving party using public key.
 * @param payload - the payload content e.g. json
 * @return token - generated token
 */
export const signWithKey = (payload:string): string => {
    return jwt.sign(payload, cert_priv,{ algorithm: ALGORITHM_RS256 });
};

/**
 * Verifies the authenticity of a token and returns the actual payload content.
 * For more info - please read comments for #signWithKey function.
 * @param token - signed content
 * @return payload - generated token
 */
export const verifyWithKey = (token:string): string => {
    return jwt.verify(token, cert_pub,{ algorithm: ALGORITHM_RS256});
};

