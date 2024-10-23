import { create } from "zustand";

type UserInputType = {
    num1: number,
    num2: number,
    modifyAllNums: Function
}

export const useNumberStore = create<UserInputType>((set) => ({
    num1: 2221210,
    num2: 222220,
    modifyAllNums: (num1: number, num2: number) => set({num1, num2}),
}))