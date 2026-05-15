# my-hello-world
Github webpage test

## 🚀 How to add a new product/item
With this Jekyll setup, you **do not** need to edit any JavaScript files! To add a new item:
1. **Create a file:** Go to the `_products/` folder and create a new file (e.g., `new-item.md`).
2. **Add Content:** Paste your product details into that file using this format:
   ```markdown
   ---
   title: "Your Product Name"
   description: "A short description of the item."
   price: "$20"
   image: "/assets/images/your-image.jpg"
   instagram: "https://instagram.com/yourprofile"
   ---
   ```
3. **Add Image:** Ensure your image is saved in the `assets/images/` folder.
4. **Commit and Push:** Once you push to GitHub, the new item will automatically appear on your homepage!

---

## 💻 Running the site locally (Development)
Because this site uses **Jekyll** (Liquid templates and Markdown), **Ruby** must be installed on your computer.

### First steps after installing ruby 3.3:
1. Run:
   ```bash
   gem install bundler
   ```

### Steps to Run:
1. Open the project in **VS Code**.
2. Open the VS Code terminal/CLI.
3. Run:
   ```bash
   jekyll serve
   ```
   or, to generate a local preview with a clean baseurl:
   ```bash
   bundle exec jekyll serve --baseurl=""
   ```
   or....
   ```bash
   bundle exec jekyll serve
   ```
4. Open the local site in your browser, usually at:
   ```bash
   http://localhost:4000
   ```

### If any changes are mad to Gemfile:
1. Run:
   ```bash
   bundle install
   ```
1. Run:
   ```bash
   bundle exec jekyll serve
   ```

### VS Code build option
If you have a default build task configured in VS Code, you can also run the project by pressing:

```text
Ctrl + Shift + B
```

This will start the configured build task directly from VS Code.

---