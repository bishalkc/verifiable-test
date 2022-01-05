import crypto from 'crypto';
import * as ed25519 from '@transmute/did-key-ed25519';

async function main() {
const { didDocument, keys } = await ed25519.generate(
  {
    secureRandom: () => {
      return crypto.randomBytes(32);
    },
  },
  { accept: 'application/did+json' }
);

  console.log(JSON.stringify(didDocument))
  console.log(JSON.stringify(keys))
}

main().catch(console.log)
