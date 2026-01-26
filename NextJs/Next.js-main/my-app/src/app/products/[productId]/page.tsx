// localhost:3000/products/{productId}: localhost:3000/products/1 or localhost:3000/products/iphone
// Using dynamic metadata
import { Metadata } from "next";

type Props = {
  params: Promise <{productId: string}>
}

import { notFound } from "next/navigation";

export const generateMetadata = async ({params}: Props): Promise<Metadata> => {
  const id = (await params).productId
  const title = await new Promise ((resolve)=>{
    setTimeout(()=>{
      resolve(`Iphone ${id}`)
    }, 100)
   })
  return {
    // title: `Product ${id}`,
    title: `Product ${title}`
  }
}

// use params to display dynamic content
export default async function ProductDetails({ params,
 }: Props) {
   const productId = (await params).productId 
   // Using Custom Not Found Page
   if(parseInt(productId)>1000){
         notFound();
       }
   return <h1>Details about the product {productId}</h1>; 
}
