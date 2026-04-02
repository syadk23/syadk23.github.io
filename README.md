# 👾 Syad Khwajazada — 8-Bit Portfolio

A retro 8-bit styled personal portfolio website built with vanilla HTML, CSS, and JavaScript.

---

## 📁 Project Structure

```
syad-portfolio/
├── index.html        # Main HTML file (entry point)
├── css/
│   └── style.css     # All styles and animations
├── js/
│   └── main.js       # Tab switching logic
└── README.md         # This file
```

---

## 🚀 Deploying with GitHub Pages (Free Hosting)

Follow these steps to get your portfolio live at:
`https://<your-github-username>.github.io/<repo-name>/`

### Step 1 — Create a GitHub Repository

1. Go to [https://github.com](https://github.com) and sign in (or create a free account)
2. Click the **+** icon in the top right → **New repository**
3. Name it something like `portfolio` or `syad-portfolio`
4. Set visibility to **Public** (required for free GitHub Pages)
5. Leave all other options as default and click **Create repository**

---

### Step 2 — Upload Your Files

**Option A — Upload via GitHub website (easiest)**

1. On your new repository page, click **uploading an existing file**
2. Drag and drop ALL your project files and folders:
   - `index.html`
   - `css/` folder (with `style.css` inside)
   - `js/` folder (with `main.js` inside)
3. Scroll down, add a commit message like `Initial portfolio upload`
4. Click **Commit changes**

> ⚠️ Make sure the folder structure is preserved:
> `css/style.css` and `js/main.js` must be in their respective subfolders.

**Option B — Upload via Git CLI (recommended)**

```bash
# 1. Navigate to your project folder
cd path/to/syad-portfolio

# 2. Initialize a git repository
git init

# 3. Add all files
git add .

# 4. Make your first commit
git commit -m "Initial portfolio upload"

# 5. Connect to your GitHub repo (replace with your actual URL)
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git

# 6. Push to GitHub
git branch -M main
git push -u origin main
```

---

### Step 3 — Enable GitHub Pages

1. Go to your repository on GitHub
2. Click **Settings** (tab at the top of the repo)
3. In the left sidebar, click **Pages**
4. Under **Source**, select:
   - Branch: `main`
   - Folder: `/ (root)`
5. Click **Save**

GitHub will show a banner saying:
> ✅ *"Your site is live at https://YOUR_USERNAME.github.io/YOUR_REPO_NAME/"*

It usually takes **1–3 minutes** to go live.

---

## 🔄 Making Updates

After your portfolio is live, any changes you push to the `main` branch will automatically redeploy.

**Via GitHub website:**
1. Navigate to the file you want to edit in your repo
2. Click the ✏️ pencil icon to edit
3. Make your changes and click **Commit changes**

**Via Git CLI:**
```bash
# Make your edits locally, then:
git add .
git commit -m "Update experience section"
git push
```

---

## 💻 Running Locally (Preview Before Publishing)

Since this is pure HTML/CSS/JS with no build tools needed, you have two options:

**Option 1 — Open directly in browser**
```
Double-click index.html → opens in your default browser
```

**Option 2 — Use a local server (avoids any browser file restrictions)**
```bash
# If you have Python installed:
python -m http.server 8000

# Then open your browser to:
http://localhost:8000
```

---

## 🎨 Customization Tips

| What to change          | Where to change it              |
|-------------------------|---------------------------------|
| Your name / contact     | `index.html` → `<header>`       |
| About me text           | `index.html` → `#about` section |
| Jobs / experience       | `index.html` → `#experience`    |
| Projects                | `index.html` → `#projects`      |
| Skills list             | `index.html` → `#skills`        |
| Colors / fonts          | `css/style.css` → `:root` vars  |
| Stat bar percentages    | `index.html` → inline `width:%` |

### Color variables (in `css/style.css`):
```css
:root {
  --accent1: #00ffff;  /* cyan  — titles, fills   */
  --accent2: #ff00ff;  /* magenta — active, hover  */
  --accent3: #ffff00;  /* yellow — panel headers   */
  --accent4: #00ff88;  /* green — highlights, tags */
}
```

---

## 🛠 Tech Stack

- **HTML5** — semantic structure
- **CSS3** — pixel art aesthetics, animations, CSS variables
- **Vanilla JavaScript** — tab navigation
- **Google Fonts** — Press Start 2P + VT323 (loaded via CDN)
- **GitHub Pages** — free static hosting

No frameworks, no build tools, no dependencies to install. ✅

---

## 📬 Contact

**Syad Khwajazada**
- 📍 Toronto, ON
- 📞 (226) 505-0852
- 🎓 University of Guelph — MASc Engineering
