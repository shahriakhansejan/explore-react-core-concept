import { useState } from "react"

export default function Counter(){
    const [count, setCount ] = useState(0);

    const handleAdd = () => {
        const newCount = count + 1
        setCount(newCount)
    }

    const handleReduce = () =>{
        const remainCount = count - 1
        setCount(remainCount)
    }
    return (
        <div style={{border: '2px solid blue', borderRadius: '10px'}}>
            <h2>Counter : {count}</h2>
            <button onClick={handleAdd}>Add</button>
            <button onClick={handleReduce}>Reduce</button>
        </div>
    )
}