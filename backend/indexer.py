from sentence_transformers import SentenceTransformer
import faiss
import os

model = SentenceTransformer('all-MiniLM-L6-v2')
texts = []
files = []

for fname in os.listdir("../docs"):
    with open(f"../docs/{fname}", encoding='utf-8') as f:
        texts.append(f.read())
        files.append(fname)

embeddings = model.encode(texts)
index = faiss.IndexFlatL2(embeddings[0].shape[0])
index.add(embeddings)

# Save to disk
faiss.write_index(index, "search.index")
with open("documents.txt", "w") as f:
    f.write("\n".join(files))
