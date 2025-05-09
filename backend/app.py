from flask import Flask, request, jsonify
from sentence_transformers import SentenceTransformer
import faiss

model = SentenceTransformer('all-MiniLM-L6-v2')
index = faiss.read_index("search.index")
with open("documents.txt") as f:
    docs = f.read().splitlines()

app = Flask(__name__)

@app.route('/search')
def search():
    q = request.args.get('q')
    vec = model.encode([q])
    D, I = index.search(vec, k=5)
    return jsonify([docs[i] for i in I[0]])

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000)
