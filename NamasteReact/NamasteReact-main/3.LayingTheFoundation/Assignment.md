# ⚛️ JSX & React Component Assignment

---

## 💬 What is JSX?

**JSX (JavaScript XML)** is a syntax extension for JavaScript that allows you to write HTML elements inside JavaScript.
It makes React code more readable and expressive.

JSX converts HTML-like syntax into React function calls using **`React.createElement()`** under the hood.

✅ **Example:**

```jsx
const heading = <h1>Hello, React!</h1>;
```

is equivalent to:

```jsx
const heading = React.createElement("h1", {}, "Hello, React!");
```

---

## ⚡ Superpowers of JSX

1. **HTML + JavaScript Power** — You can write HTML and JS logic together.
2. **Prevents Cross-Site Scripting (XSS)** — JSX automatically escapes values before rendering.
3. **Developer-Friendly Syntax** — More readable and easier to debug.
4. **JS Expressions Inside `{ }`** — You can insert dynamic values using curly braces.
5. **Component Nesting** — You can directly use components like `<Header />` or `<Footer />`.
6. **Faster & Efficient Rendering** — Transpiles to `React.createElement()` calls optimized by React.

---

## 🧩 Role of `type` Attribute in `<script>` Tag

The `type` attribute in the `<script>` tag specifies the **type of script** being used.

### Common Options:

| Type               | Description                                                                                |
| ------------------ | ------------------------------------------------------------------------------------------ |
| `text/javascript`  | Default JavaScript type (can be omitted).                                                  |
| `module`           | Used for ES6 Modules. Enables import/export syntax, strict mode, and asynchronous loading. |
| `text/babel`       | Used when you are writing JSX/ES6 code that needs to be transpiled by Babel.               |
| `application/json` | Defines inline JSON data.                                                                  |

✅ **Example:**

```html
<script type="module" src="main.js"></script>
```

> Using `type="module"` allows modular code and prevents global namespace pollution.

---

## 🧠 `{TitleComponent}` vs `{<TitleComponent/>}` vs `{<TitleComponent></TitleComponent>}` in JSX

| Syntax                                | Meaning                                                                                                 | Usage                                 |
| ------------------------------------- | ------------------------------------------------------------------------------------------------------- | ------------------------------------- |
| `{TitleComponent}`                    | Refers to the **variable itself**, not rendering it. Use only if it holds JSX or another React element. | `{TitleComponent}`                    |
| `{<TitleComponent/>}`                 | **Invokes** the component as a self-closing tag. Most common and recommended syntax.                    | `{<TitleComponent/>}`                 |
| `{<TitleComponent></TitleComponent>}` | Same as above, but with **explicit opening and closing tags** (useful when nesting children).           | `{<TitleComponent></TitleComponent>}` |

✅ **Example:**

```jsx
const TitleComponent = () => <h1>Hello JSX!</h1>;

// All valid usages
{TitleComponent}                // Reference only
{<TitleComponent />}            // Recommended
{<TitleComponent></TitleComponent>} // Alternative syntax
```

---

# 🧑‍💻 Coding Assignment

---

### 🏗️ 1. Create a Nested Header Element using `React.createElement()`

✅ **Using React.createElement()**

```jsx
const header = React.createElement(
  "div",
  { className: "title" },
  [
    React.createElement("h1", {}, "This is Heading 1"),
    React.createElement("h2", {}, "This is Heading 2"),
    React.createElement("h3", {}, "This is Heading 3"),
  ]
);
```

---

### ⚛️ 2. Create the Same Element Using JSX

✅ **Using JSX**

```jsx
const headerJSX = (
  <div className="title">
    <h1>This is Heading 1</h1>
    <h2>This is Heading 2</h2>
    <h3>This is Heading 3</h3>
  </div>
);
```

---

### 🧩 3. Create a Functional Component of the Same with JSX

```jsx
const HeaderComponent = () => {
  return (
    <div className="title">
      <h1>This is Heading 1</h1>
      <h2>This is Heading 2</h2>
      <h3>This is Heading 3</h3>
    </div>
  );
};
```

---

### 🏷️ 4. Pass Attributes into the Tag in JSX

```jsx
const HeaderComponent = () => {
  return (
    <div className="title" id="header-section">
      <h1 style={{ color: "blue" }}>This is Heading 1</h1>
      <h2 title="subheading">This is Heading 2</h2>
      <h3 data-info="small-text">This is Heading 3</h3>
    </div>
  );
};
```

---

### 🔗 5. Composition of Components

(Add a component inside another)

```jsx
const TitleComponent = () => <h1>Welcome to React!</h1>;

const HeaderComponent = () => {
  return (
    <div className="title">
      <TitleComponent />
      <h2>Subheading Here</h2>
      <h3>Learning JSX Composition</h3>
    </div>
  );
};
```

---

### 🧠 6. `{TitleComponent}` vs `{<TitleComponent/>}` vs `{<TitleComponent></TitleComponent>}`

```jsx
const TitleComponent = () => <h1>React Rocks!</h1>;

const HeaderComponent = () => (
  <div className="header">
    {TitleComponent}                  {/* Reference only */}
    {<TitleComponent />}              {/* Proper render */}
    {<TitleComponent></TitleComponent>} {/* Equivalent */}
  </div>
);
```

---

# 🧱 Create a Header Component from Scratch using Functional Components with JSX

✅ **Requirements:**

* Add a **Logo** on the left
* Add a **Search Bar** in the middle
* Add a **User Icon** on the right
* Add **CSS** for layout and styling

---

### 🧩 Code:

```jsx
const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <img src="logo.png" alt="App Logo" />
      </div>

      <div className="search-bar">
        <input type="text" placeholder="Search..." />
      </div>

      <div className="user-icon">
        <img src="user.png" alt="User" />
      </div>
    </header>
  );
};
```

---

### 🎨 CSS Example

```css
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #f5f5f5;
  padding: 10px 20px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

.logo img {
  height: 40px;
}

.search-bar input {
  width: 300px;
  padding: 8px;
  border-radius: 5px;
  border: 1px solid #ccc;
}

.user-icon img {
  height: 40px;
  border-radius: 50%;
}
```