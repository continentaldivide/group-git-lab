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
            bio: "Hello! I am currently a student at GA studying to become a junior software developer. My hobbies are to eat, game, code, sleep.",
            image: "https://i.kym-cdn.com/entries/icons/original/000/029/028/Screen_Shot_2019-03-22_at_5.33.23_PM.png"
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