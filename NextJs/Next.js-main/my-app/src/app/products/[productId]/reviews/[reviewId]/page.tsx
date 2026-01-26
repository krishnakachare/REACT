// localhost:3000/products/{productId}/reviews/{reviewId}
// Navigating Programatically
import { notFound, redirect } from "next/navigation";

// Using Error Handing file 
function getRandomInt(count: number) {
  return Math.floor(Math.random() * count);
}
export default async function ProductReviews({ params,
 }: { 
   params: Promise<{productId: string; reviewId: string}> }) {
      const random = getRandomInt(2);
    if (random === 1) {
    throw new Error("Error loading review");
  }
    const {productId, reviewId} = await params

    // Using Custom Not Found Page With Personalised Message
    if(parseInt(reviewId)>1000){
      // notFound();
      redirect("/")
    }

   return <h1>Review {reviewId} for Product {productId}</h1>; 
}
