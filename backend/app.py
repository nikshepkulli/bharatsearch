from flask import Flask, request, jsonify
from flask_cors import CORS
from sentence_transformers import SentenceTransformer
import faiss
import numpy as np  # Added for normalization
import json

app = Flask(__name__)
CORS(app)  # Enable CORS for all routes

# Load multilingual model for Indian languages
model = SentenceTransformer('distiluse-base-multilingual-cased-v2')

# Load FAISS index and document metadata
try:
    index = faiss.read_index("search.index")
    with open("documents.json", encoding='utf-8') as f:
        docs = json.load(f)
    print("✅ FAISS index and documents loaded successfully.")
except Exception as e:
    print("❌ Failed to load index or documents:", e)
    docs = []
    index = None

@app.route('/search')
def search():
    if index is None:
        return jsonify({"error": "Index not loaded"}), 500
    
    query = request.args.get('q')
    if not query:
        return jsonify({"error": "Missing 'q' parameter"}), 400

    embedding = model.encode([query])
    embedding = np.array(embedding)
    embedding = embedding / np.linalg.norm(embedding, axis=1, keepdims=True)
    D, I = index.search(embedding, k=5)

    results = []
    for idx, i in enumerate(I[0]):
        score = float(D[0][idx])
        results.append({
            "filename": docs[i]["filename"],
            "content": docs[i]["content"][:300] + "...",  # Trimmed preview
            "score": score
        })

    # Sort by cosine score descending (optional, for clarity)
    results = sorted(results, key=lambda x: x["score"], reverse=True)
    return jsonify(results)

@app.route('/')
def home():
    return '<h2>BharatSearch API is running. Use <code>/search?q=your+query</code> to search.</h2>'

if __name__ == "__main__":
    # Bind to all interfaces so it works with frontend on a different port
    app.run(host="0.0.0.0", port=5000)
