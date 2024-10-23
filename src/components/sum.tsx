"use client"
import { useNumberStore } from "@/store/num-store"

export default function Sum () {
    const myNum1 = useNumberStore(store => store.num1);
    const myNum2 = useNumberStore(store => store.num2);

    return (
        <>
        <h1>sum: {myNum1 + myNum2}</h1>
        </>
    )
}