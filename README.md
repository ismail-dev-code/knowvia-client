
# 🌐 Knowvia – Knowledge Sharing Platform

**Knowvia** is a full-stack MERN (MongoDB, Express.js, React, Node.js) web application designed to allow users to publish, edit, and manage articles — encouraging a culture of knowledge sharing.

This project was built as part of the [Programming Hero Web Development](https://github.com/ProgrammingHero1) and demonstrates a complete CRUD application using modern frontend and backend technologies.

---

## 🔗 Live & Source Links

- 🔴 **Live Site (Frontend):** [Knowvia Live](https://knowvia-bd.web.app)
- 🟢 **Source Code (Frontend):** [GitHub Repo - Client](https://github.com/Programming-Hero-Web-Course4/b11a11-client-side-ismail-dev-code)
- ⚙️ **Source Code (Backend):** [GitHub Repo - Server](https://github.com/Programming-Hero-Web-Course4/b11a11-server-side-ismail-dev-code)

---

## ✨ Features

### ✅ General Features

- User registration & login
- JWT authentication & authorization
- Create, read, update, and delete (CRUD) articles
- Rich text editing using Jodit Editor
- Article like and comment system
- Real-time UI feedback with Toasts & Alerts
- Fully responsive & mobile-friendly UI

### 💡 Advanced Features

- Token-based secure route protection
- Modal-based update & delete confirmation
- Toasts and modals for user feedback
- Animation integration with Lottie & Framer Motion
- Firebase integration for future-proofing authentication

---

## 🛠️ Technologies Used

### Frontend
- React 19
- Vite
- React Router v7
- Tailwind CSS
- DaisyUI
- Jodit React
- Axios
- Framer Motion
- SweetAlert2
- React Toastify
- Firebase
- Leaflet.js (map-based UI)
- Lottie (for UI animations)

### Backend
- Node.js
- Express.js
- MongoDB
- Mongoose
- JSON Web Tokens (JWT)
- Dotenv
- CORS

---

## 📚 API Endpoints

All endpoints start with: `http://localhost:3000`

### 🔐 Authentication
| Method | Endpoint      | Description                          |
|--------|---------------|--------------------------------------|
| POST   | `/jwt`        | Generate JWT from Firebase user email |

---

### 📄 Articles
| Method | Endpoint              | Description                       |
|--------|-----------------------|-----------------------------------|
| POST   | `/articles`           | Create a new article (JWT)        |
| GET    | `/articles`           | Get all articles (optional `?category=...`) |
| GET    | `/articles/:id`       | Get single article by ID          |
| PATCH  | `/articles/:id`       | Update article by ID (JWT)        |
| DELETE | `/articles/:id`       | Delete article and its comments (JWT) |
| GET    | `/myArticles`         | Get articles by logged-in user (JWT) |

---

### ❤️ Likes
| Method | Endpoint                | Description                            |
|--------|-------------------------|----------------------------------------|
| PATCH  | `/like/:articleId`      | Like or Unlike an article              |

---

### 💬 Comments
| Method | Endpoint                           | Description                                      |
|--------|------------------------------------|--------------------------------------------------|
| POST   | `/articles/:id/comments`           | Add a comment to an article                     |
| GET    | `/comments/:articleId`             | Get all nested comments for an article          |
| GET    | `/comments/recent`                 | Get 10 most recent comments                     |

---

### 🔔 Notifications
| Method | Endpoint                  | Description                             |
|--------|---------------------------|-----------------------------------------|
| GET    | `/notifications/counts`   | Get total likes and comments for user's articles (JWT) |

---

## 🧪  `.env` (Backend)

```env
PORT=5000
DB_USER=your_db_username
DB_PASS=your_db_password
JWT_SECRET_KEY=your_secret

--- 

```

## 📫 Contact

- If you have any questions or feedback, feel free to reach out:


**Author:** Ismail  
**Email:** hm.ismail772@gmail.com  
**GitHub:** [@ismail-dev-code](https://github.com/ismail-dev-code)






