
# 🌐 Knowvia – Knowledge Sharing Platform

**Knowvia** is an advanced full-stack web application built using the MERN stack — MongoDB for database management, Express.js for backend routing and APIs, React for a dynamic and responsive frontend user interface, and Node.js as the server environment. This platform is meticulously designed to empower users to publish, edit, and manage a wide range of articles, creating a thriving community centered around knowledge sharing and collaboration.

Through Knowvia, users can easily contribute their expertise, explore diverse topics, and engage with high-quality content curated by the community. The application fosters an interactive environment where knowledge exchange is seamless, intuitive, and secure. Its user-centric design ensures that contributors have full control over their content lifecycle — from drafting and updating articles to managing comments and receiving feedback.

Moreover, Knowvia implements modern web technologies and best practices to guarantee fast performance, scalability, and robust security, making it an ideal platform for both casual writers and professional content creators seeking to share their insights with a wider audience.



---

## 🔗 Live & Source Links

- 🔴 **Live Site (Frontend):** [Knowvia Live](https://knowvia-bd.web.app)
- 🟢 **Source Code (Frontend):** [GitHub Repo - Client](https://github.com/ismail-dev-code/knowvia-client)
- ⚙️ **Source Code (Backend):** [GitHub Repo - Server](https://github.com/ismail-dev-code/knowvia-server)

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

All endpoints start with: `https://knowvia-server.vercel.app`

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



## 📫 Contact

- If you have any questions or feedback, feel free to reach out:


**Author:** Ismail  
**Email:** hm.ismail772@gmail.com  
**GitHub:** [@ismail-dev-code](https://github.com/ismail-dev-code)






