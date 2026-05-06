#  Dockerized Node.js + MongoDB App

This project is a simple Node.js backend running inside Docker, connected to a MongoDB container using Docker Compose.

---

#  Tech Stack

* Node.js (Express)
* MongoDB
* Docker & Docker Compose

---

# Prerequisites

Make sure the following are installed on your system:

* Docker Desktop (with WSL enabled if on Windows)
* Git

👉 You do **NOT** need to install:

* Node.js
* MongoDB

---

#  Project Structure

```
docker-node-app/
│
├── Dockerfile
├── docker-compose.yml
├── package.json
├── .env
├── src/
│   ├── models/
│   ├── routes/
│   ├── controllers/
│   └── index.js
└── README.md
```

---

#  Environment Setup

Create a `.env` file in the root directory:

```
MONGO_URI=mongodb://mongo:27017/testdb
```

---

#  How to Run the Project

## 1. Clone the repository

```
git clone <your-repo-url>
cd docker-node-app
```

---

## 2. Start the application

```
docker compose up --build
```

👉 This will:

* Build the Node.js app
* Pull MongoDB image
* Start both containers
* Connect Node → Mongo automatically

---

## 3. Access the app

Open in browser:

```
http://localhost:3000
```

---

#  API Endpoints

## Create Data

```
POST /test
```

## Get Data

```
GET /test
```

## Example:

```
http://localhost:3000/test
```

---

#  MongoDB Access

## Option 1: From terminal

```
docker exec -it mongo_db mongosh
```

Then:

```
use testdb
show collections
db.tests.find().pretty()
```

---

## Option 2: Using GUI (recommended)

Connect using:

```
mongodb://localhost:27017
```
# docker exec -it mongo_db mongosh 
---

# 🔄 Development Workflow

* Open project in VS Code using WSL:

  ```
  code .
  ```
* Edit files
* Save changes

👉 App auto-restarts using nodemon

---

#  How It Works

```
WSL / Local Files
        ↓
Docker Volume Mount
        ↓
Node Container (runs app)
        ↓
Mongo Container (stores data)
```

---

#  Stop the Project

```
docker compose down
```

---

#  Remove Everything (including DB)

```
docker compose down -v
```

---

#  Common Issues

## Port already in use

Change ports in `docker-compose.yml`:

```
"3001:3000"
```

---

## Environment variable not working

Make sure:

* `.env` exists
* `env_file` is defined inside service

---

## Mongo not connecting

Check connection string:

```
mongodb://mongo:27017/testdb
```

 Do NOT use `localhost` inside Docker

---

#  Notes

* No need to install Node or Mongo locally
* Everything runs inside containers
* Same setup works across all machines

---

#  Commands Summary

```
docker compose up --build   # Start project
docker compose down         # Stop project
docker compose down -v      # Remove DB data
```

---

# Contribution

Feel free to fork and improve the project.

---
