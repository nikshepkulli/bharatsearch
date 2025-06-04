# 🇮🇳 BHARATSEARCH
*Empower Your Search, Own Your Data Today*

![last-commit](https://img.shields.io/github/last-commit/nikshepkulli/bharatsearch?style=flat&logo=git&logoColor=white&color=0080ff)
![repo-top-language](https://img.shields.io/github/languages/top/nikshepkulli/bharatsearch?style=flat&color=0080ff)
![repo-language-count](https://img.shields.io/github/languages/count/nikshepkulli/bharatsearch?style=flat&color=0080ff)

**BharatSearch** is a revolutionary decentralized, AI-powered search engine built on peer-to-peer infrastructure using local machines like Raspberry Pi, laptops, and desktops. This is India's open-source answer to global search monopolies, prioritizing user privacy and data control.

*Built with the tools and technologies:*

![Flask](https://img.shields.io/badge/Flask-000000.svg?style=flat&logo=Flask&logoColor=white)
![Python](https://img.shields.io/badge/Python-3776AB.svg?style=flat&logo=Python&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E.svg?style=flat&logo=JavaScript&logoColor=black)
![React](https://img.shields.io/badge/React-61DAFB.svg?style=flat&logo=React&logoColor=black)
![Docker](https://img.shields.io/badge/Docker-2496ED.svg?style=flat&logo=Docker&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-646CFF.svg?style=flat&logo=Vite&logoColor=white)
![npm](https://img.shields.io/badge/npm-CB3837.svg?style=flat&logo=npm&logoColor=white)

---

## 📋 Table of Contents

- [🌟 Goals](#-goals)
- [✨ Features](#-features)
- [🛠 Tech Stack](#-tech-stack)
- [🚀 Getting Started](#-getting-started)
  - [Prerequisites](#prerequisites)
  - [🔧 Option 1: Docker Compose (Recommended)](#-option-1-docker-compose-recommended)
  - [🧪 Option 2: Manual Setup (Local Development)](#-option-2-manual-setup-local-development)
- [🧪 Testing](#-testing)
- [🤝 Contributing](#-contributing)

---

## 🌟 Goals

- ⚡ Run AI search locally without central servers
- 📡 Share and host content on distributed nodes
- 🔓 Empower Indians to control their own data
- 🧠 Use lightweight AI to understand queries semantically
- 🌐 Provide a user-centric alternative to global search monopolies

---

## ✨ Features

- **🔒 Decentralized Search Engine:** Prioritizes user privacy and data control, eliminating reliance on central servers
- **🤖 AI-Powered Semantic Understanding:** Utilizes FAISS + SentenceTransformers (MiniLM) for better query interpretation and improved search relevance
- **💻 Local Machine Utilization:** Leverages peer-to-peer infrastructure for enhanced performance and reduced latency
- **🌐 Multilingual Support:** Enables searches across multiple languages, catering to India's diverse linguistic landscape
- **📜 Open Source with MIT License:** Encourages collaboration and innovation, allowing developers to modify and distribute freely
- **🐳 Streamlined Development with Docker:** Simplifies deployment and orchestration of backend and frontend components

---

## 🛠 Tech Stack

**Backend:**
- Python + Flask
- FAISS + SentenceTransformers (MiniLM)
- IPFS (coming soon)

**Frontend:**
- React + Tailwind CSS
- Vite
- JavaScript

**DevOps & Tools:**
- Docker + Docker Compose
- npm + pip package managers

---

## 🚀 Getting Started

### Prerequisites

This project requires the following dependencies:

- **Programming Language:** Python 3.7+, JavaScript
- **Package Managers:** npm, pip
- **Container Runtime:** Docker & Docker Compose
- **System:** Linux/macOS/Windows

### 🔧 Option 1: Docker Compose (Recommended)

Make sure you have Docker and Docker Compose installed.

1. **Clone the repository:**
   ```bash
   git clone https://github.com/nikshepkulli/bharatsearch.git
   cd bharatsearch
   ```

2. **Build and run with Docker Compose:**
   ```bash
   docker-compose up --build
   ```

3. **Access the application:**
   - Frontend: [http://localhost:5173](http://localhost:5173)
   - Backend API test: [http://localhost:5000/search?q=india](http://localhost:5000/search?q=india)

### 🧪 Option 2: Manual Setup (Local Development)

1. **Clone the repository:**
   ```bash
   git clone https://github.com/nikshepkulli/bharatsearch.git
   cd bharatsearch
   ```

2. **Backend Setup:**
   ```bash
   cd backend
   ```

3. **Create a virtual environment:**
   ```bash
   python3 -m venv .venv
   ```

4. **Activate the virtual environment:**
   
   **Linux/macOS:**
   ```bash
   source .venv/bin/activate
   ```
   
   **Windows (CMD):**
   ```cmd
   .venv\Scripts\activate
   ```
   
   **Windows (PowerShell):**
   ```powershell
   .venv\Scripts\Activate.ps1
   ```

5. **Install Python dependencies:**
   ```bash
   pip install -r requirements.txt
   ```

6. **Build search index and run backend:**
   ```bash
   python indexer.py
   python app.py
   ```

7. **Frontend Setup (in a new terminal):**
   ```bash
   cd frontend  # or root directory
   npm install
   npm start
   ```

8. **Access the application:**
   - Backend API: [http://localhost:5000/search?q=your+query](http://localhost:5000/search?q=your+query)
   - Frontend: [http://localhost:5173](http://localhost:5173) (if using Vite)

9. **Deactivate virtual environment when done:**
   ```bash
   deactivate
   ```

---

## 🧪 Testing

Run the test suite using the following commands:

**Using Docker:**
```bash
docker-compose run backend pytest
```

**Using npm (Frontend):**
```bash
npm test
```

**Using pip (Backend):**
```bash
# Activate virtual environment first
source .venv/bin/activate  # Linux/macOS
# or .venv\Scripts\activate  # Windows

pytest
```

---

## 🤝 Contributing

We welcome contributions! BharatSearch is open-source and encourages collaboration. Please feel free to:

- Report bugs and issues
- Suggest new features
- Submit pull requests
- Improve documentation

---

🚩 *Built with 🇮🇳 pride. Let's reclaim the web and empower digital sovereignty.*

---

[⬆ Back to Top](#-bharatsearch)
