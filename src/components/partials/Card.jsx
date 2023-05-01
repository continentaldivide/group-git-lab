import { useState } from "react"
import "../../Card.css"

export default function Card() {
    const [name, setName ] = useState("Andrew")
    const [ bio, setBio ] = useState("this is Andrew's bio")
    const [ image, setImage ] = useState("https://media.istockphoto.com/id/1328887289/photo/happy-dog.jpg?b=1&s=170667a&w=0&k=20&c=mp3L73BC14QUuk1EQaYtZ1-wwJRW9HAffcsGZNyMy_o=")
    return (
        <div className="Card">
        <img src={image} />
        <h3>{name}</h3>
        <p>{bio}</p>
        </div>
    )
}