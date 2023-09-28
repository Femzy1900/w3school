import ReactDOM from "react-dom/client"
import {useState , useEffect}from "react"


function favouriteColor() {
    const [data, setData] = useState(null)

    useEffect(() => {
        fetch("https://femzy.dev");
            .then((res) => res.json())
            .then((data) => setData(data))
    }, [])


    return (
        <>
            { data && data.map((item) => {
                return <p key={item.id}>{item.title}</p>
            })}
        </>
    )
}

export default favouriteColor