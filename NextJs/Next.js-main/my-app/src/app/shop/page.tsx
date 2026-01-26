"use client";

import { useState } from "react";

export default function ShopPage() {
  console.log("Shop client component");
  const [name, setName] = useState("");

  return (
    <div>
      <h1>Shop</h1>
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <p>Hello, {name}!</p>
    </div>
  );
}