const fs = require('fs');
const { Keypair } = require('@solana/web3.js');

// Base58 encoding function (minimal implementation)
function toBase58(bytes) {
    const alphabet = '123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz';
    let encoded = '';
    let num = BigInt('0');
    for (let i = 0; i < bytes.length; i++) {
        num = num * BigInt(256) + BigInt(bytes[i]);
    }
    while (num > 0) {
        const remainder = Number(num % BigInt(58));
        num = num / BigInt(58);
        encoded = alphabet[remainder] + encoded;
    }
    // Handle leading zeros
    for (let i = 0; i < bytes.length && bytes[i] === 0; i++) {
        encoded = '1' + encoded;
    }
    return encoded;
}

// Path to your keypair.json file (update this if needed)
const keypairPath = './wallets/123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz.json'; //input json here

try {
    // Read the JSON keypair file
    const keypairData = JSON.parse(fs.readFileSync(keypairPath, 'utf8'));

    // Convert the keypair array to a Uint8Array (full 64 bytes)
    const keypairBytes = Uint8Array.from(keypairData);

    // Create a Keypair object from the secret key
    const keypair = Keypair.fromSecretKey(keypairBytes);

    // Encode the full 64-byte secret key to base58
    const privateKeyBase58 = toBase58(keypair.secretKey);

    // Output the private key
    console.log('Private Key (base58):', privateKeyBase58);

    // Output the public key for verification
    console.log('Public Key (base58):', keypair.publicKey.toBase58());
} catch (error) {
    console.error('Error:', error.message);
}