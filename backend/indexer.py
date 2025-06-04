from sentence_transformers import SentenceTransformer
import faiss
import numpy as np  # Added for normalization
import os
import json
import sys

DOCS_PATH = "../docs"

if not os.path.exists(DOCS_PATH):
    print(f"❌ Folder '{DOCS_PATH}' not found.")
    sys.exit(1)

# Use a multilingual model for Indian languages
model = SentenceTransformer('distiluse-base-multilingual-cased-v2')
texts = []
metadata = []

for fname in os.listdir(DOCS_PATH):
    if fname.endswith(".txt"):
        with open(os.path.join(DOCS_PATH, fname), encoding='utf-8') as f:
            content = f.read()
            texts.append(content)
            metadata.append({ "filename": fname, "content": content })

if not texts:
    print("⚠️ No .txt files found in '../docs'")
    sys.exit(1)

embeddings = model.encode(texts)
# Normalize embeddings for cosine similarity
embeddings = np.array(embeddings)
embeddings = embeddings / np.linalg.norm(embeddings, axis=1, keepdims=True)
# Use IndexFlatIP for cosine similarity
index = faiss.IndexFlatIP(embeddings.shape[1])
index.add(embeddings)

# Save to disk
faiss.write_index(index, "search.index")
with open("documents.json", "w", encoding='utf-8') as f:
    json.dump(metadata, f, indent=2)

print("✅ Index and metadata saved.")
