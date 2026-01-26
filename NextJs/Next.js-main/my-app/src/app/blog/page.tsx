// Static nested routes
import {Metadata} from "next";
export const metadata: Metadata = {
  // title: "Blog"
  title:{
    absolute:"Just Blog" // Free from paren
  }
}
// localhost:3000/blog
export default async function Blog() {
  await new Promise((resolve)=>{
    setTimeout(()=>{
      resolve("Delay so show Loading Page")
    },2000)
  })
  return <h1>My Blog!</h1>;
}
