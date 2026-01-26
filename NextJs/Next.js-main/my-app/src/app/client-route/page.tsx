// Importing server code in client component

"use client";

// import { serverSideFunction } from "../utils/server-utils";
import { clientSideFunction } from "../utils/client-utils";

import React from "react";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// Usage of context provider
import { useTheme } from "../components/theme-provider";

export default function ClientRoutePage() {
  // const result = serverSideFunction();
  // return <h1>Client Route {result}</h1>;
  const theme = useTheme()
  const result = clientSideFunction()
  // const settings = {
  //   dots: true,
  // };
  return (
    <>
    {/* <div className="image-slider-container">
       <Slider {...settings}>
    //     <div>
    //       <img src="https://picsum.photos/400/200" />
    //     </div>
    //     <div>
    //       <img src="https://picsum.photos/400/200" />
    //     </div>
    //     <div>
    //       <img src="https://picsum.photos/400/200" />
    //     </div>
    //     <div>
    //       <img src="https://picsum.photos/400/200" />
    //     </div>
       </Slider>
    </div> */}
      {/* <h1 style={{color: theme.colors.primary}}>Client Router Page</h1> */}
      <h1 style={{color: theme.colors.secondary}}>Client Router Page</h1>
      <p>{result}</p>
    </>
  );
}