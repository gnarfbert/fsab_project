"use client";
import Link from "next/link";
import { useEffect, useState } from "react";


async function getList() {
    const res = await fetch("http://localhost:8080/task",  {method: "GET",});
    
    
    }

export default function Page() {
    return <header>
        <h1>
        Hello!
        </h1>
        <h2>Enter your task:</h2>
        <form>
            <input type="text" name= "title">
            </input>
        </form>
        <button type= "submit" onClick={getList}>Submit</button> <br></br>
        <button><Link href="..">Home</Link></button>
        </header>
}