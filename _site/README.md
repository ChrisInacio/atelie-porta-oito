# Atelie Porta Oito

## 🚀 How to add a new product
To add a new item to your collection:
1. **Create a new file** in the `_products/` folder (e.g., `new-item.md`).
2. **Add the content** using the following format:
   ```markdown
   ---
   title: "Your Product Name"
   description: "A short description of the item."
   price: "$20"
   image: "/assets/images/your-image.jpg"
   instagram: "https://instagram.com/yourprofile"
   ---
   ```
3. **Save your image** in the `assets/images/` folder.
4. **Push your changes** to GitHub to see the new item appear automatically.

---

## 💻 Local Development
This site uses **Jekyll**, which requires **Ruby** to be installed on your machine.

### Setup
First, install the necessary gems:
```bash
gem install bundler
gem install jekyll bundler
bundle install
```

### Running the Server
To start the local development server, run:
```bash
bundle exec jekyll serve
```
The site will be available at `http://127.0.0.1:4000/atelie-porta-oito/`.

*Note: If you have a default build task configured in VS Code, you can also run it by pressing `Ctrl + Shift + B`.*
