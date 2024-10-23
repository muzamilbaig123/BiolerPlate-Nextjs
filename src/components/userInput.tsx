"use client"

import { useNumberStore } from "@/store/num-store";
import { useState } from "react"


export default function UsersInputs () {
    const {num1, num2, modifyAllNums} = useNumberStore();

    const [number1, setNumber1] = useState(num1);
    const [number2, setNumber2] = useState(num2);
    

    return (
        <>
        <label>
            Num1: 
            <input type="text"
            value={number1}
            onChange={(e) => setNumber1(Number(e.target.value))}
            style={{border: "2px solid black"}}
            />
        </label>  
        <label>
            Num2: 
            <input type="text"
            value={number2}
            onChange={(e) => setNumber2(Number(e.target.value))}
            style={{border: "2px solid black"}}
            />
        </label>   
        <button 
        style={{border: "2px solid black", margin: "0px 4px", padding: "2px"}}
        onClick={() => {
            modifyAllNums(number1, number2)
        }}
        >
        Total
        </button> 
        </>
    )
}

