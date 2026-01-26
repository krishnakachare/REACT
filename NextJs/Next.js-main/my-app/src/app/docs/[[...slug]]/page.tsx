// A slug is a dynamic part of a route (a placeholder in the file/folder name) that lets you create pages for different content.
// http://localhost:3000/docs/6/41
// http://localhost:3000/docs/routing/catch-all-segments
// double square bracket for optional catch all segments (so that http://localhost:3000/docs also valid page)
// Example [[...slug]] - /docs is valid page but for [...slug] is not found page
export default async function Docs({ params,
 }: { 
   params: Promise<{slug: string[]}> 
}){
    const {slug} = await params 
    if(slug?.length == 2){
        return <h1>Veiwing docs for Feature {slug[0]} and Concept {slug[1]}</h1>
    }else if(slug?.length == 1){
        return <h1>Veiwing docs for Feature {slug[0]}</h1>
    }
    return <h1>Doc Home Page!</h1> // use [[...slug]] to activate
}
