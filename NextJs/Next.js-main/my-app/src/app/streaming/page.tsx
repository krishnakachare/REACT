import { Suspense } from "react";
import { Stream1 } from "./stream1";
import { Stream2 } from "./stream2";

export default function Streaming(){
    return (
        <div>
            <h1>Stream Components</h1>
            <Suspense fallback={<p>Loading Details of 1st Component...</p>}>
            <Stream1/>
            </Suspense>
            <Suspense fallback={<p>Loading Details of 2nd Component...</p>}>
            <Stream2/>
            </Suspense>
        </div>
    )
}