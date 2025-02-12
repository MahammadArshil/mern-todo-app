# 📝 MERN Todo App

A powerful, full-stack **Todo App** built using the **MERN** stack (**MongoDB, Express.js, React, and Node.js**). Stay organized and manage your tasks effortlessly! 🚀

## 📌 Features
✅ **Add, Edit, Delete, and Mark tasks as completed**  
✅ **Beautiful and Responsive UI**  
✅ **Real-time Updates** 
---

## 🚀 Getting Started
Follow these steps to set up and run the project locally:

### 📂 1. Clone the Repository
```sh
 git clone https://github.com/mahammadarshil/mern-todo-app.git
 cd mern-todo-app
```

### 🏗 2. Install Dependencies
Run the following commands inside both `frontend/` and `backend/` folders:
```sh
 cd backend
 npm install | npm i
```
```sh
 cd frontend
 npm install | npm i
```

### 🔑 3. Configure MongoDB Connection
In the `backend/` folder, open the `server.js` file and update the MongoDB URI:
```js

...
mongoose.connect("<your_mongodb_connection_string>")
    .then(() => console.log("MongoDB Connected"))
    .catch(err => console.log(err));
...
```

### ▶️ 4. Run the App
Open **two terminals**, one for the backend and one for the frontend.

#### Start Backend Server 🌍
```sh
 cd backend
 npm start
```

#### Start Frontend React App 🎨
```sh
 cd frontend
 npm run dev
```
---


## 🛠 Tech Stack
- **Frontend:** React.js (Vite), TailwindCSS
- **Backend:** Node.js, Express.js, MongoDB

---

## 📬 Contact
📧 Email: mahammadarshil007@gmail.com
🔗 LinkedIn: [Mahammad Arshil Vahora](https://www.linkedin.com/in/yourprofile)  

---

Made with ❤️ by **Mahammad Arshil Vahora** 🚀
