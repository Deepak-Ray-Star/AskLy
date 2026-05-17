# 🤖 AskLy
### AI-Powered Chat & Image Generation Platform

AskLy is a **full-stack AI web application** that lets users have intelligent conversations powered by **Google Gemini** and generate stunning **AI images** — all with a credit-based system, secure authentication, and a community gallery.

This project follows a **modular architecture** with separate folders for **Client** and **Server**, making it scalable and production-ready.

---

## 🌐 Live URL
🔗 [https://askly-nine.vercel.app/](https://askly-nine.vercel.app/)

---

## 🚀 Features

### 💬 AI Chat
- Text-based conversations powered by **Google Gemini 2.0 Flash**
- Persistent chat history with multiple chat sessions
- Create, switch, and delete chats from the sidebar
- Markdown rendering with syntax highlighting (PrismJS)
- Dark / Light theme toggle

### 🎨 AI Image Generation
- Generate images from text prompts via **ImageKit AI**
- Images stored and served through **ImageKit CDN**
- Option to publish generated images to the Community gallery

### 🏘️ Community Gallery
- Browse AI-generated images published by all users
- Public gallery visible to all logged-in users

### 💳 Credit System & Payments
- Credit-based usage: **1 credit** per text message, **2 credits** per image
- Three subscription plans: **Basic**, **Pro**, **Premium**
- Secure online payments via **Stripe**
- Webhook-based payment verification and credit top-up

### 🔐 Authentication & Security
- JWT-based user authentication
- Protected API routes with auth middleware
- Token stored in localStorage, sent via Authorization header

---

## 🗂️ Project Structure

```
AskLy/
│
├── client/               # React Frontend (Vite)
│   ├── src/
│   │   ├── components/   # Sidebar, ChatBox, Message
│   │   ├── pages/        # Login, Credits, Community, Loading
│   │   ├── context/      # AppContext (global state)
│   │   └── assets/       # Icons, images, styles
│   └── vercel.json
│
├── server/               # Node.js Backend
│   ├── configs/          # DB, ImageKit, OpenAI/Gemini config
│   ├── controllers/      # Chat, Message, User, Credit, Webhook
│   ├── middlewares/      # JWT Auth middleware
│   ├── models/           # User, Chat, Transaction schemas
│   ├── routes/           # API route definitions
│   └── server.js
│
└── README.md
```

---

## 🎨 Frontend (Client)

### Tech Stack
- React.js 19
- Vite
- Tailwind CSS v4
- Axios
- React Router DOM v7
- React Hot Toast
- React Markdown
- PrismJS (syntax highlighting)
- Moment.js

### Key Features
- Login / Register UI
- Sidebar with chat list and new chat creation
- ChatBox with streaming-style message display
- Markdown + code block rendering
- Dark/Light theme (persisted in localStorage)
- Credits purchase page with plan cards
- Community image gallery page

### Run Client
```bash
cd client
npm install
npm run dev
```

### Client Environment Variables (.env)
```
VITE_SERVER_URL=your_backend_url
```

---

## 🧠 Backend (Server)

### Tech Stack
- Node.js
- Express.js
- MongoDB & Mongoose
- JWT
- Google Gemini 2.0 Flash (via OpenAI-compatible SDK)
- ImageKit (AI image generation + CDN storage)
- Stripe (payments)
- dotenv

### API Endpoints

| Method | Route | Description |
|--------|-------|-------------|
| POST | `/api/user/register` | Register new user |
| POST | `/api/user/login` | Login user |
| GET | `/api/user/data` | Get logged-in user data |
| GET | `/api/chat/create` | Create a new chat |
| GET | `/api/chat/get` | Get all chats of user |
| POST | `/api/chat/rename` | Rename a chat |
| POST | `/api/chat/delete` | Delete a chat |
| POST | `/api/message/text` | Send a text message (AI reply) |
| POST | `/api/message/image` | Generate an AI image |
| GET | `/api/credit/plans` | Get all credit plans |
| POST | `/api/credit/purchase` | Purchase a plan via Stripe |
| POST | `/api/stripe/webhook` | Stripe payment webhook |

### Run Server
```bash
cd server
npm install
npm run server
```

### Server Environment Variables (.env)
```
PORT=5000
MONGO_URI=your_mongodb_url
JWT_SECRET=your_secret_key
GEMINI_API_KEY=your_gemini_api_key
IMAGEKIT_PUBLIC_KEY=your_imagekit_public_key
IMAGEKIT_PRIVATE_KEY=your_imagekit_private_key
IMAGEKIT_URL_ENDPOINT=your_imagekit_url_endpoint
STRIPE_SECRET_KEY=your_stripe_secret_key
STRIPE_WEBHOOK_SECRET=your_stripe_webhook_secret
```

---

## 💰 Credit Plans

| Plan | Price | Credits | Text Generations | Image Generations |
|------|-------|---------|-----------------|------------------|
| Basic | $10 | 100 | 100 | 50 |
| Pro | $20 | 500 | 500 | 200 |
| Premium | $30 | 1000 | 1000 | 500 |

> Text message = 1 credit &nbsp;|&nbsp; Image generation = 2 credits

---

## ☁️ Deployment

| Service | Platform |
|---------|----------|
| Frontend | Vercel |
| Backend | Vercel (serverless) |
| Database | MongoDB Atlas |
| Image Storage | ImageKit CDN |
| Payments | Stripe |

---

## 🧭 Future Enhancements

- Chat message search
- Export chat history as PDF
- Image generation history page
- Regenerate / edit AI responses
- Social features (likes, comments on community images)
- Usage analytics dashboard

---

## 👨‍💻 Author

**Deepak Ray** <br>
B.Tech Computer Science Engineering (Final Year)<br>
Full-Stack Developer | MERN Stack<br>

[![LinkedIn](https://img.shields.io/badge/LinkedIn-%230077B5.svg?logo=linkedin&logoColor=white)](https://www.linkedin.com/in/deepak-ray-842991260/)
[![Gmail](https://img.shields.io/badge/Gmail-D14836?logo=gmail&logoColor=white)](https://mail.google.com/mail/?view=cm&to=deepakray262003@gmail.com)

---

## 📜 License
This project is licensed under the MIT License.
