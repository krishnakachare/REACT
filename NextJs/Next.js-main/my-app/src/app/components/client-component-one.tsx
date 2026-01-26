"use client"

import {useState} from "react"
import { ClientComponentTwo } from "./client-component-two"
import { ServerComponentOne } from "./server-component-one"

export const ClientComponentOne = () => {
    const [name, setName] = useState("Batman")
    return (
    <>
        <h1>Client component One!</h1>
        <ClientComponentTwo/>
        <ServerComponentOne/>
    </>
    )
}

