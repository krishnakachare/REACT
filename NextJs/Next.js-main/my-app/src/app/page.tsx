// localhost:3000/
// Link Component
import Link from "next/link";

export default function Home() {
  return (
    <>
      <h1>Welcome Home!</h1>
      <Link href="blog">Blog</Link>
      <Link href="products">Products</Link>
      <Link href="articles/breaking-news-123?lang=en">Read in English</Link>
      <Link href="articles/breaking-news-123?lang=fr">Read in French</Link>
      <Link href="/shop">Shop</Link>
      <Link href="/contact">Contact</Link>
    </>
  )
}
