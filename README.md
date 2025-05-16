# Todo 2 Web App

A modern, full-stack Todo application built with React, TypeScript, GraphQL, and Tailwind CSS. This frontend interfaces seamlessly with the [Todo 2 API Server](https://github.com/SaperZP/todo_2_server) to provide a robust task management experience.

## 🌐 Live Demo

[https://todo2-app.bilous.info](https://todo2-app.bilous.info)

## 🚀 Tech Stack

- **React**
- **TypeScript**
- **GraphQL**
- **Apollo Client**
- **Tailwind CSS**
- **React Hook Form**
- **Shadcn UI**

## 📦 Features

- Create, read, update, and delete todos
- Toggle completion status
- Responsive design for all devices
- Form validation with React Hook Form
- Styled with Tailwind CSS and Shadcn UI components

## 🛠 Installation

```bash
git clone https://github.com/SaperZP/todo_2.git
cd todo_2
npm install
```

## ⚙️ Environment Variables

Create a `.env` file in the root directory and add the following:

```env
REACT_APP_API_URL=https://todo2-api.bilous.info/graphql
```

## ▶️ Running the App

```bash
npm start
```

The app will run at `http://localhost:3000`.

## 🧪 Example Usage

- **View Todos**: See a list of all your tasks.
- **Add Todo**: Use the input form to add a new task.
- **Toggle Completion**: Click on a task to mark it as completed or not.
- **Delete Todo**: Remove a task from your list.

## 📁 Project Structure

```
todo_2/
├── public/
├── src/
│   ├── components/
│   ├── graphql/
│   ├── pages/
│   ├── styles/
│   ├── App.tsx
│   └── index.tsx
├── .env
├── package.json
└── tsconfig.json
```

## 📄 License

This project is licensed under the MIT License.

---

> Created by [Andriy Bilous](https://github.com/SaperZP)
