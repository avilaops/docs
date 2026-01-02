---
sidebar_position: 3
---

# Examples

Comprehensive examples showcasing Arxis Core capabilities.

## Complete Examples Repository

Find all examples in the repository:

```bash
git clone https://github.com/avilaops/arxis-core.git
cd arxis-core/avx-examples
```

## Available Examples

### 🔒 Cryptography Examples

#### 1. Password Hashing
```rust
use avx_crypto::hash::{Argon2, Hash};

fn main() {
    let password = b"my_secure_password";
    let salt = b"random_salt_here";

    let hash = Argon2::hash(password, salt);
    println!("Hashed password: {:?}", hash);

    // Verify
    assert!(Argon2::verify(password, salt, &hash));
}
```

#### 2. Digital Signatures
```rust
use avx_signature::{Ed25519, Signature};

fn main() {
    let keypair = Ed25519::generate();
    let message = b"Important message";

    let signature = keypair.sign(message);
    assert!(keypair.verify(message, &signature));
}
```

#### 3. Zero-Knowledge Proofs
```rust
use avx_zkp::{Prover, Verifier, Statement};

fn main() {
    let secret = 42;
    let statement = Statement::new("I know the answer");

    let proof = Prover::prove(secret, &statement);
    assert!(Verifier::verify(&proof, &statement));
}
```

### 🌐 Network Examples

#### 1. HTTP Client
```rust
use avx_http::Client;

#[tokio::main]
async fn main() {
    let client = Client::new();
    let response = client
        .get("https://api.example.com/data")
        .send()
        .await?;

    println!("Status: {}", response.status());
    println!("Body: {}", response.text().await?);
}
```

#### 2. gRPC Service
```rust
use avx_grpc::{Server, Service, Request, Response};

struct MyService;

impl Service for MyService {
    async fn handle(&self, req: Request) -> Response {
        Response::new(format!("Received: {}", req.data))
    }
}

#[tokio::main]
async fn main() {
    Server::builder()
        .add_service(MyService)
        .serve("127.0.0.1:50051")
        .await?;
}
```

#### 3. WebSocket Chat
```rust
use avx_websocket::{Server, Message};

#[tokio::main]
async fn main() {
    let server = Server::new("127.0.0.1:8080");

    server.on_message(|msg: Message| async move {
        println!("Received: {}", msg.text());
        // Broadcast to all clients
        server.broadcast(msg).await;
    }).await;

    server.serve().await?;
}
```

### 🔄 Distributed Systems Examples

#### 1. Raft Consensus
```rust
use avx_raft::{RaftNode, Config, LogEntry};

#[tokio::main]
async fn main() {
    let config = Config::new()
        .node_id(1)
        .peers(vec!["node2:5000", "node3:5000"]);

    let mut node = RaftNode::new(config).await?;

    // Propose value
    let entry = LogEntry::new(b"some_data");
    node.propose(entry).await?;

    node.run().await?;
}
```

#### 2. Gossip Protocol
```rust
use avx_gossip::{Node, Message};

#[tokio::main]
async fn main() {
    let node = Node::new("127.0.0.1:7000")
        .peers(vec!["127.0.0.1:7001", "127.0.0.1:7002"]);

    node.broadcast(Message::new("Hello, cluster!")).await?;
    node.run().await?;
}
```

### 💾 Database Examples

#### 1. SQL Queries
```rust
use avxdb::{Database, Row};

#[tokio::main]
async fn main() {
    let db = Database::open("mydb").await?;

    // Create schema
    db.execute("
        CREATE TABLE products (
            id INT PRIMARY KEY,
            name TEXT,
            price DECIMAL
        )
    ").await?;

    // Insert data
    db.execute("
        INSERT INTO products VALUES
        (1, 'Laptop', 999.99),
        (2, 'Mouse', 29.99)
    ").await?;

    // Query with joins
    let rows = db.query("
        SELECT * FROM products
        WHERE price > 50
        ORDER BY price DESC
    ").await?;

    for row in rows {
        println!("{}: ${}", row.get::<String>("name"), row.get::<f64>("price"));
    }
}
```

#### 2. Transactions
```rust
use avxdb::{Database, Transaction};

#[tokio::main]
async fn main() {
    let db = Database::open("mydb").await?;
    let mut tx = db.begin_transaction().await?;

    tx.execute("UPDATE accounts SET balance = balance - 100 WHERE id = 1").await?;
    tx.execute("UPDATE accounts SET balance = balance + 100 WHERE id = 2").await?;

    tx.commit().await?;
}
```

### 🤖 AI & Machine Learning Examples

#### 1. Image Classification
```rust
use avx_vision::{Model, Image};

fn main() {
    let model = Model::load("resnet50.avx")?;
    let image = Image::load("cat.jpg")?;

    let predictions = model.predict(&image)?;
    println!("Top prediction: {}", predictions[0]);
}
```

#### 2. Text Generation (LLM)
```rust
use avx_llm::{LanguageModel, Tokenizer};

fn main() {
    let model = LanguageModel::load("gpt-arxis")?;
    let tokenizer = Tokenizer::new();

    let prompt = "Once upon a time";
    let tokens = tokenizer.encode(prompt);

    let output = model.generate(tokens, max_length=100)?;
    println!("{}", tokenizer.decode(output));
}
```

### 🎨 Math & Scientific Computing

#### 1. Matrix Operations
```rust
use avx_linalg::{Matrix, Vector};

fn main() {
    let a = Matrix::from_vec(vec![
        vec![1.0, 2.0],
        vec![3.0, 4.0],
    ]);

    let b = Matrix::from_vec(vec![
        vec![5.0, 6.0],
        vec![7.0, 8.0],
    ]);

    let c = &a * &b;
    let det = a.determinant();
    let inv = a.inverse()?;

    println!("Product:\n{}", c);
    println!("Determinant: {}", det);
}
```

#### 2. Statistical Analysis
```rust
use avx_stats::{Dataset, Stats};

fn main() {
    let data = vec![1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0, 9.0, 10.0];
    let dataset = Dataset::new(data);

    println!("Mean: {}", dataset.mean());
    println!("Median: {}", dataset.median());
    println!("Std Dev: {}", dataset.std_dev());
    println!("Variance: {}", dataset.variance());
}
```

### 🎮 GPU Computing Examples

#### 1. CUDA Kernel
```rust
use avx_cuda::{Device, Kernel, Buffer};

fn main() {
    let device = Device::default();

    let kernel = Kernel::from_source("
        __global__ void add(float* a, float* b, float* c, int n) {
            int i = blockIdx.x * blockDim.x + threadIdx.x;
            if (i < n) c[i] = a[i] + b[i];
        }
    ")?;

    let a = Buffer::from_slice(&device, &[1.0, 2.0, 3.0]);
    let b = Buffer::from_slice(&device, &[4.0, 5.0, 6.0]);
    let mut c = Buffer::zeros(&device, 3);

    kernel.launch((1, 3), &[&a, &b, &mut c, &3])?;

    println!("Result: {:?}", c.to_vec());
}
```

## Building and Running Examples

```bash
# Run specific example
cargo run --example crypto_signature

# Run with release optimizations
cargo run --release --example http_server

# List all examples
cargo run --example
```

## More Resources

- [GitHub Examples Directory](https://github.com/avilaops/arxis-core/tree/main/avx-examples)
- [API Reference](../api/core.md)
- [Architecture Guide](../architecture/overview.md)
