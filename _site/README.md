# my-hello-world
Github webpage test

## 🚀 How to add a new product/item
With this Jekyll setup, you **do not** need to edit any JavaScript files! To add a new item:

1.  **Create a file:** Go to the `_products/` folder and create a new file (e.g., `new-item.md`).
2.  **Add Content:** Paste your product details into that file using this format:
    ```markdown
    ---
    title: "Your Product Name"
    description: "A short description of the item."
    price: "$20"
    image: "/assets/images/your-image.jpg"
    instagram: "https://instagram.com/yourprofile"
    ---
    ```
3.  **Add Image:** Ensure your image is saved in the `assets/images/` folder.
4.  **Commit and Push:** Once you push to GitHub, the new item will automatically appear on your homepage!

---

## 💻 Running the site locally (Development)
Because this site uses **Jekyll** (Liquid templates and Markdown), the "Live Server" extension in VS Code will not work correctly. You must run a local Jekyll server to see your changes.

### Prerequisites
You must have **Ruby** installed on your computer.

### Steps to Run:
1.  **Open Terminal:** Open the terminal inside VS Code (`Ctrl + ~` or `Cmd + ~`).
2.  **Install Dependencies (First time only):** 
    Run this command to make sure all required plugins are installed:
    ```bash
    bundle install
    ```
3.  **Start the Server:**
    Run the following command:
    ```bash
    bundle exec jekyll serve
    ```
4.  **View your site:**
    Open your browser and go to: `http://127.0.0.1:4000`

*Note: The terminal will automatically detect when you save a file and refresh the site for you!*
