# ⚛️ React – Routing & Class Component Lifecycle

---

## 🧭 How do you create **Nested Routes** in `react-router-dom` configuration?

**Nested Routes** allow you to define routes **inside other routes**, enabling hierarchical layouts (like a Dashboard → Settings → Profile).

✅ **Example:**

```jsx
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AppLayout from "./AppLayout";
import Home from "./Home";
import About from "./About";
import Profile from "./Profile";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="profile" element={<Profile />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
```

✅ **AppLayout.jsx**

```jsx
import { Outlet, Link } from "react-router-dom";

function AppLayout() {
  return (
    <div>
      <nav>
        <Link to="/">🏠 Home</Link> | <Link to="/about">ℹ️ About</Link> | <Link to="/profile">👤 Profile</Link>
      </nav>
      <Outlet /> {/* 👈 renders nested route here */}
    </div>
  );
}

export default AppLayout;
```

> 🔹 The `<Outlet />` acts as a placeholder where the **child routes** will render.

---

## 📚 Read about `createHashRouter` and `createMemoryRouter`

### 🔹 `createHashRouter`

Used when you **don’t have control over the server** (like GitHub Pages).
It uses the **hash (#)** part of the URL to simulate a full URL so that the page **won’t reload** on navigation.

✅ **Example:**

```
https://myapp.com/#/about
```

✅ **Usage:**

```jsx
import { createHashRouter, RouterProvider } from "react-router-dom";
const router = createHashRouter([
  { path: "/", element: <App /> },
  { path: "about", element: <About /> },
]);
```

---

### 🔹 `createMemoryRouter`

Used for **testing** or **non-browser environments** (like React Native).
It keeps track of the history **in memory**, not in the browser’s address bar.

✅ **Usage:**

```jsx
import { createMemoryRouter, RouterProvider } from "react-router-dom";

const router = createMemoryRouter([
  { path: "/", element: <Home /> },
  { path: "/test", element: <Test /> },
]);
```

> 💡 Great for unit tests where you simulate navigation without actual URLs.

---

## 🔁 What is the **order of lifecycle method calls** in Class-Based Components?

Here’s the lifecycle order for **Mounting**, **Updating**, and **Unmounting**:

| Phase          | Lifecycle Methods (in order)                                                                                                        |
| -------------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| **Mounting**   | `constructor()` → `static getDerivedStateFromProps()` → `render()` → `componentDidMount()`                                          |
| **Updating**   | `static getDerivedStateFromProps()` → `shouldComponentUpdate()` → `render()` → `getSnapshotBeforeUpdate()` → `componentDidUpdate()` |
| **Unmounting** | `componentWillUnmount()`                                                                                                            |

---

## 🧱 Why do we use **componentDidMount()?**

`componentDidMount()` is a **lifecycle method** called **after the component is mounted** (inserted into the DOM).
It’s used for:

✅ **Purposes:**

* Fetching data from APIs
* Subscribing to events
* Manipulating the DOM

✅ **Example:**

```jsx
class User extends React.Component {
  state = { users: [] };

  componentDidMount() {
    fetch("https://api.example.com/users")
      .then(res => res.json())
      .then(data => this.setState({ users: data }));
  }

  render() {
    return <ul>{this.state.users.map(u => <li key={u.id}>{u.name}</li>)}</ul>;
  }
}
```

> Runs **once** after the component appears in the DOM — similar to `useEffect(() => {}, [])` in functional components.

---

## 🧹 Why do we use **componentWillUnmount()?**

Show with example.

`componentWillUnmount()` is called **right before the component is removed** from the DOM.

✅ **Purpose:**

* Clean up timers, subscriptions, or listeners
* Prevent memory leaks

✅ **Example:**

```jsx
class Timer extends React.Component {
  componentDidMount() {
    this.interval = setInterval(() => console.log("Tick"), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval); // ✅ cleanup
    console.log("Timer stopped");
  }

  render() {
    return <h2>⏰ Timer Running</h2>;
  }
}
```

> Equivalent to cleanup function in `useEffect`:

```jsx
useEffect(() => {
  const id = setInterval(() => console.log("Tick"), 1000);
  return () => clearInterval(id);
}, []);
```

---

## 🧩 Why do we use **super(props)** in constructor?

In class-based components, `super(props)` is required to:

1. Call the **parent class’s constructor (`React.Component`)**
2. Allow access to `this.props` inside the constructor.

✅ **Example:**

```jsx
class App extends React.Component {
  constructor(props) {
    super(props); // ✅ Must call before using 'this'
    console.log(this.props);
  }

  render() {
    return <h1>Hello {this.props.name}</h1>;
  }
}
```

> If you don’t call `super(props)`, `this` will be **undefined** inside the constructor.

---

## ⚠️ Why can't we have the **callback function of useEffect async?**

You **cannot** make the callback of `useEffect` itself async because:

* `useEffect` expects either **nothing** or a **cleanup function** as its return value.
* An `async` function **always returns a Promise**, which React would misinterpret as a cleanup function.

**❌ Wrong:**

```jsx
useEffect(async () => {
  const data = await fetchData();
  setData(data);
}, []);
```

**✅ Correct:**
Use an **async function inside** the effect:

```jsx
useEffect(() => {
  async function fetchDataAsync() {
    const data = await fetchData();
    setData(data);
  }
  fetchDataAsync();
}, []);
```

> This ensures React receives the correct cleanup behavior and doesn’t confuse Promises with unmount logic.

React Life Cycle Method Diagram -
https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/
