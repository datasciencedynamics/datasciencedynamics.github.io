# Data Science Dynamics — Astro Site

This is the source code for the Data Science Dynamics website, built with [Astro](https://astro.build). The steps below walk you through running it locally on your machine and deploying it to GoDaddy when you're ready.

---

## Part 1 — Running the site on your machine

### Step 1 · Install Node.js

Astro requires **Node.js v22.12 or higher**. Check whether you already have it:

```
node --version
```

If the command is not found, or the version is below 22, download and install Node.js from:

> https://nodejs.org — click **"LTS"** (the recommended version)

Once installed, close and reopen your terminal, then run `node --version` again to confirm.

---

### Step 2 · Open a terminal in the project folder

- On **Mac**: open Terminal, then drag the `Astro` folder onto the Terminal window, or use `cd` to navigate to it.
- On **Windows**: open the `Astro` folder in File Explorer, then right-click inside it and choose **Open in Terminal** (or **Git Bash** if you have it).

---

### Step 3 · Install project dependencies

Run this once — it downloads everything Astro needs:

```
npm install
```

You will see a `node_modules` folder appear. You only need to do this the first time (or whenever the project dependencies change).

---

### Step 4 · Start the local preview server

```
npm run dev
```

Then open your browser and go to:

```
http://localhost:4321
```

The site will live-reload as you make changes. Press `Ctrl + C` in the terminal to stop the server when you are done.

---

## Part 2 — Uploading to GoDaddy

When you are happy with how the site looks, follow these steps to publish it.

### Step 1 · Build the site

This compiles everything into a static folder called `dist/`:

```
npm run build
```

When it finishes you will see a `dist/` folder inside the `Astro` directory. That folder is the complete, ready-to-upload website.

---

### Step 2 · Log in to GoDaddy cPanel

1. Go to your GoDaddy account and open **My Products**.
2. Find your hosting plan and click **Manage**.
3. Click **cPanel Admin** to open the hosting control panel.

---

### Step 3 · Upload via File Manager

1. In cPanel, open **File Manager**.
2. Navigate to the `public_html` folder (this is the root of your website).
3. If there are existing files there from the old site, delete or move them first.
4. Click **Upload** and select all the files and folders **inside** `dist/` — not the `dist/` folder itself, but its contents.

> **Tip:** If you have a lot of files, it is faster to zip the contents of `dist/` first, upload the zip, and then use the **Extract** button in cPanel's File Manager to unzip it in place.

---

### Step 3 (alternative) · Upload via FTP

If you prefer an FTP client such as [FileZilla](https://filezilla-project.org):

1. In GoDaddy cPanel, find your **FTP credentials** (or create an FTP account under **FTP Accounts**).
2. Open FileZilla and connect using your host, username, and password.
3. On the right panel, navigate to `public_html`.
4. On the left panel, open the `Astro/dist/` folder on your computer.
5. Select all contents of `dist/` and drag them to the right panel.

---

### Step 4 · Verify

Once the upload completes, visit your domain in a browser. The new site should appear within a minute or two. If you see a cached version, try a hard refresh (`Cmd + Shift + R` on Mac, `Ctrl + Shift + R` on Windows).

---

## Quick reference

| Command | What it does |
|---|---|
| `npm install` | Install dependencies (first time only) |
| `npm run dev` | Start local preview at http://localhost:4321 |
| `npm run build` | Build the site into the `dist/` folder for upload |
| `npm run preview` | Preview the built site locally before uploading |
