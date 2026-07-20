# 📱 MyTrash_App

**MyTrash_App** is a lightweight mobile marketplace and local waste-exchange platform designed to connect individuals with scrap vendors and other users interested in buying or selling recyclable materials.

Built using **React Native with Expo** for the mobile application and **Node.js with Express** for the backend, the project demonstrates full-stack mobile application development with authentication, marketplace functionality, real-time communication, order management, and file uploads.

---

## 🚀 Tech Stack

### Frontend — `mobile/`

* React Native
* Expo
* JavaScript
* Cross-platform mobile development
* REST API integration

### Backend — `server/`

* Node.js
* Express.js
* MongoDB
* Firebase Admin SDK
* Socket.IO
* REST APIs
* File upload support

---

## ✨ Features

* 🔑 **User Authentication** — Secure login and account creation
* 🛒 **Scrap Marketplace** — Browse and list recyclable materials and scrap items
* 💰 **Buy & Sell** — Connect buyers and sellers through the platform
* 💬 **Real-Time Chat** — Communication between buyers and sellers using Socket.IO
* 📦 **Order Management** — Manage and track marketplace transactions
* 🖼️ **Product Images** — Upload and display images for product listings
* 👤 **User Profiles** — Manage personal account and profile information
* 📱 **Cross-Platform Support** — Built with Expo for Android, iOS, and Web compatibility

---

## 📂 Project Structure

```text
MyTrash_App/
│
├── mobile/                     # React Native (Expo) client
│   ├── App.js
│   ├── HomePage.js
│   ├── LoginPage.js
│   ├── CreateAccount.js
│   ├── ProductInfo.js
│   ├── ChatPage.js
│   ├── MyAccount.js
│   ├── BuyPage.js
│   ├── SellPage.js
│   └── ...
│
└── server/                     # Express backend
    ├── server.js
    ├── routes/
    ├── models/
    ├── uploads/
    └── ...
```

---

## ⚡ Getting Started

### Prerequisites

Before running the project, ensure you have the following installed:

* Node.js
* npm
* Expo CLI / Expo Go
* MongoDB or MongoDB Atlas
* Firebase project configuration

---

### Backend Setup

Navigate to the backend directory:

```bash
cd server
```

Install dependencies:

```bash
npm install
```

Create a `.env` file and configure the required environment variables.

Example:

```env
MONGODB_URI=your_mongodb_connection_string
API_KEY=your_api_key
GOOGLE_APPLICATION_CREDENTIALS=path_to_firebase_service_account_json
```

Start the backend server:

```bash
node server.js
```

Or, if configured:

```bash
npm start
```

---

### Frontend Setup

Navigate to the mobile application directory:

```bash
cd mobile
```

Install dependencies:

```bash
npm install
```

Start the Expo development server:

```bash
npx expo start
```

You can run the application using:

* Expo Go on a physical device
* Android Emulator
* iOS Simulator
* Web browser

> **Note:** When testing on a physical device, update the API configuration with your development machine's LAN IP address instead of using `localhost`.

---

## 🔌 API Integration

The React Native frontend communicates with the Express backend through REST APIs.

The backend handles operations such as:

* User registration and authentication
* User profile management
* Product listing management
* Product image uploads
* Marketplace operations
* Order management
* Chat-related services

Real-time communication between users is supported using **Socket.IO**.

---

## 🖼️ Screenshots

Add screenshots of the application inside a `screenshots/` directory in the repository.

Example:

```text
screenshots/
├── login.png
├── marketplace.png
├── chat.png
└── orders.png
```

Then display them in the README using:

```markdown
### Login

![Login Screen](screenshots/login.png)

### Marketplace

![Marketplace](screenshots/marketplace.png)

### Chat

![Chat](screenshots/chat.png)

### Orders

![Orders](screenshots/orders.png)
```

---

## 🔒 Security

* Never commit `.env` files to the repository.
* Never expose Firebase service account credentials.
* Keep API keys and database credentials outside the source code.
* Add sensitive configuration files to `.gitignore`.
* Rotate or revoke credentials immediately if they are accidentally exposed.
* Use environment variables for production deployments.

Example `.gitignore` entries:

```gitignore
node_modules/
.env
*.json
uploads/
.expo/
```

> Ensure that required project JSON files such as `package.json` are **not** accidentally ignored.

If sensitive credentials have previously been committed, remove them from the Git history and rotate the exposed credentials.

---

## 🛠️ Development Notes

* Use your machine's **LAN IP address** instead of `localhost` when connecting a physical mobile device to the backend during development.
* Ensure the mobile device and development machine are connected to the same network when using a local backend.
* Environment-based configuration is recommended for managing development and production API URLs.
* A production process manager such as PM2 or containerization with Docker can be used when deploying the backend.

---

## 🌟 Project Highlights

* Full-stack mobile application development
* React Native and Expo cross-platform development
* Node.js and Express.js backend architecture
* MongoDB database integration
* RESTful API development
* Firebase integration
* Real-time communication with Socket.IO
* Image and file upload functionality
* Marketplace and order management workflows
* Separation of mobile frontend and backend services
* Environment-based configuration for improved security

---

## 📄 License

This project was developed for **educational and portfolio purposes**.

Any credentials, API keys, or service account files used during development should be kept private and must not be committed to the repository.
