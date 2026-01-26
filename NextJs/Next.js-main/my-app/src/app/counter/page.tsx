// Can't use "use client"(converts to client component) and export metadata(server component feature) in same file. 

import { Counter } from "./counter";

export const metadata = {
    title: "Counter"
};

export default function CounterPage(){
    return <Counter/>
}