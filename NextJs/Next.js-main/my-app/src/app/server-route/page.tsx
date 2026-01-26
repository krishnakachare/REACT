// Importing server code in server component
import ImageSlider from "../components/ImageSlider";

import { serverSideFunction } from "../utils/server-utils";
// import { clientSideFunction } from "../utils/client-utils";

export default function ServerRoutePage() {
  const result = serverSideFunction();
  // const result = clientSideFunction()
  
//   return <h1>Server Route {result}</h1>;
 return (
    <>
      <h1>Server Route {result}</h1>
      <ImageSlider />
    </>
  );
}