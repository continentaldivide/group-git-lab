import Card from '../partials/Card'
import '../../about.css'

export default function About() {
    const cardInfo = [
        {
            name: "Brian",
            bio: "a",
            image: ""
        },
        {
            name: "Jaron",
            bio: "b",
            image: ""
        },
        {
            name: "Andrew",
            bio: "c",
            image: ""
        }
    ]

    return (
        <div className='card-container'>
                <Card info={cardInfo[0]}/>
                <Card info={cardInfo[1]}/>
                <Card info={cardInfo[2]}/>
        </div>
    )
}