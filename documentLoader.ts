import { resolvers } from "./resolver";

export const documentLoader = async (uri: string) => {
  if (uri === "https://www.w3.org/ns/did/v1") {
      const doc = require("./contexts/did-v1.json")
    return {
      documentUrl: uri,
      document: doc,
    };
  }
    if (uri === "https://www.w3.org/2018/credentials/v1") {
    const doc = require("./contexts/cred-v1.json")
    return {
      documentUrl: uri,
      document: doc,
    };
  }

  if (uri === "https://w3id.org/security/v2") {

    return {
      documentUrl: uri,
      document: require("./contexts/sec-v2.json"),
    };
  }

  if (uri === "https://w3id.org/security/v1") {
    return {
      documentUrl: uri,
      document: require("./contexts/sec-v1.json"),
    };
  }

  if (uri === 'https://identity.foundation/EcdsaSecp256k1RecoverySignature2020/lds-ecdsa-secp256k1-recovery2020-0.0.jsonld') {

    return {
      documentUrl: uri,
      document: require('./contexts/lds-ecdsa-secp256k1-recovery2020.json')
    }
  }
  if (uri === 'https://w3id.org/security/suites/ed25519-2020/v1') {
      return {
        documentUrl: uri, 
        document: require('./contexts/secp256k1-2019-v1.json')
      }
  }
    if (uri === 'https://w3id.org/security/suites/jws-2020/v1') {
      return {
        documentUrl: uri, 
        document: require('./contexts/lds-jws2020.json')
      }
    }

    if (uri === "https://www.w3.org/2018/credentials/examples/v1") {
        return {
            documentUrl: uri,
            document: require('./contexts/examplecred.json')
        }
    }
    if (uri === "https://www.w3.org/ns/odrl.jsonld") {
        return {
            documentUrl: uri,
            document: require('./contexts/odrl.json')
        }
    }
  
  if (uri.startsWith("did:key")) {
    console.log(uri)
    const { didDocument }: any = await resolvers.ed25519(uri);
    console.log('did')
    console.log(didDocument)
        const doc = require("./contexts/did.json")
        return {
            documentUrl: uri,
            document: doc
        }
      }
  if (uri === "https://w3id.org/security/suites/x25519-2020/v1") {
            const doc = require("./contexts/x25519-key-agreement.json")
        return {
            documentUrl: uri,
            document: doc
        }
  }
  if (uri === "https://w3id.org/security/suites/ed25519-2018/v1") {
    const doc = require("./contexts/ed25519-2018.json")
        return {
            documentUrl: uri,
            document: doc
        }
  }
  if (uri === "https://w3id.org/security/suites/x25519-2019/v1") {
    console.log(uri)
    const doc = require("./contexts/ed25519-2019.json")
    console.log('doc')
    console.log(doc)
        return {
            documentUrl: uri,
            document: doc
        }
  }  
  console.log(uri);
  throw new Error("unsupported context");
};
