````markdown
# 🇮🇳 BharatSearch — Decentralized AI-Powered Search Engine

**BharatSearch** is an open-source, privacy-first search engine built on peer-to-peer infrastructure using local machines like Raspberry Pi, laptops, and desktops. Powered by AI (FAISS + Transformers), this is India's open answer to global search monopolies.

---

## 🌟 Goals

- ⚡ Run AI search locally without central servers
- 📡 Share and host content on distributed nodes
- 🔓 Empower Indians to control their own data
- 🧠 Use lightweight AI to understand queries semantically

---

## 🛠 Tech Stack

- Python, Flask
- FAISS + SentenceTransformers (MiniLM)
- IPFS (coming soon)
- React + Tailwind (Vite)
- Docker + Docker Compose

---

## 🚀 Get Started

### 🔧 Option 1: Run with Docker Compose (Recommended)

Make sure you have Docker and Docker Compose installed.

```bash
git clone https://github.com/nikshepkulli/bharatsearch.git
cd bharatsearch
docker-compose up --build
````

Visit:

* Frontend: [http://localhost:5173](http://localhost:5173)
* Backend test: [http://localhost:5000/search?q=india](http://localhost:5000/search?q=india)

---

### 🧪 Option 2: Manual Setup with Virtual Environment (Local Dev)

```bash
git clone https://github.com/nikshepkulli/bharatsearch.git
cd bharatsearch/backend
```

#### ✅ Create a virtual environment:

```bash
python3 -m venv .venv
```

#### ✅ Activate it:

* **Linux/macOS:**

  ```bash
  source .venv/bin/activate
  ```

* **Windows (CMD):**

  ```cmd
  .venv\Scripts\activate
  ```

* **Windows (PowerShell):**

  ```powershell
  .venv\Scripts\Activate.ps1
  ```

#### ✅ Install dependencies:

```bash
pip install -r requirements.txt
```

#### ✅ Build index and run:

```bash
python indexer.py
python app.py
```

Visit: [http://localhost:5000/search?q=your+query](http://localhost:5000/search?q=your+query)

#### ✅ Deactivate when done:

```bash
deactivate
```

---

🚩 *Built with 🇮🇳 pride. Let's reclaim the web.*

```