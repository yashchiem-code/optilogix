# OptiLogix: Revolutionizing Supply Chain Management

OptiLogix is a comprehensive, cutting-edge solution designed to reimagine and optimize the entire supply chain flow, from supplier to customer. Leveraging advanced technology and seamless design, OptiLogix aims to boost efficiency, enhance collaboration, and drive innovation in the logistics industry.

## 🚀 Features

OptiLogix offers a robust suite of features to streamline logistics operations:

*   **Smart Dashboard**: Real-time insights and analytics for informed decision-making.
*   **Dock Dispatcher**: Powered by a Priority Slot Algorithm for efficient dock management.
*   **Route Optimizer**: Utilizes Open Route API for intelligent and optimized delivery routes.
*   **Inventory Spotter**: Employs the A* algorithm for precise inventory tracking and management.
*   **Compliance Checker**: Ensures adherence to regulatory standards and readiness.
*   **Driver View**: A simplified and clear interface designed specifically for drivers.
*   **Instant Freight Quotes**: Quickly generate accurate freight cost estimates.
*   **Risk Dashboard**: Comprehensive analysis and visualization of potential supply chain risks.
*   **Demand Forecasting**: Predictive models to anticipate future demand and optimize stock levels.
*   **Real-time Team Collaboration**: Facilitated via Web Sockets for seamless communication.
*   **Blockchain Provenance**: Ensures secure and transparent traceability of goods.
*   **Omnidimension AI-powered Chatbot**: Provides 24/7 assistance and support.

## ⚙️ Project Structure

OptiLogix is composed of multiple backend services and a frontend:

*   `backend`: Payment gateway integration (Razorpay)
*   `backendOmni`: AI-powered chatbot service (Python)
*   `tracksmart_backend`: BECKN protocol implementation for logistics
*   `email_backend`: Email notification service (Python)
*   `frontend`: React TypeScript user interface
*   `contracts`: Blockchain smart contracts for provenance tracking

## 🛠️ Installation

### Prerequisites

*   Node.js (v16+)
*   Python (v3.8+)
*   npm or yarn

### Quick Start

1.  **Clone the repository:**

    ```bash
    git clone https://github.com/your-username/OptiLogix.git
    cd OptiLogix
    ```

2.  **Backend Setup (Payment Gateway):**

    ```bash
    cd backend
    npm install
    # Create .env file with your Razorpay credentials
    npm start
    ```

3.  **AI Chatbot Backend:**

    ```bash
    cd backendOmni
    pip install -r requirements.txt
    python index.py
    ```

4.  **Email Service:**

    ```bash
    cd email_backend
    pip install -r requirements.txt
    python app.py
    ```

5.  **TrackSmart Backend (BECKN):**

    ```bash
    cd tracksmart_backend
    npm install
    node index.js
    ```

6.  **Frontend:**

    ```bash
    cd frontend
    npm install
    npm run dev
    ```

## 🚀 Usage

Once all services are running, open your browser and navigate to `http://localhost:5173` (or the specified frontend port).

### Environment Variables

Create `.env` files in respective directories:

**backend/.env:**
```
RAZORPAY_KEY_ID=your_key_id
RAZORPAY_KEY_SECRET=your_key_secret
PORT=5000
```

**frontend/.env:**
```
VITE_API_URL=http://localhost:5000
VITE_BECKN_API_URL=http://localhost:3000
```

## 🏗️ Architecture

OptiLogix uses a microservices architecture with:
- Multiple specialized backend services
- React TypeScript frontend
- Blockchain integration for supply chain transparency
- Real-time WebSocket communication
- AI-powered assistance

## 📸 Visual Demonstrations

### BECKN FLOW 
<img width="2330" height="1412" alt="image" src="https://github.com/user-attachments/assets/ac0f2fc9-ec76-404d-a8b6-70378225bbdb" />




## 🤝 Contributing

We welcome contributions! Please see `CONTRIBUTING.md` for details on how to get started.

## 📄 License

This project is licensed under the MIT License - see the `LICENSE` file for details.
