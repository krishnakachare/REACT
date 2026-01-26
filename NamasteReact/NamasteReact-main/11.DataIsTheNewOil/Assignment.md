# ⚛️ React State & Context Concepts

---

## 🔽 **What is Prop Drilling?**

**Definition:**
👉 Prop Drilling is the process of passing data from a **parent component** to a **deeply nested child component** through **multiple layers of intermediate components**, even if those intermediate components don’t need the data themselves.

**Problem:**
It makes code **harder to maintain** and **less scalable**, especially in large applications.


**Example:**

```jsx
function App() {
  const user = "John Doe";
  return <Parent user={user} />;
}

function Parent({ user }) {
  return <Child user={user} />;
}

function Child({ user }) {
  return <GrandChild user={user} />;
}

function GrandChild({ user }) {
  return <h1>Hello, {user}!</h1>;
}
```

> 🧩 Here, the `user` prop is **drilled** through every level until it reaches `GrandChild`.

**Solution:** Use **Context API** or **State Management libraries (like Redux, Zustand)**.

---

## 🆙 **What is Lifting the State Up?**

**Definition:**
When **two or more components** need to share the same state, the state should be **moved up (lifted)** to their **closest common ancestor**.

This allows both components to access and update the same state consistently.

**Example:**

```jsx
function Parent() {
  const [count, setCount] = useState(0);
  return (
    <>
      <ChildA count={count} />
      <ChildB setCount={setCount} />
    </>
  );
}

function ChildA({ count }) {
  return <h1>Count: {count}</h1>;
}

function ChildB({ setCount }) {
  return <button onClick={() => setCount(c => c + 1)}>Increment</button>;
}
```

> 💡 The state is **lifted to the Parent**, so both children can use and modify it.

---

## 🌐 **What is Context Provider and Context Consumer?**

The **React Context API** is used to avoid **prop drilling** by allowing data to be shared **globally** across the component tree.

---

### 🏗️ **Context Provider**

* The **Provider** component supplies the **data (value)** to its child components.
* It wraps the part of the app that needs access to that context.

**Example:**

```jsx
const UserContext = React.createContext();

function App() {
  return (
    <UserContext.Provider value={"John Doe"}>
      <Profile />
    </UserContext.Provider>
  );
}
```

---

### 👥 **Context Consumer**

* The **Consumer** reads and uses the data provided by the nearest Provider.

**Example using Consumer:**

```jsx
function Profile() {
  return (
    <UserContext.Consumer>
      {(value) => <h1>Hello, {value}!</h1>}
    </UserContext.Consumer>
  );
}
```

**OR using `useContext` hook (modern way):**

```jsx
function Profile() {
  const user = useContext(UserContext);
  return <h1>Hello, {user}!</h1>;
}
```

---

## 💭 **If You Don’t Pass a Value to the Provider, Does It Take the Default Value?**

✅ **Yes**, it does.

When you create a context using `React.createContext(defaultValue)`,
if **no `value` is passed** to the provider, React will use the **defaultValue** specified.

**Example:**

```jsx
const ThemeContext = React.createContext("light");

function App() {
  // No value passed to the Provider
  return (
    <ThemeContext.Provider>
      <Header />
    </ThemeContext.Provider>
  );
}

function Header() {
  const theme = useContext(ThemeContext);
  return <h2>Current Theme: {theme}</h2>;
}
```

**Output:**

```
Current Theme: light
```

> 🧠 Because no `value` prop was passed, React falls back to the **default value** `"light"`.

---

### 🧾 **Summary Table**

| Concept                   | Description                                         | Example                             |
| ------------------------- | --------------------------------------------------- | ----------------------------------- |
| **Prop Drilling**         | Passing props through multiple layers unnecessarily | Parent → Child → GrandChild         |
| **Lifting State Up**      | Moving shared state to the nearest common parent    | Shared `count` state in parent      |
| **Context Provider**      | Supplies data to children                           | `<Context.Provider value={data}>`   |
| **Context Consumer**      | Reads data from the Provider                        | `useContext(MyContext)`             |
| **Default Context Value** | Used when Provider doesn’t supply a value           | `React.createContext(defaultValue)` |

# ⚛️ Higher Order Component (HOC)

---

## 🔹 **Definition**

A **Higher Order Component (HOC)** is a **function that takes a component as an argument** and **returns an enhanced version** of that component.
It is used to **add or enhance functionality** to existing components **without modifying their core behavior**.

> HOC is a **Pure Function** as we are just adding/enhancing some extra feature.
> We are **not changing anything in the functionality** of the component that we are taking as argument.

---

## 🧩 **Implementing Promoted Label Display using HOC**

**Example:**

```jsx
const withPromotedLabel = (WrappedComponent) => {
  return (props) => (
    <div>
      <label className="promoted-label">Promoted</label>
      <WrappedComponent {...props} />
    </div>
  );
};

// Usage
const RestaurantCardWithPromoted = withPromotedLabel(RestaurantCard);
```

> ✅ The above HOC adds a “Promoted” label to any component, without modifying its internal logic.

---

# 🔽 Accordion

An **accordion** is a UI pattern where content can be **expanded and collapsed**.
It helps in managing large content by showing only what is necessary.

---

# 🆙 Uplifting the State

**Uplifting the state** means **moving the shared state to the nearest common ancestor** so that multiple components can share and update the same data.

---

# 🎛️ Controlled and Uncontrolled Components

| Type                       | Description                                                | Example                                                               |
| -------------------------- | ---------------------------------------------------------- | --------------------------------------------------------------------- |
| **Controlled Component**   | The form data is handled by **React state**.               | `jsx <input value={name} onChange={(e)=>setName(e.target.value)} /> ` |
| **Uncontrolled Component** | The form data is handled by the **DOM itself**, not React. | `jsx <input type="text" ref={inputRef} /> `                           |

> ✅ Controlled → React in control
> ⚙️ Uncontrolled → DOM in control

---

# 🔁 React’s One-Way Data Flow

React follows a **unidirectional data flow**:

> Grand Parent → Parent → Child → Grand Child

If we need to pass data from **Grand Parent** to **Grand Child**,
we must pass it **through Parent and Child**, even if they don’t need that data.

This concept is called **Prop Drilling**.

---

# 🌐 React Context

**React Context** solves the issue of **Prop Drilling** by allowing data to be shared across the entire component tree **without manually passing props** at every level.

---

## 🧠 Data Suitable for Context

Some data that can be needed across the entire app:

* Logged-in **user name**
* **Dark/Light** theme preference
* **Language** settings
* **Authentication** status

---

## 💡 Why Use Context?

Using **React Context** can help you avoid using **external state management libraries** (like Redux or Zustand)
— especially in **small or medium-sized apps**.
