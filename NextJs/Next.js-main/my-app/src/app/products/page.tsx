// Dynamic routes - use square bracket while name folder : [foldername]
// Link Component
import Link from "next/link";

// localhost:3000/products
export default function ProductList() {
  // For dynamic link
  const productId=100
  return (
    <>
    <Link href="/">Home</Link>
      <h1>Product List</h1>
      <h2><Link href="/products/1">Product 1</Link></h2>
      <h2><Link href="/products/2">Product 2</Link></h2>
      {/* replace overwrites the history */}
      <h2><Link href="/products/3" replace>Product 3</Link></h2> 
      <h2><Link href={`/products/${productId}`}>Product {productId}</Link></h2>
    </>
  );

}
