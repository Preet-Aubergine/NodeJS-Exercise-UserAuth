# NodeJS Exercise : User Authentication System

A simple Node.js application for user registration and login functionality using **Node**, **Express**, **MongoDB**, and **Mongoose**.

---

## Installation Steps

### 1. Clone the Repository
```bash
git clone git@github.com:Preet-Aubergine/UserAuth.git
cd UserAuth
```
---

### 2. Install dependencies
```bash
npm install
```
---

### 3. Set up .env file
```bash
PORT= <port_number>

MONGO_USER= <mongo_db_username>
MONGO_PASSWORD= <mongo_db_password>
MONGO_CLUSTER= <mongo_db_clusterURI>
MONGO_DB_NAME= <mongo_db_name>
```
---

### 4. Start the application
```bash
npm start
```
---

## API Endpoints

### Base Url
```bash
http://localhost:3000
```
### Authentication Routes

|     Method     |           Endpoint            |             Description               |                              Payload                           |
|----------------|-------------------------------|---------------------------------------|----------------------------------------------------------------|
|      POST      |         /auth/register        |          Register a new user          |       { "username": "user", "email": "email@example.com" }     |
|      POST      |          /auth/login          |          Login existing user          |       { "username": "user", "email": "email@example.com" }     |

---

## Authentication Routes Samples

![Screenshot from 2025-01-03 15-08-50](https://github.com/user-attachments/assets/ee3336db-4fe1-49e5-9400-66e5ca1bcaca)
![Screenshot from 2025-01-03 15-09-05](https://github.com/user-attachments/assets/9d63b13e-8660-46cf-826f-fab7af3f2cd7)
![Screenshot from 2025-01-03 15-09-14](https://github.com/user-attachments/assets/e6a0adae-4f61-4c94-9546-434fe9a3f6e0)
![Screenshot from 2025-01-03 15-09-23](https://github.com/user-attachments/assets/ae0d7373-8b75-499f-b175-001f14809c74)
![Screenshot from 2025-01-03 15-09-40](https://github.com/user-attachments/assets/309adaa9-6937-49d6-a0ce-b20a9fa25414)
![Screenshot from 2025-01-03 15-09-49](https://github.com/user-attachments/assets/9757c48e-6ad1-4a09-9bc6-87d4f34b03f9)
![Screenshot from 2025-01-03 15-09-55](https://github.com/user-attachments/assets/d9ed1b7b-0c49-482d-8a4d-899064264a12)
![Screenshot from 2025-01-03 15-10-04](https://github.com/user-attachments/assets/56cef731-7e71-4377-821b-af1ed579d7cc)





