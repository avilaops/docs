---
sidebar_position: 1
---

# Installation

## Prerequisites

Before installing Arxis Core, ensure you have:

- **Rust**: 1.70 or later
- **Cargo**: Latest version
- **Git**: For cloning repositories

## Installing Rust

If you don't have Rust installed:

```bash
curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh
```

Or on Windows, download from [rustup.rs](https://rustup.rs/).

## Adding Arxis to Your Project

### Option 1: Add to Cargo.toml

```toml
[dependencies]
avx-core = "0.1.0"
avx-std = "0.1.0"
avx-crypto = "0.1.0"
```

### Option 2: Using Cargo Command

```bash
cargo add avx-core
cargo add avx-std
cargo add avx-crypto
```

### Option 3: Clone the Repository

```bash
git clone https://github.com/avilaops/arxis-core.git
cd arxis-core
cargo build --release
```

## Verifying Installation

Create a simple test:

```rust
// src/main.rs
use avx_core::prelude::*;

fn main() {
    println!("Arxis Core installed successfully! 🏛️");
}
```

Run it:

```bash
cargo run
```

## Package Selection

Arxis is modular - choose only what you need:

### Core Foundation
```toml
avx-nucleus = "0.1.0"      # Core primitives
avx-primitives = "0.1.0"   # Basic types
avx-alloc = "0.1.0"        # Memory allocation
avx-std = "0.1.0"          # Standard library
```

### Cryptography
```toml
avx-crypto = "0.1.0"       # Crypto primitives
avx-hash = "0.1.0"         # Hashing algorithms
avx-signature = "0.1.0"    # Digital signatures
```

### Networking
```toml
avx-http = "0.1.0"         # HTTP client/server
avx-grpc = "0.1.0"         # gRPC framework
avx-quic = "0.1.0"         # QUIC protocol
```

### Database
```toml
avxdb = "0.1.0"            # Database engine
avx-sql = "0.1.0"          # SQL support
```

### AI & ML
```toml
avx-nn = "0.1.0"           # Neural networks
avx-tensor = "0.1.0"       # Tensor operations
```

## Build Configuration

### Development Build

```bash
cargo build
```

### Release Build (Optimized)

```bash
cargo build --release
```

### With Specific Features

```bash
cargo build --features "crypto network database"
```

## Troubleshooting

### Missing Dependencies

If you encounter missing system dependencies:

**Ubuntu/Debian:**
```bash
sudo apt-get install build-essential pkg-config libssl-dev
```

**macOS:**
```bash
brew install openssl pkg-config
```

**Windows:**
Install Visual Studio Build Tools or MinGW.

### Compilation Errors

Ensure you're using Rust 1.70+:
```bash
rustc --version
rustup update
```

## Next Steps

- [Quick Start Guide](./quick-start.md)
- [Architecture Overview](../architecture/overview.md)
- [Examples](./examples.md)
