// import { cookies } from "next/headers";

// // Server Component
// export default async function ContactPage() {
//   console.log("Contact server component");
//   // Dynamic Rendering
//   const cookieStore = await cookies();
//   const theme = cookieStore.get("theme");
//   console.log(theme);
// //   return <h1>Contact page</h1>;
//  return <h1>Contact page {new Date().toLocaleTimeString()}</h1>;
// }

import Link from "next/link";

export default function ContactPage() {
  return (
    <>
      <h1>Contact page</h1>
      <Link href="/contact/1">Contact 1</Link>
      <Link href="/contact/2">Contact 2</Link>
      <Link href="/contact/3">Contact 3</Link>
    </>
  );
}