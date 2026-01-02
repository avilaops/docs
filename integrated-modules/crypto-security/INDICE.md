# 📚 Índice de Documentação AVX Crypto Security

**Navegação rápida para toda a documentação**

---

## 🏠 Principal

- [Página Inicial](index.html)
- [README Principal](../README.md)
- [Relatório Completo](RELATORIO.md)
- [Guia de Deploy](DEPLOY.md)

---

## 🔐 Módulos Core

### [avx-crypto](avx-crypto/index.html)
**Biblioteca criptográfica principal**
- ECDSA (secp256k1, secp256r1)
- Ed25519 signatures
- BigInt operations (U256, U512, U1024, U2048, U4096)
- Curvas elípticas

### [avx-aead](avx-aead/index.html)
**Cifras AEAD autenticadas**
- ChaCha20-Poly1305
- AES-256-GCM
- AES-128-GCM
- Authenticated encryption with associated data

### [avx-hash](avx-hash/index.html)
**Funções hash criptográficas**
- BLAKE3 (fastest)
- SHA-256
- SHA-512
- xxHash64 (non-cryptographic)

### [avx-mac](avx-mac/index.html)
**Códigos de autenticação de mensagens**
- HMAC-SHA256
- HMAC-SHA512
- CMAC-AES
- Poly1305

---

## 🔑 Gerenciamento de Chaves

### [avx-kdf](avx-kdf/index.html)
**Derivação de chaves**
- Argon2id (password hashing)
- PBKDF2-HMAC-SHA256
- HKDF-SHA256
- scrypt

### [avx-signature](avx-signature/index.html)
**Assinaturas digitais**
- ECDSA (Bitcoin, Ethereum)
- EdDSA (Ed25519)
- RSA-PSS
- Schnorr signatures

### [avx-pki](avx-pki/index.html)
**Infraestrutura de chaves públicas**
- Certificados X.509
- Certificate Authority (CA)
- Certificate chains
- CRL (Certificate Revocation Lists)

### [avx-secrets](avx-secrets/index.html)
**Gerenciamento de segredos**
- Secret storage
- Key rotation
- Versioning
- Access control

---

## ⚛️ Segurança Avançada

### [avx-post-quantum](avx-post-quantum/index.html)
**Criptografia pós-quântica (NIST PQC)**
- Kyber (KEM)
- Dilithium (signatures)
- SPHINCS+ (stateless signatures)
- Hybrid schemes

### [avx-quantum](avx-quantum/index.html)
**Primitivas quânticas**
- QKD (Quantum Key Distribution)
- Quantum random number generation
- Quantum simulation
- Lattice-based cryptography

### [avx-zkp](avx-zkp/index.html)
**Zero-knowledge proofs**
- ZK-SNARKs (Groth16)
- ZK-STARKs
- Bulletproofs
- Range proofs

### [avx-threshold](avx-threshold/index.html)
**Criptografia threshold**
- Threshold signatures (TSS)
- Shamir's Secret Sharing
- Distributed key generation
- Multi-party signing

---

## 🕶️ Privacidade & Anonimato

### [avx-stealth](avx-stealth/index.html)
**Endereços stealth**
- Stealth addresses
- Ring signatures
- Confidential transactions
- Privacy protocols

### [avx-onion-routing](avx-onion-routing/index.html)
**Roteamento onion**
- Onion routing
- Circuit building
- Mixnets
- Anonymous communication

### [avx-mpc](avx-mpc/index.html)
**Computação multi-party segura**
- Secure Multi-Party Computation
- Secret sharing
- Garbled circuits
- Oblivious transfer

---

## 📖 Documentação Adicional

### Guias de Referência
- [CONTRIBUTING.md](../CONTRIBUTING.md) - Como contribuir
- [COPYRIGHT.md](../COPYRIGHT.md) - Informações de copyright
- [LICENSE-PROPRIETARY.md](../LICENSE-PROPRIETARY.md) - Licença proprietária
- [DEPENDENCY_HIERARCHY.md](../DEPENDENCY_HIERARCHY.md) - Hierarquia de dependências

### Assets
- [Logo SVG](assets/images/avx-logo.svg)
- [CSS Principal](assets/css/main.css)
- [CSS Animações](assets/css/animations.css)
- [JavaScript i18n](assets/js/i18n.js)
- [JavaScript Theme](assets/js/theme.js)
- [JavaScript Animations](assets/js/animations.js)
- [JavaScript Main](assets/js/main.js)

---

## 🌍 Idiomas Disponíveis

Toda a documentação está disponível em:

1. 🇧🇷 Português (pt-BR)
2. 🇷🇺 Русский (ru)
3. 🇯🇵 日本語 (ja)
4. 🇹🇼 繁體中文 (zh-TW)
5. 🇵🇰 اردو (ur)
6. 🇸🇦 العربية (ar)
7. 🇩🇪 Deutsch (de)
8. 🇨🇭 Schweizerdeutsch (de-CH)
9. 🇱🇻 Latviešu (lv)
10. 🇺🇿 Oʻzbekcha (uz)
11. 🇪🇸 Español (es)

Use o seletor de idiomas no canto superior direito de qualquer página.

---

## 🎨 Recursos Visuais

### Temas
- **Light**: Laranja #FF8C00, Amarelo #FFD700, Branco #FAFAFA
- **Dark**: Laranja #FF8C00, Amarelo #FFD700, Cinza #1C1C1E

### Componentes
- Navbar responsiva
- Cards de módulos animados
- Hero sections
- Tabelas de tipos
- Code blocks com syntax highlighting
- Performance charts
- Casos de uso interativos

---

## 🚀 Como Usar

### Localmente
```powershell
cd docs
.\serve-docs.ps1
# Acesse http://localhost:8000
```

### Deploy
Consulte [DEPLOY.md](DEPLOY.md) para instruções completas.

---

## 📊 Estrutura de Cada Página

Todas as páginas de módulos seguem esta estrutura:

1. **Hero** - Título e descrição
2. **Overview** - Visão geral técnica
3. **Types** - Structs, enums, traits disponíveis
4. **Examples** - Código Rust prático
5. **API Reference** - Documentação detalhada
6. **Performance** - Benchmarks e métricas
7. **Use Cases** - Aplicações práticas
8. **License** - Termos de uso

---

## 🔍 Busca Rápida

### Por Categoria

**Criptografia Simétrica:**
- [avx-aead](avx-aead/index.html) - Cifras autenticadas

**Criptografia Assimétrica:**
- [avx-crypto](avx-crypto/index.html) - Curvas elípticas
- [avx-signature](avx-signature/index.html) - Assinaturas digitais

**Hash:**
- [avx-hash](avx-hash/index.html) - Funções hash
- [avx-mac](avx-mac/index.html) - MACs

**Privacidade:**
- [avx-zkp](avx-zkp/index.html) - Zero-knowledge
- [avx-stealth](avx-stealth/index.html) - Stealth addresses
- [avx-onion-routing](avx-onion-routing/index.html) - Onion routing

**Pós-Quântico:**
- [avx-post-quantum](avx-post-quantum/index.html) - NIST PQC
- [avx-quantum](avx-quantum/index.html) - Primitivas quânticas

**Distribuído:**
- [avx-threshold](avx-threshold/index.html) - Threshold crypto
- [avx-mpc](avx-mpc/index.html) - MPC

---

## 📞 Contato & Suporte

- **Email**: nicolas@avila.inc
- **Website**: https://avila.inc
- **Documentação**: https://docs.avila.inc
- **Suporte**: support@avila.inc
- **Segurança**: security@avila.inc

---

## 📄 Licença

Copyright © 2025 Nícolas Ávila - Todos os Direitos Reservados

Este software é proprietário. Para licenciamento comercial:
- 📧 nicolas@avila.inc
- 🌐 https://avila.inc

---

**Desenvolvido com tecnologia proprietária AVX**

© 2025 Avila Inc. Todos os direitos reservados.
