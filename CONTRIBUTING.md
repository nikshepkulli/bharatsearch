## Contributing to BharatSearch

Thank you for your interest in contributing! This guide explains how to clone, run, and make changes, plus the pull request workflow we follow.

### Code of Conduct
By participating, you agree to uphold a respectful, inclusive environment. Be kind and constructive in all interactions.

---

## 1) Clone the project

You can work from your fork (recommended) or clone the upstream repo directly if you have write access.

```bash
# Fork the repo on GitHub first, then:
git clone https://github.com/<your-username>/<repo>.git
cd <repo>

# Add upstream to keep your fork in sync (optional but recommended)
git remote add upstream https://github.com/<upstream-owner>/<repo>.git
git fetch upstream
```

Keep your default branch current:

```bash
git checkout main
git pull upstream main
git push origin main
```

---

## 2) Run the project locally

The project includes a Flask backend and a React (Vite + Tailwind) frontend. Choose one of the following setups.

### Option A: Docker Compose (recommended)
Prerequisites: Docker and Docker Compose

```bash
# From the repository root where docker-compose.yml is located
docker-compose up --build
```

Once running:
- Frontend: http://localhost:5173
- Backend test endpoint: http://localhost:5000/search?q=india

Stop containers with Ctrl+C, or run in detached mode with `-d` and stop with `docker-compose down`.

### Option B: Manual (local development)

Backend (Flask):
```bash
cd backend
python -m venv .venv

# Activate the virtual environment
# Linux/macOS
source .venv/bin/activate
# Windows (CMD)
.venv\Scripts\activate
# Windows (PowerShell)
.venv\Scripts\Activate.ps1

pip install -r requirements.txt

# Build the search index, then run the API
python indexer.py
python app.py
```

Frontend (React + Vite):
```bash
# In a new terminal from the repo root
cd frontend
npm install
npm run dev
```

Access:
- Backend API: http://localhost:5000/search?q=your+query
- Frontend: http://localhost:5173

When finished with the backend venv:
```bash
deactivate
```

---

## 3) Development workflow

### Create a feature branch
```bash
git checkout -b feature/<short-purpose>
# examples: feature/add-dark-mode, fix/search-null-error, docs/update-readme
```

### Make changes
- Keep changes focused and small when possible.
- Follow existing code style and structure.
- Python: follow PEP 8; prefer type hints where reasonable.
- JavaScript/React: keep components small and cohesive; avoid deep nesting.

### Run locally and test
Use the commands above to run backend and frontend. If tests exist, run them:

Backend (pytest):
```bash
cd backend
pytest
```

Frontend:
```bash
cd frontend
npm test
```

### Commit messages
Use clear, descriptive messages. Conventional Commits are encouraged:
```
feat: add semantic search filter
fix: handle empty query in backend search route
docs: update setup instructions for Windows PowerShell
```

### Keep your branch up-to-date
```bash
git fetch upstream
git rebase upstream/main
# or: git merge upstream/main
```

Resolve any conflicts locally, test again, and push:
```bash
git push -u origin feature/<short-purpose>
```

---

## 4) Pull Request (PR) workflow

1. Open a PR from `feature/<short-purpose>` (your fork) to `main` (upstream).
2. Fill out the description clearly:
   - What this change does and why
   - Screenshots or logs if UI/API visible behavior changes
   - Any follow-up tasks or known limitations
3. Ensure the PR is small and focused. Large PRs are harder to review.
4. Confirm checklist before requesting review:
   - [ ] Code compiles and runs locally (backend and/or frontend)
   - [ ] Tests pass (if present) and new tests added when relevant
   - [ ] No obvious performance regressions
   - [ ] Docs updated (README/CONTRIBUTING or in-code docstrings)
5. Request review. Be responsive to feedback and push updates to the same branch.
6. Squash merge is preferred to keep history clean (maintainers may handle the merge strategy).

After merge, sync your local `main`:
```bash
git checkout main
git pull upstream main
git push origin main
```

---

## 5) Opening issues
- Use a clear title and steps to reproduce when reporting bugs.
- Include environment details (OS, Docker/non-Docker, Python/Node versions).
- For feature requests, focus on the problem and user value; propose a concise solution.

---

## 6) License
By contributing, you agree that your contributions are licensed under the repository’s MIT License.

---

## 7) Quick reference
- Docker: `docker-compose up --build`
- Backend: `python indexer.py` then `python app.py`
- Frontend: `npm install && npm run dev`
- Tests (backend): `pytest`
- Tests (frontend): `npm test`

