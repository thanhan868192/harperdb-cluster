# HarperDB Cluster Replication + Backend

This project contains:
- **backend/**: Node.js application (Express / API server).
- **harperdb-cluster/**: Local HarperDB cluster with 3 nodes (for replication demo).

---

## 🚀 Requirements
- [Docker](https://www.docker.com/)
- [Docker Compose](https://docs.docker.com/compose/)

---

## 📦 Setup & Run

### 1. Clone the repository
git clone <your-repo-url>
cd HARPERDB-CLUSTER-REPLICATION

### 2. Start the cluster + backend
backend: node index.js
docker run: docker compose up -d
## This will start:
- backend (Node.js, port 3000 by default)
- harperdb node1 (port 9925)
- harperdb node2 (port 9927)
- harperdb node3 (port 9929)

### 3. Check running containers:
- docker ps

## Stop the cluster:
- docker compose down
