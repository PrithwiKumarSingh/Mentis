<div align="center">

# 🧠 Mentis

### Your Intelligent Second Brain for the Internet

Store. Organize. Discover. Share.

A modern, open-source knowledge management platform that helps you capture articles, videos, tweets, documents, and web links in one place. Built with scalability, performance, and developer experience in mind.

<p align="center">
  <a href="#-features">Features</a> •
  <a href="#-architecture">Architecture</a> •
  <a href="#-getting-started">Getting Started</a> •
  <a href="#-project-structure">Project Structure</a> •
  <a href="#-api-overview">API</a> •
  <a href="#-deployment">Deployment</a> •
  <a href="#-contributing">Contributing</a>
</p>

---

</div>

# 📖 Overview

Mentis is an open-source **Second Brain** platform that allows users to save valuable content from across the internet and access it whenever needed.

Instead of bookmarking hundreds of tabs that eventually get lost, Mentis creates a centralized personal knowledge base where everything remains searchable, organized, and accessible.

Whether it's:

- 📄 Technical Articles
- 🎥 YouTube Videos
- 🐦 Tweets
- 🌐 Websites
- 📚 Documentation
- 💼 Resources
- 📝 Notes

Mentis helps users build their own digital memory.

Designed with modern engineering practices, Mentis follows a scalable architecture using the MERN stack and focuses on clean UI, performance, maintainability, and developer experience.

---

# ✨ Features

## Authentication

- Google OAuth Authentication
- Secure JWT Authentication
- HTTP Only Cookies
- Persistent Login Sessions
- Protected Routes

---

## Content Management

Save internet resources with rich metadata.

Supported content includes:

- Articles
- Videos
- Tweets
- Websites
- Documents
- Notes
- Custom Links

Each content automatically stores:

- Title
- Description
- Preview Image
- URL
- Category
- Created Date

---

## Rich Preview Cards

Instead of showing plain URLs, Mentis displays visually rich cards containing:

- Website title
- OpenGraph image
- Description
- Source URL
- Content Type

---

## Share Your Brain

Generate a unique public share link and allow others to browse your curated collection.

Perfect for:

- Developers
- Students
- Researchers
- Teams
- Creators

---

## Trash System

Deleted content isn't permanently removed immediately.

Features include:

- Soft Delete
- Restore Capability (Future)
- Auto Cleanup Support
- Safe Deletion Workflow

---

## Responsive Design

Optimized for:

- Desktop
- Tablet
- Mobile

---

## Beautiful UI

Modern interface built with:

- Tailwind CSS
- Framer Motion
- Clean Typography
- Smooth Animations
- Dark Mode

---

## Performance Focused

Mentis is designed with production scalability in mind.

Performance optimizations include:

- Lazy Loading
- Component Splitting
- Optimized Rendering
- API Caching Ready
- Database Indexing
- Efficient React State Management

---

## Developer Friendly

- TypeScript
- Clean Folder Structure
- Reusable Components
- Environment Configuration
- REST API
- Modular Architecture

---

# 🏗 Architecture

```
                ┌─────────────────────────┐
                │        Browser          │
                └────────────┬────────────┘
                             │
                             ▼
                  React + TypeScript Client
                             │
                   Axios REST Requests
                             │
                             ▼
                  Express.js Backend API
                             │
            ┌────────────────┴──────────────┐
            │                               │
            ▼                               ▼
      Google OAuth                    JWT Authentication
            │                               │
            └──────────────┬────────────────┘
                           ▼
                     Business Logic
                           │
                           ▼
                      MongoDB Database
```

---

# ⚙ Tech Stack

## Frontend

- React
- TypeScript
- Vite
- Tailwind CSS
- Framer Motion
- Axios
- React Router
- Lucide Icons

---

## Backend

- Node.js
- Express.js
- TypeScript
- MongoDB
- Mongoose
- Passport.js
- Google OAuth
- JWT
- Cookie Parser

---

## Database

MongoDB

---

## Deployment

Frontend

- Vercel

Backend

- Railway

Database

- MongoDB Atlas

---

# 📂 Project Structure

```
Mentis/

├── client/
│
│   ├── src/
│   │
│   ├── components/
│   ├── pages/
│   ├── hooks/
│   ├── context/
│   ├── utils/
│   ├── assets/
│   ├── config/
│   └── App.tsx
│
│
├── server/
│
│   ├── src/
│   │
│   ├── controllers/
│   ├── routes/
│   ├── middleware/
│   ├── models/
│   ├── services/
│   ├── config/
│   ├── utils/
│   ├── types/
│   └── index.ts
│
├── README.md
├── package.json
└── .env.example
```

---

# 🚀 Getting Started

## Clone Repository

```bash
git clone https://github.com/your-org/mentis.git
```

```bash
cd mentis
```

---

## Install Dependencies

Frontend

```bash
cd client

npm install
```

Backend

```bash
cd server

npm install
```

---

## Environment Variables

### Client

```env
VITE_BACKEND_URL=http://localhost:3000
```

---

### Server

```env
PORT=3000

MONGO_URI=

JWT_SECRET=

GOOGLE_CLIENT_ID=

GOOGLE_CLIENT_SECRET=

GOOGLE_CALLBACK_URL=

FRONTEND_URL=http://localhost:5173
```

---

## Run Development Server

Backend

```bash
npm run dev
```

Frontend

```bash
npm run dev
```

---

Open

```
http://localhost:5173
```

---

# 🔄 Application Workflow

## 1. User Authentication

```
User

↓

Google Login

↓

OAuth Verification

↓

JWT Created

↓

Cookie Stored

↓

Dashboard
```

---

## 2. Save Content

```
Paste URL

↓

Fetch Metadata

↓

Validate Request

↓

Store in MongoDB

↓

Render Beautiful Card
```

---

## 3. Share Brain

```
User

↓

Generate Share Link

↓

Unique Hash Created

↓

Public URL Generated

↓

Anyone Can View
```

---

## 4. Delete Content

```
Delete

↓

Move to Trash

↓

Hide from Dashboard

↓

Permanent Cleanup (Optional)
```

---

# 🔒 Security

Mentis follows modern web security practices.

- JWT Authentication
- Protected APIs
- HTTP Only Cookies
- CORS Configuration
- Secure Environment Variables
- Input Validation
- MongoDB Injection Prevention
- Password-less Authentication
- Request Validation

---

# 📡 API Overview

## Authentication

```
GET    /auth/google
GET    /auth/google/callback
GET    /auth/logout
```

---

## User

```
GET    /api/user
```

---

## Content

```
GET      /api/content

POST     /api/content

DELETE   /api/content/:id

PATCH    /api/content/:id
```

---

## Share

```
POST     /api/share

GET      /api/share/:hash
```

---

## Trash

```
GET      /api/trash

DELETE   /api/trash/:id
```

---

# 📈 Future Roadmap

## AI

- AI Summaries
- AI Search
- Smart Recommendations
- Semantic Search
- Chat with Your Knowledge Base

---

## Productivity

- Tags
- Collections
- Folder Organization
- Favorites
- Archive
- Bulk Actions

---

## Collaboration

- Team Workspace
- Shared Collections
- Comments
- Permissions
- Invitations

---

## Search

- Full Text Search
- Filters
- Advanced Search
- Search History

---

## Performance

- Redis Cache
- CDN Support
- Image Optimization
- Queue Workers
- Background Jobs

---

## Integrations

- Notion
- GitHub
- X (Twitter)
- Reddit
- LinkedIn
- Slack
- Discord
- RSS

---

# 🤝 Contributing

We welcome contributions from developers around the world.

## How to Contribute

1. Fork the repository

2. Create a feature branch

```bash
git checkout -b feature/amazing-feature
```

3. Commit your changes

```bash
git commit -m "feat: add amazing feature"
```

4. Push your branch

```bash
git push origin feature/amazing-feature
```

5. Open a Pull Request

Please ensure:

- Clean code
- Proper documentation
- Type safety
- Tested functionality
- Meaningful commit messages

---

# 🧪 Development Principles

Mentis follows modern software engineering practices.

- Clean Architecture
- Modular Components
- SOLID Principles
- RESTful APIs
- Type Safety
- Reusable Code
- Performance First
- Accessibility
- Responsive Design

---

# 💡 Why Mentis?

Modern professionals consume enormous amounts of information every day.

Traditional browser bookmarks become cluttered and impossible to organize.

Mentis solves this problem by transforming scattered internet resources into a structured, searchable, and shareable knowledge base.

Whether you're a developer saving documentation, a student collecting study material, or a researcher organizing references, Mentis becomes your personal digital memory.

---

# ❤️ Support

If you find this project useful, consider supporting it by:

- ⭐ Starring the repository
- 🍴 Forking the project
- 🐛 Reporting bugs
- 💡 Suggesting new features
- 🤝 Contributing code

---

# 📜 License

This project is licensed under the MIT License.

See the LICENSE file for more information.

---

<div align="center">

## Build your second brain.

**Organize knowledge. Never lose information again.**

Made with ❤️ by the Mentis Community

</div>