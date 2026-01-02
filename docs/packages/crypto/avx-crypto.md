---
sidebar_position: 1
---

# avx-crypto

Core cryptographic primitives and algorithms for the Arxis ecosystem.

## Overview

`avx-crypto` provides a comprehensive suite of cryptographic functions including:

- **Symmetric Encryption**: AES, ChaCha20
- **Asymmetric Encryption**: RSA, ECC
- **Key Exchange**: ECDH, X25519
- **Random Number Generation**: Cryptographically secure RNG

## Installation

```toml
[dependencies]
avx-crypto = "0.1.0"
```

## Features

### Symmetric Encryption

#### AES (Advanced Encryption Standard)

```rust
use avx_crypto::symmetric::{Aes256, Cipher};

fn main() {
    let key = Aes256::generate_key();
    let plaintext = b"Secret message";

    // Encrypt
    let ciphertext = Aes256::encrypt(&key, plaintext)?;

    // Decrypt
    let decrypted = Aes256::decrypt(&key, &ciphertext)?;
    assert_eq!(plaintext, &decrypted[..]);
}
```

#### ChaCha20

```rust
use avx_crypto::symmetric::ChaCha20;

fn main() {
    let key = ChaCha20::generate_key();
    let nonce = ChaCha20::generate_nonce();

    let plaintext = b"Fast encryption";
    let ciphertext = ChaCha20::encrypt(&key, &nonce, plaintext)?;

    let decrypted = ChaCha20::decrypt(&key, &nonce, &ciphertext)?;
    assert_eq!(plaintext, &decrypted[..]);
}
```

### Asymmetric Encryption

#### RSA

```rust
use avx_crypto::asymmetric::Rsa;

fn main() {
    // Generate keypair
    let keypair = Rsa::generate_keypair(2048)?;

    let message = b"Asymmetric encryption";

    // Encrypt with public key
    let ciphertext = keypair.public_key().encrypt(message)?;

    // Decrypt with private key
    let plaintext = keypair.private_key().decrypt(&ciphertext)?;
    assert_eq!(message, &plaintext[..]);
}
```

#### Elliptic Curve Cryptography

```rust
use avx_crypto::asymmetric::Ecc;

fn main() {
    let keypair = Ecc::generate_keypair()?;

    let message = b"ECC encryption";
    let ciphertext = keypair.encrypt(message)?;
    let plaintext = keypair.decrypt(&ciphertext)?;
}
```

### Key Exchange

#### Elliptic Curve Diffie-Hellman (ECDH)

```rust
use avx_crypto::key_exchange::Ecdh;

fn main() {
    // Alice generates her keypair
    let alice_keypair = Ecdh::generate_keypair();

    // Bob generates his keypair
    let bob_keypair = Ecdh::generate_keypair();

    // Both derive the same shared secret
    let alice_shared = alice_keypair.compute_shared_secret(bob_keypair.public_key());
    let bob_shared = bob_keypair.compute_shared_secret(alice_keypair.public_key());

    assert_eq!(alice_shared, bob_shared);
}
```

#### X25519

```rust
use avx_crypto::key_exchange::X25519;

fn main() {
    let alice_secret = X25519::generate_secret();
    let alice_public = X25519::public_from_secret(&alice_secret);

    let bob_secret = X25519::generate_secret();
    let bob_public = X25519::public_from_secret(&bob_secret);

    let alice_shared = X25519::compute_shared(&alice_secret, &bob_public);
    let bob_shared = X25519::compute_shared(&bob_secret, &alice_public);

    assert_eq!(alice_shared, bob_shared);
}
```

### Random Number Generation

#### Cryptographically Secure RNG

```rust
use avx_crypto::rand::CryptoRng;

fn main() {
    let mut rng = CryptoRng::new();

    // Generate random bytes
    let mut buffer = [0u8; 32];
    rng.fill_bytes(&mut buffer);

    // Generate random number
    let random_u64: u64 = rng.gen();

    println!("Random bytes: {:?}", buffer);
    println!("Random u64: {}", random_u64);
}
```

## API Reference

### Types

#### `Aes256`
Advanced Encryption Standard with 256-bit keys.

**Methods:**
- `generate_key() -> Key` - Generate a random 256-bit key
- `encrypt(key: &Key, plaintext: &[u8]) -> Result<Vec<u8>>`
- `decrypt(key: &Key, ciphertext: &[u8]) -> Result<Vec<u8>>`

#### `ChaCha20`
ChaCha20 stream cipher.

**Methods:**
- `generate_key() -> Key`
- `generate_nonce() -> Nonce`
- `encrypt(key: &Key, nonce: &Nonce, plaintext: &[u8]) -> Result<Vec<u8>>`
- `decrypt(key: &Key, nonce: &Nonce, ciphertext: &[u8]) -> Result<Vec<u8>>`

#### `Rsa`
RSA public-key cryptosystem.

**Methods:**
- `generate_keypair(bits: usize) -> Result<RsaKeypair>`
- `public_key(&self) -> &PublicKey`
- `private_key(&self) -> &PrivateKey`

#### `Ecdh`
Elliptic Curve Diffie-Hellman key exchange.

**Methods:**
- `generate_keypair() -> EcdhKeypair`
- `compute_shared_secret(&self, public: &PublicKey) -> SharedSecret`

#### `X25519`
X25519 key exchange using Curve25519.

**Methods:**
- `generate_secret() -> Secret`
- `public_from_secret(secret: &Secret) -> PublicKey`
- `compute_shared(secret: &Secret, public: &PublicKey) -> SharedSecret`

#### `CryptoRng`
Cryptographically secure random number generator.

**Methods:**
- `new() -> Self`
- `fill_bytes(&mut self, dest: &mut [u8])`
- `gen<T>(&mut self) -> T where T: Rand`

## Security Considerations

### Key Management
- Never hardcode keys in source code
- Use secure key storage mechanisms
- Rotate keys regularly
- Destroy keys securely when no longer needed

### Algorithm Selection
- Use AES-256 or ChaCha20 for symmetric encryption
- Use RSA-2048+ or ECC for asymmetric encryption
- Prefer authenticated encryption (AEAD) when available

### Side-Channel Attacks
All implementations use constant-time operations to prevent timing attacks.

### Post-Quantum Considerations
For post-quantum cryptography, see [avx-post-quantum](./avx-post-quantum.md).

## Performance

Benchmarks on AMD Ryzen 9 5950X:

| Algorithm | Operation | Throughput |
|-----------|-----------|------------|
| AES-256   | Encrypt   | 2.5 GB/s   |
| ChaCha20  | Encrypt   | 3.2 GB/s   |
| RSA-2048  | Sign      | 5000 ops/s |
| ECDH      | Key Exchange | 15000 ops/s |
| X25519    | Key Exchange | 50000 ops/s |

## Examples

See [Examples](../../getting-started/examples.md#cryptography-examples) for more usage examples.

## Related Packages

- [avx-hash](./avx-hash.md) - Cryptographic hash functions
- [avx-signature](./avx-signature.md) - Digital signatures
- [avx-aead](./avx-aead.md) - Authenticated encryption
- [avx-post-quantum](./avx-post-quantum.md) - Post-quantum cryptography

## References

- [NIST Cryptographic Standards](https://csrc.nist.gov/publications)
- [RFC 7539 - ChaCha20](https://tools.ietf.org/html/rfc7539)
- [RFC 7748 - X25519](https://tools.ietf.org/html/rfc7748)
