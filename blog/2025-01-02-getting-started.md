---
slug: getting-started-arxis
title: Getting Started with Arxis Core
authors: [nicolas]
tags: [tutorial, getting-started, rust]
---

# Getting Started with Arxis Core

Welcome to Arxis Core! This post will guide you through your first steps with the most advanced computing infrastructure built in Rust.

<!-- truncate -->

## What is Arxis Core?

Arxis is a comprehensive ecosystem of **120+ Rust crates** designed for:

- 🔒 **Cryptography & Security**
- 🌐 **Distributed Systems**
- 💾 **High-Performance Databases**
- 🤖 **AI & Machine Learning**
- 🎨 **Scientific Computing**

## Quick Setup

Install Rust (if you haven't already):

```bash
curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh
```

Create a new project:

```bash
cargo new my-arxis-app
cd my-arxis-app
```

Add Arxis to your `Cargo.toml`:

```toml
[dependencies]
avx-core = "0.1.0"
avx-crypto = "0.1.0"
avx-http = "0.1.0"
```

## Your First Arxis Application

Let's create a simple HTTP server with cryptographic signing:

```rust
use avx_http::{Server, Request, Response};
use avx_crypto::signature::Ed25519;

#[tokio::main]
async fn main() {
    // Generate signing keypair
    let keypair = Ed25519::generate_keypair();

    // Create HTTP server
    let server = Server::new("127.0.0.1:8080");

    server.route("/sign", move |req: Request| {
        let keypair = keypair.clone();
        async move {
            let message = req.body_bytes();
            let signature = keypair.sign(message);

            Response::ok()
                .header("X-Signature", signature.to_hex())
                .body("Signed!")
        }
    }).await;

    println!("Server running on http://localhost:8080");
    server.serve().await.unwrap();
}
```

Run it:

```bash
cargo run
```

## What's Next?

Now that you have Arxis running, explore:

1. **[Cryptography](https://docs.avila.inc/docs/category/crypto-security)** - Advanced crypto primitives
2. **[Distributed Systems](https://docs.avila.inc/docs/category/distributed)** - Raft consensus and more
3. **[Database](https://docs.avila.inc/docs/category/database)** - High-performance storage
4. **[AI & ML](https://docs.avila.inc/docs/category/ai-ml)** - Neural networks and LLMs

## Join the Community

- 🌐 [Website](https://avilaops.com)
- 💻 [GitHub](https://github.com/avilaops/arxis-core)
- 📧 [Email](mailto:nicolas@avila.inc)

Happy coding! 🏛️
