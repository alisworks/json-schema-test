import {signWithKey, verifyWithKey} from '../app/utils/jwt-util';

/**
 * TODO: There are many tests can be written including tampering testing, algorithm testing and so on
 */

// NOTE: For the time given, covering only the basic 'happy path' tests

describe('JWT should use private/public key-pair to check payload authenticity', function () {

    /**
     * Payload to be used for jwt-util methods
     * Important Note: Should the payload needs to be updated, please update the expected_token accordingly
     */
    const testPayload = 'Payload to test Sign and verify';

    /**
     * The corresponding signed token for the payload to check against during tests.
     * Important Note: Should the payload needs to be updated, please update the expected_token accordingly
     */
    const expected_token = 'eyJhbGciOiJSUzI1NiJ9.UGF5bG9hZCB0byB0ZXN0IFNpZ24gYW5kIHZlcmlmeQ.Tfkw1txe-y8DGsa-WR0Ort0GBP1a5dZXR2TNaiYWYW8flpnK4zxeQ1eFNGEMw4bgA6z4WBh7BlW38-oBCsaSjyQho3TNBTd0943SX7hqo7qNUVFMRYriEI0VIdXjxlpZwVCxvUZhRHqaDmTHYsdRtRj466vaDd0j20f8nkDFFsJeypQGGgMz-k' +
        'X-m8LM2nPFdzMggq_Nw90kYSg91JpSli4KQZuXCT_7-U9sqZK1AKPmF6SxzfwW0akAEKFCtcYiWQaY8hfVCpV8IxqTCd5-BQ0okWjAHoPVZj6XCq2235RI-bHz1a2URj3ht6xz7OSMg_2ZRBkXsUbGL9R6QfFp2EuS85rg9D8UcpkEg1TMixpGHNnqZTc48TOynSZSEj_9QT5wR_GvG77_WFz1ljSpz6Gdm6MW-3Av2sDvQEQUumO_h1IQyo_AyhHH6Fx' +
        'nJidPeBhMuhU-uYzXMtq6Rz1iVZRt5dirEU9iEZPzqCVFk4tfHGoe6T198qMPu0Syi3OHPS-HmmUrNghI0JYkHB98rhcMeKeqFybJDiZUHSpyjI3wdSM8M_lX6UrD431Qnc5QtzbPUNM2zNVy5FPsRK0oXbqnXhApRx3I6RKJHWm3KDASkTixigSgrHuoUEQ_Z0I6r5Wp904nZEfRWCDJ9TvpA4uvnVpi9tdrPjFqDug96fU';


    it('sign and verify should work', async function (done) {
        // Check Signing works
        const token = signWithKey(testPayload);
        expect(token).toBe(expected_token);

        // Check Verifying works
        const result = verifyWithKey(token);
        expect(result).toBe(testPayload);

        done();
    });


});
