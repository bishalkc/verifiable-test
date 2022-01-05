import {
  JsonWebSignature,
} from "@transmute/json-web-signature";
const documentLoader = require("./documentLoader.js");
import { verifiable } from "@transmute/vc.js";
const credential = {
  '@context': [
    'https://www.w3.org/2018/credentials/v1',
    'https://w3id.org/security/suites/jws-2020/v1'
  ],
  id: 'http://example.edu/credentials/3732',
  type: [ 'VerifiableCredential' ],
  issuer: { id: 'did:key:z6MkkV6JLrpasKiLJxHnvAhS7PhjjDTdkD7fP6erRBxaS7Qt' },
  issuanceDate: '2010-01-01T19:23:24Z',
  credentialSubject: { id: 'did:example:ebfeb1f712ebc6f1c276e12ec21' },
  proof: {
    type: 'JsonWebSignature2020',
    created: '2022-01-05T18:53:52Z',
    verificationMethod: 'did:key:z6MkkV6JLrpasKiLJxHnvAhS7PhjjDTdkD7fP6erRBxaS7Qt#z6MkkV6JLrpasKiLJxHnvAhS7PhjjDTdkD7fP6erRBxaS7Qt',
    proofPurpose: 'assertionMethod',
    jws: 'eyJhbGciOiJFZERTQSIsImI2NCI6ZmFsc2UsImNyaXQiOlsiYjY0Il19..2ROEzkr7bqI17iEpndYXYjHNin-B9hwzJIE5zfHVBxFXxgL-h5hPdD9DT5Alr40KmZzC5HG0-DDHzfeILvIeCw'
  }
}
async function main() {
  const result = await verifiable.credential.verify({
    credential,
    format: ["vc", "vc-jwt"],
    documentLoader,
    suite: [new JsonWebSignature()],
  });
  console.log(result)
  console.log(result.error)
}
main().catch(console.log)
