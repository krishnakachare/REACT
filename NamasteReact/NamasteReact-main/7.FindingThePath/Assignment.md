# ⚛️ React – Images, Hooks & Routing

---

## 🖼️ What are various ways to **add images into our App**?

There are multiple ways to include images in a React app depending on how and where they are stored.

---

### 🔹 **1️⃣ Importing Image Directly**

You can import the image and use it like a variable inside JSX.

✅ **Example:**

```jsx
import React from "react";
import logo from "./logo.png"; // Image in src folder

function App() {
  return <img src={logo} alt="App Logo" />;
}

export default App;
```

> The image will be processed by Webpack and optimized automatically.

---

### 🔹 **2️⃣ Using Public Folder**

If you place the image in the `public` folder, you can refer to it using a relative path from the public root.

✅ **Example:**

```jsx
function App() {
  return <img src="/images/logo.png" alt="Public Logo" />;
}
```

> Images inside `public/` are not processed by Webpack — they’re served as static assets.

---

### 🔹 **3️⃣ Using URL from Web**

✅ **Example:**

```jsx
function App() {
  return (
    <img 
      src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
      alt="React Logo"
    />
  );
}
```

> Useful for using images hosted on external servers or CDNs.

---

### 🔹 **4️⃣ Using `require()`**

✅ **Example:**

```jsx
function App() {
  return <img src={require("./assets/logo.png")} alt="Required Logo" />;
}
```

> Works similarly to import, especially helpful when loading images dynamically.

---

## 🧠 What would happen if we do

`console.log(useState())` ?

If you log `useState()` directly, it will **return an array** with **two elements**:

1. The **current state value** (initially `undefined` if no default value is provided)
2. A **function** to update that state.

✅ **Example:**

```jsx
import { useState } from "react";

function App() {
  console.log(useState());
  return <h1>Check Console</h1>;
}
```

🧾 **Output:**

```
[undefined, ƒ]
```

If you pass an initial value:

```jsx
console.log(useState("React"));
```

🧾 **Output:**

```
["React", ƒ]
```

> You should **not call useState() outside** a React component or hook — doing so causes an **Invalid Hook Call** error.

---

## 🔁 How will **useEffect** behave if we **don’t add a dependency array**?

If no dependency array (`[]`) is passed, the `useEffect` hook will run **after every render** of the component — including **initial render** and **after every state/prop update**.

✅ **Example:**

```jsx
useEffect(() => {
  console.log("useEffect called!");
});
```

🧾 **Output:**

```
useEffect called!
useEffect called!
useEffect called!
...
```

> ⚠️ This can cause **infinite loops** if your `useEffect` updates state inside it.
> Always add dependencies (like `[count]` or `[]`) to control re-runs.

---

## 🧭 What is **SPA (Single Page Application)?**

A **Single Page Application (SPA)** is a **web application that loads a single HTML page** and dynamically updates the content as the user interacts with the app — without reloading the entire page.

✅ **Example:** React, Angular, Vue apps are SPAs.

✅ **How It Works:**

* Loads `index.html` once.
* React Router handles navigation on the **client side**.
* Fetches only **data**, not new HTML pages, on route change.

> SPA = Faster navigation + better user experience.

---

## 🌍 Difference between **Client-Side Routing** and **Server-Side Routing**

| Feature          | **Client-Side Routing**            | **Server-Side Routing**          |
| ---------------- | ---------------------------------- | -------------------------------- |
| **Handled By**   | Browser (React Router)             | Web Server                       |
| **Page Reloads** | ❌ No reload                        | ✅ Reloads entire page            |
| **Performance**  | Faster (loads once)                | Slower (new page each time)      |
| **SEO**          | Harder (content loads dynamically) | Easier (HTML rendered by server) |
| **Example**      | React Router, Vue Router           | Express.js, PHP, Django routes   |

✅ **Example (Client Side with React Router):**

```jsx
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import About from "./About";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}
```

> In **Client Side Routing**, the browser history changes but React dynamically renders components — no full page reload happens.
