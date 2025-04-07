# Dewai Setu Backend

The Dewai Setu Backend is the server-side application that powers the Dewai Setu app. It provides APIs for managing medicines, patient cases, and orders efficiently, ensuring smooth operations between doctors and pharmacists.

## 🚀 Overview

The backend handles the core functionalities of the Dewai Setu app, including:

- Managing medicines, orders, and patient cases
- Supporting CRUD operations for medicines and patient records
- Providing a centralized API layer for doctors and pharmacists

## 🌐 Related Repository

You can find the Dewai Setu Frontend repository here:
[Dewai Setu Frontend Repository](#) (Yet to come)

## 📦 Project Setup

### Prerequisites

To run this backend locally, make sure you have:

- Node.js installed
- MongoDB set up locally or on the cloud

### Installation

Clone the repository:

```sh
git clone https://github.com/Shivam-Dhyani/dewai-setu-backend
cd dewai-setu-backend
```

Install dependencies:

```sh
npm install
```

Set up the `.env` file with the following:

```env
PORT=5000
MONGO_URI=your-mongo-database-connection-string
```

Start the server:

```sh
npm start
```

The backend will be running on `http://localhost:5000/` by default.

## 🛠️ Built With

- **Framework**: Express.js
- **Database**: MongoDB with Mongoose
- **Environment Variables**: dotenv
- **CORS Handling**: CORS

## 🌟 API Endpoints

Below are the key API endpoints provided by the backend:

### Medicines Management:

- `POST /medicines` - Add a new medicine
- `GET /medicines` - Get the list of medicines
- `PUT /medicines/:id` - Update medicine details
- `DELETE /medicines/:id` - Delete a medicine

### Order Medicines:

- `POST /orders` - Place a new medicine order
- `GET /orders` - Retrieve all orders

### Patient Case Management:

- `POST /patients` - Add a new patient case
- `GET /patients` - Get the list of patient cases
- `PUT /patients/:id` - Update patient case details
- `DELETE /patients/:id` - Delete a patient case

## 🛡️ Development Tools

- **Hot Reloading**: Nodemon
- **Linting**: ESLint
- **TypeScript Support**: TypeScript & ts-node

## 🤝 Contribution

Contributions are welcome! To contribute:

1. Fork the repository.
2. Create a new branch for your feature:

   ```sh
   git checkout -b feature/F-<module-number>-<feature-number>-feature-name
   ```

3. Commit your changes:

   ```sh
   git commit -m "feat: F-<module-number>-<feature-number>-<commit-number-in-this-branch> Add new feature"
   ```

4. Push your branch:

   ```sh
   git push origin feature/F-<module-number>-<feature-number>-feature-name
   ```

5. Open a Pull Request.

## ❤️ Acknowledgments

Special thanks to everyone contributing to making Dewai Setu a robust and efficient platform.
