# 🔥 AI Solutions CMS Frontend

This is a React-based frontend for a simple content management system (CMS) that allows users to update and display a dynamic heading for an AI solutions homepage. It connects to a deployed Express/SQLite backend.

---

## 🌐 Live Demo

- **Frontend (React)** – `https://brewex-frontend.vercel.app/` (https://brewex-frontend.vercel.app/)
- **Backend (Express + SQLite)** – [https://backend-brewex1.onrender.com](https://backend-brewex1.onrender.com)

---

## ✨ Features

- 🧠 Displays AI-related service features with icons and responsive layout.
- ✍️ Allows editing the homepage heading through a CMS admin interface.
- 📡 Connects to a deployed backend for fetching and posting content.
- ⚡ Uses Bootstrap for responsive design and layout.
- 🔄 Live route navigation between homepage and CMS panel.

---

## 🗂️ Project Structure

src/
├── components/
│ ├── HomePage.js # Homepage with dynamic heading and features
│ └── CmsPage.js # Admin CMS page to update the heading
├── App.js # Routing setup using react-router
├── index.js # Entry point
└── App.css # Optional custom styles


---

## 🔧 Tech Stack

| Frontend     | Backend       |
|--------------|---------------|
| React        | Express.js    |
| Bootstrap 5  | SQLite        |
| React Router | Node.js       |
| React Icons  |               |

---

## 🖥️ Components Overview

### `HomePage.js`
- Fetches the current heading from the backend.
- Displays it with a description and "Get Started" button.
- Includes 5 feature cards using icons from `react-icons`.

### `CmsPage.js`
- Text input to update the main heading.
- Submits the heading to the backend API via a `POST` request.
- Displays success or error messages.
- Includes a button that returns to the homepage.

### `App.js`
- Defines routes using `react-router-dom`:
  - `/` → `HomePage`
  - `/cms` → `CmsPage`

---

## 🚀 Getting Started

### 1. Clone the Repository

git clone https://github.com/your-username/brewex-frontend.git
cd frontend

2. Install Dependencies
npm install

3. Start the Development Server
npm start

| Method | Endpoint                                | Description              |
| ------ | --------------------------------------- | ------------------------ |
| GET    | `/heading`                              | Fetch the latest heading |
| POST   | `/heading` *(JSON body: `{ heading }`)* | Add/update the heading   |


Sample POST Body

{
  "heading": "Empower Your AI Strategy"
}
