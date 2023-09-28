import ReactDOM from "react-dom/client"
import {useState , useEffect}from "react"
import useFetch from './useFetch'


function favouriteColor() {
    const [data] = useFetch("https://femzy.dev")

    return (
        <>
            { data && data.map((item) => {
                return <p key={item.id}>{item.title}</p>
            })}
        </>
    )
}

export default favouriteColor