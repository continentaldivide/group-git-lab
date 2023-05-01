import Card from '../partials/Card'
import '../../about.css'

export default function About() {
    const cardInfo = [
        {
            name: "Brian",
            bio: "Pickleballing, horsebackriding desert rat who loves the sun but not as much as the bluelight during project week ",
            image: "https://t4.ftcdn.net/jpg/05/59/55/79/360_F_559557994_20hapwQDwxXxuTqIkRNAv7ZbHEx4YCLG.jpg"
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