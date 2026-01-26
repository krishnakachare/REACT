import { type NextRequest } from "next/server";
import { headers, cookies  } from "next/headers";

export async function GET(request: NextRequest) {
    // Request Headers
  const requestHeaders = new Headers(request.headers);
  console.log(requestHeaders.get("Authorization"));

  const headersList = await headers();
  console.log("Authorization code:", headersList.get("Authorization"));

  // Cookies
  const theme = request.cookies.get("theme");
  console.log("cookies:", theme);

  const cookieStore = await cookies();
  cookieStore.set("resultsPerPage", "20");
  console.log("cookieStore", cookieStore.get("resultsPerPage"));

  // Response Headers
  return new Response("<h1>Profile API data</h1>", {
    headers: {
      "Content-Type": "text/html",
       "Set-Cookie": `theme=dark`,
    },
  });
}