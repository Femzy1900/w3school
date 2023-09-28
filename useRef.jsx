import ReactDOM from "react-dom/client"
import {useState , useEffect, useRef}from "react"


function favouriteColor() {
    const count = useRef(0)
    const [inputValue, setinputValue ] = useState("")

    useEffect(() => {
        count.current = count.current + 1
    }, )


    return (
        <>
        <input type="text" value={inputValue} onChange={(e) => setinputValue(e.target.value)} />
        <h1>Render: {count.current}</h1>
        </>
    )
}

export default favouriteColor