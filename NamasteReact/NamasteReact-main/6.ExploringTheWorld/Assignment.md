# ⚛️ React & JavaScript – Advanced Concepts

---

## 🧩 What is a **Microservice**?

A **Microservice** is an **architectural style** that structures an application as a collection of **small, independent services**.
Each service is responsible for a **specific functionality** and communicates with others through **APIs**.

✅ **Key Features:**

* Each service runs in its own process
* Can be developed, deployed, and scaled **independently**
* Improves **maintainability and fault isolation**

> Example: In an e-commerce app — user service, payment service, and inventory service can all be separate microservices.

---

## 🏗️ What is **Monolith Architecture**?

A **Monolith Architecture** is a **single, unified codebase** where all the components of an application (UI, business logic, database) are **tightly coupled** and deployed together.

✅ **Characteristics:**

* Easier to develop initially
* Harder to scale and maintain as the app grows
* A single deployment unit (if one module fails, the whole system may go down)

---

## ⚖️ Difference between **Monolith** and **Microservice**

| Feature              | Monolith                         | Microservice                            |
| -------------------- | -------------------------------- | --------------------------------------- |
| **Structure**        | Single, large application        | Multiple small, independent services    |
| **Deployment**       | Deployed as one unit             | Deployed independently                  |
| **Scalability**      | Hard to scale specific parts     | Easily scalable per service             |
| **Technology Stack** | Same for entire app              | Different stacks for different services |
| **Maintenance**      | Becomes complex with size        | Easier due to modularity                |
| **Failure Impact**   | One failure affects whole system | Isolated failures                       |

---

## 🪝 Why do we need a **useEffect Hook**?

The `useEffect()` hook lets you **perform side effects** in functional components — such as:

* Fetching data from APIs
* Updating the DOM manually
* Setting up subscriptions or timers

✅ **Syntax:**

```jsx
useEffect(() => {
  // Side effect code here
  return () => {
    // Cleanup code (optional)
  };
}, [dependencies]);
```

✅ **Example:**

```jsx
useEffect(() => {
  console.log("Component Mounted!");
}, []);
```

> `useEffect` replaces lifecycle methods like `componentDidMount`, `componentDidUpdate`, and `componentWillUnmount` in class components.

---

## 🔗 What is **Optional Chaining**?

**Optional Chaining (`?.`)** allows you to **safely access nested object properties** without throwing an error if an intermediate property doesn’t exist.

✅ **Example:**

```jsx
const user = {
  profile: {
    name: "John"
  }
};

console.log(user?.profile?.name); // ✅ John
console.log(user?.address?.city); // ✅ undefined (no error)
```

> Prevents runtime errors like *“Cannot read property of undefined”*.

---

## 💨 What is **Shimmer UI**?

**Shimmer UI** (or Skeleton UI) is a **loading placeholder** that mimics the layout of the final UI.
It gives users a sense of content structure while data is being fetched.

✅ **Example:**
You might see **gray boxes or animated gradients** resembling text or images before the actual data loads.

> Improves **user experience** by avoiding blank screens during loading.

---

## 🧮 Difference between **JS Expression** and **JS Statement**

| Type           | Description        | Example                                        |
| -------------- | ------------------ | ---------------------------------------------- |
| **Expression** | Produces a value   | `3 + 5`, `"Hello"`, `x * 2`                    |
| **Statement**  | Performs an action | `if() {}`, `for() {}`, `return`, `let x = 10;` |

✅ **In JSX:**
You can use **expressions**, but not **statements**.

```jsx
// ✅ Allowed
<p>{5 + 10}</p>

// ❌ Not Allowed
<p>{if (true) { "Yes" }}</p>
```

---

## 🧠 What is **Conditional Rendering**?

**Conditional Rendering** means **rendering different UI elements** based on certain conditions.

✅ **Example:**

```jsx
function UserGreeting({ isLoggedIn }) {
  return (
    <div>
      {isLoggedIn ? <h2>Welcome Back!</h2> : <h2>Please Log In</h2>}
    </div>
  );
}
```

> Uses ternary operators or logical `&&` for clean conditional UI updates.

---

## 🌐 What is **CORS**?

**CORS (Cross-Origin Resource Sharing)** is a **security mechanism** that allows or restricts web applications from making requests to a **different domain** than their origin.

✅ **Example:**
A frontend at `http://localhost:3000` tries to fetch data from `https://api.example.com`.

The browser checks if the API includes a header like:

```
Access-Control-Allow-Origin: *
```

> If not, the request will be **blocked** due to same-origin policy.

---

## ⚙️ What is **async** and **await**?

`async` and `await` are keywords in JavaScript used to handle **asynchronous operations** more cleanly than Promises.

✅ **Example:**

```jsx
async function fetchData() {
  const response = await fetch("https://api.example.com");
  const data = await response.json();
  console.log(data);
}
```

* `async` makes a function return a **Promise**
* `await` pauses the function until the Promise **resolves**

> Simplifies asynchronous code and makes it **readable and sequential**.

---

## 💾 What is the use of

`const json = await data.json();`
in **getRestaurants()**?

In an async function like `getRestaurants()`, the line:

```jsx
const json = await data.json();
```

is used to:

1. Wait for the **response body** to be read completely.
2. Parse the **response stream** into a **JSON object**.

✅ **Example:**

```jsx
const getRestaurants = async () => {
  const data = await fetch(API_URL);
  const json = await data.json();
  console.log(json);
};
```

> Without `await`, it would return a **Promise**, not the actual JSON data.
