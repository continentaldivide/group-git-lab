import { useState } from "react"
import "../../Card.css"

export default function Card() {
    const [name, setName ] = useState("Andrew")
    const [ bio, setBio ] = useState("this is Andrew's bio")
    return (
        <div className="Card">
        <p>I'm card</p>
        <p>{name}</p>
        <p>{bio}</p>
        </div>
    )
}