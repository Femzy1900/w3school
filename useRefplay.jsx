import ReactDOM from "react-dom/client"
import {useState , useEffect, useRef}from "react"


function favouriteColor() {
    const [inputValue, setinputValue ] = useState("")
    const previousInputValue = useRef(0)

    useEffect(() => {
        previousInputValue.current = inputValue
    }, [inputValue])


    return (
        <>
        <input type="text" value={inputValue} onChange={(e) => setinputValue(e.target.value)} />
        <h1>Render: {count.current}</h1>
        <h1>previousInputValue: {previousInputValue.current}</h1>

        </>
    )
}

export default favouriteColor