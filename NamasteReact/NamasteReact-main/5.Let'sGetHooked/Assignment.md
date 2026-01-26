# ⚛️ React – Exports, Configs & Hooks

---

## 📦 What is the difference between **Named Export**, **Default Export**, and **`* as` Export**?

### 🔹 **1️⃣ Named Export**

Named exports allow you to **export multiple variables or functions** from a file.
You must **import them with the exact same names** (use curly braces `{}`).

✅ **Example:**

```jsx
// utils.js
export const add = (a, b) => a + b;
export const subtract = (a, b) => a - b;
```

✅ **Import:**

```jsx
import { add, subtract } from "./utils";
```

> You can also rename them while importing:

```jsx
import { add as addition } from "./utils";
```

---

### 🔹 **2️⃣ Default Export**

Default export allows you to **export only one value** from a file.
While importing, you can give **any name** you want.

✅ **Example:**

```jsx
// message.js
const greet = () => "Hello React!";
export default greet;
```

✅ **Import:**

```jsx
import greetMessage from "./message";
```

> Default exports are common for components or single utilities.

---

### 🔹 **3️⃣ `* as` Export (Namespace Import)**

`* as` import allows you to **import all named exports from a module as an object**.

✅ **Example:**

```jsx
// utils.js
export const add = (a, b) => a + b;
export const multiply = (a, b) => a * b;
```

✅ **Import:**

```jsx
import * as Utils from "./utils";

console.log(Utils.add(2, 3)); // 5
console.log(Utils.multiply(2, 3)); // 6
```

> Useful when you want to group all exports under one namespace.

---

## ⚙️ What is the importance of **config.js** file?

The **`config.js`** file is used to store **configuration data** such as:

* API URLs
* Keys
* Constants
* Environment-specific variables

✅ **Example:**

```jsx
// config.js
export const API_URL = "https://api.example.com";
export const APP_NAME = "MyReactApp";
```

✅ **Usage:**

```jsx
import { API_URL } from "./config";
console.log(API_URL);
```

> This helps in centralizing configuration — making the app **easier to maintain, reusable, and scalable** across multiple environments (development, staging, production).

---

## 🪝 What are **React Hooks**?

**React Hooks** are **special functions** that let you “hook into” React features like **state**, **lifecycle**, and **context** in **functional components**.

> Before hooks, only class components could use state and lifecycle methods.

✅ **Common React Hooks:**

| Hook            | Purpose                                             |
| --------------- | --------------------------------------------------- |
| `useState()`    | Manage component state                              |
| `useEffect()`   | Handle side effects (API calls, DOM updates)        |
| `useContext()`  | Access context data                                 |
| `useRef()`      | Access DOM elements or persist values               |
| `useReducer()`  | Manage complex state logic                          |
| `useMemo()`     | Optimize performance with memoized values           |
| `useCallback()` | Memoize functions to prevent unnecessary re-renders |

✅ **Example:**

```jsx
import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);
  return (
    <button onClick={() => setCount(count + 1)}>Count: {count}</button>
  );
}
```

> Hooks make functional components **powerful, cleaner, and easier to test**.

---

## 💡 Why do we need a **useState Hook**?

`useState()` is a **React Hook** used to **add state** to a **functional component**.

* It allows your component to **remember values between renders**.
* Without it, functional components would be **stateless**.
* It returns a **pair**: the current state and a function to update it.

✅ **Syntax:**

```jsx
const [state, setState] = useState(initialValue);
```

✅ **Example:**

```jsx
function ToggleButton() {
  const [isOn, setIsOn] = useState(false);

  return (
    <button onClick={() => setIsOn(!isOn)}>
      {isOn ? "ON" : "OFF"}
    </button>
  );
}
```

✅ **Explanation:**

* `isOn` → current state variable
* `setIsOn` → function to update state
* `false` → initial value

> `useState` makes functional components **interactive and dynamic**, enabling React’s reactivity system.
