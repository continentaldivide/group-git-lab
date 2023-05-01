import { useState } from "react"
import "../../Card.css"

export default function Card(props) {
    const [ image, setImage ] = useState("https://media.istockphoto.com/id/1328887289/photo/happy-dog.jpg?b=1&s=170667a&w=0&k=20&c=mp3L73BC14QUuk1EQaYtZ1-wwJRW9HAffcsGZNyMy_o=")
    return (
        <div className="Card">
        <img src={props.info.image || image} />
        <h3>{props.info.name}</h3>
        <p>{props.info.bio}</p>
        </div>
    )
}