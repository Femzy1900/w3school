import ReactDOM from "react-dom/client"
import useState from "react"

function favouriteColor() {
    const [color, setColor ] = useState("red")

    return (
        <>
        <h1>My favourite color is {color}</h1>

        <button onClick={setColor("blue")}>change color</button>
        </>
    )
}

export default favouriteColor