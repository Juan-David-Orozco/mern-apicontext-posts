import { useContext } from 'react'
import { context } from '../context/postContext'

export function HomePage() {

  const myContext = useContext(context)
  console.log(myContext)

  const onClick = () => {
    console.log("click")
  }

  return (
    <div>
      HomePage
      <button onClick={onClick}>
        Add
      </button>
    </div>
  )
}
