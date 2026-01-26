// Making this a client component will also render server clients imported in this on browser.
"use client"

import {useState} from "react"
import NavLinks from "./nav-links"
import NavSearch from "./nav-search"

export default function NavBar(){
    console.log("Navbar rendered!")
    const [search, setSearch] = useState("")
    return (
        <>
        <NavLinks/>
        <NavSearch/>
        </>
    )
}