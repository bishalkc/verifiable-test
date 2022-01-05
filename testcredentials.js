module.exports = () => {
    const credential = {
        '@context': [
            'https://www.w3.org/2018/credentials/v1',
            'https://w3id.org/security/suites/jws-2020/v1'
        ],
        id: 'http://example.edu/credentials/3732',
        type: ['VerifiableCredential'],
        issuer: { id: 'did:key:z6MkokrsVo8DbGDsnMAjnoHhJotMbDZiHfvxM4j65d8prXUr' },
        issuanceDate: '2010-01-01T19:23:24Z',
        credentialSubject: { id: 'did:example:ebfeb1f712ebc6f1c276e12ec21' },
        proof: {
            type: 'JsonWebSignature2020',
            created: '2022-01-05T17:03:45Z',
            verificationMethod: 'did:key:z6MkokrsVo8DbGDsnMAjnoHhJotMbDZiHfvxM4j65d8prXUr#z6MkokrsVo8DbGDsnMAjnoHhJotMbDZiHfvxM4j65d8prXUr',
            proofPurpose: 'assertionMethod',
            jws: 'eyJhbGciOiJFZERTQSIsImI2NCI6ZmFsc2UsImNyaXQiOlsiYjY0Il19..RDdi3KOV7NHM57U3A-2HiLmzRMGpzdg1TCP2_Y-90twoHNtJnENvSo2Rn7kxXeGJHP1TCXPQlMCwj7ZLs7RjAg'
        }
    }
    return credential
}