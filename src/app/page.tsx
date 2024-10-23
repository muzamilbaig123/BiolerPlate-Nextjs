import Counter from "@/components/count"
import Sum from "@/components/sum"
import UsersInputs from "@/components/userInput"

export default function Home () {
  return (
    <>
      <h1 className="text-center font-bold">Hello World</h1>

      <UsersInputs />
      <Sum />
      <Counter />
    </>
  )
}