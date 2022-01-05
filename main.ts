import {
  JsonWebKey,
  JsonWebSignature,
  JsonWebKey2020,
} from "@transmute/json-web-signature";
import { verifiable } from "@transmute/vc.js";
import {documentLoader} from "./documentLoader";


async function main() {
  const key = {
        "id": "did:key:z6MkkV6JLrpasKiLJxHnvAhS7PhjjDTdkD7fP6erRBxaS7Qt#z6MkkV6JLrpasKiLJxHnvAhS7PhjjDTdkD7fP6erRBxaS7Qt",
        "type": "JsonWebKey2020",
        "controller": "did:key:z6MkkV6JLrpasKiLJxHnvAhS7PhjjDTdkD7fP6erRBxaS7Qt",
        "publicKeyJwk": {
            "kty": "OKP",
            "crv": "Ed25519",
            "x": "WZ5Dg6xV-JQwS0ERFUNQAbyMw8wBWMeX0U_uwh-ByBk"
        },
        "privateKeyJwk": {
            "kty": "OKP",
            "crv": "Ed25519",
            "x": "WZ5Dg6xV-JQwS0ERFUNQAbyMw8wBWMeX0U_uwh-ByBk",
            "d": "rHPnXN-FbBWugYOUAIL7w3xOcb-wpC_fqhdHMd2EEXg"
        }
    };

  const credential= {
    "@context": [
      "https://www.w3.org/2018/credentials/v1",
      "https://w3id.org/security/suites/jws-2020/v1"
    ],
    "id": "http://example.edu/credentials/3732",
    "type": [
      "VerifiableCredential"
    ],
    "issuer": {
      "id": "did:key:z6MkkV6JLrpasKiLJxHnvAhS7PhjjDTdkD7fP6erRBxaS7Qt"
    },
    "issuanceDate": "2010-01-01T19:23:24Z",
    "credentialSubject": {
      "id": "did:example:ebfeb1f712ebc6f1c276e12ec21"
    }
  };
  
  const suite  = new JsonWebSignature({
    key: await JsonWebKey.from(key as JsonWebKey2020),
  })
  const vc = await verifiable.credential.create({
    credential,
    format: ["vc"],
    documentLoader,
    suite
  });

  console.log(JSON.stringify(vc))

  const result = await verifiable.credential.verify({
    credential,
    format: ["vc", "vc-jwt"],
    documentLoader,
    suite: [new JsonWebSignature()],
  });
  console.log(result.error)
}
main().catch(console.log)