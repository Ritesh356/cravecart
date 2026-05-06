# 🛒 CraveCart

CraveCart is a modern, full-stack e-commerce platform designed for a seamless shopping experience. The application leverages **Next.js** for a high-performance frontend and **Node.js** for a robust backend, featuring secure image management and real-time development capabilities.

---

## 🚀 Features

-   **Dynamic Product Catalog**: Browse products with fast, server-side rendered pages.
-   **Cloud-Based Media**: High-quality product images managed and optimized via **Cloudinary**.
-   **Persistent Shopping Cart**: Add and manage items in a fluid, user-friendly cart.
-   **Responsive Design**: Fully optimized for mobile, tablet, and desktop views.
-   **Live Development**: Seamless backend updates using **Nodemon** for automatic server restarts.

---

## 🛠️ Tech Stack

-   **Frontend**: Next.js, React.js, Tailwind CSS
-   **Backend**: Node.js, Express.js
-   **Database**: MongoDB (or your preferred DB)
-   **Storage**: Cloudinary (Image & Media Management)
-   **Dev Tools**: Nodemon

---

## 📦 Getting Started

### Prerequisites

-   [Node.js](https://nodejs.org/) installed on your machine.
-   A [Cloudinary](https://cloudinary.com/) account for API credentials.
-   MongoDB connection string.

### Installation

1.  **Clone the repository**
    ```bash
    git clone [https://github.com/your-username/cravecart.git](https://github.com/your-username/cravecart.git)
    cd cravecart
    ```

2.  **Install Dependencies**
    ```bash
    # Install root dependencies
    npm install

    # If your frontend is in a subfolder
    cd client && npm install
    ```

3.  **Set up Environment Variables**
    Create a `.env` file in the root directory:
    ```env
    PORT=5000
    MONGODB_URI=your_mongodb_uri
    CLOUDINARY_CLOUD_NAME=your_cloud_name
    CLOUDINARY_API_KEY=your_api_key
    CLOUDINARY_API_SECRET=your_api_secret
    ```

4.  **Run the Application**
    ```bash
    # Start the backend server with Nodemon
    npm run dev

    # Start the Next.js frontend
    npm run client
    ```

---

## 📂 Project Structure

```text
cravecart/
├── client/              # Next.js frontend
│   ├── components/      # Reusable React components
│   └── pages/           # Next.js routing and views
├── server/              # Node.js backend
│   ├── models/          # Database schemas
│   ├── routes/          # API endpoints
│   └── controllers/     # Business logic
├── public/              # Static assets
└── .env                 # Environment secrets
