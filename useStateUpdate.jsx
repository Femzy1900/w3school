import ReactDOM from "react-dom/client"
import useState from "react"

function favouriteColor() {
    const [car, setCar ] = useState({
        brand: "Ford",
        model: "Mustang",
        year: "2023",
        color: "red"
    })

    function updateColor() {
        setCar(previousState => {
            return {...previousState, color: "blue"}
        })
    }

    return (
        <>
        <h1>My car brand is {car.brand}</h1>
        <p>
            It is a car {car.color} {car.model} from {car.year}
        </p>

        <button onClick={updateColor}>change color</button>
        </>
    )
}

export default favouriteColor