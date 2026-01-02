---
sidebar_position: 2
---

# Quick Start

Get up and running with Arxis Core in 5 minutes!

## Hello Arxis

Create a new project:

```bash
cargo new my-arxis-app
cd my-arxis-app
```

Add Arxis to `Cargo.toml`:

```toml
[dependencies]
avx-core = "0.1.0"
avx-std = "0.1.0"
```

Update `src/main.rs`:

```rust
use avx_core::prelude::*;

fn main() {
    println!("Welcome to Arxis! 🏛️");
}
```

Run:

```bash
cargo run
```

## Example: Cryptography

```rust
use avx_crypto::{hash::Sha256, signature::Ed25519};

fn main() {
    // Hash data
    let data = b"Hello, Arxis!";
    let hash = Sha256::hash(data);
    println!("SHA-256: {:?}", hash);

    // Generate keypair
    let keypair = Ed25519::generate_keypair();
    println!("Public key: {:?}", keypair.public());
}
```

## Example: HTTP Server

```rust
use avx_http::{Server, Request, Response, StatusCode};

#[tokio::main]
async fn main() {
    let server = Server::new("127.0.0.1:8080");

    server.route("/", |req: Request| async {
        Response::new(StatusCode::OK)
            .body("Hello from Arxis!")
    }).await;

    println!("Server running on http://localhost:8080");
    server.serve().await.unwrap();
}
```

## Example: Database

```rust
use avxdb::{Database, Query};

#[tokio::main]
async fn main() {
    // Open database
    let db = Database::open("my_database").await?;

    // Create table
    db.execute("CREATE TABLE users (id INT, name TEXT)").await?;

    // Insert data
    db.execute("INSERT INTO users VALUES (1, 'Alice')").await?;

    // Query data
    let results = db.query("SELECT * FROM users").await?;
    println!("{:?}", results);
}
```

## Example: Neural Network

```rust
use avx_nn::{NeuralNetwork, Layer, Activation};

fn main() {
    // Create a neural network
    let mut nn = NeuralNetwork::new();

    nn.add_layer(Layer::dense(784, 128, Activation::ReLU));
    nn.add_layer(Layer::dense(128, 10, Activation::Softmax));

    // Train on MNIST (example)
    // nn.train(train_data, epochs=10);

    println!("Neural network created!");
}
```

## Example: Distributed Consensus

```rust
use avx_raft::{RaftNode, Config};

#[tokio::main]
async fn main() {
    let config = Config::new()
        .node_id(1)
        .peers(vec!["127.0.0.1:5001", "127.0.0.1:5002"]);

    let node = RaftNode::new(config).await?;
    node.start().await?;

    println!("Raft node started!");
}
```

## Example: Tensor Operations

```rust
use avx_tensor::Tensor;

fn main() {
    // Create tensors
    let a = Tensor::from_slice(&[1.0, 2.0, 3.0], &[3]);
    let b = Tensor::from_slice(&[4.0, 5.0, 6.0], &[3]);

    // Operations
    let c = &a + &b;
    let dot = a.dot(&b);

    println!("Sum: {:?}", c);
    println!("Dot product: {}", dot);
}
```

## Common Patterns

### Error Handling

```rust
use avx_error::{Result, Error};

fn my_function() -> Result<String> {
    let data = read_file("data.txt")?;
    Ok(data)
}
```

### Async Operations

```rust
use avx_async::Runtime;

#[tokio::main]
async fn main() {
    let result = async_operation().await;
    println!("Result: {:?}", result);
}
```

### Memory Management

```rust
use avx_alloc::Allocator;

fn main() {
    let allocator = Allocator::new();
    let ptr = allocator.allocate(1024);
    // Use memory
    allocator.deallocate(ptr);
}
```

## Next Steps

- [Architecture Overview](../architecture/overview.md)
- [Package Reference](../packages/crypto/avx-crypto.md)
- [API Documentation](../api/core.md)
- [More Examples](./examples.md)

## Getting Help

- 📚 [Full Documentation](/)
- 💬 [GitHub Issues](https://github.com/avilaops/arxis-core/issues)
- 📧 [Email Support](mailto:nicolas@avila.inc)
