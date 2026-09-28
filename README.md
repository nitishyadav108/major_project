# 🏝️ WonderResort

**WonderResort** is a full-stack resort and property listing web application built with **Node.js, Express.js, MongoDB, and EJS**. It allows users to explore resort listings, create and manage properties, upload images, add reviews, and view property locations on an interactive map.

## ✨ Features

* 🏡 Browse resort/property listings
* 🔐 User registration and login
* 👤 User authentication with Passport.js
* ➕ Create new listings
* ✏️ Edit and delete listings
* 🖼️ Upload and manage property images
* ☁️ Cloudinary image storage
* ⭐ Add and delete reviews
* 🗺️ Display property locations using Mapbox
* 🔔 Flash messages for user feedback
* ✅ Form validation using Joi
* 🛡️ Protected routes and authorization
* 📱 Responsive user interface

## 🛠️ Technologies Used

### Frontend

* HTML5
* CSS3
* JavaScript
* Bootstrap
* EJS
* EJS-Mate

### Backend

* Node.js
* Express.js

### Database

* MongoDB
* Mongoose
* MongoDB Atlas

### Authentication

* Passport.js
* Passport Local
* Express Session
* Connect-Mongo

### Cloud Services & APIs

* Cloudinary
* Mapbox

### Other Tools

* Joi
* Multer
* Method Override
* Connect Flash
* Git
* GitHub
* VS Code

## 📂 Project Structure

```text
WonderResort/
│
├── controllers/       # Application logic
├── init/              # Database initialization
├── models/            # MongoDB/Mongoose models
├── public/            # CSS, JavaScript and static assets
├── routes/            # Express routes
├── uploads/           # Uploaded files
├── utils/             # Utility functions
├── views/             # EJS templates
│
├── app.js             # Main application file
├── cloudConfig.js     # Cloudinary configuration
├── middleware.js      # Custom middleware
├── schema.js          # Joi validation schemas
├── package.json       # Project dependencies
├── package-lock.json
├── .gitignore
└── README.md
```

## ⚙️ Installation & Setup

### 1. Clone the repository

```bash
git clone https://github.com/nitishyadav108/major_project.git
```

### 2. Navigate to the project

```bash
cd major_project
```

### 3. Install dependencies

```bash
npm install
```

### 4. Create a `.env` file

Create a `.env` file in the root directory and add your credentials:

```env
ATLASDB_URL=your_mongodb_connection_string

SECRET=your_session_secret

CLOUD_NAME=your_cloudinary_cloud_name
CLOUD_API_KEY=your_cloudinary_api_key
CLOUD_API_SECRET=your_cloudinary_api_secret

MAP_TOKEN=your_mapbox_token
```

> **Important:** Never upload your `.env` file or expose your API keys and database credentials on GitHub.

## ▶️ Run the Application

Start the server:

```bash
node app.js
```

The application will run on:

```text
http://localhost:8080
```

Open the URL in your browser to use WonderResort.

## 🗺️ Map Integration

WonderResort uses **Mapbox** to display the geographical location of properties.

Users can view the location of a resort/listing directly on the map.

## ☁️ Image Upload

Property images are uploaded using **Multer** and stored securely using **Cloudinary**.

This allows the application to handle property images without storing large image files directly on the application server.

## 🔐 Authentication & Authorization

WonderResort uses **Passport.js** for authentication.

Users can:

* Register an account
* Login securely
* Logout
* Create listings
* Edit their own listings
* Delete their own listings
* Add reviews
* Delete their own reviews

Protected routes ensure that only authorized users can perform restricted actions.

## ⭐ Reviews

Users can leave reviews on properties.

The review system includes:

* Rating
* Review comment
* Review deletion
* User-based authorization

## 🧪 Validation & Error Handling

The application uses **Joi** for server-side validation and includes custom error-handling middleware.

This helps prevent invalid data from being submitted to the database.

## 📸 Screenshots

Add screenshots of WonderResort here:

```text
screenshots/
├── home.png
├── listings.png
├── listing-details.png
├── login.png
├── register.png
└── create-listing.png
```

Example:

```markdown
![WonderResort Home Page](screenshots/home.png)
```

## 🚀 Future Improvements

Possible future features include:

* 💳 Online booking and payment
* 📅 Resort availability calendar
* ❤️ Wishlist functionality
* 🔎 Advanced search and filtering
* 💬 Real-time chat
* 📧 Email notifications
* 👨‍💼 Admin dashboard
* 📱 Improved mobile experience
* 🌐 Production deployment

## 👨‍💻 Author

**Nitish Yadav**

* GitHub: https://github.com/nitishyadav108
* LinkedIn: https://www.linkedin.com/in/nitishyadav108

## 📄 License

This project is licensed under the **ISC License**.

---

⭐ **If you like WonderResort, consider giving the repository a star!**
