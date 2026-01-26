// More specific message for Custom Not Found
export default function NotFound(){
    return(
        <div>
            <h2>Review Not Found</h2>
            <p>Could not find requested review</p>
        </div>
    )
}

// For path specific Custom Not Found Page (Mostly Used)

// "use client";
// import { usePathname } from "next/navigation";

// export default function NotFound(){
//     const pathname = usePathname();
//     const productId = pathname.split("/")[2];
//     const reviewId = pathname.split("/")[4];

//     return(
//         <div>
//             <h2>Review {reviewId} not found for product {productId}</h2>
//         </div>
//     )
// }